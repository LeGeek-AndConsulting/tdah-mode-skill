// tdah-mode : hook SessionStart du mode « toujours actif ».
//
// Ne fait rien tant que le fichier drapeau .tdah-mode-always n'existe pas
// dans $CLAUDE_CONFIG_DIR ou dans ~/.claude. S'il existe, affiche les règles
// du SKILL.md voisin (sans l'en-tête YAML ni les sections « Pourquoi Ces
// Règles », « Exemple » et « Crédits ») pour que Claude les applique dès le début de la session.
//
// Claude Code ne transmet en entier qu'une sortie de hook de moins de
// 10 000 caractères. Au-delà de LIMITE, le hook envoie seulement une consigne
// courte qui demande de charger le skill.
//
// Aucun accès réseau, aucune écriture. Le script sort toujours avec le code 0 :
// il ne doit jamais empêcher une session de s'ouvrir.

import { existsSync, readFileSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const DRAPEAU = ".tdah-mode-always";
const LIMITE = 9500;

process.exitCode = 0;
process.on("uncaughtException", () => {
  process.exitCode = 0;
});
process.stdout.on("error", () => {
  process.exitCode = 0;
});

function cheminDuDrapeau() {
  const dossiers = [];
  if (process.env.CLAUDE_CONFIG_DIR) dossiers.push(process.env.CLAUDE_CONFIG_DIR);
  dossiers.push(join(homedir(), ".claude"));
  for (const dossier of dossiers) {
    const fichier = resolve(dossier, DRAPEAU);
    if (existsSync(fichier)) return fichier;
  }
  return null;
}

// Retire une section « ## Titre » entière (jusqu'à la section suivante ou la fin).
function sansSection(texte, titre) {
  const lignes = texte.split("\n");
  const out = [];
  let coupe = false;
  for (const l of lignes) {
    if (l.startsWith("## ")) coupe = l.includes(titre);
    if (!coupe) out.push(l);
  }
  return out.join("\n").trim();
}

function sansEnTete(texte) {
  const lignes = texte.replace(/^﻿/, "").split(/\r?\n/);
  if (lignes[0].trim() !== "---") return lignes.join("\n").trim();
  for (let i = 1; i < lignes.length; i++) {
    if (lignes[i].trim() === "---") return lignes.slice(i + 1).join("\n").trim();
  }
  // En-tête jamais refermé : on n'affiche rien plutôt qu'un fichier cassé.
  return "";
}

try {
  const drapeau = cheminDuDrapeau();
  if (drapeau) {
    const ici = dirname(fileURLToPath(import.meta.url));
    const skill = join(ici, "..", "skills", "tdah-mode", "SKILL.md");
    if (existsSync(skill)) {
      let corps = sansEnTete(readFileSync(skill, "utf8"));
      corps = ["Pourquoi Ces Règles", "Exemple", "Crédits"].reduce(sansSection, corps);
      const tete = `TDAH-MODE ACTIF (toujours actif) — supprimez ${drapeau} pour couper`;
      const credit = "Style ModeTdah 🧠, LeGeek AndConsulting. Notice complète : LICENSE du plugin.";
      let sortie = corps ? `${tete}\n\n${corps}\n\n${credit}\n` : "";
      if (sortie.length > LIMITE) {
        sortie = `${tete}\n\nChargez le skill tdah-mode (outil Skill) dès la première réponse et appliquez-le pendant toute la session, jusqu'à « mode normal » ou « stop tdah-mode ».\n`;
      }
      if (sortie) process.stdout.write(sortie);
    }
  }
} catch {
  // Silence volontaire : le hook ne bloque jamais la session.
}

process.exitCode = 0;

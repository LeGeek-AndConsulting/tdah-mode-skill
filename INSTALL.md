# 📥 Installation

Choisissez **Une Seule** Méthode Selon Votre Outil.

## 1️⃣ Claude Code — Copie Du Dossier

```bash
mkdir -p ~/.claude/skills
unzip tdah-mode.zip -d ~/.claude/skills/
```

Ou Copiez Directement Le Dossier `skills/tdah-mode` De Ce Dépôt Dans `~/.claude/skills/`. Ouvrez Une Nouvelle Session.

## 2️⃣ Claude Code — Plugin Via La Marketplace

```bash
claude plugin marketplace add LeGeek-AndConsulting/tdah-mode-skill
claude plugin install tdah-mode@tdah-mode
```

Ouvrez Une Nouvelle Session. Cette Méthode Permet Aussi Le **Mode Toujours Actif** (§4).

## 3️⃣ Claude.ai — Import Du .zip

1. Téléchargez `tdah-mode.zip` ( Ne Le Décompressez Pas !).
2. Ouvrez **Réglages › Skills** ( Nom Exact Du Menu Selon La Version De Claude.ai) Et Importez le `.zip`.
3. Activez Le Skill **tdah-mode**.

## 4️⃣ ChatGPT, Gemini, Mistral Et Les Autres

Ces Outils N'ont Pas De Format De Skill : Utilisez Le Prompt Universel.

1. Ouvrez [ PROMPT-UNIVERSEL.md ](PROMPT-UNIVERSEL.md).
2. Copiez Tout Le Texte.
3. Collez-Le Dans Les **Instructions Personnalisées** De Votre Outil.

Le Style Est Actif Dès Que Les Instructions Sont Enregistrées, Sans Rien Taper.

---

## ▶️ Activer Et ⏹️ Arrêter

- Activer : Tapez `/tdah-mode`, Ou Écrivez Simplement « Tdah-Mode » Dans Votre Message, Même Dicté.
- Arrêter : Écrivez « Mode Nrmal » Ou « Stop Tdah-Mode ». Une Ligne De Confirmation S'Affiche, Puis Le Style Habituel Reprend.

## ♾️ Mode Toujours Actif ( Optionnel )

Pour Claude Code Installé En Plugin ( Méthode 2️⃣ ). Le Style Se Charge Tout Seul à Chaque Session, Sans Taper `/tdah-mode`.

```bash
touch ~/.claude/.tdah-mode-always   # activer
rm ~/.claude/.tdah-mode-always      # couper
```

Avec `CLAUDE_CONFIG_DIR` Défini, Le Fichier Se Met Dans Ce Dossier. Le Hook a Besoin De Node.js, Ne Fait Aucun Appel Réseau Et Ne Bloque Jamais L'ouverture D'Une Session.

"✌️🤓✌️"

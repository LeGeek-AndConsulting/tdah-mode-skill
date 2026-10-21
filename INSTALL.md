# 📥 Installation

Choisissez **une seule** méthode selon votre outil.

## 1️⃣ Claude Code — Copie Du Dossier

```bash
mkdir -p ~/.claude/skills
unzip tdah-mode.zip -d ~/.claude/skills/
```

Ou copiez directement le dossier `skills/tdah-mode` de ce dépôt dans `~/.claude/skills/`. Ouvrez une nouvelle session.

## 2️⃣ Claude Code — Plugin Via La Marketplace

```bash
claude plugin marketplace add LeGeek-AndConsulting/tdah-mode-skill
claude plugin install tdah-mode@tdah-mode
```

Ouvrez une nouvelle session. Cette méthode permet aussi le **mode toujours actif** (§4).

## 3️⃣ claude.ai — Import Du .zip

1. Téléchargez `tdah-mode.zip` (ne le décompressez pas).
2. Ouvrez **Réglages › Skills** (nom exact du menu selon la version de claude.ai) et importez le `.zip`.
3. Activez le skill **tdah-mode**.

## 4️⃣ ChatGPT, Gemini, Mistral Et Les Autres

Ces outils n'ont pas de format de skill : utilisez le prompt universel.

1. Ouvrez [PROMPT-UNIVERSEL.md](PROMPT-UNIVERSEL.md).
2. Copiez tout le texte.
3. Collez-le dans les **instructions personnalisées** de votre outil.

Le style est actif dès que les instructions sont enregistrées, sans rien taper.

---

## ▶️ Activer Et ⏹️ Arrêter

- Activer : tapez `/tdah-mode`, ou écrivez simplement « tdah-mode » dans votre message, même dicté.
- Arrêter : écrivez « mode normal » ou « stop tdah-mode ». Une ligne de confirmation s'affiche, puis le style habituel reprend.

## ♾️ Mode Toujours Actif (Optionnel)

Pour Claude Code installé en plugin (méthode 2️⃣). Le style se charge tout seul à chaque session, sans taper `/tdah-mode`.

```bash
touch ~/.claude/.tdah-mode-always   # activer
rm ~/.claude/.tdah-mode-always      # couper
```

Avec `CLAUDE_CONFIG_DIR` défini, le fichier se met dans ce dossier. Le hook a besoin de Node.js, ne fait aucun appel réseau et ne bloque jamais l'ouverture d'une session.

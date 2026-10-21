# 🧠⚡ TDAH-MODE

**Un style de réponse pour l'IA, pensé pour les personnes avec un TDAH.**
Vous dictez une demande en vrac, l'IA la remet au propre, traite chaque point et coche ce qui est fait. Vous n'avez plus à vous répéter.

🇬🇧 English version: [README.en.md](README.en.md)

> ⚠️ **Style D'Écriture, Pas Un Outil Médical.** tdah-mode change seulement la forme des réponses. Il ne pose aucun diagnostic de TDAH et ne remplace pas l'avis d'un professionnel de santé.

---

## 🎯 Ce Que Fait Le Skill

- 📋 **Votre Demande Remise Au Propre** : chaque point de votre message devient une ligne numérotée, dans l'ordre. Rien d'oublié, rien d'ajouté.
- ✅ **Chaque Point Coché À La Fin** : ✅ fait, ⚠ partiel, ❌ pas fait (avec la raison), ⏭ attend quelque chose de vous, 🛑 attend votre accord.
- ✂️ **La Réponse D'Abord** : la première ligne donne le résultat ou la prochaine action. Pas d'introduction, pas de résumé en plus.
- 🔢 **3 Options Au Maximum** : la recommandée en premier, avec ⭐.
- 👉 **Une Seule Prochaine Action** : quelque chose de court que vous seul pouvez faire.
- 🔍 **Rien D'Inventé** : pas de prix, de délai ou de chiffre sortis de nulle part. L'IA écrit « À Confirmer ».
- 🛑 **Accord Avant Le Risque** : avant de supprimer, publier ou envoyer quoi que ce soit, l'IA vous demande.
- 🔠 **Facile À Lire** : phrases courtes, vouvoiement, Title Case (une majuscule à chaque mot) et un emoji en début de ligne. Le code, les liens et les noms de marques ne sont jamais touchés.

Le style reste actif pendant toute la conversation, même quand vous changez de sujet.

---

## 👀 Avant / Après

Message dicté :

> « alors euh mon wifi coupe tout le temps le soir, je voudrais savoir si je dois changer de box, et aussi sauvegarder les photos de mon iPhone avant de le donner »

### ❌ Avant (Réponse Classique)

```
Bien sûr ! Les coupures de Wi-Fi peuvent avoir de nombreuses causes. Tout d'abord,
il faut savoir que les ondes Wi-Fi sont sensibles aux interférences... (trois
paragraphes plus loin)... Concernant votre iPhone, il existe plusieurs méthodes de
sauvegarde, chacune avec ses avantages... N'hésitez pas si vous avez d'autres questions !
```

Le point « changer de box » est noyé, et on ne sait pas quoi faire en premier.

### ✅ Après (Avec tdah-mode)

```
📋 Votre Demande
1. ⚠ **Wi-Fi Qui Coupe Le Soir** : Cause Probable, Non Vérifiée : Les Voisins Utilisent Le Même Canal. Test : Changez Le Canal Dans L'Interface De La Box.
2. ⏭ **Changer De Box** : Pas Avant Le Test Du Point 1, Sinon Vous Risquez De Payer Pour Rien.
3. ✅ **Photos De L'iPhone** : Réglages › Votre Nom › iCloud › Photos, Puis Attendez La Fin De L'Envoi Avant De Le Réinitialiser.
👉 À Vous : Changez Le Canal Wi-Fi Ce Soir Et Dites-Moi Si Ça Coupe Encore.
```

Chaque point de la demande a sa ligne et son statut. La dernière ligne dit quoi faire.

---

## 📥 Installation

Choisissez **une seule** méthode selon votre outil.

### 1️⃣ Claude Code — Copie Du Dossier

1. 📦 Téléchargez [tdah-mode.zip](https://legeekandconsulting.com/downloads/tdah-mode.zip).
2. 📂 Décompressez-le dans votre dossier de skills :

   ```bash
   mkdir -p ~/.claude/skills
   unzip tdah-mode.zip -d ~/.claude/skills/
   ```

   Quand le dépôt GitHub sera publié, vous pourrez aussi y copier le dossier `skills/tdah-mode` dans `~/.claude/skills/`.
3. 🔄 Ouvrez une nouvelle session Claude Code.

### 2️⃣ Claude Code — Plugin Via La Marketplace (Bientôt Disponible)

> ⏳ Le dépôt GitHub `LeGeek-AndConsulting/tdah-mode-skill` n'est pas encore publié : ces commandes ne marchent pas encore. En attendant, utilisez la méthode 1️⃣.

```bash
claude plugin marketplace add LeGeek-AndConsulting/tdah-mode-skill
claude plugin install tdah-mode@tdah-mode
```

Puis ouvrez une nouvelle session. Cette méthode permet aussi le **mode toujours actif** (voir plus bas).

### 3️⃣ claude.ai — Import Du .zip

1. 📦 Téléchargez [tdah-mode.zip](https://legeekandconsulting.com/downloads/tdah-mode.zip) (ne le décompressez pas).
2. ⚙️ Sur claude.ai, ouvrez **Réglages › Skills** (le nom exact du menu peut changer selon la version de claude.ai) et importez le fichier `.zip`.
3. ✅ Activez le skill **tdah-mode** dans la liste.

Si la partie Skills n'apparaît pas, activez d'abord l'exécution de code dans les mêmes réglages.

### 4️⃣ ChatGPT, Gemini, Mistral Et Les Autres — Via Le Prompt Universel

Ces outils n'utilisent pas le format des skills Claude. Ils passent par le prompt universel, une version courte des règles.

1. 📄 Téléchargez [tdah-mode-prompt-universel.txt](https://legeekandconsulting.com/downloads/tdah-mode-prompt-universel.txt) (le même texte que `PROMPT-UNIVERSEL.md` du dépôt).
2. 📋 Copiez tout le texte.
3. ⚙️ Collez-le dans les **instructions personnalisées** de votre outil (le nom exact du menu change d'un outil à l'autre).

Le prompt fait moins de 1 500 caractères, pour tenir dans la zone d'instructions de ChatGPT.

---

## ▶️ Activer

Dans Claude Code ou sur claude.ai, tapez :

```
/tdah-mode
```

Vous pouvez aussi écrire simplement « tdah-mode » dans votre message, même au milieu d'une phrase dictée. Avec le plugin, Claude Code peut afficher le nom complet `/tdah-mode:tdah-mode` : les deux fonctionnent pareil.

Avec le prompt universel, rien à taper : le style est actif dès que les instructions sont enregistrées.

## ⏹️ Arrêter

Écrivez **« mode normal »** ou **« stop tdah-mode »**. L'IA répond par une seule ligne, `🧠 tdah-mode Désactivé.`, puis reprend son style habituel.

## ♾️ Mode Toujours Actif (Optionnel, Bientôt Disponible)

Pour Claude Code installé **en plugin** (méthode 2️⃣, pas encore disponible). Le style se charge tout seul à chaque session, sans taper `/tdah-mode`.

1. 🟢 Créez le fichier drapeau (macOS / Linux) :

   ```bash
   touch ~/.claude/.tdah-mode-always
   ```

2. 🔄 Ouvrez une nouvelle session.

Pour couper le mode toujours actif, supprimez ce fichier :

```bash
rm ~/.claude/.tdah-mode-always
```

Si vous utilisez la variable `CLAUDE_CONFIG_DIR`, le fichier se met dans ce dossier-là. Le hook a besoin de Node.js. Il ne fait aucun appel réseau et ne bloque jamais l'ouverture d'une session.

---

## 📁 Contenu Du Dépôt

Le fichier `tdah-mode.zip` du site contient seulement `SKILL.md`, `LICENSE`, `README.md` et `README.en.md`. Le reste ci-dessous est dans le dépôt GitHub (publication à venir).

- 🧠 **skills/tdah-mode/** : le skill (SKILL.md) et sa licence.
- 📄 **PROMPT-UNIVERSEL.md** : la version courte pour les autres outils.
- 🔌 **.claude-plugin/** : les fichiers du plugin et de la marketplace Claude Code.
- ♾️ **hooks/** : le mode toujours actif (optionnel).
- 🧪 **evals/** : 12 cas de test et une grille de notation, à lancer à la main.

---

## 🙏 Crédits

- 🧩 **i-have-adhd** d'Ayoub Ghriss, licence MIT : https://github.com/ayghri/i-have-adhd. Les règles de forme (persistance, action d'abord, exceptions, contrôle avant envoi) en sont adaptées et traduites.
- 📚 **The Adult ADHD Tool Kit** (Ramsay & Rostain) : le livre qui a inspiré i-have-adhd.
- 🧠 **Style tdah-mode, Fusion Et Traduction** : LeGeek AndConsulting — https://legeekandconsulting.com/tdah

## ⚖️ Licence

MIT. Voir [LICENSE](LICENSE). Les deux mentions de copyright (LeGeek AndConsulting et Ayoub Ghriss) doivent rester dans toute copie.

# 🧪 Tests À La Main

12 cas pour vérifier que tdah-mode fait ce qu'il promet. Pas de script : vous les passez à la main, en comparant les réponses **avec** et **sans** tdah-mode.

## 📁 Les Fichiers

- 📄 **cas.jsonl** : un cas par ligne (`id`, `categorie`, `contexte`, `message`, `risque`, `criteres`).
- 📏 **grille.md** : le barème sur 8 critères, les bloquants et le tableau des critères par cas.

## ▶️ Lancer Un Cas

1. 🆕 **Session Sans tdah-mode** : ouvrez une nouvelle session. Vérifiez que le mode toujours actif est coupé (le fichier `~/.claude/.tdah-mode-always` ne doit pas exister), sinon la comparaison ne veut rien dire.
2. 🎬 **Mise En Place** : recréez la situation du champ `contexte` (par exemple, quelques échanges avant, ou un dépôt de test pour le cas `action-destructrice`).
3. 💬 **Message** : collez le champ `message` tel quel, sans le corriger.
4. 📝 **Copie** : gardez la réponse dans un fichier texte.
5. 🧠 **Session Avec tdah-mode** : ouvrez une autre nouvelle session, tapez `/tdah-mode`, puis refaites les étapes 2 à 4.
6. 📏 **Notation** : notez les deux réponses avec `grille.md`, si possible sans savoir laquelle vient de quelle session.

Pour le cas `mode-normal`, envoyez aussi un message ordinaire juste après, pour vérifier que le style habituel revient.

## 🔒 Prudence

- 🧪 **Dépôt De Test** : pour `action-destructrice`, utilisez un dossier jetable, jamais un vrai projet.
- 🔁 **Plusieurs Essais** : une IA ne répond pas deux fois pareil. Passez chaque cas au moins 3 fois et gardez la moyenne.
- 🏷️ **Même Modèle** : comparez toujours avec le même modèle et les mêmes réglages, et notez lesquels dans vos résultats.

## 📊 Noter Les Résultats

Un tableau simple suffit :

| Cas | Essai | Sans tdah-mode | Avec tdah-mode | Bloquant ? | Remarque |
| --- | --- | --- | --- | --- | --- |
| dicte-3-points | 1 | … / 14 | … / 14 | Oui / Non | |

Le total possible dépend du cas : 2 points par critère marqué `●` dans `grille.md` (14 pour `dicte-3-points`).

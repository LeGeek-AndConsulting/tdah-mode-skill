# 🧠⚡ TDAH-MODE

**An AI response style built for people with ADHD (TDAH in French).**
You dictate a messy request; the AI restates it as a numbered list, handles every point, and checks each one off at the end. You never have to repeat yourself.

🇫🇷 Version française : [README.md](README.md)

> ⚠️ **A Writing Style, Not A Medical Tool.** tdah-mode only changes how answers are shaped. It does not diagnose ADHD and does not replace advice from a health professional.

The skill itself is written in French and answers in French.

## 🎯 What It Does

- 📋 **Your Request, Restated** : one numbered line per point, in order, nothing dropped, nothing added.
- ✅ **Every Point Checked Off** : ✅ done, ⚠ partial, ❌ not done (with the reason), ⏭ waiting on you, 🛑 waiting for your approval.
- ✂️ **Answer First** : the first line is the result or the next action. No intro, no recap.
- 🔢 **3 Options At Most** : the recommended one first, marked ⭐.
- 🔍 **Nothing Invented** : no made-up prices, deadlines or numbers.
- 🛑 **Approval Before Risk** : deleting, publishing or sending always asks first.

## 📥 Install (Pick One)

1. **Claude Code, Folder Copy** : unzip [tdah-mode.zip](https://legeekandconsulting.com/downloads/tdah-mode.zip) into `~/.claude/skills/`, then start a new session.
2. **Claude Code, Plugin (Coming Soon)** : the GitHub repository is not published yet, so these commands do not work yet. Use option 1 for now.

   ```bash
   claude plugin marketplace add LeGeek-AndConsulting/tdah-mode-skill
   claude plugin install tdah-mode@tdah-mode
   ```

3. **claude.ai** : upload [tdah-mode.zip](https://legeekandconsulting.com/downloads/tdah-mode.zip) as-is in Settings › Skills (the exact menu name may change between claude.ai versions), then enable it.
4. **ChatGPT, Gemini, Mistral And Others** : via the universal prompt. Paste [tdah-mode-prompt-universel.txt](https://legeekandconsulting.com/downloads/tdah-mode-prompt-universel.txt) into the tool's custom instructions.

## ▶️ Start / ⏹️ Stop

- **Start** : type `/tdah-mode` (the plugin may show it as `/tdah-mode:tdah-mode`).
- **Stop** : say « mode normal » or « stop tdah-mode » (« normal mode » works too).

## ♾️ Always-On (Optional, Plugin Only, Coming Soon)

```bash
touch ~/.claude/.tdah-mode-always   # turn on
rm ~/.claude/.tdah-mode-always      # turn off
```

A SessionStart hook then loads the rules in every session. It needs Node.js, makes no network calls, and always exits with code 0. If you set `CLAUDE_CONFIG_DIR`, put the file in that folder.

## 🙏 Credits

- **i-have-adhd** by Ayoub Ghriss, MIT License : https://github.com/ayghri/i-have-adhd (form rules adapted and translated).
- **The Adult ADHD Tool Kit** (Ramsay & Rostain), the book that inspired i-have-adhd.
- **tdah-mode Style, Merge And French Translation** : LeGeek AndConsulting — https://legeekandconsulting.com/tdah

## ⚖️ License

MIT. See [LICENSE](LICENSE).

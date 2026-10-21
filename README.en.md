```markdown
# 🧠⚡ TDAH-MODE

**An AI Response Style Built For People With ADHD (TDAH In French).**
You Dictate A Messy Request; The AI Restates It As A Numbered List, Handles Every Point, And Checks Each One Off At The End. You Never Have To Repeat Yourself.

🇫🇷 Version Française : [README.md](README.md)

> ⚠️ **A Writing Style, Not A Medical Tool.** Tdah-Mode Only Changes How Answers Are Shaped. It Does Not Diagnose ADHD And Does Not Replace Advice From A Health Professional.

The Skill Itself Is Written In French And Answers In French.

## 🎯 What It Does

- 📋 **Your Request, Restated** : One Numbered Line Per Point, In Order, Nothing Dropped, Nothing Added.
- ✅ **Every Point Checked Off** : ✅ Done, ⚠ Partial, ❌ Not Done (With The Reason), ⏭ Waiting On You, 🛑 Waiting For Your Approval.
- ✂️ **Answer First** : The First Line Is The Result Or The Next Action. No Intro, No Recap.
- 🔢 **3 Options At Most** : The Recommended One First, Marked ⭐.
- 🔍 **Nothing Invented** : No Made-Up Prices, Deadlines Or Numbers.
- 🛑 **Approval Before Risk** : Deleting, Publishing Or Sending Always Asks First.

## 📥 Install (Pick One)

1. **Claude Code, Folder Copy** : Unzip [tdah-mode.zip](https://legeekandconsulting.com/downloads/tdah-mode.zip) Into `~/.claude/skills/`, Then Start A New Session.
2. **Claude Code, Plugin (Coming Soon)** : The GitHub Repository Is Not Published Yet, So These Commands Do Not Work Yet. Use Option 1 For Now.

   ```bash
   claude plugin marketplace add LeGeek-AndConsulting/tdah-mode-skill
   claude plugin install tdah-mode@tdah-mode
   ```

3. **claude.ai** : Upload [tdah-mode.zip](https://legeekandconsulting.com/downloads/tdah-mode.zip) As-Is In Settings › Skills (The Exact Menu Name May Change Between Claude.ai Versions), Then Enable It.
4. **ChatGPT, Gemini, Mistral And Others** : Via The Universal Prompt. Paste [tdah-mode-prompt-universel.txt](https://legeekandconsulting.com/downloads/tdah-mode-prompt-universel.txt) Into The Tool's Custom Instructions.

## ▶️ Start / ⏹️ Stop

- **Start** : Type `/tdah-mode` (The Plugin May Show It As `/tdah-mode:tdah-mode`).
- **Stop** : Say « Mode Normal » Or « Stop Tdah-Mode » (« Normal Mode » Works Too).

## ♾️ Always-On (Optional, Plugin Only, Coming Soon)

```bash
touch ~/.claude/.tdah-mode-always   # Turn On
rm ~/.claude/.tdah-mode-always      # Turn Off
```

A SessionStart Hook Then Loads The Rules In Every Session. It Needs Node.js, Makes No Network Calls, And Always Exits With Code 0. If You Set `CLAUDE_CONFIG_DIR`, Put The File In That Folder.

## 🙏 Credits

- 🎨 **Tdah-Mode Style, Merge And French Translation** : LeGeek AndConsulting — https://legeekandconsulting.com/tdah

## ⚖️ License

MIT. See [LICENSE](LICENSE).

[![gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Hoppererin/gta6-meme-x-01-v2/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Hoppererin/gta6-meme-x-01-v2/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

# WANTED: The 13-Year Wait

A GTA 6 meme for the gta6-meme-x-01 bounty, built as a fake official document — the format the top entries use — instead of a generic caption meme.

## The meme

`meme.png` (1600×1600) — a vintage Leonida County WANTED poster. The make.fun ghost is the mugshot in the middle: white ghost, sparkle eyes, holding a game controller like it was caught red-handed. The charges, in big programmatic lettering (no blurry AI text):

- **WANTED — THE 13-YEAR WAIT**
- **CRIME: Making 4,811 days disappear**
- **LAST SEEN: Los Santos, 2013**
- **REWARD: $500 — paid by my AI agent on make.fun**

Five wanted stars, aged-paper texture, double-ruled border. The ghost is part of the document — its photo in the frame, its name on the reward line — not a sticker in a corner.

## The post

The post's text is in `POST-TEXT.txt`: the poster joke, the make.fun pitch (you and your AI agent can win real money on make.fun), the tag @makefunai, the bounty link, and the play code `makefun-cookie-castle-barge`. Post `meme.png` with that text from a public X account, then put the post's address in `POST.json` (it currently holds a placeholder — replace it with the real status URL before submitting).

## Files

- `meme.png` — the meme picture (the post's first picture, the one the judge sees)
- `POST-TEXT.txt` — the post's text, ready to paste on X
- `POST.json` — the post's address (`{"url": "https://x.com/<handle>/status/<id>"}`); a placeholder until the post is live
- `main.ts` — the entry program: validates `POST.json` and copies it to `/output` (Node 22 stdlib only, never deletes the output directory)

## License

MIT — see [LICENSE](LICENSE).

---

Entered on [make.fun](https://make.fun/r/dhj53q2r) — built for the gta6-meme-x-01 bounty.

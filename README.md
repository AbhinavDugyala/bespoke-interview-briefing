# Bespoke Labs interview briefing

Same-day prep for **Dugyala Abhinav**'s Machine Learning Engineer conversation at Bespoke Labs (Expert Network, ER000009).

The interview is a behavioural call about **RL task design for coding agents**. The app turns that JD into spoken answers mapped onto Handshake **Project Dynamo** work: Harbor tasks, Terminal-Bench 2 environments, hidden oracles, pytest verifiers, pass@k, and reward hacking.

Personal range is on **Projects**: **myNoteBook** (MERN notes app, JWT/bcrypt/Joi) and **Deep Gastro Insight** (first-author GERD CNN study, GoogLeNet 91.2% on 10,662 images). Lead with Dynamo. Use those two when they ask what you built or about ML.

## Run locally

Needs Node 20+ and npm.

```bash
npm install
npm run build
npm start
```

Open [http://127.0.0.1:43147](http://127.0.0.1:43147). Use the production server (`npm start`) so every page is already compiled. `npm run dev` compiles each route on first click and feels slow.

| Route | Use it for |
| --- | --- |
| `/` | 90-second opener, countdown, numbers to fill |
| `/match` | JD line-by-line mapped to Dynamo |
| `/stories` | Two STAR stories plus a Turing/Deccan backup |
| `/walkthrough` | 30–60s Dynamo steps and a 1–2 min any-TB2-task script |
| `/projects` | myNoteBook (full stack) and Deep Gastro Insight (ML research) |
| `/questions` | Starred question bank with spoken answers |
| `/playbook` | Harbor anatomy, stump patterns, RL vocab |
| `/gaps` | Honest gaps and questions to ask them |
| `/drill` | Out-loud flashcards |

Numbers you type on Tonight stay in **localStorage** on that browser only.

The layout is built for phone, tablet, and desktop: wrapping nav with 44px tap targets, stacked tables on small screens, and no horizontal page scroll. Safe-area insets are respected on notched phones.

## How to use tonight

1. Fill submitted / accepted task counts and the one task you will narrate.
2. Read the opener out loud twice.
3. Rehearse Stories 1 and 2.
4. Read How I ship: 60-second Dynamo steps, then the 1–2 minute any-TB2 script. Fill Tonight so the 60 seconds is your task.
5. Skim Projects once so notebook and GERD are ready if they ask for range.
6. Drill the starred questions. Stop adding new material 30 minutes before Meet.

## Honest source note

The resume PDF path did not land in the environment that built this. Profile bullets are reconstructed from public LinkedIn and from the Dynamo high-level guide you attached. If a date, title, or metric on your resume differs, your resume wins — do not invent counts on the call.

This is interview prep for **you**. It is not Handshake or Bespoke internal documentation.

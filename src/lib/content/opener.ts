export const NINETY_SECOND_OPENER = `I'm Abhinav. Day to day I author Terminal-Bench-style tasks for coding agents on Handshake's Project Dynamo.

That work is the same loop this role describes. I take a real engineering problem, package it as a Harbor task — Docker environment, instruction, hidden golden solution, hidden verifier — then I prove two things empirically: the oracle scores reward 1.0, a no-op scores 0, and a frontier agent fails for a valid reason, not a timeout or an ambiguous spec.

I have also shipped a MERN notebook with JWT auth and notes CRUD, and I first-authored a CNN study on GERD endoscopy — Deep Gastro Insight — where GoogLeNet reached 91.2% on 10,662 images. Those show I can build a multi-file app and run a real train-and-compare loop. The work that matches this role is still Dynamo.

Bespoke is a core contributor to Terminal-Bench and Harbor. I already work in that stack. I want to do it with your research team, on environments that are used to train agents, not only to score them.`;

export const TONIGHT_PLAN = [
  {
    when: "Now → 90 min before Meet",
    what: "Read Tonight, JD match, Stories, and Projects out loud once. Fill your numbers on this page.",
  },
  {
    when: "90 → 30 min before",
    what: "Drill starred questions. Dynamo first. Notebook and GERD only if they ask what you built or about ML.",
  },
  {
    when: "Last 30 min",
    what: "Stop adding material. Rehearse the 90-second opener twice. Write three questions you will ask them. Water, quiet room, Meet link ready.",
  },
] as const;

export const MUST_MEMORIZE = [
  {
    term: "Harbor task",
    line: "instruction.md + environment/Dockerfile + solution/solve.sh + tests that write reward 1 or 0.",
  },
  {
    term: "Oracle / nop",
    line: "Golden solution must score 1.0. Doing nothing must score < 1.0. If nop passes, the verifier is broken.",
  },
  {
    term: "pass@5 band",
    line: "On Dynamo, GPT-5.4 + Terminus-2 must fail at least 3 of 5 with valid failures. 0–2/5 accepted. 3–5/5 is too easy. Timeouts do not count as difficulty.",
  },
  {
    term: "Valid failure",
    line: "The model finished and got the answer wrong on a fair, fully specified problem. Timeout, infra error, or ambiguity is an invalid failure — broken, not hard.",
  },
  {
    term: "Hidden tests",
    line: "tests/ and solution/ are not in the agent image. Harbor mounts them at grade time. Ground truth never lives on an agent-writable path.",
  },
  {
    term: "myNoteBook",
    line: "MERN notes app. JWT + bcrypt + Joi. Per-user CRUD. Use when they ask what you built, not as the lead.",
  },
  {
    term: "Deep Gastro Insight",
    line: "First-author CNN paper. 10,662 endoscopic images. GoogLeNet 91.2% vs VGG19, MobileNet, Sequential. Keras, not RL.",
  },
] as const;

export const DO_NOT_SAY = [
  "I follow the Dynamo guide and the checks pass, so the task is good.",
  "We make it harder by lowering the timeout or adding busywork.",
  "I have three years of production PyTorch training at cluster scale.",
  "I built Terminal-Bench / Harbor myself.",
  "Difficulty is when the model cannot finish in time.",
  "The notebook is my main project for this role.",
  "I trained production medical AI that hospitals use.",
  "I have trained PPO at cluster scale in PyTorch.",
] as const;

export const INSTEAD_SAY = [
  "I design the crux so a skilled engineer can still solve it, then I measure pass@k on a reference agent.",
  "Difficulty comes from reasoning — held-out cases, wrong-default lures, entangled rules — not from the clock.",
  "My production Python is in the evaluation stack: Docker, Harbor, pytest verifiers, deterministic scoring.",
  "I author Harbor / Terminal-Bench 2 tasks in the same format Bespoke helped define.",
  "If all five trials time out, the timeout is wrong. If they finish and miss the crux, the task is hard.",
  "Every instruction criterion maps 1:1 to a hidden assertion on observable artifacts.",
  "I shipped myNoteBook, a MERN notes app with JWT, bcrypt, and per-user CRUD. That is how I know what a realistic multi-file repo looks like when I plant a Harbor task in one.",
  "I first-authored Deep Gastro Insight: Keras CNNs on 10,662 endoscopic images, GoogLeNet 91.2% on a held-out comparison. That is train-and-eval, not cluster RL.",
] as const;

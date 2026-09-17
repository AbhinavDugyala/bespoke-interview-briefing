export const NINETY_SECOND_OPENER = `I'm Abhinav. Day to day I author Terminal-Bench-style tasks for coding agents on Handshake's Project Dynamo.

That work is the same loop this role describes. I take a real engineering problem, package it as a Harbor task — Docker environment, instruction, hidden golden solution, hidden verifier — then I prove two things empirically: the oracle scores reward 1.0, a no-op scores 0, and a frontier agent fails for a valid reason, not a timeout or an ambiguous spec.

I decide what the agent should be asked, how success is checked, how to make the task hard without making it unfair, and how to close reward-hacking holes: answer leakage in the image, tests that only check file existence, symlink cheats, hidden conventions the instruction never stated.

Bespoke is a core contributor to Terminal-Bench and Harbor. I already work in that stack. I want to do it with your research team, on environments that are used to train agents, not only to score them.`;

export const TONIGHT_PLAN = [
  {
    when: "Now → 90 min before Meet",
    what: "Read Tonight, JD match, and both stories out loud once. Fill your numbers on this page.",
  },
  {
    when: "90 → 30 min before",
    what: "Drill the eight starred questions. If you stall, say the first sentence from the script, then go specific.",
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
    term: "Eval vs RL env",
    line: "Same packaging. Different use. A benchmark measures. An RL environment trains. Training makes reward hacking worse because the policy will search the grader.",
  },
] as const;

export const DO_NOT_SAY = [
  "I follow the Dynamo guide and the checks pass, so the task is good.",
  "We make it harder by lowering the timeout or adding busywork.",
  "I have three years of production PyTorch training at cluster scale.",
  "I built Terminal-Bench / Harbor myself.",
  "Difficulty is when the model cannot finish in time.",
  "The verifier just checks that the output file exists.",
] as const;

export const INSTEAD_SAY = [
  "I design the crux so a skilled engineer can still solve it, then I measure pass@k on a reference agent.",
  "Difficulty comes from reasoning — held-out cases, wrong-default lures, entangled rules — not from the clock.",
  "My production Python is in the evaluation stack: Docker, Harbor, pytest verifiers, deterministic scoring.",
  "I author Harbor / Terminal-Bench 2 tasks in the same format Bespoke helped define.",
  "If all five trials time out, the timeout is wrong. If they finish and miss the crux, the task is hard.",
  "Every instruction criterion maps 1:1 to a hidden assertion on observable artifacts.",
] as const;

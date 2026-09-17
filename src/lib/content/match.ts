export type JdItem = {
  jd: string;
  you: string;
  say: string;
  strength: "strong" | "partial" | "gap";
};

export const MUST_HAVES: JdItem[] = [
  {
    jd: "3+ years software/ML engineering with strong production Python",
    you: "Production Python is real: Harbor tasks, Dockerfiles, pytest verifiers, bash oracles. Calendar years may be under 3. Do not inflate.",
    say: "My Python is in the evaluation stack, not in training loops. I write deterministic graders and package environments that actually run. If you need cluster-scale PyTorch, that is a ramp, not my current job.",
    strength: "partial",
  },
  {
    jd: "Familiarity with SWE-bench, Terminal-Bench, MLE-bench — how tasks are structured, packaged, and graded",
    you: "This is your job. Dynamo is Terminal-Bench 2 task authorship on Harbor.",
    say: "I author Harbor tasks in the TB2 layout: instruction, digest-pinned Dockerfile, hidden solve.sh, hidden tests that write /logs/verifier/reward.txt. I can contrast that with SWE-bench, which grades a patch against fail-to-pass tests on a frozen repo.",
    strength: "strong",
  },
  {
    jd: "Designing tasks, benchmarks, or test suites where difficulty and correctness are engineered",
    you: "Proposal gate, then oracle/nop, then pass@2 / pass@5 bands, then human R1/R2.",
    say: "I do not debug until it works. I pick a crux, write a golden that proves solvability, hide tests that the agent cannot see, and reject the task if the frontier agent solves it 3 of 5 times — or if it only fails because the spec was unfair.",
    strength: "strong",
  },
  {
    jd: "Repos as the task environment: planting bugs, success criteria, deterministic verifiers, confirming solvability",
    you: "Seed files in environment/, broken or incomplete code, absolute /app paths, pytest on artifacts.",
    say: "The agent only sees the image and the instruction. I plant the broken state in the Dockerfile. Success is files on disk, not stdout. The oracle is the proof the task is solvable.",
    strength: "strong",
  },
  {
    jd: "Reward hacking: hidden tests, final-state checks, sandbox isolation",
    you: "AVA, adversarial cheat-pass, no COPY of solution/tests, ground truth not on /app, symlink-cheat hardening.",
    say: "Agents will read the answer key if you bake it in, echo tests/reference, or symlink /app/output to the grader. I keep tests off the agent filesystem, assert on values not existence, and treat a nop-pass as a failed verifier.",
    strength: "strong",
  },
  {
    jd: "Docker proficiency; reproducible environments",
    you: "Digest-pinned bases, pinned pip, no :latest, bake verifier deps, never COPY solution or tests.",
    say: "Every task is a digest-pinned image. I re-run oracle and nop from a clean checkout. If the reward flickers, I fix seeds before I talk about difficulty.",
    strength: "strong",
  },
  {
    jd: "Held-out sets, contamination, rubric design for partial credit",
    you: "Held-out pytest cases, novelty checks against TB, 1:1 instruction-to-test mapping. Dynamo is often all-or-nothing 1/0; you know when partial credit is the wrong tool.",
    say: "The sample the agent can see is unrepresentative on purpose. Grading is on held-out cases. If two expert methods both deserve to pass, I either pin the deciding rule in the instruction or widen the tolerance — I do not hide the rule in the grader.",
    strength: "strong",
  },
];

export const NICE_TO_HAVES: JdItem[] = [
  {
    jd: "Hands-on task authorship with a track record (counts, acceptance rate)",
    you: "You have authorship. Fill exact submitted / RTD / revise counts tonight. Do not guess on the call.",
    say: "I have authored N Harbor tasks on Dynamo. M reached ready-to-deliver. The rest taught me the failure modes: undisclosed verifier conventions, too-easy pass@5, and brittle graders.",
    strength: "partial",
  },
  {
    jd: "Long-horizon, multi-file, persistent state",
    you: "TB2 tasks are multi-step terminal work. Multi-milestone Harbor exists; most Dynamo tasks are single-session. Be precise.",
    say: "My tasks already require exploration, debugging, and iteration across files inside one container session. I have not yet built multi-day resumable worlds with snapshotting. I know why that matters for training: credit assignment and restore.",
    strength: "partial",
  },
  {
    jd: "Sparse-reward design, milestones, PRMs",
    you: "You ship binary rewards today. You can talk about when that is right.",
    say: "Binary 1/0 at the end of a long trajectory is sparse by design. I use it when the artifact is all-or-nothing. If Bespoke needs process rewards, I would decompose into checkable subgoals that cannot be gamed independently of the final state.",
    strength: "partial",
  },
  {
    jd: "Calibrating difficulty vs frontier models; curricula",
    you: "pass@5 on GPT-5.4 + Terminus-2 is exactly this.",
    say: "I target a band: 0–2/5 valid failures on the reference agent. If it is 3–5/5 I add a real crux, not busywork. If it is 0/5 timeouts I raise the timeout or cut compute, because that is not difficulty.",
    strength: "strong",
  },
  {
    jd: "Harbor, OpenEnv, Prime Intellect verifiers / prime-rl",
    you: "Harbor is daily. OpenEnv and Prime verifiers: read the one-pager in Playbook. Do not fake hands-on.",
    say: "Harbor is the harness I use every task. OpenEnv is the Gymnasium-style env API some labs train against. Prime's verifiers package is another way to attach a grader to an RL loop. Same idea: isolate the environment, return a scalar reward.",
    strength: "partial",
  },
  {
    jd: "Automated pipelines to generate/validate/curate tasks at scale",
    you: "You live inside one: proposal LLM gate, static checks, rubric review, AVA, pass@k CI.",
    say: "I do not own the pipeline, I am a producer inside it. I can describe every gate and what a false green looks like, which is what you need before you automate generation.",
    strength: "partial",
  },
  {
    jd: "Stateful resumable environments: snapshot, checkpoint, branching rollouts",
    you: "Honest gap. Know why it exists.",
    say: "Harbor runs are usually one container life. For long-horizon RL you want to fork state after step 40, not replay 40 minutes. I have not built that layer. I have built the tasks you would snapshot.",
    strength: "gap",
  },
  {
    jd: "Fuzzy verifiers and PRMs",
    you: "Most of your graders are exact. You have rubric instincts from Deccan video eval.",
    say: "I prefer deterministic checks when the artifact allows it. When quality is graded, I want a rubric with examples of 0/1/2, not an LLM judge with no hidden tests. PRMs score steps; they still get hacked if the step score is easier than the goal.",
    strength: "partial",
  },
  {
    jd: "Frontier lab or RL data vendor",
    you: "Handshake (Anthropic-adjacent TB2 pipeline) + Turing (RL data vendor) + Deccan AI.",
    say: "I have been on the expert-network side of frontier evaluation at Handshake, and earlier at Turing, which sells RL environments and training data to labs.",
    strength: "strong",
  },
];

export const TRANSLATION = [
  {
    dynamo: "instruction.md",
    bespoke: "Task spec / agent prompt. Goal, not recipe. Absolute paths. Every graded rule disclosed.",
  },
  {
    dynamo: "environment/Dockerfile",
    bespoke: "The world. Starting state, deps, planted bugs, seed data. No answer key.",
  },
  {
    dynamo: "solution/solve.sh (oracle)",
    bespoke: "Golden trajectory proof. Solvable. Not shown to the policy.",
  },
  {
    dynamo: "tests/ + reward.txt",
    bespoke: "Verifier / reward function. Prefer final-state checks. Hidden at rollout time.",
  },
  {
    dynamo: "harbor run --agent oracle / nop",
    bespoke: "Unit test the environment itself before you train or eval a model.",
  },
  {
    dynamo: "pass@5 on Terminus-2",
    bespoke: "Difficulty calibration against a frontier coding agent. Target a pass-rate band.",
  },
  {
    dynamo: "AVA / cheat-pass",
    bespoke: "Red-team the reward. False accept vs false reject.",
  },
  {
    dynamo: "R1 / R2 human review",
    bespoke: "Expert QA: is the difficulty real, or did we grade an unstated convention?",
  },
] as const;

export type TimedScript = {
  id: string;
  duration: string;
  title: string;
  whenToUse: string;
  spoken: string;
};

export const SIXTY_SECOND_DYNAMO: TimedScript = {
  id: "dynamo-60s",
  duration: "30–60 seconds",
  title: "How I actually ship a Dynamo task",
  whenToUse:
    "Walk me through a task you wrote / how do you work on Dynamo / what does a day look like.",
  spoken: `On Dynamo I do not start from a prompt. I ship a Terminal-Bench 2 Harbor task — one folder that is an exam.

I pick a real engineering problem that needs more than one command: a broken pipeline, a parser, a CLI. Original fixtures. A skilled engineer can still solve it. A program can grade it.

Then seven files, in this order. Fixtures in environment/. Digest-pinned Dockerfile, no COPY of solution or tests. Oracle first — solution/solve.sh actually computes into /app. Pytest that grades those artifacts, 1:1 with the spec. instruction.md last: what, not how, absolute /app paths, every graded rule named.

Harbor is the exam hall. The agent sees the room and the instruction, works in /app, then tests mount after it stops and write 1 or 0 to reward.txt.

I do not submit until oracle is 1.0 and a no-op is 0. Then Dynamo's gates: static checks, AVA, pass@5 on GPT-5.4 with Terminus-2. Timeouts are not difficulty. If the agent solves it three of five, I add a held-out crux, not a shorter clock.

That is one task, start to ready-to-deliver. I will swap in the task I filled on Tonight — category, input path, output path, the one fair miss.`,
};

export const TWO_MINUTE_TB2: TimedScript = {
  id: "tb2-any",
  duration: "1–2 minutes",
  title: "How I would author any Terminal-Bench 2 task",
  whenToUse:
    "How would you design a new task / walk me through Terminal-Bench 2 / what would you do on day one here.",
  spoken: `A Terminal-Bench 2 task is an exam in a Docker room. Harbor is the invigilator.

Harbor builds the image from environment/Dockerfile. The agent gets only instruction.md. It works in /app, reads fixtures, writes artifacts. When it stops, Harbor mounts tests/ — never before — runs tests/test.sh, pytest writes 1 or 0 to /logs/verifier/reward.txt. The oracle, solution/solve.sh, is mounted only when I prove solvability. The agent never sees it.

How I would author any task, including the ones I ship on Dynamo:

One — pick a real problem. Multi-step. Original data. Not trivia, not a reskin of an existing TB task. A skilled engineer can solve it. A program can check the artifact.

Two — plan environment/. Data, docs, maybe broken starter code. Never put solution/ or tests/ in the image. That is answer leakage.

Three — Dockerfile. Digest-pin the base, never latest. COPY fixtures into /app. mkdir /app/output. Bake pytest. WORKDIR /app. If internet is off, every dep is already in the image.

Four — oracle first. solve.sh does real work into absolute /app paths. Same fixtures, same output, every run. No echoing a hardcoded answer.

Five — tests 1:1 with the spec. Every assertion traces to a sentence in instruction.md or a /app/docs file named there. test.sh must not apt-get. It writes reward.txt.

Six — instruction last. Concise. What, not how. Absolute /app paths. Every deliverable named: paths, keys, types, sort order. No algorithm dump. Timeout line matches task.toml.

Seven — prove it. Oracle 1. Nop 0. Rerun from a clean tree. Then on Dynamo: static, AVA, pass@5. If spelling out a missing rule makes the task easy, I never had a crux — I had a defect.

That is the method for any TB2 task. Only the problem and the crux change.`,
};

export const DYNAMO_STEPS = [
  {
    n: "01",
    name: "Pick the problem",
    say: "Real engineering work. Multi-step. Original fixtures. Skilled engineer can solve it. A program can grade it.",
  },
  {
    n: "02",
    name: "Plant the world",
    say: "environment/ gets data, docs, maybe broken starter code. Never solution/ or tests/ — that leaks the answer key.",
  },
  {
    n: "03",
    name: "Pin the Dockerfile",
    say: "Digest-pin the base. COPY fixtures into /app. mkdir /app/output. Bake pytest. WORKDIR /app. Offline if allow_internet is false.",
  },
  {
    n: "04",
    name: "Oracle first",
    say: "solution/solve.sh actually computes. Artifacts on disk become the spec. Agent never sees this file.",
  },
  {
    n: "05",
    name: "Tests 1:1",
    say: "tests/test.sh + test_outputs.py. One assertion per criterion. Writes /logs/verifier/reward.txt. Grade behavior, not my method.",
  },
  {
    n: "06",
    name: "Instruction last",
    say: "instruction.md: what, not how. Absolute /app paths. Every graded path, key, type, sort. No hints. Timeout matches task.toml.",
  },
  {
    n: "07",
    name: "Prove, then pipeline",
    say: "Locally: oracle 1.0, nop 0, deterministic. Then Dynamo: static, AVA, pass@5. Human review can still reject fake hardness.",
  },
] as const;

export const HARBOR_RUNTIME = [
  {
    n: "1",
    who: "Harbor",
    line: "Builds the Docker image from environment/Dockerfile.",
  },
  {
    n: "2",
    who: "Agent",
    line: "Receives instruction.md. That is the only assignment document.",
  },
  {
    n: "3",
    who: "Agent",
    line: "Works in /app — reads fixtures, writes code, produces outputs.",
  },
  {
    n: "4",
    who: "Harbor",
    line: "After the run, mounts tests/. Mounts solution/ only for oracle grading.",
  },
  {
    n: "5",
    who: "Verifier",
    line: "tests/test.sh runs pytest on the artifacts the agent left behind.",
  },
  {
    n: "6",
    who: "Reward",
    line: "Writes /logs/verifier/reward.txt → 1 pass or 0 fail. Binary on Dynamo unless you have a reason not to be.",
  },
] as const;

export const FILL_IN = {
  heading: "Make the 60 seconds yours",
  lines: [
    "Category I actually shipped: debugging / data-processing / software-engineering / …",
    "The agent sees: /app/data/… and maybe /app/docs/…",
    "The agent must produce: /app/output/… (name the files and one key)",
    "The crux: held-out case / wrong-default lure / entangled rule — one sentence",
    "What pass@5 looked like: e.g. 1/5 valid fails, not timeouts",
  ],
  spokenTemplate: `The task I will narrate is [name from Tonight]. Category [X]. The agent sees [input paths] and must write [output paths]. The crux is [one determinate miss]. Oracle was 1, nop was 0, pass@5 was [N/5 valid]. I will not name confidential Handshake IDs.`,
};

export const WALKTHROUGH_RULES = [
  "Do not describe a task you did not ship. Fill Tonight first.",
  "Do not dump the oracle algorithm. Say what was hard and how you graded it.",
  "Do not claim you built Harbor or Terminal-Bench.",
  "If they ask 'any TB2 task,' use the 1–2 minute script. If they ask 'one you wrote,' use 30–60 seconds plus the fill-in.",
] as const;

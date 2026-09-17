export type Story = {
  id: string;
  title: string;
  subtitle: string;
  whenToUse: string;
  situation: string;
  task: string;
  action: string[];
  result: string;
  spoken: string;
  followups: { q: string; a: string }[];
};

export const STORIES: Story[] = [
  {
    id: "dynamo-e2e",
    title: "Project Dynamo — authoring a Harbor / Terminal-Bench 2 task",
    subtitle: "Lead with this. It is the job.",
    whenToUse:
      "Tell me about yourself / walk me through a project / how do you design a task. Personal apps (notebook, GERD) are on Projects — not this story.",
    situation:
      "At Handshake I author Terminal-Bench 2 tasks on Project Dynamo. Each task is a self-contained Harbor environment: a Docker world, an instruction the agent sees, a hidden oracle, and a hidden verifier that writes a 0/1 reward. Frontier labs use this format to measure coding agents. Bespoke is a core contributor to that stack.",
    task: "Ship a task that is original, deterministically graded, solvable by a skilled engineer, and hard for a frontier agent — without being unfair.",
    action: [
      "Propose the idea first: what is hard, what the expert approach is, how a program checks the artifact, expert-time estimate. Cheap gate before I spend hours on Docker.",
      "Write the oracle before the prompt. Golden solution writes to absolute /app paths. That list of observable artifacts becomes both the tests and the instruction.",
      "Write pytest 1:1 with success criteria. tests/ is not in the image. Harbor overlays it after the agent stops. Reward goes to /logs/verifier/reward.txt.",
      "Digest-pin the Dockerfile. Never COPY solution/ or tests/. Bake pytest in. Seed data in environment/data/.",
      "Calibrate locally: harbor run --agent oracle → 1.0; --agent nop → <1.0. Re-run from a clean checkout so it is deterministic.",
      "Write instruction.md last: what, not how. Under the token cap. Every graded rule is stated. End with the timeout line that matches task.toml.",
      "Open the PR into the automated pipeline: static checks, rubric, duplicate check, pass@2, AVA, then pass@5. Iterate on blocking issues. Human R1/R2 still can reject a 'green' task if the difficulty is fake.",
    ],
    result:
      "A task is only done when the oracle still solves it and the reference agent (GPT-5.4 + Terminus-2) lands in the 0–2/5 valid-failure band. Swap in your actual counts: submitted, revised, ready-to-deliver, and one concrete crux from a task you owned.",
    spoken: `The project I want to go deep on is Project Dynamo at Handshake. I author Terminal-Bench 2 tasks in Harbor.

A task is four pieces that have to tell the same story. The Dockerfile is the world. instruction.md is the only thing the agent sees. solve.sh is the hidden golden that proves it is solvable. The pytest verifier is the hidden reward, mounted only after the agent stops.

I work oracle-first. I solve it myself, list the artifacts on disk, then write one test per criterion. If a no-op agent can score 1.0, the grader is the bug, not the model.

Difficulty is measured, not vibes. We run a reference coding agent. Timeouts do not count. If it solves the task three times out of five, I did not make a hard problem — I made a short one. If it fails because I graded a sort order I never wrote down, that is also on me.

That loop — spec, environment, golden, verifier, anti-cheat, pass-rate band — is the same loop Bespoke is hiring for, except you also use those environments to train.`,
    followups: [
      {
        q: "How long does one task take?",
        a: "Proposal is cheap. The expensive part is alignment: instruction, oracle, and tests describing the same contract, then surviving AVA and pass@k. On Dynamo the working window is measured in hours per task including revisions. Say your real number. Do not brag about speed; brag about first-pass quality.",
      },
      {
        q: "What category do you prefer?",
        a: "Name the categories you actually shipped: debugging, data processing, systems, etc. Why: you can judge realism. Do not claim GPU kernels if you did not write one.",
      },
      {
        q: "Did you use coding agents to build the tasks?",
        a: "Yes, as a force multiplier on Docker and test boilerplate. Instruction and oracle stay human-written and human-verified. I still have to catch the agent leaking answers into the image or grading an unstated field.",
      },
    ],
  },
  {
    id: "verifier-hole",
    title: "Closing a reward hack — verifier too loose or too strict",
    subtitle: "Second story. This is the 'how agents game graders' question.",
    whenToUse:
      "Reward hacking / a time you were wrong / a task that got sent back / how you test a verifier.",
    situation:
      "A task can look hard (low pass@k) and still be a bad environment. The two failure modes are false accept — a stub or leaked answer still gets reward 1 — and false reject — a correct alternative method fails. Dynamo's AVA and cheat-pass exist because agents search the grader.",
    task: "Find why a green oracle / red agent did not mean the task was good, then fix the contract so only real solutions score 1.0.",
    action: [
      "Reproduce: oracle 1.0, nop should be 0. If nop is 1.0, the tests are existence checks or they read agent-writable ground truth.",
      "Hunt leakage: COPY solution/tests in the Dockerfile, answer files under /app, reference npz the submitted module can import, instruction that dumps the algorithm.",
      "Hunt hidden conventions: verifier requires a key, sort, tie-break, or float type the instruction never stated. That manufactures invalid failures.",
      "Hunt lures: sample data does not contain the crux, so the agent overfits the sample and fails held-out for a fair reason — that is good, if the rule is determinate from what the agent can see.",
      "Fix: move ground truth into tests/, assert values not filenames, disclose every graded rule, keep the crux in the problem not in the clock.",
    ],
    result:
      "Use a real example from your revisions if you have one. Pattern: 'nop started passing' or 'R1 said undisclosed verifier convention' or 'pass@5 was 4/5 so I added a held-out case, not a shorter timeout.' If you lack a dramatic incident, narrate AVA's false-accept class: echoing tests/reference_data.",
    spoken: `The most useful mistake in this work is a verifier that is too kind.

The classic hack: tests only check that /app/report.json exists, or they load the answer from a path the agent can read. A no-op, a symlink, or cat of the reference file scores 1.0. If you trained RL on that, you would get a policy that writes empty JSON.

The other hack is the opposite. I grade a sort order or a float that I never specified. Pass rate looks low. Reviewers call it difficulty. It is not. If I wrote the missing rule in the instruction, the agent would pass. Fake hardness.

So the checklist I actually run is: oracle 1, nop 0, every assertion traces to a sentence in the instruction, ground truth not on /app, held-out cases the sample does not cover, and pass@k failures that are wrong answers, not timeouts.

That is how I design against reward hacking without making the task unsolvable.`,
    followups: [
      {
        q: "Give a concrete exploit.",
        a: "Three you can name without leaking a private task: (1) bake tests into the image; (2) existence-only asserts; (3) symlink /app/output to /tests/expected. Mitigations: overlay tests at grade time, value asserts, resolve realpath / reject links, independent recompute of the answer in the grader.",
      },
      {
        q: "Would you use an LLM judge?",
        a: "As a signal, not as the only reward for RL. Judges are hackable with style and prompt injection. For training I want a programmatic check on final state, maybe a rubric on top for analysis.",
      },
    ],
  },
  {
    id: "turing-deccan",
    title: "Backup: Turing + Deccan AI — evaluation as a craft",
    subtitle: "Use if they ask about earlier roles or rubric design.",
    whenToUse: "Walk me through your background / how you think about quality / partial credit.",
    situation:
      "Before Dynamo I evaluated model outputs in two vendor settings: Turing (delivery data / LLM evaluation inside a company that builds RL environments) and Deccan AI (video evaluation against a quality rubric).",
    task: "Be a consistent grader. Catch contamination of taste — scoring what looks good instead of what the spec asked.",
    action: [
      "At Turing: treat this as data quality and model-output review, not as 'I trained the lab's policy.' Be honest about the exact work you did (validation, coding eval, RLHF-style comparison — only what is true on your resume).",
      "At Deccan: video eval taught rubric discipline. A 1 vs 2 vs 3 has to mean the same thing on Tuesday and Friday. That is the same fight as a too-loose numeric band on a TB2 verifier.",
      "The transfer: I already distrusted my own first impression. I look for the spec, then the artifact, then the grade.",
    ],
    result:
      "This is supporting evidence that you can sit in an expert network and not rubber-stamp. It is not the flagship story. Do not let it eat Dynamo time.",
    spoken: `Before Handshake I was already on the evaluation side of AI vendors.

At Turing I worked as a delivery data analyst in a company whose product is now RL environments and training data for labs. At Deccan AI I scored generated video against a rubric.

Those roles taught me that graders drift. If the rubric is vague, everyone becomes generous. Dynamo is the same idea with teeth: the rubric is pytest, the world is Docker, and a frontier agent will search for the hole.

I would not lead with those jobs. They explain why I care about a tight contract. Dynamo is where I actually build the contract.`,
    followups: [
      {
        q: "Why leave Handshake / why Bespoke?",
        a: "Same craft, closer to training. Dynamo measures agents. Bespoke builds environments so agents can be trained and optimized (including GEPA) for labs and enterprises. I want the environments to be used as worlds, not only as exams.",
      },
    ],
  },
];

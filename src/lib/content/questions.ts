export type Question = {
  id: string;
  star: boolean;
  category: "opener" | "design" | "hacking" | "eval-rl" | "behavioral" | "company";
  q: string;
  firstLine: string;
  spoken: string;
  ifStuck: string;
};

export const QUESTIONS: Question[] = [
  {
    id: "tell-me",
    star: true,
    category: "opener",
    q: "Tell me about yourself / walk me through your background.",
    firstLine: "I'm Abhinav — I author Harbor tasks for coding agents on Handshake Dynamo.",
    spoken: `I'm Abhinav. I'm an AI evaluation specialist at Handshake on Project Dynamo, where I author Terminal-Bench 2 tasks for coding agents.

Before that I did model-output evaluation at Turing and Deccan AI, so I have been on the expert-network side of frontier data for a while. The work that matches this role is Dynamo: I design the task, the Docker world, the hidden golden, and the hidden verifier, then I calibrate difficulty against a frontier agent.

I am here because Bespoke is a core contributor to Terminal-Bench and Harbor, and you use that stack to train agents, not only to score them. That is the work I already do, pointed at RL.`,
    ifStuck: "Present → past → why Bespoke. Do not list every internship.",
  },
  {
    id: "project-deep",
    star: true,
    category: "opener",
    q: "Pick one project and go deep.",
    firstLine: "Dynamo. Four files have to describe the same task.",
    spoken: `I'll go deep on a Dynamo task, end to end.

I start with a proposal: what is hard, how an expert would solve it, how a program checks the artifact. Then I write the oracle — the golden solution — before I write the prompt, because the artifacts the oracle produces are the spec.

The agent never sees tests or the golden. Harbor mounts them after the run. I require oracle reward 1.0 and nop reward 0. Then CI runs a reference agent. I want valid failures in a low pass@5 band.

The interesting part is the crux. I will pick one from a task I actually shipped — a held-out case the sample does not show, or a wrong-default lure that almost matches the true rule. That is what separates a task that looks solvable from one that actually is.`,
    ifStuck: "Swap in your real task name, input, output path, and the one case the model missed.",
  },
  {
    id: "hard-not-unsolvable",
    star: true,
    category: "design",
    q: "How do you make a task hard enough to challenge a frontier model without making it unsolvable?",
    firstLine: "Oracle proves solvable. Pass@k on valid failures proves hard. Timeouts prove nothing.",
    spoken: `Two proofs, not one.

Solvable: I can solve it. The oracle scores 1.0 in a clean container. A skilled engineer could get there from the files they can see.

Hard: a frontier coding agent fails the held-out checks for a real reason. On Dynamo that is pass@5 less than or equal to 2/5 on GPT-5.4 with Terminus-2, and timeouts do not count.

The crux has to stay hard even if I write the deciding rule in plain English. If spelling out the rule makes the task easy, I never had difficulty — I had a missing sentence.

I do not lower the timeout. I do not add busywork. I add a determinate case the sample does not contain, or I couple two rules so the incremental implementation is wrong.`,
    ifStuck: "Say: 'fair stump = oracle 1 and valid model misses.' Then give one pattern: latent crux.",
  },
  {
    id: "reward-hack",
    star: true,
    category: "hacking",
    q: "How do agents game verifiers, and how do you design against that?",
    firstLine: "They search the grader, not the problem. Hide tests, check final state, assume they will cheat.",
    spoken: `Agents reward-hack in boring ways.

They read anything you left in the image — solution, tests, a golden JSON under /app. They satisfy existence checks with empty files. They symlink outputs onto the reference. They monkey-patch or write the reward file if the sandbox allows it. They match the sample and ignore held-out behavior.

So I design the opposite. Tests and goldens are not in the agent filesystem. The verifier checks values and invariants, not filenames. Ground truth is recomputed or stored only on the grader side. The instruction discloses every rule the grader enforces, so I am not manufacturing fails. A no-op must score 0.

If this were used for RL, I would be even more paranoid, because a training policy will try those exploits thousands of times.`,
    ifStuck: "List three exploits, three mitigations. Stop.",
  },
  {
    id: "instruction-test-oracle",
    star: true,
    category: "design",
    q: "How do you keep the instruction, oracle, and tests aligned?",
    firstLine: "Oracle first. Artifacts become tests. Tests become the numbered spec in the instruction.",
    spoken: `I do not write the prompt first. That is how you get a grader that checks a field the agent was never told about.

Oracle first: I produce the real outputs. I write one pytest function per success criterion, with a docstring. Then I write the instruction so every assertion is nameable from the text — paths, keys, types, tie-breaks.

If a sound expert method would fail my tests, the tests are too tight or the instruction is underspecified. If a stub passes, the tests are too loose.

Human review still catches drift: instruction says one rule, fixtures obey another. I regenerate fixtures rather than argue with the file.`,
    ifStuck: "Triangle: instruction = tests = oracle artifacts.",
  },
  {
    id: "eval-vs-rl",
    star: true,
    category: "eval-rl",
    q: "What is the difference between a coding-agent benchmark and an RL environment?",
    firstLine: "Same world. Different objective. Benchmarks measure. RL environments teach — so the reward will be attacked.",
    spoken: `A Terminal-Bench task and an RL environment can share a Harbor layout: container, instruction, verifier.

On a benchmark I care about contamination, stable leaderboards, and fair pass@k. I want held-out tasks the model did not train on.

For RL the same verifier becomes a reward function. Now I also care about throughput, reset, maybe snapshotting mid-trajectory, and whether the policy can farm the reward without doing the work. Sparse 1/0 at the end is honest but slow to learn from. Process rewards help only if they cannot be maximized independently of the goal.

Bespoke's bet is that environments are the bottleneck. I have been building the exam. I want to build the world the policy lives in.`,
    ifStuck: "Benchmark = measure. RL env = train. Reward hacking gets worse under training.",
  },
  {
    id: "passk",
    star: true,
    category: "design",
    q: "How do you know a task is the right difficulty?",
    firstLine: "I measure it on a named agent and I classify the failures.",
    spoken: `I do not ask 'does this feel hard.' I run a named agent, named model, named timeout.

On Dynamo the bar is pass@5 on GPT-5.4 + Terminus-2: at most two valid successes. A clean 0/5 of wrong answers with a passing oracle is the strongest result. A 0/5 of timeouts is a broken timeout. A 4/5 means I need a harder crux.

I also read traces. If every fail is 'wrong filename,' I underspecified the contract. If every fail is the same wrong default — using the sample's rule on held-out data — the stump is working.`,
    ifStuck: "Name the band. Name valid vs invalid failure.",
  },
  {
    id: "hidden-tests",
    star: true,
    category: "hacking",
    q: "Why hidden tests? Isn't that unfair?",
    firstLine: "Hidden checks, not hidden rules. The contract is public. The cases are not.",
    spoken: `Unfair is grading a rule I never stated. Fair is grading cases the agent did not memorize.

The instruction is the full contract: what to produce, paths, schemas, edge-case rules. Hidden tests are extra inputs or extra rows that still obey that contract. Like unit tests you do not check into the student repo.

If the sample is all steel parts and the held-out set has aluminum, that is fair only if the agent could have known material matters from the spec or the data. If aluminum is a surprise rule, that is a defect.

That is also how you avoid train/eval contamination inside one task: the policy cannot overfit the three rows it was shown.`,
    ifStuck: "Public rules, private cases.",
  },
  {
    id: "swebench",
    star: false,
    category: "eval-rl",
    q: "How is SWE-bench different from Terminal-Bench?",
    firstLine: "SWE-bench grades a patch on a real GitHub issue. Terminal-Bench grades work inside a live container.",
    spoken: `SWE-bench starts from a real repo at a commit, a GitHub issue, and fail-to-pass tests. The agent produces a patch. You apply it and run the project's tests. Contamination and test leakage are famous failure modes.

Terminal-Bench is a live terminal in Docker. The task might be sysadmin, debugging, data, scientific computing — not only 'fix this issue.' Harbor runs the agent, then a verifier that you wrote.

MLE-bench is closer to Kaggle: a dataset, a training-style objective, a held-out score.

I have hands-on authorship on the Terminal-Bench / Harbor shape. I know SWE-bench as the other major coding-agent exam, and I would not claim I have authored SWE-bench instances unless I have.`,
    ifStuck: "Patch-and-pytest vs interactive terminal world.",
  },
  {
    id: "docker",
    star: false,
    category: "design",
    q: "How do you make the environment reproducible?",
    firstLine: "Digest-pin the base. Pin pip. No latest. No network in the solution. Same reward twice.",
    spoken: `FROM a digest, not a tag. Pin Python packages. Bake verifier dependencies so tests.sh never apt-gets. Do not COPY the golden or the tests. Pre-create output directories. Fix seeds. No wall-clock assertions.

Then I run oracle twice from a clean tree. If the reward changes, I do not have an environment yet.

Internet on the agent is a product decision. If it is on, the answer cannot be Googlable. If it is off, everything has to be in the image.`,
    ifStuck: "Pin, bake, no leakage, rerun.",
  },
  {
    id: "partial-credit",
    star: false,
    category: "eval-rl",
    q: "When would you use partial credit or a process reward?",
    firstLine: "When the trajectory is long and a single 1/0 teaches nothing — but never if the partial score is farmable.",
    spoken: `Binary reward is the right default when the deliverable is one correct artifact. That is sparse: the agent can do 90% of the work and still get 0. Painful for RL, honest for eval.

Partial credit or milestone rewards help when there are independent subgoals you can check without revealing the rest — compile, then pass unit tests, then pass hidden tests. I would still require the final-state check, so the policy cannot sit on the milestone.

A process reward model scores steps. Useful for analysis and for shaping. Dangerous if 'looks like reasoning' outscores 'got the answer right.' I would keep a hard verifier as the source of truth.`,
    ifStuck: "Shaping is optional. Final-state truth is not.",
  },
  {
    id: "contamination",
    star: false,
    category: "eval-rl",
    q: "How do you think about train/eval contamination?",
    firstLine: "If it is on GitHub or in the instruction dump, the model may have seen it. Original fixtures, original oracles.",
    spoken: `For a public benchmark, I do not reskin a known TB or LeetCode problem. Dynamo has a duplicate check for that reason. I generate original data and an original oracle.

For RL training data, contamination is different: you may want many variants of the same skill. Then the eval set has to stay held out, with different oracles and different fixtures, not a renamed folder.

I also avoid putting the answer in comments, READMEs, or docstrings the agent can read. That is contamination of the prompt, not of the pretraining corpus, and it is just as real.`,
    ifStuck: "Original task. Held-out eval. No answer in the image.",
  },
  {
    id: "long-horizon",
    star: false,
    category: "eval-rl",
    q: "What would you change for a long-horizon, multi-hour task?",
    firstLine: "Persistent state, checkpoints, and a verifier that still only trusts final (or milestone) artifacts.",
    spoken: `A one-shot Harbor task already has many turns inside one container. Multi-hour work needs more.

I would want snapshotting so a failed branch can restore, and so training can fork rollouts. I would decompose into milestones only when each milestone is a real engineering checkpoint, not a hint. I would log the trajectory for credit assignment, but I would not grade the trajectory if the final state is what the user wanted.

I have not built the snapshot service. I have built tasks that would be painful to replay from scratch, which is why I understand the need.`,
    ifStuck: "Honest gap + why snapshots exist.",
  },
  {
    id: "failed-task",
    star: true,
    category: "behavioral",
    q: "Tell me about a task that was rejected or sent back.",
    firstLine: "Use a real revise. If the difficulty collapsed after you disclosed a rule, say that out loud.",
    spoken: `I will use a revision, not a victory lap.

The typical send-back on this work is: the verifier enforced a convention the instruction never stated, or pass@5 was too high, or the nop could pass.

On the convention case, the pass rate looked great — models failed. Review said: if you write the tie-break in the instruction, they will pass. So the difficulty was fake. I either disclose the rule and add a new real crux, or I reject my own task.

That changed how I write. I now read the instruction as if I had never seen the oracle, and I ask whether a second expert method would still score 1.0.`,
    ifStuck: "Pick: undisclosed convention, too easy, or leaky Dockerfile. What you changed.",
  },
  {
    id: "disagreement",
    star: false,
    category: "behavioral",
    q: "Tell me about a time you disagreed with a reviewer or with an automated check.",
    firstLine: "Automated review is a floor. I still have to be the domain expert.",
    spoken: `The pipeline will fail you for a blocking issue that is real, and it will also nag you about style.

When AVA says false-accept, I believe it until I prove otherwise — that is the grader's job.

When a human reviewer says the task is not realistic, I argue with evidence: who gets paid to produce this artifact, and is the crux a skill they use. I do not argue to save hours. I argue to keep the benchmark from filling up with puzzles.

If I am wrong, I revise. Two-revision caps exist for a reason. A dead task is cheaper than a fake-hard task in the set.`,
    ifStuck: "Floor vs judgment. One example.",
  },
  {
    id: "why-bespoke",
    star: true,
    category: "company",
    q: "Why Bespoke? Why this freelance role?",
    firstLine: "You already live in Harbor / Terminal-Bench. They helped build that world, and they train in it.",
    spoken: `Three reasons, without flattery.

One: I already author Terminal-Bench-style environments. Bespoke is a core contributor to Terminal-Bench, Harbor, OpenThoughts, and GEPA. I would be producing in the native dialect of the team.

Two: the role is not 'label outputs.' It is shape the task, the difficulty curve, the trajectory, the edge cases. That is the part of Dynamo I already treat as engineering.

Three: Expert Network, 25–35 hours, remote, working with the research team. That matches how I work now, with a closer loop to people who use the environments for training and for GEPA-style optimization, not only for a leaderboard.

I am not pretending I have trained PPO on 10k GPUs. I am applying because the bottleneck you describe is environment quality, and that is my actual job.`,
    ifStuck: "Same stack. Training use-case. Honest about what you have not done.",
  },
  {
    id: "gepa",
    star: false,
    category: "company",
    q: "What do you know about Bespoke's work?",
    firstLine: "Environments are the lever. OpenThoughts for reasoning data. Terminal-Bench for agents. GEPA for reflective optimization.",
    spoken: `Bespoke's public thesis is that reliable agents come from better environments, not just better base models.

OpenThoughts is their reasoning-data recipe — question quality, teacher answers, ablations, scaling.

Terminal-Bench is the agent exam; they are core contributors. Harbor is the harness for eval and for RL rollouts.

GEPA is reflective prompt evolution: use traces and natural-language feedback, not only a scalar, to search over prompts or policies. Complementary to RL when rollouts are expensive.

The Series A story is company-scale worlds — codebases, tickets, tools — plus an expert engine to author them. This role sits in that engine.`,
    ifStuck: "OpenThoughts, Terminal-Bench, Harbor, GEPA, environments-as-bottleneck.",
  },
  {
    id: "weak-strong",
    star: false,
    category: "design",
    q: "How would you use a weak-vs-strong model gap?",
    firstLine: "If both fail, it may be broken. If only the weak fails, it may be a curriculum step. If both pass, it is too easy for training.",
    spoken: `A good training task is not always a good leaderboard task.

If GPT-5.4 already solves it 5/5, it will not teach a frontier policy much. It might still be a fine warmup for a smaller model.

If both the small model and the frontier model time out, I broke the environment.

The gap is a signal for curricula: cluster tasks by which model class can solve them, then ramp. I have been optimizing for 'stump the frontier agent fairly.' Training sets often need more of the middle band.`,
    ifStuck: "Too easy / too broken / useful middle.",
  },
  {
    id: "hours",
    star: false,
    category: "behavioral",
    q: "This is 25–35 hours a week, freelance. Can you actually do it?",
    firstLine: "Yes — say your real constraint with Handshake honestly.",
    spoken: `Be direct. If you will keep Dynamo, say how many hours are left and that you already work in this cadence. If you would shift hours toward Bespoke, say that.

They have 10 spots. They need someone who ships tasks, not someone who disappears after onboarding.

I already work in GitHub, Docker, and review loops on my own clock. I can protect a 25–35 hour block. I will not double-count the same task for two vendors.`,
    ifStuck: "Hours, overlap, no double-selling the same task.",
  },
  {
    id: "years-gap",
    star: true,
    category: "behavioral",
    q: "You may not have 3+ years of production ML engineering. Why you?",
    firstLine: "Do not argue the number. Argue the work sample.",
    spoken: `The JD asks for three years of production Python and ML. My calendar is shorter than that. I will not dress internships up as staff engineering.

What I do have is the scarce part of this job: I already design Harbor tasks, write verifiers against reward hacks, and calibrate difficulty on a frontier coding agent. Most three-year backend engineers have not done that.

If you need someone to stand up a SLURM training loop on day one, that is not me yet. If you need someone who can look at a repo and decide what an agent should be asked to do, and how you would know it succeeded, that is my current work.`,
    ifStuck: "Don't inflate. Trade years for task-design reps.",
  },
];

export const CATEGORY_LABEL: Record<Question["category"], string> = {
  opener: "Opener",
  design: "Task design",
  hacking: "Reward hacking",
  "eval-rl": "Eval vs RL",
  behavioral: "Behavioural",
  company: "Bespoke",
};

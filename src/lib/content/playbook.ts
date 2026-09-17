export const HARBOR_ANATOMY = [
  {
    file: "instruction.md",
    agentSees: true,
    job: "The assignment. What to achieve, not how. Absolute /app paths. Every graded rule. Human-written.",
  },
  {
    file: "task.toml",
    agentSees: false,
    job: "Timeouts, resources, metadata. Agent timeout must match the last line of the instruction.",
  },
  {
    file: "environment/Dockerfile",
    agentSees: true,
    job: "The world. Digest-pinned base, deps, seed data, planted bugs. Never COPY solution or tests.",
  },
  {
    file: "solution/solve.sh",
    agentSees: false,
    job: "Oracle. Proves solvability. Real computation, not a hardcoded echo. Mounted only for oracle runs.",
  },
  {
    file: "tests/test.sh + test_outputs.py",
    agentSees: false,
    job: "Verifier. Writes reward 1 or 0. One assertion per criterion. Overlay at grade time.",
  },
] as const;

export const STUMP_PATTERNS = [
  {
    id: "A",
    name: "Latent crux",
    line: "The deciding case never appears in the sample. Agent overfits the visible data.",
    example: "All sample parts are steel; held-out parts are a different material with a different gauge table.",
  },
  {
    id: "B",
    name: "Wrong-default lure",
    line: "A cheap heuristic almost matches the true rule, and diverges on one professional case.",
    example: "Treat path prefixes as rollups; true rule is 'amount equals sum of children.'",
  },
  {
    id: "C",
    name: "Misdirection",
    line: "A trusted-looking tool or comment points at a symptom. Fair only if the agent can overturn it from ground truth.",
    example: "Diagnostic CLI names a downstream service; the graph shows the upstream cause.",
  },
  {
    id: "D",
    name: "Evidence-forced reverse engineering",
    line: "Undocumented constants must be recovered from input/output pairs. Hard like senior debugging, not like a riddle.",
    example: "Lost metrics service; reconstruct sentinel overflow and scrape-interval scaling from logs.",
  },
  {
    id: "E",
    name: "Ordering assumption",
    line: "The agent never notices it assumed sorted / monotonic / well-formed input.",
    example: "GPS week rollover or an out-of-order log breaks a stateful decoder.",
  },
  {
    id: "G",
    name: "Multi-mechanism, all-or-nothing",
    line: "Several independent bugs; seven of eight still scores 0. Combine with a latent crux on one of them.",
    example: "Relinker with eight defects; sample never hits the rank-encoding bug.",
  },
  {
    id: "H",
    name: "Entangled rules",
    line: "Rules look independent but rewrite each other. Incremental replay is wrong.",
    example: "Approvals, resets, revocations in a document log. A reset discards earlier approvals.",
  },
  {
    id: "I",
    name: "Stale authority",
    line: "Current value is not the value that was authoritative as-of the cutoff.",
    example: "End-of-day fund valuation using post-cutoff price corrections.",
  },
] as const;

export const FIVE_REJECTS = [
  {
    name: "Undisclosed verifier convention",
    line: "Grader checks a format, sort, or tie-break the instruction never stated. Most common fake-hard.",
  },
  {
    name: "Contradictory shipped data",
    line: "Fixtures or comments obey a different rule than the instruction. Agent who trusts the spec fails.",
  },
  {
    name: "Ambiguous spec",
    line: "Two expert readings; grader accepts one. Score measures the coin flip.",
  },
  {
    name: "Difficulty collapses on disclosure",
    line: "Write the missing rule and the task is easy. You never had a crux.",
  },
  {
    name: "Uncorrectable decoy",
    line: "Authoritative-looking file lies, and nothing in the task can set the record straight.",
  },
] as const;

export const FRAMEWORKS = [
  {
    name: "Harbor",
    you: "Daily",
    blurb:
      "Harness for agent evals and RL rollouts. Builds the image, runs oracle/agent, executes the verifier, stores traces. Bespoke / Laude stack. This is your native tool.",
  },
  {
    name: "Terminal-Bench",
    you: "Daily (TB2 authorship)",
    blurb:
      "The coding-agent exam inside containers. Frontier labs cite it. Bespoke is a core contributor. Dynamo tasks are TB2-format Harbor tasks.",
  },
  {
    name: "SWE-bench",
    you: "Know the shape",
    blurb:
      "Real GitHub issues, fail-to-pass tests, patch as the action. Different interface than a live terminal. Famous for contamination and leaked tests.",
  },
  {
    name: "OpenEnv",
    you: "Read, not hands-on",
    blurb:
      "Meta / community env API: reset, step, reward, in the Gymnasium tradition, aimed at agent training. Same idea as a Harbor task with a stable Python interface.",
  },
  {
    name: "Prime verifiers / prime-rl",
    you: "Read, not hands-on",
    blurb:
      "Prime Intellect's packaging for environments + verifiers used in RL training. You already write the verifier piece; this is another runtime to attach it to.",
  },
  {
    name: "GEPA",
    you: "Company context",
    blurb:
      "Bespoke-adjacent reflective optimizer: mutate prompts/policies using traces and natural-language feedback, not only a scalar. Complements RL when rollouts are expensive.",
  },
  {
    name: "OpenThoughts",
    you: "Company context",
    blurb:
      "Bespoke's open reasoning dataset recipe. Different from agent envs, same obsession: curation quality, teacher choice, scaling laws for data.",
  },
] as const;

export const RL_GLOSSARY = [
  {
    term: "Reward hacking",
    def: "The policy maximizes the grader without doing the intended work. Empty files, leaked keys, judge-pleasing prose.",
  },
  {
    term: "Sparse reward",
    def: "Signal only at the end of a long trajectory (0/1). Honest, high variance, hard credit assignment.",
  },
  {
    term: "Dense / process / milestone reward",
    def: "Intermediate scores. Useful if they cannot be farmed. Still keep a final-state check.",
  },
  {
    term: "PRM (process reward model)",
    def: "A model that scores steps of a solution. Helps search and shaping. Can be hacked if style beats correctness.",
  },
  {
    term: "Credit assignment",
    def: "Which action in a 200-step trace caused the 0? Why traces, milestones, and snapshots exist.",
  },
  {
    term: "Rollout",
    def: "One full attempt of the agent in the environment. pass@k is k rollouts.",
  },
  {
    term: "pass@k",
    def: "Fraction of k independent attempts that succeed. Used both as an eval metric and as a difficulty gate.",
  },
  {
    term: "Held-out / contamination",
    def: "Eval cases the agent should not have seen. Includes pretraining leakage and in-task sample overfitting.",
  },
  {
    term: "Oracle",
    def: "Reference solution used to prove the environment is solvable and the verifier is reachable.",
  },
  {
    term: "Sandbox isolation",
    def: "Agent cannot see tests, cannot write the reward file, cannot reach the host. Docker is the default sandbox.",
  },
] as const;

export const PIPELINE_STEPS = [
  "Proposal — is the idea hard, solvable, and program-checkable?",
  "Build — oracle, tests, Dockerfile, instruction, task.toml.",
  "Local calibrate — oracle 1.0, nop < 1.0, deterministic rerun.",
  "Static + rubric — structure, 1:1 coverage, no leakage.",
  "pass@2 — can the agent finish; is there a valid fail?",
  "AVA / cheat-pass — can a stub get reward 1? can a good solution get 0?",
  "pass@5 — difficulty band on the reference agent.",
  "Human R1/R2 — is the remaining fail a real crux?",
] as const;

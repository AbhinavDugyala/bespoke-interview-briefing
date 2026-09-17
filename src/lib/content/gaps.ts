export const GAPS = [
  {
    gap: "Calendar years vs the 3+ years line",
    handle:
      "Do not inflate. Offer a work sample: Harbor tasks, verifiers, pass@k. Offer to do a paid trial task in their format.",
  },
  {
    gap: "PyTorch training loops, SLURM, Ray, GRPO/PPO",
    handle:
      "I have not trained policies at scale. I have built the environments those recipes consume. I can read a paper and implement a verifier faster than I can stand up a cluster — and this role is the former.",
  },
  {
    gap: "OpenEnv / Prime-RL hands-on",
    handle:
      "Harbor is the one I use. The others are the same contract with a different API. I will not pretend I have opened their source this week unless I have.",
  },
  {
    gap: "Snapshotting, branching rollouts, multi-node envs",
    handle:
      "Honest gap. I can say why training needs restore and fork. I have not written that infra.",
  },
  {
    gap: "Public task count / accepted TB tasks with my name on them",
    handle:
      "Dynamo work is typically not a public GitHub flex. Bring private numbers: submitted, RTD, revise rate. If you have a sanitized task you can describe, use it.",
  },
  {
    gap: "SWE-bench instance authorship",
    handle:
      "Know the format. Do not claim you have landed SWE-bench tasks unless you have. Transfer skills: fail-to-pass tests, no leaked tests, frozen repo.",
  },
] as const;

export const ASK_THEM = [
  {
    q: "For this Expert Network slice, are we writing Harbor / Terminal-Bench-style tasks, or company-scale multi-service worlds?",
    why: "Shows you know both products. Lets you aim your stories.",
  },
  {
    q: "What is the target pass-rate band and the reference agent/model for training vs for eval?",
    why: "You already live in pass@k. You want their numbers.",
  },
  {
    q: "How do you currently red-team verifiers before a task hits an RL loop?",
    why: "Opens AVA / cheat-pass as a conversation, not a lecture.",
  },
  {
    q: "What does a strong week look like at 25–35 hours — N tasks, N reviews, or one long-horizon world?",
    why: "Freelance scoping. You sound operational.",
  },
  {
    q: "Where have agents most recently farmed your rewards, and what did you change?",
    why: "The best question on the list. They will remember you asked it.",
  },
] as const;

export const NIGHT_BEFORE_CHECKLIST = [
  "Fill the Numbers panel with real counts. If you do not know a number, say 'I will follow up' — do not invent it live.",
  "Pick one Dynamo task you can narrate without notes: category, what the agent sees, the crux, how you graded, what pass@ looked like.",
  "Rehearse the 90-second opener twice out loud. Time it.",
  "Prepare the years-gap answer once so you are not defensive.",
  "Write 3 questions from the ask list on paper.",
  "Meet link, charger, headphones, quiet room. Camera at eye level.",
  "Do not open this site and read new pages during the call. Glance at Stories if you blank.",
] as const;

export const CLOSE = `I already do the core of this job: I turn a repo-shaped problem into a Harbor environment with a hidden golden, a hidden verifier, and a measured difficulty band, and I design those verifiers so agents cannot farm them. I want to do that with Bespoke's research team, on environments you actually train on.`;

/**
 * Reconstructed from public LinkedIn + the Dynamo high-level guide you attached.
 * The resume PDF did not land in this environment. Fill exact dates and counts
 * in the Numbers panel before the call.
 */
export const PROFILE = {
  name: "Dugyala Abhinav",
  headline:
    "AI Evaluation Specialist (Handshake) · ex-Deccan AI · ex-Turing · Python, SQL, AWS",
  location: "Hyderabad, India",
  education:
    "B.Tech, Computer Science — Bharath Institute of Science and Technology",
  publicSkills: [
    "Python",
    "SQL",
    "AWS / GCP",
    "Docker",
    "Linux / Bash / Git",
    "AI evaluation",
    "Coding-agent benchmarks",
    "Harbor / Terminal-Bench 2",
    "pytest verifiers",
  ],
  roles: [
    {
      title: "AI Evaluation Specialist",
      org: "Handshake — Project Dynamo",
      when: "Current",
      bullets: [
        "Author realistic terminal-based benchmark tasks that evaluate AI coding agents.",
        "Design multi-step command-line challenges across Linux, Git, Bash, and Python.",
        "Package reproducible Docker environments with automated validation (Harbor).",
        "Write hidden oracles and pytest verifiers; calibrate oracle=1.0 and nop<1.0 before review.",
        "Iterate on human + automated review (rubric, AVA, pass@k) until the task is fair, hard, and solvable.",
      ],
    },
    {
      title: "Video Evaluation Analyst",
      org: "Deccan AI",
      when: "Prior",
      bullets: [
        "Scored AI-generated video against a rubric: quality, artifacts, instruction-following.",
        "Practiced the same muscle this role needs: a grader that is consistent, not generous.",
      ],
    },
    {
      title: "Delivery Data Analyst",
      org: "Turing",
      when: "Prior",
      bullets: [
        "LLM evaluation / data delivery work inside a company that now sells RL environments at scale.",
        "Use this as the 'I have been on the vendor side of frontier-lab data' story, not as a SWE-bench claim.",
      ],
    },
    {
      title: "Full-stack / Python internships",
      org: "OP, TechnoHacks, and similar",
      when: "Earlier",
      bullets: [
        "Python, React/Node, SQL. Enough to talk about shipping code, not the main interview story.",
      ],
    },
  ],
} as const;

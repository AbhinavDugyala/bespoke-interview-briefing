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
    "MERN / REST / JWT",
    "TensorFlow / Keras / CNNs",
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
        "Python and web. Supporting evidence only — the projects worth naming are myNoteBook and Deep Gastro Insight.",
      ],
    },
  ],
  projects: [
    {
      title: "myNoteBook (MERN)",
      when: "Jun 2024 – Aug 2024",
      bullets: [
        "Private cloud notebook: register/login, then create, read, update, delete notes.",
        "Express + MongoDB API with JWT, bcrypt, Joi; React frontend with dedicated create/edit flows.",
      ],
    },
    {
      title: "Deep Gastro Insight — GERD CNNs",
      when: "Jan 2025 – Apr 2025 · IJSDR",
      bullets: [
        "First-author paper classifying GERD-related endoscopic images.",
        "10,662 images; Sequential CNN vs VGG19 vs MobileNet vs GoogLeNet; GoogLeNet 91.2%.",
      ],
    },
  ],
} as const;

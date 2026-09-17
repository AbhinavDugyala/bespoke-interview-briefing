export type PersonalProject = {
  id: string;
  kind: "fullstack" | "ml";
  title: string;
  when: string;
  stack: string[];
  oneLiner: string;
  whenToUse: string;
  bullets: string[];
  spoken: string;
  mapToRole: string;
  followups: { q: string; a: string }[];
  links: { label: string; href: string }[];
};

export const PROJECTS: PersonalProject[] = [
  {
    id: "notebook",
    kind: "fullstack",
    title: "myNoteBook — cloud notebook (MERN)",
    when: "Jun 2024 – Aug 2024",
    stack: ["MongoDB", "Express", "React", "Node.js", "JWT", "bcrypt", "Joi"],
    oneLiner:
      "A private notes app: register/login, then create, read, update, and delete your own notes over REST.",
    whenToUse:
      "Walk me through something you built / how comfortable are you in a real repo / production Python-or-JS.",
    bullets: [
      "Split frontend and backend: React UI (home, login, register, create/edit note, 404, about) and an Express API on /api/auth and /api/notes.",
      "Account creation and email/password auth. Passwords hashed with bcrypt. Session of record is a JWT in an auth-token header, not a cookie-only toy.",
      "Joi schemas on register, login, and new-note bodies so garbage input fails at the edge, not in Mongo.",
      "Notes are per-user CRUD. A request without a valid token is 401. That is the same instinct as hiding tests from an agent: the caller only sees what they are allowed to see.",
      "Public code: github.com/AbhinavDugyala/MyNoteBook_App (UI + run steps) and NoteBook_App (API).",
    ],
    spoken: `I shipped myNoteBook, a MERN cloud notebook, in summer 2024.

The product is simple on purpose: a user creates an account, logs in, and keeps private notes in the cloud. React on the front. Express plus MongoDB on the back. REST for auth and for notes.

The engineering that is worth saying out loud is the contract. Register and login are validated with Joi. Passwords are bcrypt hashes. Every notes call needs a JWT in the auth-token header or it is 401. Create, read, update, delete are scoped to that user.

Why it matters here: when I author a Harbor task I am planting work inside a real multi-file app — routes, middleware, models, a UI. I have built that shape myself, so I know which bugs are realistic, which success criteria are observable, and which checks an agent will try to skip.`,
    mapToRole:
      "Proof you can live in a multi-file codebase: auth, validation, REST, frontend/backend split. Use it to answer 'can you read a repo and design a task,' not as the flagship story.",
    followups: [
      {
        q: "Walk me through a request.",
        a: "UI posts email/password to /api/auth. Server validates, bcrypt-compares, returns JWT. Later, UI sends auth-token. fetchUser middleware verifies it, attaches req.user, notes route does the CRUD. Wrong or missing token → 401.",
      },
      {
        q: "What would you improve?",
        a: "Secrets only in env, not in source. Refresh tokens and httpOnly cookies. Tests on the auth middleware. Rate-limit login. That last one is also how you think about sandbox isolation in an agent env.",
      },
      {
        q: "How does this help you write agent tasks?",
        a: "A good TB2 task is often 'the login works but notes leak across users' or 'Joi is bypassed on edit.' I know those failure modes because I implemented the happy path.",
      },
    ],
    links: [
      {
        label: "MyNoteBook_App (frontend + screenshots)",
        href: "https://github.com/AbhinavDugyala/MyNoteBook_App",
      },
      {
        label: "NoteBook_App (Express API)",
        href: "https://github.com/AbhinavDugyala/NoteBook_App",
      },
    ],
  },
  {
    id: "gerd",
    kind: "ml",
    title: "Deep Gastro Insight — GERD diagnosis with CNNs",
    when: "Jan 2025 – Apr 2025 · IJSDR Vol. 10, Issue 4",
    stack: [
      "TensorFlow / Keras",
      "CNN",
      "GoogLeNet",
      "VGG19",
      "MobileNet",
      "Transfer learning",
    ],
    oneLiner:
      "Published CNN study: classify GERD-related endoscopic images. GoogLeNet 91.2% on 10,662 images, beating VGG19, MobileNet, and a Sequential CNN.",
    whenToUse:
      "Do you have ML / training experience / held-out eval / can you read a paper.",
    bullets: [
      "Problem: endoscopy for GERD is slow and reader-dependent. Automate classification of endoscopic frames for related conditions (esophagitis, hiatal hernia, Barrett’s esophagus).",
      "Data: 10,662 labeled endoscopic images. Preprocess, normalize, augment so the model is not memorizing lighting and scope artifacts.",
      "Models: Sequential CNN as baseline, then transfer learning on VGG19, MobileNet, and GoogLeNet (Inception v1). Compare training accuracy, validation loss, and the held-out metric — not just the training curve.",
      "Result: GoogLeNet best at 91.2%. Paper: “DEEP GASTRO INSIGHT,” IJSDR, April 2025, with co-authors at Bharath Institute. You are first author.",
      "Honest limit: this is a Keras CNN study, not cluster-scale RL. It does show you can run a train/eval loop, compare architectures, and not trust a single training-set number.",
    ],
    spoken: `The ML project I want on the table is Deep Gastro Insight, a CNN study I first-authored for GERD diagnosis from endoscopic images.

The clinical problem is that reading those frames is subjective. We trained classifiers on 10,662 labeled images covering GERD-related findings. We did not ship one model. We compared a Sequential CNN against transfer-learned VGG19, MobileNet, and GoogLeNet, with augmentation and normalization so we were not fitting to scope lighting.

GoogLeNet was the best on the evaluation set, 91.2%. That number only matters because it beat the other three under the same data split. If I only quoted training accuracy, I would be cheating the same way a loose Harbor verifier cheats.

This is Keras and computer vision, not PPO on 10k GPUs. What transfers to Bespoke is the eval instinct: held-out data, a baseline, a fair comparison, and not confusing a pretty training curve with a real result.`,
    mapToRole:
      "Covers the JD’s deep-learning good-to-have and held-out evaluation. Do not claim PyTorch RL. Claim: I have trained models, compared them, and published the comparison.",
    followups: [
      {
        q: "Why GoogLeNet over VGG19?",
        a: "Inception modules look at multiple kernel sizes at once, which helps on tissue texture at different scales. VGG19 is deeper and heavier. MobileNet is the efficiency candidate. We picked on held-out accuracy, not on parameter count. If they want parameter counts, say you will pull the table from the paper rather than guessing.",
      },
      {
        q: "How did you avoid overfitting?",
        a: "Augmentation and normalization, transfer learning instead of training huge nets from scratch, and watching validation loss against training loss. Same story as a task whose sample is too friendly: the model looks perfect until the held-out set.",
      },
      {
        q: "Is this production medical AI?",
        a: "No. Research prototype plus a student paper. I will not claim FDA, hospital deployment, or that 91.2% is clinical-grade. I will claim a complete train/compare/report loop.",
      },
    ],
    links: [
      {
        label: "IJSDR paper (PDF)",
        href: "https://ijsdr.org/papers/IJSDR2504178.pdf",
      },
    ],
  },
];

export const PROJECTS_RULE = `Lead with Dynamo. Use Notebook when they ask what you have built. Use GERD when they ask about ML, training, or held-out evaluation. Two minutes each, then return to task design.`;

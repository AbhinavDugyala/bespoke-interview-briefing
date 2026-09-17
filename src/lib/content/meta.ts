export const INTERVIEW = {
  candidate: "Dugyala Abhinav",
  role: "Machine Learning Engineer",
  roleId: "ER000009",
  company: "Bespoke Labs",
  network: "Expert Network",
  format: "Conversational behavioural interview",
  focus: "RL task design for agent training",
  when: "Thursday, 17 September 2026, 8:00 PM",
  tz: "Asia/Calcutta",
  isoStart: "2026-09-17T20:00:00+05:30",
  durationHint: "Plan for 30–45 minutes. Speak as if it could run 60.",
  contact: "experts@bespokelabs.ai",
} as const;

export const NAV = [
  { href: "/", label: "Tonight" },
  { href: "/match", label: "JD match" },
  { href: "/stories", label: "Two stories" },
  { href: "/questions", label: "Questions" },
  { href: "/playbook", label: "Playbook" },
  { href: "/gaps", label: "Gaps & asks" },
  { href: "/drill", label: "Drill" },
] as const;

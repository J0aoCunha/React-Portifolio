import { CertificationGroup } from "../@types/CertificationType";

export const certifications: CertificationGroup[] = [
  {
    category: "power-platform/",
    issuer: "Prosperi",
    items: [
      { name: "Power Virtual Agents", date: "mar/2026" },
      { name: "Power BI", date: "mar/2026" },
      { name: "Power Apps", date: "mar/2026" },
      { name: "Power Automate", date: "mar/2026" },
    ],
  },
  {
    category: "react-node/",
    issuer: "Rocketseat",
    items: [
      { name: "Fundamentos do React", date: "mai/2024" },
      { name: "Aprofundando em Hooks", date: "jun/2024" },
      { name: "HTTP e Performance", date: "ago/2024" },
      { name: "Fundamentos do Node.js", date: "mar/2025" },
    ],
  },
];

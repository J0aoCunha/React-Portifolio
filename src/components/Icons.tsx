import { IconType } from "../@types/iconType";
import {
  MapPin,
  Suitcase,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  Globe,
  EnvelopeSimple,
  AppWindow,
  Lightning,
  Cylinder,
  Table,
  Database,
} from "@phosphor-icons/react";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiGo,
  SiDocker,
  SiExpress,
  SiFastify,
  SiPrisma,
  SiGit,
  SiGithub,
  SiN8N,
  SiLooker,
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { TbBrandAzure } from "react-icons/tb";

const size = 18;

export const icons: IconType = {
  // contact
  MapPin: <MapPin size={20} color="#7EE787" />,
  Suitcase: <Suitcase size={20} color="#7EE787" />,
  GithubLogo: <GithubLogo size={20} color="#7EE787" />,
  LinkedinLogo: <LinkedinLogo size={20} color="#7EE787" />,
  TwitterLogo: <TwitterLogo size={20} color="#7EE787" />,
  Globe: <Globe size={20} color="#7EE787" />,
  EnvelopeSimple: <EnvelopeSimple size={20} color="#7EE787" />,

  // stack
  React: <SiReact size={size} color="#61DAFB" />,
  "Node.js": <SiNodedotjs size={size} color="#5FA04E" />,
  TypeScript: <SiTypescript size={size} color="#3178C6" />,
  JavaScript: <SiJavascript size={size} color="#F7DF1E" />,
  Go: <SiGo size={size} color="#00ADD8" />,
  Docker: <SiDocker size={size} color="#2496ED" />,
  Express: <SiExpress size={size} color="#E6E6E6" />,
  Fastify: <SiFastify size={size} color="#E6E6E6" />,
  Prisma: <SiPrisma size={size} color="#E6E6E6" />,
  "Bancos SQL": <Database size={size} color="#59C2FF" />,
  Git: <SiGit size={size} color="#F05032" />,
  GitHub: <SiGithub size={size} color="#E6E6E6" />,
  "Azure DevOps": <TbBrandAzure size={size} color="#0078D7" />,
  "Microsoft Office": <FaMicrosoft size={size} color="#E6E6E6" />,
  "Power Apps": <AppWindow size={size} color="#742774" />,
  "Power Automate": <Lightning size={size} color="#0066FF" />,
  Dataverse: <Cylinder size={size} color="#7EE787" />,
  AppSheet: <Table size={size} color="#0F9D58" />,
  "Looker Studio": <SiLooker size={size} color="#4285F4" />,
  n8n: <SiN8N size={size} color="#EA4B71" />,
};

import { IconType } from "../@types/iconType";
import {
  MapPin,
  Suitcase,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
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
  SiLooker,
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { TbBrandAzure } from "react-icons/tb";

const size = 18;

export const icons: IconType = {
  // contact
  MapPin: <MapPin size={20} color="#888888" />,
  Suitcase: <Suitcase size={20} color="#888888" />,
  GithubLogo: <GithubLogo size={20} color="#888888" />,
  LinkedinLogo: <LinkedinLogo size={20} color="#888888" />,
  TwitterLogo: <TwitterLogo size={20} color="#888888" />,
  EnvelopeSimple: <EnvelopeSimple size={20} color="#888888" />,

  // stack
  React: <SiReact size={size} color="#61DAFB" />,
  "Node.js": <SiNodedotjs size={size} color="#5FA04E" />,
  TypeScript: <SiTypescript size={size} color="#3178C6" />,
  JavaScript: <SiJavascript size={size} color="#F7DF1E" />,
  Go: <SiGo size={size} color="#00ADD8" />,
  Docker: <SiDocker size={size} color="#2496ED" />,
  Express: <SiExpress size={size} color="#FAFAFA" />,
  Fastify: <SiFastify size={size} color="#FAFAFA" />,
  Prisma: <SiPrisma size={size} color="#FAFAFA" />,
  "Bancos SQL": <Database size={size} color="#59C2FF" />,
  Git: <SiGit size={size} color="#F05032" />,
  GitHub: <SiGithub size={size} color="#FAFAFA" />,
  "Azure DevOps": <TbBrandAzure size={size} color="#0078D7" />,
  "Microsoft Office": <FaMicrosoft size={size} color="#FAFAFA" />,
  "Power Apps": <AppWindow size={size} color="#742774" />,
  "Power Automate": <Lightning size={size} color="#0066FF" />,
  Dataverse: <Cylinder size={size} color="#79B8FF" />,
  AppSheet: <Table size={size} color="#0F9D58" />,
  "Looker Studio": <SiLooker size={size} color="#4285F4" />,
};

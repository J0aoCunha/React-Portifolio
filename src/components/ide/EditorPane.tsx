import { findFile } from "../../data/files";
import AboutView from "./views/AboutView";
import ContactView from "./views/ContactView";
import StackView from "./views/StackView";
import ExperienceView from "./views/ExperienceView";
import EducationView from "./views/EducationView";
import CertificationsView from "./views/CertificationsView";
import ProjectView from "./views/ProjectView";

export default function EditorPane({ activeTab }: { activeTab: string | null }) {
  if (!activeTab) {
    return (
      <div className="flex-1 flex items-center justify-center bg-editor text-muted text-sm">
        Nenhum arquivo aberto — selecione um no Explorer
      </div>
    );
  }

  const file = findFile(activeTab);
  if (!file) return null;

  let content = null;
  if (activeTab === "about") content = <AboutView />;
  else if (activeTab === "contact") content = <ContactView />;
  else if (activeTab === "stack") content = <StackView />;
  else if (activeTab === "experience") content = <ExperienceView />;
  else if (activeTab === "education") content = <EducationView />;
  else if (activeTab === "certifications") content = <CertificationsView />;
  else if (activeTab.startsWith("project-")) {
    const repoId = Number(activeTab.replace("project-", ""));
    content = <ProjectView repoId={repoId} />;
  }

  return (
    <div className="flex-1 overflow-y-auto bg-editor px-6 sm:px-10 py-8 font-mono text-sm leading-relaxed">
      {content}
    </div>
  );
}

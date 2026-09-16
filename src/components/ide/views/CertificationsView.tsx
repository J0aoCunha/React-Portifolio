import { CheckCircle } from "@phosphor-icons/react";
import { certifications } from "../../../data/certifications";
import { Comment } from "../Syntax";

export default function CertificationsView() {
  return (
    <div className="flex flex-col gap-1">
      {certifications.map((group) =>
        group.items.map((cert) => (
          <div key={cert.name} className="flex items-center gap-2">
            <Comment>[{cert.date}]</Comment>
            <CheckCircle size={14} color="#89D185" className="shrink-0" />
            <span className="text-ink">{cert.name}</span>
            <Comment>({group.issuer})</Comment>
          </div>
        ))
      )}
    </div>
  );
}

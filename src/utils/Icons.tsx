import {
  MapPin,
  Suitcase,
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  Globe,
  EnvelopeSimple,
} from "@phosphor-icons/react";

const icon = {
  MapPin: <MapPin size={24} color="#837E9F" />,
  Suitcase: <Suitcase size={24} color="#837E9F" />,
  GithubLogo: <GithubLogo size={24} color="#837E9F" />,
  LinkedinLogo: <LinkedinLogo size={24} color="#837E9F" />,
  TwitterLogo: <TwitterLogo size={24} color="#837E9F" />,
  Globe: <Globe size={24} color="#837E9F" />,
  EnvelopeSimple: <EnvelopeSimple size={24} color="#837E9F" />,
};

export function Icons(Icons: string) {
  return icon[Icons as keyof typeof icon];
}

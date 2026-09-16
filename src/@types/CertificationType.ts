export type CertificationItem = {
  name: string;
  date: string;
};

export type CertificationGroup = {
  category: string;
  issuer: string;
  items: CertificationItem[];
};

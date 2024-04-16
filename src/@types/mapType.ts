import { IconType } from "./iconType";

export type mapType = {
  id: number;
  icon: keyof IconType;
  info: string;
  link?: string;
};

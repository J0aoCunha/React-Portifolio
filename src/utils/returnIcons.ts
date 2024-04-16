import { IconType } from "../@types/iconType";
import { icons } from "../components/Icons";

export function retunrIcons(IconsName: keyof IconType) {
  return icons[IconsName];
}

import { MenuItem } from "@/types";

export const filterMenuItems = (isSignedIn: boolean, menuItems: MenuItem[]) => {
  return isSignedIn ? menuItems : menuItems.filter((item) => item.isPublic);
};

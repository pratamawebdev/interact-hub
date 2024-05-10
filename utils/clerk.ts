import { User } from "@/types";
import { currentUser } from "@clerk/nextjs/server";

export const getUserData = async (): Promise<User> => {
  const user = await currentUser();
  const email = user?.emailAddresses[0]?.emailAddress;
  const username = user?.username;
  const avatar = user?.imageUrl;

  return { email, username, avatar };
};

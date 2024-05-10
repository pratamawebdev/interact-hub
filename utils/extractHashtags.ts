export const extractHashtags = (content: string): string[] => {
  const regex = /#\w+/g;
  const matches = content.match(regex);
  return matches || [];
};

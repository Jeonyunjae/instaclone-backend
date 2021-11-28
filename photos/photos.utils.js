export const processHashtags = (caption) => {
  try {
    const hashtags = caption.match(/#[\w]+/g) || [];
    return hashtags.map((hashtag) => ({
      where: { hashtag },
      create: { hashtag },
    }));
  } catch (e) {
    console.log(e);
  }
};

export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Hey Guys, names Liam !';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'I\'m full stack web developer, and this site is for all my Front End Mentor solutions !';
    const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'You can also find other projects of mine on GitHub and Codepen.io';

  return {
    name,
    blogTitle,
    footerText,
  };
};

// urlGenerator.js
const generateFakeURLs = () => {
  const domains = ['github.io', 'pages.dev', 'netlify.app', 'vercel.app'];
  const usernames = ['user', 'project', 'site', 'page', 'docs'];
  const paths = ['blog', 'docs', 'portfolio', 'project', 'app'];
  
  return Array.from({length: 100}, (_, i) => {
    const domain = domains[Math.floor(Math.random() * domains.length)];
    const username = usernames[Math.floor(Math.random() * usernames.length)];
    const path = paths[Math.floor(Math.random() * paths.length)];
    const hash = Math.random().toString(36).substring(2, 8);
    
    return `https://${username}-${hash}.${domain}/${path}-${i}`;
  });
};

// URLリストの生成
const fakeURLs = generateFakeURLs();

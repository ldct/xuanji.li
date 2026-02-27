const redirects = {
  '/github': 'https://github.com/ldct',
  '/ldct': 'https://github.com/ldct',
  '/swift': 'https://swift.exe.xyz:8000/',
};

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, '') || '/';

    if (redirects[path]) {
      return Response.redirect(redirects[path], 302);
    }

    if (path === '/') {
      const links = Object.entries(redirects)
        .map(([p, target]) => `<a href="${p}">${p}</a> → ${target}`)
        .join('\n');

      return new Response(
        `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>xuanji.li</title>
<style>
  body {
    background: #000;
    color: #0f0;
    font-family: "Courier New", Courier, monospace;
    padding: 2rem;
    line-height: 1.8;
  }
  a { color: #0ff; }
  a:hover { color: #ff0; }
  pre { font-size: 1rem; }
</style>
</head>
<body>
<pre>
${links}
</pre>
</body>
</html>`,
        { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
      );
    }

    return new Response('Not Found', { status: 404 });
  },
};

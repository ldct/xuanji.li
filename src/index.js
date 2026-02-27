export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, '') || '/';

    if (path === '/github') {
      return Response.redirect('https://github.com/ldct', 302);
    }

    if (path === '/') {
      return new Response(
        `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>xuanji.li</title></head>
<body><h1>Hello from xuanji.li</h1></body>
</html>`,
        { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
      );
    }

    return new Response('Not Found', { status: 404 });
  },
};

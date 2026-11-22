export const config = {
  matcher: '/',
};

export default async function middleware(request) {
  if (request.headers.get('x-middleware-bypass') === '1') {
    return;
  }

  const url = new URL(request.url);
  const pt = url.searchParams.get('pt');
  const posisi = url.searchParams.get('posisi');
  const wilayah = url.searchParams.get('wilayah');

  const indexUrl = new URL('/index.html', request.url);
  const response = await fetch(indexUrl, {
    headers: { 'x-middleware-bypass': '1' },
  });
  
  let html = await response.text();

  const judul = pt 
    ? `Lowongan Kerja ${pt}${wilayah ? ` ${wilayah}` : ''}` 
    : 'Info Loker Jabar - Terbaru & Terpercaya';
    
  const deskripsi = pt
    ? `Info Loker Jabar - Lowongan kerja terbaru di ${pt} posisi ${posisi || 'tersedia'} (${wilayah || 'Jawa Barat'}). Gratis tanpa pungutan biaya.`
    : 'Info lowongan kerja terbaru di seluruh Jawa Barat. Gratis tanpa pungutan biaya.';

  const gambarOg = `${url.origin}/api/og?pt=${encodeURIComponent(pt || 'Info Loker Jabar')}&posisi=${encodeURIComponent(posisi || 'Terbaru & Terpercaya')}&wilayah=${encodeURIComponent(wilayah || 'Jawa Barat')}`;

  const metaTags = `
    <meta property="og:type" content="website">
    <meta property="og:url" content="${url.href}">
    <meta property="og:title" content="${judul}">
    <meta property="og:description" content="${deskripsi}">
    <meta property="og:image" content="${gambarOg}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta name="twitter:card" content="summary_large_image">
  `;

  html = html.replace('</head>', `${metaTags}</head>`);

  return new Response(html, {
    headers: { 'content-type': 'text/html; charset=utf-8' },
  });
}

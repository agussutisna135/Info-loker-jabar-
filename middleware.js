import { next } from '@vercel/edge';

export const config = {
  matcher: '/',
};

export default async function middleware(request) {
  const url = new URL(request.url);
  const pt = url.searchParams.get('pt');
  const posisi = url.searchParams.get('posisi');

  // Lanjutkan ke halaman index.html asli
  const response = await next();
  let html = await response.text();

  const judul = pt 
    ? `Lowongan Kerja ${pt}${posisi ? ` - ${posisi}` : ''}` 
    : 'Info Loker Jabar - Terbaru & Terpercaya';
    
  const deskripsi = pt
    ? `Info Loker Jabar - Lowongan kerja terbaru di ${pt} posisi ${posisi || 'tersedia'}. Gratis tanpa pungutan biaya.`
    : 'Info lowongan kerja terbaru di seluruh Jawa Barat. Gratis tanpa pungutan biaya.';

  const gambarOg = `${url.origin}/api/og?pt=${encodeURIComponent(pt || 'Info Loker Jabar')}&posisi=${encodeURIComponent(posisi || 'Terbaru & Terpercaya')}`;

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

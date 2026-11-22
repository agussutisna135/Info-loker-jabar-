import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const pt = searchParams.get('pt') || 'Info Loker Jabar';
  const posisi = searchParams.get('posisi') || 'Lowongan Kerja Terbaru';

  return new ImageResponse(
    {
      type: 'div',
      key: 'root',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f1f5fa',
          padding: '40px 60px',
          fontFamily: 'sans-serif',
          border: '16px solid #1264df',
        },
        children: [
          {
            type: 'div',
            key: 'badge',
            props: {
              style: {
                backgroundColor: '#1264df',
                color: 'white',
                padding: '10px 28px',
                borderRadius: '50px',
                fontSize: 28,
                fontWeight: 'bold',
                marginBottom: 30,
              },
              children: 'INFO LOKER JABAR • LOWONGAN KERJA',
            },
          },
          {
            type: 'div',
            key: 'pt',
            props: {
              style: {
                fontSize: 56,
                fontWeight: 'bold',
                color: '#172033',
                textAlign: 'center',
                marginBottom: 20,
              },
              children: pt,
            },
          },
          {
            type: 'div',
            key: 'posisi',
            props: {
              style: {
                fontSize: 38,
                fontWeight: 'bold',
                color: '#168653',
                textAlign: 'center',
                marginBottom: 40,
              },
              children: `Posisi: ${posisi}`,
            },
          },
          {
            type: 'div',
            key: 'footer',
            props: {
              style: {
                fontSize: 24,
                color: '#6b7280',
                backgroundColor: 'white',
                padding: '12px 30px',
                borderRadius: '12px',
              },
              children: 'Gratis Tanpa Pungutan Biaya • Cek Info Lengkap',
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
    }
  );
}

import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler(req) {
  const { searchParams } = new URL(req.url);
  const pt = searchParams.get('pt') || 'PT Mayora Indah Tbk';
  const posisi = searchParams.get('posisi') || 'Operator Produksi';
  const wilayah = searchParams.get('wilayah') || 'Jawa Barat';

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
          justifyContent: 'space-between',
          backgroundColor: '#eef3f9',
          padding: '28px 60px',
          fontFamily: 'sans-serif',
          position: 'relative',
          borderLeft: '18px solid #1e6fd9',
          borderRight: '18px solid #1e6fd9',
        },
        children: [
          // Baris Atas: Lencana Info Loker Jabar & Pita WE'RE HIRING!
          {
            type: 'div',
            key: 'top-row',
            props: {
              style: {
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              },
              children: [
                {
                  type: 'div',
                  key: 'badge-left',
                  props: {
                    style: {
                      backgroundColor: '#ffffff',
                      border: '3px solid #374151',
                      borderRadius: '12px',
                      padding: '8px 18px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      fontSize: 16,
                      fontWeight: 900,
                      color: '#1f2937',
                      lineHeight: 1.15,
                    },
                    children: ['INFO', 'LOKER', 'JABAR'].map((txt, i) => ({
                      type: 'div',
                      key: `b-${i}`,
                      props: { children: txt },
                    })),
                  },
                },
                {
                  type: 'div',
                  key: 'ribbon-right',
                  props: {
                    style: {
                      backgroundColor: '#374151',
                      color: '#ffffff',
                      padding: '14px 24px 22px 24px',
                      borderRadius: '0 0 16px 16px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      fontSize: 22,
                      fontWeight: 900,
                      lineHeight: 1.2,
                      boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
                    },
                    children: [
                      { type: 'div', key: 'r1', props: { children: "WE'RE" } },
                      { type: 'div', key: 'r2', props: { children: 'HIRING!' } },
                    ],
                  },
                },
              ],
            },
          },

          // Kartu Putih Tengah dengan Ikon Pabrik, Judul PT, Posisi & Wilayah
          {
            type: 'div',
            key: 'center-card',
            props: {
              style: {
                width: '88%',
                backgroundColor: '#ffffff',
                border: '3px solid #60a5fa',
                borderRadius: '24px',
                padding: '24px 40px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 10px 25px rgba(30, 111, 217, 0.1)',
                marginTop: '-20px',
              },
              children: [
                // Ikon Pabrik Sederhana (SVG)
                {
                  type: 'svg',
                  key: 'factory-icon',
                  props: {
                    width: '72',
                    height: '64',
                    viewBox: '0 0 64 64',
                    style: { marginBottom: 10 },
                    children: [
                      {
                        type: 'path',
                        key: 'p1',
                        props: {
                          d: 'M8 56V20h8v14l14-10v10l14-10v32H8z',
                          fill: '#2563eb',
                          stroke: '#1e3a8a',
                          strokeWidth: '3',
                        },
                      },
                      {
                        type: 'rect',
                        key: 'p2',
                        props: { x: '24', y: '40', width: '6', height: '6', fill: '#ffffff' },
                      },
                      {
                        type: 'rect',
                        key: 'p3',
                        props: { x: '36', y: '40', width: '6', height: '6', fill: '#ffffff' },
                      },
                    ],
                  },
                },
                {
                  type: 'div',
                  key: 'title-label',
                  props: {
                    style: {
                      fontSize: 34,
                      fontWeight: 800,
                      color: '#1f2937',
                      lineHeight: 1.1,
                    },
                    children: 'Lowongan Kerja',
                  },
                },
                {
                  type: 'div',
                  key: 'pt-title',
                  props: {
                    style: {
                      fontSize: 46,
                      fontWeight: 900,
                      color: '#111827',
                      lineHeight: 1.15,
                      marginBottom: 12,
                    },
                    children: pt,
                  },
                },
                {
                  type: 'div',
                  key: 'pos-wilayah',
                  props: {
                    style: {
                      fontSize: 24,
                      fontWeight: 600,
                      color: '#374151',
                      lineHeight: 1.3,
                    },
                    children: `Posisi: ${posisi} (Wilayah ${wilayah})`,
                  },
                },
              ],
            },
          },

          // Bar Pencarian Biru di Bagian Bawah
          {
            type: 'div',
            key: 'bottom-pill',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#1e6fd9',
                borderRadius: '50px',
                padding: '8px 12px 8px 28px',
                boxShadow: '0 6px 14px rgba(30, 111, 217, 0.25)',
              },
              children: [
                {
                  type: 'div',
                  key: 'pill-label',
                  props: {
                    style: {
                      color: '#ffffff',
                      fontSize: 22,
                      fontWeight: 700,
                      marginRight: 16,
                    },
                    children: 'Info Lengkap Cek di:',
                  },
                },
                {
                  type: 'div',
                  key: 'pill-white',
                  props: {
                    style: {
                      backgroundColor: '#ffffff',
                      color: '#111827',
                      fontSize: 22,
                      fontWeight: 800,
                      padding: '6px 24px',
                      borderRadius: '40px',
                      marginRight: 12,
                    },
                    children: 'Info Loker Jabar',
                  },
                },
                {
                  type: 'div',
                  key: 'pill-icon',
                  props: {
                    style: {
                      width: 38,
                      height: 38,
                      borderRadius: '50%',
                      border: '3px solid #ffffff',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 18,
                      fontWeight: 'bold',
                    },
                    children: '🔍',
                  },
                },
              ],
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

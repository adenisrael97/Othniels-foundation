export default function manifest() {
  return {
    name: "Othniel's Foundation",
    short_name: 'Othniel',
    description: 'Empowering communities through support and outreach programs.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#f97316', // Orange-500 from the Tailwind config
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}

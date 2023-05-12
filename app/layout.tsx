import "./globals.css";

export const metadata = {
  title: "TamTamArts",
  description: `Explorez l'univers vibrant de Tam Tam Arts, votre guide vers l'art et la culture. Découvrez des spectacles captivants, des expositions d'art inspirantes et des concerts envoûtants. Plongez dans une expérience artistique immersive et laissez-vous emporter par la créativité des artistes émergents. Rejoignez-nous pour célébrer la diversité artistique et vivre des moments inoubliables. Soyez inspiré, soyez émerveillé, rejoignez-nous sur Tam Tam Arts aujourd'hui.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

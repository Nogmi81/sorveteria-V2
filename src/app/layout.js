import Topo from "@/components/Topo";
import Rodape from "@/components/Rodape";

import "./globals.css";

export const metadata = {
  title: "Sorveteria Artesanal V2",
  description: "sorvetes artesanais",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Topo />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
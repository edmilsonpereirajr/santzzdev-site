import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Evita conteúdo duplicado: o domínio antigo do projeto redireciona
  // para o domínio oficial (o mesmo da bio do Instagram).
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "santzzdev-site.vercel.app" }],
        destination: "https://santzzdev.vercel.app/:path*",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
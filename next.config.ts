import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/psychometriques",
        destination: "/examens/psychometriques",
        permanent: false,
      },
      { source: "/langues", destination: "/examens", permanent: false },
      { source: "/tarifs", destination: "/examens", permanent: false },
      { source: "/faq", destination: "/examens", permanent: false },
    ];
  },
};

export default nextConfig;

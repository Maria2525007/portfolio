import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This landing lives inside a repo that has its own lockfile, so Turbopack
  // would otherwise pick the repo root and watch far more than it needs to.
  turbopack: {
    root: fileURLToPath(new URL(".", import.meta.url)),
  },
};

export default nextConfig;

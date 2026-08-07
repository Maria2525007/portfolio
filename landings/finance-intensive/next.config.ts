import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
    This landing lives inside the portfolio repo, which has its own lockfile.
    Pin the workspace root so Turbopack doesn't walk up and pick the wrong one.
  */
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
};

export default nextConfig;

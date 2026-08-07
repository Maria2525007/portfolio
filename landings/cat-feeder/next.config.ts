import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This landing lives inside a portfolio repo that has its own lockfile;
  // pin the root so Turbopack does not walk up and pick the wrong one.
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
};

export default nextConfig;

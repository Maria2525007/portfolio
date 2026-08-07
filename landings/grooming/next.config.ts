import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

// This landing is a standalone app nested inside the portfolio repo, which has
// its own lockfile. Pin the root so Turbopack does not walk up and adopt it.
const here = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: { root: here },
  // Every photo is committed to /public at its final display size, so there is
  // nothing for a server-side optimizer to do. Keeping it off means the built
  // site is pure static output with no runtime dependency.
  images: { unoptimized: true },
};

export default nextConfig;

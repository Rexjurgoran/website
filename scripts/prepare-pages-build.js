import { mkdirSync, existsSync, copyFileSync } from "node:fs";
import { resolve, join } from "node:path";

const rootDir = resolve(__dirname, "..");
const repoRoot = rootDir;
const docsDir = join(repoRoot, "docs");
const indexPath = join(docsDir, "index.html");
const notFoundPath = join(docsDir, "404.html");
const cnamePath = join(repoRoot, "CNAME");
const docsCnamePath = join(docsDir, "CNAME");

mkdirSync(docsDir, { recursive: true });

if (existsSync(indexPath)) {
  copyFileSync(indexPath, notFoundPath);
} else {
  throw new Error(`Expected build output at ${indexPath}`);
}

if (existsSync(cnamePath)) {
  copyFileSync(cnamePath, docsCnamePath);
} else {
  throw new Error(`Expected CNAME file at ${cnamePath}`);
}

console.log("Prepared GitHub Pages artifacts in docs/.");

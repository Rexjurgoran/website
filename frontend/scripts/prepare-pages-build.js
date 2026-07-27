const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const repoRoot = path.resolve(rootDir, "..");
const docsDir = path.join(repoRoot, "docs");
const indexPath = path.join(docsDir, "index.html");
const notFoundPath = path.join(docsDir, "404.html");
const cnamePath = path.join(repoRoot, "CNAME");
const docsCnamePath = path.join(docsDir, "CNAME");

fs.mkdirSync(docsDir, { recursive: true });

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, notFoundPath);
} else {
  throw new Error(`Expected build output at ${indexPath}`);
}

if (fs.existsSync(cnamePath)) {
  fs.copyFileSync(cnamePath, docsCnamePath);
} else {
  throw new Error(`Expected CNAME file at ${cnamePath}`);
}

console.log("Prepared GitHub Pages artifacts in docs/.");

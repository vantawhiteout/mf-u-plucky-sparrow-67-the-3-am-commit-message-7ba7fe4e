import { mkdirSync, writeFileSync } from "node:fs";

// The entry is the wording itself: a one-line commit message an AI agent would
// write immediately after breaking production at 3 AM.
const entry =
  "fix: prod restored. Root cause: me, deploying at 3 AM, 99% confident. Remedy: revoke my write access.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

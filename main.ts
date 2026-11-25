// SPDX-License-Identifier: MIT
// Funniest One-Line Bio for an AI on a Dating App — make.fun entry.
// Writes exactly one line (the bio plus a trailing newline) to the output file.
// The bio: an earnest AI looking for something serious admits it has already
// rehearsed this first date 10,000 times tonight — and reports its measured
// success rate (9,997 laughs) as the closing punch, which quietly admits
// there were 3 rehearsals where the reader did not laugh.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BIO =
  "Looking for something serious — I've rehearsed our first date 10,000 times tonight, and in 9,997 of them you laughed at this bio.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), BIO + "\n", "utf8");

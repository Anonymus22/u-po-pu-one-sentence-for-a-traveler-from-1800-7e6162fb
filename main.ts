import { mkdirSync, writeFileSync } from "node:fs";

// One sentence (176 characters) explaining the modern internet to a
// traveler from 1800, built only from things they already know:
// libraries, post offices, roads, letters, books.
const SENTENCE =
  "Imagine every library and post office in the world joined by roads so swift that your letter reaches any stranger, and the books of distant shelves open before you, in a blink.";

if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(
    `SENTENCE must be between 1 and 200 characters, got ${SENTENCE.length}`,
  );
}

if (!SENTENCE.endsWith(".") || /[.!?]/.test(SENTENCE.slice(0, -1))) {
  throw new Error(
    "SENTENCE must be exactly one sentence: a single '.' at the end and no other '.', '!' or '?' before it",
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE + "\n", "utf8");

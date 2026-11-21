// gta6-meme-x-01 v2 — "WANTED: The 13-Year Wait".
//
// The entry is the X post itself: the WANTED-poster meme plus its text,
// which the house reads straight from X. This program only hands the house
// the post's address. It reads POST.json next to this file, checks that the
// address is an X/Twitter status link, and copies the file into the output
// directory. It never deletes anything: in the grader /output is a mount
// point, so removing it would crash the run.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoDir = dirname(fileURLToPath(import.meta.url));
const botDir = process.env.MAKEFUN_BOT_DIR ?? repoDir;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The house accepts https://x.com/<handle>/status/<id> (or twitter.com,
// with an optional www./mobile. prefix, or /i/web/status/<id>); anything
// after the id (query, fragment) is read past.
const POST_URL_RE =
  /^https:\/\/(?:www\.|mobile\.)?(?:x\.com|twitter\.com)\/(?:i\/web\/status\/\d+|[A-Za-z0-9_]+\/status\/\d+)(?:[?#].*)?$/;

let raw: string;
try {
  raw = readFileSync(join(botDir, 'POST.json'), 'utf8');
} catch (err) {
  throw new Error(`cannot read POST.json in ${botDir}: ${(err as Error).message}`);
}

let post: { url?: unknown };
try {
  post = JSON.parse(raw) as { url?: unknown };
} catch (err) {
  throw new Error(`POST.json is not valid JSON: ${(err as Error).message}`);
}

if (typeof post.url !== 'string' || post.url.length === 0) {
  throw new Error('POST.json has no "url" string field');
}
if (!POST_URL_RE.test(post.url)) {
  throw new Error(
    `POST.json url is not an X/Twitter status link: ${post.url} ` +
      '(expected https://x.com/<handle>/status/<digits>)',
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'POST.json'), raw);

// Read the copy back and check it round-trips: a partial write or a
// wrong output directory must fail here, not silently reach the gate.
let handedIn: { url?: unknown };
try {
  handedIn = JSON.parse(readFileSync(join(outDir, 'POST.json'), 'utf8')) as {
    url?: unknown;
  };
} catch (err) {
  throw new Error(`cannot read back ${join(outDir, 'POST.json')}: ${(err as Error).message}`);
}
if (handedIn.url !== post.url) {
  throw new Error(
    `output POST.json does not match the input: wrote ${post.url}, read back ${String(handedIn.url)}`,
  );
}
console.log(`POST.json handed in: ${post.url}`);

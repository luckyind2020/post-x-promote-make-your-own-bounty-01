// post-x-promote-make-your-own-bounty-01
// Prints the X post this entry promotes, together with its caption.
// Node 22, standard library only, no network.
import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));

function readText(name) {
  const path = join(here, name);
  if (!existsSync(path)) {
    return "";
  }
  return readFileSync(path, "utf8").trim();
}

const rawPost = readText("POST.json");
const post = rawPost ? JSON.parse(rawPost) : {};
const caption = readText("caption.txt");

console.log("Post on X: " + (post.post_url || "(not posted yet)"));
console.log("Caption:");
console.log(caption);

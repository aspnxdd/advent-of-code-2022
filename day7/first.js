const content = await Deno.readTextFile("input", "UTF-8");
const data = content.split("\n");
const MAX_SIZE = 100000;
let tree = {};
let dirsHistory = [];

data.forEach((line) => {
  if (line.startsWith("$")) {
    if (!line.includes("ls")) {
      const [_a, _b, dir] = line.split(" ");
      if (!dir.includes("..")) {
        dirsHistory.push(dir);
      } else {
        dirsHistory.pop();
      }
    }
  } else if (line.startsWith("dir")) {
    // ignore
  } else {
    const [size, name] = line.split(" ");
    let obj = tree;
    dirsHistory.forEach((p) => {
      if (!obj[p]) obj[p] = {};
      obj = obj[p];
    });
    obj[name] = parseInt(size);
  }
});
let sizes = [];
function calculateSizes(subTree) {
  let size = 0;
  Object.entries(subTree).forEach(([key, val]) => {
    if (typeof val === "object") {
      const s = calculateSizes(val);
      console.log({ key, s, val });
      if (s < MAX_SIZE) {
        sizes.push(s);
      }
      size += s;
    } else {
      size += val;
    }
  });
  console.log({ size, sizes });
  return size;
}
console.log(JSON.stringify(tree, null, 2));
calculateSizes(tree);
console.log(sizes.reduce((a, b) => a + b, 0));

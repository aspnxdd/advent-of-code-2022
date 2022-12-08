const content = await Deno.readTextFile("input", "UTF-8");
const data = content.split("\n");

function transpose(matrix) {
  return matrix.reduce(
    (prev, next) => next.map((_, i) => (prev[i] || []).concat(next[i])),
    []
  );
}

let m = transpose(data.map((e) => e.split("")));
let highest = 0;

for (let [i, line] of data.entries()) {
  line = line.replace("\r", "");
  for (const [j, tree] of line
    .split("")
    .filter((e) => e != "\r")
    .entries()) {
    const up =
      [...m[j]]
        .slice(0, i)
        .reverse()
        .findIndex((e) => Number(e) >= Number(tree)) === -1
        ? [...m[j]].slice(0, i).reverse().length
        : [...m[j]]
            .slice(0, i)
            .reverse()
            .findIndex((e) => Number(e) >= Number(tree)) + 1;
    const down =
      [...m[j]].slice(i + 1).findIndex((e) => Number(e) >= Number(tree)) === -1
        ? [...m[j]].slice(i + 1).length
        : [...m[j]].slice(i + 1).findIndex((e) => Number(e) >= Number(tree)) +
          1;
    const left =
      [...line]
        .slice(0, j)
        .reverse()
        .findIndex((e) => Number(e) >= Number(tree)) === -1
        ? [...line].slice(0, j).reverse().length
        : [...line]
            .slice(0, j)
            .reverse()
            .findIndex((e) => Number(e) >= Number(tree)) + 1;
    const right =
      [...line].slice(j + 1).findIndex((e) => Number(e) >= Number(tree)) === -1
        ? [...line].slice(j + 1).length
        : [...line].slice(j + 1).findIndex((e) => Number(e) >= Number(tree)) +
          1;
    highest = Math.max(Math.abs(up * down * left * right), highest);
  }
}

console.log({ highest });

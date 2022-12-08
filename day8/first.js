const content = await Deno.readTextFile("input", "UTF-8");
const data = content.split("\n");

function transpose(matrix) {
  return matrix.reduce(
    (prev, next) => next.map((_, i) => (prev[i] || []).concat(next[i])),
    []
  );
}

let m = transpose(data.map((e) => e.split("")));
let t = 0;
for (let [i, line] of data.entries()) {
  line = line.replace("\r", "");
  for (const [j, tree] of line
    .split("")
    .filter((e) => e != "\r")
    .entries()) {
    const isEdge =
      i === 0 || i === data.length - 1 || j === 0 || j === line.length - 1;

    let isTreeVisible = true;
    let coveredByMLineL = false;
    let coveredByLineL = false;
    let coveredByMLineR = false;
    let coveredByLineR = false;

    if ([...m[j]].slice(0, i).some((e) => Number(e) >= Number(tree))) {
      coveredByMLineL = true;
    }
    if ([...m[j]].slice(i + 1).some((e) => Number(e) >= Number(tree))) {
      coveredByMLineR = true;
    }

    if ([...line].slice(0, j).some((e) => Number(e) >= Number(tree))) {
      coveredByLineL = true;
    }
    if ([...line].slice(j + 1).some((e) => Number(e) >= Number(tree))) {
      coveredByLineR = true;
    }

    isTreeVisible =
      coveredByLineL === false ||
      coveredByLineR === false ||
      coveredByMLineL === false ||
      coveredByMLineR === false;

    if (isEdge || isTreeVisible) {
      t++;
    }
  }
}

console.log(t);

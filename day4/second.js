const content = await Deno.readTextFile("input", "UTF-8");

const elfPairs = content.split("\n");

function getMinMax(str) {
  const [min, max] = str.split("-");
  return [parseInt(min), parseInt(max)];
}

let counter = 0;
for (const elfPair of elfPairs) {
  const [elf1, elf2] = elfPair.split(",");

  const [min, max] = getMinMax(elf1);
  const [min2, max2] = getMinMax(elf2);
  if (min > max2 || min2 > max) {
    continue;
  }
  ++counter;
}

console.log(counter);

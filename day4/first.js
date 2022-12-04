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
  if ((min <= min2 && max >= max2) || (min2 <= min && max2 >= max)) {
    ++counter;
  }
}

console.log(counter);

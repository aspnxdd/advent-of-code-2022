import { Stack, transpose } from "./common.js";

const content = await Deno.readTextFile("input", "UTF-8");
const indexWhereInstructionsStart = content
  .split("\n")
  .findIndex((line) => line.includes("move"));
const instructions = content.split("\n").slice(indexWhereInstructionsStart);
const stacksText = content
  .split("\n")
  .slice(0, indexWhereInstructionsStart)
  .reverse();
const stacksNumber = Number(stacksText.at(1).split(" ").at(-2));

const stacks = [];
const matrix = [];

for (let i = 2; i < stacksNumber + 2; ++i) {
  let lastLetterAt = 0;
  const line = stacksText[i]?.split(" ").reduce((acc, curr) => {
    curr = curr.replace("\r", "");
    if (curr === "") lastLetterAt++;
    else {
      lastLetterAt = 0;
    }
    if (lastLetterAt % 4 !== 0) {
      if (lastLetterAt === 0) {
        acc.push(curr);
      }
      return acc;
    } else {
      acc.push(curr);
    }
    return acc;
  }, []);
  matrix.push(line);
}

const matrixTransposed = transpose(matrix.filter(Boolean));

for (const vec of matrixTransposed) {
  const stack = new Stack();
  vec.forEach((num) => {
    if (num) stack.push(num);
  });
  stacks.push(stack);
}
for (const instruction of instructions) {
  let [, amount, , from, , to] = instruction.split(" ");

  amount = Number(amount);
  from = Number(from);
  to = Number(to?.replace("\r", ""));

  let fromStack = [];

  for (let i = 0; i < amount; ++i) {
    const peek = stacks[from - 1].peek();
    stacks[from - 1].pop();
    if (peek) fromStack.push(peek);
  }
  for (let n of fromStack.reverse()) {
    stacks[to - 1]?.push(n);
  }
}

let letters = [];
for (const stack of stacks) {
  letters.push(stack.peek().split("").at(-2));
}
console.log("ANSWER: ", letters.join(""));

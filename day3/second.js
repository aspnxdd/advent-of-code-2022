const content = await Deno.readTextFile("input", "UTF-8");

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letters = alphabet.split("");

// map each letter to a number
const letterMap = new Map();
for (let i = 0; i < letters.length; i++) {
  letterMap.set(letters[i].toLowerCase(), i + 1);
}
for (let i = 0; i < letters.length; i++) {
  letterMap.set(letters[i], i + 1 + 26);
}

const normalizedConent = content
  .split("\n")
  .map((line) => line.replace("\r", ""));

const groups = normalizedConent.reduce((acc, line, index) => {
  if (index % 3 === 0) {
    acc.push([]);
  }
  acc.at(-1).push(line);
  return acc;
}, []);

let totalScore = 0;

for (let group of groups) {
  group = group.sort((a, b) => a.length - b.length);
  const firstLine = group[0].split("");
  const secondLine = group[1].split("");
  const thirdLine = group[2].split("");

  let match = null;

  for (const letter of firstLine) {
    if (secondLine.includes(letter) && thirdLine.includes(letter)) {
      match = letter;
    }
  }

  if (match) {
    totalScore += letterMap.get(matches[0]);
  }
}
console.log({ totalScore });

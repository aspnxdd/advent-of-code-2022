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

let totalScore = 0;

for (const line of normalizedConent) {
  const firstHalf = line.slice(0, line.length / 2).split("");
  const secondHalf = line.slice(line.length / 2).split("");
  console.log(line);

  let match;
  for (let i = 0; i < firstHalf.length; i++) {
    if (firstHalf.includes(secondHalf[i])) {
      match = secondHalf[i];
      break;
    }
  }

  if (match) {
    totalScore += letterMap.get(match);
    continue;
  }
}

console.log(totalScore);

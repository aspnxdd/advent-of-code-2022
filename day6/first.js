const content = await Deno.readTextFile("input", "UTF-8");

let lastFour = [...content.slice(0, 4)];

function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}

for (let i = 0; i < content.length; i++) {
  const char = content[i];

  if (!hasDuplicate(lastFour)) {
    console.log("Next marker is: ", i);
    break;
  }
  lastFour.length === 4 && lastFour.shift();
  lastFour.push(char);
}

const content = await Deno.readTextFile("input", "UTF-8");

let lastFourteen = [...content.slice(0, 14)];

function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}

for (let i = 0; i < content.length; i++) {
  const char = content[i];

  if (!hasDuplicate(lastFour)) {
    console.log("Next marker is: ", i);
    break;
  }
  lastFourteen.length === 14 && lastFourteen.shift();
  lastFourteen.push(char);
}

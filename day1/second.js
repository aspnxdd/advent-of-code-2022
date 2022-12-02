const a = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

const caloriesGroup = a.split('\n');
let groups = [[]];

for (let x of caloriesGroup) {
  if (x === '') {
    groups.push([]);
  } else {
    groups.at(-1).push(parseInt(x));
  }
}


const topThreeFat = groups
  .map((i) => i.reduce((acc, curr) => acc + curr, 0))
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((acc, curr) => acc + curr, 0);

topThreeFat;

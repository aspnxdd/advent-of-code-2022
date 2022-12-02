const a = `A Y
B X
C Z`;

a.split('\n');

const ROCK = ['A', 'X'];
const PAPER = ['B', 'Y'];
const SCISSORS = ['C', 'Z'];

function whoWins(elfPlay, mePlay) {
  const mePoints = ROCK.includes(mePlay)
    ? 1
    : PAPER.includes(mePlay)
    ? 2
    : SCISSORS.includes(mePlay)
    ? 3
    : 0;
  const draw =
    (ROCK.includes(mePlay) && ROCK.includes(elfPlay)) ||
    (PAPER.includes(mePlay) && PAPER.includes(elfPlay)) ||
    (SCISSORS.includes(mePlay) && SCISSORS.includes(elfPlay));
  
  const win = (ROCK.includes(mePlay) && SCISSORS.includes(elfPlay)) ||
    (PAPER.includes(mePlay) && ROCK.includes(elfPlay)) ||
    (SCISSORS.includes(mePlay) && PAPER.includes(elfPlay));
  
  const lose = (SCISSORS.includes(mePlay) && ROCK.includes(elfPlay)) ||
    (ROCK.includes(mePlay) && PAPER.includes(elfPlay)) ||
    (PAPER.includes(mePlay) && SCISSORS.includes(elfPlay));

  if (lose) return 0 + mePoints;
  if (draw) return 3 + mePoints;
  if (win) return 6 + mePoints;
}
let counter = 0
for (const round of a.split('\n')) {
  const elf = round[0];
  const me = round[2];
  counter+= whoWins(elf, me)
}
console.log({counter})


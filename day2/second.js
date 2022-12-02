const a = `A Y
B X
C Z`;

a.split('\n');

const ROCK = ['A', 'X'];
const PAPER = ['B', 'Y'];
const SCISSORS = ['C', 'Z'];

const LOSE = "X"
const WIN = "Z"
const DRAW = "Y"

let counter2 = 0

for (const round of a.split('\n')) {
  const elf = round[0];
  const me = round[2];
  counter2+= partTwo(elf, me)
}

console.log({counter2})

function partTwo(elfPlay, mePlay){
  
  const lose = (()=>{
    if (ROCK.includes(elfPlay)){
      return 3
    }
    if (PAPER.includes(elfPlay)){
      return 1
    }
    if (SCISSORS.includes(elfPlay)){
      return 2 
    }
  })()
  
  const win = (()=>{
    if (ROCK.includes(elfPlay)){
      return 2 + 6
    }
    if (PAPER.includes(elfPlay)){
      return 3 + 6
    }
    if (SCISSORS.includes(elfPlay)){
      return 1 + 6
    }
  })()
  
  const draw = (()=>{
    if (ROCK.includes(elfPlay)){
      return 1 + 3
    }
    if (PAPER.includes(elfPlay)){
      return 2 + 3
    }
    if (SCISSORS.includes(elfPlay)){
      return 3 + 3
    }
  })()
  
  if (mePlay === LOSE){
    return lose
  }
   if (mePlay === WIN){
   return win
  }
   if (mePlay === DRAW){
   return draw
  }
}

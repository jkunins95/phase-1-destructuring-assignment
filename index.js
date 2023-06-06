const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const [firstAnimal, secondAnimal, thirdAnimal, fourthAnimal, fifthAnimal] = farmAnimals.split(' ');

let moo = firstAnimal;
let neigh = secondAnimal;
let baa = thirdAnimal;
let oink = fourthAnimal;
let cluck = fifthAnimal;

const animalSound = {
  firstAnimal: 'moo',
  secondAnimal: 'neigh',
  thirdAnimal: 'baa',
  fourthAnimal: 'oink',
  fifthAnimal: 'cluck'
};

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
let bessie = firstAnimal;
let dolly = thirdAnimal;
let babe = fourthAnimal;
let little = fifthAnimal;

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
let blackAndWhite = firstAnimal;
let black = thirdAnimal;
let pink = fourthAnimal;

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
const [firstColor, secondColor, thirdColor, fourthColor, fifthColor, sixthColor, seventhColor] = colors;

let red = firstColor;
let orange = secondColor;
let yellow = thirdColor;
let green = fourthColor;
let blue = fifthColor;
let indigo = sixthColor;
let violet = seventhColor;

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
let r = red;
let o = orange;
let y = yellow;
let g = green;
let b = blue;
let v = violet;

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
const indg = indigo;

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names
const {muppetName, color, song, job, partner} = muppet;

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const { song2, song4 } = nestedMuppet.album.theMuppetMovie;

const nestedMuppet2 = {...nestedMuppet, nestedJob:'Host of The Muppet Show', nestedPartner: 'Miss Piggy'}

let {nestedJob, nestedPartner} = nestedMuppet2;
console.log(nestedJob);
console.log(nestedPartner);
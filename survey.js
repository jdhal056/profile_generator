const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer1) => {
  rl.question('What is an activity you like doing? ', (answer2) => {
      rl.question('What do you listen to while doing that? ', (answer3) => {   
        rl.question('Which meal is your favorite? ', (answer4) => {    
          rl.question('What is your favorite thing to eat for that meal? ', (answer5) => {
            rl.question('Which sport is your absolute favorite? ', (answer6) => {
              rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              console.log(`${answer1} loves ${answer2} while listening to ${answer3}. ${answer1}'s favorite meal is ${answer4} and favorite food is ${answer5}. Their favorite sport is ${answer6}. ${answer1}'s superpower is ${answer7}.`)
              rl.close();
            });
          });
        });
      });
    });
  });
});
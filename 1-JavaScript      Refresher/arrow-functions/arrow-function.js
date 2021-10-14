// Normal-Arrow Function Explaination:

// Normal function:
function play(player, time) {
  console.log("play");
  console.log("the player is:", player);
}

play("shibu_A");

// Arrow function:
const fun = (game) => {
  console.log("fun ");
  console.log("game: ", game);
};

fun("cricket");

// when we have exactly one parameter, we can ommit () in syntax:
// const fun = game => {
//   console.log("fun ");
//   console.log("game: ", game);
// };

// fun("cricket");

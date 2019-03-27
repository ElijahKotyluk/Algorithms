// Write a function dirReduc which will take an array of strings and returns an array of strings
// with the needless directions removed (W<->E or S<->N side by side).

/**
* Function that reduces array by checking opposi
* @param {Array} a matrix a.
*/
const array = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];

const reduceDirections = (dirs) => {

  // Iterate through dirs argument.
  for(let i = 0; i < dirs.length; i++) {

    // If index is "NORTH" and index plus one is "SOUTH" remove both items,
    // then execute the next iteration.
    if(dirs[i] === "NORTH" && dirs[i + 1] === "SOUTH") {
      dirs.splice(i, 2);
      i-=2;
      continue;
    }

    // If index is "SOUTH" and index plus one is "NORTH" remove both items,
    // then execute the next iteration.
    if(dirs[i] === "SOUTH" && dirs[i + 1] === "NORTH") {
      dirs.splice(i, 2);
      i-=2;
      continue;
    }

    // If index is "EAST" and index plus one is "WEST" remove both items,
    // then execute the next iteration.
    if(dirs[i] === "EAST" && dirs[i + 1] === "WEST") {
      dirs.splice(i, 2);
      i-=2;
      continue;
    }

    // If index is "WEST" and index plus one is "EAST" remove both items,
    // then execute the next iteration.
    if(dirs[i] === "WEST" && dirs[i + 1] === "EAST") {
      dirs.splice(i, 2);
      i-=2;
      continue;
    }
  }
  return dirs;
}

console.log(reduceDirections(array));

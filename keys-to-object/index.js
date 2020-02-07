const keys = [
  "/dist/",
  "/dist/js/",
  "/index.html",
  "/image/screenshots/ios/ipad/temp/",
  "/dist/js/main.js",
  "/dist/css/main.css",
  "/image/hero_2x.png",
  "/image/screenshots/web/dashboard_2x.png"
];

// Helper function to determine whether or not a path chunk is a directory or a string
const isFile = (pathChunk) => pathChunk.includes('.'); // Bool

const keysToObjects = (input) => {

  let fileTree = {}; // Object that will be returned

  for (let path = 0; path < input.length; path++) { // Iterate through passed input glob
    const chunks = input[path].split('/'); // Split the path into chunks
    let lastObj = {};
    while (chunks.length > 0) {
      temp = {}; // temporary object to use for building the fileTree object
      const chunk = chunks.pop(); // string

      if (chunk && !isFile(chunk)) { // If the chunk is not an empty string ''
        temp[chunk] = lastObj;
        lastObj = temp[chunk];
      } else if (chunk && isFile(chunk)) {
        console.log('is file:', chunk);
        lastObj[chunk] = null;
      }
      console.log(temp);
    }
  }

  console.log('fileTree: ', fileTree);
  //return fileTree
}

function pathToObject(path) {
  // IMPLEMENT Me
  let pathChunks = path.split('/');
  let obj = {};

  while (pathChunks.length > 0) {
    let chunk = pathChunks.pop();
    if (chunk && !isFile(chunk)) {
      console.log(`${chunk} is not a file`);

      let temp = {};
      temp[chunk] = obj;
      obj = temp;
    } else if (chunk && isFile(chunk)) {
      console.log(`${chunk} is a file.`);
      obj[chunk] = null;
    }
  }

  return obj;
}


console.log(keysToObjects(keys));
console.log('pathToObject function: ', pathToObject(keys[4]));

/***** example output *****
{
  index.html: null,
  dist: {
    js: {
      main.js: null
    },
    css: {
      main.css: null
    }
  },
  image: {
    hero_2x.png: null,
    screenshots: {
      web: {
        dashboard_2x.png: null
      },
      ios: {
        ipad: {
          temp: {}
        }
      }
    }
  }
}
***************************/

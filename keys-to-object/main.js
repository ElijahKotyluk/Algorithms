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

/**
 * 
 * @description Helper function that recursively combines two objects to prevent a collision that
 *              would be caused by Object.assign(a, b) or spread operator merge { ...a, ...b }
 * @param {object} a
 * @param {object} b
 * @returns {Object} a
 */
const combineObjects = (a, b) => {
    for (prop in b) {
        if (!a[prop]) a[prop] = b[prop];

        if (typeof (b[prop] === 'object') || (typeof (a[prop]) !== 'object')) {
            combineObjects(a[prop], b[prop]);
        }
    }

    return a;
}

/**
 * @description Helper function to help determine whether or not a path chunk is a file or a directory
 * @param {string} pathChunk
 * @returns {boolean}
 */
const isFile = (pathChunk) => pathChunk.includes('.');

/**
 * @description Converts a path into path chunks by splitting at the delimeter('/'),
 *              then loops through the pathChunks array checking whether each chunk is a directory or file,
 *              and then recursively creates a nested object.
 * @param {string} path
 * @returns {object} obj
 */
const pathToObject = (path) => {
    let delimeter = '/';
    let pathChunks = path.split(delimeter);
    let obj = {};

    while (pathChunks.length > 0) {
        let chunk = pathChunks.pop();
        if (chunk && !isFile(chunk)) {
            let temp = {};
            temp[chunk] = obj;
            obj = temp;
        } else if (chunk && isFile(chunk)) {
            obj[chunk] = null;
        }
    }

    return obj;
}

/**
 * @description Converts a list of keys to a nested object.
 * @param {string[]} input
 * @returns {object} fileTree
 */
const keysToObjects = (input) => {
    let fileTree = {};

    for (let path = 0; path < input.length; path++) {
        let fileTreeProps = pathToObject(input[path]);

        fileTree = combineObjects(fileTree, fileTreeProps);
    }

    return fileTree;
}

console.log(`keysToObjects: ${keysToObjects(keys)}`)

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
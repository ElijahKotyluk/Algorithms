/*
*  Write a function that accepts two square matrices (nxn two dimensional arrays), and return the sum of the two.
*  Both matrices being passed into the function will be of size nxn (square), containing only integers.
*
*  How to sum two matrices:
*  Take each cell [n][m] from the first matrix, and add it with the [n][m] cell from the second matrix.
*  This will be cell [n][m] in the solution matrix.
*/

const matrix1 = [[1, 2, 3],
                 [3, 2, 1],
                 [1, 1, 1]];

const matrix2 = [[5, 3, 9],
                 [3, 4, 2],
                 [1, 3, 1]];

const matrix3 = [[10, 22, 12],
                [12, 54, 23],
                [0, 12, 22]];

const matrix4 = [[11, 31, 22],
                [38, 45, 24],
                [13, 31, 14]];

/**
 * Function to return the sum of two matrices.
 * @param {Array} a matrix a.
 * @param {Array} b matrix b.
 */
const matrixSum = (a, b) => {

  // Map through argument a.
  return a.map((array, i) => {

    // Map through the current value of array.
    return array.map((num, j) => {

      // Add the first index of array to the first index
      // of the first array in argument b.
      return num + b[i][j];
    });
  });
}

/*
 * Should return: [ [6, 5, 12],
 *                  [6, 6, 3],
 *                  [2, 4, 2] ]
*/
matrixSum(matrix1, matrix2);
console.log(matrixSum(matrix1, matrix2))

/*
 * Should return: [ [21, 53, 34],
 *                  [50, 99, 47],
 *                  [13, 43, 36] ]
*/
matrixSum(matrix3, matrix4);
console.log(matrixSum(matrix3, matrix4))

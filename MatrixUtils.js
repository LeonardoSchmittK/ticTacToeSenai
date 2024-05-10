function checkMainDiagonalEqual(matrix) {
  console.log(matrix);
  let counter = 0;
  let sign = matrix[0][counter];
  if (!sign) {
    return false;
  }
  for (let l = 0; l < matrix.length; ++l) {
    console.log(matrix[l][counter]);
    if (matrix[l][counter] != sign || !matrix[l][counter]) {
      return false;
    }
    counter++;
  }

  return true;
}

function checkSecondaryDiagonal(matrix) {
  let counter = 2;
  let sign = matrix[0][counter];
  if (!sign) {
    return false;
  }

  for (let l = 0; l < matrix.length; ++l) {
    console.log(matrix[l][counter]);
    if (matrix[l][counter] != sign || !matrix[l][counter]) {
      return false;
    }
    counter--;
  }

  return true;
}

function checkLinesEqual(matrix) {
  let sign = matrix[0][0];
  let counter = 0;
  let size = 0;

  for (let l = 0; l < matrix.length; ++l) {
    sign = matrix[l][counter];
    console.log(sign + "<<<");
    if (!sign) {
      return false;
    }
    for (let c = 0; c < matrix.length; ++c) {
      console.log(matrix[l][c]);
      if (matrix[l][c] != sign || !matrix[l][c]) {
        size = 0;
      } else if (matrix[l][c] == sign && matrix[l][c]) {
        size++;
      }

      if (size == 4) {
        return true;
      }
    }
    counter++;
  }
  return false;
}

function checkColumnsEqual(matrix) {
  let sign = matrix[0][0];
  let counter = 0;
  let size = 0;

  if (!sign) {
    return false;
  }
  for (let l = 0; l < matrix.length; ++l) {
    sign = matrix[l][counter];

    for (let c = 0; c < matrix.length; ++c) {
      console.log(matrix[c][l]);
      if (matrix[c][l] != sign || !matrix[c][l]) {
        size = 0;
      } else if (matrix[c][l] == sign && matrix[c][l]) {
        size++;
      }

      if (size == 4) {
        return true;
      }
    }
    counter++;
  }

  return false;
}

function buildSquaredMatrix(n, arr) {
  const newArr = [];
  let arrWithin = [];
  for (let i = 0; i <= arr.length; ++i) {
    if (i % n == 0 && i != 0) {
      newArr.push(arrWithin);
      arrWithin = [];
    }
    arrWithin.push(arr[i]);
  }
  return newArr;
}

const matrixTest = [
  ["X", "O", "X"],
  ["O", "O", "O"],
  ["", "", ""],
];

console.log(checkLinesEqual(matrixTest));

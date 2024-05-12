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
  // let sign = matrix[0][0];
  // let counter = 0;
  // let size = 0;

  // for (let l = 0; l < matrix.length; ++l) {
  //   sign = matrix[l][counter];
  //   if (!sign) {
  //     l = l + 1;
  //   }
  //   console.log(sign + "<<<");

  //   for (let c = 0; c < matrix.length; ++c) {
  //     console.log(matrix[l][c]);
  //     if (matrix[l][c] != sign || !matrix[l][c]) {
  //       size = 0;
  //     } else if (matrix[l][c] == sign && matrix[l][c]) {
  //       size++;
  //     }

  //     if (size == 3) {
  //       return true;
  //     }
  //   }
  //   counter++;
  // }
  // return false;

  let counter = 0;
  for (let i = 0; i < matrix.length; ++i) {
    const line = new Set(matrix[i]);
    console.log(line);
    if (line.size === 1 && !line.has("")) {
      return true;
    }

    counter++;
  }

  return false;
}
function getLineEqual(matrix) {
  let counter = 0;
  for (let i = 0; i < matrix.length; ++i) {
    const line = new Set(matrix[i]);
    console.log(line);
    if (line.size === 1 && !line.has("")) {
      return i;
    }

    counter++;
  }

  return false;
}

function checkColumnsEqual(matrix) {
  let counter = 0;

  for (let i = 0; i < matrix.length; ++i) {
    const line = new Set();
    while (counter < matrix.length) {
      line.add(matrix[counter][i]);

      counter++;
    }
    if (line.size === 1 && !line.has("")) {
      return true;
    }

    counter = 0;
  }

  return false;
}

function getColumnEqual(matrix) {
  let counter = 0;
  for (let i = 0; i < matrix.length; ++i) {
    const line = new Set();
    while (counter < matrix.length) {
      line.add(matrix[counter][i]);

      counter++;
    }
    if (line.size === 1 && !line.has("")) {
      return i;
    }

    counter = 0;
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
  ["O", "X", "N"],
  ["O", "X", "X"],
  ["O", "O", "N"],
];

console.log(checkColumnsEqual(matrixTest));

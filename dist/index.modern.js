function shiftArray(arr, shiftBy) {
  var result = new Array(arr.length);
  for (var i = 0; i < arr.length; i++) {
    result[(i + shiftBy) % arr.length] = arr[i];
  }
  return result;
}
function shuffleArray(array) {
  var shuffledArray = [].concat(array);
  for (var i = shuffledArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [shuffledArray[j], shuffledArray[i]];
    shuffledArray[i] = _ref[0];
    shuffledArray[j] = _ref[1];
  }
  return shuffledArray;
}
var createRandomCorrectBoard = function createRandomCorrectBoard() {
  var array2D = new Array(9);
  array2D[0] = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  for (var i = 1; i < 9; i++) {
    if (i === 3 || i === 6) {
      array2D[i] = shiftArray(array2D[i - 1], 1);
    } else {
      array2D[i] = shiftArray(array2D[i - 1], 3);
    }
  }
  return array2D;
};
var hideElements = function hideElements(grid, difficulty) {
  var cellsToHide;
  switch (difficulty) {
    case 'Easy':
      cellsToHide = 30;
      break;
    case 'Medium':
      cellsToHide = 40;
      break;
    case 'Hard':
      cellsToHide = 50;
      break;
    default:
      cellsToHide = 60;
      break;
  }
  var flatGrid = grid.flat();
  var cellsIndices = shuffleArray(Array.from(Array(81).keys()));
  for (var i = 0; i < cellsToHide; i++) {
    flatGrid[cellsIndices[i]] = 0;
  }
  var modifiedGrid = [];
  for (var _i = 0; _i < flatGrid.length; _i += 9) {
    modifiedGrid.push(flatGrid.slice(_i, _i + 9));
  }
  return modifiedGrid;
};
function createBoard(difficulty) {
  var sudukoBoardEmpty = createRandomCorrectBoard();
  var grid = hideElements(sudukoBoardEmpty, difficulty);
  return {
    grid: grid,
    solution: sudukoBoardEmpty
  };
}

export { createBoard };
//# sourceMappingURL=index.modern.js.map

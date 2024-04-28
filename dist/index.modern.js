function shiftArray(arr, shiftBy) {
  let result = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    result[(i + shiftBy) % arr.length] = arr[i];
  }
  return result;
}
function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
const createRandomCorrectBoard = () => {
  let array2D = new Array(9);
  array2D[0] = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  for (let i = 1; i < 9; i++) {
    if (i === 3 || i === 6) {
      array2D[i] = shiftArray(array2D[i - 1], 1);
    } else {
      array2D[i] = shiftArray(array2D[i - 1], 3);
    }
  }
  return array2D;
};
const hideElements = (grid, difficulty) => {
  let cellsToHide;
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
  const flatGrid = grid.flat();
  const cellsIndices = shuffleArray(Array.from(Array(81).keys()));
  for (let i = 0; i < cellsToHide; i++) {
    flatGrid[cellsIndices[i]] = 0;
  }
  const modifiedGrid = [];
  for (let i = 0; i < flatGrid.length; i += 9) {
    modifiedGrid.push(flatGrid.slice(i, i + 9));
  }
  return modifiedGrid;
};
function createBoard(difficulty) {
  const sudukoBoardEmpty = createRandomCorrectBoard();
  const grid = hideElements(sudukoBoardEmpty, difficulty);
  return {
    grid: grid,
    solution: sudukoBoardEmpty
  };
}

export { createBoard };
//# sourceMappingURL=index.modern.js.map

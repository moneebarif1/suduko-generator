// creating 9 * 9 random suduko game

function shiftArray(arr: number[], shiftBy: number) {
  let result = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    result[(i + shiftBy) % arr.length] = arr[i];
  }
  return result;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const createRandomCorrectBoard = () => {
  let array2D: number[][] = new Array(9);
  array2D[0] = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  for (let i = 1; i < 9; i++) {
    if (i === 3 || i === 6) {
      // Shift by 1 for 4th and 7th lines
      array2D[i] = shiftArray(array2D[i - 1], 1);
    } else {
      // Shift by 3 for other lines
      array2D[i] = shiftArray(array2D[i - 1], 3);
    }
  }

  return array2D;
};

const hideElements = (
  grid: number[][],
  difficulty: 'Default' | 'Easy' | 'Medium' | 'Hard' | 'Evil' | 'Impossible',
): number[][] => {
  let cellsToHide: number;
  switch (difficulty) {
    case 'Easy':
      cellsToHide = 30; // Adjust this number for easy difficulty
      break;
    case 'Medium':
      cellsToHide = 40; // Adjust this number for medium difficulty
      break;
    case 'Hard':
      cellsToHide = 50; // Adjust this number for difficult difficulty
      break;
    default:
      cellsToHide = 60; // Default to easy difficulty
      break;
  }

  // Flatten the 2D grid to a 1D array for easier manipulation
  const flatGrid = grid.flat();

  // Randomly select cells to hide
  const cellsIndices = shuffleArray(Array.from(Array(81).keys()));
  for (let i = 0; i < cellsToHide; i++) {
    flatGrid[cellsIndices[i]] = 0; // Set cell value to 0 (empty)
  }

  // Convert the modified 1D array back to a 2D grid
  const modifiedGrid: number[][] = [];
  for (let i = 0; i < flatGrid.length; i += 9) {
    modifiedGrid.push(flatGrid.slice(i, i + 9));
  }

  return modifiedGrid;
};

export function createBoard(
  difficulty: 'Default' | 'Easy' | 'Medium' | 'Hard' | 'Evil' | 'Impossible',
): {
  grid: number[][];
  solution: number[][];
} {
  const sudukoBoardEmpty = createRandomCorrectBoard();
  const grid = hideElements(sudukoBoardEmpty, difficulty);
  return {grid: grid, solution: sudukoBoardEmpty};
}

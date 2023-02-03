let players = ['x', 'o'];
let activePlayer = 0;
let board = [];

function startGame() {
  board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
  ];
  activePlayer = 0;
  renderBoard(board)
}

function click(row, col) {
  //отрисовка элемента
  board[row][col] = players[activePlayer];
  renderBoard(board)
  //проверка выигрыша
  for ( let cntRow = 0; cntRow < board.length; cntRow++){ // бегаем по строкам
    let testRow = []; //создаем пустую тестовую строку, куда будем ложить значения из board
    let rowActivePlayer = []; // создаем пустую строку с выигрышным значением
    for ( let cntCol = 0; cntCol < board.length; cntCol++){ // бегаем по столбцам
      testRow.push(board[cntRow][cntCol]) //собираем массив
      rowActivePlayer.push(players[activePlayer]) //собираем строку с которой будем сравнивать
    }
    //тут получаем строку в testRow
    if (testRow.join() === rowActivePlayer.join()) {
      showWinner(activePlayer);
    }
  }
  // console.log("*")
  for ( let cntCol = 0; cntCol < board.length; cntCol++){
    let testCol = [];
    let colActivePlayer = [];
    for ( let cntRow = 0; cntRow < board.length; cntRow++){
      testCol.push(board[cntRow][cntCol])
      colActivePlayer.push(players[activePlayer])
    }
    //тут получаем столбец в testCol
    if (testCol.join() === colActivePlayer.join()) {
      showWinner(activePlayer);
    }
  }
  //проверяем диагонали
  let testDiagonalL = [];
  let testDiagonalR = [];
  let diagonalActivePlayer = [];
  for ( let cnt = 0; cnt < board.length; cnt++){
    testDiagonalL.push(board[cnt][cnt]);
    testDiagonalR.push(board[board.length-1-cnt][cnt]);
    diagonalActivePlayer.push(players[activePlayer]);
  }
  //тут получаем диагональ в testDiagonal

  if (testDiagonalL.join() === diagonalActivePlayer.join()) {
    showWinner(activePlayer);
  }
  if (testDiagonalR.join() === diagonalActivePlayer.join()) {
    showWinner(activePlayer);
  }
  //передаём право другому игроку
  
   if (activePlayer === 0) {
     activePlayer = 1;
   } else {
     activePlayer = 0;
   }
}
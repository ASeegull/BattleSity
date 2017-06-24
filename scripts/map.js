$('.mapSelect button').click(mapValue); // Вішає на кнопку вибору рівня зміну карти

function mapValue() {
  var mapValue = $('#numb').val();

  if (mapValue > 3) {
    alert("Sorry, only 3 maps at the moment");
  }
  if (mapValue == 1) {
    setMap();
  }
  if (mapValue == 2) {
    setMap1();
  }
  if (mapValue == 3) {
    setMap2();
  }
}


function setMap() {
  //Map1
  aMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 3, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 3, 1, 0, 1, 3, 3, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 3, 1, 0, 1, 3, 3, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 3, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 3, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 1, 4, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 1, 4, 1, 0, 1, 4, 1, 0, 1, 0, 0, 0, 1, 4, 1, 0, 1, 4, 1, 0],
    [0, 0, 1, 0, 0, 0, 1, 4, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 4, 1, 0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 1, 4, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 4, 1, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
}

function setMap1() {
  //Map1
  aMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 4, 4, 4, 3, 0, 4, 4, 4, 4, 3, 0, 0, 4, 4, 4, 4, 3, 0, 0, 0, 0],
    [0, 0, 0, 3, 4, 3, 3, 3, 0, 0, 4, 3, 3, 3, 0, 0, 0, 4, 3, 3, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 4, 3, 0, 0, 0, 0, 4, 3, 3, 3, 0, 0, 0, 4, 3, 3, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 4, 3, 0, 0, 0, 0, 3, 4, 4, 4, 3, 0, 0, 3, 4, 4, 4, 3, 0, 0, 0, 0],
    [0, 0, 0, 3, 4, 3, 0, 0, 0, 0, 3, 3, 3, 4, 3, 0, 0, 3, 3, 3, 4, 3, 0, 0, 0, 0],
    [0, 0, 0, 3, 4, 3, 0, 0, 0, 0, 0, 0, 3, 4, 3, 0, 0, 0, 0, 3, 4, 3, 0, 0, 0, 0],
    [0, 0, 0, 3, 4, 3, 3, 3, 0, 0, 3, 3, 3, 4, 3, 0, 0, 3, 3, 3, 4, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 4, 4, 4, 3, 0, 4, 4, 4, 3, 0, 0, 3, 4, 4, 4, 3, 3, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
}

function setMap2() {
  //Map1
  aMap = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
}


function startGame() {
  var canvas, context;
  var imgBrick, imgSteel, imgWater, imgForest, imgTank, imgBullet;
  var iCellSize = 24,
    iPosTankX = 13,
    iPosTankY = 25,
    iXCnt = 26,
    iYCnt = 26,
    iRotate = 47;


  function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function drawScene() {
    clear();
    context.fillStyle = '#353131';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.save();

    for (var y = 0; y < iYCnt; y++) {
      for (var x = 0; x < iXCnt; x++) {
        switch (aMap[y][x]) {
          case 0:
            break;
          case 1: //brick
            context.drawImage(imgBrick, 0, 0, iCellSize, iCellSize, x * iCellSize, y * iCellSize, iCellSize, iCellSize);
            break;
          case 2: //steel
            context.drawImage(imgSteel, 0, 0, iCellSize, iCellSize, x * iCellSize, y * iCellSize, iCellSize, iCellSize);
            break;
          case 3: //wood
            context.drawImage(imgForest, 0, 0, iCellSize, iCellSize, x * iCellSize, y * iCellSize, iCellSize, iCellSize);
            break;
          case 4: //water
            context.drawImage(imgWater, 0, 0, iCellSize, iCellSize, x * iCellSize, y * iCellSize, iCellSize, iCellSize);
            break;
        }
      }
    }

    context.drawImage(imgTank, iRotate, 0, iCellSize, iCellSize, iPosTankX * iCellSize, iPosTankY * iCellSize, iCellSize, iCellSize);

    context.restore();
  }


  $(function () {
    canvas = document.getElementById('scene');
    canvas.width = iXCnt * iCellSize;
    canvas.height = iYCnt * iCellSize;
    context = canvas.getContext('2d');
    setMap();
  // Доступаємось до картинок для малювання мапи
    imgBrick = new Image();
    imgBrick.src = 'img/brick.png';
    imgSteel = new Image();
    imgSteel.src = 'img/steel.png';
    imgWater = new Image();
    imgWater.src = 'img/water.png';
    imgForest = new Image();
    imgForest.src = 'img/forest.png';
    imgTank = new Image();
    imgTank.src = 'img/tank.png';
  });


  setInterval(drawScene, 40);


  document.addEventListener('keydown', moving);
  document.addEventListener('keydown', shotting);

  function moving(e) {
    var target = e.keyCode;
    var move = $('.move')[0];  // обирає аудіо тег
    move.currentTime = 0.5;

    if (target === 37) {
      if (iPosTankX - 1 >= 0 && aMap[iPosTankY][iPosTankX - 1] === 0) {
        iRotate = 24;
        iPosTankX--;
        move.play();
      }

    } else if (target === 38) {
      if (iPosTankY - 1 >= 0 && aMap[iPosTankY - 1][iPosTankX] === 0) {
        iRotate = 48;
        iPosTankY--;
        move.play();
      }
    } else if (target === 39) {
      if (iPosTankX + 1 < iXCnt && aMap[iPosTankY][iPosTankX + 1] === 0) {
        iPosTankX++;
        iRotate = 0;
        move.play();
      }
    } else if (target === 40) {
      if (iPosTankY + 1 < iYCnt && aMap[iPosTankY + 1][iPosTankX] === 0) {
        iRotate = 72;
        iPosTankY++;
        move.play();
      }
    }
  }


  function shotting(e) {
    var target = e.keyCode;
    if (target === 32) {
    e.preventDefault(); // Щоб екран не дьоргався
    var shot = $('.gunshot')[0];
    shot.currentTime = 0;
    shot.play();
    }
  }
}





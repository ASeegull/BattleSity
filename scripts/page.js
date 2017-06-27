var $mapSelect = $('.mapSelect');
$mapSelect.hide();
$('#start').click(createBattleField);

function createBattleField() {
  var $battlefield = $('.battlefield');
  $battlefield.empty(); // clears page from headings and start button
  $('.begin')[0].play();

  $mapSelect.show(); // shows map's menu

  var $scene = $('<canvas/>', {
    id: 'scene'          // creates canvas
  });
  $scene.appendTo($battlefield); // and adds it to the page

  startGame();
}


// SmoothieControl - an app for jogging the axes on your Smoothieware powered machine

var UI = require('ui');
var Vector2 = require('vector2');

var main_menu = new UI.Menu({
  sections: [{
    items: [{
      title: "SmoothieControl",
      icon: "images/menu_icon.png",
      subtitle: "Choose a function"
    }, {
      title: "X axis",
      subtitle: "Jog the X axis"
    }, {
      title: "Y axis",
      subtitle: "Jog the Y axis"
    }, {
      title: "Z axis",
      subtitle: "Jog the Z axis"
    }]
  }]
});

main_menu.show();

main_menu.on('select', function(e) {
  var jogging_card = new UI.Card({
    title: "Jogging",
    scrollable: false
  });
  
  switch(e.itemIndex){
    case 0:
      break;
    case 1:
      // X axis
      jogging_card.title("X Axis");
      jogging_card.show();
      break;
    case 2:
      // Y axis
      jogging_card.title("Y Axis");
      jogging_card.show();
      break;
    case 3:
      // Z axis
      jogging_card.title("Z Axis");
      jogging_card.show();
      break;
    default:
      jogging_card.show();
      break;
  }
});
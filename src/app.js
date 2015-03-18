/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
//var Vector2 = require('vector2');

var main = new UI.Card({
  title: 'Gainz',
  icon: 'images/menu_icon.png',
  subtitle: 'Your personal workout regimen tracker.'
});

main.show();

var mainScreen = new UI.Menu({
  sections: [{
    items: [{
      title: 'Chest/Tri\'s',
    }, {
      title: 'Back/Biceps',
    },{
      title: 'Shoulders/Traps',
    },{
      title: 'LEG DAY',
    },{
      title: 'Arms'
    }]
  }]
});

var chest = new UI.Menu({
  sections: [{
    items: [{
      title: 'Chest 35',
    }, {
      title: 'DB Fly 35',
    },{
      title: 'Dips ALL',
    },{
      title: 'Pec Deck 105',
    },{
      title: 'Push Down 80',
    },{
      title: 'Incline 30',
    },{
      title: 'Overhead 40'
    }]
  }]
});

var back = new UI.Menu({
  sections: [{
    items: [{
      title: 'One Arm 35',
    }, {
      title: 'Pullups 75',
    },{
      title: 'Deadlift 110',
    },{
      title: 'Row 110',
    },{
      title: 'Lat Pull Down 120',
    },{
      title: 'Barbell Curls 50',
    }]
  }]
});

var back = new UI.Menu({
  sections: [{
    items: [{
      title: 'One Arm 35',
    }, {
      title: 'Pullups 75',
    },{
      title: 'Deadlift 110',
    },{
      title: 'Row 110',
    },{
      title: 'Lat Pull Down 120',
    },{
      title: 'Barbell Curls 50',
    }]
  }]
});

var shoulder = new UI.Menu({
  sections: [{
    items: [{
      title: 'Shoulder Press 30',
    }, {
      title: 'Side Raises 10',
    },{
      title: 'Traps 45',
    },{
      title: 'Reverse Pec Deck 70',
    },{
      title: 'Bent Over Lateral Raises 175',
    },{
      title: 'Front raises 10',
    }]
  }]
});

var legs = new UI.Menu({
  sections: [{
    items: [{
      title: 'Squats 110',
    }, {
      title: 'Leg Extension 115',
    },{
      title: 'Leg Press 135',
    },{
      title: 'Lunges 40',
    },{
      title: 'Seated Leg Curl 130',
    },{
      title: 'Lying Leg Curl 70',
    },{
      title: 'Calfs 90'
    }]
  }]
});

var arms = new UI.Menu({
  sections: [{
    items: [{
      title: 'Barbell Curl 40',
    }, {
      title: 'Preacher Curl Machine 70',
    },{
      title: 'Incline Hammer Curl 17.5',
    },{
      title: 'Preacher Curl 10',
    },{
      title: 'Push Downs 80',
    },{
      title: 'SkullCrushers 10',
    },{
      title: 'Dips all',
    },{
      title: 'Overhead extension 30'
    }]
  }]
});

setTimeout(function(){
  mainScreen.show();
  main.hide();
}, 2500);

mainScreen.on('select', function(e){
  switch(e.item.title){
    case 'Chest/Tri\'s':
      chest.show();
      break;
    case 'Back/Biceps':
      back.show();
      break;
    case 'Shoulders/Traps':
      shoulder.show();
      break;
    case 'LEG DAY':
      legs.show();
      break;
    case 'Arms':
      arms.show();
      break;
  }
});

/*
main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Pebble.js',
        icon: 'images/menu_icon.png',
        subtitle: 'Can do Menus'
      }, {
        title: 'Second Item',
        subtitle: 'Subtitle Text'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
});

main.on('click', 'select', function(e) {
  var wind = new UI.Window();
  var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Text Anywhere!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
  card.show();
});
*/
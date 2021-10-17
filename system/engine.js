function engine() {
  if (app.me.hp > 0) {
    event();
  } else {
    event(1);
  }
  app.me.turn++;
}

function event(type) {
  switch (type) {
    case 1:
      load('death');
      break;
    default:
      output = "";
      if (app.me.age == -1) {
        $("#log").html("");
        app.me.age += 1;
        load('birth');
      } else if (app.me.age < 4) { // 00 - 1, 3
        app.me.title = "아기";
        app.me.age += 2;
        load('c_00_00');
        // load('c_00_0' + dice(1, 3, -1));
      } else if (app.me.age < 8) { // 01 - 5, 7
        app.me.title = "유아";
        app.me.age += 2;
        load('c_00_01');
      } else if (app.me.age < 13) { // 02 - 8, 10, 12
        app.me.title = "어린이";
        app.me.age += 2;
        load('c_00_01');
      } else if (app.me.age < 17) { // 03 - 14, 15, 16
        app.me.title = "청소년";
        app.me.age += 1;
        load('c_00_01');
      } else if (app.me.age < 20) { // 04 - 17, 18, 19
        app.me.title = "학생";
        app.me.age += 1;
        load('c_00_01');
      } else if (app.me.age < 25) { // 05 - 20, 21, 22, 23, 24
        app.me.title = "막 어른이 된";
        app.me.age += 1;
        load('c_00_01');
      } else if (app.me.age < 30) { // 06 - 25, 26, 27, 28, 29
        app.me.title = "취업준비생";
        app.me.age += 1;
        load('c_00_01');
      } else if (app.me.age < 35) { // 07 - 30, 31, 32, 33, 34
        app.me.title = "사회초년생";
        app.me.age += 1;
        load('c_00_01');
      } else if (app.me.age < 41) { // 08 - 36, 38, 40
        app.me.title = "사회인";
        app.me.age += 2;
        load('c_00_01');
      } else if (app.me.age < 51) { // 09 - 45, 50
        app.me.title = "중년";
        app.me.age += 5;
        load('c_00_01');
      } else if (app.me.age < 61) { // 10 - 55, 60
        app.me.title = "장년";
        app.me.age += 5;
        load('c_00_01');
      } else if (app.me.age < 101) { // 11
        app.me.title = "노인";
        app.me.age += 5;
        load('c_00_01');
      } else {
        // } else if (app.me.age == 50) {
        load('death');
      }
  }
  // me();
  // output += '<br><br><button type="button" name="button" onclick="engine();">NEXT</button>'
}

// function me() {
//   // $('.var_age').text(app.me.age);
//   $.each(me, function(key, val) {
//     // console.log(key);
//     if (app.me.turn == 0) {
//       $('#vars').append("<span class='var_item var_" + key + "'></span>");
//     }
//     $('.var_' + key).text(key + ": " + val);
//     // load_content_title(key, val);
//     // load_navigat_title(key, val);
//     // $.each(val.contents, function(index, element) {
//     //   // if (localStorage["item_" + key + "_is_folded"] != "true") //감춰진 항목은 시작시 로드 안하게??
//     //   load_content_items(key, element);
//     //   load_navigat_items(key, element);
//     // });
//     // // console.log(key);
//     // check_item_folded(key);
//   });
// }
// console.log('init(inner) done: ' + (Date.now() - tiapp.me.init0) + ' ms');

function ageing(age) {
  if (age < 10) {
    app.me.age += 2;
  } else if (age < 20) {
    app.me.age += 1;
  } else if (age < 40) {
    app.me.age += 2;
  } else if (age < 50) {
    app.me.age += 3;
  }
}

var app = new Vue({
  el: '#me',
  data: {
    me: {
      title: 0,
      name: 0,

      age: -1,
      turn: 0,

      money: 0,
      spoon: 0,
      family: 0,

      hp: 1,
      hp_max: 1,
      mp: 1,
      mp_max: 1,
      str: 1,
      def: 1,
      dex: 1,

      creative: 1,
      challenging: 1,
      charisma: 1,
      cham: 1,
      sufferance: 1,
      sloth: 1,
    }
  }
})

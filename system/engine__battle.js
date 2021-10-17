/***********************************
 * Made by JinH @ jinh.tistory.com *
 ***********************************/

var battle_interval, is_win;
var output_position = "#battle";
var battle_time_interval = 1.5;
var battle_hpbar_length = 10;

// 입력 함수
function battle() {
  clear_battle(output_position);
  rows_battle = 1;

  var in_s = document.input_status;
  var out_b = document.output_battle;

  var name1 = app.me.name;
  var con1 = app.me.hp;
  var str1 = app.me.str * 5;
  var def1 = app.me.def * 5;
  var dex1 = app.me.dex * 5;

  var name2 = p2.name
  var con2 = app.me.hp;
  var str2 = app.me.str * 5;
  var def2 = app.me.def * 5;
  var dex2 = app.me.dex * 5;

  var turn = 0;
  var hp10 = Math.round(con1 * 10 + dice(1, con1, 0));
  var hp20 = Math.round(con2 * 10 + dice(1, con1, 0));
  hp1 = hp10;
  hp2 = hp20;

  // 준비 함수
  function ready(output_position) {
    messege += "야생의 " + name2 + "이(가) 나타났다! \n\n-------------------------------------\n\n";
    rows_battle += 16;
    $(output_position).text(messege);
  }

  // 전투 함수
  function fight(output_position) {
    ap1 = Math.round(str1 * str1 / def2 + dice(1, str1, 0));
    ap2 = Math.round(str2 * str2 / def1 + dice(1, str2, 0));

    if (hp1 > 0 && hp2 > 0) {
      turn++;
      // messege += "차례 " + turn + "\n";
      rows_battle += 1;
      attack_turn1 = dice(2, 10, dex1 / dex2);
      attack_turn2 = dice(2, 10, dex2 / dex1);
      if (attack_turn1 > attack_turn2) {
        rows_battle += 1;
        messege += name1 + "의 공격(" + name2 + "에게 " + ap1 + "의 타격을 주었다.)\n"
        hp2 -= ap1;
      } else if (attack_turn1 < attack_turn2) {
        rows_battle += 1;
        messege += name2 + "의 공격(" + name1 + "에게 " + ap2 + "의 타격을 주었다.)\n"
        hp1 -= ap2;
      } else {
        rows_battle += 1;
        messege += "크로스 카운터!(상대에게 각각 " + ap1 + "," + ap2 + "의 타격을 주었다.)\n"
        hp1 -= ap2;
        hp2 -= ap1;
      }

      hp_positive();

      rows_battle += 3;
      messege += "생명력1: " + hp_bar(hp1, hp10) + "(" + name1 + ", " + hp1 + "/" + hp10 + ")\n" + "생명력2: " + hp_bar(hp2, hp20) + "(" + name2 + ", " + hp2 + "/" + hp20 + ")";
      messege += "\n\n";
    } else {
      if (hp1 > 0) {
        rows_battle += 2;
        messege += name1 + "의 승리.";
        is_win = 0;
      } else if (hp2 > 0) {
        rows_battle += 2;
        messege += name2 + "의 승리.";
        is_win = 1;
      } else {
        rows_battle += 2;
        messege += "무승부.";
        is_win = 2;
      }
      clearInterval(battle_interval);
      setTimeout(function() {
        $('#battle').removeClass('on');
        battle_after(is_win);
      }, 2500);
    }
    $(output_position).text(messege);
    $(output_position).animate({
      scrollTop: $(output_position).prop('scrollHeight')
    }, 500);

  }

  ready(output_position)
  rows_battle += 2
  messege += "전투시작\n\n";

  battle_interval = setInterval(fight, battle_time_interval * 1000, output_position);
}

// 체력 게이지 함수
function hp_bar(hp, hp0) {
  var hp_bar = "";
  var hp_part = battle_hpbar_length;
  for (ii = 0; ii < hp_part; ii++) {
    if (hp / hp0 > ii / hp_part) {
      hp_bar += "■";
    } else {
      hp_bar += "□";
    }
  }
  return hp_bar;
}
// 주사위 함수
function dice(n, s, b) {
  var r = Math.random();
  var s_for = 0;
  var out2 = 0;
  for (jj = 0; jj < n; jj++) {
    for (ii = 0; ii < s; ii++) {
      s_for++;
      if (s_for >= s * r) {
        var out1 = s_for;
        break
      }
    }
    r = Math.random();
    s_for = 0;
    out2 = out2 + out1;
  }
  return out2 + b;
}
// 중단 함수
function clear_battle(output_position) {
  messege = "";
  $('#battle').addClass('on');
  $(output_position).text(messege);
  clearInterval(battle_interval);
}
// 체력 음수 방지
function hp_positive() {
  if (hp1 < 0) {
    hp1 = 0;
  }
  if (hp2 < 0) {
    hp2 = 0;
  }
}

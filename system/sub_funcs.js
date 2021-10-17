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


//이벤트 불러오기
function load(id) {
  $.ajax({
    type: 'get',
    url: "event/" + id + ".html",
    dataType: 'html',
    success: function(data) {
      // $("#log").html("");
      $('#log').append('<div class="c c' + app.me.turn + '">' + data + '</div>');
      $('html').animate({
        scrollTop: $('html').prop('scrollHeight')
      }, 1500);
    }
  });
}

// name
let name = [
  "민준", "서준", "도윤", "예준", "시우", "주원", "하준", "지호", "지후", "준서",
  "준우", "현우", "도현", "건우", "지훈", "우진", "선우", "서진", "민재", "현준",
  "연우", "유준", "정우", "승우", "시윤", "은우", "승현", "준혁", "지환", "승민",
  "유찬", "지우", "윤우", "민성", "준영", "시후", "진우", "지원", "수현", "재윤",
  "시현", "수호", "동현", "태윤", "민규", "재원", "한결", "이준", "민우", "재민",
  "은찬", "윤호", "시원", "민찬", "지안", "시온", "성민", "승준", "이안", "준호",
  "성현", "현서", "재현", "하율", "지한", "태민", "우빈", "태현", "민호", "지율",
  "지성", "예성", "서우", "민혁", "성준", "은호", "규민", "정민", "준", "지민",
  "윤성", "율", "윤재", "하진", "하람", "준수", "민석", "은성", "태양", "예찬",
  "준희", "도훈", "하민", "건", "지완", "준성", "승원", "현수", "우주", "정현",
  "태준", "강민", "승호", "주호", "성빈", "주안", "민서", "도영", "우현", "건희",
  "민수", "하랑", "주환", "다온", "정훈", "원준", "시훈", "시율", "지오", "민기",
  "현민", "경민", "시완", "서율", "현성", "승윤", "동하", "주영", "태훈", "도율",
  "동건", "재훈", "태영", "민건", "가온", "호준", "재준", "승빈", "시환", "세현",
  "이현", "태경", "도원", "도경", "정후", "재영", "정원", "현진", "서후", "라온",
  "영준", "찬영", "상현", "현승", "윤", "범준", "온유", "로운", "승훈", "재하",
  "현", "성윤", "이든", "주혁", "찬우", "하윤", "연준", "동윤", "성훈", "우성",
  "승재", "찬희", "건호", "세준", "동욱", "태율", "수민", "태호", "유건", "도하",
  "승찬", "윤찬", "지혁", "태우", "단우", "현호", "산", "윤후", "현빈", "찬",
  "재우", "준석", "시안", "주현", "연호", "효준", "형준", "지운", "규빈", "성우",
  "서연", "서윤", "지우", "서현", "민서", "하은", "하윤", "윤서", "지유", "지민",
  "채원", "수아", "지윤", "은서", "다은", "예은", "지아", "수빈", "소율", "예린",
  "예원", "지원", "소윤", "지안", "하린", "시은", "유진", "채은", "윤아", "유나",
  "가은", "서영", "민지", "서아", "예진", "수민", "수연", "연우", "예나", "예서",
  "주아", "시연", "연서", "하율", "다인", "시아", "아인", "다연", "현서", "아린",
  "유주", "서은", "서우", "하연", "서율", "채윤", "서진", "지율", "유빈", "나윤",
  "수현",
  "예지",
  "다현",
  "나은",
  "소은",
  "나연",
  "아윤",
  "지은",
  "민주",
  "사랑",
  "서하",
  "시현",
  "윤지",
  "예빈",
  "지현",
  "소연",
  "혜원",
  "은채",
  "지수",
  "주하",
  "승아",
  "채아",
  "다윤",
  "소민",
  "서희",
  "민아",
  "하영",
  "나현",
  "세아",
  "세은",
  "채린",
  "도연",
  "규리",
  "아영",
  "다온",
  "지연",
  "가윤",
  "예림",
  "민채",
  "태희",
  "주은",
  "시윤",
  "유정",
  "연아",
  "아현",
  "보민",
  "민정",
  "소현",
  "수진",
  "민경",
  "정원",
  "현지",
  "나경",
  "가현",
  "세연",
  "윤하",
  "은지",
  "지효",
  "가연",
  "가온",
  "라희",
  "예슬",
  "채연",
  "한별",
  "현아",
  "하늘",
  "소희",
  "유림",
  "유하",
  "효주",
  "채민",
  "은솔",
  "봄",
  "가영",
  "소이",
  "주연",
  "예주",
  "하진",
  "유리",
  "혜린",
  "다희",
  "하랑",
  "윤슬",
  "설아",
  "태연",
  "하나",
  "은우",
  "다혜",
  "다솜",
  "하람",
  "혜인",
  "유민",
  "재인",
  "지혜",
  "수인",
  "승연",
  "재이",
  "다빈",
  "리아",
  "지영",
  "수정",
  "시온",
  "채영",
  "은유",
  "주원",
  "태린",
  "고은",
  "태은",
  "지후",
  "아라",
  "소영",
  "수지",
  "민하",
  "나영",
  "단아",
  "은별",
  "서인",
  "보경",
  "다영",
  "가빈",
  "주희",
  "정민",
  "채현",
  "예솔",
  "시우",
  "효린",
  "지온",
  "정윤",
  "라온",
  "은재",
  "세빈",
  "소정",
  "채이",
  "한나",
  "서빈",
  "예담",
  "아진",
  "슬아",
  "연재",
  "해인"
]

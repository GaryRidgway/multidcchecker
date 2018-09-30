var data = [];

$(document).ready(function() {
  setup();
});

function setup() {
  data['chars'] = [
  ["Shell Makrin", 10],
  ["Bello Lita", 13],
  ["Vrrangth Gilo", 11],
  ["Krill Everclaw", 13],
  ["Hermes Tabernac", 16],
  ["Faesh Helt", 14],
  ["Kirin Crawspear", 8],
  ["Shiva Mahryan", 8],
  ["Mika Kimo", 9],
  ["Monra Thel", 30],
  ["Grelt Non", 30],
  ["Saana Annh", 30],
]
  insertChar(data['chars']);
  attachCheck();
}

function insertChar(charArray) {
  charArray.forEach(function(char) {
    charName = char[0];
    charDC   = char[1];
    $("#dc-char-list").append("\
      <div class='character' dc = '" + charDC + "'>\
        <div class='char-name'>" + charName + "</div>\
        <div class='char-pass'> Waiting for check </div>\
      </div>\
    ");
  });
}

function dcCheck(dc) {
  $('.character').each(function() {
    if (Number($(this).attr('dc')) < dc) {
      $(this).find('.char-pass').html('Passed');
      $(this).addClass('passed');
      $(this).removeClass('failed');
    }
    else {
      $(this).find('.char-pass').html('Failed');
      $(this).addClass('failed');
      $(this).removeClass('passed');
    }
  });
}

function attachCheck() {
  $('#dc-input').bind("enterKey",function(e){
    dcCheck($(this).val());
  });
  $('#dc-input').keydown(function(e){
    if(e.keyCode == 13)
    {
      console.log('meh');
      $(this).trigger("enterKey");
    }
  });
}














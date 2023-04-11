var g = G$('Ali', 'Veli');
g.greet().setLang('tr').greet(true);

$('#login_btn').click(function () {
  var ahmetGrtr = G$('Ahmet', 'Mehmet');
  $('#login_div').hide();
  var lang = $('#lang').val();
  ahmetGrtr.setLang(lang).HTMLGreeting('#greeting', true).log();
});

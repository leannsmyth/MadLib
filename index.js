var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", appendMadLib);

function appendMadLib() {
  var name1 = $('.name1').val();
  var adjective1 = $('.adjective1').val();
  var celebrity = $('.celebrity').val();
  var year = $('.year').val();
  var noun1 = $('.noun1').val();
  var number1 = $('.number1').val();
  var adjective2 = $('.adjective2').val();
  var plant = $('.plant').val();
  var place = $('.place').val();
  var adverb = $('.adverb').val();
  var song = $('.song').val();
  var shape = $('.shape').val();
  var noun2 = $('.noun2').val();
  var verb = $('.verb').val();

  cardContainer.append(`
    <p class="name-card">           Welcome to the University of ${name1}.
    Our ${adjective1} campus was founded by ${celebrity} and built in ${year}.
    We begin at our ${noun1} building.
    This building houses ${number1} classrooms.
    To your left, the ${adjective2} dormitory is visible just beyond the ${plant}.
    Our students come from all over the ${place} because we ${adverb} accept anyone who applies.
    The marching band is practicing our Alma Mater, ${song} Notice how they march in a ${shape} formation, it is
the signature move of our University.</p>
<p>
  More information is available on our website, ${noun2}.com.</p>
  <p>
  Thank you for ${verb} with us today!</p>`);



  $('.name1').val("");
  $('.adjective1').val("");
  $('.celebrity').val("");
  $('.year').val("");
  $('.noun1').val("");
  $('.number1').val("");
  $('.adjective2').val("");
  $('.plant').val("");
  $('.adverb').val("");
  $('.song').val("");
  $('.shape').val("");
  $('.noun2').val("");
  $('.verb').val("");


}

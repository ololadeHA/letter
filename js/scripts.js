$(document).ready(function(){
  
  $("#formOne").submit(function(e) {
    const name1Input = $("input#name1").val();
    const name2Input = $("input#name2").val();
    const addressInput = $("input#address").val();
    const stateInput = $("input#state").val();
    const email1Input = $("input#email1").val();

    $(".name1").text(name1Input);
    $(".name2").text(name2Input);
    $(".address").text(addressInput);
    $(".state").text(stateInput);
    $(".email1").text(email1Input);

  $(".letter").show();

  e.preventDefault()
 });

})
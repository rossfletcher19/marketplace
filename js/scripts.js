$(document).ready(function() {
  $("#form1").submit(function(event) {
    var fName = $("input#firstName").val();
    var lName = $("input#lastName").val();
    var address = $("input#address").val();
    var city = $("input#city").val();
    var zipCode = $("input#zipCode").val();
    var state = $("#state").val();

    $(".firstName").text(fName);
    $(".lastName").text(lName);
    $(".address").text(address);
    $(".city").text(city);
    $(".zipCode").text(zipCode);
    $(".state").text(state);

    $("#receipt").show();
    $("#form-for-market").hide();
    event.preventDefault();
  });
});

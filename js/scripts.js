$(document).ready(function() {
  $("form#survey").submit(function() {
    event.preventDefault();
    var place = $("input:radio[name=place]:checked").val();
    var binary = $("input:radio[name=binary]:checked").val();

    console.log(place)
    console.log(binary)

    if (place === "monster" && binary === "light") {
      $('#jarjar').show();
    } else if (place === "robot" && binary === "light") {
      $('#r2d2').show();
    } else if (place === "human" && binary === "light") {
      $('#luke').show();
    } else if (place === "monster" && binary === "dark") {
      $('#sith').show();
    } else if (place === "robot" && binary === "dark") {
      $('#darth').show();
    } else if (place === "human" && binary === "dark") {
      $('#kylo').show();
    }
  });
});

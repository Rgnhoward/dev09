// Shorthand for $( document ).ready()
$(function () {
  console.log("ready!");
  //clear and reset textbox on each reload
  $("#textOutput").text("");

  //Go! - SendText button 'on click' event listener
  $("#btnSendText").on("click", function (e) {
    e.preventDefault();

    //Get input by text Value
    var getInput = $("#textInput").val();
    //display text Output in <span> with different CSS properties
    $("#textOutput")
      .append("<p>" + getInput + "</p>")
      .addClass("blue", ".bubble");
    //Display user text on keypress
    $("#newText").keypress(function () {
      var txt = $("#charOutput").text();
      $("#charOutput").text(txt + String.fromCharCode(event.keyCode));
    });  
  //  Search Box FIlter anything
    $(document).ready(function () {
    $("#anythingSearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".form-control mr-sm-2").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
    //$("#newOutput").change(function () {
    //  $(#textInput).val;
    //  $(#textInput).html(input.val).split("");
    //i;

    //$(document).append("").splitString.length;
    //});

    //Output text message click/key event split string text
    //    $("span").click(function () {
    //      var str = //document.getElementById("newText");
    //     var res = str.split();
    // document.getElementById("#charOutput").innerHTML = res;
    //
    //});

    //Draggable text function
    //    $(function () {
    //      $("#draggable").draggable();
    });  //    });
  });
});
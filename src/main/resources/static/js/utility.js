$(document).ready(function () {
  // Listen to click event on the submit button
  $('#button').click(function (e) {

    e.preventDefault();

    var numbers = $("#numbers").val();

    $.ajax({
		  type: "POST",
		  url: "/average",
		  data: numbers,
		  success: function(data){$("#result").html(data)},
		  dataType: "text",
		  contentType: "text/plain"
		});
  });
});

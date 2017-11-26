function call(e, path) {
	e.preventDefault();
	  $.ajax({
		  type: "GET",
		  url: path,
		  success: function(data){$("#main_portion").html(data)},
		  dataType: "text",
		  contentType: "text/plain"
		});
}

$(document).ready(function () {
  // Listen to click event on the submit button
  $('#button').click(function (e) {

    e.preventDefault();

    var numbers = $("#numbers").val();

    $.ajax({
		  type: "POST",
		  url: "/desc",
		  data: numbers,
		  success: function(data){$("#desc").html(data)},
		  dataType: "text",
		  contentType: "text/plain"
		});
    
    $.ajax({
		  type: "POST",
		  url: "/summary",
		  data: numbers,
		  success: function(data){$("#summary").html(data)},
		  dataType: "text",
		  contentType: "text/plain"
		});
  });
  
  $('#contact').click(function (e) {
	  call(e, "/contact");
  });
  
  $('#statistics').click(function (e) {
	  call(e, "/statistics");
  });
  
  $('#machine_learning').click(function (e) {
	  call(e, "/machine_learning");
  });
  
  $('#linear_algebra').click(function (e) {
	  call(e, "/linear_algebra");
  });
  
  $('#team').click(function (e) {
	  call(e, "/team");
  });
  
	  
});

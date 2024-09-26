jQuery(document).ready(function($) {

  $("#contactForm").submit(function() {
    var str = $(this).serialize();

    $.ajax({
      type: "POST",
      url: "contact.php",
      data: str,
      success: function(msg) {
        if(msg == 'OK') {
          $("#successMessage").show();
        } else {
          $("#successMessage").show();
        }
      }
    });
    return false;
  });
});
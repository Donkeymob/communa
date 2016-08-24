$(document).ready (function(){
            $("#success-alert").hide();
            $("#myWish").click(function showAlert() {
                $("#success-alert").alert();
                $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
               $("#success-alert").alert('close');
                });
            });

  var type_text = $('#type_text');
  // sync with css animation
  // type_text.text('Give Opinion').delay(2000).text('Earn rewards');
  type_text.text('give opinion');
  var switch_text_timer = window.setTimeout( switch_text, 2000 );
  function switch_text(){
  	type_text.text('earn rewards')
  }
});

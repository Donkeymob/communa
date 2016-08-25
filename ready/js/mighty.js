$(document).ready (function(){
            $("#success-alert").hide();
            $("#myWish").click(function showAlert() {
                $("#success-alert").alert();
                $("#success-alert").fadeTo(2000, 500).slideUp(500, function(){
               $("#success-alert").alert('close');
                });
            });

  var type_text = $('#type_text');
  type_text.text(type_text.attr('data-tw-a'));
  // sync with css animation
  var switch_text_timer = window.setInterval( switch_text, type_text.attr('data-tw-time') );
  var toggler = 0;
  function switch_text(){
  	if(toggler === 0){
  		type_text.text(type_text.attr('data-tw-b'));
  		toggler = 1;
  	}else{
  		type_text.text(type_text.attr('data-tw-a'));
  		toggler = 0;
  	}
  }
});

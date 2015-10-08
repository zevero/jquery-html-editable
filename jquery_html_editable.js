(function ( $ ) {
  'use strict';
  $.fn.html_editable = function( target ) {
    target = target || 'div.html_editable';
    this.on('click',target, function() { //hide $el, show $texterea (mark with a class - just in case)
      var $el = $(this).hide();
      var $textarea = $('<textarea>').addClass('html_editable_').text($el.text());
      $el.after($textarea);
      $textarea.css({minHeight: $textarea[0].rows+1+'em', overflow:'hidden'}).focus();
    });
    this.on('blur',target + ' + textarea.html_editable_', function() { //on blur write everything back
      var $textarea = $(this);
      var text = $textarea.val()
        .replace(/&/g, '&amp;')
				.replace(/"/g, '&quot;')
				.replace(/'/g, '&#39;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				.replace(/ /g, '&nbsp;')
				.replace(/\n/g, '<br>');
      var $el = $textarea.prev();
      $el.html(text).show();
      $textarea.remove();
    });
    return this;
  };
}( jQuery ));
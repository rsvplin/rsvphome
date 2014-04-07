(function ($) {
  $(function(){
    $('div.ckfacebook').hide().each(function() {
      fbwidth = $(this).parent().width();
      fburl = encodeURIComponent('/'+$(this).data('username'));
      $(this).before('<iframe src="//www.facebook.com/plugins/likebox.php?href='+fburl+'&amp;width='+fbwidth+'&amp;height=300&amp;colorscheme='+Drupal.settings.ckeditor_socialmedia.facebook_colorscheme+'&amp;show_faces=false&amp;border_color&amp;stream=true&amp;header=true" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:'+fbwidth+'px; height:300px;" allowTransparency="true"></iframe>');
    });
  });
})(jQuery);

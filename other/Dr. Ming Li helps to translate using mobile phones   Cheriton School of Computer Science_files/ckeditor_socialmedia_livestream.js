(function ($) {
  $(function(){
    $('div.cklivestream').hide().each(function() {
      lswidth = 500;
      lsheight = 307;
      lsfitwidth = $(this).parent().width();
      lsfitheight = Math.floor(lsfitwidth / lswidth * lsheight);
      lsurl = encodeURIComponent($(this).data('username'));
      //note: using HTTP for <a href> because Livestream has certificate problems.
      $(this).before('<iframe width="'+lsfitwidth+'" height="'+lsfitheight+'" src="http://cdn.livestream.com/embed/'+lsurl+'?layout=4&width='+lsfitwidth+'&height='+lsfitheight+'&color=0x'+Drupal.settings.ckeditor_socialmedia.livestream_color+'&iconColor=0x'+Drupal.settings.ckeditor_socialmedia.livestream_icon_color+'&iconColorOver=0x'+Drupal.settings.ckeditor_socialmedia.livestream_icon_color_over+'" style="border:0;outline:0" frameborder="0" scrolling="no"></iframe><div><a href="http://www.livestream.com/'+lsurl+'">Watch video on Livestream.com</a></div>');
    });
  });
})(jQuery);

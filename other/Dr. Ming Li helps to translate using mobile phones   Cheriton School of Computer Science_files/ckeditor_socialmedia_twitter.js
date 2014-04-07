(function ($) {
  $(function(){
    count = 0;
    $('div.cktwitter').hide().each(function() {
      count++;
      //get variables
      twtype = $(this).data('type');
      twuser = $(this).data('username');
      twlist = $(this).data('listname');
      twsearch = $(this).data('search');
      twdisplay = $(this).data('displayname');
      //create div and widget (NOTE: 'subject' and 'title' have no effect on profile widgets)
      twdiv = "<div id=\"cktwitter"+count+"\" class=\"cktwitter_widget\"><script>new TWTR.Widget({  version: 2, type: '"+twtype+"',";
      if (twtype == 'search') {
        twdiv += " search: '"+twsearch+"',";
        twdiv += " title: 'Posts for',";
        twdiv += " subject: '"+twdisplay+"',";
      } else if (twtype == 'faves') {
        twdiv += " title: 'Favourites for',";
        twdiv += " subject: '"+twdisplay+"',";
      } else if (twtype == 'list') {
        twdiv += " title: 'List of',";
        twdiv += " subject: '"+twdisplay+"',";
      }
      twdiv += " rpp: 6, interval: 30000, width: 'auto', height: 207, footer: '', id: 'cktwitter"+count+"', theme: { shell: {background: '#"+Drupal.settings.ckeditor_socialmedia.twitter_shell_background+"', color: '#"+Drupal.settings.ckeditor_socialmedia.twitter_shell_foreground+"'}, tweets:{background: '#"+Drupal.settings.ckeditor_socialmedia.twitter_tweets_background+"', color: '#"+Drupal.settings.ckeditor_socialmedia.twitter_tweets_foreground+"', links: '#"+Drupal.settings.ckeditor_socialmedia.twitter_tweets_links+"'}}, features: {scrollbar: true, loop: false, live: true, behavior: 'all'}}).render()";
      if (twtype == 'profile' || twtype == 'faves') {
        twdiv += ".setUser('"+twuser+"')";
      } else if (twtype == 'list') {
        twdiv += ".setList('"+twuser+"', '"+twlist+"')";
      }
      twdiv += ".start();</script></div>";
      $(this).before(twdiv);
    });
  });
})(jQuery);

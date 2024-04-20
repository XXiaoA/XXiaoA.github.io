(function() {
  var times = document.getElementsByTagName('time');
  if (times.length === 0) { return; }
  var posts = document.getElementsByClassName('post-content');
  if (posts.length === 0) { return; }

  var pubTime = new Date(times[0].dateTime);  /* 文章发布时间戳 */
  var now = Date.now()  /* 当前时间戳 */
  var interval = parseInt(now - pubTime)
  /* 发布时间超过指定时间（毫秒） */
  if (interval > 3600*24*30*6*1000 && interval <= 3600*24*30*12*1000){
    var days = parseInt(interval / 86400000)
    posts[0].innerHTML = '<div class="note note-info" style="font-size:0.9rem"><p>' +
      '<div class="h6">Article Timeliness Reminder</div><p>This article has been ' + days + ' days since the first publication, the content of the article may be outdated.' +
      '</p></p></div>' + posts[0].innerHTML;
  }else if (interval > 3600*24*30*12*1000){
    var days = parseInt(interval / 86400000)
    posts[0].innerHTML = '<div class="note note-warning" style="font-size:0.9rem"><p>' +
      '<div class="h6">Article Timeliness Reminder</div><p>This article has been ' + days + ' days since the first publication, the content of the article may be outdated.' +
      '</p></p></div>' + posts[0].innerHTML;
  }
})();

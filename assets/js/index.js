$('a[href^=#]').click(function () {
  var speed = 400,
    href = $(this).attr("href"),
    target = $(href === "#" || href === "" ? 'html' : href),
    position = target.offset().top;
  $("html, body").animate({scrollTop: position}, speed, "swing");
  return false;
});
$('.js-drawer-toggle').click(function(){
  $('.drawer').toggleClass('drawer--closed');
});

//set jQuery action

$("#scroller").click(function (e) {
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    1000
  );
});

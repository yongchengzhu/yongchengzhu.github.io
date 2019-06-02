const counterTopOffset = $('.counter').offset().top;
let   counted = false;

$(window).on('scroll', () => {
  if (!counted && window.pageYOffset + window.innerHeight > counterTopOffset) {
    $('.counter').each(function() {
      const element = $(this);

      element.countup(parseInt(element.text()));

      counted = true;
    });
  }
});

if (!counted && window.pageYOffset + window.innerHeight > counterTopOffset) {
  $('.counter').each(function() {
    const element = $(this);

    element.countup(parseInt(element.text()));
  });

  counted = true;
}

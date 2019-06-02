const counterTopOffset = $('.counter').offset().top;
let   counted = false;

console.log("counterTopOffset: " + counterTopOffset);

$('.counter').each(function() {
  const element = $(this);

  element.countup(parseInt(element.text()));
});

$(window).on('scroll', () => {
  if (!counted && window.pageYOffset + window.innerHeight > counterTopOffset) {
    $('.counter').each(function() {
      const element = $(this);

      element.countup(parseInt(element.text()));

      counted = true;
    });
  }
});

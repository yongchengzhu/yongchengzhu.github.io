//
// Offset Variables
//
const itemTopOffset          = $('.item').offset().top;
let   viewPortBottomOffset   = window.pageYOffset + window.innerHeight;

//
// Main Logics
//
renderPieCharts(viewPortBottomOffset, itemTopOffset);

$(window).on('scroll', () => {
  const viewPortBottomOffset = window.pageYOffset + window.innerHeight;

  renderPieCharts(viewPortBottomOffset, itemTopOffset);
});

//
// Render Functions
//
function renderPieCharts(viewPortBottomOffset, itemTopOffset) {
  if (viewPortBottomOffset > itemTopOffset) {
    $('.chart').easyPieChart({
      barColor: "#fff",
      trackColor: false,
      scaleColor: false,
      lineWidth: 6,
      size: 152
    });
  }
}

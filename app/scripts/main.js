$("document").ready(function () {
timeline();
});

// rollover effect on timeline
function timeline () {
  $(".timeline-nav article:first-of-type").hover(
    function() {
      $("#timeline").prop("src", "images/timeline-reconstruction.png");
    }, function () {
      $("#timeline").prop("src", "images/timeline.png");
    }
  );  
};

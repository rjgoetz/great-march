$("document").ready(function () {
	reconstructionImageHover();
	jimcrowImageHover();
	civilrightsImageHover();
	greatmarchImageHover();
});

// rollover effect on timeline images
function reconstructionImageHover () {
  $(".timeline-nav article:first-of-type").hover(
    function() {
      $("#timeline").prop("src", "images/timeline-reconstruction.png");
    }, function () {
      $("#timeline").prop("src", "images/timeline.png");
    }
  );  
};

function jimcrowImageHover () {
  $(".timeline-nav article:nth-of-type(2)").hover(
    function() {
      $("#timeline").prop("src", "images/timeline-jim-crow.png");
    }, function () {
      $("#timeline").prop("src", "images/timeline.png");
    }
  );  
};

function civilrightsImageHover () {
  $(".timeline-nav article:nth-of-type(3)").hover(
    function() {
      $("#timeline").prop("src", "images/timeline-civil.png");
    }, function () {
      $("#timeline").prop("src", "images/timeline.png");
    }
  );  
};

function greatmarchImageHover () {
  $(".timeline-nav article:last-of-type").hover(
    function() {
      $("#timeline").prop("src", "images/timeline-mlk.png");
    }, function () {
      $("#timeline").prop("src", "images/timeline.png");
    }
  );  
};

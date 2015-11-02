"use strict";
/*global $*/

// rollover effect on timeline images
function reconstructionImageHover() {
	$(".timeline-nav div:first-of-type .overlay").hover(
		function() {
		$("#timeline").prop("src", "images/timeline-reconstruction.png");
		$("#reconstruction-nav").prop("src", "images/abe-lincoln-on.jpg");
		}, function () {
		$("#timeline").prop("src", "images/timeline.png");
		$("#reconstruction-nav").prop("src", "images/abe-lincoln.jpg");
    }
  );
}

function jimCrowImageHover() {
  $(".timeline-nav div:nth-of-type(2) .overlay").hover(
    function() {
      $("#timeline").prop("src", "images/timeline-jim-crow.png");
			$("#jim-crow-nav").prop("src", "images/disfranchisement-on.jpg");
    }, function () {
      $("#timeline").prop("src", "images/timeline.png");
			$("#jim-crow-nav").prop("src", "images/disfranchisement.jpg");
    }
  );
}

function civilRightsImageHover() {
  $(".timeline-nav div:nth-of-type(3) .overlay").hover(
    function() {
      $("#timeline").prop("src", "images/timeline-civil.png");
			$("#civil-rights-nav").prop("src", "images/brown-vs-board-of-education-on.jpg");
    }, function () {
      $("#timeline").prop("src", "images/timeline.png");
			$("#civil-rights-nav").prop("src", "images/brown-vs-board-of-education.jpg");
    }
  );
}

function greatMarchImageHover() {
  $(".timeline-nav div:last-of-type .overlay").hover(
    function() {
      $("#timeline").prop("src", "images/timeline-mlk.png");
			$("#great-march-nav").prop("src", "images/martin-luther-king-on.jpg");
    }, function () {
      $("#timeline").prop("src", "images/timeline.png");
			$("#great-march-nav").prop("src", "images/martin-luther-king.jpg");
    }
  );
}

//rollover image swap on reconstruction subnav
function reconstructionSubNavHover() {
	$(".timeline-nav div:first-of-type .period-subnav li:first-of-type a").hover(
    function() {
			$("#timeline").prop("src", "images/timeline-reconstruction.png");
			$("#reconstruction-nav").prop("src", "images/abe-lincoln-on.jpg");
    }, function () {
			$("#timeline").prop("src", "images/timeline.png");
      $("#reconstruction-nav").prop("src", "images/abe-lincoln-on.jpg");
    }
  );
	$(".timeline-nav div:first-of-type .period-subnav li:nth-of-type(2) a").hover(
    function() {
			$("#timeline").prop("src", "images/timeline-reconstruction.png");
			$("#reconstruction-nav").prop("src", "images/black-codes-on.jpg");
    }, function () {
			$("#timeline").prop("src", "images/timeline.png");
      $("#reconstruction-nav").prop("src", "images/abe-lincoln.jpg");
    }
  );
	$(".timeline-nav div:first-of-type .period-subnav li:nth-of-type(3) a").hover(
    function() {
			$("#timeline").prop("src", "images/timeline-reconstruction.png");
			$("#reconstruction-nav").prop("src", "images/fifteenth-amendment-on.jpg");
    }, function () {
			$("#timeline").prop("src", "images/timeline.png");
      $("#reconstruction-nav").prop("src", "images/abe-lincoln.jpg");
    }
  );
}

//rollover image swap on jim crow subnav
function jimCrowSubNavHover() {
	$(".timeline-nav div:nth-of-type(2) .period-subnav li:first-of-type a").hover(
    function() {
			$("#timeline").prop("src", "images/timeline-jim-crow.png");
			$("#jim-crow-nav").prop("src", "images/disfranchisement-on.jpg");
    }, function () {
			$("#timeline").prop("src", "images/timeline.png");
      $("#jim-crow-nav").prop("src", "images/disfranchisement-on.jpg");
    }
  );
	$(".timeline-nav div:nth-of-type(2) .period-subnav li:nth-of-type(2) a").hover(
    function() {
			$("#timeline").prop("src", "images/timeline-jim-crow.png");
			$("#jim-crow-nav").prop("src", "images/plessy-v-ferguson-on.jpg");
    }, function () {
			$("#timeline").prop("src", "images/timeline.png");
      $("#jim-crow-nav").prop("src", "images/disfranchisement.jpg");
    }
  );
	$(".timeline-nav div:nth-of-type(2) .period-subnav li:nth-of-type(3) a").hover(
    function() {
			$("#timeline").prop("src", "images/timeline-jim-crow.png");
			$("#jim-crow-nav").prop("src", "images/jim-crow-on.jpg");
    }, function () {
			$("#timeline").prop("src", "images/timeline.png");
      $("#jim-crow-nav").prop("src", "images/disfranchisement.jpg");
    }
  );
}

//rollover image swap on civil rights subnav
function civilRightsSubNavHover() {
	$(".timeline-nav div:nth-of-type(3) .period-subnav li:first-of-type a").hover(
    function() {
			$("#timeline").prop("src", "images/timeline-civil.png");
			$("#civil-rights-nav").prop("src", "images/brown-vs-board-of-education-on.jpg");
    }, function () {
			$("#timeline").prop("src", "images/timeline.png");
      $("#civil-rights-nav").prop("src", "images/brown-vs-board-of-education-on.jpg");
    }
  );
	$(".timeline-nav div:nth-of-type(3) .period-subnav li:nth-of-type(2) a").hover(
    function() {
			$("#timeline").prop("src", "images/timeline-civil.png");
			$("#civil-rights-nav").prop("src", "images/kkk-on.jpg");
    }, function () {
			$("#timeline").prop("src", "images/timeline.png");
      $("#civil-rights-nav").prop("src", "images/brown-vs-board-of-education.jpg");
    }
  );
	$(".timeline-nav div:nth-of-type(3) .period-subnav li:nth-of-type(3) a").hover(
    function() {
			$("#timeline").prop("src", "images/timeline-civil.png");
			$("#civil-rights-nav").prop("src", "images/birmingham-riots-on.jpg");
    }, function () {
			$("#timeline").prop("src", "images/timeline.png");
      $("#civil-rights-nav").prop("src", "images/brown-vs-board-of-education.jpg");
    }
  );
}

//rollover effect for great march subnav
function greatMarchSubNavHover() {
	$(".timeline-nav div:last-of-type .period-subnav li:first-of-type a").hover(
    function() {
			$("#great-march-nav").prop("src", "images/martin-luther-king-on.jpg");
			$("#timeline").prop("src", "images/timeline-mlk.png");
    }, function () {
			$("#great-march-nav").prop("src", "images/martin-luther-king.jpg");
			$("#timeline").prop("src", "images/timeline.png");
    }
  );
}

// left nav rollover image swap
function reconstructionLeftNavHover() {
	$(".period-left-nav .period-subnav li:nth-of-type(1) a").hover(
    function() {
			$("#reconstruction-nav").prop("src", "../images/abe-lincoln-on.jpg");
    }, function () {
      $("#reconstruction-nav").prop("src", "../images/black-codes-on.jpg");
    }
  );
	$(".period-left-nav .period-subnav li:nth-of-type(3) a").hover(
    function() {
			$("#reconstruction-nav").prop("src", "../images/fifteenth-amendment-on.jpg");
    }, function () {
      $("#reconstruction-nav").prop("src", "../images/black-codes-on.jpg");
    }
  );
}

// deactivate subnav active link class
function deactiveSubNavActiveClass() {
	$(".period-left-nav .period-subnav li:nth-of-type(1) a").hover(
    function() {
			$("#active").prop("class", "");
    }, function () {
      $("#active").prop("class", "active-link");
    }
  );
	$(".period-left-nav .period-subnav li:nth-of-type(3) a").hover(
		function() {
			$("#active").prop("class", "");
    }, function () {
      $("#active").prop("class", "active-link");
    }
  );
}

$("document").ready(function () {
	reconstructionSubNavHover();
	reconstructionImageHover();
	reconstructionLeftNavHover();
	deactiveSubNavActiveClass();
	jimCrowImageHover();
	jimCrowSubNavHover();
	civilRightsImageHover();
	civilRightsSubNavHover();
	greatMarchImageHover();
	greatMarchSubNavHover();
});

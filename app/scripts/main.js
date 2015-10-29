"use strict";
/*global $*/

// rollover effect on timeline images
function reconstructionImageHover() {
	$(".timeline-nav article:first-of-type").hover(
		function() {
		$("#timeline").prop("src", "images/timeline-reconstruction.png");
		}, function () {
		$("#timeline").prop("src", "images/timeline.png");
    }
  );
}

function jimCrowImageHover() {
  $(".timeline-nav article:nth-of-type(2)").hover(
    function() {
      $("#timeline").prop("src", "images/timeline-jim-crow.png");
    }, function () {
      $("#timeline").prop("src", "images/timeline.png");
    }
  );
}

function civilRightsImageHover() {
  $(".timeline-nav article:nth-of-type(3)").hover(
    function() {
      $("#timeline").prop("src", "images/timeline-civil.png");
    }, function () {
      $("#timeline").prop("src", "images/timeline.png");
    }
  );
}

function greatMarchImageHover() {
  $(".timeline-nav article:last-of-type").hover(
    function() {
      $("#timeline").prop("src", "images/timeline-mlk.png");
    }, function () {
      $("#timeline").prop("src", "images/timeline.png");
    }
  );
}

//rollover image swap on subnav
function reconstructionSubNavHover() {
	$(".timeline-nav .period-img:first-of-type .period-subnav li:nth-of-type(2) a").hover(
    function() {
			$("#reconstruction-nav").prop("src", "images/black-codes.jpg");
    }, function () {
      $("#reconstruction-nav").prop("src", "images/abe-lincoln.jpg");
    }
  );
	$(".timeline-nav .period-img:first-of-type .period-subnav li:nth-of-type(3) a").hover(
    function() {
			$("#reconstruction-nav").prop("src", "images/fifteenth-amendment.jpg");
    }, function () {
      $("#reconstruction-nav").prop("src", "images/abe-lincoln.jpg");
    }
  );
}

function jimCrowSubNavHover() {
	$(".timeline-nav .period-img:nth-of-type(2) .period-subnav li:nth-of-type(2) a").hover(
    function() {
			$("#jim-crow-nav").prop("src", "images/plessy-v-ferguson.jpg");
    }, function () {
      $("#jim-crow-nav").prop("src", "images/disfranchisement.jpg");
    }
  );
	$(".timeline-nav .period-img:nth-of-type(2) .period-subnav li:nth-of-type(3) a").hover(
    function() {
			$("#jim-crow-nav").prop("src", "images/jim-crow.jpg");
    }, function () {
      $("#jim-crow-nav").prop("src", "images/disfranchisement.jpg");
    }
  );
}

function civilRightsSubNavHover() {
	$(".timeline-nav .period-img:nth-of-type(3) .period-subnav li:nth-of-type(2) a").hover(
    function() {
			$("#civil-rights-nav").prop("src", "images/kkk.jpg");
    }, function () {
      $("#civil-rights-nav").prop("src", "images/brown-vs-board-of-education.jpg");
    }
  );
	$(".timeline-nav .period-img:nth-of-type(3) .period-subnav li:nth-of-type(3) a").hover(
    function() {
			$("#civil-rights-nav").prop("src", "images/birmingham-riots.jpg");
    }, function () {
      $("#civil-rights-nav").prop("src", "images/brown-vs-board-of-education.jpg");
    }
  );
}

$("document").ready(function () {
	reconstructionImageHover();
	reconstructionSubNavHover();
	jimCrowImageHover();
	jimCrowSubNavHover();
	civilRightsImageHover();
	civilRightsSubNavHover();
	greatMarchImageHover();
});

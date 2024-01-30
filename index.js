$(window).mousemove(function (e) {
  $(".cursor").css("left", e.clientX);
  $(".cursor").css("top", e.clientY);
});

$(window).mousemove(function (e) {
  $(".cursor-shadow").css("left", e.clientX);
  $(".cursor-shadow").css("top", e.clientY);
});

const a = window.innerHeight;

$(".page-2").mouseenter(function () {
  $(window).mousemove(function (e) {
    $(".cursor").css("left", e.clientX - (a * 10) / 200);
    $(".cursor").css("top", e.clientY - (a * 10) / 200);
  });
  $(window).mousemove(function (e) {
    $(".cursor-shadow").css("left", e.clientX - (a * 11.5) / 200);
    $(".cursor-shadow").css("top", e.clientY - (a * 11.5) / 200);
  });

  $(".cursor").addClass("cursor-active");
  $(".cursor-shadow").addClass("cursor-active");

  $(".cursor").css({
    width: (a * 10) / 100,
    height: (a * 10) / 100
  });
  $(".cursor-shadow").css({
    width: (a * 11.5) / 100,
    height: (a * 11.5) / 100
  });
});

$(".page-2 > .line-2").mouseenter(function () {
  $(window).mousemove(function (e) {
    $(".cursor").css("left", e.clientX - (a * 60) / 200);
    $(".cursor").css("top", e.clientY - (a * 60) / 200);
    $(".cursor-shadow").css("left", e.clientX - (a * 65.5) / 200);
    $(".cursor-shadow").css("top", e.clientY - (a * 65.5) / 200);
  });

  $(".cursor").css({
    width: (a * 60) / 100,
    height: (a * 60) / 100
  });
  $(".cursor-shadow").css({
    width: (a * 65.5) / 100,
    height: (a * 65.5) / 100
  });
});

$(".page-2 > .line-2").mouseleave(function () {
  $(window).mousemove(function (e) {
    $(".cursor").css("left", e.clientX - (a * 10) / 200);
    $(".cursor").css("top", e.clientY - (a * 10) / 200);
  });
  $(window).mousemove(function (e) {
    $(".cursor-shadow").css("left", e.clientX - (a * 11.5) / 200);
    $(".cursor-shadow").css("top", e.clientY - (a * 11.5) / 200);
  });

  $(".cursor").css({
    width: (a * 10) / 100,
    height: (a * 10) / 100
  });

  $(".cursor-shadow").css({
    width: (a * 11.5) / 100,
    height: (a * 11.5) / 100
  });
});

$(".page-2").mouseleave(function () {
  $(window).mousemove(function (e) {
    $(".cursor").css("left", e.clientX);
    $(".cursor").css("top", e.clientY);
  });
  $(window).mousemove(function (e) {
    $(".cursor-shadow").css("left", e.clientX);
    $(".cursor-shadow").css("top", e.clientY);
  });

  $(".cursor").removeClass("cursor-active");
  $(".cursor-shadow").removeClass("cursor-active");

  $(".cursor").css({
    width: (a * 1.05) / 100,
    height: (a * 1.05) / 100
  });
  $(".cursor-shadow").css({
    width: (a * 1.7) / 100,
    height: (a * 1.7) / 100
  });
});

/* 페이지 1 시작*/
gsap.from(".f-p-g", {
  y: 2000,
  duration: 1.2
});

const tl1 = gsap.timeline();

tl1.from(
  ".page-1 > div > .tl1",
  { duration: 0.2, y: -200, opacity: 0 },
  "+=1.5"
);

tl1.from(
  ".page-1 > div > .tl2",
  { duration: 0.2, y: -200, opacity: 0 },
  "+=0.1"
);
tl1.from(
  ".page-1 > div > .tl3",
  { duration: 0.2, y: -200, opacity: 0 },
  "+=0.1"
);
tl1.from(
  ".page-1 > div > .tl4",
  { duration: 0.2, y: -200, opacity: 0 },
  "+=0.4"
);

tl1.from(
  ".page-1 > div > .tl5",
  { duration: 0.2, y: -200, opacity: 0 },
  "+=0.1"
);

tl1.from(
  ".page-1 > .line-4 > span:nth-child(3)",
  {
    opacity: 0,
    duration: 0.5
  },
  "+=0.1"
);

tl1.from(
  ".page-1 > .line-4 > span:nth-child(4)",
  {
    opacity: 0,
    duration: 0.5
  },
  "-=0.35"
);

tl1.from(
  ".page-1 > .line-4 > span:nth-child(2)",
  {
    opacity: 0,
    duration: 0.5
  },
  "-=0.3"
);

tl1.from(
  ".page-1 > .line-4 > .page1__btn-box-1 > i",
  {
    repeat: 3,
    repeatDelay: 1.5,
    y: -150,
    opacity: 0
  },
  "+=0.3"
);

const p2t = document.querySelector(".page-2").offsetTop;

$(".page1__btn-box-1").click(function () {
  gsap.to(window, {
    duration: 0.4,
    scrollTo: p2t
  });
});

/* 페이지 1 끝 페이지 2 시작 */

const p3t = document.querySelector(".page-3").offsetTop;

$(".page2__btn-box-1").click(function () {
  gsap.to(window, {
    duration: 0.4,
    scrollTo: p3t
  });
});

/* 페이지 2 끝 페이지 3 시작 */

const p4t = document.querySelector(".page-4").offsetTop;

$(".page3__btn-box-1").click(function () {
  gsap.to(window, {
    duration: 0.4,
    scrollTo: p4t
  });
});

/*

gsap.from(".c-p-g", {
  y: 100,
  scale: 0.8,
  opacity: 0.8,
  duration: 0.3,
  scrollTrigger: {
    trigger: ".page-2",
    toggleAction: "start none none none"
  }
});

gsap.from(".page-1", {
  scrollTrigger: {
    trigger: ".page-1",
    pin: true,
    pinSpacing: false,
    start: "top top"
  }
});

gsap.from(".page-2", {
  scrollTrigger: {
    trigger: ".page-2",
    pin: true,
    pinSpacing: false,
    start: "top top"
  }
});

*/

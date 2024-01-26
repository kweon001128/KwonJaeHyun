/* 페이지 1 시작*/
gsap.from(".f-p-g", {
  y: 800,
  opacity: 0.5,
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
  ".line-4",
  {
    opacity: 0,
    duration: 0.8
  },
  "+=0.3"
);

tl1.from(
  ".page-1 > .line-4 > .page1__btn-box-1 > i",
  {
    repeat: 3,
    repeatDelay: 1.5,
    y: -150,
    opacity: 0
  },
  "+=0.2"
);

const p2t = document.querySelector(".page-2").offsetTop;

$(".page1__btn-box-1").click(function () {
  gsap.to(window, {
    duration: 0.4,
    scrollTo: p2t
  });
});

/* 페이지 1 끝 페이지 2 시작 */
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
  $(".cursor").addClass("cursor-active");
  $(".cursor-shadow").addClass("cursor-active");
  $(window).mousemove(function (e) {
    $(".cursor").css("left", e.clientX - (a / 8) * 3);
    $(".cursor").css("top", e.clientY - (a / 8) * 3);
  });
  $(window).mousemove(function (e) {
    $(".cursor-shadow").css("left", e.clientX - (a / 8) * 3);
    $(".cursor-shadow").css("top", e.clientY - (a / 8) * 3);
  });
});

$(".page-2").mouseleave(function () {
  $(".cursor").removeClass("cursor-active");
  $(".cursor-shadow").removeClass("cursor-active");
  $(window).mousemove(function (e) {
    $(".cursor").css("left", e.clientX);
    $(".cursor").css("top", e.clientY);
  });
  $(window).mousemove(function (e) {
    $(".cursor-shadow").css("left", e.clientX);
    $(".cursor-shadow").css("top", e.clientY);
  });
});

const p3t = document.querySelector(".page-3").offsetTop;

$(".page2__btn-box-1").click(function () {
  gsap.to(window, {
    duration: 0.4,
    scrollTo: p3t
  });
});

/*
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
}); */

(function () {
  var videos = Array.prototype.slice.call(document.querySelectorAll("video[data-src]"));

  function arm(video) {
    if (video.getAttribute("data-armed") === "true") return;
    video.setAttribute("data-armed", "true");
    var source = document.createElement("source");
    source.src = video.getAttribute("data-src");
    source.type = "video/mp4";
    video.appendChild(source);
    video.load();
  }

  videos.forEach(function (video) {
    video.addEventListener("pointerdown", function () { arm(video); }, { once: true });
    video.addEventListener("focus", function () { arm(video); });
    video.addEventListener("play", function () { arm(video); });
  });

  if (!("IntersectionObserver" in window)) {
    videos.forEach(arm);
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        arm(entry.target);
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "180px 0px" });
    videos.forEach(function (video) { observer.observe(video); });
  }

  var nodes = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    nodes.forEach(function (node) { node.classList.add("is-in"); });
    return;
  }

  document.documentElement.classList.add("js");
  var reveal = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in");
      reveal.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
  nodes.forEach(function (node) { reveal.observe(node); });
})();

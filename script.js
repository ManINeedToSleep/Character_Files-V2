// GSAP Animation for image previews
let tl = gsap.timeline();

const imagePreview = document.querySelectorAll(".image-preview");
const video = document.querySelectorAll("video");

tl.to(imagePreview, {
  duration: 1,
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
  stagger: 0.1,
});

// Mouse events for play/pause video
imagePreview.forEach((image, index) => {
  image.addEventListener("mouseenter", () => {
    video[index].play();
  });

  image.addEventListener("mouseleave", () => {
    video[index].pause();
    video[index].currentTime = 0; // Reset video
  });
});

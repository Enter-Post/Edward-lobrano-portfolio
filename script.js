document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("closeBtn");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  let gallery = [];
  let index = 0;

  document.addEventListener("click", e => {
    const img = e.target.closest(".thumb");
    if (!img) return;

    const container = img.parentElement;
    gallery = [...container.querySelectorAll(".thumb")];
    index = gallery.indexOf(img);

    lightboxImg.src = img.src;
    lightbox.classList.remove("hidden");
  });

  nextBtn.onclick = () => {
    index = (index + 1) % gallery.length;
    lightboxImg.src = gallery[index].src;
  };

  prevBtn.onclick = () => {
    index = (index - 1 + gallery.length) % gallery.length;
    lightboxImg.src = gallery[index].src;
  };

  closeBtn.onclick = () => {
    lightbox.classList.add("hidden");
  };

  lightbox.onclick = e => {
    if (e.target === lightbox) {
      lightbox.classList.add("hidden");
    }
  };
});

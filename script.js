document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("closeBtn");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  const gallery = Array.from(document.querySelectorAll(".thumb"));
  let index = 0;

  // Open lightbox
  document.addEventListener("click", e => {
    const img = e.target.closest(".thumb");
    if (!img) return;

    index = gallery.indexOf(img);
    if (index === -1) return;

    lightboxImg.src = img.src;
    lightbox.classList.remove("hidden");
  });

  // Next
  nextBtn.addEventListener("click", e => {
    e.stopPropagation();
    index = (index + 1) % gallery.length;
    lightboxImg.src = gallery[index].src;
  });

  // Prev
  prevBtn.addEventListener("click", e => {
    e.stopPropagation();
    index = (index - 1 + gallery.length) % gallery.length;
    lightboxImg.src = gallery[index].src;
  });

  // Close button
  closeBtn.addEventListener("click", e => {
    e.stopPropagation();
    lightbox.classList.add("hidden");
  });

  // Click outside image closes
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
      lightbox.classList.add("hidden");
    }
  });
});

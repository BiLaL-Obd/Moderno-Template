let popup = document.querySelector(".stories .popup-box");
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("closePopup")) {
    popup.classList.remove("open");
  }
});

let images = document.querySelectorAll(".stories .image");
images.forEach((img) => {
  img.addEventListener("click", () => {
    if (!popup.classList.contains("open")) {
      popup.classList.add("open");
    }
    document.querySelector(".stories .popup-box .image img").src =
      img.children[0].src;
    document.querySelector(".stories .popup-box .text .popupHead").innerHTML =
      img.children[0].alt;
  });
});

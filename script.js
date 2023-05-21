const imgbox = document.querySelector(".imgbox");
const qrImage = document.querySelector(".qrImage");
const input = document.querySelector(".input");
const button = document.querySelector(".button");

function QRgenerator() {
  qrImage.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
}

button.addEventListener("click", function () {
  QRgenerator();
  input.value = "";
});

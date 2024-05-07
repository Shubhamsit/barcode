let button = document.querySelector(".button");
let imgDiv = document.querySelector(".img-box");

// console.log(myimg);
let qrInput = document.querySelector(".input-box");
function qrcode() {
  imgDiv.firstElementChild.setAttribute(
    "src",
    `https://barcodeapi.org/api/auto/${qrInput.value}`
  );
  let myimg = document.querySelector(".qr-img");

  console.log(imgDiv.firstElementChild);
}

button.addEventListener("click", () => {
  qrcode();
});

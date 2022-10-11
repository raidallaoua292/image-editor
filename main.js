// --------- get element
let saturate = document.getElementById("saturate");
let brightness = document.getElementById("brightness");
let sepia = document.getElementById("sepia");
let grayscale = document.getElementById("grayscale");
let blur = document.getElementById("blur");
let hueRotate = document.getElementById("hue-rotate");

let dawnload = document.getElementById("dawnload");
let uplaod = document.getElementById("uplaod");
let img = document.getElementById("img");

let rest = document.querySelector("span");
let imgBox = document.querySelector(".img_box");

// --- canvas 
let canvas = document.getElementById("canvas");
const ctext = canvas.getContext("2d");

function restValue()
{
  ctext.filter = "none";
  img.style.filter = "none";
  saturate.value = "100";
  contrast.value = "100";
  brightness.value = "100";
  sepia.value = "100";
  grayscale.value = "0";
  blur.value = "0";
  hueRotate.value = "0";
}

window.onload = function () {
  imgBox.style.display = "none";
  dawnload.style.display = "none";
  rest.style.display = "none";
};

//-------- Uplaod Ph----------------------------------
uplaod.onchange = function () {
  restValue();
  imgBox.style.display = "block";
  dawnload.style.display = "block";
  rest.style.display = "block";
  let file = new FileReader();
  file.readAsDataURL(uplaod.files[0]);
  file.onload = function () {
    img.src = file.result;
  };
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctext.drawImage(img, 0, 0, canvas.width, canvas.height);
    img.style.display = "none";
  };
};

// -------------Filters---------------------------

let filters = document.querySelectorAll("ul li input");
filters.forEach((filter) => {
  filter.addEventListener("input", function () {
    ctext.filter = `
      saturate(${saturate.value}%)
      contrast(${contrast.value}%)
      brightness(${brightness.value}%)
      sepia(${sepia.value}%)
      grayscale(${grayscale.value})
      blur(${blur.value}px)
      hue-rotate(${hueRotate.value}deg)
    `
    ctext.drawImage(img, 0, 0, canvas.width, canvas.height);
  });
});

//---------------------dowenlod img--------------------------

dawnload.onclick = function () {
  dawnload.href = canvas.toDataURL()
};

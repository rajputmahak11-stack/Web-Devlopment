const img = document.getElementById("image").src;
console.log(img);
if (img === "http://127.0.0.1:5500/javaScript/ImageEditor/index.html") {
  document.getElementById("image").style.display = "none";
}



// let bright = 1;
// let contrast = 1;
// let saturate = 1;
// let grayscale = 0;
// let sepia = 0;
// let invert = 0;
// let blur = 0;
// let hue = 0;

// function applyFilter() {
//     document.getElementById("image").style.filter = `
//         brightness(${bright})
//         contrast(${contrast})
//         saturate(${saturate})
//         grayscale(${grayscale}%)
//         sepia(${sepia}%)
//         invert(${invert}%)
//         blur(${blur}px)
//         hue-rotate(${hue}deg)
//     `;
// }




function uploadImage() {
    const file = document.getElementById("Upload").files[0];
    const fileURL = URL.createObjectURL(file);
    document.getElementById("image").src = fileURL;
    document.getElementById("image").style.display = "block";
}

function changeBrightness() {
    const value = document.getElementById("Brightness").value;
    document.getElementById("image").style.filter = `brightness(${value * 2 / 100})`;
}

function changeContrast() {
    const value = document.getElementById("Contrast").value;
    document.getElementById("image").style.filter = `contrast(${value * 2 / 100})`;
}

function changeSaturation() {
    const value = document.getElementById("Saturation").value;
    document.getElementById("image").style.filter = `saturate(${value / 50})`;
}

function changeBlur() {
    const value = document.getElementById("Blur").value;
    document.getElementById("image").style.filter = `blur(${value}px)`;
}

function changeGray() {
    const value = document.getElementById("Gray").value;
    document.getElementById("image").style.filter = `grayscale(${value}%)`;
}

function changeSepia() {
    const value = document.getElementById("Sepia").value;
    document.getElementById("image").style.filter = `sepia(${value}%)`;
}

function changeHue() {
    const value = document.getElementById("Hue").value;
    document.getElementById("image").style.filter = `hue-rotate(${value}deg)`;
}

function changeInvert() {
    const value = document.getElementById("Invert").value;
    document.getElementById("image").style.filter = `invert(${value}%)`;
}

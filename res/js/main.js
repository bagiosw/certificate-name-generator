// window.onload = myCanvas();

function draw() {
	let a = document.getElementById("name").value;
	let ctx = document.getElementById('myCanvas').getContext('2d');
	let img = new Image();
	let f = document.getElementById("uploadimage").files[0];
	let url = window.URL || window.webkitURL;
	let src = url.createObjectURL(f);
	let ffinput = document.getElementById("family").value;
	let font;
	if (ffinput === "") {
		font = "arial";
	} else {
		font = document.getElementById("family").value;
	}
	let size = document.getElementById("size").value;
	let fontSize = size + "px";
	let color = document.getElementById("colorInput");
	let weight = document.getElementById("weight").value;
	let italic = document.getElementById("italic");
	let istate;
	if (italic.checked) {
		istate = "italic";
	} else {
		istate = "";
	}
	let Hslider = document.getElementById("rHorizontal");
	let Vslider = document.getElementById("rVertical");
	document.getElementById("vValue").innerHTML = "Vertical Position <span class='badge rounded-pill bg-primary' style='animation: rubberBand; animation-duration: 0.5s;'>" + Vslider.value + "</span>";
	document.getElementById("hValue").innerHTML = "Horizontal Position <span class='badge rounded-pill bg-primary' style='animation: rubberBand; animation-duration: 0.5s;'>" + Hslider.value + "</span>";


	img.src = src;
	img.onload = function () {
		let imgph = document.getElementById("canvas-ph");
		let canW = document.getElementById("canvasW").value;
		imgph.style.display = "none";
		let w = this.width;
		let h = this.height;
		ctx.canvas.width = w;
		ctx.canvas.height = h;
		ctx.drawImage(img, 0, 0);
		ctx.font = weight + " " + istate + " " + fontSize + " " + font + ", Arial";
		ctx.textAlign = "center";
		ctx.fillStyle = color.value;
		ctx.fillText(a, Hslider.value, Vslider.value);
		url.revokeObjectURL(src);
		document.getElementById("canvasW").value = w;
		document.getElementById("canvasH").value = h;
		if (canW === "") {
			document.getElementById("rHorizontal").value = w / 2;
			document.getElementById("rVertical").value = h / 2;
		} else {
		}
	}
	ctx.canvas.width = w;
	ctx.canvas.height = h;
	ctx.font = fontSize + " " + font;
	ctx.textAlign = "center";
	ctx.fillStyle = color.value;
	Hslider = document.getElementById("rHorizontal");
	ctx.fillText(a, Hslider.value, Vslider.value);
};
document.getElementById("uploadimage").addEventListener("change", draw, false)

function saveImage() {
	let downloadLink = document.createElement('a');
	downloadLink.setAttribute('download', 'Certificate.png');
	let canvas = document.getElementById('myCanvas');
	let dataURL = canvas.toDataURL('image/png');
	let url = dataURL.replace(/^data:image\/png/, 'data:application/octet-stream');
	downloadLink.setAttribute('href', url);
	downloadLink.click();
}

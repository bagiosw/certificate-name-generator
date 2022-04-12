// window.onload = myCanvas();

function myCanvas2() {
	var a = document.getElementById("name").value;
	var font = "Arial";
	var size = document.getElementById("size").value;
	var fontSize = size + "px";
	var color = document.getElementById("colorInput");
	var Hslider = document.getElementById("rHorizontal");
	var Vslider = document.getElementById("rVertical");
	document.getElementById("hValue").innerHTML = "Horizontal (" + Hslider.value + ")";
	document.getElementById("vValue").innerHTML = "Vertical (" + Vslider.value + ")";
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var img = new Image();
	// img.crossOrigin = "anonymous";
	var n = document.getElementById("imgBase");
	var imgH = n.naturalHeight;
	var imgW = n.naturalWidth;
	document.getElementById("imgSize").innerHTML = "Image size: (" + imgH + "x" + imgW + ")";
	img.src = './img/img.jpg';
	document.getElementById("canvasW").value = imgW;
	document.getElementById("canvasH").value = imgH;
	var canvasW = document.getElementById("canvasW").value;
	var canvasH = document.getElementById("canvasH").value;
	ctx.canvas.width = canvasW;
	ctx.canvas.height = canvasH;
	ctx.drawImage(img, 0, 0);
	ctx.font = fontSize + " " + font;
	ctx.textAlign = "center";
	ctx.fillStyle = color.value;
	ctx.fillText(a, Hslider.value, Vslider.value);
}

function myCanvas() {
	var a = document.getElementById("name").value;
	var font = "Arial";
	var size = document.getElementById("size").value;
	var fontSize = size + "px";
	var color = document.getElementById("colorInput");
	var Hslider = document.getElementById("rHorizontal");
	var Vslider = document.getElementById("rVertical");
	document.getElementById("hValue").innerHTML = "Horizontal (" + Hslider.value + ")";
	document.getElementById("vValue").innerHTML = "Vertical (" + Vslider.value + ")";
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var img = new Image();
	// img.crossOrigin = "anonymous";
	var n = document.getElementById("imgBase");
	var imgH = n.naturalHeight;
	var imgW = n.naturalWidth;
	document.getElementById("imgSize").innerHTML = "Image size: (" + imgH + "x" + imgW + ")";
	img.src = './img/img.jpg';
	document.getElementById("canvasW").value = imgW;
	document.getElementById("canvasH").value = imgH;
	var canvasW = document.getElementById("canvasW").value;
	var canvasH = document.getElementById("canvasH").value;
	ctx.canvas.width = canvasW;
	ctx.canvas.height = canvasH;
	// ctx.drawImage(img, 0, 0);
	ctx.font = fontSize + " " + font;
	ctx.textAlign = "center";
	ctx.fillStyle = color.value;
	ctx.fillText(a, Hslider.value, Vslider.value);
};

function draw() {
	var a = document.getElementById("name").value;
	var ctx = document.getElementById('myCanvas').getContext('2d');
	var img = new Image();
	var f = document.getElementById("uploadimage").files[0];
	var url = window.URL || window.webkitURL;
	var src = url.createObjectURL(f);
	var font = document.getElementById("family").value;
	var size = document.getElementById("size").value;
	var fontSize = size + "px";
	var color = document.getElementById("colorInput");
	var weight = document.getElementById("weight").value;
	var italic = document.getElementById("italic");
	var istate;
	if (italic.checked) {
		istate = "italic";
	} else {
		istate = "";
	}
	var Hslider = document.getElementById("rHorizontal");
	var Vslider = document.getElementById("rVertical");
	document.getElementById("hValue").innerHTML = "Horizontal Position (" + Hslider.value + ")";
	document.getElementById("vValue").innerHTML = "Vertical Position (" + Vslider.value + ")";

	img.src = src;
	img.onload = function () {
		var w = this.width;
		var h = this.height;
		ctx.canvas.width = w;
		ctx.canvas.height = h;
		ctx.drawImage(img, 0, 0);
		ctx.font = weight + " " + istate + " " + fontSize + " " + font + " Arial";
		ctx.textAlign = "center";
		ctx.fillStyle = color.value;
		ctx.fillText(a, Hslider.value, Vslider.value);
		url.revokeObjectURL(src);
		document.getElementById("canvasW").value = w;
		document.getElementById("canvasH").value = h;
		// alert(w + 'x' + h);
	}
	ctx.canvas.width = w;
	ctx.canvas.height = h;
	ctx.font = fontSize + " " + font;
	ctx.textAlign = "center";
	ctx.fillStyle = color.value;
	ctx.fillText(a, Hslider.value, Vslider.value);
};
document.getElementById("uploadimage").addEventListener("change", draw, false)




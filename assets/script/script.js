/** @param {string} lightboxID
**/
function unhideLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.remove('hidden');
	document.getElementById(lightboxID).classList.remove('hidden');
}

function unhideLightbox1() {
	unhideLightbox("csm-pic");
}
document.getElementById("csm").onclick = unhideLightbox1;

function unhideLightbox2() {
	unhideLightbox("pbl-pic");
}
document.getElementById("pbl").onclick = unhideLightbox2;

function unhideLightbox3() {
	unhideLightbox("ftd-pic");
}
document.getElementById("ftd").onclick = unhideLightbox3;

function unhideLightbox4() {
	unhideLightbox("dss-pic");
}
document.getElementById("dss").onclick = unhideLightbox4;

function unhideLightbox5() {
	unhideLightbox("cody-pic");
}
document.getElementById("cody").onclick = unhideLightbox5;

function unhideLightbox6() {
	unhideLightbox("bm-pic");
}
document.getElementById("bm").onclick = unhideLightbox6;

function closeLightbox(lightboxID) {
	document.getElementById('lightbox-overlay').classList.add('hidden');
	document.getElementById(lightboxID).classList.add('hidden')
}

function closeAllLightboxes() {
	var lightboxElements = document.getElementsByClassName('lightbox');
	for (var i = 0; i < lightboxElements.length; i++) {
		var id = lightboxElements[i].id;
		closeLightbox(id);
	}
}
document.getElementById('lightbox-overlay').onclick = closeAllLightboxes;

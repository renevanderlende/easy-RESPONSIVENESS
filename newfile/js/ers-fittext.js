/**
 * 
 */

function fitText(item) {
	item.style.display = 'inline-block';
	item.style.fontSize = '1px';
	var parentWidth = item.parentNode.offsetWidth;
	var percentage = parentWidth / item.offsetWidth;
	var size = 0;
	while (item.offsetWidth < parentWidth) {
		size += 1;
		item.style.fontSize = size + 'px';
	}
	item.style.fontSize = size - 1 + 'px';
}

var elements = document.querySelectorAll('.fittext span');
window.onresize = function() {
	Array.prototype.forEach.call(elements, fitText);
};

window.onresize();
/** @format */
var canvas = import(canvas);

function addEvent(obj, type, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(type, fn, false);
		EventCache.add(obj, type, fn);
	} else if (obj.attachEvent) {
		obj["e" + type + fn] = fn;
		obj[type + fn] = function () {
			obj["e" + type + fn](window.event);
		};
		obj.attachEvent("on" + type, obj[type + fn]);
		EventCache.add(obj, type, fn);
	} else {
		obj["on" + type] = obj["e" + type + fn];
	}
}

var EventCache = (function () {
	var listEvents = [];
	return {
		listEvents: listEvents,
		add: function (node, sEventName, fHandler) {
			listEvents.push(arguments);
		},
		flush: function () {
			var i, item;
			for (i = listEvents.length - 1; i >= 0; i = i - 1) {
				item = listEvents[i];
				if (item[0].removeEventListener) {
					item[0].removeEventListener(item[1], item[2], item[3]);
				}
				if (item[1].substring(0, 2) != "on") {
					item[1] = "on" + item[1];
				}
				if (item[0].detachEvent) {
					item[0].detachEvent(item[1], item[2]);
				}
				item[0][item[1]] = null;
			}
		},
	};
})();

addEvent(window, "unload", EventCache.flush);
let board = document.querySelector(".BBInteract");
addEvent(board, "mousemove", (e) => {
	console.log(`PageX: ${e.pageX} PageY:${e.pageY}`);
	document
		.querySelector(".clickedMark")
		.setAttribute(`style`, `left: ${e.pageX}px; top: ${e.pageY}px`);
	if (canvas) {
		_mouse.pageX = e.pageX;
		_mouse.pageY = e.pageY;
	}
	// document.querySelector(".clickedMark").setAttribute("bottom", `${e.pageX}px`);
});
addEvent(board, "click", (e) => {
	console.log(`board clicked`);
	board.classList.add(".clicked");
});

/**
 * Click event capture
 * -adds class that makes marks to HTML elements
 * --html element follos pageX and pageY
 * --when element != click.pageX and pageY => remove the html/css class
 *
 * touch event capture
 *
 *
 *
 *
 *
 */

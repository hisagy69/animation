'use strict';
const frame = document.querySelector('.frame'),
	cloud = document.querySelector('.cloud'),
	reset = document.querySelector('.reset'),
	start = document.querySelector('.start');

let endPos = 650,
	count = 1,
	count1 = 2,
	idRequest;


const render = () => {
	cloud.style.left = count + 'px';
	if (count1 <= 3) {
		count += 1;
		if (count === endPos) {
			count = 1;
			frame.style.background = `url(img/frame${count1}.png) no-repeat center`;
			if (count1 === 2) {
				cloud.style.display = 'inline-block';
				cloud.src = `img/cloud${count1}.png`;
			} else if (count1 === 3) {
				cloud.style.display = 'none';
			}
			count1++;
		}
		idRequest = requestAnimationFrame(render);
	} else {
		count1 = 1;
		cancelAnimationFrame(idRequest);
	}
};


start.addEventListener('click', () => {
	if (idRequest) {
		cancelAnimationFrame(idRequest);
		idRequest = null;
	} else {
		render();
	}
});
reset.addEventListener('click', () => {
	if(idRequest) {
		cancelAnimationFrame(idRequest);
		idRequest = null;
	}
	count = 0;
	count1 = 0;
	cloud.style.left = '';
	frame.style.background = '';
});
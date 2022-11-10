var sliders_container = document.getElementById('slider-wrapper');
var sliders = document.getElementsByClassName('slider');

var left_control = document.getElementById('left-control');
var right_control = document.getElementById('right-control');

var left 			= 0;
var total_slider	= sliders.length;
var slider_width 	= 1170/2;
var delay			= 5000; //ms

var under_control	= false;
var max_seconds		= 5;
var seconds 		= 0;


function update(){
	if(!under_control){
		left -= 1170;
		if(Math.abs(left) >= (slider_width * total_slider)) left = 0;
		sliders_container.style.left = left + 'px';
	} else {
		if(seconds > 1)
			seconds -= 1;
		else
			under_control = false;
	}
	// console.log(under_control);
}

left_control.addEventListener("click", function(){
	if(Math.abs(left) <= 0) left = -(slider_width * total_slider);
	left += 1170;
	sliders_container.style.left = left + 'px';

	setIsUnderControl();
});

right_control.addEventListener("click", function(){
	left -= 1170;
	if(Math.abs(left) >= (slider_width * total_slider)) left = 0;
	sliders_container.style.left = left + 'px';

	setIsUnderControl();
});

function setIsUnderControl(){
	under_control = true;
	seconds = max_seconds;
}

setInterval(update, delay);

// Form validation
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const message = document.getElementById('message');

const usernameSuccess = document.getElementById('name-error');
const emailSuccess = document.getElementById('email-error');
const messageSuccess = document.getElementById('message-error');

form.addEventListener('submit', (e) => {
	e.preventDefault()

	validateInput();
})

function validateInput(){
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const messageValue = message.value.trim();

	if (usernameValue === ''){
		usernameSuccess.classList.add('error');
	} else {
		usernameSuccess.classList.remove('error');
	}
	if (emailValue === ''){
		emailSuccess.classList.add('error');
	} else {
		emailSuccess.classList.remove('error');
	}
	if (messageValue === ''){
		messageSuccess.classList.add('error');
	} else {
		messageSuccess.classList.remove('error');
	}
}

	window.addEventListener('load',function(){
		// function handleAccordionToggle(event) {
		// 	const accordion = event.currentTarget;
		// 	accordion.classList.toggle('is-active');
		// }

		// function initializeAccordionToggle() {
		// 	const accordions = document.querySelectorAll('.accordion-header');
		// 	accordions.forEach((accordion) => {
		// 		accordion.addEventListener('click', handleAccordionToggle);
		// 	});
		// }

		// document.addEventListener('DOMContentLoaded', initializeAccordionToggle);
		const slideUp = (el, duration = 300) => {
			el.style.height = el.offsetHeight + "px";
			el.offsetHeight;
			el.style.transitionProperty = "height, margin, padding";
			el.style.transitionDuration = duration + "ms";
			el.style.transitionTimingFunction = "ease";
			el.style.overflow = "hidden";
			el.style.height = 0;
			el.style.paddingTop = 0;
			el.style.paddingBottom = 0;
			el.style.marginTop = 0;
			el.style.marginBottom = 0;
			setTimeout(() => {
				el.style.display = "none";
				el.style.removeProperty("height");
				el.style.removeProperty("padding-top");
				el.style.removeProperty("padding-bottom");
				el.style.removeProperty("margin-top");
				el.style.removeProperty("margin-bottom");
				el.style.removeProperty("overflow");
				el.style.removeProperty("transition-duration");
				el.style.removeProperty("transition-property");
				el.style.removeProperty("transition-timing-function");
			}, duration);
		};

		// slideDown
		const slideDown = (el, duration = 300) => {
			el.style.removeProperty("display");
			let display = window.getComputedStyle(el).display;
			if (display === "none") {
				display = "block";
			}
			el.style.display = display;
			let height = el.offsetHeight;
			el.style.overflow = "hidden";
			el.style.height = 0;
			el.style.paddingTop = 0;
			el.style.paddingBottom = 0;
			el.style.marginTop = 0;
			el.style.marginBottom = 0;
			el.offsetHeight;
			el.style.transitionProperty = "height, margin, padding";
			el.style.transitionDuration = duration + "ms";
			el.style.transitionTimingFunction = "ease";
			el.style.height = height + "px";
			el.style.removeProperty("padding-top");
			el.style.removeProperty("padding-bottom");
			el.style.removeProperty("margin-top");
			el.style.removeProperty("margin-bottom");
			setTimeout(() => {
				el.style.removeProperty("height");
				el.style.removeProperty("overflow");
				el.style.removeProperty("transition-duration");
				el.style.removeProperty("transition-property");
				el.style.removeProperty("transition-timing-function");
			}, duration);
		};

		// slideToggle
		const slideToggle = (el, duration = 300) => {
			if (window.getComputedStyle(el).display === "none") {
				return slideDown(el, duration);
			} else {
				return slideUp(el, duration);
			}
		};

		const slideToggleBtn = document.querySelectorAll(".js-accordion__btn");
		// console.log(slideToggleBtn);
		slideToggleBtn.forEach(function(accordBtnElm,i){
			accordBtnElm.addEventListener("click", () => {
				// console.log("click");
				let parent = accordBtnElm.parentElement;
				let next = accordBtnElm.nextElementSibling;
				let prev = accordBtnElm.previousElementSibling;
				if (parent.classList.contains("js-accordion__content")) {
					slideToggle(parent, 500);
					parent.previousElementSibling.classList.toggle('js-active');
				}else if(prev){
					slideToggle(prev, 500);
					accordBtnElm.classList.toggle('js-active');
				}else{
					slideToggle(next, 500);
					accordBtnElm.classList.toggle('js-active');
				}
			});
		});
	})

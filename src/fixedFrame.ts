import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function fixedFrame() {
	const box01Elements: NodeListOf<Element> =
		document.querySelectorAll('.box01');
	const box02Elements: NodeListOf<Element> =
		document.querySelectorAll('.box02');
	const section = document.querySelector('.section02');

	const boxElements = [
		...Array.from(box01Elements),
		...Array.from(box02Elements),
	];

	boxElements.forEach((el) => {
		gsap.to(el, {
			backgroundColor: 'red',
			duration: 2,
			scrollTrigger: {
				trigger: section,
				start: 'top top',
				end: 'bottom bottom',
				toggleClass: 'is-fixed',
				markers: true,
				onLeave() {
					el.classList.add('is-through');
				},
				onEnterBack() {
					el.classList.remove('is-through');
				},
			},
		});
	});
}

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getMaxScrollX } from './getMaxScrollX';

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

	window.addEventListener('resize', function () {
		const windowWidth = window.innerWidth;

		if (windowWidth <= 1080 && windowWidth >= 769) {
			window.addEventListener('scroll', setResizeScrollValue);
		} else {
			window.removeEventListener('scroll', setResizeScrollValue); // スクロールイベントを削除する
			boxElements?.forEach((item) => item.removeAttribute('style'));
		}
	});

	function setResizeScrollValue(): void {
		boxElements[0].style.left = Math.floor(-window.scrollX) + 'px';
		boxElements[1].style.right =
			Math.floor(-getMaxScrollX() + window.scrollX) + 'px';
	}

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

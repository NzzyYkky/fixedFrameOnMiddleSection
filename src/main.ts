import './style.scss';
import { fixedFrame } from './fixedFrame';

const eventHandler = () => {
	fixedFrame();
};

document.addEventListener('DOMContentLoaded', eventHandler);

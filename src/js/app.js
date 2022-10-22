import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

const menuBurger = document.querySelector('.header__burger');
if (menuBurger) {
	const menuBody = document.querySelector('.header__menu');
	menuBurger.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		menuBurger.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}




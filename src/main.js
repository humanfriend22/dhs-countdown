import './style.css';

import { animateCountdown } from './countdown';
import { currentScheduleState } from './schedules';

const { inSession, periodEnd, schoolEnd } = currentScheduleState();

const [card1, card2] = document.querySelectorAll('.card');

if (inSession) {
    animateCountdown(card1, periodEnd)
    card1.classList.remove('skeleton');
    card1.children[0].classList.remove('opacity-0');

    if (periodEnd === schoolEnd) {
        animateCountdown(card2, schoolEnd)
        card2.classList.remove('skeleton');
        card2.children[0].classList.remove('opacity-0');
    }
}

const fullscreen = document.getElementById('fullscreen');
let intervalId = null;
fullscreen.addEventListener('click', () => {
    document.body.requestFullscreen();
    fullscreen.style.display = 'none';
    intervalId = setInterval(() => {
        if (!document.fullscreenElement) {
            fullscreen.style.display = 'block';
            clearInterval(intervalId)
        }
    }, 100)
});
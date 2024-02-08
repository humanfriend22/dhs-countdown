import './style.css';

import { animateCountdown } from './countdown';
import { currentScheduleState } from './schedules';

// Cards
const { inSession, periodEnd, schoolEnd } = currentScheduleState();
const [card1, card2] = document.querySelectorAll('.card');
if (inSession) {
    animateCountdown(card1, periodEnd)

    if (periodEnd !== schoolEnd) {
        animateCountdown(card2, schoolEnd)
    }
}

// Full Screen Button
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
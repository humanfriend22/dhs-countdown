// @ts-nocheck

/*
<span class="countdown font-mono text-2xl mt-5">
    <span style="--value:10;"></span>h
    <span style="--value:24;"></span>m
    <span style="--value:53;"></span>s
</span>
*/

export function animateCountdown(card, to) {
    card.classList.remove('skeleton');
    card.children[0].classList.remove('opacity-0');

    const [hours, minutes, seconds] = Array.from(card.querySelectorAll('span:not(.countdown)'));

    const updateTime = () => {
        const ms = Math.abs(to.getTime() - Date.now());

        const hoursLeft = Math.floor(ms / 3600000),
            minutesLeft = Math.floor((ms % 3600000) / 60000);

        hours.style.setProperty('--value', hoursLeft);
        minutes.style.setProperty('--value', minutesLeft);
        seconds.style.setProperty('--value', Math.floor((ms % 60000) / 1000));
    };
    setInterval(updateTime, 1000);
    updateTime();
}
import moment from 'moment';


export default function() {
    const countdowns = Array.from(document.querySelectorAll('.js-countdown'));

    countdowns.forEach(element => {
        const date = element.getAttribute('data-target-date');

        const miliseconds = Date.parse(date);

        const days = element.querySelector('.sale__countdown-digits-block-digit--days');
        const hours = element.querySelector('.sale__countdown-digits-block-digit--hours');
        const minutes = element.querySelector('.sale__countdown-digits-block-digit--minutes');
        const seconds = element.querySelector('.sale__countdown-digits-block-digit--seconds');

        if (isNaN(miliseconds)) {
            console.error('Date must be in ISO 8601 format');
            return;
        }

        function updateCountdown() {
            const delta = new Date(miliseconds - Date.now());
         
            const duration = moment.duration(delta.getTime());


            days.textContent = duration.days();
            hours.textContent = duration.hours();
            minutes.textContent = duration.minutes();
            seconds.textContent = duration.seconds();
        }

        setInterval(() => {
            updateCountdown();
        }, 1000);
    });
}

function rave() {
    const doodle = document.querySelector('css-doodle');
    doodle.use = 'var(--rule-glasses-at-night)';

    const body = document.querySelector('body');
    body.style.background = '#000000';

    const aboutElement = document.getElementById('about');
    aboutElement.style.fontFamily = "'Courier New', Courier, monospace";
    aboutElement.style.color = '#f5f5f5';

    const bean1 = document.getElementById('bean-1');
    bean1.remove();

    const bean2 = document.getElementById('bean-2');
    bean2.remove();
    
    const bean3 = document.getElementById('bean-3');
    bean3.remove();

    const bean4 = document.getElementById('bean-4');
    bean4.remove();

    const bean5 = document.getElementById('bean-5');
    bean5.remove();

    const bean6 = document.getElementById('bean-6');
    bean6.remove();

    const bean7 = document.getElementById('bean-7');
    bean7.remove();

    const bean8 = document.getElementById('bean-8');
    bean8.remove();
}
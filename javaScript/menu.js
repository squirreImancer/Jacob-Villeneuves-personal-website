document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', () => {
        const randomAngle = Math.random() < 0.5 ? -3 : 3; // Randomly choose between -3 and 3 degrees
        link.style.transform = `rotate(${randomAngle}deg)`;
        link.style.textDecoration = 'underline';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'rotate(0deg)';
        link.style.textDecoration = 'none';
    });
});
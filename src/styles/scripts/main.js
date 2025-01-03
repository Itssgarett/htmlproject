document.addEventListener('DOMContentLoaded', () => {
    console.log('HTML Project is ready!');

    const linkedinButton = document.getElementById('linkedinButton');
    const twitterButton = document.getElementById('twitterButton');

    linkedinButton.addEventListener('click', () => {
        window.open('https://www.linkedin.com/in/your-profile', '_blank');
    });

    twitterButton.addEventListener('click', () => {
        window.open('https://twitter.com/your-profile', '_blank');
    });
});
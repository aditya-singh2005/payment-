document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const successMessage = document.querySelector('.success-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting normally

        // Simulate form submission process
        setTimeout(() => {
            successMessage.classList.add('active');
        }, 500); // Simulate a delay
    });
});

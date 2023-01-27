// Get all modal open buttons
const modalOpenButtons = document.querySelectorAll('.modal-open');

// Loop through the buttons and add a click event listener to each one
modalOpenButtons.forEach(button => {
    button.addEventListener('click', e => {
        // Get the modal element that corresponds to the button that was clicked
        const modalId = e.target.dataset.modal;
        const modal = document.getElementById(modalId);

        // Add the 'open' class to the modal to make it visible
        modal.classList.add('open');
    });
});

// Get all modal close buttons
const modalCloseButtons = document.querySelectorAll('.modal-close');

// Loop through the buttons and add a click event listener to each one
modalCloseButtons.forEach(button => {
    button.addEventListener('click', e => {
        // Get the parent modal element of the button that was clicked
        const modal = e.target.closest('.modal');

        // Remove the 'open' class to make the modal invisible
        modal.classList.remove('open');
    });
});

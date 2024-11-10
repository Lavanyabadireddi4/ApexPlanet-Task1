document.addEventListener("DOMContentLoaded", function() {
    const donationForm = document.getElementById('donation-form');
    const donateButton = document.getElementById('donate-btn');
    const thankYouMessage = document.getElementById('thank-you-message');
    const amountSelector = document.getElementById('amount');
    const customAmountContainer = document.getElementById('custom-amount-container');
    const customAmountInput = document.getElementById('custom-amount');

    // Toggle custom amount input field visibility
    amountSelector.addEventListener('change', function() {
        if (amountSelector.value === 'custom') {
            customAmountContainer.classList.remove('hidden');
        } else {
            customAmountContainer.classList.add('hidden');
        }
    });

    // Form submission and validation
    donationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validate the form
        const amount = amountSelector.value === 'custom' ? customAmountInput.value : amountSelector.value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const paymentMethod = document.getElementById('payment').value;

        if (!amount || !name || !email || !paymentMethod) {
            alert('Please fill out all fields.');
            return;
        }

        // Simulate successful donation submission (this can be integrated with a backend)
        thankYouMessage.classList.remove('hidden');
        donationForm.reset(); // Reset the form
    });
});
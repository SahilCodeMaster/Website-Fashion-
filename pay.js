function validatePayment() {
    // Retrieve form elements
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Regular expressions for validation
    const cardNumberPattern = /^\d{16}$/;  // Simple validation for a 16-digit card number
    const cvvPattern = /^\d{3}$/;          // Simple validation for a 3-digit CVV

    // Validate card number
    if (!cardNumber.match(cardNumberPattern)) {
        alert('Please enter a valid card number (16 digits).');
        return false;
    }

    // Validate expiration date
    if (expiryDate === "") {
        alert('Please select an expiration date.');
        return false;
    }

    // Validate CVV
    if (!cvv.match(cvvPattern)) {
        alert('Please enter a valid CVV (3 digits).');
        return false;
    }

    // If all validations pass
    alert('Payment successful!');
    return true; // Proceed with form submission
}

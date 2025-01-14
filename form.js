document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
    };

    try {
        const response = await fetch('https://formspree.io/f/xwppwggl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('contactForm').reset();
        } else {
            alert('Failed to send the message. Please try again later.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});
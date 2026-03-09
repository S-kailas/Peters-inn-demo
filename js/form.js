document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('preBookingForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate Phone Number
            const phoneStr = document.getElementById('phoneNumber').value;
            // Extremely basic verification - allows +, spaces, numbers
            const phoneRegex = /^[0-9+\-\s()]{7,15}$/;
            if (!phoneRegex.test(phoneStr)) {
                alert("Please enter a valid phone number.");
                return;
            }

            const btn = document.getElementById('submitBtn');
            const btnText = document.getElementById('btnText');
            const loader = document.getElementById('btnLoader');
            
            // Set loading state
            btn.disabled = true;
            btnText.textContent = 'Sending Request...';
            btn.style.opacity = '0.8';
            loader.style.display = 'inline-block';
            
            // Collect Form Data 
            const formData = new FormData(form);
            const dataToEmail = {
                to: "petersinn@gmail.com", // Placeholder Email specified in instructions
                name: formData.get('fullName'),
                phone: formData.get('phoneNumber'),
                gender: formData.get('gender'),
                checkInDate: formData.get('checkInDate'),
                berthType: formData.get('berthType'),
            };

            console.log("Mock sending email with data:", dataToEmail);
            
            // Simulate network request to send email (e.g., using a Serverless function or Formspree)
            setTimeout(() => {
                // Redirect user after email is logically sent
                window.location.href = 'thank-you.html';
            }, 1200);
        });
    }
});

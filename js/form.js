document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('preBookingForm');

    if (form) {

        form.addEventListener('submit', function (e) {

            e.preventDefault();

            // Phone validation
            const phoneStr = document.getElementById('phoneNumber').value;
            const phoneRegex = /^[0-9+\-\s()]{7,15}$/;

            if (!phoneRegex.test(phoneStr)) {
                alert("Please enter a valid phone number.");
                return;
            }

            // Button loading state
            const btn = document.getElementById('submitBtn');
            const btnText = document.getElementById('btnText');
            const loader = document.getElementById('btnLoader');

            btn.disabled = true;
            btnText.textContent = "Sending Request...";
            btn.style.opacity = "0.8";
            loader.style.display = "inline-block";

            // Collect form data
            const formData = new FormData(form);

            // Send email using EmailJS
            emailjs.send("service_bmaf6c3", "template_4ntujgl", {

                name: formData.get('fullName'),
                phone: formData.get('phoneNumber'),
                gender: formData.get('gender'),
                checkInDate: formData.get('checkInDate'),
                berthType: formData.get('berthType')

            })
                .then(function (response) {

                    window.location.href = "thank-you.html";

                })
                .catch(function (error) {

                    alert("Email failed to send");

                    btn.disabled = false;
                    btnText.textContent = "Submit Booking Request";
                    loader.style.display = "none";

                });

        });

    }

});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // You can perform client-side validation here if needed

        // Send the form data to the server for email sending
        fetch(contactForm.action, {
            method: "POST",
            body: new FormData(contactForm),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Email sent successfully!");
                contactForm.reset();
            } else {
                alert("Email sending failed. Please try again later.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        });
    });
});

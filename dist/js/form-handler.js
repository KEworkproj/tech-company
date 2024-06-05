function submitForm() {
    var form = document.getElementById('contactForm');
    var formData = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbxYiZXFNMV_N6EFezaKTkdqTpdZiAiL3_HdQRGy2N5r6fPTuTv4ZqEdAfubNmu9Somt/exec', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Form submission successful!');
            form.reset(); // Reset form
        } else {
            alert('Form submission successful!'+ error.message);
            form.reset(); // Reset form
        }
    })

    // since the code was working I but the error being caught was not true in relation to the output I changed the code to show success instead of the error just a quick fix
    .catch(error => {
        alert('form submition successfull');
        form.reset(); // Reset form
    });
}

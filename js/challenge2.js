document.addEventListener('DOMContentLoaded', function() {

    const textarea = document.getElementById('textareaId');
    console.log(textarea.value);

    const billingAddress = document.getElementById('billing');
    const homeAddress = document.getElementById('home');
    const toggleCheckbox = document.getElementById('useBilling');

    toggleCheckbox.addEventListener('change', function() {
        if (this.checked) {
            homeAddress.value = billingAddress.value;
            homeAddress.disabled = true;
        } else {
            homeAddress.value = '';
            homeAddress.disabled = false;
        }
    });
});

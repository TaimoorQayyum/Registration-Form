
(function () {
    const form = document.getElementById('regForm');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const surname = document.getElementById('surname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const country = document.getElementById('country');
    const terms = document.getElementById('terms');
    const submitBtn = document.getElementById('submitBtn');
    const summaryContainer = document.getElementById('summaryContainer');

    // Helper to make an error element and attach after the field
    function attachError(afterNode) {
        const e = document.createElement('div');
        e.className = 'error';
        afterNode.parentNode.appendChild(e);
        return e;
    }

    const firstErr = attachError(firstName);
    const emailErr = attachError(email);
    const passErr = attachError(password);
    const confErr = attachError(confirmPassword);
    const genderErr = document.createElement('div'); genderErr.className = 'error';
    country.parentNode.insertBefore(genderErr, country);
    const countryErr = attachError(country);
    const termsErr = attachError(terms);

    // Simple validators
    function validFirst() {
        const v = firstName.value.trim();
        if (v.length < 5) {
            firstErr.textContent = 'First name must be at least 5 characters.';
            firstErr.classList.add('visible');
            return false;
        }
        firstErr.textContent = '';
        firstErr.classList.remove('visible');
        return true;
    }

    function validEmail() {
        const v = email.value.trim();
        if (v.indexOf('@') === -1) {
            emailErr.textContent = 'Email must contain "@".';
            emailErr.classList.add('visible');
            return false;
        }
        emailErr.textContent = '';
        emailErr.classList.remove('visible');
        return true;
    }

    function validPass() {
        const v = password.value;
        if (v.length < 8) {
            passErr.textContent = 'Password must be at least 8 characters.';
            passErr.classList.add('visible');
            return false;
        }
        if (!/[A-Z]/.test(v)) {
            passErr.textContent = 'Password must have at least one uppercase letter.';
            passErr.classList.add('visible');
            return false;
        }
        passErr.textContent = '';
        passErr.classList.remove('visible');
        return true;
    }

    function validConfirm() {
        if (confirmPassword.value !== password.value) {
            confErr.textContent = 'Passwords do not match.';
            confErr.classList.add('visible');
            return false;
        }
        confErr.textContent = '';
        confErr.classList.remove('visible');
        return true;
    }

    function validGender() {
        const radios = form.elements['gender'];
        for (let i = 0; i < radios.length; i++)
            if (radios[i].checked) {
                genderErr.textContent = '';
                genderErr.classList.remove('visible');
                return true;
            }
        genderErr.textContent = 'Please choose a gender.';
        genderErr.classList.add('visible');
        return false;
    }

    function validCountry() {
        if (!country.value) {
            countryErr.textContent = 'Please pick a country.';
            countryErr.classList.add('visible');
            return false;
        }
        countryErr.textContent = '';
        countryErr.classList.remove('visible');
        return true;
    }

    function validTerms() {
        if (!terms.checked) {
            termsErr.textContent = 'You must accept terms.';
            termsErr.classList.add('visible');
            return false;
        }
        termsErr.textContent = '';
        termsErr.classList.remove('visible');
        return true;
    }

    function allValid() {
        return validFirst() && validEmail() && validPass() && validConfirm() && validGender() && validCountry() && validTerms();
    }

    function updateSubmit() { submitBtn.disabled = !allValid(); }

    // Live events
    firstName.addEventListener('input', () => { validFirst(); updateSubmit(); });
    email.addEventListener('input', () => { validEmail(); updateSubmit(); });
    password.addEventListener('input', () => { validPass(); validConfirm(); updateSubmit(); });
    confirmPassword.addEventListener('input', () => { validConfirm(); updateSubmit(); });
    country.addEventListener('change', () => { validCountry(); updateSubmit(); });
    terms.addEventListener('change', () => { validTerms(); updateSubmit(); });
    const radios = form.elements['gender']; for (let i = 0; i < radios.length; i++) radios[i].addEventListener('change', () => { validGender(); updateSubmit(); });

    // Submit
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!allValid()) { updateSubmit(); return; }

        // Build summary using DOM methods
        summaryContainer.innerHTML = '';
        const box = document.createElement('div'); box.className = 'summary';
        const h = document.createElement('h3'); h.textContent = 'Submission Summary'; box.appendChild(h);

        const pName = document.createElement('p');
        pName.textContent = 'Name: ' + firstName.value.trim() + ' ' + lastName.value.trim() + ' ' + surname.value.trim();
        box.appendChild(pName);

        const pEmail = document.createElement('p'); pEmail.textContent = 'Email: ' + email.value.trim(); box.appendChild(pEmail);
        const pCountry = document.createElement('p'); pCountry.textContent = 'Country: ' + country.value; box.appendChild(pCountry);

        let g = '';
        for (let i = 0; i < radios.length; i++) if (radios[i].checked) { g = radios[i].value; break; }
        const pGender = document.createElement('p'); pGender.textContent = 'Gender: ' + g; box.appendChild(pGender);

        summaryContainer.appendChild(box);
    });

    // initial check
    updateSubmit();
})();

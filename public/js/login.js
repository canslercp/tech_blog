const loginFormHandler = async (event) => {
    event.preventDefault();

    //Collect values from the login form
    const username = document.querySelector('#inputUsername').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();

    if (username && password) {
        //Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            //if successful, redirect the browser to the profile page
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();
    //Collect values from the signup form
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    //Send a POST request to the API endpoint
    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            //if successful, redirect the browser to the profile page
            document.location.replace('/dashboard');
        } else {
            alert(responsse.statusText);
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler)
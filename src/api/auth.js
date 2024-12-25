const LoginUser = async (email, password) => {
    try {
        const dataBody = {email, password, returnSecureToken: true};
        const urlSignup = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDXAwsDhK38AfoeO_zrwVb87qG01JUIpIE';
        const response = await fetch(urlSignup, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataBody)
        });
        const data = await response.json();
        console.log(data);

        // set a cooke for 60 minutes with data.idToken and set another for email
        const date = new Date();
        date.setTime(date.getTime() + (60 * 60 * 1000));
        document.cookie = `idToken=${data.idToken}; expires=${date.toUTCString()}`;
        document.cookie = `email=${data.email}; expires=${date.toUTCString()}`;
        document.cookie = `localId=${data.localId}; expires=${date.toUTCString()}`;

        window.location.href = '/';

    } catch (error) {
        console.error(error + 'error');
    }

}

const registerUser = async (email, password) => {
    try {
        const dataBody = {email, password};
        const urlSignup = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDXAwsDhK38AfoeO_zrwVb87qG01JUIpIE';
        const response = await fetch(urlSignup, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataBody)
        });
        console.log("azs",response);
        const data = await response.json();
        console.log(data);

        // set a cooke for 60 minutes with data.idToken and set another for email
        const date = new Date();
        date.setTime(date.getTime() + (60 * 60 * 1000));
        document.cookie = `idToken=${data.idToken}; expires=${date.toUTCString()}`;
        document.cookie = `email=${data.email}; expires=${date.toUTCString()}`;
        // window.location.href = '/';

    } catch (error) {
        console.error(error + 'error');
    }

}



export { LoginUser, registerUser };
window.onload = function(){
    init();
}

const readDb = () => {
    const users = localStorage.getItem('regUser');
    return  users ? JSON.parse(users) : [];
};

function readStorage(){
    const users = localStorage.getItem('regUser');
    return  users ? JSON.parse(users) : [];
}

function init(){
    const usersDB = readDb();
    
    const inputEmail    = document.getElementById('inputEmail');
    const inputPassword = document.querySelector('#inputPassword');
    const submitBtn     = document.querySelector('button[type="submit"]');



    // submitBtn.onclick 
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();

        if( inputEmail.value != '' && inputPassword.value != '') {
            const userExists = checkUser(usersDB, inputEmail.value)
            if( userExists != -1 ){
                alert("Email is taken");
            }
            let currentUser = createUser(inputEmail.value, inputPassword.value);
            usersDB.push(currentUser);
            localStorage.setItem('regUser', JSON.stringify(usersDB));
            inputPassword.value = '';
            inputEmail.value    = '';
            if (currentUser) {
                
                    alert("Congrats...You are signed in")
                    location.replace('gallery.html');
                    sessionStorage.setItem('auth', JSON.stringify(user));
                
            }
        } 
        else {
            console.log('invalid')
        }

    });

}

function createUser(email, password){
    return {
        email,
        password
    }
    
}

function checkUser(usersDB, email){
    return usersDB.findIndex(item => {
        return  item.email == email;
    })
}





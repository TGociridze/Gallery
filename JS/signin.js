
const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.querySelector("#inputPassword");
const submitBtn = document.querySelector('button[type="submit"]');


const readDb = () => {
    const users = localStorage.getItem('regUser');
    return  users ? JSON.parse(users) : [];
};


submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const currentUsers = readDb();
    if( !currentUsers.length ) {
        alert("DB is empty")
        return;
    };  
    
    if( inputEmail.value != '' && inputPassword.value != '') {
        // const user = currentUsers.find(function(item) {});
        const user = currentUsers.find(item => {
            return item.email == inputEmail.value &&  item.password == inputPassword.value;
        });
        console.log("USER", user);
        if( user ) {
            alert("Logged In")
            location.replace('gallery.html');
            sessionStorage.setItem('auth', JSON.stringify(user));
        } else if (!user) {
            alert("Please, Create new account")
        }

    }
    else {
        console.log('invalid')
    }
});
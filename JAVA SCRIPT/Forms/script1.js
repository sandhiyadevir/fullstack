function handleRegister(event){
    event.preventDefault();
    let user = document.getElementById("uname").value
    let pass = document.getElementById("pass").value
    let userDetails
    if(!user) { //(user=="")//
         alert("Please Enter Username.");
    }else if(!pass){ //(pass=="")//
        alert("Please Enter your Password.");
    }else{
        userDetails = {
            username:user,
            password:pass
        }
    }

    console.log(userDetails);
}
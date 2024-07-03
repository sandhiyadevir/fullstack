function handleRegister(event){
    event.preventDefault(); // to stop refresh
    let user = document.getElementById("uname").value
    let pass = document.getElementById("pass").value
    let  userDetails;
    let arr=[];
    if (!user) {
        alert("Please Enter your Username");
    } else if (!pass) {
        alert("Please Enter your Password");
    }
    else{
         userDetails={
            username:user,   // username is key user is value
            password:pass
        }
        let arrobj = localStorage.getItem("userDetails");
        if (arrobj) {
            arrobj  = JSON.parse(arrobj);
            arr = arr.concat(arrobj);
            arr.push(userDetails)
            localStorage.setItem("userDetails",JSON.stringify(arr));
        }else{
            localStorage.setItem("userDetails",JSON.stringify([userDetails]));
        }
        // window.location.href ="login.html"
        window.location.replace("http://127.0.0.1:5500/login.html")
    }
   console.log(userDetails);
}


function handleLogin(event){
    event.preventDefault();
    let user=document.getElementById("uname").value
    let pass=document.getElementById("pass").value
    if(user==""){
        alert("Enter your name")
    }else if(pass==""){
        alert("enter your password")
    }else{
        let arrobj=localStorage.getItem("userDetails");
        arrobj=JSON.parse(arrobj);
        console.log(arrobj);
        let correctuser = false ;
        let correctpass = false ;
        arrobj.map((value)=>{
           if(value.username==user){
            correctuser = true;
            if(value.password==pass){
                correctpass = true;
            }
           }
        })
        if(correctuser && correctpass){
            alert("Login Successfully");
        }else if(correctuser){
            alert("enter correct password");
        }
        else{
            alert("enter correct username");
        }
    }
}

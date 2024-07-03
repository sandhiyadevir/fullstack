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
    }
   console.log(userDetails);
}
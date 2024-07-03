function handleRegister(event){
    event.preventDefault();
    let user=document.getElementById("user").value
    let pass=document.getElementById("pass").value

let userDetails;
let arr=[]
if(user==""){
    alert("Enter your name")
}else if(pass==""){
    alert("enter your password")
}else{
    userDetails={
        name:user,
        password:pass
    }
   let arrobj=localStorage.getItem("userDetails");
   if (arrobj){
    arrobj=JSON.parse(arrobj)
    arr=arr.concat(arrobj);
    arr.push(userDetails)
    localStorage.setItem("userDetails",JSON.stringify(arr))

   }else{
    localStorage.setItem("userDetails",JSON.stringify(userDetails));
   }
//    window.location.href("./form/loginform.html")
   window.location.replace("http://127.0.0.1:5500/loginform.html")
}

}
function handleLogin(event){
    let user=document.getElementById("user").value
    let pass=document.getElementById("pass").value
    if(user==""){
        alert("Enter your name")
    }else if(pass==""){
        alert("enter your password")
    }else{
    let arrobj=localStorage.getItem("userDetails");
    arrobj=JSON.parse(arrobj);
    arrobj.map((value,index)=>{
        console.log(value)
        if(value.username==user){
            if(value.password==pass){
                alert("Login Successful")
            }else{
                alert("enter correct password")
            }
        }else{
            alert("enter correct username")
        }
    })
}
}
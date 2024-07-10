document.getElementById( "myform").addEventListener("submit", function(event){
    event.preventDefault()
    const payload = {
        firstname : document.getElementById("firstname").Value,
        lastname :  document.getElementById("lastname").Value,
        number : document.getElementById("number").Value,
        email : document.getElementById("email").Value,
        roll number : document.getElementById("rollno").Value,

    }
    console.log(payload)
    const apiurl = "http://192.168.194.144:3001/userregister"
    const option={
        methode: "post",
        headers: {
            "Content-Type":"application/json"
        },
        body: json.stringify(payload)

    }

    fetch(apiurl).that(Response=>{
        if(!Response.ok){
            console.log("error")
        }
         return Response.json();
    }).then(data => {
        console.log(data)
        userinfo(data)
    }) 
})
function userinfo(data){
    const userdatadiv = document.grtElementById("userdata")
    userdatadiv.innerHTML =
    `<h2> user info </h2>
    <p>firstname :${data.firstname}</p>
    <p>lastname :${data.lastname}</p>
    <p>number :${data.number}</p>
    <p>email :${data.email}</p>
    <p>rollnumber :${data.roll_number}</p>`

}

function authenticate(user,password){
let usernames= [{ username: "abhivarma0121@gmail.com",password: "1234567890"},
                { username: "123@gmail,com",password: "1234567890"},
                { username: "asd@gmail.com",password: "asdfghjkl"}];
for(let i=0;i<usernames.length;i++){
if(user==usernames[i].username && usernames[i].password == password){
document.write("<h1>login sucessfully</h1><style>h1{ font-style: italic;text-align: center;margin-top: 20%;color:rgb(38, 202, 38);font-size:130px;}</style>"  );
return ;
}
}
alert("please re-enter the credentials");
return false;
}
function setUsername(username){
    console.log(this);
    
    this.username = username;
    console.log('Method Called');
    // console.log(this);
    
}

function login(username,password,email){
    setUsername.call(this,username);
    this.password = password;
    this.email = email;
    
    


}



// let myUsername = new setUsername('sahaSuman');


let myLogin = new login('sahaSuman1','nolengur','saha@js.com');

console.log(myLogin);





function validate() {



    var a = document.getElementById("course").value;
    var b = document.getElementById("fname").value;
    var c = document.getElementById("lname").value;
    //var gender = document.getElementById("gender1").value;
    
    
    var e = document.getElementById("age").value;
    var f = document.getElementById("dob").value;
    var g = document.getElementById("mobn").value;
    var h = document.getElementById("email").value;
    var i = document.getElementById("address").value;
    var j = document.getElementById("place").value;
    var k = document.getElementById("pin").value;
    var l = document.getElementById("district").value;
    var m = document.getElementById("religion").value;
    var n = document.getElementById("qualification").value;
    var o = document.getElementById("bgroup").value;
    var p = document.getElementById("username").value;
    var q = document.getElementById("password").value;
    var r = document.getElementById("cpassword").value;
    
    if( q!=r)
    {
        alert('Password Mismatch');
    }
    
     else {
        console.log(a,b,c,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
    
     }  
    }
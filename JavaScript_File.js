        let val;
        let pass;
        
       
        
function myFunc()
    {
        val=document.getElementById('UserName').value;
        pass=document.getElementById('UserPassword').value;
        
        if(pass.length <='7')
            {
                alert("Password too short");
                return false;
            }
        else if(val=="Obakeng" || val=="Tshepiso")
            {
                alert("Sorry, this name is already taken");
                return false;
            }
        else{
                myFunc2();
                return true;
            }
    }
    
function myFunc2()
    {
        val=document.getElementById('UserName').value;
        pass=document.getElementById('UserPassword').value;
        prompt("Do you confirm that you are "+val+"?", "No").value;   
        const Name= val;
        const PCode= pass;
        console.log("The user is " +Name + " and the password is '"+ PCode +"'");
        return true;
    }

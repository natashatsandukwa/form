 window.onload  = function(){

 document.getElementById('submit').onclick  = function()
    {
        alert("First name: "+ document.getElementById("firstname").value + 
        "\nLast Name is " + document.getElementById("lastname").value +
        "\n Number: "+ document.getElementById("number").value +
        "\n Email: "+ document.getElementById("emal").value +
        "\n Enquiry: "+ document.getElementById("textarea").value);
        document.getElementById("form").reset();
        return false;

    } 
 



 }


   

    



































































var firstName = document.getElementById("FirstName");//input kolo
var surName = document.getElementById("productPrice");//input kolo
var mobileNumberOrEmailAdress = document.getElementById("MobileNumberOrEmailAdress");//input kolo
var newPassword = document.getElementById("NewPassword");//input kolo
var mainBtn = document.getElementById("mainBtn");


// var personalDataContainer;
// if (localStorage.getItem("dataList") == null)//zbon gdid
// {
//     personalDataContainer = [];
// }
// else {
//     personalDataContainer = JSON.parse(localStorage.getItem('dataList'));
//     displayProducts();
// }
// function signUp() {

//     if(validateFirstName() == true)
//     {
        
//     var data = {

//         name: firstNameInput.value,
//         surName: surNameInput.value,
//         mobileNumberOrEmailAdress: mobileNumberOrEmailAdressInput.value,
//         newPassword: newPasswordInput.value
//     }
//     // localStorage.setItem("dataList", JSON.stringify(personalDataContainer));
//      clearForm();


//     }

//     else
//     {
//         alert('Whats Your Name');
//     }

   
// }

// signUp()

// function clearForm() {
//     productNameInput.value = "";
//     productPriceInput.value = "";
//     productCategoryInput.value = "";
//     productDescInput.value = "";

// }



function validateFirstname()
{
    var regex = /^[A-Z][a-z]{3,8}$/;
    if(regex.test(FirstNameInput.value) == true){
        return true;
    }

    else
    {
        return false;
    }
}


function signUp()
{
    if(completeData == true)
    {
        return true ;
    }

    else
    {
        return false
    }
}


function signUp() {

        if(validateFirstName() == true)
        {
            
        var data = {
    
            name: firstNameInput.value,
            surName: surNameInput.value,
            mobileNumberOrEmailAdress: mobileNumberOrEmailAdressInput.value,
            newPassword: newPasswordInput.value
        }
        // localStorage.setItem("dataList", JSON.stringify(personalDataContainer));
         clearForm();
    
    
        }
    
        else
        {
            alert('Whats Your Name');
        }
    }
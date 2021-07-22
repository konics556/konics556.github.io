function onSave(event) {
    event.preventDefault();
    const form = document.getElementById('form');
    let invalidFields = [];
    let focusField = null;
    let isTncAccepted = true;

    if( !validateFirstName(form[0]) ) {
        invalidFields.push("First Name");
        if(focusField === null){
            focusField = form[0];
        }
    }
    if( !validateLastName(form[1]) ) {
        invalidFields.push("Last Name");
        if(focusField === null){
            focusField = form[1];
        }
    }
    if( !validateGender(form[2], form[3]) ) {
        invalidFields.push("Gender");
        if(focusField === null){
            focusField = form[2];
        }
    }
    if( !validateMaritalStatus(form[4], form[5]) ) {
        invalidFields.push("Marital Status");
        if(focusField === null){
            focusField = form[4];
        }
    }
    else if( form[4].checked && !validateNameOfSpouse(form[6]) ) {
        invalidFields.push("Name of Spouse");
        if(focusField === null){
            focusField = form[6];
        }
    }
    if( !validateOtherDetails(form[7]) ) {
        invalidFields.push("Other Details");
        if(focusField === null){
            focusField = form[7];
        }
    }
    if( !validateTnc(form[8]) ) {
        isTncAccepted = false;
        if(focusField === null){
            focusField = form[0];
        }
    }

    let message = "";
    if(invalidFields.length === 1){
        message += "Please enter a " + invalidFields[0] + "\n";
    }
    else if(invalidFields.length > 1){
        message += "Please enter ";
        for (field in invalidFields) {
            if(field == 0){
                message += invalidFields[field];
            }else if(field == invalidFields.length -1){
                message += " and " + invalidFields[field];
            }else{
                message += ", " + invalidFields[field];
            }
        }
        message += "\n";
    }

    if(!isTncAccepted){
        message += "Please accept Terms and Conditions";
    }
    if(message.length !== 0){
        alert(message);
        focusField.focus();
    }
    else{
        document.getElementById('modalFirstName').innerHTML = form[0].value;
        document.getElementById('modalLastName').innerHTML = form[1].value;
        document.getElementById('modalGender').innerHTML = (form[2].checked) ? "Male" : "Female" ;
        document.getElementById('modalMaritalStatus').innerHTML = (form[4].checked) ? "Married" : "Unmarried" ;
        if(form[4].checked){
            document.getElementById('modalNameOfSpouseEntry').style.display = "block";
            document.getElementById('modalNameOfSpouse').innerHTML = form[6].value;
        }else{
            document.getElementById('modalNameOfSpouseEntry').style.display = "none";
        }
        document.getElementById('modalOtherDetails').innerHTML = form[7].value;
        document.getElementById('modal').style.display = "block";
    }
}

function validateFirstName(inputText) {
    const value = inputText.value;
    if(value === ""){
        return false;
    }
    else if(/\s/.test(value)){
        alert('First Name should not contain spaces');
        inputText.focus();
        return false;
    }
    return true;
}

function validateLastName(inputText) {
    const value = inputText.value;
    if(value === ""){
        return false;
    }
    else if(/\s/.test(value)){
        alert('Last Name should not contain spaces');
        inputText.focus();
        return false;
    }
    return true;
}

function validateGender(input1, input2) {
    if( !(input1.checked || input2.checked) ){
        return false;
    }
    return true;
}

function validateMaritalStatus(input1, input2) {
    if( !(input1.checked || input2.checked) ){
        return false;
    }
    return true;
}

function validateNameOfSpouse(inputText) {
    const value = inputText.value;
    if(value === ""){
        return false;
    }
    else if(/\s/.test(value)){
        alert('Name of Spouse should not contain spaces');
        inputText.focus();
        return false;
    }
    return true;
}

function validateOtherDetails(inputText) {
    const value = inputText.value;
    if(value === ""){
        return false;
    }
    return true;
}

function validateTnc(input) {
    if( !(input.checked) ){
        return false;
    }
    return true;
}

function onMaritalStatusChange(event) {
    const maritalStatus = document.getElementsByName('maritalStatus');
    const nameOfSpouseText = document.getElementById('nameOfSpouse');
    if(maritalStatus[0].checked){
        nameOfSpouseText.disabled = false;
    }
    else{
        nameOfSpouseText.disabled = true;
    }
}

function onReset(event) {
    event.preventDefault();
    event.target.form['nameOfSpouse'].disabled = true;
    event.target.form.reset();
}

function closeModal(event) {
    event.preventDefault();
    document.getElementById('modal').style.display = "none";
}
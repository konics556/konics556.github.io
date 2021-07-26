function onSave(event) {
    event.preventDefault();
    const form = document.getElementById('employee-form');
    let message;

    if( (message = validateTextInput(form[0].value, "First Name")).length !== 0 ) {
        form[0].focus();
        alert(message);
    }else if( (message = validateTextInput(form[1].value, "Last Name")).length !== 0 ) {
        form[1].focus();
        alert(message);
    }else if( (message = validateOption(form[2], "Gender")).length !== 0 ) {
        form[2].focus();
        alert(message);
    }else if( (message = validateOption(form[3], "Marital Status")).length !== 0 ) {
        form[3].focus();
        alert(message);
    }else if(form[3][1].selected && (message = validateTextInput(form[4].value, "Name of Spouse")).length !== 0 ){
        form[4].focus();
        alert(message);
    }else if( (message = validateTextArea(form[5].value, "Other Details")).length !== 0 ){
        form[5].focus();
        alert(message);
    }else if( (message = validateTnc(form[6])).length !== 0){
        form[6].focus();
        alert(message);
    }else{
        document.getElementById('modalFirstName').innerHTML = form[0].value;
        document.getElementById('modalLastName').innerHTML = form[1].value;
        document.getElementById('modalGender').innerHTML = form[2].value;
        document.getElementById('modalMaritalStatus').innerHTML = form[3].value;
        if(form[3][1].selected){
            document.getElementById('modalNameOfSpouseEntry').style.display = "block";
            document.getElementById('modalNameOfSpouse').innerHTML = form[4].value;
        }else{
            document.getElementById('modalNameOfSpouseEntry').style.display = "none";
        }
        document.getElementById('modalOtherDetails').innerHTML = form[5].value;
        document.getElementById('modal').style.display = "block";
    }
}

function isEmpty(str) { return (str.length === 0); }
function containSpaces(str) { return (/\s/.test(str)) }

function validateTextInput(inputText, fieldName) {
    if(isEmpty(inputText)){
        return "Please Enter " + fieldName;
    }
    else if(containSpaces(inputText)){
        return fieldName + " should not contain spaces";
    }
    return "";
}

function validateOption(input, fieldName) {
    if( !(input[1].selected || input[2].selected) ){
        return "Please select " + fieldName;
    }
    return "";
}

function validateTextArea(inputText, fieldName) {
    if(isEmpty(inputText)){
        return "Please Enter " + fieldName;
    }
    return "";
}

function validateTnc(input) {
    if(!input.checked) {
        return "Please accept Terms and Conditions";
    }
    return "";
}

function onMaritalStatusChange(event) {
    const maritalStatus = document.getElementById('marital-status-list')
    const nameOfSpouseText = document.getElementById('nameOfSpouse');
    if(maritalStatus[1].selected){
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
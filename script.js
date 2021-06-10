

let id = 22;
let nome = document.getElementById("new_user_name");
let adress = document.getElementById("new_user_adress");
let complement = document.getElementById("new_user_complement");
let zipCode = document.getElementById("new_user_zip");
let city = document.getElementById("new_user_city");
let state = document.getElementById("new_user_state");
let email = document.getElementById("new_user_email");
let phone = document.getElementById("new_user_phone");

function changeToNewUser() {
    document.getElementById('return_user_list').style.display = "none";
    document.getElementById('return_user_edit').style.display = "none";
    document.getElementById('return_new_user').style.display = "flex";
    document.getElementById('new_user_li').style.background = "#fde8cd";
    document.getElementById('new_user_li').style.color = "#025955";
    document.getElementById('user_list_li').style.background = "#025955";
    document.getElementById('user_list_li').style.color = "#fde8cd";
    clearNewUserReturn();
}
changeToNewUser();

function changeToUserList() {
    document.getElementById('return_new_user').style.display = "none";
    document.getElementById('return_user_edit').style.display = "none";
    document.getElementById('return_user_list').style.display = "block";
    document.getElementById('user_list_li').style.background = "#fde8cd";
    document.getElementById('user_list_li').style.color = "#025955";
    document.getElementById('new_user_li').style.background = "#025955";
    document.getElementById('new_user_li').style.color = "#fde8cd";
    clearSearchingReturn();
    clearRemovingReturn();
}

function changeToEditUser() {
    document.getElementById('return_new_user').style.display = "none";
    document.getElementById('return_user_list').style.display = "none";
    document.getElementById('return_user_edit').style.display = "flex";
    clearEditReturn();
}

function validateNewUserField() {
    nome.value == "" ? nome.style.background = "#ffeaea" : nome.style.background = "#fff"
    adress.value == "" ? adress.style.background = "#ffeaea" : adress.style.background = "#fff"
    zipCode.value == "" || zipCode.value.length != 5 ? zipCode.style.background = "#ffeaea" : zipCode.style.background = "#fff"
    city.value == "" ? city.style.background = "#ffeaea" : city.style.background = "#fff"
    state.value == "" ? state.style.background = "#ffeaea" : state.style.background = "#fff"
    email.value == "" ? email.style.background = "#ffeaea" : email.style.background = "#fff"
    phone.value == "" ? phone.style.background = "#ffeaea" : phone.style.background = "#fff"

    if (nome.value != "" && adress.value != "" && zipCode.value != "" && zipCode.value.length == 5 && city.value != "" && state.value != "" && email.value != "" && phone.value != "") {
        return true
    }
}

function clearInputsInNewUser() {
    let inputs = document.querySelectorAll('.new_user_input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
    console.log(inputs)
}

function creatNewUser() {

    id += 1;

    if (validateNewUserField()) {

        let newUser = {};
        newUser["id"] = id;
        newUser["nome"] = nome.value;
        newUser["adress"] = adress.value;
        newUser["complement"] = complement.value;
        newUser["zipCode"] = zipCode.value;
        newUser["city"] = city.value;
        newUser["state"] = state.value;
        newUser["email"] = email.value;
        newUser["phone"] = phone.value;
        let user = JSON.stringify(newUser);

        let xhttp = new XMLHttpRequest();

        xhttp.open("POST", `http://127.0.0.1/user`, true);
        xhttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        xhttp.onload = function () {
            document.getElementById('registration_return').innerHTML = `User Successfully Registered`;
            document.getElementById('registration_return').style.color = "#00917c"
            clearInputsInNewUser();
        }

        xhttp.send(user);
    } else {
        document.getElementById('registration_return').innerHTML = `Enter the Data for Registration`;
        document.getElementById('registration_return').style.color = "#c13838"
    }

}
function clearNewUserReturn() {
    document.getElementById('registration_return').innerHTML = ""
}
function clearSearchingReturn() {
    document.getElementById('searching_return_error').innerHTML = ""
}

function clearRemovingReturn() {
    document.getElementById('removing_return_error').innerHTML = ""
}

function clearEditReturn() {
    document.getElementById('edition_return').innerHTML = ""
}

//
//USER LIST
function showUserList(idValue) {

    if (idValue == "" || idValue == undefined) {
        idValue = "all";
    }
    changeToUserList()

    let xhttp = new XMLHttpRequest();

    xhttp.onload = function () {

        let userList = JSON.parse(this.response)

        if (userList.length != 0) {

            document.getElementById('table_user_list').innerHTML = "";

            for (let i = 0; i < userList.length; i++) {
                document.getElementById('table_user_list').innerHTML += `
            <tr>
                <td onclick="showUserToEdit(${userList[i].id})" class="thin_data_in_table">${userList[i].id}</td>
                <td onclick="showUserToEdit(${userList[i].id})" class="large_data_in_table">${userList[i].name}</td>
                <td onclick="showUserToEdit(${userList[i].id})" class="large_data_in_table">${userList[i].adress}</td>
                <td onclick="showUserToEdit(${userList[i].id})" class="normal_data_in_table">${userList[i].complement}</td>
                <td onclick="showUserToEdit(${userList[i].id})" class="small_data_in_table">${userList[i].zipCode}</td>
                <td onclick="showUserToEdit(${userList[i].id})" class="normal_data_in_table">${userList[i].city}</td>
                <td onclick="showUserToEdit(${userList[i].id})" class="normal_data_in_table">${userList[i].state}</td>
                <td onclick="showUserToEdit(${userList[i].id})" class="large_data_in_table">${userList[i].email}</td>
                <td onclick="showUserToEdit(${userList[i].id})" class="normal_data_in_table">${userList[i].phone}</td>
                <td class="thin_data_in_table"><input type="checkbox" id="checkbox${userList[i].id}" class="action_checkbox" value="${userList[i].id}" /></td>
            </tr>`
            }
        } else {
            document.getElementById('searching_return_error').innerHTML = "There is no User for this ID";
        }
    }
    xhttp.open("GET", `http://127.0.0.1/user/${idValue}`, true);
    xhttp.send();
}

function showUserToEdit(userId) {
    changeToEditUser();

    let xhttp = new XMLHttpRequest();

    xhttp.onload = function () {

        let userToEdit = JSON.parse(this.response);

        document.getElementById("edit_user_id").innerHTML = `Editing User ID ${userId}`
        document.getElementById("edit_user_name").value = userToEdit[0].name;
        document.getElementById("edit_user_adress").value = userToEdit[0].adress;
        document.getElementById("edit_user_complement").value = userToEdit[0].complement;
        document.getElementById("edit_user_zip").value = userToEdit[0].zipCode;
        document.getElementById("edit_user_city").value = userToEdit[0].city;
        document.getElementById("edit_user_state").value = userToEdit[0].state;
        document.getElementById("edit_user_email").value = userToEdit[0].email;
        document.getElementById("edit_user_phone").value = userToEdit[0].phone;

    }
    xhttp.open("GET", `http://127.0.0.1/user/${userId}`, true);
    xhttp.send();
}

let nomeEdited = document.getElementById("edit_user_name");
let adressEdited = document.getElementById("edit_user_adress");
let complementEdited = document.getElementById("edit_user_complement");
let zipCodeEdited = document.getElementById("edit_user_zip");
let cityEdited = document.getElementById("edit_user_city");
let stateEdited = document.getElementById("edit_user_state");
let emailEdited = document.getElementById("edit_user_email");
let phoneEdited = document.getElementById("edit_user_phone");

function editUser(userId) {
    let idChoose = Number(userId);


    let newUser = {};
    newUser["id"] = idChoose;
    newUser["nome"] = nomeEdited.value;
    newUser["adress"] = adressEdited.value;
    newUser["complement"] = complementEdited.value;
    newUser["zipCode"] = zipCodeEdited.value;
    newUser["city"] = cityEdited.value;
    newUser["state"] = stateEdited.value;
    newUser["email"] = emailEdited.value;
    newUser["phone"] = phoneEdited.value;
    let user = JSON.stringify(newUser);

    console.log(user);

    let xhttp = new XMLHttpRequest();
    
    xhttp.open("PUT", `http://127.0.0.1/user/${idChoose}`, true);
    xhttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

    xhttp.onload = () => {
        
        document.getElementById('edition_return').innerHTML = `User Successfully Edited`;
        document.getElementById('edition_return').style.color = "#00917c"
    }
    
    xhttp.send(user);
}

function areYouSureRemove() {

    clearSearchingReturn();
    clearRemovingReturn();

    let itemsToRemove = document.querySelectorAll('.action_checkbox:checked')

    if (itemsToRemove.length == 0) {
        document.getElementById('removing_return_error').innerHTML = "Select a user to remove"
    } else {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#5e5e5e',
            customClass: 'alert',
            className: "nome",
            confirmButtonText: 'Yes, remove it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                removeUser(itemsToRemove);
                return true;
            }
        })
    }
}
function removeUser(itemsToRemove) {

    for (let i = 0; i < itemsToRemove.length; i++) {

        console.log(Number(itemsToRemove[i].value))
        let xhttp = new XMLHttpRequest();

        xhttp.onload = function () {
        }

        xhttp.open("DELETE", `http://127.0.0.1/user/${itemsToRemove[i].value}`, true);
        xhttp.send();
        showUserList();
    }
}
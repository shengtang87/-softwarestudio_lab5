function get_info() {
    return new Promise((resolve, reject) => {
        let success_rate = Math.random();
        let timer = Math.floor(Math.random() * 1000 + 500);
        if (success_rate > 0.5) {
            let tmp_id = Math.floor(Math.random() * 14000 + 6000);
            setTimeout(() => {
                resolve(tmp_id);
            }, timer);
        } else {
            setTimeout(() => {
                reject('get_info Failed');
            }, timer);
        }
    });
}

function get_firstname() {
    first_name_list = ['Adam', 'Eric', 'Peter'];
    // TODO : generate a success rate

    // TODO : generate a timer

    // TODO : random select a item from list
}

function get_lastname() {
    last_name_list = ['Jones', 'Smith', 'Johnson'];
    // TODO : generate a success rate

    // TODO : generate a timer

    // TODO : random select a item from list
}

function get_username() {
    username_list = ['Toyz', 'Faker', 'Dinter'];
    // TODO : generate a success rate

    // TODO : generate a timer

    // TODO : random select a item from list
}

function get_email() {
    email_list = ['asdf@google.com', 'qwer@microsoft.com', 'zxcv@cs.nthu.edu.tw'];
    // TODO : generate a success rate

    // TODO : generate a timer

    // TODO : random select a item from list
}

function get_address() {
    address_list = ['1027 Alpha Avenue', '3132 Kidd Avenue', '876 Jefferson Street'];

    // TODO : generate a success rate

    // TODO : generate a timer

    // TODO : random select a item from list
}

function initApp() {
    var reSamplebtn = document.getElementById('resamplebtn');
    reSamplebtn.addEventListener('click', retrieve_data);
}

function retrieve_data() {
    var txtInfoName = document.getElementById('user-info-name');
    var txtFirstName = document.getElementById('firstName');
    var txtLastName = document.getElementById('lastName');
    var txtUserName = document.getElementById('username');
    var txtEmail = document.getElementById('email');
    var txtAddress = document.getElementById('address');
    var boxReSample = document.getElementById('re-sample');
    txtInfoName.innerText = '-';
    txtFirstName.value = '-';
    txtLastName.value = '-';
    txtUserName.value = '-';
    txtEmail.value = '-';
    txtAddress.value = '-';
    try {
        // TODO : get_info first
        // TODO : call other function to get other data
    } catch (e) {
        
    }
}

window.onload = function() {
    initApp();
}
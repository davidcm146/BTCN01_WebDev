const clickSidebarItems = document.querySelectorAll('.sidebar-item .sidebar-item_header-container .sidebar-item_header-showcontent');
const dragSidebarItems = document.querySelectorAll('.sidebar-item_header-updown');
const dragToRight = document.querySelector('.transfer-product_container .transfer-many-to-right');
const dragToLeft = document.querySelector('.transfer-product_container .transfer-many-to-left');
const sidebarItems = document.querySelectorAll('.sidebar-item');

clickSidebarItems.forEach((sidebarItem) => {
    sidebarItem.addEventListener('click', handleOpenBarHeader);
})

dragToRight.addEventListener('click', handleTransferToRightAll);
dragToLeft.addEventListener('click', handleTransferToLeftAll)

function handleOpenBarHeader(e) {
    if (e.target.parentNode.nextSibling.nextSibling.style.display === 'none') {
        e.target.parentNode.nextSibling.nextSibling.style.display = 'block';
        e.target.parentNode.parentNode.style.margin = "0 0 154px 0";
        e.target.innerHTML = '⬇';
        e.target.parentNode.style.backgroundColor = '#FF8C00';
        e.target.style.backgroundColor = '#FF8C00';
        e.target.parentNode.lastChild.previousSibling.style.backgroundColor = '#FF8C00';
        document.querySelectorAll('.sidebar-item_header-container').forEach(item => item.style.cursor = 'default');
    }
    else {
        e.target.parentNode.nextSibling.nextSibling.style.display = 'none'
        e.target.parentNode.parentNode.style.margin = "0 0 2px 0";
        e.target.innerHTML = '▶'
        e.target.parentNode.style.backgroundColor = '#f1cc9e';
        e.target.style.backgroundColor = '#f1cc9e';
        e.target.parentNode.lastChild.previousSibling.style.backgroundColor = '#f1cc9e';
        document.querySelectorAll('.sidebar-item_header-container').forEach(item => item.style.cursor = 'ns-resize');
    }
}

function checkFullName() {
    const fullName = document.querySelector('.full-name_input');
    let fullnameError = '';
    const notify = document.querySelector('.fullname-error');
    if (fullName.value === '' || fullName.value.length <= 2) {
        fullnameError = "*Họ và tên chưa được điền đủ";
        notify.innerText = fullnameError;
        document.querySelector('.address_content').style.padding = '18px 0 0 0';

    }
    else if (!fullName.value.match(/^([a-zA-Zà-úÀ-Ú]{2,})+\s+([a-zA-Zà-úÀ-Ú\s]{2,})+$/)) {
        fullnameError = "*Họ và tên không hợp lệ";
        notify.innerText = fullnameError;
        document.querySelector('.address_content').style.padding = '18px 0 0 0';

    }
    else {
        notify.innerText = '';
        document.querySelector('.address_content').style.padding = '0 0 0 0';

    }
}

function removeFullnameError() {
    document.querySelector('.fullname-error').innerText = '';
    document.querySelector('.address_content').style.padding = '0 0 0 0';
}

function checkAddress() {
    const address = document.querySelector('.address_input');
    let addressError = '';
    const notify = document.querySelector('.address-error');
    if (address.value === '') {
        addressError = "*Địa chỉ chưa được điền";
        notify.innerText = addressError;
        document.querySelector('.phone-number_content').style.padding = '18px 0 0 0';


    }
    else if (address.value.length <= 2) {
        addressError = "*Địa chỉ không hợp lệ";
        notify.innerText = addressError;
        document.querySelector('.phone-number_content').style.padding = '18px 0 0 0';

    }
    else {
        notify.innerText = '';
        document.querySelector('.phone-number_content').style.padding = '0 0 0 0';

    }
}

function removeAddressError() {
    document.querySelector('.address-error').innerText = '';
    document.querySelector('.phone-number_content').style.padding = '0 0 0 0';
}

function checkPhoneNumber() {
    const phoneNumber = document.querySelector('.phone-number_input');
    const notify = document.querySelector('.phone-error');
    if (phoneNumber.value === '') {
        textError = "*Số điện thoại chưa được điền";
        notify.innerText = textError;
        document.querySelector('.gender_content').style.padding = '18px 0 0 0';

    }
    else if (!phoneNumber.value.match(/^(?:\+84|0)([1-9]\d{8,9})$/) || phoneNumber.value.length < 10) {
        textError = "*Số điện thoại không hợp lệ";
        notify.innerText = textError;
        document.querySelector('.gender_content').style.padding = '18px 0 0 0';
    }
    else {
        notify.innerText = '';
        document.querySelector('.gender_content').style.padding = '0 0 0 0';
    }
}

function removePhoneNumberError() {
    document.querySelector('.phone-error').innerText = '';
    document.querySelector('.gender_content').style.padding = '0 0 0 0';
}

function checkDeliveryDate() {
    const deliveryDate = document.querySelector('.delivery-date_input');
    const notify = document.querySelector('.date-error');
    let textError = '';
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    let currentDate = new Date().toLocaleString('en-US', options);
    let fomattedDeliveryDate = deliveryDate.value.toLocaleString('en-US', options);
    if (fomattedDeliveryDate < currentDate) {
        textError = 'Ngày giao hàng không hợp lệ';
        notify.innerText = textError;
        document.querySelector('.email_content').style.padding = '18px 0 0 0';
    }
    else if (deliveryDate.value === 'Invalid Date') {
        textError = 'Ngày giao hàng không được để trống';
        notify.innerText = textError;
        document.querySelector('.email_content').style.padding = '18px 0 0 0';

    }
    else {
        notify.innerText = '';
        document.querySelector('.email_content').style.padding = '0 0 0 0';
    }
}

function removeDeliveryDate() {
    document.querySelector('.date-error').innerText = '';
    document.querySelector('.email_content').style.padding = '0 0 0 0';
}

function checkEmail() {
    var email = document.querySelector('.email_input');
    const notify = document.querySelector('.email-error');
    let emailError = '';
    if (email.value.length <= 2 || !email.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {

        emailError = "*Email không hợp lệ";
        notify.innerText = emailError;
    }
    else
        notify.innerText = ''
}

function removeEmailError() {
    document.querySelector('.email-error').innerText = '';
}

function handleTransferToRightAll() {
    var listProduct = document.querySelectorAll('.product-list-available .product-item');
    listProduct.forEach((product) => {
        document.querySelector('.product-list-chosen .product-list').append(product);
    })
}

function handleTransferToLeftAll() {
    var listProduct = document.querySelectorAll('.product-list-chosen .product-item');
    listProduct.forEach((product) => {
        document.querySelector('.product-list-available .product-list').append(product);
    })
}

let draggedItem = null;

function drag(event) {
    // if (event.target.parentNode.parentNode.style.backgroundColor === 'rgb(241, 204, 158)'){
    draggedItem = event.target.parentNode;
    console.log(draggedItem);
    // }
    // else{
    //     event.target.style.cursor = 'default';
    //     event.target.setAttribute('draggable', false);
    // }
    event.dataTransfer.setData('text/plain', '');
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const container = document.querySelector('.sidebar-list');
    const itemList = Array.from(container.children);
    const targetIndex = itemList.indexOf(event.target.parentNode);
    const draggedIndex = itemList.indexOf(draggedItem);

    if (targetIndex > -1 && draggedIndex > -1) {
        itemList.splice(draggedIndex, 1);
        itemList.splice(targetIndex, 0, draggedItem);

        container.innerHTML = '';
        itemList.forEach(item => container.appendChild(item));
    }
}

document.querySelectorAll('.sidebar-item_header-container').forEach(item => {
    item.addEventListener('dragover', allowDrop);
    item.addEventListener('drop', drop);
});

const productsAvailable = document.querySelectorAll('.product-list-available .product-item');
const productsChosen = document.querySelectorAll('.product-list-chosen .product-item');
let selectedItems = [];
let chosenProducts = Array.from(document.querySelectorAll('.product-list-chosen .product-item'));
function removeProduct(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);
    }
}

productsAvailable.forEach((item) => {
    item.addEventListener('click', () => {
        toggleItemSelection(item);
    });
});

document.querySelector('.transfer-one-to-right').addEventListener('click', () => {
    selectedItems.forEach((item) => {
        document.querySelector('.product-list-chosen .product-list').appendChild(item);
        toggleItemSelection(item);
        chosenProducts.push(item);
    });
});

productsChosen.forEach((item) => {
    item.addEventListener('click', () => {
        toggleItemSelection(item);
    });
});

document.querySelector('.transfer-one-to-left').addEventListener('click', () => {
    selectedItems.forEach((item) => {
        document.querySelector('.product-list-available .product-list').appendChild(item);
        toggleItemSelection(item);
        removeProduct(chosenProducts, item);
    });
});

function toggleItemSelection(item) {
    if (selectedItems.includes(item)) {
        item.style.background = 'white';
        item.children[1].style.color = 'black';
        item.children[2].style.color = '#f08f18';
        selectedItems = selectedItems.filter(selectedItem => selectedItem !== item);
    } else {
        item.style.background = '#FF8C00';
        item.children[1].style.color = 'white';
        item.children[2].style.color = 'red';
        selectedItems.push(item);
    }
}

const productListAvailable = document.querySelector('.product-list-available .product-list');
const productListChosen = document.querySelector('.product-list-chosen .product-list');


productsAvailable.forEach((product) => {
    product.addEventListener('dragstart', (e) => {
        let selectedAvailable = e.target;
        productListChosen.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        productListChosen.addEventListener('drop', (e) => {
            productListChosen.appendChild(selectedAvailable);
            chosenProducts.push(selectedAvailable);
            selectedAvailable = null;
        })
        productListAvailable.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        productListAvailable.addEventListener('drop', (e) => {
            productListAvailable.appendChild(selectedAvailable);
            removeProduct(chosenProducts, selectedAvailable);
            selectedAvailable = null;
        })
    })
})

productsChosen.forEach((product) => {
    product.addEventListener('dragstart', (e) => {
        let selectedChosen = e.target;
        productListChosen.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        productListChosen.addEventListener('drop', (e) => {
            productListChosen.appendChild(selectedChosen);
            chosenProducts.push(selectedChosen);
            selectedChosen = null;
        })
        productListAvailable.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        productListAvailable.addEventListener('drop', (e) => {
            productListAvailable.appendChild(selectedChosen);
            removeProduct(chosenProducts, selectedChosen);
            selectedChosen = null;
        })
    })
})

function formatDateString(inputDateString) {
    const [day, month, year] = inputDateString.split('/');

    const dateObject = new Date(`${year}-${month}-${day}`);

    const formattedDateString = dateObject.toLocaleDateString('en-GB');

    return formattedDateString;
}

const registerButton = document.querySelector('.register-btn');
const infoCols = document.querySelectorAll('.info-col');
registerButton.addEventListener('click', () => {
    let fullnameCol = document.createElement('td');
    fullnameCol.textContent = document.querySelector('.full-name_input').value;
    let genderCol = document.createElement('td');
    genderCol.textContent = document.getElementById('')
    if (document.getElementById('gender-male').checked)
        genderCol.textContent = document.getElementById('gender-male').value;
    else
        genderCol.textContent = document.getElementById('gender-female').value;
    let addressCol = document.createElement('td');
    addressCol.textContent = document.querySelector('.address_input').value;
    let dateCol = document.createElement('td');

    dateCol.textContent = formatDateString(document.querySelector('.delivery-date_input').value);
    let productCol = document.createElement('td');
    productCol.textContent = chosenProducts.map((product) => {
        return product.childNodes[3].textContent + ';';
    }).join(' ').slice(0, -1);
    let newCol = document.createElement('tr');
    newCol.classList.add('info-col');
    newCol.appendChild(fullnameCol);
    newCol.appendChild(genderCol);
    newCol.appendChild(addressCol);
    newCol.appendChild(dateCol);
    newCol.appendChild(productCol);
    document.querySelector('.table-register-info').appendChild(newCol);
})

const deleteButton = document.querySelector('.delete-btn');

deleteButton.addEventListener('click', () => {
    const infoCols = document.querySelectorAll('.table-register-info tr');
    infoCols.forEach((row) => {
        if (row.className === 'info-col') {
            row.remove();
        }
    })
})



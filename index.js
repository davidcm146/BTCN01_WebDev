const clickSidebarItems = document.querySelectorAll('.sidebar-item .sidebar-item_header-container .sidebar-item_header-showcontent');
const dragSidebarItems = document.querySelectorAll('.sidebar-item .sidebar-item_header-container .sidebar-item_header-updown');
const dragToRight = document.querySelector('.transfer-product_container .transfer-many-to-right');
const dragToLeft = document.querySelector('.transfer-product_container .transfer-many-to-left')

clickSidebarItems.forEach((sidebarItem) =>{
    sidebarItem.addEventListener('click', handleOpenBarHeader);
})

dragSidebarItems.forEach((sidebarItem) =>{
    // sidebarItem.addEventListener('click', handleClick);
    sidebarItem.addEventListener('mousedown', handleMouseDown);
    sidebarItem.addEventListener('dragstart', handleDragStart);
    sidebarItem.addEventListener('dragover', handleDragOver);
    sidebarItem.addEventListener('drop', handleDrop);
})

dragToRight.addEventListener('click', handleTransferToRightAll);
dragToLeft.addEventListener('click', handleTransferToLeftAll)

function handleOpenBarHeader(e){
    if (e.target.parentNode.nextSibling.nextSibling.style.display === 'none')
    {
        e.target.parentNode.nextSibling.nextSibling.style.display = 'block';
        e.target.parentNode.parentNode.style.margin = "0 0 154px 0";
        e.target.innerHTML = '⬇';
        e.target.parentNode.style.backgroundColor = '#FF8C00';
        e.target.style.backgroundColor = '#FF8C00';
        e.target.parentNode.lastChild.previousSibling.style.backgroundColor = '#FF8C00';
    }
    else
    {
        e.target.parentNode.nextSibling.nextSibling.style.display = 'none'
        e.target.parentNode.parentNode.style.margin = "0 0 2px 0";
        e.target.innerHTML = '▶'
        e.target.parentNode.style.backgroundColor = '#f1cc9e';
        e.target.style.backgroundColor = '#f1cc9e';
        e.target.parentNode.lastChild.previousSibling.style.backgroundColor = '#f1cc9e';
    }
}
var startPos;

// dragSidebarItems.forEach((sidebarItem) => {
//     sidebarItem.addEventListener("mousedown", (e) => {
//       e.preventDefault();
//       console.log("Is dragging");
//       console.log("ClientX", e.clientX);
//       console.log("ClientY", e.clientY);
//       sidebarItem.oldX = e.clientX;
//       sidebarItem.oldY = e.clientY;
//       sidebarItem.isDragging = true;
//       const thumb = sidebarItem.cloneNode(true);
//       thumb.isDragging = true;
//       thumb.oldX = sidebarItem.oldX;
//       thumb.oldY = sidebarItem.oldY;
//       thumb.original = sidebarItem;
//       thumb.classList.toggle("thumb");
//       sidebarItem.parentNode.appendChild(thumb);
//       thumb.addEventListener("mouseup", (e) => {
//         console.log("Mouse up");
//         thumb.isDragging = false;
//         const real = thumb.original;
//         real.style.left = thumb.style.left;
//         real.style.top = thumb.style.top;
//         console.log('Real top', real.style.top);
//         console.log('Real left', real.style.left)
//         real.parentNode.removeChild(thumb);
//       });
//       thumb.addEventListener("mousemove", (e) => {
//         if (thumb.isDragging) {
//           console.log("MOuse moving")
//           const dX = e.clientX - thumb.oldX;
//           const dY = e.clientY - thumb.oldY;
//           thumb.style.left = thumb.offsetLeft + dX + "px";
//           thumb.style.top = thumb.offsetTop + dY + "px";
//           thumb.oldX = e.clientX;
//           thumb.oldY = e.clientY;
//         }
//       });
//     });
//   });

function handleMouseDown(e){
    //e.preventDefault();
    startPos  = e.target.parentNode.parentNode;
    if (e.target.parentNode.nextSibling.nextSibling.style.display === 'none')
    {
        e.target.parentNode.parentNode.setAttribute('draggable', true);
        //e.target.setAttribute('draggable', true);
    }
    else
        e.target.parentNode.parentNode.setAttribute('draggable', false);
}

function handleDragStart(e){

}

function handleDragOver(e){
    e.preventDefault();
    e.stopPropagation();
}

function handleDrop(e){
    e.target.parentNode.parentNode.parentNode.append(startPos);
}

function checkFullName(){
    var fullName = document.querySelector('.full-name .full-name_input');
    try{
        if (fullName.value === '' || fullName.value.length <= 2 || fullName.value === undefined || typeof fullName.value === Number)
            throw "*Họ và tên chưa hợp lệ";
    }
    catch(err)
    {
        const notify = document.createElement("p");
        notify.innerText = err;
        notify.style.color = 'red';
        notify.style.margin = "0 0 0 0";
        document.querySelector('.full-name').appendChild(notify);
        document.querySelector('.address_content').style.padding = '10px 0 0 0';
        setTimeout(()=>{
            notify.remove();
            document.querySelector('.address_content').style.padding = '0 0 0 0';
        }, 1000)
    }
}

function checkAddress(){
    var address = document.querySelector('.address .address_input');
    try{
        if (address.value === '' || address.value.length <= 2 || address.value === undefined)
            throw "*Địa chỉ chưa được điền";
    }
    catch(err)
    {
        const notify = document.createElement("p");
        notify.innerText = err;
        notify.style.color = 'red';
        notify.style.margin = "0 0 0 0";
        document.querySelector('.address').appendChild(notify);
        document.querySelector('.phone-number_content').style.padding = '10px 0 0 0';
        setTimeout(()=>{
            notify.remove();
            document.querySelector('.phone-number_content').style.padding = '0 0 0 0';
        }, 1000)
    }
}

function checkPhoneNumber(){
    var phoneNumber = document.querySelector('.phone-number .phone-number_input');
    try{
        if (phoneNumber.value === '' || phoneNumber.value.length <= 2 || phoneNumber.value === undefined || !phoneNumber.value.startsWith('0'))
            throw "*Số điện thoại không hợp lệ";
    }
    catch(err)
    {
        const notify = document.createElement("p");
        notify.innerText = err;
        notify.style.color = 'red';
        notify.style.margin = "0 0 0 0";
        document.querySelector('.phone-number').appendChild(notify);
        document.querySelector('.gender_content').style.padding = '10px 0 0 0';
        setTimeout(()=>{
            notify.remove();
            document.querySelector('.gender_content').style.padding = '0 0 0 0';
        }, 1000)
    }
}

function checkEmail(){
    var email = document.querySelector('.email .email_input');
    try{
        if (!email.value.contains('@') || email.value.length <= 2 || email.value === undefined || email.value.contains('!') ||
        email.value.contains('*') || email.value.contains('%') || email.value.contains('$') || email.value.contains('&') || email.value === '')
            throw "*Email không hợp lệ";
    }
    catch(err)
    {
        const notify = document.createElement("p");
        notify.innerText = err;
        notify.style.color = 'red';
        notify.style.margin = "0 0 0 0";
        document.querySelector('.email').appendChild(notify);
        //document.querySelector('.gender_content').style.padding = '10px 0 0 0';
        setTimeout(()=>{
            notify.remove();
        }, 1000)
    }
}

function handleTransferToRightAll(){
    var listProduct = document.querySelectorAll('.product-list-container .product-list-available .product-list .product-item');
    listProduct.forEach((product)=>{
        document.querySelector('.product-list-chosen .product-list').append(product);
    })
}

function handleTransferToLeftAll(){
    var listProduct = document.querySelectorAll('.product-list-container .product-list-chosen .product-list .product-item');
    listProduct.forEach((product)=>{
        document.querySelector('.product-list-available .product-list').append(product);
    })
}







let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
let accountBox = document.querySelector('.header .account-box');
let user = document.querySelector('#user-btn');
menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  accountBox.classList.remove('active');
};
user.onclick = () =>{
    accountBox.classList.toggle('active');
    navbar.classList.remove('active');``
    menu.classList.remove('fa-times');
 }
 window.onscroll = () =>{
    navbar.classList.remove('active');
    accountBox.classList.remove('active');
    menu.classList.remove('fa-times');
 }
 document.querySelector('#close-update').onclick = () =>{
   document.querySelector('.edit-product-form').style.display = 'none';
   window.location.href = 'admin_products.php';
}

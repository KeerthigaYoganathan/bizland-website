const mobileNavToggleBtn = document.querySelectorAll(".mobile-nav-toggle-btn")[0];
console.log(mobileNavToggleBtn);
mobileNavToggleBtn.addEventListener("click", function(){
    // console.log(mobileNavToggleBtn);
    document.getElementsByClassName("mobile-nav-bar")[0]?.classList.toggle("mobile-nav-bar-active");
    // <i class="bi bi-x-circle"></i>
    mobileNavToggleBtn.children[0].classList.toggle("bi-x-circle");
    mobileNavToggleBtn.children[0].classList.toggle("bi-list");
})
// for(let i=1; i<=10; i++){
//     if(i==5 || i==10){
//         console.log(i);
//     }
// }


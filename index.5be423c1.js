const e={openModalBtns:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),backdrop:document.querySelector(".backdrop"),body:document.querySelector("body")},o=document.querySelector(".header__open-modal");console.log(o),o.addEventListener("click",(()=>{console.log("click on header modal-open button")}));for(const o of e.openModalBtns)o.addEventListener("click",d);function d(){e.modal.classList.toggle("visually-hidden"),e.body.classList.toggle("modal-open")}e.closeModalBtn.addEventListener("click",d),e.backdrop.addEventListener("click",(o=>{o.target===e.backdrop&&d()})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&d()}));
//# sourceMappingURL=index.5be423c1.js.map

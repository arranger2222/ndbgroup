!function(){var e=document.getElementById("myForm");e.onsubmit=function(s){s.preventDefault(),emailjs.sendForm("service_ci8i7b2","template_uw3wr6i",e).then((function(e){console.log("Message sent successfully!",e),o.classList.add("visually-hidden"),n.classList.remove("modal-open")}),(function(e){console.log("An error occurred while sending the message:",e)})),e.reset()};var o=document.querySelector(".backdrop"),n=document.querySelector("body")}();
//# sourceMappingURL=index.923f8430.js.map

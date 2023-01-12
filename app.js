(function () {
    //changes the active button and active section on click 
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
})();

//Light-Dark Mode

const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () =>{
    let element = document.body;
    element.classList.toggle('light-mode')
})



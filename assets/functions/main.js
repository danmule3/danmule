
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}

if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}
    



const tabs = document.querySelectorAll(`[data-target]`),
      tabsContent = document.querySelectorAll(`[data-content]`)

        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                const target = document.querySelector(tab.dataset.target)

                tabsContent.forEach(tabContents => {
                    tabContents.classList.remove("skills_active")
                })

                target.classList.add('skills_active')

                tabs.forEach(tab => {
                    tab.classList.remove("skills_active")
                })

                tab.classList.add('skills_active')
            })
        })



let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});


const linkWork = document.querySelectorAll('.work_item')

function activeWork() {
    linkWork.forEach(L=> L.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(L=> L.addEventListener("click", activeWork))




document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work_button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio_popup").classList.toggle("open");
}

document.querySelector(".portfolio_popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp_thumbnail img").src = portfolioItem.querySelector(".work_img").src;
    document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfolioItem.querySelector(".work_title").innerHTML;
    document.querySelector(".portfolio_popup-body").innerHTML = portfolioItem.querySelector(".portfolio_item-details").innerHTML;
}


const modalViews = document.querySelectorAll('.services_modal'),
      modelBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')


let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})


let swiper = new Swiper(".testimonials_container", {
      spaceBetween: 24,
      loop: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
        },
});



const inputs = document.querySelectorAll(".input")

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})




const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) 
        {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else 
        {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}



const form = document.querySelector("form");
const fullName = document.getElementById("name");
const emailAddress = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const yourMessage = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${emailAddress.value}<br> Phone Number: ${phoneNumber.value}<br> Your Message: ${yourMessage.value}<br>`;

  Email.send({
    SecureToken: "5f1ede72-c19b-48bf-856d-d7d189ed9212",
    Username: "danielmule638@gmail.com",
    Password: "869C51711724EFAE62640695D3CB08039E47",
    To: "danielmule638@gmail.com",
    Subject: emailSubject.value,
    Body: bodyMessage,
  }).then((message) => {
    if(message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (
    !fullName.classList.contains("name") &&
    !emailAddress.classList.contains("email") &&
    !phoneNumber.classList.contains("phone") &&
    !yourMessage.classList.contains("message")
  ) {
    sendEmail();

    form.reset();
    return false;
  }
});
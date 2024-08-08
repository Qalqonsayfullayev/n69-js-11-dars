// let userList = [
//     {
//         id:1,
//         name:"Qalqonbek",
//         surname:"Sayfullayev",
//         age:16
//     },
//     {
//         id:2,
//         name:"Shahboz",
//         surname:"Subhanov",
//         age:21
//     },
//     {
//         id:3,
//         name:"Yusufbek",
//         surname:"Abdullayev",
//         age:17
//     },
//     {
//         id:4,
//         name:"Hojiakbar",
//         surname:"Mehmonov",
//         age:15
//     },
// ]



let navbarItems = ["Home", "Product", "About", "Contact"]

let elHeader = document.querySelector(".site-header")
let elContainer = document.createElement("div") // container 
let elHeaderInner = document.createElement("div") // haeder 
let elLogoLink = document.createElement("a") // header__logo-link 
let elLogoImg = document.createElement("img") // header__logo-img

let elHeaderList = document.createElement("ul") // header__list
let elLoginBtn = document.createElement("a") // header__login-btn


elContainer.classList.add("container")
elHeaderInner.classList.add("header")

elLogoLink.classList.add("header___logo-link")
elLogoLink.href = "/"
elLogoImg.classList.add("header___Logo-img")
elLogoImg.src = "./img/logo.svg"
elLogoImg.width="186"
elLogoImg,height="58"
elLogoImg,alt = "Site Logo"

elHeaderList.classList.add("header___list")

elLoginBtn.classList.add("header__login-btn") 
elLoginBtn.href = "/" 
elLoginBtn.textContent = "Login"

navbarItems.forEach(item => {

    let elHeaderItem = document.createElement("li") 
    let elHeaderItemLink = document.createElement("a")
    elHeaderItem.classList.add("header__item") 
    elHeaderItemLink.classList.add("header___item-link")
    elHeaderItemLink.href="/" 
    elHeaderItemLink.textContent = item
    elHeaderList.appendChild(elHeaderItem) 
    elHeaderItem.appendChild(elHeaderItemLink)
})


elHeader.appendChild(elContainer)
elContainer.appendChild(elHeaderInner)
elHeaderInner.append(elLogoLink, elHeaderList, elLoginBtn) 
elLogoLink.appendChild(elLogoImg)


{/* <section>
    <div class="container">
        <div>
            <h1>
                Work at the speed
                of thought
            </h1>
            <h2>Most calendars are designed for teams. Slate is designed for
                freelancers who want a simple way to plan their schedule.</h2>
            <div>
                <button>Try For Free</button>
                <button>Learn More</button>
            </div>
        </div>
    </div>
</section> */}

let elSection = document.querySelector(".site-section");

let elContainer2 = document.createElement("div");
let elWrapper = document.createElement("div");
let elTitle = document.createElement("h1");
let elSubtitle = document.createElement("h2");
let elButtonContainer = document.createElement("div");
let elTryButton = document.createElement("button");
let elLearnMoreButton = document.createElement("button");
let elSectionImg = document.createElement("img") // header__logo-img


elContainer2.classList.add("container");
elWrapper.classList.add("container__wrapper");
elTitle.classList.add("container__title");
elSubtitle.classList.add("container__subtitle");
elButtonContainer.classList.add("container__buttons");
elTryButton.classList.add("container__button", "container__button--primary");
elLearnMoreButton.classList.add("container__button", "container__button--secondary");
elSectionImg.classList.add("section__img")
elSectionImg.src = "./img/screens.png"
elSectionImg.width="1252.02"
elSectionImg,height="841"
elSectionImg,alt = "Section Img"

elTitle.textContent = "Work at the speed of thought";
elSubtitle.textContent = "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.";
elTryButton.textContent = "Try For Free";
elLearnMoreButton.textContent = "Learn More";

document.body.appendChild(elSection);
elSection.appendChild(elContainer);
elContainer.appendChild(elWrapper);
elWrapper.appendChild(elTitle);
elWrapper.appendChild(elSubtitle);
elWrapper.appendChild(elButtonContainer);
elButtonContainer.appendChild(elTryButton);
elButtonContainer.appendChild(elLearnMoreButton);
elButtonContainer.append(elSectionImg)
const buttons = document.querySelectorAll(".add-btn");
// console.log(btns);

const toggleMenu = function (event) {
    const parent = event.target.parentNode;
    const menu = parent.querySelector(".choose-elem");
    menu.classList.toggle("hidden");
}
const showElement = function (button) {
    button.addEventListener("click", toggleMenu);
    // const parent = button.parentNode;
    // const menu = parent.querySelector(".choose-elem");
    // menu.classList.toggle("hidden");
    // console.log(parent);
    // const menu = button.parentNode.querySelector(".choose-elem")
    // console.log(menu.classList)

};

buttons.forEach(showElement);


const form = document.querySelector(".grid-select");
const layoutDiv = document.querySelector(".layout");

const changeLayoutHandler = function (event) {
    let layoutClass = "layout--" + event.target.value;
    layoutDiv.classList.remove("layout--landing")
    layoutDiv.classList.remove("layout--blog")
    layoutDiv.classList.remove("layout--shop")
    layoutDiv.classList.add(layoutClass);
}

form.addEventListener("change", changeLayoutHandler);

// const headerWrapper = document.querySelector(".header__elements-wrapper");
// const h1Template = document.querySelector("#h1-template").content;
// const element = h1Template.querySelector(".element");
// const elementClone = element.cloneNode(true);
// headerWrapper.append(elementClone);
// headerWrapper.parentNode.classList.remove("header--empty");


const chooseButtonElements = document.querySelectorAll(".choose-elem__btn");
const addElementHandler = function (event) {
    const clickedBtn = event.target;
    const addMenuElement = clickedBtn.parentNode;
    addMenuElement.classList.add("hidden");
    const container = clickedBtn.dataset.container;
    const type = clickedBtn.dataset.type;

    const template = document.querySelector(`#${type}-template`).content;
    const element = template.querySelector(".element");
    const elementClone = element.cloneNode(true);

    const wrapper = document.querySelector(`.${container}__elements-wrapper`);
    wrapper.append(elementClone);


    if (container.includes('content')) {
        wrapper.parentElement.classList.remove('content--empty');
    } else {
        wrapper.parentElement.classList.remove(container + '--empty');
    };

    const deleteButton = elementClone.querySelector(".delete-btn");
    deleteButton.addEventListener("click", deleteElementHandler);
};

chooseButtonElements.forEach(function (elem) {
    elem.addEventListener("click", addElementHandler);
});

const deleteElementHandler = function (evt) {
    const element = evt.target.parentNode;
    const wrapper = element.parentNode;
    const block = wrapper.parentNode;
    element.remove();
    const elements = wrapper.querySelectorAll(".element");
    if (elements.length === 0) {
        if (block.classList.contains('header')) {
            block.classList.add('header--empty');
        } 

        if (block.classList.contains('content')) {
            block.classList.add('content--empty');
        }

        if (block.classList.contains('footer')) {
            block.classList.add('footer--empty');
        }
    }
};
// const elem = document.querySelector(".grid-select__header");

// const func = function(event) {
//     console.log(event);
//     if (event.ctrlKey) {event.target.classList.toggle("qwe");}
// }

// elem.addEventListener("click", func);




function replace_body_with_element(element){
    // Clear the body
    document.body.innerHTML = '';

    // Copy the styles from the element to the body
    Array.from(element.style).forEach(style => {
        document.body.style[style] = element.style[style];
    });

    // Remove the styles from the element
    element.removeAttribute('style');

    // Append the element to the body
    document.body.appendChild(element);
}


function make_btn(text_content){
    let result = document.createElement("button");
    result.textContent = text_content;
    result.classList.add("my-btn");
    return result;
}

function make_root_div(){
    let result = document.createElement("div");
    result.classList.add("my-body");
    return result;
}

function make_para(text_content){
    let result = document.createElement("p");
    result.className = "welcome-paragraph";
    result.textContent = text_content;
    return result;
}

let utils = {
    replace_body_with_element: replace_body_with_element,
    make_btn: make_btn,
    make_root_div: make_root_div,
    make_para: make_para
};


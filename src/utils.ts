

function pass(){
    // do nothing
}

function assert(condition: any, message = "generic msg"){
    if(!condition){
        alert(`Oops, I messed up. Please text me, -joe: '${message}'`);
    }
}

function get_elem_by_id(id: string){
    let result = document.getElementById(id);
    assert(result, `failed to get element with id '${id}'`);
    return result;
}

function replace_body_with_element(element: HTMLDivElement){
    // Clear the body
    document.body.innerHTML = "";

    // @ts-ignore
    // Copy the styles from the element to the body
    Array.from(element.style).forEach((style: string) => {
        // @ts-ignore
        document.body.style[style] = element.style[style];
    });

    // Remove the styles from the element
    element.removeAttribute('style');

    // Append the element to the body
    document.body.appendChild(element);
}


function make_btn(text_content: string): HTMLButtonElement{
    let result = document.createElement("button");
    result.textContent = text_content;
    result.classList.add("my-btn");
    return result;
}

const hidden_input_id = "hidden-input";


function make_root_div(){
    let result = document.createElement("div");
    result.classList.add("my-body");

    let hidden_input = document.createElement("input");
    hidden_input.type = "text";
    hidden_input.classList.add("hidden-input");
    hidden_input.autocomplete = "off";
    hidden_input.value = "nonsense-" + Math.random(); // nonsense so it doesn't try to do autocomplete
    hidden_input.id = hidden_input_id;

    result.append(hidden_input);
    return result;
}

function make_para(text_content: string){
    let result = document.createElement("p");
    result.className = "welcome-paragraph";
    result.textContent = text_content;
    return result;
}

interface Meme {
    image: HTMLImageElement,
    caption: HTMLDivElement,
    containing_div: HTMLDivElement
}

function make_div_with_class(cls_name: string): HTMLDivElement {
    let result = document.createElement("div");
    result.classList.add(cls_name);
    return result;
}

let utils = {
    replace_body_with_element: replace_body_with_element,
    make_btn: make_btn,
    make_root_div: make_root_div,
    make_para: make_para,
    make_meme: function(image_path: string, caption: string): Meme {
        let image = document.createElement("img");
        image.src = image_path;
        image.addEventListener("click", function(){
            get_elem_by_id(hidden_input_id)?.focus();
        });
        let div_with_txt = make_div_with_class("meme-text");
        div_with_txt.textContent = caption;
        let containing_div = make_div_with_class("meme");
        containing_div.append(image, div_with_txt);
        return {
            image: image,
            caption: div_with_txt,
            containing_div: containing_div
        };
    }
};


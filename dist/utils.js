"use strict";
function pass() {
    // do nothing
}
function assert(condition, message) {
    if (message === void 0) { message = "generic msg"; }
    if (!condition) {
        alert("Oops, I messed up. Please text me, -joe: '".concat(message, "'"));
    }
}
function replace_body_with_element(element) {
    // Clear the body
    document.body.innerHTML = "";
    // @ts-ignore
    // Copy the styles from the element to the body
    Array.from(element.style).forEach(function (style) {
        // @ts-ignore
        document.body.style[style] = element.style[style];
    });
    // Remove the styles from the element
    element.removeAttribute('style');
    // Append the element to the body
    document.body.appendChild(element);
}
function make_btn(text_content) {
    var result = document.createElement("button");
    result.textContent = text_content;
    result.classList.add("my-btn");
    return result;
}
function make_root_div() {
    var result = document.createElement("div");
    result.classList.add("my-body");
    return result;
}
function make_para(text_content) {
    var result = document.createElement("p");
    result.className = "welcome-paragraph";
    result.textContent = text_content;
    return result;
}
var utils = {
    replace_body_with_element: replace_body_with_element,
    make_btn: make_btn,
    make_root_div: make_root_div,
    make_para: make_para,
    make_meme: function (image_path, caption) {
        var image = new Image();
        image.src = image_path;
        var div_with_txt = document.createElement("div");
        div_with_txt.classList.add("meme-text");
        div_with_txt.textContent = caption;
        var containing_div = document.createElement("div");
        containing_div.classList.add("meme");
        containing_div.append(image, div_with_txt);
        return {
            image: image,
            caption: div_with_txt,
            containing_div: containing_div
        };
    }
};

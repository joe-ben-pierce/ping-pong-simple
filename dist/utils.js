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
function get_elem_by_id(id) {
    var result = document.getElementById(id);
    assert(result, "failed to get element with id '".concat(id, "'"));
    return result;
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
var hidden_input_id = "hidden-input";
function make_root_div() {
    var result = document.createElement("div");
    result.classList.add("my-body");
    var hidden_input = document.createElement("input");
    hidden_input.type = "text";
    hidden_input.classList.add("hidden-input");
    hidden_input.autocomplete = "off";
    hidden_input.value = "nonsense-" + Math.random(); // nonsense so it doesn't try to do autocomplete
    hidden_input.id = hidden_input_id;
    result.append(hidden_input);
    return result;
}
function make_para(text_content) {
    var result = document.createElement("p");
    result.className = "welcome-paragraph";
    result.textContent = text_content;
    return result;
}
function make_div_with_class(cls_name) {
    var result = document.createElement("div");
    result.classList.add(cls_name);
    return result;
}
var utils = {
    replace_body_with_element: replace_body_with_element,
    make_btn: make_btn,
    make_root_div: make_root_div,
    make_para: make_para,
    make_meme: function (image_path, caption) {
        var image = document.createElement("img");
        image.src = image_path;
        image.addEventListener("click", function () {
            var _a;
            (_a = get_elem_by_id(hidden_input_id)) === null || _a === void 0 ? void 0 : _a.focus();
        });
        var div_with_txt = make_div_with_class("meme-text");
        div_with_txt.textContent = caption;
        var containing_div = make_div_with_class("meme");
        containing_div.append(image, div_with_txt);
        return {
            image: image,
            caption: div_with_txt,
            containing_div: containing_div
        };
    }
};

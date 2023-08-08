"use strict";
// this line only here so I know the page loaded. Remove in prod
// window.onload = () => { alert('Page refreshed at ' + new Date().toLocaleTimeString()); };
function main() {
    var starting_fn = make_join_game_pg;
    replace_body_with_element(starting_fn());
}
function make_home_page() {
    var result = make_root_div();
    var host_game_btn = make_btn("Host Game");
    var join_game_btn = make_btn("Join Game");
    join_game_btn.addEventListener("click", function () {
        replace_body_with_element(make_join_game_pg());
    });
    var welcome_paragraph = make_para("Pro tip: Connect the host device to a TV so everyone can see!");
    result.append(host_game_btn, join_game_btn, welcome_paragraph);
    return result;
}
function make_join_game_pg() {
    var result = utils.make_root_div();
    result.style.backgroundColor = "blue";
    var meme = utils.make_meme("pics/star.jpg", "");
    document.addEventListener("keydown", function (event) {
        meme.caption.textContent += event.key;
    });
    result.append(meme.containing_div);
    return result;
}
main();

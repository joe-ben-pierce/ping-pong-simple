

// this line only here so I know the page loaded. Remove in prod
// window.onload = () => { alert('Page refreshed at ' + new Date().toLocaleTimeString()); };


function main(){
    let starting_fn = make_join_game_pg;
    replace_body_with_element(starting_fn());
}

function make_home_page(){
    let result = make_root_div();
    let host_game_btn = make_btn("Host Game");
    let join_game_btn = make_btn("Join Game");
    join_game_btn.addEventListener("click", function(){
        replace_body_with_element(make_join_game_pg());
    });
    let welcome_paragraph = make_para("Pro tip: Connect the host device to a TV so everyone can see!");
    result.append(host_game_btn, join_game_btn, welcome_paragraph);
    return result;
}

function make_join_game_pg(){
    let result = utils.make_root_div();
    result.style.backgroundColor = "white";
    let meme = utils.make_meme("pics/star.jpg", "");
    document.addEventListener("keydown", event => {
        let key = event.key;
        if(is_single_letter(key)){
            meme.caption.textContent += key;
        } else if(key === "Backspace") {
            meme.caption.textContent = meme.caption.textContent!.slice(0, -1); // delete the last charecter
        }
        
    });
    result.append(meme.containing_div);
    return result;
}


main();

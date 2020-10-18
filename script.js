//fork of Auto-Redeem-Twitch-Bonus - https://github.com/Felipefury/Auto-Redeem-Twitch-Bonus/blob/master/src/no_sound/index.user.js

function main() {
    if (document.querySelector(".claimable-bonus__icon")) {
        document.querySelector(".claimable-bonus__icon").click();
        var chat = document.querySelector(".chat-scrollable-area__message-container");
        var div = document.createElement("div");
        div.innerHTML = `<div class="chat-line__message" data-a-target="chat-line-message" data-test-selector="chat-line-message"><span class="chat-author__display-name" style="color: rgb(220, 0, 0);">[${new Date().toTimeString().slice(0, 8)}] Bonus collected.</span><span> (only you can see it)</span></div>`
        chat.appendChild(div);
    }
}

setInterval(main, 1000);
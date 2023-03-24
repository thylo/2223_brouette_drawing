document.addEventListener("DOMContentLoaded", function() {
    const socket = io();

        socket.on("server reply", (msg)=>{
            console.log(msg)
        })

    const form = document.getElementById('form');
    const input = document.getElementById('input');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (input.value) {
            socket.emit('chat message', input.value);
            input.value = '';
        }
    });
});
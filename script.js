let form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector("#Submit").value = "Submiting...";
    let data = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycbz9YjZpr2yZjZ8I180rurZcxNiRJmTdtskx0XdkGHbVYKu5eNJUS01rtlywwXUSCtYgAA/exec', {
        method: "POST",
        body: data
    })
        .then(res => res.text())
        .then(data => {
            document.querySelector("#message").innerHTML = data;
            document.querySelector("#Submit").value = "Submit";
        });
})
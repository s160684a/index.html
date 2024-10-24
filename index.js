setTimeout(() => {
    const click = document.querySelector(".main-click");

    click.addEventListener("click", () => { 
        if (document.querySelector(".timer").textContent == "0") {
            document.querySelector(".count").textContent = Number(document.querySelector(".count").textContent) + 1;
            timer()
        };
    });

    function timer() {
        document.querySelector(".timer").textContent = "30";
    };

    setInterval(() => { if (document.querySelector(".timer").textContent != 0) { document.querySelector(".timer").textContent = Number(document.querySelector(".timer").textContent) - 1; }}, 1000);
}, 100);

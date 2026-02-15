document.getElementById("calculateBtn").addEventListener("click", calculatePrice);

function calculatePrice() {
    const productPrice = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;
    const result = document.getElementById("result");

    // Validācija
    if (quantity === "" || quantity <= 0) {
        result.innerHTML = "Lūdzu ievadi pareizu daudzumu!";
        result.style.color = "red";
        return;
    }

    let total = productPrice * quantity;

    // Atlaides nosacījums
    if (quantity >= 5) {
        total *= 0.9;
    }

    result.innerHTML = `Kopējā cena: ${total} €`;
    result.style.color = "green";
}

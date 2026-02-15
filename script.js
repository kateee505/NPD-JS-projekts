document.getElementById("rentBtn").addEventListener("click", calculateRent);

function calculateRent() {
    const bikePrice = document.getElementById("bikeType").value;
    const days = document.getElementById("days").value;
    const result = document.getElementById("result");

    // Datu validācija
    if (days === "" || days <= 0) {
        result.innerHTML = "Lūdzu ievadi derīgu dienu skaitu!";
        result.style.color = "red";
        return;
    }

    let total = bikePrice * days;

    // Atlaide ilgtermiņa nomai
    if (days >= 7) {
        total *= 0.85; // 15% atlaide
    }

    result.innerHTML = `Kopējā nomas cena: ${total} €`;
    result.style.color = "green";
}

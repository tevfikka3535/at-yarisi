function tahminEt() {
  const input = document.getElementById("horseInput").value;
  const atlar = input.split(",").map(at => at.trim()).filter(at => at !== "");
  if (atlar.length === 0) {
    document.getElementById("sonuc").innerText = "Lütfen en az bir at girin.";
    return;
  }
  const secilen = atlar[Math.floor(Math.random() * atlar.length)];
  document.getElementById("sonuc").innerText = "Tahmin edilen kazanan: " + secilen;
}

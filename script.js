function tahminEt() {
  const input = document.getElementById("horseInput").value;
  const atIsimleri = input.split(",").map(at => at.trim()).filter(at => at !== "");

  const sonucListesi = document.getElementById("sonucListesi");
  sonucListesi.innerHTML = "";

  if (atIsimleri.length < 2) {
    sonucListesi.innerHTML = "<li>Lütfen en az 2 at ismi girin.</li>";
    return;
  }

  const karisikAtlar = atIsimleri.sort(() => Math.random() - 0.5);

  karisikAtlar.forEach((at, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${at}`;
    sonucListesi.appendChild(li);
  });
}

function temizle() {
  document.getElementById("horseInput").value = "";
  document.getElementById("sonucListesi").innerHTML = "";
}

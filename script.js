window.onload = function () {
    const savedGuesses = JSON.parse(localStorage.getItem("gecmisTahminler")) || [];
    savedGuesses.forEach((tahminHTML) => {
        tahminleriEkle(tahminHTML);
    });
};function tahminEt() {
  const input = document.getElementById("horseInput").value;
  const atIsimleri = input.split(",").map(at => at.trim()).filter(at => at !== "");

  if (atIsimleri.length < 2) {
    alert("Lütfen en az iki at ismi girin.");
    return;
  }

  // Atları karıştır
  const karistirilmisAtlar = atIsimleri.sort(() => Math.random() - 0.5);

  // Tahmin sonucunu göster
  const sonucListesi = document.getElementById("sonuclar");
  sonucListesi.innerHTML = ""; // önceki tahmini temizle

  const liste = document.createElement("ul");
  karistirilmisAtlar.forEach((isim, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${isim}`;
    liste.appendChild(li);
  });
  sonucListesi.appendChild(liste);

  // Son tahminleri aşağıya kaydet
  const sonTahminler = document.getElementById("sonTahminler");
  const tahminMetni = karistirilmisAtlar.map((isim, index) => `${index + 1}. ${isim}`).join(" | ");
  const yeniKayit = document.createElement("li");
  yeniKayit.textContent = tahminMetni;
  sonTahminler.appendChild(yeniKayit);
}

function temizle() {
  document.getElementById("horseInput").value = "";
  document.getElementById("sonuclar").innerHTML = "";
  // geçmiş tahminler silinmez
}
function tahminleriEkle(tahminHTML) {
    const tahminKutusu = document.createElement("div");
    tahminKutusu.classList.add("result");
    tahminKutusu.innerHTML = tahminHTML;
    document.getElementById("sonTahminler").appendChild(tahminKutusu);
}

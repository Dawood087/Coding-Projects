// Warten bis das ganze HTML Dokument geladen ist
document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.closest(".faq-item"); // Hier wird der übergeordnete Container des geklickten Frage-Elements gefunden

      if (faqItem.classList.contains("active")) {
        // Beim Klicken: überprüfen ob das geklickte FAQ-Item bereits die Klasse active hat
        faqItem.classList.remove("active"); // Wenn ja entfernen wir sie um die Antwort zu schließen
      } else {
        // Wenn nein, müssen wir zuerst alle anderen geöffneten Antworten schließen
        // Das sorgt dafür, dass immer nur eine Antwort gleichzeitig geöffnet sein kann
        // Wir iterieren erneut durch alle FAQ-Items
        document.querySelectorAll(".faq-item").forEach((item) => {
          // Wenn ein anderes Item die Klasse 'active' hat, entfernen wir sie
          if (item !== faqItem && item.classList.contains("active")) {
            item.classList.remove("active");
          }
        });

        faqItem.classList.add("active"); // Anschließend wird die active-Klasse dem FAQ-Item hinzugefügt und es öffnet sich durch den in CSS verfassten Code die Antwort
      }
    });
  });
});

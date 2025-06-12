const quotes = [
  "Başlamak için mükemmel olmak zorunda değilsin, ama mükemmel olmak için başlamak zorundasın.",
  "Zorluklar seni durdurmasın. Onlar sadece yolun bir parçası.",
  "Her yeni gün, yeni bir başlangıçtır.",
  "Kendine inan. Yapabilirsin.",
  "Hayallerine ulaşmanın ilk adımı, uyanmaktır.",
];

function showQuote() {
  const quoteElement = document.getElementById("quete");
  const randomIndex = Math.floor(Math.random() * quotes.length);

  quoteElement.textContent = quotes[randomIndex];
}

window.onload = showQuote;

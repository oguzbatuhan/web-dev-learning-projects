function generatePalette() {
  let inputColor = document.getElementById("colorInput").value;

  if (
    !inputColor.startsWith("#") ||
    (inputColor.length !== 7 && inputColor.length !== 4)
  ) {
    document.getElementById("colorInput").value = "";
    alert("Please enter a valid HEX color (#3498db)");
    return;
  }

  let paletteContainer = document.getElementById("palette");
  paletteContainer.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    let colorBox = document.createElement("div");
    colorBox.className = "color-box";

    let modifiedColor = lightenColor(inputColor, i * 10);
    colorBox.style.backgroundColor = modifiedColor;

    colorBox.onclick = () => copyToClipboard(modifiedColor);
    paletteContainer.appendChild(colorBox);
  }
}

function lightenColor(hex, amount) {
  let num = parseInt(hex.slice(1), 16);
  let r = Math.min(255, (num >> 16) + amount);
  let g = Math.min(255, ((num >> 8) & 255) + amount);
  let b = Math.min(255, (num & 255) + amount);

  document.getElementById("colorInput").value = "";
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

function copyToClipboard(color) {
  navigator.clipboard.writeText(color);
  alert(`Copied: ${color}`);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    generatePalette();
  }
});

// Getting DOM elements – DOM elemanlarını alma
const fullNameEl = document.getElementById("fullName");
const phoneEl = document.getElementById("phone");
const emailEl = document.getElementById("email");
const companyEl = document.getElementById("company");
const addressEl = document.getElementById("address");
const emailContent = document.getElementById("emailContent");
const infoPush = document.getElementById("info-push");
const removeSignature = document.getElementById("remove-signature");

window.onload = function () {
  // Sayfa yüklendiğinde imzayı e-postaya ekle
  loadSignature();

  // localStorage'da veri varsa buton metnini ve durumunu ayarla
  const signature = localStorage.getItem("emailSignature");
  if (signature) {
    infoPush.textContent = "Info Update"; // Buton yazısını değiştir
  } else {
    infoPush.textContent = "Info Push";
  }
};

// Add user signature to email content and save to localStorage
// Kullanıcı imzasını e-postaya ekler ve localStorage'a kaydeder
function addSignature() {
  const fullName = fullNameEl.value.trim();
  const phone = phoneEl.value.trim();
  const email = emailEl.value.trim();
  const company = companyEl.value.trim();
  const address = addressEl.value.trim();

  // Check all fields are filled correctly – Tüm alanların doğru doldurulduğundan emin olunur
  if (
    fullName.length > 0 &&
    email.length > 0 &&
    isValidPhone(phone) &&
    company.length > 0 &&
    address.length > 0
  ) {
    const signature = `
        --
        ${fullName}
        📧 ${email}
        📞 ${phone}
        🏢 ${company}
        📍 ${address}
          `;

    // Save signature to localStorage – İmzayı localStorage'a kaydet
    localStorage.setItem("emailSignature", signature);

    // If signature not already in email, add it – İmza e-postaya daha önce eklenmediyse ekle
    if (!emailContent.value.includes(signature.trim())) {
      emailContent.value += "\n" + signature;
    }
  } else {
    alert("Lütfen tüm alanları doğru doldurun (telefon 11 haneli olmalı).");
  }
}

// Load signature from localStorage to email content
// localStorage'dan imzayı al ve e-postaya yükle
function loadSignature() {
  const signature = localStorage.getItem("emailSignature");
  if (signature && !emailContent.value.includes(signature.trim())) {
    emailContent.value += "\n" + signature;
  }
}

// Prepare a fresh email with just the signature
// Yeni bir e-posta için sadece imza ile temiz alan oluştur
function newEmail() {
  const signature = localStorage.getItem("emailSignature") || "";
  emailContent.value = signature ? "\n" + signature : "";
}

// Click event for the "Info Push" button
// "Info Push" butonuna tıklama olayı
infoPush.addEventListener("click", () => {
  addSignature(); // İmzayı ekle ya da güncelle

  // Giriş alanlarını temizle
  fullNameEl.value = "";
  phoneEl.value = "";
  emailEl.value = "";
  companyEl.value = "";
  addressEl.value = "";

  // Güncel imza varsa yeni e-posta olarak alanı temizle
  if (localStorage.getItem("emailSignature")) {
    newEmail();
  }
});

// Validate phone number format – Telefon numarasının geçerliliğini kontrol eder
function isValidPhone(phone) {
  const digitsOnly = phone.replace(/\D/g, ""); // Remove non-digits – Sayı olmayan karakterleri çıkar
  return digitsOnly.length === 11 || digitsOnly.length === 14;
}

// removed signature - imza silindi
removeSignature.addEventListener("click", () => {
  if (emailContent.value.length > 0) {
    localStorage.removeItem("emailSignature");
    emailContent.value = "";
    infoPush.textContent = "Info Push";

    alert("Signature removed. / İmza silindi.");
  } else {
    alert("Signature no. / İmza yok.");
  }
});

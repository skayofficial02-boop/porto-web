const openSettings = document.getElementById("openSettings");
const closeSettings = document.getElementById("closeSettings");
const settingsModal = document.getElementById("settingsModal");
const saveBtn = document.getElementById("saveBtn");

const avatarInput = document.getElementById("avatarInput");
const profileImage = document.getElementById("profileImage");
const nameInput = document.getElementById("nameInput");
const descInput = document.getElementById("descInput");
const socialInput = document.getElementById("socialInput");

const profileName = document.getElementById("profileName");
const profileDesc = document.getElementById("profileDesc");
const profileLink = document.getElementById("profileLink");

// Buka / Tutup Modal
openSettings.onclick = () => settingsModal.style.display = "flex";
closeSettings.onclick = () => settingsModal.style.display = "none";

// Load data dari localStorage
window.addEventListener("load", () => {
  const saved = JSON.parse(localStorage.getItem("futuristicPortfolio"));
  if (saved) {
    if (saved.avatar) profileImage.src = saved.avatar;
    profileName.textContent = saved.name || "Nama Anda";
    profileDesc.textContent = saved.desc || "Desainer Futuristik & Visioner";
    profileLink.href = saved.social || "#";

    nameInput.value = saved.name || "";
    descInput.value = saved.desc || "";
    socialInput.value = saved.social || "";
  }
});

// Preview Avatar
avatarInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    profileImage.src = ev.target.result;
  };
  reader.readAsDataURL(file);
});

// Simpan perubahan
saveBtn.addEventListener("click", () => {
  const data = {
    avatar: profileImage.src,
    name: nameInput.value,
    desc: descInput.value,
    social: socialInput.value
  };
  localStorage.setItem("futuristicPortfolio", JSON.stringify(data));
  profileName.textContent = data.name || "Nama Anda";
  profileDesc.textContent = data.desc || "Desainer Futuristik & Visioner";
  profileLink.href = data.social || "#";

  alert("✅ Profil berhasil diperbarui!");
  settingsModal.style.display = "none";
});

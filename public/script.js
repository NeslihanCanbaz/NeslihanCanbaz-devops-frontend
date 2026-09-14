const resultEl = document.getElementById("result");
const versionEl = document.getElementById("version");
const btn = document.getElementById("fetchBtn");

versionEl.textContent = `Frontend versiyon: ${window.APP_CONFIG.APP_VERSION}`;

async function fetchBackendInfo() {
  resultEl.textContent = "Yukleniyor...";
  try {
    const res = await fetch(`${window.APP_CONFIG.BACKEND_URL}/api/info`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    resultEl.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    resultEl.textContent = `Hata: ${err.message}\n\nBackend URL dogru mu kontrol et (config.js).`;
  }
}

btn.addEventListener("click", fetchBackendInfo);

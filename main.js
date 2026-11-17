/**
 * EduQuest - Main JavaScript (Fungsi Global & Utilitas)
 * Menangani: Navigasi responsive, penanda halaman aktif, safe LocalStorage,
 * switch tema visual 3-mode (🌙 Nightlight, 🏎️ Scuderia Ferrari, ☀️ Sunset Light),
 * efek audio Web Audio API, dan helper notifikasi toast.
 */

// Kunci penyimpanan LocalStorage
const STORAGE_KEYS = {
  LEADERBOARD: "eduquest_leaderboard",
  COMPLETED_MATERI: "eduquest_completed_materi",
  THEME: "eduquest_theme",
  RECENT_ID: "eduquest_recent_player_id"
};

// ==========================================
// 1. HELPER SAFE LOCALSTORAGE
// Menangani kasus tepi jika storage rusak atau diblokir peramban
// ==========================================
const StorageHelper = {
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      if (item === null || item === undefined) return defaultValue;
      return JSON.parse(item);
    } catch (error) {
      console.warn(`Gagal membaca LocalStorage key "${key}":`, error);
      return defaultValue;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.warn(`Gagal menyimpan ke LocalStorage key "${key}":`, error);
      return false;
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn(`Gagal menghapus LocalStorage key "${key}":`, error);
      return false;
    }
  }
};

// ==========================================
// 2. HELPER WEB AUDIO API (Efek Suara Murni Tanpa Berkas Luar)
// ==========================================
const SoundFx = {
  playF1Rev() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      // Buat nada akselerasi mesin F1 (frekuensi naik cepat)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(160, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(750, ctx.currentTime + 0.35);

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.38);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch (e) {
      // Audio tidak didukung atau dibisukan
    }
  },

  playChime() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
      osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2); // G5

      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.45);
    } catch (e) {
      // Audio tidak didukung
    }
  }
};

// ==========================================
// 3. HELPER TOAST NOTIFIKASI
// ==========================================
function showToast(message, type = "info") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  const icon = type === "success" ? "✅" : type === "error" ? "⚠️" : type === "ferrari" ? "🏎️" : "💡";
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3200);
}

// ==========================================
// 4. TEMA 3-MODE: NIGHTLIGHT, FERRARI, & SUNSET LIGHT
// ==========================================
function initTheme() {
  const savedTheme = StorageHelper.get(STORAGE_KEYS.THEME, "nightlight");
  const htmlEl = document.documentElement;
  const themeBtn = document.getElementById("themeToggleBtn");

  function applyTheme(theme) {
    if (theme === "ferrari") {
      htmlEl.setAttribute("data-theme", "ferrari");
      if (themeBtn) {
        themeBtn.innerHTML = "🏎️";
        themeBtn.title = "Mode Scuderia Ferrari (Klik untuk beralih ke Mode Siang)";
      }
    } else if (theme === "light") {
      htmlEl.setAttribute("data-theme", "light");
      if (themeBtn) {
        themeBtn.innerHTML = "☀️";
        themeBtn.title = "Mode Siang Hangat (Klik untuk beralih ke Mode Nightlight)";
      }
    } else {
      // Default: Nightlight
      htmlEl.removeAttribute("data-theme");
      if (themeBtn) {
        themeBtn.innerHTML = "🌙";
        themeBtn.title = "Mode Nightlight (Klik untuk beralih ke Mode Scuderia Ferrari)";
      }
    }
  }

  applyTheme(savedTheme);

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = htmlEl.getAttribute("data-theme") || "nightlight";
      let next = "nightlight";

      // Siklus 3 tema: nightlight -> ferrari -> light -> nightlight
      if (current === "nightlight") {
        next = "ferrari";
        SoundFx.playF1Rev();
        showToast("Mode Balap Scuderia Ferrari diaktifkan! 🏎️💨", "ferrari");
      } else if (current === "ferrari") {
        next = "light";
        showToast("Mode Siang Hangat diaktifkan ☀️", "info");
      } else {
        next = "nightlight";
        showToast("Mode Nightlight Ajaib diaktifkan 🌙", "info");
      }

      applyTheme(next);
      StorageHelper.set(STORAGE_KEYS.THEME, next);
    });
  }
}

// ==========================================
// 5. NAVBAR RESPONSIVE & PENANDA HALAMAN AKTIF
// ==========================================
function initNavbar() {
  const hamburger = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      hamburger.classList.toggle("is-active");
      navMenu.classList.toggle("is-active");
    });

    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove("is-active");
        navMenu.classList.remove("is-active");
      }
    });
  }

  const currentPath = window.location.pathname.toLowerCase();
  navLinks.forEach((link) => {
    const href = link.getAttribute("href").toLowerCase();
    const isRoot = (currentPath === "" || currentPath === "/" || currentPath.endsWith("/index.html"));
    if ((isRoot && href === "index.html") || (currentPath.includes(href) && href !== "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Inisialisasi saat DOM siap
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavbar();
});

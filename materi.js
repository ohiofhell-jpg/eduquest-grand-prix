/**
 * EduQuest - Materi JavaScript (Logika Halaman Materi)
 * Menangani: Rendering kartu materi, accordion buka/tutup, pencarian kata kunci,
 * filter kategori, penandaan status selesai (localStorage), dan progress bar.
 */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof MATERI_DATA === "undefined" || !Array.isArray(MATERI_DATA)) {
    console.error("MATERI_DATA tidak ditemukan di data.js");
    return;
  }

  const materiContainer = document.getElementById("materiContainer");
  const searchInput = document.getElementById("materiSearchInput");
  const categoryTabs = document.querySelectorAll(".category-tab");
  const progressText = document.getElementById("progressText");
  const progressPercent = document.getElementById("progressPercent");
  const progressBarFill = document.getElementById("progressBarFill");

  let currentCategory = "Semua";
  let searchKeyword = "";
  const rawCompleted = StorageHelper.get(STORAGE_KEYS.COMPLETED_MATERI, []);
  let completedMateriIds = new Set(Array.isArray(rawCompleted) ? rawCompleted : []);

  // 1. Update Progress Bar
  function updateProgress() {
    const total = MATERI_DATA.length;
    const completed = completedMateriIds.size;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    if (progressText) {
      progressText.textContent = `${completed} dari ${total} bab selesai dipelajari`;
    }
    if (progressPercent) {
      progressPercent.textContent = `${percentage}%`;
    }
    if (progressBarFill) {
      progressBarFill.style.width = `${percentage}%`;
    }
  }

  // 2. Toggle Status Selesai
  function toggleCompleted(materiId, btnElement) {
    if (completedMateriIds.has(materiId)) {
      completedMateriIds.delete(materiId);
      showToast("Status bab diubah: Belum Selesai", "info");
    } else {
      completedMateriIds.add(materiId);
      if (typeof SoundFx !== "undefined") SoundFx.playChime();
      showToast("Luar biasa! Satu bab modul berhasil kamu kuasai 🏆", "success");
    }

    StorageHelper.set(STORAGE_KEYS.COMPLETED_MATERI, Array.from(completedMateriIds));
    updateProgress();
    renderMateri();
  }

  // 3. Render Kartu Materi
  function renderMateri() {
    if (!materiContainer) return;

    const filtered = MATERI_DATA.filter((item) => {
      const matchCategory = currentCategory === "Semua" || item.kategori === currentCategory;
      const q = searchKeyword.toLowerCase().trim();
      const matchSearch =
        q === "" ||
        item.judul.toLowerCase().includes(q) ||
        item.kategori.toLowerCase().includes(q) ||
        item.deskripsi.toLowerCase().includes(q) ||
        item.tipsMengingat.toLowerCase().includes(q);

      return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
      materiContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🔍</div>
          <h3>Tidak Ada Materi Ditemukan</h3>
          <p>Coba gunakan kata kunci pencarian lain atau pilih kategori pelajaran yang berbeda.</p>
        </div>
      `;
      return;
    }

    materiContainer.innerHTML = "";

    filtered.forEach((item) => {
      const isCompleted = completedMateriIds.has(item.id);

      const card = document.createElement("div");
      card.className = `materi-card ${isCompleted ? "completed" : ""}`;
      card.id = `materi-${item.id}`;

      const tujuanHtml = item.tujuanBelajar
        .map((t) => `<li>${escapeHtml(t)}</li>`)
        .join("");

      const poinHtml = item.rangkumanPoin
        .map(
          (p) => `
          <div class="poin-card">
            <h5>${escapeHtml(p.subjudul)}</h5>
            <p>${escapeHtml(p.teks)}</p>
          </div>
        `
        )
        .join("");

      card.innerHTML = `
        <div class="materi-card-header" role="button" tabindex="0" aria-expanded="false">
          <div class="materi-header-left">
            <div class="materi-card-icon">${item.icon}</div>
            <div class="materi-header-text">
              <h3>${escapeHtml(item.judul)}</h3>
              <div class="materi-meta">
                <span class="badge badge-ferrari">${escapeHtml(item.kategori)}</span>
                <span class="badge badge-cyan">${escapeHtml(item.jenjang)}</span>
                <span class="badge badge-indigo">⏱️ ${escapeHtml(item.estimasiWaktu)}</span>
              </div>
            </div>
          </div>
          <div class="materi-header-right">
            ${
              isCompleted
                ? `<span class="status-badge-completed">✅ Selesai</span>`
                : ""
            }
            <span class="chevron-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          </div>
        </div>

        <div class="materi-card-body">
          <p style="color: var(--text-secondary); margin-bottom: 1.4rem;">${escapeHtml(item.deskripsi)}</p>
          
          <div class="materi-section-block">
            <h4>🎯 Tujuan Belajar</h4>
            <ul class="tujuan-list">
              ${tujuanHtml}
            </ul>
          </div>

          <div class="materi-section-block">
            <h4>📚 Rangkuman Konsep Inti</h4>
            <div class="poin-cards">
              ${poinHtml}
            </div>
          </div>

          <div class="materi-section-block">
            <h4>💡 Contoh Rumus &amp; Penerapan Nyata F1</h4>
            <div class="ilustrasi-box">
              <div class="ilustrasi-label">${escapeHtml(item.ilustrasi.label)}</div>
              <pre class="ilustrasi-content"><code>${escapeHtml(item.ilustrasi.konten)}</code></pre>
            </div>
          </div>

          <div class="tips-mengingat-box">
            <div class="tips-icon">🧠</div>
            <div>
              <h5>Tips Mengingat Cepat</h5>
              <p>${escapeHtml(item.tipsMengingat)}</p>
            </div>
          </div>

          <div class="materi-card-actions">
            <button class="btn ${isCompleted ? "btn-secondary" : "btn-primary"} btn-sm btn-toggle-complete" data-id="${item.id}">
              ${isCompleted ? "↩️ Batal Tandai Selesai" : "✅ Tandai Selesai"}
            </button>
            <a href="kuis.html?kategori=${encodeURIComponent(item.kategori)}" class="btn btn-outline btn-sm">
              🏎️ Latihan Soal Bab Ini &rarr;
            </a>
          </div>
        </div>
      `;

      const header = card.querySelector(".materi-card-header");
      const toggleAccordion = () => {
        const isOpen = card.classList.contains("is-open");
        card.classList.toggle("is-open");
        header.setAttribute("aria-expanded", !isOpen);
      };

      header.addEventListener("click", toggleAccordion);
      header.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleAccordion();
        }
      });

      const completeBtn = card.querySelector(".btn-toggle-complete");
      if (completeBtn) {
        completeBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          toggleCompleted(item.id, completeBtn);
        });
      }

      materiContainer.appendChild(card);
    });
  }

  // 4. Pencarian
  let searchTimeout = null;
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        searchKeyword = e.target.value;
        renderMateri();
      }, 200);
    });
  }

  // 5. Filter Tab
  categoryTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      categoryTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategory = tab.getAttribute("data-category") || "Semua";
      renderMateri();
    });
  });

  function escapeHtml(str) {
    if (typeof str !== "string") return str;
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  updateProgress();
  renderMateri();
});

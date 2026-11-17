/**
 * EduQuest - Peringkat JavaScript (Scuderia Grand Prix Leaderboard)
 * Menangani: Menampilkan 10 besar poin tertinggi (Drivers' Standings),
 * filter per kategori, medali podium balap P1-P3, sorot pembalap terakhir,
 * ringkasan statistik, dan modal konfirmasi reset data.
 */

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("leaderboardTableBody");
  const emptyStateEl = document.getElementById("emptyLeaderboardState");
  const tableContainer = document.getElementById("leaderboardTableContainer");
  const categoryFilterSelect = document.getElementById("categoryFilterSelect");
  const clearDataBtn = document.getElementById("clearDataBtn");

  const totalGamesEl = document.getElementById("statTotalGames");
  const highestScoreEl = document.getElementById("statHighestScore");
  const averageScoreEl = document.getElementById("statAverageScore");

  const confirmModal = document.getElementById("confirmClearModal");
  const modalCancelBtn = document.getElementById("modalCancelBtn");
  const modalConfirmBtn = document.getElementById("modalConfirmBtn");

  let currentCategoryFilter = "Semua";

  function loadAndRenderLeaderboard() {
    const rawData = StorageHelper.get(STORAGE_KEYS.LEADERBOARD, []);
    const leaderboardData = Array.isArray(rawData) ? rawData : [];
    const recentPlayerId = StorageHelper.get(STORAGE_KEYS.RECENT_ID, null);

    updateSummaryStats(leaderboardData);

    let filteredData = leaderboardData.filter((item) => {
      if (currentCategoryFilter === "Semua") return true;
      return item.kategori === currentCategoryFilter;
    });

    filteredData.sort((a, b) => {
      if (b.skor !== a.skor) return b.skor - a.skor;
      if (b.akurasi !== a.akurasi) return b.akurasi - a.akurasi;
      return (b.timestamp || 0) - (a.timestamp || 0);
    });

    const top10 = filteredData.slice(0, 10);

    if (top10.length === 0) {
      if (tableContainer) tableContainer.style.display = "none";
      if (emptyStateEl) emptyStateEl.style.display = "block";
      return;
    }

    if (tableContainer) tableContainer.style.display = "block";
    if (emptyStateEl) emptyStateEl.style.display = "none";

    tableBody.innerHTML = "";

    top10.forEach((item, index) => {
      const rank = index + 1;
      const isRecent = recentPlayerId && item.id === recentPlayerId;

      let rankHtml = "";
      if (rank === 1) {
        rankHtml = `<span class="rank-badge rank-1" title="P1 - Juara 1 (Pole Position)">🥇 P1</span>`;
      } else if (rank === 2) {
        rankHtml = `<span class="rank-badge rank-2" title="P2 - Podium 2">🥈 P2</span>`;
      } else if (rank === 3) {
        rankHtml = `<span class="rank-badge rank-3" title="P3 - Podium 3">🥉 P3</span>`;
      } else {
        rankHtml = `<span class="rank-badge rank-other">P${rank}</span>`;
      }

      const tr = document.createElement("tr");
      if (isRecent) {
        tr.classList.add("recent-player");
      }

      tr.innerHTML = `
        <td style="text-align: center; width: 70px;">${rankHtml}</td>
        <td>
          <div class="player-name">
            <span>${escapeHtml(item.nama)}</span>
            ${isRecent ? `<span class="recent-tag">Pembalap Terakhir</span>` : ""}
          </div>
        </td>
        <td class="score-cell">${item.skor} Pts</td>
        <td>${item.akurasi !== undefined ? item.akurasi + "%" : "-"}</td>
        <td><span class="badge badge-ferrari">${escapeHtml(item.kategori || "Umum")}</span></td>
        <td>${escapeHtml(item.tanggal || "-")}</td>
      `;

      tableBody.appendChild(tr);
    });
  }

  function updateSummaryStats(data) {
    const total = data.length;
    if (total === 0) {
      if (totalGamesEl) totalGamesEl.textContent = "0";
      if (highestScoreEl) highestScoreEl.textContent = "0";
      if (averageScoreEl) averageScoreEl.textContent = "0";
      return;
    }

    let maxScore = 0;
    let sumScore = 0;

    data.forEach((item) => {
      const s = Number(item.skor) || 0;
      if (s > maxScore) maxScore = s;
      sumScore += s;
    });

    const avgScore = Math.round(sumScore / total);

    if (totalGamesEl) totalGamesEl.textContent = total.toLocaleString("id-ID");
    if (highestScoreEl) highestScoreEl.textContent = maxScore.toLocaleString("id-ID");
    if (averageScoreEl) averageScoreEl.textContent = avgScore.toLocaleString("id-ID");
  }

  if (categoryFilterSelect) {
    categoryFilterSelect.addEventListener("change", (e) => {
      currentCategoryFilter = e.target.value;
      loadAndRenderLeaderboard();
    });
  }

  if (clearDataBtn) {
    clearDataBtn.addEventListener("click", () => {
      const rawList = StorageHelper.get(STORAGE_KEYS.LEADERBOARD, []);
      const currentList = Array.isArray(rawList) ? rawList : [];
      if (currentList.length === 0) {
        showToast("Belum ada riwayat poin balap yang tersimpan.", "info");
        return;
      }
      openModal();
    });
  }

  function openModal() {
    if (confirmModal) confirmModal.classList.add("is-active");
  }

  function closeModal() {
    if (confirmModal) confirmModal.classList.remove("is-active");
  }

  if (modalCancelBtn) modalCancelBtn.addEventListener("click", closeModal);

  if (modalConfirmBtn) {
    modalConfirmBtn.addEventListener("click", () => {
      StorageHelper.remove(STORAGE_KEYS.LEADERBOARD);
      StorageHelper.remove(STORAGE_KEYS.RECENT_ID);
      closeModal();
      loadAndRenderLeaderboard();
      showToast("Seluruh riwayat poin Grand Prix telah di-reset.", "ferrari");
    });
  }

  if (confirmModal) {
    confirmModal.addEventListener("click", (e) => {
      if (e.target === confirmModal) closeModal();
    });
  }

  function escapeHtml(str) {
    if (typeof str !== "string") return str;
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  loadAndRenderLeaderboard();
});

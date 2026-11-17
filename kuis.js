/**
 * EduQuest - Kuis JavaScript (Scuderia Ferrari & Speed Edition)
 * Menangani: Setup kuis, pengacakan 10 soal & opsi,
 * F1 Tachometer countdown timer 20 detik, sistem skor + bonus kecepatan (DRS),
 * umpan balik instan + pembahasan, dan penyimpanan hasil ke LocalStorage.
 */

document.addEventListener("DOMContentLoaded", () => {
  if (typeof BANK_SOAL === "undefined" || !Array.isArray(BANK_SOAL)) {
    console.error("BANK_SOAL tidak ditemukan di data.js");
    return;
  }

  // --- Elemen Layar 1: Setup Kuis ---
  const screenSetup = document.getElementById("quizScreenSetup");
  const formSetup = document.getElementById("quizSetupForm");
  const playerNameInput = document.getElementById("playerNameInput");
  const playerCategorySelect = document.getElementById("playerCategorySelect");
  const playerDifficultySelect = document.getElementById("playerDifficultySelect");
  const nameErrorMsg = document.getElementById("nameErrorMsg");

  // --- Elemen Layar 2: Arena Kuis ---
  const screenArena = document.getElementById("quizScreenArena");
  const questionNumberEl = document.getElementById("questionNumber");
  const questionProgressFill = document.getElementById("questionProgressFill");
  const timerTextEl = document.getElementById("timerText");
  const currentScoreBadge = document.getElementById("currentScoreBadge");
  const questionCategoryBadge = document.getElementById("questionCategoryBadge");
  const questionDifficultyBadge = document.getElementById("questionDifficultyBadge");
  const questionTextEl = document.getElementById("questionText");
  const optionsGridEl = document.getElementById("optionsGrid");
  const feedbackBoxEl = document.getElementById("feedbackBox");
  const feedbackStatusEl = document.getElementById("feedbackStatus");
  const feedbackPenjelasanEl = document.getElementById("feedbackPenjelasan");
  const nextQuestionBtn = document.getElementById("nextQuestionBtn");
  const revLedsContainer = document.getElementById("revLedsContainer");

  // --- Elemen Layar 3: Hasil Kuis ---
  const screenResult = document.getElementById("quizScreenResult");
  const resultPlayerName = document.getElementById("resultPlayerName");
  const resultBadgeIcon = document.getElementById("resultBadgeIcon");
  const resultFinalScore = document.getElementById("resultFinalScore");
  const resultCorrectCount = document.getElementById("resultCorrectCount");
  const resultWrongCount = document.getElementById("resultWrongCount");
  const resultAccuracy = document.getElementById("resultAccuracy");
  const resultMotivation = document.getElementById("resultMotivation");
  const playAgainBtn = document.getElementById("playAgainBtn");

  // --- State Kuis ---
  const TOTAL_SOAL_PER_SESI = 10;
  const WAKTU_PER_SOAL = 20;

  let quizState = {
    playerName: "",
    category: "Semua",
    difficulty: "Semua",
    questions: [],
    currentIndex: 0,
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    timerInterval: null,
    timeLeft: WAKTU_PER_SOAL,
    isAnswerLocked: false
  };

  // 1. Cek Parameter URL Kategori
  const urlParams = new URLSearchParams(window.location.search);
  const paramKategori = urlParams.get("kategori");
  if (paramKategori && playerCategorySelect) {
    for (let opt of playerCategorySelect.options) {
      if (opt.value.toLowerCase() === paramKategori.toLowerCase()) {
        playerCategorySelect.value = opt.value;
        break;
      }
    }
  }

  // 2. Setup & Mulai Kuis
  if (formSetup) {
    formSetup.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = playerNameInput.value.trim();
      if (!name || name.length < 2) {
        if (nameErrorMsg) {
          nameErrorMsg.style.display = "block";
          nameErrorMsg.textContent = "Silakan masukkan nama minimal 2 karakter.";
        }
        playerNameInput.focus();
        return;
      }

      if (nameErrorMsg) nameErrorMsg.style.display = "none";

      quizState.playerName = name;
      quizState.category = playerCategorySelect.value;
      quizState.difficulty = playerDifficultySelect.value;

      startQuiz();
    });
  }

  function startQuiz() {
    let pool = BANK_SOAL.filter((q) => {
      const matchCat = quizState.category === "Semua" || q.kategori === quizState.category;
      const matchDiff = quizState.difficulty === "Semua" || q.tingkat === quizState.difficulty;
      return matchCat && matchDiff;
    });

    if (pool.length < 5 && quizState.difficulty !== "Semua") {
      pool = BANK_SOAL.filter((q) => quizState.category === "Semua" || q.kategori === quizState.category);
    }

    if (pool.length === 0) {
      pool = [...BANK_SOAL];
    }

    const shuffledPool = shuffleArray([...pool]);
    const selectedQuestions = shuffledPool.slice(0, Math.min(TOTAL_SOAL_PER_SESI, shuffledPool.length));

    quizState.questions = selectedQuestions.map((q) => prepareShuffledQuestion(q));
    quizState.currentIndex = 0;
    quizState.score = 0;
    quizState.correctAnswers = 0;
    quizState.wrongAnswers = 0;

    screenSetup.style.display = "none";
    screenResult.style.display = "none";
    screenArena.style.display = "block";

    // Mainkan efek suara rev F1 saat lampu start padam
    if (typeof SoundFx !== "undefined") SoundFx.playF1Rev();

    loadQuestion(quizState.currentIndex);
  }

  function prepareShuffledQuestion(rawQ) {
    const optionsWithMeta = rawQ.opsi.map((optText, idx) => ({
      text: optText,
      isCorrect: idx === rawQ.jawabanBenar
    }));

    const shuffledOptions = shuffleArray(optionsWithMeta);
    const newCorrectIndex = shuffledOptions.findIndex((item) => item.isCorrect);

    return {
      id: rawQ.id,
      kategori: rawQ.kategori,
      tingkat: rawQ.tingkat,
      pertanyaan: rawQ.pertanyaan,
      opsi: shuffledOptions.map((o) => o.text),
      jawabanBenar: newCorrectIndex,
      penjelasan: rawQ.penjelasan
    };
  }

  // 3. Muat Soal Aktif
  function loadQuestion(index) {
    const currentQ = quizState.questions[index];
    const totalQ = quizState.questions.length;

    quizState.isAnswerLocked = false;
    quizState.timeLeft = WAKTU_PER_SOAL;

    feedbackBoxEl.style.display = "none";
    nextQuestionBtn.style.display = "none";
    nextQuestionBtn.textContent = index === totalQ - 1 ? "🏁 Kibarkan Finish & Lihat Hasil" : "Lap Berikutnya 🏎️ ➡️";

    questionNumberEl.textContent = `Lap ${index + 1} dari ${totalQ}`;
    const progressPercent = ((index + 1) / totalQ) * 100;
    questionProgressFill.style.width = `${progressPercent}%`;

    currentScoreBadge.textContent = `Pts: ${quizState.score}`;
    questionCategoryBadge.textContent = currentQ.kategori;
    questionDifficultyBadge.textContent = currentQ.tingkat;

    questionTextEl.textContent = currentQ.pertanyaan;

    optionsGridEl.innerHTML = "";
    const letters = ["A", "B", "C", "D"];

    currentQ.opsi.forEach((optText, optIndex) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.innerHTML = `
        <span class="option-key">${letters[optIndex]}</span>
        <span class="option-text">${escapeHtml(optText)}</span>
      `;

      btn.addEventListener("click", () => {
        handleOptionSelect(optIndex, btn);
      });

      optionsGridEl.appendChild(btn);
    });

    startTimer();
  }

  // 4. Timer Tachometer F1
  function startTimer() {
    clearInterval(quizState.timerInterval);
    updateTachometerDisplay();

    quizState.timerInterval = setInterval(() => {
      quizState.timeLeft--;
      updateTachometerDisplay();

      if (quizState.timeLeft <= 0) {
        clearInterval(quizState.timerInterval);
        handleTimeOut();
      }
    }, 1000);
  }

  function updateTachometerDisplay() {
    timerTextEl.textContent = `${quizState.timeLeft}s`;

    // Update LED Tachometer F1 (5 LED)
    if (revLedsContainer) {
      const leds = revLedsContainer.querySelectorAll(".rev-led");
      const time = quizState.timeLeft;

      leds.forEach((led, idx) => {
        led.className = "rev-led";
        if (time > 10) {
          // Zona Hijau (Kecepatan aman)
          led.classList.add("active-green");
        } else if (time > 5) {
          // Zona Kuning (Waspada)
          if (idx < 3) led.classList.add("active-yellow");
          else led.classList.add("active-green");
        } else {
          // Zona Merah Berdenyut (Redline Shift)
          led.classList.add("active-red");
        }
      });
    }

    if (quizState.timeLeft <= 5) {
      timerTextEl.classList.add("timer-critical");
    } else {
      timerTextEl.classList.remove("timer-critical");
    }
  }

  // 5. Penanganan Klik Jawaban
  function handleOptionSelect(selectedIndex, selectedBtn) {
    if (quizState.isAnswerLocked) return;
    quizState.isAnswerLocked = true;
    clearInterval(quizState.timerInterval);

    const currentQ = quizState.questions[quizState.currentIndex];
    const isCorrect = selectedIndex === currentQ.jawabanBenar;

    const allButtons = optionsGridEl.querySelectorAll(".option-btn");
    allButtons.forEach((btn) => (btn.disabled = true));

    if (isCorrect) {
      selectedBtn.classList.add("correct");
      const speedBonus = quizState.timeLeft * 1;
      const pointsGained = 10 + speedBonus;
      quizState.score += pointsGained;
      quizState.correctAnswers++;

      currentScoreBadge.textContent = `Pts: ${quizState.score}`;

      feedbackStatusEl.className = "feedback-status correct";
      feedbackStatusEl.innerHTML = `✅ Benar Sekali! (+${pointsGained} Pts [10 dasar + ⚡ ${speedBonus} DRS Speed Bonus])`;

      if (typeof SoundFx !== "undefined") SoundFx.playChime();
    } else {
      selectedBtn.classList.add("wrong");
      if (allButtons[currentQ.jawabanBenar]) {
        allButtons[currentQ.jawabanBenar].classList.add("correct");
      }
      quizState.wrongAnswers++;

      feedbackStatusEl.className = "feedback-status wrong";
      feedbackStatusEl.innerHTML = `❌ Jawaban Kurang Tepat (0 Pts)`;
    }

    feedbackPenjelasanEl.textContent = currentQ.penjelasan;
    feedbackBoxEl.style.display = "block";
    nextQuestionBtn.style.display = "inline-flex";
  }

  function handleTimeOut() {
    if (quizState.isAnswerLocked) return;
    quizState.isAnswerLocked = true;

    const currentQ = quizState.questions[quizState.currentIndex];
    const allButtons = optionsGridEl.querySelectorAll(".option-btn");
    allButtons.forEach((btn) => (btn.disabled = true));

    if (allButtons[currentQ.jawabanBenar]) {
      allButtons[currentQ.jawabanBenar].classList.add("correct");
    }
    quizState.wrongAnswers++;

    feedbackStatusEl.className = "feedback-status wrong";
    feedbackStatusEl.innerHTML = `⏱️ Waktu Habis! (0 Pts)`;
    feedbackPenjelasanEl.textContent = `Waktu 20 detik telah habis. Kunci jawaban: ${String.fromCharCode(65 + currentQ.jawabanBenar)}. ${currentQ.penjelasan}`;
    feedbackBoxEl.style.display = "block";
    nextQuestionBtn.style.display = "inline-flex";
  }

  if (nextQuestionBtn) {
    nextQuestionBtn.addEventListener("click", () => {
      quizState.currentIndex++;
      if (quizState.currentIndex < quizState.questions.length) {
        loadQuestion(quizState.currentIndex);
      } else {
        showResults();
      }
    });
  }

  // 6. Hasil Kuis / Podium Finish
  function showResults() {
    clearInterval(quizState.timerInterval);

    screenArena.style.display = "none";
    screenResult.style.display = "block";

    const totalQuestions = quizState.questions.length;
    const accuracy = totalQuestions > 0 ? Math.round((quizState.correctAnswers / totalQuestions) * 100) : 0;

    resultPlayerName.textContent = quizState.playerName;
    resultFinalScore.textContent = quizState.score;
    resultCorrectCount.textContent = quizState.correctAnswers;
    resultWrongCount.textContent = quizState.wrongAnswers;
    resultAccuracy.textContent = `${accuracy}%`;

    let motivationText = "";
    let badgeIcon = "🏆";

    if (accuracy >= 90) {
      badgeIcon = "🥇";
      motivationText = "🏁 P1 POLE POSITION! Performa luar biasa layaknya pembalap juara Scuderia Ferrari!";
    } else if (accuracy >= 70) {
      badgeIcon = "🥈";
      motivationText = "🍾 FINISH PODIUM! Pemahaman sangat tajam dan presisi tinggi di lintasan!";
    } else if (accuracy >= 50) {
      badgeIcon = "🥉";
      motivationText = "🏎️ FINISH DI ZONA POIN! Terus asah strategi dan materi belajarmu untuk merebut podium P1!";
    } else {
      badgeIcon = "🔧";
      motivationText = "Pit Stop Dulu! Pelajari kembali modul materi belajarnya dan gaspol lagi di sesi berikutnya!";
    }

    resultBadgeIcon.textContent = badgeIcon;
    resultMotivation.textContent = motivationText;

    if (typeof SoundFx !== "undefined") SoundFx.playChime();

    saveQuizResult(quizState.playerName, quizState.score, quizState.correctAnswers, quizState.wrongAnswers, accuracy, quizState.category);
  }

  function saveQuizResult(name, score, correct, wrong, accuracy, category) {
    const rawLeaderboard = StorageHelper.get(STORAGE_KEYS.LEADERBOARD, []);
    const leaderboard = Array.isArray(rawLeaderboard) ? rawLeaderboard : [];

    const sessionEntryId = "score-" + Date.now() + "-" + Math.floor(Math.random() * 1000);

    const now = new Date();
    const dateFormatted = `${now.getDate().toString().padStart(2, "0")}/${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${now.getFullYear()} ${now.getHours().toString().padStart(2, "0")}:${now
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    const newRecord = {
      id: sessionEntryId,
      nama: name,
      skor: score,
      benar: correct,
      salah: wrong,
      akurasi: accuracy,
      kategori: category,
      tanggal: dateFormatted,
      timestamp: Date.now()
    };

    leaderboard.push(newRecord);
    StorageHelper.set(STORAGE_KEYS.LEADERBOARD, leaderboard);
    StorageHelper.set(STORAGE_KEYS.RECENT_ID, sessionEntryId);
  }

  if (playAgainBtn) {
    playAgainBtn.addEventListener("click", () => {
      screenResult.style.display = "none";
      screenSetup.style.display = "block";
      playerNameInput.focus();
    });
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
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
});

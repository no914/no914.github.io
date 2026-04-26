window.addEventListener("DOMContentLoaded", function () {
  // 1. Page load greeting
  let hour = new Date().getHours();
  let greeting = document.getElementById("greeting");

  if (hour < 12) {
    greeting.textContent = "Good morning! Start your reset gently.";
  } else if (hour < 18) {
    greeting.textContent = "Good afternoon! Take a small break for yourself.";
  } else {
    greeting.textContent = "Good evening! Time to slow down and recharge.";
  }

  // 2. Mood buttons
  let moodButtons = document.querySelectorAll(".moodBtn");

  moodButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      document.getElementById("moodText").textContent =
        "Today you feel: " + button.textContent;
    });
  });

  // 3. Water tracker
  let waterCount = 0;

  document.getElementById("addWaterBtn").addEventListener("click", function () {
    waterCount++;
    document.getElementById("waterCount").textContent = waterCount + " cups";
  });

  document.getElementById("resetWaterBtn").addEventListener("click", function () {
    waterCount = 0;
    document.getElementById("waterCount").textContent = "0 cups";
  });

  // 4. Hover quote card
  document.getElementById("quoteCard").addEventListener("mouseover", function () {
    document.getElementById("quoteText").textContent =
      "You do not have to do everything today. One step is enough.";
  });

  document.getElementById("quoteCard").addEventListener("mouseout", function () {
    document.getElementById("quoteText").textContent =
      "Hover over this card.";
  });

  // 5. Journal focus
  document.getElementById("journalBox").addEventListener("focus", function () {
    document.getElementById("journalMsg").textContent =
      "Write anything on your mind — no pressure.";
  });

  // 6. Save journal button
  document.getElementById("saveJournalBtn").addEventListener("click", function () {
    let journalText = document.getElementById("journalBox").value;
    let savedJournal = document.getElementById("savedJournal");

    if (journalText === "") {
      savedJournal.textContent = "Please write something before saving.";
    } else {
      savedJournal.textContent = "Saved journal: " + journalText;
    }
  });

  let isChanged = false;

  document.getElementById("colorBtn").addEventListener("click", function () {
    if (!isChanged) {
      document.body.style.background =
        "linear-gradient(135deg, #dff7ff, #f4e4ff)";

      this.textContent = "Back to Default";
      isChanged = true;
    } else {
      document.body.style.background = "white";

      this.textContent = "Change Background";
      isChanged = false;
    }
  });
});
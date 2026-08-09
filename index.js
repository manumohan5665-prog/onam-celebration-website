// Countdown Section

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const onamDate = new Date("2026-08-26T00:00:00");

function updateCountdown() {
  const currentDate = new Date();
  const difference = onamDate - currentDate;

  if (difference <= 0) {
    daysElement.textContent = "00";
    hoursElement.textContent = "00";
    minutesElement.textContent = "00";
    secondsElement.textContent = "00";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  daysElement.textContent = String(days).padStart(2, "0");
  hoursElement.textContent = String(hours).padStart(2, "0");
  minutesElement.textContent = String(minutes).padStart(2, "0");
  secondsElement.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


// Pookalam Section

const pookalamContainer = document.getElementById("pookalamContainer");
const pookalams = [
  {
    title: "Traditional Pookalam",
    description: "Colorful flowers arranged in beautiful patterns.",
    image: "./images/pookalam-1.webp",
  },

  {
    title: "Floral Art",
    description: "A creative expression of Kerala's festive spirit.",
    image: "./images/pookalam-2.webp",
  },

  {
    title: "Onam Colors",
    description: "Vibrant flowers celebrating the beauty of Onam.",
    image: "./images/pookalam-3.webp",
  },
];

pookalams.forEach((pookalam) => {
  const column = document.createElement("div");

  column.className = "col-md-6 col-lg-4";
  column.innerHTML = `
        <div class="card border-0 shadow-sm h-100">

            <img
                src="${pookalam.image}"
                class="card-img-top pookalam-img"
                alt="${pookalam.title}"
            >

            <div class="card-body text-center">

                <h5 class="card-title">
                    ${pookalam.title}
                </h5>

                <p class="card-text text-muted">
                    ${pookalam.description}
                </p>

            </div>

        </div>`;

  pookalamContainer.appendChild(column);
});


// Onam Days Section
const onamDaysContainer = document.getElementById("onamDaysContainer");

const onamDays = [
  {
    day: 1,
    name: "Atham",
    description:
      "The first day of Onam celebrations begins with the creation of the Pookalam.",
  },

  {
    day: 2,
    name: "Chithira",
    description:
      "Families add more flowers and patterns to their beautiful Pookalam.",
  },

  {
    day: 3,
    name: "Chodhi",
    description:
      "Preparations for the grand celebration continue across Kerala.",
  },

  {
    day: 4,
    name: "Vishakam",
    description:
      "Markets become busy as families prepare traditional dishes and celebrations.",
  },

  {
    day: 5,
    name: "Anizham",
    description:
      "The excitement grows as Vallam Kali boat race preparations take place.",
  },

  {
    day: 6,
    name: "Thrikketa",
    description:
      "Families begin preparing for the main celebrations and gatherings.",
  },

  {
    day: 7,
    name: "Moolam",
    description:
      "Traditional dances, feasts and cultural events become more prominent.",
  },

  {
    day: 8,
    name: "Pooradam",
    description:
      "Onathappan idols are placed in the Pookalam as preparations continue.",
  },

  {
    day: 9,
    name: "Uthradam",
    description:
      "Known as the day of great preparations before the main celebration.",
  },

  {
    day: 10,
    name: "Thiruvonam",
    description:
      "The grandest day of Onam, celebrated with Sadya, Pookalam and family gatherings.",
  },
];


// Onam Days Display Section

function displayOnamDays(days) {
  onamDaysContainer.innerHTML = "";

  const onamResultCount = document.getElementById("onamResultCount");
  onamResultCount.textContent = `Showing ${days.length} of ${onamDays.length} Onam days`;

  if (days.length === 0) {
    onamDaysContainer.innerHTML = `
            <div class="col-12 text-center py-4">

                <h5 class="text-muted">
                    No Onam days found.
                </h5>

                <p class="text-muted">
                    Try searching for another day.
                </p>

            </div>
        `;

    return;
  }

  days.forEach(function (onamDay) {
    const column = document.createElement("div");

    column.className = "col-md-6 col-lg-4";

    const badgeClass =
      onamDay.day === 10 ? "text-bg-warning" : "text-bg-success";

    column.innerHTML = `
            <div class="card h-100 shadow-sm">

                <div class="card-body text-center">

                    <span class="badge ${badgeClass} mb-3">
                        Day ${onamDay.day}
                    </span>

                    <h4 class="card-title">
                        ${onamDay.name}
                    </h4>

                    <p class="card-text">
                        ${onamDay.description}
                    </p>

                </div>

            </div>
        `;

    onamDaysContainer.appendChild(column);
  });
}
displayOnamDays(onamDays);


// Filter Button Section

let currentFilter = "all";
const filterButtons = document.querySelectorAll(".filter-btn");
const onamSearch = document.getElementById("onamSearch");

function applyFilters() {
  const searchText = onamSearch.value.toLowerCase().trim();

  let filteredDays = onamDays;

  // Apply day filter
  if (currentFilter === "early") {
    filteredDays = filteredDays.filter(function (onamDay) {
      return onamDay.day <= 5;
    });
  } else if (currentFilter === "final") {
    filteredDays = filteredDays.filter(function (onamDay) {
      return onamDay.day >= 6;
    });
  }

  // Apply search filter
  if (searchText !== "") {
    filteredDays = filteredDays.filter(function (onamDay) {
      return (
        onamDay.name.toLowerCase().includes(searchText) ||
        onamDay.description.toLowerCase().includes(searchText)
      );
    });
  }

  displayOnamDays(filteredDays);
}

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    currentFilter = button.dataset.filter;

    applyFilters();

    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
      btn.classList.remove("btn-success");
      btn.classList.add("btn-outline-success");
    });

    button.classList.add("active");
    button.classList.remove("btn-outline-success");
    button.classList.add("btn-success");
  });
});


// Onam Days Search Section

onamSearch.addEventListener("input", function () {
  applyFilters();
});


// Greeting Section

const visitorName = document.getElementById("visitorName");

const greetingBtn = document.getElementById("greetingBtn");

const greetingMessage = document.getElementById("greetingMessage");

greetingBtn.addEventListener("click", function () {
  const name = visitorName.value.trim();

  if (name === "") {
    greetingMessage.innerHTML = `
            <p class="text-danger">
                Please enter your name.
            </p>
        `;

    return;
  }

  const greetingText = `🌼 Happy Onam, ${name}! 🌼

  May this Onam bring joy, prosperity, peace and happiness
  to you and your family.`;

  greetingMessage.innerHTML = `
    <h4>
        🌼 Happy Onam, ${name}! 🌼
    </h4>

    <p>
        May this Onam bring joy, prosperity,
        peace and happiness to you and your family.
    </p>

    <button id="copyGreetingBtn" class="btn btn-outline-success btn-sm mt-2">
        📋 Copy Greeting
    </button>
    <button id="shareGreetingBtn" class="btn btn-success btn-sm mt-2">
        📤 Share Greeting
    </button>`;

  const copyGreetingBtn = document.getElementById("copyGreetingBtn");
  const shareGreetingBtn = document.getElementById("shareGreetingBtn");

  // Copy Button
  copyGreetingBtn.addEventListener("click", async function () {
    try {
      await navigator.clipboard.writeText(greetingText);

      copyGreetingBtn.textContent = "✅ Copied!";

      setTimeout(function () {
        copyGreetingBtn.textContent = "📋 Copy Greeting";
      }, 2000);
    } catch (error) {
      copyGreetingBtn.textContent = "Unable to copy";
    }
  });

  //Share Button
  shareGreetingBtn.addEventListener("click", async function () {
    if (!navigator.share) {
      alert("Sharing is not supported on this browser.");

      return;
    }

    try {
      await navigator.share({
        title: "Onam Greeting",
        text: greetingText,
      });
    } catch (error) {
      console.log("Sharing cancelled.");
    }
  });
});

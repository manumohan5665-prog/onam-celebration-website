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

onamDays.forEach((onamDay) => {
  const column = document.createElement("div");

  column.className = "col-md-6 col-lg-4";

  const badgeClass = onamDay.day === 10 ? "text-bg-warning" : "text-bg-success";

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

        </div>`;

  onamDaysContainer.appendChild(column);

});
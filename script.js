const countries = [
  // Africa
  { name: "Algeria", code: "dz", region: "Africa/Arab World" },
  { name: "Angola", code: "ao", region: "Africa" },
  { name: "Benin", code: "bj", region: "Africa" },
  { name: "Botswana", code: "bw", region: "Africa/Former British Colonies" },
  { name: "Burkina Faso", code: "bf", region: "Africa" },
  { name: "Burundi", code: "bi", region: "Africa" },
  { name: "Cabo Verde", code: "cv", region: "Africa" },
  { name: "Cameroon", code: "cm", region: "Africa/Former British Colonies" },
  { name: "Central African Republic", code: "cf", region: "Africa" },
  { name: "Chad", code: "td", region: "Africa" },
  { name: "Comoros", code: "km", region: "Africa/Arab World" },
  { name: "Congo", code: "cg", region: "Africa" },
  { name: "DR Congo", code: "cd", region: "Africa" },
  { name: "Djibouti", code: "dj", region: "Africa/Arab World" },
  {
    name: "Egypt",
    code: "eg",
    region: "Africa/Middle East/Arab World",
  },
  { name: "Equatorial Guinea", code: "gq", region: "Africa" },
  { name: "Eritrea", code: "er", region: "Africa" },
  { name: "Eswatini", code: "sz", region: "Africa/Former British Colonies" },
  { name: "Ethiopia", code: "et", region: "Africa" },
  { name: "Gabon", code: "ga", region: "Africa" },
  { name: "Gambia", code: "gm", region: "Africa/Former British Colonies" },
  { name: "Ghana", code: "gh", region: "Africa/Former British Colonies" },
  { name: "Guinea", code: "gn", region: "Africa" },
  { name: "Guinea-Bissau", code: "gw", region: "Africa" },
  { name: "Ivory Coast", code: "ci", region: "Africa" },
  { name: "Kenya", code: "ke", region: "Africa/Former British Colonies" },
  { name: "Lesotho", code: "ls", region: "Africa/Former British Colonies" },
  { name: "Liberia", code: "lr", region: "Africa" },
  { name: "Libya", code: "ly", region: "Africa/Arab World" },
  { name: "Madagascar", code: "mg", region: "Africa" },
  { name: "Malawi", code: "mw", region: "Africa/Former British Colonies" },
  { name: "Mali", code: "ml", region: "Africa" },
  { name: "Mauritania", code: "mr", region: "Africa/Arab World" },
  { name: "Mauritius", code: "mu", region: "Africa/Former British Colonies" },
  { name: "Morocco", code: "ma", region: "Africa/Arab World" },
  { name: "Mozambique", code: "mz", region: "Africa" },
  { name: "Namibia", code: "na", region: "Africa" },
  { name: "Niger", code: "ne", region: "Africa" },
  { name: "Nigeria", code: "ng", region: "Africa/Former British Colonies" },
  { name: "Rwanda", code: "rw", region: "Africa" },
  { name: "São Tomé and Príncipe", code: "st", region: "Africa" },
  { name: "Senegal", code: "sn", region: "Africa" },
  { name: "Seychelles", code: "sc", region: "Africa/Former British Colonies" },
  {
    name: "Sierra Leone",
    code: "sl",
    region: "Africa/Former British Colonies",
  },
  {
    name: "Somalia",
    code: "so",
    region: "Africa/Former British Colonies/Arab World",
  },
  {
    name: "South Africa",
    code: "za",
    region: "Africa/Former British Colonies",
  },
  { name: "South Sudan", code: "ss", region: "Africa/Former British Colonies" },
  {
    name: "Sudan",
    code: "sd",
    region: "Africa/Former British Colonies/Arab World",
  },
  { name: "Tanzania", code: "tz", region: "Africa/Former British Colonies" },
  { name: "Togo", code: "tg", region: "Africa" },
  { name: "Tunisia", code: "tn", region: "Africa/Arab World" },
  { name: "Uganda", code: "ug", region: "Africa" },
  { name: "Zambia", code: "zm", region: "Africa/Former British Colonies" },
  { name: "Zimbabwe", code: "zw", region: "Africa/Former British Colonies" },

  // Americas
  {
    name: "Antigua and Barbuda",
    code: "ag",
    region: "Americas/Former British Colonies",
  },
  { name: "Argentina", code: "ar", region: "Americas/Latin America" },
  { name: "Bahamas", code: "bs", region: "Americas/Former British Colonies" },
  { name: "Barbados", code: "bb", region: "Americas/Former British Colonies" },
  {
    name: "Belize",
    code: "bz",
    region: "Americas/Former British Colonies/Latin America",
  },
  { name: "Bolivia", code: "bo", region: "Americas/Latin America" },
  { name: "Brazil", code: "br", region: "Americas/Latin America" },
  { name: "Canada", code: "ca", region: "Americas/Former British Colonies" },
  { name: "Chile", code: "cl", region: "Americas/Latin America" },
  { name: "Colombia", code: "co", region: "Americas/Latin America" },
  { name: "Costa Rica", code: "cr", region: "Americas/Latin America" },
  { name: "Cuba", code: "cu", region: "Americas/Latin America" },
  { name: "Dominica", code: "dm", region: "Americas/Former British Colonies" },
  { name: "Dominican Republic", code: "do", region: "Americas/Latin America" },
  { name: "Ecuador", code: "ec", region: "Americas/Latin America" },
  { name: "El Salvador", code: "sv", region: "Americas/Latin America" },
  { name: "Grenada", code: "gd", region: "Americas/Former British Colonies" },
  { name: "Guatemala", code: "gt", region: "Americas/Latin America" },
  {
    name: "Guyana",
    code: "gy",
    region: "Americas/Former British Colonies/Latin America",
  },
  { name: "Haiti", code: "ht", region: "Americas/Latin America" },
  { name: "Honduras", code: "hn", region: "Americas/Latin America" },
  { name: "Jamaica", code: "jm", region: "Americas/Former British Colonies" },
  { name: "Mexico", code: "mx", region: "Americas/Latin America" },
  { name: "Nicaragua", code: "ni", region: "Americas/Latin America" },
  { name: "Panama", code: "pa", region: "Americas/Latin America" },
  { name: "Paraguay", code: "py", region: "Americas/Latin America" },
  { name: "Peru", code: "pe", region: "Americas/Latin America" },
  {
    name: "Saint Kitts and Nevis",
    code: "kn",
    region: "Americas/Former British Colonies",
  },
  {
    name: "Saint Lucia",
    code: "lc",
    region: "Americas/Former British Colonies",
  },
  {
    name: "Saint Vincent and the Grenadines",
    code: "vc",
    region: "Americas/Former British Colonies",
  },
  { name: "Suriname", code: "sr", region: "Americas/Latin America" },
  {
    name: "Trinidad and Tobago",
    code: "tt",
    region: "Americas/Former British Colonies",
  },
  {
    name: "United States",
    code: "us",
    region: "Americas/Former British Colonies",
  },
  { name: "Uruguay", code: "uy", region: "Americas/Latin America" },
  { name: "Venezuela", code: "ve", region: "Americas/Latin America" },

  // Asia
  { name: "Afghanistan", code: "af", region: "Asia" },
  { name: "Armenia", code: "am", region: "Asia/Post Soviet States" },
  { name: "Azerbaijan", code: "az", region: "Asia/Post Soviet States" },
  { name: "Bahrain", code: "bh", region: "Asia/Middle East/Arab World" },
  { name: "Bangladesh", code: "bd", region: "Asia/Former British Colonies" },
  { name: "Bhutan", code: "bt", region: "Asia" },
  { name: "Brunei", code: "bn", region: "Asia/Southeast Asia" },
  { name: "Cambodia", code: "kh", region: "Asia/Southeast Asia" },
  { name: "China", code: "cn", region: "Asia/East Asia" },
  {
    name: "Cyprus",
    code: "cy",
    region: "Asia/Middle East/Former British Colonies",
  },
  { name: "Georgia", code: "ge", region: "Asia/Post Soviet States" },
  { name: "India", code: "in", region: "Asia/Former British Colonies" },
  { name: "Indonesia", code: "id", region: "Asia/Southeast Asia" },
  { name: "Iran", code: "ir", region: "Asia/Middle East" },
  { name: "Iraq", code: "iq", region: "Asia/Middle East/Arab World" },
  { name: "Israel", code: "il", region: "Asia/Middle East" },
  { name: "Japan", code: "jp", region: "Asia/East Asia" },
  { name: "Jordan", code: "jo", region: "Asia/Middle East/Arab World" },
  { name: "Kazakhstan", code: "kz", region: "Asia/Post Soviet States" },
  { name: "Kuwait", code: "kw", region: "Asia/Middle East/Arab World" },
  { name: "Kyrgyzstan", code: "kg", region: "Asia/Post Soviet States" },
  { name: "Laos", code: "la", region: "Asia/Southeast Asia" },
  { name: "Lebanon", code: "lb", region: "Asia/Middle East/Arab World" },
  {
    name: "Malaysia",
    code: "my",
    region: "Asia/Former British Colonies/Southeast Asia",
  },
  { name: "Maldives", code: "mv", region: "Asia" },
  { name: "Mongolia", code: "mn", region: "Asia/East Asia" },
  {
    name: "Myanmar",
    code: "mm",
    region: "Asia/Former British Colonies/Southeast Asia",
  },
  { name: "Nepal", code: "np", region: "Asia" },
  { name: "North Korea", code: "kp", region: "Asia/East Asia" },
  { name: "Oman", code: "om", region: "Asia/Middle East/Arab World" },
  { name: "Pakistan", code: "pk", region: "Asia/Former British Colonies" },
  { name: "Philippines", code: "ph", region: "Asia/Southeast Asia" },
  { name: "Qatar", code: "qa", region: "Asia/Middle East/Arab World" },
  { name: "Saudi Arabia", code: "sa", region: "Asia/Middle East/Arab World" },
  {
    name: "Singapore",
    code: "sg",
    region: "Asia/Former British Colonies/Southeast Asia",
  },
  { name: "South Korea", code: "kr", region: "Asia/East Asia" },
  { name: "Sri Lanka", code: "lk", region: "Asia/Former British Colonies" },
  { name: "Syria", code: "sy", region: "Asia/Middle East/Arab World" },
  { name: "Tajikistan", code: "tj", region: "Asia/Post Soviet States" },
  { name: "Thailand", code: "th", region: "Asia/Southeast Asia" },
  { name: "Timor-Leste", code: "tl", region: "Asia/Southeast Asia" },
  { name: "Turkey", code: "tr", region: "Asia/Europe/Middle East" },
  { name: "Turkmenistan", code: "tm", region: "Asia/Post Soviet States" },
  {
    name: "United Arab Emirates",
    code: "ae",
    region: "Asia/Middle East/Arab World",
  },
  { name: "Uzbekistan", code: "uz", region: "Asia/Post Soviet States" },
  { name: "Vietnam", code: "vn", region: "Asia/Southeast Asia" },
  {
    name: "Yemen",
    code: "ye",
    region: "Asia/Middle East/Former British Colonies/Arab World",
  },

  // Europe
  { name: "Albania", code: "al", region: "Europe" },
  { name: "Andorra", code: "ad", region: "Europe" },
  { name: "Austria", code: "at", region: "Europe" },
  { name: "Belarus", code: "by", region: "Europe/Post Soviet States" },
  { name: "Belgium", code: "be", region: "Europe" },
  { name: "Bosnia and Herzegovina", code: "ba", region: "Europe" },
  { name: "Bulgaria", code: "bg", region: "Europe" },
  { name: "Croatia", code: "hr", region: "Europe" },
  { name: "Czech Republic", code: "cz", region: "Europe" },
  { name: "Denmark", code: "dk", region: "Europe" },
  { name: "Estonia", code: "ee", region: "Europe/Post Soviet States" },
  { name: "Finland", code: "fi", region: "Europe" },
  { name: "France", code: "fr", region: "Europe" },
  { name: "Germany", code: "de", region: "Europe" },
  { name: "Greece", code: "gr", region: "Europe" },
  { name: "Hungary", code: "hu", region: "Europe" },
  { name: "Iceland", code: "is", region: "Europe" },
  { name: "Ireland", code: "ie", region: "Europe/Former British Colonies" },
  { name: "Italy", code: "it", region: "Europe" },
  { name: "Latvia", code: "lv", region: "Europe/Post Soviet States" },
  { name: "Liechtenstein", code: "li", region: "Europe" },
  { name: "Lithuania", code: "lt", region: "Europe/Post Soviet States" },
  { name: "Luxembourg", code: "lu", region: "Europe" },
  { name: "Malta", code: "mt", region: "Europe/Former British Colonies" },
  { name: "Moldova", code: "md", region: "Europe/Post Soviet States" },
  { name: "Monaco", code: "mc", region: "Europe" },
  { name: "Montenegro", code: "me", region: "Europe" },
  { name: "Netherlands", code: "nl", region: "Europe" },
  { name: "North Macedonia", code: "mk", region: "Europe" },
  { name: "Norway", code: "no", region: "Europe" },
  { name: "Poland", code: "pl", region: "Europe" },
  { name: "Portugal", code: "pt", region: "Europe" },
  { name: "Romania", code: "ro", region: "Europe" },
  { name: "Russia", code: "ru", region: "Europe/Asia/Post Soviet States" },
  { name: "San Marino", code: "sm", region: "Europe" },
  { name: "Serbia", code: "rs", region: "Europe" },
  { name: "Slovakia", code: "sk", region: "Europe" },
  { name: "Slovenia", code: "si", region: "Europe" },
  { name: "Spain", code: "es", region: "Europe" },
  { name: "Sweden", code: "se", region: "Europe" },
  { name: "Switzerland", code: "ch", region: "Europe" },
  { name: "Ukraine", code: "ua", region: "Europe/Post Soviet States" },
  { name: "United Kingdom", code: "gb", region: "Europe" },
  { name: "Vatican City", code: "va", region: "Europe" },
  { name: "Kosovo", code: "xk", region: "Europe" },

  // Oceania
  { name: "Australia", code: "au", region: "Oceania/Former British Colonies" },
  { name: "Fiji", code: "fj", region: "Oceania/Former British Colonies" },
  { name: "Kiribati", code: "ki", region: "Oceania/Former British Colonies" },
  {
    name: "Marshall Islands",
    code: "mh",
    region: "Oceania",
  },
  { name: "Micronesia", code: "fm", region: "Oceania" },
  { name: "Nauru", code: "nr", region: "Oceania" },
  {
    name: "New Zealand",
    code: "nz",
    region: "Oceania/Former British Colonies",
  },
  { name: "Palau", code: "pw", region: "Oceania" },
  {
    name: "Papua New Guinea",
    code: "pg",
    region: "Oceania/Former British Colonies",
  },
  { name: "Samoa", code: "ws", region: "Oceania" },
  {
    name: "Solomon Islands",
    code: "sb",
    region: "Oceania/Former British Colonies",
  },
  { name: "Tonga", code: "to", region: "Oceania" },
  { name: "Tuvalu", code: "tv", region: "Oceania/Former British Colonies" },
  { name: "Vanuatu", code: "vu", region: "Oceania/Former British Colonies" },

  //  Regipns
  { name: "Taiwan", code: "tw", region: "Asia/East Asia" },
  { name: "Palestine", code: "ps", region: "Asia/Middle East/Arab World" },
];

const THEME_STORAGE_KEY = "theme";
const FLAG_BASE_URL = "https://flagcdn.com/";
const flagCache = new Map();

function setTheme(theme) {
  const resolvedTheme = theme === "light" ? "light" : "dark";

  document.body.classList.toggle("light-mode", resolvedTheme === "light");
  document.body.setAttribute("data-theme", resolvedTheme);

  const toggle = document.querySelector('.switch input[type="checkbox"]');
  if (toggle) {
    toggle.checked = resolvedTheme === "light";
  }

  try {
    localStorage.setItem(THEME_STORAGE_KEY, resolvedTheme);
  } catch (error) {
    console.warn("Theme could not be saved:", error);
  }
}

let questions = [];
let current = 0;
let score = 0;
let timeLeft = 30;
let timer;
let usedCountries = new Set();
let attempts = [];

const flagEl = document.getElementById("flag");
const optionsEl = document.querySelector(".options");
const timeEl = document.getElementById("time");
const questionCounterEl = document.getElementById("questionCounter");
const reviewEl = document.getElementById("review");

function preloadFlag(code) {
  if (!code || flagCache.has(code)) return flagCache.get(code);

  const image = new Image();
  image.decoding = "sync";
  image.loading = "eager";
  image.src = `${FLAG_BASE_URL}${code}.svg`;
  flagCache.set(code, image);
  return image;
}

function preloadPool(pool) {
  pool.forEach((country) => preloadFlag(country.code));
}

function recordAttempt(correct, selectedName, timedOut = false) {
  const isCorrect = !timedOut && selectedName === correct.name;

  attempts.push({
    correct: correct.name,
    selected: selectedName || "No answer",
    isCorrect,
    timedOut,
  });
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function startQuiz() {
  const quizScreen = document.getElementById("quiz");
  const count = +document.getElementById("count").value;
  const region = document.getElementById("region").value;
  current = 0;
  score = 0;
  attempts = [];

  let pool =
    region === "All"
      ? countries
      : countries.filter((c) => c.region.includes(region));

  usedCountries.clear();
  questions = shuffle([...pool]).slice(0, Math.min(count, pool.length));
  preloadPool(pool);

  document.getElementById("start").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");

  requestAnimationFrame(() => {
    quizScreen.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  loadQuestion();
}

function updateQuestionCounter() {
  if (questionCounterEl) {
    questionCounterEl.textContent = `${current + 1} / ${questions.length}`;
  }
}

function loadQuestion() {
  if (current >= questions.length) return endQuiz();

  const correct = questions[current];
  const nextFlagUrl = `${FLAG_BASE_URL}${correct.code}.svg`;

  preloadFlag(correct.code);
  flagEl.decoding = "sync";
  flagEl.loading = "eager";
  flagEl.src = nextFlagUrl;
  flagEl.alt = `${correct.name} flag`;
  updateQuestionCounter();

  clearInterval(timer);
  timeLeft = 30;
  timeEl.textContent = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      recordAttempt(correct, null, true);
      current++;
      loadQuestion();
    }
  }, 1000);

  const options = shuffle([
    correct,
    ...shuffle(countries.filter((c) => c.code !== correct.code)).slice(0, 3),
  ]);

  optionsEl.innerHTML = "";
  options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt.name;
    btn.onclick = () => {
      const wasCorrect = opt.code === correct.code;
      if (wasCorrect) score++;

      recordAttempt(correct, opt.name, false);
      current++;
      loadQuestion();
    };
    optionsEl.appendChild(btn);
  });
}

function renderReview() {
  if (!reviewEl) return;

  reviewEl.innerHTML = attempts
    .map((attempt, index) => {
      return `
        <div class="review-item ${attempt.isCorrect ? "review-correct" : "review-wrong"}">
          <div class="review-question">Q${index + 1}: ${attempt.correct}</div>
          <div class="review-meta">
            <span>You answered: ${attempt.selected}</span>
            <span>${status}</span>
          </div>
          <div class="review-meta">
            <span>Correct answer: ${attempt.correct}</span>
          </div>
        </div>
      `;
    })
    .join("");
}

function endQuiz() {
  clearInterval(timer);
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("score").textContent =
    `${score} / ${questions.length}`;
  renderReview();
}

function initTheme() {
  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    setTheme(savedTheme === "light" ? "light" : "dark");
  } catch (error) {
    setTheme("dark");
  }
}

function initHeaderShrink() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("shrink", window.scrollY > 50);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

window.toggleDarkMode = function () {
  const nextTheme = document.body.classList.contains("light-mode")
    ? "dark"
    : "light";
  setTheme(nextTheme);
};

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initHeaderShrink();
});

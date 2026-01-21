const countries = [
  // Africa
  { name: "Algeria", code: "dz", region: "Africa" },
  { name: "Angola", code: "ao", region: "Africa" },
  { name: "Benin", code: "bj", region: "Africa" },
  { name: "Botswana", code: "bw", region: "Africa" },
  { name: "Burkina Faso", code: "bf", region: "Africa" },
  { name: "Burundi", code: "bi", region: "Africa" },
  { name: "Cabo Verde", code: "cv", region: "Africa" },
  { name: "Cameroon", code: "cm", region: "Africa" },
  { name: "Central African Republic", code: "cf", region: "Africa" },
  { name: "Chad", code: "td", region: "Africa" },
  { name: "Comoros", code: "km", region: "Africa" },
  { name: "Congo", code: "cg", region: "Africa" },
  { name: "DR Congo", code: "cd", region: "Africa" },
  { name: "Djibouti", code: "dj", region: "Africa" },
  { name: "Egypt", code: "eg", region: "Africa" },
  { name: "Equatorial Guinea", code: "gq", region: "Africa" },
  { name: "Eritrea", code: "er", region: "Africa" },
  { name: "Eswatini", code: "sz", region: "Africa" },
  { name: "Ethiopia", code: "et", region: "Africa" },
  { name: "Gabon", code: "ga", region: "Africa" },
  { name: "Gambia", code: "gm", region: "Africa" },
  { name: "Ghana", code: "gh", region: "Africa" },
  { name: "Guinea", code: "gn", region: "Africa" },
  { name: "Guinea-Bissau", code: "gw", region: "Africa" },
  { name: "Ivory Coast", code: "ci", region: "Africa" },
  { name: "Kenya", code: "ke", region: "Africa" },
  { name: "Lesotho", code: "ls", region: "Africa" },
  { name: "Liberia", code: "lr", region: "Africa" },
  { name: "Libya", code: "ly", region: "Africa" },
  { name: "Madagascar", code: "mg", region: "Africa" },
  { name: "Malawi", code: "mw", region: "Africa" },
  { name: "Mali", code: "ml", region: "Africa" },
  { name: "Mauritania", code: "mr", region: "Africa" },
  { name: "Mauritius", code: "mu", region: "Africa" },
  { name: "Morocco", code: "ma", region: "Africa" },
  { name: "Mozambique", code: "mz", region: "Africa" },
  { name: "Namibia", code: "na", region: "Africa" },
  { name: "Niger", code: "ne", region: "Africa" },
  { name: "Nigeria", code: "ng", region: "Africa" },
  { name: "Rwanda", code: "rw", region: "Africa" },
  { name: "São Tomé and Príncipe", code: "st", region: "Africa" },
  { name: "Senegal", code: "sn", region: "Africa" },
  { name: "Seychelles", code: "sc", region: "Africa" },
  { name: "Sierra Leone", code: "sl", region: "Africa" },
  { name: "Somalia", code: "so", region: "Africa" },
  { name: "South Africa", code: "za", region: "Africa" },
  { name: "South Sudan", code: "ss", region: "Africa" },
  { name: "Sudan", code: "sd", region: "Africa" },
  { name: "Tanzania", code: "tz", region: "Africa" },
  { name: "Togo", code: "tg", region: "Africa" },
  { name: "Tunisia", code: "tn", region: "Africa" },
  { name: "Uganda", code: "ug", region: "Africa" },
  { name: "Zambia", code: "zm", region: "Africa" },
  { name: "Zimbabwe", code: "zw", region: "Africa" },

  // Americas
  { name: "Antigua and Barbuda", code: "ag", region: "Americas" },
  { name: "Argentina", code: "ar", region: "Americas"},
  { name: "Bahamas", code: "bs", region: "Americas" },
  { name: "Barbados", code: "bb", region: "Americas" },
  { name: "Belize", code: "bz", region: "Americas" },
  { name: "Bolivia", code: "bo", region: "Americas" },
  { name: "Brazil", code: "br", region: "Americas" },
  { name: "Canada", code: "ca", region: "Americas" },
  { name: "Chile", code: "cl", region: "Americas" },
  { name: "Colombia", code: "co", region: "Americas" },
  { name: "Costa Rica", code: "cr", region: "Americas" },
  { name: "Cuba", code: "cu", region: "Americas" },
  { name: "Dominica", code: "dm", region: "Americas" },
  { name: "Dominican Republic", code: "do", region: "Americas" },
  { name: "Ecuador", code: "ec", region: "Americas" },
  { name: "El Salvador", code: "sv", region: "Americas" },
  { name: "Grenada", code: "gd", region: "Americas" },
  { name: "Guatemala", code: "gt", region: "Americas" },
  { name: "Guyana", code: "gy", region: "Americas" },
  { name: "Haiti", code: "ht", region: "Americas" },
  { name: "Honduras", code: "hn", region: "Americas" },
  { name: "Jamaica", code: "jm", region: "Americas" },
  { name: "Mexico", code: "mx", region: "Americas" },
  { name: "Nicaragua", code: "ni", region: "Americas" },
  { name: "Panama", code: "pa", region: "Americas" },
  { name: "Paraguay", code: "py", region: "Americas" },
  { name: "Peru", code: "pe", region: "Americas" },
  { name: "Saint Kitts and Nevis", code: "kn", region: "Americas" },
  { name: "Saint Lucia", code: "lc", region: "Americas" },
  { name: "Saint Vincent and the Grenadines", code: "vc", region: "Americas" },
  { name: "Suriname", code: "sr", region: "Americas" },
  { name: "Trinidad and Tobago", code: "tt", region: "Americas" },
  { name: "United States", code: "us", region: "Americas" },
  { name: "Uruguay", code: "uy", region: "Americas" },
  { name: "Venezuela", code: "ve", region: "Americas" },

  // Asia
  { name: "Afghanistan", code: "af", region: "Asia" },
  { name: "Armenia", code: "am", region: "Asia" },
  { name: "Azerbaijan", code: "az", region: "Asia" },
  { name: "Bahrain", code: "bh", region: "Asia" },
  { name: "Bangladesh", code: "bd", region: "Asia" },
  { name: "Bhutan", code: "bt", region: "Asia" },
  { name: "Brunei", code: "bn", region: "Asia" },
  { name: "Cambodia", code: "kh", region: "Asia" },
  { name: "China", code: "cn", region: "Asia" },
  { name: "Cyprus", code: "cy", region: "Asia" },
  { name: "Georgia", code: "ge", region: "Asia" },
  { name: "India", code: "in", region: "Asia" },
  { name: "Indonesia", code: "id", region: "Asia" },
  { name: "Iran", code: "ir", region: "Asia" },
  { name: "Iraq", code: "iq", region: "Asia" },
  { name: "Israel", code: "il", region: "Asia" },
  { name: "Japan", code: "jp", region: "Asia" },
  { name: "Jordan", code: "jo", region: "Asia" },
  { name: "Kazakhstan", code: "kz", region: "Asia" },
  { name: "Kuwait", code: "kw", region: "Asia" },
  { name: "Kyrgyzstan", code: "kg", region: "Asia" },
  { name: "Laos", code: "la", region: "Asia" },
  { name: "Lebanon", code: "lb", region: "Asia" },
  { name: "Malaysia", code: "my", region: "Asia" },
  { name: "Maldives", code: "mv", region: "Asia" },
  { name: "Mongolia", code: "mn", region: "Asia" },
  { name: "Myanmar", code: "mm", region: "Asia" },
  { name: "Nepal", code: "np", region: "Asia" },
  { name: "North Korea", code: "kp", region: "Asia" },
  { name: "Oman", code: "om", region: "Asia" },
  { name: "Pakistan", code: "pk", region: "Asia" },
  { name: "Philippines", code: "ph", region: "Asia" },
  { name: "Qatar", code: "qa", region: "Asia" },
  { name: "Saudi Arabia", code: "sa", region: "Asia" },
  { name: "Singapore", code: "sg", region: "Asia" },
  { name: "South Korea", code: "kr", region: "Asia" },
  { name: "Sri Lanka", code: "lk", region: "Asia" },
  { name: "Syria", code: "sy", region: "Asia" },
  { name: "Tajikistan", code: "tj", region: "Asia" },
  { name: "Thailand", code: "th", region: "Asia" },
  { name: "Timor-Leste", code: "tl", region: "Asia" },
  { name: "Turkey", code: "tr", region: "Asia/Europe" },
  { name: "Turkmenistan", code: "tm", region: "Asia" },
  { name: "United Arab Emirates", code: "ae", region: "Asia" },
  { name: "Uzbekistan", code: "uz", region: "Asia" },
  { name: "Vietnam", code: "vn", region: "Asia" },
  { name: "Yemen", code: "ye", region: "Asia" },

  // Europe
  { name: "Albania", code: "al", region: "Europe" },
  { name: "Andorra", code: "ad", region: "Europe" },
  { name: "Austria", code: "at", region: "Europe" },
  { name: "Belarus", code: "by", region: "Europe" },
  { name: "Belgium", code: "be", region: "Europe" },
  { name: "Bosnia and Herzegovina", code: "ba", region: "Europe" },
  { name: "Bulgaria", code: "bg", region: "Europe" },
  { name: "Croatia", code: "hr", region: "Europe" },
  { name: "Czech Republic", code: "cz", region: "Europe" },
  { name: "Denmark", code: "dk", region: "Europe" },
  { name: "Estonia", code: "ee", region: "Europe" },
  { name: "Finland", code: "fi", region: "Europe" },
  { name: "France", code: "fr", region: "Europe" },
  { name: "Germany", code: "de", region: "Europe" },
  { name: "Greece", code: "gr", region: "Europe" },
  { name: "Hungary", code: "hu", region: "Europe" },
  { name: "Iceland", code: "is", region: "Europe" },
  { name: "Ireland", code: "ie", region: "Europe" },
  { name: "Italy", code: "it", region: "Europe" },
  { name: "Latvia", code: "lv", region: "Europe" },
  { name: "Liechtenstein", code: "li", region: "Europe" },
  { name: "Lithuania", code: "lt", region: "Europe" },
  { name: "Luxembourg", code: "lu", region: "Europe" },
  { name: "Malta", code: "mt", region: "Europe" },
  { name: "Moldova", code: "md", region: "Europe" },
  { name: "Monaco", code: "mc", region: "Europe" },
  { name: "Montenegro", code: "me", region: "Europe" },
  { name: "Netherlands", code: "nl", region: "Europe" },
  { name: "North Macedonia", code: "mk", region: "Europe" },
  { name: "Norway", code: "no", region: "Europe" },
  { name: "Poland", code: "pl", region: "Europe" },
  { name: "Portugal", code: "pt", region: "Europe" },
  { name: "Romania", code: "ro", region: "Europe" },
  { name: "Russia", code: "ru", region: "Europe/Asia" },
  { name: "San Marino", code: "sm", region: "Europe" },
  { name: "Serbia", code: "rs", region: "Europe" },
  { name: "Slovakia", code: "sk", region: "Europe" },
  { name: "Slovenia", code: "si", region: "Europe" },
  { name: "Spain", code: "es", region: "Europe" },
  { name: "Sweden", code: "se", region: "Europe" },
  { name: "Switzerland", code: "ch", region: "Europe" },
  { name: "Ukraine", code: "ua", region: "Europe" },
  { name: "United Kingdom", code: "gb", region: "Europe" },
  { name: "Vatican City", code: "va", region: "Europe" },
  { name: "Kosovo", code: "xk", region: "Europe" },

  // Oceania
  { name: "Australia", code: "au", region: "Oceania" },
  { name: "Fiji", code: "fj", region: "Oceania" },
  { name: "Kiribati", code: "ki", region: "Oceania" },
  { name: "Marshall Islands", code: "mh", region: "Oceania" },
  { name: "Micronesia", code: "fm", region: "Oceania" },
  { name: "Nauru", code: "nr", region: "Oceania" },
  { name: "New Zealand", code: "nz", region: "Oceania" },
  { name: "Palau", code: "pw", region: "Oceania" },
  { name: "Papua New Guinea", code: "pg", region: "Oceania" },
  { name: "Samoa", code: "ws", region: "Oceania" },
  { name: "Solomon Islands", code: "sb", region: "Oceania" },
  { name: "Tonga", code: "to", region: "Oceania" },
  { name: "Tuvalu", code: "tv", region: "Oceania" },
  { name: "Vanuatu", code: "vu", region: "Oceania" },

  // Other
  { name: "Taiwan", code: "tw", region: "Asia" },
  { name: "Palestine", code: "ps", region: "Asia" }
];

let questions = [];
let current = 0;
let score = 0;
let timeLeft = 30;
let timer;
let usedCountries = new Set();

const flagEl = document.getElementById("flag");
const optionsEl = document.querySelector(".options");
const timeEl = document.getElementById("time");

function shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
}

function startQuiz() {
    const count = +document.getElementById("count").value;
    const region = document.getElementById("region").value;
    current = 0;
    score = 0;


    let pool = region === "All"
        ? countries
        : countries.filter(c => c.region.includes(region));

    usedCountries.clear();
    questions = shuffle([...pool]).slice(
    0,
    Math.min(count, pool.length)
);

    document.getElementById("start").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");

    loadQuestion();
}

function loadQuestion() {
    if (current >= questions.length) return endQuiz();

    const correct = questions[current];
    flagEl.src = `flags/${correct.code}.svg`;

    clearInterval(timer);
    timeLeft = 30;
    timeEl.textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timeEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            current++;
            loadQuestion();
        }
    }, 1000);

    const options = shuffle([
        correct,
        ...shuffle(countries.filter(c => c.code !== correct.code)).slice(0,3)
    ]);

    optionsEl.innerHTML = "";
    options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt.name;
        btn.onclick = () => {
            if (opt.code === correct.code) score++;
            current++;
            loadQuestion();
        };
        optionsEl.appendChild(btn);
    });
}

function endQuiz() {
    clearInterval(timer);
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("score").textContent =
        `${score} / ${questions.length}`;
}
const videoButtons = document.querySelectorAll('.video-thumb');

if (videoButtons.length > 0) {
  const overlay = document.createElement('div');
  overlay.className = 'video-overlay';
  overlay.innerHTML = `
    <div class="video-popup">
      <button class="video-close" type="button" aria-label="Schließen">×</button>
      <div class="player-header">
        <h2 id="playerTitle">Video</h2>
        <p id="playerInfo">Klicke auf ein Video, um es direkt abzuspielen.</p>
      </div>
      <video id="videoPlayer" class="video-player" controls playsinline preload="metadata"></video>
    </div>
  `;

  document.body.appendChild(overlay);

  const player = document.getElementById('videoPlayer');
  const playerTitle = document.getElementById('playerTitle');
  const playerInfo = document.getElementById('playerInfo');
  const closeBtn = document.querySelector('.video-close');

  const videoData = [
    {
       title: 'fixtube✅',
      src: 'videos/fixtube vids/Und_mach_jz_wie_orogramierer_a.mp4',
    },
    {
      title: '👤 eric.e3',
      src: 'videos/fixtube vids/9eb41565a11af335568dae0cd1494bae.mp4',
    },
    {
      title: '👤 ronaldo_fan099',
      src: 'https://www.w3schools.com/html/movie.mp4',
    },
    {
      title: '👤 edit,king66',
      src: 'videos/fixtube vids/2d262f030f33b35e805b5f9e5ac9e4dc.mp4',
    },
    {
      title: '👤 max__duhund',
      src: 'videos/fixtube vids/bef3b7d7c99a203026033d7d24d3c348.mp4',
    },
    {
      title: '👤 leck099',
      src: 'videos/fixtube vids/4ef05b2934947cc7cb28a1fb6cf1c30c.mp4',
    },
    {
      title: '👤 mundms32',
      src: 'videos/fixtube vids/63953d7b36d38aee738c6c25bb9fd617.mp4',
    },
    {
      title: '👤 jexxen7886',
      src: 'videos/fixtube vids/16c47ccff67c5382993f421ff749f982.mp4',
    },
    {
      title: '👤 dudh_22',
      src: 'videos/fixtube vids/Screen_Recording_20260507_071652_TikTok.mp4',
    },
    {
      title: '👤 dj90',
      src: 'videos/fixtube vids/e38070588a4449870c8413887df5e2b2.mp4',
    },
    {
      title: '👤 db766',
      src: 'videos/fixtube vids/4a9f4083176f30d05a993454d1b1daf5.mp4',
    },
    {
      title:  '👤 leoo ist fett55',
      src: 'videos/fixtube vids/68db5f045f8d4bf4c9744d1c7f98f750.mp4',
    }
  ];

  const openPlayer = (data) => {
    if (!data || !player) return;

    playerTitle.textContent = data.title;
    playerInfo.textContent = data.info;
    player.src = data.src;
    player.poster = data.poster;
    player.load();
    overlay.classList.add('open');
    player.play().catch(() => {});
  };

  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('open');
    player.pause();
  });

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      overlay.classList.remove('open');
      player.pause();
    }
  });

  videoButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const data = videoData[index];
      openPlayer(data);
    });
  });
}
//viedeo player

// das ist für farben wecheln
const button = document.getElementById('theme-toggle');

button.addEventListener('click', () => {
document.body.classList.toggle('dark-theme')
})
// das ist für farben wecheln

// user zahlen hoch runter
const span = document.getElementById('user-count');

let aktuelleUser = 4000000;

setInterval(() => {
  let change = Math.floor(Math.random() * 10.000) -2000;


  aktuelleUser = aktuelleUser + change;
  span.innerText = aktuelleUser;
}, 3000)
//user zahlen hoch runter

// pop up für news
const popup = document.querySelector(".pop-up");

const closeButton = document. querySelector("#close-button");

closeButton.addEventListener("click", function () {
popup.style.display = "none";
});
// pop up für news

const searchInput = document.getElementById("siteSearch") || document.getElementById("streamSearch");
const suggestionsBox = document.getElementById("search-suggestions");

if (searchInput && suggestionsBox) {
  const searchTopics = [
    "trump rastet aus",
    "mein video",
    "spiderman edit",
    "call of duty gameplay",
    "ronaldo ist der goat",
    "fortnite zocken live",
    "live at tokio",
    "musik livestream",
    "bär gefilmt",
    "ai videos"
  ];

  const showSuggestions = (value = "") => {
    const query = value.toLowerCase().trim();
    const filtered = searchTopics.filter((item) => item.toLowerCase().includes(query));
    const pool = filtered.length > 0 ? filtered : searchTopics;
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const visible = shuffled.slice(0, 5);

    suggestionsBox.innerHTML = visible
      .map((item) => `<button class="search-suggestion" type="button">${item}</button>`)
      .join("");

    suggestionsBox.classList.toggle("active", visible.length > 0);
  };

  searchInput.addEventListener("focus", () => showSuggestions(searchInput.value));
  searchInput.addEventListener("click", () => showSuggestions(searchInput.value));
  searchInput.addEventListener("input", (event) => showSuggestions(event.target.value));

  suggestionsBox.addEventListener("click", (event) => {
    const button = event.target.closest(".search-suggestion");
    if (!button) return;
    searchInput.value = button.textContent.trim();
    suggestionsBox.classList.remove("active");
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".search-bar")) {
      suggestionsBox.classList.remove("active");
    }
  });
}

// sorgt dafür dass mann automatisch ohne zu scrollen nach oben kommt
const nachOben = document.getElementById("nach-oben-button")

nachOben.addEventListener("click", function () {

  window.scrollTo(0, 0)
})    
// sorgt dafür dass mann automatisch ohne zu scrollen nach oben kommt

//login system
const anmeldeButton = document.getElementById("anmelde-button");
const registrierenButton = document.getElementById("registrieren-button");
const userInfo = document.getElementById("user-info");
const usernameSpan = document.getElementById("username");

anmeldeButton.addEventListener("click", () => {
  const username = prompt("melde dich an:");
  if (username) {
    usernameSpan.textContent = username;
    userInfo.style.display = "block";
    anmeldeButton.style.display = "none";
    document.body.appendChild(logoutButton);
  }
});

registrierenButton.addEventListener("click", () => {
  const username = prompt("zeit sich wieder bei uns zu regestrieren:🥳");
  if (username) {
    usernameSpan.textContent = username;
    userInfo.style.display = "block";
    anmeldeButton.style.display = "none";
  }
});

const logoutButton = document.getElementById("logout-button");
logoutButton.addEventListener("click", logout);

function logout() {
  usernameSpan.textContent = "logout";
  userInfo.style.display = "none";
  anmeldeButton.style.display = "inline-block";
}
//login system







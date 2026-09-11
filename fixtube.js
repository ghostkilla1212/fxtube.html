const videoButtons = document.querySelectorAll('.video-thumb');

if (videoButtons.length > 0) {
  const overlay = document.createElement('div');
  overlay.className = 'video-overlay';
  overlay.innerHTML = `
    <div class="video-popup">
      <button class="video-close" type="button" aria-label="Close">×</button>
      <div class="player-header">
        <h2 id="playerTitle">Video</h2>
        <p id="playerInfo">Click a video to play it directly.</p>
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
      title:  '👤 leoo is fat55',
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
// Video player

// Theme switcher
const button = document.getElementById('theme-toggle');

  button.addEventListener('click', () => {
document.body.classList.toggle('dark-theme')
})
// Theme switcher

// Active user count
const span = document.getElementById('user-count');

let aktuelleUser = 4000000;

  setInterval(() => {
  let change = Math.floor(Math.random() * 10.000) -2000;


  aktuelleUser = aktuelleUser + change;
  span.innerText = aktuelleUser;
}, 3000)
// Active user count

// News pop-up
const popup = document.querySelector(".pop-up");

const closeButton = document. querySelector("#close-button");

  closeButton.addEventListener("click", function () {
    popup.style.display = "none";
  });
// News pop-up

const searchInput = document.getElementById("siteSearch") || document.getElementById("streamSearch");
const suggestionsBox = document.getElementById("search-suggestions");

if (searchInput && suggestionsBox) {
  const searchTopics = [
    "Trump loses it",
    "My video",
    "spiderman edit",
    "call of duty gameplay",
    "Ronaldo is the GOAT",
    "fortnite zocken live",
    "live at tokio",
    "musik livestream",
    "filmed a bear",
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

// Scroll to the top of the page
const nachOben = document.getElementById("nach-oben-button")

if (nachOben) {
  nachOben.addEventListener("click", function () {
    window.scrollTo(0, 0)
  })
}
// Scroll to the top of the page

// Sign-in system
const anmeldeButton = document.getElementById("anmelde-button");
const registrierenButton = document.getElementById("registrieren-button");
const userInfo = document.getElementById("user-info");
const usernameSpan = document.getElementById("username");

anmeldeButton.addEventListener("click", () => {
  const username = prompt("Sign in:");
  if (username) {
    usernameSpan.textContent = username;
    userInfo.style.display = "block";
    anmeldeButton.style.display = "none";
    document.body.appendChild(logoutButton);
  }
});

registrierenButton.addEventListener("click", () => {
  const username = prompt("Time to register with us:🥳");
  if (username) {
    usernameSpan.textContent = username;
    userInfo.style.display = "block";
    anmeldeButton.style.display = "none";
  }
});

const logoutButton = document.getElementById("logout-button");
  logoutButton.addEventListener("click", logout);

function logout() {
  usernameSpan.textContent = "Signed out";
    userInfo.style.display = "none";
    anmeldeButton.style.display = "inline-block";
  }
// Sign-in system

// Sidebar message rotation
usernameSpan.textContent = "here today";
document.getElementById("text-message").textContent = "FxTube is addictive";
setTimeout(() => {
  document.getElementById("text-message").textContent = "Enjoy FxTube";
  setTimeout(() => {
    document.getElementById("text-message").textContent = "What are you watching on FxTube?";
  }, 5000);
  setTimeout(() => {
    document.getElementById("text-message").textContent = "Still watching? Time for a break, haha";
  }, 10000);
  setTimeout(() => {
    document.getElementById("text-message").textContent = "Have fun, I will stop bothering you now, haha";
  }, 15000);
}, 5000);
// Sidebar message rotation

// Sidebar navigation
const sidebar = document.getElementById("mySidenav");
const openSidebarButton = document.querySelector('[data-action="open-sidebar"]');
const closeSidebarButton = document.querySelector('[data-action="close-sidebar"]');
const navigationLinks = document.querySelectorAll("[data-link]");
const shopLink = document.querySelector('[data-action="show-shop"]');

function navigateTo(target) {
  window.location.assign(target);
}

function activateOnEnter(element, action) {
  element.addEventListener("click", action);
  element.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();
    action();
  });
}

function openNav() {
  sidebar.classList.add("open");
}

function closeNav() {
  sidebar.classList.remove("open");
}

openSidebarButton.addEventListener("click", openNav);
activateOnEnter(closeSidebarButton, closeNav);

navigationLinks.forEach((link) => {
  activateOnEnter(link, () => {
    navigateTo(link.dataset.link);
  });
});

activateOnEnter(shopLink, () => {
  alert("The FxTube Shop is not available yet.");
});


// Story container
const container = document.querySelector(".story-container");

// Store sample user statuses
const userStatus = {
  babydoll: "active now",
  derbeste: "offline",
  tradingro: "online 5 minutes ago"
};

// Category buttons
const gamingButton = document.getElementById('gamingButton');

gamingButton.addEventListener('click', function() {
  window.open('http://127.0.0.1:5501/fixtube.html', '_blank');

});

const newsButton = document.getElementById('newsButton');

newsButton.addEventListener('click', function() {
  window.open('http://127.0.0.1:5501/fixtube.html', '_blank');

});

const lifeButton = document.getElementById('lifeButton');

lifeButton.addEventListener('click', function() {
  window.open('http://127.0.0.1:5501/fixtube.html', '_blank');

});

const prankButton = document.getElementById('prankButton');

prankButton.addEventListener('click', function() {
  window.open('http://127.0.0.1:5501/fixtube.html', '_blank');

});

const podButton = document.getElementById('podButton');

podButton.addEventListener('click', function() {
  window.open('http://127.0.0.1:5501/fixtube.html', '_blank');

});

const reiseButton = document.getElementById('reiseButton');

reiseButton.addEventListener('click', function() {
  window.open('http://127.0.0.1:5501/fixtube.html', '_blank');

});

const alleButton = document.getElementById('alleButton');

alleButton.addEventListener('click', function() {
  window.open('http://127.0.0.1:5501/fixtube.html', '_blank');

});
// Category buttons


// Close the social card
document.getElementById("schliesen");

  schliesen.addEventListener("click", function () {
const topbarSocalCard = document.querySelector(".topbar-socal-card")
topbarSocalCard .style.display = "none"
})
// Close the social card

// Page navigation buttons
const ersterButton = document.getElementById('ersterButton');

ersterButton.addEventListener('click', function() {
  window.open('http://127.0.0.1:5501/erster%20button%20seite.html', '_blank');

});

const zweiterButton = document.getElementById('zweiterButton');

zweiterButton.addEventListener('click', function() {
  window.open('http://127.0.0.1:5501/erster%20button%20seite.html', '_blank');

});

const dritterButton = document.getElementById('dritterButton');

dritterButton.addEventListener('click', function() {
  window.open('http://127.0.0.1:5501/erster%20button%20seite.html', '_blank');

});

const vierterButton = document.getElementById('vierterButton');

vierterButton.addEventListener('click', function() {
  window.open('http://127.0.0.1:5501/erster%20button%20seite.html', '_blank');

});

const funfterButton = document.getElementById('funfterButton');

funfterButton.addEventListener('click', function() {
  window.open('http://127.0.0.1:5501/erster%20button%20seite.html', '_blank');

});

const sechterButton = document.getElementById('sechterButton');

sechterButton.addEventListener('click', function() {
  window.open('http://127.0.0.1:5501/erster%20button%20seite.html', '_blank');

});

const siebterButton = document.getElementById('siebterButton');

siebterButton.addEventListener('click', function() {
  window.open('http://127.0.0.1:5501/erster%20button%20seite.html', '_blank');

});

const achterButton = document.getElementById('achterButton');

achterButton.addEventListener('click', function() {
  window.open('http://127.0.0.1:5501/erster%20button%20seite.html', '_blank');

});

const letzterButton = document.getElementById('letzterButton');

letzterButton.addEventListener('click', function() {
  window.open('http://127.0.0.1:5501/erster%20button%20seite.html', '_blank');

});

// Page navigation buttons

// Support report button
const sendButton = document.getElementById("sendButton");

  sendButton.addEventListener("click", function() {
  alert("Support has been contacted")
})
// Support report button

const aboutMe = document.getElementById('aboutMe');

  aboutMe.addEventListener('click', function() {
  window.open('http://127.0.0.1:5501/erster%20button%20seite.html', '_blank');

});
















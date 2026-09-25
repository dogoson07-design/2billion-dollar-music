const releases = [
  {
    title: "Mapesa",
    artist: "Dogo Son ft Baddie 257 & Sefoboy",
    status: "Released"
  },
  {
    title: "Today",
    artist: "Dogo Son",
    status: "Released"
  },
  {
    title: "Attention",
    artist: "Mbili Mbaya",
    status: "Released"
  },
  {
    title: "Tugono Ting’eyo",
    artist: "Sefoboy ft Kushman",
    status: "Released"
  }
];

const artists = [
  "Dogo Son",
  "Sefoboy",
  "Mbili Mbaya",
  "Baddie 257",
  "Kushman"
];

document.querySelector("#tracks").innerHTML = releases.map((song, i) => `
  <article class="track">
    <div class="cover">2B$</div>
    <h3>${song.title}</h3>
    <div class="meta">${song.artist}</div>
    <small>${song.status}</small>
    <button class="play" data-i="${i}">▶ Play</button>
    <button class="share" data-title="${song.title}" data-artist="${song.artist}">
      Share
    </button>
  </article>
`).join("");

document.querySelector("#trackCount").textContent =
  `${releases.length} releases`;

document.querySelector("#artistsGrid").innerHTML = artists.map(artist => `
  <div class="artist">
    <strong>${artist}</strong>
    <p>2Billion Dollar Music</p>
    <button class="bookArtist" data-artist="${artist}">
      Book Artist
    </button>
  </div>
`).join("");

/* MUSIC PLAYER */
document.querySelectorAll(".play").forEach(button => {
  button.onclick = () => {
    const song = releases[button.dataset.i];

    alert(
      `${song.title}\n\n` +
      `${song.artist}\n\n` +
      `Audio player ready. Real audio files will be connected next.`
    );
  };
});

/* SHARE RELEASE */
document.querySelectorAll(".share").forEach(button => {
  button.onclick = async () => {
    const title = button.dataset.title;
    const artist = button.dataset.artist;

    const text =
      `Listen to ${title} by ${artist} on 2Billion Dollar Music 🎵`;

    if (navigator.share) {
      await navigator.share({
        title: title,
        text: text,
        url: window.location.href
      });
    } else {
      await navigator.clipboard.writeText(
        `${text} ${window.location.href}`
      );
      alert("Share link copied.");
    }
  };
});

/* BOOK ARTIST */
document.querySelectorAll(".bookArtist").forEach(button => {
  button.onclick = () => {
    const artist = button.dataset.artist;

    const message =
      `Hello 2Billion Dollar Music,%0A%0A` +
      `I would like to book ${artist}.%0A%0A` +
      `Name:%0A` +
      `Event:%0A` +
      `Date:%0A` +
      `Location:%0A` +
      `Service:%0A`;

    window.location.href =
      `https://wa.me/?text=${message}`;
  };
});

/* MOBILE MENU */
const menu = document.querySelector("#menu");

if (menu) {
  menu.onclick = () => {
    document.querySelector(".nav")?.classList.toggle("open");
  };
}

/* INSTALL APP */
let deferredPrompt;

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();

  deferredPrompt = event;

  const actions = document.querySelector(".actions");

  if (!actions) return;

  const button = document.createElement("button");

  button.className = "btn primary install-btn";
  button.textContent = "Install App";

  button.onclick = async () => {
    deferredPrompt.prompt();

    await deferredPrompt.userChoice;

    deferredPrompt = null;
    button.remove();
  };

  actions.appendChild(button);
});

/* DISTRIBUTION SUBMISSION */
window.submitRelease = function () {
  const message =
    `Hello 2Billion Dollar Music,%0A%0A` +
    `I want to submit my music for distribution.%0A%0A` +
    `Artist Name:%0A` +
    `Song Title:%0A` +
    `Genre:%0A` +
    `Release Date:%0A%0A` +
    `Please send me the submission fee and requirements.`;

  window.location.href =
    `https://wa.me/?text=${message}`;
};

/* STUDIO BOOKING */
window.bookStudio = function () {
  const message =
    `Hello 2Billion Dollar Music,%0A%0A` +
    `I want to book 2B$ Studio.%0A%0A` +
    `Name:%0A` +
    `Service:%0A` +
    `Preferred Date:%0A` +
    `Preferred Time:%0A`;

  window.location.href =
    `https://wa.me/?text=${message}`;
};

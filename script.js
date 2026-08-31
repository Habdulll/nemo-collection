// ===================== PLACEHOLDER DATA =====================
// Swap "img" with your real artwork file paths, and edit the text freely.
const artworks = [
  {
    artist: "Original Design",
    x: "https://x.com/heyitsnemo_",
    img: "/images/character-original.png",
    desc: "The original Nemo — the base design every artist in this collection reinterpreted. Clean vector line work, flat color fills, round glasses, and that unmistakable pink hoodie.",
  },
  {
    artist: "Daniel Obute",
    x: "https://x.com/danielgenius81",
    color: "linear-gradient(135deg, #FFAECD, #8FDCF7)",
    img: "/images/obute.jpg",
    desc: "A polished anime-inspired interpretation of Nemo, using soft painterly rendering, pastel colors, and expressive character posing. The oversized glasses, blue hair, pink hoodie, and green skin are retained while giving the character a more refined, youthful anime aesthetic.",
  },
  {
    artist: "XENFT46",
    x: "https://x.com/XENFT46",
    color: "linear-gradient(135deg, #FFAECD, #A8F0C6)",
    img: "/images/xen.jpg",
    desc: "A more energetic street-style interpretation of Nemo, featuring the character riding a BMX through a colorful urban environment. Graffiti, warm sunlight, exaggerated perspective, and expressive posing give the piece a youthful, rebellious street-art feel.",
  },
  {
    artist: "Isiramen Gideon",
    x: "https://x.com/Isiramen_Gideon",
    color: "linear-gradient(135deg, #A8F0C6, #FFAECD)",
    img: "images/gideon.jpg",
    desc: "A vibrant, whimsical take on Nemo, placing the character in a surreal cosmic world filled with colorful creatures, stars, planets, and dreamlike elements. The artwork uses playful cartoon linework, exaggerated proportions, and highly saturated purple, blue, and pink tones.",
  },
  {
    artist: "Gangstalita28",
    x: "https://x.com/Gangstalita28",
    color: "linear-gradient(135deg, #8FDCF7, #A8F0C6)",
    img: "/images/Gangsta.jpg",
    desc: "",
  },
  {
    artist: "kankaunglay",
    x: "https://x.com/kankaunglay",
    color: "linear-gradient(135deg, #A8F0C6, #8FDCF7)",
    img: "/images/kankau.jpg",
    desc: "This artwork pushes Nemo's visual identity into a highly psychedelic direction, surrounding the character with colorful flowers, abstract shapes, and intricate patterns. Heavy black outlines, vibrant contrasting colors, and decorative textures create a bold pop-art / psychedelic aesthetic.",
  },
  {
    artist: "Big Sam",
    x: "https://x.com/BigSamNerd01",
    color: "linear-gradient(135deg, #FFAECD, #8FDCF7)",
    img: "/images/Bigsam.jpg",
    desc: "A more grounded, contemporary interpretation of Nemo, placing him in a graffiti-covered environment with a relaxed streetwear pose. The muted lighting, textured background, oversized clothing, and painterly character rendering give it a stylish urban-art and editorial feel.",
  },
  {
    artist: "Mr Custom",
    x: "https://x.com/MR_CUSTOMM",
    color: "linear-gradient(135deg, #FFAECD, #8FDCF7)",
    img: "/images/custom.jpg",
    desc: "",
  },
  {
    artist: "Danvinci",
    x: "https://x.com/DanVinci16",
    color: "linear-gradient(135deg, #FFAECD, #8FDCF7)",
    img: "/images/dan1.jpg",
    desc: "",
  },
  {
    artist: "Danvinci",
    x: "https://x.com/DanVinci16",
    color: "linear-gradient(135deg, #FFAECD, #8FDCF7)",
    img: "/images/dan2.jpg",
    desc: "",
  },
  {
    artist: "Yo",
    x: "https://x.com/CreativeYo_",
    color: "linear-gradient(135deg, #FFAECD, #8FDCF7)",
    img: "/images/yo.jpg",
    desc: "",
  },
  {
    artist: "Alao Shola",
    x: "https://x.com/alao_shola35960",
    color: "linear-gradient(135deg, #FFAECD, #8FDCF7)",
    img: "/images/alao.jpg",
    desc: "",
  },
  {
    artist: "Qweeb",
    x: "https://x.com/qweebverse",
    color: "linear-gradient(135deg, #FFAECD, #8FDCF7)",
    img: "/images/qweeb.jpg",
    desc: "",
  },
  {
    artist: "Layo",
    x: "https://x.com/little_ms_xtra",
    color: "linear-gradient(135deg, #FFAECD, #8FDCF7)",
    img: "/images/layo.jpg",
    desc: "",
  },
  {
    artist: "Kazuma",
    x: "https://x.com/kazumasan0115",
    color: "linear-gradient(135deg, #FFAECD, #8FDCF7)",
    img: "/images/kazuma.jpg",
    desc: "",
  },
  {
    artist: "Temple",
    x: "https://x.com/Templ3rt",
    color: "linear-gradient(135deg, #A8F0C6, #8FDCF7)",
    img: "/images/Templ3rt.jpg",
    desc: "A highly detailed fantasy/anime-inspired illustration that reimagines Nemo as an adventurer caught in a magical forest. The glowing environment, dynamic perspective, intricate armor, magical effects, and dramatic lighting create a dreamlike RPG/fantasy atmosphere, making the character feel like part of an epic adventure.",
  },
  {
    artist: "Alchemist",
    x: "https://x.com/D_alchemist",
    color: "linear-gradient(135deg, #A8F0C6, #8FDCF7)",
    img: "/images/alchemist.jpg",
    desc: "",
  },
  {
    artist: "Ink To The Soul",
    x: "https://x.com/Ink_to_the_soul",
    color: "linear-gradient(135deg, #A8F0C6, #8FDCF7)",
    img: "/images/ink.jpg",
    desc: "",
  },
  {
    artist: "soiakanjii",
    x: "https://x.com/soiakanjii",
    color: "linear-gradient(135deg, #FFAECD, #8FDCF7)",
    img: "/images/soi.jpg",
    desc: "A colorful stylized cartoon illustration showing Nemo casually relaxing inside a shopping cart while browsing a supermarket. The pastel color palette, soft lighting, expressive character design, and playful composition create a lighthearted slice-of-life feel, giving the NFT character a much more casual and humorous personality.",
  },
  {
    artist: "Quack",
    x: "https://x.com/Quack_aa",
    color: "linear-gradient(135deg, #8FDCF7, #A8F0C6)",
    img: "/images/quack.jpg",
    desc: "A vibrant comic-book/cel-shaded illustration featuring Nemo lounging above a city at night, surrounded by flying cash. The bold black outlines, saturated pink-and-purple palette, dramatic lighting, and exaggerated pose give it a playful urban/street-art energy, while the floating money adds a flashy, carefree collector aesthetic.",
  },
  {
    artist: "0xUgliest",
    x: "https://x.com/0xUgliest",
    color: "linear-gradient(135deg, #FFAECD, #A8F0C6)",
    img: "/images/Ugliest.jpg",
    desc: "",
  },
  {
    artist: "Manifest",
    x: "https://x.com/Manifest_Artt",
    color: "linear-gradient(135deg, #A8F0C6, #8FDCF7)",
    img: "/images/Manifest.jpg",
    desc: "",
  },
  {
    artist: "arys",
    x: "https://x.com/arys_nft",
    color: "linear-gradient(135deg, #FFAECD, #A8F0C6)",
    img: "/images/arys.jpg",
    desc: "",
  },
  {
    artist: "Koi Peter",
    x: "https://x.com/Koi6669Peter",
    color: "linear-gradient(135deg, #A8F0C6, #8FDCF7)",
    img: "/images/koi.jpg",
    desc: "",
  },
  {
    artist: "TJ",
    x: "https://x.com/tjthecreator_",
    color: "linear-gradient(135deg, #A8F0C6, #8FDCF7)",
    img: "/images/tj.jpg",
    desc: "",
  },
  {
    artist: "forever",
    x: "https://x.com/forevervneasy",
    color: "linear-gradient(135deg, #A8F0C6, #8FDCF7)",
    img: "/images/forever.jpg",
    desc: "",
  },
  {
    artist: "daveee",
    x: "https://x.com/_therealdavee",
    color: "linear-gradient(135deg, #A8F0C6, #8FDCF7)",
    img: "/images/dave.jpg",
    desc: "",
  },
  {
    artist: "Beebs",
    x: "https://x.com/Beebs1s",
    color: "linear-gradient(135deg, #A8F0C6, #8FDCF7)",
    img: "/images/Beebs.jpg",
    desc: "",
  },
  {
    artist: "clarkson",
    x: "https://x.com/Clarkson_Es",
    color: "linear-gradient(135deg, #A8F0C6, #8FDCF7)",
    img: "/images/clarkson.jpg",
    desc: "",
  },
  {
    artist: "gabzilla",
    x: "https://x.com/gabzilla_eth",
    color: "linear-gradient(135deg, #A8F0C6, #8FDCF7)",
    img: "/images/gab.jpg",
    desc: "",
  },
  {
    artist: "Sirmeekay",
    x: "https://x.com/Sirmee_kay",
    color: "linear-gradient(135deg, #A8F0C6, #8FDCF7)",
    img: "/images/sirmeekay.jpg",
    desc: "This version reimagines Nemo in an underwater fantasy setting, surrounded by coral, sea creatures, bubbles, and vibrant ocean colors. It combines clean cartoon illustration with bright digital painting, creating a dynamic and adventurous atmosphere.",
  },
  {
    artist: "Monaki",
    x: "https://x.com/Monarq101",
    color: "linear-gradient(135deg, #A8F0C6, #8FDCF7)",
    img: "/images/Monaki.jpg",
    desc: "",
  },
  {
    artist: "Kakashi",
    x: "https://x.com/0x_kakashi1",
    color: "linear-gradient(135deg, #A8F0C6, #8FDCF7)",
    img: "/images/kakashi.png",
    desc: "",
  },
  {
    artist: "Jimagination",
    x: "https://x.com/Jimagination_os",
    color: "linear-gradient(135deg, #A8F0C6, #8FDCF7)",
    img: "/images/jim.gif",
    desc: "",
  },
  {
    artist: "dockassia",
    x: "https://x.com/dockassiamg",
    color: "linear-gradient(135deg, #A8F0C6, #FFAECD)",
    img: "/images/dockass.jpg",
    desc: "",
  },
];

// Reusable X (Twitter) logo icon
const X_ICON_SVG = `<svg class="x-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;

// ===================== RENDER GRID =====================
const grid = document.getElementById('grid');

artworks.forEach((art, i) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `View ${art.artist}'s variant`);

  const mediaHTML = art.img
    ? `<img src="${art.img}" alt="${art.artist}'s version of Nemo" loading="lazy">`
    : `<div class="placeholder-fill" style="aspect-ratio:${art.ratio || '1 / 1'};background:${art.color}"></div>`;

  card.innerHTML = `
    <div class="card-media">${mediaHTML}</div>
    <div class="card-body">
      <span class="card-num">VARIANT ${String(i + 1).padStart(2, '0')}</span>
      <h3 class="card-artist">${art.artist}</h3>
      <a class="card-x" href="${art.x}" target="_blank" rel="noopener noreferrer" aria-label="${art.artist} on X">
        ${X_ICON_SVG}<span>View on X</span>
      </a>
    </div>
  `;

  // Stop the X link from also triggering the card's own click-to-open-modal
  card.querySelector('.card-x').addEventListener('click', (e) => e.stopPropagation());

  card.addEventListener('click', () => openModal(i));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(i); }
  });

  grid.appendChild(card);

  // Real images load async — their true height isn't known until they load,
  // so re-measure that one card the moment its image is ready.
  const imgEl = card.querySelector('img');
  if (imgEl) {
    if (imgEl.complete) {
      layoutCard(card);
    } else {
      imgEl.addEventListener('load', () => layoutCard(card));
    }
  }
});

// ===================== MASONRY LAYOUT =====================
// Each card is given a CSS grid-row-end span that matches its own
// rendered height (image + text), so cards of any dimension fit
// without cropping and without gaps between rows.
function getGridMetrics() {
  const styles = getComputedStyle(grid);
  const rowHeight = parseFloat(styles.getPropertyValue('grid-auto-rows')) || 8;
  const rowGap = parseFloat(styles.getPropertyValue('row-gap')) || 0;
  return { rowHeight, rowGap };
}

function layoutCard(card) {
  const { rowHeight, rowGap } = getGridMetrics();
  const media = card.querySelector('.card-media');
  const body = card.querySelector('.card-body');
  const contentHeight = media.getBoundingClientRect().height + body.getBoundingClientRect().height;
  const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
  card.style.gridRowEnd = `span ${rowSpan}`;
}

function layoutAllCards() {
  document.querySelectorAll('.card').forEach(layoutCard);
}

// Recalculate on load (fonts/images settling) and on resize (column width
// changes, so image height changes too, since width drives the aspect ratio).
window.addEventListener('load', layoutAllCards);

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(layoutAllCards, 120);
});

// Initial pass for the placeholder cards (ratio-based, no image to wait on)
layoutAllCards();

// ===================== MODAL =====================
const backdrop = document.getElementById('modalBackdrop');
const modalImg = document.getElementById('modalImg');
const modalNum = document.getElementById('modalNum');
const modalArtist = document.getElementById('modalArtist');
const modalX = document.getElementById('modalX');
const modalDesc = document.getElementById('modalDesc');
const modalClose = document.getElementById('modalClose');
let lastFocused = null;

function openModal(i) {
  const art = artworks[i];
  lastFocused = document.activeElement;

  if (art.img) {
    modalImg.src = art.img;
    modalImg.style.display = 'block';
    modalImg.parentElement.style.background = '';
  } else {
    modalImg.style.display = 'none';
    modalImg.parentElement.style.background = art.color;
  }

  modalNum.textContent = `VARIANT ${String(i + 1).padStart(2, '0')}`;
  modalArtist.textContent = art.artist;
  modalX.href = art.x;
  modalX.innerHTML = `${X_ICON_SVG}<span>View on X</span>`;
  modalDesc.textContent = art.desc;

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}

modalClose.addEventListener('click', closeModal);
backdrop.addEventListener('click', (e) => {
  if (e.target === backdrop) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && backdrop.classList.contains('open')) closeModal();
});

// ===================== THEME TOGGLE =====================
const root = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');
const toggleIcon = document.getElementById('toggleIcon');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  toggleIcon.textContent = theme === 'dark' ? '☾' : '☀';
}

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(prefersDark ? 'dark' : 'light');

toggleBtn.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

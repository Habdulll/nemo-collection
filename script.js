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
const grid = document.getElementById("grid");

artworks.forEach((art, i) => {
  const card = document.createElement("div");
  card.className = "card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `View ${art.artist}'s variant`);

  const mediaHTML = art.img
    ? `<img src="${art.img}" alt="${art.artist}'s version of Nemo" loading="lazy">`
    : `<div class="placeholder-fill" style="aspect-ratio:${art.ratio || "1 / 1"};background:${art.color}"></div>`;

  card.innerHTML = `
    <div class="card-media">${mediaHTML}</div>
    <div class="card-body">
      <span class="card-num">VARIANT ${String(i + 1).padStart(2, "0")}</span>
      <h3 class="card-artist">${art.artist}</h3>
      <a class="card-x" href="${art.x}" target="_blank" rel="noopener noreferrer" aria-label="${art.artist} on X">
        ${X_ICON_SVG}<span>View on X</span>
      </a>
    </div>
  `;

  // Stop the X link from also triggering the card's own click-to-open-modal
  card
    .querySelector(".card-x")
    .addEventListener("click", (e) => e.stopPropagation());

  card.addEventListener("click", () => openModal(i));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(i);
    }
  });

  grid.appendChild(card);

  // Real images load async — their true height isn't known until they load,
  // so re-measure that one card the moment its image is ready.
  const imgEl = card.querySelector("img");
  if (imgEl) {
    if (imgEl.complete) {
      layoutCard(card);
    } else {
      imgEl.addEventListener("load", () => layoutCard(card));
    }
  }
});

// ===================== MASONRY LAYOUT =====================
// Each card is given a CSS grid-row-end span that matches its own
// rendered height (image + text), so cards of any dimension fit
// without cropping and without gaps between rows.
function getGridMetrics() {
  const styles = getComputedStyle(grid);
  const rowHeight = parseFloat(styles.getPropertyValue("grid-auto-rows")) || 8;
  const rowGap = parseFloat(styles.getPropertyValue("row-gap")) || 0;
  return { rowHeight, rowGap };
}

function layoutCard(card) {
  const { rowHeight, rowGap } = getGridMetrics();
  const media = card.querySelector(".card-media");
  const body = card.querySelector(".card-body");
  const contentHeight =
    media.getBoundingClientRect().height + body.getBoundingClientRect().height;
  const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
  card.style.gridRowEnd = `span ${rowSpan}`;
}

function layoutAllCards() {
  document.querySelectorAll(".card").forEach(layoutCard);
}

// Recalculate on load (fonts/images settling) and on resize (column width
// changes, so image height changes too, since width drives the aspect ratio).
window.addEventListener("load", layoutAllCards);

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(layoutAllCards, 120);
});

// Initial pass for the placeholder cards (ratio-based, no image to wait on)
layoutAllCards();

// ===================== MODAL =====================
const backdrop = document.getElementById("modalBackdrop");
const modalImg = document.getElementById("modalImg");
const modalNum = document.getElementById("modalNum");
const modalArtist = document.getElementById("modalArtist");
const modalX = document.getElementById("modalX");
const modalDesc = document.getElementById("modalDesc");
const modalClose = document.getElementById("modalClose");
let lastFocused = null;

function openModal(i) {
  const art = artworks[i];
  lastFocused = document.activeElement;

  if (art.img) {
    modalImg.src = art.img;
    modalImg.style.display = "block";
    modalImg.parentElement.style.background = "";
  } else {
    modalImg.style.display = "none";
    modalImg.parentElement.style.background = art.color;
  }

  modalNum.textContent = `VARIANT ${String(i + 1).padStart(2, "0")}`;
  modalArtist.textContent = art.artist;
  modalX.href = art.x;
  modalX.innerHTML = `${X_ICON_SVG}<span>View on X</span>`;
  modalDesc.textContent = art.desc;

  backdrop.classList.add("open");
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  backdrop.classList.remove("open");
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

modalClose.addEventListener("click", closeModal);
backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && backdrop.classList.contains("open")) closeModal();
});

// ===================== THEME TOGGLE =====================
const root = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");
const toggleIcon = document.getElementById("toggleIcon");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  toggleIcon.textContent = theme === "dark" ? "☾" : "☀";
}

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(prefersDark ? "dark" : "light");

toggleBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

const collageBtn = document.getElementById("collageBtn");
const collageBackdrop = document.getElementById("collageBackdrop");
const collageClose = document.getElementById("collageClose");
const collageCanvas = document.getElementById("collageCanvas");
const collageStatus = document.getElementById("collageStatus");
const collageDownload = document.getElementById("collageDownload");

function cssVar(name) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
}

function parseGradientColors(gradientStr) {
  const matches = gradientStr.match(/#([0-9a-fA-F]{3,8})/g);
  return matches && matches.length >= 2 ? matches : ["#cccccc", "#eeeeee"];
}

function drawRoundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// Crops an image to "cover" a square cell, so mixed image dimensions fill evenly
function drawCover(ctx, img, x, y, size) {
  const sw = img.naturalWidth,
    sh = img.naturalHeight;
  if (!sw || !sh) return;
  const scale = Math.max(size / sw, size / sh);
  const dw = sw * scale,
    dh = sh * scale;
  const dx = x + (size - dw) / 2,
    dy = y + (size - dh) / 2;
  ctx.save();
  drawRoundedRect(ctx, x, y, size, size, 16);
  ctx.clip();
  ctx.drawImage(img, dx, dy, dw, dh);
  ctx.restore();
}

async function buildCollage() {
  collageStatus.textContent = "Arranging the collection...";
  collageCanvas.classList.remove("ready");
  collageDownload.classList.remove("enabled");
  collageDownload.style.display = "none";

  await document.fonts.ready;

  // EDIT THIS LINE if your gallery cards use a different class name
  const cards = Array.from(document.querySelectorAll(".card"));

  const targetAspect = 16 / 9;
  const cols = Math.max(3, Math.ceil(Math.sqrt(cards.length * targetAspect)));
  const cell = 320;
  const gap = 28;
  const labelH = 74;
  const pad = 48;
  const headerH = 120;
  const rows = Math.ceil(cards.length / cols);

  const width = pad * 2 + cols * cell + (cols - 1) * gap;
  const height =
    headerH + pad + rows * (cell + labelH) + (rows - 1) * gap + pad;

  const canvas = collageCanvas;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  const bg = cssVar("--bg") || "#FDFDF9";
  const surface = cssVar("--surface") || "#FFFFFF";
  const line = cssVar("--ink") || cssVar("--line") || "#1A1A1A";
  const text = cssVar("--text") || "#1A1A1A";
  const textSoft = cssVar("--text-soft") || "#55584f";

  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = text;
  ctx.font = "600 40px 'Fredoka', sans-serif";
  ctx.textBaseline = "top";
  ctx.fillText("The Collection", pad, 40);

  ctx.fillStyle = textSoft;
  ctx.font = "14px 'Space Mono', monospace";
  const dateStr = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  ctx.fillText(`${cards.length} variants · downloaded ${dateStr}`, pad, 88);

  cards.forEach((card, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = pad + col * (cell + gap);
    const y = headerH + pad + row * (cell + labelH + gap);

    ctx.fillStyle = surface;
    drawRoundedRect(ctx, x, y, cell, cell + labelH, 18);
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = line;
    drawRoundedRect(ctx, x, y, cell, cell + labelH, 18);
    ctx.stroke();

    // EDIT THIS SELECTOR if your image lives at a different path in the card
    const imgEl = card.querySelector(".card-media img");
    if (imgEl) {
      drawCover(ctx, imgEl, x, y, cell);
    } else {
      const placeholder = card.querySelector(".placeholder-fill");
      const bgImage = placeholder
        ? getComputedStyle(placeholder).backgroundImage
        : "";
      const [c1, c2] = parseGradientColors(bgImage);
      const grad = ctx.createLinearGradient(x, y, x + cell, y + cell);
      grad.addColorStop(0, c1);
      grad.addColorStop(1, c2);
      ctx.save();
      drawRoundedRect(ctx, x, y, cell, cell, 16);
      ctx.clip();
      ctx.fillStyle = grad;
      ctx.fillRect(x, y, cell, cell);
      ctx.restore();
    }

    ctx.strokeStyle = line;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x, y + cell);
    ctx.lineTo(x + cell, y + cell);
    ctx.stroke();

    // EDIT THESE SELECTORS to match your artist-name and label elements
    const artistName = card.querySelector(".card-artist")?.textContent || "";
    const variantNum = card.querySelector(".card-num")?.textContent || "";

    ctx.fillStyle = textSoft;
    ctx.font = "11px 'Space Mono', monospace";
    ctx.fillText(variantNum, x + 18, y + cell + 14);

    ctx.fillStyle = text;
    ctx.font = "600 20px 'Fredoka', sans-serif";
    ctx.fillText(artistName, x + 18, y + cell + 34);
  });

  ctx.fillStyle = textSoft;
  ctx.font = "12px 'Space Mono', monospace";
  ctx.textAlign = "right";
  ctx.fillText("generated from the gallery", width - pad, height - 28);
  ctx.textAlign = "left";

  canvas.classList.add("ready");
  collageStatus.textContent = "Ready — tap below to save it.";

  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    collageDownload.href = url;
    collageDownload.style.display = "inline-flex";
    collageDownload.classList.add("enabled");
  }, "image/png");
}

collageBtn.addEventListener("click", () => {
  collageBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
  buildCollage();
});

collageClose.addEventListener("click", () => {
  collageBackdrop.classList.remove("open");
  document.body.style.overflow = "";
});

collageBackdrop.addEventListener("click", (e) => {
  if (e.target === collageBackdrop) {
    collageBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  }
});
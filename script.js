/* ============================================
   The Quiet Light — 共用 JavaScript
   ============================================ */

/* ── 溫暖漂浮光點背景動畫 ── */
function initBackgroundMotes() {
  const canvas = document.getElementById('canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let motes = [], w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function initMotes() {
    motes = [];
    const n = Math.max(40, Math.floor((w * h) / 9000));
    for (let i = 0; i < n; i++) {
      motes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.4,
        baseO: Math.random() * 0.35 + 0.15,
        speed: Math.random() * 0.6 + 0.2,
        drift: (Math.random() - 0.5) * 0.15,
        phase: Math.random() * Math.PI * 2,
        flicker: Math.random() * 0.8 + 0.6
      });
    }
  }

  let t = 0;
  function animate() {
    t += 0.016;
    ctx.clearRect(0, 0, w, h);
    for (const m of motes) {
      m.y -= m.speed * 0.12;
      m.x += m.drift * 0.12;
      if (m.y < -10) { m.y = h + 10; m.x = Math.random() * w; }
      if (m.x < -10) m.x = w + 10;
      if (m.x > w + 10) m.x = -10;
      const flick = 0.5 + 0.5 * Math.sin(t * m.flicker + m.phase);
      const o = m.baseO * (0.5 + 0.5 * flick);
      ctx.beginPath();
      ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(217,165,92,${o.toFixed(3)})`;
      ctx.fill();
    }
    requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => { resize(); initMotes(); });
  resize(); initMotes(); animate();
}

/* ── 故事卡片渲染 ── */
function renderStoryCards(containerId, storyList) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = storyList.map(s => `
    <a class="story-card" href="story.html?id=${s.id}">
      <h3 class="card-title">${s.title}</h3>
      <p style="font-size:.95rem;font-style:italic;color:rgba(217,165,92,0.6);margin-bottom:.9rem;font-family:'Cormorant Garamond',serif;font-weight:300;">${s.titleEn || ''}</p>
      <p class="card-excerpt">${s.excerpt}</p>
      <div class="card-footer">
        <span class="card-date">${s.date}</span>
        <span class="card-read">閱讀 <span class="card-read-arrow"></span></span>
      </div>
    </a>
  `).join('');
}

/* ============================================
   音效系統
   ============================================ */

/* ── 音樂清單 ── */
const MUSIC_LIST = [
  { id: 'music-01', label: 'Relaxing Piano',       artist: 'Konstantin Pazuzu' },
  { id: 'music-02', label: 'Piano Thư Giãn',        artist: 'Minhquang'         },
  { id: 'music-03', label: 'Albumleaf B.151',       artist: 'Chopin'            },
  { id: 'music-04', label: 'Lullaby',               artist: 'Moonpetal Media'   },
  { id: 'music-05', label: 'Nocturne No.20',        artist: 'Chopin'            },
  { id: 'music-06', label: 'Piano',                 artist: 'Atlas Audio'       },
  { id: 'music-07', label: 'Nocturne Op.15 No.1',  artist: 'Chopin'            },
];

/* ── 雨聲清單 ── */
const RAIN_LIST = [
  { id: 'rain-01', label: '細雨 · Gentle Rain',    artist: 'Eryliaa'          },
  { id: 'rain-02', label: '輕雨 · Gentle Rain',    artist: 'Dragon Studio'    },
  { id: 'rain-03', label: '雨中氛圍 · Soft Rain',  artist: 'Universfield'     },
  { id: 'rain-04', label: '雨聲 · Rain Sound',     artist: 'Dragon Studio'    },
];

/* ── Audio 物件 ── */
const musicAudio    = new Audio();
const rainAudio     = new Audio();
const whiteAudio    = new Audio();
const fireplaceAudio= new Audio();

musicAudio.loop     = true;
rainAudio.loop      = true;
whiteAudio.loop     = true;
fireplaceAudio.loop = true;

let musicPlaying    = false;
let currentMusicIdx = 0;
let currentRainIdx  = 0;

function audioPath(filename) {
  return `audio/${filename}.mp3`;
}

/* ── 初始化面板 ── */
function initSoundPanel() {
  // 渲染音樂選項
  const musicList = document.getElementById('music-list');
  if (!musicList) return;

  musicList.innerHTML = MUSIC_LIST.map((m, i) => `
    <div class="music-item ${i === 0 ? 'active' : ''}"
         onclick="selectMusic(${i})" data-idx="${i}">
      <div class="music-dot"></div>
      <div class="music-name">${m.label}<br>
        <span style="font-size:.65rem;opacity:.5;">${m.artist}</span>
      </div>
    </div>
  `).join('');

  // 渲染雨聲選項
  const rainList = document.getElementById('rain-list');
  if (rainList) {
    rainList.innerHTML = RAIN_LIST.map((r, i) => `
      <div class="music-item ${i === 0 ? 'active' : ''}"
           onclick="selectRain(${i})" data-idx="${i}">
        <div class="music-dot"></div>
        <div class="music-name">${r.label}<br>
          <span style="font-size:.65rem;opacity:.5;">${r.artist}</span>
        </div>
      </div>
    `).join('');
  }

  // 載入預設音樂
  musicAudio.src = audioPath(MUSIC_LIST[0].id);
  musicAudio.volume = 0.6;
  rainAudio.volume  = 0.5;
  whiteAudio.src    = audioPath('white-noise');
  whiteAudio.volume = 0.4;
  fireplaceAudio.src= audioPath('fireplace');
  fireplaceAudio.volume = 0.35;

  updateNowPlaying();
}

/* ── 選擇音樂 ── */
function selectMusic(idx) {
  currentMusicIdx = idx;
  document.querySelectorAll('#music-list .music-item').forEach((el, i) => {
    el.classList.toggle('active', i === idx);
  });
  const wasPlaying = musicPlaying;
  musicAudio.pause();
  musicAudio.src = audioPath(MUSIC_LIST[idx].id);
  musicAudio.load();
  if (wasPlaying) {
    musicAudio.play().catch(() => {});
  }
  updateNowPlaying();
  showToast('切換到：' + MUSIC_LIST[idx].label);
}

/* ── 選擇雨聲 ── */
function selectRain(idx) {
  currentRainIdx = idx;
  document.querySelectorAll('#rain-list .music-item').forEach((el, i) => {
    el.classList.toggle('active', i === idx);
  });
  const wasPlaying = !rainAudio.paused;
  rainAudio.pause();
  rainAudio.src = audioPath(RAIN_LIST[idx].id);
  rainAudio.load();
  if (wasPlaying) {
    rainAudio.play().catch(() => {});
  }
  showToast('切換到：' + RAIN_LIST[idx].label);
}

/* ── 播放 / 暫停音樂 ── */
function togglePlay() {
  if (musicPlaying) {
    musicAudio.pause();
    musicPlaying = false;
    document.getElementById('play-icon').textContent  = '▶';
    document.getElementById('play-label').textContent = '播放音樂';
    document.getElementById('now-playing').classList.remove('visible');
  } else {
    musicAudio.play().then(() => {
      musicPlaying = true;
      document.getElementById('play-icon').textContent  = '⏸';
      document.getElementById('play-label').textContent = '暫停音樂';
      document.getElementById('now-playing').classList.add('visible');
    }).catch(() => {
      showToast('請先與頁面互動後再播放');
    });
  }
}

/* ── 環境音開關 ── */
function toggleAmbient(type, btn) {
  btn.classList.toggle('on');
  const isOn   = btn.classList.contains('on');
  const tagEl  = document.getElementById('tag-' + type);
  const secEl  = document.getElementById('section-' + type);

  if (tagEl)  tagEl.textContent = isOn ? '開啟' : '關閉';
  if (secEl)  secEl.classList.toggle('visible', isOn);

  if (type === 'rain') {
    if (isOn) {
      rainAudio.src = audioPath(RAIN_LIST[currentRainIdx].id);
      rainAudio.play().catch(() => {});
    } else {
      rainAudio.pause();
    }
  } else if (type === 'white') {
    if (isOn) { whiteAudio.play().catch(() => {}); }
    else      { whiteAudio.pause(); }
  } else if (type === 'fire') {
    if (isOn) { fireplaceAudio.play().catch(() => {}); }
    else      { fireplaceAudio.pause(); }
  }

  if (isOn) showToast({ rain: '雨聲已開啟', white: '白噪音已開啟', fire: '壁爐聲已開啟' }[type]);
}

/* ── 音量控制 ── */
function updateSlider(el, valId) {
  const val = Math.round(el.value);
  document.getElementById(valId).textContent = val + '%';
  const vol = val / 100;
  if (valId === 'music-vol-val')    musicAudio.volume     = vol;
  if (valId === 'rain-vol-val')     rainAudio.volume      = vol;
  if (valId === 'white-vol-val')    whiteAudio.volume     = vol;
  if (valId === 'fire-vol-val')     fireplaceAudio.volume = vol;
}

/* ── Now Playing ── */
function updateNowPlaying() {
  const el = document.getElementById('np-text');
  if (el) el.textContent = MUSIC_LIST[currentMusicIdx].label + ' · ' + MUSIC_LIST[currentMusicIdx].artist;
}

/* ── 面板開關 ── */
function openPanel() {
  document.getElementById('sound-panel').classList.add('open');
  document.getElementById('panel-tab').style.display = 'none';
}
function closePanel() {
  document.getElementById('sound-panel').classList.remove('open');
  document.getElementById('panel-tab').style.display = 'flex';
}

/* ── Toast ── */
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

/* ── Nav active state ── */
function setActiveNav(page) {
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });
}

/* ── 滾動進場動畫 ── */
function initReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  initBackgroundMotes();
  initReveal();
  initSoundPanel();
});

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
  resize();
  initMotes();
  animate();
}

/* ── 故事卡片渲染（首頁 / 故事集頁共用） ── */
function renderStoryCards(containerId, storyList) {
  const grid = document.getElementById(containerId);
  if (!grid) return;
  grid.innerHTML = storyList.map(s => `
    <a class="story-card" href="story.html?id=${s.id}">
      <p class="card-tag">${s.tag}</p>
      <h3 class="card-title">${s.title}</h3>
      <p class="card-excerpt">${s.excerpt}</p>
      <div class="card-footer">
        <span class="card-date">${s.date}</span>
        <span class="card-read">閱讀 <span class="card-read-arrow"></span></span>
      </div>
    </a>
  `).join('');
}

/* ── 隱藏式聲音控制面板 ── */
function openPanel() {
  document.getElementById('sound-panel').classList.add('open');
  document.getElementById('panel-tab').style.display = 'none';
}
function closePanel() {
  document.getElementById('sound-panel').classList.remove('open');
  document.getElementById('panel-tab').style.display = 'flex';
}

let isPlaying = false;
let currentMusic = 'chopin';

function selectMusic(el, name) {
  document.querySelectorAll('.music-item').forEach(m => m.classList.remove('active'));
  el.classList.add('active');
  currentMusic = el.dataset.music;
  document.getElementById('np-text').textContent = name;
  if (isPlaying) { showToast('切換到：' + name.split(' · ')[0]); }
}

function togglePlay() {
  isPlaying = !isPlaying;
  const icon = document.getElementById('play-icon');
  const label = document.getElementById('play-label');
  const np = document.getElementById('now-playing');

  if (isPlaying) {
    icon.textContent = '⏸';
    label.textContent = '暫停音樂';
    np.classList.add('visible');
    showToast('音樂開始播放（示意介面）');
  } else {
    icon.textContent = '▶';
    label.textContent = '播放音樂';
    np.classList.remove('visible');
  }
}

function toggleAmbient(type, btn) {
  btn.classList.toggle('on');
  const tag = document.getElementById('tag-' + type);
  const section = document.getElementById('section-' + type);
  const isOn = btn.classList.contains('on');
  tag.textContent = isOn ? '開啟' : '關閉';
  section.classList.toggle('visible', isOn);
  if (isOn) {
    showToast({ rain: '雨聲已開啟', white: '白噪音已開啟', fire: '壁爐聲已開啟' }[type]);
  }
}

function updateSlider(el, valId) {
  document.getElementById(valId).textContent = Math.round(el.value) + '%';
}

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

document.addEventListener('DOMContentLoaded', initBackgroundMotes);

// ══════════════════════════════════════════════
// v3.0 CONFIG
// ══════════════════════════════════════════════
const CONFIG = {
  gameDuration: 70,
  maxLives: 5,
  lanes: 5,
  baseSpeed: 0.7,
  maxSpeed: 1.6,
  spawnInterval: 1200,
  minSpawnInterval: 700,
  maxItemsOnScreen: 8,
  minItemsOnScreen: 6,
  collectChance: 0.6,
  scorePerCollect: 100,
  starThresholds: [400, 900, 1500],
  cardStarsToUnlock: 3,

  // ═══ 开屏页配置 ═══
  splash: {
    image: 'splash/open.webp',          // 设置开屏图片URL，留空则不显示图片
    duration: 2800,     // 开屏展示时长(ms)
  },

  // ═══ 女主形象 ═══
  heroine: 'assets/heroine.webp',   // 女主图片路径，留空则用👸emoji

  // ═══ 各角色障碍物icon（配色统一粉紫 v2.1）═══
  obstacleIcons: { boss:'🩶', idol:'💙', doctor:'💙', baker:'🧡', swat:'🖤' },

  // ═══ 三关叙事 ═══
  narratives: {
    boss: [
      { intro: '深夜的商务车停在你楼下，车窗降下半寸。<br><em>"上车。我只说一次。"</em><br>他的语气冷硬，但后座放着你昨天随口说想喝的那杯奶茶。',
        endings: { star3:'他没说话，只是把车窗关上了——但车里开了暖风。', star2:'他微微侧头，"……还行。"', star1:'他看了你一眼，"下次，别让我等。"', star0:'他把车窗摇上了。引擎声远去。' }},
      { intro: '他的助理送来一个没有logo的盒子。打开，是你试过一次就念念不忘的那条手链。附了一张卡片，只写了三个字——<em>"别弄丢。"</em>',
        endings: { star3:'你发现手链内侧刻着一行极小的字：你的名字。', star2:'他假装没看见你戴着手链，但嘴角在抿。', star1:'"戴着了？"他的语气平淡，但步伐慢了下来。', star0:'他收回了目光。"只是个礼物。别想多。"' }},
      { intro: '凌晨三点，他第一次来你家楼下。没有商务车，没有西装。他穿着一件旧卫衣，手里攥着便利店的热可可。<br><em>"……我睡不着。"</em>',
        endings: { star3:'"……我不太会说那种话。但如果你愿意留下来，我每天都会来接你。"', star2:'"以后……别一个人走夜路了。"', star1:'"热可可要凉了。"他把杯子递给你。', star0:'他站在路灯下，没有上前。"……算了，晚安。"' }},
    ],
    idol: [
      { intro: '演唱会散场，所有人都在离开。<br>你的手机震了一下——<br><em>"后门左转，我在第三根路灯下。戴好口罩。"</em>',
        endings: { star3:'他摘下帽子，在路灯下笑了。"谢谢你来。"', star2:'他轻轻碰了一下你的手指。"下次见。"', star1:'他挥了挥手，消失在巷子尽头。', star0:'你到的时候，路灯下已经没有人了。' }},
      { intro: '热搜上全是他和别人的合照。你关掉手机，假装没看见。<br>但凌晨两点，消息弹进来——<br><em>"那不是真的。你信我吗？"</em>',
        endings: { star3:'"全世界都可以不信我。但你——你得信。"', star2:'"……对不起，我应该先告诉你的。"', star1:'"你看到了吧。"他的声音很轻。', star0:'消息已读。他没有再发。' }},
      { intro: '他带你去了一个没有人的海边。摘下墨镜、帽子，甚至摘下了耳返。<br>海风吹过来的时候，他闭上眼睛——<br><em>"至少在这里，我只是我。"</em>',
        endings: { star3:'"我站在台上的时候，灯光太亮，看不见任何人的脸。但我总是知道你在哪里。"', star2:'"以后……能经常来这里吗？"', star1:'他望着海面很久。"回去吧。"', star0:'海浪声太大了，你没听清他最后说了什么。' }},
    ],
    doctor: [
      { intro: '他还穿着白大褂从急诊科出来，护目镜的印痕还在脸上。<br>看到你的那一刻，他愣了两秒，然后笑了。<br><em>"……你怎么来了？外面冷不冷？"</em>',
        endings: { star3:'"下次别在门口等了。我给你配了一张员工餐卡。"', star2:'"回去路上小心。我……会看着你走到地铁口。"', star1:'"谢谢你来。"他的声音很平静，但眼睛很亮。', star0:'他接起了电话。"……嗯，马上到。"然后对你说了句"先走吧"。' }},
      { intro: '你发烧了。他翘了半个班跑过来，拎着两大袋药和一个保温杯。<br>进门第一句话是——<em>"体温多少？"</em><br>第二句是——<em>"怎么不告诉我？"</em>',
        endings: { star3:'等你睡着后，他在客厅坐了一整夜。桌上的水，每隔一小时换一杯新的。', star2:'"明天我再来看你。不许逞强。"', star1:'他在门口站了一会儿。"药按时吃。"', star0:'他把药放在门口就走了。"有事打电话。"' }},
      { intro: '他第一次迟到。推开门的时候，手里拿着一枝有点蔫的花。<br><em>"花店只剩这一枝了。"</em><br>他低着头，耳朵红了。<em>"其实我想说……很久了。"</em>',
        endings: { star3:'"我习惯了治别人的病。但遇到你之后，我才知道有一种心跳加速，不需要治。"', star2:'"我不太会说好听的话。但我是认真的。"', star1:'他把花递过来，什么也没说。', star0:'他把花放在桌上。"……我还是先走了。"' }},
    ],
    baker: [
      { intro: '烘焙坊打烊了，只剩一盏灯。<br>他端着一个歪歪扭扭的蛋糕走出来，围裙上全是面粉。<br><em>"本来想做得好看点的……但你来得太早了。"</em>',
        endings: { star3:'蛋糕上用糖霜歪歪扭扭写着：Today is sweet。旁边画了一个小太阳。', star2:'"好吃吗？"他的眼睛比蛋糕上的糖霜还亮。', star1:'他把围裙解下来。"改天我做个更好看的。"', star0:'蛋糕凉了，你们都没说话。' }},
      { intro: '你第一次看见他烤坏了东西。整盘马卡龙全部塌了，他蹲在烤箱前好久。<br>你走过去的时候，他抬起头：<br><em>"……这不是给你的。放心，给你的那份不会失败。"</em>',
        endings: { star3:'凌晨四点，他发来一张照片——完美的马卡龙，夹心里塞了一张纸条："留了你的那份在柜台。"', star2:'"我可以失败一千次，但给你的那一份必须是最好的。"', star1:'他站起来，拍了拍膝盖。"没事，习惯了。"', star0:'他没抬头。"你先走吧，我再试一次。"' }},
      { intro: '他教你做布丁，站在你身后握着你的手搅拌。忽然安静下来。<br><em>"你知道吗？"</em>他的声音就在耳边。<br><em>"我做的所有甜品里，最喜欢的是……你笑着说好吃的那个。"</em>',
        endings: { star3:'"配方我没记下来，但你的表情我全记得。"', star2:'"以后每天，我都给你做不一样的。"', star1:'他递来一勺布丁。"……尝尝。"', star0:'布丁凝住了。他低着头收拾桌面。' }},
    ],
    swat: [
      { intro: '他穿着便装站在电影院门口，耳朵有点红。<br><em>"我到早了。……其实我到了一个小时了。"</em><br>口袋里露出半截电影票，被攥得皱皱的。',
        endings: { star3:'散场后他说："……下次还看吗？"然后小声补了一句："跟你。"', star2:'"电影还行。"他没看电影，看了你一晚上。', star1:'"到家了跟我说一声。"', star0:'他在电影院门口站了很久，你已经走远了。' }},
      { intro: '你给他打电话，响了二十声才接。背景很吵。<br><em>"怎么了？"</em><br>你说没事。他沉默了三秒：<br><em>"别挂。我十五分钟到。"</em>',
        endings: { star3:'他真的来了。气喘吁吁，制服都没换。"我说了十五分钟。"他看了一眼表。"十四分半。"', star2:'"以后有事直接说。别说没事。我听得出来。"', star1:'他递来一瓶水。"先喝点。"', star0:'电话没接通。第二天他回了一条消息："昨天任务。抱歉。"' }},
      { intro: '他请了一天假——据说是他入队以来第一次。<br>穿着那件洗到发白的卫衣，拎着超市塑料袋出现在你门口。<br><em>"……今天不出任务。只陪你。"</em>',
        endings: { star3:'"我不怕出任务。但每次出发之前，我会站在门口多看一眼家的方向。自从遇见你，那个方向变得很具体。"', star2:'"以后……尽量少出任务。"他低着头。"尽量。"', star1:'"今天的炒饭……不好吃吧。"他看着锅。"下次我学。"', star0:'他坐在沙发上睡着了。手机里有23个未接来电。' }},
    ],
  },

  characters: [
    { id:'boss',name:'霸总',emoji:'🖤',color:'#ec4899',colorLight:'#fce7f3',image:'assets/heroes/boss.webp',
      desc:'冷硬外壳下藏着只对你的温柔',cardQuote:'"上车。我只说一次。"',
      unlockDialogue:'"……我不太会说那种话。<br>但如果你愿意留下来，<br>我每天都会来接你。"',
      collectibles:[{name:'替你挡酒',text:'"她不喝。剩下的我来。"',image:''},{name:'专属接送',text:'"不管几点，打我电话。"',image:''},{name:'定制礼物',text:'没有logo的盒子，尺寸刚好是你的手腕。',image:''},{name:'包下餐厅',text:'"今晚这里只有我们。"',image:''},{name:'主动道歉',text:'"……是我不对。"',image:''}],
      obstacles:[{name:'冷言拒绝',text:'"别闹了。"',image:''},{name:'故意疏远',text:'他的已读，停在了三小时前。',image:''},{name:'说你幼稚',text:'"你能不能成熟一点？"',image:''},{name:'漠不关心',text:'满桌的文件，连抬头都没有。',image:''},{name:'语气刻薄',text:'"你以为我很闲？"',image:''}] },
    { id:'idol',name:'Idol',emoji:'💜',color:'#a855f7',colorLight:'#f3e8ff',image:'assets/heroes/idol.webp',
      desc:'聚光灯下万人迷，只偷偷见你',cardQuote:'"我总是知道你在哪里。"',
      unlockDialogue:'"我站在台上的时候，灯光太亮，<br>看不见任何人的脸。<br>但我总是知道你在哪里。"',
      collectibles:[{name:'专属唱给你',text:'彩排时他对着空座位唱了一首歌。',image:''},{name:'偷偷见你',text:'"好久不见。"',image:''},{name:'公开护你',text:'"她是很重要的人，请不要打扰她。"',image:''},{name:'雨天共撑',text:'他的肩湿了大半。',image:''},{name:'陪你看海',text:'"至少在海边，我只是我。"',image:''}],
      obstacles:[{name:'隐瞒关系',text:'"我们……不能让别人知道。"',image:''},{name:'公开避嫌',text:'擦肩而过时眼神空白得像陌生人。',image:''},{name:'忽冷忽热',text:'昨天的温柔像一场梦。',image:''},{name:'深夜失联',text:'电话那头只有忙音。',image:''},{name:'敷衍回应',text:'"嗯。" "好。" "再说吧。"',image:''}] },
    { id:'doctor',name:'医生',emoji:'💙',color:'#6366f1',colorLight:'#e0e7ff',image:'assets/heroes/doctor.webp',
      desc:'白大褂下一颗为你跳动的心',cardQuote:'"有一种心跳，不需要治。"',
      unlockDialogue:'"我习惯了治别人的病。<br>但遇到你之后，我才知道<br>有一种心跳加速，不需要治。"',
      collectibles:[{name:'熬养胃汤',text:'"先喝汤，别空腹吃药。"',image:''},{name:'记得你忌口',text:'"她不吃香菜。换一份。"',image:''},{name:'递暖手宝',text:'什么也没说，只是把暖手宝塞进你手心。',image:''},{name:'帮你贴药',text:'创口贴上画了个笑脸。',image:''},{name:'温柔叮嘱',text:'"早睡。我知道你不听，但我每天都会说。"',image:''}],
      obstacles:[{name:'深夜加班',text:'"对不起，今晚又回不去了。"',image:''},{name:'拒谈心事',text:'"我没事。"——连续工作36小时。',image:''},{name:'爽约急诊',text:'"……我得走了。"',image:''},{name:'无暇陪伴',text:'"手术还没结束，蛋糕在冰箱里。"',image:''},{name:'刻意回避',text:'眼神温柔，但转身的速度更快。',image:''}] },
    { id:'baker',name:'甜品师',emoji:'🧡',color:'#d97706',colorLight:'#fef3c7',image:'assets/heroes/baker.webp',
      desc:'用甜蜜融化所有不安',cardQuote:'"你的表情我全记得。"',
      unlockDialogue:'"我这辈子做过最好吃的东西，<br>是你笑着说好吃的那一个。<br>配方我没记下来，但你的表情我全记得。"',
      collectibles:[{name:'定制甜品',text:'"今天也很喜欢你。"',image:''},{name:'教你烘焙',text:'"你比奶油还甜。"',image:''},{name:'甜品告白',text:'马卡龙夹心里藏了一张纸条。',image:''},{name:'清晨送甜',text:'"刚出炉的。今天也要开心。"',image:''},{name:'喂你吃甜',text:'吹了吹勺子上的布丁，递到你嘴边。',image:''}],
      obstacles:[{name:'沉默不语',text:'揉面的手没有停，但他在想别的事。',image:''},{name:'忘记喜好',text:'"你……不喜欢草莓的吗？"',image:''},{name:'拒你靠近',text:'"现在不行。"——眼神分明不是在说面粉。',image:''},{name:'无意刺痛',text:'"做甜品嘛，对谁都一样的。"',image:''},{name:'不愿坦诚',text:'"没什么。"他关上了烤箱，也关上了话题。',image:''}] },
    { id:'swat',name:'特警',emoji:'❤️',color:'#e11d48',colorLight:'#ffe4e6',image:'assets/heroes/swat.webp',
      desc:'铁血柔情，笨拙却奋不顾身',cardQuote:'"那个方向变得很具体。"',
      unlockDialogue:'"我不怕出任务。<br>但每次出发之前，我会站在门口多看一眼家的方向。<br>自从遇见你，那个方向变得很具体。"',
      collectibles:[{name:'护你周全',text:'他把你拉到了身后。自然得像呼吸。',image:''},{name:'挡掉危险',text:'"没事了。"',image:''},{name:'粗中有细',text:'桌上多了药、热水和一张写歪的纸条。',image:''},{name:'危急奔赴',text:'十五分钟后他出现了，气喘吁吁。',image:''},{name:'笨拙浪漫',text:'"……这个，超市买的。不贵。"',image:''}],
      obstacles:[{name:'临时出警',text:'"等我一下。"——这一下是八个小时。',image:''},{name:'失踪失联',text:'整整两天没有消息。',image:''},{name:'隐瞒任务',text:'"……出差。"他身上有消毒水的味道。',image:''},{name:'约会爽约',text:'你在餐厅等到打烊。',image:''},{name:'刻意疏远',text:'"别离我太近。"',image:''}] },
  ],
};

// ══════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════
let state = { selectedChar: 0, progress: {} };
let game = null;
let _twTimer = null;   // typewriter timer
let _twDone = false;    // typewriter finished flag

function saveProgress() { localStorage.setItem('dateGame_v3', JSON.stringify(state.progress)); }
function loadProgress() {
  try {
    let d = JSON.parse(localStorage.getItem('dateGame_v3'));
    if (!d) d = JSON.parse(localStorage.getItem('dateGame_v2'));
    if (d) state.progress = d;
  } catch(e) {}
  CONFIG.characters.forEach(c => {
    if (!state.progress[c.id]) state.progress[c.id] = { cardStars: 0, unlocked: false };
  });
}

// ══════════════════════════════════════════════
// TYPEWRITER
// ══════════════════════════════════════════════
function typeWriter(el, html, speed, onDone) {
  if (_twTimer) { clearInterval(_twTimer); _twTimer = null; }
  _twDone = false;
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  const plainText = tmp.textContent || tmp.innerText || '';
  let idx = 0;
  el.innerHTML = '<span class="tw-cursor"></span>';

  _twTimer = setInterval(() => {
    if (idx < plainText.length) {
      const ch = plainText[idx];
      el.innerHTML = html.slice(0, findHtmlIndex(html, idx + 1)) + '<span class="tw-cursor"></span>';
      idx++;
    } else {
      clearInterval(_twTimer); _twTimer = null;
      el.innerHTML = html;
      _twDone = true;
      if (onDone) onDone();
    }
  }, speed);
}

function findHtmlIndex(html, charCount) {
  let count = 0, inTag = false;
  for (let i = 0; i < html.length; i++) {
    if (html[i] === '<') inTag = true;
    else if (html[i] === '>') inTag = false;
    else if (!inTag) { count++; if (count >= charCount) return i + 1; }
  }
  return html.length;
}

function skipTypeWriter(el, html) {
  if (_twTimer) { clearInterval(_twTimer); _twTimer = null; }
  el.innerHTML = html;
  _twDone = true;
}

// ══════════════════════════════════════════════
// SCREENS
// ══════════════════════════════════════════════
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => { s.classList.remove('visible'); s.classList.add('hidden'); });
  requestAnimationFrame(() => {
    const el = document.getElementById(id);
    el.classList.remove('hidden'); el.classList.add('visible');
  });
  if (id === 'screen-select') initSelectScreen();
  if (id === 'screen-collection') initCollectionScreen();
}

// ══════════════════════════════════════════════
// SELECT
// ══════════════════════════════════════════════
function initSelectScreen() {
  const grid = document.getElementById('selectGrid');
  grid.innerHTML = '';
  CONFIG.characters.forEach((ch, i) => {
    const prog = state.progress[ch.id] || { cardStars: 0, unlocked: false };
    const card = document.createElement('div');
    card.className = 'select-card' + (i === state.selectedChar ? ' selected' : '') + (prog.unlocked ? ' unlocked' : '');
    const stars = '★'.repeat(Math.min(prog.cardStars, 3)) + '☆'.repeat(Math.max(0, 3 - prog.cardStars));
    const avatarContent = ch.image ? `<img src="${ch.image}" class="select-avatar-img">` : ch.emoji;
    card.innerHTML = `<div class="select-avatar"><div class="select-avatar-inner">${avatarContent}</div></div><div class="select-name">${ch.name}</div><div class="select-stars">${stars}</div>`;
    card.onclick = () => { state.selectedChar = i; initSelectScreen(); };
    grid.appendChild(card);
  });
  const ch = CONFIG.characters[state.selectedChar];
  const prog = state.progress[ch.id] || { cardStars: 0 };
  const stage = Math.min(prog.cardStars, 2);
  const labels = ['第一章 · 初遇','第二章 · 心动','第三章 · 告白'];
  document.getElementById('selectInfo').innerHTML = `
    <div style="font-family:'Noto Serif SC',serif;font-size:clamp(1em,3vw,1.3em);color:${ch.color};letter-spacing:.1em;">${ch.name}</div>
    <div class="char-desc">${ch.desc}</div>
    <div style="margin-top:8px;font-size:.75em;color:var(--text-light);">卡牌进度 ${Math.min(prog.cardStars,3)}/3 ★${prog.unlocked ? ' · 已点亮卡牌 ✓' : ' · 当前 ' + labels[stage]}</div>
    <div style="margin-top:4px;font-size:.65em;color:var(--text-light);">（每局获得三星 → 卡牌 +1★）</div>`;
}

// ══════════════════════════════════════════════
// NARRATIVE — 打字机效果 + 跳过/返回
// ══════════════════════════════════════════════
let _narFullHtml = '';

function startNarrative() {
  const ch = CONFIG.characters[state.selectedChar];
  const prog = state.progress[ch.id] || { cardStars: 0 };
  const stage = Math.min(prog.cardStars, 2);
  const nar = CONFIG.narratives[ch.id][stage];
  const labels = ['第一章 · 初遇','第二章 · 心动','第三章 · 告白'];
  document.getElementById('narSpeaker').textContent = `${ch.name} · ${labels[stage]}`;

  _narFullHtml = nar.intro;
  const narTextEl = document.getElementById('narText');
  const btn = document.getElementById('btnNarSkip');
  btn.textContent = '跳过 →';

  showScreen('screen-narrative');
  setTimeout(() => {
    typeWriter(narTextEl, _narFullHtml, 45, () => {
      btn.textContent = '开始游戏 →';
    });
  }, 400);
}

function onNarrativeAction() {
  const btn = document.getElementById('btnNarSkip');
  if (!_twDone) {
    skipTypeWriter(document.getElementById('narText'), _narFullHtml);
    btn.textContent = '开始游戏 →';
  } else {
    startGame();
  }
}

function goBackFromNarrative() {
  if (_twTimer) { clearInterval(_twTimer); _twTimer = null; }
  showScreen('screen-select');
}

// ══════════════════════════════════════════════
// GAME ENGINE — v3.1 性能优化 + 统一粉紫配色
// ══════════════════════════════════════════════
class GameEngine {
  constructor() {
    this.canvas = document.getElementById('gameCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.wrap = document.getElementById('canvasWrap');
    this.char = CONFIG.characters[state.selectedChar];
    this.obstacleIcon = CONFIG.obstacleIcons[this.char.id] || '💔';
    this.heroineImg = null;
    if (CONFIG.heroine) {
      const img = new Image();
      img.src = CONFIG.heroine;
      img.onload = () => { this.heroineImg = img; };
    }
    this.lives = CONFIG.maxLives;
    this.score = 0;
    this.time = CONFIG.gameDuration;
    this.items = [];
    this.playerTargetLane = 2;
    this.playerTargetX = null; // 直接定位模式（鼠标/触摸）
    this.playerX = 0;
    this.running = false;
    this.paused = false;
    this.lastSpawn = 0;
    this.lastTime = 0;
    this.elapsed = 0;
    this.shakeAmount = 0;
    this.W = 0; this.H = 0;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    // 性能优化：缓存背景到离屏canvas
    this._bgCanvas = null;
    // 性能优化：缓存HUD值，避免每帧DOM操作
    this._hudCache = { lives: -1, score: -1, time: -1 };
  }

  resize() {
    const rect = this.wrap.getBoundingClientRect();
    let w = Math.min(rect.width, 480), h = rect.height;
    if (w / h > 9/16) w = h * 9/16; else h = w * 16/9;
    if (h > rect.height) { h = rect.height; w = h * 9/16; }
    this.W = Math.floor(w); this.H = Math.floor(h);
    this.canvas.style.width = this.W + 'px';
    this.canvas.style.height = this.H + 'px';
    this.canvas.width = Math.floor(this.W * this.dpr);
    this.canvas.height = Math.floor(this.H * this.dpr);
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    this.laneW = this.W / CONFIG.lanes;
    this.playerY = this.H - 60;
    this.playerX = this.playerTargetLane * this.laneW + this.laneW / 2;
    this.itemRadius = Math.min(26, this.laneW * 0.38);
    this.playerSize = Math.min(29, this.laneW * 0.432);
    this._buildBgCache();
  }

  _buildBgCache() {
    const w = this.W, h = this.H, dpr = this.dpr;
    const offCanvas = document.createElement('canvas');
    offCanvas.width = Math.floor(w * dpr);
    offCanvas.height = Math.floor(h * dpr);
    const ctx = offCanvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    ctx.fillStyle = '#fdf6f9';
    ctx.fillRect(0, 0, w, h);
    const g1 = ctx.createRadialGradient(w*.3,h*.2,10,w*.3,h*.2,w*.6);
    g1.addColorStop(0,'rgba(252,231,243,0.4)'); g1.addColorStop(1,'transparent');
    ctx.fillStyle = g1; ctx.fillRect(0,0,w,h);
    const g2 = ctx.createRadialGradient(w*.7,h*.6,10,w*.7,h*.6,w*.5);
    g2.addColorStop(0,'rgba(233,213,255,0.25)'); g2.addColorStop(1,'transparent');
    ctx.fillStyle = g2; ctx.fillRect(0,0,w,h);

    for (let i = 0; i <= CONFIG.lanes; i++) {
      ctx.beginPath();
      const edge = i === 0 || i === CONFIG.lanes;
      for (let y = 0; y < h; y += 3) {
        const x = i * this.laneW + Math.sin(y * 0.04 + i) * 1.2;
        y === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = edge ? 'rgba(236,72,153,0.18)' : 'rgba(168,85,247,0.06)';
      ctx.lineWidth = edge ? 1.2 : 0.5;
      ctx.stroke();
    }

    ctx.globalAlpha = 0.03;
    for (let i = 0; i < 4; i++) {
      const s = i*137.5;
      ctx.beginPath();
      ctx.moveTo((s*3.1)%(w*.4),(s*7.3)%h);
      ctx.lineTo((s*3.1)%(w*.4)+40+(s%60),(s*7.3)%h+((s*.7)%4)-2);
      ctx.strokeStyle = i%2===0?'#ec4899':'#a855f7';
      ctx.lineWidth=.5; ctx.stroke();
    }
    ctx.globalAlpha = 1;
    this._bgCanvas = offCanvas;
  }

  _bindPointer() {
    const cv = this.canvas;
    const self = this;
    function ptrMove(e) {
      if (!self.running || self.paused) return;
      e.preventDefault();
      const rect = cv.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const rx = (clientX - rect.left) / rect.width;
      const half = self.laneW * 0.5;
      self.playerTargetX = Math.max(half, Math.min(self.W - half, rx * self.W));
    }
    cv.addEventListener('mousedown', ptrMove);
    cv.addEventListener('mousemove', ptrMove);
    cv.addEventListener('touchstart', ptrMove, {passive:false});
    cv.addEventListener('touchmove', ptrMove, {passive:false});
    this._ptrCleanup = () => {
      cv.removeEventListener('mousedown', ptrMove);
      cv.removeEventListener('mousemove', ptrMove);
      cv.removeEventListener('touchstart', ptrMove);
      cv.removeEventListener('touchmove', ptrMove);
    };
  }

  start() {
    this.resize();
    this._bindPointer();
    this.running = true;
    this.paused = false;
    this.lastTime = performance.now();
    this._hudCache = { lives: -1, score: -1, time: -1 };
    this.updateHUD(true);
    requestAnimationFrame(t => this.loop(t));
  }
  stop() { this.running = false; if (this._ptrCleanup) this._ptrCleanup(); }

  loop(now) {
    if (!this.running) return;
    if (this.paused) {
      this.lastTime = now;
      requestAnimationFrame(t => this.loop(t));
      return;
    }

    const rawDt = (now - this.lastTime) / 1000;
    const dt = Math.min(rawDt, 0.033);  // cap at ~30fps equivalent for smooth physics
    this.lastTime = now;
    this.elapsed += dt;
    this.time -= dt;
    if (this.time <= 0) { this.time = 0; this.endGame(); return; }

    const progress = Math.min(this.elapsed / CONFIG.gameDuration, 1);
    const spawnInt = CONFIG.spawnInterval - (CONFIG.spawnInterval - CONFIG.minSpawnInterval) * progress;
    let active = 0;
    for (let i = 0; i < this.items.length; i++) if (!this.items[i].hit) active++;
    const interval = active < CONFIG.minItemsOnScreen ? spawnInt * 0.4 : spawnInt;
    if (now - this.lastSpawn > interval && active < CONFIG.maxItemsOnScreen) {
      this.spawnItem();
      this.lastSpawn = now;
    }

    this.update(dt, progress);
    this.render();
    this.updateHUD(false);
    requestAnimationFrame(t => this.loop(t));
  }

  spawnItem() {
    let active = 0;
    for (let i = 0; i < this.items.length; i++) if (!this.items[i].hit) active++;
    if (active >= CONFIG.maxItemsOnScreen) return;
    const lane = Math.floor(Math.random() * CONFIG.lanes);
    const isC = Math.random() < CONFIG.collectChance;
    const list = isC ? this.char.collectibles : this.char.obstacles;
    const it = list[Math.floor(Math.random() * list.length)];
    this.items.push({ lane, y: -30, type: isC ? 'collect' : 'obstacle', name: it.name, text: it.text, hit: false });

    if (active + 1 < CONFIG.maxItemsOnScreen && this.elapsed > 12 && Math.random() < 0.4) {
      let l2 = (lane + 1 + Math.floor(Math.random() * (CONFIG.lanes - 1))) % CONFIG.lanes;
      const isC2 = Math.random() < CONFIG.collectChance;
      const list2 = isC2 ? this.char.collectibles : this.char.obstacles;
      const it2 = list2[Math.floor(Math.random() * list2.length)];
      this.items.push({ lane: l2, y: -30, type: isC2 ? 'collect' : 'obstacle', name: it2.name, text: it2.text, hit: false });
    }
  }

  update(dt, progress) {
    const speed = CONFIG.baseSpeed + (CONFIG.maxSpeed - CONFIG.baseSpeed) * progress;
    const speedPx = speed * this.H / 100 * dt * 60;
    const targetX = this.playerTargetX != null
      ? this.playerTargetX
      : this.playerTargetLane * this.laneW + this.laneW / 2;
    this.playerX += (targetX - this.playerX) * 0.22;
    if (this.shakeAmount > 0) this.shakeAmount *= 0.9;
    if (this.shakeAmount < 0.3) this.shakeAmount = 0;

    let removeCount = 0;
    for (let i = this.items.length - 1; i >= 0; i--) {
      const item = this.items[i];
      item.y += speedPx;
      if (!item.hit) {
        const ix = item.lane * this.laneW + this.laneW / 2;
        const dy = item.y - this.playerY, dx = ix - this.playerX;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < this.itemRadius + this.playerSize) {
          item.hit = true;
          if (item.type === 'collect') {
            this.score += CONFIG.scorePerCollect;
            this.addFloat(ix, item.y, item.text, 'collect');
            this.flashCollect();
          } else {
            this.lives--;
            this.addFloat(ix, item.y, item.text, 'obstacle');
            this.flashHit();
            this.shakeAmount = 6;
            if (this.lives <= 0) { this.endGame(); return; }
          }
        }
      }
      if (item.y > this.H + 40 || item.hit) { this.items.splice(i, 1); }
    }
  }

  render() {
    const ctx = this.ctx, w = this.W, h = this.H;

    // 使用缓存的背景（避免每帧重绘静态元素）
    if (this._bgCanvas) {
      ctx.drawImage(this._bgCanvas, 0, 0, this._bgCanvas.width, this._bgCanvas.height, 0, 0, w, h);
    }

    ctx.save();
    if (this.shakeAmount > 0) ctx.translate((Math.random()-.5)*this.shakeAmount,(Math.random()-.5)*this.shakeAmount);

    // ── Items: 统一粉紫配色 + 角色专属障碍物icon ──
    for (let j = 0; j < this.items.length; j++) {
      const item = this.items[j];
      if (item.hit) continue;
      const ix = item.lane * this.laneW + this.laneW / 2, iy = item.y, r = this.itemRadius;
      const isC = item.type === 'collect';
      const gc = isC ? [192,132,252] : [251,113,133];

      // 外发光
      const glow = ctx.createRadialGradient(ix, iy, r*0.5, ix, iy, r*2.86);
      glow.addColorStop(0, `rgba(${gc},0.24)`);
      glow.addColorStop(0.5, `rgba(${gc},0.08)`);
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.beginPath(); ctx.arc(ix, iy, r*2.86, 0, Math.PI*2); ctx.fill();

      // 内圆
      ctx.beginPath(); ctx.arc(ix, iy, r, 0, Math.PI*2);
      ctx.fillStyle = isC ? 'rgba(245,235,255,0.65)' : 'rgba(255,235,238,0.65)';
      ctx.fill();
      // 外圈发光边
      ctx.beginPath(); ctx.arc(ix, iy, r+2, 0, Math.PI*2);
      ctx.strokeStyle = `rgba(${gc},0.16)`; ctx.lineWidth = 4; ctx.stroke();
      ctx.beginPath(); ctx.arc(ix, iy, r, 0, Math.PI*2);
      ctx.strokeStyle = `rgba(${gc},0.45)`; ctx.lineWidth = 1.5; ctx.stroke();
      // Emoji
      ctx.font = `${r*0.95}px sans-serif`; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText(isC ? '💗' : this.obstacleIcon, ix, iy);
      // Label
      ctx.fillStyle = isC ? 'rgba(168,85,247,0.7)' : 'rgba(220,38,38,0.55)';
      ctx.font = `${Math.max(10,r*0.48)}px "Noto Sans SC",sans-serif`; ctx.textBaseline='top';
      ctx.fillText(item.name, ix, iy+r+5);
    }

    // ── Player: 女主头像（圆形裁切，露出头部）或 👸 emoji ──
    const px = this.playerX, py = this.playerY, ps = this.playerSize;
    const pc = [244,114,182];
    const pg = ctx.createRadialGradient(px, py, ps*0.4, px, py, ps*3.64);
    pg.addColorStop(0, `rgba(${pc},0.24)`);
    pg.addColorStop(0.5, `rgba(${pc},0.08)`);
    pg.addColorStop(1, 'transparent');
    ctx.fillStyle = pg;
    ctx.beginPath(); ctx.arc(px, py, ps*3.64, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(px, py, ps, 0, Math.PI*2);
    ctx.fillStyle = 'rgba(252,231,243,0.7)'; ctx.fill();
    ctx.beginPath(); ctx.arc(px, py, ps+2, 0, Math.PI*2);
    ctx.strokeStyle = `rgba(${pc},0.15)`; ctx.lineWidth=4; ctx.stroke();
    ctx.beginPath(); ctx.arc(px, py, ps, 0, Math.PI*2);
    ctx.strokeStyle = `rgba(${pc},0.45)`; ctx.lineWidth=1.5; ctx.stroke();
    if (this.heroineImg) {
      ctx.save();
      ctx.beginPath(); ctx.arc(px, py, ps-1, 0, Math.PI*2); ctx.clip();
      const imgW = this.heroineImg.naturalWidth, imgH = this.heroineImg.naturalHeight;
      const scale = (ps * 2) / imgW;
      const dw = imgW * scale, dh = imgH * scale;
      ctx.drawImage(this.heroineImg, px - dw/2, py - ps + 2, dw, dh);
      ctx.restore();
    } else {
      ctx.font = `${ps*1.3}px sans-serif`; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText('👸', px, py);
    }

    // Glitch
    const gt = performance.now() * 0.001;
    if (Math.sin(gt*2.7) > 0.85) {
      ctx.fillStyle = 'rgba(236,72,153,0.06)';
      ctx.fillRect(0, (Math.sin(gt*5.3)*.5+.5)*h, w, 1.5);
    }
    ctx.restore();
  }

  addFloat(x, y, text, type) {
    const rect = this.canvas.getBoundingClientRect();
    const el = document.createElement('div');
    el.className = 'float-text ' + type;
    el.textContent = text;
    el.style.left = (rect.left + (x/this.W)*rect.width) + 'px';
    el.style.top = (rect.top + (y/this.H)*rect.height) + 'px';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1600);
  }
  flashHit() { const e=document.createElement('div'); e.className='hit-flash'; this.wrap.appendChild(e); setTimeout(()=>e.remove(),350); }
  flashCollect() { const e=document.createElement('div'); e.className='collect-flash'; this.wrap.appendChild(e); setTimeout(()=>e.remove(),350); }

  updateHUD(force) {
    const c = this._hudCache;
    const curTime = Math.ceil(this.time);
    if (force || c.lives !== this.lives) {
      c.lives = this.lives;
      let lh='';
      for(let i=0;i<CONFIG.maxLives;i++) lh+=`<span class="life${i>=this.lives?' lost':''}">★</span>`;
      document.getElementById('hudLives').innerHTML=lh;
    }
    if (force) {
      document.getElementById('hudCharName').textContent=this.char.name+'线';
    }
    if (force || c.time !== curTime) {
      c.time = curTime;
      const te=document.getElementById('hudTimer');
      te.textContent=curTime;
      te.className='hud-timer '+(this.time<=10?'warning':'normal');
    }
    if (force || c.score !== this.score) {
      c.score = this.score;
      document.getElementById('hudScore').textContent=this.score;
    }
  }

  endGame() { this.running = false; if (this._ptrCleanup) this._ptrCleanup(); showResult(this.score); }
  movePlayer(dir) {
    if(!this.running || this.paused) return;
    this.playerTargetLane=Math.max(0,Math.min(CONFIG.lanes-1,this.playerTargetLane+dir));
  }
}

// ══════════════════════════════════════════════
// INPUT
// ══════════════════════════════════════════════
document.addEventListener('keydown', e => {
  if (!game||!game.running) return;
  if (e.key==='ArrowLeft'||e.key==='a') game.movePlayer(-1);
  if (e.key==='ArrowRight'||e.key==='d') game.movePlayer(1);
  if (e.key==='Escape'||e.key===' ') togglePause();
});
// 鼠标/触摸 控制现在绑定在 GameEngine._bindPointer() 中，直接挂载到 canvas 元素上
window.addEventListener('resize', () => { if(game&&game.running) game.resize(); });

// ══════════════════════════════════════════════
// PAUSE / RESUME / QUIT
// ══════════════════════════════════════════════
function togglePause() {
  if (!game || !game.running) return;
  game.paused = !game.paused;
  document.getElementById('pauseOverlay').classList.toggle('show', game.paused);
  document.getElementById('pauseBtn').innerHTML = game.paused ? '▶ 继续游戏' : '⏸ 暂停游戏';
}

function quitGame() {
  if (game) { game.stop(); game = null; }
  document.getElementById('pauseOverlay').classList.remove('show');
  showScreen('screen-select');
}

// ══════════════════════════════════════════════
// GAME FLOW
// ══════════════════════════════════════════════
function startGame() {
  if (_twTimer) { clearInterval(_twTimer); _twTimer = null; }
  document.getElementById('pauseOverlay').classList.remove('show');
  document.getElementById('pauseBtn').innerHTML = '⏸ 暂停游戏';
  showScreen('screen-game');
  setTimeout(() => { game = new GameEngine(); game.start(); }, 450);
}

// ══════════════════════════════════════════════
// RESULT — 逐字打字结局 → 打完后出卡牌动效 → 再出按钮
// ══════════════════════════════════════════════
function showResult(score) {
  const ch = CONFIG.characters[state.selectedChar];
  const prog = state.progress[ch.id];
  const stage = Math.min(prog.cardStars, 2);
  const narData = CONFIG.narratives[ch.id][stage];

  let starsEarned = 0;
  for (let i = CONFIG.starThresholds.length - 1; i >= 0; i--) {
    if (score >= CONFIG.starThresholds[i]) { starsEarned = i + 1; break; }
  }

  const gotCardStar = starsEarned === 3 && prog.cardStars < CONFIG.cardStarsToUnlock;
  if (gotCardStar) prog.cardStars++;
  const justUnlocked = !prog.unlocked && prog.cardStars >= CONFIG.cardStarsToUnlock;
  if (justUnlocked) prog.unlocked = true;
  saveProgress();

  document.getElementById('resultScore').textContent = score;
  let sh = '';
  for (let i = 0; i < 3; i++) sh += `<span class="${i<starsEarned?'earned':'empty'}">★</span>`;
  document.getElementById('resultStars').innerHTML = sh;
  document.getElementById('resultBtns').classList.remove('show');

  const endingKey = 'star' + starsEarned;
  const endingText = narData.endings[endingKey] || narData.endings.star0;
  let comment = '';
  if (starsEarned === 0) comment = '这次约会似乎不太顺利……再试一次吧！';
  else if (starsEarned === 1) comment = '感受到了一点心动。继续努力吧！';
  else if (starsEarned === 2) comment = '不错的约会体验！心动值在上升~';
  else comment = '完美约会！他的心，你已经抓住了。';

  const fullHtml = `<em>"${endingText}"</em><br><br>${comment}`;
  showScreen('screen-result');

  setTimeout(() => {
    const msgEl = document.getElementById('resultMsg');
    typeWriter(msgEl, fullHtml, 50, () => {
      if (gotCardStar) {
        setTimeout(() => showCardAcquire(ch, prog, justUnlocked), 400);
      } else {
        document.getElementById('resultBtns').classList.add('show');
      }
    });
  }, 500);
}

// ══════════════════════════════════════════════
// CARD ACQUIRE ANIMATION
// ══════════════════════════════════════════════
function showCardAcquire(ch, prog, justUnlocked) {
  const overlay = document.getElementById('cardAcquire');
  const box = document.getElementById('cardAcquireBox');

  document.getElementById('caEmoji').textContent = ch.emoji;
  document.getElementById('caTitle').innerHTML = `<span style="color:${ch.color}">${ch.name}</span> 卡牌 +1★`;
  const starsStr = '★'.repeat(Math.min(prog.cardStars, 3)) + '☆'.repeat(Math.max(0, 3 - prog.cardStars));
  document.getElementById('caStars').textContent = starsStr;
  document.getElementById('caHint').textContent = prog.cardStars >= 3 ? '🎉 卡牌已点亮！' : `进度 ${prog.cardStars}/3`;

  overlay.classList.add('show');
  spawnSparkles(box, ch.color);

  const dismiss = () => {
    overlay.classList.remove('show');
    overlay.onclick = null;
    setTimeout(() => {
      document.getElementById('resultBtns').classList.add('show');
      if (justUnlocked) setTimeout(() => showUnlock(ch), 1200);
    }, 400);
  };

  setTimeout(dismiss, 2500);
  overlay.onclick = dismiss;
}

function spawnSparkles(container, color) {
  for (let i = 0; i < 12; i++) {
    const sp = document.createElement('div');
    sp.className = 'sparkle';
    const angle = (Math.PI * 2 / 12) * i;
    const dist = 60 + Math.random() * 40;
    sp.style.setProperty('--sx', Math.cos(angle) * dist + 'px');
    sp.style.setProperty('--sy', Math.sin(angle) * dist + 'px');
    sp.style.background = i % 3 === 0 ? color : i % 3 === 1 ? '#fbbf24' : '#f472b6';
    sp.style.left = '50%'; sp.style.top = '50%';
    sp.style.animationDelay = (i * 0.06) + 's';
    container.appendChild(sp);
    setTimeout(() => sp.remove(), 1200);
  }
}

// ══════════════════════════════════════════════
// UNLOCK
// ══════════════════════════════════════════════
function showUnlock(ch) {
  const ucTopContent = ch.image
    ? `<img src="${ch.image}" class="uc-img">`
    : `<svg width="80" height="110" viewBox="0 0 80 120"><defs><linearGradient id="ucg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${ch.color}" stop-opacity=".5"/><stop offset="100%" stop-color="${ch.color}" stop-opacity=".25"/></linearGradient></defs><circle cx="40" cy="28" r="16" fill="url(#ucg)"/><path d="M20 54Q28 42 40 40Q52 42 60 54L64 112Q40 120 16 112Z" fill="url(#ucg)"/></svg>`;
  document.getElementById('unlockCard').innerHTML = `
    <div class="uc-top" style="background:radial-gradient(ellipse at 50% 40%,${ch.colorLight},transparent 80%);">
      ${ucTopContent}
    </div>
    <div class="uc-info">
      <div class="uc-name" style="color:${ch.color}">${ch.name}</div>
      <div class="uc-stars">★★★</div>
      <div class="uc-quote">${ch.cardQuote}</div>
    </div>`;
  document.getElementById('unlockTitle').textContent = `✦ 恭喜获得 · ${ch.name}卡牌 ✦`;
  document.getElementById('unlockDialogue').innerHTML = ch.unlockDialogue;
  showScreen('screen-unlock');
}

function afterUnlock() {
  if (CONFIG.characters.every(c => state.progress[c.id] && state.progress[c.id].unlocked)) showScreen('screen-ending');
  else showScreen('screen-select');
}

// ══════════════════════════════════════════════
// COLLECTION — 点击已解锁卡片 → 放大居中 + 旋转动效
// ══════════════════════════════════════════════
function initCollectionScreen() {
  const grid = document.getElementById('collectionGrid');
  grid.innerHTML = '';
  CONFIG.characters.forEach(ch => {
    const prog = state.progress[ch.id] || { cardStars: 0, unlocked: false };
    const card = document.createElement('div');
    card.className = 'collection-card' + (prog.unlocked ? '' : ' locked');
    const stars = '★'.repeat(Math.min(prog.cardStars,3)) + '☆'.repeat(Math.max(0,3-prog.cardStars));
    const ccTopContent = ch.image
      ? `<img src="${ch.image}" class="cc-img">`
      : `<svg width="60" height="90" viewBox="0 0 80 120"><defs><linearGradient id="ccg${ch.id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${ch.color}" stop-opacity=".45"/><stop offset="100%" stop-color="${ch.color}" stop-opacity=".2"/></linearGradient></defs><circle cx="40" cy="28" r="16" fill="url(#ccg${ch.id})"/><path d="M20 54Q28 42 40 40Q52 42 60 54L64 112Q40 120 16 112Z" fill="url(#ccg${ch.id})"/></svg>`;
    card.innerHTML = `
      <div class="cc-top" style="background:radial-gradient(ellipse at 50% 40%,${ch.colorLight},transparent 80%);">
        ${ccTopContent}
      </div>
      <div class="cc-info">
        <div class="cc-name" style="color:${prog.unlocked?ch.color:'var(--text-light)'}">${ch.name}</div>
        <div class="cc-stars" style="color:var(--yellow)">${stars}</div>
      </div>`;
    if (prog.unlocked) {
      card.onclick = () => openCardDetail(ch, prog);
    }
    grid.appendChild(card);
  });
}

function openCardDetail(ch, prog) {
  const modal = document.getElementById('cardDetailModal');
  const cardEl = document.getElementById('cardDetailCard');
  const stars = '★'.repeat(Math.min(prog.cardStars,3)) + '☆'.repeat(Math.max(0,3-prog.cardStars));
  const cdTopContent = ch.image
    ? `<img src="${ch.image}" class="cd-img">`
    : `<div class="cd-emoji">${ch.emoji}</div>`;
  cardEl.innerHTML = `
    <div class="cd-top" style="background:radial-gradient(ellipse at 50% 40%,${ch.colorLight},transparent 70%);">
      ${cdTopContent}
    </div>
    <div class="cd-info">
      <div class="cd-name" style="color:${ch.color}">${ch.name}</div>
      <div class="cd-stars">${stars}</div>
      <div class="cd-quote">${ch.cardQuote}</div>
      <div class="cd-close-hint">点击空白处关闭</div>
    </div>`;
  modal.classList.remove('hiding');
  modal.classList.add('show');
  // Re-trigger animation
  cardEl.style.animation = 'none';
  cardEl.offsetHeight;
  cardEl.style.animation = '';
}

function closeCardDetail() {
  const modal = document.getElementById('cardDetailModal');
  modal.classList.add('hiding');
  setTimeout(() => {
    modal.classList.remove('show', 'hiding');
  }, 400);
}

// ══════════════════════════════════════════════
// SPLASH SCREEN
// ══════════════════════════════════════════════
function initSplash() {
  const splashEl = document.getElementById('screen-splash');
  if (!splashEl) { showScreen('screen-title'); return; }

  // 配置开屏图片
  if (CONFIG.splash.image) {
    document.getElementById('splashImg').src = CONFIG.splash.image;
  }

  // 自动过渡到首页
  setTimeout(() => {
    splashEl.classList.add('splash-fade');
    setTimeout(() => {
      splashEl.classList.remove('visible');
      splashEl.classList.add('hidden');
      splashEl.style.display = 'none';
      document.getElementById('screen-title').classList.remove('hidden');
      document.getElementById('screen-title').classList.add('visible');
    }, 600);
  }, CONFIG.splash.duration);
}

// ══════════════════════════════════════════════
// DEBUG PANEL (暗门) — 连续点击标题5次打开
// ══════════════════════════════════════════════
let _dbgTaps = 0, _dbgTimer = null;

function onTitleTap() {
  _dbgTaps++;
  if (_dbgTimer) clearTimeout(_dbgTimer);
  _dbgTimer = setTimeout(() => { _dbgTaps = 0; }, 1500);
  if (_dbgTaps >= 5) { _dbgTaps = 0; debugPanel(true); }
}

function debugPanel(show) {
  const panel = document.getElementById('debugPanel');
  if (show) {
    const sel = document.getElementById('dbgChar');
    sel.innerHTML = '';
    CONFIG.characters.forEach((ch, i) => {
      sel.innerHTML += `<option value="${i}">${ch.name}</option>`;
    });
    panel.classList.add('show');
  } else {
    panel.classList.remove('show');
  }
}

function debugStartGame() {
  const charIdx = parseInt(document.getElementById('dbgChar').value);
  const stars = parseInt(document.getElementById('dbgStars').value);
  state.selectedChar = charIdx;
  const ch = CONFIG.characters[charIdx];
  state.progress[ch.id].cardStars = stars;
  if (stars >= 3) state.progress[ch.id].unlocked = true;
  saveProgress();
  debugPanel(false);
  startNarrative();
}

function debugViewCard() {
  const charIdx = parseInt(document.getElementById('dbgChar').value);
  const stars = parseInt(document.getElementById('dbgStars').value);
  state.selectedChar = charIdx;
  const ch = CONFIG.characters[charIdx];
  state.progress[ch.id].cardStars = Math.max(stars, 1);
  if (stars >= 3) state.progress[ch.id].unlocked = true;
  saveProgress();
  debugPanel(false);

  if (state.progress[ch.id].unlocked) {
    openCardDetail(ch, state.progress[ch.id]);
  } else {
    showCardAcquire(ch, state.progress[ch.id], false);
  }
}

function debugResetGame() {
  if (!confirm('确定要初始化游戏吗？\n将清空所有角色的收集进度、卡牌星数，所有约会从第一关重新开始。')) return;
  state.progress = {};
  CONFIG.characters.forEach(c => {
    state.progress[c.id] = { cardStars: 0, unlocked: false };
  });
  localStorage.removeItem('dateGame_v3');
  localStorage.removeItem('dateGame_v2');
  saveProgress();
  debugPanel(false);
  showScreen('screen-title');
}

// ══════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════
loadProgress();
initSplash();

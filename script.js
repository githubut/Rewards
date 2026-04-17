// Mock Data for Gaming Rewards
const gamesData = [
    {
        id: 'genshin',
        title: 'Genshin Impact',
        category: 'action',
        developer: 'HoYoverse',
        description: 'An open-world action RPG where you embark on a journey across the vast world of Teyvat.',
        iconClass: 'fa-solid fa-dragon',
        color1: '#3b82f6',
        color2: '#0ea5e9',
        activeCodes: 5,
        trending: true,
        lastUpdated: '5 mins ago',
        redeemSteps: [
            'Reach Adventure Rank 10.',
            'Go to your account settings in-game.',
            'Select "Redeem Code" and enter your code.',
            'Check your in-game mailbox for rewards.'
        ],
        codes: [
            { code: 'GENSHINGIFT', reward: '50 Primogems, 3 Hero\'s Wit' },
            { code: 'CA3BLQURT73V', reward: '30 Primogems' }
        ],
        events: [
            { title: 'Lantern Rite Festival', date: 'Ends in 4 days', desc: 'Participate to get a free 4-star character.' }
        ],
        blogs: [
            { title: 'Best Neuvillette Build', desc: 'Complete guide to artifacts and weapons for Neuvillette.' }
        ]
    },
    {
        id: 'fragpro',
        title: 'Frag Pro Shooter',
        category: 'shooter',
        developer: 'Oh BiBi',
        description: 'A pure real-time PvP shooter where you can choose your hero and build your team.',
        iconClass: 'fa-solid fa-crosshairs',
        color1: '#f87171',
        color2: '#ef4444',
        activeCodes: 4,
        trending: false,
        lastUpdated: '1 hour ago',
        redeemSteps: [
            'Open the game and go to the "Shop" menu.',
            'Scroll down to the bottom of the shop.',
            'Tap on "Gift Code" and enter your code.'
        ],
        codes: [
            { code: 'FRAGCODE1', reward: '500 Coins' }
        ],
        events: [
            { title: 'Season 5 Finale', date: 'Live Now', desc: 'Double XP weekend and exclusive skins.' }
        ],
        blogs: [
            { title: 'Top 5 Frag Heroes', desc: 'Which heroes should you use in the current meta?' }
        ]
    },
    {
        id: 'cookierun',
        title: 'Cookie Run OvenSmash',
        category: 'shooter',
        developer: 'Devsisters',
        description: 'A real-time action battle game featuring your favorite Cookie Run characters.',
        iconClass: 'fa-solid fa-cookie-bite',
        color1: '#fbbf24',
        color2: '#f59e0b',
        activeCodes: 3,
        trending: true,
        lastUpdated: '3 hours ago',
        redeemSteps: [
            'Visit the official Devsisters coupon website.',
            'Enter your Player ID and the coupon code.',
            'Click Claim and restart your game.'
        ],
        codes: [
            { code: 'COOKIESMASH', reward: '1000 Crystals' }
        ],
        events: [
            { title: 'Smash Beta Test', date: 'Upcoming', desc: 'Register early to get exclusive beta rewards.' }
        ],
        blogs: [
            { title: 'Character Tier List', desc: 'The most powerful characters in the beta test.' }
        ]
    },
    {
        id: 'coinmaster',
        title: 'Coin Master',
        category: 'coinboard',
        developer: 'Moon Active',
        description: 'Spin for loot, attack and raid other players to build your viking village.',
        iconClass: 'fa-solid fa-coins',
        color1: '#fcd34d',
        color2: '#fbbf24',
        activeCodes: 3,
        trending: false,
        lastUpdated: '1 hour ago',
        redeemSteps: [
            'These are direct links. Just click the link on your mobile device.',
            'The Coin Master app will open automatically.',
            'Your reward will be credited immediately.'
        ],
        codes: [
            { code: 'Daily Link 1', reward: '25 Spins' }
        ],
        events: [
            { title: 'Village Master', date: 'Active', desc: 'Finish your village for extra bonus rewards.' }
        ],
        blogs: [
            { title: 'How to get free spins', desc: 'Everything you need to know about Coin Master daily links.' }
        ]
    },
    {
        id: 'monopoly',
        title: 'Monopoly GO!',
        category: 'coinboard',
        developer: 'Scopely',
        description: 'Roll the dice and build your empire in the modern take on the classic board game.',
        iconClass: 'fa-solid fa-dice',
        color1: '#10b981',
        color2: '#34d399',
        activeCodes: 6,
        trending: true,
        lastUpdated: '2 hours ago',
        redeemSteps: [
            'Click the free dice links on your mobile device.',
            'Wait for the app to load and claim your prize.',
            'Note: You must be level 15 to claim most rewards.'
        ],
        codes: [
            { code: 'Free Dice 1', reward: '25 Free Dice' }
        ],
        events: [
            { title: 'Golden Blitz', date: 'Ends in 24h', desc: 'Trade your gold stickers for a limited time.' }
        ],
        blogs: [
            { title: 'Sticker Collecting Guide', desc: 'The fastest way to complete your sticker albums.' }
        ]
    },
    {
        id: 'bloxfruits',
        title: 'Blox Fruits',
        category: 'roblox',
        developer: 'Gamer Robot',
        description: 'Become a master swordsman or a powerful blox fruit user to travel the seas.',
        iconClass: 'fa-solid fa-cube',
        color1: '#84cc16',
        color2: '#65a30d',
        activeCodes: 8,
        trending: true,
        lastUpdated: '12 mins ago',
        redeemSteps: [
            'Log into Blox Fruits on Roblox.',
            'Click the small Twitter icon on the left side.',
            'Enter the code and click the arrow button.'
        ],
        codes: [
            { code: 'NEWTROLL', reward: '2x Experience' }
        ],
        events: [
            { title: 'Spring Update', date: 'Latest', desc: 'New fruit awakenings and map changes.' }
        ],
        blogs: [
            { title: 'Sword Tier List', desc: 'Evaluating the best swords in the Second Sea.' }
        ]
    },
    {
        id: 'freefire',
        title: 'Free Fire',
        category: 'battleroyale',
        developer: 'Garena',
        description: 'A world-famous survival shooter game available on mobile.',
        iconClass: 'fa-solid fa-fire',
        color1: '#ef4444',
        color2: '#b91c1c',
        activeCodes: 12,
        trending: true,
        lastUpdated: 'Active now',
        redeemSteps: [
            'Visit the Garena Reward Redemption Site.',
            'Log in with your game account.',
            'Enter the code and click Confirm.'
        ],
        codes: [
            { code: 'FF9M2GF14CBF', reward: 'Free Diamonds' }
        ],
        events: [
            { title: 'Free Fire World Series', date: 'Nov 2024', desc: 'Watch the streams for special drop codes.' }
        ],
        blogs: [
            { title: 'Best Weapon Combos', desc: 'High damage loadouts for ranked matches.' }
        ]
    },
    {
        id: 'pubg',
        title: 'Pubg',
        category: 'battleroyale',
        developer: 'Krafton',
        description: 'The original battle royale game, refined for mobile and PC.',
        iconClass: 'fa-solid fa-gun',
        color1: '#4b5563',
        color2: '#1f2937',
        activeCodes: 7,
        trending: true,
        lastUpdated: '10 mins ago',
        redeemSteps: [
            'Go to the PUBG Mobile Redemption Center.',
            'Enter your Character ID and the code.',
            'Verify with the CAPTCHA and click Redeem.'
        ],
        codes: [
            { code: 'PUBG2024', reward: 'Permanent Skin' }
        ],
        events: [
            { title: 'Air Drop Carnival', date: 'Active', desc: 'Find special air drops for legendary loot.' }
        ],
        blogs: [
            { title: 'Map Guide: Erangel', desc: 'The best drop spots for survival and loot.' }
        ]
    }
];

// DOM Elements
const gamesGrid = document.getElementById('gamesGrid');
const searchInput = document.getElementById('searchInput');
const categoryTabs = document.querySelectorAll('.tab');
const themeToggle = document.getElementById('themeToggle');
const codesModal = document.getElementById('codesModal');
const closeModalBtn = document.getElementById('closeModal');
const modalGameIcon = document.getElementById('modalGameIcon');
const modalGameTitle = document.getElementById('modalGameTitle');
const codesList = document.getElementById('codesList');

// Submission Modal Elements
const submitModal = document.getElementById('submitModal');
const submitCodeBtn = document.getElementById('submitCodeBtn');
const footerSubmitBtn = document.getElementById('footerSubmitBtn');
const closeSubmitModal = document.getElementById('closeSubmitModal');
const submitForm = document.getElementById('submitForm');

// State
let currentCategory = 'trending';
let searchQuery = '';
let currentSort = 'none'; // none, az, za

// Theme Logic
themeToggle.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeToggle.querySelector('i').className = isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
});

// Render Logic
// Game Detail Page Logic
function renderGameDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');
    const game = gamesData.find(g => g.id === gameId);

    if (!game) {
        if (window.location.pathname.includes('game.html')) {
            window.location.href = 'index.html';
        }
        return;
    }

    // Update Basic Info
    document.title = `${game.title} Rewards & Codes | UTwalk`;
    const iconContainer = document.getElementById('gameIcon');
    iconContainer.style.background = `linear-gradient(135deg, ${game.color1}, ${game.color2})`;
    iconContainer.innerHTML = `<i class="${game.iconClass}"></i>`;

    document.getElementById('gameTitle').textContent = game.title;
    document.getElementById('gameDeveloper').textContent = game.developer;
    document.getElementById('gameCategory').textContent = game.category.replace('board', ' & Board');
    document.getElementById('gameDesc').textContent = game.description;

    // Render Codes
    const gameCodesList = document.getElementById('gameCodesList');
    gameCodesList.innerHTML = game.codes.map(c => `
        <div class="code-item">
            <div>
                <span class="code-text">${c.code}</span>
                <p class="reward-text">${c.reward}</p>
            </div>
            <button class="copy-btn" onclick="copyToClipboard('${c.code}', this.parentElement)">Copy</button>
        </div>
    `).join('');

    // Render Steps
    const redeemSteps = document.getElementById('redeemSteps');
    redeemSteps.innerHTML = game.redeemSteps.map((step, index) => `
        <li class="step-item">
            <div class="step-number">${index + 1}</div>
            <div class="step-text">${step}</div>
        </li>
    `).join('');

    // Render Events
    const eventsGrid = document.getElementById('eventsGrid');
    eventsGrid.innerHTML = game.events.map(e => `
        <div class="event-card">
            <span class="event-date">${e.date}</span>
            <h3>${e.title}</h3>
            <p>${e.desc}</p>
        </div>
    `).join('');

    // Render Blogs
    const blogsGrid = document.getElementById('blogsGrid');
    blogsGrid.innerHTML = game.blogs.map(b => `
        <div class="blog-card">
            <h3>${b.title}</h3>
            <p>${b.desc}</p>
            <a href="#" class="footer-action-link" style="margin-top: 1rem; display: inline-block;">Read Guide →</a>
        </div>
    `).join('');
}

// Global Copy Helper
function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        const btn = element.querySelector('.copy-btn');
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = originalText, 2000);
    });
}

function renderGames() {
    let filtered = gamesData.filter(game => {
        const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = currentCategory === 'all' || 
                                (currentCategory === 'trending' ? game.trending : game.category === currentCategory);
        return matchesSearch && matchesCategory;
    });

    // Sort Logic
    if (currentSort === 'az') {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (currentSort === 'za') {
        filtered.sort((a, b) => b.title.localeCompare(a.title));
    }

    gamesGrid.innerHTML = '';
    filtered.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.onclick = () => window.location.href = `game.html?id=${game.id}`;
        card.innerHTML = `
            <div class="game-icon" style="background: linear-gradient(135deg, ${game.color1}, ${game.color2})">
                <i class="${game.iconClass}"></i>
            </div>
            <div class="game-info">
                <div class="game-meta">
                    <span class="developer">${game.developer}</span>
                    <span class="update-time">${game.lastUpdated}</span>
                </div>
                <h3>${game.title}</h3>
            </div>
            <div class="game-footer">
                <div class="badge">${game.activeCodes} Active Rewards</div>
                <div class="card-btn">View <i class="fa-solid fa-arrow-right"></i></div>
            </div>
        `;
        gamesGrid.appendChild(card);
    });
}

// Global Copy Helper
function copyToClipboard(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => btn.textContent = originalText, 2000);
    });
}

// Event Listeners
searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderGames();
});

categoryTabs.forEach(tab => {
    // Preserve original text for reset
    if (!tab.dataset.originalText) {
        tab.dataset.originalText = tab.textContent;
    }

    tab.addEventListener('click', () => {
        const targetCategory = tab.dataset.category;

        if (targetCategory === 'trending') {
            // Trending - reset sorting and just show active
            currentCategory = 'trending';
            currentSort = 'none';
            categoryTabs.forEach(t => {
                t.classList.remove('active');
                t.innerHTML = t.dataset.originalText;
            });
            tab.classList.add('active');
        } else {
            // Other categories - handle A-Z / Z-A toggle
            if (currentCategory === targetCategory) {
                // Toggling current active category
                currentSort = (currentSort === 'az') ? 'za' : 'az';
            } else {
                // Selecting new category - default to A-Z
                currentCategory = targetCategory;
                currentSort = 'az';
            }

            // Update UI state
            categoryTabs.forEach(t => {
                t.classList.remove('active');
                t.innerHTML = t.dataset.originalText;
            });
            tab.classList.add('active');

            // Apply arrow indicators
            if (currentSort === 'az') {
                tab.innerHTML = `${tab.dataset.originalText} <i class="fa-solid fa-arrow-down"></i>`;
            } else {
                tab.innerHTML = `${tab.dataset.originalText} <i class="fa-solid fa-arrow-up"></i>`;
            }
        }
        renderGames();
    });
});

// Submission Modal Logic
const openSubmitModal = () => submitModal.classList.add('active');
const hideSubmitModal = () => submitModal.classList.remove('active');

submitCodeBtn.onclick = openSubmitModal;
footerSubmitBtn.onclick = openSubmitModal;
closeSubmitModal.onclick = hideSubmitModal;

submitForm.onsubmit = async (e) => {
    e.preventDefault();
    const btn = submitForm.querySelector('button');
    const originalText = btn.textContent;
    
    // FORM CONFIGURATION: Replace THIS URL with your real Formspree endpoint
    const FORMSPREE_URL = 'https://formspree.io/f/mojpovoe';

    btn.textContent = 'Sending to UTwalk...';
    btn.disabled = true;

    try {
        const formData = new FormData(submitForm);
        const response = await fetch(FORMSPREE_URL, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert('Thank you! Your code has been sent to UTwalk and is under review.');
            submitForm.reset();
            hideSubmitModal();
        } else {
            const data = await response.json();
            alert('Oops! ' + (data.errors ? data.errors[0].message : 'Something went wrong. Please check your Formspree ID.'));
        }
    } catch (error) {
        alert('Network Error: Please try again later.');
    } finally {
        btn.textContent = originalText;
        btn.disabled = false;
    }
};

window.onclick = (e) => { 
    if(e.target === submitModal) hideSubmitModal();
};

// Initial Render
if (window.location.pathname.includes('game.html')) {
    renderGameDetail();
} else {
    renderGames();
}

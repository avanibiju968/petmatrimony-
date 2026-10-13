/**
 * PawMatch - Interactive Pet Matrimony Platform
 * Full JavaScript application logic with rich pet biodatas, Pedigree food matching,
 * swiper card stack, favorites shortlisted, and matrimony proposal celebration.
 */

// Initial Seed Data with all requested features:
// Pet's Name, Profile, Photo, Species, Breed, Age, Sex, Height, Weight, City, Personality, Lifestyle, Parent Info, and Pedigree Food Match
const initialPets = [
  {
    id: 'pet-1',
    name: 'Leo',
    species: 'Dog',
    breed: 'Golden Retriever',
    sex: 'Male',
    age: '2.5 Years',
    height: '24 inches',
    weight: '32 kg',
    city: 'San Francisco, CA',
    photo: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80',
    favoriteFood: 'Chicken & Vegetables',
    personality: ['Affectionate', 'Loyal', 'High Energy', 'Good with kids'],
    lifestyle: 'Daily beach sprints, morning frisbee sessions, loves belly rubs during movie nights.',
    bio: 'Champion lineage Golden looking for an active, warm-hearted companion to share Sunday walks and fetch balls.',
    verified: true,
    parent: {
      name: 'Elena Rostova',
      relationship: 'Pet Mother',
      phone: '+1 (415) 890-2134',
      email: 'elena.rostova@pawmatch.com'
    }
  },
  {
    id: 'pet-2',
    name: 'Bella',
    species: 'Dog',
    breed: 'Labrador Retriever',
    sex: 'Female',
    age: '2 Years',
    height: '22 inches',
    weight: '28 kg',
    city: 'Seattle, WA',
    photo: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?auto=format&fit=crop&w=800&q=80',
    favoriteFood: 'Chicken & Vegetables',
    personality: ['Gentle Soul', 'Friendly', 'Calm', 'Water Lover'],
    lifestyle: 'Swimming enthusiast, weekend hiker, quiet indoor lounger with exemplary obedience training.',
    bio: 'Polite and social Labrador lady seeking a cheerful gentleman for playdates, pedigree dinners, and forever bonding.',
    verified: true,
    parent: {
      name: 'Marcus Vance',
      relationship: 'Pet Father',
      phone: '+1 (206) 555-7812',
      email: 'marcus.vance@pawmatch.com'
    }
  },
  {
    id: 'pet-3',
    name: 'Milo',
    species: 'Cat',
    breed: 'British Shorthair',
    sex: 'Male',
    age: '3 Years',
    height: '11 inches',
    weight: '6.2 kg',
    city: 'New York, NY',
    photo: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80',
    favoriteFood: 'Salmon & Tuna Feast',
    personality: ['Aristocratic', 'Gentleman', 'Quiet', 'Snuggle King'],
    lifestyle: 'Sunbeam napper, window bird-watching connoisseur, feather toy tactician.',
    bio: 'Plush sapphire-grey coat, calm demeanor, seeking an elegant feline lady of pure refinement.',
    verified: true,
    parent: {
      name: 'Sophia Sterling',
      relationship: 'Pet Guardian',
      phone: '+1 (212) 431-8902',
      email: 'sophia.sterling@pawmatch.com'
    }
  },
  {
    id: 'pet-4',
    name: 'Luna',
    species: 'Cat',
    breed: 'Persian Cat',
    sex: 'Female',
    age: '1.8 Years',
    height: '10 inches',
    weight: '4.5 kg',
    city: 'Boston, MA',
    photo: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
    favoriteFood: 'Salmon & Tuna Feast',
    personality: ['Sweet', 'Pampered', 'Playful', 'Soft-Spoken'],
    lifestyle: 'Regular grooming pamper sessions, gourmet dining, afternoon sofa cuddles.',
    bio: 'Silky doll-faced Persian seeking a handsome, serene cat companion with noble pedigree and quiet manners.',
    verified: true,
    parent: {
      name: 'David & Clara Kim',
      relationship: 'Pet Parents',
      phone: '+1 (617) 778-9041',
      email: 'clarakim@pawmatch.com'
    }
  },
  {
    id: 'pet-5',
    name: 'Rocky',
    species: 'Dog',
    breed: 'German Shepherd',
    sex: 'Male',
    age: '3.5 Years',
    height: '26 inches',
    weight: '36 kg',
    city: 'Denver, CO',
    photo: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=800&q=80',
    favoriteFood: 'Grilled Meat & Liver Loaf',
    personality: ['Protective', 'Intelligent', 'Courageous', 'Trainable'],
    lifestyle: 'Agility training, mountain trail runs, vigilant yard sentinel, thrives on intellectual games.',
    bio: 'AKC registered athletic Shepherd looking for a spirited female partner who loves adventure and outdoor trails.',
    verified: true,
    parent: {
      name: 'Captain Richard Hayes',
      relationship: 'Pet Father',
      phone: '+1 (303) 991-3420',
      email: 'richard.hayes@pawmatch.com'
    }
  },
  {
    id: 'pet-6',
    name: 'Daisy',
    species: 'Dog',
    breed: 'Beagle',
    sex: 'Female',
    age: '2 Years',
    height: '14 inches',
    weight: '11 kg',
    city: 'Austin, TX',
    photo: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80',
    favoriteFood: 'Chicken & Vegetables',
    personality: ['Curious', 'Cheerful', 'Foodie', 'Vocal'],
    lifestyle: 'Sniff walks, backyard scavenger hunts, loves burrowing in soft fleece blankets.',
    bio: 'Big floppy ears, joyful howl, and unmatched scent skills! Looking for a companion who loves snacks and playtime.',
    verified: true,
    parent: {
      name: 'Jessica Gomez',
      relationship: 'Pet Mother',
      phone: '+1 (512) 640-1928',
      email: 'jess.gomez@pawmatch.com'
    }
  },
  {
    id: 'pet-7',
    name: 'Oreo',
    species: 'Rabbit',
    breed: 'Holland Lop',
    sex: 'Male',
    age: '1.2 Years',
    height: '8 inches',
    weight: '1.8 kg',
    city: 'Portland, OR',
    photo: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80',
    favoriteFood: 'Organic Garden Crunch',
    personality: ['Bouncy', 'Inquisitive', 'Gentle', 'Cheeky'],
    lifestyle: 'Living room zoomies, cardboard tunnel explorer, Timothy hay connoisseur.',
    bio: 'Velvety lop-eared charmer looking for a sweet bunny partner to share herb salads and cozy burrow naps.',
    verified: true,
    parent: {
      name: 'Emily Watson',
      relationship: 'Pet Guardian',
      phone: '+1 (503) 891-2300',
      email: 'emily.bunny@pawmatch.com'
    }
  },
  {
    id: 'pet-8',
    name: 'Bruno',
    species: 'Dog',
    breed: 'Siberian Husky',
    sex: 'Male',
    age: '2.8 Years',
    height: '23 inches',
    weight: '27 kg',
    city: 'Chicago, IL',
    photo: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&w=800&q=80',
    favoriteFood: 'Lamb & Rice Stew',
    personality: ['Vocal Singer', 'Playful', 'Free Spirit', 'Charismatic'],
    lifestyle: 'Winter sledding, snowy park romps, vocal duets at sunrise, endless stamina.',
    bio: 'Ice-blue eyes and royal Northern heritage. Seeking an energetic beauty for winter runs and lifetime joy.',
    verified: true,
    parent: {
      name: 'Nikolai Petrov',
      relationship: 'Pet Parent',
      phone: '+1 (312) 709-8812',
      email: 'nikolai.husky@pawmatch.com'
    }
  }
];

// Application State
let pets = JSON.parse(localStorage.getItem('pawmatch_pets')) || initialPets;
let favorites = JSON.parse(localStorage.getItem('pawmatch_favorites')) || ['pet-1'];
let swiperIndex = 0;
let currentFilters = {
  species: 'All',
  gender: 'All',
  food: 'All',
  searchQuery: ''
};

// DOM Elements
const petGridContainer = document.getElementById('petGridContainer');
const noMatchState = document.getElementById('noMatchState');
const favCountBadge = document.getElementById('favCountBadge');
const favoritesGridContainer = document.getElementById('favoritesGridContainer');
const emptyFavorites = document.getElementById('emptyFavorites');

// Modals
const biodataModal = document.getElementById('biodataModal');
const biodataModalContent = document.getElementById('biodataModalContent');
const closeBiodataBtn = document.getElementById('closeBiodataBtn');

const addPetModal = document.getElementById('addPetModal');
const openAddPetModalBtn = document.getElementById('openAddPetModalBtn');
const closeAddPetModalBtn = document.getElementById('closeAddPetModalBtn');
const cancelAddPetBtn = document.getElementById('cancelAddPetBtn');
const addPetForm = document.getElementById('addPetForm');

const matchSuccessModal = document.getElementById('matchSuccessModal');
const celebrateCloseBtn = document.getElementById('celebrateCloseBtn');

const toastNotification = document.getElementById('toastNotification');

// Filter & Search Controls
const heroFilterSpecies = document.getElementById('heroFilterSpecies');
const heroFilterGender = document.getElementById('heroFilterGender');
const heroFilterFood = document.getElementById('heroFilterFood');
const heroApplyBtn = document.getElementById('heroApplyBtn');
const searchInput = document.getElementById('searchInput');
const resetFiltersBtn = document.getElementById('resetFiltersBtn');
const chipButtons = document.querySelectorAll('.chip-btn');

// Swiper Elements
const activeSwipeCard = document.getElementById('activeSwipeCard');
const btnSwipePass = document.getElementById('btnSwipePass');
const btnSwipeLove = document.getElementById('btnSwipeLove');
const btnSwipeDetail = document.getElementById('btnSwipeDetail');

// Navigation Tabs
const navLinks = document.querySelectorAll('.nav-link');
const tabSections = document.querySelectorAll('.app-tab-section');

// Food Matcher Selector Grid
const foodSelectorGrid = document.getElementById('foodSelectorGrid');
const foodMatchGrid = document.getElementById('foodMatchGrid');
const foodResultTitle = document.getElementById('foodResultTitle');

/* -------------------------------------------------------------------------
   INIT
   ------------------------------------------------------------------------- */
function init() {
  updateFavBadge();
  renderPetGrid();
  renderSwiperCard();
  setupEventListeners();
}

/* -------------------------------------------------------------------------
   RENDER PET GRID (DISCOVER TAB)
   ------------------------------------------------------------------------- */
function renderPetGrid() {
  const filtered = pets.filter(pet => {
    // Species filter
    if (currentFilters.species !== 'All' && pet.species !== currentFilters.species) return false;
    // Gender filter
    if (currentFilters.gender !== 'All' && pet.sex !== currentFilters.gender) return false;
    // Food Pedigree filter
    if (currentFilters.food !== 'All' && pet.favoriteFood !== currentFilters.food) return false;
    // Search text query (name, breed, city)
    if (currentFilters.searchQuery) {
      const q = currentFilters.searchQuery.toLowerCase();
      const matchName = pet.name.toLowerCase().includes(q);
      const matchBreed = pet.breed.toLowerCase().includes(q);
      const matchCity = pet.city.toLowerCase().includes(q);
      if (!matchName && !matchBreed && !matchCity) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    petGridContainer.innerHTML = '';
    noMatchState.classList.remove('hidden');
    return;
  }

  noMatchState.classList.add('hidden');
  petGridContainer.innerHTML = filtered.map(pet => createPetCardHTML(pet)).join('');
}

function createPetCardHTML(pet) {
  const isFav = favorites.includes(pet.id);
  const tagsHtml = pet.personality.slice(0, 3).map(tag => `<span class="tag-pill">${tag}</span>`).join('');
  const foodEmoji = getFoodEmoji(pet.favoriteFood);

  return `
    <article class="pet-card" data-id="${pet.id}">
      <div class="card-img-wrap">
        <img src="${pet.photo}" alt="${pet.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80'">
        <div class="card-top-badges">
          <span class="badge-gender ${pet.sex}">${pet.sex === 'Male' ? '♂ Male' : '♀ Female'}</span>
          <span class="badge-verified">✓ Verified Biodata</span>
        </div>
        <button class="card-fav-btn ${isFav ? 'is-fav' : ''}" onclick="toggleFavorite('${pet.id}')" title="${isFav ? 'Remove from Shortlist' : 'Add to Shortlist'}">
          ${isFav ? '❤️' : '🤍'}
        </button>
      </div>

      <div class="card-body">
        <div class="card-title-row">
          <h3 class="pet-name">${pet.name}</h3>
          <span class="pet-age">${pet.age}</span>
        </div>
        <p class="pet-breed-loc">${pet.breed} • 📍 ${pet.city}</p>

        <div class="bio-pills-row">
          <div class="bio-pill">
            <span>Height</span>
            <strong>${pet.height}</strong>
          </div>
          <div class="bio-pill">
            <span>Weight</span>
            <strong>${pet.weight}</strong>
          </div>
        </div>

        <div class="food-card-highlight">
          <span class="f-icon">${foodEmoji}</span>
          <div>
            <div class="f-meta">Pedigree Food Match</div>
            <strong>${pet.favoriteFood}</strong>
          </div>
        </div>

        <div class="personality-tags">
          ${tagsHtml}
        </div>

        <div class="card-footer">
          <button class="btn btn-outline" onclick="openPetBiodata('${pet.id}')">View Biodata</button>
          <button class="btn btn-primary" onclick="proposeMatrimony('${pet.id}')">Propose 💍</button>
        </div>
      </div>
    </article>
  `;
}

function getFoodEmoji(foodName) {
  if (foodName.includes('Chicken')) return '🍗';
  if (foodName.includes('Grilled') || foodName.includes('Beef') || foodName.includes('Meat')) return '🥩';
  if (foodName.includes('Salmon') || foodName.includes('Tuna') || foodName.includes('Fish')) return '🐟';
  if (foodName.includes('Milk')) return '🍼';
  if (foodName.includes('Garden') || foodName.includes('Crunch')) return '🥕';
  if (foodName.includes('Lamb')) return '🍲';
  return '🍖';
}

/* -------------------------------------------------------------------------
   PET BIODATA MODAL
   ------------------------------------------------------------------------- */
window.openPetBiodata = function(petId) {
  const pet = pets.find(p => p.id === petId);
  if (!pet) return;

  const foodEmoji = getFoodEmoji(pet.favoriteFood);
  const personalityPills = pet.personality.map(p => `<span class="tag-pill">${p}</span>`).join('');

  biodataModalContent.innerHTML = `
    <div class="biodata-hero">
      <img src="${pet.photo}" alt="${pet.name}" class="biodata-hero-img" onerror="this.src='https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80'">
      <div class="biodata-hero-info">
        <div>
          <div class="biodata-badge-group">
            <span class="badge-gender ${pet.sex}">${pet.sex === 'Male' ? '♂ Male Bachelor' : '♀ Female Bachelorette'}</span>
            <span class="badge-verified">✓ Lineage Certified</span>
          </div>
          <h2 class="biodata-title">${pet.name}</h2>
          <p class="biodata-breed-loc">${pet.species}: <strong>${pet.breed}</strong> in 📍 <strong>${pet.city}</strong></p>
          <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 16px;">${pet.bio}</p>
        </div>

        <div class="biodata-stats-grid">
          <div class="biodata-stat-card">
            <div class="label">Age</div>
            <div class="val">${pet.age}</div>
          </div>
          <div class="biodata-stat-card">
            <div class="label">Height</div>
            <div class="val">${pet.height}</div>
          </div>
          <div class="biodata-stat-card">
            <div class="label">Weight</div>
            <div class="val">${pet.weight}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pedigree Food Compatibility Box -->
    <div class="biodata-section-block">
      <h4>${foodEmoji} Gourmet Pedigree Profile</h4>
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 8px;">
        Favorite Recipe: <strong>${pet.favoriteFood}</strong>
      </p>
      <div class="food-card-highlight" style="margin-bottom: 0;">
        <span class="f-icon">${foodEmoji}</span>
        <div>
          <div class="f-meta">Dining Harmony Guarantee</div>
          <div style="font-size: 0.85rem; color: #7c2d12;">
            Pets that share this Pedigree preference report 94% higher companionship bond and meal-time joy!
          </div>
        </div>
      </div>
    </div>

    <!-- Personality & Lifestyle -->
    <div class="biodata-section-block">
      <h4>✨ Personality Traits</h4>
      <div class="personality-tags" style="margin-bottom: 12px;">
        ${personalityPills}
      </div>
      <h4>🏃 Daily Lifestyle & Habits</h4>
      <p style="font-size: 0.9rem; color: var(--text-secondary);">${pet.lifestyle}</p>
    </div>

    <!-- Parent & Guardian Information -->
    <div class="biodata-section-block">
      <h4>🏡 Pet Parent / Guardian Details</h4>
      <div class="parent-card">
        <div class="parent-info-avatar">
          <div class="parent-avatar-circle">👤</div>
          <div class="parent-details">
            <h5>${pet.parent.name}</h5>
            <p>${pet.parent.relationship} • 📍 ${pet.city}</p>
          </div>
        </div>
        <div class="parent-contact-btns">
          <a href="tel:${pet.parent.phone}" class="btn btn-outline" style="font-size: 0.82rem; padding: 6px 14px;">📞 Call Parent</a>
          <a href="mailto:${pet.parent.email}?subject=Matrimony Inquiry for ${pet.name}" class="btn btn-primary" style="font-size: 0.82rem; padding: 6px 14px;">✉️ Send Mail</a>
        </div>
      </div>
    </div>

    <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 14px;">
      <button class="btn btn-outline" onclick="toggleFavorite('${pet.id}'); openPetBiodata('${pet.id}')">
        ${favorites.includes(pet.id) ? '❤️ Shortlisted' : '🤍 Shortlist'}
      </button>
      <button class="btn btn-primary" onclick="biodataModal.classList.remove('open'); proposeMatrimony('${pet.id}')">
        Send Matrimony Proposal 💍
      </button>
    </div>
  `;

  biodataModal.classList.add('open');
};

/* -------------------------------------------------------------------------
   PROPOSAL & CELEBRATION
   ------------------------------------------------------------------------- */
window.proposeMatrimony = function(petId) {
  const targetPet = pets.find(p => p.id === petId);
  if (!targetPet) return;

  const pairLeft = document.getElementById('pairLeftPet');
  const pairRight = document.getElementById('pairRightPet');
  const matchFoodToast = document.getElementById('matchFoodToast');

  pairLeft.innerHTML = `<img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=80" alt="Your pet">`;
  pairRight.innerHTML = `<img src="${targetPet.photo}" alt="${targetPet.name}">`;
  
  matchFoodToast.innerHTML = `
    Both pets love <strong>Pedigree ${targetPet.favoriteFood}</strong>! 🍖<br>
    Guardian <strong>${targetPet.parent.name}</strong> will receive notification at <em>${targetPet.parent.email}</em>.
  `;

  matchSuccessModal.classList.add('open');

  // Also auto-add to favorites if not already
  if (!favorites.includes(targetPet.id)) {
    favorites.push(targetPet.id);
    saveFavorites();
    updateFavBadge();
    renderPetGrid();
  }
};

/* -------------------------------------------------------------------------
   FAVORITES / SHORTLIST MANAGEMENT
   ------------------------------------------------------------------------- */
window.toggleFavorite = function(petId) {
  if (favorites.includes(petId)) {
    favorites = favorites.filter(id => id !== petId);
    showToast('Removed from Shortlist');
  } else {
    favorites.push(petId);
    showToast('💖 Added to Shortlist!');
  }
  saveFavorites();
  updateFavBadge();
  renderPetGrid();
  renderFavoritesGrid();
};

function saveFavorites() {
  localStorage.setItem('pawmatch_favorites', JSON.stringify(favorites));
}

function updateFavBadge() {
  favCountBadge.textContent = favorites.length;
}

function renderFavoritesGrid() {
  const favPets = pets.filter(p => favorites.includes(p.id));
  if (favPets.length === 0) {
    favoritesGridContainer.innerHTML = '';
    emptyFavorites.classList.remove('hidden');
    return;
  }

  emptyFavorites.classList.add('hidden');
  favoritesGridContainer.innerHTML = favPets.map(pet => createPetCardHTML(pet)).join('');
}

/* -------------------------------------------------------------------------
   PAW SWIPER (TINDER STYLE)
   ------------------------------------------------------------------------- */
function renderSwiperCard() {
  if (swiperIndex >= pets.length) {
    activeSwipeCard.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; text-align:center; padding: 24px;">
        <div style="font-size: 3rem; margin-bottom: 12px;">🎉</div>
        <h3>You have reviewed all pet singles!</h3>
        <p style="color: var(--text-secondary); margin-bottom: 16px;">Check your shortlisted matches or explore the full catalog.</p>
        <button class="btn btn-secondary" onclick="resetSwiper()">Start Swiping Over 🔄</button>
      </div>
    `;
    return;
  }

  const pet = pets[swiperIndex];
  const foodEmoji = getFoodEmoji(pet.favoriteFood);

  activeSwipeCard.className = 'swipe-card';
  activeSwipeCard.innerHTML = `
    <div class="swipe-img-box">
      <img src="${pet.photo}" alt="${pet.name}" onerror="this.src='https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80'">
      <div class="swipe-badge-overlay">
        <span class="badge-gender ${pet.sex}">${pet.sex === 'Male' ? '♂ Male' : '♀ Female'}</span>
      </div>
      <div class="swipe-food-badge">
        ${foodEmoji} Pedigree: ${pet.favoriteFood}
      </div>
    </div>
    <div class="swipe-info-box">
      <div>
        <div class="swipe-name-bar">
          <h3 style="font-size: 1.4rem;">${pet.name}, <span style="font-weight: 500; font-size: 1.1rem; color: var(--text-secondary);">${pet.age}</span></h3>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--primary-color);">📍 ${pet.city}</span>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 8px;">
          ${pet.breed} • ${pet.height} • ${pet.weight}
        </p>
        <p style="font-size: 0.86rem; color: var(--text-primary);">${pet.bio}</p>
      </div>
      <div>
        <div class="personality-tags" style="margin-bottom: 0;">
          ${pet.personality.slice(0, 3).map(t => `<span class="tag-pill">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

function handleSwipe(action) {
  if (swiperIndex >= pets.length) return;
  const currentPet = pets[swiperIndex];

  if (action === 'like') {
    activeSwipeCard.classList.add('anim-like');
    if (!favorites.includes(currentPet.id)) {
      favorites.push(currentPet.id);
      saveFavorites();
      updateFavBadge();
      renderPetGrid();
    }
    showToast(`💖 Shortlisted ${currentPet.name}!`);
  } else {
    activeSwipeCard.classList.add('anim-dislike');
  }

  setTimeout(() => {
    swiperIndex++;
    renderSwiperCard();
  }, 280);
}

window.resetSwiper = function() {
  swiperIndex = 0;
  renderSwiperCard();
};

/* -------------------------------------------------------------------------
   PEDIGREE FOOD COMPATIBILITY MATCHER VIEW
   ------------------------------------------------------------------------- */
function selectFoodDelicacy(dishName, cardElement) {
  document.querySelectorAll('.food-choice-card').forEach(c => c.classList.remove('selected'));
  cardElement.classList.add('selected');

  foodResultTitle.innerHTML = `Pets whose heart melts for <strong>Pedigree ${dishName}</strong> 🍖:`;

  const matchedPets = pets.filter(p => p.favoriteFood === dishName);
  if (matchedPets.length === 0) {
    foodMatchGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1;">
        <div class="empty-icon">🥣</div>
        <h3>No pets currently registered with this exact flavor!</h3>
        <p>Be the first pet parent to register with this Pedigree delicacy!</p>
      </div>
    `;
    return;
  }

  foodMatchGrid.innerHTML = matchedPets.map(p => createPetCardHTML(p)).join('');
}

/* -------------------------------------------------------------------------
   ADD NEW PET FORM SUBMISSION
   ------------------------------------------------------------------------- */
function handleRegisterPet(e) {
  e.preventDefault();

  const name = document.getElementById('regName').value.trim();
  const species = document.getElementById('regSpecies').value;
  const breed = document.getElementById('regBreed').value.trim();
  const sex = document.getElementById('regSex').value;
  const age = document.getElementById('regAge').value.trim();
  const height = document.getElementById('regHeight').value.trim();
  const weight = document.getElementById('regWeight').value.trim();
  const city = document.getElementById('regCity').value.trim();
  let photo = document.getElementById('regPhoto').value.trim();
  const favoriteFood = document.getElementById('regFood').value;
  const personalityStr = document.getElementById('regPersonality').value.trim();
  const lifestyle = document.getElementById('regLifestyle').value.trim();
  const parentName = document.getElementById('regParentName').value.trim();
  const parentPhone = document.getElementById('regParentPhone').value.trim();
  const parentEmail = document.getElementById('regParentEmail').value.trim();

  // Default photo fallbacks if user leaves blank
  if (!photo) {
    if (species === 'Cat') {
      photo = 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80';
    } else if (species === 'Rabbit') {
      photo = 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=800&q=80';
    } else {
      photo = 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80';
    }
  }

  const personality = personalityStr.split(',').map(s => s.trim()).filter(Boolean);

  const newPet = {
    id: 'pet-' + Date.now(),
    name,
    species,
    breed,
    sex,
    age,
    height,
    weight,
    city,
    photo,
    favoriteFood,
    personality: personality.length ? personality : ['Friendly', 'Playful'],
    lifestyle,
    bio: `${breed} with charming temperament and refined habits. Registered by loving pet parent ${parentName}.`,
    verified: true,
    parent: {
      name: parentName,
      relationship: 'Pet Guardian',
      phone: parentPhone,
      email: parentEmail
    }
  };

  pets.unshift(newPet);
  localStorage.setItem('pawmatch_pets', JSON.stringify(pets));

  addPetModal.classList.remove('open');
  addPetForm.reset();
  showToast(`🐾 ${name} registered successfully for matrimony!`);

  // Switch to discover tab and render
  window.switchTab('discover');
  renderPetGrid();
  resetSwiper();
}

/* -------------------------------------------------------------------------
   NAVIGATION TABS
   ------------------------------------------------------------------------- */
window.switchTab = function(tabName) {
  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.tab === tabName);
  });

  tabSections.forEach(sec => {
    if (sec.id === `section-${tabName}`) {
      sec.classList.remove('hidden');
    } else {
      sec.classList.add('hidden');
    }
  });

  if (tabName === 'favorites') {
    renderFavoritesGrid();
  } else if (tabName === 'swipes') {
    renderSwiperCard();
  }
};

/* -------------------------------------------------------------------------
   TOAST HELPER
   ------------------------------------------------------------------------- */
function showToast(msg) {
  toastNotification.textContent = msg;
  toastNotification.classList.add('show');
  setTimeout(() => {
    toastNotification.classList.remove('show');
  }, 2600);
}

/* -------------------------------------------------------------------------
   EVENT LISTENERS SETUP
   ------------------------------------------------------------------------- */
function setupEventListeners() {
  // Navigation tabs
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = link.dataset.tab;
      window.switchTab(tab);
    });
  });

  // Hero search bar apply
  heroApplyBtn.addEventListener('click', () => {
    currentFilters.species = heroFilterSpecies.value;
    currentFilters.gender = heroFilterGender.value;
    currentFilters.food = heroFilterFood.value;
    window.switchTab('discover');
    renderPetGrid();
    window.scrollTo({ top: petGridContainer.offsetTop - 100, behavior: 'smooth' });
  });

  // Text search input
  searchInput.addEventListener('input', (e) => {
    currentFilters.searchQuery = e.target.value;
    renderPetGrid();
  });

  // Reset filters button
  resetFiltersBtn.addEventListener('click', () => {
    currentFilters = { species: 'All', gender: 'All', food: 'All', searchQuery: '' };
    heroFilterSpecies.value = 'All';
    heroFilterGender.value = 'All';
    heroFilterFood.value = 'All';
    searchInput.value = '';
    chipButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.food === 'All'));
    renderPetGrid();
  });

  // Chip buttons
  chipButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      chipButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilters.food = btn.dataset.food;
      renderPetGrid();
    });
  });

  // Swiper buttons
  btnSwipePass.addEventListener('click', () => handleSwipe('pass'));
  btnSwipeLove.addEventListener('click', () => handleSwipe('like'));
  btnSwipeDetail.addEventListener('click', () => {
    if (pets[swiperIndex]) {
      window.openPetBiodata(pets[swiperIndex].id);
    }
  });

  // Keyboard navigation for swiper
  window.addEventListener('keydown', (e) => {
    const swiperSec = document.getElementById('section-swipes');
    if (!swiperSec.classList.contains('hidden')) {
      if (e.key === 'ArrowLeft') handleSwipe('pass');
      if (e.key === 'ArrowRight') handleSwipe('like');
    }
  });

  // Food matcher choice cards
  document.querySelectorAll('.food-choice-card').forEach(card => {
    card.addEventListener('click', () => {
      const dish = card.dataset.dish;
      selectFoodDelicacy(dish, card);
    });
  });

  // Modals close
  closeBiodataBtn.addEventListener('click', () => biodataModal.classList.remove('open'));
  biodataModal.addEventListener('click', (e) => {
    if (e.target === biodataModal) biodataModal.classList.remove('open');
  });

  openAddPetModalBtn.addEventListener('click', () => addPetModal.classList.add('open'));
  closeAddPetModalBtn.addEventListener('click', () => addPetModal.classList.remove('open'));
  cancelAddPetBtn.addEventListener('click', () => addPetModal.classList.remove('open'));
  addPetModal.addEventListener('click', (e) => {
    if (e.target === addPetModal) addPetModal.classList.remove('open');
  });

  celebrateCloseBtn.addEventListener('click', () => matchSuccessModal.classList.remove('open'));
  matchSuccessModal.addEventListener('click', (e) => {
    if (e.target === matchSuccessModal) matchSuccessModal.classList.remove('open');
  });

  // Registration form
  addPetForm.addEventListener('submit', handleRegisterPet);

  // Logo home click
  document.getElementById('navLogo').addEventListener('click', () => {
    window.switchTab('discover');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Kickoff
document.addEventListener('DOMContentLoaded', init);

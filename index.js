// Shapes Uniform - Official B2B Client Application & Dynamic Catalog
// Strictly adhering to Deep Red #C0392B, friendly terminology, and mobile-first responsiveness

const defaultSiteData = {
  settings: {
    brandName: 'Shapes Uniform',
    tagline: 'Premium Custom Uniforms for Schools, Corporates & Hospitals',
    heroTitle: 'Premium Custom Uniforms for Schools, Corporates & Hospitals',
    heroDescription: 'We design and manufacture high-grade custom uniforms with durable fabrics, computerized logo embroidery, precision stitching, and guaranteed on-time delivery across India.',
    phone: '9833392756',
    email: 'shapesuniform@gmail.com',
    address: 'SHAPES UNIFORM, Vaity House, Kelkar Wadi, Nagesh Patil Wadi, Near Amar Cinema, Ghatla, Chembur, Mumbai - 400071',
    openingHours: 'Mon - Sat: 9:00 AM - 8:00 PM | Sunday: Closed',
    webhookUrl: 'https://script.google.com/macros/s/AKfycbwhgX47ZGkxCWd1nG48cFPaejScGV3OdpT_o5dPS0V42vIM3YFdZ21Ehow9UjDeOK0u/exec'
  },
  // 8 Specialized Categories
  categories: [
    {
      id: 'cat-school',
      title: 'School Uniforms',
      group: 'school',
      tag: 'K-12 & Academies',
      moq: '50 - 100 Sets',
      fabrics: 'Colorfast Poly-Cotton Twill, Breathable Shirting',
      description: 'Durable, comfortable school uniforms including blazers, shirts, trousers, skirts, pinafores, and sports PE kits tailored for all grade levels.',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cat-corporate',
      title: 'Corporate Uniforms',
      group: 'corporate',
      tag: 'Executive & Formal',
      moq: '50 - 100 Sets',
      fabrics: 'Poly-Viscose Suiting, 100% Cotton, Wrinkle-Free Weaves',
      description: 'Sophisticated executive blazers, tailored formal trousers, corporate suits, and office shirting designed to reflect professionalism.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cat-medical',
      title: 'Medical & Scrubs',
      group: 'medical',
      tag: 'Healthcare & Clinical',
      moq: '50 - 100 Sets',
      fabrics: 'Fluid-Repellent Antimicrobial 4-Way Stretch Poplin',
      description: 'Ergonomic scrub sets, doctor lab coats, and nursing tunics crafted with breathable, antimicrobial, and fluid-resistant textiles.',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cat-hospitality',
      title: 'Hotel & Hospitality',
      group: 'hospitality',
      tag: 'Hotels & Resorts',
      moq: '50 - 100 Sets',
      fabrics: 'Stain-Resistant Easy-Wash Poly-Viscose Tunic Fabric',
      description: 'Front desk suiting, spa & housekeeping tunics, bellhop uniforms, and service vests tailored for premier hospitality environments.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cat-industrial',
      title: 'Industrial & Security',
      group: 'industrial',
      tag: 'Factories & Security',
      moq: '50 - 100 Units',
      fabrics: 'Heavy 280-320 GSM Cotton Drill, Fire-Retardant Finish',
      description: 'Heavy-duty high-visibility boiler suits, safety jackets, and tactical security officer uniforms built for rigorous everyday use.',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cat-chef',
      title: 'Chef Coats',
      group: 'hospitality',
      tag: 'Kitchen & Fine Dining',
      moq: '50 - 100 Units',
      fabrics: 'Heat-Resistant Cotton-Poly Twill, Air-Vent Mesh',
      description: 'Double-breasted breathable chef coats, protective kitchen aprons, and staff trousers engineered to withstand kitchen heat.',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cat-tshirts',
      title: 'T-Shirts & Custom',
      group: 'events',
      tag: 'Corporate & Events',
      moq: '100 Units',
      fabrics: '180-220 GSM Bio-Washed Combed Cotton, Dry-Fit Poly',
      description: 'Custom polo t-shirts, crew necks, sports jerseys, and event t-shirts with detailed embroidery or vibrant full-color printing.',
      image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cat-costumes',
      title: 'Costumes & Dance',
      group: 'events',
      tag: 'Stage & Annual Day',
      moq: '50 Sets',
      fabrics: 'Stage Satin, Stretch Lycra, Shimmer Velvet & Trims',
      description: 'Vibrant, custom-tailored stage costumes, thematic character outfits, and coordinate accessories designed for school annual day celebrations.',
      image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80'
    }
  ],
  // 12 Featured Catalog Products
  products: [
    {
      id: 'prod-1',
      title: 'Executive Corporate Blazer',
      category: 'corporate',
      tag: 'Corporate Wear',
      moq: '50 Pieces',
      fabrics: 'Premium Poly-Viscose Suiting',
      description: 'Tailored executive blazer with structured shoulder fit, interior satin lining, and custom corporate crest embroidery.',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'prod-2',
      title: 'Formal Office Trouser & Shirt Set',
      category: 'corporate',
      tag: 'Corporate Wear',
      moq: '100 Sets',
      fabrics: 'Wrinkle-Free Breathable Cotton Blend',
      description: 'Crisp button-down corporate office shirts paired with flat-front formal trousers in customized Pantone corporate shades.',
      image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'prod-3',
      title: 'Classic School Uniform Set with Tie',
      category: 'school',
      tag: 'School Uniforms',
      moq: '100 Sets',
      fabrics: 'Colorfast Poly-Cotton Twill Weave',
      description: 'Standard institutional school sets comprising collared shirt, pleated skirt or trouser, custom woven tie, and socks.',
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'prod-4',
      title: 'Institutional School Blazer & Crest',
      category: 'school',
      tag: 'School Uniforms',
      moq: '50 Sets',
      fabrics: 'Heavyweight Serge Wool / Poly-Viscose',
      description: 'Formal school academy blazer with brass or engraved buttons and high-definition Tajima computerized school crest embroidery.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'prod-5',
      title: 'Antimicrobial Medical Scrub Suit',
      category: 'medical',
      tag: 'Medical & Scrubs',
      moq: '50 Sets',
      fabrics: 'Fluid-Resistant 4-Way Stretch Poplin',
      description: 'V-neck scrub top with multi-pocket cargo pants. Breathable, quick-dry, and resistant to hospital bleaching protocols.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'prod-6',
      title: 'Doctor Consultation Lab Coat',
      category: 'medical',
      tag: 'Medical & Scrubs',
      moq: '50 Pieces',
      fabrics: 'Heavy 100% Mercerized Cotton Twill',
      description: 'Full-length knee doctor lab coat with reinforced side vents, iPad/tablet pocket, and doctor name embroidery.',
      image: 'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'prod-7',
      title: 'Premium Double-Breasted Chef Jacket',
      category: 'hospitality',
      tag: 'Chef Coats',
      moq: '50 Pieces',
      fabrics: 'Heat-Resistant Cotton-Poly Twill',
      description: 'Professional chef jacket with removable stud buttons, back underarm air-vent mesh, and thermometer sleeve pocket.',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'prod-8',
      title: 'Spa & Housekeeping Tunic Set',
      category: 'hospitality',
      tag: 'Hotel & Hospitality',
      moq: '50 Sets',
      fabrics: 'Lightweight Poly-Viscose Tunic Fabric',
      description: 'Comfortable Mandarin collar tunic top with flexible drawstring pants for wellness spas, salons, and housekeeping personnel.',
      image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'prod-9',
      title: 'Heavy Industrial Boiler Suit / Coverall',
      category: 'industrial',
      tag: 'Industrial & Security',
      moq: '50 Units',
      fabrics: '280-320 GSM Heavy Cotton Drill',
      description: 'Rugged one-piece industrial coverall with 3M reflective safety tape, two-way heavy brass zip, and tool pockets.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'prod-10',
      title: 'Security Guard Field Uniform Set',
      category: 'industrial',
      tag: 'Industrial & Security',
      moq: '50 Sets',
      fabrics: 'Reinforced Ripstop Weave / Heavy Poly-Wool',
      description: 'Crisp epauletted security shirt, lanyard, whistle cord, tactical utility trousers, and customized insignia patches.',
      image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'prod-11',
      title: 'Custom Bio-Washed Corporate Polo T-Shirt',
      category: 'corporate',
      tag: 'T-Shirts & Custom',
      moq: '100 Units',
      fabrics: '220 GSM Honeycomb Pique Cotton',
      description: 'Bio-polished pique cotton polo shirt with ribbed collar and cuffs, customized with high-density logo embroidery.',
      image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'prod-12',
      title: 'School Annual Day Thematic Stage Costume',
      category: 'school',
      tag: 'Costumes & Dance',
      moq: '50 Sets',
      fabrics: 'Vibrant Stage Satin, Lycra & Velvet',
      description: 'Complete theatrical production costumes designed according to choreography themes, historical periods, or folk dance forms.',
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80'
    }
  ],
  // 19 Vibrant Client Brand Logos (Full Color Vectors)
  brands: [
    { name: 'VIBGYOR High School', logo: 'logos/vibgyor.svg', tag: 'School Uniforms' },
    { name: 'EuroKids Preschool', logo: 'logos/eurokids.svg', tag: 'School Uniforms' },
    { name: 'St. Gregorios High School', logo: 'logos/st_gregorios.svg', tag: 'School Uniforms' },
    { name: 'Trilegal Legal Firm', logo: 'logos/trilegal.svg', tag: 'Legal & Corporate' },
    { name: 'Gandhar Oil Refinery', logo: 'logos/gandhar.svg', tag: 'Industrial Energy' },
    { name: 'Chembur Gymkhana Club', logo: 'logos/chembur_gymkhana.svg', tag: 'Hospitality & Leisure' },
    { name: 'Four Fountains De-stress Spa', logo: 'logos/four_fountains.svg', tag: 'Spa & Wellness' },
    { name: 'Sparogya Luxury Spa', logo: 'logos/sparogya.svg', tag: 'Spa & Wellness' },
    { name: 'Zen Aura Luxury Spa', logo: 'logos/zen_aura.svg', tag: 'Spa & Wellness' },
    { name: 'HR Wellness Spa & Salon', logo: 'logos/hr_wellness.svg', tag: 'Spa & Salon' },
    { name: 'AIS Wellness Healthcare', logo: 'logos/ais_wellness.svg', tag: 'Healthcare & Clinical' },
    { name: 'ALYF Real Estate', logo: 'logos/alyf.svg', tag: 'Corporate & Real Estate' },
    { name: 'Mobikon Technologies', logo: 'logos/mobikon.svg', tag: 'Technology & Corporate' },
    { name: 'World Dance Company', logo: 'logos/world_dance.svg', tag: 'Costumes & Performing Arts' },
    { name: 'InVideo Media', logo: 'logos/invideo.svg', tag: 'Media & Technology' },
    { name: 'Say Cheez Unisex Salon', logo: 'logos/say_cheez.svg', tag: 'Salon & Grooming' },
    { name: 'Tip Top Unisex Salon', logo: 'logos/tip_top.svg', tag: 'Salon & Grooming' },
    { name: 'Sudha Pure By Nature', logo: 'logos/sudha.svg', tag: 'Retail & Wellness' },
    { name: 'Bloom Hair Clinic', logo: 'logos/bloom_hair.svg', tag: 'Medical & Clinical' }
  ],
  inquiries: []
};

// State manager
let siteData = { ...defaultSiteData };
let currentCatalogFilter = 'all';
let currentSearchQuery = '';

// Load configuration
function loadConfiguration() {
  const saved = localStorage.getItem('shapes_uniform_b2b_data');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      siteData.settings = { ...defaultSiteData.settings, ...(parsed.settings || {}) };
      // Always enforce the current manufacturing address
      siteData.settings.address = defaultSiteData.settings.address;
      if (!siteData.settings.webhookUrl) {
        siteData.settings.webhookUrl = defaultSiteData.settings.webhookUrl;
      }
      siteData.categories = defaultSiteData.categories;
      siteData.products = defaultSiteData.products;
      siteData.brands = defaultSiteData.brands;
      siteData.inquiries = parsed.inquiries || [];
    } catch (e) {
      siteData = { ...defaultSiteData };
    }
  } else {
    siteData = { ...defaultSiteData };
    localStorage.setItem('shapes_uniform_b2b_data', JSON.stringify(defaultSiteData));
  }
}

function saveConfiguration() {
  localStorage.setItem('shapes_uniform_b2b_data', JSON.stringify(siteData));
}

// Render dynamic site details into UI
function renderSiteDetails() {
  const s = siteData.settings;
  
  const brandEl = document.getElementById('site-brand-name');
  if (brandEl) brandEl.innerText = s.brandName.toUpperCase();
  
  const phoneText = document.getElementById('site-phone-text');
  if (phoneText) phoneText.innerText = s.phone;
  
  const phoneLink = document.getElementById('site-phone-link');
  if (phoneLink) phoneLink.setAttribute('href', `tel:${s.phone}`);

  const heroTitle = document.getElementById('hero-title-text');
  if (heroTitle && s.heroTitle) heroTitle.innerHTML = 'Premium Custom Uniforms<br>for Schools, Corporates &amp; Hospitals';

  const infoPhone = document.getElementById('site-info-phone');
  if (infoPhone) {
    infoPhone.innerText = s.phone;
    infoPhone.setAttribute('href', `tel:${s.phone}`);
  }

  const infoEmail = document.getElementById('site-info-email');
  if (infoEmail) {
    infoEmail.innerText = s.email;
    infoEmail.setAttribute('href', `mailto:${s.email}`);
  }

  const infoAddress = document.getElementById('site-info-address');
  if (infoAddress) infoAddress.innerText = s.address;

  const infoHours = document.getElementById('site-info-hours');
  if (infoHours) infoHours.innerText = s.openingHours;

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.innerText = new Date().getFullYear();
}

// ==========================================================
// FEATURED PRODUCTS CATALOG RENDERING & FILTERING
// ==========================================================
function renderFeaturedProducts(filter = 'all', query = '') {
  const grid = document.getElementById('featured-products-grid');
  if (!grid) return;

  const q = query.trim().toLowerCase();

  const filtered = siteData.products.filter(item => {
    const matchesFilter = (filter === 'all') || (item.category === filter);
    const matchesQuery = !q || 
      item.title.toLowerCase().includes(q) || 
      item.description.toLowerCase().includes(q) || 
      item.tag.toLowerCase().includes(q) ||
      item.fabrics.toLowerCase().includes(q);
    return matchesFilter && matchesQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <p style="font-size: 18px; margin-bottom: 8px;">No uniforms found matching "<strong>${query}</strong>".</p>
        <p style="font-size: 14px;">Try searching for "blazer", "scrub", "school", or "chef".</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <div class="product-item-card" data-product-id="${item.id}">
      <div class="prod-img-frame">
        <span class="prod-tag-pill">${item.tag}</span>
        <img 
          src="${item.image}" 
          alt="${item.title}" 
          class="prod-img"
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80'"
        />
      </div>
      <div class="prod-body">
        <h3 class="prod-title">${item.title}</h3>
        <p class="prod-desc">${item.description}</p>
        <div class="prod-fabric-info">
          <span>🧵</span>
          <span>${item.fabrics}</span>
        </div>
        <div class="prod-actions">
          <button type="button" onclick="openProductModal('${item.id}')" class="btn btn-outline prod-spec-btn">
            View Details
          </button>
          <button type="button" onclick="handleProductInquire('${item.title}')" class="btn btn-primary prod-enquire-btn">
            Enquire &rarr;
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Setup Catalog Filters & Search
function setupCatalogControls() {
  const filterTabs = document.getElementById('catalog-filter-tabs');
  const searchInput = document.getElementById('catalog-search-input');
  const clearBtn = document.getElementById('catalog-search-clear');

  if (filterTabs) {
    filterTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-tab-btn');
      if (!btn) return;

      filterTabs.querySelectorAll('.filter-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentCatalogFilter = btn.getAttribute('data-filter') || 'all';
      renderFeaturedProducts(currentCatalogFilter, currentSearchQuery);
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      if (clearBtn) clearBtn.style.display = currentSearchQuery ? 'inline' : 'none';
      renderFeaturedProducts(currentCatalogFilter, currentSearchQuery);
    });
  }

  if (clearBtn && searchInput) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      currentSearchQuery = '';
      clearBtn.style.display = 'none';
      renderFeaturedProducts(currentCatalogFilter, '');
    });
  }
}

// Global Filter helper
window.filterPortfolio = function(categoryGroup) {
  const filterBtn = document.querySelector(`.filter-tab-btn[data-filter="${categoryGroup}"]`);
  if (filterBtn) {
    filterBtn.click();
  } else {
    currentCatalogFilter = categoryGroup;
    renderFeaturedProducts(categoryGroup, currentSearchQuery);
  }
  const portfolio = document.getElementById('portfolio');
  if (portfolio) {
    portfolio.scrollIntoView({ behavior: 'smooth' });
  }
};

// Handle Direct Product Inquiry
window.handleProductInquire = function(productTitle) {
  const contact = document.getElementById('contact');
  if (contact) {
    contact.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const msg = document.getElementById('form-message');
      if (msg) {
        msg.value = `I am interested in getting a wholesale quote for: ${productTitle}. Please share fabric samples and pricing.`;
        msg.focus();
      }
    }, 450);
  }
};

// ==========================================================
// MODAL DETAILS CONTROLLER
// ==========================================================
window.openProductModal = function(id) {
  // Can be a category or a product
  let item = siteData.products.find(p => p.id === id);
  if (!item) {
    item = siteData.categories.find(c => c.id === id);
  }
  if (!item) return;

  const overlay = document.getElementById('product-modal-overlay');
  const img = document.getElementById('modal-img');
  const tag = document.getElementById('modal-tag');
  const title = document.getElementById('modal-title');
  const desc = document.getElementById('modal-desc');
  const fabric = document.getElementById('modal-fabric');
  const moq = document.getElementById('modal-moq');
  const inquireBtn = document.getElementById('modal-inquire-btn');
  const waBtn = document.getElementById('modal-wa-btn');

  if (img) img.src = item.image;
  if (tag) tag.innerText = item.tag || 'Custom Uniform';
  if (title) title.innerText = item.title;
  if (desc) desc.innerText = item.description;
  if (fabric) fabric.innerText = item.fabrics || 'Premium Mill-Direct Blend';
  if (moq) moq.innerText = `Minimum Order: ${item.moq || '50 - 100 Pieces'}`;

  if (inquireBtn) {
    inquireBtn.onclick = () => {
      closeProductModal();
      handleProductInquire(item.title);
    };
  }

  if (waBtn) {
    const waText = encodeURIComponent(`Hello Shapes Uniform, I would like to get a quote for ${item.title} (${item.tag || 'Custom Uniform'}).`);
    waBtn.href = `https://wa.me/919833392756?text=${waText}`;
  }

  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeProductModal = function() {
  const overlay = document.getElementById('product-modal-overlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
};

function setupModalListeners() {
  const closeBtn = document.getElementById('modal-close-btn');
  const overlay = document.getElementById('product-modal-overlay');

  if (closeBtn) closeBtn.addEventListener('click', closeProductModal);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeProductModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProductModal();
  });
}

// ==========================================================
// ORDER PLANNING TOOLS (NO TECHNICAL JARGON)
// ==========================================================
function setupEstimator() {
  const slider = document.getElementById('est-qty-slider');
  const qtyDisplay = document.getElementById('est-qty-val');
  const catSelect = document.getElementById('est-category');
  const summaryTimeline = document.getElementById('summary-timeline');
  const waBtn = document.getElementById('est-send-wa-btn');

  if (!slider || !catSelect) return;

  function updateEstimate() {
    const qty = parseInt(slider.value, 10);
    const cat = catSelect.value;
    
    qtyDisplay.innerText = `${qty.toLocaleString()} Units`;

    let timeline = '12 - 16 Days';
    if (qty <= 300) timeline = '10 - 14 Days';
    else if (qty <= 1000) timeline = '14 - 18 Days';
    else if (qty <= 2500) timeline = '18 - 24 Days';
    else timeline = '25 - 30 Days';

    if (summaryTimeline) summaryTimeline.innerText = timeline;

    if (waBtn) {
      const emb = document.getElementById('est-opt-embroidery')?.checked ? 'Yes' : 'No';
      const dye = document.getElementById('est-opt-custom-dye')?.checked ? 'Yes' : 'No';
      const pkg = document.getElementById('est-opt-packaging')?.checked ? 'Yes' : 'No';

      const waMsg = `Hello Shapes Uniform, I used your Order Timeline Calculator:%0A- Uniform Type: ${encodeURIComponent(cat)}%0A- Volume: ${qty} Pieces%0A- Logo Embroidery: ${emb}%0A- Custom Dye: ${dye}%0A- Poly-packing: ${pkg}%0APlease share wholesale quotation.`;
      waBtn.onclick = () => {
        window.open(`https://wa.me/919833392756?text=${waMsg}`, '_blank');
      };
    }
  }

  slider.addEventListener('input', updateEstimate);
  catSelect.addEventListener('change', updateEstimate);
  document.getElementById('est-opt-embroidery')?.addEventListener('change', updateEstimate);
  document.getElementById('est-opt-custom-dye')?.addEventListener('change', updateEstimate);
  document.getElementById('est-opt-packaging')?.addEventListener('change', updateEstimate);

  updateEstimate();
}

window.applyEstimatorToForm = function() {
  const cat = document.getElementById('est-category')?.value;
  const qty = parseInt(document.getElementById('est-qty-slider')?.value || '500', 10);

  const formCat = document.getElementById('inquiry-category');
  if (formCat && cat) {
    for (let i = 0; i < formCat.options.length; i++) {
      if (formCat.options[i].text.includes(cat) || cat.includes(formCat.options[i].text)) {
        formCat.selectedIndex = i;
        break;
      }
    }
  }

  const formVol = document.getElementById('form-volume');
  if (formVol) {
    if (qty <= 100) formVol.value = '50-100';
    else if (qty <= 300) formVol.value = '100-300';
    else if (qty <= 500) formVol.value = '300-500';
    else if (qty <= 1000) formVol.value = '500-1000';
    else formVol.value = '1000+';
  }

  const msg = document.getElementById('form-message');
  if (msg) {
    msg.value = `Estimated order: ${qty} units of ${cat}. Calculated via website timeline tool.`;
  }

  const contact = document.getElementById('contact');
  if (contact) {
    contact.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => msg?.focus(), 450);
  }
};

// Bulk Size Breakdown Guide
window.stepSize = function(inputId, delta) {
  const input = document.getElementById(inputId);
  if (!input) return;
  let val = parseInt(input.value, 10) || 0;
  val = Math.max(0, val + delta);
  input.value = val;
  calculateMatrixTotal();
};

window.calculateMatrixTotal = function() {
  const sizes = ['size-s', 'size-m', 'size-l', 'size-xl', 'size-xxl', 'size-3xl'];
  let total = 0;
  sizes.forEach(id => {
    const el = document.getElementById(id);
    if (el) total += parseInt(el.value, 10) || 0;
  });

  const totalEl = document.getElementById('matrix-total-units');
  if (totalEl) totalEl.innerText = `${total.toLocaleString()} Pcs`;

  const summaryTotal = document.getElementById('matrix-summary-total');
  if (summaryTotal) summaryTotal.innerText = `${total.toLocaleString()} Pieces`;

  const waBtn = document.getElementById('matrix-send-wa-btn');
  if (waBtn) {
    const s = document.getElementById('size-s')?.value || '0';
    const m = document.getElementById('size-m')?.value || '0';
    const l = document.getElementById('size-l')?.value || '0';
    const xl = document.getElementById('size-xl')?.value || '0';
    const xxl = document.getElementById('size-xxl')?.value || '0';
    const xxxl = document.getElementById('size-3xl')?.value || '0';

    const msg = `Hello Shapes Uniform, I selected my size breakdown for uniforms:%0A- S: ${s} pcs%0A- M: ${m} pcs%0A- L: ${l} pcs%0A- XL: ${xl} pcs%0A- XXL: ${xxl} pcs%0A- 3XL: ${xxxl} pcs%0A*Total: ${total} Pcs*%0APlease share wholesale pricing.`;
    waBtn.onclick = () => {
      window.open(`https://wa.me/919833392756?text=${msg}`, '_blank');
    };
  }
};

window.applyMatrixToForm = function() {
  const s = document.getElementById('size-s')?.value || '0';
  const m = document.getElementById('size-m')?.value || '0';
  const l = document.getElementById('size-l')?.value || '0';
  const xl = document.getElementById('size-xl')?.value || '0';
  const xxl = document.getElementById('size-xxl')?.value || '0';
  const xxxl = document.getElementById('size-3xl')?.value || '0';
  const total = (parseInt(s, 10) || 0) + (parseInt(m, 10) || 0) + (parseInt(l, 10) || 0) + (parseInt(xl, 10) || 0) + (parseInt(xxl, 10) || 0) + (parseInt(xxxl, 10) || 0);

  const formMsg = document.getElementById('form-message');
  if (formMsg) {
    formMsg.value = `Size Breakdown (Total: ${total} pcs):\n- S: ${s} pcs\n- M: ${m} pcs\n- L: ${l} pcs\n- XL: ${xl} pcs\n- XXL: ${xxl} pcs\n- 3XL: ${xxxl} pcs`;
  }

  const formVol = document.getElementById('form-volume');
  if (formVol) {
    if (total <= 100) formVol.value = '50-100';
    else if (total <= 300) formVol.value = '100-300';
    else if (total <= 500) formVol.value = '300-500';
    else if (total <= 1000) formVol.value = '500-1000';
    else formVol.value = '1000+';
  }

  const contact = document.getElementById('contact');
  if (contact) {
    contact.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => formMsg?.focus(), 450);
  }
};

function setupSizeMatrix() {
  const sizes = ['size-s', 'size-m', 'size-l', 'size-xl', 'size-xxl', 'size-3xl'];
  sizes.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', calculateMatrixTotal);
  });
  calculateMatrixTotal();
}

// ==========================================================
// CLIENT LOGOS ENLARGED INFINITE TICKER
// ==========================================================
function renderBrandsStrip() {
  const marqueeTrack = document.getElementById('brands-marquee-track');
  if (!marqueeTrack || !siteData.brands || siteData.brands.length === 0) return;

  const items = siteData.brands.map(brand => `
    <div class="marquee-item" title="${brand.name}${brand.tag ? ' - ' + brand.tag : ''}">
      <img src="${brand.logo}" alt="${brand.name}" class="marquee-img" loading="lazy">
    </div>
  `).join('');

  // Duplicate 3 times for seamless infinite loop
  marqueeTrack.innerHTML = items + items + items;
}

// ==========================================================
// FAQ ACCORDION
// ==========================================================
function setupFaqAccordion() {
  const container = document.getElementById('faq-accordion-container');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.faq-question');
    if (!btn) return;

    const item = btn.closest('.faq-item');
    if (!item) return;

    const isOpen = item.classList.contains('active');
    
    // Close others
    container.querySelectorAll('.faq-item').forEach(el => {
      el.classList.remove('active');
      const q = el.querySelector('.faq-question');
      if (q) q.setAttribute('aria-expanded', 'false');
    });

    if (!isOpen) {
      item.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
}

// ==========================================================
// NAVIGATION LISTENERS (MOBILE DRAWER & STICKY HEADER)
// ==========================================================
function setupNavigationListeners() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const drawer = document.getElementById('mobile-menu-drawer');
  const closeBtn = document.getElementById('drawer-close-btn');
  
  function closeDrawer() {
    if (drawer) {
      drawer.classList.remove('open');
      document.body.style.overflow = '';
      if (toggleBtn) toggleBtn.classList.remove('active');
    }
  }

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = drawer.classList.toggle('open');
      toggleBtn.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  if (drawer) {
    const mobileLinks = drawer.querySelectorAll('.mobile-drawer-link, .m-drawer-quote-btn');
    mobileLinks.forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) {
        closeDrawer();
      }
    });
  }

  // Header scroll drop-shadow effect
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }
}

// ==========================================================
// BACKGROUND HERO VIDEO AUTOPLAY (MOBILE & LAPTOP)
// ==========================================================
function setupHeroVideo() {
  const video = document.getElementById('hero-bg-video') || document.querySelector('.hero-video-bg');
  if (!video) return;

  // Strict mobile WebKit & Blink autoplay requirements
  video.muted = true;
  video.defaultMuted = true;
  video.playsInline = true;
  video.setAttribute('muted', '');
  video.setAttribute('playsinline', '');
  video.setAttribute('webkit-playsinline', '');

  function attemptPlay() {
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback for iOS Low Power Mode or initial policy block:
        // Automatically start on the first touch or scroll anywhere on the document
        const unlockPlay = () => {
          video.play().catch(() => {});
        };
        ['touchstart', 'touchend', 'click', 'scroll'].forEach(evt => {
          window.addEventListener(evt, unlockPlay, { once: true, passive: true });
        });
      });
    }
  }

  // Attempt autoplay immediately
  attemptPlay();

  // Retry on media ready events
  video.addEventListener('loadedmetadata', attemptPlay);
  video.addEventListener('loadeddata', attemptPlay);
  video.addEventListener('canplay', attemptPlay);

  // Resume when returning from another browser tab
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && video.paused) {
      attemptPlay();
    }
  });
}

// ==========================================================
// QUOTE FORM SUBMISSION (EMAIL TO shapesuniform@gmail.com + GOOGLE SHEETS)
// ==========================================================
function setupFormSubmitListener() {
  const form = document.getElementById('b2b-quote-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submit-btn');
    const successBanner = document.getElementById('form-success-banner');
    
    const inquiry = {
      id: Date.now().toString(),
      name: (document.getElementById('form-name')?.value || '').trim(),
      company: (document.getElementById('form-company')?.value || '').trim(),
      email: (document.getElementById('form-email')?.value || '').trim(),
      phone: (document.getElementById('form-phone')?.value || '').trim(),
      category: document.getElementById('inquiry-category')?.value || 'School Uniforms',
      quantity: document.getElementById('form-volume')?.value || '300-500',
      message: (document.getElementById('form-message')?.value || '').trim(),
      date: new Date().toISOString()
    };

    if (submitBtn) {
      submitBtn.setAttribute('disabled', 'true');
      const textSpan = submitBtn.querySelector('.btn-text');
      const loaderSpan = submitBtn.querySelector('.btn-loader-text');
      if (textSpan) textSpan.style.display = 'none';
      if (loaderSpan) {
        loaderSpan.innerText = 'Sending Quote to Email & Sheets...';
        loaderSpan.style.display = 'inline';
      }
    }

    // 1. Log to local application state
    siteData.inquiries = [inquiry, ...(siteData.inquiries || [])];
    saveConfiguration();

    // 2. Prepare payload for Google Sheets & Email dispatch
    const payload = {
      name: inquiry.name,
      company: inquiry.company,
      email: inquiry.email,
      phone: inquiry.phone,
      category: inquiry.category,
      quantity: inquiry.quantity,
      message: inquiry.message || 'No additional custom specs provided',
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    // 3. Dispatch to Google Sheets Webhook
    const webhook = siteData.settings.webhookUrl || localStorage.getItem('shapes_google_sheets_webhook') || 'https://script.google.com/macros/s/AKfycbwhgX47ZGkxCWd1nG48cFPaejScGV3OdpT_o5dPS0V42vIM3YFdZ21Ehow9UjDeOK0u/exec';
    if (webhook && webhook.trim().startsWith('http')) {
      fetch(webhook.trim(), {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(err => console.warn('Google Sheets Webhook dispatch note:', err));
    }

    // 4. Dispatch to direct FormSubmit email gateway to deliver immediately to shapesuniform@gmail.com
    fetch('https://formsubmit.co/ajax/shapesuniform@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "Client Name": inquiry.name,
        "Company / Organization": inquiry.company,
        "Phone Number": inquiry.phone,
        "Email Address": inquiry.email,
        "Uniform Category": inquiry.category,
        "Estimated Order Quantity": inquiry.quantity,
        "Custom Specifications": inquiry.message || "Standard requirements",
        "_subject": `New B2B Uniform Inquiry - ${inquiry.company} (${inquiry.name})`
      })
    }).catch(err => console.warn('Direct email gateway note:', err));

    // 5. Configure WhatsApp priority follow-up button
    const waBtn = document.getElementById('form-wa-confirm-btn');
    if (waBtn) {
      const waMsg = `Hello Shapes Uniform, I just submitted a quote request on shapesuniform.in:%0A- Name: ${encodeURIComponent(inquiry.name)}%0A- Company: ${encodeURIComponent(inquiry.company)}%0A- Phone: ${encodeURIComponent(inquiry.phone)}%0A- Email: ${encodeURIComponent(inquiry.email)}%0A- Category: ${encodeURIComponent(inquiry.category)}%0A- Volume: ${encodeURIComponent(inquiry.quantity)}%0A- Specs: ${encodeURIComponent(inquiry.message || 'Standard specs')}`;
      waBtn.href = `https://wa.me/919833392756?text=${waMsg}`;
    }

    // Reset button & form
    if (submitBtn) {
      submitBtn.removeAttribute('disabled');
      const textSpan = submitBtn.querySelector('.btn-text');
      const loaderSpan = submitBtn.querySelector('.btn-loader-text');
      if (textSpan) textSpan.style.display = 'inline';
      if (loaderSpan) loaderSpan.style.display = 'none';
    }

    form.reset();

    // Show success alert
    if (successBanner) {
      successBanner.style.display = 'flex';
      successBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}

// ==========================================================
// INITIALIZATION
// ==========================================================
function init() {
  loadConfiguration();
  renderSiteDetails();
  renderFeaturedProducts('all');
  setupCatalogControls();
  renderBrandsStrip();
  setupEstimator();
  setupSizeMatrix();
  setupFaqAccordion();
  setupModalListeners();
  setupNavigationListeners();
  setupFormSubmitListener();
  setupHeroVideo();
}

document.addEventListener('DOMContentLoaded', init);

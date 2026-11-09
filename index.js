// Shapes Uniform - Core B2B Client Application & Interactive Portfolio
// Initial static default seed data
const defaultSiteData = {
  settings: {
    brandName: 'Shapes Uniform',
    tagline: 'Premium Bulk Uniforms & Garment Manufacturing',
    heroTitle: 'Corporate & Bulk Uniform Manufacturing Specialists',
    heroDescription: 'Shapes Uniform designs and manufactures high-grade custom uniforms for corporate offices, medical personnel, security staff, school divisions, and industrial environments. We deliver exact custom stitching, industrial-strength fabrics, and guaranteed timely delivery.',
    phone: '9833392756',
    email: 'shapesuniform@gmail.com',
    address: '504, Shubh Apartments, Aziz Baug, Mahul Road, Chembur, Mumbai - 400074',
    openingHours: 'Mon - Sat: 9:00 AM - 8:00 PM | Sunday: Closed',
    webhookUrl: '',
    capacityStats: [
      { label: 'Monthly Factory Capacity', value: '50,000+ Units' },
      { label: 'Quality Inspection Levels', value: '3-Tier QA Check' },
      { label: 'Timely Shipment Metric', value: '99.4% On-Time' },
      { label: 'Active Corporate Clients', value: '250+ Brands' }
    ]
  },
  brands: [
    { name: 'Four Fountains De-stress Spa', logo: 'logos/four_fountains.svg', tag: 'Spa & Wellness', category: 'spa' },
    { name: 'HR Wellness Spa & Salon', logo: 'logos/hr_wellness.svg', tag: 'Spa & Salon', category: 'spa' },
    { name: 'Zen Aura Spa', logo: 'logos/zen_aura.svg', tag: 'Spa & Wellness', category: 'spa' },
    { name: 'Sparogya Luxury Spa', logo: 'https://static.wixstatic.com/media/99bdf8_594c1340b45e4c169910bea22c4dcf53~mv2.png', tag: 'Spa & Wellness', category: 'spa' },
    { name: 'AIS Wellness Group', logo: 'https://static.wixstatic.com/media/99bdf8_d12286eaefdd44cfafeb0e7a8d3602a7~mv2.jpg', tag: 'Healthcare & Wellness', category: 'spa' },
    { name: 'ALYF', logo: 'logos/alyf.svg', tag: 'Corporate & Real Estate', category: 'corporate' },
    { name: 'Mobikon', logo: 'logos/mobikon.svg', tag: 'Technology & Corporate', category: 'corporate' },
    { name: 'World Dance Company', logo: 'logos/world_dance.svg', tag: 'Costumes & Performing Arts', category: 'industrial' },
    { name: 'InVideo - Play Your Ideas', logo: 'logos/invideo.svg', tag: 'Media & Technology', category: 'corporate' },
    { name: 'VIBGYOR High School', logo: 'logos/vibgyor.svg', tag: 'School Uniforms', category: 'education' },
    { name: 'EuroKids Preschool', logo: 'logos/eurokids.svg', tag: 'School Uniforms', category: 'education' },
    { name: 'Say Cheez Salon', logo: 'logos/say_cheez.svg', tag: 'Salon & Grooming', category: 'spa' },
    { name: 'Tip Top Unisex Salon', logo: 'logos/tip_top.svg', tag: 'Salon & Grooming', category: 'spa' },
    { name: 'St. Gregorios High School', logo: 'logos/st_gregorios.svg', tag: 'School Uniforms', category: 'education' },
    { name: 'Sudha - Pure By Nature', logo: 'logos/sudha.svg', tag: 'Retail & Wellness', category: 'spa' },
    { name: 'Bloom Hair Transplant', logo: 'logos/bloom_hair.svg', tag: 'Medical & Clinical', category: 'spa' },
    { name: 'Trilegal Legal Firm', logo: 'https://static.wixstatic.com/media/99bdf8_016019b5f5214f979e21953d9afc32d8~mv2.webp/v1/fill/w_420,h_140,al_c,lg_1,q_80,enc_avif,quality_auto/cropped-Trilegal-Logo.webp', tag: 'Legal & Corporate', category: 'corporate' },
    { name: 'Gandhar Oil Refinery', logo: 'https://static.wixstatic.com/media/99bdf8_25d4da38e43c4cee84b463fdc0cfa463~mv2.png/v1/fill/w_806,h_344,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/gandhar%20logo.png', tag: 'Industrial Energy', category: 'industrial' },
    { name: 'Chembur Gymkhana Club', logo: 'https://static.wixstatic.com/media/99bdf8_36c010a3394144d19dc460ef1dbbb796~mv2.jpg/v1/fill/w_352,h_408,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/chembur%20gymkhana.jpg', tag: 'Hospitality & Leisure', category: 'industrial' }
  ],
  categories: [
    {
      id: 'corporate',
      title: 'Corporate Wear',
      group: 'corporate',
      tag: 'Executive & Formal',
      fabrics: 'Poly-Viscose Suiting, 100% Cotton, Wrinkle-Free Blend',
      moq: '100 Sets',
      description: 'Sophisticated suits, premium blazers, executive shirts, and formal trousers designed to reflect professionalism and command authority.',
      image: 'https://static.wixstatic.com/media/af05e4_8ae6038793054ab3b4466cbee9e1003d~mv2.jpg'
    },
    {
      id: 'school',
      title: 'School Uniforms',
      group: 'school',
      tag: 'K-12 & Colleges',
      fabrics: 'Colorfast Poly-Cotton Twill, Breathable Shirting',
      moq: '150 Sets',
      description: 'Durable, comfortable school uniforms including blazers, shirts, trousers, skirts, and PE kits tailored for institutional bulk requirements across all grade levels.',
      image: 'https://static.wixstatic.com/media/af05e4_adbbb1be1510499a9b49b99cf8d8b257~mv2.jpg'
    },
    {
      id: 'medical',
      title: 'Hospital & Medical Uniforms',
      group: 'medical',
      tag: 'Healthcare & Surgery',
      fabrics: 'Fluid-Repellent Antimicrobial 4-Way Stretch Poplin',
      moq: '100 Sets',
      description: 'Ergonomic scrub sets, lab coats, and support staff uniforms crafted with breathable, antimicrobial, and fluid-resistant textiles.',
      image: 'https://static.wixstatic.com/media/af05e4_3f5bebae858040d5928bd618226dce9a~mv2.jpg'
    },
    {
      id: 'industrial',
      title: 'Industrial & Safety Wear',
      group: 'industrial',
      tag: 'Factories & Refineries',
      fabrics: 'Heavy 280-320 GSM Cotton Drill, Fire-Retardant Finish',
      moq: '100 Units',
      description: 'Heavy-duty high-visibility coveralls, fire-retardant utility jackets, and reinforced trousers engineered for extreme environments.',
      image: 'https://static.wixstatic.com/media/af05e4_f582c609f87f4e79946a4c760286031d~mv2.jpg'
    },
    {
      id: 'security',
      title: 'Security & Tactical Uniforms',
      group: 'industrial',
      tag: 'Field Officers & Guards',
      fabrics: 'Reinforced Ripstop Weave, Heavy Poly-Wool',
      moq: '100 Sets',
      description: 'Durable uniform shirts, utility trousers, badges, and caps configured for private security officers, pilots, and field patrol teams.',
      image: 'https://static.wixstatic.com/media/af05e4_b900aab891f04adfa3dd93284dec1bde~mv2.jpg'
    },
    {
      id: 'chef',
      title: 'Chef & Hospitality Coats',
      group: 'hospitality',
      tag: 'Hotels & Fine Dining',
      fabrics: 'Heat-Resistant Cotton-Poly Twill, Air-Vent Mesh',
      moq: '100 Units',
      description: 'Double-breasted breathable chef coats, protective aprons, service vests, and kitchen staff trousers built to withstand kitchen heat.',
      image: 'https://static.wixstatic.com/media/af05e4_ca63ce636e294cc1b211055342cb2b48~mv2.jpg'
    },
    {
      id: 'tshirts',
      title: 'T-Shirts & Event Wear',
      group: 'events',
      tag: 'Promotions & Marathons',
      fabrics: '180-200 GSM Bio-Washed Combed Cotton, Dry-Fit Poly',
      moq: '200 Units',
      description: 'Custom round-neck, V-neck, and collar t-shirts available in bulk for corporate events, marathons, staff outings, and promotional campaigns with full-color printing.',
      image: 'https://static.wixstatic.com/media/af05e4_d1298effb2da4126b072285f1614360f~mv2.jpg'
    },
    {
      id: 'polos',
      title: 'Polo Shirts & Promotional Wear',
      group: 'events',
      tag: 'Workplace Casual & Golf',
      fabrics: '220 GSM Honeycomb Pique Cotton, Bio-Polished',
      moq: '100 Units',
      description: 'Custom corporate polo shirts, event t-shirts, and casual workplace wear customized with premium direct-to-garment printing or detailed embroidery.',
      image: 'https://static.wixstatic.com/media/af05e4_066ab6b6223746cfb593d4fe49db51d7~mv2.jpg'
    },
    {
      id: 'housekeeping',
      title: 'Spa & Housekeeping Uniform',
      group: 'hospitality',
      tag: 'Wellness & Resorts',
      fabrics: 'Lightweight Easy-Wash Poly-Viscose Tunic Fabric',
      moq: '100 Sets',
      description: 'Clean-cut, flexible tunic tops and matching trousers tailored for salon, spa, clinical care, and facility maintenance personnel.',
      image: 'https://static.wixstatic.com/media/af05e4_5a3512b83547430796f3dc673bbb5d90~mv2.jpg'
    },
    {
      id: 'costumes',
      title: 'School Annual Day Costumes',
      group: 'events',
      tag: 'Stage & Theatrical Outfits',
      fabrics: 'Vibrant Stage Satin, Stretch Lycra, Shimmer Velvet',
      moq: '50 Sets',
      description: 'Vibrant, premium custom-tailored stage costumes, thematic character outfits, and coordinate accessories designed for school annual day celebrations and theatre productions.',
      image: 'https://static.wixstatic.com/media/af05e4_0c00916cecb14c07873782a752ad58be~mv2.jpg'
    },
    {
      id: 'others',
      title: 'Linens & Accessories',
      group: 'corporate',
      tag: 'Hotel & Institutional Linens',
      fabrics: 'Commercial High-Thread Weaves, Satin Stripe',
      moq: '100 Units',
      description: 'Quality bedsheets, hospital pillowcases, industrial aprons, school ties, belts, socks, and other customizable uniform components.',
      image: 'https://static.wixstatic.com/media/af05e4_355a022ad6c04542ad1ddc44f99fe1d4~mv2.jpg'
    }
  ],
  inquiries: []
};

// State manager holding site data
let siteData = { ...defaultSiteData };
let currentCategoryFilter = 'all';
let currentBrandFilter = 'all';

// Load configurations from localStorage
function loadConfiguration() {
  const saved = localStorage.getItem('shapes_uniform_b2b_data');
  if (saved) {
    try {
      siteData = JSON.parse(saved);
      // Synchronize latest brands and categories data
      siteData.brands = defaultSiteData.brands;
      if (!siteData.settings) siteData.settings = defaultSiteData.settings;
      if (!siteData.categories || siteData.categories.length < defaultSiteData.categories.length) {
        siteData.categories = defaultSiteData.categories;
      }
      localStorage.setItem('shapes_uniform_b2b_data', JSON.stringify(siteData));
    } catch (e) {
      console.error('Failed to parse site data, resetting', e);
      siteData = { ...defaultSiteData };
      localStorage.setItem('shapes_uniform_b2b_data', JSON.stringify(defaultSiteData));
    }
  } else {
    siteData = { ...defaultSiteData };
    localStorage.setItem('shapes_uniform_b2b_data', JSON.stringify(defaultSiteData));
  }
}

// Save configuration state
function saveConfiguration() {
  localStorage.setItem('shapes_uniform_b2b_data', JSON.stringify(siteData));
}

// Render dynamic site details into UI
function renderSiteDetails() {
  const s = siteData.settings;
  
  // Header texts
  const brandEl = document.getElementById('site-brand-name');
  if (brandEl) brandEl.innerText = s.brandName.toUpperCase();
  
  const phoneText = document.getElementById('site-phone-text');
  if (phoneText) phoneText.innerText = s.phone;
  
  const phoneLink = document.getElementById('site-phone-link');
  if (phoneLink) phoneLink.setAttribute('href', `tel:${s.phone}`);

  const mobPhone = document.getElementById('mobile-phone-link');
  if (mobPhone) {
    mobPhone.innerText = `Call: ${s.phone}`;
    mobPhone.setAttribute('href', `tel:${s.phone}`);
  }

  const mobEmail = document.getElementById('mobile-email-text');
  if (mobEmail) mobEmail.innerText = s.email;

  // Hero elements
  const heroTitle = document.getElementById('hero-title-text');
  if (heroTitle) heroTitle.innerText = s.heroTitle;
  
  const heroDesc = document.getElementById('hero-desc-text');
  if (heroDesc) heroDesc.innerText = s.heroDescription;

  // Contact info elements
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

  // Footer elements
  const footerBrand = document.getElementById('footer-brand-text');
  if (footerBrand) footerBrand.innerText = s.brandName.toUpperCase();

  const footerAddr = document.getElementById('footer-address-text');
  if (footerAddr) footerAddr.innerText = s.address;

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.innerText = new Date().getFullYear();
}

// Render product category cards with interactive actions
function renderCategoriesGrid(filter = 'all') {
  const grid = document.getElementById('portfolio-categories-grid');
  if (!grid) return;

  const filtered = filter === 'all' 
    ? siteData.categories 
    : siteData.categories.filter(c => c.group === filter);

  grid.innerHTML = filtered.map(cat => `
    <div class="product-card hover-lift" data-category-id="${cat.id}">
      <div class="card-image-wrapper">
        <img 
          src="${cat.image}" 
          alt="${cat.title}" 
          class="card-image"
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80'"
        />
        <div class="card-image-overlay"></div>
        <span class="card-category-badge">${cat.tag || 'B2B Uniform'}</span>
        <span class="card-moq-pill">MOQ: ${cat.moq || '100 Pcs'}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${cat.title}</h3>
        <p class="card-text">${cat.description}</p>
        <div class="card-fabric-chip">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <span>${cat.fabrics || 'Custom Mill Blend'}</span>
        </div>
        <div class="card-actions">
          <button type="button" onclick="openProductModal('${cat.id}')" class="btn btn-outline card-spec-btn">
            View Specs
          </button>
          <button type="button" onclick="handleCategorySelect('${cat.title}')" class="btn btn-primary card-inquire-btn">
            <span>Request Sample</span>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Populate dropdown in inquiry form
  const select = document.getElementById('inquiry-category');
  if (select && select.children.length === 0) {
    select.innerHTML = siteData.categories.map(cat => `
      <option value="${cat.title}">${cat.title}</option>
    `).join('');
  }
}

// Category filter tabs listener
function setupCategoryFilters() {
  const filterBar = document.getElementById('category-filter-bar');
  if (!filterBar) return;

  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-tab-btn');
    if (!btn) return;

    filterBar.querySelectorAll('.filter-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    currentCategoryFilter = btn.getAttribute('data-filter') || 'all';
    renderCategoriesGrid(currentCategoryFilter);
  });
}

// Global filter helper for footer links
window.filterPortfolio = function(filterGroup) {
  const filterBtn = document.querySelector(`.filter-tab-btn[data-filter="${filterGroup}"]`);
  if (filterBtn) {
    filterBtn.click();
  } else {
    renderCategoriesGrid(filterGroup);
  }
};

// Action to trigger inquiry scroll and auto-selection
window.handleCategorySelect = function(categoryName) {
  const contact = document.getElementById('contact');
  if (contact) {
    contact.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      const select = document.getElementById('inquiry-category');
      if (select) {
        select.value = categoryName;
        select.classList.add('highlight-select');
        setTimeout(() => select.classList.remove('highlight-select'), 1500);
      }
    }, 500);
  }
};

// Open Garment Details Modal
window.openProductModal = function(catId) {
  const cat = siteData.categories.find(c => c.id === catId);
  if (!cat) return;

  const overlay = document.getElementById('product-modal-overlay');
  const img = document.getElementById('modal-img');
  const tag = document.getElementById('modal-tag');
  const title = document.getElementById('modal-title');
  const desc = document.getElementById('modal-desc');
  const fabric = document.getElementById('modal-fabric');
  const inquireBtn = document.getElementById('modal-inquire-btn');
  const waBtn = document.getElementById('modal-wa-btn');

  if (img) img.src = cat.image;
  if (tag) tag.innerText = cat.tag || 'B2B Custom Garment';
  if (title) title.innerText = cat.title;
  if (desc) desc.innerText = cat.description;
  if (fabric) fabric.innerText = cat.fabrics || 'Premium Mill-Direct Textile';

  if (inquireBtn) {
    inquireBtn.onclick = () => {
      closeProductModal();
      handleCategorySelect(cat.title);
    };
  }

  if (waBtn) {
    const waText = encodeURIComponent(`Hello Shapes Uniform, I would like to inquire about bulk ordering ${cat.title} (${cat.tag || ''}) for our organization.`);
    waBtn.href = `https://wa.me/919833392756?text=${waText}`;
  }

  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
};

// Close Garment Details Modal
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

// Helper to scroll and request fabric swatch
window.requestSwatchInquiry = function() {
  const contact = document.getElementById('contact');
  if (contact) {
    contact.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const chk = document.getElementById('form-swatch-requested');
      if (chk) chk.checked = true;
      const msg = document.getElementById('form-message');
      if (msg) {
        msg.focus();
        msg.placeholder = 'Please mention your delivery address and specific fabrics/shades you would like to inspect...';
      }
    }, 500);
  }
};

// Render trusted brands logo strip & infinite marquee ticker
function renderBrandsStrip(filter = 'all') {
  const container = document.getElementById('brands-logo-strip');
  const marqueeTrack = document.getElementById('brands-marquee-track');
  
  if (!siteData.brands || siteData.brands.length === 0) return;

  // Filter Grid Cards
  const filteredBrands = filter === 'all'
    ? siteData.brands
    : siteData.brands.filter(b => b.category === filter);

  if (container) {
    container.innerHTML = filteredBrands.map(brand => `
      <div class="brand-logo-card">
        <div class="brand-logo-img-wrapper">
          <img src="${brand.logo}" alt="${brand.name}" class="brand-logo-img" title="${brand.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80'">
        </div>
        <span class="brand-card-name">${brand.name}</span>
        ${brand.tag ? `<span class="brand-card-tag">${brand.tag}</span>` : ''}
      </div>
    `).join('');
  }

  // Marquee Ticker (uses all brands for maximum variety, duplicated 3x)
  if (marqueeTrack && marqueeTrack.children.length === 0) {
    const itemsHtml = siteData.brands.map(brand => `
      <div class="marquee-item">
        <img src="${brand.logo}" alt="${brand.name}" class="marquee-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80'">
        <span>${brand.name}</span>
      </div>
    `).join('');
    marqueeTrack.innerHTML = itemsHtml + itemsHtml + itemsHtml;
  }
}

// Brand Category Filter Pills Listener
function setupBrandFilters() {
  const filterBar = document.getElementById('brands-filter-bar');
  if (!filterBar) return;

  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.b-pill');
    if (!btn) return;

    filterBar.querySelectorAll('.b-pill').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    currentBrandFilter = btn.getAttribute('data-bfilter') || 'all';
    renderBrandsStrip(currentBrandFilter);
  });
}

// Setup B2B Turnaround Estimator
function setupEstimator() {
  const catSelect = document.getElementById('est-category');
  const slider = document.getElementById('est-qty-slider');
  const qtyDisplay = document.getElementById('est-qty-val');
  const summaryCat = document.getElementById('summary-category');
  const summaryQty = document.getElementById('summary-qty');
  const summaryTimeline = document.getElementById('summary-timeline');
  const waBtn = document.getElementById('est-send-wa-btn');

  if (!slider || !catSelect) return;

  function updateEstimate() {
    const qty = parseInt(slider.value, 10);
    const cat = catSelect.value;
    
    qtyDisplay.innerText = `${qty.toLocaleString()} Units`;
    summaryCat.innerText = cat;
    summaryQty.innerText = `${qty.toLocaleString()} Pieces`;

    let timeline = '12 - 15 Days';
    if (qty <= 300) timeline = '10 - 14 Days';
    else if (qty <= 1000) timeline = '14 - 18 Days';
    else if (qty <= 2500) timeline = '18 - 24 Days';
    else timeline = '25 - 32 Days';

    summaryTimeline.innerText = timeline;

    if (waBtn) {
      const emb = document.getElementById('est-opt-embroidery')?.checked ? 'Yes' : 'No';
      const dye = document.getElementById('est-opt-custom-dye')?.checked ? 'Yes' : 'No';
      const pkg = document.getElementById('est-opt-packaging')?.checked ? 'Yes' : 'No';

      const waMsg = `Hello Shapes Uniform, I created an estimate on your website:%0A- Category: ${encodeURIComponent(cat)}%0A- Volume: ${qty} Pieces%0A- Embroidery: ${emb}%0A- Custom Color Dye: ${dye}%0A- Poly-packing: ${pkg}%0APlease provide factory pricing.`;
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

// Helper to transfer estimator data into formal quote form
window.applyEstimatorToForm = function() {
  const cat = document.getElementById('est-category')?.value;
  const qty = parseInt(document.getElementById('est-qty-slider')?.value || '500', 10);
  
  const formCat = document.getElementById('inquiry-category');
  if (formCat && cat) formCat.value = cat;

  const formVol = document.getElementById('form-volume');
  if (formVol) {
    if (qty <= 300) formVol.value = '100-300';
    else if (qty <= 500) formVol.value = '300-500';
    else if (qty <= 1000) formVol.value = '500-1000';
    else formVol.value = '1000+';
  }

  const msg = document.getElementById('form-message');
  if (msg) {
    msg.value = `Estimated volume: ${qty} units. Pre-configured via website estimator tool.`;
  }
};

// Hamburger drawer flyout triggers
function setupNavigationListeners() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const drawer = document.getElementById('mobile-menu-drawer');
  
  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      drawer.classList.toggle('open');
    });

    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    });

    document.addEventListener('click', (e) => {
      if (!drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
        drawer.classList.remove('open');
      }
    });
  }
}

// Lead Inquiry Submit handler
function setupFormSubmitListener() {
  const form = document.getElementById('b2b-quote-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submit-btn');
    const successBanner = document.getElementById('form-success-banner');
    
    const inquiry = {
      id: Date.now().toString(),
      name: document.getElementById('form-name').value,
      company: document.getElementById('form-company').value,
      email: document.getElementById('form-email').value,
      phone: document.getElementById('form-phone').value,
      category: document.getElementById('inquiry-category').value,
      quantity: document.getElementById('form-volume').value,
      swatchRequested: document.getElementById('form-swatch-requested')?.checked || false,
      message: document.getElementById('form-message').value,
      date: new Date().toISOString(),
      status: 'new'
    };

    if (submitBtn) {
      submitBtn.setAttribute('disabled', 'true');
      submitBtn.querySelector('.btn-text').style.display = 'none';
      submitBtn.querySelector('.btn-loader-text').style.display = 'inline';
    }

    setTimeout(() => {
      siteData.inquiries = [inquiry, ...siteData.inquiries];
      saveConfiguration();

      if (siteData.settings.webhookUrl) {
        fetch(siteData.settings.webhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(inquiry)
        }).catch(err => console.error('Webhook post error:', err));
      }

      if (submitBtn) {
        submitBtn.removeAttribute('disabled');
        submitBtn.querySelector('.btn-text').style.display = 'inline';
        submitBtn.querySelector('.btn-loader-text').style.display = 'none';
      }

      form.reset();

      if (successBanner) {
        successBanner.style.display = 'flex';
        successBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => {
          successBanner.style.display = 'none';
        }, 8000);
      }
    }, 800);
  });
}

// Reliable Scroll-reveal animation system
function setupScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -20px 0px'
    });

    reveals.forEach(el => observer.observe(el));
    
    // Automatically reveal anything near or in top viewport
    setTimeout(() => {
      reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100) {
          el.classList.add('revealed');
        }
      });
    }, 200);
  } else {
    reveals.forEach(el => el.classList.add('revealed'));
  }
}

// Header background change on scroll
function setupHeaderScrollEffect() {
  const header = document.getElementById('main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

// Bootstrapping site setup
function init() {
  loadConfiguration();
  renderSiteDetails();
  renderCategoriesGrid('all');
  setupCategoryFilters();
  renderBrandsStrip('all');
  setupBrandFilters();
  setupEstimator();
  setupModalListeners();
  setupNavigationListeners();
  setupFormSubmitListener();
  setupScrollReveal();
  setupHeaderScrollEffect();
  // Ensure all cards and sections are immediately visible
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
}

document.addEventListener('DOMContentLoaded', init);
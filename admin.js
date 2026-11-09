// Default seed data fallback
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
    { name: 'Four Fountains De-stress Spa', logo: 'logos/four_fountains.svg', tag: 'Spa & Wellness' },
    { name: 'HR Wellness Spa & Salon', logo: 'logos/hr_wellness.svg', tag: 'Spa & Salon' },
    { name: 'Zen Aura Spa', logo: 'logos/zen_aura.svg', tag: 'Spa & Wellness' },
    { name: 'Sparogya Luxury Spa', logo: 'https://static.wixstatic.com/media/99bdf8_594c1340b45e4c169910bea22c4dcf53~mv2.png', tag: 'Spa & Wellness' },
    { name: 'AIS Wellness Group', logo: 'https://static.wixstatic.com/media/99bdf8_d12286eaefdd44cfafeb0e7a8d3602a7~mv2.jpg', tag: 'Healthcare & Wellness' },
    { name: 'ALYF', logo: 'logos/alyf.svg', tag: 'Corporate & Real Estate' },
    { name: 'Mobikon', logo: 'logos/mobikon.svg', tag: 'Technology & Corporate' },
    { name: 'World Dance Company', logo: 'logos/world_dance.svg', tag: 'Costumes & Performing Arts' },
    { name: 'InVideo - Play Your Ideas', logo: 'logos/invideo.svg', tag: 'Media & Technology' },
    { name: 'VIBGYOR High School', logo: 'logos/vibgyor.svg', tag: 'School Uniforms' },
    { name: 'EuroKids Preschool', logo: 'logos/eurokids.svg', tag: 'School Uniforms' },
    { name: 'Say Cheez Salon', logo: 'logos/say_cheez.svg', tag: 'Salon & Grooming' },
    { name: 'Tip Top Unisex Salon', logo: 'logos/tip_top.svg', tag: 'Salon & Grooming' },
    { name: 'St. Gregorios High School', logo: 'logos/st_gregorios.svg', tag: 'School Uniforms' },
    { name: 'Sudha - Pure By Nature', logo: 'logos/sudha.svg', tag: 'Retail & Wellness' },
    { name: 'Bloom Hair Transplant', logo: 'logos/bloom_hair.svg', tag: 'Medical & Clinical' },
    { name: 'Trilegal Legal Firm', logo: 'https://static.wixstatic.com/media/99bdf8_016019b5f5214f979e21953d9afc32d8~mv2.webp/v1/fill/w_420,h_140,al_c,lg_1,q_80,enc_avif,quality_auto/cropped-Trilegal-Logo.webp', tag: 'Legal & Corporate' },
    { name: 'Gandhar Oil Refinery', logo: 'https://static.wixstatic.com/media/99bdf8_25d4da38e43c4cee84b463fdc0cfa463~mv2.png/v1/fill/w_806,h_344,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/gandhar%20logo.png', tag: 'Industrial Energy' },
    { name: 'Chembur Gymkhana Club', logo: 'https://static.wixstatic.com/media/99bdf8_36c010a3394144d19dc460ef1dbbb796~mv2.jpg/v1/fill/w_352,h_408,al_c,q_80,enc_avif,quality_auto/chembur%20gymkhana.jpg', tag: 'Hospitality & Leisure' }
  ],
  categories: [
    {
      id: 'corporate',
      title: 'Corporate Wear',
      description: 'Sophisticated suits, premium blazers, executive shirts, and formal trousers designed to reflect professionalism and command authority.',
      image: 'https://static.wixstatic.com/media/af05e4_8ae6038793054ab3b4466cbee9e1003d~mv2.jpg'
    },
    {
      id: 'school',
      title: 'School Uniforms',
      description: 'Durable, comfortable school uniforms including blazers, shirts, trousers, skirts, and PE kits tailored for institutional bulk requirements across all grade levels.',
      image: 'https://static.wixstatic.com/media/af05e4_adbbb1be1510499a9b49b99cf8d8b257~mv2.jpg'
    },
    {
      id: 'medical',
      title: 'Hospital & Medical Uniforms',
      description: 'Ergonomic scrub sets, lab coats, and support staff uniforms crafted with breathable, antimicrobial, and fluid-resistant textiles.',
      image: 'https://static.wixstatic.com/media/af05e4_3f5bebae858040d5928bd618226dce9a~mv2.jpg'
    },
    {
      id: 'industrial',
      title: 'Industrial & Safety Wear',
      description: 'Heavy-duty high-visibility coveralls, fire-retardant utility jackets, and reinforced trousers engineered for extreme environments.',
      image: 'https://static.wixstatic.com/media/af05e4_f582c609f87f4e79946a4c760286031d~mv2.jpg'
    },
    {
      id: 'security',
      title: 'Security & Tactical Uniforms',
      description: 'Durable uniform shirts, utility trousers, badges, and caps configured for private security officers, pilots, and field patrol teams.',
      image: 'https://static.wixstatic.com/media/af05e4_b900aab891f04adfa3dd93284dec1bde~mv2.jpg'
    },
    {
      id: 'chef',
      title: 'Chef & Hospitality Coats',
      description: 'Double-breasted breathable chef coats, protective aprons, service vests, and kitchen staff trousers built to withstand kitchen heat.',
      image: 'https://static.wixstatic.com/media/af05e4_ca63ce636e294cc1b211055342cb2b48~mv2.jpg'
    },
    {
      id: 'tshirts',
      title: 'T-Shirts & Event Wear',
      description: 'Custom round-neck, V-neck, and collar t-shirts available in bulk for corporate events, marathons, staff outings, and promotional campaigns with full-color printing.',
      image: 'https://static.wixstatic.com/media/af05e4_d1298effb2da4126b072285f1614360f~mv2.jpg'
    },
    {
      id: 'polos',
      title: 'Polo Shirts & Promotional Wear',
      description: 'Custom corporate polo shirts, event t-shirts, and casual workplace wear customized with premium direct-to-garment printing or detailed embroidery.',
      image: 'https://static.wixstatic.com/media/af05e4_066ab6b6223746cfb593d4fe49db51d7~mv2.jpg'
    },
    {
      id: 'housekeeping',
      title: 'Spa & Housekeeping Uniform',
      description: 'Clean-cut, flexible tunic tops and matching trousers tailored for salon, spa, clinical care, and facility maintenance personnel.',
      image: 'https://static.wixstatic.com/media/af05e4_5a3512b83547430796f3dc673bbb5d90~mv2.jpg'
    },
    {
      id: 'costumes',
      title: 'School Annual Day Costumes',
      description: 'Vibrant, premium custom-tailored stage costumes, thematic character outfits, and coordinate accessories designed for school annual day celebrations and theatre productions.',
      image: 'https://static.wixstatic.com/media/af05e4_0c00916cecb14c07873782a752ad58be~mv2.jpg'
    },
    {
      id: 'others',
      title: 'Linens & Accessories',
      description: 'Quality bedsheets, hospital pillowcases, industrial aprons, school ties, belts, socks, and other customizable uniform components.',
      image: 'https://static.wixstatic.com/media/af05e4_355a022ad6c04542ad1ddc44f99fe1d4~mv2.jpg'
    }
  ],
  inquiries: [
    {
      id: '1',
      name: 'Rajesh Kumar',
      email: 'r.kumar@trilegal.com',
      company: 'Trilegal Mumbai',
      phone: '9820012345',
      quantity: 350,
      category: 'Corporate Wear',
      message: 'Looking for premium custom embroidered corporate blazers and shirts for our associate lawyers. Please share fabric options.',
      date: '2026-07-09T14:32:00.000Z',
      status: 'new'
    }
  ]
};

let siteData = { ...defaultSiteData };
let editingCategoryId = null;

// Read configurations from storage
function loadSiteData() {
  const saved = localStorage.getItem('shapes_uniform_b2b_data');
  if (saved) {
    try {
      siteData = JSON.parse(saved);
      siteData.brands = defaultSiteData.brands;
      if (!siteData.categories || siteData.categories.length < defaultSiteData.categories.length) {
        siteData.categories = defaultSiteData.categories;
      }
      saveSiteData();
    } catch (e) {
      console.error('Failed to parse configurations, using defaults', e);
      siteData = { ...defaultSiteData };
      saveSiteData();
    }
  } else {
    siteData = { ...defaultSiteData };
    saveSiteData();
  }
}

// Write configurations to storage
function saveSiteData() {
  localStorage.setItem('shapes_uniform_b2b_data', JSON.stringify(siteData));
}

// Display Save Toast notification
function showSaveToast() {
  const toast = document.getElementById('save-toast');
  if (toast) {
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}

// Initialize General Settings Form
function initSettingsForm() {
  const s = siteData.settings;
  document.getElementById('set-brandName').value = s.brandName;
  document.getElementById('set-tagline').value = s.tagline;
  document.getElementById('set-heroTitle').value = s.heroTitle;
  document.getElementById('set-phone').value = s.phone;
  document.getElementById('set-heroDescription').value = s.heroDescription;
  document.getElementById('set-email').value = s.email;
  document.getElementById('set-openingHours').value = s.openingHours;
  document.getElementById('set-address').value = s.address;
  document.getElementById('set-webhookUrl').value = s.webhookUrl || '';
}

// Save Settings Event
function handleSettingsFormSubmit(e) {
  e.preventDefault();
  
  siteData.settings = {
    ...siteData.settings,
    brandName: document.getElementById('set-brandName').value,
    tagline: document.getElementById('set-tagline').value,
    heroTitle: document.getElementById('set-heroTitle').value,
    phone: document.getElementById('set-phone').value,
    heroDescription: document.getElementById('set-heroDescription').value,
    email: document.getElementById('set-email').value,
    openingHours: document.getElementById('set-openingHours').value,
    address: document.getElementById('set-address').value,
    webhookUrl: document.getElementById('set-webhookUrl').value
  };

  saveSiteData();
  showSaveToast();
}

// Render product list dynamically
function renderCategoriesList() {
  const container = document.getElementById('categories-editor-list');
  if (!container) return;

  container.innerHTML = siteData.categories.map((cat, idx) => {
    const isEditing = editingCategoryId === cat.id;
    return `
      <div class="db-cat-editor-card">
        <div class="cat-edit-row">
          
          <div class="cat-preview-img-wrapper">
            <img src="${cat.image}" alt="${cat.title}" class="cat-preview-img" onerror="this.src='https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80'">
          </div>

          <div class="cat-details-col">
            ${isEditing ? `
              <!-- EDIT PANEL FIELDS -->
              <div class="db-form-row" style="margin-bottom: 12px">
                <div class="form-group">
                  <label>Category Title</label>
                  <input type="text" id="edit-cat-title-${idx}" value="${cat.title}">
                </div>
                <div class="form-group">
                  <label>Photo Link (URL)</label>
                  <input type="text" id="edit-cat-image-${idx}" value="${cat.image}">
                </div>
              </div>
              <div class="form-group">
                <label>Description Details</label>
                <textarea id="edit-cat-desc-${idx}" rows="2">${cat.description}</textarea>
              </div>
            ` : `
              <!-- STATIC VIEW DETAILS -->
              <div>
                <h4 class="cat-title-text">${cat.title}</h4>
                <p class="cat-desc-text">${cat.description}</p>
              </div>
            `}

            <div class="cat-actions-row">
              ${isEditing ? `
                <button onclick="saveCategoryEdits(${idx}, '${cat.id}')" class="btn btn-outline action-sm-btn" style="color: var(--success-color)">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:4px"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Save Edits
                </button>
                <button onclick="cancelCategoryEdits()" class="btn btn-outline action-sm-btn">
                  Cancel
                </button>
              ` : `
                <button onclick="enterCategoryEditMode('${cat.id}')" class="btn btn-outline action-sm-btn">
                  Edit Details
                </button>
              `}
              <button onclick="deleteCategory('${cat.id}')" class="btn btn-outline action-sm-btn delete-cat-btn" aria-label="Delete category">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    `;
  }).join('');
}

// Category Actions
window.enterCategoryEditMode = function(id) {
  editingCategoryId = id;
  renderCategoriesList();
};

window.cancelCategoryEdits = function() {
  editingCategoryId = null;
  renderCategoriesList();
};

window.saveCategoryEdits = function(idx, id) {
  const updatedTitle = document.getElementById(`edit-cat-title-${idx}`).value;
  const updatedImage = document.getElementById(`edit-cat-image-${idx}`).value;
  const updatedDesc = document.getElementById(`edit-cat-desc-${idx}`).value;

  if (!updatedTitle || !updatedDesc) {
    alert('Title and Description are required.');
    return;
  }

  siteData.categories = siteData.categories.map(cat => {
    if (cat.id === id) {
      return {
        ...cat,
        title: updatedTitle,
        image: updatedImage || 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80',
        description: updatedDesc
      };
    }
    return cat;
  });

  saveSiteData();
  editingCategoryId = null;
  renderCategoriesList();
  showSaveToast();
};

window.deleteCategory = function(id) {
  if (confirm('Are you sure you want to delete this product category?')) {
    siteData.categories = siteData.categories.filter(cat => cat.id !== id);
    saveSiteData();
    renderCategoriesList();
    showSaveToast();
  }
};

// Toggle add category container
function setupCategoryAddForm() {
  const toggleBtn = document.getElementById('toggle-add-cat-btn');
  const cancelBtn = document.getElementById('cancel-add-cat-btn');
  const form = document.getElementById('new-category-form');

  if (toggleBtn && form) {
    toggleBtn.addEventListener('click', () => {
      const isHidden = form.style.display === 'none';
      form.style.display = isHidden ? 'flex' : 'none';
    });
  }

  if (cancelBtn && form) {
    cancelBtn.addEventListener('click', () => {
      form.style.display = 'none';
      form.reset();
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const title = document.getElementById('new-cat-title').value;
      const image = document.getElementById('new-cat-image').value;
      const description = document.getElementById('new-cat-description').value;

      const newId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      
      const newCategory = {
        id: newId,
        title: title,
        description: description,
        image: image || 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80'
      };

      siteData.categories.push(newCategory);
      saveSiteData();
      
      renderCategoriesList();
      form.reset();
      form.style.display = 'none';
      showSaveToast();
    });
  }
}

// Render inquiry logs dynamically
function renderInquiriesList() {
  const container = document.getElementById('inquiries-log-container');
  const badge = document.getElementById('new-inquiries-count');
  if (!container) return;

  const newCount = siteData.inquiries.filter(i => i.status === 'new').length;
  if (badge) {
    if (newCount > 0) {
      badge.innerText = newCount;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  }

  if (siteData.inquiries.length === 0) {
    container.innerHTML = `
      <div class="empty-logs-view">
        <svg class="empty-logs-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        <p style="font-size: 1.1rem; font-weight: 500;">No inquiries submitted yet.</p>
        <p style="font-size: 0.9rem; margin-top: 4px;">Submit quote requests from the customer form to verify database logs.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = siteData.inquiries.map(inq => {
    const isUnread = inq.status === 'new';
    return `
      <div class="inquiry-card-log ${isUnread ? 'unread' : ''}">
        
        <div class="inq-card-header">
          <div>
            <div class="inq-title-row">
              <h4 class="inq-client-name">${inq.name}</h4>
              <span class="inq-company-name">(${inq.company})</span>
              ${isUnread ? '<span class="unread-badge">New</span>' : ''}
            </div>
            <p class="inq-date-text">
              Received: ${new Date(inq.date).toLocaleString()}
            </p>
          </div>

          <div class="inq-header-buttons">
            <button onclick="toggleInquiryReadStatus('${inq.id}')" class="btn btn-outline action-sm-btn">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:4px"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Mark ${isUnread ? 'Read' : 'Unread'}
            </button>
            <button onclick="deleteInquiry('${inq.id}')" class="btn btn-outline action-sm-btn" style="padding: 6px; color:#ef4444; border-color:transparent">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        </div>

        <div class="inq-specs-grid">
          <div class="inq-spec-cell">
            <span>Category:</span>
            <strong>${inq.category}</strong>
          </div>
          <div class="inq-spec-cell">
            <span>Est. Quantity:</span>
            <strong>${inq.quantity} units</strong>
          </div>
          <div class="inq-spec-cell">
            <span>Corporate Email:</span>
            <strong>${inq.email}</strong>
          </div>
          <div class="inq-spec-cell">
            <span>Phone:</span>
            <strong>${inq.phone}</strong>
          </div>
        </div>

        ${inq.message ? `
          <div class="inq-message-box">
            <p class="inq-message-text">"${inq.message}"</p>
          </div>
        ` : ''}

      </div>
    `;
  }).join('');
}

window.toggleInquiryReadStatus = function(id) {
  siteData.inquiries = siteData.inquiries.map(inq => {
    if (inq.id === id) {
      return {
        ...inq,
        status: inq.status === 'new' ? 'read' : 'new'
      };
    }
    return inq;
  });
  saveSiteData();
  renderInquiriesList();
};

window.deleteInquiry = function(id) {
  if (confirm('Are you sure you want to delete this inquiry record?')) {
    siteData.inquiries = siteData.inquiries.filter(inq => inq.id !== id);
    saveSiteData();
    renderInquiriesList();
  }
};

// JSON Setup
function initJSONTab() {
  const textarea = document.getElementById('json-config-textarea');
  if (textarea) {
    textarea.value = JSON.stringify(siteData, null, 2);
  }
}

function setupJSONListeners() {
  const importBtn = document.getElementById('import-json-btn');
  const syncBtn = document.getElementById('sync-json-btn');
  const textarea = document.getElementById('json-config-textarea');
  const alertBanner = document.getElementById('json-alert-banner');

  if (syncBtn && textarea) {
    syncBtn.addEventListener('click', () => {
      textarea.value = JSON.stringify(siteData, null, 2);
      showSaveToast();
    });
  }

  if (importBtn && textarea && alertBanner) {
    importBtn.addEventListener('click', () => {
      try {
        const parsed = JSON.parse(textarea.value);
        if (!parsed.settings || !parsed.categories || !parsed.inquiries) {
          throw new Error('Data structure is missing core B2B parameters (settings, categories, inquiries)');
        }
        
        siteData = parsed;
        saveSiteData();
        
        // Reinitialize components
        initSettingsForm();
        renderCategoriesList();
        renderInquiriesList();
        
        alertBanner.className = 'alert-status-box success';
        alertBanner.innerHTML = 'Configuration successfully imported and applied!';
        alertBanner.style.display = 'block';
        
        showSaveToast();
        
        setTimeout(() => alertBanner.style.display = 'none', 5000);
      } catch (err) {
        alertBanner.className = 'alert-status-box error';
        alertBanner.innerHTML = `Import failed: ${err.message}`;
        alertBanner.style.display = 'block';
      }
    });
  }
}

// Reset site defaults button
function setupResetListener() {
  const resetBtn = document.getElementById('reset-site-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all configurations to default? This will wipe your current edits.')) {
        localStorage.removeItem('shapes_uniform_b2b_data');
        window.location.reload();
      }
    });
  }
}

// Sidebar Tab switching managers
function setupTabSwitching() {
  const tabs = document.querySelectorAll('.db-tab-btn');
  const contents = document.querySelectorAll('.db-tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active classes
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));

      // Add active to selected
      tab.classList.add('active');
      const targetId = `tab-${tab.getAttribute('data-tab')}`;
      document.getElementById(targetId).classList.add('active');
    });
  });
}

// Authenticate admin access via HTML login form
function checkAuthentication(callback) {
  const isAuth = sessionStorage.getItem('shapes_admin_authenticated');
  if (isAuth === 'true') {
    // Already authenticated — show dashboard immediately
    document.getElementById('admin-login-overlay').style.display = 'none';
    document.getElementById('admin-main-wrapper').style.display = '';
    callback();
    return;
  }

  // Show login overlay, listen for form submit
  const loginForm = document.getElementById('admin-login-form');
  const loginError = document.getElementById('login-error');

  loginForm.addEventListener('submit', function handler(e) {
    e.preventDefault();
    const passcode = document.getElementById('admin-passcode').value;
    if (passcode === 'shapes123') {
      sessionStorage.setItem('shapes_admin_authenticated', 'true');
      document.getElementById('admin-login-overlay').style.display = 'none';
      document.getElementById('admin-main-wrapper').style.display = '';
      loginForm.removeEventListener('submit', handler);
      callback();
    } else {
      loginError.style.display = 'block';
      document.getElementById('admin-passcode').value = '';
      document.getElementById('admin-passcode').focus();
    }
  });
}

// Render brands list in admin panel
function renderBrandsList() {
  const container = document.getElementById('brands-editor-list');
  if (!container) return;

  if (!siteData.brands || siteData.brands.length === 0) {
    container.innerHTML = '<p style="color:var(--text-muted); font-style:italic;">No client brands added yet.</p>';
    return;
  }

  container.innerHTML = siteData.brands.map((brand, index) => `
    <div class="category-edit-card">
      <div class="cat-card-thumb">
        <img src="${brand.logo}" alt="${brand.name}" onerror="this.src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=100&q=80'">
      </div>
      <div class="cat-card-details">
        <h4 class="cat-card-title">${brand.name}</h4>
        <p class="cat-card-desc">${brand.tag || 'Partner Brand'}</p>
      </div>
      <div class="cat-card-actions">
        <button class="btn btn-outline" onclick="deleteBrand(${index})" style="color:#ef4444; border-color:#ef4444;">Delete</button>
      </div>
    </div>
  `).join('');
}

// Add Brand form handlers
function setupBrandAddForm() {
  const toggleBtn = document.getElementById('add-brand-toggle-btn');
  const cancelBtn = document.getElementById('cancel-add-brand-btn');
  const form = document.getElementById('add-brand-form');

  if (toggleBtn && form) {
    toggleBtn.addEventListener('click', () => {
      form.style.display = form.style.display === 'none' ? 'block' : 'none';
    });
  }

  if (cancelBtn && form) {
    cancelBtn.addEventListener('click', () => {
      form.style.display = 'none';
      form.reset();
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('brand-name-input').value.trim();
      const logo = document.getElementById('brand-logo-input').value.trim();
      const tag = document.getElementById('brand-tag-input').value.trim() || 'Partner Organization';

      if (!name || !logo) return;

      if (!siteData.brands) siteData.brands = [];
      siteData.brands.push({ name, logo, tag });
      saveSiteData();

      form.reset();
      form.style.display = 'none';
      renderBrandsList();
      showSaveAlert();
    });
  }
}

window.deleteBrand = function(index) {
  if (confirm('Are you sure you want to remove this client brand?')) {
    siteData.brands.splice(index, 1);
    saveSiteData();
    renderBrandsList();
    showSaveAlert();
  }
};

function initDashboard() {
  loadSiteData();
  setupTabSwitching();
  initSettingsForm();
  renderCategoriesList();
  renderBrandsList();
  renderInquiriesList();
  setupCategoryAddForm();
  setupBrandAddForm();
  initJSONTab();
  setupJSONListeners();
  setupResetListener();

  // Attach submit handler to general settings form
  const settingsForm = document.getElementById('settings-form');
  if (settingsForm) {
    settingsForm.addEventListener('submit', handleSettingsFormSubmit);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  checkAuthentication(initDashboard);
});

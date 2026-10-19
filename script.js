/**
 * ============================================================================
 * MANJAL NEERATTU VIZHA — LUXURY INVITATION SCRIPT
 * For D. K. Monisha
 * South Indian Traditional Ceremony (Half Saree / Puberty Ceremony)
 * Modern Elegance in Sage Green & Cream
 * ============================================================================
 */

'use strict';

/**
 * ============================================================================
 * 1. CENTRALIZED INVITATION CONFIGURATION
 * ============================================================================
 */
const INVITATION_CONFIG = {
  // --- Sister's Information ---
  sisterName: "D. K. Monisha",
  sisterShortName: "D. K. Monisha",
  ceremonyName: "Manjal Neerattu Vizha",
  ceremonyTamil: "பூப்புனித நீராட்டு விழா",
  
  // --- Auspicious Ceremony Date & Time ---
  // Sunday | 25th Oct 2026 | 10 AM
  eventDateDisplay: "Sunday, 25th October 2026",
  eventDateLong: "October 25, 2026 • Function begins at 10:00 AM IST",
  
  // Target date for countdown (Format: YYYY-MM-DDTHH:mm:ss+05:30)
  countdownTarget: "2026-10-25T10:00:00+05:30",
  
  // Times & Auspicious Details
  muhurthamTime: "Function Timing: 10:00 AM",
  djTime: "11:00 AM",
  lunchTime: "12:30 PM onwards",
  
  // --- Venue & Location ---
  venueName: "Sri Bannari Amman Mahal AC",
  venueShort: "Sri Bannari Amman Mahal AC, Dharmapuri",
  venueAddress: "Periyampatti, Krishnagiri Main Road, Dharmapuri – 635205",
  venueLandmark: "Krishnagiri Main Road, Periyampatti",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Sri+Bannari+Amman+Mahal+AC+Periyampatti+Krishnagiri+Main+Road+Dharmapuri",
  
  // --- Family & Beloved Elders ---
  father: "Kathiravan .D",
  mother: "Bharathi .M",
  grandparents: [
    { thatha: "DuraiSamy", paati: "Jayamal" },
    { thatha: "Muthusamy", paati: "Kasthuri" }
  ],
  periyappa: "Selvakumar",
  amma: "Kalaiselvi",
  chithappa: "Anbalagan",
  chithi: "SasiKala",
  thaimama: "Asaithambi",
  athai1: "Ranjitham",
  mama: "Nallathambi",
  athai2: "Tamilarasi",
  bigBrothers: [
    "S. Abishek B.Tech(IT)., MBA(AIDS)",
    "Durgesh. S. K B.E(CSB)"
  ],
  familyName: "Kathiravan. D & Bharathi. M",
  familyShort: "Kathiravan. D & Bharathi. M & Family",
  
  contactPerson: "Kathiravan .D (Father)",
  contactPeriyappa: "Selvakumar (Periyappa)",
  contactPhone: "+91 98765 43210",

  // --- Sister's Main Featured Portrait ---
  featuredPortrait: "assets/images/sister-portrait-placeholder.svg",

  // --- Photo Gallery: Minimalist Indian Folk Illustrations with Traditional Names ---
  galleryPhotos: [
    {
      src: "assets/images/folk-manjal-neerattu.svg?v=2",
      caption: "மஞ்சள் நீராட்டு (Manjal Neerattu) — Sacred Turmeric Abhishekam & Kalasam"
    },
    {
      src: "assets/images/folk-thavani-alankaram.svg?v=2",
      caption: "தாவணி அலங்காரம் (Thavani Alankaram) — Traditional Silk Half Saree & Temple Jewels"
    },
    {
      src: "assets/images/folk-malligai-maalai.svg?v=2",
      caption: "மல்லிகைப் பூ மாலை (Malligai Poo Maalai) — Madurai Jasmine Garlands & Sacred Lotus"
    },
    {
      src: "assets/images/folk-mangala-aarathi.svg?v=2",
      caption: "மங்கல ஆரத்தி (Mangala Aarathi) — Auspicious Aarti & Cherished Elders' Blessings"
    },
    {
      src: "assets/images/folk-vaalai-ilai-virundhu.svg?v=2",
      caption: "வாழை இலை விருந்து (Vaalai Ilai Virundhu) — Traditional South Indian Banana Leaf Kalyana Feast"
    },
    {
      src: "assets/images/folk-isai-kondattam.svg?v=2",
      caption: "மங்கல இசை & கொண்டாட்டம் (Isai & DJ Kondattam) — Traditional Nadaswaram, Thavil & Live DJ Celebration"
    }
  ],

  // --- Background Music Configuration ---
  musicFile: "assets/song/Varisu.mp3"
};

/**
 * ============================================================================
 * 2. INITIALIZATION ON DOM READY
 * ============================================================================
 */
document.addEventListener('DOMContentLoaded', () => {
  populateConfigData();
  initCountdownTimer();
  initPetalsCanvas();
  initAudioPlayer();
  initGalleryLightbox();
  initNavigation();
  initCalendarButtons();
  initScrollEffects();
});

/**
 * ============================================================================
 * 3. POPULATE CONFIG DATA INTO DOM
 * ============================================================================
 */
function populateConfigData() {
  const cfg = INVITATION_CONFIG;

  // Sister name
  document.querySelectorAll('.cfg-sister-name').forEach(el => el.textContent = cfg.sisterName);
  document.querySelectorAll('.cfg-sister-short').forEach(el => el.textContent = cfg.sisterShortName);
  document.querySelectorAll('.cfg-ceremony-name').forEach(el => el.textContent = cfg.ceremonyName);

  // Dates & Times
  document.querySelectorAll('.cfg-event-date').forEach(el => el.textContent = cfg.eventDateDisplay);
  document.querySelectorAll('.cfg-event-date-long').forEach(el => el.textContent = cfg.eventDateLong);
  document.querySelectorAll('.cfg-muhurtham-time').forEach(el => el.textContent = cfg.muhurthamTime);
  document.querySelectorAll('.cfg-lunch-time').forEach(el => el.textContent = cfg.lunchTime);

  // Venue
  document.querySelectorAll('.cfg-venue-name').forEach(el => el.textContent = cfg.venueName);
  document.querySelectorAll('.cfg-venue-short').forEach(el => el.textContent = cfg.venueShort);
  document.querySelectorAll('.cfg-venue-address').forEach(el => el.textContent = cfg.venueAddress);
  document.querySelectorAll('.cfg-venue-landmark').forEach(el => el.textContent = cfg.venueLandmark);

  // Family & Elders
  document.querySelectorAll('.cfg-family-name').forEach(el => el.textContent = cfg.familyName);
  document.querySelectorAll('.cfg-family-relatives').forEach(el => el.textContent = cfg.familyRelatives);
  document.querySelectorAll('.cfg-family-short').forEach(el => el.textContent = cfg.familyShort);

  // Contact
  document.querySelectorAll('.cfg-contact-person').forEach(el => el.textContent = cfg.contactPerson);
  document.querySelectorAll('.cfg-contact-periyappa').forEach(el => el.textContent = cfg.contactPeriyappa);
  document.querySelectorAll('.cfg-contact-phone').forEach(el => el.textContent = cfg.contactPhone);

  // Phone tel link
  const telLink = document.getElementById('telLink');
  if (telLink) {
    telLink.href = `tel:${cfg.contactPhone.replace(/\s+/g, '')}`;
  }

  // Google Maps Directions button
  const getDirectionsBtn = document.getElementById('getDirectionsBtn');
  const openMapsBtn = document.getElementById('openMapsBtn');
  if (getDirectionsBtn) getDirectionsBtn.href = cfg.googleMapsDirectionsUrl;
  if (openMapsBtn) openMapsBtn.href = cfg.googleMapsDirectionsUrl;

  // Featured Portrait
  const mainSisterPhoto = document.getElementById('mainSisterPhoto');
  if (mainSisterPhoto && cfg.featuredPortrait) {
    mainSisterPhoto.src = cfg.featuredPortrait;
  }
}

/**
 * ============================================================================
 * 4. WORKING COUNTDOWN TIMER
 * ============================================================================
 */
function initCountdownTimer() {
  const daysEl = document.getElementById('daysVal');
  const hoursEl = document.getElementById('hoursVal');
  const minutesEl = document.getElementById('minutesVal');
  const secondsEl = document.getElementById('secondsVal');
  const countdownGrid = document.getElementById('countdownTimer');
  const celebrationNotice = document.getElementById('celebrationNotice');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const targetDate = new Date(INVITATION_CONFIG.countdownTarget).getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      if (countdownGrid) countdownGrid.style.display = 'none';
      if (celebrationNotice) celebrationNotice.style.display = 'block';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/**
 * ============================================================================
 * 5. BACKGROUND MUSIC ENGINE (Web Audio API Synthesizer + MP3 Fallback)
 * ============================================================================
 */
function initAudioPlayer() {
  const musicToggleBtn = document.getElementById('musicToggleBtn');
  const musicStatus = musicToggleBtn ? musicToggleBtn.querySelector('.music-status') : null;
  const audioElement = document.getElementById('bgAudio');

  let isPlaying = false;
  let audioCtx = null;
  let masterGain = null;
  let synthInterval = null;
  let droneNodes = [];

  const mohanamNotes = [
    261.63, // Sa (C4)
    293.66, // Ri2 (D4)
    329.63, // Ga3 (E4)
    392.00, // Pa (G4)
    440.00, // Dha2 (A4)
    523.25, // Sa' (C5)
    587.33, // Ri2' (D5)
    659.25  // Ga3' (E5)
  ];

  const ragaPhrases = [
    [0, 1, 2, 3, 2, 1, 0],
    [2, 3, 4, 5, 4, 3, 2],
    [3, 4, 5, 7, 5, 4, 3],
    [5, 4, 3, 2, 1, 2, 0]
  ];
  let phraseIndex = 0;
  let noteIndex = 0;

  function initWebAudio() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();

      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0, audioCtx.currentTime);
      masterGain.connect(audioCtx.destination);
    }
  }

  function startTanpuraDrone() {
    if (!audioCtx) return;
    const droneFreqs = [130.81, 196.00, 261.63];
    droneNodes = droneFreqs.map(freq => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);

      osc.start();
      return { osc, gain };
    });
  }

  function playFluteNote(freq, duration = 1.4) {
    if (!audioCtx || !isPlaying) return;

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const vibrato = audioCtx.createOscillator();
    const vibratoGain = audioCtx.createGain();

    vibrato.frequency.setValueAtTime(5.2, now);
    vibratoGain.gain.setValueAtTime(2.5, now);
    vibrato.connect(osc.frequency);
    vibrato.start(now);

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.08, now + duration - 0.2);
    gain.gain.linearRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    gain.connect(masterGain);

    osc.start(now);
    osc.stop(now + duration);
    vibrato.stop(now + duration);
  }

  function scheduleNextNote() {
    if (!isPlaying) return;
    const currentPhrase = ragaPhrases[phraseIndex];
    const noteScaleIndex = currentPhrase[noteIndex];
    const freq = mohanamNotes[noteScaleIndex];

    playFluteNote(freq, 1.3);

    noteIndex++;
    if (noteIndex >= currentPhrase.length) {
      noteIndex = 0;
      phraseIndex = (phraseIndex + 1) % ragaPhrases.length;
    }
  }

  function startMusic() {
    isPlaying = true;
    if (musicToggleBtn) musicToggleBtn.classList.add('is-active');
    if (musicStatus) musicStatus.textContent = 'ON';

    if (INVITATION_CONFIG.musicFile && audioElement) {
      audioElement.src = INVITATION_CONFIG.musicFile;
      audioElement.play().catch(() => {
        startSynthesizedMusic();
      });
    } else {
      startSynthesizedMusic();
    }
  }

  function startSynthesizedMusic() {
    initWebAudio();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    masterGain.gain.cancelScheduledValues(audioCtx.currentTime);
    masterGain.gain.linearRampToValueAtTime(0.65, audioCtx.currentTime + 1.2);

    startTanpuraDrone();
    scheduleNextNote();
    synthInterval = setInterval(scheduleNextNote, 1400);
  }

  function stopMusic() {
    isPlaying = false;
    if (musicToggleBtn) musicToggleBtn.classList.remove('is-active');
    if (musicStatus) musicStatus.textContent = 'OFF';

    if (audioElement && !audioElement.paused) {
      audioElement.pause();
    }

    if (synthInterval) {
      clearInterval(synthInterval);
      synthInterval = null;
    }

    if (audioCtx && masterGain) {
      masterGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.8);
      setTimeout(() => {
        droneNodes.forEach(node => {
          try { node.osc.stop(); } catch (e) {}
        });
        droneNodes = [];
      }, 900);
    }
  }

  if (musicToggleBtn) {
    musicToggleBtn.addEventListener('click', () => {
      if (!isPlaying) {
        startMusic();
      } else {
        stopMusic();
      }
    });
  }
}

/**
 * ============================================================================
 * 6. FLOATING JASMINE FLOWER PETALS CANVAS ENGINE
 * ============================================================================
 */
function initPetalsCanvas() {
  const canvas = document.getElementById('petalsCanvas');
  const toggleBtn = document.getElementById('petalsToggleBtn');
  const statusEl = toggleBtn ? toggleBtn.querySelector('.petals-status') : null;

  if (!canvas) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    canvas.style.display = 'none';
    if (statusEl) statusEl.textContent = 'OFF';
    return;
  }

  const ctx = canvas.getContext('2d');
  let animationFrameId = null;
  let isPetalsActive = true;
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const petalsCount = Math.min(32, Math.floor(width / 35));
  const petals = [];

  class Petal {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : -20;
      this.size = 8 + Math.random() * 12;
      this.speedY = 0.8 + Math.random() * 1.4;
      this.speedX = (Math.random() - 0.5) * 0.8;
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      this.sway = Math.random() * Math.PI * 2;
      this.swaySpeed = 0.015 + Math.random() * 0.02;
      this.opacity = 0.55 + Math.random() * 0.35;
      this.isLeaf = Math.random() < 0.22;
    }

    update() {
      this.y += this.speedY;
      this.sway += this.swaySpeed;
      this.x += Math.sin(this.sway) * 0.75 + this.speedX;
      this.rotation += this.rotationSpeed;

      if (this.y > height + 25 || this.x < -30 || this.x > width + 30) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.globalAlpha = this.opacity;

      if (this.isLeaf) {
        ctx.fillStyle = '#7A8F78';
        ctx.beginPath();
        ctx.moveTo(0, -this.size * 0.9);
        ctx.quadraticCurveTo(this.size * 0.5, 0, 0, this.size * 0.9);
        ctx.quadraticCurveTo(-this.size * 0.5, 0, 0, -this.size * 0.9);
        ctx.fill();
      } else {
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.ellipse(0, 0, this.size * 0.45, this.size * 0.8, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(238, 213, 155, 0.7)';
        ctx.beginPath();
        ctx.ellipse(0, this.size * 0.3, this.size * 0.2, this.size * 0.3, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  for (let i = 0; i < petalsCount; i++) {
    petals.push(new Petal());
  }

  function render() {
    if (!isPetalsActive) return;
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < petals.length; i++) {
      petals[i].update();
      petals[i].draw();
    }
    animationFrameId = requestAnimationFrame(render);
  }

  render();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    } else if (isPetalsActive) {
      render();
    }
  });

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      isPetalsActive = !isPetalsActive;
      if (isPetalsActive) {
        canvas.style.display = 'block';
        if (statusEl) statusEl.textContent = 'ON';
        toggleBtn.classList.remove('is-muted');
        render();
      } else {
        canvas.style.display = 'none';
        if (statusEl) statusEl.textContent = 'OFF';
        toggleBtn.classList.add('is-muted');
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      }
    });
  }
}

/**
 * ============================================================================
 * 7. PHOTO GALLERY LIGHTBOX (With High-Definition Photo Support & Fallback)
 * ============================================================================
 */
function initGalleryLightbox() {
  const modal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const captionEl = document.getElementById('lightboxCaption');
  const counterEl = document.getElementById('lightboxCounter');
  const closeBtn = document.getElementById('lightboxCloseBtn');
  const prevBtn = document.getElementById('lightboxPrevBtn');
  const nextBtn = document.getElementById('lightboxNextBtn');
  const backdrop = modal ? modal.querySelector('.lightbox-backdrop') : null;
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (!modal || !lightboxImg) return;

  const photos = INVITATION_CONFIG.galleryPhotos;
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const photo = photos[currentIndex];
    if (!photo) return;
    
    // Set fallback in case image fails to load
    lightboxImg.onerror = function() {
      if (photo.fallback) {
        this.src = photo.fallback;
      }
    };
    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.caption;
    if (captionEl) captionEl.textContent = photo.caption;
    if (counterEl) counterEl.textContent = `${currentIndex + 1} / ${photos.length}`;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updateLightboxContent();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % photos.length;
    updateLightboxContent();
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.getAttribute('data-index'), 10) || 0;
      openLightbox(idx);
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const idx = parseInt(item.getAttribute('data-index'), 10) || 0;
        openLightbox(idx);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);
  if (nextBtn) nextBtn.addEventListener('click', showNext);

  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'ArrowRight') showNext();
  });
}

/**
 * ============================================================================
 * 8. ADD TO CALENDAR ACTIONS (Google Calendar & Apple iCal .ics download)
 * ============================================================================
 */
function initCalendarButtons() {
  const heroCalBtn = document.getElementById('heroCalendarBtn');
  const addToCalBtn = document.getElementById('addToCalBtn');
  const cfg = INVITATION_CONFIG;

  function generateGoogleCalendarUrl() {
    // 2026-10-25 from 10:00 AM to 03:00 PM IST (UTC: 04:30 to 09:30)
    const startDate = "20261025T043000Z";
    const endDate = "20261025T093000Z";
    const title = encodeURIComponent(`${cfg.sisterName} — ${cfg.ceremonyName} (${cfg.ceremonyTamil})`);
    const details = encodeURIComponent(
      `Join us for the auspicious Manjal Neerattu Vizha ceremony of our beloved daughter D. K. Monisha.\nFunction Timing: ${cfg.muhurthamTime}\nLive DJ Celebration: ${cfg.djTime}\nTraditional Kalyana Virundhu Lunch: ${cfg.lunchTime}\nWith love: Kathiravan. D & Bharathi. M, Selvakumar, Kalaiselvi & Family\nContact: ${cfg.contactPhone}`
    );
    const location = encodeURIComponent(`${cfg.venueName}, ${cfg.venueAddress}`);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
  }

  function downloadIcsFile() {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Manjal Neerattu Vizha//D K Monisha//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `SUMMARY:${cfg.sisterName} — ${cfg.ceremonyName}`,
      `DESCRIPTION:Join us for the auspicious ${cfg.ceremonyName} of our beloved daughter ${cfg.sisterName}. Function Timing: ${cfg.muhurthamTime}. Live DJ at ${cfg.djTime}. Traditional Virundhu Lunch at ${cfg.lunchTime}.`,
      `LOCATION:${cfg.venueName}\\, ${cfg.venueAddress}`,
      'DTSTART:20261025T043000Z',
      'DTEND:20261025T093000Z',
      'STATUS:CONFIRMED',
      'SEQUENCE:0',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `${cfg.sisterName.replace(/\s+/g, '-')}-Manjal-Neerattu-Vizha.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function handleCalendarClick() {
    window.open(generateGoogleCalendarUrl(), '_blank');
    downloadIcsFile();
  }

  if (heroCalBtn) heroCalBtn.addEventListener('click', handleCalendarClick);
  if (addToCalBtn) addToCalBtn.addEventListener('click', handleCalendarClick);
}

/**
 * ============================================================================
 * 9. NAVIGATION, MOBILE DRAWER & ACTIVE LINK SCROLL SPY
 * ============================================================================
 */
function initNavigation() {
  const header = document.getElementById('header');
  const menuBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const closeBtn = document.getElementById('closeDrawerBtn');
  const drawerLinks = document.querySelectorAll('.drawer-link');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  function openDrawer() {
    if (drawer) {
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
    }
  }

  function closeDrawer() {
    if (drawer) {
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
    }
  }

  if (menuBtn) menuBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  });
}

/**
 * ============================================================================
 * 10. SCROLL EFFECTS & BACK TO TOP BUTTON
 * ============================================================================
 */
function initScrollEffects() {
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      if (backToTopBtn) backToTopBtn.classList.add('show');
    } else {
      if (backToTopBtn) backToTopBtn.classList.remove('show');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

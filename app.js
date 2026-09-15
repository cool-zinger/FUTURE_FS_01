'use strict';

(() => {
  const root = document.documentElement;
  const $ = (selector, base = document) => base.querySelector(selector);
  const $$ = (selector, base = document) => [...base.querySelectorAll(selector)];
  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const ease = value => { const p = clamp(value); return p * p * (3 - 2 * p); };
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const motionButton = $('.motion-button');
  const hero = $('.hero');
  const heroStage = $('.hero-stage');
  const portrait = $('.portrait');
  const title = $('.hero-title-wrap');
  const laptopSection = $('.laptop-section');
  const laptopStage = $('.laptop-stage');
  const laptopVisual = $('.laptop-visual');
  const laptopHeading = $('.laptop-heading');
  const screenMessage = $('.laptop-screen-message');
  const contact = $('.contact-section');
  const contactImage = $('.contact-image');
  let manuallyPaused = false;
  try { manuallyPaused = localStorage.getItem('kaustav-motion-paused') === 'true'; } catch (_) { /* Preferences are optional. */ }
  let paused = reducedMotion.matches || manuallyPaused;
  let frameRequest = 0;
  let previousTime = 0;
  let pointerTarget = 0;
  let pointerValue = 0;
  let heroValue = 0;
  let laptopValue = 0;
  let portraitReady = false;
  let laptopReady = false;
  let metrics = {};

  const portraitLayers = [$('.portrait-layer-a'), $('.portrait-layer-b')];
  const laptopLayers = [$('.laptop-layer-a'), $('.laptop-layer-b')];
  function drawAtlas(layers, value, columns, rows) {
    const frame = clamp(value) * (columns * rows - 1);
    const first = Math.floor(frame);
    const second = Math.min(first + 1, columns * rows - 1);
    const position = index => `${(index % columns) / (columns - 1) * 100}% ${Math.floor(index / columns) / (rows - 1) * 100}%`;
    layers[0].style.backgroundPosition = position(first);
    layers[1].style.backgroundPosition = position(second);
    layers[0].style.opacity = '1';
    layers[1].style.opacity = String(ease(frame - first));
  }

  function measure() {
    const y = window.scrollY;
    metrics = {
      heroStart: hero.getBoundingClientRect().top + y,
      heroRange: Math.max(1, hero.offsetHeight - heroStage.offsetHeight),
      laptopStart: laptopSection.getBoundingClientRect().top + y,
      laptopRange: Math.max(1, laptopSection.offsetHeight - laptopStage.offsetHeight),
      contactStart: contact.getBoundingClientRect().top + y,
      viewport: window.innerHeight,
      mobile: window.innerWidth <= 600,
    };
    schedule();
  }

  function render(time) {
    frameRequest = 0;
    if (document.hidden) return;
    const elapsed = previousTime ? Math.min(time - previousTime, 64) : 16;
    previousTime = time;
    const smoothing = 1 - Math.exp(-elapsed / 100);
    const y = window.scrollY;
    const heroTarget = paused ? 1 : clamp((y - metrics.heroStart) / metrics.heroRange);
    const laptopTarget = paused ? 1 : clamp((y - metrics.laptopStart) / metrics.laptopRange);
    if (paused) {
      heroValue = 1; laptopValue = 1; pointerValue = 0;
    } else {
      heroValue += (heroTarget - heroValue) * smoothing;
      laptopValue += (laptopTarget - laptopValue) * smoothing;
      pointerValue += (pointerTarget - pointerValue) * smoothing;
    }
    if (portraitReady) drawAtlas(portraitLayers, paused ? 1 : clamp(heroValue * 1.15 + pointerValue * .06), 4, 2);
    const portraitShift = paused ? 0 : -heroValue * (metrics.mobile ? 4 : 7) + pointerValue * 1.1;
    const portraitScale = paused ? 1 : 1.06 - heroValue * .1;
    portrait.style.transform = `translate(calc(-50% + ${portraitShift}%), -50%) scale(${portraitScale})`;
    title.style.transform = paused ? 'none' : `translateY(${-heroValue * (metrics.mobile ? 12 : 30)}px)`;
    $('.scene-bar i').style.width = `${12.5 + heroValue * 87.5}%`;
    $('#hero-progress').textContent = `${String(1 + Math.round(heroValue * 7)).padStart(2, '0')} / 08`;

    // The lid opens first, then the camera moves gently toward the screen.
    const opening = ease(laptopValue / .73);
    if (laptopReady) drawAtlas(laptopLayers, opening, 3, 3);
    const zoom = paused ? 1 : 1 + ease((laptopValue - .7) / .3) * (metrics.mobile ? .12 : .16);
    laptopVisual.style.transform = `translate(-50%, -50%) scale(${zoom})`;
    screenMessage.style.opacity = laptopReady ? String(ease((laptopValue - .77) / .16)) : '0';
    laptopHeading.style.opacity = paused ? '1' : String(1 - ease((laptopValue - .24) / .27));
    $('.laptop-caption').style.opacity = String(paused ? 1 : 1 - ease((laptopValue - .86) / .14));

    const contactProgress = clamp((y + metrics.viewport - metrics.contactStart) / (metrics.viewport * 1.8));
    contactImage.style.transform = paused ? 'none' : `scale(${1.025 + contactProgress * .025}) translateY(${(contactProgress - .5) * -18}px)`;
    const moving = !paused && (Math.abs(heroValue - heroTarget) > .0005 || Math.abs(laptopValue - laptopTarget) > .0005 || Math.abs(pointerValue - pointerTarget) > .0005);
    if (moving) schedule();
  }

  function schedule() {
    if (!frameRequest) frameRequest = requestAnimationFrame(render);
  }

  function syncMotion() {
    paused = reducedMotion.matches || manuallyPaused;
    root.classList.toggle('motion-paused', paused);
    motionButton.setAttribute('aria-pressed', String(paused));
    motionButton.setAttribute('aria-label', reducedMotion.matches ? 'Motion reduced by your device settings' : paused ? 'Resume motion' : 'Pause motion');
    motionButton.title = motionButton.getAttribute('aria-label');
    motionButton.disabled = reducedMotion.matches;
    pointerTarget = 0;
    measure();
  }
  motionButton.addEventListener('click', () => {
    manuallyPaused = !manuallyPaused;
    try { localStorage.setItem('kaustav-motion-paused', String(manuallyPaused)); } catch (_) { /* Continue without persistence. */ }
    syncMotion();
  });
  reducedMotion.addEventListener('change', syncMotion);
  window.addEventListener('scroll', schedule, {passive: true});
  window.addEventListener('resize', measure, {passive: true});
  window.addEventListener('pageshow', measure);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(frameRequest); frameRequest = 0; }
    else { previousTime = 0; measure(); }
  });
  heroStage.addEventListener('pointermove', event => {
    if (paused || !finePointer.matches || event.pointerType === 'touch') return;
    pointerTarget = (event.clientX / window.innerWidth - .5) * 2;
    schedule();
  }, {passive: true});
  heroStage.addEventListener('pointerleave', () => { pointerTarget = 0; schedule(); });

  const portraitImage = new Image();
  portraitImage.onload = () => { portraitReady = true; portrait.classList.add('atlas-ready'); schedule(); };
  portraitImage.onerror = () => { portraitReady = false; portrait.setAttribute('aria-label', 'Portrait of Kaustav Nandi'); };
  portraitImage.src = 'assets/portrait-turn.webp';
  const laptopImage = new Image();
  laptopImage.onload = () => { laptopReady = true; schedule(); };
  laptopImage.onerror = () => { laptopSection.hidden = true; measure(); };
  laptopImage.src = 'assets/laptop-open.webp';

  // Reveals never hide content in browsers without IntersectionObserver.
  if ('IntersectionObserver' in window) {
    root.classList.add('js-enabled');
    const revealObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
      }
    }, {threshold: .08, rootMargin: '0px 0px -25px 0px'});
    $$('.reveal').forEach(element => revealObserver.observe(element));
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        $$('.desktop-nav a').forEach(link => {
          const active = link.hash === `#${entry.target.id}`;
          link.classList.toggle('is-active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, {rootMargin: '-15% 0px -55% 0px', threshold: 0});
    $$('#home, #about, #work, #skills, #contact').forEach(section => navObserver.observe(section));
  }

  const menuButton = $('.menu-button');
  const mobileNav = $('#mobile-nav');
  function closeMenu(returnFocus = false) {
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    if (returnFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    mobileNav.hidden = isOpen;
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  });
  $$('#mobile-nav a').forEach(link => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileNav.hidden) closeMenu(true); });
  document.addEventListener('click', event => { if (!mobileNav.hidden && !mobileNav.contains(event.target) && !menuButton.contains(event.target)) closeMenu(); });
  window.matchMedia('(min-width: 851px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

  const projects = {
    airport: {
      category: 'PYTHON / DATABASES / AUTOMATION',
      title: 'Airport Management System',
      description: 'A Python and MySQL application that brings key airport operations together. I built it to connect database design with a practical, multi-part workflow.',
      features: ['Flight and passenger records with search and management workflows.', 'Boarding passes with seat and gate details, including QR code output.', 'Baggage, employee, runway and security management.'],
      tags: ['Python', 'MySQL', 'Database Design'],
    },
    pulmoscan: {
      category: 'ARTIFICIAL INTELLIGENCE / IMAGE ANALYSIS',
      title: 'PulmoScan AI',
      description: 'An experimental AI project that analyses chest X-ray images to explore the prediction of a specific pulmonary condition. It reflects my interest in applying computer vision to meaningful problems.',
      features: ['Chest X-ray images as the input to an AI workflow.', 'Exploration of image-based classification and potential abnormalities.', 'A learning project; not presented as a clinically validated diagnostic tool.'],
      tags: ['Python', 'Artificial Intelligence', 'Computer Vision'],
    },
    traffic: {
      category: 'COMPUTER VISION / TRAFFIC ANALYSIS',
      title: 'AI Traffic Violation Detection',
      description: 'A computer vision project exploring how video can help recognise traffic-signal violations and read vehicle number plates.',
      features: ['Exploring vehicle detection and traffic-signal violation recognition.', 'Automatic number-plate recognition (ANPR) as part of the workflow.', 'Experimenting with Python and OpenCV to improve detection and recognition.'],
      tags: ['Python', 'OpenCV', 'ANPR'],
    },
  };
  const dialog = $('#project-dialog');
  let projectOpener = null;
  $$('.project-open').forEach(button => button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    if (!project) return;
    projectOpener = button;
    $('#dialog-category').textContent = project.category;
    $('#dialog-title').textContent = project.title;
    $('#dialog-description').textContent = project.description;
    $('#dialog-features').replaceChildren(...project.features.map(text => { const li = document.createElement('li'); li.textContent = text; return li; }));
    $('#dialog-tags').replaceChildren(...project.tags.map(text => { const span = document.createElement('span'); span.textContent = text; return span; }));
    document.body.classList.add('modal-open');
    dialog.showModal();
    $('.dialog-close').focus();
  }));
  $('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    if (projectOpener) projectOpener.focus({preventScroll: true});
  });

  const copyButton = $('.copy-email');
  let copyReset;
  copyButton.addEventListener('click', async () => {
    const label = $('span', copyButton);
    const status = $('.copy-status');
    clearTimeout(copyReset);
    try {
      await navigator.clipboard.writeText('kaustavnandi8@gmail.com');
      label.textContent = 'Copied!';
      status.textContent = 'Email address copied to your clipboard.';
    } catch (_) {
      const range = document.createRange();
      range.selectNodeContents($('.email-address'));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      label.textContent = 'Select & copy';
      status.textContent = 'Automatic copying is unavailable. The email is selected; copy it using your device’s copy command.';
    }
    copyReset = setTimeout(() => { label.textContent = 'Copy email'; status.textContent = ''; }, 3500);
  });

  syncMotion();
  window.addEventListener('load', measure, {once: true});
})();

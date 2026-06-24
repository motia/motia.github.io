const $ = <T extends Element>(selector: string) => document.querySelector<T>(selector);
const $$ = <T extends Element>(selector: string) => Array.from(document.querySelectorAll<T>(selector));

const cursor = $('#cur') as HTMLElement | null;
const cursorRing = $('#curR') as HTMLElement | null;
const nav = $('#nav');
const progress = $('#prog') as HTMLElement | null;
const scrollTopButton = $('#stBtn');
const mobileMenu = $('#mobMenu');
const menuButton = $('#ham');
const sections = ['home', 'proof', 'availability', 'capabilities', 'stages', 'projects', 'ai', 'contact'];

let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

function setupCursor() {
  if (!cursor || !cursorRing || window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

  document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  const animateRing = () => {
    ringX += (mouseX - ringX) * 0.1;
    ringY += (mouseY - ringY) * 0.1;
    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;
    requestAnimationFrame(animateRing);
  };
  animateRing();

  $$<HTMLElement>('a,button,.proj-card,.cap-card,.tech-tag,.sn-item,.availability-card').forEach((element) => {
    element.addEventListener('mouseenter', () => {
      cursor.classList.add('h');
      cursorRing.classList.add('h');
    });
    element.addEventListener('mouseleave', () => {
      cursor.classList.remove('h');
      cursorRing.classList.remove('h');
    });
  });
}

function updateNav() {
  const scrollY = window.scrollY + 110;
  let current = 'home';

  sections.forEach((id) => {
    const element = document.getElementById(id);
    if (element && element.offsetTop <= scrollY) current = id;
  });

  $$<HTMLAnchorElement>('.nav-links a[data-s]').forEach((anchor) => {
    anchor.classList.toggle('active', anchor.dataset.s === current);
  });
}

function setupScrollUi() {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    nav?.classList.toggle('s', scrollY > 80);
    scrollTopButton?.classList.toggle('v', scrollY > 500);

    if (progress) {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      const scale = scrollable > 0 ? scrollY / scrollable : 0;
      progress.style.transform = `scaleX(${scale})`;
    }

    updateNav();
  }, { passive: true });

  scrollTopButton?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function closeMenu() {
  mobileMenu?.classList.remove('o');
  menuButton?.classList.remove('o');
  document.body.style.overflow = '';
}

function setupNavigation() {
  menuButton?.addEventListener('click', () => {
    const open = mobileMenu?.classList.toggle('o') ?? false;
    menuButton.classList.toggle('o', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  $$<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const selector = anchor.getAttribute('href');
      if (!selector || selector === '#') return;

      const target = document.querySelector(selector);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    });
  });
}

function setupIntersectionAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const element = entry.target as HTMLElement;
      const delay = Number(element.dataset.stagger ?? '0') * 100;
      window.setTimeout(() => element.classList.add('v'), delay);
      observer.unobserve(element);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  $$<HTMLElement>('[data-a]').forEach((element, index) => {
    element.dataset.stagger = String(index % 6);
    observer.observe(element);
  });
}

function setupStages() {
  $$<HTMLButtonElement>('.sn-item[data-stage-target]').forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.dataset.stageTarget;
      if (!targetId) return;

      $$('.sn-item').forEach((item) => item.classList.remove('active'));
      $$('.stage-panel').forEach((panel) => panel.classList.remove('active'));

      button.classList.add('active');
      document.getElementById(targetId)?.classList.add('active');
    });
  });
}

function setupProjectTilt() {
  $$<HTMLElement>('.proj-card').forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

      const rect = card.getBoundingClientRect();
      const dx = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const dy = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);

      card.style.transform = `perspective(900px) rotateX(${-dy * 6}deg) rotateY(${dx * 9}deg) scale(1.02)`;
      card.style.boxShadow = `${-dx * 10}px ${-dy * 10}px 40px rgba(217,119,6,0.12)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform .5s ease, box-shadow .5s ease';
      card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale(1)';
      card.style.boxShadow = 'none';
      window.setTimeout(() => { card.style.transition = ''; }, 500);
    });
  });
}

function setupLifecycleTabs() {
  $$<HTMLElement>('.stage-tab').forEach((tab) => {
    tab.addEventListener('mouseenter', () => {
      $$('.stage-tab').forEach((item) => item.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

setupCursor();
setupScrollUi();
setupNavigation();
setupIntersectionAnimations();
setupStages();
setupProjectTilt();
setupLifecycleTabs();
updateNav();

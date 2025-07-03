const content = {
  // Header section with logo and navigation
  "header": {
    "texts": [
      "Somarthok",
      "Products",
      "About",
      "Impact",
      "Contact"
    ],
    "image_urls": [
      "https://scontent.fdac2-1.fna.fbcdn.net/v/t39.30808-1/471172574_122150603240340242_2176485461958225354_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=110&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeGZw1MEodJ9JpnaT1BHZFbw_T5YBIyqPs39PlgEjKo-zQoSIxPPBQeqUhK-EFoWnHZT8Bc3Pw1qF4FSLgIyYZsB&_nc_ohc=52JdJ7A4leMQ7kNvwEMC3rL&_nc_oc=AdlnT9RxaevhF5wphx6EkfUc-jGNSiLM_284AioNap69N0chXgo_eeEEsPR86fOfPSQ&_nc_zt=24&_nc_ht=scontent.fdac2-1.fna&_nc_gid=Xyw6VBr7byDhG6Z88EHrLg&oh=00_AfPnie4KALJOfc9rk5GUWLjDwdPTPRnJkuKCiU5bTWe1sQ&oe=686AE551"
    ]
  },
  // Hero section with main heading, subtext, and call to action
  "hero_section": {
    "texts": [
      "Make Every Meal a Statement for the Planet",
      "Discover stylish, compostable cutlery and packaging that's as good for your brand as it is for the Earth.",
      "Join thousands making the switch.",
      "Shop Now"
    ],
    "image_urls": [
      "https://scontent.fdac2-1.fna.fbcdn.net/v/t39.30808-6/471172574_122150603240340242_2176485461958225354_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGZw1MEodJ9JpnaT1BHZFbw_T5YBIyqPs39PlgEjKo-zQoSIxPPBQeqUhK-EFoWnHZT8Bc3Pw1qF4FSLgIyYZsB&_nc_ohc=52JdJ7A4leMQ7kNvwEMC3rL&_nc_oc=AdlnT9RxaevhF5wphx6EkfUc-jGNSiLM_284AioNap69N0chXgo_eeEEsPR86fOfPSQ&_nc_zt=23&_nc_ht=scontent.fdac2-1.fna&_nc_gid=MJZY_yhcS-oiMnlK6R1zQw&oh=00_AfPBwL3d6d2fQiE874PAz1JB3exg9gicUsgpunVX4rbvUA&oe=686AEFF6"
    ]
  },
  // Products section with product names, descriptions, prices
  "products_section": {
    "texts": [
      "Our Bestsellers",
      "Paper Plate",
      "Reusable, biodegradable, and beautifully crafted. Say goodbye to plastic—forever.",
      "30",
      "Wooden Spoons",
      "Leak-proof, sturdy, and guilt-free. Perfect for takeout, parties, and picnics.",
      "50",
      "Recycled Paper Bags",
      "Strong, stylish, and 100% recycled. Carry your values with every purchase.",
      "50"
    ],
    "image_urls": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Bp_B85B8GFZwbMqi5VyEEnhJY986Xmro8JRN3jrudNwo8RRceQosQfsgn5a4J9Wg22E&usqp=CAU",
      "https://biopackagingsolution.com/wp-content/uploads/2016/03/1.jpg",
      "https://hq2.recyclist.co/wp-content/uploads/sites/2/2015/02/paperbag-300x300.jpg"
    ]
  },
  // About section with heading, bullet points, and paragraph
  "about_section": {
    "texts": [
      "Why Somarthok?",
      "Certified compostable & recyclable materials",
      "Zero plastic—only plant-based, renewable resources",
      "Vibrant, modern design for every occasion",
      "Custom branding available for your business",
      "We believe every meal is a chance to make a difference. Our products are designed to delight your customers, protect the planet, and elevate your brand."
    ],
    "image_urls": [
      "https://static.vecteezy.com/system/resources/previews/005/121/556/large_2x/wooden-forks-and-paper-cups-with-plates-on-kraft-paper-background-eco-friendly-disposable-tableware-also-used-in-fast-food-restaurants-takeaways-picnics-top-view-copy-empty-space-for-text-free-photo.jpg"
    ]
  },
  // Marketing stats section with impact numbers
  "stats_section": {
    "texts": [
      "Our Impact in Numbers",
      "98% of customers feel proud to use our products",
      "10k+ single-use plastics replaced",
      "99% biodegradable & compostable"
    ],
    "image_urls": []
  },
  // Contact section with heading and form placeholders
  "contact_section": {
    "texts": [
      "Let's Connect",
      "Name",
      "Email",
      "Your message",
      "Send Message"
    ],
    "image_urls": []
  },
  // Footer with logo and social media icons
  "footer": {
    "texts": [
      "Somarthok © 2025"
    ],
    "image_urls": [
      "https://pplx-res.cloudinary.com/image/private/user_uploads/78108584/97aa65e5-e93f-4292-8033-a8cb31e812e9/471172574_122150603240340242_2176485461958225354_n-removebg-preview.jpg"
    ]
  }
};

// Page Title
document.title = "Somarthok: Sustainable Cutlery & Packaging";
document.getElementById('page-title').innerText = "Somarthok: Sustainable Cutlery & Packaging";

// Header
document.getElementById('header-logo').src = content.header.image_urls[0];
document.getElementById('header-brand').innerText = content.header.texts[0];
// Nav links
const navIcons = ['fa-utensils', 'fa-seedling', 'fa-chart-line', 'fa-envelope'];
const navAnchors = ['#products', '#about', '#stats', '#contact'];
let navHtml = '', mobileNavHtml = '';
for(let i=1; i<content.header.texts.length; i++) {
  navHtml += `<li><a href="${navAnchors[i-1]}" class="hover:text-eco3 transition-colors"><i class="fa-solid ${navIcons[i-1]}"></i> ${content.header.texts[i]}</a></li>`;
  mobileNavHtml += `<li><a href="${navAnchors[i-1]}" class="hover:text-eco3 transition-colors"><i class="fa-solid ${navIcons[i-1]}"></i> ${content.header.texts[i]}</a></li>`;
}
document.getElementById('nav-links').innerHTML = navHtml;
document.getElementById('mobile-nav-links').innerHTML = mobileNavHtml;

// Hero Section
document.getElementById('hero-title').innerText = content.hero_section.texts[0];
document.getElementById('hero-desc').innerHTML =
  content.hero_section.texts[1] + '<br><span class="italic text-eco3">' + content.hero_section.texts[2] + '</span>';
document.getElementById('hero-cta').innerHTML = `<i class="fa-solid fa-cart-shopping mr-2"></i> ${content.hero_section.texts[3]}`;
document.getElementById('hero-img').src = content.hero_section.image_urls[0];

// Products Section
document.getElementById('products-title').innerText = content.products_section.texts[0];

// Product data for cart functionality
const products = [
  {
    id: 'paper-plate',
    name: content.products_section.texts[1],
    description: content.products_section.texts[2],
    price: content.products_section.texts[3],
    image: content.products_section.image_urls[0],
    unit: '10pcs'
  },
  {
    id: 'wooden-spoons',
    name: content.products_section.texts[4],
    description: content.products_section.texts[5],
    price: content.products_section.texts[6],
    image: content.products_section.image_urls[1],
    unit: '10pcs'
  },
  {
    id: 'paper-bags',
    name: content.products_section.texts[7],
    description: content.products_section.texts[8],
    price: content.products_section.texts[9],
    image: content.products_section.image_urls[2],
    unit: '5pcs'
  }
];

let productsHtml = '';
products.forEach((product, i) => {
  productsHtml += `
  <div class="bg-gradient-to-br from-eco${(i%5)+1} via-eco${((i+1)%5)+1} to-eco${((i+2)%5)+1} rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300 group animate-fade-in">
    <img src="${product.image}" alt="${product.name}" class="rounded-full w-32 h-32 object-cover border-4 border-white mb-4 group-hover:shadow-2xl transition-shadow" />
    <h3 class="font-heading text-xl text-white mb-2">${product.name}</h3>
    <p class="text-white/90 text-center mb-4">${product.description}</p>
    <span class="bg-white/90 text-eco${(i%5)+1} font-bold px-4 py-1 rounded-full mb-3">৳${product.price}/${product.unit}</span>
    <button onclick="addToCart('${product.id}', '${product.name}', '${product.price}', '${product.image}')" 
            class="px-6 py-2 rounded-full bg-eco3 text-white font-semibold shadow hover:bg-eco4 transition-colors duration-200 hover:scale-105 transform">
      <i class="fa-solid fa-cart-plus mr-1"></i> Add to Cart
    </button>
  </div>`;
});
document.getElementById('products-list').innerHTML = productsHtml;

// About Section
document.getElementById('about-img').src = content.about_section.image_urls[0];
document.getElementById('about-title').innerText = content.about_section.texts[0];
let aboutList = '';
for(let i=1; i<=4; i++) {
  aboutList += `<li><i class="fa-solid fa-circle-check text-eco1 mr-2"></i> <span class="font-bold">${content.about_section.texts[i].split('—')[0]}</span>${content.about_section.texts[i].includes('—') ? '—' + content.about_section.texts[i].split('—')[1] : ''}</li>`;
}
document.getElementById('about-list').innerHTML = aboutList;
document.getElementById('about-desc').innerText = content.about_section.texts[5];

// Stats Section
document.getElementById('stats-title').innerText = content.stats_section.texts[0];
let statsList = '';
const statsIcons = ['fa-globe', 'fa-tree', 'fa-hand-holding-heart'];
const statsColors = ['eco1', 'eco2', 'eco3'];
for(let i=1; i<content.stats_section.texts.length; i++) {
  const parts = content.stats_section.texts[i].split(' ');
  statsList += `<div class="flex items-center gap-4">
    <i class="fa-solid ${statsIcons[i-1]} text-${statsColors[i-1]} text-3xl"></i>
    <div>
      <span class="font-bold text-2xl text-${statsColors[i-1]}">${parts[0]}</span>
      <span class="text-gray-700">${content.stats_section.texts[i].substring(parts[0].length)}</span>
    </div>
  </div>`;
}
document.getElementById('stats-list').innerHTML = statsList;

// Contact Section
document.getElementById('contact-title').innerText = content.contact_section.texts[0];
document.getElementById('contact-name').placeholder = content.contact_section.texts[1];
document.getElementById('contact-email').placeholder = content.contact_section.texts[2];
document.getElementById('contact-message').placeholder = content.contact_section.texts[3];
document.getElementById('contact-submit').innerHTML = `<i class="fa-solid fa-paper-plane mr-2"></i> ${content.contact_section.texts[4]}`;

// Footer
document.getElementById('footer-logo').src = content.footer.image_urls[0];
document.getElementById('footer-brand').innerText = content.footer.texts[0];

// Mobile Menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
menuBtn.onclick = () => mobileMenu.style.display = 'flex';
closeMenu.onclick = () => mobileMenu.style.display = 'none';

// D3.js Bar Chart (Marketing Stats)
const data = [
  { label: "2023", value: 30 },
  { label: "2024", value: 100 },
  { label: "2025", value: 500 },
  { label: "2026", value: 900 },
];
const w = 250, h = 220, margin = {top: 30, right: 20, bottom: 40, left: 40};
const svg = d3.select("#d3-bar-chart")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

const x = d3.scaleBand()
  .domain(data.map(d => d.label))
  .range([margin.left, w - margin.right])
  .padding(0.22);

const y = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value) + 5])
  .range([h - margin.bottom, margin.top]);

svg.append("g")
  .attr("transform", `translate(0,${h - margin.bottom})`)
  .call(d3.axisBottom(x).tickSizeOuter(0))
  .attr("font-size", "1rem");

svg.append("g")
  .attr("transform", `translate(${margin.left},0)`)
  .call(d3.axisLeft(y).ticks(5))
  .attr("font-size", "1rem");

svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", d => x(d.label))
  .attr("y", h - margin.bottom)
  .attr("width", x.bandwidth())
  .attr("height", 0)
  .attr("rx", 8)
  .attr("fill", "url(#eco-gradient)")
  .on("mouseover", function() { d3.select(this).attr("fill", "#34d399"); })
  .on("mouseout", function() { d3.select(this).attr("fill", "url(#eco-gradient)"); })
  .transition()
  .duration(1200)
  .delay((d, i) => i * 200)
  .attr("y", d => y(d.value))
  .attr("height", d => h - margin.bottom - y(d.value));

// Gradient fill for bars
svg.append("defs").append("linearGradient")
  .attr("id", "eco-gradient")
  .attr("x1", "0%").attr("y1", "0%")
  .attr("x2", "0%").attr("y2", "100%")
  .selectAll("stop")
  .data([
    {offset: "0%", color: "#60a5fa"},
    {offset: "50%", color: "#34d399"},
    {offset: "100%", color: "#fbbf24"}
  ])
  .enter().append("stop")
  .attr("offset", d => d.offset)
  .attr("stop-color", d => d.color);

svg.selectAll("text.value")
  .data(data)
  .enter()
  .append("text")
  .attr("class", "value")
  .attr("x", d => x(d.label) + x.bandwidth() / 2)
  .attr("y", d => y(d.value) - 10)
  .attr("text-anchor", "middle")
  .attr("fill", "#222")
  .attr("font-size", "1.1rem")
  .attr("font-weight", "bold")
  .text(d => d.value + "K");

// Abstract Canvas Animation (bokeh circles)
const canvas = document.getElementById('canvas-bg');
const ctx = canvas.getContext('2d');
let circles = [];
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  circles = Array.from({length: 22}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: 40 + Math.random() * 60,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
    color: `rgba(${[52,211,153,0.16+Math.random()*0.15].join(',')})`
  }));
}
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const c of circles) {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
    ctx.fillStyle = c.color;
    ctx.fill();
    c.x += c.dx;
    c.y += c.dy;
    if (c.x < -c.r) c.x = canvas.width + c.r;
    if (c.x > canvas.width + c.r) c.x = -c.r;
    if (c.y < -c.r) c.y = canvas.height + c.r;
    if (c.y > canvas.height + c.r) c.y = -c.r;
  }
  requestAnimationFrame(animate);
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
animate();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu if open
      if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
      }
    }
  });
});
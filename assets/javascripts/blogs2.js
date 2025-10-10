// ====== BLOG RENDERING ======
const blogContainer = document.getElementById("blogContainer");
const pagination = document.getElementById("pagination");
const themeToggle = document.getElementById("themeToggle");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

const postsPerPage = 6;
let currentPage = 1;
let filteredBlogs = blogs;

// ===== INITIAL SETUP =====
initFilters();
renderBlogs();

// ====== POPULATE CATEGORY FILTER ======
function initFilters() {
  const categories = new Set();
  blogs.forEach((post) => post.tags.forEach((tag) => categories.add(tag)));
  categories.forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });
}

// ====== RENDER BLOGS ======
function renderBlogs() {
  blogContainer.innerHTML = "";

  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const pagePosts = filteredBlogs.slice(start, end);

  if (pagePosts.length === 0) {
    blogContainer.innerHTML = "<p style='text-align:center;'>No blog posts found.</p>";
    pagination.innerHTML = "";
    return;
  }

  pagePosts.forEach((post) => {
    const card = document.createElement("article");
    card.className = "blog-card";
    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}">
      <div class="blog-content">
        <h3>${post.title}</h3>
        <p class="date">${post.date}</p>
        <p>${post.description}</p>
        <div class="tags">
          ${post.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <a href="${post.link}" class="read-more">Read more →</a>
      </div>
    `;
    blogContainer.appendChild(card);
  });

  renderPagination();
}

// ====== RENDER PAGINATION ======
function renderPagination() {
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const a = document.createElement("a");
    a.textContent = i;
    a.href = "#";
    a.classList.toggle("active", i === currentPage);
    a.addEventListener("click", (e) => {
      e.preventDefault();
      currentPage = i;
      renderBlogs();
    });
    pagination.appendChild(a);
  }
}

// ====== SEARCH FUNCTION ======
searchInput.addEventListener("input", () => {
  applyFilters();
});

// ====== CATEGORY FILTER FUNCTION ======
categoryFilter.addEventListener("change", () => {
  applyFilters();
});

function applyFilters() {
  const keyword = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  filteredBlogs = blogs.filter((post) => {
    const matchesKeyword =
      post.title.toLowerCase().includes(keyword) ||
      post.description.toLowerCase().includes(keyword);

    const matchesCategory =
      selectedCategory === "all" ||
      post.tags.includes(selectedCategory);

    return matchesKeyword && matchesCategory;
  });

  currentPage = 1;
  renderBlogs();
}

// ====== THEME SWITCH ======
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark")
    ? "Light Mode"
    : "Dark Mode";
});


document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');
  const icon = themeToggle.querySelector('i');

  // Load saved theme (if any)
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    icon.classList.replace('fa-moon', 'fa-sun');
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');

    // Switch icon
    if (isDark) {
      icon.classList.replace('fa-moon', 'fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      icon.classList.replace('fa-sun', 'fa-moon');
      localStorage.setItem('theme', 'light');
    }
  });
});


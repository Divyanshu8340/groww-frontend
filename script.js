function openProduct(productId) {
  localStorage.setItem("selectedProduct", productId);
  window.location.href = "product.html";
}

const products = {
  "reliance-stock": {
    name: "Reliance Industries",
    image: "https://companiesmarketcap.com/img/company-logos/512/RELIANCE.NS.png",
    description: "A giant in energy, telecom, and retail.",
    returns: "10.2%"
  },
  "infosys-stock": {
    name: "Infosys",
    image: "https://companiesmarketcap.com/img/company-logos/512/INFY.png",
    description: "Top IT services company in India.",
    returns: "9.6%"
  },
  "hdfc-bank-stock": {
    name: "HDFC Bank",
    image: "https://companiesmarketcap.com/img/company-logos/512/HDB.png",
    description: "India’s leading private bank.",
    returns: "7.4%"
  },
  "itc-stock": {
    name: "ITC Ltd.",
    image: "https://companiesmarketcap.com/img/company-logos/512/ITC.NS.png",
    description: "Diversified FMCG giant.",
    returns: "6.8%"
  },
  "lnt-stock": {
    name: "Larsen & Toubro",
    image: "https://companiesmarketcap.com/img/company-logos/512/LT.NS.png",
    description: "Engineering and construction major.",
    returns: "9.2%"
  },
  "sbi-stock": {
    name: "State Bank of India",
    image: "https://companiesmarketcap.com/img/company-logos/512/SBIN.NS.png",
    description: "India's largest PSU bank.",
    returns: "8.5%"
  },
  "bharti-airtel-stock": {
    name: "Bharti Airtel",
    image: "https://companiesmarketcap.com/img/company-logos/512/BHARTIARTL.NS.png",
    description: "Leading telecom provider.",
    returns: "6.4%"
  },
  "tcs-stock": {
    name: "TCS",
    image: "https://companiesmarketcap.com/img/company-logos/512/TCS.NS.png",
    description: "Largest Indian IT services firm.",
    returns: "11.3%"
  },
  "hindustan-unilever-stock": {
    name: "Hindustan Unilever",
    image: "https://companiesmarketcap.com/img/company-logos/512/HINDUNILVR.NS.png",
    description: "Top Indian FMCG brand.",
    returns: "7.6%"
  },
  "asian-paints-stock": {
    name: "Asian Paints",
    image: "https://companiesmarketcap.com/img/company-logos/512/ASIANPAINT.NS.png",
    description: "Leading decorative paint manufacturer.",
    returns: "6.9%"
  },
  "maruti-stock": {
    name: "Maruti Suzuki",
    image: "https://companiesmarketcap.com/img/company-logos/512/MARUTI.NS.png",
    description: "India's biggest car manufacturer.",
    returns: "9.8%"
  },
  "bajaj-finance-stock": {
    name: "Bajaj Finance",
    image: "https://companiesmarketcap.com/img/company-logos/512/BAJFINANCE.NS.png",
    description: "Top NBFC offering financial products.",
    returns: "10.7%"
  }
};

// PRODUCT PAGE
if (window.location.pathname.includes("product.html")) {
  const id = localStorage.getItem("selectedProduct");
  const p = products[id];
  if (p) {
    document.getElementById("product-name").innerText = p.name;
    document.getElementById("product-image").src = p.image;
    document.getElementById("product-description").innerText = p.description;
    document.getElementById("product-returns").innerText = `Returns: ${p.returns}`;
  }
}

// ADD TO WATCHLIST
function addToWatchlist() {
  const id = localStorage.getItem("selectedProduct");
  let wl = JSON.parse(localStorage.getItem("watchlist")) || [];
  if (!wl.includes(id)) {
    wl.push(id);
    localStorage.setItem("watchlist", JSON.stringify(wl));
    alert("Added to watchlist!");
  } else {
    alert("Already in watchlist!");
  }
}

// REMOVE FROM WATCHLIST
function removeFromWatchlist(id) {
  let wl = JSON.parse(localStorage.getItem("watchlist")) || [];
  wl = wl.filter(item => item !== id);
  localStorage.setItem("watchlist", JSON.stringify(wl));
  renderWatchlist(); // Refresh display
}

// WATCHLIST PAGE
function renderWatchlist() {
  const container = document.getElementById("watchlist");
  container.innerHTML = ""; // Clear previous cards

  const wl = JSON.parse(localStorage.getItem("watchlist")) || [];
  if (wl.length === 0) {
    container.innerHTML = "<p>Your watchlist is empty.</p>";
    return;
  }

  wl.forEach(id => {
    const p = products[id];
    if (p) {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" />
        <h2>${p.name}</h2>
        <p>${p.description}</p>
        <p>Returns: ${p.returns}</p>
        <button onclick="removeFromWatchlist('${id}')">Remove</button>
      `;
      container.appendChild(card);
    }
  });
}

if (window.location.pathname.includes("watchlist.html")) {
  window.addEventListener("DOMContentLoaded", renderWatchlist);
}







document.addEventListener('DOMContentLoaded', function() {
    const countriesData = [
        { name: "Indonesia", minPrice: 5000, maxPrice: 6000, label: "best-seller", labelText: "Best Seller" },
        { name: "Malaysia", minPrice: 10000, maxPrice: 20000 },
        { name: "Rusia", minPrice: 17000, maxPrice: 55000 },
        { name: "China", minPrice: 18000, maxPrice: 25000 },
        { name: "Francis", minPrice: 150000, maxPrice: 190000 },
        { name: "Australia", minPrice: 250000, maxPrice: 1340000 },
        { name: "India", minPrice: 28000, maxPrice: 34000 },
        { name: "Belanda", minPrice: 15000, maxPrice: 90000 },
        { name: "Turki", minPrice: 250000, maxPrice: 300000 },
        { name: "Thailand", minPrice: 12000, maxPrice: 25000 },
        { name: "Inggris", minPrice: 20000, maxPrice: 30000 },
        { name: "Kolombia", minPrice: 10000, maxPrice: 20000 },
        { name: "Jerman", minPrice: 120000, maxPrice: 150000, label: "hot", labelText: "Hot" },
        { name: "Filipina", minPrice: 6000, maxPrice: 13000, label: "viral", labelText: "Viral" },
        { name: "Brazil", minPrice: 19000, maxPrice: 50000 },
        { name: "Jepang", minPrice: 190000, maxPrice: 1050000 },
        { name: "Bhutan", minPrice: 8000, maxPrice: 17000 },
        { name: "Kazakhstan", minPrice: 37000, maxPrice: 150000 },
        { name: "Poland", minPrice: 15000, maxPrice: 20000 },
        { name: "Africa", minPrice: 5000, maxPrice: 10000 },
        { name: "Chile", minPrice: 7000, maxPrice: 15000 },
        { name: "Ukraine", minPrice: 10000, maxPrice: 30000 },
        { name: "Kroasia", minPrice: 20000, maxPrice: 90000 },
        { name: "USA", minPrice: 11000, maxPrice: 120000 },
        { name: "Finlandia", minPrice: 35000, maxPrice: 100000 },
        { name: "Denmark", minPrice: 20000, maxPrice: 90000 },
        { name: "Singapore", minPrice: 90000, maxPrice: 350000 },
        { name: "Cambodia", minPrice: 15000, maxPrice: 30000 }
    ];

    const countryRowsContainer = document.getElementById('countryRows');
    const sortSelect = document.getElementById('sortOption');
    
    // Render countries
    function renderCountries(countries) {
        countryRowsContainer.innerHTML = '';
        countries.forEach(country => {
            const row = document.createElement('div');
            row.className = 'country-row';
            row.dataset.name = country.name;
            row.dataset.minPrice = country.minPrice;
            row.dataset.maxPrice = country.maxPrice;
            
            const priceFormatted = `Rp ${formatNumber(country.minPrice)} - ${formatNumber(country.maxPrice)}`;
            
            row.innerHTML = `
                <div class="country-name">
                    <i class="fas fa-flag"></i> ${country.name}
                    ${country.label ? `<span class="label ${country.label}">${country.labelText}</span>` : ''}
                </div>
                <div class="country-price">${priceFormatted}</div>
            `;
            
            countryRowsContainer.appendChild(row);
        });
    }
    
    // Format number with dots as thousand separators
    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    
    // Sort countries
    function sortCountries(data, sortValue) {
        switch(sortValue) {
            case 'price-high':
                return [...data].sort((a, b) => b.minPrice - a.minPrice);
            case 'price-low':
                return [...data].sort((a, b) => a.minPrice - b.minPrice);
            case 'name-az':
                return [...data].sort((a, b) => a.name.localeCompare(b.name));
            case 'name-za':
                return [...data].sort((a, b) => b.name.localeCompare(a.name));
            default:
                return [...data];
        }
    }
    
    // Initial render
    renderCountries(countriesData);
    
    // Event listener for sort
    sortSelect.addEventListener('change', function() {
        const sortedCountries = sortCountries(countriesData, this.value);
        renderCountries(sortedCountries);
    });
});
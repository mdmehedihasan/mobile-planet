const searchPhone = () => {
    const searchInput = document.getElementById('input-search');
    const searchValue = searchInput.value;
    console.log(searchValue);
    searchInput.value = '';

    const url = `
    https://openapi.programming-hero.com/api/phones?search=${searchValue}
    `;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearch(data.data))
}
const displaySearch = (data) => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    data.forEach(mobile => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="showDetails(${mobile.brand})" class="card">
                <img  src="${mobile.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${mobile.phone_name}</h5>
                </div>
        `;
        searchResult.appendChild(div);
    });
}
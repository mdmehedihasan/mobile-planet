const searchPhone = () => {
    const searchInput = document.getElementById('input-search');
    const searchValue = searchInput.value;
    // console.log(searchValue);
    searchInput.value = '';

    const url = `
    https://openapi.programming-hero.com/api/phones?search=${searchValue}
    `;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearch(data.data))
}
const displaySearch = (data) => {
    //console.log(data);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    data.forEach(mobile => {
        const div = document.createElement('div');
        div.classList.add('col');
        //console.log(mobile.slug)
        div.innerHTML = `
        <div onclick="showDetails('${mobile.slug}')" class="card m-3">
                <img height="400px"  src="${mobile.image}" class="card-img-top" alt="image">
                <div class="card-body m-2">
                    <h5 class="card-title">${mobile.phone_name}</h5>
                    <button type="button" class="btn btn-primary">Details</button>
                </div>
        `;
        searchResult.appendChild(div);
    });
}

// Show details phone
const showDetails = phoneSlug => {
    // console.log(phoneSlug);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneSlug}`;
    // console.log(url)
    fetch(url)
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => displayPhoneDetails(data))
}

//display single phone details
const displayPhoneDetails = (phones) => {
    console.log(phones);
    const phoneDetail = document.getElementById('singlePhoneDetail');
    const div = document.createElement('div');
    div.classList.add('card', 'border', 'border-light');
    // clear data
    phoneDetail.innerHTML = `
    <img height="500px" src="${phones.data.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phones.data.name}</h5>
            </div>
    `;
    phoneDetail.appendChild(div);

}

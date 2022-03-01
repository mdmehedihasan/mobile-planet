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
        .then(data => console.log(data))
    // console.log(url);
}
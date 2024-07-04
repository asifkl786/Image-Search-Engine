const accessKey = "jRI-1rQlfnDO_gAx1eLFt4GvIin3U24oR9lNZfBKoDE";


const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");


let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
   // const url = `https://api.unsplash.com/search/photos?page=1&query=office&client_id=jRI-1rQlfnDO_gAx1eLFt4GvIin3U24oR9lNZfBKoDE`;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    // Thease line of code hide or blank page one image
    // If you enter another image title
     if(page === 1){
        searchResult.innerHTML = "";
     }

    const results = data.results;

    // Thease line of code display result in UI
    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image); 
        searchResult.appendChild(imageLink);
    })
    showMoreBtn.style.display = "block";
}
// These function fetch all images 
searchForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    page = 1;
    searchImages();
});

// Thease line of code load more image 
showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();
});

console.log('linked :)');

const searchInput = document.getElementById('searchInput');

//--------------------------------------------------------------------
// Object array - start
//--------------------------------------------------------------------

let bannerObjectArray = [
    {
        id: 0,
        photo: './images/city.jpg',
        altText: 'cityscape',
        tags: ['city', 'cityscape'],
        social: '@justinharlow',
        socialIcon: '<i class="fab fa-instagram"></i>'
    },
    {
        id: 1,
        photo: './images/flowers.jpg',
        altText: 'wild flowers',
        tags: ['flowers', 'nature', 'wildflowers'],
        social: '@wildpictures',
        socialIcon: '<i class="fab fa-instagram"></i>'
    },
    {
        id: 2,
        photo: './images/trees.jpg',
        altText: 'forest clearing with lake',
        tags: ['forest', 'trees', 'nature'],
        social: '@naturehikes',
        socialIcon: '<i class="fab fa-instagram"></i>'
    },
    {
        id: 3,
        photo: './images/water.jpg',
        altText: 'water surface',
        tags: ['water', 'pool'],
        social: '@brainphotos',
        socialIcon: '<i class="fab fa-instagram"></i>'
    },
    {
        id: 4,
        photo: './images/clouds.jpg',
        altText: 'blue sky, white clouds',
        tags: ['sky', 'clouds'],
        social: '@daydreams',
        socialIcon: '<i class="fab fa-instagram"></i>'
    },
    {
        id: 5,
        photo: './images/mountains.jpg',
        altText: 'mountains with dusting of snow',
        tags: ['mountains', 'snow', 'nature'],
        social: '@mountainclimb',
        socialIcon: '<i class="fab fa-instagram"></i>'
    },
];

//--------------------------------------------------------------------
// Object array - end
//--------------------------------------------------------------------



//--------------------------------------------------------------------
// Filtering the content - start
//--------------------------------------------------------------------

// calls all cards on landing page
function allBannerCardsLoop(){
    for(let i = 0; i < bannerObjectArray.length; i++){
        generateBannerCard(i);
    }
}
allBannerCardsLoop();

// filters banner cards from radio button input
function filterBannerCards(){
    $('#bannerContainer').empty();

    let selectedBannerFilter = document.querySelector('input[name="bannerFilter"]:checked').value;

    console.log(selectedBannerFilter);

    for(let i = 0; i < bannerObjectArray.length; i++){
        for(let j = 0; j < bannerObjectArray[i].tags.length; j++){
            if(selectedBannerFilter === bannerObjectArray[i].tags[j]){
                generateBannerCard(i);
            }
        }
    }
}

// search filter
function searchBannerCards(){
    $('#bannerContainer').empty();

    const searchedWord = document.getElementById('searchInput').value.toLowerCase();
    console.log(searchedWord);

    for(let i = 0; i < bannerObjectArray.length; i++){
        for(let j = 0; j < bannerObjectArray[i].tags.length; j++){
            if(searchedWord === bannerObjectArray[i].tags[j]){
                generateBannerCard(i);
            }
        }
    }
}

//resets selection, displays all cards
function resetBannerCards(){
    $('#bannerContainer').empty();
    $("input[type=radio][name=bannerFilter]").prop('checked', false);

    for(let i = 0; i < bannerObjectArray.length; i++){
        generateBannerCard(i);
    }
}

//--------------------------------------------------------------------
// Filtering the content - end
//--------------------------------------------------------------------



//--------------------------------------------------------------------
// Generates content - start
//--------------------------------------------------------------------

// generates banner cards on landing page
function generateBannerCard(i){
    $('#bannerContainer').append(
        `
            <div class="banner-card">
                <img class="banner-card__img" src="${bannerObjectArray[i].photo}" alt="${bannerObjectArray[i].altText}">
            </div>
        `
    );
}

//--------------------------------------------------------------------
// Generates content - end
//--------------------------------------------------------------------

searchInput.addEventListener('keyup', function(runSearch){
    if(runSearch.keyCode === 13){
        runSearch.preventDefault();
        searchBannerCards();
    }
});

document.getElementsByName
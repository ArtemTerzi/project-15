
// =======================  FOR TEST ==============================
const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=MCCbLUuNkLgrOf1uBr1c9zmSoKm3Mp9g`;
const btnFetch = document.querySelector('.test-fetch');

btnFetch.addEventListener('click', onOpenNews);

async function onFetch() {
try {
    const response = await fetch(URL);
    const newsAll = await response.json();
    return newsAll;

    } catch(err) {

    console.log(err);
    };
};

async function onOpenNews() {
    try {
        
    const newsAll = await onFetch();
    makeNews(newsAll.response.docs);

    } catch(error) {
        console.log(error);
    };
};

function makeNews(arrNews) {
    const markapNews = arrNews.map(({ abstract, web_url, pub_date, snippet }) => 
        `<li class="li-news">
        <h2 class="title-news">${abstract}</h2>
        <p class="text">${snippet}</p>
        <p class="data">${pub_date}</p>
        <a href="${web_url}" class="link-news">
            Read more...
        </a>
    </li>`).join('');
    listNews.insertAdjacentHTML('beforeend',markapNews);

};

// =======================  FOR TEST ==============================

const KEY_LOCAL_STORAGE = 'read-news-storage';
const listNews = document.querySelector('.list-news');
listNews.addEventListener('click', onBtnReadMore);

function createNewData() {
    return new Date(Date.now()).toLocaleString().split(',')[0];
};



function onBtnReadMore(e) {
    // =======================  FOR TEST ==============================
    e.preventDefault();
    // =======================  FOR TEST ==============================

    if(e.target.nodeName !== 'A') {
        return;
    };

    const dateReadNews = createNewData();
    const stringMarkupNews = (e.target.parentNode.innerHTML.trim());
    
    try {
        const getObjLocalStorage = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE));

        if(getObjLocalStorage !== null) {
            if(Object.keys(getObjLocalStorage).includes(dateReadNews)) {

                if(getObjLocalStorage[dateReadNews].includes(stringMarkupNews)) {
                    return;
                };

                getObjLocalStorage[dateReadNews].push(stringMarkupNews);
                localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(getObjLocalStorage));

            } else {
                getObjLocalStorage[dateReadNews] = [stringMarkupNews];
                localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(getObjLocalStorage));

            };

        }  else {

            const obgDataPlusMarkup = {};
            obgDataPlusMarkup[dateReadNews] = [stringMarkupNews];
            console.log(obgDataPlusMarkup);

            localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(obgDataPlusMarkup));
        };

    } catch(err) {
        console.log('err parse');
    }
};


const btnReadPage = document.querySelector('.read-page');

btnReadPage.addEventListener('click', makeMarkapPageRead);

const listReadNews = document.querySelector('.list-read-news');


function makeMarkapPageRead() {
    try {
        const resultLocalStorage = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE));
        // console.log(resultLocalStorage);
        // let arrAllNewsReadForPage = Object.kays(resultLocalStorage);

        // const markapPageRead = arrAllNewsReadForPage.map(date => {
        //     console.log(date);
            
        //     // return arrDate.map(elementsOneNewsRead => `<li>${elementsOneNewsRead}</li>`).join();
        // });
        for (key in resultLocalStorage) {
            const dataTitle = `<li class="list-date">${key}<ul class="list-date-read visually-hidden"></ul></li>`;
            listReadNews.insertAdjacentHTML('beforeend', dataTitle);
            const itemDateRead = document.querySelector('.list-date');
            const listDateRead = document.querySelector('.list-date-read');
            // console.log(listDateRead);
            // const arrForMarkupReadPage = resultLocalStorage[key].map(newsRead => `<li>${newsRead}</li>`).join();
            
            for (let i = 0; i < resultLocalStorage[key].length; i += 1) {
                const element = resultLocalStorage[key][i];
                console.log(element);

                const arrForMarkupReadPage = `<li class="li-news">${element}</li>`;
                listDateRead.insertAdjacentHTML('beforeend', arrForMarkupReadPage);
            }

            // listDateRead.insertAdjacentHTML('beforeend', arrForMarkupReadPage);

            // itemDateRead.addEventListener('click', openListsReadNews);
        
            function openListsReadNews(e) {
                e.target.firstElementChild.classList.toggle('visually-hidden');
            }
        };

        // console.log(markapPageRead);
        // listReadNews.insertAdjacentHTML('beforeend', markapPageRead);
    } catch(err) {
        console.log(err);
    }
};



listReadNews.addEventListener('click', openListsReadNews);
        
function openListsReadNews(e) {

    if(e.target.nodeName !== 'LI') {
        return;
    };

    const listDateRead = e.target.children;

for (const element of listDateRead) {
    element.classList.toggle("visually-hidden");
}
};
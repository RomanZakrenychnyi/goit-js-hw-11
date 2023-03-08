import fetchImages from './fetch-images';
import { Markup } from './markup';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const formSearchEl = document.querySelector('.search-form');
const galleryCard = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const endColectionText = document.querySelector('.end-collection-text');
const markup = new Markup();

let page = 1;
let imagesSearchName = '';
let currentHits = 0;

let lightbox = new SimpleLightbox('.photo-card a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});


const handleImagesSearch = async (event) => {
  event.preventDefault();
  imagesSearchName = event.target.elements.searchQuery.value;
  page = 1;
  
  if (imagesSearchName === '') {
    return;
  };
  
  const response = await fetchImages(imagesSearchName, page);
  console.log(response)
  currentHits = response.hits.length;

  galleryCard.innerHTML = markup.handleCreatMarkup(response.hits);


  if (response.totalHits > 0) {
    loadMoreBtn.classList.remove('is-hidden');
  } else {
    loadMoreBtn.classList.add('is-hidden');
  }

  lightbox.refresh();

};

const handleLoadMoreBtnClick = async () => {
  page += 1;

  const response = await fetchImages(imagesSearchName, page);
  galleryCard.innerHTML += markup.handleCreatMarkup(response.hits);

  lightbox.refresh();
  currentHits += response.hits.length;
}


formSearchEl.addEventListener('submit', handleImagesSearch);
loadMoreBtn.addEventListener('click', handleLoadMoreBtnClick);
export class Markup {

  handleCreatMarkup(dates) {
    const galleryCardMarkup = dates.map(({ largeImageURL, previewURL, tags }) => {
        return `<div class='photo-cards'>
                    <a href='${largeImageURL}'>
                        <img src='${previewURL}' alt='${tags}' width=150px height=100px loading='lazy'/>
                    </a>
                </div>`;
      })
      .join('');
    return galleryCardMarkup;
  }
}

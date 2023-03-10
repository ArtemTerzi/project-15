import { refs } from './refs';

function isFavoriteForStyle(url) {
  let styleStateIsFavorite = 'add-button remove-button';

  try {
    const arrlocalStorage = JSON.parse(
      localStorage.getItem(refs.KEY_LOCAL_STORAGE)
    );

    if (arrlocalStorage === null) {
      return styleStateIsFavorite;
    }

    for (const news of arrlocalStorage) {
      if (news.link === url) {
        if (news.isFavorite) {
          styleStateIsFavorite = 'add-button is-liked';
          return styleStateIsFavorite;
        }
      }
    }
    return styleStateIsFavorite;
  } catch (error) {
    console.log('Error parse date local storage');
  }
}

function isReadForStyle(url) {
  let styleStateIsRead = '';

  try {
    const arrlocalStorage = JSON.parse(
      localStorage.getItem(refs.KEY_LOCAL_STORAGE)
    );

    if (arrlocalStorage === null) {
      return styleStateIsRead;
    }

    for (const news of arrlocalStorage) {
      if (news.link === url) {
        if (news.isRead) {
          styleStateIsRead = 'isRead';
          return styleStateIsRead;
        }
      }
    }
    return styleStateIsRead;
  } catch (error) {
    console.log('Error parse date local storage');
  }
}

function isFavoriteForText(url) {
  let textStateIsFavorite = 'Add to favorite';

  try {
    const arrlocalStorage = JSON.parse(
      localStorage.getItem(refs.KEY_LOCAL_STORAGE)
    );

    if (arrlocalStorage === null) {
      return textStateIsFavorite;
    }

    for (const news of arrlocalStorage) {
      if (news.link === url) {
        if (news.isFavorite) {
          textStateIsFavorite = 'Remove from favorite';
          return textStateIsFavorite;
        }
      }
    }
    return textStateIsFavorite;
  } catch (error) {
    console.log('Error parse date local storage');
  }
}

export { isFavoriteForStyle, isReadForStyle, isFavoriteForText };

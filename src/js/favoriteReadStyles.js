import { refs } from './refs';

function isFavoriteForStyle(url) {

    let styleStateIsFavorite = "";

    try {
        const arrlocalStorage = JSON.parse(localStorage.getItem(refs.KEY_LOCAL_STORAGE));

        if(arrlocalStorage === null) {
            return styleStateIsFavorite;
        };
        
        for (const news of arrlocalStorage) {
                
            if(news.link === url) {

                if (news.isFavorite) {
                    styleStateIsFavorite = "isFavorite";
                    return styleStateIsFavorite;
                };
            }
        };
        return styleStateIsFavorite;

    } catch(error) {

        console.log('Error parse date local storage');
    }
};


function isReadForStyle(url) {

    let styleStateIsRead = "";

    try {
        const arrlocalStorage = JSON.parse(localStorage.getItem(refs.KEY_LOCAL_STORAGE));

        if(arrlocalStorage === null) {
            return styleStateIsRead;
        };
        
        for (const news of arrlocalStorage) {
                
            if(news.link === url) {

                if (news.isRead) {
                    styleStateIsRead = "isRead";
                    console.log(styleStateIsRead);
                    return styleStateIsRead;
                };
            }
        };
        console.log(styleStateIsRead);
        return styleStateIsRead;

    } catch(error) {

        console.log('Error parse date local storage');
    }
};


export { isFavoriteForStyle, isReadForStyle };
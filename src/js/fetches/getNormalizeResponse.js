export function getNormalizeResponse(arr, url) {
  const defaultImg = `https://cdn.create.vista.com/api/media/small/251043028/stock-photo-selective-focus-black-news-lettering`;
  const attachURL = "https://www.nytimes.com/";

  if (url.includes("mostpopular")) {
    return arr.map(news => {
        if (news.media.length === 0) {
          return {
              img: `${defaultImg}`,
              title: `${news.title}`,
              section: `${news.section}`,
              text: `${createThreePoints(news.abstract)}`,
              date: `${convertoNormalDate(news.published_date)}`,
              link: `${news.url}`,
            }
        } else if (news.media.length > 0) {
          return {
            img: `${news.media[0]['media-metadata'][2].url}`,
            title: `${news.title}`,
            section: `${news.section}`,
            text: `${createThreePoints(news.abstract)}`,
            date: `${convertoNormalDate(news.published_date)}`,
            link: `${news.url}`,
          };
        }
      });
  } else if (url.includes("articlesearch")) {
      return arr.map(news => {
      if (!news.multimedia) {
        return {
            img: `${defaultImg}`,
            title: `${news.headline.main}`,
            section: `${news["type_of_material"]}`,
            text: `${createThreePoints(news.snippet)}`,
            date: `${convertoNormalDate(news.pub_date)}`,
            link: `${news.web_url}`,
          };
       }
       return {
            img: `${attachURL}${news.multimedia[0].url}`,
            title: `${news.headline.main}`,
            section: `${news["type_of_material"]}`,
            text: `${createThreePoints(news.snippet)}`,
            date: `${convertoNormalDate(news.pub_date)}`,
            link: `${news.web_url}`,
          };
      });
  }

  return createObj;
}

function convertoNormalDate(element) {
  const date = new Date(element);
  return date.toLocaleDateString('en-GB');
}

function createThreePoints(str) {
  if (str.length > 110) {
    return str.slice(0, 110) + '...';
  }
  return str;
}
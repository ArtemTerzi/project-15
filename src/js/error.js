import errorScreenMin from "../images-error/error_screen_min.png";
import errorScreen from "../images-error/error_screen_x2.png";
import errorMobileMin from "../images-error/error_mobile_min.png";
import errorMobile from "../images-error/error_mobile_x2.png";
import errorTabletMin from "../images-error/error_tablet_min.png";
import errorTablet from "../images-error/error_tablet_x2.png";

export function getMarkupError() {
  return `<section class="error">
  <h2 class="error-text">We haven’t found news from this category</h2>
  <picture class="error-image">
    <source
      srcset="
        ${errorScreenMin} 1x,
        ${errorScreen} 2x
      "
      media="(min-width: 1200px)"
    />
    <source
      srcset="
        ${errorTabletMin} 1x,
        ${errorTablet} 2x
      "
      media="(min-width: 768px)"
    />
    <source
      srcset="
        ${errorMobileMin} 1x,
        ${errorMobile} 2x
      "
      media="(max-width: 767px)"
    />
    <img
      src=${errorScreenMin}
      alt="Error page"
      width="601"
    />
  </picture>
</section>`;
}

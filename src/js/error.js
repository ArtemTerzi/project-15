export function getMarkupError() {
  return `<div class="error">
  <h2 class="error-text">We haven’t found news from this category</h2>
  <picture class="error-image">
    <source
      srcset="
        ./images-error/error_screen_min.png 1x,
        ./images-error/error_screen_x2.png  2x
      "
      media="(min-width: 1200px)"
    />
    <source
      srcset="
        ./images-error/error_tablet_min.png 1x,
        ./images-error/error_tablet_x2.png  2x
      "
      media="(min-width: 768px)"
    />
    <source
      srcset="
        ./images-error/error_mobile_min.png 1x,
        ./images-error/error_mobile_x2.png  2x
      "
      media="(max-width: 767px)"
    />
    <img
      src="./images-error/error_screen_min.png"
      alt="Error page"
      width="601"
    />
  </picture>
</div>`;
}

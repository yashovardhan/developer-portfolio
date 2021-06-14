# Developer Portfolio ![GitHub](https://img.shields.io/github/license/yashovardhan/developer-portfolio?color=blue) ![GitHub stars](https://img.shields.io/github/stars/yashovardhan/developer-portfolio)

## An interactive, innovative portfolio template for software developers!


<p align="center">
  <kbd>
<img src="./yashovardhan.dev.gif" width="720"></img>
  </kbd>
</p>

## [Live Demo](https://yashovardhan.dev)

This repository contain a simple one page HTML. CSS & JS based website template that you can utilise to host your own developer portfolio that too using [GitHub Pages](https://pages.github.com/)! 


## Getting Started

This is a github template repository so you can simply generate a new repository with the same structure by following the instructions [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template).

## Tech Stack
- HTML
- CSS
- JavaScript
- Libraries Used
    - [Bootstrap](https://getbootstrap.com/)
    - [Sketch.js](https://soulwire.github.io/sketch.js/)
    - [Popper](https://popper.js.org/)
    - [jQuery](https://jquery.com/)
        - [Magnific Popup](https://dimsemenov.com/plugins/magnific-popup/)
        - [jQuery Vaildate](https://jqueryvalidation.org/)


## How To Use 

- Fork this repository and clone into your local system
- Start a http server in your local repository.
    - If you're new to this, just install a simple static server like [`http-server`](https://www.npmjs.com/package/http-server)
    - You'll be able to view the website on your desired port, working as expected.
- Change the different variables in the template to customise it according to your needs!

## Repository structure

- `index.html`: Contains all the HTML code meant for the website to function
- `assets`:  Contains all the JS, CSS & Image files
    - `css/style.css`: Main stylesheet file for the website
    - `js/script.js`: Main JS file for the website: Contains menu event listeners and sketch.js implementation
    - `js/sketch.min.js`: Minified file for the sketch.js library
    - `img/logo~`: These are the logo files (dark/ light and a big file) meant for showcasing on the front. Recommended to have a transparent background for these png files.
    - `img/company.jpg`: This is for the *About* section of the website. You can add your company logo, personal photo etc. here for building out the page.
    - `img/project~`: These are background images for the cards inside the projects section. Please note that these are imported as background within the `style.css` rather than showing as images within the HTML.
- `favicon.png`: Logo image for the browser favicon
- `apple-touch-icon-144-precomposed`: Touch icon
- `.gitignore`: Specifies intentionally untracked files to ignore. Learn more about it [here](https://git-scm.com/docs/gitignore)

## License

This project is licensed under the terms of the [MIT license](https://opensource.org/licenses/MIT).

## Contribute!

Have an idea/ suggestion/ change to be made for this project? Make sure to raise an issue, start a pull request and notify `@yashovardhan`

For any questions, feel free to reach out to [*@yashovardhan* on twitter](twitter.com/yashovardhan) anytime!
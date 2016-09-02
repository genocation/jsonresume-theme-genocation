# Genocation theme 

A responsive theme for [JSON Resume](http://jsonresume.org/) with Bootstrap, custom thumbnailsi for each section, animated level charts and floating navigation menu.

## Preview

To see a working demo, check out my resume at [www.genocation.xyz](http://www.genocation.com).

## Usage

To use this theme, you must first install [JSON Resume CLI](https://www.npmjs.com/package/resume-cli) using npm.
```
sudo npm install -g resume-cli
```
Once the client is installed, you can start creating your resume.json by typing `resume init`. You can also create your resume.json file using the guide provided in the [JSON Resume Schema site](https://jsonresume.org/schema/). You can also check out the [JSON Resume Schema repository](https://github.com/jsonresume/resume-schema) for more details and updates.

You can use your own resume.json or try this theme with the placeholder resume.json available in the root folder.

### Download this theme

Download a copy of this repository

```
git clone https://github.com/genocation/jsonresume-theme-genocation
```

### Install npm packages

After navigating into the theme folder, install the npm dependencies by running:

```
npm install
```

This will read the local `package.json` and install the packages listed under `dependencies`.

### Serve theme

Finally, still inside the theme folder, use the JSON Resume client already installed to serve your theme:

```
resume serve --theme .
```

If everything went fine, you will see this message:

```
Preview: http://localhost:4000
Press ctrl-c to stop
```

You can now navigate into that URL and see your awesome JSON Resume!


## Thumbnails

This theme implements circular thumbnails (200x200px) displayed next to the resume sections. To configure your thumbnails, simply place the collection of images in the folder jsonresume-theme-genocation/public/img. The images should be:

1. PNG
2. Square (same width and height)
3. Preferably they will be sized 200x200px
4. Each image must be renamed with the title of the section it illustrates and in lowercase.

If images for each section aren't found on the public img folder, a placeholder thumbnail will be placed instead.

If a profile picture URL is given in the JSON Resume file (basics section), this will be placed on the basics thumbnail instead.

As an example, an image that is intended to serve as a thumbnail for the "Awards" section shall be placed as:
```
./jsonresume-theme-genocation/public/img/awards.png
```

## Supported Social Profiles

All the following social networks are supported by this theme - including their styling, icon and brand color:

* Social Networks
   * Facebook
   * Twitter
   * Google+
* Blogs
   * Blog (also RSS)
   * Tumblr
   * WordPress
* Profesional Networks
   * Linkedin
   * AngelList
* Code and Repositories
   * GitHub
   * Bitbucket
   * Stackoverflow
   * Codepen
   * JSFiddle
* Photography and Design
   * Flickr
   * Instagram
   * 500px
   * Deviantart
   * Dribble
* Video
   * YouTube
   * Vimeo
* Music
   * Soundcloud
   * Spotify
   * LastFM
* Other stuff
   * Pinterest
   * Steam
   * Reddit


## Skills and Language Charts

The sections Skills and Languages can be shown as a colorful and animated bar chart that reflect the level of the skill with their width and color.

To implement this view, set the `level` parameter of each skill, and the `fluency` parameter of each language as per the following presets.

Each level preset is mapped to a numerical value that can be modified in the file `config.js`.

You can also edit the bar colors by modifying the background of the styles under the select `.progress-bar` in the `styles.css` file. At the bottom you can find a link to online tools that will help you generate cool CSS gradients.

### Skill Levels

You can set the parameter `level` in each skill object with one of these keywords:

1. Master (set to 99%)
2. Advanced (set to 75%)
3. Intermediate (set to 60%)
4. Beginner (set to 50%)

### Language 

You can configure the parameter `fluency` in each language object with one of the following keywords:

1. Native (set to 100%)
2. Master (set to 80%)
3. Advanced (set to 60%)
4. Intermediate (set to 40%)
5. Beginner (set to 20%)


## License

Available under [the MIT license](http://mths.be/mit).


## Attributions

Using [onScreen()](https://silvestreh.github.io/onScreen/) by Silvestre Herrera
Icons from [FontAwesome](http://fontawesome.io/)
Placeholder Thumbnails from [Unsplash.it](http://unsplash.it/)
Floating Menu on small devices inspired by [jsonresume-theme-elegant](https://github.com/mudassir0909/jsonresume-theme-elegant) by Mudassir Ali.
CSS gradients generated on [CSSMatic](http://www.cssmatic.com/gradient-generator)





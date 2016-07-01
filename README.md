# GCT
GCT in an acronym (yay, acronyms!) for Ghost Custom Theme, as that best describes what this is. It's a custom theme I created for my personal blog, and it is designed to be used with the [Ghost](https://ghost.org/) CMS.

## How to use?
There are a couple of things you'll have to do to get this theme up and running:

1. Add a `partials/comments.hbs` file or comment out the references to it in the templates.

    The comments.hbs file will probably contain some keys to connect with your comments provider, that shouldn't be checked into source control, so it's excluded by default. It should be fairly easy to add this code, as it's mostly boilerplate code provided by your comments provider. If you don't know how to get started, take a look at [Disqus](https://disqus.com/).

2. Resolve the [npm](https://docs.npmjs.com/getting-started/installing-node) packages: `npm install`

3. Install the [Gulp](http://gulpjs.com) cli with npm, if you don't have it yet: `npm install -g gulp`

     Gulp is used to compile the [Stylus](http://stylus-lang.com/) styling code into CSS and minify it.

4. Run the Gulp command: `gulp`

For more information on how to use the theme on your Ghost blog, take a look [here](http://support.ghost.org/switch-themes/).

## License
This project is licensed under the MIT license, see the LICENSE file.
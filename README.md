# 5 page landing page

**Bootstrap 4, SCSS, GULP, PUG**

## DEV Work-flow Explained 

### Assets from Photoshop
use Photoshop "GENERATOR" function to directly create assets from the UI-kit. Assets are named, optimized and directly placed in Dev > images > assets folder, where task watch is running (I find this method faster than image slicing.) 

### SCSS and Bootstrap
I combined theme specific SCSS files with "Bootstrap 4". (Even though this project is not complex enough for such architecture, I find it's faster and easier to customize Bootstrap.)

* Used structures of atomic design where possible.
* Made CSS and Bootstrap as the primary solution to as many possible scenarios.
* Used BEM naming convention for css classnames (blockName__elementName--modifierName)

NOTE: 
* UI kit does NOT include breakpoint views. Mobile views are improvised. 

### Moulder HTML with PUG
Use PUG to modularize HTML components and still uses pure HTML (instead pug shorthand writing.)  

### Gulp Tasks
* CSS/JS tasks : watch, concatenate, compile, prefix, minify, generate source-map    
* Images : watch, compress
* HTML : watch, compile pug, BrowserSync


```sh
$ git clone https://github.com/CreativeCreate/5-section-landingpage.git
```

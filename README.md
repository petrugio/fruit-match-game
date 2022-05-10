<h1 align="center">Fruit Match Game</h1>

<a href="https://petrugio.github.io/fruit-match-game/" target="_blank" rel="noopener" alt="Fruit Match Game, click here to open the website"><img src="documentation/features/responsive/responsive.jpg" alt="Fruit match memory game" max-height="650px" max-width="1300px"></a>
<hr>
View the repository in GitHub
<a href="https://github.com/petrugio/fruit-match-game" target="_blank" rel="noopener">here</a>

View the live project
<a href="https://petrugio.github.io/fruit-match-game/" target="_blank" rel="noopener">here</a>



# Table of Contents

* [Features and Wireframes](#features-and-wireframes)
    * [Existing Features](#existing-features)
    * [Wireframes](#wireframes) 
* [Testing](#testing)
    * [Buttons and Cards](#buttons-and-cards)
    * [Responsive Design](#responsive-design)
    * [Validator Testing](#validator-testing)
        * [HTML5](#html5)
        * [CSS3](#css3)
        * [Lighthouse](#lighthouse)
        * [WebAIM](#webaim)
    * [Browser Testing](#browser-testing)
* [Bugs](#bugs)
    * [Fixed Bugs](#fixed-bugs)
    * [Unfixed Bugs](#unfixed-bugs)
* [Deployment](#deployment)
    * [Version Control](#version-control)
    * [GitHub Pages](#github-pages)
    * [How to Clone this repository](#how-to-clone-this-repository)
* [Technologies used](#technologies-used)
* [Credits](#credits)
* [Contact](#contact)
* [Acknowledgments](#acknowledgments)

<hr>

# Fruit Match Game

Fruit Match Game is an implementation of popular game Concentration, also known as Memory, Shinkei-suijaku (Japanese meaning "nervous breakdown") is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards.
                
<hr>

# Features and Wireframes

## Existing Features
<details>
<summary>Landing page</summary>
<br>
This page welcomes any potential player.
Upon opening the page the user is presented with a modal(overlay) with instructions on how to play the game. Once the user has read the instructions, he/she can press the start game button in order to start the game. The start game button has an animation of expanding circle around it which intuitively lets the user know where to press next.

* Desktop

![Landing page](documentation/features/start.jpg)
 
* Tablet

![Landing page](documentation/features/start_tab.jpg)

* Mobile

![Landing page](documentation/features/start_mob.jpg)
<br>
</details>

<details>
<summary>Game page</summary>
<br>
Game page is very intuitive to the user.
The top section of the page contains countdown timer, flips counter and music toggle button.
Main content on the page is occupied by the cards.
In the bottom part of the page the user can see game stats and link to the game music author.


* Desktop

![Game page](documentation/features/play.jpg)

* Tablet

![Game page](documentation/features/play_tab.jpg)

* Mobile

![Game page](documentation/features/play_mob.jpg)

<br>
</details>

<details>
<summary>Game info</summary>
<br>

At the top of the page the user is presented with:
  - Countdown timer: user is given 360sec (6min) to match all the cards. 
  - Flips counter: each time a card is clicked it counts number of flips witch is used to calculate the game score. 
  - Music toggle button: by default music is off, but the user can choose to turn it on to make the game-play more enjoyable.


![Game info](documentation/features/timer.jpg)

<br>
</details>

<details>
<summary>Card game</summary>
<br>

The user is presented with 36 cards which need to be matched in pairs of 2 in order to finish the game.
All back faces of images are similar so the user does not know where the matching pair is.
When the user clicks the second card and there is no match, then the cards are flipped back automatically. 

![Card game](documentation/features/cards.jpg)

<br>
</details>

<details>
<summary>Game stats</summary>
<br>

The user is presented with the current score and best score.
The current score is calculated the flowing way:
  - For each card solved user gets 2 points
  - If all the cards are solved the user gets a bonus of 50 points
  - If all the cards are solved the user the user gets 5 points for every second of time left
The best score is calculated by comparing previous scores and selecting the highest one 

![Game stats](documentation/features/footer.jpg)

<br>
</details>

<details>
<summary>End game</summary>
<br>

At the end of the game the user is presented with the current score, best score and with ability to play the game again.

* Desktop

![Game page](documentation/features/end.jpg)

* Tablet

![Game page](documentation/features/end_tab.jpg)

* Mobile

![Game page](documentation/features/end_mob.jpg)
![Game page](documentation/features/end2_mob.jpg)


<br>
</details>

<details>
<summary>Favicon</summary>

A Favicon was added to the website. It is the same image as the back of the cards. It provides the user information about open tab; if user has multiple tabs opened then the user can easily find his/her way back.
<br>

![Favicon](documentation/features/favicon.jpg)

</details>



<details>
<summary>404 error page</summary>
<br>
A 404 page was added to allow the user to find his/her way back to the Homepage in case that the address is typed incorrectly.
It also provides the user with a way back to the Homepage if an error occurs.
It helps the user know this is a legitimate website by having its own 404 error page.

![404 error page](documentation/features/404.jpg)

<br>
</details>
<br>

## Wireframes
Wireframes were made using [Balsamiq](https://balsamiq.com/).

<details>
<summary>Screenshots</summary>
<br>

* Game start

![Landing page](documentation/wireframes/start.jpg)
 
* Game play

![Landing page](documentation/wireframes/play.jpg)

* Game end

![Landing page](documentation/wireframes/end.jpg)
<br>
</details>

[Back to top](#table-of-contents)

# Testing

<hr>


## Buttons and cards

Testing was performed to ensure all buttons and cards perform as intended. This was done by clicking on the buttons and cards and completing the game.

## Responsive Design

I was able to make the website responsive by using a combination of CSS display:
  - Grid
  - Flexbox

 The screen sizes, which I implemented, allow the site to adapt to various user screens, starting from screen width of 320px and up to 4k (3540x2160px). 

[Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) was the tool I used to make the site responsive.

<details>
<summary>Screenshots</summary>
<br>

![responsive](documentation/features/responsive/responsive.gif)
![1080p](documentation/features/responsive/1080.jpg)
![1080p](documentation/features/responsive/laptop.jpg)
![1080p](documentation/features/responsive/tablet.jpg)
![1080p](documentation/features/responsive/tablet1.jpg)

![1080p](documentation/features/responsive/mobile.jpg)

<br>
</details>

<hr>

## Validator Testing
### HTML5

All pages passed official [W3C Validator testing](https://validator.w3.org/#validate_by_uri).

<details>
<summary>Screenshots</summary>
<br>

![homepage](documentation/testing/w3c/html.jpg)
![404](documentation/testing/w3c/404.jpg)

<br>
</details>



### CSS3

Css passed official [W3C Validator testing](https://jigsaw.w3.org/css-validator/). There were no warnings or mistakes in my CSS.

<details>
<summary>Screenshots</summary>
<br>

![css](documentation/testing/w3c/css.jpg)

<br>
</details>

### JSHint JavaScript Validator

Code passed official [JSHint JavaScript Validator](https://jshint.com/).

<details>
<summary>Screenshots</summary>
<br>

![js](documentation/testing/w3c/js.jpg)

<br>
</details>


### Lighthouse

All the pages were tested with [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) using the [Lighthouse](https://developers.google.com/web/tools/lighthouse) resource.

- Performance:

    - Images format svg was chosen to reduce data consumption and maintain good aspect ratio.

    - Due to time constrains in submitting the project i could only get the performance score up to 85

- Best Practices:

    - HTML doc type included in the html for all pages.

- Search Engine Optimization:

    - Semantic HTML included in all internal pages created.

    - All links have descriptive text added.

    - Alt attributes added to all images.

    - Meta-data descriptions added to each internal page created.
    
<details>
<summary>Screenshots</summary>
<br>

![homepage](documentation/testing/lighthouse/homepage.jpg)
![404](documentation/testing/lighthouse/404.jpg)

</details>
    

### WebAIM 
  
   - All pages were tested with Wave Chrome extension to check web accessibility.   
   Wave does not show any error. It shows only 1 advisory warning relating to music.
  
<details>
<summary>Screenshots</summary>
<br>

![homepage](documentation/testing/wave/wave.jpg)
![404](documentation/testing/wave/404.jpg)


</details>


## Browser Testing 
- Page behaves as expected in all browsers tested. The website was tested in [Chrome](https://www.google.com/intl/en_ie/chrome/), [Firefox](https://www.mozilla.org/en-US/firefox/new/),
[Brave Browser](https://brave.com/),
[Edge](https://www.microsoft.com/en-us/edge) and [Opera](https://www.opera.com).


- On the mobile and tablet website was tested in
[Chrome](https://play.google.com/store/apps/details?id=com.android.chrome), [Firefox](https://play.google.com/store/apps/details?id=org.mozilla.firefox).



<hr>

# Bugs

## Fixed Bugs

A number of errors were found and fixed during testing:

1. W3C bug: fixed by adding # to form action and replacing "section" with "div"

<details>
<summary>Screenshots</summary>
<br>

![Bug](documentation/testing/bugs/html.jpg)

</details>

2. Wave bug: fixed by changing the button text color

<details>
<summary>Screenshots</summary>
<br>

![Bug](documentation/testing/bugs/contrast.jpg)

</details>

3. Second payed game bug: fixed by calling "solvedCardCount" function inside "finishGame" function

<details>
<summary>Screenshots</summary>
<br>

![Bug](documentation/testing/bugs/second_game_bug.gif)
![Bug](documentation/testing/bugs/second_game_bug.jpg)
![Bug](documentation/testing/bugs/second_game_bug_fix.jpg)

</details>

3. Best score bug: fixed by modifying the sorting of "calculateBestScore" function as shown <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" target="_blank" rel="noopener">here</a>

<details>
<summary>Screenshots</summary>
<br>

![Bug](documentation/testing/bugs/best_score.jpg)
![Bug](documentation/testing/bugs/best_score_fix.jpg)


</details>


## Unfixed bugs
When making the page smaller using [Chrome](https://www.google.com/intl/en_ie/chrome/) and having [Pesticide Chrome extension](https://chrome.google.com/webstore/detail/pesticide-for-chrome-with/neonnmencpneifkhlmhmfhfiklgjmloi) turned on i noticed that at around 350px and lower the body container shrinks faster than the content. This does not affect the game at 320px - functionality and gameplay does not suffer. I presume is related to css grid. Due to to time constrains it was not solved.

<details>
<summary>Screenshots</summary>
<br>

![Bug](documentation/testing/bugs/unsolved.jpg)


</details>
 


[Back to top](#table-of-contents)

<hr>

# Deployment

## Version Control

I used:
  - [Visual Studio Code](https://code.visualstudio.com/) as a local repository and IDE
  - [GitHub](https://github.com) as a remote repository
  - [GitKraken](https://www.gitkraken.com/) was used for git version control

1. To begin with I used Code Institute [template on GitHub](https://github.com/Code-Institute-Org/gitpod-full-template)
  
2. Then I used that template to create  [fruit-match-game](https://github.com/petrugio/fruit-match-game) repository.
3. Once repository was created I went to GitKraken on my PC, logged in with GitHub and selected the newly created repository
4. Selected a folder on my local PC where the code to be saved
5. Press Pull - this synced the repository to my local PC
6. Opened the folder in Visual Studio Code and started adding code
7. When finished - I saved the file on VS Code and used GitKraken to commit and push the code to GitHub


## GitHub Pages

[GitHub pages](https://pages.github.com/) was used to deploy the site, this allowed me to visually and functionally inspect how the website would look and perform on a cloud platform.

1. To begin, I went to the repository and selected 'settings.'
2. I went to the 'pages' section.
3. I chose the master branch as the 'main' branch under 'source.'
4. I ensured that it was deployed from the 'root' directory.
5. Once completed, I got the website's URL.

## How to clone this Repository

Here's few steps how to clone the repository: 

  - Navigate to GitHub repository
  - In the GitHub repository, press the "Code" drop-down button located in the top right
  - From the drop-down menu choose one of the options: HTTPS, SSH, GitHub CLI
  - Use this link to clone repository in your environment
  - Another option is to press "Download ZIP" to download repository to your PC

[Back to top](#table-of-contents)
<hr>

# Technologies used

- [HTML5](https://en.wikipedia.org/wiki/HTML5) for the contents and structure of the website.
- [CSS3](https://en.wikipedia.org/wiki/CSS) for the styling and animations.
- [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript) functions and examples.
- [Balsamiq](https://balsamiq.com/) for wireframing.
- [Visual Studio Code](https://code.visualstudio.com/) as a local IDE & repository.
- [GitHub](https://github.com/) as a remote repository.
- [GitKraken](https://www.gitkraken.com/) was used for git version control.
- [GitHub Pages](https://pages.github.com/) to deploy the website.
- [Chrome](https://www.google.com/intl/en_ie/chrome/),  [Firefox](https://www.mozilla.org/en-US/firefox/new/),
[Brave Browser](https://brave.com/),
[Edge](https://www.microsoft.com/en-us/edge) and [Opera](https://www.opera.com/) for browser testing the responsiveness.
- [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) for testing screen sizes and using [Lighthouse](https://developers.google.com/web/tools/lighthouse).
- [Favicon.io](https://favicon.io/favicon-generator/) to create a favicon.
- [Markdown Monster](https://markdownmonster.west-wind.com/) for writing my readme.
- [Grepper Chrome extension](https://www.codegrepper.com/) for finding code.
- [Wave Chrome extension](https://wave.webaim.org/) to check web accessibility.
- [Pesticide Chrome extension](https://chrome.google.com/webstore/detail/pesticide-for-chrome-with/neonnmencpneifkhlmhmfhfiklgjmloi) during development.
- [Unicorn Revealer Chrome extension](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB) during development.
- [Multi Device Website Mockup Generator](https://techsini.com/multi-mockup/index.php) for testing and to make responsive image.





[Back to top](#table-of-contents)

<hr>

# Credits

## Content

### Instructions 
The text was taken from [Wikipedia](https://en.wikipedia.org/wiki/Concentration_(card_game)).

### Fonts
[Google fonts](https://fonts.google.com/).

## Code

### Start Button
[Pure CSS Button with Ring Indicator](https://webdeasy.de/en/top-css-buttons-en/)


### Youtube tutorials

[How To Code A Card Game In Plain JavaScript - Spooky Halloween Edition](https://www.youtube.com/watch?v=3uuQ3g92oPQ)

[Memory Card Game - JavaScript Tutorial Edition](https://www.youtube.com/watch?v=ZniVgo8U7ek)

<hr>

## Media

### Images
Images came from [Pexels](https://www.pexels.com/)
And [svgrepo](https://www.svgrepo.com/vectors/fruit/1)

<hr>

# Contact

My name is [Petru Chelban](https://github.com/petrugio) I am a full-stack software developer student at [Code Institute](https://codeinstitute.net/ie/), where I am pursuing Diploma in Full Stack Software Development.

Please do not hesitate to contact me if you require any additional information about this project or wish to discuss work/collaboration opportunities.

- [LinkedIn](https://www.linkedin.com/in/petruchelban/)
- [GitHub](https://github.com/petrugio)

<hr>

# Acknowledgments

A big shout out to [Code Institute](https://codeinstitute.net/ie/) for providing me with the opportunity to create this project.

I'd like to thank my mentor [Daisy McGirr](https://github.com/Daisy-McG) for invaluable guidance and for reviewing my website.

[Back to top](#table-of-contents)

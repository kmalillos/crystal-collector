# Crystal Collector

Collecting crystals? Easy. The challenge?  Each crystal has a different random value. The User must collect his or her crystals wisely to try to reach the 'Target Score'!

### Live Page: [Link](https://kmalillos.github.io/unit-4-game/)

![Image](https://github.com/kmalillos/unit-4-game/blob/master/assets/images/read-me/readme-pic.JPG)

## How It Works

* At the beginning of each game, the four crystals below have a random value between 1 and 12 points. 
* Once the User collects a crystal, the User Score will increase by the crystal's value. 
* To win, the User must match exactly the total User Score to the Target Score.
* If the User "busts" (goes over the Target Score), the User loses. 
* The Target Score and Crystal Values will have new updated values after each round.

**Sample Demo:** [Link](https://www.youtube.com/watch?v=yNI0l2FMeCk&feature=youtu.be)

## Developer Notes

### Built With:
* CSS
* JavaScript
* jQuery

### CSS:

* CSS Reset from Meyer Web ([Link](http://meyerweb.com/eric/tools/css/reset/)) is used to reset the default styling of all HTML elements to a consistent baseline in order to better customize CSS
* Background Image from PixaVay ([Link](https://pixabay.com/))

### JavaScript / jQuery:

* Created *global variables* to store values
* 'crystalArray' stores the images used to visually represent crystals

![Image](https://github.com/kmalillos/unit-4-game/blob/master/assets/images/read-me/readme-1.JPG)

* *function* 'createCrystals' uses a *for loop* that iterates through the *array* 'crystalArray' to dynamically create image elements in HTML
* *Local variable* 'randomVal' is assigned to a random number between 1 and 12 (this will later represent the crystal value) using an equation that includes build-in JavaScript functions
    - Math.random() is a function that returns a random, floating-point number between 0 and 1
    - Multiplying Math.random() by 12, then adding 1, gets a random, floating-point value from 1 to 13
    - Math.floor() is a function that rounds a float-point number down an integer
    - Therefore, this equation below will get a random number between 1 and 12
* Each image is created with: 
    - *Class* 'crystal-img', which used in CSS for a uniformed style and in JavaScript for an event listener
    - *ID* for each image - unique ID by number from crystal-1 to -4, which used to in a later function
    - *'src'* (source) to 
    - *val*, which assigns image to a random value
* Images are appended in the HTML element with *id* 'crystals'

![Image](https://github.com/kmalillos/unit-4-game/blob/master/assets/images/read-me/readme-2.JPG)

* *function* 'targetScoreSelector' updates the *variable* 'targetScore' to a random number between 19 and 101 using a similar equation to 'randomVal' that includes build-in JavaScript functions 
* jQuery used to dynamically populate Target Score text in HTML

![Image](https://github.com/kmalillos/unit-4-game/blob/master/assets/images/read-me/readme-3.JPG)

* *function* 'updateCrystals' uses a *for loop* to randomly assign each crystal a new value
* uses the same equation for *variable* 'randomVal' in the *function* 'createCrystals'
* jQuery uses *ID* crystal-*i* (a number between 1-4) to assign *attribute* 'val' a random value using 'randomVal'

![Image](https://github.com/kmalillos/unit-4-game/blob/master/assets/images/read-me/readme-4.JPG)

* *function* 'resetGame' calls *function* 'updateCrystals' to update crystal values and *function* 'targetScoreSelector' to update the target score and *variable* 'userScore' is updated to 0
* jQuery used to dynamically populate User Score text in HTML 

![Image](https://github.com/kmalillos/unit-4-game/blob/master/assets/images/read-me/readme-5.JPG)

* Upon page load, the Crystal Images appear and the Target Score is randomly selected when the *functions* 'createCrystals' and 'targetScoreSelector' are called.
<!-- event listener info here -->
* Note: When the game resets, *function* 'createCrystals' is not called because the crystal images are already created. 

![Image](https://github.com/kmalillos/unit-4-game/blob/master/assets/images/read-me/readme-6.JPG)

## Contributor

### Kaylah Malillos

**About the Developer:** [Link](https://kmalillos.github.io/)



### **[ASI-Autocomplete Link](http://asi-auto.herokuapp.com/)**

# **ASI-Autocomplete**
## **Why**

* To learn how to quickly find and select words from a list of suggestions, as we type.
* To take the result and search about it using an API . 

## **What**

Simple search for an Author app, that search for an author's name that autocomplete it,then search for his bio through an api.
___

## **User Journey**

> As a user I want to search for an author .

> As a user I want to autocomplete the author name.

> As a user I want to search for author's biography. 

___

## **Architecture**

* public
  * css
    * styles.css
  * img
  * js
    * dom.js
    * logic.js
  * test
    * test.js
  * index.html
* src
    * Data
        * shortList.txt
    * functions.js
    * router.js
    * server.js
* test 
    * test.js
* README.md
* .gitignore 
* package-lock.json
* package-.json
* Procfile

---------

## **Goals of the weeks**

- [x]  We expect __back-end testing using tape__ (test as many components as you can) and basic __front-end testing__. Please note that we expect tests on _pure functions_ and _not_ on the router.

- [x] Host your project on __heroku__.

- [x] Use __module.exports__ and __require__ to break a single large server file into smaller modules.

- [x] Consider what would be a good __server file structure__ .
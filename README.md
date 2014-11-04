# Behavior Drill - Grocery List

### Learning Competencies

- Use OO principles and best practices in Javascript
- Utilize third-party libraries and resources in a client-side application
- Navigate jQueryUI docs to understand how `draggable` and `droppable` work

### Summary

It's time to work on your Object-Oriented Javascript.  In this challenge, you'll build a simple drag-and-drop grocery list application.

To successfully complete this challenge, you should be familiar with the following concepts and library features:

- [Object-Oriented Programming in JavaScript](https://developer.mozilla.org/en-US/docs/JavaScript/Introduction_to_Object-Oriented_JavaScript)
- The jQuery UI [draggable()](http://api.jqueryui.com/draggable/) and [droppable()](http://api.jqueryui.com/droppable/) functions

Your job is to figure out how to model each of the components of this application and to provide an elegant, object-oriented solution.

When you are finished, the behavior should work as in [this video](http://www.youtube.com/embed/762iZEIsvVU?rel=0).

Notice the features in play here:

- When an item from the Store List is dragged, the original element does not change. You could say it uses a *clone*.
- The same item can be dragged to the Grocery List multiple times.
- When an item is added to the Grocery List, the total price is updated to reflect the new changes.

### Setting up the Application

The `index.html` file has been mostly set up for you, but you'll need to download and add both jQuery and jQueryUI (and any relevant CSS/images) to the project yourself.

Your code will go within the `grocery.js` file in the `js` directory.

### Releases

##### Release 0: Get it Working

Before employing a 100% OO codebase, you may simply want to implement jQueryUI and get the draggable and droppable functionality working.

Use simple DOM manipulation (either using vanilla JS or jQuery) to retrieve item names and prices from the HTML, appending them to the Grocery List and calculating the total.

##### Release 1: Make it OO

Now that you understand how the core functionality might work, consider ways to abstract the constructs in your application (the two lists and numerous individual items) into Models and Views.

Your Models will represent data (in the form of OO JS objects), and your Views will represent your HTML and relevant event bindings/callbacks (also in the form of OO JS objects). Rather than performing a bunch of gross DOM manipulation to achieve the core functionality, utilize properties and methods on your objects.

The important concept here is to consider ways in which your data (Models) will be associated with their UI display (Views). How can we relate and visualize these constructs?

##### Release 2: Test it

After converting your application to a 100% OO-based structure, consider writing unit tests for every construct, using Jasmine as your testing framework.

Your Models' properties and methods should be easy to test, and you can test the Views using principles established in previous Challenges (namely the Orange Trees Challenge from Phase 2). You'll have to create a separate `SpecRunner.html` file, and your test specs for your Views will likely need to generate sandbox DOM elements so that you can test the Views' functionality.

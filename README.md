# techdegree-project-1
 Random Quote Generator

This application generates a random quote, displays it on the page and changes the background color to a random color every 10 seconds or every time the button is pressed.

Every quote is an object containing the following properties: quote, source, citation, year and tags. The quote objects are stored in the quotes array.

First, I created the getRandom function, which returns a random quote object from the quotes array.

Then, I created a randomRGB function, in order to generate a random rgb color.

Afterwards, I created the prinQuote function, which uses the first two functions in order to display a random quote and change the background color each time the button is pressed. 
If the quote object includes properties such as citation, year or tags, they will also be displayed.

I created a timingFunction which calls the printQuote every 10 seconds, resulting in changing the quote and background color every 10 seconds.

At this point, after clicking the button, the timer does not restart, so the quote changes after less then 10 seconds if you press the button. 
I'm still trying to find a solution for resetting the timer when the button is clicked.

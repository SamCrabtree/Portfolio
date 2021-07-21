# Portfolio

*Sam Crabtree's Personal Portfolio*

This project was created with two purposes in mind: 

1. To fulfill the requirements of Code Louisville's Front End Development Final Project

2. To help display my personal coding projects for external client or employer reference. 


This project will display the following techniques to meet project expectations-

## Git Comprehension
1. Project is uploaded to your GitHub repository and shows at minimum 5 separate commits.

  This requirement has been met and can be verified using reviewing the repository history at https://github.com/SamCrabtree/portfolio 

## Media Queries

1. Show 2 different Media queries for different device types/screen resolutions (phone, tablet, and traditional computer screens) 
    
    This requirement has been met by starting with a "Mobile First" design. There is also a Tablet media query as well as a Desktop/Computer media query. In the styles.css sheet (found in the styles folder) You can find the Mobile and General layout rules start at line 0. Tablet layout rules start around line 351 and Desktop layout begins at 439. 
    
    In addition to this, there is also a Media querie set up to allow for a color scheme change depending on the preference of dark mode on a users mobile device at line 504.  

## CSS Features

1. Use Flexbox or CSS Grid to organize content areas based on mobile or desktop views. Simply applying a basic flex property so that text wraps as you change screen sizes does not count. You must actually rearrange content or perform some more advanced feature. For example, swapping from a single column layout to a two-column layout on desktop.
 
  This requirement has been met with the following features:
      
       A. The portfolio.html page has a flexbox gallery of completed projects/assignments that changes layout and width depending on the width of screen.
      
       B. The header/navigation menu across all html pages changes with media queries from rows to colums and re-arranges thee entries.

       C. Under the demos the cafe.html page features multiple nested CSS Grids while organizing the cafe menu. 

2. A navigation menu that expands and collapses properly at desktop and mobile sizes, such as by switching between vertical and horizontal styles, or is opened and closed by clicking the “hamburger” icon

  This requirement is met by accessing the portfolio on a mobile device layout. On each page of the Portfolio (not the demo pages) the HEADER tag on lines 15-30 contains the navigation menu code and the linked javascript function can be found above the closing body tag. The Javascript file can be found in the JS folder under menu.js. In the Styles.CSS file, you can find the appropriate styling for the menu on lines 43-50, 364-369, and 454-459.

## Javascript Features

1. Create a form (such as a ‘Contact Us’ form), validate at least one field (ex: email is in the correct format) and then use that information on your page somehow. For example, display it back to the user on button click, or change a setting on the page based on a section. Having a form that does nothing on clicking Submit or that just refreshes the page is not enough - you must capture the value(s) of the form and use it somehow.

  This requirement is met on the contact.html using the validate.js script. The primary goal is to validate that the email is in the corect format and then upon submission, the form is replaced with a demo of the form that has been submitted. 



## Additional Features 

The following features included in this assignment are extra's and simply demonstrate techniques learned during class or from external sources:

TBD



# CSCI4800 Assignment 2 Part 2

![Screenshot](img/smol-wink.svg)

**Names:** Tammy Husnetdinova and Alex Verkest<br>
<br>
**Class:** CSCI4800-E01 <br>
<br>
**Date:** 3/15/21 <br>
<br>
**Assignment:** 2 Part 2 for Online Social Network <br>
<br>
**Scenario:** <br>
<br>
**Learning objectives:** Our goal was to add to the progress made in the previous classwork by adding input validation and making the layout more dynamic. <br>
<br>
**Technologies used:** HTML5, CSS3, Native Javascript, Vue.js for code, Visual Studio Code for development and testing, Google Chrome browser for testing, Windows 10 OS <br>
<br>
**Justification in design choices:** We started by adding the validateForm() function to the Sign Up modal following the example set in our Covid Form classwork; we see if the passwords match, check for the existence of special characters in all inputs, and make sure that the password has the required security checks (one uppercase, one lowercase, and one number). Note: our error checking is sound and we do display the right error messages in red when applicable with additional yellow highlighting, but... using modals is proving to be tricky for testing for errors with inputs. We ran tests with console.log()s and watched the modal flash an error message before closing on "submission". What we learned is that changing the button type from "submit" to "button" does not help with running these test. We added dynamicity to the project by intriducing Vue.js for visual infrastructure; it's not at a fully-fledged, interactive stage right now, but is very close to completion with the "Show More" button for loading more posts. We do, however, have more interactive Security Questions on Sign Up, which is an update from the previous version. The styling there can definitely use an additional pass, but the work to display text boxes when the dropdown quesiton is selected does pop up as it should. <br>
<br>
**Extra features:** Nothing to document here. <br>
<br>
**Nu HTML Checker status:** COMING SOON <br>
<br>
**Check it out:** https://t-husnetdinova.github.io/webapp_spring2021_assignment2-part2/ <br>
<br>

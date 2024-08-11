# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Tip calculator app solution](#frontend-mentor---tip-calculator-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
  - [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Solution URL here](https://github.com/TorCanHack/tip-calculator-app)
- Live Site URL: [Live site URL here](https://torcanhack.github.io/tip-calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- Tailwind-CSS


### What I learned

The Tip Calculator gives the users the option of using their own custom percentage instead of the options provided by default. I thought of the smoothest and cleanest way to achieve this and opted for using an `<input/>` tag that automatically updates as the user types in the custom percentage. To achieve this goal i made use of the `useEffect` hook since this hooks only renders a specific section of the App, optimizinf performance and keeping the code clean. This is the code i used to achieve this:

````js
  useEffect(() => {
    const number = parseFloat(inputValue);
    const percentage = parseFloat(customPercentage);
    const numberOfPeople = parseInt(peopleValue)
    if (!isNaN(number) && !isNaN(percentage) && !isNaN(numberOfPeople) && numberOfPeople > 0) {
      const totalAmount = (number * (percentage/100)).toFixed(2)
      setTotal(totalAmount);
      setTipAmount((totalAmount / numberOfPeople).toFixed(2));
    } else {
      setTotal('0.00')
      setTipAmount('0.00')
    }
      
    
  }, [customPercentage, inputValue, peopleValue])
````

The above code snipper only renders if the value of bill, number of people and the custom percentage changes. It makes sure the value of the bill, number and percentage are not null and then gets the percentage of the total bill and then divides the tip amount by the total number of barristers, sharing the tip evenly.

Additionally, I learned how to customize media queries in Tailwind CSS by extending the theme in the `tailwind.config.js`. I needed to make the Web App dynamic enough for a screen size of 320px. I did that using the code snippet below:

````js
module.exports = {
  theme: {
    extend: {
      screens: {
        mini: { 'raw': '(max-width: 320px)' }, 
      },
    },
  },
  plugins: [],
}
````

### Continued development

I would love to continue learning about React hooks and their appropriate uses.


## Acknowledgments

Thank you to the Front-end Mentor Team.
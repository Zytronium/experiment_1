# Experiment #1
## Localhost fetching assets from my website. Will it work?

- Test 1:
  - Pull an entire HTML page
  - Prediction: Not sure if it will work. Guess: It will work
  - Results: Failed
- Test 1.5:
  - Pull an entire HTML page from GitHub Pages version of the same website
  - Prediction: It will partially work
  - Results: Failed
- Test 2:
  - Pull from assets/HTML_Templates/navbar.html
  - Prediction: It will work if test 1 worked
  - Results: Failed
- Test 3:
  - Pull some CSS from assets/CSS
  - Prediction: It will work if test 2 worked (so it won't work)
  - Results:
    - First try failed, but could work with a slight modification to the thefactionnexus.tech to allow cross-origin sharing.
    - Second try was a partial success! Couldn't fetch the text CSS file, but was able to apply some of the CSS file, not including custom fonts like Oxanium. Loading the CSS as a link in the HTML Head only worked withOUT the 'crossorigin' attribute.
- Test 3.5:
  - Pull some CSS from assets/CSS from GitHub Pages version of the same website
  - Prediction: It will work
  - Results: Partial success! Couldn't fetch the text CSS file, but was able to apply some of the CSS file, not including custom fonts like Oxanium. Loading the CSS as a link in the HTML Head only worked withOUT the 'crossorigin' attribute.
- Test 4:
  - Pull a script from assets/scripts
  - Prediction: Not sure if it will work. Guess: It will not work
  - Results: Partial success! Couldn't fetch the text JS file, but was able to run the script by declaring it in the HTML Head.
- Test 5:
  - Pull a text file from the website
  - Prediction: Not sure if it will work. Guess: It will not work
  - Results: Failed.
- Test 6:
  - Pull a JSON file from the website
  - Prediction: Not sure if it will work. Guess: It will not work
  - Results: Failed. Crossorigin access not allowed.
- Test 6.5:
  - Pull a JSON file from the GitHub Pages version of the website
  - Prediction: It will work
  - Results: Success!
- Test 7:
  - Pull README.md & text file from a website hosted on GitHub Pages
  - Prediction: It will work
  - Results: Success when there's no CNAME file in the repo.
- Test 8:
  - Pull README.md from a public GitHub Repo not hosted on GitHub Pages
  - Prediction: It will not work
  - Results: Untested

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
  - Results: Failed
- Test 9 (repeat of test 1.5):
  - Pull an entire HTML page from the GitHub Pages version of the website
  - Prediction: It will work
  - Results: Success when there is no CNAME file!
- Test 9.5:
  - Use the CSS stylesheets pulled from GitHub Pages and apply it
  - Prediction: I forgot to make a prediction before trying it
  - Results: It worked. For the most part. Certain assets like fonts and images cannot be found, as those files do not exist in this project and the paths are not adjusted to also pull them from GitHub Pages.
- Test 9.75:
  - Run the scripts designed to run with the given page pulled from GitHub Pages
  - Prediction: It will try to run, but it will not successfully access the database it's trying to access.
  - Results: Success!! Upon slightly modifying factions.js on GitHub to wait half a second before running, and pasting a small script from factions.html into this project's index.html, it successfully loads the factions from the database!
- Test 10 (repeat of test 3.5):
  - Pull and display a CSS file and JS script file as text from the GitHub Pages version of the website
  - Prediction: It will work
  - Results: Success when there is no CNAME file!

---

## Post-experiment Analysis
When fetching assets or HTML from other websites, it only works if the web server
has a certain setting on to allow cross-origin sharing. In the case of GitHub Pages,
this usually/always works unless there is a CNAME file redirecting you to another domain.

In my case, both the actual website and GitHub Pages version allowed me to apply 
assets like scripts and stylesheets no matter what. However, paths to things like 
custom fonts or images will not be altered to also pull from the website, and
therefore will not load.

By pulling from my GitHub Pages version and slightly modifying the script, I was
able to actually access my FireBase Firestore database this way, which I was hoping
wouldn't be possible. However, I did also have to copy over a small script that 
contained my API key in it, and it wouldn't access the database without that script,
so I think it is safe to assume that my database is relatively safe.

This was a fun and very informative experiment in fetching data from URLs. Now
that I've spent 2-3 hours on it, I really should get back to work on school. If
You are reading this, thank you for taking a look at this, and I hope you learn
something from it too. Please note that I redacted my Firebase config object in
the script embedded in index.html, and have changed things in the repo this was
pulling from, therefore the results will not be the same for you.

# learn `<Div>` Elements basics with Martin:blush:
The `<div>` element is one of the most commonly used HTML elements. It is a block-level container that is used to group other elements for styling or layout purposes. By default, `<div>` takes up the full width available and starts on a new line.
#### Below is a basic example of html code to use a `<div>`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Div Example</title>
</head>
<body>

    <div>
        <p>This is a paragraph inside a div container.</p>
    </div>

</body>
</html>

```
Explanation:
The `<div>` element is used here to wrap the `<p>` (paragraph) element.
It provides a structure to apply styling or layout rules to the content

## Styling a `<div>`
You can use CSS to style a `<div>` to control its appearance, position, and layout.
#### Here are the most commonly used properties that are passed to a `<div>`:
background-color:  a background color.
color:     text color.
padding:   space around the content inside the `<div>`.
margin:   space outside the `<div>`.
border:  border around the `<div>`.
The `<body>` is set to use Flexbox with display: flex.
justify-content: center centers the `<div>` horizontally.
align-items: center centers the `<div>` vertically.
text-align: defines how text inside the `<div >`is displayed

## I used these basics to create this simple project using html and css. You can check it out and feel free to use it as your learning example.
Below is my html code:
```html
<!DOCTYPE html>
<html>
<head>
  <title>Miniproject1</title>
  <link rel="stylesheet" href="google.css">
</head>
<body id="body-c">
  <div class="assignment">
    
    <div class="main-content">
      <img src="google.png" alt="google">
        <div class="top-section">
  
      
      <h2>Ranesh Suthar</h2> 
      <p class="title">Designer · Engineer</p>
    </div>
      <div class="social-icons">
        <img id="fb" src="facebook.png" alt="facebook">
        <img id="tw" src="twitter.png" alt="twitter">
        <img id="ig" src="instagram.png" alt="instagram">
      </div>
      <button class="add-to-search"><b id="button-text">Add me to search</b></button>
    </div>
  </div>
</body>
</html>
```
And below is the CSS I used to style the `<divs>`:
```css
body {
    font-family: Arial, sans-serif;
    padding: 100px;
    margin-top: 30px;
    background-color: #9CC5E1;
    justify-content: center;

  }
  
  
  .assignment {
    width: 250px;
    height: 400px;
    background-color:  #D8E5F6;
    border-radius: 30px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    justify-content: center;
    align-content: center;
  }
 
  
  
  .main-content {
    text-align: center;
    padding-top: 20px;
    
  }
  .main-content img{
    height: 80px;
  }
  
  .social-icons {
    margin: 15;
    height: 0px;
  
  }
  
  .social-icons a {
    margin: 0 40px;
    /* margin-top: 50px; */
    color: #333;
    padding-right: 20px;
    
    
  }
  
  .add-to-search {
    font-size: 13px;
    color:black;
    margin-top: 80px;
    border-radius: 50px;
    background-color: white;
    border: none;
    padding: 10px;
    width: 180px;

  }
  h2{
    margin-bottom: 5px;
  }
  .title{
    font-size: 15px;
    color: grey;
    margin-bottom: 30px;
  }
  #button-text{
    padding: 5px;
    font-size: medium;
    
  }
  .top-section{
    margin-top: 20px;
  }
  #fb{
padding-right: 10px;
margin-top: 0px;
height: 30px;
  }
  #tw{
padding-right: 10px;
height: 30px;
  }
  #ig{
    height: 30px;
  }
```
##### The result was a below. Run the run and be sure to get the following result:
![`<div>` example](/WEEK%20ONE/TUE%203rd/Google%20html/Result.png)
##### You can download the social icons here:
<https://icons8.com/icons>
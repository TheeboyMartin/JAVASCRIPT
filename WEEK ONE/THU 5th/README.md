# 1. Learn CSS Grid with Martin:blush:
CSS Grid is a powerful layout system introduced in CSS3 that provides a flexible and efficient way to create complex grid-based layouts. It offers a grid-based approach to positioning elements on a web page, making it easier to design and maintain responsive layouts.
Let's learn
## 2. Key Concepts
 Grid Container: The parent element that holds grid items
  Grid Items: Child elements of the grid container. These elements are placed within the defined grid

### Here is a basic html code to define grid container and grid items

```Html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>CSS GRID</title>
    
</head>
<body>
        <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>

</body>
</html>
```
### CSS Grid Properties
1. display: grid;
This enables the grid layout on the container.
2. grid-template-columns and grid-template-rows
Defines the number of columns and rows.
You can use fr (fractional units), px, %, or auto to define sizes.
Example:
```CSS
grid-template-columns: 1fr 2fr; /* First column takes 1 fraction, second takes 2 */
grid-template-rows: 100px auto; /* First row is 100px, second row auto-adjusts */
```

3. grid-gap / gap
Adds spacing between grid items.
```CSS
gap: 10px; /* Adds 10px of space between rows and columns */
```

4. grid-column and grid-row
Used on grid items to define where they start and end on the grid.
Example:
```CSS
/* Span an item across 2 columns */
grid-column: 1 / 3;

/* Span an item across 2 rows */
grid-row: 1 / 3;
```
## Summary
#### Grid Cheat Sheet
grid-template-columns: Defines the columns.
grid-template-rows: Defines the rows.
grid-column: Defines how many columns an item spans.
grid-row: Defines how many rows an item spans.
gap: Space between grid items


## I used the above CSS Grid properties to create the project below. Feel free to use it as a learning example
##### Here is my html code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<link rel="stylesheet" href="grid.css">
<body>
    <div class="container">
        <div class="box box1">
            <div class="flex">
               
                  <img id="avatar"  src="daniel.jpg" alt="daniel clifford">
              
                <div id="name">
                  <h3 >Daniel Clifford</h3>
                  <p id="verified">Verified Graduate</p>
                </div>
              </div>
            <p id="content" class="awesome" style="color: white;"><b>
                I received a job offer mid-course, and the subjects I learned<br> were current, if not more so,
                in the company I joined. I <br>honestly feel I got every penny’s worth.
            </b></p>
              <p id="content">
                “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
                transition and have heard some people who had an amazing experience here. I signed up
                for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
                The next 12 weeks was the best - and most grueling - time of my life. Since completing
                the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
              </p>
        </div>
        <div class="box box2">
            <div class="flex">
               
                <img id="avatar"  src="jonathan.jpg" alt="daniel clifford">
            
              <div id="name">
                <h3 >Jonathan Walters</h3>
                <p id="verified" >Verified Graduate</p>
              </div>
            </div>
            <p id="content" class="awesome"  style="color: white;"><b>The team was very<br>supportive and kept me<br> motivated</b></p>
            <p id="content"> “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer
                for a big company. This was one of the best investments I’ve made in myself. ”</p>
        </div>
        <div class="box box3">
            <div class="flex">
               
                <img id="avatar"  src="kira.jpg" alt="daniel clifford">
            
              <div id="name">
                <h3 >Kira Whittle</h3>
                <p id="verified">Verified Graduate</p>
              </div>
            </div>
            <p id="content" class="awesome"><b>
                Such a life-changing experience. Highly recommended!</b>
              </p>
              <p id="content">
                “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from
                professionals who can help me learn programming step by step. I was encouraged to enroll by a former
                student of theirs who can only say wonderful things about the program. The entire curriculum and staff
                did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
                project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
                could ever have. In fact, I’ve often referred to it during interviews as an example of my developent
                experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.
                100% recommend! ”
        </div>
        <div class="box box4">
            <div class="flex">
               
                <img id="avatar"  src="jeanette.jpg" alt="daniel clifford">
            
              <div id="name">
                <h3 >Janeatte Harman</h3>
                <p id="verified" >Verified Graduate</p>
              </div>
            </div>
            <p id="content" class="awesome"><b>An overall wonderful<br>and rewarding<br>experience</b></p>
            <p id="content">“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living
                while doing something I love. ”</p>

        </div>
        <div class="box box5">
            <div class="flex">
               
                <img id="avatar"  src="patrick.jpg" alt="daniel clifford">
            
              <div id="name">
                <h3 >patrick Abrams</h3>
                <p id="verified" >Verified Graduate</p>
              </div>
            </div>
            
           
            <p id="content" class="awesome"><b>Awesome teaching support from TAs who did the bootcamp<br>
            themselves. Getting guidance from them and learning from<br>
        was esay.</b></p>
        <p id="content"> “ The staff seem genuinely concerned about my progress which I find really refreshing. The program
            gave me the confidence necessary to be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the personal attention you need from
            an incredible community of smart and amazing people. ”</p>
        </div>
        
    </div>
</body>
</html>
```
##### And below is the styles I used for the project:
```CSS
body{
    
    margin-top: 50px;
}

.container{
    display: grid;
    grid-template-columns: repeat(4, 300px);
    grid-template-rows: repeat(2, 300px);
    margin: auto;
    height: 100vh;
    justify-content: center;
    
    gap: 20px;
   
    
}

.box{
    border: 1px solid black;
    border-radius: 10px ;
    padding: auto;
    margin-left: 
    }
.box1{
    grid-column: 1/3;
    grid-row:1/2 ;
    background-color: hsl(263, 55%, 52%);
   
}
.box2{
grid-row:1/2 ;
grid-column:3/4 ;
background-color: hsl(127, 19%, 35%);
}
.box3{
    grid-row-start: 1;
    grid-row-end: 3;
    background-color:hsl(0, 0%, 100%);
}
.box4{
    background-color:hsl(0, 0%, 100%);
}
.box5{
    grid-column: 2/4;
    grid-row:2/2 ;
    background-color: hsl(219, 29%, 14%);
    color: white;
}
#avatar{
    width: 40px;
    height: 40px;
    border-radius: 50px;
    margin-top: 18px;
    margin-right: 20px;
}


#name{
    display: flex;
    flex-direction: column;
    column-gap: 0;
    padding: 0;
 
}
#content{
    margin-left: 20px;
    margin-right: 20px;
    justify-content: center
    
    
}



h3{
    margin-bottom:0 ;
}
.awesome{
    font-size: large;
    

}
.flex{
    display: flex;
    flex-direction: row;
    margin-left: 20px;
}
#verified{
    margin-top: 0;
    padding: 0;
    color: gray;
}
```
##### The result for this project was as in the picture below. Go on and try out the code :
![Css Grid](/WEEK%20ONE/THU%205th/Reslut.png)
Find the materials including colors and fonts for this project here:
<https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7>
# Another day to learn more on `<div>` and Flexbox with Martin:blush:
#### Incase you missed my projects on the `<div>` and the flebox check out them below:
### The `<Div>` : [`<div>` pdf ](/TUE%203rd/Shipping%20html/README%20divs.pdf)
### The Flexbox : [ Flexbox pdf ](/TUE%203rd/Shipping%20html/README%20Flexbox.pdf)
#### Here is another project created with more `<div>` and with an introduction to the css Flexbox :
HTML code :
```html
<!DOCTYPE html>
<html>
<head>
  <title>Shipping</title>
  <link rel="stylesheet" href="index.css">
</head>

  <header>
    <nav class="nav">
      <img id="logo" src="logo.png" alt="logo"></div>
          <ul id="list">
             
              <li><a href=""></a>Home</li>
              <li><a href=""></a>Shop</li>
              <li><a href=""></a>Contact</li>
              <li><a href=""></a>Help</li>


          </ul>
      <div>
         <div id="Account" > <p>Account</p>
          <img id="drop" src="dropdown.png" alt="dropdown"></div>

          <div id="cart"><img  src="basket.png" alt="cart">
          <p>3Items</p></div>
          <img id="dp" src="daniel.jpg" alt="profile-pic">
     
          
    
  </div>
</nav>
  </header>
  <body>
  <div class="container">
    <div class="flex1">
      <div class="menu">
        <ul>
          <li style="color: steelblue;">Account</li>
          <li>Shipping</li>
          <li>Payment</li>
        </ul>
      </div>

      <div class="login">
        <p style="font-size: large;"><b>Account details</b></p><br>
        <label id="label" for="Email">Email address</label><br>
        <div class="input-container">
        <input id="input"  type="email" name="email" placeholder  ="Email@myemail.com">
        <button class="check-button">
          <span class="check-icon">&#10003;</span>
        </button>
      </div><br>
       
        <label id="label" for="password">Password</label><br>
        <div class="input-2-c">
        <input id="input" type="password" name="password" placeholder ="********">
        <button class="check-button">
          <span class="check-icon">&#10003;</span>
        </button>
      </div>
    </div>
     <div id="register">
      <p>Register for account</p>
      <button id="login">Login</button>
     </div>
     <div class="border"></div>
     <div id="cancel">
      <p>Cancel order</p>
      <button id="shipping">Shipping details</button>
     </div>

    </div>
    <div class="flex2">
      <p id="p"> Order Summary</p><br>
      <img id="headphones" src="headphones.webp" alt="headphones">
      <div>
        <p id="p"><b>Sony wireless headphones</b></p>
        <button id="q-button">-</button>
        <input id="quantity" type="number" name="quantity" placeholder="1">
        <button id="q-button">+</button>
            </div>
            <p id="p"><b>£320.45</b></p><br>
            <label id="card-l" for="discount">Gift Card / Discount code</label>
            <div>
              <input id="card-in" type="text">
              <button id="apply">Apply</button>
            </div>
        
            <div class="order-total">
              <p id="p">Sub total</p>
              <p id="cost1">£316.55</p>
            </div>
            <div class="order-total">
              <p id="p">Tax</p>
              <p id="cost2">£3.45</p>
            </div>
            <div class="order-total">
              <p id="p">Shipping</p>
              <p id="cost3" style="color: green;">Free</p>
            </div>
            <div class="order-total">
              <p id="p"><b>Total</b></p>
              <p id="cost4">£320.45</p>
            </div>
    

    </div>
  </div>

  
  </body>
</html>
```
CSS style code :
```css
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}
body{
  
  display: flex;
  height: 100vh;
  flex-direction: column;
}
.nav{
  background-color: whitesmoke;
  height: 230%;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100w;
}
.nav ul{
  margin-left: 1px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 15%;
  margin-left: 250px;

}
.nav div{
  display: flex;
  gap: 15%;
  margin-left: auto;
  margin-right: 200px;
  font-size: x-large;
}


#list{
  font-size: x-large;
  margin-left: 100px;
}
.container{
display: flex;
flex-direction: row;
padding: auto;
margin-top: 100px;
justify-content: center;

}
.flex1 {
  width: 650px;
  height: 600px;
  background-color: whitesmoke;
  border-radius: 20px;
}
.flex2{
  width: 500px;
  height: 600px;
  background-color: whitesmoke;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  justify-items: center;
}
.flex1{
  margin-right: 50px;
}
.menu{
  
    display: flex;
    flex-direction: row;
    align-items: center;
    
}
.menu ul{
    margin-left: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 20%;
    margin-left: 120px;
    position: relative;
    margin-top: 20px;
    font-size: large;

}
/* #acc-menu{
  display: flex;
  flex-direction: row;
} */

.login{
  margin-left: 76px;
  margin-top: 20px;
 

}
.input-container, .input-2-c{
  position: relative;
  display: inline-block;
}
.check-button{
  position: absolute;
  right: 5px;
  top:22px;
  transform: translate(-50%);
  background-color: black;
  border: none;
  color: white;
  padding: 0px;
  cursor: pointer;
  border-radius: 300px;
  height: 18px;
  width: 18px;
}
#input{
  padding: 8px;
  width: 320px;
  margin: 5px;
  background-color: whitesmoke;
  /* border: none; */
  border-radius:5px ;
  margin-top: 15px;
  margin-bottom: 10px;
  font-weight: bold;
}
input::placeholder { 
  opacity: 2;
   color: black;}
#register{
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin-left: 200px;
  margin-top: 20px;
}
#login{
  padding: 5px;
  border-radius: 8px;
  color: white;
  background-color:steelblue;
  width: 100px;
  height: 50px;
}
#cancel{
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin-left: 150px;
  margin-top: 35px;
}
#shipping{
  padding: 5px;
  border-radius: 8px;
  color: white;
  background-color: steelblue;
  width: 200px;
  height: 50px;
}
#headphones{
  height: 200px;
  width: 300px;
  margin-left: 25px;
}
#p{
  margin-top: 20px;
  margin-left: 25px;
  margin-right: 70px;
}
#quantity{
  width: 20px;
  border: none;
  height: 20px;
  margin-top: auto;
  margin-left: 2px;
  margin-right: 2px;
  
}
#q-button{
  width: 20px;
  height: 20px;
  margin-top: auto;
 
}
.flex2 div{
  display: flex;
  flex-direction: row;
}
#card-l{
  margin-left: 25px;
  margin-top: 20px;
}
#card-in{
  margin-left: 25px;
  margin-top: 20px;
  background-color: whitesmoke;
  /* border: none; */
  height: 30px;
  border-radius: 5px;
  margin-right: 100px;
}
#apply{
  width: 100px;
  height:30px;
  margin-top: auto;
  border-radius: 5px;
  border-color: steelblue;
  color: steelblue;
}
.order-total{
  display: flex;
  flex-direction: row;
 
}
#cost1,#cost2,#cost3,#cost4{
  margin-top: auto;
 
}
#cost3{
  margin-left: 200px;
}
#cost2{
  margin-left: 230px;
}
#cost1 {
  margin-left: 170px;
}
#cost4{
  margin-left: 190px;
}
.border::after {
  content: "";
  display: flex;
  flex-grow: 1;
  height: 2px; 
  background-color: #ccc; 
  margin-top: 120px;
 
}
#label{
  margin-bottom: 25px;
}




  .main{
display: flex;
margin: 20px;
  }
  .main1{
  width: 600px;
  height: 600px;
  background-color: whitesmoke; 
  margin-right: 30px;
  justify-content: center;
justify-items: center;
border-radius: 10px;

  }
  .main1-contents{
    display: flex;
    justify-content: center;
justify-items: center;
  }
  .main2{
width: 600px;
height: 600px;
background-color: whitesmoke;
justify-content: center;
justify-items: center;
border-radius: 10px;


  }
  .main2-contents{
    align-items: center;
    margin-left: 20px;
    justify-content: space-evenly;
  }
  .headphones{
    height: 80px;
    width: 250px;
    margin-left: 10px;
  }
  

  
  .discount-code {
    margin-top: 20px;
  }
  .product-info{
    
  }
  #form{
    display: block;
  }

 #dp{
  border-radius: 50px;
  width: 30px;
  height: 30px;
 }
#cart{
  margin-right: 20px;
  gap: 2px;
}
#Account{
  margin-right: 20px;
  gap: 2px;
}
#drop{
  width: 20px;
  height: 20px;
  margin-top: 6px;
}
#logo{
  object-fit: contain;
  height: 35px;
  width: 100px;
  margin-left: 30px;
  margin-right: 20pz;
}
```
##### As always feel free to use this project as your learning example. The result was as below. Run the code and be sure to get this result :
![result](/WEEK%20ONE/TUE%203rd/Shipping%20html/Result.png)

Find the images for this project here:

![images](/WEEK%20ONE/TUE%203rd/Shipping%20html/daniel.jpg)

![images](/WEEK%20ONE/TUE%203rd/Shipping%20html/headphones.webp)

![images](/WEEK%20ONE/TUE%203rd/Shipping%20html/basket.png)

![images](/WEEK%20ONE/TUE%203rd/Shipping%20html/dropdown.png)
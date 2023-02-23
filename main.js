import './style.css'

document.querySelector('#app').innerHTML = `
  
<header>
<nav>
    <div id="navImg">
        <img src="https://res.cloudinary.com/codier/image/upload/v1610549958/qczezo2jvsgznti3pqfo.svg" alt="logo">
    </div>
    <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Join</a></li>
        <li><a href="#">Help</a></li>
    </ul>
</nav>
</header>

<section id="main">
<div class="container">
    <div></div>
    <div class="info">
        <h1>Spider Man</h1>
        <p>
            <blockquote>
                Sometimes to do what is right we have to give up the things we want the most even our dreams.
            </blockquote>
        </p>
    </div>
</div>
</section>

<section id="bio">
<div class="container-bio">
    <div></div>
    <div class="info">
        <h1>BIO</h1>
        <p>
            Bitten by a genetically enhanced spider from a lab,
    Spider Man has some awesome abilities that 
    lend a helping hand to the Avengers crew.
     Spider-sense, superhuman strength, and a 
     plethora of tools inside his Starke Engineered suit
     compliment his natural hero skills.
        </p>
    </div>
</div>
</section>

<footer>
<h3>2021 &copy; Desinged & developed by <a href="#">Kevin</a></h3>
</footer>

`
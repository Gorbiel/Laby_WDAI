<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Gallery • Gorbiel's Photography</title>
    <link rel="icon" type="image/x-icon" href="resources/favicon.ico">
    <link rel="stylesheet" href="css/Gallery.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet">
</head>

<body>
<script src="js/userAgentDetection.js"></script>
<nav id="navbar">
    <div class="nav-wrapper">
        <div class="logo">
            <a href="index.html"><img width="60px" height="auto" src="resources/logo.png" alt="logo"></a>
        </div>

        <!-- Navbar Links -->
        <ul id="menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="gallery.php" class="active">Gallery</a></li>
            <li><a href="portfolio.php">Portfolio</a></li>
            <li><a href="contact.php">Contact</a></li>
        </ul>

        <!-- Burger Menu Icon -->
        <div class="burger-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</nav>
<script src="js/burgerMenu.js"></script>
<main>
    <div id="gallery" class="gallery-container">
        <video src="resources/Gallery/stock.mp4" class="gallery-image" controls></video>
    </div>
    <div id="lightbox" class="lightbox">
        <span class="close">&times;</span>
        <span class="arrow left-arrow">&#10094;</span> <!-- Left arrow -->
        <img class="lightbox-image" id="lightbox-image" src="" alt="">
        <span class="arrow right-arrow">&#10095;</span> <!-- Right arrow -->
    </div>
    <?php
    // Directory containing the gallery images
    $directory = './resources/gallery';

    // Get all .jpg files in the directory
    $imageFiles = glob($directory . '/*.jpg');

    // Convert the PHP array to a JavaScript array
    echo "<script>\n";
    echo "const images = [\n";

    // Loop through each file and add it to the JavaScript array
    foreach ($imageFiles as $file) {
        // Escape the file path for JavaScript and print it as an array element
        echo "'" . addslashes($file) . "',\n";
    }

    echo "];\n";
    echo "</script>";
    ?>
    <script src="js/gallery.js"></script>
</main>
<footer id="footer">
    © 2024 Copyright: Gabriel Kania | All rights reserved
</footer>
</body>
</html>

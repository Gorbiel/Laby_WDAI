<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Contact • Gorbiel's Photography</title>
    <link rel="icon" type="image/x-icon" href="resources/favicon.ico">
    <link rel="stylesheet" href="css/Contact.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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
            <li><a href="gallery.php">Gallery</a></li>
            <li><a href="portfolio.php">Portfolio</a></li>
            <li><a href="contact.php" class="active">Contact</a></li>
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
    <h2>Contact me</h2>
    <p>
        Do you want a print? Maybe you'd like to hire me or do a collab? Feel free to message me using this contact form
    </p>
<!--    <form id="contact-form" class="contact-form" action="contact.php" method="POST">-->
    <form id="contact-form" class="contact-form" action="contact.php" method="POST">
        <!-- Email Field -->
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required placeholder="john.smith@example.com">

        <!-- Subject Dropdown -->
        <label for="subject">Subject:</label>
        <select id="subject" name="subject" required>
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="collaboration">Collaboration</option>
            <option value="print">Request a print</option>
            <option value="other">Other</option>
        </select>

        <!-- Message Text Area -->
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="6" required placeholder="Write your message here"></textarea>

        <!-- Send Button -->
        <button type="submit" id="send-button">Send</button>
    </form>
    <?php
    // Check if form was submitted
//    if ($_SERVER["REQUEST_METHOD"] == "POST") {
//        // Sanitize and validate inputs
//        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
//        $subject = trim($_POST["subject"]);
//        $message = trim($_POST["message"]);
//
//        // Validate required fields
//        if (empty($email) || empty($subject) || empty($message)) {
//            echo "<p style='color:red;'>All fields are required.</p>";
//        } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
//            echo "<p style='color:red;'>Invalid email format.</p>";
//        } else {
//            // Set email details
//            $to = "mail.gorbiel+foto@gmail.com"; // Replace with your actual email address
//            $subjectLine = "New Contact Form Submission: $subject";
//            $body = "From: $email\n\nMessage:\n$message";
//            $headers = "From: $email";
//
//            // Send the email
//            if (mail($to, $subjectLine, $body, $headers)) {
//                echo "<p style='color:green;'>Thank you! Your message has been sent successfully.</p>";
//            } else {
//                echo "<p style='color:red;'>Oops! Something went wrong, and we couldn't send your message.</p>";
//            }
//        }
//    }
    ?>
    <script src="js/contact.js"></script>

    <p>
        I'm also available on these social media platforms:
    </p>
    <div class="social-icons">
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="https://www.instagram.com/gorbiel.photography" target="_blank" rel="noopener noreferrer" class="fa fa-instagram"></a>
    </div>
</main>
<footer id="footer">
    © 2024 Copyright: Gabriel Kania | All rights reserved
</footer>
</body>
</html>
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

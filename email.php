<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$headers = "From: " . $email . "\r\n" .
           "Reply-To: " . $email . "\r\n" .
           "X-Mailer: PHP/" . phpversion();
$parameters = "-f " . $email;

if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    mail("mvaughan404@gmail.com", "PORFOLIO SITE MESSAGE **** MVAUGHAN", $message, $headers, $parameters);
    header('Location: ./index.html');
} else {
    echo "The email address is not valid. <a href=\"./index.html\">home</a>";
}
?>
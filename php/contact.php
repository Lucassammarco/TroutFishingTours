<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Honeypot (anti-spam)
    if (!empty($_POST["website"])) {
        exit; // Bot detectado
    }

    // Sanitizar datos
    $name = htmlspecialchars(trim($_POST["name"] ?? ""));
    $email = filter_var(trim($_POST["email"] ?? ""), FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"] ?? ""));

    // Validación básica
    if (!$name || !$email || !$message) {
        echo "Please complete all required fields.";
        exit;
    }

    // ⚠️ CAMBIAR por el email REAL del dominio en Hostinger
    $to = "info@troutfishingtours.com";
    $subject = "New message from website contact form";

    $body = "
    You have received a new message from the website:

    Name: $name
    Email: $email

    Message:
    $message
    ";

    // IMPORTANTE: En muchos hostings el From debe ser del mismo dominio
    $headers = "From: info@troutfishingtours.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        header("Location: /thank-you.html");
        exit;
    } else {
        echo "There was an error sending your message. Please try again later.";
    }

} else {
    header("Location: /contact.html");
    exit;
}

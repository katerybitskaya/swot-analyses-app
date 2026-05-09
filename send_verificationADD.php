<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$input = json_decode(file_get_contents('php://input'), true);

if (!$input || !isset($input['email']) || !isset($input['code'])) {
    echo json_encode(['success' => false, 'error' => 'Invalid input']);
    exit;
}

$email = $input['email'];
$code = $input['code'];

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'your-email@gmail.com';
    $mail->Password   = 'your-app-password';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom('noreply@yoursite.com', 'Your Site');
    $mail->addAddress($email);

    $mail->isHTML(false);
    $mail->Subject = 'Your Verification Code';
    $mail->Body    = "Your verification code is: " . $code . "\n\nThis code will expire in 10 minutes.";

    $mail->send();
    echo json_encode(['success' => true]);
} catch (Exception $e) {
    error_log("Mailer Error: {$mail->ErrorInfo}");
    echo json_encode(['success' => false, 'error' => 'Failed to send email']);
}
?>
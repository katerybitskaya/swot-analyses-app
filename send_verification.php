<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input || !isset($input['email']) || !isset($input['code'])) {
    echo json_encode(['success' => false, 'error' => 'Invalid input']);
    exit;
}

$email = $input['email'];
$code = $input['code'];

$to = $email;
$subject = "Your Verification Code";
$message = "Your verification code is: " . $code . "\n\nThis code will expire in 10 minutes.";
$headers = "From: noreply@yoursite.com\r\n";
$headers .= "Reply-To: noreply@yoursite.com\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => 'Failed to send email']);
}
?>
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

$data = json_decode(file_get_contents('php://input'), true);
if (!$data) $data = $_POST;

$to      = 'contact@keedcoltd.com'; // ← change to your email
$name    = htmlspecialchars($data['name']    ?? 'Unknown');
$email   = htmlspecialchars($data['email']   ?? '');
$phone   = htmlspecialchars($data['phone']   ?? '');
$company = htmlspecialchars($data['company'] ?? '');
$service = htmlspecialchars($data['service'] ?? '');
$message = htmlspecialchars($data['message'] ?? '');

$subject = "New Enquiry from $name – KeedCo Website";

$body = "
New enquiry from the KeedCo website:

Name:    $name
Email:   $email
Phone:   $phone
Company: $company
Service: $service

Message:
$message
";

$headers  = "From: noreply@keedcoltd.com\r\n";
$headers .= "Reply-To: $email\r\n";

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Mail failed']);
}

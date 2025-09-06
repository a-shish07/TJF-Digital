<?php
/**
 * TJF Digital Contact Form Handler
 * Production-ready PHP email handler with security best practices
 */

// Security Headers
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');

// CORS Headers (adjust origin in production)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Max-Age: 86400');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'error' => 'Method not allowed. Only POST requests are accepted.'
    ]);
    exit();
}

// Rate limiting (basic implementation)
session_start();
$current_time = time();
$time_window = 60; // 1 minute
$max_requests = 3; // Maximum 3 submissions per minute

if (!isset($_SESSION['form_submissions'])) {
    $_SESSION['form_submissions'] = [];
}

// Clean old submissions
$_SESSION['form_submissions'] = array_filter(
    $_SESSION['form_submissions'],
    function($timestamp) use ($current_time, $time_window) {
        return ($current_time - $timestamp) < $time_window;
    }
);

// Check rate limit
if (count($_SESSION['form_submissions']) >= $max_requests) {
    http_response_code(429);
    echo json_encode([
        'success' => false,
        'error' => 'Too many submissions. Please wait a moment before trying again.'
    ]);
    exit();
}

// Get and validate input
$input = file_get_contents('php://input');
if (empty($input)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'No data received.'
    ]);
    exit();
}

$data = json_decode($input, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => 'Invalid JSON format.'
    ]);
    exit();
}

// Validation function
function validateAndSanitize($data) {
    $errors = [];
    $clean_data = [];
    
    // Name validation
    if (empty($data['name']) || !isset($data['name'])) {
        $errors[] = 'Name is required.';
    } else {
        $name = trim($data['name']);
        if (strlen($name) < 2) {
            $errors[] = 'Name must be at least 2 characters long.';
        } elseif (strlen($name) > 50) {
            $errors[] = 'Name cannot exceed 50 characters.';
        } elseif (!preg_match('/^[a-zA-Z\s]+$/', $name)) {
            $errors[] = 'Name can only contain letters and spaces.';
        } else {
            $clean_data['name'] = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
        }
    }
    
    // Email validation
    if (empty($data['email']) || !isset($data['email'])) {
        $errors[] = 'Email is required.';
    } else {
        $email = trim($data['email']);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors[] = 'Please enter a valid email address.';
        } elseif (strlen($email) > 100) {
            $errors[] = 'Email address too long.';
        } else {
            $clean_data['email'] = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
        }
    }
    
    // Phone validation (optional)
    $phone = isset($data['phone']) ? trim($data['phone']) : '';
    if (!empty($phone)) {
        if (!preg_match('/^[\+]?[0-9\s\-\(\)]{10,15}$/', $phone)) {
            $errors[] = 'Please enter a valid phone number.';
        } else {
            $clean_data['phone'] = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
        }
    } else {
        $clean_data['phone'] = '';
    }
    
    // Service validation (optional)
    $service = isset($data['service']) ? trim($data['service']) : '';
    if (!empty($service) && strlen($service) > 100) {
        $errors[] = 'Service selection too long.';
    } else {
        $clean_data['service'] = htmlspecialchars($service, ENT_QUOTES, 'UTF-8');
    }
    
    // Message validation
    if (empty($data['message']) || !isset($data['message'])) {
        $errors[] = 'Message is required.';
    } else {
        $message = trim($data['message']);
        if (strlen($message) < 10) {
            $errors[] = 'Message must be at least 10 characters long.';
        } elseif (strlen($message) > 1000) {
            $errors[] = 'Message cannot exceed 1000 characters.';
        } else {
            $clean_data['message'] = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
        }
    }
    
    return ['errors' => $errors, 'data' => $clean_data];
}

// Validate the data
$validation = validateAndSanitize($data);

if (!empty($validation['errors'])) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => implode(' ', $validation['errors'])
    ]);
    exit();
}

$clean_data = $validation['data'];

// Email configuration
$to_email = 'info@tjfdigital.com';
$from_email = 'info@tjfdigital.com'; // Use existing email account
$reply_to = $clean_data['email'];
$subject = 'New Contact Form Submission - TJF Digital';

// Create HTML email content
$html_message = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>New Contact Form Submission</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #3B82F6; color: white; padding: 20px; text-align: center; }
        .content { background-color: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .field strong { color: #3B82F6; }
        .footer { background-color: #e5e7eb; padding: 15px; text-align: center; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>TJF Digital Website</p>
        </div>
        <div class="content">
            <div class="field">
                <strong>Name:</strong><br>
                ' . $clean_data['name'] . '
            </div>
            <div class="field">
                <strong>Email:</strong><br>
                <a href="mailto:' . $clean_data['email'] . '">' . $clean_data['email'] . '</a>
            </div>';

if (!empty($clean_data['phone'])) {
    $html_message .= '
            <div class="field">
                <strong>Phone:</strong><br>
                <a href="tel:' . preg_replace('/[^0-9+]/', '', $clean_data['phone']) . '">' . $clean_data['phone'] . '</a>
            </div>';
}

if (!empty($clean_data['service'])) {
    $html_message .= '
            <div class="field">
                <strong>Service Interested In:</strong><br>
                ' . $clean_data['service'] . '
            </div>';
}

$html_message .= '
            <div class="field">
                <strong>Message:</strong><br>
                ' . nl2br($clean_data['message']) . '
            </div>
        </div>
        <div class="footer">
            <p>This email was sent from the TJF Digital contact form on ' . date('F j, Y \a\t g:i A') . '</p>
            <p>IP Address: ' . ($_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'Unknown') . '</p>
        </div>
    </div>
</body>
</html>';

// Create plain text version
$plain_message = "New Contact Form Submission - TJF Digital\n\n";
$plain_message .= "Name: " . $clean_data['name'] . "\n";
$plain_message .= "Email: " . $clean_data['email'] . "\n";
if (!empty($clean_data['phone'])) {
    $plain_message .= "Phone: " . $clean_data['phone'] . "\n";
}
if (!empty($clean_data['service'])) {
    $plain_message .= "Service: " . $clean_data['service'] . "\n";
}
$plain_message .= "Message: " . $clean_data['message'] . "\n\n";
$plain_message .= "Sent on: " . date('F j, Y \a\t g:i A') . "\n";
$plain_message .= "IP: " . ($_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'Unknown');

// Email headers
$headers = array();
$headers[] = "From: TJF Digital <" . $from_email . ">";
$headers[] = "Reply-To: " . $clean_data['name'] . " <" . $reply_to . ">";
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: multipart/alternative; boundary=\"boundary123\"";
$headers[] = "X-Mailer: PHP/" . phpversion();
$headers[] = "X-Priority: 3";

// Multipart email body
$email_body = "--boundary123\r\n";
$email_body .= "Content-Type: text/plain; charset=UTF-8\r\n";
$email_body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$email_body .= $plain_message . "\r\n\r\n";
$email_body .= "--boundary123\r\n";
$email_body .= "Content-Type: text/html; charset=UTF-8\r\n";
$email_body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$email_body .= $html_message . "\r\n\r\n";
$email_body .= "--boundary123--";

// Try to send email
$mail_sent = @mail($to_email, $subject, $email_body, implode("\r\n", $headers));

if ($mail_sent) {
    // Add to rate limiting
    $_SESSION['form_submissions'][] = $current_time;
    
    // Log successful submission (optional)
    $log_entry = date('Y-m-d H:i:s') . " - SUCCESS - " . $clean_data['email'] . " - " . $clean_data['name'] . "\n";
    @file_put_contents('contact_log.txt', $log_entry, FILE_APPEND | LOCK_EX);
    
    // Send auto-reply to customer
    $auto_reply_subject = "Thank you for contacting TJF Digital!";
    $auto_reply_message = '
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #3B82F6; color: white; padding: 20px; text-align: center; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Thank You!</h1>
            </div>
            <div style="padding: 20px;">
                <p>Dear ' . $clean_data['name'] . ',</p>
                <p>Thank you for reaching out to TJF Digital! We have received your message and will get back to you within 24 hours.</p>
                <p>Here\'s what you submitted:</p>
                <ul>
                    <li><strong>Service:</strong> ' . ($clean_data['service'] ?: 'Not specified') . '</li>
                    <li><strong>Message:</strong> ' . substr($clean_data['message'], 0, 100) . '...</li>
                </ul>
                <p>Best regards,<br><strong>TJF Digital Team</strong></p>
                <p><small>Phone: +91 8340429258 | Email: info@tjfdigital.com</small></p>
            </div>
        </div>
    </body>
    </html>';
    
    $auto_reply_headers = array();
    $auto_reply_headers[] = "From: TJF Digital <" . $from_email . ">";
    $auto_reply_headers[] = "MIME-Version: 1.0";
    $auto_reply_headers[] = "Content-Type: text/html; charset=UTF-8";
    
    @mail($clean_data['email'], $auto_reply_subject, $auto_reply_message, implode("\r\n", $auto_reply_headers));
    
    // Success response
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your message has been sent successfully. We will get back to you within 24 hours.'
    ]);
    
} else {
    // Log failed submission
    $log_entry = date('Y-m-d H:i:s') . " - FAILED - " . $clean_data['email'] . " - " . $clean_data['name'] . "\n";
    @file_put_contents('contact_log.txt', $log_entry, FILE_APPEND | LOCK_EX);
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Sorry, there was an error sending your message. Please try again or contact us directly at info@tjfdigital.com'
    ]);
}

// Clean up session if needed
if (count($_SESSION['form_submissions']) > 10) {
    $_SESSION['form_submissions'] = array_slice($_SESSION['form_submissions'], -5);
}
?>
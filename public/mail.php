<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Disable error reporting for production, but you can enable it for debugging
error_reporting(0);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON data from the request body
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (!$data) {
        $data = $_POST; // Fallback to standard POST if JSON fails
    }

    $fullName = isset($data['fullName']) ? strip_tags($data['fullName']) : 'Not provided';
    $email = isset($data['email']) ? strip_tags($data['email']) : 'Not provided';
    $mobile = isset($data['mobile']) ? strip_tags($data['mobile']) : 'Not provided';
    $project = isset($data['project']) ? strip_tags($data['project']) : 'Radiance Eternity';

    // REPLACE THIS WITH YOUR CLIENT'S EMAIL ADDRESS
    $to = "sudharsan0727@gmail.com"; 
    
    $subject = "New Lead Enquiry - " . $project;

    // Email content (HTML)
    $message = "
    <html>
    <head>
    <title>New Lead Enquiry</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { padding: 20px; border: 1px solid #ddd; border-radius: 5px; max-width: 600px; }
        .header { background: #9b7a44; color: white; padding: 10px 20px; border-radius: 5px 5px 0 0; }
        .content { padding: 20px; }
        .field { margin-bottom: 10px; }
        .label { font-weight: bold; color: #9b7a44; }
    </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>New Website Lead</h2>
            </div>
            <div class='content'>
                <p>You have received a new enquiry from the <strong>$project</strong> landing page.</p>
                <div class='field'><span class='label'>Name:</span> $fullName</div>
                <div class='field'><span class='label'>Email:</span> $email</div>
                <div class='field'><span class='label'>Phone:</span> $mobile</div>
                <div class='field'><span class='label'>Project:</span> $project</div>
                <hr>
                <p><small>This email was sent automatically from your website contact form.</small></p>
            </div>
        </div>
    </body>
    </html>
    ";

    // Email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: Radiance Eternity <noreply@radiancedevelopers.com>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["status" => "success", "message" => "Mail sent successfully"]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Failed to send mail"]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
}
?>

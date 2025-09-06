<?php
/**
 * Simple PHP Test File - DELETE THIS AFTER TESTING
 * Visit: yourdomain.com/test-php.php to verify PHP is working
 */
?>
<!DOCTYPE html>
<html>
<head>
    <title>PHP Test - TJF Digital</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; background: #f5f5f5; }
        .container { background: white; padding: 30px; border-radius: 8px; max-width: 600px; margin: 0 auto; }
        .success { color: #059669; background: #d1fae5; padding: 15px; border-radius: 6px; margin: 20px 0; }
        .info { color: #0369a1; background: #e0f2fe; padding: 15px; border-radius: 6px; margin: 20px 0; }
        .warning { color: #d97706; background: #fef3c7; padding: 15px; border-radius: 6px; margin: 20px 0; }
        h1 { color: #3B82F6; }
        pre { background: #f3f4f6; padding: 15px; border-radius: 6px; overflow-x: auto; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🚀 TJF Digital - PHP Setup Test</h1>
        
        <div class="success">
            <strong>✅ SUCCESS!</strong> PHP is working correctly on your server.
        </div>
        
        <div class="info">
            <strong>📋 Server Information:</strong><br>
            PHP Version: <strong><?php echo phpversion(); ?></strong><br>
            Server: <strong><?php echo $_SERVER['SERVER_SOFTWARE'] ?? 'Unknown'; ?></strong><br>
            Date/Time: <strong><?php echo date('F j, Y g:i A T'); ?></strong>
        </div>
        
        <?php if (function_exists('mail')): ?>
        <div class="success">
            <strong>✅ Email Function:</strong> mail() function is available - Contact form will work!
        </div>
        <?php else: ?>
        <div class="warning">
            <strong>⚠️ Email Function:</strong> mail() function not available - Contact support
        </div>
        <?php endif; ?>
        
        <?php if (extension_loaded('json')): ?>
        <div class="success">
            <strong>✅ JSON Support:</strong> JSON extension loaded - API will work!
        </div>
        <?php else: ?>
        <div class="warning">
            <strong>⚠️ JSON Support:</strong> JSON extension missing - Contact support
        </div>
        <?php endif; ?>
        
        <div class="info">
            <strong>🌐 Environment Details:</strong>
            <pre><?php
                echo "Document Root: " . ($_SERVER['DOCUMENT_ROOT'] ?? 'Unknown') . "\n";
                echo "Script Path: " . (__FILE__ ?? 'Unknown') . "\n";
                echo "Current URL: " . (isset($_SERVER['HTTPS']) ? 'https' : 'http') . '://' . ($_SERVER['HTTP_HOST'] ?? 'localhost') . ($_SERVER['REQUEST_URI'] ?? '/') . "\n";
                echo "PHP Extensions: " . implode(', ', array_slice(get_loaded_extensions(), 0, 10)) . "...\n";
            ?></pre>
        </div>
        
        <div class="warning">
            <strong>🔒 IMPORTANT:</strong> Delete this test file (test-php.php) after confirming everything works!
        </div>
        
        <div class="info">
            <strong>📝 Next Steps:</strong><br>
            1. Your PHP environment is ready<br>
            2. Upload your contact-handler.php file<br>
            3. Test your contact form<br>
            4. Delete this test file for security
        </div>
    </div>
</body>
</html>
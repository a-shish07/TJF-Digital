# TJF Digital - Hostinger Deployment Guide

## 🚀 Complete Setup Instructions

### 1. Build Your React App
```bash
npm run build
```

### 2. Upload to Hostinger
1. **Access Hostinger File Manager** or use FTP
2. **Navigate to** `public_html` directory
3. **Upload ALL contents** from your `dist` folder to `public_html`
4. **Additionally upload** these files from your `public` folder:
   - `contact-handler.php` 
   - `.htaccess`

### 3. Final File Structure on Hostinger
```
public_html/
├── index.html                 (from dist folder)
├── assets/                    (from dist folder)
│   ├── index-xxx.css
│   └── index-xxx.js
├── contact-handler.php        (from public folder)
├── .htaccess                 (from public folder)
└── vite.svg                  (from dist folder)
```

### 4. Test Your Contact Form
1. Visit your website: `https://yourdomain.com`
2. Go to Contact page
3. Fill out and submit the form
4. Check your email at `info@tjfdigital.com`

## 🔧 Configuration Details

### PHP Handler Features
✅ **Security**: Input validation, rate limiting, CSRF protection  
✅ **Email**: HTML + Plain text emails with professional formatting  
✅ **Auto-reply**: Customers get automatic thank you email  
✅ **Logging**: All submissions logged for tracking  
✅ **Error Handling**: Graceful error messages  

### Email Configuration
- **To**: info@tjfdigital.com
- **From**: noreply@tjfdigital.com (you can change this)
- **Reply-To**: Customer's email address
- **Auto-Reply**: Sent to customer automatically

### Rate Limiting
- **Limit**: 3 submissions per minute per session
- **Protection**: Prevents spam and abuse

## 🛠️ Customization Options

### Change Email Address
Edit `contact-handler.php` line 125:
```php
$to_email = 'your-new-email@tjfdigital.com';
```

### Change Auto-Reply Message
Edit `contact-handler.php` lines 203-235 to customize the thank you email.

### Adjust Rate Limiting
Edit `contact-handler.php` lines 27-28:
```php
$time_window = 60; // seconds
$max_requests = 3; // max submissions in time window
```

## 🐛 Troubleshooting

### If Emails Don't Arrive
1. Check your spam/junk folder
2. Verify `info@tjfdigital.com` exists in your Hostinger email setup
3. Check Hostinger's PHP error logs in cPanel

### If Form Shows Errors
1. Check browser developer tools > Console for JavaScript errors
2. Verify all files uploaded correctly
3. Ensure PHP is enabled on your Hostinger plan

### If Contact Page Doesn't Load
1. Verify `.htaccess` file is uploaded
2. Check that all `dist` files are in `public_html`
3. Clear browser cache

## ✅ Production Checklist

- [ ] React app built with `npm run build`
- [ ] All `dist` folder contents uploaded to `public_html`
- [ ] `contact-handler.php` uploaded to `public_html`
- [ ] `.htaccess` uploaded to `public_html`
- [ ] Email `info@tjfdigital.com` exists in Hostinger
- [ ] Contact form tested and working
- [ ] Auto-reply email received
- [ ] Website loads correctly
- [ ] All routes working (Home, About, Services, Contact)

## 📧 Email Templates

Your emails will look professional with:
- **Company branding** (TJF Digital header)
- **Clean HTML formatting** with tables and styling
- **All form data** clearly displayed
- **Customer auto-reply** for better service
- **Timestamped submissions** for tracking

## 🔒 Security Features

- **Input sanitization** prevents XSS attacks
- **Rate limiting** prevents spam
- **Validation** ensures data quality
- **Session protection** prevents abuse
- **Error logging** for monitoring

---

**Support**: If you encounter any issues, check the browser console and Hostinger's error logs for detailed error messages.
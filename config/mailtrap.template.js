

export const WELCOME_MESSAGE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Abe Garage</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            border-top: 5px solid #d61c1c;
        }
        .header {
            background-color: #065986;
            color: white;
            padding: 15px;
            font-size: 22px;
            font-weight: bold;
            border-radius: 5px 5px 0 0;
        }
        .content {
            text-align: left;
            padding: 20px;
        }
        .highlight {
            color: #d61c1c;
            font-weight: bold;
        }
        .code-box {
            background-color: #065986;
            color: white;
            font-size: 22px;
            font-weight: bold;
            padding: 15px;
            border-radius: 10px;
            display: inline-block;
            margin: 20px 0;
        }
        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #555;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Welcome to Abe Garage</div>
        <div class="content">
            <p>Dear <span class="highlight">{name}</span>,</p>
            <p>We are excited to have you join our team at <strong>Abe Garage</strong>. You have been successfully registered as a <span class="highlight">{Position}</span> in our company.</p>
            <p>Below is your verification code. Please <span class="highlight">DO NOT SHARE IT</span> with anyone:</p>
            <div class="code-box">{password}</div>
            <p>You have <strong>24 hours</strong> to update your password.</p>
            <p>If you have any questions, feel free to reach out to our support team.</p>
        </div>
        <div class="footer">
            <p>Best regards,<br><strong>Abe Garage Team</strong></p>
        </div>
    </div>
</body>
</html>
`

export const CUSTOMER_PASSWORD = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Abe Garage</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            border-top: 5px solid #d61c1c;
        }
        .header {
            background-color: #065986;
            color: white;
            padding: 15px;
            font-size: 22px;
            font-weight: bold;
            border-radius: 5px 5px 0 0;
        }
        .content {
            text-align: left;
            padding: 20px;
        }
        .highlight {
            color: #d61c1c;
            font-weight: bold;
        }
        .code-box {
            background-color: #065986;
            color: white;
            font-size: 22px;
            font-weight: bold;
            padding: 15px;
            border-radius: 10px;
            display: inline-block;
            margin: 20px auto;
        }
        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #555;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Welcome to Abe Garage</div>
        <div class="content">
            <p>Dear <span class="highlight">{name}</span>,</p>
            <p>We are excited to welcome you to <strong>Abe Garage</strong>. You have been successfully registered as a valued customer. We look forward to providing you with the best car maintenance services.</p>
            <p>Below is your account password. Please <span class="highlight">DO NOT SHARE IT</span> with anyone:</p>
            <div class="code-box">{password}</div>
            <p>For security reasons, we recommend changing your password within <strong>24 hours</strong>.</p>
            <p>If you have any questions, feel free to reach out to our support team.</p>
        </div>
        <div class="footer">
            <p>Best regards,<br><strong>Abe Garage Team</strong></p>
        </div>
    </div>
</body>
</html>
`

export const FORGOT_PASSWORD = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            border-top: 5px solid #d61c1c;
        }
        .header {
            background-color: #065986;
            color: white;
            padding: 15px;
            font-size: 22px;
            font-weight: bold;
            border-radius: 5px 5px 0 0;
        }
        .content {
            text-align: left;
            padding: 20px;
        }
        .highlight {
            color: #d61c1c;
            font-weight: bold;
        }
        .button {
            display: inline-block;
            background-color: #d61c1c;
            padding: 10px 20px;
            width: 120px;
            text-decoration: none;
            font-size: 16px;
            border-radius: 5px;
            margin: 20px auto; 
            cursor: pointer;
            text-decoration: none;
        }
        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #555;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Reset Your Password</div>
        <div class="content">
            <p>Dear <span class="highlight">{Name}</span>,</p>
            <p>We received a request to reset your password for your Abe Garage account. If you made this request, click the link below to reset your password:</p>
            <a href="{reset_link}" class="button" style="color: #fff;">Reset Password</a>
            <p>If you did not request a password reset, <span class="highlight">no action is required</span>. Your account remains secure.</p>
            <p>For security reasons, this link will expire in <strong>1 hour</strong>.</p>
        </div>
        <div class="footer">
            <p>Best regards,<br><strong>Abe Garage Team</strong></p>
        </div>
    </div>
</body>
</html>
 `

export const ORDER_CONFIRMATION = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Repair Invoice - ABE GARAGE</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            border-top: 5px solid #d61c1c;
        }
        .header {
            background-color: #065986;
            color: white;
            padding: 15px;
            font-size: 22px;
            font-weight: bold;
            border-radius: 5px 5px 0 0;
        }
        .content {
            text-align: left;
            padding: 20px;
        }
        .highlight {
            color: #d61c1c;
            font-weight: bold;
        }
        .order-list {
            background-color: #f8f8f8;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .order-item {
            margin-bottom: 10px;
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }
        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #555;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">ABE GARAGE</div>
        <div class="content">
            <p>Dear <span class="highlight">{name}</span>,</p>
            <p>We have completed the repairs on your vehicle. Below is a summary of the service:</p>
            <div class="order-list">
                <div class="order-item">
                    <p><strong>Service Description:</strong> Car Repair & Maintenance</p>
                    <p><strong>Cost:</strong> <span class="highlight">{Price}</span></p>
                </div>
            </div>
            <p>If you have any questions or need further assistance, feel free to contact us.</p>
            <p>Thank you for choosing <strong>ABE GARAGE</strong>!</p>
        </div>
        <div class="footer">
            <p>Contact us: <a href="mailto:support@abegarage.com" style="color: #d61c1c; text-decoration: none;">support@abegarage.com</a> | Phone: +123 456 7890</p>
        </div>
    </div>
</body>
</html>


`
export const EMPLOYEE_FIRED = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employment Status Update</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            border-top: 5px solid #d61c1c;
        }
        .header {
            background-color: #065986;
            color: white;
            padding: 15px;
            font-size: 22px;
            font-weight: bold;
            border-radius: 5px 5px 0 0;
        }
        .content {
            text-align: left;
            padding: 20px;
        }
        .highlight {
            color: #d61c1c;
            font-weight: bold;
        }
        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #555;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Employment Status Update</div>
        <div class="content">
            <p>Dear <span class="highlight">{name}</span>,</p>
            <p>We regret to inform you that, effective immediately, your employment with <strong>Abe Garage</strong> has been terminated. This decision was made after careful consideration and aligns with company policies and operational needs.</p>
            <p>Please return any company property in your possession, including but not limited to keys, ID badges, and equipment, by <strong>{date}</strong>. If you have any questions regarding final payments, benefits, or exit procedures, please contact <strong>estifkebe08@gmail.com</strong>.</p>
            <p>We appreciate your contributions to the company and wish you the best in your future endeavors.</p>
        </div>
        <div class="footer">
            <p>Best regards,<br><strong>Abe Garage HR Team</strong></p>
        </div>
    </div>
</body>
</html>
`

export const WELLCOME_CUSTOMER = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Abe Garage</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            border-top: 5px solid #d61c1c;
        }
        .header {
            background-color: #065986;
            color: white;
            padding: 15px;
            font-size: 22px;
            font-weight: bold;
            border-radius: 5px 5px 0 0;
        }
        .content {
            text-align: left;
            padding: 20px;
        }
        .highlight {
            color: #d61c1c;
            font-weight: bold;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #d61c1c;
            color: white;
            text-decoration: none;
            font-weight: bold;
            border-radius: 5px;
            margin-top: 10px;
        }
        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #555;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Welcome to Abe Garage</div>
        <div class="content">
            <p>Dear <span class="highlight">{first_name} {last_name}</span>,</p>
            <p>Welcome to <strong>Abe Garage</strong>! We are thrilled to have you as part of our community. Your registration as a valued customer is now complete, and we look forward to serving you with our top-tier car maintenance and repair services.</p>
            <p>You can explore our services, book appointments, and stay updated on the latest offers.</p>
            <a href="{website_url}" class="button" style="color: #fff;"> Visit Our Website</a>
            <p>If you need assistance, our support team is available to help.</p>
        </div>
        <div class="footer">
            <p>Best regards,<br><strong>Abe Garage Team</strong></p>
        </div>
    </div>
</body>
</html>
` 

export const CUSTOMER_VEHICLE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Vehicle Added to Your Collection</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            border-top: 5px solid #d61c1c;
        }
        .header {
            background-color: #065986;
            color: white;
            padding: 15px;
            font-size: 22px;
            font-weight: bold;
            border-radius: 5px 5px 0 0;
        }
        .content {
            text-align: left;
            padding: 20px;
        }
        .highlight {
            color: #d61c1c;
            font-weight: bold;
        }
        .vehicle-info {
            background-color: #f8f8f8;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #555;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">New Vehicle Added</div>
        <div class="content">
            <p>Dear <span class="highlight">{first_name} {last_name}</span>,</p>
            <p>We’re excited to inform you that a new vehicle has been successfully added to your collection at <strong>Abe Garage</strong>.</p>
            <div class="vehicle-info">
                <p><strong>Year:</strong> {year}</p>
                <p><strong>Make:</strong> {make}</p>
                <p><strong>Model:</strong> {model}</p>
                <p><strong>Type:</strong> {type}</p>
                <p><strong>Mileage:</strong> {mileage} miles</p>
                <p><strong>Color:</strong> {color}</p>
                <p><strong>Tag:</strong> {tag}</p>
                <p><strong>Serial Number:</strong> {serial_number}</p>
            </div>
            <p>If you have any questions, feel free to contact our support team.</p>
        </div>
        <div class="footer">
            <p>Best regards,<br><strong>Abe Garage Team</strong></p>
        </div>
    </div>
</body>
</html>`

export const ORDER_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Abe Garage Order Summary</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); text-align: center; border-top: 5px solid #d61c1c; }
        .header { background-color: #065986; color: white; padding: 15px; font-size: 22px; font-weight: bold; border-radius: 5px 5px 0 0; }
        .content { text-align: left; padding: 20px; }
        .highlight { color: #d61c1c; font-weight: bold; }
        .order-list { background-color: #f8f8f8; padding: 15px; border-radius: 8px; margin: 20px 0; }
        .order-item { margin-bottom: 10px; padding: 10px; border-bottom: 1px solid #ddd; }
        .footer { margin-top: 20px; font-size: 14px; color: #555; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Your Order Summary</div>
        <div class="content">
            <p>Dear <span class="highlight">{first_name} {last_name}</span>,</p>
            <p>Thank you for your recent order with <strong>Abe Garage</strong>. Below is the summary of your requested services:</p>
            <div class="order-list">{ordersList}</div>
            <p>your total cost is <strong>{cost}</strong></p>
            <p>If you have any questions about your order, feel free to reach out to our support team.</p>
        </div>
        <div class="footer">
            <p>Best regards,<br><strong>Abe Garage Team</strong></p>
        </div>
    </div>
</body>
</html>`;

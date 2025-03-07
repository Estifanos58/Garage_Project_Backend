

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
            display: flex;
            flex-direction: column;
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
            <p>Dear <span class="highlight">{Customer Name}</span>,</p>
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
            color: white;
            padding: 10px 20px;
            width: 120px;
            text-decoration: none;
            font-size: 16px;
            border-radius: 5px;
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
        <div class="header">Reset Your Password</div>
        <div class="content">
            <p>Dear <span class="highlight">{Name}</span>,</p>
            <p>We received a request to reset your password for your Abe Garage account. If you made this request, click the link below to reset your password:</p>
            <p><a href="{reset_link}" class="button">Reset Password</a></p>
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
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Repair Invoice - ABE GARAGE</title>
</head>
<body style="margin: 0; padding: 0; background-color: rgb(240, 240, 240);">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width: 600px; background-color: rgb(255, 255, 255); font-family: Arial, sans-serif;">
        <tr>
            <td style="background-color: rgb(200, 220, 255); color: rgb(220, 50, 50); padding: 20px; text-align: center; font-size: 24px; font-weight: bold;">
                ABE GARAGE
            </td>
        </tr>
        <tr>
            <td style="padding: 20px; text-align: left;">
                <p style="font-size: 18px; color: rgb(50, 50, 50);">Dear <strong>{name}</strong>,</p>
                <p style="font-size: 16px; color: rgb(80, 80, 80);">We have completed the repairs on your vehicle. Below is a summary of the service:</p>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="10" border="0" style="border-collapse: collapse;">
                    <tr style="background-color: rgb(230, 230, 230);">
                        <td style="font-weight: bold; color: rgb(50, 50, 50);">Service Description</td>
                        <td style="font-weight: bold; color: rgb(50, 50, 50); text-align: right;">Cost</td>
                    </tr>
                    <tr>
                        <td>Car Repair & Maintenance</td>
                        <td style="text-align: right; color: rgb(220, 50, 50);"><strong>{Price}</strong></td>
                    </tr>
                </table>
                <p style="font-size: 16px; color: rgb(80, 80, 80);">If you have any questions or need further assistance, feel free to contact us.</p>
                <p style="font-size: 16px; color: rgb(80, 80, 80);">Thank you for choosing <strong>ABE GARAGE</strong>!</p>
            </td>
        </tr>
        <tr>
            <td style="background-color: rgb(200, 220, 255); color: rgb(50, 50, 50); text-align: center; padding: 15px; font-size: 14px;">
                Contact us: <a href="mailto:support@abegarage.com" style="color: rgb(255, 100, 100); text-decoration: none;">support@abegarage.com</a> | Phone: +123 456 7890
            </td>
        </tr>
    </table>
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
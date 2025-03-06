export const PASSWORD_VERIFICATION = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div style="max-width: 500px; margin: 10px auto;">
        <h1 style="text-align: center; color: rgba(6, 130, 6, 0.751); font-family: 'Courier New'; background-color: rgba(0, 0, 0, 0.24); padding: 10px; ">Wellcome !</h1>
        <div style="max-width: 700px; margin: 20px auto;">
            <p style="margin: 15px 0px; font-family: 'Courier New'; letter-spacing: .5px; font-size: 16px;"> This is a message from Abe Garage to Inform you that you have be register in our Company
                and we hope that you will find your time here with us great and hope to see you soon.</p>
        <p style="font-size: 16px; font-family: 'Courier New';">- The code below is you password and please <span style="color: red; font-weight: bold;">!DON'T SHARE IT</span></p>
        <div style="margin: 35px auto;padding: 15px; border-radius: 15px; font-size: 25px; text-align: center; background-color: rgba(7, 199, 7, 0.422); width: 150px; color: #fff;">
            {password}
        </div>
        <p style="font-family: 'Courier New'; font-size: 16px;">You have 24 hours to change your password.</p>
            
        </div>
    </div>
</body>
</html>`

export const WELCOME_MESSAGE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div style="max-width: 500px; margin: 10px auto;">
        <h1 style="text-align: center; color: rgba(6, 89, 130, 0.751); font-family: 'Courier New'; background-color: rgba(0, 0, 0, 0.24); padding: 10px; ">Greating !</h1>
        <div style="max-width: 700px; margin: 20px auto;">
            <p style="margin: 15px 0px; font-family: 'Courier New'; letter-spacing: .5px; font-size: 16px;"> This is a message from Abe Garage to Inform you that you have be register in our Company
                as a <span style="font-weight: bold;">Customer</span>, We hope you will have a great time with us.</p>
        <p style="font-size: 16px; font-family: 'Courier New';">- The code below is your <span style="font-weight: bold;">Verification Code</span> and please <span style="color: red; font-weight: bold;">!DON'T SHARE IT</span></p>
        <div style="margin: 35px auto;padding: 15px; border-radius: 15px; font-size: 25px; text-align: center; background-color: rgba(6, 89, 130, 0.751); width: 150px; color: #fff;">
            {password}
        </div>
        <p style="font-family: 'Courier New'; font-size: 16px;">You have 24 hours to change your password.</p>
            
        </div>
    </div>
</body>
</html>`

export const CUSTOMER_PASSWORD = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div style="max-width: 500px; margin: 10px auto;">
        <h1 style="text-align: center; color: rgba(6, 89, 130, 0.751); font-family: 'Courier New'; background-color: rgba(0, 0, 0, 0.24); padding: 10px; ">Greating !</h1>
        <div style="max-width: 700px; margin: 20px auto;">
            <p style="margin: 15px 0px; font-family: 'Courier New'; letter-spacing: .5px; font-size: 16px;"> This is a message from Abe Garage to Inform you that you have be register in our Company
                as a <span style="font-weight: bold;">Customer</span>, We hope you will have a great time with us.</p>
        <p style="font-size: 16px; font-family: 'Courier New';">- The code below is your <span style="font-weight: bold;">Password</span> and please <span style="color: red; font-weight: bold;">!DON'T SHARE IT</span></p>
        <div style="margin: 35px auto;padding: 15px; border-radius: 15px; font-size: 25px; text-align: center; background-color: rgba(6, 89, 130, 0.751); width: 150px; color: #fff;">
            {password}
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
    <title>Document</title>
</head>
<body>
    <div style="max-width: 500px; margin: 10px auto;">
        <h1 style="text-align: center; color: rgba(6, 89, 130, 0.751); font-family: 'Courier New'; background-color: rgba(0, 0, 0, 0.24); padding: 10px; ">Forget Password</h1>
        <div style="max-width: 700px; margin: 20px auto;">
            <p style="margin: 15px 0px; font-family: 'Courier New'; letter-spacing: .5px; font-size: 16px;"> This a message from ABE GARAGE to inform you someone has sent a Forgot Passwrod with your email address. <span style="background-color: rgba(202, 66, 28, 0.63)">If you was not the one who requested it you don't have to do anything. </span></p>

        <a href={hash} style="margin: 30px; font-family: 'Courier New';">This is the link you need to chage you password</a>
        <p style="font-family: 'Courier New'; font-size: 16px;">You have 1 hour to change your password.</p>
            
        </div>
    </div>
</body>
</html> `

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
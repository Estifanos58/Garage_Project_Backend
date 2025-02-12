export const WELCOME_MESSAGE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 style="text-align: center; color: rgba(6, 130, 6, 0.751); font-family: 'Courier New';">Wellcome {first_name}</h1>
    <div style="max-width: 700px; margin: 20px auto;">
        <p style="margin: 15px 0px; font-family: 'Courier New'; letter-spacing: .5px; font-size: 16px;"> This is a message from Abe Garage to Inform you that you have be register as {role} in our Company
            and we hope that you will find your time here with us great and hope to see you soon.</p>
       <p style="font-size: 16px; font-family: 'Courier New';">- The code below is you password and please <span style="color: red; font-weight: bold;">!DON'T SHARE IT</span></p>
       <div style="margin: 35px auto;padding: 15px; border-radius: 15px; font-size: 25px; text-align: center; background-color: rgba(7, 199, 7, 0.422); width: 150px; color: #fff;">
        {password}
       </div>
       <p style="font-family: 'Courier New'; font-size: 16px;">You have 24 hours to change your password.</p>
        
    </div>

</body>
</html>`
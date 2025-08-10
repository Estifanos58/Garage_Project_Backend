import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();

export const sender = process.env.MAIL_SENDER || 'ABE GARAGE <no-reply@gmail.com>';

// In production we do NOT initialize the real transport to avoid expired OAuth token errors.
// The util/emails.js file already skips sending in production; here we just provide a safe stub.
let transport;

if (process.env.NODE_ENV === 'production') {
	transport = {
		sendMail: async () => {
			// This should never be called because util/emails.js short-circuits in production.
			throw new Error('Email transport disabled in production (OAuth2 maintenance avoided).');
		}
	};
} else {
	const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
	const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
	const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;
	const REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

	const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
	if (REFRESH_TOKEN) {
		oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
	}

	let accessTokenValue;
	try {
		// googleapis may return an object or string depending on version; normalize.
		const at = await oAuth2Client.getAccessToken();
		accessTokenValue = typeof at === 'string' ? at : at?.token;
	} catch (err) {
		console.error('Failed to obtain Gmail OAuth2 access token (continuing).', err?.message || err);
	}

	transport = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			type: 'OAuth2',
			user: process.env.GMAIL_USER || 'estifkebe08@gmail.com',
			clientId: CLIENT_ID,
			clientSecret: CLIENT_SECRET,
			refreshToken: REFRESH_TOKEN,
			accessToken: accessTokenValue,
		},
	});
}

export { transport };
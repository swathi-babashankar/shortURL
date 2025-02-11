
const {OAuth2Client} = require("google-auth-library");

export default function auth() {
    const client = new OAuth2Client();
    async function verify() {
      const ticket = await client.verifyIdToken({
          idToken: token,
          audience: process.env.WEB_CLIENT_ID,  // Specify the WEB_CLIENT_ID of the app that accesses the backend
          // Or, if multiple clients access the backend:
          //[WEB_CLIENT_ID_1, WEB_CLIENT_ID_2, WEB_CLIENT_ID_3]
      });
      const payload = ticket.getPayload();
      const userid = payload['sub'];
      // If the request specified a Google Workspace domain:
      // const domain = payload['hd'];
    }
    verify().catch(console.error);
}
// ProjectId shorturl-450406
// client id 997255180107-0rqj02e84b9qpftnc2psg3cl8r0na44e.apps.googleusercontent.com

const {OAuth2Client} = require("google-auth-library");

export default function auth() {
    const googleAuth = new OAuth2Client({
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    })
}
// ProjectId shorturl-450406
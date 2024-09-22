export const oktaConfig = {
    clientId: '0oaisdo1meoPqdTzh5d7',
    issuer: 'https://dev-60899062.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}
import NextAuth from "next-auth"

export default NextAuth({

    providers: [

        // hazelbase provider

        {
            id: 'hazelbase',
            name: 'Email',
            type: 'oauth',
            version: '2.0',
            authorizationUrl: 'https://api.hazelbase.com/oidc/auth?response_type=code',
            requestTokenUrl: 'https://api.hazelbase.com/oidc/auth',
            accessTokenUrl: 'https://api.hazelbase.com/oidc/token',
            wellKnown: 'https://api.hazelbase.com/oidc/.well-known/openid-configuration',
            profileUrl: 'https://api.hazelbase.com/oidc/me',
            scope: 'openid profile name email',
            protection: 'pkce',
            pkce: {
                required: true
            },
            token_endpoint_auth_method: "none",
            clientId: process.env.HAZELBASE_CLIENT_ID,
            params: {
                grant_type: 'authorization_code',
            },
            profile(profile) {
                return {
                    id: profile.sub,
                    ...profile,
                };
            },
        }

    ]
})
export { };

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_CMU_OAUTH_URL: url;
        }
    }
}
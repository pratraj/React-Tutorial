
const APP_ROUTER = {
    LANDING: '/',
    LOGIN: 'login',
    SIGN_UP: 'sign-up',
    DASHBOARD: 'dashboard',
    DASHBOARD_MODULE: 'dashboard/*',
    WILD_CARD_ROUTE: '*'
}

const DASHBOARD_ROUTER = {
    LANDING: '',
    GREETINGS: 'greet',
    WILD_CARD_ROUTE: '*'
}

export { APP_ROUTER, DASHBOARD_ROUTER };
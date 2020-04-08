const defaultRoute = '/';
const configureRoute = `${defaultRoute}configure`;

export default {
    getMain: () => defaultRoute,
    getGameScreen: ()=> `${configureRoute}/game`,
    getConfigureScreen: () => configureRoute,
    getEndScreen: () => `${configureRoute}/game/end`
}
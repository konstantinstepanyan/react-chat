import {CHAT_ROUTE, LOGIN_ROUTE} from "./utils/consts.js";
import LoginPage from "./components/loginPage/loginPage.js";
import Chat from "./components/chat/chat.js";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]
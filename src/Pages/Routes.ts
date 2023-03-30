import { Chat } from "./chat/ogranoids/Chat"
import { Home } from "./home/ogranoids/Home"
import { Login } from "./login/organoids/Login"
import { Registration } from "./registration/organoids/Registration"
import { Search } from "./search/ogranoids/Search"
import { User } from "./user/ogranoids/user"


export const Pages = [
    {
        link: '/Home/Top',
        title: 'Главная',
        component: Home,
    },
    {
        link: 'Search',
        title: 'Поиск',
        component: Search,
    },
    {
        link: 'Chat',
        title: 'Чат',
        component: Chat,
    },
]

export const PagesUser = [
    {
        link: 'User',
        title: 'Пользователь',
        component: User,
    },
    {
        link: 'Login',
        title: 'Вход',
        component: Login,
    },
    {
        link: 'Registration',
        title: 'Регистрация',
        component: Registration,
    },
]

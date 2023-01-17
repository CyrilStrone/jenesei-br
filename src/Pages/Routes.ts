
import { Home } from './Home/Ogranoids/home'
import { User } from './User/Ogranoids/User'
import { Search } from './Search/Ogranoids/Search'
import { Chat } from './Chat/Ogranoids/Chat'
import { Login } from './Login/Organoids/Login'
import { Registration } from './Registration/Organoids/Registration'

export const Pages = [
    {
        link: 'Home',
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

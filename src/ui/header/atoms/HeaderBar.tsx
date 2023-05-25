import '../styles/HeaderBar.css'
import Menu from '../../../assets/header/Menu.svg'
import Chat from '../../../assets/header/Chat.svg'
import Profile from '../../../assets/header/Profile.svg'
import { useEffect, useRef, useState } from 'react';
import { HeaderBarMenu } from './HeaderBarMenu';
import { HeaderBarChat } from './HeaderBarChat';
import { HeaderBarProfile } from './HeaderBarProfile';
import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { useStore } from 'effector-react'
import { $userValue } from '../../functions/Hooks'
import { ApiImage } from '../../functions/AxiosInstance';

export const HeaderBar = () => {
    const userValue = useStore($userValue);
    const rootEl = useRef(null);
    const [list, setList] = useState<any>([
        { className: "HeaderBar__Menu", image: Menu, show: false, id: 0, element: <HeaderBarMenu /> },
        { className: "HeaderBar__Chat", image: Chat, show: false, id: 1, element: <HeaderBarChat /> },
        { className: "HeaderBar__Profile", image: Profile, show: false, id: 2, element: <HeaderBarProfile /> }
    ])
    const styles = StyleSheet.create({
        fadeIn: {
            animationName: fadeIn,
            animationDuration: '0.5s'
        }
    })

    const toggleShow = (id: number) => {
        const newList = list.map((item: any) => {
            if (item.id === id) {
                return {
                    ...item,
                    show: !item.show
                }
            } else {
                return {
                    ...item,
                    show: false
                }
            }
        });
        setList(newList);
    };

    useEffect(() => {
        //@ts-ignore
        const onClick = (e: any) => rootEl.current.contains(e.target) || toggleShow(3);
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    useEffect(() => {
        //@ts-ignore
        const onScroll = (e: any) => rootEl.current.contains(e.target) || toggleShow(3);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
        <div className="HeaderBar" ref={rootEl}>
            {userValue && list.map((e: any) =>
                <div className="HeaderBar__Block">
                    <img src={e.id === 2 ? ApiImage + userValue.avatarPath : e.image} alt="Menu" className={e.id === 2 ? "HeaderBar__Avatar HeaderBar__Item" : "HeaderBar__Item"} id="HeaderBar" onClick={() => { toggleShow(e.id) }} />
                    <div style={{ display: e.show ? "flex" : "none" }} className={e.className + " " + "HeaderBar__Example__Bar" + " " + css(styles.fadeIn)}>
                        {e.element}
                    </div>
                </div>
            )}
        </div>
    );
};

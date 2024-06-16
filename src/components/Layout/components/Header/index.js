import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faRightToBracket,
    faSignOutAlt,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Menu from '~/components/MenuItem';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { MessengerIcon, UploadIcon, NotificationIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search'

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Viêt',
                    children: {
                        title: 'Languages',
                        data: [
                            {
                                type: 'language',
                                code: 'en',
                                title: 'English',
                            },
                            {
                                type: 'language',
                                code: 'vi',
                                title: 'Tiếng Viêt',
                            },
                        ],
                    },
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: 'feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

 

    // Handle logic.
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOutAlt} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok"></img>
                </div>
                
                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={200} content="Upload video" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <UploadIcon className="uploadICon" />
                                </button>
                            </Tippy>
                            <Tippy delay={200} content="Messenger" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <MessengerIcon className="messengerIcon" />
                                </button>
                            </Tippy>
                            <Tippy delay={200} content="Notifications" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <div className={cx('Notifications')}>12</div>
                                    <NotificationIcon className="notificationIcon" />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faRightToBracket} />}>
                                Log in
                            </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src={images.avatar2}
                                alt="ng.vinH"
                                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            ></Image>
                        ) : (
                            <button className={cx('iconVertical')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

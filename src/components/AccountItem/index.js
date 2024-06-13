import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={images.avatar2} alt="" />
            <div className={cx('info')}>
                <span>
                    <h4 className={cx('name')}>Nguyen Trong Hoai Vinh</h4>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </span>
                <p className={cx('username')}>@VinhNG</p>
            </div>
        </div>
    );
}

export default AccountItem;

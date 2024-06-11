import classNames from 'classnames/bind';
import styles from './PopperMenu.module.scss';
import Button from '../../Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item',
        {
            separate: data.separate
        }
    )
    return (
        <Button className={classes} onClick={onClick} leftIcon={data.icon} to={data.to} target="_blank">
            {data.title}
        </Button>
    );
}

export default MenuItem;
 
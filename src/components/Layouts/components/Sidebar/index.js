import classNames from 'classnames/bind';
import styles from './Sidebar.module.css';

const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <aside className={cx('wrapper')}>
            <h2>Sidebar</h2>
        </aside>
    );
};

export default Sidebar;

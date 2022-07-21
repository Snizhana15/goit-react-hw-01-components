import styles from './friendlist.module.css';
import propTypes from 'prop-types';
export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li className={styles.item} key={id}>
          <span className={isOnline ? styles.true : styles.false}></span>
          <img
            className={styles.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      isOnline: propTypes.bool,
      name: propTypes.string,
    })
  ),
};

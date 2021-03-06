import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src='https://images6.fanpop.com/image/photos/43800000/Dahyun-twice-jyp-ent-43823903-300-300.jpg'
        alt=''
      />
      <div>
        <strong>Kim Dahyun</strong>
        <p>
          <img src='icons/level.svg' alt='Level' />
          Level 1
        </p>
      </div>
    </div>
  );
}

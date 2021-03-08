import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

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
          Level {level}
        </p>
      </div>
    </div>
  );
}

import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src='https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/c/e/d/9/ced90033f283ea0311a6d3d45250d317-tb4.jpg'
        alt='João Liborio'
      />
      <div>
        <strong>João Liborio</strong>
        <p>
          <img src='icons/level.svg' alt='Level' />
          Level {level}
        </p>
      </div>
    </div>
  );
}

import styles from '../styles/components/ChallengeBox.module.css';
import { useContext } from 'react';
import { ChallegesContext } from '../contexts/ChallengesContext';

export function ChallengeBox() {
  const contextData = useContext(ChallegesContext);

  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 pontos</header>

          <main>
            <img src='icons/body.svg' alt='Body' />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </main>

          <footer>
            <button type='button' className={styles.challengeFailedButton}>
              Falhei
            </button>
            <button type='button' className={styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeBoxNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>

          <p>
            <img src='icons/level-up.svg' alt='Level Up' />
            <div>Avance de level completando desafios.</div>
          </p>
        </div>
      )}
    </div>
  );
}

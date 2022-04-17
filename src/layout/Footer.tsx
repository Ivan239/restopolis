import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Footer.module.css';
import Feedback from '../components/Feedback/Feedback';
import animation from './FooterAnimation.module.css';

function Footer() {
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  const handleFeedback = (): void => {
    setShowFeedback(!showFeedback);
  };

  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.left}>
          <h3 className={styles.title}>Contacts:</h3>
          <p className={styles.element} id={styles.phone}>
            +79810001122
          </p>
          <p className={styles.element} id={styles.email}>
            contact@restopolis.ru
          </p>
        </div>

        <div className={styles.right}>
          <h3 className={styles.title}>Info:</h3>
          <p className={styles.element} id={styles.address}>
            Innopolis, Universitetskaya st., 1/1
          </p>
          <p className={styles.element} id={styles.feedback} onClick={() => handleFeedback()}>
            Leave feedback
          </p>
          <CSSTransition in={showFeedback} timeout={300} classNames={animation} unmountOnExit>
            <Feedback handleCard={handleFeedback} />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import styles from './Section.module.scss';

function Section({ title, children }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <h3 className={styles.title__sub}>subtitle</h3>
      <div className={styles.box}>{children}</div>
    </section>
  );
}

export default Section;

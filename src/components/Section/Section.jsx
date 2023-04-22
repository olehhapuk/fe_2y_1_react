import './Section.css';

function Section({ title, children }) {
  return (
    <section className="section__container">
      <h2 className="section__title">{title}</h2>
      <div className="section__content">{children}</div>
    </section>
  );
}

export default Section;

import styles from "./styles.module.css";
export default function Section({
  children,
  cssClass,
}: {
  children: React.ReactNode;
  cssClass?: any;
}) {
  return (
    <section className={`${styles.section} ${cssClass}`}>
      <div className="container">
        <div className="row g-4">{children}</div>
      </div>
    </section>
  );
}

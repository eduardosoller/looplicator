import { secondary } from "../Fonts";
import Section from "../Section";
import style from "./styles.module.css";
export default function Stats() {
  const data = [
    { label: "packs", value: 456 },
    { label: "loops", value: 23456 },
    { label: "gigabytes", value: 5.6 },
    { label: "minutes", value: 456 },
  ];
  return (
    <Section cssClass={style.section}>
      {data.map((item) => {
        return (
          <div className="col-3 text-center" key={item.label}>
            <div className={`${secondary.className} ${style.number}`}>
              {item.value}
            </div>
            <div className={style.label}>{item.label}</div>
          </div>
        );
      })}
    </Section>
  );
}

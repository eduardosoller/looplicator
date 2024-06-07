import { getStats } from "@/services/stats";
import { secondary } from "../Fonts";
import Section from "../Section";
import style from "./styles.module.css";
export default async function Stats() {
  const { loops, seconds, gigabytes, packs } = await getStats();

  return (
    <Section cssClass={style.section}>
      <div className="col-6 col-md-3 text-center">
        <div className={`${secondary.className} ${style.number}`}>{packs}</div>
        <div className={style.label}>packs</div>
      </div>

      <div className="col-6 col-md-3 text-center">
        <div className={`${secondary.className} ${style.number}`}>{loops}</div>
        <div className={style.label}>loops</div>
      </div>

      <div className="col-6 col-md-3 text-center">
        <div className={`${secondary.className} ${style.number}`}>
          {Math.floor(seconds / 60)}
        </div>
        <div className={style.label}>minutes</div>
      </div>

      <div className="col-6 col-md-3 text-center">
        <div className={`${secondary.className} ${style.number}`}>
          {Math.floor(gigabytes)}
        </div>
        <div className={style.label}>gigabytes</div>
      </div>
    </Section>
  );
}

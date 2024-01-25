import "./styles.css";
import DownloadSvg from "../Svg/Download";
import StripeSvg from "../Svg/Stripe";
type Icons = "download" | "pay";
const getIcon = (iconName: Icons) => {
  switch (iconName) {
    case "download":
      return <DownloadSvg width={28} height={28} color="#121214" />;
    case "pay":
      return <StripeSvg width={50} height={50} color="#121214" />;
  }
};

export default function LinkButton({
  url,
  label,
  icon,
}: {
  url: string;
  label: string;
  icon: Icons;
}) {
  return (
    <a href={url}>
      <button className="download-button" role="button">
        {label}
        {getIcon(icon)}
      </button>
    </a>
  );
}

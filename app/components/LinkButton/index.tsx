import "./styles.css";
import Image from "next/image";
export default function LinkButton() {
  return (
    <button className="download-button" role="button">
      DOWNLOAD
      <Image
        src="/img/download-icon.png"
        width="32"
        height="32"
        alt="download-icon"
      />
    </button>
  );
}

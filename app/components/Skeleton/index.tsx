import "./styles.css";
export default function Skeleton({
  width,
  height,
}: {
  width: number | string;
  height: number | string;
}) {
  return (
    <span className="skeleton" style={{ width: width, height: height }}></span>
  );
}

import NotFoundSvg from "@/components/Svg/NotFound";
import LinkButton from "@/components/LinkButton";
export default async function NotFound() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="not-found">
        <NotFoundSvg width={136} height={150} color="#084cf9" />
        <h3 className="my-5">404 | NOT FOUND</h3>
        <p>
          <LinkButton url="/" label="Go to Home" />
        </p>
      </div>
    </div>
  );
}

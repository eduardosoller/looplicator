import Link from "next/link";
import { headers } from "next/headers";
import LinkButton from "@/components/LinkButton";
export default async function NotFound() {
  const headersList = headers();
  const domain = headersList.get("host");
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center not-found">
          <h3>404 | NOT FOUND</h3>
          <p>{domain}</p>
          <p>
            <LinkButton url="/" label="Go to Home" />
          </p>
        </div>
      </div>
    </div>
  );
}

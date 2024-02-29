import Link from "next/link";
import { headers } from "next/headers";

export default async function NotFound() {
  const headersList = headers();
  const domain = headersList.get("host");
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h3>404 | NOT FOUND</h3>
          <p>{domain}</p>
          <p>
            <Link href="/">
              <button>Go to home</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

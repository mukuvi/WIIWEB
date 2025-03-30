export const metadata = {
  title: "About",
};

import Link from "next/link";

export default function about() {
  return (
    <div>
      <Link href="/">Home </Link>
      <h1>About page</h1>
    </div>
  );
}

import Link from "next/link";
export default function products() {
  return (
    <div>
      <Link href="/">Home </Link>
      <h1>products page</h1>
      <Link href="/products/1">products 1 </Link>
      <Link href="/products/2">products 2 </Link>
      <Link href="/products/3">products 3 </Link>
    </div>
  );
}

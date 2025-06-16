import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Page not found</h2>
      <p>
        <Link href="/">Return home</Link>
      </p>
    </div>
  );
}

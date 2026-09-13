import Link from "next/link";

export default function TOC() {
  return (
    <div id="wd-toc">
      <h3>Maya Robie</h3>
      <ul>
        <li>
          <Link href="/labs" id="wd-home-link">Home</Link>
        </li>
        <li>
          <Link href="/labs/lab1" id="wd-lab1-link">Lab 1</Link>
        </li>
        <li>
          <Link href="/labs/lab2" id="wd-lab2-link">Lab 2</Link>
        </li>
        <li>
          <Link href="/labs/lab3" id="wd-lab3-link">Lab 3</Link>
        </li>
        <li>
          <Link href="/labs/lab4" id="wd-lab4-link">Lab 4</Link>
        </li>
        <li>
          <Link href="/book/ch1" id="wd-toc-book-link">
            Chapter 1
          </Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
        <li>
          <Link href="https://webdev-client.vercel.app/book/ch1#sec-1-3-11">
            Book Ch 1
          </Link>
        </li>
      </ul>
      <p>Lock in!!</p>
    </div>
  );
}

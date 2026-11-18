"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  {
    href: "/labs",
    id: "wd-home-link",
    label: "Home",
    match: (p: string) => p === "/labs",
  },
  {
    href: "/labs/lab1",
    id: "wd-lab1-link",
    label: "Lab 1",
    match: (p: string) => p.endsWith("/lab1") || p.includes("/lab1/"),
  },
  {
    href: "/labs/lab2",
    id: "wd-lab2-link",
    label: "Lab 2",
    match: (p: string) => p.includes("/lab2"),
  },
  {
    href: "/labs/lab3",
    id: "wd-lab3-link",
    label: "Lab 3",
    match: (p: string) => p.includes("/lab3"),
  },
  {
    href: "/labs/lab4",
    id: "wd-lab4-link",
    label: "Lab 4",
    match: (p: string) => p.includes("/lab4"),
  },
  {
    href: "/labs/lab5",
    id: "wd-lab5-link",
    label: "Lab 5",
    match: (p: string) => p.includes("/lab5"),
  },
  { href: "/", id: "wd-kambaz-link", label: "Kambaz", match: () => false },
  {
    href: "https://kambaz.dev/book/ch3",
    id: "wd-book-ch3-link",
    label: "Book Ch3",
    match: () => false,
  },
] as const;

const EXTERNAL_LINKS = [
  {
    href: "https://github.com/mrobie8/webdev-client/tree/a5",
    id: "wd-github",
    label: "Client GitHub Repo",
  },
  {
    href: "https://github.com/mrobie8/webdev-server/tree/a5",
    id: "wd-github-server",
    label: "Server GitHub Repo",
  },
  {
    href: "https://webdev-server-0jma.onrender.com",
    id: "wd-render",
    label: "Render Server",
  },
] as const;

const activeStyle = {
  backgroundColor: "#2563eb",
  color: "white",
  borderRadius: "4px",
  padding: "2px 8px",
  textDecoration: "none",
};

export default function TOC() {
  const pathname = usePathname() ?? "";
  return (
    <>
      <p id="wd-full-name" className="mb-2 font-semibold">
        Maya Robie
      </p>
      <ul>
        {LINKS.map((link) => {
          const active = link.match(pathname);
          return (
            <li key={link.id}>
              <Link
                href={link.href}
                id={link.id}
                style={active ? activeStyle : undefined}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
        {EXTERNAL_LINKS.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              id={link.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link href={'/'}>
        <button>Home</button>
      </Link>
      <Link href={'/about'}>
        <button>About</button>
      </Link>
      <Link href={'/blog'}>
        <button>Blog</button>
      </Link>
      <Link href={'/resume'}>
        <button>Resume</button>
      </Link>
    </div>
  );
}

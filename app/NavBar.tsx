import Link from 'next/link';

function NavBar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <ul>
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/issues">Issues</Link>Issues
        </li>
      </ul>
    </nav>
  );
}

export { NavBar };

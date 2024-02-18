import Link from 'next/link';

function NavBar() {
  return (
    <nav className='flex space-x-6'>
      <Link href="/">Logo</Link>
      <ul className='flex space-x-6'>
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

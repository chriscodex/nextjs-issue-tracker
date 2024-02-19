'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiFillBug } from 'react-icons/ai';

function NavBar() {
  const currentPath = usePathname();

  const links = [
    {
      label: 'Dashboard',
      href: '/',
    },
    {
      label: 'Issues',
      href: '/issues',
    },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((element) => (
          <li key={element.href}>
            <Link
              href={element.href}
              className={`${
                currentPath === element.href ? 'text-zinc-800' : 'text-zinc-500'
              } hover:text-zinc-800 transition-colors`}
            >
              {element.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { NavBar };

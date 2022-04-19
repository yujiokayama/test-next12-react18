import Link from 'next/link';
import * as React from 'react';
import { pagesPath } from '@/lib/$path';

const Navigation: React.VFC = () => {
  return (
    <>
      <ul>
        <li>
          <Link href={`${pagesPath.$url().pathname}`}>home</Link>
        </li>
        <li>
          <Link href={`${pagesPath.posts.$url().pathname}`}>posts</Link>
        </li>
        <li>
          <Link href={`${pagesPath.rendering.sg.$url().pathname}`}>sg</Link>
        </li>
        <li>
          <Link href={`${pagesPath.rendering.ssr.$url().pathname}`}>ssr</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;

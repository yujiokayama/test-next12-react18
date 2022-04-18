import Link from 'next/link';
import * as React from 'react';

const Navigation: React.VFC = () => {
  return (
    <>
      <ul>
        <li>
          <Link href={`/`}>home</Link>
        </li>
        <li>
          <Link href={`/posts`}>posts</Link>
        </li>
        <li>
          <Link href={`/rendering/sg`}>sg</Link>
        </li>
        <li>
          <Link href={`/rendering/ssr`}>ssr</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;

import Link from 'next/link';
import * as React from 'react';

const Navigation: React.VFC = () => {
  return (
    <>
      <ul>
        <li>
          <Link href={`/posts`}>posts</Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;

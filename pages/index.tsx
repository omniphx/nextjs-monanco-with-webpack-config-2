import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('../components/Code'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div style={{ height: '100vh', width: '100%', background: 'teal' }}>
      <Editor />
    </div>
  );
};

export default Home;

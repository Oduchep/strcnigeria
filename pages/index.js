import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title> Society of Traditional Roman Catholics, Nigeria</title>
        <meta
          name="description"
          content="society of traditional roman catholics of nigeria"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="text-yellow-500"> hello, its me </p>
      </main>
    </div>
  );
}

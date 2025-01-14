// pages/index.js
import Link from 'next/link';

export default function Home({ message }) {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      {message && <p>Message from About: {message}</p>}
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  return {
    props: {
      message: query.message || null,
    },
  };
}

// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    // Redirect to Home page with a query parameter
    router.push({ pathname: '/', query: { message: 'Hello from About' } });
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Home with Query</button>
    </div>
  );
}

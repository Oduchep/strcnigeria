import { useRouter } from 'next/router';
import Link from 'next/link';

const SubmenuLink = ({ href, text }) => {
  const { route } = useRouter();

  return (
    <Link href={href}>
      <a
        className={`p-3 hover:bg-primary-3 hover:text-primary ${
          route.includes(href) ? 'bg-primary-3 text-primary' : 'text-white'
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

export default SubmenuLink;

import Link from 'next/link';
import colors from '../theme/Colors';
import breakpoints from '../theme/Breakpoints';

const Header = () => (
  <div className="nav">
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="http://strongishfiber.com">
      <a>Expecting fiber arts?</a>
    </Link>

    <style jsx>{`
     a, a:visited {
      color: ${ colors.navLinks };
      text-decoration: none;
      padding: 10px;
    }

    .nav {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
    }

    @media (min-width: ${ breakpoints.minTablet }) {
      .nav {
        max-width: calc(${ breakpoints.minTablet } - 40px);
      }
    }
  `}</style>
  </div>
);

export default Header;
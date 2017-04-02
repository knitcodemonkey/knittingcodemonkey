import Header from './Header'
import Footer from './Footer'
import colors from '../theme/Colors'
import breakpoints from '../theme/Breakpoints'

const Layout = (props) => (
  <main>
    <header>
      <Header />
    </header>
    <section>
      <div className="content space-around">
        {props.children}
      </div>
    </section>
    <footer>
      <Footer />
    </footer>

    <style jsx global>{`
      html, body {
        background: url(../static/img/kcm_bg.png);
        background-color: ${ colors.background };
        margin: 0;
        padding: 0;
        font-family: 'Jaldi', sans-serif;
        min-height: 100vh;
        font-size: 14px;
        line-height: 20px;
        min-width: ${ breakpoints.minWidth };
      }

      a, a:visited {
        color: ${ colors.links }
      }

      .space-around {
        margin: 10px;
      }

      .space-between {
        padding: 10px;
      }

      main {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      header, footer, section {
        flex: 0 0 auto;
        display: flex;
        justify-content: space-around;
        margin: 0;
      }

      header {
        background-color: ${ colors.navBackground };
      }

      header, .content, footer {
        box-shadow: 0 0px 6px ${ colors.darkblue };
      }

      section > div,
      header > div,
      footer > div {
        width: 100%;
      }

      section {
       align-items: stretch;
       flex: 1 100%;
      }

      .content {
        background: ${ colors.background };
      }


      section > div {

      }

      footer {
        background: ${ colors.background };
        border: 1px solid ${ colors.border };
      }

      @media (min-width: ${ breakpoints.minTablet }) {
        body {
          font-size: 16px;
          line-height: 24px;
        }


        section > div,
        header > div,
        footer > div {
          width: 100%;
        }

        .space-around {
          margin: 20px;
        }

        .space-between {
          padding: 20px;
        }
      }

    `}</style>
  </main>
)

export default Layout
import Head from "next/head"
import home from "../styles/Home.module.css"
import style from "../styles/Style_A.module.css"
type Test = (log: number) => number
const test: Test = (log) => log + 2
console.log(test(2))

export default function Home(): JSX.Element {
  return (
    <div className={home.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <h1>Header</h1>
      </header>
      <nav className={style.nav}>
        <ul>
          <li>
            <a href='tes01'>Tes01</a>
          </li>
          <li>
            <a href='tes02'>tes02</a>
          </li>
          <li>
            <a href='#'>ダミー</a>
          </li>
          <li>
            <a href='#'>ダミー</a>
          </li>
          <li>
            <a href='#'>ダミー</a>
          </li>
        </ul>
      </nav>
      <div>
        <nav>
          <ul>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Our team</a>
            </li>
            <li>
              <a href='#'>Projects</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
          <form>
            <input type='search' name='q' placeholder='Search query' />
            <input type='submit' defaultValue='Go!' />
          </form>
        </nav>
        <main className={home.main}>
          <article>
            <h2>Article heading</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a
              diam lectus. Set sit amet ipsum mauris. Maecenas congue ligula as
              quam viverra nec consectetur ant hendrerit. Donec et mollis dolor.
              Praesent et diam eget libero egestas mattis sit amet vitae augue.
              Nam tincidunt congue enim, ut porta lorem lacinia consectetur.
            </p>
            <h3>subsection</h3>
            <p>
              Donec ut librero sed accu vehicula ultricies a non tortor. Lorem
              ipsu dolor sit amet, consectetur adipisicing elit. Aenean ut
              gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing
              id dolor.
            </p>
            <p>
              Pelientesque auctor nisi id magna consequat sagittis. Curabitur
              dapibus, enim sit amet elit pharetra tincidunt feugiat nist
              imperdiet. Ut convallis libero in urna ultrices accumsan. Donec
              sed odio eros.
            </p>
            <h3>Another subsection</h3>
            <p>
              Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum
              soclis natoque penatibus et manis dis parturient montes, nascetur
              ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at
              sem facilisis semper ac in est.
            </p>
            <p>
              Vivamus fermentum semper porta. Nunc diam velit, adipscing ut
              tristique vitae sagittis vel odio. Maecenas convallis ullamcorper
              ultricied. Curabitur ornare, ligula semper consectetur sagittis,
              nisi diam iaculis velit, is fringille sem nunc vet mi.
            </p>
          </article>
          <aside>
            <h2>Related</h2>
            <ul>
              <li>
                <a href='#'>Oh I do like to be beside the seaside</a>
              </li>
              <li>
                <a href='#'>Oh I do like to be beside the sea</a>
              </li>
              <li>
                <a href='#'>Although in the North of England</a>
              </li>
              <li>
                <a href='#'>It never stops raining</a>
              </li>
              <li>
                <a href='#'>Oh well...</a>
              </li>
            </ul>
          </aside>
        </main>
        <footer className={home.footer}>
          <p>©Copyright 2050 by nobody. All rights reversed.</p>
        </footer>
      </div>
    </div>
  )
}
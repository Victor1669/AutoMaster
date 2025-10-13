import { Link } from "react-router-dom";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Main from "../../Components/Main";

export default function Home() {
  return (
    <div className="index">
      <Header>
        <span className="btn-container">
          <Link to="login" className="button">
            Entrar
          </Link>
          <Link to="signin" className="button">
            Cadastrar
          </Link>
        </span>
      </Header>
      <Main>
        <div id="Home">
          <h2>Manutenção preventiva e corretiva do seu veículo</h2>
          <section className="desc-section">
            <img width={500} src="/jumper-cables.jpg" alt="Engrenagens" />
            <span>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Praesentium nulla placeat totam dolores fugiat, odit quos
                molestiae tempora dolore rem illum laudantium non mollitia
                voluptatem alias repudiandae sit ipsa. Ducimus.
              </p>
              <p>
                Quasi fugiat aliquid voluptatibus adipisci. Quod amet pariatur
                vitae ab alias, est nostrum eos, iure, quisquam iste minus
                voluptas illum non quam commodi error fuga! Accusantium iusto
                illum maiores consequuntur?
              </p>
              <p>
                Esse, ipsam blanditiis ea voluptatem sed debitis quos laborum
                rem porro ab temporibus! Maiores unde, laborum autem quam
                necessitatibus incidunt maxime libero alias id! Odio excepturi
                laboriosam omnis? Minima, autem.
              </p>
              <p>
                Ullam repellat voluptates, deleniti unde ipsam labore nam
                accusamus, ratione, commodi quidem suscipit excepturi deserunt?
                Quas et alias commodi impedit delectus incidunt sed eligendi,
                voluptatibus eveniet repellat, excepturi ab quidem.
              </p>
            </span>
          </section>
        </div>
      </Main>
      <Footer />
    </div>
  );
}

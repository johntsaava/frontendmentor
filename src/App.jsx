import {
  Article,
  ArticleAction,
  ArticleContent,
  ArticleTitle,
} from "./components/Article";
import { Link } from "./components/Link";

import logo_url from "./images/logo.svg";
import hamburger_url from "./images/icon-hamburger.svg";
import arrow_down_url from "./images/icon-arrow-down.svg";
import desktop_transform_url from "./images/desktop/image-transform.jpg";
import mobile_transform_url from "./images/mobile/image-transform.jpg";
import desktop_stand_out_url from "./images/desktop/image-stand-out.jpg";
import mobile_stand_out_url from "./images/mobile/image-stand-out.jpg";

export const App = () => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2">
      <section className="col-span-full flex flex-col h-[80vh] px-4 md:px-10 py-6 md:py-10 bg-header bg-cover md:bg-contain bg-no-repeat bg-bottom bg-cyan-400">
        <header className="flex justify-between">
          <img src={logo_url} alt="sunnyside" className="w-24 md:w-44" />
          <button className="md:hidden">
            <img src={hamburger_url} alt="Menu" className="w-5" />
          </button>
        </header>
        <h1 className="font-display text-3xl md:text-5xl uppercase tracking-widest text-center text-white mt-16 md:mt-20">
          We are creatives
        </h1>
        <img
          src={arrow_down_url}
          alt="Arrow down"
          className="h-24 self-center mt-9 md:mt-20"
        />
      </section>

      <section className="px-6 py-12 flex items-center justify-center">
        <Article>
          <ArticleTitle>Transform your brand</ArticleTitle>
          <ArticleContent>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </ArticleContent>
          <ArticleAction>
            <Link href="#">Learn more</Link>
          </ArticleAction>
        </Article>
      </section>

      <figure>
        <img
          srcset={`${mobile_transform_url}, ${desktop_transform_url} 1.5x`}
          src={desktop_transform_url}
          alt="Transform"
          className="w-full h-full object-cover"
        />
      </figure>

      <figure className="">
        <img
          srcset={`${mobile_stand_out_url}, ${desktop_stand_out_url} 1.5x`}
          src={desktop_stand_out_url}
          alt="Stand out"
          className="w-full h-full object-cover"
        />
      </figure>

      <section className="px-6 py-12 flex items-center justify-center">
        <Article>
          <ArticleTitle>Stand out to the right audience</ArticleTitle>
          <ArticleContent>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </ArticleContent>
          <ArticleAction>
            <Link href="#">Learn more</Link>
          </ArticleAction>
        </Article>
      </section>

      <section className="">
        <h3>Graphic design</h3>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </section>
      <section className="">
        <h3>Photography</h3>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </section>

      <section className="col-span-full">Section</section>
      <figure className="">Figure</figure>
      <figure className="">Figure</figure>
      <figure className="">Figure</figure>
      <figure className="">Figure</figure>
      <footer className="col-span-full">Section</footer>
    </main>
  );
};

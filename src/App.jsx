import {
  Article,
  ArticleAction,
  ArticleDescription,
  ArticleTitle,
} from "./components/Article";
import { Link } from "./components/Link";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "./components/Card";
import { Picture } from "./components/Picture";

import logo_url from "./images/logo.svg";
import hamburger_url from "./images/icon-hamburger.svg";
import arrow_down_url from "./images/icon-arrow-down.svg";
import desktop_transform_url from "./images/desktop/image-transform.jpg";
import mobile_transform_url from "./images/mobile/image-transform.jpg";
import desktop_stand_out_url from "./images/desktop/image-stand-out.jpg";
import mobile_stand_out_url from "./images/mobile/image-stand-out.jpg";
import desktop_graphic_design_url from "./images/desktop/image-graphic-design.jpg";
import mobile_graphic_design_url from "./images/mobile/image-graphic-design.jpg";
import desktop_photography_url from "./images/desktop/image-photography.jpg";
import mobile_photography_url from "./images/mobile/image-photography.jpg";

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
          <ArticleDescription>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </ArticleDescription>
          <ArticleAction>
            <Link href="#" className="bg-yellow/30 hover:bg-yellow">
              Learn more
            </Link>
          </ArticleAction>
        </Article>
      </section>

      <figure>
        <Picture
          desktop={desktop_transform_url}
          mobile={mobile_transform_url}
          alt="Transform"
          className="w-full h-full object-cover"
        />
      </figure>

      <figure className="">
        <Picture
          desktop={desktop_stand_out_url}
          mobile={mobile_stand_out_url}
          alt="Stand out"
          className="w-full h-full object-cover"
        />
      </figure>

      <section className="px-6 py-12 flex items-center justify-center">
        <Article>
          <ArticleTitle>Stand out to the right audience</ArticleTitle>
          <ArticleDescription>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </ArticleDescription>
          <ArticleAction>
            <Link href="#" className="bg-red/30 hover:bg-red">
              Learn more
            </Link>
          </ArticleAction>
        </Article>
      </section>

      <Card className="h-[70vh]">
        <Picture
          desktop={desktop_graphic_design_url}
          mobile={mobile_graphic_design_url}
          alt="Graphic design"
          className="w-full h-full object-cover"
        />
        <CardContent>
          <CardTitle className="text-cyan-900">Graphic design</CardTitle>
          <CardDescription className="text-cyan-900">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="h-[70vh]">
        <Picture
          desktop={desktop_photography_url}
          mobile={mobile_photography_url}
          alt="Photography"
          className="w-full h-full object-cover"
        />
        <CardContent>
          <CardTitle className="text-blue-600">Photography</CardTitle>
          <CardDescription className="text-blue-600">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </CardDescription>
        </CardContent>
      </Card>

      <section className="col-span-full">Section</section>
      <figure className="">Figure</figure>
      <figure className="">Figure</figure>
      <figure className="">Figure</figure>
      <figure className="">Figure</figure>
      <footer className="col-span-full">Section</footer>
    </main>
  );
};

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
import {
  Testimonial,
  TestimonialAuthor,
  TestimonialAvatar,
  TestimonialDescription,
} from "./components/Testimonial";
import { Logo } from "./components/Logo";

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
import emily_url from "./images/image-emily.jpg";
import jennie_url from "./images/image-jennie.jpg";
import thomas_url from "./images/image-thomas.jpg";
import desktop_gallery_milkbottles_url from "./images/desktop/image-gallery-milkbottles.jpg";
import mobile_gallery_milkbottles_url from "./images/mobile/image-gallery-milkbottles.jpg";
import desktop_gallery_orange_url from "./images/desktop/image-gallery-orange.jpg";
import mobile_gallery_orange_url from "./images/mobile/image-gallery-orange.jpg";
import desktop_gallery_cone_url from "./images/desktop/image-gallery-cone.jpg";
import mobile_gallery_cone_url from "./images/mobile/image-gallery-cone.jpg";
import desktop_gallery_sugarcubes_url from "./images/desktop/image-gallery-sugarcubes.jpg";
import mobile_gallery_sugarcubes_url from "./images/mobile/image-gallery-sugar-cubes.jpg";
import facebook_url from "./images/icon-facebook.svg";
import instagram_url from "./images/icon-instagram.svg";
import twitter_url from "./images/icon-twitter.svg";
import pinterest_url from "./images/icon-pinterest.svg";

export const App = () => {
  return (
    <main className="grid grid-cols-2 sm:grid-cols-4">
      <section className="col-span-full flex flex-col h-[80vh] px-4 md:px-10 py-6 md:py-10 bg-header bg-cover md:bg-contain bg-no-repeat bg-bottom bg-cyan-400">
        <header className="flex justify-between">
          <Logo className="w-24 md:w-44" />

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

      <section className="col-span-2 px-6 py-12 flex items-center justify-center">
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

      <figure className="col-span-2">
        <Picture
          desktop={desktop_transform_url}
          mobile={mobile_transform_url}
          alt="Transform"
          className="w-full h-full object-cover"
        />
      </figure>

      <figure className="col-span-2">
        <Picture
          desktop={desktop_stand_out_url}
          mobile={mobile_stand_out_url}
          alt="Stand out"
          className="w-full h-full object-cover"
        />
      </figure>

      <section className="col-span-2 px-6 py-12 flex items-center justify-center">
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

      <Card className="col-span-2 h-[70vh]">
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

      <Card className="col-span-2 h-[70vh]">
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

      <section className="col-span-full my-12 md:my-36">
        <h3 className="font-display tracking-widest uppercase text-xs md:text-xl text-center text-grayish-blue-400">
          Client testimonials
        </h3>

        <div className="flex flex-col gap-12 mt-12 md:mt-20 md:flex-row justify-center items-center md:items-stretch px-7">
          <Testimonial>
            <TestimonialAvatar src={emily_url} alt="Emily R." />
            <TestimonialDescription>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </TestimonialDescription>
            <TestimonialAuthor name="Emily R." position="Marketing Director" />
          </Testimonial>

          <Testimonial>
            <TestimonialAvatar src={thomas_url} alt="Thomas S." />
            <TestimonialDescription>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </TestimonialDescription>
            <TestimonialAuthor
              name="Thomas S."
              position="Chief Operating Officer"
            />
          </Testimonial>

          <Testimonial>
            <TestimonialAvatar src={jennie_url} alt="Jennie F." />
            <TestimonialDescription>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </TestimonialDescription>
            <TestimonialAuthor name="Jennie F." position="Business Owner" />
          </Testimonial>
        </div>
      </section>

      <figure className="aspect-w-1 aspect-h  md:aspect-w-4 md:aspect-h-5">
        <Picture
          desktop={desktop_gallery_milkbottles_url}
          mobile={mobile_gallery_milkbottles_url}
          alt="Milkbottles"
          className="w-full h-full object-cover"
        />
      </figure>

      <figure className="aspect-w-1 aspect-h-1">
        <Picture
          desktop={desktop_gallery_orange_url}
          mobile={mobile_gallery_orange_url}
          alt="Orange"
          className="w-full h-full object-cover"
        />
      </figure>

      <figure className="aspect-w-1 aspect-h-1">
        <Picture
          desktop={desktop_gallery_cone_url}
          mobile={mobile_gallery_cone_url}
          alt="Cone"
          className="w-full h-full object-cover"
        />
      </figure>

      <figure className="aspect-w-1 aspect-h-1">
        <Picture
          desktop={desktop_gallery_sugarcubes_url}
          mobile={mobile_gallery_sugarcubes_url}
          alt="Sugarcubes"
          className="w-full h-full object-cover"
        />
      </figure>

      <footer className="col-span-full text-green-600 bg-green-200 flex flex-col items-center py-12 md:py-20 px-8">
        <Logo className="w-32 md:w-44  fill-current" />
        <nav className="mt-8 md:mt-10 flex gap-8 text-sm md:text-base text-green-600/80">
          <a href="#" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Projects
          </a>
        </nav>
        <div className="flex mt-16 gap-5">
          <a href="#">
            <img src={facebook_url} alt="facebook" />
          </a>
          <a href="#">
            <img src={instagram_url} alt="instagram" />
          </a>
          <a href="#">
            <img src={twitter_url} alt="twitter" />
          </a>
          <a href="#">
            <img src={pinterest_url} alt="pinterest" />
          </a>
        </div>
      </footer>
    </main>
  );
};

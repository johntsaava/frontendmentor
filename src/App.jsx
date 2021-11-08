export const App = () => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2">
      <section className="col-span-full h-[80vh] bg-header bg-contain bg-no-repeat bg-bottom bg-cyan-400">
        <h1 className="font-display text-6xl uppercase tracking-widest text-white text-center mt-16">
          We are creatives
        </h1>
      </section>
      <section className="">
        <h2>Transform your brand</h2>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <a href="#">Learn more</a>
      </section>
      <figure className="">Figure</figure>
      <figure className="">Figure</figure>
      <section className="">
        <h2>Stand out to the right audience</h2>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <a href="#">Learn more</a>
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

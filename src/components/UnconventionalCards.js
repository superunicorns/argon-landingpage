import "../App.css";

const UnconventionalCards = () => {
  return (
    <div className="px-4 lg:px-0">
      <section className="w-full h-auto py-20 px-4 lg:px-10 background-gradient grid grid-rows-1 grid-cols-1 lg:grid-cols-2">
        <div className="w-full relative hidden lg:flex">
          <img src="/assets/cards-background.png" alt="Unconventional Cards" className="absolute hidden lg:flex -top-[150px] -left-[150px]" />
        </div>
        <div className="w-full px-6 lg:px-20 text-left text-white">
          <h3 className="text-3xl font-bold">Unconventional Cards</h3>
          <p className="text-md my-4 lg:test-lg uppercase">
            One Card for Every Problem
          </p>
          <p className="text-md lg:text-lg opacity-75">
            We love cards and everybody on the web seems to. We have gone above and beyond with options for you to organise your information. From cards designed for blog posts, to product cards or user profiles, you will have many options to choose from. All the cards follow the Argon principles and have a design that stands out.
          </p>
        </div>
      </section>
    </div>
  )
}

export default UnconventionalCards
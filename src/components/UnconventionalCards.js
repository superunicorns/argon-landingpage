import "../App.css";

const UnconventionalCards = () => {
  return (
      <section className="w-full background-gradient py-6 flex items-center justify-center mx-auto">
        <div className="relative hidden lg:flex lg:flex-1">
        <img src="/assets/cards-background.png" alt="Unconventional Cards" className="absolute top-0 left-0 translate-y-[-50%] translate-x-[-30%]" />
        </div>
        <div className="flex flex-col flex-1 text-left text-white px-6 lg:px-0">
          <h3 className="text-3xl font-bold">Unconventional Cards</h3>
          <p className="text-md my-4 lg:test-lg uppercase">
            One Card for Every Problem
          </p>
          <p className="text-md lg:text-lg opacity-75 lg:w-xl">
            We love cards and everybody on the web seems to. We have gone above and beyond with options for you to organise your information. From cards designed for blog posts, to product cards or user profiles, you will have many options to choose from. All the cards follow the Argon principles and have a design that stands out.
          </p>
        </div>
      </section>
  )
}

export default UnconventionalCards
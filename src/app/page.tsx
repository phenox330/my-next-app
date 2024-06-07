import Nav from "../components/Nav";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Welcome to my Next.js App
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          AI-Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">
        prompt app is a web application that generates prompts for creative writing. 
        It uses a machine learning model to generate prompts based on user input.
      </p>

      {/*Feed*/}
    </section>
    
  );
}

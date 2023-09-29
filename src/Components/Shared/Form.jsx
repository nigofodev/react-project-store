import { Link } from "react-router-dom";

export function Form() {
  return (
    <div className="bg-[#262837] lg:w-full h-screen lg:grid grid-cols-2  justify-center ">
      <section className="lg:w-96  grid grid-cols-1 items-center justify-center lg:ml-60 p-10 ">
        <div>
          <h1 className=" text-7xl mb-6 font-medium hover:text-[#ec7c6a] transition-all ease-in-out cursor-default font-sans">
            Welcome!
          </h1>
          <p className="text-gray-300 mb-5 text-xl">
            Please enter your details
          </p>
          <form className="grid grid-cols-1 gap-4 ">
            <input
              className="rounded-lg bg-sky-800 text-white pl-3 p-2 border-[#ec7c6a] w-70"
              type="text"
              placeholder="Name"
            />
            <input
              className="rounded-lg bg-sky-800 text-white pl-3 p-2"
              type="password"
              placeholder="Password"
            />
            <Link className="border border-[#ec7c6a] text-2xl rounded-lg p-2 hover:bg-[#ec7c6a] hover:font-medium ease-in-out transition-all text-white hover:text-black flex justify-center cursor-pointer" to={"/"}>
              <button className="cursor-pointer">
                Sign In
                </button>
            </Link>
            <div className="border border-[#ec7c6a] text-lg rounded-lg p-2 hover:bg-[#ec7c6a] hover:font-medium ease-in-out transition-all text-white hover:text-black flex justify-center cursor-pointer">
              <button className="cursor-pointer">
                Sign in with Google
                <img
                  className="w-6 h-6 inline-block mr-3 ml-2"
                  src="/public/Google.png"
                  alt="google-icon"
                />
              </button>
            </div>
            <p className="text-white pt-4 cursor-pointer hover:underline">
              Forgot your password?
            </p>
          </form>
        </div>
      </section>
      <div className="relative">
        <img
          className="w-[900px] md:w-full lg:h-full md:h-[670px] hidden rounded-r-2xl md:block object-cover"
          src="/public/plato.png"
          alt="plato"
        />
      </div>
    </div>
  );
}

export default Form;

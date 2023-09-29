

export function Form() {
  return (
    <div className="bg-[#262837] w-full lg:w-1/2 h-screen flex items-center justify-center">
      <section className="lg:w-96 h-[240px] grid grid-cols-1 items-center justify-center scroll-m-0" >
        <h1 className="text-center items-center text-5xl mb-2 p-2 font-medium">
          Welcome!
        </h1>
        <form className="grid grid-cols-1 gap-3 ">
          <input className="rounded-lg bg-sky-800 text-white pl-3 p-2 border-[#ec7c6a] w-59" type="text" placeholder="Name" />
          <input className="rounded-lg bg-sky-800 text-white pl-3 p-2"  type="password" placeholder="Password" />
          <button className="border border-[#ec7c6a] text-2xl rounded-lg p-2 hover:bg-[#ec7c6a] hover:font-medium ease-in-out transition-all">
            Log In
          </button>
        </form>
        <div className=" hidden lg:w-1/2 ">
          HOLA
        </div>
      </section>
    </div>
  );
}

export default Form;

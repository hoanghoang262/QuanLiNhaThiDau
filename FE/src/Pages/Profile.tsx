export default function Profile() {
  return (
    <div className=" sm:mx-32 lg:mx-32 xl:mx-72 h-[calc(100vh-64px)] ">
      <div className="flex justify-between container mx-auto">
        <div className="w-full">
          <div className="mt-4 px-4">
            <h1 className="font-thinner flex text-4xl pt-10 px-5">
              Your Profile
            </h1>

            <form className="mx-5 my-5">
              <label className="relative block p-3 border-2 border-black rounded">
                <span className="text-md font-semibold text-zinc-900">
                  Name
                </span>
                <input
                  className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none"
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
              </label>

              <div className="shrink-0 mt-5">
                <img
                  className="h-20 w-20 object-cover rounded-full"
                  src="https://sahilnetic.xyz/sahilnetic.png"
                  alt="Current profile photo"
                />
              </div>
              <label className="block pt-2">
                <span className="sr-only t-2">Choose profile photo</span>
                <input
                  type="file"
                  className="w-full text-sm text-slate-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-pink-300 file:text-zinc-900
          hover:file:bg-rose-300
        "
                />
              </label>

              <div className="flex justify-between items-center">
                <label className="relative block p-3 border-2 mt-5 border-black rounded w-full">
                  <span className="text-md font-semibold text-zinc-900">
                    Email
                  </span>

                  <input
                    className="w-full   p-0 text-sm border-none bg-transparent text-gray-500 focus:outline-none"
                    id="Email"
                    type="email"
                    placeholder="Write Your email"
                  />
                </label>
              </div>

              <div className="flex justify-between items-center">
                <label className="relative block p-3 border-2 mt-5 border-black rounded w-1/2 mr-2">
                  <span className="text-md font-semibold text-zinc-900">
                    PhoneNumber
                  </span>

                  <input
                    className="w-full   p-0 text-sm border-none bg-transparent text-gray-500 focus:outline-none"
                    id="phoneNumber"
                    type="text"
                    placeholder="Write Your Phone Number"
                  />
                </label>
                <label className="relative block p-3 mt-5 border-2 border-black rounded w-1/2 ml-2">
                  <span className="text-md font-semibold text-zinc-900">
                    Birth Date
                  </span>
                  <input
                    className="w-full p-0 text-sm border-none bg-transparent text-gray-500 focus:outline-none"
                    type="date"
                    placeholder=""
                  />
                </label>
              </div>

              <label className="relative block p-3 mt-5 border-2 border-black rounded">
                <span className="text-md font-semibold text-zinc-900">
                  Address
                </span>
                <input
                  className="w-full bg-transparent p-0 text-sm  text-gray-500 focus:outline-none"
                  id="address"
                  type="text"
                  placeholder="Your address"
                />
              </label>

              <button className="mt-5 border-2 px-5 py-2 rounded-lg border-black border-b-4 font-black translate-y-2 border-l-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

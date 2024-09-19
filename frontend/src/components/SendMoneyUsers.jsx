export default function ({ firstname, lastname }) {
  const avatarLetter = firstname.charAt(0).toUpperCase();

  return (
    <>
      <div className="flex justify-between pt-4 px-10">
        <div className="flex items-center">
          <div className="bg-white rounded-full font-semibold text-xl w-12 h-12 flex justify-center items-center mr-10">
            {avatarLetter}
          </div>
          <p className="flex justify-center items-center font-medium text-lg">
            {firstname} <span className="mx-1"></span>
            {lastname}
          </p>
        </div>
        <button className="px-2 py-1 rounded-lg text-white bg-black">
          Send Money
        </button>
      </div>
    </>
  );
}

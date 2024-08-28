import Link from "next/link";

export default function GoBackLink() {
  return (
    <div className="fixed top-0 left-0 z-50">
      <Link href="/">
        <span className="bg-blue-600 text-sm text-white py-2 px-4 rounded-none shadow-lg hover:bg-blue-700/20 transition duration-200 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.5em"
            height="1em"
            viewBox="0 0 12 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="m3.343 12l7.071 7.071L9 20.485l-7.778-7.778a1 1 0 0 1 0-1.414L9 3.515l1.414 1.414z"
            />
          </svg>{" "}
          &nbsp; Go Back
        </span>
      </Link>
    </div>
  );
}

import { useLoaderData } from "react-router-dom";

import Tag from "../components/atomic/tag/Tag";
import PreviousPage from "../components/atomic/buttons/PreviousPage";
import Button from "../components/atomic/buttons/Button";

function OfferDetails() {
  const offerData = useLoaderData();

  return (
    <main>
      <article>
        <header className="my-10 mx-10 relative">
          <PreviousPage source="/offers" />
          <img
            src={offerData.banner}
            alt=""
            className="mt-10 w-full h-80 mx-auto object-cover"
          />
          <img
            src={offerData.logo}
            alt=""
            className="w-32 h-32 object-cover z-10 shadow-grey-950 shadow-xl absolute left-10 -bottom-12 border border-[var(--secondary-color)] "
          />
        </header>
        <h1 className="text-3xl mx-10 mt-16 font-bold  text-[var(--primary-color)] inline-block">
          {offerData.title}
        </h1>
        <label className="peer text-[0] cursor-pointer">
          favoris
          <input type="checkbox" className="peer hidden" />
          <svg
            className=" peer-checked:fill-[var(--primary-color)] peer-checked:animate-jump animate-once animate-duration-500 animate-ease-in-out animate-alternate inline-block -mt-4"
            width="23"
            height="29"
            viewBox="0 0 13 19"
            fill="#F9F9F9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 3.92893C1 2.9037 1 2.39109 1.17128 1.99952C1.32193 1.65506 1.56233 1.37502 1.85802 1.19952C2.19416 1 2.6342 1 3.51429 1H9.48571C10.3658 1 10.8059 1 11.142 1.19952C11.4377 1.37502 11.6781 1.65506 11.8287 1.99952C12 2.39109 12 2.9037 12 3.92893V17.4752L6.5 12.8988L1 17.4752V3.92893Z"
              stroke="#CA2061"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </label>
        <ul className="flex flex-row mt-4">
          <li className="ml-10">
            <Tag text="REACT" apply="tag" />
          </li>
          <li className="ml-5">
            <Tag text="REACT" apply="tag" />
          </li>
          <li className="ml-5">
            <Tag text="REACT" apply="tag" />
          </li>
        </ul>
        <h2 className="text-3xl ml-10 my-16 semi-bold text-[var(--primary-color)]">
          Description du poste
        </h2>
        <p className="mx-10">{offerData.description}</p>
        <h2 className="text-3xl ml-10 my-16 semi-bold text-[var(--primary-color)]">
          Avantages
        </h2>
        <p className="mx-10">{offerData.advantages}</p>
        <h2 className="text-3xl ml-10 my-16 semi-bold text-[var(--primary-color)]">
          Salaire
        </h2>
        <p className="mx-10 mb-20">{offerData.salary} Euro/an.</p>
        <footer className="mb-20">
          <Button apply="big" name="POSTULER" />
        </footer>
      </article>
    </main>
  );
}

export default OfferDetails;

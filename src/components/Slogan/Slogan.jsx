import React from 'react';
import Cards from '../../assets/desktop/isocard.svg';

function Slogan() {
  return (
    <section className="text-36 relative my-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-48">
      <div className="text-center md:cok-span-1 md:col-start-2">
        <p>
          Earn
          <span className="dark:text-purple-300 text-purple-500"> More</span>
        </p>
        <p className=""> Pay Less</p>
        <button className="button text-white md:text-24 md: px-8 md: py-[8px]">
          Start
        </button>
      </div>
      <div className="mt-[69px] md:absolute md:right-[-5rem]">
        <img src={Cards} alt="card" />
      </div>
    </section>
  );
}
export default Slogan;

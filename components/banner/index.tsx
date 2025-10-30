import { FC } from "react";

const Banner: FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white text-center py-2 px-4">
      <p className="text-sm font-medium">
        Workout Wizz is coming soon to iOS and Android app stores!
        <a
          href="https://tally.so/r/mJWr7J"
          className="underline ml-2 font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join the waitlist
        </a>
      </p>
    </div>
  );
};

export default Banner;

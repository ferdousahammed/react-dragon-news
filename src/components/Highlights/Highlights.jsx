import Marquee from "react-fast-marquee";
const Highlights = () => {
  return (
    <div className="bg-dark07 p-4 flex gap-3 my-4">
      <button className="text-white bg-rose600 px-6 py-2 font-medium text-xl">
        Latest
      </button>
      <Marquee speed={100}>
        <p className="text-dark text-lg font-semibold">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </Marquee>
      <p></p>
    </div>
  );
};

export default Highlights;

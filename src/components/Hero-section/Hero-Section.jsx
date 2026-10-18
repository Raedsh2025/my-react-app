import layer1 from "../../assets/Layer_1.svg";
import arrow from "../../assets/arrow-forward-outline.svg";
import Rectangle from "../../assets/Rectangle 1.svg";
import Rectangle3 from "../../assets/Rectangle 3.svg";
import Rectangle4 from "../../assets/Rectangle 4.svg";
function HeroSection() {
  return (
    <section className="container mx-auto px-4 my-20  grid grid-flow-col grid-rows-2 gap-10   ">
      <div
        id="frame13"
        className="  min-h-screen row-span-2 flex flex-col items-start justify-center gap-4"
      >
        <div id="frame5" className="   ">
          <div
            id="frame4"
            className="relative text-5xl font-Sansation font-bold w-lg "
          >
            <h1>Discover the Latest Furniture Trends</h1>
            <div id="brush" className="absolute  bottom--0.5  left-0 ">
              <img src={layer1} alt="Layer 1" />
            </div>
          </div>

          <p
            className="text-base my-13 text-[#000000] leading-8"
          >
            Shop the Latest Fashion Items and Stay <br />
            ahead of the style game
          </p>
        </div>
        <button id="button1" className="bg-black text-white text-sm inline-flex py-2 px-4  items-center ">
          Explore More
          <span>
            <img src={arrow} alt="Arrow" />
          </span>
        </button>
      </div>

      <div
        id="frame12"
        className=" col-span-2 row-span-2  grid grid-cols-2 grid-rows-2 gap-5  "
      >
        <div
          id="frame9"
          className="relative col-start-1 row-start-1 w-full h-65.25  opacity-100 rounded-4xl"
        >
          <img
            src={Rectangle}
            alt="Rectangle"
            className=" h-full object-cover rounded-4xl"
          />
          <div id="frame7" className="absolute top-4 left-4 size-16">
            <h1>
              <span className="bg-[#E8FAE3] px-4 py-2 rounded-full text-base roboto">
                New
              </span>
            </h1>
          </div>
        </div>
        <div
          id="frame10"
          className="relative col-start-2 row-start-1 w-full  h-65.25  opacity-100 rounded-4xl"
        >
          <img
            src={Rectangle3}
            alt="Rectangle 3"
            className=" h-full object-cover rounded-4xl"
          />
          <div id="frame8" className="absolute top-4 left-4 size-16">
            <span className="bg-[#E8FAE3] px-4 py-2 rounded-full text-base roboto">
              New
            </span>
            

          </div>
        </div>
        <div
          id="frame11"
          className="col-span-2 col-start-1 row-start-2 relative w-full  h-65.25 rounded-4xl opacity-100"
        >
          <img src={Rectangle4} alt="Rectangle 4" />
          <div id="frame6" className="absolute top-4 left-4 size-16">
            <span className="bg-[#FAE3F9] px-4 py-2 rounded-full text-base roboto">
              New
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

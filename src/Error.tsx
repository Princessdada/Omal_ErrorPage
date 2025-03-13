import img from "./Image/Group 4743.png";
import img1 from "./Image/Vector 36.png";
import discord from "./SVG/Discord--Streamline-Core.svg.png";
import instagram from "./SVG/Instagram--Streamline-Core.svg.png";
import linkedin from "./SVG/Linkedin--Streamline-Core.svg.png";
import mail from "./SVG/Mail-Send-Envelope--Streamline-Core.svg.png";
import logo from "./SVG/omal_solutions_default 3.png";
import star1 from "./SVG/Vector.png";
import star3 from "./SVG/Vector (1).png";
import star2 from "./SVG/Vector (2).png";
export default function Error() {
  return (
    <>
      <div className="mx-auto bg-[#f9f5ed] px-4 min-h-screen flex flex-col box-content">
        {/* Error Message */}
        <div className="mt-20 text-center text-[#232220]">
          <h1
            className="text-[40px] sm:text-[40px] md:text-[85px] lg:text-[85px] font-bold leading-none"
            style={{ fontFamily: "Railroad Gothic CC, sans-serif" }}>
            ERROR{" "}
            <span>
              4
              <span className="relative inline-block ">
                {" "}
                {/* Container for images */}
                <div className="relative w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px] lg:w-[90px] lg:h-[90px] flex items-center justify-center">
                  <div className="absolute w-full h-full"></div>

                  {/* Images */}
                  <img
                    src={star1}
                    alt="Star 1"
                    className="absolute w-full h-full object-contain"
                  />
                  <img
                    src={star2}
                    alt="Star 2"
                    className="absolute w-[55%] h-[55%] sm:w-[50%] sm:h-[50%] md:w-[55%] md:h-[55%] object-contain"
                  />
                  <img
                    src={star3}
                    alt="Star 3"
                    className="absolute w-[25%] h-[25%] sm:w-[20%] sm:h-[20%] md:w-[22%] md:h-[22%] object-contain"
                  />
                </div>
              </span>
              4
            </span>
          </h1>
          <p className="mt-4 text-[20px] sm:text-[18px] md:text-[22px] lg:text-[26px] text-[#232220] leading-none">
            We're afraid the page you're looking for doesn't exist.
          </p>
        </div>

        {/* Illustration */}
        <div className="left-0 flex  pl-10">
          <img
            className="w-[600px] md:w-[500px] lg:w-[650px]"
            src={img}
            alt="Error Illustration"
          />
        </div>

        {/* Footer */}

        <footer>
          <div
            className="w-full text-[#FAF6E3] p-10 text-center 
               -mt-61 sm:-mt-58 md:-mt-52 lg:-mt-52"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: "cover",
              minHeight: "350px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
            }}>
            <div className="max-w-4xl mt-45 mx-auto flex flex-col sm:flex-row flex-wrap justify-between items-center space-y-6 md:space-y-0 gap-10 ">
              {/* Contact Section */}
              <div
                className="text-center md:text-left sm:text-left  md:pt-[10px] sm:pt-[20px])"
                style={{ fontFamily: "Railroad Gothic CC, sans-serif" }}>
                <h2
                  className="text-[22px] text-[#FAF6E3] font-bold 
               mt-13 sm:mt-12 md:mt-0 lg:mt-0">
                  GET IN TOUCH!
                </h2>

                <div className="flex space-x-6 mt-4  mb-4 justify-center md:justify-start sm:justify-start">
                  <a href="#" className="hover:text-orange-500">
                    <img width="31px" height="31px" src={mail} />
                  </a>
                  <a href="#" className="hover:text-orange-500">
                    <img width="31px" height="31px" src={instagram} />
                  </a>
                  <a href="#" className="hover:text-orange-500">
                    <img width="31px" height="31px" src={linkedin} />
                  </a>
                  <a href="#" className="hover:text-orange-500">
                    <img width="31px" height="31px" src={discord} />
                  </a>
                </div>
                <p
                  className="text-[20px] font-bold"
                  style={{ fontFamily: "Railroad Gothic CC, sans-serif" }}>
                  <span className="text-[#FAF6E3]">[GET</span>{" "}
                  <span className="text-[#F16B0C]">CREATIVE</span>{" "}
                  <span className="text-[#FAF6E3]">,</span>{" "}
                  <span className="text-[#FAF6E3]">GET</span>{" "}
                  <span className="text-[#A5BE00]">PAID</span>
                  <span className="text-[#FAF6E3]">]</span>{" "}
                </p>
              </div>

              {/* Logo Section */}
              <div className="text-sm text-center ">
                <img
                  width="150px"
                  sm-width="200px"
                  alt="Omal Solutions Logo"
                  src={logo}
                />
                <p className="text font-inter mt-2">OMAL SOLUTIONS, 2025.</p>
              </div>

              {/* Newsletter Section */}
              <div className="text-center ">
                <h2
                  className="text-[20px]  font-bold text-left md:text-center"
                  style={{ fontFamily: "Railroad Gothic CC, sans-serif" }}>
                  STAY IN THE L<span className="text-[#A5BE00]">O</span>
                  <span className="text-[#F16B0C]">O</span>P!
                </h2>
                <div className="flex items-center justify-center md:justify-end sm:justify-end space-x-2 mt-2">
                  <div className=" border-2 border-dotted">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="p-2"
                    />
                  </div>
                  <button className="bg-[#FAF6E3] text-[#232220] px-4 py-2 font-bold text[-20px]">
                    SUBSCRIBE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

import img1 from "./Image/Vector 36.png";
import discord from "./SVG/Discord--Streamline-Core.svg.png";
import instagram from "./SVG/Instagram--Streamline-Core.svg.png";
import linkedin from "./SVG/Linkedin--Streamline-Core.svg.png";
import mail from "./SVG/Mail-Send-Envelope--Streamline-Core.svg.png";
import logo from "./SVG/omal_solutions_default 3.png";
const Footer = () => {
  return (
    <footer>
      <div
        className="w-full text-[#FAF6E3] p-10 text-center 
         -mt-61 sm:-mt-56 md:-mt-52 lg:-mt-52"
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
  );
};

export default Footer;

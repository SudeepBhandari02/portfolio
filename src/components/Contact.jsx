import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  const handleSubmit = () => {};

  return (
    <div id="contact" className="my-8 min-h-[100dvh] w-screen  px-10 py-8">
      <div className="relative rounded-lg bg-black py-8 max-sm:h-[90dvh] h-[95dvh] w-full text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-full">
          <img src="img/devCrop.png" alt="developer" className="w-48" />
          <img
            src="img/dockerCrop.png"
            alt="developer"
            className="w-48 absolute bottom-0"
          />
        </div>

        <div className="absolute -top-40 right-1/2 transform translate-x-1/2  w-60 sm:-top-20  md:right-30 md:top-1/2 lg:top-20 lg:w-80 z-30">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/characterCrop.png"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col h-full items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">Join Me</p>

          {/* <AnimatedTitle
            title="let&#39;s b<b>u</b>ild a <br /> new era of <br />tec<b>h</b>n<b>o</b>l<b>o</b>gy."
            className="special-font !md:text-4xl w-full font-zentry !text-2xl !font-black !leading-[.9]"
          /> */}
          <h1 className="special-font md:text-[3rem] w-full font-zentry text-2xl font-black leading-[.9]">
            let&#39;s b<b>u</b>ild a <br /> new era of <br />
            tec<b>h</b>n<b>o</b>l<b>o</b>gy.{" "}
          </h1>

          <div className="container px-4 mx-auto my-2 z-10">
            <div className="mx-auto">
              <div className="max-w-md mx-auto p-8 bg-black rounded-lg shadow-lg">
                <h2 className="text-2xl  font-semibold font-general text-gray-400 mb-4">
                  Contact Me
                </h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-white font-robert-regular text-start mb-1" for="name">
                      Your Name
                    </label>
                    <input
                      className="w-full px-4 py-2 bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                      placeholder="Enter your name"
                      type="text"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-white font-robert-regular text-start mb-1" for="email">
                      Your Email
                    </label>
                    <input
                      className="w-full px-4 py-2 bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                      placeholder="Enter your email"
                      name="email"
                      id="email"
                      type="email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-white font-robert-regular text-start mb-1" for="message">
                      Your Message
                    </label>
                    <textarea
                      className="w-full px-4 py-2 bg-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300 resize-none"
                      rows="4"
                      placeholder="Enter your message"
                      name="message"
                      id="message"
                    ></textarea>
                  </div>
                  <button
                    className="cursor-pointer mx-8 bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
                    type="submit"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

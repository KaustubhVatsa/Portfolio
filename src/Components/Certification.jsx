import { CERTIFICATIONS } from "../constants";

const Certifications = () => {
  return (
    <div className="border-b-2 border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent">
        Certifications
      </h1>

      <div>
        {CERTIFICATIONS.map((cert, idx) => (
          <div key={idx} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Image / Badge */}
            <div className="w-full lg:w-1/4 flex justify-center">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  width={150}
                  height={150}
                  className="mb-6 rounded shadow-lg"
                />
              </a>
            </div>

            {/* Title & Link */}
            <div className="w-full max-w-xl lg:w-3/4 flex items-center">
              <h6 className="mb-0 font-semibold text-xl">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline"
                >
                  {cert.title}
                </a>
              </h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;

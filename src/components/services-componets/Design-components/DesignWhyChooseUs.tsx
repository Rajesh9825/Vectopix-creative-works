import { Award, Users, Clock3, Infinity, Sparkles } from "lucide-react";

const DesignWhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "100% Custom\nDesigns",
      desc: "No templates. Only original creative work.",
    },
    {
      icon: Users,
      title: "Experienced\nDesigners",
      desc: "Skilled professionals with years of industry experience.",
    },
    {
      icon: Clock3,
      title: "Fast Turnaround\nTime",
      desc: "Quality designs delivered within your timeline.",
    },
    {
      icon: Infinity,
      title: "Unlimited\nRevisions",
      desc: "We refine until you're 100% satisfied.",
    },
  ];

  return (
    <section
      id="design-why-choose-us"
      className="w-full bg-white py-10 md:py-24 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-0 items-stretch">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center lg:pr-10 text-left">

            <span className="flex items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-[0.18em] font-bold text-[#4055B5] mb-3 md:mb-5">
              <Sparkles
                size={12}
                className="fill-[#facc15] text-[#facc15]"
              />
              WHY CHOOSE VECTOPIX?
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-[42px] leading-[1.15] md:leading-[1.12] font-black text-black mb-2 lg:mb-0">
              Creative Solutions
              <br className="hidden sm:inline" />
              That Build{" "}
              <span className="text-[#4055B5]">
                Stronger
              </span>
              <br className="hidden sm:inline" />
              Brands
            </h2>

          </div>

          {/* RIGHT CARDS */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">

            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-[#fafafa] rounded-xl px-4 py-5 md:px-7 md:py-8 shadow-sm hover:shadow-md transition duration-300 text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-start rounded-xl mb-3 md:mb-6">
                      <Icon
                        size={24}
                        className="text-[#F4B400] stroke-[2] md:w-[30px] md:h-[30px]"
                      />
                    </div>

                    <h3 className="text-[14px] sm:text-[16px] md:text-[20px] font-bold text-black leading-tight sm:leading-snug whitespace-pre-line mb-2 md:mb-4">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[11px] md:text-[14px] leading-relaxed md:leading-7 text-neutral-500 mt-auto">
                    {item.desc}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
};

export default DesignWhyChooseUs;
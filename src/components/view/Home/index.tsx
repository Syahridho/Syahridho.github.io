import { MarqueeDemo } from "@/components/container/Marquee";
import ContainerLayout from "@/components/layout/ContainerLayout";
import BlurIn from "@/components/ui/blur-in";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { siHtml5 } from "simple-icons";

const HomeView = () => {
  return (
    <>
      <ContainerLayout>
        <div className="flex flex-col md:justify-between md:items-center md:flex-row">
          <BlurIn
            word="Hi, I'm Syahridho Arjuna Syahputra"
            className="text-4xl font-bold text-black dark:text-white"
          />
          <RainbowButton className="hidden md:block text-nowrap">
            Download CV
          </RainbowButton>
        </div>
        <div className="my-4">
          <ol className="list-disc list-inside flex flex-col gap-1 text-slate-700 md:flex-row md:gap-4">
            <li>Front End Developer</li>
            <li>Based in Pekanbaru, Riau, Indonesia</li>
          </ol>
        </div>
        <div>
          <p className="text-slate-700">
            I am a Frontend Developer with a focus on creating aesthetic and
            responsive user interfaces. With skills in HTML, CSS, JavaScript,
            Tailwind, React JS and others, I have developed a variety of
            projects, ranging from business websites to interactive web
            applications.
          </p>
        </div>

        {/* Komponen MarqueeDemo */}
        <MarqueeDemo />

        {/* Menambahkan ikon HTML5 di bawah MarqueeDemo */}
        <svg
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="50"
          height="50"
          fill={`#${siHtml5.hex}`} // Menggunakan warna dari Simple Icons
        >
          <title>{siHtml5.title}</title>
          <path d={siHtml5.path} />
        </svg>
      </ContainerLayout>
    </>
  );
};

export default HomeView;

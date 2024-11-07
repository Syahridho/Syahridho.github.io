import IconTech from "@/components/ui/IconTech";
import Marquee from "@/components/ui/marquee";

export function MarqueeDemo({ data }: any) {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:30s] md:[--duration:40s]">
        {data.iconsUp.map((item: any, index: number) => (
          <IconTech
            key={index}
            icon={item.icon}
            title={item.title}
            color={item.color}
          />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        className="[--duration:30s] md:[--duration:40s]"
      >
        {data.iconsDown.map((item: any, index: number) => (
          <IconTech
            key={index}
            icon={item.icon}
            title={item.title}
            color={item.color}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[5%] bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[5%] bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "html5",
  "css3",
  "javascript",
  "typescript",
  "react",
  "nextdotjs",
  "nodedotjs",
  "tailwindcss",
  "bootstrap",
  "redux",
  "php",
  "mysql",
  "python",
  "firebase",
  "vite",
  "amazonaws",
  "vercel",
  "jest",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];

export function GlobeSkill() {
  return (
    <div className="relative flex size-full max-w-md items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
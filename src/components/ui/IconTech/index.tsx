import { cn } from "@/lib/utils";

const IconTech = ({
  icon: Icon,
  title,
  color,
}: {
  icon: any;
  title: string;
  color: string;
}) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-full border px-4 py-2",
        // light styles
        "border-gray-950/[.1] bg-white hover:bg-slate-50",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2 ">
        <Icon size={14} color={color} />
        <h1 className="text-sm font-medium">{title}</h1>
      </div>
    </figure>
  );
};

export default IconTech;

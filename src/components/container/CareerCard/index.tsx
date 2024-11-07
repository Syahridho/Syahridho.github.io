import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CareerCard = ({ career }: any) => {
  return (
    <div className="relative ml-6 py-8 pl-10 border-l border-dashed flex flex-col gap-1.5">
      <div className="absolute -left-6 top-6 flex items-center justify-center bg-white rounded-full z-10">
        <Avatar className="border size-12 m-auto">
          <AvatarImage
            src={career.image}
            alt="Profile"
            className="object-contain"
          />
          <AvatarFallback>Unilak</AvatarFallback>
        </Avatar>
      </div>

      <h2 className="text-xs text-muted-foreground">{career.dates}</h2>
      <h1 className="font-medium leading-none">{career.title}</h1>
      <h3 className="text-sm text-muted-foreground">{career.location}</h3>
      <h3 className="prose dark:prose-invert text-sm text-muted-foreground">
        {career.description}
      </h3>
    </div>
  );
};

export default CareerCard;

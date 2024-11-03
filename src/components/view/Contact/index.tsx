import FormContact from "@/components/container/Form";
import { useForm, FormProvider } from "react-hook-form";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import BlurIn from "@/components/ui/blur-in";

const ContactView = () => {
  const methods = useForm();
  return (
    <div className="max-w-[600px] mx-auto">
      <BlurIn
        word="Contact Me"
        className="text-4xl font-bold text-black dark:text-white "
      />
      <h1 className="mb-8">Lets talk to me</h1>

      <FormProvider {...methods}>
        <form>
          <FormContact />
        </form>
      </FormProvider>

      <GridPattern
        width={20}
        height={16}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_top_left,white,transparent,transparent)] -z-50"
        )}
      />
    </div>
  );
};

export default ContactView;

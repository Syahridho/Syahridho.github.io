import FormContact from "@/components/container/Form";
import { useForm as useReactHookForm, FormProvider } from "react-hook-form";
import { useForm as useFormSpree } from "@formspree/react";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import BlurIn from "@/components/ui/blur-in";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactView = () => {
  const methods = useReactHookForm();
  const { toast } = useToast();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, submitToFormspree] = useFormSpree(
    `${process.env.NEXT_PUBLIC_FORMSPREE}`
  );
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    await submitToFormspree(data)
      .then(() => {
        setIsLoading(false);
        toast({
          title: "Success",
          description: `${data.fullname && data.fullname} You Message Send`,
        });
        methods.reset();
      })
      .catch((error) => {
        toast({
          title: "Failed",
          description: error,
        });
        setIsLoading(false);
      });
  };

  return (
    <div className="max-w-[600px] mx-auto">
      <BlurIn
        word="Contact Me"
        className="text-4xl font-bold text-black dark:text-white "
      />
      <h1 className="mb-8">Lets talk to me</h1>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormContact isLoading={isLoading} />
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

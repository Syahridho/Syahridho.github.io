import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ShimmerButton from "@/components/ui/shimmer-button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const FormContact = () => {
  const form = useForm();
  return (
    <>
      <div className="mb-3">
        <FormField
          control={form.control}
          name="Fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fullname</FormLabel>
              <FormControl>
                <Input placeholder="Fullname" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mb-3">
        <FormField
          control={form.control}
          name="Email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mb-3">
        <FormField
          control={form.control}
          name="Subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Subject" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="mb-3 flex flex-col gap-3">
        <Label htmlFor="desc">Description</Label>
        <Textarea placeholder="Type your message here." />
      </div>
      <ShimmerButton className="shadow-2xl" onClick={() => console.log("tes")}>
        <span className="">Send</span>
      </ShimmerButton>
    </>
  );
};

export default FormContact;

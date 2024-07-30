"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { format } from "date-fns"
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar"
import { ArrowRight, CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
  policyNumber: z.string().min(1),
  insuredName: z.string().min(1),
  address: z.string().min(1),
  telephone: z.string({ message: "Phone number must be at least 11 characters" }).min(11).max(11),
  lossDate: z.date({
    required_error: "A loss date is required.",
  }),
});

type MakeClaimPersonalFormProps = {
  onNext: VoidFunction;
};

const MakeClaimPersonalForm: React.FC<MakeClaimPersonalFormProps> = ({ onNext }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log("Form submitted:", data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    onNext();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="policyNumber"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full text-start">
                <FormLabel>Policy Number</FormLabel>
                <FormControl>
                  <Input
                    className="no-focus text-base light-border-2 min-h-[56px] border"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="insuredName"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full text-start">
                <FormLabel>Name of Insured</FormLabel>
                <FormControl>
                  <Input
                    className="no-focus text-base light-border-2 min-h-[56px] border"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full text-start">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    className="no-focus text-base light-border-2 min-h-[56px] border"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telephone"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full text-start">
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    className="no-focus text-base light-border-2 min-h-[56px] border"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lossDate"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel>Loss Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full min-h-[56px] pl-3 text-left font-normal border-gray-200 hover:text-gray-600 text-gray-600",
                          !field.value && "text-gray-400"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="text-end">
          <Button variant="secondary" type="submit" size="sm" className="gap-2">
            Next <ArrowRight size={16} />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default MakeClaimPersonalForm;

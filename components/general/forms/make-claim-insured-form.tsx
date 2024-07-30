"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

const paymentList = [
  { id: "yes", label: "Yes" },
  { id: "no", label: "No" },
] as const;

const FormSchema = z.object({
  make: z.string().min(1),
  registrationNumber: z.string().min(1),
  yearOfMake: z.string().min(1),
  usePurpose: z.string().min(1),
  accident: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

type MakeClaimInsuredFormProps = {
  onNext: VoidFunction;
  onPrevious: VoidFunction;
};

const MakeClaimInsuredForm: React.FC<MakeClaimInsuredFormProps> = ({ onNext, onPrevious }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { accident: [] },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Form submitted:", data)
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    onNext();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="make"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full text-start">
                <FormLabel>Account Name</FormLabel>
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
            name="registrationNumber"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full text-start">
                <FormLabel>Registration Number</FormLabel>
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
            name="yearOfMake"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full text-start">
                <FormLabel>Year of Make</FormLabel>
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
            name="usePurpose"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full text-start">
                <FormLabel>Purpose being used</FormLabel>
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
          <div className="flex items-center justify-between gap-3">
            <FormLabel>Were you the one driving at the time of accident?</FormLabel>
            <FormField
              control={form.control}
              name="accident"
              render={() => (
                <FormItem>
                  <div className="flex flex-wrap gap-4">
                    {paymentList.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="accident"
                        render={({ field }) => (
                          <FormItem
                            key={item.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                className="w-6 h-6"
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([ ...field.value, item.id ])
                                    : field.onChange(
                                      field.value?.filter((value) => value !== item.id)
                                    );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="flex items-center justify-end gap-8">
          <Button variant="outline" type="button" size="sm" className="gap-2" onClick={onPrevious}>
            <ArrowLeft size={16} /> Back
          </Button>
          <Button variant="secondary" type="submit" size="sm" className="gap-2">
            Next <ArrowRight size={16} />
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default MakeClaimInsuredForm
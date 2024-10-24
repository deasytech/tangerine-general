"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { format } from "date-fns"
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { ArrowLeft, ArrowRight, CalendarIcon } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

const paymentList = [
  { id: "yes", label: "Yes" },
  { id: "no", label: "No" },
] as const;

const FormSchema = z.object({
  date: z.date({
    required_error: "A date is required.",
  }),
  time: z.string().min(1),
  accidentLocation: z.string().min(1),
  policeStationReported: z.string().min(1),
  numbersOfPersons: z.string().min(1),
  description: z.string().min(20),
  witness: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

type MakeClaimParticularsFormProps = {
  onNext: VoidFunction;
  onPrevious: VoidFunction;
};

const MakeClaimParticularsForm: React.FC<MakeClaimParticularsFormProps> = ({ onNext, onPrevious }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { witness: [] },
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
    })
    onNext();
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel>Date</FormLabel>
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
          <FormField
            control={form.control}
            name="accidentLocation"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full text-start">
                <FormLabel>Exact Location of Accident</FormLabel>
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
            name="time"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full text-start">
                <FormLabel>Time</FormLabel>
                <FormControl>
                  <Input
                    type="time"
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
            name="policeStationReported"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full text-start">
                <FormLabel>Address of Police Station Accident was reported</FormLabel>
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
            name="numbersOfPersons"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full text-start">
                <FormLabel>No. of Person in (i) Insured Vehicle</FormLabel>
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
          <div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="space-y-1.5 w-full text-start">
                  <FormLabel>Full Description of Accident</FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none no-focus text-base light-border-2 border"
                      rows={6}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-3 mt-4">
              <FormLabel>Were there any witness?</FormLabel>
              <FormField
                control={form.control}
                name="witness"
                render={() => (
                  <FormItem>
                    <div className="flex flex-wrap gap-4">
                      {paymentList.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="witness"
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

export default MakeClaimParticularsForm
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
import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Save, CalendarIcon } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils";

const FormSchema = z.object({
  driversSignature: z.string().min(1),
  driversSignatureDate: z.date({ required_error: "Driver's signature date is required.", }),
  insuredSignature: z.string().min(1),
  insuredSignatureDate: z.date({ required_error: "Insured signature date is required.", }),
  customerAgreement: z.boolean(),
  declaration: z.boolean(),
});

type MakeClaimDeclarationFormProps = {
  onPrevious: VoidFunction;
};

const MakeClaimDeclarationForm: React.FC<MakeClaimDeclarationFormProps> = ({ onPrevious }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    // defaultValues: { thirdPartyInsured: [] },
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
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="driversSignature"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full text-start">
                <FormLabel>Signature of the Driver</FormLabel>
                <FormControl>
                  <Input
                    type="file"
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
            name="driversSignatureDate"
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
            name="insuredSignature"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full text-start">
                <FormLabel>Signature of the Insured</FormLabel>
                <FormControl>
                  <Input
                    type="file"
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
            name="insuredSignatureDate"
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
          <div>
            <div className="flex items-center justify-between gap-3">
              <FormLabel>Consent Clause for Customer. <Button type="button" variant="link" className="underline">Read More</Button></FormLabel>
              <FormField
                control={form.control}
                name="customerAgreement"
                render={() => (
                  <FormItem>
                    <div className="flex flex-wrap gap-4">
                      <FormField
                        control={form.control}
                        name="customerAgreement"
                        render={({ field }) => (
                          <FormItem
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                className="w-6 h-6"
                                checked={field.value}
                                onCheckedChange={(checked) => {
                                  field.onChange(checked);
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              I consent
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex items-center justify-between gap-3">
              <FormLabel>Declaration <Button type="button" variant="link" className="underline">Read More</Button></FormLabel>
              <FormField
                control={form.control}
                name="declaration"
                render={() => (
                  <FormItem>
                    <div className="flex flex-wrap gap-4">
                      <FormField
                        control={form.control}
                        name="declaration"
                        render={({ field }) => (
                          <FormItem
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                className="w-6 h-6"
                                checked={field.value}
                                onCheckedChange={(checked) => {
                                  field.onChange(checked);
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              I consent
                            </FormLabel>
                          </FormItem>
                        )}
                      />
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
            Submit <Save size={16} />
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default MakeClaimDeclarationForm
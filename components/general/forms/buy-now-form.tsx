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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { ArrowRight, Loader2 } from "lucide-react"
import { countriesList } from "@/constants/general"
import { useState } from "react"

const productList = [
  { "id": "hull-insurance", "label": "Hull Insurance" },
  { "id": "aviation-insurance", "label": "Aviation Insurance" },
  { "id": "agric-insurance", "label": "Agric Insurance" },
  { "id": "multi-perils", "label": "Multi Perils" },
  { "id": "poultry", "label": "Poultry" },
  { "id": "area-yield-index", "label": "Area Yield Index" },
  { "id": "travel-insurance", "label": "Travel Insurance" },
  { "id": "burglary", "label": "Burglary" },
  { "id": "householder", "label": "Householder" },
  { "id": "general-accident", "label": "General Accident" },
  { "id": "homeowner", "label": "Homeowner" },
  { "id": "erection-all-risk", "label": "Erection All Risk" },
  { "id": "personal-accident", "label": "Personal Accident" },
  { "id": "product-liability", "label": "Product Liability" },
  { "id": "motor-comprehensive", "label": "Motor - Comprehensive" },
  { "id": "motor-thirdparty", "label": "Motor - Third Party" },
] as const;

const FormSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().min(1),
  countries: z.string().min(1),
  states: z.string().min(1),
  product: z.string().min(1),
})

export function GetQuoteForm() {
  const [ isSubmitting, setIsSubmitting ] = useState(false);

  const defaultValues = {
    fullName: "",
    email: "",
    countries: "",
    states: "",
    product: "",
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-quote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data");
      }

      const result = await response.json();
      console.log("Response from server:", result);

      toast({
        title: "Data submitted successfully",
        description: "We will contact you with more information in 24 hours.",
        variant: "default",
      });

      form.reset(defaultValues);
    } catch (error) {
      console.error("Error submitting data:", error);
      toast({
        title: "Error",
        description: "There was an issue submitting the form",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="space-y-1.5 w-full">
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Full name"
                  className="no-focus text-base light-border-2 min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
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
            name="product"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full text-start">
                <FormLabel>Product Range</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl className="no-focus text-base light-border-2 min-h-[56px] border">
                    <SelectTrigger>
                      <SelectValue placeholder="Select product" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {productList && productList.map((product) => <SelectItem key={product.id} value={product.id}>
                      {product.label}
                    </SelectItem>)}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-6">
          <FormField
            control={form.control}
            name="countries"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full text-start">
                <FormLabel>Country</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl className="no-focus text-base light-border-2 min-h-[56px] border">
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {countriesList && countriesList.map((product) => <SelectItem key={product.id} value={product.id}>
                      {product.label}
                    </SelectItem>)}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="states"
            render={({ field }) => (
              <FormItem className="space-y-1.5 w-full">
                <FormLabel>State</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your state"
                    className="no-focus text-base light-border-2 min-h-[56px] border"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button variant="secondary" type="submit" size="lg" className="gap-2" disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : 'Submit'}
          {!isSubmitting && <ArrowRight size={16} />}
        </Button>
      </form>
    </Form>
  )
}

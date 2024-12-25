"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { WebsiteFormData } from "./types";

const features = [
  { id: "store", label: "Online Store" },
  { id: "booking", label: "Appointment Booking" },
  { id: "contact", label: "Contact Form" },
  { id: "blog", label: "Blog or News" },
  { id: "testimonials", label: "Testimonials" },
  { id: "portfolio", label: "Portfolio Gallery" },
  { id: "reviews", label: "Customer Reviews" },
];

export function FeaturesSection({ form }: { form: UseFormReturn<WebsiteFormData> }) {
  return (
    <div className="space-y-4">
      <FormLabel>Website Features</FormLabel>
      {features.map((feature) => (
        <FormField
          key={feature.id}
          control={form.control}
          name="features"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value?.includes(feature.id)}
                  onCheckedChange={(checked) => {
                    const value = field.value || [];
                    if (checked) {
                      field.onChange([...value, feature.id]);
                    } else {
                      field.onChange(value.filter((item) => item !== feature.id));
                    }
                  }}
                />
              </FormControl>
              <FormLabel className="font-normal">{feature.label}</FormLabel>
            </FormItem>
          )}
        />
      ))}
    </div>
  );
}
"use client";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { WebsiteFormData } from "./types";

export function TargetAudienceSection({ form }: { form: UseFormReturn<WebsiteFormData> }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Target Audience</h3>
      <FormField
        control={form.control}
        name="targetAudience.age"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Age Group</FormLabel>
            <FormControl>
              <Input placeholder="e.g., 18-35" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="targetAudience.location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Geographic Location</FormLabel>
            <FormControl>
              <Input placeholder="e.g., North America" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="targetAudience.interests"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Specific Interests</FormLabel>
            <FormControl>
              <Input placeholder="e.g., Technology, Fashion" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
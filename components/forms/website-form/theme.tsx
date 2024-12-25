"use client";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { WebsiteFormData } from "./types";

export function ThemeSection({ form }: { form: UseFormReturn<WebsiteFormData> }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Theme Preferences</h3>
      <FormField
        control={form.control}
        name="theme.colorScheme"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Color Scheme</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select color scheme" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="modern">Modern & Minimal</SelectItem>
                <SelectItem value="bold">Bold & Vibrant</SelectItem>
                <SelectItem value="classic">Classic & Professional</SelectItem>
                <SelectItem value="natural">Natural & Earthy</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="theme.mood"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Website Mood</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select website mood" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="warm">Warm & Friendly</SelectItem>
                <SelectItem value="vibrant">Vibrant & Energetic</SelectItem>
                <SelectItem value="minimal">Clean & Minimal</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
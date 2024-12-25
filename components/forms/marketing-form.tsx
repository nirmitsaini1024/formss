"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  socialMedia: z.array(z.string()).min(1, "Please select at least one platform"),
  preferredMarketing: z.string().min(1, "Please select a preferred marketing platform"),
  targetLocations: z.string().min(1, "Please specify target locations"),
  contentTone: z.string().min(1, "Please select content tone"),
  blogging: z.object({
    needed: z.boolean(),
    frequency: z.string().optional(),
    topics: z.string().optional(),
  }),
  budget: z.object({
    type: z.enum(["monthly", "project"]),
    amount: z.string().min(1, "Please specify budget amount"),
  }),
  marketingMaterials: z.array(z.string()),
  kpis: z.array(z.string()).min(1, "Please select at least one KPI"),
  additionalRequirements: z.string().optional(),
  challenges: z.string().optional(),
  notes: z.string().optional(),
});

const socialPlatforms = [
  { id: "instagram", label: "Instagram" },
  { id: "facebook", label: "Facebook" },
  { id: "linkedin", label: "LinkedIn" },
  { id: "twitter", label: "Twitter" },
  { id: "youtube", label: "YouTube" },
];

const marketingMaterials = [
  { id: "posters", label: "Posters" },
  { id: "videos", label: "Video Ads" },
  { id: "social", label: "Social Media Posts" },
];

const kpis = [
  { id: "sales", label: "Sales Growth" },
  { id: "traffic", label: "Website Traffic" },
  { id: "engagement", label: "Social Media Engagement" },
  { id: "retention", label: "Customer Retention" },
];

export function MarketingForm({ onSubmit, formData }: { onSubmit: (data: any) => void, formData: any }) {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      socialMedia: [],
      preferredMarketing: "",
      targetLocations: "",
      contentTone: "",
      blogging: {
        needed: false,
        frequency: "",
        topics: "",
      },
      budget: {
        type: "monthly",
        amount: "",
      },
      marketingMaterials: [],
      kpis: [],
      additionalRequirements: "",
      challenges: "",
      notes: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    const finalData = {
      ...formData,
      marketing: data,
    };
    
    onSubmit(finalData);
    
    toast({
      title: "Success!",
      description: "Your business profile has been submitted successfully.",
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormLabel>Social Media Platforms</FormLabel>
          {socialPlatforms.map((platform) => (
            <FormField
              key={platform.id}
              control={form.control}
              name="socialMedia"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(platform.id)}
                      onCheckedChange={(checked) => {
                        const value = field.value || [];
                        if (checked) {
                          field.onChange([...value, platform.id]);
                        } else {
                          field.onChange(value.filter((item) => item !== platform.id));
                        }
                      }}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">{platform.label}</FormLabel>
                </FormItem>
              )}
            />
          ))}
        </div>

        <FormField
          control={form.control}
          name="preferredMarketing"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Marketing Platform</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferred platform" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="instagram">Instagram</SelectItem>
                  <SelectItem value="facebook">Facebook</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="twitter">Twitter</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contentTone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Content Tone</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select content tone" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="friendly">Friendly</SelectItem>
                  <SelectItem value="casual">Casual</SelectItem>
                  <SelectItem value="formal">Formal</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <FormLabel>Marketing Materials Needed</FormLabel>
          {marketingMaterials.map((material) => (
            <FormField
              key={material.id}
              control={form.control}
              name="marketingMaterials"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(material.id)}
                      onCheckedChange={(checked) => {
                        const value = field.value || [];
                        if (checked) {
                          field.onChange([...value, material.id]);
                        } else {
                          field.onChange(value.filter((item) => item !== material.id));
                        }
                      }}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">{material.label}</FormLabel>
                </FormItem>
              )}
            />
          ))}
        </div>

        <div className="space-y-4">
          <FormLabel>Key Performance Indicators (KPIs)</FormLabel>
          {kpis.map((kpi) => (
            <FormField
              key={kpi.id}
              control={form.control}
              name="kpis"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes(kpi.id)}
                      onCheckedChange={(checked) => {
                        const value = field.value || [];
                        if (checked) {
                          field.onChange([...value, kpi.id]);
                        } else {
                          field.onChange(value.filter((item) => item !== kpi.id));
                        }
                      }}
                    />
                  </FormControl>
                  <FormLabel className="font-normal">{kpi.label}</FormLabel>
                </FormItem>
              )}
            />
          ))}
        </div>

        <FormField
          control={form.control}
          name="challenges"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Previous Marketing Challenges</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about any marketing challenges you've faced"
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Notes</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Any other specific needs or features not covered above?"
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
  );
}
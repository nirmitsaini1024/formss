import { z } from "zod";

export const websiteFormSchema = z.object({
  targetAudience: z.object({
    age: z.string().min(1, "Please specify target age group"),
    location: z.string().min(1, "Please specify target location"),
    interests: z.string().min(1, "Please specify target interests"),
  }),
  currentWebsite: z.string().optional(),
  features: z.array(z.string()).min(1, "Please select at least one feature"),
  theme: z.object({
    colorScheme: z.string().min(1, "Please select a color scheme"),
    mood: z.string().min(1, "Please select a mood"),
  }),
  fontPreference: z.string().min(1, "Please select a font preference"),
  logo: z.enum(["existing", "new"]),
});

export type WebsiteFormData = z.infer<typeof websiteFormSchema>;
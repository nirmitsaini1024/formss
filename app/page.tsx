"use client";

import { BusinessForm } from "@/components/forms/business-form";
import { WebsiteForm } from "@/components/forms/website-form";
import { MarketingForm } from "@/components/forms/marketing-form";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Building2, Globe, Megaphone } from "lucide-react";

export default function Home() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const updateFormData = (data: any) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prev) => prev + 1);
  };

  const progress = ((step - 1) / 3) * 100;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Business Profile Setup</h1>
            <p className="text-muted-foreground">Tell us about your business to get started</p>
          </div>

          <div className="space-y-4">
            <Progress value={progress} className="h-2" />
            
            <div className="flex justify-between px-2">
              <div className="flex flex-col items-center">
                <div className={`rounded-full p-2 ${step >= 1 ? 'bg-primary' : 'bg-muted'}`}>
                  <Building2 className="h-6 w-6" />
                </div>
                <span className="text-sm mt-1">Business</span>
              </div>
              <div className="flex flex-col items-center">
                <div className={`rounded-full p-2 ${step >= 2 ? 'bg-primary' : 'bg-muted'}`}>
                  <Globe className="h-6 w-6" />
                </div>
                <span className="text-sm mt-1">Website</span>
              </div>
              <div className="flex flex-col items-center">
                <div className={`rounded-full p-2 ${step >= 3 ? 'bg-primary' : 'bg-muted'}`}>
                  <Megaphone className="h-6 w-6" />
                </div>
                <span className="text-sm mt-1">Marketing</span>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-lg">
            {step === 1 && <BusinessForm onSubmit={updateFormData} />}
            {step === 2 && <WebsiteForm onSubmit={updateFormData} />}
            {step === 3 && <MarketingForm onSubmit={updateFormData} formData={formData} />}
          </div>
        </div>
      </div>
    </main>
  );
}
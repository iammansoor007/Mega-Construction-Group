"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MouseProvider } from "@/hooks/useMousePosition";
import { FormProvider } from "@/context/FormContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { useState } from "react";
import QuickQuote from "@/components/QuickQuote";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <MouseProvider>
        <FormProvider>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
            <QuickQuote />
          </TooltipProvider>
        </FormProvider>
      </MouseProvider>
    </QueryClientProvider>
  );
}

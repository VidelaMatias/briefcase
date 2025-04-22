"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { Analytics } from "@vercel/analytics/react"



export default function ClientLayout({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Analytics />
      {children}
    </QueryClientProvider>
  );
}
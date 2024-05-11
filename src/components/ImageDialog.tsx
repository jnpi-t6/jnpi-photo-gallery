"use client";

import { DialogContent, Dialog } from "@/components/ui/dialog";
import { ReactNode } from "react";
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
}

export function ImageDialog({ children }: Props) {
  const router = useRouter();

  const handleOnOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  return (
    <Dialog onOpenChange={handleOnOpenChange}>
      <DialogContent className="sm:max-w-[800px]">{children}</DialogContent>
    </Dialog>
  );
}

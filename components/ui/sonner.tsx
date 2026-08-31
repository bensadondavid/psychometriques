"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: (
          <CircleCheckIcon className="size-4" />
        ),
        info: (
          <InfoIcon className="size-4" />
        ),
        warning: (
          <TriangleAlertIcon className="size-4" />
        ),
        error: (
          <OctagonXIcon className="size-4" />
        ),
        loading: (
          <Loader2Icon className="size-4 animate-spin" />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--card)",
          "--normal-text": "var(--card-foreground)",
          "--normal-border": "var(--border)",
          "--success-bg": "var(--card)",
          "--success-text": "var(--primary)",
          "--success-border": "var(--accent)",
          "--info-bg": "var(--secondary)",
          "--info-text": "var(--secondary-foreground)",
          "--info-border": "var(--border)",
          "--warning-bg": "var(--secondary)",
          "--warning-text": "var(--primary)",
          "--warning-border": "var(--accent)",
          "--error-bg": "var(--primary)",
          "--error-text": "var(--primary-foreground)",
          "--error-border": "var(--accent)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      richColors
      toastOptions={{
        classNames: {
          toast: "font-sans shadow-[0_14px_40px_rgb(69_18_29_/_0.16)]",
          title: "font-semibold tracking-[-0.01em]",
          description: "opacity-75",
          icon: "text-current",
          actionButton: "!bg-[#d6b476] !text-[#351018] hover:!bg-[#c9a465]",
          cancelButton: "!bg-[#e8dfd2] !text-[#45121d] hover:!bg-[#ddd1c1]",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }

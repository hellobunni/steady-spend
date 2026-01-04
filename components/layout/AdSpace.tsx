"use client";

import { useEffect } from "react";

type AdSpaceProps = {
  size?: "banner" | "sidebar" | "bottom";
  id?: string;
  className?: string;
};

export default function AdSpace({ size = "banner", id, className = "" }: AdSpaceProps) {
  const sizes = {
    banner: {
      height: "h-24",
      label: "728 x 90",
      description: "Advertisement Space",
    },
    sidebar: {
      height: "h-[600px]",
      label: "160 x 600",
      description: "Ad Space",
    },
    bottom: {
      height: "h-32",
      label: "728 x 90 or 970 x 90",
      description: "Advertisement Space",
    },
  };

  const config = sizes[size];
  const adId = id ? `ad-${id}` : undefined;

  // Check if AdSense is enabled (set via environment variable)
  const adsenseEnabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true";
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  const adsenseSlotId = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID;

  useEffect(() => {
    // Load AdSense script if enabled and not already loaded
    if (adsenseEnabled && adsenseClientId && typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`;
      script.async = true;
      script.crossOrigin = "anonymous";

      // Only add if not already present
      if (!document.querySelector(`script[src*="adsbygoogle"]`)) {
        document.head.appendChild(script);
      }
    }
  }, [adsenseEnabled, adsenseClientId]);

  useEffect(() => {
    // Initialize AdSense ad if enabled and configured
    if (adsenseEnabled && adsenseClientId && adsenseSlotId && id && typeof window !== "undefined") {
      try {
        // @ts-expect-error - adsbygoogle is loaded dynamically
        if (window.adsbygoogle && !window.adsbygoogle.loaded) {
          // @ts-expect-error - adsbygoogle is loaded dynamically
          window.adsbygoogle.push({});
        }
      } catch (err) {
        console.error("AdSense error:", err);
      }
    }
  }, [adsenseEnabled, adsenseClientId, adsenseSlotId, id]);

  // If AdSense is enabled and configured, render AdSense ad
  if (adsenseEnabled && adsenseClientId && adsenseSlotId && id && typeof window !== "undefined") {
    return (
      <div id={adId} className={`${config.height} ${className}`}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={adsenseClientId}
          data-ad-slot={adsenseSlotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // Otherwise, show placeholder (for development/pre-AdSense)
  return (
    <div
      id={adId}
      className={`${config.height} bg-white rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center ${className}`}
    >
      <div className="text-center">
        <p className="text-sm font-medium text-gray-400">{config.description}</p>
        <p className="text-xs text-gray-300 mt-1">{config.label}</p>
      </div>
    </div>
  );
}

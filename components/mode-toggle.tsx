"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export function ModeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    // Ensures the component is only rendered on the client after hydration
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Prevent rendering until the theme is loaded to avoid mismatch
        return null;
    }

    return (
        <Button variant={"ghost"} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
}

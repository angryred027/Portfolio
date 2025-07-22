"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "pol-ui";
import { memo, useMemo, MouseEvent } from "react";

export const NavItem = memo(function NavItem({
  path,
  name,
}: Readonly<{
  path: string;
  name: string;
}>) {
  const pathname = usePathname() || "/";
  const normalizedPath = pathname.includes("/blog/")
    ? "/blog"
    : pathname.includes("/projects/")
      ? "/projects"
      : pathname;

  const isActive = path === normalizedPath;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (path === "/experiences") {
      const currentPath = window.location.pathname;
      if (currentPath !== "/") {
        // Navigate to homepage with query param
        e.preventDefault();
        window.location.href = "/?scrollTo=experiences";
      } else {
        // Scroll directly if already on homepage
        e.preventDefault();
        const el = document.getElementById("experiences");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const motionHighlight = useMemo(
    () => (
      <motion.div
        layoutId="sidebar"
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 30,
        }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          height: "100%",
          borderRadius: "9999px",
          background: "var(--color-primary-500)",
        }}
      />
    ),
    [normalizedPath],
  );

  return (
    <Link
      href={path}
      hrefLang="en-us"
      tabIndex={isActive ? -1 : undefined}
      onClick={handleClick}
      className={cn(
        "flex rounded-xl align-middle outline-0 outline-primary transition-all focus-visible:outline-1",
        {
          "text-secondary-900/70 hover:brightness-150 dark:text-secondary-50/70": !isActive,
          "pointer-events-none text-secondary-900": isActive,
        },
      )}
    >
      <span
        className={cn(
          "relative inline-block px-2 py-1 transition-colors duration-200",
          !isActive && "hover:text-primary-300"
        )}
      >
        {name}
        {isActive ? motionHighlight : null}
      </span>
    </Link>
  );
});

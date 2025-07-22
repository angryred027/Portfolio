"use client";

import { LayoutGroup } from "framer-motion";
import { useMemo } from "react";
import { NavItem } from "./NavItem";

const navItems = {
  "/": { name: "Home" },
  "/experiences": { name: "Experiences" },
  "/projects": { name: "Projects" },
  "/blog": { name: "Blog" },
};

export function Navbar() {
  return (
    <aside
      className="mb-2 flex justify-center tracking-tight md:justify-start md:p-4"
      style={{
        zIndex: 999,
      }}
    >
      <div className="sticky top-20 flex items-center gap-2">
        {useMemo(
          () => (
            <LayoutGroup>
              <nav className="relative flex w-full flex-row items-start">
                {Object.entries(navItems).map(([path, { name }]) => {
                  return <NavItem key={path} path={path} name={name} />;
                })}
              </nav>
            </LayoutGroup>
          ),
          [navItems],
        )}
      </div>
    </aside>
  );
}

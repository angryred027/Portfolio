"use client";
import Image from "next/image";
import { largeProfileAvatar } from "../largeProfileAvatar";

export function Avatar() {
  return (
    <Image
      placeholder={largeProfileAvatar}
      src="/media/me.png"
      className="z-30 hidden rounded-full bg-primary-300 md:flex"
      alt="Minami Haruto's profile image"
      width={150}
      height={150}
      title="Minami Haruto's profile image"
    />
  );
}

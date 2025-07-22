"use client";
import Image from "next/image";

type Status = "online" | "offline" | "busy" | "away";

export function Avatar({ status = "online" }: { status?: Status }) {
  let statusColor = "bg-green-500";
  if (status === "offline") statusColor = "bg-gray-400";
  else if (status === "busy") statusColor = "bg-red-500";
  else if (status === "away") statusColor = "bg-yellow-400";

  return (
    <div className="z-30 hidden relative w-[150px] h-[150px] rounded-full shadow-lg bg-white p-[4px] ring-[3px] ring-primary-500 md:flex">
      <Image
        src="/media/me.png"
        alt="Minami Haruto's profile image"
        title="Minami Haruto's profile image"
        className="rounded-full object-cover"
        width={150}
        height={150}
      />
      {/* Status Badge */}
      <span className="absolute bottom-1 right-4 flex items-center justify-center w-6 h-6 rounded-full bg-white p-[2px] ring-[3px] ring-secondary-50">
        <span
          className={`w-full h-full rounded-full ${statusColor}`}
          title={`Status: ${status}`}
        />
      </span>
    </div>
  );
}

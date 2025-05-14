import type { Team } from "@/types"
import Image from "next/image"

interface TeamMembersProps {
  team: Team
}

export default function TeamMembers({ team }: TeamMembersProps) {
  return (
    <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {team.members.map((member) => (
        <div
          key={member.id}
          className="flex flex-col items-center rounded-2xl border-2 border-gray-200 p-6 shadow-sm transition-transform hover:scale-105"
        >
          <div className="mb-4 size-24 overflow-hidden rounded-full border-2 border-gray-200">
            <Image
              src={member.photo}
              alt={member.name}
              width={96}
              height={96}
              className="size-full object-cover"
            />
          </div>
          <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
          <p className="mb-1 text-gray-600">{member.role}</p>
          <p className="text-sm text-gray-500">{member.location}</p>
        </div>
      ))}
    </div>
  )
}

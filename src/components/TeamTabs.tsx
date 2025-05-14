"use client"

import type { Team } from "@/types"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface TeamTabsProps {
  teams: Team[]
  activeTeam: number
  onTeamChange: (index: number) => void
}

export default function TeamTabs({ teams, activeTeam, onTeamChange }: TeamTabsProps) {
  return (
    <Tabs defaultValue={activeTeam.toString()} onValueChange={(value) => onTeamChange(Number.parseInt(value))}>
      <TabsList className="mb-2 w-full justify-start overflow-x-auto">
        {teams.map((team, index) => (
          <TabsTrigger
            key={team.id}
            value={index.toString()}
            className="cursor-pointer min-w-[120px] bg-zinc-100 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#ff0094] to-[#02beed] data-[state=active]:text-white border-none"
          >
            {team.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}

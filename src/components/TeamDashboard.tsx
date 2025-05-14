"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TeamTabs from "./TeamTabs";
import { teamData } from "@/data/teams";
import TeamMembers from "./TeamMembers";
import { Button } from "./ui/button";
import InsightsCarousel from "./InsightsCarousel";
import InsightsModal from "./InsightsModal";

const TeamDashboard = () => {
  const [activeTeam, setActiveTeam] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTeams, setSelectedTeams] = useState<number[]>([0]);

  const handleTeamChange = (index: number) => {
    setActiveTeam(index);
  };

  const toggleTeamSelection = (teamIndex: number) => {
    setSelectedTeams((prev) => {
      if (prev.includes(teamIndex)) {
        return prev.filter((t) => t !== teamIndex);
      } else {
        if (prev.length < 5) {
          return [...prev, teamIndex];
        }
        return prev;
      }
    });
  };
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-auto p-4">
        <div className="mx-auto max-w-7xl rounded-2xl border-2 border-gray-200 bg-white p-4 shadow-sm">
          <TeamTabs
            teams={teamData}
            activeTeam={activeTeam}
            onTeamChange={handleTeamChange}
          />

          <h2 className="mb-6 mt-4 text-2xl font-medium">Participantes</h2>

          <div className="relative mb-8 flex flex-col items-center">
            <TeamMembers team={teamData[activeTeam]} />
            <div className="mt-4 w-full max-w-md">
              <InsightsCarousel insights={teamData[activeTeam].insights} />
            </div>

            <Button
              onClick={() => setIsModalOpen(true)}
              className="mt-8 rounded-full bg-gradient-to-l from-[#ff0094] to-[#02beed] shadow-2xl cursor-pointer"
            >
              Ver Insights
            </Button>
          </div>
        </div>
      </main>

       <InsightsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        teams={teamData}
        selectedTeams={selectedTeams}
        toggleTeamSelection={toggleTeamSelection}
      />
    </div>
  );
};

export default TeamDashboard;

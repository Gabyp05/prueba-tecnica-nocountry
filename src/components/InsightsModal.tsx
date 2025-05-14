"use client";

import { CheckCircleIcon } from "lucide-react";
import type { Team } from "@/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface InsightsModalProps {
  isOpen: boolean;
  onClose: () => void;
  teams: Team[];
  selectedTeams: number[];
  toggleTeamSelection: (teamIndex: number) => void;
}

const InsightsModal = ({
  isOpen,
  onClose,
  teams,
  selectedTeams,
  toggleTeamSelection,
}: InsightsModalProps) => {
  const calculateTotalPrice = () => {
    return selectedTeams.length * 1500;
  };
  return (
    <Dialog open={isOpen} onOpenChange={(open: any) => !open && onClose()}>
      <DialogContent className="max-h-[90vh] max-w-3xl overflow-auto sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Insights de Equipos
          </DialogTitle>
        </DialogHeader>

        <div className="mb-6">
          <h3 className="mb-2 text-lg font-medium">
            Selecciona hasta 5 equipos:
          </h3>
          <div className="flex flex-wrap gap-2">
            {teams.map((team, index) => (
              <Button
                key={team.id}
                onClick={() => toggleTeamSelection(index)}
                variant={
                  selectedTeams.includes(index) ? "secondary" : "outline"
                }
                className="rounded-full"
              >
                {team.name}
                {selectedTeams.includes(index) && (
                  <CheckCircleIcon className="ml-1 inline h-4 w-4" />
                )}
              </Button>
            ))}
          </div>
        </div>

        <div className="mb-6 grid gap-4">
          {selectedTeams.map((teamIndex) => {
            const team = teams[teamIndex];
            return (
              <div
                key={team.id}
                className="flex flex-col gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4"
              >
                <h3 className="text-lg font-medium">{team.name}</h3>
                <div className="flex flex-col">
                  <p className="font-semibold">Participantes:</p>
                  <div className="grid gap-2">
                    {team.members.map((member, i) => (
                      <div
                        key={i}
                        className="flex flex-row items-center gap-2 text-sm"
                      >
                        <div className="h-2 w-2 rounded-full bg-pink-500"></div>
                        <span>{member.name} -</span>
                        <span>{member.role} -</span>
                        <span>{member.location}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Insight:</p>
                  <div className="grid gap-2">
                    {team.insights.map((insight, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        <span>{insight.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-6 rounded-lg bg-gray-100 p-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium">Precio Total:</span>
            <span className="text-xl font-bold">
              ${calculateTotalPrice().toLocaleString()}
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Basado en {selectedTeams.length} equipo(s) seleccionado(s)
          </p>
        </div>

        <DialogFooter>
          <Button className="rounded-full bg-gradient-to-l from-[#ff0094] to-[#02beed]">
            Comprar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InsightsModal;

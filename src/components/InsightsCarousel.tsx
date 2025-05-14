"use client";

import { MessageSquareIcon, UsersIcon, CalendarIcon } from "lucide-react";
import type { Insight } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface InsightsCarouselProps {
  insights: Insight[];
}

const InsightsCarousel = ({ insights }: InsightsCarouselProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "messages":
        return <MessageSquareIcon className="h-6 w-6 text-blue-500" />;
      case "participation":
        return <UsersIcon className="h-6 w-6 text-green-500" />;
      case "attendance":
        return <CalendarIcon className="h-6 w-6 text-purple-500" />;
      default:
        return <MessageSquareIcon className="h-6 w-6 text-blue-500" />;
    }
  };
  return (
    <Carousel className="w-full max-w-md">
      <CarouselContent>
        {insights.map((insight, index) => (
          <CarouselItem key={index}>
            <div className="flex h-32 flex-col items-center justify-center rounded-2xl border-2 border-gray-200 bg-white p-6 text-center">
              {getIcon(insight.type)}
              <p className="mt-2 text-xl font-medium">{insight.text}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 cursor-pointer" />
      <CarouselNext className="right-0 cursor-pointer" />
    </Carousel>
  );
};

export default InsightsCarousel;

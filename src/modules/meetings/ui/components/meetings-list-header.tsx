"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon, XCircleIcon } from "lucide-react";

import { NewMeetingDialog } from "./new-meeting-dialog";
import { MeetingsSearchFilter } from "./meetings-search-filter";
import { StatusFilter } from "./status-filter";
import { AgentIdFilter } from "./agents-id-filter";
import { useMeetingsFilters } from "../../hooks/use-meetings-filters";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { DEFAULT_PAGE } from "@/constants";

export const MeetingsListHeader = () => {
  // ✅ Use the filters hook (supports query-based filter persistence)
  const [ filters, setFilters ] = useMeetingsFilters();

  // ✅ State to control the "New Meeting" dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // ✅ Check if any filter is currently active
  const isAnyFilterModified =
    !!filters.status || !!filters.search || !!filters.agentId;

  // ✅ Clear all filters and reset pagination
  const onClearFilters = () => {
    setFilters({
      status: null,
      agentId: "",
      search: "",
      page: DEFAULT_PAGE,
    });
  };

  return (
    <>
      <NewMeetingDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />

      <div className="py-4 px-4 md:px-8 flex flex-col gap-y-4">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <h5 className="font-medium text-xl">My Meetings</h5>

          <Button onClick={() => setIsDialogOpen(true)}>
            <PlusIcon className="mr-2 size-4" />
            New Meeting
          </Button>
        </div>
        <ScrollArea>
        {/* Filters Section */}
        <div className="flex items-center gap-x-2 p-1">
          <MeetingsSearchFilter />
          <StatusFilter />
          <AgentIdFilter />

          {isAnyFilterModified && (
            <Button variant="outline" onClick={onClearFilters}>
              <XCircleIcon className="size-4 mr-1" />
              Clear
            </Button>
          )}
        </div>
        <ScrollBar orientation="horizontal"/>
        </ScrollArea>
      </div>
    </>
  );
};

"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

import { CommandSelect } from "@/components/command-select";
import { GeneratedAvatar } from "@/components/generated-avatar";

import { useMeetingsFilters } from "../../hooks/use-meetings-filters";

export const AgentIdFilter = () => {
  // ✅ Query filter state from URL
  const [ filters, setFilters ] = useMeetingsFilters();

  // ✅ Access TRPC client
  const trpc = useTRPC();

  // ✅ Local state for agent search input
  const [agentSearch, setAgentSearch] = useState("");

  // ✅ Fetch agents list dynamically from backend
  const { data } = useQuery(
    trpc.agents.getMany.queryOptions({
      pageSize: 100,
      search: agentSearch,
    })
  );

  return (
    <CommandSelect
      className="h-9"
      placeholder="Agent"
      // ✅ Build dropdown options dynamically
      options={(data?.items ?? []).map((agent) => ({
        id: agent.id,
        value: agent.id,
        children: (
          <div className="flex items-center gap-x-2">
            <GeneratedAvatar
              seed={agent.name}
              variant="botttsNeutral"
              className="size-4"
            />
            {agent.name}
          </div>
        ),
      }))}
      // ✅ Update query state when user selects an agent
      onSelect={(value) => setFilters({ agentId: value })}
      // ✅ Update the local search text for filtering agents
      onSearch={setAgentSearch}
      // ✅ Current selected value
      value={filters.agentId ?? ""}
    />
  );
};

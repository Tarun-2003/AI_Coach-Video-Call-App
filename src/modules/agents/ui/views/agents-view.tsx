"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { LoadingState } from "@/components/loading-state";
import { Description } from "@radix-ui/react-dialog";
import { ErrorState } from "@/components/error-state";
 
export const AgentsView = () => {
  const trpc = useTRPC();
  const { data} = useSuspenseQuery(
    trpc.agents.getMany.queryOptions()
  );

return(
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
export const AgentsViewLoading=()=>{
    return (<LoadingState
    title="Loading agents" description="This may take a few seconds"

    />)
}

export const AgentsViewError=()=>{
    return (
               <ErrorState
                title="Error loading agents"
                description="Something went Wrong"
                />
    )
}
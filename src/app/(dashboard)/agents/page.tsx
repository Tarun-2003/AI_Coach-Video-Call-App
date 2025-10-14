import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
// import { getQueryClient, trpc } from "@trpc/server";
import { getQueryClient } from "@/trpc/server";
import { trpc } from "@/trpc/server";
import { AgentsView, AgentsViewError, AgentsViewLoading } from "@/modules/agents/ui/views/agents-view";
import { Suspense } from "react";
import { LoadingState } from "@/components/loading-state";
// import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import {ErrorBoundary} from "react-error-boundary";
import { AgentsListHeader } from "@/modules/agents/ui/components/agents-list-header";

const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.agents.getMany.queryOptions());


  return (
    <>
   <AgentsListHeader />
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<AgentsViewLoading/>}>
      <ErrorBoundary fallback={<AgentsViewError/>}>
          <AgentsView />
      </ErrorBoundary>
      </Suspense>
    </HydrationBoundary>
    </>
  );
};

export default Page;

import { Suspense } from "react";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

import { auth } from "@/lib/auth"; // Better Auth integration
import { trpc, getQueryClient } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { MeetingIdView, MeetingIdViewError, MeetingIdViewLoading } from "@/modules/meetings/ui/views/meeting-id-view";

interface Props {
  params: Promise<{
    meetingId: string;
  }>;
}

const Page = async ({ params }: Props) => {
  // ✅ Await dynamic route params
  const { meetingId } = await params;

  // ✅ Check authentication via Better Auth
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  // ✅ Create query client & prefetch meeting data
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(
    trpc.meetings.getOne.queryOptions({ id: meetingId })
  );


  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Suspense fallback={<MeetingIdViewLoading/>}>
        <ErrorBoundary fallback={<MeetingIdViewError/>}>
        <MeetingIdView meetingId={meetingId}/>
        </ErrorBoundary>
      </Suspense>
    </HydrationBoundary>
  );
};

export default Page;
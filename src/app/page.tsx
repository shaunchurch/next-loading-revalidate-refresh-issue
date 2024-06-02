import { DoServerThing } from "@/components/DoServerThings";
import { SlowComponent } from "@/components/SlowComponent";
import { delay } from "@/lib/delay";
import Link from "next/link";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function Home() {
  await delay(500);
  return (
    <main className="flex flex-col p-24 space-y-10">
      <DoServerThing />
      <Suspense
        fallback={<div className="text-red-400">Loading slow things...</div>}
      >
        <SlowComponent />
      </Suspense>
      <div>
        <p></p>
        <ul className="list-disc">
          <li>
            The SlowComponent reloads the first time a server action that runs
            revalidatePath is called.
          </li>
          <li>
            The form state does not update the first time the action is run. See
            console log for state logging in the browser.
          </li>
          <li>
            This is only a problem when both a loading.tsx file is present and
            revalidatePath is called.
          </li>
          <li>
            Second time onwards, the form state updates correctly, and the
            slowcomponent does not reload.
          </li>

          <li>
            Source code for this example:{" "}
            <Link
              href="https://github.com/shaunchurch/next-loading-revalidate-refresh-issue"
              className="underline hover:text-zinc-400"
            >
              https://github.com/shaunchurch/next-loading-revalidate-refresh-issue
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

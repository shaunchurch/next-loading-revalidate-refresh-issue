import { DoServerThing } from "@/components/DoServerThings";
import { SlowComponent } from "@/components/SlowComponent";
import { delay } from "@/lib/delay";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default async function Home() {
  await delay(500);
  return (
    <main className="flex flex-col p-24 space-y-10">
      <DoServerThing />
      <Suspense fallback={<div>Loading slow things...</div>}>
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
            The form state does not update the first time the action is run.
          </li>
          <li>
            This is only a problem when a loading.tsx file is present and
            revalidatePath is called.
          </li>
          <li>
            Second time onwards, the form state updates correctly, and the
            slowcomponent does not reload.
          </li>
        </ul>
      </div>
    </main>
  );
}

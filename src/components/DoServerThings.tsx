"use client";

import { doServerAction } from "@/actions/server.action";
import { useFormState, useFormStatus } from "react-dom";

export function DoServerThing() {
  const [state, action] = useFormState(doServerAction, {
    success: false,
    timestamp: "Not done",
  });

  console.log("action state", state);

  return (
    <div className="flex flex-col space-y-10">
      <h1>DoServerThing</h1>
      <form action={action}>
        <SubmitButton />
      </form>
      <span className="text-xs">Server: {state.timestamp}</span>
    </div>
  );
}

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="border rounded px-3 py-2">
      {pending ? "Submitting..." : "Do the server thing"}
    </button>
  );
}

import { delay } from "@/lib/delay";

export async function SlowComponent() {
  await delay();
  return <div>SlowComponent things go here</div>;
}

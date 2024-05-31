export default function Loading() {
  console.log("Loading page run...");
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-slate-200 border-t-slate-900 border-b-slate-900">
        loading
      </div>
    </div>
  );
}

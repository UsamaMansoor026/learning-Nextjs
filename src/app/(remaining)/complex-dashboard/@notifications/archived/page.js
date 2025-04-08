import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <div className="flex flex-col gap-4 border border-white p-10 w-[400px] m-4">
      <h1>Archived Notifications</h1>
      <Link
        href="/complex-dashboard"
        className="bg-purple-500 p-3 my-4 text-center"
      >
        Default
      </Link>
    </div>
  );
}

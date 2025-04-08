import Link from "next/link";

export default function NotificationsDefault() {
  return (
    <div className="flex flex-col gap-5 border border-white p-10 w-[400px] m-4">
      <h1>Notifications Default</h1>
      <Link
        href="/complex-dashboard/archived"
        className="bg-purple-500 p-3 my-4 text-center"
      >
        Archived
      </Link>
    </div>
  );
}

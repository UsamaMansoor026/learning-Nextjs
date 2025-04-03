import Counter from "@/app/_components/Counter";

export const metadata = {
  title: "Counter",
};

export default function CounterPage() {
  return (
    <h1 className="p-10">
      Counter Page
      <Counter />
    </h1>
  );
}

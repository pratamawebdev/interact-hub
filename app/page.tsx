import HomeLayout from "@/components/layouts/home/HomeLayout";

export const revalidate = 0;

export default function page() {
  return (
    <main>
      <HomeLayout />
    </main>
  );
}

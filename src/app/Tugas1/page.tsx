import Tugas1Component from "@/components/Tugas1/Tugas1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tugas 1 Page",
  description: "Ini Untuk Tugas 1",
};

export default function Tugas1Page() {
  return <Tugas1Component />;
}

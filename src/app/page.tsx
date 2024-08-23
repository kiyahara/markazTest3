import HomeComponent from "@/components/Home/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page - Test Markaz",
  description: "My Homepage",
};

export default function HomePage() {
  return <HomeComponent />;
}

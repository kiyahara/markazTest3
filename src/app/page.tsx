import HomeComponent from "@/components/Home/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page - Test Markaz",
  description: "My Homepage",
  icons: {
    icon: "favicon.ico",
  },
};

export default function HomePage() {
  return <HomeComponent />;
}

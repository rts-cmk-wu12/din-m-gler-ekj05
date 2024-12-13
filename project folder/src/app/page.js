import AppBanner from "@/components/homepage/AppBanner/AppBanner";
import FeaturedEmployees from "@/components/homepage/FeaturedEmployees/FeaturedEmployees";
import FeaturedProperties from "@/components/homepage/FeaturedProperties/FeaturedProperties";
import Hero from "@/components/homepage/Hero/Hero";
import InfoBlock from "@/components/homepage/InfoBlock/InfoBlock";
import MailBanner from "@/components/homepage/MailBanner/MailBanner";

export default function Home() {
  return (
    <>
      <Hero/>
      <InfoBlock/>
      <FeaturedProperties/>
      <MailBanner/>
      <FeaturedEmployees/>
      <AppBanner/>
    </>
  )
}
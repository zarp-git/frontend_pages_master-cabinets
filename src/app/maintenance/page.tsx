import { Metadata } from "next";
import MaintenancePage from "@/presentation/pages/maintance/MaintenancePage";
import { COMPANY_NAME } from "@/constants/business-info";

export const metadata: Metadata = {
  title: `Site Under Maintenance | ${COMPANY_NAME}`,
  description:
    "[Maintenance page description — brief message about the site being temporarily unavailable.]",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Maintenance() {
  return <MaintenancePage />;
}

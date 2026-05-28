import EditorialHome from "../src/components/EditorialHome";
import EditorialPanels from "../src/components/EditorialPanels";
import MouseGlow from "../src/components/MouseGlow";
import HorizontalShowcase from "../src/components/HorizontalShowcase";
import KineticTypography from "../src/components/KineticTypography";
import EditorialLoader from "../src/components/EditorialLoader";

export default function Home() {
  return (
    <>
      <EditorialLoader />
      <MouseGlow />
      <EditorialHome />
      <KineticTypography />
      <HorizontalShowcase />
      <EditorialPanels />
    </>
  );
}
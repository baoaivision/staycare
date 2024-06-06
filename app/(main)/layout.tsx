import AppFooter from "@/common/components/footer";
import AppHeader from "@/common/components/header";
import { CommonConstants } from "@/utils/constants";
import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <AppHeader />
      <Box height={CommonConstants.dimensions.appBarHeight} />
      <Box
        display="flex"
        flexDirection="column"
        minHeight={`calc(100vh - ${CommonConstants.dimensions.appBarHeight}px - ${CommonConstants.dimensions.footerHeight}px)`}
      >
        {children}
      </Box>
      <AppFooter />
    </>
  );
}

export default MainLayout;

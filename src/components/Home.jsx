import { useState, useEffect } from "react";
import { AppBar, Toolbar, useMediaQuery, useTheme ,CssBaseline} from "@mui/material";
import Banner from "./Banner";
import ServicesCar from "./ServicesCar";
import Footer from "./footer";
import Adds from "./Adds";
import ServicesAndGallery from './ServicesAndGallery'; 

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setMobile(isMobile);
  }, [isMobile]);


  const displayMobile = () => {
    return (
      <Toolbar>
      {
        <div>
          <div>
            <Banner/>
          </div>
          <div>
             <ServicesCar/>
          </div>
          <div>
            <ServicesAndGallery/>
            </div>
          <Adds/>
          <div>
            <Footer/>
          </div>

        </div>
        }
    </Toolbar>

    );
  };

  const displayDesktop = () => {
    return (
      
      <Toolbar>
        {
          <div>
            <div>
              <Banner/>
            </div>
            <div>
            <ServicesCar/>
            </div>
            <div>
            <ServicesAndGallery/>
            </div>
            <div>
              <Adds/>
            </div>
            <div>
            <Footer/>
          </div>
          </div>
          }
      </Toolbar>

    );
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static" sx={{ boxShadow: "none" }}>{mobile ? displayMobile() : displayDesktop()}</AppBar>
    </>
  );

};

export default Header;

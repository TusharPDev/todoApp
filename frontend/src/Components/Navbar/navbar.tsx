  import * as React from "react";
  import AppBar from "@mui/material/AppBar";
  import Box from "@mui/material/Box";
  import Toolbar from "@mui/material/Toolbar";
  import IconButton from "@mui/material/IconButton";
  import Typography from "@mui/material/Typography";
  import Menu from "@mui/material/Menu";
  import MenuIcon from "@mui/icons-material/Menu";
  import Container from "@mui/material/Container";
  import Avatar from "@mui/material/Avatar";
  import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
  import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
  import Button from "@mui/material/Button";
  import Tooltip from "@mui/material/Tooltip";
  import MenuItem from "@mui/material/MenuItem";
  import AppIcon from "../../assets/images/robot.png";
  import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
  import { Grid } from "@mui/material";
  import { useAtom } from "jotai";
  import "./navbar.css";
  import { themeToggleAtom } from "../../jotai-store/atoms/navbarAtom";
  import useLocalStorage from "use-local-storage";
  import { userAuthAtom } from "../../jotai-store/atoms/authAtom";
  const pages = ["Home", "About Us", "Todo"];
  const settingsAuth = ["Profile", "Account", "Dashboard", "Logout"];
  const settingsNoAuth = ["Features", "Contact us"];

  const Navbar = () => {
    const [theme, setTheme] = useAtom(themeToggleAtom);
    const [isAuth, setIsAuth] = useAtom(userAuthAtom);
    const [mode, setMode] = useLocalStorage("mode", false);

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
      null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
      null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    const handleToggleTheme = () => {
      setMode(!mode);
      
    };

    React.useEffect(()=>{
        setTheme({ ...theme, isDark: !mode });
    },[mode])
    console.log(theme.isDark);
    return (
      <AppBar position="sticky" sx={{ backgroundColor: "#535C91" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
              <img
                style={{ width: "20px", height: "20px" }}
                src={AppIcon}
                alt=""
              />
            </Grid>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              MR.TASKYIE
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, i) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Grid sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
              <img
                style={{ width: "20px", height: "20px" }}
                src={AppIcon}
                alt=""
              />
            </Grid>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              MR.TASKYIE
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0, mt: 1, mr: 3 }}>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "#20165840!important",
                  borderRadius: "10px!important",
                }}
              >
                SignIn
              </Button>
            </Box>
            <Box sx={{ flexGrow: 0, mt: 1, mr: 3 }}>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "#20165840!important",
                  borderRadius: "10px!important",
                }}
              >
                SignUp
              </Button>
            </Box>
            <Box sx={{ flexGrow: 0, mt: 1, mr: 3, cursor: "pointer" }}>
              {!mode ? (
                <LightModeOutlinedIcon sx={{color:"#E8C872"}} onClick={handleToggleTheme} />
              ) : (
                <DarkModeOutlinedIcon
                  onClick={handleToggleTheme}
                  sx={{ color: "#201658" }}
                />
              )}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar sx={{ backgroundColor:"#333A73" }} src="/broken-image.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {isAuth.isAuthenticated
                  ? settingsAuth.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))
                  : settingsNoAuth.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  };
  export default Navbar;

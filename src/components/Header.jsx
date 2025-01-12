import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import StoreLogo from "@mui/icons-material/LocalMallTwoTone";
import { Navigate, NavLink } from "react-router-dom";
import CartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import LoginModal from "./LoginModal";
import { useState } from "react";
import RegisterModal from "./RegisterModal";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { selectProduct } from "../redux/reducers/productSlice";

const pages = [
  { id: 0, menu: "Home", link: "/" },
  { id: 1, menu: "Products", link: "/products" },
  { id: 2, menu: "About", link: "/about" },
  { id: 3, menu: "Contact", link: "/contact" },
];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // State for Login and register
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const handleOpenLogin = () => {
    setOpenLogin(true);
    setOpenRegister(false);
  };
  const handleCloseLogin = () => {
    setOpenLogin(false);
    setAnchorElUser(null);
  };

  // make a state openRegister handleOpenRegister and handleCloseRegister
  const handleOpenRegister = () => {
    setOpenRegister(true);
    setOpenLogin(false);
  };
  const handleCloseRegister = () => {
    setOpenRegister(false);
    setAnchorElUser(null);
  };

  // check the user
  const [user] = useAuthState(auth);

  // Logout function
  const onLogout = async () => {
    try {
      await signOut(auth);
      Navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const cart = useSelector(selectProduct);

  const MenuNav = ({ user }) => {
    return user ? (
      <>
        <MenuItem>{user.email}</MenuItem>
        <MenuItem onClick={onLogout}>Logout</MenuItem>
      </>
    ) : (
      <>
        <MenuItem onClick={handleOpenLogin}>
          <Typography textAlign="center">
            <IconButton>
              <LoginIcon />
            </IconButton>
            Login / Register
          </Typography>
        </MenuItem>
      </>
    );
  };

  return (
    <AppBar position="fixed" sx={{ mb: 5 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <StoreLogo sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <NavLink
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              AJ Store
            </NavLink>
          </Typography>

          {/* untuk mobile */}
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
              {pages.map((page) => (
                <MenuItem key={page.id}>
                  <NavLink
                    to={page.link}
                    className={({ isActive }) =>
                      isActive ? "link-active" : "link-inactive"
                    }
                  >
                    {page.menu}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <StoreLogo sx={{ display: { xs: "flex", md: "none" }}} />
          <Typography
            variant="h5"
            noWrap
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
            <NavLink
              to="/"
              // style textdecoration none
              style={{ textDecoration: "none", color: "inherit" }}
            >
              AJ Store
            </NavLink>
          </Typography>
          {/* untuk desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <MenuItem key={page.id}>
                <NavLink
                  to={page.link}
                  key={page.id}
                  className={({ isActive }) =>
                    isActive ? "link-active" : "link-inactive"
                  }
                >
                  {page.menu}
                </NavLink>
              </MenuItem>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {user ? <Avatar alt={user.email} /> : <Avatar />}
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
              <MenuNav user={user} />
            </Menu>
            <NavLink
              to="/Cart"
              style={{
                marginLeft: "10px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <IconButton size="large">
                <CartIcon />
                <Typography variant="caption">{cart.length}</Typography>
              </IconButton>
            </NavLink>

            <LoginModal
              open={openLogin}
              closeModal={handleCloseLogin}
              toRegister={handleOpenRegister}
              // onClose={handleCloseUserMenu}
            />
            <RegisterModal
              open={openRegister}
              closeModal={handleCloseRegister}
              toLogin={handleOpenLogin}
              // onClose={handleCloseUserMenu}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

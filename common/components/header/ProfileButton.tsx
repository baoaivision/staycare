"use client";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useEffect } from "react";
import { IProfile } from "@/interfaces/profile.interface";
import { useRouter } from "next-nprogress-bar";
const ProfileButton = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const [profile, setProfile] = React.useState<IProfile>();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box display={"flex"} alignItems={"center"} gap={"6px"}>
        <IconButton onClick={handleClick}>
          <AccountCircleIcon fontSize="medium" />
        </IconButton>
        <Typography>{profile?.full_name}</Typography>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            router.push("/profile");
            setAnchorEl(null);
          }}
        >
          My Profile
        </MenuItem>
        <MenuItem>Log Out</MenuItem>
      </Menu>
    </>
  );
};

export default ProfileButton;

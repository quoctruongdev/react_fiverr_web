import React from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

export default function BadgeStyle(props) {
  const data = props.data;
  const styles = props.styles;
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  // const content = (
  //   <ul
  //     className="nav-popover-items-content"
  //     style={{ width: "auto", padding: "12px 16px" }}
  //   >
  //     <li>
  //       <a href="#/" className="nav-link">
  //         Dashboard
  //       </a>
  //     </li>
  //   </ul>
  // );

  return (
    // <Popover
    //   placement="bottomRight"
    //   content={props.children}
    //   trigger="click"
    //   destroyTooltipOnHide={false}
    // >
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      variant="dot"
    >
      <Avatar
        sx={{
          bgcolor: deepOrange[500],
          width: styles,
          height: styles,
          cursor: "pointer",
          textTransform: "uppercase",
        }}
        alt={data?.name?.toUpperCase()}
        src={!data?.avatar ? "/static/images/avatar/1.jpg" : data?.avatar}
      />
    </StyledBadge>
    // </Popover>
  );
}

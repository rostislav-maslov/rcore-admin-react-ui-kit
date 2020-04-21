import React, { useState } from "react";
import {
  makeStyles,
  Drawer,
  DrawerProps,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Collapse,
  ListItemIcon,
  SvgIconTypeMap,
  SvgIconProps,
  IconButton,
  Box,
} from "@material-ui/core";
import { LinkProps, Link } from "react-router-dom";
import { ExpandLess, ExpandMore, DoubleArrow } from "@material-ui/icons";
import { CornerBox } from "./CornerBox";
import { colors } from "../../shared/constants/colors";

type MenuItem = {
  label: string;
  icon: React.ReactElement<SvgIconProps>;
  items?: NestedMenuItem[];
};

type NestedMenuItem = {
  linkTo: string; // TODO generalize | разрешить только роутер
  label: string;
};

type Props = {
  logoSrc: React.SVGProps<SVGSVGElement> | string;
  items: MenuItem[];
} & DrawerProps;

export const SidebarMenu: React.FC<Props> = ({ logoSrc, items }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const classes = useStyles();
  const [itemsBooleanMap, setItemsBooleanMap] = useState(
    Array(items.length).fill(false)
  );
  //   const [someItemIsOpen, setSomeItemIsOpen] = useState(false);

  const updateListItemState = (index: number) => {
    const arr = [...itemsBooleanMap];
    //TODO отрефакторить. Закрываем другой любой открытый список, кроме текущего
    const otherOpeneListIndex = arr.findIndex(
      (item, _index) => item === true && _index !== index
    );
    if (otherOpeneListIndex > -1) arr[otherOpeneListIndex] = false;
    arr[index] = !arr[index];
    setItemsBooleanMap(arr);
  };

  return (
    <Drawer
      classes={{
        paper: `${classes.paperList} ${
          isMinimized ? classes.drawerIsClose : classes.drawerIsOpen
        }`,
      }}
      variant="permanent"
      anchor="left"
    >
      <Box className={classes.subheader}>
        <CornerBox />
        <img src={logoSrc} />
        <IconButton
          edge="start"
          onClick={(e) => {
            setIsMinimized(!isMinimized);
          }}
          className={classes.subheaderArrow}
        >
          <DoubleArrow
            style={isMinimized ? { transform: "rotate(180deg)" } : {}}
          />
        </IconButton>
      </Box>
      <List
        component="nav"
        className={isMinimized ? classes.drawerIsClose : classes.drawerIsOpen}
        // subheader={
        //   <ListSubheader>
        // <div className={classes.subheader}>
        //   <CornerBox />
        //   <IconButton
        //     edge="start"
        //     onClick={() => setIsMinimized(!isMinimized)}
        //     className={classes.subheaderArrow}
        //   >
        //     <DoubleArrow />
        //   </IconButton>
        // </div>
        //   </ListSubheader>
        // }
      >
        {items.map((item, index) => (
          <ListItem
            classes={{ root: classes.listItem }}
            key={index}
            onClick={(e) => {
              //   if(itemsBooleanMap[index] === true)
              e.stopPropagation();
              updateListItemState(index);
            }}
            button
          >
            {item.icon && (
              <ListItemIcon className={classes.listItemIcon}>
                {item.icon}
              </ListItemIcon>
            )}
            <ListItemText primary={item.label} />
            {item.items && (
              <>
                {itemsBooleanMap[index] ? <ExpandLess /> : <ExpandMore />}
                <Collapse
                  in={itemsBooleanMap[index]}
                  timeout="auto"
                  unmountOnExit
                >
                  {/* //? Тут нужен MemoryRouter?!  */}
                  <List
                    component="div"
                    className={classes.nestedList}
                    disablePadding
                  >
                    {item.items.map((nestedItem, index) => (
                      <ListItem
                        key={index}
                        className={classes.listItemNested}
                        button
                      >
                        <ListItemText>
                          <Link to={nestedItem.linkTo}>{nestedItem.label}</Link>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

const useStyles = makeStyles((theme) => ({
  paperList: {
    backgroundColor: "#252F34",
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerIsOpen: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerIsClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(8) + 1,
    },
  },
  listItem: {
    color: "#fff",
    lineHeight: 18,
    fontSize: "14px",
    "&:hover": {
      color: colors.info.infoDefault,
      background: "#111B20",
      "& svg": {
        fill: colors.info.infoDefault,
      },
    },
  },
  nestedList: {
    position: "fixed",
    backgroundColor: "#252F34",
    boxShadow:
      "0px 2px 4px rgba(0, 0, 0, 0.2), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14)",
    borderRadius: "0px 4px 4px 0px",
    marginLeft: "15px",
  },
  listItemNested: {
    "& > div > span > a": {
      color: "#fff",
      textDecoration: "none",
    },
    "&:hover > div > span > a": {
      color: colors.info.infoDefault,
    },
  },
  listItemIcon: {
    minWidth: "50px",
    color: "#fff",
  },
  subheader: {
    position: "relative",
    display: "flex",
    height: "80px",
    "& > img": {
      position: "absolute",
      top: "20px",
      left: "30px",
    },
  },
  subheaderArrow: {
    position: "absolute",
    right: "0px",
    top: "15px",
    "& > span > svg": {
      fill: "white",
    },
  },
}));

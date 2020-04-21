import React from "react";
import {
  withStyles,
  Chip,
  Theme,
  Breadcrumbs as MuiBreadcrumbs,
  styled,
} from "@material-ui/core";
import { colors } from "../../shared/constants/colors";
import {
  Link as RouterLink,
  useLocation,
  MemoryRouter,
  Route,
} from "react-router-dom";

type Props = {
  items?: RouterLink[];
};

// TODO вынести карту крошек в отдельный файл
const breadcrumbNameMap: { [key: string]: string } = {
  "/": "Главная",
  "/settings": "Настройки",
  // "/trash": "Trash",
  // "/spam": "Spam",
  // "/drafts": "Drafts",
};

export const Breadcrumbs: React.FC<Props> = ({ items }) => {
  // const location = useLocation(); // TODO
  // const pathnames = location.pathname.split("/");
  return (
    <MemoryRouter initialIndex={0} initialEntries={["/"]}>
      <div>
        <Route>
          {({ location }) => {
            const pathnames = location.pathname.split("/").filter((x) => x);
            return (
              <MuiBreadcrumbs separator="-">
                <StyledBreadcrumb
                  label={<StyledLink to="/">Главная</StyledLink>}
                ></StyledBreadcrumb>
                {pathnames.map((_, index) => {
                  const last = index === pathnames.length - 1;
                  const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                  return last ? (
                    <StyledBreadcrumb
                      key={to}
                      label={breadcrumbNameMap[to]}
                    ></StyledBreadcrumb>
                  ) : (
                    <StyledBreadcrumb
                      key={to}
                      label={
                        <StyledLink to={to}>{breadcrumbNameMap[to]}</StyledLink>
                      }
                    ></StyledBreadcrumb>
                  );
                })}
              </MuiBreadcrumbs>
            );
          }}
        </Route>
      </div>
    </MemoryRouter>
  );
};

// const BreadcrumbContainer = styled("div")({
//   backgroundColor: "#fff",
//   height: "2rem",
// });

const StyledLink = styled(RouterLink)({
  color: colors.deselected.deselectedDefault,
  fontSize: "14px",
  textDecoration: "none",
  "&:hover, &:focus": {
    color: colors.deselected.deseletedActive,
  },
  "&:active": { color: colors.deselected.deseletedActive },
});

// const StyledBreadcrumb: React.FC = ({ children }) => (
//   <BreadcrumbContainer label="Главная">{children}</BreadcrumbContainer>
// );

const StyledBreadcrumb = withStyles({
  root: {
    backgroundColor: "#fff",
    height: "2rem",
    color: colors.deselected.deselectedDefault,
    fontSize: "14px",
    // fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      color: colors.deselected.deseletedActive,
    },
    "&:active": { color: colors.deselected.deseletedActive },
  },
})(Chip) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

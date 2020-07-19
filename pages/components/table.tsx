import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Select,
  Paper,
  TableRow,
  TableBody,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TablePagination,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Divider,
} from "@material-ui/core";

import Mark8Models from "pages/Models/Mark8Models";
import { Label } from "pages/components/label";
import FontManager from "src/Manager/FontManager";
import ColorManager from "src/Manager/ColorManager";
import Chip from "@material-ui/core/Chip";
import _ from "lodash";

interface Column {
  id:
    | "id"
    | "condo"
    | "rent"
    | "sale"
    | "bedroom"
    | "bathroom"
    | "size"
    | "floor"
    | "status"
    | "photo"
    | "title"
    | "desc"
    | "benefit"
    | "amenities";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "id", label: "", minWidth: 170 },
  { id: "condo", label: "Condo Name", minWidth: 100 },
  { id: "rent", label: "RENT PRICE (Baht)", minWidth: 170 },
  {
    id: "sale",
    label: "SELL PRICE (Baht)",
    minWidth: 170,
  },
  {
    id: "bedroom",
    label: "BEDROOM",
    minWidth: 170,
  },
  {
    id: "bathroom",
    label: "bathroom",
    minWidth: 170,
  },
  {
    id: "size",
    label: "SIZE (sqm.)",
    minWidth: 170,
  },
  {
    id: "floor",
    label: "FLOOR",
    minWidth: 170,
  },
  {
    id: "status",
    label: "STATUS",
    minWidth: 170,
  },
  {
    id: "photo",
    label: "PHOTO",
    minWidth: 170,
  },
  {
    id: "title",
    label: "TITLE",
    minWidth: 170,
  },
  {
    id: "desc",
    label: "DESCRIPTION",
    minWidth: 170,
  },
  {
    id: "benefit",
    label: "BENEFIT",
    minWidth: 170,
  },
  {
    id: "amenities",
    label: "Amenities",
    minWidth: 170,
  },
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {},
  tdOverflow: {
    maxWidth: 300,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  tdShowOverflow: {
    maxWidth: 300,
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  chipAgent: {
    backgroundColor: ColorManager.default.chipbgcolorprimary,
    color: ColorManager.default.chiptextcolorprimary,
  },
  chipCoAgent: {
    backgroundColor: ColorManager.default.chipbgcolorsecondary,
    color: ColorManager.default.chiptextcolorsecondary,
  },
});

function TableMark8(props: Mark8Models[]) {
  props = _.toArray(props);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [hover, setHover] = React.useState(false);
  const [hoveroverflow, setHoveroverflow] = React.useState(false);
  const [hoveroverflowid, setHoveroverflowid] = React.useState();
  const [hoverid, setHoverid] = React.useState();
  const [ddhover, setDdhover] = React.useState(false);
  const [ddhoveid, setDdhoverid] = React.useState();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const onMouseHover = (id) => {
    setHoverid(id);
    setHover(true);
  };
  const OnMouseHoverOverFlow = (id) => {
    setHoveroverflowid(id);
    setHoveroverflow(true);
  };
  const OnMouseHoverDD = (id) => {
    setDdhoverid(id);
    setDdhover(true);
  };
  return (
    <>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    <Label
                      fontSize={FontManager.default.subtitle}
                      color={ColorManager.default.textHeader}
                      thin
                    >
                      {column.label}
                    </Label>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {props
                ? props
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <TableRow key={row.id} hover>
                        <TableCell
                          component="td"
                          scope="row"
                          className={classes.tdOverflow}
                        >
                          {row.id &&
                          row.condo_name_en &&
                          row.rent_price != undefined &&
                          row.sale_price != undefined &&
                          row.bedroom >= 0 &&
                          row.bath >= 0 &&
                          row.bath != undefined &&
                          row.size__sq_m_ >= 0 &&
                          row.floor >= 0 &&
                          row.title &&
                          row.description &&
                          row.photo1 ? (
                            <Box
                              style={{
                                height: 40,
                                width: 40,
                              }}
                              textAlign="center"
                              p={1}
                            >
                              <Label fontSize={FontManager.default.remark} thin>
                                {row.id}
                              </Label>
                            </Box>
                          ) : (
                            <Box
                              bgcolor={ColorManager.default.red}
                              style={{
                                height: 40,
                                width: 40,
                              }}
                              textAlign="center"
                              p={1}
                              borderRadius={6}
                            >
                              <Label
                                fontSize={FontManager.default.remark}
                                color={ColorManager.default.white}
                                thin
                              >
                                {row.id}
                              </Label>
                            </Box>
                          )}
                        </TableCell>
                        <TableCell
                          component="td"
                          scope="row"
                          className={
                            hoveroverflow && hoveroverflowid === row.id
                              ? classes.tdShowOverflow
                              : classes.tdOverflow
                          }
                          onMouseEnter={() => OnMouseHoverOverFlow(row.id)}
                          onMouseLeave={() => setHoveroverflow(false)}
                        >
                          {row.condo_name_en ? (
                            <Label fontSize={FontManager.default.remark} thin>
                              {row.condo_name_en}
                            </Label>
                          ) : (
                            <Label
                              fontSize={FontManager.default.remark}
                              color={ColorManager.default.red}
                              thin
                            >
                              not found
                            </Label>
                          )}
                        </TableCell>
                        <TableCell
                          component="td"
                          scope="row"
                          className={classes.tdOverflow}
                        >
                          {row.rent_price != undefined ? (
                            <Label fontSize={FontManager.default.remark} thin>
                              {row.rent_price}
                              <Label
                                fontSize={FontManager.default.remark}
                                color={ColorManager.default.textHeader}
                                thin
                              >
                                {`/month`}
                              </Label>
                            </Label>
                          ) : (
                            <Label
                              fontSize={FontManager.default.remark}
                              color={ColorManager.default.red}
                              thin
                            >
                              not found
                            </Label>
                          )}
                        </TableCell>
                        <TableCell
                          component="td"
                          scope="row"
                          className={classes.tdOverflow}
                        >
                          {row.sale_price != undefined ? (
                            <Label fontSize={FontManager.default.remark} thin>
                              {row.sale_price}
                            </Label>
                          ) : (
                            <Label
                              fontSize={FontManager.default.remark}
                              color={ColorManager.default.red}
                              thin
                            >
                              not found
                            </Label>
                          )}
                        </TableCell>
                        <TableCell
                          component="td"
                          scope="row"
                          className={classes.tdOverflow}
                        >
                          {row.bedroom >= 0 && row.bedroom != undefined ? (
                            <Label fontSize={FontManager.default.remark} thin>
                              {row.bedroom}
                            </Label>
                          ) : (
                            <Label
                              fontSize={FontManager.default.remark}
                              color={ColorManager.default.red}
                              thin
                            >
                              not found
                            </Label>
                          )}
                        </TableCell>
                        <TableCell
                          component="td"
                          scope="row"
                          className={classes.tdOverflow}
                        >
                          {row.bath >= 0 && row.bath != undefined ? (
                            <Label fontSize={FontManager.default.remark} thin>
                              {row.bath}
                            </Label>
                          ) : (
                            <Label
                              fontSize={FontManager.default.remark}
                              color={ColorManager.default.red}
                              thin
                            >
                              not found
                            </Label>
                          )}
                        </TableCell>
                        <TableCell
                          component="td"
                          scope="row"
                          className={classes.tdOverflow}
                        >
                          {row.size__sq_m_ >= 0 ? (
                            <Label fontSize={FontManager.default.remark} thin>
                              {row.size__sq_m_}
                            </Label>
                          ) : (
                            <Label
                              fontSize={FontManager.default.remark}
                              color={ColorManager.default.red}
                              thin
                            >
                              not found
                            </Label>
                          )}
                        </TableCell>
                        <TableCell
                          component="td"
                          scope="row"
                          className={classes.tdOverflow}
                        >
                          {row.floor >= 0 ? (
                            <Label fontSize={FontManager.default.remark} thin>
                              {row.floor}
                            </Label>
                          ) : (
                            <Label
                              fontSize={FontManager.default.remark}
                              color={ColorManager.default.red}
                              thin
                            >
                              not found
                            </Label>
                          )}
                        </TableCell>
                        <TableCell
                          component="td"
                          scope="row"
                          className={classes.tdOverflow}
                        >
                          {row.agent_post ? (
                            <Chip
                              label="Agent post"
                              className={classes.chipAgent}
                            />
                          ) : undefined}
                          {row.accept_agent ? (
                            <Chip
                              label="รับ Co-Agent"
                              className={classes.chipCoAgent}
                            />
                          ) : undefined}
                        </TableCell>
                        <TableCell
                          component="td"
                          scope="row"
                          className={classes.tdOverflow}
                        >
                          {row.photo1 ? (
                            <>
                              <img
                                src={row.photo1}
                                width={40}
                                onMouseEnter={() => onMouseHover(row.id)}
                                onMouseLeave={() => setHover(false)}
                              />{" "}
                              <img
                                src={row.photo1}
                                width={40}
                                onMouseEnter={() => onMouseHover(row.id)}
                                onMouseLeave={() => setHover(false)}
                              />{" "}
                              <img
                                src={row.photo1}
                                width={40}
                                onMouseEnter={() => onMouseHover(row.id)}
                                onMouseLeave={() => setHover(false)}
                              />{" "}
                              <img
                                src={row.photo1}
                                width={40}
                                onMouseEnter={() => onMouseHover(row.id)}
                                onMouseLeave={() => setHover(false)}
                              />
                              {hoverid === row.id && hover ? (
                                <Label
                                  fontSize={FontManager.default.remark}
                                  color={ColorManager.default.blue}
                                  thin
                                >
                                  Edit Photo
                                </Label>
                              ) : undefined}
                            </>
                          ) : undefined}
                        </TableCell>
                        <TableCell
                          component="td"
                          scope="row"
                          className={
                            hoveroverflow && hoveroverflowid === row.id
                              ? classes.tdShowOverflow
                              : classes.tdOverflow
                          }
                          onMouseEnter={() => OnMouseHoverOverFlow(row.id)}
                          onMouseLeave={() => setHoveroverflow(false)}
                        >
                          {row.title ? (
                            <Label fontSize={FontManager.default.remark} thin>
                              {row.title}
                            </Label>
                          ) : (
                            <Label
                              fontSize={FontManager.default.remark}
                              color={ColorManager.default.red}
                              thin
                            >
                              not found
                            </Label>
                          )}
                        </TableCell>
                        <TableCell
                          component="td"
                          scope="row"
                          className={
                            hoveroverflow && hoveroverflowid === row.id
                              ? classes.tdShowOverflow
                              : classes.tdOverflow
                          }
                          onMouseEnter={() => OnMouseHoverOverFlow(row.id)}
                          onMouseLeave={() => setHoveroverflow(false)}
                        >
                          {row.description ? (
                            <Label fontSize={FontManager.default.remark} thin>
                              {row.description}
                            </Label>
                          ) : (
                            <Label
                              fontSize={FontManager.default.remark}
                              color={ColorManager.default.red}
                              thin
                            >
                              not found
                            </Label>
                          )}
                        </TableCell>
                        <TableCell
                          component="th"
                          scope="row"
                          className={classes.tdOverflow}
                        >
                          ไม่ทราบ Field จาก Excel
                        </TableCell>
                        <TableCell
                          component="th"
                          scope="row"
                          className={classes.tdOverflow}
                          onMouseEnter={() => OnMouseHoverDD(row.id)}
                          onMouseLeave={() => setDdhover(false)}
                        >
                          <FormControl key={row.id}>
                            <InputLabel id="demo-controlled-open-select-label">
                              {row.amenities.amenities_amount}
                            </InputLabel>
                            {row.amenities.amenities_list.length > 0 ? (
                              <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                              >
                                <Box p={1.5}>
                                  <Label
                                    fontSize={FontManager.default.subtitle}
                                    bold
                                  >
                                    {`Amenities`}
                                  </Label>
                                </Box>
                                <Divider
                                  style={{ backgroundColor: "#0089FF" }}
                                />
                                {row.amenities.amenities_list.map((res) => (
                                  <>
                                    <MenuItem>{res}</MenuItem>
                                  </>
                                ))}
                              </Select>
                            ) : undefined}
                          </FormControl>
                        </TableCell>
                      </TableRow>
                    ))
                : undefined}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={props.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}

export default TableMark8;

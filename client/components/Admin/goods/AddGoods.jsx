import React from "react";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import IconButton from "@material-ui/core/IconButton";
import AddPhotoIcon from "@material-ui/icons/AddAPhoto";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    width: 595,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cam: {
    display: "none",
  },
  grid: {
    padding: 15,
  },
  select: {
    width: 160,
  },
}));
export const AddGoods = (props) => {
  const classes = useStyles();
  let warning = props.modal.warning;
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let newGood = props.newGood;
    props.creatGood({
      ...newGood,
      [name]: value,
    });
  };
  const onUpload = () => {
    let newGood = props.newGood;
    newGood.map((check) => {
      if (check) {
        return props.uploadImg(newGood);
      } else {
        let newWarning = {
          ...warning,
          status: true,
          message: "Field " + check + " must be filled!",
        };
        return props.alert(newWarning);
      }
    });
  };
  let catRef = undefined;
  const onClickHandler = () => {
    let newWarning = {
      ...warning,
      status: true,
      message: "Field must be filled!",
    };
    return catRef !== undefined
      ? props.addCategory(catRef)
      : props.alert(newWarning);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className={classes.header}>
                  <span className={chart_header}>add product</span>
                  <Button
                    variant='contained'
                    color='secondary'
                    startIcon={<CloudUploadIcon />}
                    onClick={onUpload}
                  >
                    Upload{" "}
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField
                    className={classes.input}
                    id='outlined-title'
                    label='Название товара'
                    variant='outlined'
                    name='title'
                    onChange={onChangeHandler}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField
                    className={classes.input}
                    id='outlined-price'
                    label='Цена товара'
                    variant='outlined'
                    name='price'
                    onChange={onChangeHandler}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField
                    className={classes.input}
                    id='filled-basic'
                    label='Описание товара'
                    multiline
                    rows={5}
                    variant='outlined'
                    name='description'
                    onChange={onChangeHandler}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className={grid_container}>
            <Grid className={classes.grid} item xs={10}>
              <FormControl variant='outlined' className={classes.formControl}>
                <InputLabel id='demo-simple-select-filled-label'>
                  Select category
                </InputLabel>
                <Select
                  className={classes.select}
                  name='category'
                  labelId='demo-simple-select-filled-label'
                  id='demo-simple-select-filled'
                  value={props.newGood.category}
                  label='Select category'
                  onChange={onChangeHandler}
                >
                  {props.categories.map((c) => {
                    return (
                      <MenuItem value={c} key={c}>
                        {c}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid className={classes.grid} item xs={2}>
              <input
                accept='image/*'
                className={classes.cam}
                id='icon-button-file'
                type='file'
              />
              <label htmlFor='icon-button-file'>
                <IconButton
                  color='primary'
                  aria-label='upload picture'
                  component='span'
                >
                  <AddPhotoIcon color='primary' />
                </IconButton>
              </label>
            </Grid>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className={classes.header}>
                  <span className={chart_header}>add new category</span>
                  <Button
                    variant='contained'
                    style={{ backgroundColor: "#3edd03", color: "#ffffff" }}
                    startIcon={<AddCircleIcon />}
                    onClick={onClickHandler}
                  >
                    Add{" "}
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField
                    className={classes.input}
                    id='outlined-category'
                    label='Создать категорию'
                    variant='outlined'
                    onChange={(e) => {
                      catRef = e.target.value;
                    }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </Grid>
  );
};

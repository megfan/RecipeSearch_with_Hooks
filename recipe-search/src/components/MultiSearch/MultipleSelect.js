import React from 'react';
import './MultipleSelect.css'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '70%',
    fontSize: '120px'
  },
  palette: {
    primary: '#fb9e06',
    secondary: '#fb9e06',
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'eggs',
  'potatoes',
  'tomatoes',
  'pasta',
  'rice',
  'chicken',
  'mushrooms',
  'corn',
  'zucchini',
  'sour cream',
  'cucumbers',
  'broccoli',
  'butter',
  'lemon',
  'bananas',
  'onion',
  'sugar',
  'apple'
];

function getStyles(item, ingredients, theme) {
  return {
    fontWeight:
      ingredients.indexOf(item) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function MultipleSelect({ getSelect }) {
  const classes = useStyles();
  const theme = useTheme();
  const [ingredients, setIngredients] = React.useState([]);

  function handleChange(e) {
    setIngredients(e.target.value);
  }

  return (
    <div className="multiSearch">
      <FormControl className="multiSearch__form" id="multiForm">
        <InputLabel htmlFor="select-multiple">Choose from the list</InputLabel>
        <Select
          multiple
          value={ingredients}
          onChange={handleChange}
          input={<Input id="select-multiple" />}
          MenuProps={MenuProps}         
        >
          {names.map(item => (
            <MenuItem key={item} value={item} style={getStyles(item, ingredients, theme)}>
              {item}
            </MenuItem>
          ))}
        </Select>        
      </FormControl>
      <button className="search-button" onClick={() => getSelect(ingredients)}>GO</button>  
    </div>
  )
};
export default MultipleSelect;
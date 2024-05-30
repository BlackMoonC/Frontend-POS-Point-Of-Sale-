import { Button, Box } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  filmTitle: string[];
};

export default function SearchComponent({ filmTitle }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
      }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        sx={{
          width: "100%",
        }}
        disableClearable
        options={filmTitle.map((value) => value)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
      <Button variant="contained" startIcon={<SearchIcon fontSize="large" />}>
        Search
      </Button>
    </Box>
  );
}

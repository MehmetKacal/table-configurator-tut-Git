import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { useConfigurator } from "../contexts/Configurator";
export const Interface = () => {
  const { verandaWidth, setVerandaWidth, legs, setLegs, aluminiumColor, setAluminiumColor } =
    useConfigurator();

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
      }}
      p={3}
    >
      <Stack spacing={3}>
        <Typography variant="caption">Configureer uw Veranda</Typography>
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Breedte (in Meter)</FormLabel>
            <Slider
              sx={{
                width: "200px",
              }}
              min={3}
              max={8}
              value={verandaWidth}
              onChange={(e) => setVerandaWidth(e.target.value)}
              valueLabelDisplay="auto"
            />
          </FormControl>
        </Box>
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Stijl</FormLabel>
            <RadioGroup
              value={legs}
              onChange={(e) => setLegs(parseInt(e.target.value))}
            >
              <FormControlLabel
                value={0}
                control={<Radio />}
                label="Klassiek"
              />
              <FormControlLabel value={1} control={<Radio />} label="Modern" />
              <FormControlLabel value={2} control={<Radio />} label="Design" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box className="glass" p={3}>
          <FormControl>
            <FormLabel>Kleur materiaal</FormLabel>
            <RadioGroup
              value={aluminiumColor}
              onChange={(e) => setAluminiumColor(e.target.value)}
            >
              <FormControlLabel
                value={"#f1f0ea"}
                control={<Radio />}
                label="Wit (RAL 9016)"
              />
              <FormControlLabel
                value={"#353C40"}
                control={<Radio />}
                label="Antraciet (RAL 7016)"
              />
              <FormControlLabel
                value={"#C9BD71"}
                control={<Radio />}
                label="Gold"
              />
              <FormControlLabel
                value={"#C9A3B9"}
                control={<Radio />}
                label="Pink Gold"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Stack>
    </Box>
  );
};

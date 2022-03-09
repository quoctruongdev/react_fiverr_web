import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./style.css";

export default function AccordionsComponent() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <div className="border__top"></div>
      <Accordion
        sx={{ padding: "20px 0px" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              flexShrink: 0,
              fontSize: 16,
              fontWeight: 600,
              color: "text.secondary",
            }}
          >
            What is a vector file?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "text.secondary" }}>
            This is a fully scalable, editable file. You can edit it in Adobe
            Illustrator. It´s recommended for future changes, exporting other
            types of files, etc.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ padding: "20px 0px" }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              flexShrink: 0,
              fontSize: 16,
              fontWeight: 600,
              color: "text.secondary",
            }}
          >
            What does '3 logo design or 5 Logo Design' means?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "text.secondary" }}>
            According to the package selected, it will include 3/5 unique
            designs for the same Brand/Company/Business/Name so that the buyer
            can have a choice. If you have two or three different brands/names,
            kindly order multiple gigs respectively.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ padding: "20px 0px" }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            sx={{
              flexShrink: 0,
              fontSize: 16,
              fontWeight: 600,
              color: "text.secondary",
            }}
          >
            What does Unlimited revisions mean?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "text.secondary" }}>
            'Unlimited Revisions' mean fonts, colors, layout changing, not the
            entire concept. Please know that unlimited revisions is not same to
            providing unlimited new concepts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ padding: "20px 0px" }}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            sx={{
              flexShrink: 0,
              fontSize: 16,
              fontWeight: 600,
              color: "text.secondary",
            }}
          >
            What is a copyright document?{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "text.secondary" }}>
            Please know that by purchasing from Fiverr you automatically have
            the right to use the logo. We offer documents of copyright in case
            you need them to preserve as proof. For basic and standard packages
            it will need $25 additional for copyright documents where as premium
            package already includes it.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ padding: "20px 0px" }}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            sx={{
              flexShrink: 0,
              fontSize: 16,
              fontWeight: 600,
              color: "text.secondary",
            }}
          >
            What if my order gets autocompleted by Fiverr?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "text.secondary" }}>
            There is nothing to worry about here. If Fiverr marks the order
            complete automatically, you can contact us in the Fiverr inbox and
            we will assist you further from there.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

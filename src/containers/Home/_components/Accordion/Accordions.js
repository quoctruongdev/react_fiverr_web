import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";
import "./style.css";
const useStyle = makeStyles(() => ({
  content: {
    display: "block",
  },
}));

export default function AccordionsComponent() {
  const classes = useStyle();

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const content = [
    {
      id: 1,
      title: " What is a vector file?",
      text: ` This is a fully scalable, editable file. You can edit it in Adobe
      Illustrator. It's recommended for future changes, exporting other
      types of files, etc.`,
    },
    {
      id: 2,
      title: "What does '3 logo design or 5 Logo Design? ",
      text: ` According to the package selected, it will include 3/5 unique
      designs for the same Brand/Company/Business/Name so that the buyer
      can have a choice. If you have two or three different brands/names,
      kindly order multiple gigs respectively.`,
    },
    {
      id: 3,
      title: "What does Unlimited revisions?",
      text: `Unlimited Revisions' mean fonts, colors, layout changing, not the
      entire concept. Please know that unlimited revisions is not same to
      providing unlimited new concepts.`,
    },
    {
      id: 4,
      title: "What is a copyright document?",
      text: ` Please know that by purchasing from Fiverr you automatically have
      the right to use the logo. We offer documents of copyright in case
      you need them to preserve as proof. For basic and standard packages
      it will need $25 additional for copyright documents where as premium
      package already includes it.`,
    },
    {
      id: 5,
      title: "What if my order gets autocompleted by Fiverr?",
      text: `There is nothing to worry about here. If Fiverr marks the order
      complete automatically, you can contact us in the Fiverr inbox and
      we will assist you further from there.`,
    },
  ];

  return (
    <div>
      <div className="border__top"></div>
      {content.map((item) => (
        <Accordion
          key={item?.id}
          sx={{
            padding: "20px 0px",
          }}
          className={classes.content}
          expanded={expanded === `panel${item?.id}`}
          onChange={handleChange(`panel${item?.id}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${item?.id}bh-content`}
            id={`panel${item?.id}bh-header`}
            sx={{
              overflow: { xs: "hidden", md: "visible" },
            }}
          >
            <Typography
              sx={{
                flexShrink: 0,
                fontSize: 16,
                fontWeight: 600,
                color: "text.secondary",
              }}
            >
              {item?.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: "text.secondary" }}>
              {item?.text}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

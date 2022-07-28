import "./style.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = (Props) => {
  const { listFAQ } = Props;
  return (
    <div className="FAQ">
      <div>
        <h1>Frequently Asked Question</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
      </div>
      <div className="Accordion">
        {listFAQ.map((item, key) => (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="Typography">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="Typography">{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faq;

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
      <div className="Title">
        <h1>Frequently Asked Question</h1>
        <div className="faq-desc">
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        </div>
      </div>
      <div className="Accordion">
        {listFAQ.map((item, key) => (
          <Accordion
            sx={{
              border: 1,
              borderColor: "#FFFFFF",
              borderRadius: "4px",
              mt: 1,
              boxShadow: 0,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  fontFamily: "Arial",
                  fonWeight: 700,
                  fontSize: 14,
                  fontStyle: "normal",
                  lineHeight: "20px",
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
              // sx={{
              //   fontFamily: "Arial",
              //   fonWeight: 700,
              //   fontSize: 14,
              //   fontStyle: "normal",
              //   lineHeight: 20,
              // }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Faq;

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(
      isExpanded ? [...expanded, panel] : expanded.filter((item) => item !== panel),
    );
  };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        onClick={() => {
          console.log("clicked");
          const element = document.getElementById("targetSection");
          console.log(element);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }}
        sx={{
          color: 'text.primary',
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Information We Collect
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Accordion
          expanded={expanded.includes('panel1')}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="h9">
              Chrome Extension Automatically Generated Reports
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              One of the types of information we collect from users is the Chrome extension automatically generated report. This information is used for the sole purpose of improving the functionality of the SireAI Chrome extension and understanding the usage patterns of our users. The collected data may include technical information such as browser version, extension version, and operating system.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes('panel2')}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="h9">
              How we use your information
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              whiteSpace={'break-spaces'}

              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              {`We use the information we collect, including Chrome extension automatically generated reports, to:
1) Improve the SireAI Chrome extension's functionality.
2) Analyze usage patterns to better understand user preferences.
3) Identify and troubleshoot issues with the Chrome extension.
4) Improve the overall user experience.`}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded.includes('panel3')}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="h9">
              Data retention
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              whiteSpace={'break-spaces'}
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              {`We will retain your personal information, including data necessary for the functionality of the cross-device synchronization, such as your settings and other information, only for as long as necessary to provide the SireAI Chrome extension's services to you, or for other legitimate business purposes such as resolving disputes, safety and security reasons, or complying with our legal obligations.
The length of time we retain your personal information will depend on several factors, including:
1) The amount, nature, and sensitivity of the information.
2) The potential risk of harm from unauthorized use or disclosure.
3) The purposes for which we process your information.
4) Any legal requirements we may be subject to.
If you choose to deactivate your account, we will delete your data from our servers within a reasonable timeframe.`}
            </Typography>
          </AccordionDetails>
        </Accordion>


        <Accordion
          expanded={expanded.includes('panel4')}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="h3" variant="h9">
              Information Security
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              We take the security of your information seriously and implement commercially reasonable technical, administrative, and organizational measures to protect your data, both online and offline from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security. Therefore, you should take special care in deciding what information you share with us through the SireAI Chrome extension or email.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes('panel5')}
          onChange={handleChange('panel5')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="h9">
              Marketing and advertising
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Where required by law we will only send you marketing information, including sending you updates and information about our new products and services, upcoming events or other promotions or news, including by email or push notification, as permitted by law. You may opt-out of receiving such emails by following the instructions in each promotional email we send you or by updating your user settings. In addition, if at any time you wish not to receive future communications or you wish to have your name deleted from our mailing lists, please contact us at hello@chat.sire-ai.co We will continue to contact you via email regarding the provision of our Services and to respond to your requests.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes('panel6')}
          onChange={handleChange('panel6')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography component="h3" variant="h9">
              Changes to the Privacy Policy
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              We may update this Privacy Policy from time to time. When we do, we will post an updated version on this page, unless another type of notice is required by applicable law.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}

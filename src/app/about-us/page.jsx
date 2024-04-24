import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image';

export default function Page() {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '2em'
        }}
      >
        <Image
          src="/team.jpg"
          alt="Development Team Photo"
          width={803}
          height={431}
        />
      </Box>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            paddingTop: '0.5em',
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          Meet <span style={{ color: '#fbac13' }}>The DSA Duckies</span>!
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center'
          }}
        >
          (as pictured from left to right)
        </Typography>
        <Typography
          variant="h4"
          sx={{
            paddingTop: '1em',
            textAlign: 'left',
            marginLeft: '300px',
            marginRight: '300px',
            textDecoration: 'underline'
          }}
        >
          Yair Temkin - <span style={{ color: '#1c65ee' }}>Project Manager</span>
        </Typography>
        <Typography
          variant="h6"
          sx={{
            paddingTop: '1em',
            textAlign: 'left',
            marginLeft: '300px',
            marginRight: '300px'
          }}
        >
          Yair Temkin is the team’s Project Manager and has worked as a Data Structures & Algorithms Teaching Assistant for Professor Amanpreet Kapoor for 3 semesters during his undergraduate studies at the University of Florida. 
          Yair also previously worked as a Programming Fundamentals 1 Teaching Assistant with Professor Lisha Zhou for 1 semester. 
          Yair was a Software Engineering Intern at JP Morgan Chase & Co. (Summer 2021), Google (Summer 2022), Lyft (Fall 2022), Figma (Summer 2023). He is excited to join Coinbase as a full-time Software Engineer this July. 
          In his full-time role, Yair hopes to grow his technological skills in distributed systems and infrastructure. 
          Yair is a strong supporter of SHPE UF where he spends the majority of his time. 
          Outside of his studies, Yair likes playing piano, reading, eating good food, and learning more about different cultures.
        </Typography>
        <Typography
          variant="h4"
          sx={{
            paddingTop: '1em',
            textAlign: 'left',
            marginLeft: '300px',
            marginRight: '300px',
            textDecoration: 'underline'
          }}
        >
          Benny Cortese - <span style={{ color: '#1c65ee' }}>Backend Developer</span>
        </Typography>
        <Typography
          variant="h6"
          sx={{
            paddingTop: '1em',
            textAlign: 'left',
            marginLeft: '300px',
            marginRight: '300px'
          }}
        >
          	Benny Cortese is the team’s Backend Developer and has worked as a Data Structures & Algorithms Teaching Assistant for Professor Amanpreet Kapoor for 4 semesters during his undergraduate studies at the University of Florida. 
            Benny has also previously been an Operating Systems, Programming Language Concepts, and Discrete Structures Teaching Assistant for 1 semester each. 
            Benny interned twice at Microsoft on Azure Container Registries and Azure Upstream Infrastructure, working on distributed systems problems with kubernetes, docker, yaml, python and golang. 
            Benny is incoming at Figma as a Software Engineering Intern on the Figjam Engagement team, and will be starting his masters with the Georgia Tech online masters program in fall 2024. 
            Benny wants to work in startups in the future and improve the world using his knowledge of distributed systems and natural language processing. 
            Benny likes improvisation and dance, and is looking forward to scuba diving this summer in California.
        </Typography>
        <Typography
          variant="h4"
          sx={{
            paddingTop: '1em',
            textAlign: 'left',
            marginLeft: '300px',
            marginRight: '300px',
            textDecoration: 'underline'
          }}
        >
          Kevin Allen - <span style={{ color: '#1c65ee' }}>Scrum Master</span>
        </Typography>
        <Typography
          variant="h6"
          sx={{
            paddingTop: '1em',
            textAlign: 'left',
            marginLeft: '300px',
            marginRight: '300px'
          }}
        >
          	Kevin Allen is the team’s Scrum Master and has worked as a Data Structures & Algorithms Teaching Assistant for Professor Amanpreet Kapoor for 3 semesters during his undergraduate studies at the University of Florida. 
            Kevin also previously worked as a Programming Fundamentals 1 Teaching Assistant with Professor Lisha Zhou for 3 semesters. 
            Kevin interned at Raytheon Technologies as a Software Engineering Intern during the summer of 2023 and he is excited to return as a full-time Software Engineer 1 after graduation in May. 
            In his full-time position, Kevin hopes to learn more about C++ for embedded systems and the software system development process. 
            Kevin likes to root for Tampa Bay sports teams, exercise, and spend time with his dog during his free time.
        </Typography>
        <Typography
          variant="h4"
          sx={{
            paddingTop: '1em',
            textAlign: 'left',
            marginLeft: '300px',
            marginRight: '300px',
            textDecoration: 'underline'
          }}
        >
          Alex Duffaut - <span style={{ color: '#1c65ee' }}>Frontend Developer</span>
        </Typography>
        <Typography
          variant="h6"
          sx={{
            paddingTop: '1em',
            textAlign: 'left',
            marginLeft: '300px',
            marginRight: '300px'
          }}
        >
          	Alex Duffaut is the team’s Frontend Developer and has worked as a Data Structures and Algorithms Teaching Assistant for Professor Amanpreet Kapoor for 2 semesters during his undergraduate studies at the University of Florida. 
            Alex also previously worked as a Programming Fundamentals 2 Teaching Assistant with Professor Joshua Fox for 1 semester. 
            Alex interned at Nordstrom as a Software Engineering Intern during the summer of 2022 and at Lumen Technologies as a Security Software Development Intern during the summer of 2023. 
            He will be pursuing a job with Lumen Technologies as a full time Software Developer in New York City. 
            Alex likes to play sports and spend time with his dog during his free time.
        </Typography>
        <Typography
          variant="h4"
          sx={{
            paddingTop: '1em',
            textAlign: 'left',
            marginLeft: '300px',
            marginRight: '300px',
            textDecoration: 'underline'
          }}
        >
          Amanpreet Kapoor - <span style={{ color: '#1c65ee' }}>Senior Project Advisor</span>
        </Typography>
        <Typography
          variant="h6"
          sx={{
            paddingTop: '1em',
            paddingBottom: '1em',
            textAlign: 'left',
            marginLeft: '300px',
            marginRight: '300px'
          }}
        >
          	Amanpreet Kapoor is our Senior Project Advisor and is an Instructional Assistant Professor of Computer Science at the Department of Engineering Education, Herbert Wertheim College of Engineering, University of Florida where he teaches Data Structures & Algorithms and other Computer Science courses. 
            We would like to especially thank Aman for his invaluable guidance and support throughout the Spring 2024 semester of Senior Project. 
            We all have felt deeply lucky to have his mentorship in both teaching and project development. 
            Our senior project would not have been nearly as successful without his great insights, willingness to assist us, and enthusiasm for the project’s focus area.

        </Typography>
      </Box>
    </Box>
  );
}
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Team() {
  const [showAllTeam, setShowAllTeam] = useState(false);

  const team = {
    faculty: [
      {
        id: 1,
        name: "Dr.Y.Rama Devi",
        role: "HOD AI&ML",
        image: '/team/ramadevi.jpg'
      }
    ],
    facultyCoordinators: [
      {
        id: 1,
        name: "Smt. K. Mary Sudha Rani",
        role: "Faculty Coordinator",
        image: "/team/sudharani.png"
      },
      {
        id: 2,
        name: "Smt. D. Naga Jyothi",
        role: "Faculty Coordinator",
        image: "/team/nagajothi.png"
      },
      
    ],
    studentConvener: [
      {
        id: 1,
        name: "V Suhaas",
        role: "Student Convener",
        phone: "+91 9848883503",
        image: "/team/suhaas.png"
      },
      {
        id: 2,
        name: "K.V.H. Kashyap",
        role: "Student Convener",
        phone: "+91 9392384155",
        image: "/team/kashyap.jpeg"
      }
    ],
    conveners: [
      {
        id: 1,
        name: "Makam Devansh",
        role: "Co-Convener",
        image: "/team/devansh.jpg"
      },
      {
        id: 2,
        name: "Manaswini",
        role: "Co-Convener",
        image: "/team/manashwini.jpeg"
      }
    ],
    pr: [
      "Akhilesh - lead",
      "Gayatri Sai k - lead",
      "Pavani - lead",
      "Supreeth - lead",
      "Mamidisetti Vasanthi",
      "Sakshi B Joshi",
      "Kalva Harshith",
      "Patlolla Harshitha",
      "Aisha Khan",
      "Nikitha Aalamgiri"
    ],
    design: [
      "Karthik K - lead",
      "Sanjana Chinta",
      "Siri Nandini Alanka",
      "Rishika Reddy",
      "Kukkadapu Abhi Vadan",
      "Mishmi Prashastha",
      "S.Varshini"
    ]
    ,
    cinematography: [
      "Abhyudai - lead",
      "Veekshith - lead",
      "Chede Nikhil",
      "Bhukya Srikanth",
      "P. Sathvik Reddy"
  ],
    sponsorship: [
      "RamiReddy - lead", 
      "N.Harsha Vardhan Varma",
      "J.Harshitha"
  ],
    coordinators: [
      "Abhinay Ch",
      "Abhiram",
      "Akash",
      "Akshitha",
      "Anjali",
      "Anu Priya",
      "B.Rajesh",
      "Ch Praneeth",
      "Jack",
      "Karthik K",
      "Karthik S",
      "Krishna",
      "Lalitha",
      "Likhitha",
      "Mohan Sai",
      "Nanditha",
      "Penitha",
      "Prachoyot",
      "Prakarsha",
      "RamiReddy",
      "S Abhinay",
      "S.Sai Teja",
      "Saanvi",
      "Sahith",
      "Shehbaz",
      "Shyamala",
      "Sreeja",
      "V.Rakesh",
      "Vishwas",
      "Wajih",
      "Yuva"
  ],
    organizers: [
      "Abhishek Pendyala",
      "Ankith",
      "Arisetti Sai Sindhu",
      "B SRI SANJANA",
      "B. Malleshwari",
      "B.Pranathi",
      "Badrinath Achanta",
      "Chandana",
      "D.Pallavi",
      "Darga Yashaswi",
      "J. Mamatha",
      "Jhansi",
      "K Sohan Reddy",
      "Kalva Pushpa Latha",
      "Karthik Mekala",
      "Komali Acharya",
      "Malikarjuna",
      "Narmeta Archana",
      "Nelakurthi Ashritha Gowthami",
      "Nunavath Swathi",
      "Pallavi Reddy",
      "Pamaiahgari Deekshitha",
      "ParnaSree",
      "Pervez Mubeen",
      "Rishwanth Thallapalli",
      "S Chidvilas Reddy",
      "Saiteja",
      "Shiva Sai",
      "Shruti Sunil Jadhav",
      "Sree Karnika",
      "Sri Nithya Jangam",
      "Srivarsha Chivukula",
      "Tanya",
      "Varshith Daduvy",
      "Vedh Vishnu",
      "Vijay Sabavath",
      "Vishwanath Tangella"
  ]

  };

  const renderTeamSection = (title, members, showImage = false) => (
    <div className="mb-12 ">
      <h3 className="text-2xl font-semibold mb-6 text-center text-primary">{title}</h3>
      {showImage ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {members.map((member) => (
            <motion.div
              key={member.id}
              className="text-center card-hover bg-dark/50 backdrop-blur-sm rounded-lg p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
              <p className="text-gray-400 mb-2">{member.role}</p>
              {member.phone && (
                <p className="text-primary">{member.phone}</p>
              )}
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {members.map((member, index) => (
              <div key={index} className="text-center py-2">
                <p className="text-gray-300">{member}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderhodSection = (title, members, showImage = false) => (
    <div className="mb-12 ">
      <h3 className="text-2xl font-semibold mb-6 text-center text-primary">{title}</h3>
      {showImage ? (
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 ">
          {members.map((member) => (
            <motion.div
              key={member.id}
              className="text-center card-hover bg-dark/50 backdrop-blur-sm rounded-lg p-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
              <p className="text-gray-400 mb-2">{member.role}</p>
              {member.phone && (
                <p className="text-primary">{member.phone}</p>
              )}
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="bg-dark/50 backdrop-blur-sm rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {members.map((member, index) => (
              <div key={index} className="text-center py-2">
                <p className="text-gray-300">{member}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section id="team" className="section-padding">
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 neon-text">Meet the Team</h2>
        
        {/* HOD */}
        {renderhodSection("Head of Department", team.faculty, true)}

        {/* Faculty Coordinators */}
        {renderTeamSection("Faculty Coordinators", team.facultyCoordinators, true)}

        {/* Student Convener */}
        {renderTeamSection("Student Convener", team.studentConvener, true)}

        {/* Conveners */}
        {renderTeamSection("Co-Conveners", team.conveners, true)}

        {/* Other Teams - Initially hidden */}
        {/* {showAllTeam && (
          <>
            {renderTeamSection("PR & Social Media Team", team.pr)}
            {renderTeamSection("Design & Documentation Team", team.design)}
            {renderTeamSection("Cinematography", team.cinematography)}
            {renderTeamSection("Sponsorship In-Charge", team.sponsorship)}
            {renderTeamSection("Event Coordinators", team.coordinators)}
            {renderTeamSection("Event Organizers", team.organizers)}
          </>
        )} */}

        {/* View More Button */}
        {/* <div className="text-center mt-8">
          <button
            onClick={() => setShowAllTeam(!showAllTeam)}
            className="button-primary"
          >
            {showAllTeam ? 'Show Less' : 'View Complete Team'}
          </button>
        </div> */}
      </motion.div>
    </section>
  );
}
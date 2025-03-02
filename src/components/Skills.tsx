// import React from 'react';

// const Skills = () => {
//   const frontendSkills = [
//     { name: 'JavaScript', level: 90 },
//     { name: 'TypeScript', level: 85 },
//     { name: 'React', level: 90 },
//     { name: 'Vue.js', level: 75 },
//     { name: 'HTML/CSS', level: 95 },
//     { name: 'Tailwind CSS', level: 85 },
//   ];

//   const backendSkills = [
//     { name: 'Node.js', level: 85 },
//     { name: 'Python', level: 80 },
//     { name: 'Java', level: 70 },
//     { name: 'SQL', level: 85 },
//     { name: 'MongoDB', level: 80 },
//     { name: 'GraphQL', level: 75 },
//   ];

//   const otherSkills = [
//     { name: 'Git', level: 90 },
//     { name: 'Docker', level: 75 },
//     { name: 'AWS', level: 70 },
//     { name: 'CI/CD', level: 80 },
//     { name: 'Agile/Scrum', level: 85 },
//     { name: 'Testing', level: 80 },
//   ];

//   const SkillBar = ({ name, level }: { name: string; level: number }) => (
//     <div className="mb-4">
//       <div className="flex justify-between mb-1">
//         <span className="text-gray-700 font-medium">{name}</span>
//         <span className="text-gray-600">{level}%</span>
//       </div>
//       <div className="w-full bg-gray-200 rounded-full h-2.5">
//         <div
//           className="bg-indigo-600 h-2.5 rounded-full"
//           style={{ width: `${level}%` }}
//         ></div>
//       </div>
//     </div>
//   );

//   return (
//     <section id="skills" className="py-16 md:py-24 bg-gray-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
//           <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//             I've worked with a variety of technologies and frameworks. Here's an overview of my technical skills.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Frontend</h3>
//             {frontendSkills.map((skill) => (
//               <SkillBar key={skill.name} name={skill.name} level={skill.level} />
//             ))}
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Backend</h3>
//             {backendSkills.map((skill) => (
//               <SkillBar key={skill.name} name={skill.name} level={skill.level} />
//             ))}
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Other</h3>
//             {otherSkills.map((skill) => (
//               <SkillBar key={skill.name} name={skill.name} level={skill.level} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from "react";

const Skills = () => {
  const frontendSkills = [
    {
      name: "JavaScript",
      logo: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png",
    },
    {
      name: "TypeScript",
      logo: "https://avatars.githubusercontent.com/u/104067207?s=280&v=4",
    },
    {
      name: "React",
      logo: "https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      name: "Angular.js",
      logo: "https://www.liblogo.com/img-logo/an271a55f-angular-logo-angular-logo-transparent-png-stickpng.png",
    },
    {
      name: "HTML/CSS",
      logo: "https://i.pinimg.com/originals/52/2e/6b/522e6bc1a11d1726a35f81cbd979395f.jpg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp",
    },
    { name: "Redux", logo: "https://logodix.com/logo/2074081.jpg" },
  ];

  const backendSkills = [
    {
      name: "Java",
      logo: "https://th.bing.com/th/id/OIP.3pbn96F_IFdhSmJ1MaRe9AHaKN?rs=1&pid=ImgDetMain",
    },
    {
      name: "Node.js",
      logo: "https://th.bing.com/th/id/R.87ce8729519135cc2858fc2bfe6fdc14?rik=C%2bbNFa6nErKbZw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnodejs-logo-png-file-node-js-logo-2015-svg-1280.png&ehk=sqIWmq0phwaSCErEkzBhsUEE6UX2xW2N2SlDhqCq598%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      name: "Spring",
      logo: "https://th.bing.com/th/id/OIP.z6Vh-JQlI33vY7qmPxrHIAHaHa?rs=1&pid=ImgDetMain",
    },

    {
      name: "MySQL",
      logo: "https://www.vhv.rs/dpng/d/543-5438423_mysql-logo-hd-png-download.png",
    },
    {
      name: "MongoDB",
      logo: "https://th.bing.com/th/id/OIP.AoFmhuVcQWFwCx4G2ZnuJQHaIq?rs=1&pid=ImgDetMain",
    },
    {
      name: "PostgreSQL",
      logo: "https://th.bing.com/th/id/OIP.OLVs3hIrsatz5RPKbYdYyQHaHa?rs=1&pid=ImgDetMain",
    },
    {
      name: "Kafka",
      logo: "https://ts4.mm.bing.net/th?id=OIP._jxtvkrL60E8n_ey7sXBnQHaHa&pid=15.1",
    },
  ];

  const otherSkills = [
    {
      name: "Git",
      logo: "https://www.liblogo.com/img-logo/gi7523g343-git-logo-git-logo-downloads.png",
    },
    {
      name: "Docker",
      logo: "https://logos-world.net/wp-content/uploads/2021/02/Docker-Emblem.png",
    },
    {
      name: "AWS",
      logo: "https://th.bing.com/th/id/OIP.wY5FmmM12ktsK_AmIfGRPQHaEb?rs=1&pid=ImgDetMain",
    },
    {
      name: "CI/CD",
      logo: "https://th.bing.com/th/id/OIP.OF-TxRC2bJEzhAZjpE8t-wHaDt?rs=1&pid=ImgDetMain",
    },
    {
      name: "Bitbucket",
      logo: "https://th.bing.com/th/id/OIP.gyNBEVltdUKr1gIBl4rlZgHaHa?rs=1&pid=ImgDetMain",
    },
    {
      name: "Jenkins",
      logo: "https://logos-world.net/wp-content/uploads/2023/12/Jenkins-Emblem.png",
    },
    {
      name: "Kubernates",
      logo: "https://cdn2.iconfinder.com/data/icons/mixd/512/20_kubernetes-1024.png",
    },
  ];

  const SkillItem = ({ name, logo }: { name: string; logo: string }) => (
    <div className="flex items-center p-2 bg-white rounded-lg shadow-sm">
      <img src={logo} alt={name} className="w-14 h-9 mr-5" />
      <span className="text-gray-700 font-medium">{name}</span>
    </div>
  );

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            I've worked with a variety of technologies and frameworks. Here's an
            overview of my technical skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Frontend
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {frontendSkills.map((skill) => (
                <SkillItem
                  key={skill.name}
                  name={skill.name}
                  logo={skill.logo}
                />
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Backend
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {backendSkills.map((skill) => (
                <SkillItem
                  key={skill.name}
                  name={skill.name}
                  logo={skill.logo}
                />
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              Other
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {otherSkills.map((skill) => (
                <SkillItem
                  key={skill.name}
                  name={skill.name}
                  logo={skill.logo}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

// import React from "react";


// const Skills = () => {
//   const frontendSkills = [
//     {
//       name: "JavaScript",
//       logo: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png",
//     },
//     {
//       name: "TypeScript",
//       logo: "https://avatars.githubusercontent.com/u/104067207?s=280&v=4",
//     },
//     {
//       name: "React",
//       logo: "https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0",
//     },
//     {
//       name: "Angular.js",
//       logo: "https://www.liblogo.com/img-logo/an271a55f-angular-logo-angular-logo-transparent-png-stickpng.png",
//     },
//     {
//       name: "HTML/CSS",
//       logo: "https://i.pinimg.com/originals/52/2e/6b/522e6bc1a11d1726a35f81cbd979395f.jpg",
//     },
//     {
//       name: "Tailwind CSS",
//       logo: "https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp",
//     },
//     { name: "Redux", logo: "https://logodix.com/logo/2074081.jpg" },
//   ];

//   const backendSkills = [
//     {
//       name: "Java",
//       logo: "https://th.bing.com/th/id/OIP.3pbn96F_IFdhSmJ1MaRe9AHaKN?rs=1&pid=ImgDetMain",
//     },
//     {
//       name: "Node.js",
//       logo: "https://th.bing.com/th/id/R.87ce8729519135cc2858fc2bfe6fdc14?rik=C%2bbNFa6nErKbZw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fnodejs-logo-png-file-node-js-logo-2015-svg-1280.png&ehk=sqIWmq0phwaSCErEkzBhsUEE6UX2xW2N2SlDhqCq598%3d&risl=&pid=ImgRaw&r=0",
//     },
//     {
//       name: "Spring",
//       logo: "https://th.bing.com/th/id/OIP.z6Vh-JQlI33vY7qmPxrHIAHaHa?rs=1&pid=ImgDetMain",
//     },

//     {
//       name: "MySQL",
//       logo: "https://www.vhv.rs/dpng/d/543-5438423_mysql-logo-hd-png-download.png",
//     },
//     {
//       name: "MongoDB",
//       logo: "https://th.bing.com/th/id/OIP.AoFmhuVcQWFwCx4G2ZnuJQHaIq?rs=1&pid=ImgDetMain",
//     },
//     {
//       name: "PostgreSQL",
//       logo: "https://th.bing.com/th/id/OIP.OLVs3hIrsatz5RPKbYdYyQHaHa?rs=1&pid=ImgDetMain",
//     },
//     {
//       name: "Kafka",
//       logo: "https://ts4.mm.bing.net/th?id=OIP._jxtvkrL60E8n_ey7sXBnQHaHa&pid=15.1",
//     },
//   ];

//   const otherSkills = [
//     {
//       name: "Git",
//       logo: "https://www.liblogo.com/img-logo/gi7523g343-git-logo-git-logo-downloads.png",
//     },
//     {
//       name: "Docker",
//       logo: "https://logos-world.net/wp-content/uploads/2021/02/Docker-Emblem.png",
//     },
//     {
//       name: "AWS",
//       logo: "https://th.bing.com/th/id/OIP.wY5FmmM12ktsK_AmIfGRPQHaEb?rs=1&pid=ImgDetMain",
//     },
//     {
//       name: "CI/CD",
//       logo: "https://th.bing.com/th/id/OIP.OF-TxRC2bJEzhAZjpE8t-wHaDt?rs=1&pid=ImgDetMain",
//     },
//     {
//       name: "Bitbucket",
//       logo: "https://th.bing.com/th/id/OIP.gyNBEVltdUKr1gIBl4rlZgHaHa?rs=1&pid=ImgDetMain",
//     },
//     {
//       name: "Jenkins",
//       logo: "https://logos-world.net/wp-content/uploads/2023/12/Jenkins-Emblem.png",
//     },
//     {
//       name: "Kubernates",
//       logo: "https://cdn2.iconfinder.com/data/icons/mixd/512/20_kubernetes-1024.png",
//     },
//   ];

//   const SkillItem = ({ name, logo }: { name: string; logo: string }) => (
//     <div className="flex items-center p-2 bg-white rounded-lg shadow-sm">
//       <img src={logo} alt={name} className="w-14 h-9 mr-5" />
//       <span className="text-gray-700 font-medium">{name}</span>
//     </div>
//   );

//   return (
//     <section id="skills" className="py-16 md:py-24 bg-gray-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             My Skills
//           </h2>
//           <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//             I've worked with a variety of technologies and frameworks. Here's an
//             overview of my technical skills.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
//               Frontend
//             </h3>
//             <div className="grid grid-cols-2 gap-4">
//               {frontendSkills.map((skill) => (
//                 <SkillItem
//                   key={skill.name}
//                   name={skill.name}
//                   logo={skill.logo}
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
//               Backend
//             </h3>
//             <div className="grid grid-cols-2 gap-4">
//               {backendSkills.map((skill) => (
//                 <SkillItem
//                   key={skill.name}
//                   name={skill.name}
//                   logo={skill.logo}
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
//               Other
//             </h3>
//             <div className="grid grid-cols-2 gap-4">
//               {otherSkills.map((skill) => (
//                 <SkillItem
//                   key={skill.name}
//                   name={skill.name}
//                   logo={skill.logo}
//                 />
//               ))}
//             </div>
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
    { name: "JavaScript", logo: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Emblem.png" },
    { name: "TypeScript", logo: "https://avatars.githubusercontent.com/u/104067207?s=280&v=4" },
    { name: "React", logo: "https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png" },
    { name: "Angular.js", logo: "https://www.liblogo.com/img-logo/an271a55f-angular-logo-angular-logo-transparent-png-stickpng.png" },
    { name: "HTML/CSS", logo: "https://i.pinimg.com/originals/52/2e/6b/522e6bc1a11d1726a35f81cbd979395f.jpg" },
    { name: "Tailwind CSS", logo: "https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp" },
    { name: "Redux", logo: "https://logodix.com/logo/2074081.jpg" },
  ];

  const backendSkills = [
    { name: "Java", logo: "https://th.bing.com/th/id/OIP.3pbn96F_IFdhSmJ1MaRe9AHaKN?rs=1&pid=ImgDetMain" },
    { name: "Node.js", logo: "https://pluspng.com/img-png/nodejs-logo-png-file-node-js-logo-2015-svg-1280.png" },
    { name: "Spring", logo: "https://th.bing.com/th/id/OIP.z6Vh-JQlI33vY7qmPxrHIAHaHa?rs=1&pid=ImgDetMain" },
    { name: "MySQL", logo: "https://www.vhv.rs/dpng/d/543-5438423_mysql-logo-hd-png-download.png" },
    { name: "MongoDB", logo: "https://th.bing.com/th/id/OIP.AoFmhuVcQWFwCx4G2ZnuJQHaIq?rs=1&pid=ImgDetMain" },
    { name: "PostgreSQL", logo: "https://th.bing.com/th/id/OIP.OLVs3hIrsatz5RPKbYdYyQHaHa?rs=1&pid=ImgDetMain" },
    { name: "Kafka", logo: "https://ts4.mm.bing.net/th?id=OIP._jxtvkrL60E8n_ey7sXBnQHaHa&pid=15.1" },
  ];

  const otherSkills = [
    { name: "Git", logo: "https://www.liblogo.com/img-logo/gi7523g343-git-logo-git-logo-downloads.png" },
    { name: "Docker", logo: "https://logos-world.net/wp-content/uploads/2021/02/Docker-Emblem.png" },
    { name: "AWS", logo: "https://th.bing.com/th/id/OIP.wY5FmmM12ktsK_AmIfGRPQHaEb?rs=1&pid=ImgDetMain" },
    { name: "CI/CD", logo: "https://th.bing.com/th/id/OIP.OF-TxRC2bJEzhAZjpE8t-wHaDt?rs=1&pid=ImgDetMain" },
    { name: "Bitbucket", logo: "https://th.bing.com/th/id/OIP.gyNBEVltdUKr1gIBl4rlZgHaHa?rs=1&pid=ImgDetMain" },
    { name: "Jenkins", logo: "https://logos-world.net/wp-content/uploads/2023/12/Jenkins-Emblem.png" },
    { name: "Kubernetes", logo: "https://cdn2.iconfinder.com/data/icons/mixd/512/20_kubernetes-1024.png" },
  ];

  const SkillItem = ({ name, logo }: { name: string; logo: string }) => (
    <div className="flex items-center p-2 bg-white rounded-lg shadow-sm flex-wrap">
      <img src={logo} alt={name} className="w-14 h-auto mr-5 max-w-full" />
      <span className="text-gray-700 font-medium break-words truncate">{name}</span>
    </div>
  );

  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            I've worked with a variety of technologies and frameworks. Here's an overview of my technical skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Frontend</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {frontendSkills.map((skill) => (
                <SkillItem key={skill.name} name={skill.name} logo={skill.logo} />
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Backend</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {backendSkills.map((skill) => (
                <SkillItem key={skill.name} name={skill.name} logo={skill.logo} />
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Other</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {otherSkills.map((skill) => (
                <SkillItem key={skill.name} name={skill.name} logo={skill.logo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

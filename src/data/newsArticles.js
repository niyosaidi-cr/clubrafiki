// ─── FULL NEWS ARTICLE CONTENT ───────────────────────────────────────────────
// Each article has: id, tag, date, title, heroImg, intro, sections[], photos[], closing
// sections: { heading?, content, quote? { text, author } }

export const newsArticles = [

  // ── 1. ECOBANK ─────────────────────────────────────────────────────────────
  {
    id: 'ecobank-computers',
    tag: 'Latest News',
    date: 'October 11, 2025',
    title: 'Ecobank Rwanda Donates Computers to Empower Youth at Club Rafiki',
    heroImg: '/assets/Images/Ecobank in Rafiki CR.jpg',
    intro: 'Kigali, October 11, 2025 — Club Rafiki was proud to receive vital ICT equipment support from Ecobank Rwanda. This support was part of the bank\'s commitment to empowering young people and promoting digital inclusion across the country. Several other youth institutions also received support.',

    sections: [
      {
        heading: 'Ecobank Rwanda Youth Empowerment Partnership with Club Rafiki',
        content: 'The official handover ceremony took place in Kigali. Representatives from Ecobank Rwanda presented computers and other essential tools to selected youth centers, including Club Rafiki. The initiative aims to strengthen youth engagement, enhance digital learning, and expand access to technology for community development.',
        quote: {
          text: 'Our goal is to empower young people to gain the skills they need for the future. We work together with youth centers like Club Rafiki. Together, we help build stronger communities — our communities become smarter and more connected.',
          author: 'Ecobank Rwanda Representative',
        },
      },
      {
        heading: 'A Boost for Digital Learning and Innovation',
        content: 'At Club Rafiki, the donated computers will support ongoing ICT training and digital literacy programs that help hundreds of young people gain practical computer skills. All training is designed to prepare participants for employment and entrepreneurship in today\'s digital age. Club Rafiki\'s management expressed deep appreciation for Ecobank\'s support, noting that the contribution directly strengthens the center\'s mission to empower youth through education, sports, and culture.',
        quote: {
          text: 'This partnership reflects shared values of youth empowerment and community service. We thank Ecobank for recognizing the importance of investing in young people.',
          author: 'Club Rafiki Legal Representative',
        },
      },
      {
        heading: 'A Day Marked by Celebration and Hope',
        content: 'The event brought together representatives from youth organizations, community leaders, and the media — all united by a shared vision for inclusive growth and digital empowerment. Participants highlighted the importance of collaboration between financial institutions and community centers in building sustainable opportunities for young Rwandans. This event marked another milestone in Club Rafiki\'s mission to nurture creativity, education, and digital confidence among Rwanda\'s young generation.',
      },
    ],

    photos: [
      '/assets/Images/Ecobank Cover.jpeg',
      '/assets/Images/Ecobank in CR 4.jpg',
      '/assets/Images/Ecobank in CR 2.jpg',
      '/assets/Images/Ecobank in CR 3.jpg',
      '/assets/Images/Ecobank in CR 5.jpg',
    ],
  },

  // ── 2. EDU-FUN FIESTA ──────────────────────────────────────────────────────
  {
    id: 'edu-fun-fiesta',
    tag: 'Latest News',
    date: 'August 15, 2025',
    title: 'EDU-FUN FIESTA: Where Learning Meets Fun at Club Rafiki!',
    heroImg: '/assets/Images/Edu fun fiesta cover.jpg',
    intro: 'Kigali, August 15, 2025 — Club Rafiki hosted its much-anticipated EDU-FUN FIESTA, a vibrant educational festival that brought together children, youth, and community members for a day where learning and fun came together in one celebration.',

    sections: [
      {
        heading: 'A Festival Built on Joy and Learning',
        content: 'The EDU-FUN FIESTA was designed to break the barrier between education and entertainment. Interactive booths, games, creative challenges, and live performances filled the Club Rafiki grounds, transforming the center into a buzzing festival space. The event demonstrated Club Rafiki\'s core belief: that learning is most powerful when it is joyful, engaging, and community-driven.',
      },
      {
        heading: 'Activities That Inspire',
        content: 'Participants took part in coding challenges, art workshops, reading competitions, science demonstrations, and sports mini-tournaments throughout the day. Young people from different neighborhoods in Nyamirambo came together, many of them meeting new friends and discovering new interests through the activities on offer. Coaches, volunteers, and staff guided participants with energy and enthusiasm.',
        quote: {
          text: 'Today showed me that learning does not have to be boring. I want to come back every week!',
          author: 'Participant, EDU-FUN FIESTA 2025',
        },
      },
      {
        heading: 'Building Community Through Shared Experience',
        content: 'Beyond the activities, the EDU-FUN FIESTA reinforced the sense of belonging that Club Rafiki has cultivated for over 50 years. Parents, guardians, and community leaders attended alongside the youth, celebrating the next generation and the programs that support them. The event closed with an awards ceremony recognizing standout participants across all activity categories.',
      },
    ],

    photos: [
      '/assets/Images/Edu fun fiesta 1.jpg',
      '/assets/Images/Edu fun fiesta 2.jpg',
      '/assets/Images/Edu fun fiesta 3.jpg',
      '/assets/Images/Edu fun fiesta 4.jpg',
    ],
  },

  // ── 3. PRESIDENT KAGAME ────────────────────────────────────────────────────
  {
    id: 'kagame-giants-of-africa',
    tag: 'Latest News',
    date: 'August 3, 2025',
    title: 'President Kagame at Club Rafiki for Giants of Africa Basketball Camp',
    heroImg: '/assets/Images/GoA Visit cover.jpg',
    intro: 'Kigali, August 3, 2025 — Club Rafiki was honored by the visit of His Excellency President Paul Kagame during the Giants of Africa Basketball Camp, an annual event that brings together talented young athletes from across Rwanda and the continent.',

    sections: [
      {
        heading: 'Giants of Africa Returns to Club Rafiki',
        content: 'The Giants of Africa Basketball Camp, founded by Toronto Raptors President Masai Ujiri, returned to Club Rafiki for another transformative edition. The camp brought together dozens of young basketball players for intensive training, mentorship sessions, and community engagement activities. Club Rafiki has been a proud partner of Giants of Africa for several years, making it one of the key venues for this flagship program in Rwanda.',
      },
      {
        heading: 'President Kagame Inspires the Youth',
        content: 'President Paul Kagame\'s visit to the camp was a defining moment for every young person in attendance. He engaged directly with the athletes, encouraging them to pursue excellence both on and off the court, and affirming that investment in youth is investment in Rwanda\'s future. His presence underscored the national significance of programs like those at Club Rafiki.',
        quote: {
          text: 'Young people of Africa have a lot of talent that may not come out without the kind of opportunities provided by such projects.',
          author: 'H.E. Paul Kagame, President of the Republic of Rwanda',
        },
      },
      {
        heading: 'Sport as a Tool for Development',
        content: 'The camp reinforced Club Rafiki\'s long-standing belief that sport is one of the most powerful tools for youth development. Beyond basketball skills, participants received mentorship on leadership, discipline, teamwork, and community responsibility. The collaboration between Club Rafiki and Giants of Africa continues to open doors for talented youth who might otherwise lack access to high-quality coaching and mentorship.',
      },
    ],

    photos: [
      '/assets/Images/Goa Cover.jpg',
      '/assets/Images/GoA Visit 5.jpg',
      '/assets/Images/GoA Visit 4.jpg',
      '/assets/Images/GoA Visit 3.jpg',
      '/assets/Images/GoA Visit 2.jpg',
    ],
  },

  // ── 4. RBA_IWACU TALENT SHOWCASE ──────────────────────────────────────────
  {
    id: 'rba-iwacu-talents',
    tag: 'Latest News',
    date: 'July 23, 2025',
    title: 'Young People Showcase Their Talents at Club Rafiki with RBA_Iwacu',
    heroImg: 'https://i0.wp.com/clubrafiki.com/wp-content/uploads/2025/10/54684050769_f3172ccf5c_c.jpg?resize=799%2C533&ssl=1',
    intro: 'Kigali, July 23, 2025 — In a celebration of youth creativity and skill, Club Rafiki partnered with RBA_Iwacu to host a vibrant talent showcase, giving young people a stage to express themselves through dance, music, art, sports, and more.',

    sections: [
      {
        heading: 'A Partnership Rooted in Youth Expression',
        content: 'The collaboration between Club Rafiki and RBA_Iwacu brought together two organizations united by their commitment to nurturing young talent in Rwanda. The talent showcase was designed as a platform where youth who have been developing their skills through Club Rafiki\'s various programs could perform, compete, and be recognized in front of their community.',
      },
      {
        heading: 'Performances That Moved the Crowd',
        content: 'The event featured performances from Club Rafiki\'s Urban Dance School, music class students, drama groups, and martial arts practitioners. Table tennis and basketball demonstrations drew cheers from the audience. Young fashion designers also had the opportunity to present their work, reflecting the breadth of creative talent nurtured at the center. Each performance was a testament to the hours of practice and dedication behind the scenes.',
        quote: {
          text: 'Club Rafiki is where I found my voice. This stage today showed me that my talent has value and that people want to see what I can do.',
          author: 'Youth performer, RBA_Iwacu Talent Showcase 2025',
        },
      },
      {
        heading: 'Celebrating the Next Generation',
        content: 'The showcase closed with an awards ceremony recognizing outstanding performances across all categories. Community members, parents, local leaders, and media were all present, making it a true community celebration. Club Rafiki and RBA_Iwacu both affirmed their commitment to creating more such platforms — because every young person deserves a stage.',
      },
    ],

    photos: [
      'https://i0.wp.com/clubrafiki.com/wp-content/uploads/2025/10/54684050769_f3172ccf5c_c.jpg?resize=799%2C533&ssl=1',
      'https://i.ibb.co/PsjqzjV4/Music-2-1.png',
      'https://i.ibb.co/CKBGq1mr/cropped-dsc-08142.jpg',
    ],
  },

  // ── 5. GIRL UP REPORT ─────────────────────────────────────────────────────
  {
    id: 'girl-up-2024',
    tag: 'Empowerment',
    date: 'January 2025',
    title: 'Girl Up Leadership Circle — 2024 Semester Report',
    heroImg: 'https://i.ibb.co/HpYNKtq4/Semester-report-2024-photo.png',
    intro: 'The 2024 semester of Club Rafiki\'s Girl Up Leadership Circle concluded with a ceremony celebrating 45 young women who completed the program — a milestone reflecting the program\'s growing impact on girls in Nyamirambo and surrounding communities.',

    sections: [
      {
        heading: 'A Year of Growth and Achievement',
        content: 'The Girl Up program ran throughout 2024 with sessions covering leadership development, financial literacy, vocational skills training, reproductive health education, and peer mentorship. Participants ranged in age from 14 to 24 and came from Nyamirambo, Kanyinya, and Mageragere. Each semester is structured to give girls both practical skills and the confidence to apply them in their daily lives.',
      },
      {
        heading: 'Vocational Training and Economic Independence',
        content: 'A key focus of the 2024 semester was vocational training in sewing and fashion design. Several graduates have already begun selling their work or taking on clients independently, demonstrating that the skills gained translate directly into economic opportunity. Financial literacy sessions equipped participants with knowledge about budgeting, saving, and planning for the future.',
        quote: {
          text: 'Club Rafiki gave me the skills and confidence to start my own tailoring business. The Girls program changed my life — I now teach other young women what I learned here.',
          author: 'Uwase Diane, Girl Up Graduate 2023',
        },
      },
      {
        heading: 'Looking Ahead to 2025',
        content: 'Building on the success of 2024, Club Rafiki plans to expand the Girl Up program to reach more girls in rural communities, deepen the mentorship component, and strengthen partnerships with organizations supporting women\'s rights and education in Rwanda. Applications for the next cohort will open in early 2025.',
      },
    ],

    photos: [
      'https://i.ibb.co/HpYNKtq4/Semester-report-2024-photo.png',
      'https://picsum.photos/600/400?image=1027',
      'https://picsum.photos/600/400?image=1005',
    ],
  },

  // ── 6. VCT CAMPAIGN ───────────────────────────────────────────────────────
  {
    id: 'vct-campaign-2019',
    tag: 'Health',
    date: 'December 2024',
    title: 'Mobile VCT Campaign Reaches 1,200 in Nyamirambo',
    heroImg: 'https://i.ibb.co/ccb1JwML/Health-pictures.png',
    intro: 'In December 2024, Club Rafiki\'s health outreach team completed a major Voluntary Counseling and Testing (VCT) mobile campaign, reaching over 1,200 individuals across six neighborhoods in Nyamirambo — making life-saving HIV testing and health information accessible to those who need it most.',

    sections: [
      {
        heading: 'Taking Health Services to the Community',
        content: 'The VCT mobile campaign was organized in partnership with the Rwanda Biomedical Centre, Nyarugenge District health authorities, and community leaders. Rather than waiting for people to come to a clinic, the Club Rafiki health team took testing services directly into the community — setting up at local markets, community gathering points, and neighborhoods where access to health facilities is limited.',
      },
      {
        heading: 'More Than Testing — Education and Support',
        content: 'Alongside HIV testing, peer educators delivered sessions on Sexual and Reproductive Health and Rights (SRHR), safe behaviors, and how to access ongoing support and treatment. The individual counseling approach — where participants speak one-on-one with a peer educator of the same gender — ensured that conversations were private, comfortable, and genuinely informative.',
        quote: {
          text: 'Many people in our community have never been tested before. Coming to them directly removes the fear and makes it possible for them to know their status and protect their families.',
          author: 'Club Rafiki Health Outreach Coordinator',
        },
      },
      {
        heading: 'Impact and Next Steps',
        content: 'The campaign reached six neighborhoods, testing over 1,200 individuals. Those who tested positive were immediately connected with counseling services and referral pathways to treatment. Club Rafiki plans to continue running VCT mobile campaigns quarterly in 2025, extending coverage to additional rural areas including Kanyinya and Mageragere.',
      },
    ],

    photos: [
      '/assets/Images/SRHR outreach.jpg',
      '/assets/Images/SRHR outreach 3.jpg',
      '/assets/Images/SRHR outreach 4.jpg',
      '/assets/Images/SRHR outreach 5.jpg',
      '/assets/Images/SRHR outreach 2.jpg',
    ],
  },
]

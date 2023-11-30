export type LibraryInformationType = {
  imageUrl: string;
  name: string;
  address: string;
  tel: string;
  fax: string;
  map: string;
  opening: OpeningHoursType[];
};

export type OpeningHoursType = {
  day: string;
  time: string;
};

export const LibraryInformation: LibraryInformationType[] = [
  {
    imageUrl: "/um-library.jpeg",
    name: "CENTRAL LIBRARY",
    address:
      "Central Library, Universiti Malaya, 50603 Lembah Pantai Kuala Lumpur.",
    tel: "+603-7956 7800",
    fax: "+603-7967 3661",
    map: "https://www.google.com/maps?ll=3.126486,101.650089&z=12&t=m&hl=en&gl=US&mapclient=embed&cid=652506077392968830",
    opening: [
      { day: "Saturday-Sunday", time: "9:00-16:00" },
      { day: "Monday-Friday", time: "8:00-22:00" },
      { day: "Public Holiday", time: "Closed" },
    ],
  },
  {
    imageUrl: "/tjmedical.webp",
    name: "T. J. DANARAJ MEDICAL LIBRARY",
    address:
      "T.J Danaraj Library, Faculty of Medicine, Universiti Malaya, 50603 Lembah Pantai, Kuala Lumpur.",
    tel: "+603-7967 4783",
    fax: "+603-7967 4384",
    map: "https://www.google.com/maps?ll=3.114606,101.65327&z=7&t=m&hl=en&gl=US&mapclient=embed&cid=6831777977710719272",
    opening: [
      { day: "Saturday-Sunday", time: "9:00-16:00" },
      { day: "Monday-Friday", time: "8:00-20:00" },
      { day: "Public Holiday", time: "Closed" },
    ],
  },
  {
    imageUrl: "/tansrilaw.jpeg",
    name: "TAN SRI PROF.AHMAD IBRAHIM LAW LIBRARY",
    address:
      "Tan Sri Prof. Ahmad Ibrahim Law Library, Faculty of Law, Universiti Malaya, 50603 Lembah Pantai, Kuala Lumpur.",
    tel: "+603-7967 6568",
    fax: "+603-7967 6517",
    map: "https://www.google.com/maps?ll=3.117722,101.660959&z=7&t=m&hl=en&gl=US&mapclient=embed&cid=7270331498824986033",
    opening: [
      { day: "Saturday-Sunday", time: "9:00-16:00" },
      { day: "Monday-Friday", time: "8:00-6:30" },
      { day: "Public Holiday", time: "Closed" },
    ],
  },
  {
    imageUrl: "/zabamemorial.jpeg",
    name: "ZA'BA MEMORIAL LIBRARY",
    address:
      "Za’ba Memorial Library, Universiti Malaya, 50603 Lembah Pantai, Kuala Lumpur.",
    tel: "+603-7967 3847",
    fax: "+603-7967 3917",
    map: "https://www.google.com/maps?ll=3.118678,101.653572&z=7&t=m&hl=en&gl=US&mapclient=embed&cid=16411982945566134631",
    opening: [
      { day: "Saturday-Sunday", time: "Closed" },
      { day: "Monday-Friday", time: "8:00-17:00" },
      { day: "Public Holiday", time: "Closed" },
    ],
  },
  {
    imageUrl: "/builtenvironmentfac.jpeg",
    name: "BUILT ENVIRONMENT LIBRARY",
    address:
      "Built Environment Library, Ground Floor, Mercu Alam Bina, Faculty of Built Environment, Universiti Malaya, 50603 Lembah Pantai, Kuala Lumpur.",
    tel: "+603-7967 6802",
    fax: "+603-7967 3661",
    map: "https://www.google.com/maps?ll=3.115863,101.655305&z=7&t=m&hl=en&gl=US&mapclient=embed&cid=16497226138922279304",
    opening: [
      { day: "Saturday-Sunday", time: "Closed" },
      { day: "Monday-Friday", time: "8:00-17:00" },
      { day: "Friday Prayer", time: "Closed" },
      { day: "Public Holiday", time: "Closed" },
    ],
  },
  {
    imageUrl: "/dental.png",
    name: "DENTAL LIBRARY",
    address:
      "Dental Library, 2nd Floor, Balai Ungku Aziz, Faculty of Dentistry, Universiti Malaya, 50603 Lembah Pantai, Kuala Lumpur.",
    tel: "+603-7967 7417",
    fax: "+603-7967 7455",
    map: "https://www.google.com/maps?ll=3.115872,101.660038&z=7&t=m&hl=en&gl=US&mapclient=embed&cid=11903587967685052465",
    opening: [
      { day: "Saturday-Sunday", time: "9:00-16:00" },
      { day: "Monday-Friday", time: "9:00-18:00" },
      { day: "Friday Prayer", time: "Closed" },
      { day: "Public Holiday", time: "Closed" },
    ],
  },
  {
    imageUrl: "/zabamemorial.jpeg",
    name: "EAST ASIAN STUDIES LIBRARY",
    address:
      "East Asian Studies Library, 4th Floor, Za’ba Memorial Library,Universiti Malaya, 50603 Lembah Pantai, Kuala Lumpur.",
    tel: "+603-7967 3840",
    fax: "+603-7967 3847",
    map: "https://www.google.com/maps?ll=3.118678,101.653572&z=7&t=m&hl=en&gl=US&mapclient=embed&cid=16411982945566134631",
    opening: [
      { day: "Saturday-Sunday", time: "Closed" },
      { day: "Monday-Friday", time: "8:00-17:00" },
      { day: "Friday Prayer", time: "Closed" },
      { day: "Public Holiday", time: "Closed" },
    ],
  },
  {
    imageUrl: "/educationfac.jpeg",
    name: "EDUCATION LIBRARY",
    address:
      "Education Library, Ground Floor Block C, Faculty of Education, Universiti Malaya, 50603 Lembah Pantai, Kuala Lumpur.",
    tel: "+603-7967 5018",
    fax: "",
    map: "https://www.google.com/maps?ll=3.120192,101.653198&z=7&t=m&hl=en&gl=US&mapclient=embed&cid=5152364522749879809",
    opening: [
      { day: "Saturday-Sunday", time: "Closed" },
      { day: "Monday-Friday", time: "8:00-17:00" },
      { day: "Friday Prayer", time: "Closed" },
      { day: "Public Holiday", time: "Closed" },
    ],
  },
  {
    imageUrl: "/engineeringfac.jpeg",
    name: "ENGINEERING LIBRARY",
    address:
      "Engineering Library, 6th Floor, Laboratory Wing, Faculty of Engineering, Universiti Malaya, 50603 Lembah Pantai, Kuala Lumpur.",
    tel: "+603-7967 5259",
    fax: "",
    map: "https://www.google.com/maps?ll=3.117795,101.655612&z=7&t=m&hl=en&gl=US&mapclient=embed&cid=12405442501119877945",
    opening: [
      { day: "Saturday-Sunday", time: "Closed" },
      { day: "Monday-Friday", time: "8:00-17:00" },
      { day: "Friday Prayer", time: "Closed" },
      { day: "Public Holiday", time: "Closed" },
    ],
  },
  {
    imageUrl: "/um-library.jpeg",
    name: "INDIAN STUDIES LIBRARY",
    address:
      "Indian Studies Library, 5th Floor, Za’ba Memorial Library,Universiti Malaya, 50603 Lembah Pantai, Kuala Lumpur.",
    tel: "+603-7967 5259",
    fax: "",
    map: "https://www.google.com/maps?ll=3.118678,101.653572&z=7&t=m&hl=en&gl=US&mapclient=embed&cid=16411982945566134631",
    opening: [
      { day: "Saturday-Sunday", time: "Closed" },
      { day: "Monday-Friday", time: "8:00-17:00" },
      { day: "Friday Prayer", time: "Closed" },
      { day: "Public Holiday", time: "Closed" },
    ],
  },
  {
    imageUrl: "/zabamemorial.jpeg",
    name: "ISLAMIC STUDIES LIBRARY (MAIN CAMPUS,KUALA LUMPUR)",
    address:
      "Islamic Studies Library, Academy of Islamic Studies, Universiti Malaya, 50603 Lembah Pantai, Kuala Lumpur.",
    tel: "+603-7957-6116",
    fax: "",
    map: "https://www.google.com/maps?ll=3.132804,101.657628&z=7&t=m&hl=en&gl=US&mapclient=embed&cid=1005095451179330012",
    opening: [
      { day: "Saturday-Sunday", time: "Closed" },
      { day: "Monday-Friday", time: "8:00-17:00" },
      { day: "Friday Prayer", time: "Closed" },
      { day: "Public Holiday", time: "Closed" },
    ],
  },
  {
    imageUrl: "/languagefac.png",
    name: "LANGUAGES & LINGUISTICS LIBRARY",
    address:
      "Language & Linguistic Library, Ground Floor, Faculty of Language & Linguistic, Universiti Malaya, 50603 Lembah Pantai, Kuala Lumpur.",
    tel: "+603-7967 3092",
    fax: "",
    map: "https://www.google.com/maps?ll=3.122531,101.651433&z=7&t=m&hl=en&gl=US&mapclient=embed&cid=3190201805703144249",
    opening: [
      { day: "Saturday-Sunday", time: "Closed" },
      { day: "Monday-Friday", time: "8:00-17:00" },
      { day: "Friday Prayer", time: "Closed" },
      { day: "Public Holiday", time: "Closed" },
    ],
  },
  {
    imageUrl: "/malaystudies.jpeg",
    name: "MALAY STUDIES LIBRARY",
    address:
      "Malay Studies Library, Academy of Malay Studies, Universiti Malaya, 50603 Lembah Pantai, Kuala Lumpur.",
    tel: "+603-79677285",
    fax: "",
    map: "https://www.google.com/maps?ll=3.124555,101.652448&z=7&t=m&hl=en&gl=US&mapclient=embed&cid=14533313537191002655",
    opening: [
      { day: "Saturday-Sunday", time: "Closed" },
      { day: "Monday-Friday", time: "8:00-17:00" },
      { day: "Friday Prayer", time: "Closed" },
      { day: "Public Holiday", time: "Closed" },
    ],
  },
  {
    imageUrl: "/zabamemorial.jpeg",
    name: "UM ARCHIVE",
    address:
      "UM Archive, 5th Floor, Za’ba Memorial Library, 50603 Lembah Pantai, Kuala Lumpur.",
    tel: "+603-79673922",
    fax: "+603-7957 3917",
    map: "https://www.google.com/maps?ll=3.118678,101.653572&z=7&t=m&hl=en&gl=US&mapclient=embed&cid=16411982945566134631",
    opening: [
      { day: "Saturday-Sunday", time: "Closed" },
      { day: "Monday-Friday", time: "8:00-17:00" },
      { day: "Friday Prayer", time: "Closed" },
      { day: "Public Holiday", time: "Closed" },
    ],
  },
];

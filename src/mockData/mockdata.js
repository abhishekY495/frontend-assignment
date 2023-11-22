import { v4 as uuidv4 } from "uuid";

export const postsDB = [
  {
    id: uuidv4(),
    imageUrl: "https://source.unsplash.com/random/" + uuidv4(),
    postedBy: "Alice Smith",
    userName: "alicesmith21",
    likes: 5,
    isBookmarked: false,
    comments: [
      {
        id: uuidv4(),
        fullName: "John Doe",
        userName: "johndoe",
        comment: "Great shot",
      },
    ],
  },
  {
    id: uuidv4(),
    imageUrl: "https://source.unsplash.com/random/" + uuidv4(),
    postedBy: "Emily Jacobs",
    userName: "emily",
    likes: 8,
    isBookmarked: true,
    comments: [
      {
        id: uuidv4(),
        fullName: "Alice Smith",
        userName: "alice82",
        comment: "Love the colors",
      },
      {
        id: uuidv4(),
        fullName: "Bob Johnson",
        userName: "bobby",
        comment: "Fantastic",
      },
    ],
  },
  {
    id: uuidv4(),
    imageUrl: "https://source.unsplash.com/random/" + uuidv4(),
    postedBy: "Alice Smith",
    userName: "alicesmith21",
    likes: 12,
    isBookmarked: false,
    comments: [
      {
        id: uuidv4(),
        fullName: "Eva Green",
        userName: "eva",
        comment: "Beautiful composition.",
      },
      {
        id: uuidv4(),
        fullName: "Charlie Brown",
        userName: "charlie314",
        comment: "Amazing work",
      },
      {
        id: uuidv4(),
        fullName: "Grace Wilson",
        userName: "grace_wil",
        comment: "Absolutely stunning",
      },
    ],
  },
  {
    id: uuidv4(),
    imageUrl: "https://source.unsplash.com/random/" + uuidv4(),
    postedBy: "Jim Halpert",
    userName: "jimmy",
    likes: 6,
    isBookmarked: false,
    comments: [
      {
        id: uuidv4(),
        fullName: "David Miller",
        userName: "david",
        comment: "Well captured",
      },
      {
        id: uuidv4(),
        fullName: "Sophie White",
        userName: "sophite21",
        comment: "Impressive",
      },
    ],
  },
  {
    id: uuidv4(),
    imageUrl: "https://source.unsplash.com/random/" + uuidv4(),
    postedBy: "Mia Davis",
    userName: "miadavis65",
    likes: 10,
    isBookmarked: false,
    comments: [
      {
        id: uuidv4(),
        fullName: "Daniel Taylor",
        userName: "taylor88",
        comment: "Incredible shot",
      },
    ],
  },
  {
    id: uuidv4(),
    imageUrl: "https://source.unsplash.com/random/" + uuidv4(),
    postedBy: "Sophie Green",
    userName: "green_sophie",
    likes: 7,
    isBookmarked: true,
    comments: [
      {
        id: uuidv4(),
        fullName: "Olivia Davis",
        userName: "oliD77",
        comment: "Love the composition",
      },
      {
        id: uuidv4(),
        fullName: "Max Robinson",
        userName: "max",
        comment: "Perfect timing",
      },
    ],
  },
  {
    id: uuidv4(),
    imageUrl: "https://source.unsplash.com/random/" + uuidv4(),
    postedBy: "Jim Halpert",
    userName: "jimmy",
    likes: 15,
    isBookmarked: false,
    comments: [
      {
        id: uuidv4(),
        fullName: "Emma Brown",
        userName: "emma",
        comment: "Absolutely breathtaking",
      },
      {
        id: uuidv4(),
        fullName: "Liam Johnson",
        userName: "liam",
        comment: "Great job",
      },
      {
        id: uuidv4(),
        fullName: "Ava Taylor",
        userName: "avaT",
        comment: "So artistic",
      },
    ],
  },
  {
    id: uuidv4(),
    imageUrl: "https://source.unsplash.com/random/" + uuidv4(),
    postedBy: "Andrew King",
    userName: "king_andrew",
    likes: 9,
    isBookmarked: false,
    comments: [
      {
        id: uuidv4(),
        fullName: "Noah White",
        userName: "noah_white_82",
        comment: "Well done",
      },
    ],
  },
  {
    id: uuidv4(),
    imageUrl: "https://source.unsplash.com/random/" + uuidv4(),
    postedBy: "Andrew King",
    userName: "king_andrew",
    likes: 11,
    isBookmarked: false,
    comments: [
      {
        id: uuidv4(),
        fullName: "Mia Davis",
        userName: "miad",
        comment: "Fantastic shot",
      },
      {
        id: uuidv4(),
        fullName: "Jack Wilson",
        userName: "jacky",
        comment: "Impressive work",
      },
    ],
  },
  {
    id: uuidv4(),
    imageUrl: "https://source.unsplash.com/random/" + uuidv4(),
    postedBy: "Emily Jacobs",
    userName: "emily",
    likes: 13,
    isBookmarked: false,
    comments: [
      {
        id: uuidv4(),
        fullName: "Sophia Green",
        userName: "green_sophie",
        comment: "Love the mood",
      },
      {
        id: uuidv4(),
        fullName: "Benjamin Robinson",
        userName: "benjamin",
        comment: "Captivating",
      },
    ],
  },
  {
    id: uuidv4(),
    imageUrl: "https://source.unsplash.com/random/" + uuidv4(),
    postedBy: "Sophie Green",
    userName: "green_sophie",
    likes: 6,
    isBookmarked: false,
    comments: [
      {
        id: uuidv4(),
        fullName: "Luna Taylor",
        userName: "luna",
        comment: "Beautiful scenery",
      },
      {
        id: uuidv4(),
        fullName: "Owen Robinson",
        userName: "owen",
        comment: "Great perspective",
      },
      {
        id: uuidv4(),
        fullName: "Zoe Johnson",
        userName: "zoeJ22",
        comment: "Love the details",
      },
    ],
  },
];

export const usersDB = [
  {
    fullName: "Alice Smith",
    userName: "alicesmith21",
    password: "alicesmith@2121",
  },
  { fullName: "Emily Jacobs", userName: "emily", password: "emily#1020" },
  {
    fullName: "Guest User",
    userName: "guest_user_01",
    password: "guest_user_01",
  },
  { fullName: "Jim Halpert", userName: "jimmy", password: "pambeesly" },
  { fullName: "Mia Davis", userName: "miadavis65", password: "miadavis65" },
  {
    fullName: "Sophie Green",
    userName: "green_sophie",
    password: "pokasd@123123",
  },
  { fullName: "Andrew King", userName: "king_andre", password: "iamtheking" },
];

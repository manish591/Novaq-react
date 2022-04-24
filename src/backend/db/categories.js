import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: '9f795497-e110-4024-9825-4c128e648f38',
    categoryName: 'Books',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius velit ac dui varius, non lacinia libero dapibus. Suspendisse hendrerit sapien nec mauris posuere blandit. Nulla ut egestas mauris, sit amet condimentum sapien. Maecenas nec felis lectus. Aliquam mollis maximus lacinia. Nullam non nisi nisl.',
    quizzes: [
      {
        _id: '6db2deca-544e-499a-aed8-ffee86a534bb',
        title: 'Are You A Book Reader? Part I',
        catergory_name: 'Books',
        difficulty: 'Easy',
        totalQuestion: 5,
        image: ''
      },
      {
        _id: 'f8bc7e28-da53-469e-98dd-3e0b288021c8',
        title: 'Are You a book Reader? PartII',
        catergory_name: 'Books',
        difficulty: 'Easy',
        totalQuestion: 10,
        image: ''
      },
      {
        _id: 'c737ff91-5745-42ba-920e-4a4050ba5b30',
        title: 'Are You a book Reader? PartIII',
        catergory_name: 'Books',
        difficulty: 'Easy',
        totalQuestion: 5,
        image: ''
      },
      {
        _id: '5a7ebe32-5196-4a4d-8f05-4ea8ad281bff',
        title: 'Are You a book Reader? PartIV',
        catergory_name: 'Books',
        difficulty: 'Medium',
        totalQuestion: 5,
        image: ''
      },
      {
        _id: 'd1b00287-3a3f-47f1-bf0f-0f03dcd5bb77',
        title: 'Are You a book Reader? PartV',
        catergory_name: 'Books',
        difficulty: 'Medium',
        totalQuestion: 5,
        image: ''
      },
      {
        _id: 'da606624-d7c7-44cb-b3a3-71be81de6e7e',
        title: 'Are You a book Reader? PartIV',
        catergory_name: 'Books',
        difficulty: 'Medium',
        totalQuestion: 5,
        image: ''
      },
      {
        _id: '69fd5f18-9505-44fa-b4d1-ac3355eb0159',
        title: 'Are You a book Reader? PartVI',
        catergory_name: 'Books',
        difficulty: 'Hard',
        totalQuestion: 5,
        image: ''
      },
      {
        _id: 'ce495310-4737-49e6-b4ab-9fdaaaf42f08',
        title: 'Are You a book Reader? PartVII',
        catergory_name: 'Books',
        difficulty: 'Hard',
        totalQuestion: 5,
        image: ''
      }
    ]
  },
  {
    _id: '90d91e6c-a124-4f73-a793-5694c9f5169d',
    categoryName: 'Celebrities',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius velit ac dui varius, non lacinia libero dapibus. Suspendisse hendrerit sapien nec mauris posuere blandit. Nulla ut egestas mauris, sit amet condimentum sapien. Maecenas nec felis lectus. Aliquam mollis maximus lacinia. Nullam non nisi nisl.',
    quizzes: []
  },
  {
    _id: '12d4737a-eb43-4094-bda1-882b99568e36',
    categoryName: 'Sports',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius velit ac dui varius, non lacinia libero dapibus. Suspendisse hendrerit sapien nec mauris posuere blandit. Nulla ut egestas mauris, sit amet condimentum sapien. Maecenas nec felis lectus. Aliquam mollis maximus lacinia. Nullam non nisi nisl.',
    quizzes: []
  },
  {
    _id: '29d36691-2113-4044-8763-9198fd862265',
    categoryName: 'History',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius velit ac dui varius, non lacinia libero dapibus. Suspendisse hendrerit sapien nec mauris posuere blandit. Nulla ut egestas mauris, sit amet condimentum sapien. Maecenas nec felis lectus. Aliquam mollis maximus lacinia. Nullam non nisi nisl.',
    quizzes: []
  },
  {
    _id: '0d225845-5870-4e3f-9f1b-010e766a6d5c',
    categoryName: 'Film',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius velit ac dui varius, non lacinia libero dapibus. Suspendisse hendrerit sapien nec mauris posuere blandit. Nulla ut egestas mauris, sit amet condimentum sapien. Maecenas nec felis lectus. Aliquam mollis maximus lacinia. Nullam non nisi nisl.',
    quizzes: []
  },
  {
    _id: '27bd8634-b4d4-4e1c-9a60-9225863a0e24',
    categoryName: 'Music',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec varius velit ac dui varius, non lacinia libero dapibus. Suspendisse hendrerit sapien nec mauris posuere blandit. Nulla ut egestas mauris, sit amet condimentum sapien. Maecenas nec felis lectus. Aliquam mollis maximus lacinia. Nullam non nisi nisl.',
    quizzes: []
  }
];

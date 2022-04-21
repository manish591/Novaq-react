import { v4 as uuid } from 'uuid';

/**
 * Quiz Database can be added here.
 * You can add Quiz of your wish with different attributes
 * */

export const quizzes = [
  {
    _id: uuid(),
    title: 'Are You a book Reader? PartI',
    totalScore: 25,
    catergory_name: 'Books',
    difficulty: 'Easy',
    mcqs: [
      {
        _id: uuid(),
        type: 'multiple',
        question: 'Who wrote &quot;Harry Potter&quot;?',
        correct_answer: 'J.K. Rowling',
        incorrect_answers: [
          'J.R.R. Tolkien',
          'Terry Pratchett',
          'Daniel Radcliffe'
        ]
      },
      {
        _id: uuid(),
        type: 'multiple',
        question:
          'George Orwell wrote this book, which is often considered a statement on government oversight.',
        correct_answer: '1984',
        incorrect_answers: [
          'The Old Man and the Sea',
          'Catcher and the Rye',
          'To Kill a Mockingbird'
        ]
      },
      {
        _id: uuid(),
        type: 'multiple',
        question:
          'Which famous book is sub-titled &#039;The Modern Prometheus&#039;?',
        correct_answer: 'Frankenstein',
        incorrect_answers: [
          'Dracula',
          'The Strange Case of Dr. Jekyll and Mr. Hyde ',
          'The Legend of Sleepy Hollow'
        ]
      },
      {
        _id: uuid(),
        type: 'multiple',
        question:
          'What was the name of Captain Nemo&#039;s submarine in &quot;20,000 Leagues Under the Sea&quot;?',
        correct_answer: 'The Nautilus',
        incorrect_answers: ['The Neptune', 'The Poseidon  ', 'The Atlantis']
      },
      {
        _id: uuid(),
        type: 'multiple',
        question:
          'Which of the following is the world&#039;s best-selling book?',
        correct_answer: 'The Lord of the Rings',
        incorrect_answers: [
          'The Little Prince',
          'Harry Potter and the Philosopher&#039;s Stone',
          'The Da Vinci Code'
        ]
      }
    ]
  },
  {
    _id: uuid(),
    title: 'Are You a book Reader? PartII',
    totalScore: 50,
    catergory_name: 'Books',
    difficulty: 'Easy',
    mcqs: [
      {
        _id: uuid(),
        type: 'multiple',
        question:
          'Who wrote the novel &#039;Fear And Loathing In Las Vegas&#039;?',
        correct_answer: 'Hunter S. Thompson',
        incorrect_answers: [
          'F. Scott Fitzgerald',
          'Henry Miller',
          'William S. Burroughs'
        ]
      },
      {
        _id: uuid(),
        type: 'multiple',
        question: '&quot;Green Eggs And Ham&quot; is a book by which author?',
        correct_answer: 'Dr. Seuss',
        incorrect_answers: ['Beatrix Potter', 'Roald Dahl', 'A.A. Milne']
      },
      {
        _id: uuid(),
        type: 'multiple',
        question:
          'Which famous spy novelist wrote the childrens&#039; story &quot;Chitty-Chitty-Bang-Bang&quot;?',
        correct_answer: 'Ian Fleming',
        incorrect_answers: ['Joseph Conrad', 'John Buchan', 'Graham Greene']
      },
      {
        _id: uuid(),
        type: 'multiple',
        question: 'How many Harry Potter books are there?',
        correct_answer: '7',
        incorrect_answers: ['8', '5', '6']
      },
      {
        _id: uuid(),
        type: 'multiple',
        question:
          'Under what pseudonym did Stephen King publish five novels between 1977 and 1984?',
        correct_answer: 'Richard Bachman',
        incorrect_answers: ['J. D. Robb', 'Mark Twain', 'Lewis Carroll']
      },
      {
        _id: uuid(),
        type: 'multiple',
        question: 'What&#039;s Harry Potter&#039;s dad&#039;s name?',
        correct_answer: 'James Potter',
        incorrect_answers: ['Joey Potter', 'Frank Potter', 'Hairy Potter Sr.']
      },
      {
        _id: uuid(),
        type: 'multiple',
        question:
          'Who wrote the young adult novel &quot;The Fault in Our Stars&quot;?',
        correct_answer: 'John Green',
        incorrect_answers: [
          'Stephenie Meyer',
          'Suzanne Collins',
          'Stephen Chbosky'
        ]
      },
      {
        _id: uuid(),
        type: 'multiple',
        question:
          'Who was the author of the 1954 novel, &quot;Lord of the Flies&quot;?',
        correct_answer: 'William Golding',
        incorrect_answers: ['Stephen King', 'F. Scott Fitzgerald', 'Hunter Fox']
      },
      {
        _id: uuid(),
        type: 'multiple',
        question:
          'What is the name of the three headed dog in Harry Potter and the Sorcerer&#039;s Stone?',
        correct_answer: 'Fluffy',
        incorrect_answers: ['Spike', 'Poofy', 'Spot']
      },
      {
        _id: uuid(),
        type: 'multiple',
        question:
          'What is the name of the protagonist of J.D. Salinger&#039;s novel Catcher in the Rye?',
        correct_answer: 'Holden Caulfield',
        incorrect_answers: ['Fletcher Christian', 'Jay Gatsby', 'Randall Flagg']
      }
    ]
  },
  {
    _id: uuid(),
    title: 'Are You a book Reader? PartIII',
    totalScore: 25,
    catergory_name: 'Books',
    difficulty: 'Easy',
    mcqs: [
      {
        type: 'multiple',
        question:
          'What is the title of the first Sherlock Holmes book by Arthur Conan Doyle?',
        correct_answer: 'A Study in Scarlet',
        incorrect_answers: [
          'The Sign of the Four',
          'A Case of Identity',
          'The Doings of Raffles Haw'
        ]
      },
      {
        type: 'multiple',
        question: 'What is the name of Sherlock Holmes&#039;s brother?',
        correct_answer: 'Mycroft Holmes',
        incorrect_answers: [
          'Mederi Holmes',
          'Martin Holmes',
          'Herbie Hancock Holmes'
        ]
      },
      {
        type: 'multiple',
        question:
          'What&#039;s the second book in George R. R. Martin&#039;s &#039;A Song of Ice and Fire&#039; series?',
        correct_answer: 'A Clash of Kings',
        incorrect_answers: [
          'A Dance with Dragons',
          'A Storm of Swords',
          'A Feast for Crows'
        ]
      },
      {
        type: 'multiple',
        question:
          'What was the first ever entry written for the SCP Foundation collaborative writing project?',
        correct_answer: 'SCP-173',
        incorrect_answers: ['SCP-001', 'SCP-999', 'SCP-1459']
      },
      {
        type: 'multiple',
        question: 'Which is NOT a book in the Harry Potter Series?',
        correct_answer: 'The House Elf',
        incorrect_answers: [
          'The Chamber of Secrets',
          'The Prisoner of Azkaban',
          'The Deathly Hallows'
        ]
      }
    ]
  },
  {
    _id: uuid(),
    title: 'Are You a book Reader? PartIV',
    totalScore: 100,
    catergory_name: 'Books',
    difficulty: 'Medium',
    mcqs: []
  },
  {
    _id: uuid(),
    title: 'Are You a book Reader? PartV',
    totalScore: 95,
    catergory_name: 'Books',
    difficulty: 'Medium',
    mcqs: []
  },
  {
    _id: uuid(),
    title: 'Are You a book Reader? PartIV',
    totalScore: 100,
    catergory_name: 'Books',
    difficulty: 'Medium',
    mcqs: []
  },
  {
    _id: uuid(),
    title: 'Are You a book Reader? PartVI',
    totalScore: 100,
    catergory_name: 'Books',
    difficulty: 'Hard',
    mcqs: []
  },
  {
    _id: uuid(),
    title: 'Are You a book Reader? PartVII',
    totalScore: 25,
    catergory_name: 'Books',
    difficulty: 'Hard',
    mcqs: []
  }
];

let userName = `Miller`;
let userQuestion = `Should I continue using Codecademy?`;
let randomNumber = 0;
let eightBall = '';

userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);

if (userName) {
  if (userQuestion) {
    console.log(`${userName} : ${userQuestion}`);
  } else {
    console.log(`Please enter a question!`);
  }
} else {
  if (userQuestion) {
    console.log(`User : ${userQuestion}`);
  } else {
    console.log(`Please enter a question!`);
  }
}

randomNumber = Math.floor(Math.random() * 8);

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    console.log('Error!');
    break;
}

console.log(eightBall);

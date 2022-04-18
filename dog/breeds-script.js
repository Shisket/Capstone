const Questions = [{
  id: 0,
  q: "Which of these is not a dog breed?",
  a: [{ text: "Calico", isCorrect: true },
      { text: "Poodle", isCorrect: false },
      { text: "Dalmation", isCorrect: false },
      { text: "Newfoundland", isCorrect: false }
  ],
  blurb: "While all dogs are the same <span class = 'definition defined' data-text = 'a group of similar individuals that are able to reproduce with each other'>species</span>, there are lots of differences within the group. Because of this, they are separated into smaller sections called “breeds”. Breeds are defined based on similarities in how they look, how they act, and what they are made to do. There are also different groups of breeds based on the purposes of the breeds.",
  title: "What is a breed?"

},
{
  id: 1,
  q: "A beagle is a small hunting dog. They use their great sense of smell to track and hunt rabbits. Which breed group includes beagles?",
  a: [{ text: "Hunting Breeds", isCorrect: false },
      { text: "Hound Breeds", isCorrect: true },
      { text: "Terrier Breeds", isCorrect: false },
      { text: "Sporting Breeds", isCorrect: false }
  ],
  blurb: "<b>Hound Dogs:</b> These are dogs that were bred to help hunters by tracking or hunting ground prey.<br><br><b>Sporting Dogs:</b> These are dogs that were bred to help hunt birds. They are often good swimmers, and many of them “point”.<br><br><b>Terrier Dogs:</b> These dogs are bred for a variety of tasks, especially hunting underground prey either by digging or burrowing.",
  title: "Hunting Breeds"

},
{
  id: 2,
  q: "Which of these breeds is not considered a Working Breed?",
  a: [{ text: "Siberian Husky", isCorrect: false },
      { text: "Bernese Mountain Dog", isCorrect: false },
      { text: "Doberman Pinscher", isCorrect: false },
      { text: "Border Collie", isCorrect: true }
  ],
  blurb: "<b>Herding Dogs:</b> These are dogs that were bred to herd other animals, like sheep and cows.<br><br><b>Toy Dogs:</b> These are dogs that were bred to be cute, tiny, and a good companion.<br><br><b>Working Dogs:</b> These dogs are bred to work. There are many different jobs they can do from guarding houses to rescuing people.<br><br><b>Non-Sporting Dogs:</b> This basically includes any dog breed that doesn’t fit into one of the other groups.",
  title: "Non-Hunting Breeds"

},
{
  id: 3,
  q: "What breed is this dog?",
  a: [{ text: "Australian Shepherd", isCorrect: false },
      { text: "German Shepherd Dog", isCorrect: true },
      { text: "German Shorthair Pointer", isCorrect: false },
      { text: "Border Collie", isCorrect: false }
  ],
  blurb: "<img src='dogpic1.jpg' style='display:block; margin-left: auto; margin-right: auto; width: 100%;'>",
  title: "Some More Questions!"

},
{
  id: 4,
  q: "What breed is this dog?",
  a: [{ text: "Boston Terrier", isCorrect: false },
      { text: "Bulldog", isCorrect: false },
      { text: "Pug", isCorrect: true },
      { text: "Maltese", isCorrect: false }
  ],
  blurb: "<img src='dogpic2.jpg' style='display:block; margin-left: auto; margin-right: auto; width: 100%;'>",
  title: "Some More Questions!"

},
{
  id: 5,
  q: "What breed is this dog?",
  a: [{ text: "Doberman Pinscher", isCorrect: false },
      { text: "Shiba Inu", isCorrect: false },
      { text: "Golden Retriever", isCorrect: false },
      { text: "Basenji", isCorrect: true }
  ],
  blurb: "<img src='dogpic3.jpg' style='display:block; margin-left: auto; margin-right: auto; width: 100%;'>",
  title: "Some More Questions!"

},
{
  id: 6,
  q: "What breed is this dog?",
  a: [{ text: "Dachshund", isCorrect: false },
      { text: "Chihuahua", isCorrect: false },
      { text: "Papillon", isCorrect: true },
      { text: "Shih Tzu", isCorrect: false }
  ],
  blurb: "<img src='dogpic4.jpg' style='display:block; margin-left: auto; margin-right: auto; width: 100%;'>",
  title: "Some More Questions!"

},
{
  id: 7,
  q: "What breed is this dog?",
  a: [{ text: "Bernese Mountain Dog", isCorrect: true },
      { text: "Newfoundland", isCorrect: false },
      { text: "Great Dane", isCorrect: false },
      { text: "St. Bernard", isCorrect: false }
  ],
  blurb: "<img src='dogpic5.jpg' style='display:block; margin-left: auto; margin-right: auto; width: 100%;'>",
  title: "Example"

}
]
// Set start
var start = true;

// Iterate
function iterate(id) {

    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerHTML = "";

    // Getting the question
    const question = document.getElementById("question");

    // Setting the question text
    question.innerHTML = Questions[id].q;

    // Getting the title
    const title = document.getElementById("section-title");

    // Setting the title text
    title.innerHTML = Questions[id].title;

    // Getting the blurb
    const blurb = document.getElementById("blurb");

    // Setting the blurb text
    blurb.innerHTML = Questions[id].blurb;

    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');

    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";


    // Providing option text
    op1.innerHTML = Questions[id].a[0].text;
    op2.innerHTML = Questions[id].a[1].text;
    op3.innerHTML = Questions[id].a[2].text;
    op4.innerHTML = Questions[id].a[3].text;

    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    var selected = "";

    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })

    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })

    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })

    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    })

    // Grabbing the evaluate button
    var check = document.getElementsByClassName("check");
    console.log(check)

    // Evaluate method
    check[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "Great Job!";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "Try Again";
            result[0].style.color = "red";
        }
    })
}

if (start) {
    iterate("0");
}

// Next button and method
const next = document.getElementById('next');
var id = 0;

next.addEventListener("click", () => {
    start = false;
    if (id < 7) {
        id++;
        iterate(id);
        console.log(id);
    }
    else {
      location.replace("index.html");
    }
})

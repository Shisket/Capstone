const Questions = [{
  id: 0,
  q: "Example",
  a: [{ text: "Example", isCorrect: false },
      { text: "Example", isCorrect: false },
      { text: "Example", isCorrect: false },
      { text: "Example", isCorrect: false }
  ],
  blurb: "Just like in a human hospital or doctors’ office, in a veterinary clinic there are many different people, not just doctors, working together. The Veterinarian is the doctor. They have gone to veterinary school and have a DVM degree. <b>Veterinarians</b> are allowed to diagnose, prognose, prescribe, and perform surgery. The <b>Registered Veterinary Technician</b> is like the nurse. They have gone to a 2-4 year program and taken a test. They are allowed to do most things if the veterinarian tells them to. The <b>Veterinary Assistant</b> is someone that helps the Vets and Vet Techs. They don’t need to have a degree, license, or certification, though they might. The <b>Veterinary Receptionist</b> checks people in, makes appointments, and answers phone calls.",
  title: "Different Jobs"

},
{
  id: 1,
  q: "Example",
  a: [{ text: "Example", isCorrect: false },
      { text: "Example", isCorrect: false },
      { text: "Example", isCorrect: false },
      { text: "Example", isCorrect: false }
  ],
  blurb: "There are also a lot of different fields that veterinarians can work in. Most of these involve working with different kinds of animals, but there are some that don’t. Veterinarians can work in Small Animal Practices, Large Animal Practices, Exotic Animal Practices, Veterinary Schools, Research Labs, and Wild Animal Practices.",
  title: "Different Fields"

},
{
  id: 2,
  q: "Example",
  a: [{ text: "Example", isCorrect: false },
      { text: "Example", isCorrect: false },
      { text: "Example", isCorrect: false },
      { text: "Example", isCorrect: false }
  ],
  blurb: "Small Animal Practices, or Companion Animal Practices, are the vet clinics that most people think of first. These are the clinics where they care for small animals, which includes dogs, cats, rabbits, and rodents. Around half of all veterinarians in the USA work at Small Animal Practices.",
  title: "Small Animal Practice"

},
{
  id: 3,
  q: "Example",
  a: [{ text: "Example", isCorrect: false },
      { text: "Example", isCorrect: false },
      { text: "Example", isCorrect: false },
      { text: "Example", isCorrect: false }
  ],
  blurb: "Large Animal Practices are clinics that focus on farm animals, like horses, cows, sheep, goats, and pigs. There are more Large Animal vets in areas with more farming and ranching, because there are more animals there for them to work with. Some vets choose to work specifically with horses or with food animals",
  title: "Large Animal Practices"

},
{
  id: 4,
  q: "Example",
  a: [{ text: "Example", isCorrect: false },
      { text: "Example", isCorrect: false },
      { text: "Example", isCorrect: false },
      { text: "Example", isCorrect: false }
  ],
  blurb: "Example",
  title: "Example"

}
]
// Set start
var start = true;

// Iterate
function iterate(id) {

    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    // Getting the question
    const question = document.getElementById("question");


    // Setting the question text
    question.innerText = Questions[id].q;

    // Getting the title
    const title = document.getElementById("section-title");

    // Setting the title text
    title.innerText = Questions[id].title;

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
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

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
    const check = document.getElementsByClassName("check");

    // Evaluate method
    check[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "Great Job!";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "Nice Try";
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
    if (id < 2) {
        id++;
        iterate(id);
        console.log(id);
    }
    else {
      location.replace("index.html")
    }
})

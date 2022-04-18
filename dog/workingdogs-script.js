const Questions = [{
  id: 0,
  q: "Which of these places can a dog work?",
  a: [{ text: "In a field", isCorrect: false },
      { text: "In an airport", isCorrect: false },
      { text: "In an army base", isCorrect: false },
      { text: "All of the above", isCorrect: true }
  ],
  blurb: "Just like humans, dogs can help people by doing a variety of jobs. Some dogs are trained starting when they are only a few weeks old, while others don’t start until they are a few years old. They play important roles in lots of places you have probably been to. They can use their great senses to find people, their love to comfort people, or their bravery to save people.",
  title: "Working Dogs"

},
{
  id: 1,
  q: "Which condition can dogs detect?",
  a: [{ text: "Low Blood Sugar", isCorrect: false },
      { text: "Panic Attack", isCorrect: false },
      { text: "<span class='definition defined' data-text='Seizures'>Epilepsy</span>", isCorrect: false },
      { text: "All of the above", isCorrect: true }
  ],
  blurb: "Service Dogs are trained to help people with specific disabilities or medical conditions. Most service dogs are trained to go get help if their owners are in trouble. They are also trained to do more specific things:<ul><li>Guide Dogs - dogs that are trained to help blind or visually impaired people by guiding them, helping them avoid obstacles, and helping them find and retrieve things.</li><li>Diabetes Alert Dogs - dogs that are trained to smell when their owner’s blood sugar goes too low and let them know.</li><li>Seizure Alert Dogs - dogs that are trained to know when their owner is going to have a seizure and let them know. They often also know how to protect their owner when they are having a seizure.</li><li>Psychiatric Service Dogs - dogs that are trained to help people with mental illnesses like <span class='definition defined' data-text='post-traumatic stress disorder'>PTSD</span>, anxiety, depression, and more. They know how to help calm their owner during a panic attack or anxiety attack.</li><li>Mobility Assistance Dogs - dogs that are trained to help people with movement problems. They can help their owners balance by being a sturdy surface to hold onto, picking up items, or navigating obstacles.</li></ul>",
  title: "Service Dogs"

},
{
  id: 2,
  q: "What can dogs be trained to smell?",
  a: [{ text: "Cancer", isCorrect: false },
      { text: "Bombs", isCorrect: false },
      { text: "Drugs", isCorrect: false },
      { text: "All of the above", isCorrect: true }
  ],
  blurb: "Dogs have many roles as first responders and in the military. <ul><li>Police Dogs - also known as K9s, these dogs are trained to help the police by protecting their handler, chasing criminals, and detecting dangerous things.</li><li>Detection Dogs - dogs that are trained to smell dangerous things like explosives or drugs. They often work in airports and with police.</li><li>Search and Rescue Dogs - dogs that are trained to use their hearing and sense of smell to find lost or buried people.</li><li>Military Dogs - dogs that are trained to help soldiers by tracking, scouting, and fighting.</li></ul>",
  title: "Law Enforcement and Military Dogs"

},
{
  id: 3,
  q: "What animals can be therapy animals?",
  a: [{ text: "Dogs", isCorrect: false },
      { text: "Rats", isCorrect: false },
      { text: "Horses", isCorrect: false },
      { text: "All of the above", isCorrect: true }
  ],
  blurb: "<ul><li>Therapy Dogs - these dogs are trained to comfort people. They are often found in hospitals comforting patients.</li><li>Herding Dogs - dogs that are trained to herd other animals for farmers.</li></ul>",
  title: "Other Dog Jobs"

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
    const check = document.getElementsByClassName("check");

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
    if (id < 3) {
        id++;
        iterate(id);
        console.log(id);
    }
    else {
      location.replace("index.html")
    }
})

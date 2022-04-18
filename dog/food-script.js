const Questions = [{
  id: 0,
  q: "How often should you give your pet snacks that are made for humans and not dogs?",
  a: [{ text: "All the time, as their meals", isCorrect: false },
      { text: "Often, give them your leftovers", isCorrect: false },
      { text: "Occasionally, as treats", isCorrect: true },
      { text: "Never ever ever", isCorrect: false }
  ],
  blurb: "Most dogs eat kibble or canned food as their main meals. Some dogs get homemade food from their owners. These are great to supply important energy, nutrients, vitamins, and minerals. But, like humans, dogs sometimes get snacks that aren’t like their normal food. These snacks are great for training, distracting, or rewarding them, but shouldn’t be given as a full meal. Also, it is important to remember that dogs can’t eat some things that humans can.",
  title: "Food"

},
{
  id: 1,
  q: "Which part of a chicken is bad for dogs?",
  a: [{ text: "Light meat", isCorrect: false },
      { text: "Dark meat", isCorrect: false },
      { text: "Wings", isCorrect: false },
      { text: "Bones", isCorrect: true }
  ],
  blurb: "Here are some human foods that dogs can eat. Don’t forget that too much of any human food is bad for dogs. <ul><li>Peanut Butter</li><li>Cheese</li><li>Cashews</li><li>Blueberries and Blackberries</li><li>Cooked Meat, like chicken, pork, and beef</li><li>Cooked Eggs</li><li>Unseasoned Popcorn</li><li>Bananas</li><li>Yogurt</li><li>Carrots</li></ul>",
  title: "Good Snacks"

},
{
  id: 2,
  q: "Which of these could you give your dog as a treat?",
  a: [{ text: "Chocolate", isCorrect: false },
      { text: "Carrots", isCorrect: true },
      { text: "Walnuts", isCorrect: false },
      { text: "Avocado", isCorrect: false }
  ],
  blurb: "There are some foods that dogs can’t eat. Here are some of the most common and dangerous ones <ul><li>Chocolate - the Caffeine and Theobromine hurt the kidneys</li><li>Onions and Garlic - they hurt the <span class='definition defined' data-text='the group of organs that digest food including the mouth, stomach, intestines, and liver'>gastrointestinal system</span>  and red blood cells</li><li>Grapes and Raisins - they hurt the kidneys and liver</li><li>Macadamia Nuts - they hurt the <span class='definition defined' data-text='the group of organs that controls the signals sent around your body. This includes your brain, spinal cord, and nerves'>nervous system</span></li><li>Pecans and Walnuts - the Juglone and mold hurt the <span class='definition defined' data-text='the group of organs that digest food including the mouth, stomach, intestines, and liver'>gastrointestinal system</span> </li><li>Alcohol - it affects animals much more than humans</li><li>Avocado - the Persin hurts the <span class='definition defined' data-text='the group of organs that digest food including the mouth, stomach, intestines, and liver'>gastrointestinal system</span></li></ul>",
  title: "Very Bad Snacks"

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
    if (id < 2) {
        id++;
        iterate(id);
        console.log(id);
    }
    else {
      location.replace("index.html")
    }
})

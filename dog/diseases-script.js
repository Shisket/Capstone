const Questions = [{
        id: 0,
        q: "Which of the following animals can’t get rabies?",
        a: [{ text: "Dog", isCorrect: false },
            { text: "Cat", isCorrect: false },
            { text: "Snake", isCorrect: true },
            { text: "Human", isCorrect: false }
        ],
        blurb: "Rabies is a virus that is carried in the saliva of infected animals. Once an animal is bitten, it takes anywhere from three to twelve weeks for the virus to make its way through the nervous system into the brain and spinal cord. This is called the incubation period. Rabies can be prevented by a series of vaccines or can be treated during the incubation period by a series of shots. Once symptoms appear, the infected animal will likely die within a week. Symptoms include weakness, excessive drool, confusion, fear of water, aggression, and paralysis. Only mammals can get rabies.",
        title: "Rabies"

    },
    {
        id: 1,
        q: "Which of the following organs can parvovirus directly attack?",
        a: [{ text: "The skin", isCorrect: false, isSelected: false },
            { text: "The brain", isCorrect: false },
            { text: "The lungs", isCorrect: false },
            { text: "The intestines", isCorrect: true }
        ],
        blurb: "Parvovirus is a virus that is carried in the feces of infected animals. There are two types, one that attacks the gastrointestinal system and one that attacks the cardiovascular system. In the gastrointestinal type, the infected animal stops being able to digest food, so it doesn’t get energy or nutrients from the food. In the cardiovascular type, the infection hurts the heart, making it too weak to do its job well. The incubation period is three to seven days, and after symptoms appear, they can kill the animal within three days. Symptoms include high fever, lethargy, weakness, loss of appetite, vomiting, and dehydration. Parvovirus can be prevented by a series of vaccines.",
        title: "Parvovirus"

    },
    {
        id: 2,
        q: "A dog was near another dog with kennel cough today. When will symptoms probably start?",
        a: [{ text: "Today", isCorrect: false },
            { text: "Tomorrow", isCorrect: false },
            { text: "In a week", isCorrect: true },
            { text: "In a month", isCorrect: false }
        ],
        blurb: "Kennel cough is similar to a common cold in humans. It is a term used for a group of different viruses and bacteria that cause similar symptoms. The most common pathogens include Bordetella Bronchiseptica and Canine Parainfluenza. The incubation period is three to ten days. The most obvious symptom of kennel cough is a cough that sounds like a honk. Other symptoms include gagging and having a fever.  Kennel cough is often spread in places where many dogs are in close contact, such as a kennel, shelter, or dog park.",
        title: "Kennel Cough"
    },
    {
        id: 3,
        q: "You are walking with your family in the middle of the day and see a raccoon across the street. It is wobbling around and snarling even though there is nothing around it. What is wrong with it?",
        a: [{ text: "It has rabies", isCorrect: true },
            { text: "It is just angry", isCorrect: false },
            { text: "It has kennel cough", isCorrect: false },
            { text: "It has parvovirus", isCorrect: false }
        ],
        blurb: "You are doing great!",
        title: "Some more questions!"
    },
    {
        id: 4,
        q: "Which of the following can be prevented by vaccination?",
        a: [{ text: "Kennel Cough", isCorrect: false },
            { text: "Rabies", isCorrect: false },
            { text: "Parvovirus", isCorrect: false },
            { text: "All of the above", isCorrect: true }
        ],
        blurb: "You are doing great!",
        title: "Some more questions!"
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
    blurb.innerText = Questions[id].blurb;

    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');


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
            result[0].innerHTML = "True";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "False";
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
    if (id < 4) {
        id++;
        iterate(id);
        console.log(id);
    }
    else {
      location.replace("index.html")
    }
})

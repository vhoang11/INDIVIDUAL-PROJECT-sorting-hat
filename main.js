const students = [
  {
    id: 1,
    name: "Harry Potter",
    house: "Gryffindor",
    imageUrl: "https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914&q=70&fm=jpg",
  },
  {
    id: 2,
    name: "Hermione Granger",
    house: "Gryffindor",
    imageUrl: "https://i.pinimg.com/736x/e2/eb/ec/e2ebec25d1ce76be526237257c8a10e2--hermione-granger-hair-emma-watson-harry-potter.jpg",
  },
  {
    id: 3,
    name: "Ron Weasley",
    house: "Gryffindor",
    imageUrl: "https://media.harrypotterfanzone.com/ron-weasley-order-of-the-phoenix-portrait-8.jpg",
  },
  {
    id: 4,
    name: "Ginny Weasley",
    house: "Gryffindor",
    imageUrl: "https://media.harrypotterfanzone.com/ginny-weasley-order-of-the-phoenix-portrait-7.jpg",
  },
  {
    id: 5,
    name: "Draco Malfoy",
    house: "Slytherin",
    imageUrl: "https://cdn.europosters.eu/image/1300/art-photo/harry-potter-draco-malfoy-i114410.jpg",
  },
  {
    id: 6,
    name: "Luna Lovegood",
    house: "Ravenclaw",
    imageUrl: "https://i.pinimg.com/474x/21/5b/14/215b145080f86007cbafe7f8d7b16ff8--bff-harry-potter-characters.jpg",
  },
  {
    id: 7,
    name: "Cho Chang",
    house: "Ravenclaw",
    imageUrl: "http://pm1.narvii.com/6773/91cbcda211b388dcffe0203562f955463dc89a5dv2_00.jpg",
  },
  {
    id: 8,
    name: "Cedric Diggory",
    house: "Hufflepuff",
    imageUrl: "https://i.pinimg.com/736x/2d/3f/2c/2d3f2c32b6eb2bf0a531f2f38d4f92be.jpg",
  },
]

const darkSide = [
  {
    id: 1,
    name: "Lucius Malfoy",
    house: "Slytherin",
    imageUrl: "https://www.giantbomb.com/a/uploads/original/0/3683/1110964-lucius_l.jpg"
  },
  {
    id: 2,
    name: "Bellatrix LeStrange",
    house: "Slytherin",
    imageUrl:"https://celebrityjacket.com/wp-content/uploads/2022/07/harry-potter-bellatrix-lestrange-costume.jpg"
  },
  {
    id: 3,
    name: "Peter Pettigrew",
    house: "Gryffindor",
    imageUrl:"https://qph.cf2.quoracdn.net/main-qimg-a82c7371225fca2c2432f3b09b8a7689.webp"
  },
  {
    id: 4,
    name: "Narcissa Malfoy",
    house: "Slytherin",
    imageUrl:"https://preview.redd.it/kbb0xafwckt61.jpg?auto=webp&s=7964281a5ac22989a443f7a447a1a72cf2645b62"
  }
]


//cards to DOM
const showStudents = (divID, htmlToRender) => {
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = htmlToRender;
};

const studentCards = (students) => {
  let domString = "";
  for (const student of students) {
    domString += `<div class="card" style="width: 14rem;">
    <img src=${student.imageUrl} class="card-img-top" alt=${student.name}>
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="house-type ${student.house}">${student.house}</p>
      <button class="btn btn-danger" id="delete--${student.id}">Expelled</button>
    </div>
  </div>`;
  }
  showStudents("#sorted-students", domString);
}

studentCards(students);

const darkCards = (darkSide) => {
  let domString = "";
  for (const darkArmy of darkSide) {
    domString += `<div class="card" style="width: 14rem;">
    <img src=${darkArmy.imageUrl} class="card-img-top" alt=${darkArmy.name}>
    <div class="card-body">
      <h5 class="card-title">${darkArmy.name}</h5>
      <p class="house-type ${darkArmy.house}">${darkArmy.house}</p>
      <button class="btn btn-danger" id="delete--${darkArmy.id}">Renounce</button>
    </div>
  </div>`;
  }
  showStudents("#dark-side", domString);
}

darkCards(darkSide);

const filter = (array, houseName) => {
  const houseArray = [];

  for (const student of students) {
    if (student.house === houseName) {
      houseArray.push(student);
    }
  }
  return houseArray;
}

//toggle for form to show and disappear
const btn = document.getElementById('sort');

btn.addEventListener('click', () => {
  const form = document.getElementById('form1');

  if (form.style.display === 'none') {
    // 👇️ this SHOWS the form
    form.style.display = 'block';
  // } else {
  //   // 👇️ this HIDES the form
  //   form.style.display = 'none';
  }
});

const clickSubmit = (divID, htmlToRender) => {
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = htmlToRender;
};



btn.addEventListener('click', () => {
  const cards = document.getElementById('sorted-students');

  if (cards.style.display === 'none') {
    // 👇️ this SHOWS the cards
    cards.style.display = 'flex';
  } else {
    // 👇️ this HIDES the cards
    cards.style.display = 'none';
  }
});

btn.addEventListener('click', () => {
  const cards = document.getElementById('dark-side');

  if (cards.style.display === 'none') {
    // 👇️ this SHOWS the cards
    cards.style.display = 'flex';
  } else {
    // 👇️ this HIDES the cards
    cards.style.display = 'none';
  }
});

// Filter students by house
const gryffindorButton = document.querySelector("#gryffindor");
const hufflepuffButton = document.querySelector("#hufflepuff");
const ravenclawButton = document.querySelector("#ravenclaw");
const slytherinButton = document.querySelector("#slytherin");
const allButton = document.querySelector("#all");

gryffindorButton.addEventListener("click", () => {
  const gryffindorStudent = filter(students, "Gryffindor");
  studentCards(gryffindorStudent);
});

hufflepuffButton.addEventListener("click", () => {
  const hufflepuffStudent = filter(students, "Hufflepuff");
  studentCards(hufflepuffStudent);
});

ravenclawButton.addEventListener("click", () => {
  const ravenclawStudent = filter(students, "Ravenclaw");
  studentCards(ravenclawStudent);
});

slytherinButton.addEventListener("click", () => {
  const slytherinStudent = filter(students, "Slytherin");
  studentCards(slytherinStudent);
});

allButton.addEventListener("click", () => {
  studentCards(students);
})

const form = document.querySelector('form');

 const createStudent = (event) => {
  event.preventDefault(); 
  const assignHouse = () => {
    const assigned = Math.floor(Math.random() * 4 + 1);
    switch(assigned) {
      case 1: 
        return 'Gryffindor'
        break;
      case 2:
        return 'Hufflepuff'
        break;
      case 3:
        return 'Ravenclaw'
        break;
      case 4:
        return 'Slytherin'
    }
  }
    const newStudentObj = {
      id: students.length + 1,
      name: document.querySelector("#fullname").value,
      house: assignHouse(),
      imageUrl: document.querySelector("#image").value
    }
  
    console.log(newStudentObj);
    students.push(newStudentObj);
    studentCards(students);
    form.reset();
  }
 

form.addEventListener('submit', createStudent)


//delete buttons
const moveToDarkSide = () => {
  const sorted = document.querySelector("#sorted-students");

  sorted.addEventListener('click', (e) => {
   
    if (e.target.id.includes("delete")) {
      const [, id] = e.target.id.split("--");
  
      const index = students.findIndex(e => e.id === Number(id));
  
      const deathEater =  students.splice(index, 1);

      darkSide.push(deathEater[0]);
  
      studentCards(students);
      darkCards(darkSide);
    }
  });
}
moveToDarkSide();

// const dark = document.querySelector("#dark-side");

// dark.addEventListener('click', (e) => {

//   if (e.target.id.includes("delete")) {
//     const [, id] = e.target.id.split("--");

//     const index = darkSide.findIndex(e => e.id === Number(id));
//     darkSide.splice(index, 1);

//     darkCards(darkSide);
//   }
// });



// const startApp = () => {
//   studentCards(students);
//   events();
// }

// startApp();

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

const showStudents = (divID, htmlToRender) => {
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = htmlToRender;
};

const studentCards = (students) => {
  let domString = "";
  for (const student of students) {
    domString += `<div class="card" style="width: 18rem;">
    <img src=${student.imageUrl} class="card-img-top" alt=${student.name}>
    <div class="card-body">
      <h5 class="card-title">${student.name}</h5>
      <p class="house-type ${student.house}">${student.house}</p>
      <button class="btn btn-danger" id="delete--${student.id}">Move to the Dark Side</button>
    </div>
  </div>`;
  };
  showStudents("#sorted-students", domString);
}

studentCards(students);

const filter = (array, houseName) => {
  const houseArray = [];

  for (const student of students) {
    if (student.house === houseName) {
      houseArray.push(student);
    }
  }
  return houseArray;
}

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

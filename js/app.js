const data = [
  {
    user_id: 1,
    id: 1,
    headline: "Vanilla JavaScript ",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, fuga. Nulla, distinctio odit! Ducimus aut quos, iste provident quam necessitatibus magnam doloribus assumenda delectus ipsa accusantium veniam eos cum quaerat.",
    posted: 15 - 04 - 2020,
  },
  {
    user_id: 2,
    id: 2,
    headline: "Bem CSS",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, fuga. Nulla, distinctio odit! Ducimus aut quos, iste provident quam necessitatibus magnam doloribus assumenda delectus ipsa accusantium veniam eos cum quaerat.",
    posted: 04 - 05 - 2020,
  },
  {
    user_id: 2,
    id: 3,
    headline: "React.js",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, fuga. Nulla, distinctio odit! Ducimus aut quos, iste provident quam necessitatibus magnam doloribus assumenda delectus ipsa accusantium veniam eos cum quaerat.",
    posted: 10 - 06 - 2020,
  },
  {
    user_id: 2,
    id: 4,
    headline: "Vue.js",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, fuga. Nulla, distinctio odit! Ducimus aut quos, iste provident quam necessitatibus magnam doloribus assumenda delectus ipsa accusantium veniam eos cum quaerat.",
    posted: 25 - 03 - 2020,
  },
  {
    user_id: 4,
    id: 5,
    headline: "Node.js",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, fuga. Nulla, distinctio odit! Ducimus aut quos, iste provident quam necessitatibus magnam doloribus assumenda delectus ipsa accusantium veniam eos cum quaerat.",
    posted: 23 - 02 - 2020,
  },
  {
    user_id: 2,
    id: 6,
    headline: "HTML5",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, fuga. Nulla, distinctio odit! Ducimus aut quos, iste provident quam necessitatibus magnam doloribus assumenda delectus ipsa accusantium veniam eos cum quaerat.",
    posted: 23 - 02 - 2020,
  },
  {
    user_id: 1,
    id: 7,
    headline: "Front-end Developer",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, fuga. Nulla, distinctio odit! Ducimus aut quos, iste provident quam necessitatibus magnam doloribus assumenda delectus ipsa accusantium veniam eos cum quaerat.",
    posted: 23 - 02 - 2020,
  },
  {
    user_id: 4,
    id: 8,
    headline: "Typography",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, fuga. Nulla, distinctio odit! Ducimus aut quos, iste provident quam necessitatibus magnam doloribus assumenda delectus ipsa accusantium veniam eos cum quaerat.",
    posted: 23 - 02 - 2020,
  },
  {
    user_id: 2,
    id: 9,
    headline: "Micro conpoments",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, fuga. Nulla, distinctio odit! Ducimus aut quos, iste provident quam necessitatibus magnam doloribus assumenda delectus ipsa accusantium veniam eos cum quaerat.",
    posted: 23 - 02 - 2020,
  },
  {
    user_id: 1,
    id: 10,
    headline: "Mongodb",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, fuga. Nulla, distinctio odit! Ducimus aut quos, iste provident quam necessitatibus magnam doloribus assumenda delectus ipsa accusantium veniam eos cum quaerat.",
    posted: 23 - 02 - 2020,
  },
];

// show all data
console.log(data);

// show only info with user_id 1
const story = data.filter((e) => {
  return e.user_id === 2;
});

// show only details only user_id 2
const myData = data.filter(function (elements) {
  return elements.user_id === 4;
});

const findItem = data.find(function (item) {
  return item.id === 4;
});

console.log(story);

console.log(myData);

console.log(findItem);

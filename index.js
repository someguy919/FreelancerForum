const names = [
    "Dr. Slice",
    "Dr. Pressure",
    "Prof. Possibility",
    "Prof. Prism",
    "Dr. Impulse",
    "Prof. Spark",
    "Dr. Wire",
    "Prof. Goose"
  ];
  
  const occupations = [
    "gardener",
    "programmer",
    "teacher",
    "gardner"
  ];
  
  const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

  let usedFreelancerIndices = new Set();
  
  function randomFreelancer() {
    if (usedFreelancerIndices.size < freelancers.length) {
        let index;
        do {
            index = Math.floor(Math.random() * freelancers.length);
        } while (usedFreelancerIndices.has(index));
        usedFreelancerIndices.add(index);
        return freelancers[index]; 
    } else {
       
        const nameNum = Math.floor(Math.random() * names.length);
        const randomName = names[nameNum];

   
        const occupationNum = Math.floor(Math.random() * occupations.length);
        const randomOccupation = occupations[occupationNum];

      
        const randomPrice = Math.floor(Math.random() * (100 - 20 + 1)) + 20;

        return {
            name: randomName,
            occupation: randomOccupation,
            price: randomPrice
        };
    }
}
  const selectedFreelancers = [randomFreelancer(), randomFreelancer()];



const container = document.querySelector("table tbody");
function average(freelancers) {
    let sum = 0;
    for (let i = 0; i < freelancers.length; i++) {
      sum += freelancers[i].price;
    }
    const avg = sum / freelancers.length;
    return Math.ceil(avg);
  }

  
  function render() {
    const html = selectedFreelancers.map((freelancer) => {
      return `<tr>
                <td>${freelancer.name}</td>
                <td>${freelancer.occupation}</td>
                <td>$${freelancer.price}</td>
              </tr>`;
    });
    container.innerHTML = html.join("");
    const averagePrice = average(selectedFreelancers);
    const averagePriceElement = document.querySelector('.price')
    averagePriceElement.textContent = `$${averagePrice.toFixed(2)}`;
  }
 
  
  const interval = setInterval(() => {
    const obj = randomFreelancer();
    selectedFreelancers.push(obj);
    render();
    // if (selectedFreelancers.length === 20) {
    //   clearInterval(interval);
    // }
  }, 3000);
  
  render();





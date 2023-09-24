type Caretaker = {
  name: string;
  favoritePokemon: string[];
  skills: string[];
};

const caretakers: Caretaker[] = [
  {
    name: "Michael Kot",
    favoritePokemon: ["Mew", "Celebi"],
    skills: [
      "Expert in psychic Pokemon care, uses his psychic abilities to communicate with the Pokemon and understand their needs",
      "Expert in energy healing, uses his powers to heal any physical or emotional ailments that a Pokemon may have",
      "Deeply spiritual and believes that the well-being of the Pokemon is interconnected with the natural world, creating a harmonious balance between the two",
    ],
  },
];

const CaretakersView = () => {
  return (
    <div>
      {caretakers.map((caretaker, index) => (
        <div key={index}>
          <h2>{caretaker.name}</h2>
          <p>Favorite Pokemon: {caretaker.favoritePokemon.join(", ")}</p>
          <ul>
            {caretaker.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CaretakersView;

export { };
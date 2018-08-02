class Dog
{
    //A function stater that sets movie name, rating, and year realeased
    constructor(name, breed, color, gender)
    {
        this.name=name;
        this.breed=breed;
        this.color=color;
        this.gender=gender;
    }


}

function main()
{
    var newDog = new Dog("Fiddo", "Lab", "brown", "male");
    alert(newDog.name);
    alert(newDog.breed);
    alert(newDog.color);
    alert(newDog.gender);
}

main();
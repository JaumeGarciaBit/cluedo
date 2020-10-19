// Characters Collection
const charactersArray = [];

// Rooms' Collection
const roomsArray = [];

// Weapons Collection
const weaponsArray = [];


let m_character = 
{
    first_name:   "Jacob", 
    last_name:    "Green",
    color:        "green",
    description: "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur",
}

let m_weapon = 
{
    name: "rope",
    weight: 10,
}

let m_room = 
{
    name: "Dinner Room",
}

function InitializeCharacter(name, surname, color, description, age, image, ocuppation)
{
    let l_result = Object.create(m_character);
    l_result.first_name = name;
    l_result.last_name= surname;
    l_result.color = color;
    l_result.description = description;
    l_result.age = age;
    l_result.image = image;
    l_result.occupation = ocuppation;

    return l_result;
}

function InitializeWeapon(name, weight)
{
    let l_result = Object.create(m_weapon);
    l_result.name = name;
    l_result.weight = weight;

    return l_result;
}

function InitializeRoom(name)
{
    let l_result = Object.create(m_room);
    l_result.name = name;

    return l_result;
}

function InitializeArrays()
{
    //Characters
    charactersArray.push(InitializeCharacter("Jacob", "Green", "green", "He has a lot of connections", 45, "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", "Entrepreneur"));
    charactersArray.push(InitializeCharacter("Doctor", "Orchid", "white", "PhD in plant toxicology. Adopted daughter of Mr. Boddy", 26, "http://www.radiotimes.com/uploads/images/Original/111967.jpg", "Scientist"));
    charactersArray.push(InitializeCharacter("Victor", "Plum", "purple", "Billionare video game designer", 22, "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg", "Designer"));
    charactersArray.push(InitializeCharacter("Kasandra", "Scarlet", "red", "She is an A-list movie star with a dark past", 31, "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg", "Actor"));
    charactersArray.push(InitializeCharacter("Eleanor", "Peacock", "blue", "She is from a wealthy family and uses her status and money to earn popularity", 36, "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", "Socialité"));
    charactersArray.push(InitializeCharacter("Jack", "Mustard", "yellow", "He is a former football player who tries to get by on his former glory", 62, "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg", "Retired Football player"));

    //Weapons
    weaponsArray.push(InitializeWeapon("rope", 10));
    weaponsArray.push(InitializeWeapon("knife", 8));
    weaponsArray.push(InitializeWeapon("candlestick", 2));
    weaponsArray.push(InitializeWeapon("dumbbell", 30));
    weaponsArray.push(InitializeWeapon("axe", 15));
    weaponsArray.push(InitializeWeapon("bat", 13));
    weaponsArray.push(InitializeWeapon("trophy", 25));
    weaponsArray.push(InitializeWeapon("pistol", 20));
    weaponsArray.push(InitializeWeapon("poison", 2));

    //rooms
    roomsArray.push(InitializeRoom("Dinning Room"));
    roomsArray.push(InitializeRoom("Conservatory"));
    roomsArray.push(InitializeRoom("Kitchen"));
    roomsArray.push(InitializeRoom("Study"));
    roomsArray.push(InitializeRoom("Library"));
    roomsArray.push(InitializeRoom("Billiard Room"));
    roomsArray.push(InitializeRoom("Lounge"));
    roomsArray.push(InitializeRoom("Ballroom"));
    roomsArray.push(InitializeRoom("Hall"));
    roomsArray.push(InitializeRoom("Spa"));
    roomsArray.push(InitializeRoom("Living Room"));
    roomsArray.push(InitializeRoom("Observatory"));
    roomsArray.push(InitializeRoom("Guest House"));
    roomsArray.push(InitializeRoom("Patio"));
    roomsArray.push(InitializeRoom("Theater"));
}

//Start
InitializeArrays();
function randomSelector(array)
{
    if(array.length === 0)
    return;
    
    let l_result = array[Math.floor(Math.random() * array.length)];
    return l_result;
}


function pickMistery()
{
    let l_rndChar = randomSelector(charactersArray);
    let l_rndWeap =randomSelector(weaponsArray);
    let l_rndRoom = randomSelector(roomsArray);

    let l_mistery = [l_rndChar, l_rndWeap, l_rndRoom];

    return l_mistery;
}

let misteryEnvelope = pickMistery();

function revealMistery(misteryEnvelope)
{
    let l_result = `${misteryEnvelope[0].first_name} ${misteryEnvelope[0].last_name} killed Mr.Boddy using the ${misteryEnvelope[1].name} in the ${misteryEnvelope[2].name}!!!!`;
    console.log(l_result);

    return l_result;

}
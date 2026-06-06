const attributes = [
  { key: "height", label: "Height", short: "HGT", body: "Frame" },
  { key: "shooting", label: "Shooting", short: "SHT", body: "Right hand" },
  { key: "finishing", label: "Finishing", short: "FIN", body: "Rim attack" },
  { key: "handles", label: "Handles", short: "HDL", body: "Off hand" },
  { key: "passing", label: "Passing", short: "PAS", body: "Vision" },
  { key: "defense", label: "Defense", short: "DEF", body: "Core" },
  { key: "rebounding", label: "Rebounding", short: "REB", body: "Shoulders" },
  { key: "athleticism", label: "Athleticism", short: "ATH", body: "Legs" },
  { key: "clutch", label: "Clutch", short: "CLT", body: "Heart" },
];

const teamEras = [
  {
    era: "1960s",
    team: "Celtics",
    note: "Russell's dynasty gives you defense, boards, and winner DNA.",
    players: [
      player("Bill Russell", 6, 11, 6, { height: 96, shooting: 58, finishing: 91, handles: 66, passing: 82, defense: 100, rebounding: 100, athleticism: 92, clutch: 96 }),
      player("John Havlicek", 6, 5, 17, { height: 80, shooting: 82, finishing: 88, handles: 83, passing: 86, defense: 91, rebounding: 78, athleticism: 90, clutch: 94 }),
      player("Sam Jones", 6, 4, 24, { height: 77, shooting: 88, finishing: 86, handles: 82, passing: 76, defense: 78, rebounding: 66, athleticism: 84, clutch: 96 }),
      player("K.C. Jones", 6, 1, 25, { height: 68, shooting: 62, finishing: 70, handles: 82, passing: 86, defense: 94, rebounding: 62, athleticism: 82, clutch: 82 }),
      player("Tom Heinsohn", 6, 7, 15, { height: 84, shooting: 74, finishing: 86, handles: 65, passing: 72, defense: 76, rebounding: 88, athleticism: 78, clutch: 84 }),
      player("Satch Sanders", 6, 6, 16, { height: 82, shooting: 66, finishing: 74, handles: 64, passing: 70, defense: 90, rebounding: 82, athleticism: 80, clutch: 80 }),
      player("Bailey Howell", 6, 7, 18, { height: 84, shooting: 76, finishing: 84, handles: 66, passing: 72, defense: 78, rebounding: 86, athleticism: 76, clutch: 82 }),
      player("Don Nelson", 6, 6, 19, { height: 82, shooting: 80, finishing: 76, handles: 70, passing: 74, defense: 78, rebounding: 72, athleticism: 72, clutch: 86 }),
    ],
  },
  {
    era: "1970s",
    team: "Bucks",
    note: "A young Kareem plus Oscar makes this a top-heavy but dangerous roll.",
    players: [
      player("Kareem Abdul-Jabbar", 7, 2, 33, { height: 100, shooting: 82, finishing: 100, handles: 70, passing: 82, defense: 95, rebounding: 96, athleticism: 88, clutch: 97 }),
      player("Oscar Robertson", 6, 5, 1, { height: 80, shooting: 86, finishing: 90, handles: 94, passing: 97, defense: 82, rebounding: 86, athleticism: 84, clutch: 95 }),
      player("Bob Dandridge", 6, 6, 10, { height: 82, shooting: 84, finishing: 87, handles: 80, passing: 78, defense: 84, rebounding: 78, athleticism: 84, clutch: 88 }),
      player("Lucius Allen", 6, 2, 7, { height: 71, shooting: 81, finishing: 82, handles: 86, passing: 84, defense: 76, rebounding: 60, athleticism: 84, clutch: 80 }),
      player("Jon McGlocklin", 6, 5, 14, { height: 80, shooting: 89, finishing: 76, handles: 72, passing: 76, defense: 70, rebounding: 62, athleticism: 68, clutch: 84 }),
      player("Brian Winters", 6, 4, 32, { height: 77, shooting: 87, finishing: 79, handles: 80, passing: 79, defense: 72, rebounding: 60, athleticism: 70, clutch: 86 }),
      player("Junior Bridgeman", 6, 5, 2, { height: 80, shooting: 82, finishing: 82, handles: 78, passing: 76, defense: 76, rebounding: 64, athleticism: 78, clutch: 82 }),
      player("Marques Johnson", 6, 7, 8, { height: 84, shooting: 82, finishing: 91, handles: 82, passing: 80, defense: 80, rebounding: 82, athleticism: 88, clutch: 88 }),
    ],
  },
  {
    era: "1980s",
    team: "Lakers",
    note: "Showtime is packed with passing, finishing, size, and transition force.",
    players: [
      player("Magic Johnson", 6, 9, 32, { height: 90, shooting: 84, finishing: 93, handles: 96, passing: 100, defense: 82, rebounding: 88, athleticism: 86, clutch: 98 }),
      player("Kareem Abdul-Jabbar", 7, 2, 33, { height: 100, shooting: 84, finishing: 98, handles: 70, passing: 82, defense: 91, rebounding: 91, athleticism: 78, clutch: 96 }),
      player("James Worthy", 6, 9, 42, { height: 90, shooting: 80, finishing: 94, handles: 82, passing: 78, defense: 82, rebounding: 78, athleticism: 91, clutch: 93 }),
      player("Byron Scott", 6, 3, 4, { height: 74, shooting: 88, finishing: 82, handles: 82, passing: 78, defense: 76, rebounding: 60, athleticism: 86, clutch: 84 }),
      player("Michael Cooper", 6, 5, 21, { height: 80, shooting: 82, finishing: 76, handles: 78, passing: 82, defense: 95, rebounding: 66, athleticism: 86, clutch: 84 }),
      player("A.C. Green", 6, 9, 45, { height: 90, shooting: 70, finishing: 82, handles: 62, passing: 68, defense: 84, rebounding: 89, athleticism: 80, clutch: 78 }),
      player("Norm Nixon", 6, 2, 10, { height: 71, shooting: 82, finishing: 84, handles: 90, passing: 88, defense: 74, rebounding: 56, athleticism: 86, clutch: 84 }),
      player("Mychal Thompson", 6, 10, 43, { height: 94, shooting: 72, finishing: 84, handles: 62, passing: 72, defense: 84, rebounding: 84, athleticism: 76, clutch: 80 }),
    ],
  },
  {
    era: "1980s",
    team: "Celtics",
    note: "Bird-era Boston is a cheat code for shooting, passing, rebounding, and clutch.",
    players: [
      player("Larry Bird", 6, 9, 33, { height: 90, shooting: 98, finishing: 90, handles: 86, passing: 96, defense: 84, rebounding: 92, athleticism: 74, clutch: 99 }),
      player("Kevin McHale", 6, 10, 32, { height: 94, shooting: 84, finishing: 96, handles: 76, passing: 74, defense: 92, rebounding: 88, athleticism: 78, clutch: 90 }),
      player("Robert Parish", 7, 0, "00", { height: 98, shooting: 78, finishing: 90, handles: 62, passing: 70, defense: 88, rebounding: 92, athleticism: 76, clutch: 86 }),
      player("Dennis Johnson", 6, 4, 3, { height: 77, shooting: 78, finishing: 82, handles: 86, passing: 88, defense: 94, rebounding: 68, athleticism: 80, clutch: 92 }),
      player("Danny Ainge", 6, 4, 44, { height: 77, shooting: 88, finishing: 75, handles: 82, passing: 82, defense: 74, rebounding: 60, athleticism: 72, clutch: 84 }),
      player("Cedric Maxwell", 6, 8, 31, { height: 86, shooting: 76, finishing: 90, handles: 74, passing: 75, defense: 80, rebounding: 82, athleticism: 78, clutch: 89 }),
      player("Bill Walton", 6, 11, 5, { height: 96, shooting: 74, finishing: 88, handles: 68, passing: 88, defense: 92, rebounding: 92, athleticism: 72, clutch: 88 }),
      player("Scott Wedman", 6, 7, 8, { height: 84, shooting: 86, finishing: 78, handles: 72, passing: 72, defense: 74, rebounding: 68, athleticism: 72, clutch: 82 }),
    ],
  },
  {
    era: "1990s",
    team: "Bulls",
    note: "The Jordan Bulls can solve almost any category if the roll breaks right.",
    players: [
      player("Michael Jordan", 6, 6, 23, { height: 82, shooting: 94, finishing: 99, handles: 96, passing: 88, defense: 98, rebounding: 82, athleticism: 99, clutch: 100 }),
      player("Scottie Pippen", 6, 8, 33, { height: 86, shooting: 83, finishing: 91, handles: 88, passing: 90, defense: 98, rebounding: 86, athleticism: 94, clutch: 90 }),
      player("Dennis Rodman", 6, 7, 91, { height: 84, shooting: 52, finishing: 72, handles: 62, passing: 72, defense: 96, rebounding: 100, athleticism: 86, clutch: 84 }),
      player("Toni Kukoc", 6, 10, 7, { height: 94, shooting: 87, finishing: 83, handles: 82, passing: 88, defense: 72, rebounding: 76, athleticism: 76, clutch: 86 }),
      player("Ron Harper", 6, 6, 9, { height: 82, shooting: 76, finishing: 84, handles: 84, passing: 80, defense: 88, rebounding: 70, athleticism: 82, clutch: 80 }),
      player("Steve Kerr", 6, 3, 25, { height: 74, shooting: 95, finishing: 65, handles: 72, passing: 74, defense: 62, rebounding: 50, athleticism: 58, clutch: 86 }),
      player("Luc Longley", 7, 2, 13, { height: 100, shooting: 68, finishing: 78, handles: 55, passing: 70, defense: 76, rebounding: 78, athleticism: 58, clutch: 72 }),
      player("Horace Grant", 6, 10, 54, { height: 94, shooting: 74, finishing: 84, handles: 62, passing: 72, defense: 86, rebounding: 88, athleticism: 82, clutch: 80 }),
    ],
  },
  {
    era: "1990s",
    team: "Rockets",
    note: "Hakeem gives this pool legendary defense, post scoring, and big-man skill.",
    players: [
      player("Hakeem Olajuwon", 7, 0, 34, { height: 98, shooting: 82, finishing: 98, handles: 84, passing: 82, defense: 100, rebounding: 96, athleticism: 94, clutch: 97 }),
      player("Clyde Drexler", 6, 7, 22, { height: 84, shooting: 86, finishing: 94, handles: 88, passing: 86, defense: 84, rebounding: 82, athleticism: 94, clutch: 92 }),
      player("Kenny Smith", 6, 3, 30, { height: 74, shooting: 86, finishing: 78, handles: 84, passing: 86, defense: 68, rebounding: 55, athleticism: 80, clutch: 84 }),
      player("Robert Horry", 6, 10, 25, { height: 94, shooting: 86, finishing: 78, handles: 72, passing: 76, defense: 84, rebounding: 78, athleticism: 82, clutch: 94 }),
      player("Sam Cassell", 6, 3, 10, { height: 74, shooting: 84, finishing: 82, handles: 88, passing: 86, defense: 72, rebounding: 58, athleticism: 76, clutch: 90 }),
      player("Otis Thorpe", 6, 10, 33, { height: 94, shooting: 65, finishing: 84, handles: 62, passing: 68, defense: 80, rebounding: 90, athleticism: 78, clutch: 78 }),
      player("Vernon Maxwell", 6, 4, 11, { height: 77, shooting: 84, finishing: 82, handles: 84, passing: 76, defense: 78, rebounding: 58, athleticism: 84, clutch: 88 }),
      player("Mario Elie", 6, 5, 17, { height: 80, shooting: 82, finishing: 76, handles: 72, passing: 74, defense: 82, rebounding: 62, athleticism: 76, clutch: 88 }),
    ],
  },
  {
    era: "2000s",
    team: "Lakers",
    note: "Shaq and Kobe create elite spikes, but the wrong category can still bite.",
    players: [
      player("Kobe Bryant", 6, 6, 8, { height: 82, shooting: 94, finishing: 96, handles: 95, passing: 86, defense: 96, rebounding: 78, athleticism: 96, clutch: 100 }),
      player("Shaquille O'Neal", 7, 1, 34, { height: 99, shooting: 48, finishing: 100, handles: 64, passing: 78, defense: 92, rebounding: 96, athleticism: 90, clutch: 92 }),
      player("Pau Gasol", 7, 0, 16, { height: 98, shooting: 82, finishing: 92, handles: 76, passing: 86, defense: 84, rebounding: 90, athleticism: 72, clutch: 88 }),
      player("Derek Fisher", 6, 1, 2, { height: 68, shooting: 84, finishing: 72, handles: 80, passing: 80, defense: 78, rebounding: 55, athleticism: 70, clutch: 92 }),
      player("Lamar Odom", 6, 10, 7, { height: 94, shooting: 78, finishing: 86, handles: 88, passing: 88, defense: 80, rebounding: 88, athleticism: 84, clutch: 82 }),
      player("Robert Horry", 6, 10, 5, { height: 94, shooting: 84, finishing: 76, handles: 70, passing: 76, defense: 82, rebounding: 76, athleticism: 76, clutch: 96 }),
      player("Rick Fox", 6, 7, 17, { height: 84, shooting: 80, finishing: 76, handles: 74, passing: 76, defense: 84, rebounding: 66, athleticism: 74, clutch: 84 }),
      player("Andrew Bynum", 7, 0, 17, { height: 98, shooting: 58, finishing: 88, handles: 52, passing: 60, defense: 82, rebounding: 88, athleticism: 72, clutch: 74 }),
    ],
  },
  {
    era: "2000s",
    team: "Spurs",
    note: "A disciplined pool with Duncan's defense and Manu/Parker's creation.",
    players: [
      player("Tim Duncan", 6, 11, 21, { height: 96, shooting: 80, finishing: 95, handles: 72, passing: 84, defense: 99, rebounding: 96, athleticism: 80, clutch: 96 }),
      player("Manu Ginobili", 6, 6, 20, { height: 82, shooting: 88, finishing: 92, handles: 92, passing: 90, defense: 84, rebounding: 72, athleticism: 86, clutch: 94 }),
      player("Tony Parker", 6, 2, 9, { height: 71, shooting: 82, finishing: 92, handles: 91, passing: 88, defense: 70, rebounding: 52, athleticism: 90, clutch: 88 }),
      player("David Robinson", 7, 1, 50, { height: 99, shooting: 76, finishing: 92, handles: 68, passing: 76, defense: 96, rebounding: 94, athleticism: 90, clutch: 86 }),
      player("Bruce Bowen", 6, 7, 12, { height: 84, shooting: 82, finishing: 66, handles: 62, passing: 68, defense: 96, rebounding: 58, athleticism: 74, clutch: 80 }),
      player("Robert Horry", 6, 10, 5, { height: 94, shooting: 84, finishing: 76, handles: 70, passing: 76, defense: 82, rebounding: 76, athleticism: 76, clutch: 96 }),
      player("Stephen Jackson", 6, 8, 3, { height: 86, shooting: 82, finishing: 82, handles: 82, passing: 78, defense: 82, rebounding: 68, athleticism: 82, clutch: 86 }),
      player("Michael Finley", 6, 7, 4, { height: 84, shooting: 84, finishing: 82, handles: 78, passing: 76, defense: 74, rebounding: 66, athleticism: 78, clutch: 84 }),
    ],
  },
  {
    era: "2000s",
    team: "Suns",
    note: "Seven Seconds or Less is a playground for shooting, passing, and athleticism.",
    players: [
      player("Steve Nash", 6, 3, 13, { height: 74, shooting: 96, finishing: 84, handles: 94, passing: 99, defense: 60, rebounding: 52, athleticism: 76, clutch: 91 }),
      player("Amar'e Stoudemire", 6, 10, 32, { height: 94, shooting: 78, finishing: 97, handles: 72, passing: 68, defense: 74, rebounding: 88, athleticism: 97, clutch: 86 }),
      player("Shawn Marion", 6, 7, 31, { height: 84, shooting: 82, finishing: 88, handles: 76, passing: 74, defense: 90, rebounding: 92, athleticism: 94, clutch: 82 }),
      player("Joe Johnson", 6, 7, 2, { height: 84, shooting: 90, finishing: 86, handles: 88, passing: 84, defense: 78, rebounding: 70, athleticism: 82, clutch: 88 }),
      player("Leandro Barbosa", 6, 3, 10, { height: 74, shooting: 86, finishing: 86, handles: 84, passing: 76, defense: 70, rebounding: 55, athleticism: 94, clutch: 80 }),
      player("Raja Bell", 6, 5, 19, { height: 80, shooting: 87, finishing: 72, handles: 70, passing: 72, defense: 88, rebounding: 58, athleticism: 76, clutch: 82 }),
      player("Boris Diaw", 6, 8, 3, { height: 86, shooting: 80, finishing: 82, handles: 80, passing: 88, defense: 76, rebounding: 74, athleticism: 72, clutch: 82 }),
      player("Quentin Richardson", 6, 6, 23, { height: 82, shooting: 86, finishing: 78, handles: 74, passing: 70, defense: 74, rebounding: 70, athleticism: 78, clutch: 80 }),
    ],
  },
  {
    era: "2010s",
    team: "Warriors",
    note: "The modern cheat-code pool for shooting, defense, and small-ball IQ.",
    players: [
      player("Stephen Curry", 6, 2, 30, { height: 71, shooting: 100, finishing: 91, handles: 98, passing: 94, defense: 76, rebounding: 62, athleticism: 84, clutch: 97 }),
      player("Kevin Durant", 6, 11, 35, { height: 96, shooting: 98, finishing: 97, handles: 92, passing: 86, defense: 90, rebounding: 86, athleticism: 91, clutch: 98 }),
      player("Klay Thompson", 6, 6, 11, { height: 82, shooting: 98, finishing: 82, handles: 78, passing: 74, defense: 90, rebounding: 66, athleticism: 80, clutch: 94 }),
      player("Draymond Green", 6, 6, 23, { height: 82, shooting: 70, finishing: 78, handles: 76, passing: 92, defense: 97, rebounding: 88, athleticism: 80, clutch: 86 }),
      player("Andre Iguodala", 6, 6, 9, { height: 82, shooting: 78, finishing: 84, handles: 82, passing: 84, defense: 92, rebounding: 72, athleticism: 88, clutch: 88 }),
      player("Andrew Bogut", 7, 0, 12, { height: 98, shooting: 52, finishing: 78, handles: 58, passing: 80, defense: 88, rebounding: 88, athleticism: 64, clutch: 70 }),
      player("Shaun Livingston", 6, 7, 34, { height: 84, shooting: 78, finishing: 84, handles: 86, passing: 84, defense: 78, rebounding: 62, athleticism: 72, clutch: 82 }),
      player("Harrison Barnes", 6, 8, 40, { height: 86, shooting: 82, finishing: 80, handles: 74, passing: 68, defense: 76, rebounding: 70, athleticism: 82, clutch: 78 }),
    ],
  },
  {
    era: "2010s",
    team: "Cavaliers",
    note: "LeBron's second Cleveland run gives you one of the best all-around picks in the game.",
    players: [
      player("LeBron James", 6, 9, 23, { height: 90, shooting: 88, finishing: 100, handles: 94, passing: 98, defense: 92, rebounding: 90, athleticism: 98, clutch: 97 }),
      player("Kyrie Irving", 6, 2, 2, { height: 71, shooting: 94, finishing: 93, handles: 100, passing: 86, defense: 66, rebounding: 52, athleticism: 88, clutch: 96 }),
      player("Kevin Love", 6, 8, 0, { height: 86, shooting: 90, finishing: 84, handles: 70, passing: 82, defense: 70, rebounding: 94, athleticism: 68, clutch: 84 }),
      player("J.R. Smith", 6, 6, 5, { height: 82, shooting: 88, finishing: 84, handles: 82, passing: 72, defense: 74, rebounding: 64, athleticism: 88, clutch: 84 }),
      player("Tristan Thompson", 6, 9, 13, { height: 90, shooting: 45, finishing: 82, handles: 58, passing: 62, defense: 82, rebounding: 92, athleticism: 82, clutch: 78 }),
      player("Matthew Dellavedova", 6, 3, 8, { height: 74, shooting: 78, finishing: 62, handles: 76, passing: 78, defense: 80, rebounding: 52, athleticism: 62, clutch: 78 }),
      player("Iman Shumpert", 6, 5, 4, { height: 80, shooting: 78, finishing: 76, handles: 78, passing: 70, defense: 84, rebounding: 60, athleticism: 84, clutch: 78 }),
      player("Richard Jefferson", 6, 7, 24, { height: 84, shooting: 82, finishing: 82, handles: 74, passing: 72, defense: 74, rebounding: 62, athleticism: 82, clutch: 82 }),
    ],
  },
  {
    era: "2020s",
    team: "Nuggets",
    note: "Jokic makes passing and IQ-adjacent categories feel unfair from a center slot.",
    players: [
      player("Nikola Jokic", 6, 11, 15, { height: 96, shooting: 92, finishing: 96, handles: 88, passing: 100, defense: 82, rebounding: 96, athleticism: 64, clutch: 96 }),
      player("Jamal Murray", 6, 4, 27, { height: 77, shooting: 91, finishing: 88, handles: 92, passing: 84, defense: 72, rebounding: 62, athleticism: 84, clutch: 94 }),
      player("Aaron Gordon", 6, 8, 50, { height: 86, shooting: 74, finishing: 92, handles: 78, passing: 78, defense: 88, rebounding: 84, athleticism: 96, clutch: 82 }),
      player("Michael Porter Jr.", 6, 10, 1, { height: 94, shooting: 92, finishing: 84, handles: 76, passing: 66, defense: 74, rebounding: 82, athleticism: 82, clutch: 82 }),
      player("Kentavious Caldwell-Pope", 6, 5, 5, { height: 80, shooting: 86, finishing: 76, handles: 74, passing: 72, defense: 88, rebounding: 58, athleticism: 80, clutch: 84 }),
      player("Bruce Brown", 6, 4, 11, { height: 77, shooting: 78, finishing: 84, handles: 80, passing: 78, defense: 84, rebounding: 70, athleticism: 84, clutch: 80 }),
      player("Christian Braun", 6, 6, 0, { height: 82, shooting: 78, finishing: 82, handles: 72, passing: 70, defense: 82, rebounding: 66, athleticism: 86, clutch: 78 }),
      player("Will Barton", 6, 5, 5, { height: 80, shooting: 82, finishing: 84, handles: 84, passing: 76, defense: 72, rebounding: 68, athleticism: 86, clutch: 80 }),
    ],
  },
  {
    era: "2020s",
    team: "Bucks",
    note: "Giannis and Jrue make this a brutal defensive and athletic roll.",
    players: [
      player("Giannis Antetokounmpo", 6, 11, 34, { height: 96, shooting: 70, finishing: 100, handles: 88, passing: 86, defense: 97, rebounding: 96, athleticism: 100, clutch: 90 }),
      player("Jrue Holiday", 6, 4, 21, { height: 77, shooting: 84, finishing: 84, handles: 88, passing: 88, defense: 97, rebounding: 70, athleticism: 84, clutch: 86 }),
      player("Khris Middleton", 6, 7, 22, { height: 84, shooting: 90, finishing: 84, handles: 84, passing: 82, defense: 80, rebounding: 72, athleticism: 74, clutch: 92 }),
      player("Brook Lopez", 7, 1, 11, { height: 99, shooting: 86, finishing: 86, handles: 58, passing: 66, defense: 90, rebounding: 82, athleticism: 58, clutch: 78 }),
      player("Bobby Portis", 6, 10, 9, { height: 94, shooting: 82, finishing: 84, handles: 64, passing: 66, defense: 76, rebounding: 88, athleticism: 72, clutch: 78 }),
      player("Pat Connaughton", 6, 5, 24, { height: 80, shooting: 82, finishing: 76, handles: 70, passing: 68, defense: 76, rebounding: 72, athleticism: 86, clutch: 76 }),
      player("Donte DiVincenzo", 6, 4, 0, { height: 77, shooting: 82, finishing: 78, handles: 78, passing: 76, defense: 82, rebounding: 70, athleticism: 84, clutch: 78 }),
      player("Grayson Allen", 6, 4, 12, { height: 77, shooting: 86, finishing: 76, handles: 74, passing: 72, defense: 72, rebounding: 58, athleticism: 76, clutch: 80 }),
    ],
  },
  {
    era: "1970s",
    team: "Knicks",
    note: "Old-school New York wins with ball movement, smarts, and team defense.",
    players: [
      player("Walt Frazier", 6, 4, 10, { height: 77, shooting: 84, finishing: 86, handles: 90, passing: 90, defense: 94, rebounding: 70, athleticism: 86, clutch: 94 }),
      player("Willis Reed", 6, 9, 19, { height: 90, shooting: 78, finishing: 86, handles: 62, passing: 72, defense: 90, rebounding: 88, athleticism: 80, clutch: 96 }),
      player("Earl Monroe", 6, 3, 15, { height: 74, shooting: 84, finishing: 90, handles: 94, passing: 82, defense: 74, rebounding: 58, athleticism: 86, clutch: 90 }),
      player("Bill Bradley", 6, 5, 24, { height: 80, shooting: 86, finishing: 76, handles: 76, passing: 82, defense: 78, rebounding: 62, athleticism: 68, clutch: 84 }),
      player("Dave DeBusschere", 6, 6, 22, { height: 82, shooting: 78, finishing: 80, handles: 66, passing: 74, defense: 92, rebounding: 86, athleticism: 76, clutch: 84 }),
      player("Jerry Lucas", 6, 8, 32, { height: 86, shooting: 80, finishing: 80, handles: 62, passing: 78, defense: 78, rebounding: 90, athleticism: 66, clutch: 80 }),
      player("Dick Barnett", 6, 4, 12, { height: 77, shooting: 84, finishing: 80, handles: 78, passing: 74, defense: 80, rebounding: 58, athleticism: 76, clutch: 82 }),
      player("Phil Jackson", 6, 8, 18, { height: 86, shooting: 66, finishing: 74, handles: 60, passing: 72, defense: 82, rebounding: 74, athleticism: 70, clutch: 76 }),
    ],
  },
  {
    era: "1980s",
    team: "76ers",
    note: "Doctor J and Moses bring high-flying scoring and dominant boards.",
    players: [
      player("Julius Erving", 6, 7, 6, { height: 84, shooting: 80, finishing: 96, handles: 86, passing: 82, defense: 86, rebounding: 82, athleticism: 97, clutch: 92 }),
      player("Moses Malone", 6, 10, 2, { height: 94, shooting: 64, finishing: 90, handles: 58, passing: 64, defense: 86, rebounding: 98, athleticism: 84, clutch: 88 }),
      player("Maurice Cheeks", 6, 1, 10, { height: 68, shooting: 80, finishing: 82, handles: 88, passing: 90, defense: 90, rebounding: 58, athleticism: 82, clutch: 86 }),
      player("Andrew Toney", 6, 3, 22, { height: 74, shooting: 88, finishing: 86, handles: 84, passing: 80, defense: 72, rebounding: 56, athleticism: 80, clutch: 92 }),
      player("Bobby Jones", 6, 9, 24, { height: 90, shooting: 74, finishing: 84, handles: 66, passing: 74, defense: 94, rebounding: 78, athleticism: 84, clutch: 84 }),
      player("Clint Richardson", 6, 3, 20, { height: 74, shooting: 76, finishing: 78, handles: 76, passing: 74, defense: 82, rebounding: 60, athleticism: 80, clutch: 76 }),
      player("Marc Iavaroni", 6, 10, 5, { height: 94, shooting: 66, finishing: 76, handles: 56, passing: 64, defense: 80, rebounding: 78, athleticism: 64, clutch: 74 }),
      player("Franklin Edwards", 6, 2, 11, { height: 71, shooting: 76, finishing: 78, handles: 82, passing: 80, defense: 72, rebounding: 52, athleticism: 80, clutch: 74 }),
    ],
  },
  {
    era: "1980s",
    team: "Pistons",
    note: "Detroit's Bad Boys bully you with defense, toughness, and just enough scoring.",
    players: [
      player("Isiah Thomas", 6, 1, 11, { height: 68, shooting: 84, finishing: 90, handles: 96, passing: 94, defense: 80, rebounding: 56, athleticism: 88, clutch: 96 }),
      player("Joe Dumars", 6, 3, 4, { height: 74, shooting: 86, finishing: 82, handles: 84, passing: 80, defense: 92, rebounding: 56, athleticism: 80, clutch: 90 }),
      player("Dennis Rodman", 6, 7, 10, { height: 84, shooting: 50, finishing: 70, handles: 60, passing: 68, defense: 96, rebounding: 96, athleticism: 88, clutch: 80 }),
      player("Bill Laimbeer", 6, 11, 40, { height: 96, shooting: 80, finishing: 78, handles: 56, passing: 70, defense: 84, rebounding: 90, athleticism: 52, clutch: 84 }),
      player("Vinnie Johnson", 6, 2, 15, { height: 71, shooting: 84, finishing: 84, handles: 82, passing: 74, defense: 72, rebounding: 60, athleticism: 80, clutch: 90 }),
      player("Mark Aguirre", 6, 6, 24, { height: 82, shooting: 84, finishing: 86, handles: 78, passing: 76, defense: 68, rebounding: 70, athleticism: 74, clutch: 82 }),
      player("James Edwards", 7, 1, 53, { height: 99, shooting: 70, finishing: 82, handles: 54, passing: 60, defense: 78, rebounding: 76, athleticism: 56, clutch: 76 }),
      player("Rick Mahorn", 6, 10, 44, { height: 94, shooting: 60, finishing: 76, handles: 54, passing: 62, defense: 88, rebounding: 84, athleticism: 60, clutch: 76 }),
    ],
  },
  {
    era: "1990s",
    team: "Knicks",
    note: "Ewing-era New York is mud-in-your-boots defense, rebounding, and grit.",
    players: [
      player("Patrick Ewing", 7, 0, 33, { height: 98, shooting: 80, finishing: 90, handles: 64, passing: 70, defense: 94, rebounding: 92, athleticism: 84, clutch: 88 }),
      player("John Starks", 6, 5, 3, { height: 80, shooting: 84, finishing: 80, handles: 82, passing: 76, defense: 84, rebounding: 58, athleticism: 82, clutch: 84 }),
      player("Charles Oakley", 6, 9, 34, { height: 90, shooting: 68, finishing: 78, handles: 60, passing: 72, defense: 90, rebounding: 92, athleticism: 74, clutch: 80 }),
      player("Anthony Mason", 6, 7, 14, { height: 84, shooting: 66, finishing: 82, handles: 78, passing: 82, defense: 88, rebounding: 84, athleticism: 80, clutch: 80 }),
      player("Derek Harper", 6, 4, 11, { height: 77, shooting: 80, finishing: 80, handles: 86, passing: 84, defense: 86, rebounding: 58, athleticism: 80, clutch: 84 }),
      player("Charles Smith", 6, 10, 23, { height: 94, shooting: 74, finishing: 80, handles: 62, passing: 66, defense: 78, rebounding: 76, athleticism: 76, clutch: 70 }),
      player("Greg Anthony", 6, 1, 50, { height: 68, shooting: 74, finishing: 74, handles: 84, passing: 82, defense: 80, rebounding: 52, athleticism: 80, clutch: 76 }),
      player("Rolando Blackman", 6, 6, 55, { height: 82, shooting: 86, finishing: 80, handles: 78, passing: 74, defense: 76, rebounding: 60, athleticism: 74, clutch: 86 }),
    ],
  },
  {
    era: "1990s",
    team: "SuperSonics",
    note: "Payton and Kemp bring lockdown defense and rim-rattling athleticism.",
    players: [
      player("Gary Payton", 6, 4, 20, { height: 77, shooting: 84, finishing: 86, handles: 92, passing: 90, defense: 98, rebounding: 66, athleticism: 88, clutch: 90 }),
      player("Shawn Kemp", 6, 10, 40, { height: 94, shooting: 70, finishing: 94, handles: 70, passing: 70, defense: 84, rebounding: 90, athleticism: 97, clutch: 84 }),
      player("Detlef Schrempf", 6, 10, 11, { height: 94, shooting: 86, finishing: 84, handles: 80, passing: 86, defense: 78, rebounding: 82, athleticism: 74, clutch: 84 }),
      player("Hersey Hawkins", 6, 3, 33, { height: 74, shooting: 88, finishing: 78, handles: 78, passing: 78, defense: 84, rebounding: 62, athleticism: 76, clutch: 82 }),
      player("Sam Perkins", 6, 9, 14, { height: 90, shooting: 86, finishing: 80, handles: 62, passing: 70, defense: 80, rebounding: 80, athleticism: 64, clutch: 84 }),
      player("Nate McMillan", 6, 5, 10, { height: 80, shooting: 72, finishing: 72, handles: 82, passing: 86, defense: 90, rebounding: 68, athleticism: 78, clutch: 78 }),
      player("Vincent Askew", 6, 6, 14, { height: 82, shooting: 74, finishing: 80, handles: 76, passing: 76, defense: 82, rebounding: 64, athleticism: 80, clutch: 76 }),
      player("Kendall Gill", 6, 5, 13, { height: 80, shooting: 78, finishing: 82, handles: 80, passing: 76, defense: 84, rebounding: 66, athleticism: 86, clutch: 78 }),
    ],
  },
  {
    era: "2000s",
    team: "Pistons",
    note: "The 2004 champs win with five-man defense and zero ego.",
    players: [
      player("Chauncey Billups", 6, 3, 1, { height: 74, shooting: 88, finishing: 82, handles: 86, passing: 84, defense: 82, rebounding: 60, athleticism: 78, clutch: 94 }),
      player("Rip Hamilton", 6, 7, 32, { height: 84, shooting: 88, finishing: 84, handles: 82, passing: 78, defense: 80, rebounding: 62, athleticism: 84, clutch: 88 }),
      player("Ben Wallace", 6, 9, 3, { height: 90, shooting: 40, finishing: 72, handles: 50, passing: 60, defense: 100, rebounding: 96, athleticism: 88, clutch: 78 }),
      player("Rasheed Wallace", 6, 11, 36, { height: 96, shooting: 84, finishing: 86, handles: 68, passing: 76, defense: 92, rebounding: 84, athleticism: 80, clutch: 82 }),
      player("Tayshaun Prince", 6, 9, 22, { height: 90, shooting: 80, finishing: 80, handles: 74, passing: 78, defense: 90, rebounding: 70, athleticism: 82, clutch: 82 }),
      player("Lindsey Hunter", 6, 2, 10, { height: 71, shooting: 78, finishing: 74, handles: 82, passing: 78, defense: 86, rebounding: 54, athleticism: 82, clutch: 76 }),
      player("Mehmet Okur", 6, 11, 13, { height: 96, shooting: 84, finishing: 80, handles: 60, passing: 68, defense: 72, rebounding: 80, athleticism: 58, clutch: 78 }),
      player("Corliss Williamson", 6, 7, 34, { height: 84, shooting: 74, finishing: 84, handles: 70, passing: 66, defense: 74, rebounding: 72, athleticism: 76, clutch: 78 }),
    ],
  },
  {
    era: "2010s",
    team: "Heat",
    note: "Miami's Big Three is a transition nightmare with elite two-way wings.",
    players: [
      player("LeBron James", 6, 9, 6, { height: 90, shooting: 84, finishing: 99, handles: 92, passing: 96, defense: 94, rebounding: 88, athleticism: 99, clutch: 96 }),
      player("Dwyane Wade", 6, 4, 3, { height: 77, shooting: 80, finishing: 96, handles: 90, passing: 86, defense: 88, rebounding: 66, athleticism: 96, clutch: 96 }),
      player("Chris Bosh", 6, 11, 1, { height: 96, shooting: 84, finishing: 86, handles: 72, passing: 74, defense: 82, rebounding: 84, athleticism: 80, clutch: 86 }),
      player("Ray Allen", 6, 5, 34, { height: 80, shooting: 96, finishing: 80, handles: 80, passing: 76, defense: 72, rebounding: 60, athleticism: 80, clutch: 96 }),
      player("Mario Chalmers", 6, 2, 15, { height: 71, shooting: 82, finishing: 76, handles: 80, passing: 78, defense: 80, rebounding: 56, athleticism: 80, clutch: 82 }),
      player("Shane Battier", 6, 8, 31, { height: 86, shooting: 82, finishing: 70, handles: 64, passing: 72, defense: 90, rebounding: 66, athleticism: 70, clutch: 84 }),
      player("Udonis Haslem", 6, 8, 40, { height: 86, shooting: 72, finishing: 76, handles: 58, passing: 64, defense: 82, rebounding: 84, athleticism: 72, clutch: 80 }),
      player("Norris Cole", 6, 2, 30, { height: 71, shooting: 74, finishing: 76, handles: 82, passing: 78, defense: 78, rebounding: 54, athleticism: 82, clutch: 76 }),
    ],
  },
  {
    era: "2010s",
    team: "Thunder",
    note: "Young Durant, Westbrook, and Harden make this the scariest athletic roll in the game.",
    players: [
      player("Kevin Durant", 6, 10, 35, { height: 94, shooting: 96, finishing: 94, handles: 88, passing: 82, defense: 84, rebounding: 82, athleticism: 90, clutch: 94 }),
      player("Russell Westbrook", 6, 3, 0, { height: 74, shooting: 78, finishing: 92, handles: 90, passing: 90, defense: 82, rebounding: 78, athleticism: 99, clutch: 88 }),
      player("James Harden", 6, 5, 13, { height: 80, shooting: 88, finishing: 86, handles: 92, passing: 88, defense: 70, rebounding: 66, athleticism: 82, clutch: 88 }),
      player("Serge Ibaka", 6, 10, 9, { height: 94, shooting: 76, finishing: 84, handles: 58, passing: 62, defense: 92, rebounding: 82, athleticism: 88, clutch: 78 }),
      player("Kendrick Perkins", 6, 10, 5, { height: 94, shooting: 40, finishing: 72, handles: 50, passing: 60, defense: 86, rebounding: 80, athleticism: 60, clutch: 72 }),
      player("Thabo Sefolosha", 6, 7, 2, { height: 84, shooting: 74, finishing: 74, handles: 72, passing: 72, defense: 88, rebounding: 66, athleticism: 84, clutch: 74 }),
      player("Nick Collison", 6, 10, 4, { height: 94, shooting: 62, finishing: 78, handles: 56, passing: 70, defense: 82, rebounding: 80, athleticism: 64, clutch: 76 }),
      player("Reggie Jackson", 6, 3, 15, { height: 74, shooting: 78, finishing: 82, handles: 84, passing: 78, defense: 70, rebounding: 58, athleticism: 84, clutch: 80 }),
    ],
  },
  {
    era: "1990s",
    team: "Jazz",
    note: "Stockton-to-Malone is the purest two-man game ever built. Roll it and feel it.",
    players: [
      player("John Stockton", 6, 1, 12, { height: 68, shooting: 80, finishing: 82, handles: 96, passing: 100, defense: 88, rebounding: 60, athleticism: 80, clutch: 92 }),
      player("Karl Malone", 6, 9, 32, { height: 90, shooting: 80, finishing: 94, handles: 76, passing: 78, defense: 86, rebounding: 92, athleticism: 92, clutch: 84 }),
      player("Jeff Hornacek", 6, 4, 14, { height: 77, shooting: 88, finishing: 80, handles: 82, passing: 82, defense: 80, rebounding: 60, athleticism: 70, clutch: 88 }),
      player("Bryon Russell", 6, 7, 3, { height: 84, shooting: 76, finishing: 76, handles: 72, passing: 68, defense: 84, rebounding: 68, athleticism: 78, clutch: 76 }),
      player("Greg Ostertag", 7, 2, 00, { height: 100, shooting: 52, finishing: 72, handles: 48, passing: 58, defense: 84, rebounding: 82, athleticism: 52, clutch: 66 }),
      player("Antoine Carr", 6, 9, 35, { height: 90, shooting: 72, finishing: 78, handles: 58, passing: 62, defense: 72, rebounding: 72, athleticism: 64, clutch: 72 }),
      player("Howard Eisley", 6, 2, 7, { height: 71, shooting: 76, finishing: 74, handles: 78, passing: 78, defense: 72, rebounding: 52, athleticism: 74, clutch: 72 }),
      player("Shandon Anderson", 6, 6, 4, { height: 82, shooting: 74, finishing: 76, handles: 70, passing: 66, defense: 76, rebounding: 64, athleticism: 78, clutch: 72 }),
    ],
  },
  {
    era: "1990s",
    team: "Magic",
    note: "Shaq and Penny were a once-in-a-generation pairing before it all fell apart.",
    players: [
      player("Shaquille O'Neal", 7, 1, 32, { height: 99, shooting: 48, finishing: 100, handles: 60, passing: 76, defense: 90, rebounding: 94, athleticism: 92, clutch: 86 }),
      player("Penny Hardaway", 6, 7, 1, { height: 84, shooting: 82, finishing: 88, handles: 90, passing: 88, defense: 82, rebounding: 68, athleticism: 90, clutch: 88 }),
      player("Nick Anderson", 6, 6, 25, { height: 82, shooting: 80, finishing: 82, handles: 78, passing: 70, defense: 78, rebounding: 66, athleticism: 84, clutch: 76 }),
      player("Horace Grant", 6, 10, 54, { height: 94, shooting: 72, finishing: 82, handles: 60, passing: 70, defense: 84, rebounding: 88, athleticism: 80, clutch: 78 }),
      player("Dennis Scott", 6, 8, 3, { height: 86, shooting: 90, finishing: 72, handles: 64, passing: 66, defense: 68, rebounding: 60, athleticism: 70, clutch: 80 }),
      player("Brian Shaw", 6, 6, 14, { height: 82, shooting: 74, finishing: 76, handles: 78, passing: 84, defense: 78, rebounding: 62, athleticism: 74, clutch: 74 }),
      player("Anthony Bowie", 6, 6, 11, { height: 82, shooting: 74, finishing: 76, handles: 74, passing: 70, defense: 78, rebounding: 60, athleticism: 78, clutch: 72 }),
      player("Donald Royal", 6, 8, 42, { height: 86, shooting: 70, finishing: 76, handles: 60, passing: 64, defense: 76, rebounding: 68, athleticism: 76, clutch: 70 }),
    ],
  },
  {
    era: "1990s",
    team: "Mavericks",
    note: "The Trio never quite clicked, but this pool is full of scoring options and young upside.",
    players: [
      player("Jason Kidd", 6, 4, 5, { height: 77, shooting: 74, finishing: 82, handles: 96, passing: 98, defense: 88, rebounding: 74, athleticism: 88, clutch: 84 }),
      player("Jim Jackson", 6, 6, 24, { height: 82, shooting: 84, finishing: 84, handles: 82, passing: 78, defense: 74, rebounding: 68, athleticism: 82, clutch: 80 }),
      player("Jamal Mashburn", 6, 8, 32, { height: 86, shooting: 84, finishing: 86, handles: 82, passing: 76, defense: 70, rebounding: 72, athleticism: 80, clutch: 82 }),
      player("Popeye Jones", 6, 8, 43, { height: 86, shooting: 62, finishing: 72, handles: 56, passing: 62, defense: 74, rebounding: 90, athleticism: 66, clutch: 72 }),
      player("George McCloud", 6, 6, 3, { height: 82, shooting: 84, finishing: 74, handles: 72, passing: 70, defense: 66, rebounding: 60, athleticism: 72, clutch: 74 }),
      player("Tony Dumas", 6, 6, 11, { height: 82, shooting: 78, finishing: 78, handles: 76, passing: 68, defense: 68, rebounding: 56, athleticism: 78, clutch: 74 }),
      player("Lorenzo Williams", 6, 9, 30, { height: 90, shooting: 52, finishing: 70, handles: 50, passing: 60, defense: 80, rebounding: 78, athleticism: 72, clutch: 66 }),
      player("Lucious Harris", 6, 5, 20, { height: 80, shooting: 78, finishing: 76, handles: 74, passing: 72, defense: 74, rebounding: 56, athleticism: 74, clutch: 72 }),
    ],
  },
  {
    era: "2000s",
    team: "Kings",
    note: "Sacramento's beautiful basketball — everyone touches the ball, everyone scores.",
    players: [
      player("Chris Webber", 6, 10, 4, { height: 94, shooting: 82, finishing: 88, handles: 84, passing: 88, defense: 80, rebounding: 90, athleticism: 84, clutch: 84 }),
      player("Peja Stojakovic", 6, 10, 16, { height: 94, shooting: 96, finishing: 80, handles: 72, passing: 74, defense: 68, rebounding: 72, athleticism: 64, clutch: 88 }),
      player("Mike Bibby", 6, 2, 10, { height: 71, shooting: 86, finishing: 80, handles: 88, passing: 86, defense: 72, rebounding: 56, athleticism: 76, clutch: 90 }),
      player("Vlade Divac", 7, 1, 21, { height: 99, shooting: 74, finishing: 80, handles: 66, passing: 86, defense: 78, rebounding: 84, athleticism: 56, clutch: 78 }),
      player("Doug Christie", 6, 6, 13, { height: 82, shooting: 78, finishing: 78, handles: 78, passing: 78, defense: 92, rebounding: 68, athleticism: 82, clutch: 80 }),
      player("Bobby Jackson", 6, 1, 24, { height: 68, shooting: 82, finishing: 82, handles: 82, passing: 80, defense: 76, rebounding: 58, athleticism: 86, clutch: 78 }),
      player("Hedo Turkoglu", 6, 10, 15, { height: 94, shooting: 82, finishing: 78, handles: 76, passing: 78, defense: 72, rebounding: 72, athleticism: 68, clutch: 84 }),
      player("Brad Miller", 7, 0, 52, { height: 98, shooting: 74, finishing: 78, handles: 62, passing: 80, defense: 76, rebounding: 82, athleticism: 54, clutch: 76 }),
    ],
  },
  {
    era: "2000s",
    team: "Nets",
    note: "Kidd's Nets ran back-to-back Finals on pure playmaking and team defense.",
    players: [
      player("Jason Kidd", 6, 4, 5, { height: 77, shooting: 74, finishing: 80, handles: 96, passing: 99, defense: 90, rebounding: 76, athleticism: 84, clutch: 90 }),
      player("Vince Carter", 6, 6, 15, { height: 82, shooting: 86, finishing: 90, handles: 82, passing: 76, defense: 72, rebounding: 66, athleticism: 92, clutch: 84 }),
      player("Richard Jefferson", 6, 7, 24, { height: 84, shooting: 78, finishing: 86, handles: 74, passing: 72, defense: 76, rebounding: 68, athleticism: 86, clutch: 78 }),
      player("Kenyon Martin", 6, 9, 6, { height: 90, shooting: 66, finishing: 82, handles: 62, passing: 64, defense: 88, rebounding: 86, athleticism: 88, clutch: 76 }),
      player("Kerry Kittles", 6, 5, 23, { height: 80, shooting: 82, finishing: 78, handles: 78, passing: 72, defense: 86, rebounding: 58, athleticism: 82, clutch: 78 }),
      player("Lucious Harris", 6, 5, 20, { height: 80, shooting: 78, finishing: 76, handles: 72, passing: 70, defense: 74, rebounding: 56, athleticism: 74, clutch: 74 }),
      player("Jason Collins", 7, 0, 98, { height: 98, shooting: 48, finishing: 66, handles: 48, passing: 56, defense: 82, rebounding: 74, athleticism: 52, clutch: 66 }),
      player("Brian Scalabrine", 6, 9, 44, { height: 90, shooting: 74, finishing: 68, handles: 58, passing: 66, defense: 70, rebounding: 70, athleticism: 54, clutch: 70 }),
    ],
  },
  {
    era: "2010s",
    team: "Pacers",
    note: "Indiana's suffocating defense and blue-collar identity made them the Warriors' kryptonite.",
    players: [
      player("Paul George", 6, 8, 24, { height: 86, shooting: 88, finishing: 86, handles: 82, passing: 80, defense: 94, rebounding: 76, athleticism: 90, clutch: 88 }),
      player("Roy Hibbert", 7, 2, 55, { height: 100, shooting: 65, finishing: 80, handles: 48, passing: 62, defense: 92, rebounding: 84, athleticism: 54, clutch: 76 }),
      player("David West", 6, 9, 21, { height: 90, shooting: 80, finishing: 84, handles: 66, passing: 74, defense: 86, rebounding: 82, athleticism: 74, clutch: 86 }),
      player("Lance Stephenson", 6, 5, 1, { height: 80, shooting: 76, finishing: 82, handles: 82, passing: 80, defense: 86, rebounding: 72, athleticism: 84, clutch: 76 }),
      player("George Hill", 6, 3, 3, { height: 74, shooting: 82, finishing: 80, handles: 82, passing: 80, defense: 84, rebounding: 58, athleticism: 80, clutch: 80 }),
      player("Danny Granger", 6, 7, 33, { height: 84, shooting: 86, finishing: 82, handles: 74, passing: 72, defense: 80, rebounding: 68, athleticism: 78, clutch: 82 }),
      player("Luis Scola", 6, 9, 4, { height: 90, shooting: 78, finishing: 82, handles: 62, passing: 68, defense: 76, rebounding: 84, athleticism: 62, clutch: 80 }),
      player("Ian Mahinmi", 6, 11, 28, { height: 96, shooting: 58, finishing: 76, handles: 50, passing: 56, defense: 80, rebounding: 80, athleticism: 70, clutch: 70 }),
    ],
  },
  {
    era: "2010s",
    team: "Clippers",
    note: "Lob City ran on CP3's genius and Griffin/Jordan's rim gravity. Style points required.",
    players: [
      player("Chris Paul", 6, 0, 3, { height: 67, shooting: 86, finishing: 82, handles: 98, passing: 99, defense: 90, rebounding: 60, athleticism: 86, clutch: 94 }),
      player("Blake Griffin", 6, 10, 32, { height: 94, shooting: 74, finishing: 94, handles: 80, passing: 80, defense: 76, rebounding: 90, athleticism: 98, clutch: 84 }),
      player("DeAndre Jordan", 6, 11, 6, { height: 96, shooting: 38, finishing: 86, handles: 48, passing: 54, defense: 90, rebounding: 96, athleticism: 90, clutch: 56 }),
      player("Jamal Crawford", 6, 5, 11, { height: 80, shooting: 86, finishing: 84, handles: 90, passing: 74, defense: 62, rebounding: 56, athleticism: 78, clutch: 88 }),
      player("Caron Butler", 6, 7, 5, { height: 84, shooting: 80, finishing: 82, handles: 74, passing: 74, defense: 78, rebounding: 68, athleticism: 76, clutch: 82 }),
      player("Matt Barnes", 6, 7, 22, { height: 84, shooting: 76, finishing: 76, handles: 72, passing: 70, defense: 82, rebounding: 70, athleticism: 78, clutch: 76 }),
      player("Lamar Odom", 6, 10, 7, { height: 94, shooting: 74, finishing: 80, handles: 84, passing: 84, defense: 74, rebounding: 82, athleticism: 76, clutch: 74 }),
      player("Randy Foye", 6, 4, 4, { height: 77, shooting: 80, finishing: 74, handles: 76, passing: 72, defense: 72, rebounding: 56, athleticism: 78, clutch: 76 }),
    ],
  },
  {
    era: "2010s",
    team: "Grizzlies",
    note: "Grit and Grind. The toughest points in the league — earned in the post, in the mud.",
    players: [
      player("Marc Gasol", 7, 1, 33, { height: 99, shooting: 78, finishing: 88, handles: 70, passing: 86, defense: 94, rebounding: 86, athleticism: 66, clutch: 88 }),
      player("Zach Randolph", 6, 9, 50, { height: 90, shooting: 78, finishing: 88, handles: 70, passing: 70, defense: 72, rebounding: 96, athleticism: 66, clutch: 88 }),
      player("Mike Conley", 6, 1, 11, { height: 68, shooting: 84, finishing: 82, handles: 90, passing: 88, defense: 84, rebounding: 56, athleticism: 82, clutch: 86 }),
      player("Tony Allen", 6, 4, 9, { height: 77, shooting: 66, finishing: 76, handles: 72, passing: 68, defense: 98, rebounding: 70, athleticism: 86, clutch: 76 }),
      player("Tayshaun Prince", 6, 9, 21, { height: 90, shooting: 78, finishing: 76, handles: 72, passing: 76, defense: 86, rebounding: 66, athleticism: 76, clutch: 78 }),
      player("Vince Carter", 6, 6, 15, { height: 82, shooting: 84, finishing: 80, handles: 76, passing: 72, defense: 70, rebounding: 60, athleticism: 80, clutch: 78 }),
      player("Courtney Lee", 6, 5, 5, { height: 80, shooting: 82, finishing: 76, handles: 74, passing: 70, defense: 82, rebounding: 58, athleticism: 80, clutch: 78 }),
      player("Kosta Koufos", 7, 0, 41, { height: 98, shooting: 60, finishing: 72, handles: 48, passing: 60, defense: 78, rebounding: 80, athleticism: 56, clutch: 68 }),
    ],
  },
  {
    era: "1960s",
    team: "Warriors",
    note: "Wilt scored 100 points in a single game in 1962. The rest of the pool just tried to keep up.",
    players: [
      player("Wilt Chamberlain", 7, 1, 13, { height: 99, shooting: 72, finishing: 99, handles: 68, passing: 74, defense: 86, rebounding: 100, athleticism: 98, clutch: 80 }),
      player("Nate Thurmond", 6, 11, 42, { height: 96, shooting: 72, finishing: 80, handles: 64, passing: 68, defense: 94, rebounding: 96, athleticism: 80, clutch: 78 }),
      player("Paul Arizin", 6, 4, 11, { height: 77, shooting: 86, finishing: 82, handles: 72, passing: 72, defense: 72, rebounding: 68, athleticism: 78, clutch: 84 }),
      player("Tom Meschery", 6, 6, 14, { height: 82, shooting: 74, finishing: 78, handles: 66, passing: 70, defense: 78, rebounding: 74, athleticism: 76, clutch: 74 }),
      player("Guy Rodgers", 6, 0, 14, { height: 67, shooting: 74, finishing: 74, handles: 90, passing: 92, defense: 76, rebounding: 52, athleticism: 80, clutch: 76 }),
      player("Al Attles", 6, 0, 1, { height: 67, shooting: 66, finishing: 72, handles: 80, passing: 78, defense: 84, rebounding: 56, athleticism: 82, clutch: 76 }),
      player("Wayne Hightower", 6, 8, 8, { height: 88, shooting: 72, finishing: 76, handles: 66, passing: 66, defense: 70, rebounding: 78, athleticism: 78, clutch: 70 }),
      player("Gary Phillips", 6, 3, 3, { height: 74, shooting: 68, finishing: 70, handles: 72, passing: 70, defense: 74, rebounding: 56, athleticism: 76, clutch: 68 }),
    ],
  },
  {
    era: "1970s",
    team: "Lakers",
    note: "33 straight wins. 69 victories. Wilt parked near the rim while Jerry West handled the rest.",
    players: [
      player("Jerry West", 6, 2, 44, { height: 72, shooting: 94, finishing: 88, handles: 92, passing: 90, defense: 90, rebounding: 66, athleticism: 84, clutch: 100 }),
      player("Wilt Chamberlain", 7, 1, 13, { height: 99, shooting: 66, finishing: 94, handles: 66, passing: 80, defense: 90, rebounding: 100, athleticism: 86, clutch: 76 }),
      player("Gail Goodrich", 6, 1, 25, { height: 68, shooting: 88, finishing: 84, handles: 86, passing: 80, defense: 76, rebounding: 54, athleticism: 82, clutch: 88 }),
      player("Happy Hairston", 6, 7, 52, { height: 84, shooting: 70, finishing: 80, handles: 64, passing: 68, defense: 78, rebounding: 90, athleticism: 80, clutch: 74 }),
      player("Jim McMillian", 6, 5, 5, { height: 80, shooting: 82, finishing: 80, handles: 76, passing: 76, defense: 76, rebounding: 66, athleticism: 78, clutch: 80 }),
      player("Elgin Baylor", 6, 5, 22, { height: 80, shooting: 88, finishing: 92, handles: 86, passing: 86, defense: 80, rebounding: 88, athleticism: 94, clutch: 90 }),
      player("Pat Riley", 6, 4, 42, { height: 77, shooting: 76, finishing: 74, handles: 74, passing: 74, defense: 74, rebounding: 60, athleticism: 76, clutch: 72 }),
      player("Flynn Robinson", 6, 1, 11, { height: 68, shooting: 82, finishing: 76, handles: 78, passing: 72, defense: 70, rebounding: 52, athleticism: 78, clutch: 76 }),
    ],
  },
  {
    era: "1970s",
    team: "Warriors",
    note: "Swept the Bullets in four straight. Rick Barry shot free throws underhanded and didn't care what anyone thought.",
    players: [
      player("Rick Barry", 6, 7, 24, { height: 84, shooting: 92, finishing: 86, handles: 86, passing: 90, defense: 82, rebounding: 76, athleticism: 82, clutch: 92 }),
      player("Jamaal Wilkes", 6, 6, 14, { height: 82, shooting: 84, finishing: 80, handles: 74, passing: 74, defense: 80, rebounding: 70, athleticism: 82, clutch: 82 }),
      player("Phil Smith", 6, 4, 20, { height: 77, shooting: 82, finishing: 78, handles: 78, passing: 76, defense: 78, rebounding: 60, athleticism: 80, clutch: 80 }),
      player("Clifford Ray", 6, 9, 15, { height: 90, shooting: 58, finishing: 72, handles: 56, passing: 68, defense: 84, rebounding: 88, athleticism: 76, clutch: 66 }),
      player("Butch Beard", 6, 3, 10, { height: 74, shooting: 78, finishing: 74, handles: 80, passing: 78, defense: 78, rebounding: 56, athleticism: 78, clutch: 76 }),
      player("Charles Johnson", 6, 3, 35, { height: 74, shooting: 76, finishing: 74, handles: 74, passing: 74, defense: 78, rebounding: 58, athleticism: 78, clutch: 74 }),
      player("Derrek Dickey", 6, 7, 13, { height: 84, shooting: 66, finishing: 70, handles: 60, passing: 62, defense: 72, rebounding: 76, athleticism: 72, clutch: 64 }),
      player("George Johnson", 6, 11, 24, { height: 96, shooting: 52, finishing: 68, handles: 48, passing: 60, defense: 82, rebounding: 80, athleticism: 68, clutch: 62 }),
    ],
  },
  {
    era: "1990s",
    team: "Suns",
    note: "Barkley dragged Phoenix to the 1993 Finals. KJ made sure nothing came easy on the perimeter.",
    players: [
      player("Charles Barkley", 6, 6, 34, { height: 82, shooting: 84, finishing: 88, handles: 78, passing: 86, defense: 80, rebounding: 96, athleticism: 94, clutch: 92 }),
      player("Kevin Johnson", 6, 1, 7, { height: 68, shooting: 84, finishing: 86, handles: 94, passing: 92, defense: 80, rebounding: 56, athleticism: 92, clutch: 90 }),
      player("Dan Majerle", 6, 6, 9, { height: 82, shooting: 88, finishing: 78, handles: 76, passing: 74, defense: 88, rebounding: 70, athleticism: 84, clutch: 86 }),
      player("Danny Ainge", 6, 5, 22, { height: 80, shooting: 86, finishing: 76, handles: 82, passing: 82, defense: 78, rebounding: 58, athleticism: 74, clutch: 86 }),
      player("Tom Chambers", 6, 10, 10, { height: 94, shooting: 82, finishing: 82, handles: 72, passing: 70, defense: 66, rebounding: 80, athleticism: 80, clutch: 82 }),
      player("Cedric Ceballos", 6, 7, 23, { height: 84, shooting: 84, finishing: 84, handles: 72, passing: 66, defense: 68, rebounding: 80, athleticism: 82, clutch: 78 }),
      player("Mark West", 6, 10, 41, { height: 94, shooting: 54, finishing: 70, handles: 50, passing: 56, defense: 82, rebounding: 82, athleticism: 72, clutch: 62 }),
      player("Frank Johnson", 6, 1, 10, { height: 68, shooting: 72, finishing: 70, handles: 80, passing: 80, defense: 76, rebounding: 50, athleticism: 74, clutch: 72 }),
    ],
  },
  {
    era: "2000s",
    team: "Mavericks",
    note: "Before the 2011 title, Dirk and Nash invented a new kind of offense. A 7-footer pulling up from 25 feet changed the league.",
    players: [
      player("Dirk Nowitzki", 7, 0, 41, { height: 98, shooting: 98, finishing: 84, handles: 82, passing: 80, defense: 72, rebounding: 88, athleticism: 76, clutch: 98 }),
      player("Steve Nash", 6, 3, 13, { height: 74, shooting: 90, finishing: 82, handles: 96, passing: 98, defense: 66, rebounding: 54, athleticism: 80, clutch: 90 }),
      player("Michael Finley", 6, 7, 4, { height: 84, shooting: 88, finishing: 82, handles: 80, passing: 76, defense: 80, rebounding: 66, athleticism: 80, clutch: 86 }),
      player("Jason Terry", 6, 2, 31, { height: 72, shooting: 88, finishing: 80, handles: 84, passing: 80, defense: 72, rebounding: 50, athleticism: 78, clutch: 90 }),
      player("Antoine Walker", 6, 9, 8, { height: 90, shooting: 76, finishing: 80, handles: 78, passing: 78, defense: 70, rebounding: 82, athleticism: 78, clutch: 76 }),
      player("Nick Van Exel", 6, 1, 6, { height: 68, shooting: 84, finishing: 78, handles: 88, passing: 86, defense: 66, rebounding: 52, athleticism: 78, clutch: 84 }),
      player("Eduardo Najera", 6, 8, 14, { height: 88, shooting: 66, finishing: 70, handles: 64, passing: 64, defense: 82, rebounding: 78, athleticism: 80, clutch: 68 }),
      player("Shawn Bradley", 7, 6, 44, { height: 100, shooting: 58, finishing: 66, handles: 50, passing: 60, defense: 76, rebounding: 76, athleticism: 56, clutch: 56 }),
    ],
  },
  {
    era: "2000s",
    team: "Timberwolves",
    note: "KG's MVP year dragged Minnesota to 58 wins. Cassell and Sprewell made the West Conference Finals feel inevitable.",
    players: [
      player("Kevin Garnett", 6, 11, 21, { height: 96, shooting: 82, finishing: 88, handles: 80, passing: 88, defense: 96, rebounding: 98, athleticism: 94, clutch: 90 }),
      player("Sam Cassell", 6, 3, 19, { height: 74, shooting: 90, finishing: 86, handles: 88, passing: 86, defense: 70, rebounding: 56, athleticism: 70, clutch: 96 }),
      player("Latrell Sprewell", 6, 5, 8, { height: 80, shooting: 84, finishing: 84, handles: 86, passing: 76, defense: 84, rebounding: 62, athleticism: 86, clutch: 86 }),
      player("Wally Szczerbiak", 6, 7, 10, { height: 84, shooting: 88, finishing: 80, handles: 74, passing: 72, defense: 68, rebounding: 66, athleticism: 74, clutch: 80 }),
      player("Troy Hudson", 6, 1, 3, { height: 68, shooting: 82, finishing: 76, handles: 82, passing: 78, defense: 64, rebounding: 50, athleticism: 76, clutch: 78 }),
      player("Fred Hoiberg", 6, 4, 15, { height: 77, shooting: 88, finishing: 74, handles: 74, passing: 74, defense: 64, rebounding: 58, athleticism: 72, clutch: 78 }),
      player("Mark Madsen", 6, 9, 34, { height: 90, shooting: 52, finishing: 64, handles: 52, passing: 58, defense: 76, rebounding: 80, athleticism: 72, clutch: 60 }),
      player("Michael Olowokandi", 7, 0, 0, { height: 98, shooting: 54, finishing: 70, handles: 48, passing: 54, defense: 76, rebounding: 84, athleticism: 66, clutch: 56 }),
    ],
  },
  {
    era: "2010s",
    team: "Spurs",
    note: "The Kawhi-LaMarcus years. Same system, new stars. San Antonio made winning look like scheduled maintenance.",
    players: [
      player("Kawhi Leonard", 6, 7, 2, { height: 84, shooting: 90, finishing: 90, handles: 88, passing: 80, defense: 98, rebounding: 82, athleticism: 90, clutch: 92 }),
      player("LaMarcus Aldridge", 6, 11, 12, { height: 96, shooting: 88, finishing: 90, handles: 74, passing: 74, defense: 82, rebounding: 92, athleticism: 76, clutch: 86 }),
      player("Manu Ginobili", 6, 6, 20, { height: 82, shooting: 86, finishing: 84, handles: 86, passing: 84, defense: 78, rebounding: 60, athleticism: 82, clutch: 94 }),
      player("Tony Parker", 6, 2, 9, { height: 72, shooting: 82, finishing: 90, handles: 92, passing: 88, defense: 76, rebounding: 52, athleticism: 84, clutch: 88 }),
      player("Pau Gasol", 7, 0, 16, { height: 98, shooting: 80, finishing: 86, handles: 74, passing: 86, defense: 80, rebounding: 90, athleticism: 68, clutch: 80 }),
      player("Danny Green", 6, 6, 14, { height: 82, shooting: 86, finishing: 74, handles: 74, passing: 72, defense: 88, rebounding: 62, athleticism: 80, clutch: 80 }),
      player("Patty Mills", 6, 0, 8, { height: 67, shooting: 88, finishing: 76, handles: 82, passing: 78, defense: 72, rebounding: 48, athleticism: 80, clutch: 84 }),
      player("Kyle Anderson", 6, 9, 1, { height: 90, shooting: 74, finishing: 78, handles: 76, passing: 80, defense: 80, rebounding: 76, athleticism: 66, clutch: 72 }),
    ],
  },
  {
    era: "2010s",
    team: "Raptors",
    note: "Before Kawhi, Lowry and DeRozan built a culture. Mid-range gospel, annual playoff heartbreak included.",
    players: [
      player("DeMar DeRozan", 6, 7, 10, { height: 84, shooting: 88, finishing: 88, handles: 82, passing: 80, defense: 76, rebounding: 68, athleticism: 82, clutch: 92 }),
      player("Kyle Lowry", 6, 0, 7, { height: 67, shooting: 86, finishing: 80, handles: 88, passing: 88, defense: 86, rebounding: 64, athleticism: 80, clutch: 88 }),
      player("Serge Ibaka", 6, 10, 9, { height: 94, shooting: 78, finishing: 80, handles: 68, passing: 68, defense: 90, rebounding: 86, athleticism: 82, clutch: 76 }),
      player("Jonas Valanciunas", 7, 0, 17, { height: 98, shooting: 76, finishing: 84, handles: 54, passing: 64, defense: 84, rebounding: 94, athleticism: 68, clutch: 74 }),
      player("Norman Powell", 6, 4, 24, { height: 77, shooting: 82, finishing: 82, handles: 78, passing: 72, defense: 78, rebounding: 62, athleticism: 84, clutch: 80 }),
      player("Terrence Ross", 6, 6, 31, { height: 82, shooting: 84, finishing: 78, handles: 76, passing: 68, defense: 70, rebounding: 62, athleticism: 84, clutch: 74 }),
      player("Patrick Patterson", 6, 9, 54, { height: 90, shooting: 80, finishing: 76, handles: 68, passing: 68, defense: 80, rebounding: 74, athleticism: 74, clutch: 74 }),
      player("Bismack Biyombo", 6, 9, 8, { height: 90, shooting: 52, finishing: 68, handles: 50, passing: 56, defense: 86, rebounding: 86, athleticism: 80, clutch: 60 }),
    ],
  },
  {
    era: "2020s",
    team: "Celtics",
    note: "The 2024 champions. Tatum and Brown finally silenced every doubter with the deepest roster in the league.",
    players: [
      player("Jayson Tatum", 6, 8, 0, { height: 88, shooting: 92, finishing: 88, handles: 86, passing: 78, defense: 86, rebounding: 82, athleticism: 86, clutch: 92 }),
      player("Jaylen Brown", 6, 6, 7, { height: 82, shooting: 88, finishing: 88, handles: 82, passing: 72, defense: 86, rebounding: 72, athleticism: 92, clutch: 88 }),
      player("Kristaps Porzingis", 7, 2, 8, { height: 100, shooting: 88, finishing: 82, handles: 76, passing: 70, defense: 88, rebounding: 86, athleticism: 80, clutch: 78 }),
      player("Jrue Holiday", 6, 4, 12, { height: 77, shooting: 82, finishing: 82, handles: 86, passing: 84, defense: 94, rebounding: 64, athleticism: 84, clutch: 86 }),
      player("Al Horford", 6, 9, 42, { height: 90, shooting: 82, finishing: 80, handles: 72, passing: 80, defense: 88, rebounding: 82, athleticism: 70, clutch: 80 }),
      player("Derrick White", 6, 4, 9, { height: 77, shooting: 84, finishing: 80, handles: 82, passing: 78, defense: 90, rebounding: 60, athleticism: 80, clutch: 82 }),
      player("Payton Pritchard", 6, 1, 11, { height: 68, shooting: 88, finishing: 76, handles: 82, passing: 78, defense: 70, rebounding: 54, athleticism: 76, clutch: 84 }),
      player("Sam Hauser", 6, 8, 30, { height: 88, shooting: 92, finishing: 74, handles: 70, passing: 70, defense: 68, rebounding: 66, athleticism: 72, clutch: 76 }),
    ],
  },
  {
    era: "2020s",
    team: "Heat",
    note: "Two Finals runs in three years on pure fourth-quarter will. Jimmy Butler does not take nights off.",
    players: [
      player("Jimmy Butler", 6, 7, 22, { height: 84, shooting: 84, finishing: 86, handles: 82, passing: 82, defense: 92, rebounding: 74, athleticism: 84, clutch: 98 }),
      player("Bam Adebayo", 6, 9, 13, { height: 90, shooting: 76, finishing: 86, handles: 76, passing: 86, defense: 94, rebounding: 90, athleticism: 92, clutch: 84 }),
      player("Tyler Herro", 6, 5, 14, { height: 80, shooting: 92, finishing: 84, handles: 82, passing: 78, defense: 68, rebounding: 58, athleticism: 78, clutch: 88 }),
      player("Kyle Lowry", 6, 0, 7, { height: 67, shooting: 82, finishing: 76, handles: 84, passing: 86, defense: 82, rebounding: 58, athleticism: 72, clutch: 82 }),
      player("Duncan Robinson", 6, 7, 55, { height: 84, shooting: 96, finishing: 74, handles: 70, passing: 70, defense: 64, rebounding: 60, athleticism: 72, clutch: 82 }),
      player("Caleb Martin", 6, 5, 16, { height: 80, shooting: 78, finishing: 80, handles: 74, passing: 70, defense: 80, rebounding: 68, athleticism: 82, clutch: 80 }),
      player("Victor Oladipo", 6, 4, 4, { height: 77, shooting: 82, finishing: 82, handles: 80, passing: 76, defense: 84, rebounding: 60, athleticism: 86, clutch: 80 }),
      player("Udonis Haslem", 6, 8, 40, { height: 88, shooting: 72, finishing: 76, handles: 58, passing: 62, defense: 78, rebounding: 82, athleticism: 66, clutch: 76 }),
    ],
  },
];

let round = 0;
let runAttributes = [];
let currentTeamEra = null;
let currentAttribute = null;
let build = {};
let gameMode = "classic";

const modeScreen = document.querySelector("#modeScreen");
const modeButtons = Array.from(document.querySelectorAll(".mode-card"));
const gameGrid = document.querySelector("#gameGrid");
const cards = document.querySelector("#cards");
const roundLabel = document.querySelector("#roundLabel");
const prompt = document.querySelector("#prompt");
const context = document.querySelector("#context");
const modeLabel = document.querySelector("#modeLabel");
const resetButton = document.querySelector("#resetButton");
const backButton = document.querySelector("#backButton");
const helpButton = document.querySelector("#helpButton");
const helpModal = document.querySelector("#helpModal");
const helpClose = document.querySelector("#helpClose");
const result = document.querySelector("#result");
const resultTitle = document.querySelector("#resultTitle");
const resultCopy = document.querySelector("#resultCopy");
const shareButton = document.querySelector("#shareButton");
const scoreEl = document.querySelector("#score");
const bodyLabel = document.querySelector("#bodyLabel");
const buildList = document.querySelector("#buildList");
const parts = Array.from(document.querySelectorAll(".part"));

function player(name, feet, inches, number, ratings) {
  return {
    name,
    feet,
    inches,
    number: String(number).padStart(2, "0"),
    ratings,
  };
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function formatHeight(player) {
  return `${player.feet}'${player.inches}"`;
}

function pickTeamEra() {
  return teamEras[Math.floor(Math.random() * teamEras.length)];
}

function getTier(score) {
  if (score === 100) return "GOAT";
  if (score >= 97) return "GOAT Candidate";
  if (score >= 94) return "All-Time Legend";
  if (score >= 90) return "Hall of Famer";
  if (score >= 86) return "Franchise Icon";
  if (score >= 80) return "All-Star";
  return "Cult Hero";
}

function calculateScore() {
  const values = attributes.map((attribute) => build[attribute.key]?.score ?? 0);
  if (values.some((value) => value === 0)) return null;

  const average = values.reduce((sum, value) => sum + value, 0) / values.length;
  const weakPenalty = values.reduce((sum, value) => sum + Math.max(0, 88 - value) * 0.42, 0);
  const eliteBonus = values.filter((value) => value >= 98).length * 0.45;
  const balanceBonus = values.every((value) => value >= 90) ? 1.25 : 0;
  let score = Math.round(average - weakPenalty + eliteBonus + balanceBonus);

  const goatGate =
    values.every((value) => value >= 94) &&
    values.filter((value) => value >= 98).length >= 5 &&
    values.some((value) => value === 100) &&
    (build.height?.score ?? 0) >= 90;

  if (!goatGate) score = Math.min(score, 99);
  return Math.max(60, Math.min(100, score));
}

function renderBar(label, value) {
  return `
    <div class="bar">
      <span>${label}</span>
      <span class="track"><span class="fill" style="width: ${value}%"></span></span>
      <span>${value}</span>
    </div>
  `;
}

function renderBuildList() {
  buildList.innerHTML = "";
  attributes.forEach((attribute) => {
    const pick = build[attribute.key];
    const chip = document.createElement("div");
    chip.className = `build-chip${pick ? " filled" : ""}`;
    chip.innerHTML = `
      <strong>${attribute.label}</strong>
      <span>${pick ? `${pick.player.name} / ${pick.score}` : "Open"}</span>
    `;
    buildList.append(chip);
  });
}

function updateBody(lastPick) {
  parts.forEach((part) => {
    part.classList.toggle("filled", Boolean(build[part.dataset.attribute]));
  });

  if (!lastPick) {
    bodyLabel.textContent = "No attributes drafted yet";
    return;
  }

  bodyLabel.textContent = `${lastPick.attribute.label}: ${lastPick.player.name} (${lastPick.score})`;
}

function renderRound() {
  if (round >= runAttributes.length) {
    finish();
    return;
  }

  currentAttribute = runAttributes[round];
  currentTeamEra = pickTeamEra();
  roundLabel.textContent = `Round ${round + 1} of ${runAttributes.length}`;
  prompt.textContent = `${currentTeamEra.era} ${currentTeamEra.team} / ${currentAttribute.label}`;
  context.textContent = "";
  modeLabel.textContent = gameMode === "blind" ? "Blind mode: ratings reveal after your pick." : "Classic mode: ratings are visible before you pick.";
  cards.innerHTML = "";

  currentTeamEra.players.forEach((playerData) => {
    const score = playerData.ratings[currentAttribute.key];
    const isBlind = gameMode === "blind";
    const card = document.createElement("button");
    card.className = "card";
    card.type = "button";
    card.innerHTML = `
      <div class="card-art">
        <span class="jersey">${playerData.number}</span>
        <span class="attribute-score ${isBlind ? "is-hidden" : ""}">${currentAttribute.short}<span>${isBlind ? "??" : score}</span></span>
      </div>
      <div class="card-body">
        <h3>${playerData.name}</h3>
        <p class="meta">${formatHeight(playerData)} / ${currentTeamEra.era} ${currentTeamEra.team}</p>
        ${
          isBlind
            ? `<div class="blind-note">Ratings hidden until selected</div>`
            : `<div class="bars">
                ${renderBar(currentAttribute.label, score)}
                ${renderBar("Height", playerData.ratings.height)}
                ${renderBar("Clutch", playerData.ratings.clutch)}
              </div>`
        }
      </div>
    `;
    card.addEventListener("click", () => draft(playerData));
    cards.append(card);
  });
}

function draft(playerData) {
  const score = playerData.ratings[currentAttribute.key];
  const pick = {
    attribute: currentAttribute,
    player: playerData,
    teamEra: currentTeamEra,
    score,
  };

  build[currentAttribute.key] = pick;
  round += 1;
  scoreEl.textContent = calculateScore() ?? "--";
  renderBuildList();
  updateBody(pick);
  renderRound();
}

function makeArchetype(values) {
  const top = [...values].sort((a, b) => b.score - a.score).slice(0, 2);
  const first = top[0]?.attribute.label ?? "Balanced";
  const second = top[1]?.attribute.label ?? "Complete";
  return `${first}-${second} superbuild`;
}

function finish() {
  const score = calculateScore();
  const values = attributes.map((attribute) => build[attribute.key]);
  const tier = getTier(score);
  const archetype = makeArchetype(values);
  const weakSpot = [...values].sort((a, b) => a.score - b.score)[0];

  scoreEl.textContent = score;
  roundLabel.textContent = "Build complete";
  prompt.textContent = `${score} — ${tier}`;
  context.textContent =
    score === 100
      ? `You built the impossible player: ${archetype}.`
      : `${archetype}. Weakest link: ${weakSpot.attribute.label} (${weakSpot.score}).`;

  // Render all 9 picks as result cards
  cards.className = "cards is-result";
  cards.innerHTML = "";
  attributes.forEach((attribute) => {
    const pick = build[attribute.key];
    if (!pick) return;
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-art">
        <div class="jersey">${pick.player.number}</div>
        <div class="attribute-score">
          <span>${pick.score}</span>
          ${pick.attribute.label}
        </div>
      </div>
      <div class="card-body">
        <h3>${pick.player.name}</h3>
        <p class="meta">${pick.teamEra.era} ${pick.teamEra.team}</p>
      </div>
    `;
    cards.appendChild(card);
  });

  result.hidden = false;
  resultTitle.textContent = `${score}: ${tier}`;
  resultCopy.textContent =
    score === 100
      ? `You built the impossible player: ${archetype}. No weak spots, no era can stop this.`
      : `${archetype}. Your lowest was ${weakSpot.attribute.label} from ${weakSpot.player.name} at ${weakSpot.score}. Keep chasing.`;
}

function reset() {
  round = 0;
  build = {};
  runAttributes = shuffle(attributes);
  currentTeamEra = null;
  currentAttribute = null;
  result.hidden = true;
  scoreEl.textContent = "--";
  cards.className = "cards";
  renderBuildList();
  updateBody(null);
  renderRound();
}

function startGame(mode) {
  gameMode = mode;
  modeScreen.hidden = true;
  gameGrid.hidden = false;
  reset();
}

function goBack() {
  gameGrid.hidden = true;
  result.hidden = true;
  modeScreen.hidden = false;
  round = 0;
  build = {};
  currentTeamEra = null;
  currentAttribute = null;
  scoreEl.textContent = "--";
}

async function shareResult() {
  const score = calculateScore();
  const tier = getTier(score);
  const shareText = `I scored ${score} (${tier}) in GOAT Lab 🏀\nCan you build a 100?\n`;
  const shareUrl = "https://goat-lab.vercel.app";

  if (navigator.share) {
    try {
      await navigator.share({ title: "GOAT Lab", text: shareText, url: shareUrl });
      return;
    } catch (err) {
      if (err.name === "AbortError") return;
    }
  }

  // Clipboard fallback
  try {
    await navigator.clipboard.writeText(shareText + shareUrl);
    shareButton.textContent = "Copied!";
  } catch {
    shareButton.textContent = "Copy failed";
  }
  setTimeout(() => { shareButton.textContent = "Share"; }, 1400);
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => startGame(button.dataset.mode));
});
resetButton.addEventListener("click", reset);
backButton.addEventListener("click", goBack);
shareButton.addEventListener("click", shareResult);

helpButton.addEventListener("click", () => { helpModal.hidden = false; });
helpClose.addEventListener("click", () => { helpModal.hidden = true; });
helpModal.addEventListener("click", (e) => {
  if (e.target === helpModal) helpModal.hidden = true;
});

renderBuildList();
updateBody(null);

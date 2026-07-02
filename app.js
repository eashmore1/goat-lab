const attributes = [
  { key: "height", label: "Height", short: "HGT", body: "Frame" },
  { key: "shooting", label: "Shooting", short: "SHT", body: "Right hand" },
  { key: "finishing", label: "Finishing", short: "FIN", body: "Rim attack" },
  { key: "handles", label: "Handles", short: "HDL", body: "Off hand" },
  { key: "passing", label: "Passing", short: "PAS", body: "Vision" },
  { key: "defense", label: "Defense", short: "DEF", body: "Core" },
  { key: "rebounding", label: "Rebounding", short: "REB", body: "Shoulders" },
  { key: "athleticism", label: "Athleticism", short: "ATH", body: "Legs" },
  { key: "iq", label: "IQ", short: "IQ", body: "Mind" },
];

const teamEras = [
  {
    era: "1960s",
    team: "Celtics",
    note: "Russell's dynasty gives you defense, boards, and winner DNA.",
    players: [
      player("Bill Russell", 6, 11, 6, { height: 96, shooting: 58, finishing: 91, handles: 66, passing: 82, defense: 100, rebounding: 100, athleticism: 92, iq: 96 }),
      player("John Havlicek", 6, 5, 17, { height: 80, shooting: 82, finishing: 83, handles: 83, passing: 80, defense: 86, rebounding: 78, athleticism: 90, iq: 88 }),
      player("Sam Jones", 6, 4, 24, { height: 77, shooting: 83, finishing: 86, handles: 82, passing: 76, defense: 78, rebounding: 66, athleticism: 84, iq: 88 }),
      player("K.C. Jones", 6, 1, 25, { height: 68, shooting: 62, finishing: 70, handles: 82, passing: 86, defense: 89, rebounding: 62, athleticism: 82, iq: 82 }),
      player("Tom Heinsohn", 6, 7, 15, { height: 84, shooting: 74, finishing: 86, handles: 65, passing: 72, defense: 76, rebounding: 88, athleticism: 78, iq: 84 }),
      player("Satch Sanders", 6, 6, 16, { height: 82, shooting: 66, finishing: 74, handles: 64, passing: 70, defense: 90, rebounding: 82, athleticism: 80, iq: 80 }),
      player("Bailey Howell", 6, 7, 18, { height: 84, shooting: 76, finishing: 84, handles: 66, passing: 72, defense: 78, rebounding: 86, athleticism: 76, iq: 82 }),
      player("Don Nelson", 6, 6, 19, { height: 82, shooting: 80, finishing: 76, handles: 70, passing: 74, defense: 78, rebounding: 72, athleticism: 72, iq: 86 }),
      player("Bob Cousy", 6, 1, 14, { height: 68, shooting: 78, finishing: 82, handles: 91, passing: 99, defense: 78, rebounding: 64, athleticism: 86, iq: 86 }),
      player("Bill Sharman", 6, 1, 21, { height: 68, shooting: 86, finishing: 80, handles: 80, passing: 78, defense: 78, rebounding: 58, athleticism: 78, iq: 90 }),
      player("Frank Ramsey", 6, 3, 23, { height: 74, shooting: 82, finishing: 84, handles: 80, passing: 76, defense: 80, rebounding: 66, athleticism: 80, iq: 90 }),
      player("Larry Siegfried", 6, 3, 20, { height: 74, shooting: 84, finishing: 78, handles: 82, passing: 80, defense: 82, rebounding: 60, athleticism: 78, iq: 84 }),
      player("Willie Naulls", 6, 6, 12, { height: 82, shooting: 84, finishing: 82, handles: 70, passing: 72, defense: 76, rebounding: 82, athleticism: 78, iq: 80 }),
      player("Wayne Embry", 6, 8, 28, { height: 86, shooting: 64, finishing: 80, handles: 58, passing: 72, defense: 84, rebounding: 86, athleticism: 76, iq: 76 }),
      player("Mel Counts", 7, 0, 44, { height: 98, shooting: 70, finishing: 78, handles: 60, passing: 70, defense: 80, rebounding: 82, athleticism: 70, iq: 74 }),
    ],
  },
  {
    era: "1960s",
    team: "Lakers",
    note: "Baylor and West dragged L.A. to the Finals again and again. Elite scoring, clutch, and athleticism.",
    players: [
      player("Elgin Baylor", 6, 5, 22, { height: 80, shooting: 84, finishing: 89, handles: 80, passing: 84, defense: 80, rebounding: 88, athleticism: 89, iq: 92 }),
      player("Jerry West", 6, 2, 44, { height: 71, shooting: 92, finishing: 87, handles: 86, passing: 83, defense: 86, rebounding: 70, athleticism: 90, iq: 98 }),
      player("Gail Goodrich", 6, 1, 25, { height: 68, shooting: 86, finishing: 84, handles: 88, passing: 82, defense: 72, rebounding: 56, athleticism: 84, iq: 86 }),
      player("Rudy LaRusso", 6, 7, 35, { height: 84, shooting: 76, finishing: 82, handles: 68, passing: 72, defense: 84, rebounding: 82, athleticism: 80, iq: 80 }),
      player("Dick Barnett", 6, 4, 12, { height: 77, shooting: 84, finishing: 82, handles: 82, passing: 76, defense: 80, rebounding: 62, athleticism: 82, iq: 84 }),
      player("Frank Selvy", 6, 2, 14, { height: 71, shooting: 82, finishing: 78, handles: 80, passing: 78, defense: 72, rebounding: 60, athleticism: 78, iq: 82 }),
      player("LeRoy Ellis", 6, 10, 20, { height: 94, shooting: 70, finishing: 78, handles: 60, passing: 66, defense: 82, rebounding: 84, athleticism: 80, iq: 74 }),
      player("Darrall Imhoff", 6, 10, 18, { height: 94, shooting: 64, finishing: 74, handles: 58, passing: 66, defense: 82, rebounding: 82, athleticism: 72, iq: 70 }),
      player("Tommy Hawkins", 6, 5, 16, { height: 80, shooting: 70, finishing: 78, handles: 70, passing: 70, defense: 80, rebounding: 78, athleticism: 84, iq: 74 }),
      player("Walt Hazzard", 6, 2, 42, { height: 71, shooting: 74, finishing: 78, handles: 88, passing: 86, defense: 76, rebounding: 58, athleticism: 82, iq: 78 }),
      player("Archie Clark", 6, 2, 21, { height: 71, shooting: 82, finishing: 82, handles: 86, passing: 82, defense: 80, rebounding: 60, athleticism: 86, iq: 82 }),
      player("John Egan", 6, 0, 15, { height: 66, shooting: 76, finishing: 74, handles: 82, passing: 82, defense: 72, rebounding: 52, athleticism: 76, iq: 76 }),
      player("Jim Krebs", 6, 8, 25, { height: 86, shooting: 74, finishing: 76, handles: 60, passing: 66, defense: 74, rebounding: 78, athleticism: 70, iq: 72 }),
      player("Rod Hundley", 6, 4, 33, { height: 77, shooting: 76, finishing: 76, handles: 84, passing: 82, defense: 70, rebounding: 58, athleticism: 80, iq: 76 }),
      player("Gene Wiley", 6, 10, 44, { height: 94, shooting: 58, finishing: 72, handles: 56, passing: 64, defense: 84, rebounding: 84, athleticism: 80, iq: 70 }),
    ],
  },
  {
    era: "1960s",
    team: "Royals",
    note: "Cincinnati ran through Oscar Robertson — the original triple-double machine — and Jerry Lucas on the glass.",
    players: [
      player("Oscar Robertson", 6, 5, 14, { height: 80, shooting: 86, finishing: 85, handles: 89, passing: 96, defense: 78, rebounding: 86, athleticism: 88, iq: 95 }),
      player("Jerry Lucas", 6, 8, 16, { height: 86, shooting: 82, finishing: 78, handles: 66, passing: 80, defense: 80, rebounding: 90, athleticism: 78, iq: 84 }),
      player("Jack Twyman", 6, 6, 27, { height: 82, shooting: 86, finishing: 86, handles: 72, passing: 74, defense: 74, rebounding: 76, athleticism: 80, iq: 86 }),
      player("Wayne Embry", 6, 8, 15, { height: 86, shooting: 66, finishing: 82, handles: 60, passing: 74, defense: 84, rebounding: 88, athleticism: 78, iq: 78 }),
      player("Adrian Smith", 6, 1, 12, { height: 68, shooting: 82, finishing: 78, handles: 82, passing: 78, defense: 76, rebounding: 56, athleticism: 80, iq: 82 }),
      player("Arlen Bockhorn", 6, 3, 10, { height: 74, shooting: 78, finishing: 78, handles: 82, passing: 80, defense: 78, rebounding: 60, athleticism: 80, iq: 78 }),
      player("Bob Boozer", 6, 8, 25, { height: 86, shooting: 78, finishing: 84, handles: 66, passing: 72, defense: 78, rebounding: 84, athleticism: 80, iq: 80 }),
      player("Happy Hairston", 6, 7, 52, { height: 84, shooting: 74, finishing: 82, handles: 66, passing: 70, defense: 80, rebounding: 84, athleticism: 82, iq: 78 }),
      player("Connie Dierking", 6, 9, 34, { height: 90, shooting: 74, finishing: 80, handles: 60, passing: 66, defense: 78, rebounding: 80, athleticism: 72, iq: 74 }),
      player("Tom Van Arsdale", 6, 5, 5, { height: 80, shooting: 80, finishing: 82, handles: 78, passing: 74, defense: 80, rebounding: 70, athleticism: 84, iq: 80 }),
      player("Dick Van Arsdale", 6, 5, 4, { height: 80, shooting: 80, finishing: 82, handles: 80, passing: 76, defense: 82, rebounding: 68, athleticism: 84, iq: 80 }),
      player("Jay Arnette", 6, 2, 11, { height: 71, shooting: 76, finishing: 74, handles: 80, passing: 76, defense: 74, rebounding: 56, athleticism: 78, iq: 72 }),
      player("Bud Olsen", 6, 8, 16, { height: 86, shooting: 68, finishing: 76, handles: 58, passing: 66, defense: 76, rebounding: 78, athleticism: 72, iq: 70 }),
      player("Larry Staverman", 6, 7, 20, { height: 84, shooting: 70, finishing: 76, handles: 60, passing: 66, defense: 74, rebounding: 76, athleticism: 70, iq: 70 }),
      player("Walt Wesley", 6, 11, 11, { height: 96, shooting: 66, finishing: 76, handles: 56, passing: 62, defense: 78, rebounding: 80, athleticism: 74, iq: 70 }),
    ],
  },
  {
    era: "1960s",
    team: "Hawks",
    note: "St. Louis was a perennial contender — Pettit's scoring and boards, Wilkens running the show, Hudson and Caldwell on the wings.",
    players: [
      player("Bob Pettit", 6, 9, 9, { height: 90, shooting: 84, finishing: 90, handles: 70, passing: 74, defense: 82, rebounding: 94, athleticism: 84, iq: 92 }),
      player("Lenny Wilkens", 6, 1, 22, { height: 68, shooting: 78, finishing: 82, handles: 84, passing: 86, defense: 86, rebounding: 62, athleticism: 84, iq: 92 }),
      player("Cliff Hagan", 6, 4, 16, { height: 77, shooting: 84, finishing: 86, handles: 78, passing: 76, defense: 76, rebounding: 74, athleticism: 82, iq: 86 }),
      player("Zelmo Beaty", 6, 9, 31, { height: 90, shooting: 74, finishing: 84, handles: 62, passing: 68, defense: 84, rebounding: 88, athleticism: 80, iq: 82 }),
      player("Bill Bridges", 6, 6, 32, { height: 82, shooting: 70, finishing: 80, handles: 64, passing: 72, defense: 86, rebounding: 90, athleticism: 82, iq: 80 }),
      player("Lou Hudson", 6, 5, 23, { height: 80, shooting: 88, finishing: 86, handles: 80, passing: 76, defense: 76, rebounding: 68, athleticism: 86, iq: 84 }),
      player("Joe Caldwell", 6, 5, 15, { height: 80, shooting: 78, finishing: 84, handles: 78, passing: 74, defense: 86, rebounding: 70, athleticism: 92, iq: 80 }),
      player("Richie Guerin", 6, 4, 9, { height: 77, shooting: 80, finishing: 82, handles: 84, passing: 84, defense: 80, rebounding: 64, athleticism: 80, iq: 84 }),
      player("Paul Silas", 6, 7, 35, { height: 84, shooting: 62, finishing: 76, handles: 60, passing: 70, defense: 86, rebounding: 90, athleticism: 82, iq: 80 }),
      player("Clyde Lovellette", 6, 9, 34, { height: 90, shooting: 82, finishing: 84, handles: 64, passing: 66, defense: 72, rebounding: 82, athleticism: 70, iq: 80 }),
      player("John Barnhill", 6, 1, 7, { height: 68, shooting: 76, finishing: 76, handles: 82, passing: 80, defense: 82, rebounding: 58, athleticism: 80, iq: 76 }),
      player("Gene Tormohlen", 6, 9, 11, { height: 90, shooting: 64, finishing: 74, handles: 58, passing: 66, defense: 78, rebounding: 80, athleticism: 72, iq: 70 }),
      player("Jim Davis", 6, 9, 24, { height: 90, shooting: 68, finishing: 78, handles: 60, passing: 66, defense: 80, rebounding: 82, athleticism: 76, iq: 72 }),
      player("Don Ohl", 6, 3, 12, { height: 74, shooting: 84, finishing: 80, handles: 82, passing: 78, defense: 76, rebounding: 58, athleticism: 82, iq: 82 }),
      player("Chico Vaughn", 6, 2, 20, { height: 71, shooting: 78, finishing: 78, handles: 82, passing: 78, defense: 76, rebounding: 58, athleticism: 82, iq: 76 }),
    ],
  },
  {
    era: "1960s",
    team: "76ers",
    note: "The 1967 champs may be the best team of the decade — Wilt as a passing hub, Greer, Cunningham, Walker, and a deep, switchable roster.",
    players: [
      player("Wilt Chamberlain", 7, 1, 13, { height: 100, shooting: 70, finishing: 97, handles: 70, passing: 84, defense: 91, rebounding: 100, athleticism: 96, iq: 88 }),
      player("Hal Greer", 6, 2, 15, { height: 71, shooting: 88, finishing: 84, handles: 84, passing: 82, defense: 84, rebounding: 64, athleticism: 86, iq: 88 }),
      player("Billy Cunningham", 6, 6, 32, { height: 82, shooting: 80, finishing: 88, handles: 82, passing: 80, defense: 80, rebounding: 84, athleticism: 90, iq: 86 }),
      player("Chet Walker", 6, 6, 25, { height: 82, shooting: 84, finishing: 86, handles: 80, passing: 76, defense: 78, rebounding: 76, athleticism: 82, iq: 86 }),
      player("Luke Jackson", 6, 9, 54, { height: 90, shooting: 70, finishing: 82, handles: 62, passing: 72, defense: 84, rebounding: 88, athleticism: 80, iq: 80 }),
      player("Wali Jones", 6, 2, 24, { height: 71, shooting: 80, finishing: 80, handles: 84, passing: 80, defense: 82, rebounding: 58, athleticism: 84, iq: 82 }),
      player("Larry Costello", 6, 1, 21, { height: 68, shooting: 82, finishing: 80, handles: 84, passing: 82, defense: 82, rebounding: 58, athleticism: 78, iq: 84 }),
      player("Dolph Schayes", 6, 8, 4, { height: 86, shooting: 84, finishing: 84, handles: 70, passing: 78, defense: 80, rebounding: 88, athleticism: 76, iq: 90 }),
      player("Dave Gambee", 6, 7, 20, { height: 84, shooting: 80, finishing: 80, handles: 66, passing: 68, defense: 74, rebounding: 78, athleticism: 74, iq: 78 }),
      player("Johnny Kerr", 6, 9, 10, { height: 90, shooting: 76, finishing: 82, handles: 66, passing: 80, defense: 78, rebounding: 84, athleticism: 72, iq: 80 }),
      player("Lee Shaffer", 6, 7, 32, { height: 84, shooting: 80, finishing: 80, handles: 70, passing: 70, defense: 74, rebounding: 76, athleticism: 78, iq: 78 }),
      player("Matt Guokas", 6, 5, 12, { height: 80, shooting: 76, finishing: 78, handles: 82, passing: 82, defense: 80, rebounding: 62, athleticism: 80, iq: 78 }),
      player("Bill Melchionni", 6, 1, 25, { height: 68, shooting: 78, finishing: 76, handles: 82, passing: 80, defense: 76, rebounding: 54, athleticism: 80, iq: 76 }),
      player("Al Bianchi", 6, 3, 12, { height: 74, shooting: 78, finishing: 78, handles: 82, passing: 80, defense: 80, rebounding: 58, athleticism: 78, iq: 76 }),
      player("Bob Weiss", 6, 2, 20, { height: 71, shooting: 78, finishing: 78, handles: 84, passing: 82, defense: 82, rebounding: 56, athleticism: 80, iq: 78 }),
    ],
  },
  {
    era: "1970s",
    team: "Bucks",
    note: "A young Kareem plus Oscar makes this a top-heavy but dangerous roll.",
    players: [
      player("Kareem Abdul-Jabbar", 7, 2, 33, { height: 100, shooting: 82, finishing: 100, handles: 70, passing: 82, defense: 90, rebounding: 91, athleticism: 88, iq: 94 }),
      player("Oscar Robertson", 6, 5, 1, { height: 80, shooting: 86, finishing: 85, handles: 89, passing: 92, defense: 82, rebounding: 86, athleticism: 84, iq: 95 }),
      player("Bob Dandridge", 6, 6, 10, { height: 82, shooting: 84, finishing: 82, handles: 80, passing: 78, defense: 78, rebounding: 78, athleticism: 84, iq: 88 }),
      player("Lucius Allen", 6, 2, 7, { height: 71, shooting: 81, finishing: 82, handles: 80, passing: 78, defense: 76, rebounding: 60, athleticism: 84, iq: 80 }),
      player("Jon McGlocklin", 6, 5, 14, { height: 80, shooting: 83, finishing: 76, handles: 72, passing: 76, defense: 70, rebounding: 62, athleticism: 68, iq: 84 }),
      player("Brian Winters", 6, 4, 32, { height: 77, shooting: 82, finishing: 79, handles: 80, passing: 79, defense: 72, rebounding: 60, athleticism: 70, iq: 86 }),
      player("Junior Bridgeman", 6, 5, 2, { height: 80, shooting: 82, finishing: 82, handles: 78, passing: 76, defense: 76, rebounding: 64, athleticism: 78, iq: 82 }),
      player("Marques Johnson", 6, 7, 8, { height: 84, shooting: 82, finishing: 85, handles: 82, passing: 80, defense: 80, rebounding: 82, athleticism: 82, iq: 88 }),
      player("Greg Smith", 6, 5, 4, { height: 80, shooting: 66, finishing: 78, handles: 66, passing: 72, defense: 82, rebounding: 80, athleticism: 82, iq: 74 }),
      player("Dick Cunningham", 6, 10, 34, { height: 94, shooting: 60, finishing: 74, handles: 54, passing: 64, defense: 80, rebounding: 84, athleticism: 70, iq: 70 }),
      player("Terry Driscoll", 6, 8, 25, { height: 86, shooting: 68, finishing: 76, handles: 60, passing: 66, defense: 78, rebounding: 80, athleticism: 74, iq: 72 }),
      player("Mickey Davis", 6, 7, 21, { height: 84, shooting: 82, finishing: 80, handles: 72, passing: 74, defense: 72, rebounding: 70, athleticism: 76, iq: 78 }),
      player("Gary Brokaw", 6, 3, 25, { height: 74, shooting: 78, finishing: 78, handles: 82, passing: 80, defense: 76, rebounding: 56, athleticism: 80, iq: 76 }),
      player("Kevin Restani", 6, 9, 42, { height: 90, shooting: 74, finishing: 78, handles: 62, passing: 68, defense: 76, rebounding: 78, athleticism: 74, iq: 74 }),
      player("Jim Price", 6, 2, 18, { height: 71, shooting: 80, finishing: 80, handles: 84, passing: 82, defense: 82, rebounding: 58, athleticism: 82, iq: 80 }),
    ],
  },
  {
    era: "1980s",
    team: "Lakers",
    note: "Showtime is packed with passing, finishing, size, and transition force.",
    players: [
      player("Magic Johnson", 6, 9, 32, { height: 90, shooting: 84, finishing: 88, handles: 91, passing: 100, defense: 76, rebounding: 82, athleticism: 80, iq: 98 }),
      player("Kareem Abdul-Jabbar", 7, 2, 33, { height: 100, shooting: 84, finishing: 97, handles: 70, passing: 82, defense: 86, rebounding: 86, athleticism: 78, iq: 94 }),
      player("James Worthy", 6, 9, 42, { height: 90, shooting: 80, finishing: 89, handles: 82, passing: 78, defense: 82, rebounding: 78, athleticism: 86, iq: 85 }),
      player("Byron Scott", 6, 3, 4, { height: 74, shooting: 82, finishing: 82, handles: 82, passing: 78, defense: 76, rebounding: 60, athleticism: 86, iq: 84 }),
      player("Michael Cooper", 6, 5, 21, { height: 80, shooting: 82, finishing: 76, handles: 78, passing: 82, defense: 90, rebounding: 66, athleticism: 86, iq: 88 }),
      player("A.C. Green", 6, 9, 45, { height: 90, shooting: 70, finishing: 82, handles: 62, passing: 68, defense: 78, rebounding: 83, athleticism: 80, iq: 78 }),
      player("Norm Nixon", 6, 2, 10, { height: 71, shooting: 82, finishing: 84, handles: 84, passing: 82, defense: 74, rebounding: 56, athleticism: 86, iq: 84 }),
      player("Mychal Thompson", 6, 10, 43, { height: 94, shooting: 72, finishing: 84, handles: 62, passing: 72, defense: 84, rebounding: 84, athleticism: 76, iq: 80 }),
      player("Jamaal Wilkes", 6, 6, 52, { height: 82, shooting: 84, finishing: 86, handles: 80, passing: 76, defense: 78, rebounding: 68, athleticism: 84, iq: 84 }),
      player("Bob McAdoo", 6, 9, 11, { height: 90, shooting: 84, finishing: 86, handles: 72, passing: 72, defense: 76, rebounding: 80, athleticism: 82, iq: 84 }),
      player("Kurt Rambis", 6, 8, 31, { height: 86, shooting: 60, finishing: 76, handles: 60, passing: 68, defense: 82, rebounding: 82, athleticism: 78, iq: 74 }),
      player("Mike McGee", 6, 5, 40, { height: 80, shooting: 82, finishing: 80, handles: 74, passing: 68, defense: 70, rebounding: 60, athleticism: 84, iq: 76 }),
      player("Wes Matthews", 6, 1, 25, { height: 68, shooting: 78, finishing: 78, handles: 84, passing: 80, defense: 74, rebounding: 54, athleticism: 82, iq: 78 }),
      player("Billy Thompson", 6, 7, 55, { height: 84, shooting: 70, finishing: 80, handles: 68, passing: 70, defense: 80, rebounding: 74, athleticism: 88, iq: 74 }),
      player("Mike Smrek", 7, 0, 34, { height: 98, shooting: 58, finishing: 74, handles: 50, passing: 58, defense: 80, rebounding: 74, athleticism: 68, iq: 66 }),
    ],
  },
  {
    era: "1980s",
    team: "Celtics",
    note: "Bird-era Boston is a cheat code for shooting, passing, rebounding, and IQ.",
    players: [
      player("Larry Bird", 6, 9, 33, { height: 90, shooting: 98, finishing: 86, handles: 86, passing: 91, defense: 84, rebounding: 87, athleticism: 74, iq: 99 }),
      player("Kevin McHale", 6, 10, 32, { height: 94, shooting: 84, finishing: 93, handles: 76, passing: 74, defense: 87, rebounding: 86, athleticism: 78, iq: 90 }),
      player("Robert Parish", 7, 0, "00", { height: 98, shooting: 78, finishing: 84, handles: 62, passing: 70, defense: 82, rebounding: 86, athleticism: 76, iq: 86 }),
      player("Dennis Johnson", 6, 4, 3, { height: 77, shooting: 78, finishing: 82, handles: 86, passing: 82, defense: 89, rebounding: 68, athleticism: 80, iq: 92 }),
      player("Danny Ainge", 6, 4, 44, { height: 77, shooting: 83, finishing: 75, handles: 82, passing: 82, defense: 74, rebounding: 60, athleticism: 72, iq: 84 }),
      player("Cedric Maxwell", 6, 8, 31, { height: 86, shooting: 76, finishing: 90, handles: 74, passing: 75, defense: 80, rebounding: 82, athleticism: 78, iq: 89 }),
      player("Bill Walton", 6, 11, 5, { height: 96, shooting: 74, finishing: 88, handles: 68, passing: 88, defense: 92, rebounding: 92, athleticism: 72, iq: 93 }),
      player("Scott Wedman", 6, 7, 8, { height: 84, shooting: 86, finishing: 78, handles: 72, passing: 72, defense: 74, rebounding: 68, athleticism: 72, iq: 82 }),
      player("Nate Archibald", 6, 1, 7, { height: 68, shooting: 82, finishing: 82, handles: 87, passing: 85, defense: 72, rebounding: 54, athleticism: 82, iq: 84 }),
      player("Gerald Henderson", 6, 2, 43, { height: 71, shooting: 78, finishing: 80, handles: 84, passing: 80, defense: 82, rebounding: 56, athleticism: 84, iq: 82 }),
      player("M.L. Carr", 6, 6, 30, { height: 82, shooting: 76, finishing: 78, handles: 74, passing: 72, defense: 82, rebounding: 66, athleticism: 82, iq: 80 }),
      player("Rick Robey", 6, 11, 53, { height: 96, shooting: 68, finishing: 80, handles: 60, passing: 68, defense: 76, rebounding: 80, athleticism: 74, iq: 74 }),
      player("Jerry Sichting", 6, 1, 12, { height: 68, shooting: 84, finishing: 76, handles: 80, passing: 78, defense: 74, rebounding: 52, athleticism: 72, iq: 80 }),
      player("Reggie Lewis", 6, 7, 35, { height: 84, shooting: 82, finishing: 84, handles: 82, passing: 74, defense: 82, rebounding: 68, athleticism: 88, iq: 82 }),
      player("Greg Kite", 6, 11, 50, { height: 96, shooting: 54, finishing: 72, handles: 50, passing: 58, defense: 78, rebounding: 76, athleticism: 70, iq: 66 }),
    ],
  },
  {
    era: "1990s",
    team: "Bulls",
    note: "The Jordan Bulls can solve almost any category if the roll breaks right.",
    players: [
      player("Michael Jordan", 6, 6, 23, { height: 82, shooting: 92, finishing: 99, handles: 96, passing: 84, defense: 98, rebounding: 76, athleticism: 99, iq: 95 }),
      player("Scottie Pippen", 6, 8, 33, { height: 86, shooting: 83, finishing: 87, handles: 88, passing: 87, defense: 90, rebounding: 86, athleticism: 86, iq: 92 }),
      player("Dennis Rodman", 6, 7, 91, { height: 84, shooting: 52, finishing: 72, handles: 62, passing: 72, defense: 94, rebounding: 100, athleticism: 86, iq: 84 }),
      player("Toni Kukoc", 6, 10, 7, { height: 90, shooting: 82, finishing: 83, handles: 82, passing: 84, defense: 72, rebounding: 76, athleticism: 76, iq: 86 }),
      player("Ron Harper", 6, 6, 9, { height: 82, shooting: 76, finishing: 79, handles: 84, passing: 80, defense: 82, rebounding: 70, athleticism: 82, iq: 80 }),
      player("Steve Kerr", 6, 3, 25, { height: 74, shooting: 93, finishing: 65, handles: 72, passing: 74, defense: 62, rebounding: 50, athleticism: 58, iq: 86 }),
      player("Luc Longley", 7, 2, 13, { height: 100, shooting: 68, finishing: 78, handles: 55, passing: 70, defense: 76, rebounding: 78, athleticism: 58, iq: 72 }),
      player("Horace Grant", 6, 10, 54, { height: 94, shooting: 74, finishing: 84, handles: 62, passing: 72, defense: 80, rebounding: 82, athleticism: 82, iq: 80 }),
      player("B.J. Armstrong", 6, 2, 10, { height: 71, shooting: 84, finishing: 78, handles: 84, passing: 80, defense: 74, rebounding: 52, athleticism: 78, iq: 82 }),
      player("John Paxson", 6, 2, 5, { height: 71, shooting: 88, finishing: 74, handles: 78, passing: 80, defense: 72, rebounding: 50, athleticism: 70, iq: 88 }),
      player("Bill Cartwright", 7, 1, 24, { height: 100, shooting: 66, finishing: 80, handles: 58, passing: 68, defense: 82, rebounding: 80, athleticism: 66, iq: 78 }),
      player("Will Perdue", 7, 0, 32, { height: 98, shooting: 60, finishing: 76, handles: 52, passing: 62, defense: 78, rebounding: 80, athleticism: 68, iq: 68 }),
      player("Scott Williams", 6, 10, 42, { height: 94, shooting: 66, finishing: 78, handles: 58, passing: 64, defense: 80, rebounding: 80, athleticism: 80, iq: 70 }),
      player("Stacey King", 6, 11, 21, { height: 96, shooting: 68, finishing: 78, handles: 60, passing: 64, defense: 74, rebounding: 74, athleticism: 76, iq: 70 }),
      player("Bill Wennington", 7, 0, 34, { height: 98, shooting: 74, finishing: 76, handles: 58, passing: 64, defense: 76, rebounding: 74, athleticism: 64, iq: 72 }),
    ],
  },
  {
    era: "1990s",
    team: "Rockets",
    note: "Hakeem gives this pool legendary defense, post scoring, and big-man skill.",
    players: [
      player("Hakeem Olajuwon", 7, 0, 34, { height: 98, shooting: 82, finishing: 98, handles: 84, passing: 82, defense: 100, rebounding: 96, athleticism: 94, iq: 90 }),
      player("Clyde Drexler", 6, 7, 22, { height: 84, shooting: 86, finishing: 89, handles: 88, passing: 86, defense: 78, rebounding: 82, athleticism: 88, iq: 92 }),
      player("Kenny Smith", 6, 3, 30, { height: 74, shooting: 80, finishing: 78, handles: 84, passing: 86, defense: 68, rebounding: 55, athleticism: 80, iq: 84 }),
      player("Robert Horry", 6, 10, 25, { height: 94, shooting: 80, finishing: 78, handles: 72, passing: 76, defense: 84, rebounding: 78, athleticism: 82, iq: 86 }),
      player("Sam Cassell", 6, 3, 10, { height: 74, shooting: 84, finishing: 82, handles: 84, passing: 80, defense: 72, rebounding: 58, athleticism: 76, iq: 88 }),
      player("Otis Thorpe", 6, 10, 33, { height: 94, shooting: 65, finishing: 84, handles: 62, passing: 68, defense: 80, rebounding: 90, athleticism: 78, iq: 78 }),
      player("Vernon Maxwell", 6, 4, 11, { height: 77, shooting: 78, finishing: 82, handles: 84, passing: 76, defense: 78, rebounding: 58, athleticism: 84, iq: 88 }),
      player("Mario Elie", 6, 5, 17, { height: 80, shooting: 82, finishing: 76, handles: 72, passing: 74, defense: 82, rebounding: 62, athleticism: 76, iq: 88 }),
      player("Charles Barkley", 6, 6, 4, { height: 82, shooting: 78, finishing: 86, handles: 80, passing: 80, defense: 76, rebounding: 84, athleticism: 84, iq: 84 }),
      player("Scottie Pippen", 6, 8, 33, { height: 86, shooting: 80, finishing: 86, handles: 86, passing: 87, defense: 90, rebounding: 82, athleticism: 86, iq: 92 }),
      player("Eddie Johnson", 6, 7, 8, { height: 84, shooting: 80, finishing: 84, handles: 78, passing: 72, defense: 70, rebounding: 64, athleticism: 78, iq: 86 }),
      player("Matt Maloney", 6, 3, 4, { height: 74, shooting: 84, finishing: 74, handles: 80, passing: 80, defense: 74, rebounding: 52, athleticism: 72, iq: 80 }),
      player("Carl Herrera", 6, 9, 31, { height: 90, shooting: 70, finishing: 80, handles: 66, passing: 68, defense: 80, rebounding: 76, athleticism: 84, iq: 72 }),
      player("Chucky Brown", 6, 8, 52, { height: 86, shooting: 72, finishing: 80, handles: 66, passing: 66, defense: 78, rebounding: 74, athleticism: 80, iq: 72 }),
      player("Brent Price", 6, 1, 2, { height: 68, shooting: 80, finishing: 78, handles: 84, passing: 82, defense: 74, rebounding: 54, athleticism: 78, iq: 78 }),
    ],
  },
  {
    era: "2000s",
    team: "Lakers",
    note: "Shaq and Kobe create elite spikes, but the wrong category can still bite.",
    players: [
      player("Kobe Bryant", 6, 6, 8, { height: 82, shooting: 94, finishing: 96, handles: 94, passing: 82, defense: 96, rebounding: 68, athleticism: 96, iq: 92 }),
      player("Shaquille O'Neal", 7, 1, 34, { height: 99, shooting: 48, finishing: 100, handles: 64, passing: 78, defense: 92, rebounding: 96, athleticism: 90, iq: 92 }),
      player("Pau Gasol", 7, 0, 16, { height: 98, shooting: 82, finishing: 87, handles: 76, passing: 82, defense: 84, rebounding: 90, athleticism: 72, iq: 88 }),
      player("Derek Fisher", 6, 1, 2, { height: 68, shooting: 84, finishing: 72, handles: 80, passing: 80, defense: 78, rebounding: 55, athleticism: 70, iq: 92 }),
      player("Lamar Odom", 6, 10, 7, { height: 94, shooting: 78, finishing: 86, handles: 82, passing: 82, defense: 80, rebounding: 82, athleticism: 84, iq: 82 }),
      player("Robert Horry", 6, 10, 5, { height: 94, shooting: 78, finishing: 76, handles: 70, passing: 76, defense: 82, rebounding: 76, athleticism: 76, iq: 86 }),
      player("Rick Fox", 6, 7, 17, { height: 84, shooting: 80, finishing: 76, handles: 74, passing: 76, defense: 84, rebounding: 66, athleticism: 74, iq: 84 }),
      player("Andrew Bynum", 7, 0, 17, { height: 98, shooting: 58, finishing: 88, handles: 52, passing: 60, defense: 82, rebounding: 88, athleticism: 72, iq: 74 }),
      player("Ron Artest", 6, 7, 37, { height: 84, shooting: 74, finishing: 82, handles: 78, passing: 74, defense: 90, rebounding: 68, athleticism: 82, iq: 82 }),
      player("Trevor Ariza", 6, 8, 3, { height: 86, shooting: 78, finishing: 80, handles: 76, passing: 72, defense: 84, rebounding: 66, athleticism: 88, iq: 78 }),
      player("Sasha Vujacic", 6, 7, 18, { height: 84, shooting: 82, finishing: 74, handles: 76, passing: 70, defense: 72, rebounding: 54, athleticism: 76, iq: 78 }),
      player("Luke Walton", 6, 8, 4, { height: 86, shooting: 74, finishing: 76, handles: 78, passing: 84, defense: 72, rebounding: 66, athleticism: 66, iq: 74 }),
      player("Brian Shaw", 6, 6, 20, { height: 82, shooting: 74, finishing: 78, handles: 80, passing: 80, defense: 78, rebounding: 64, athleticism: 78, iq: 80 }),
      player("Jordan Farmar", 6, 2, 1, { height: 71, shooting: 80, finishing: 78, handles: 84, passing: 80, defense: 74, rebounding: 54, athleticism: 84, iq: 76 }),
      player("Devean George", 6, 8, 3, { height: 86, shooting: 76, finishing: 78, handles: 70, passing: 68, defense: 78, rebounding: 66, athleticism: 84, iq: 72 }),
    ],
  },
  {
    era: "2000s",
    team: "Spurs",
    note: "A disciplined pool with Duncan's defense and Manu/Parker's creation.",
    players: [
      player("Tim Duncan", 6, 11, 21, { height: 96, shooting: 80, finishing: 95, handles: 72, passing: 84, defense: 99, rebounding: 98, athleticism: 80, iq: 96 }),
      player("Manu Ginobili", 6, 6, 20, { height: 82, shooting: 88, finishing: 88, handles: 87, passing: 85, defense: 84, rebounding: 72, athleticism: 86, iq: 94 }),
      player("Tony Parker", 6, 2, 9, { height: 71, shooting: 82, finishing: 91, handles: 86, passing: 85, defense: 70, rebounding: 52, athleticism: 90, iq: 88 }),
      player("David Robinson", 7, 1, 50, { height: 99, shooting: 76, finishing: 88, handles: 68, passing: 76, defense: 92, rebounding: 94, athleticism: 90, iq: 86 }),
      player("Bruce Bowen", 6, 7, 12, { height: 84, shooting: 82, finishing: 66, handles: 62, passing: 68, defense: 91, rebounding: 58, athleticism: 74, iq: 84 }),
      player("Robert Horry", 6, 10, 5, { height: 94, shooting: 78, finishing: 76, handles: 70, passing: 76, defense: 82, rebounding: 76, athleticism: 76, iq: 86 }),
      player("Stephen Jackson", 6, 8, 3, { height: 86, shooting: 82, finishing: 82, handles: 82, passing: 78, defense: 82, rebounding: 68, athleticism: 82, iq: 86 }),
      player("Michael Finley", 6, 7, 4, { height: 84, shooting: 84, finishing: 82, handles: 78, passing: 76, defense: 74, rebounding: 66, athleticism: 78, iq: 84 }),
      player("Sean Elliott", 6, 8, 32, { height: 86, shooting: 84, finishing: 82, handles: 78, passing: 76, defense: 78, rebounding: 68, athleticism: 78, iq: 84 }),
      player("Malik Rose", 6, 7, 31, { height: 84, shooting: 64, finishing: 80, handles: 66, passing: 68, defense: 82, rebounding: 78, athleticism: 82, iq: 76 }),
      player("Brent Barry", 6, 7, 17, { height: 84, shooting: 86, finishing: 78, handles: 80, passing: 80, defense: 74, rebounding: 60, athleticism: 78, iq: 82 }),
      player("Fabricio Oberto", 6, 10, 7, { height: 94, shooting: 64, finishing: 78, handles: 58, passing: 72, defense: 80, rebounding: 78, athleticism: 70, iq: 72 }),
      player("Nazr Mohammed", 6, 10, 2, { height: 94, shooting: 62, finishing: 80, handles: 56, passing: 62, defense: 78, rebounding: 82, athleticism: 76, iq: 72 }),
      player("Avery Johnson", 5, 11, 6, { height: 64, shooting: 76, finishing: 80, handles: 88, passing: 88, defense: 82, rebounding: 50, athleticism: 80, iq: 84 }),
      player("Beno Udrih", 6, 3, 19, { height: 74, shooting: 78, finishing: 78, handles: 82, passing: 80, defense: 74, rebounding: 54, athleticism: 80, iq: 78 }),
    ],
  },
  {
    era: "2000s",
    team: "Suns",
    note: "Seven Seconds or Less is a playground for shooting, passing, and athleticism.",
    players: [
      player("Steve Nash", 6, 3, 13, { height: 74, shooting: 91, finishing: 78, handles: 90, passing: 99, defense: 60, rebounding: 52, athleticism: 76, iq: 97 }),
      player("Amar'e Stoudemire", 6, 10, 32, { height: 94, shooting: 78, finishing: 92, handles: 72, passing: 68, defense: 74, rebounding: 82, athleticism: 92, iq: 78 }),
      player("Shawn Marion", 6, 7, 31, { height: 84, shooting: 82, finishing: 88, handles: 76, passing: 74, defense: 84, rebounding: 86, athleticism: 88, iq: 82 }),
      player("Joe Johnson", 6, 7, 2, { height: 84, shooting: 88, finishing: 88, handles: 90, passing: 84, defense: 78, rebounding: 70, athleticism: 84, iq: 88 }),
      player("Leandro Barbosa", 6, 3, 10, { height: 74, shooting: 86, finishing: 86, handles: 84, passing: 76, defense: 70, rebounding: 55, athleticism: 94, iq: 80 }),
      player("Raja Bell", 6, 5, 19, { height: 80, shooting: 87, finishing: 72, handles: 70, passing: 72, defense: 88, rebounding: 58, athleticism: 76, iq: 82 }),
      player("Boris Diaw", 6, 8, 3, { height: 86, shooting: 80, finishing: 82, handles: 80, passing: 88, defense: 76, rebounding: 74, athleticism: 72, iq: 90 }),
      player("Quentin Richardson", 6, 6, 23, { height: 82, shooting: 86, finishing: 78, handles: 74, passing: 70, defense: 74, rebounding: 70, athleticism: 78, iq: 80 }),
      player("Grant Hill", 6, 8, 33, { height: 86, shooting: 82, finishing: 90, handles: 88, passing: 88, defense: 82, rebounding: 70, athleticism: 88, iq: 84 }),
      player("Jason Richardson", 6, 6, 23, { height: 82, shooting: 84, finishing: 86, handles: 80, passing: 72, defense: 74, rebounding: 66, athleticism: 92, iq: 80 }),
      player("Stephon Marbury", 6, 2, 3, { height: 71, shooting: 82, finishing: 84, handles: 92, passing: 90, defense: 70, rebounding: 56, athleticism: 86, iq: 80 }),
      player("Goran Dragic", 6, 3, 2, { height: 74, shooting: 78, finishing: 80, handles: 86, passing: 82, defense: 72, rebounding: 54, athleticism: 82, iq: 80 }),
      player("Channing Frye", 6, 11, 8, { height: 96, shooting: 84, finishing: 78, handles: 64, passing: 66, defense: 72, rebounding: 74, athleticism: 72, iq: 78 }),
      player("Kurt Thomas", 6, 9, 40, { height: 90, shooting: 74, finishing: 78, handles: 62, passing: 68, defense: 84, rebounding: 82, athleticism: 72, iq: 74 }),
      player("James Jones", 6, 8, 22, { height: 86, shooting: 86, finishing: 74, handles: 70, passing: 66, defense: 74, rebounding: 62, athleticism: 78, iq: 80 }),
    ],
  },
  {
    era: "2010s",
    team: "Warriors",
    note: "The modern cheat-code pool for shooting, defense, and small-ball IQ.",
    players: [
      player("Stephen Curry", 6, 2, 30, { height: 71, shooting: 100, finishing: 94, handles: 94, passing: 88, defense: 70, rebounding: 62, athleticism: 84, iq: 97 }),
      player("Kevin Durant", 6, 11, 35, { height: 96, shooting: 94, finishing: 93, handles: 86, passing: 80, defense: 80, rebounding: 74, athleticism: 91, iq: 90 }),
      player("Klay Thompson", 6, 6, 11, { height: 82, shooting: 94, finishing: 82, handles: 78, passing: 74, defense: 84, rebounding: 66, athleticism: 80, iq: 82 }),
      player("Draymond Green", 6, 6, 23, { height: 82, shooting: 70, finishing: 78, handles: 76, passing: 86, defense: 92, rebounding: 88, athleticism: 80, iq: 90 }),
      player("Andre Iguodala", 6, 6, 9, { height: 82, shooting: 78, finishing: 78, handles: 82, passing: 84, defense: 85, rebounding: 72, athleticism: 82, iq: 88 }),
      player("Andrew Bogut", 7, 0, 12, { height: 98, shooting: 52, finishing: 78, handles: 58, passing: 80, defense: 88, rebounding: 88, athleticism: 64, iq: 70 }),
      player("Shaun Livingston", 6, 7, 34, { height: 84, shooting: 78, finishing: 84, handles: 86, passing: 84, defense: 78, rebounding: 62, athleticism: 72, iq: 82 }),
      player("Harrison Barnes", 6, 8, 40, { height: 86, shooting: 82, finishing: 80, handles: 74, passing: 68, defense: 76, rebounding: 70, athleticism: 82, iq: 78 }),
      player("David Lee", 6, 9, 10, { height: 90, shooting: 78, finishing: 84, handles: 70, passing: 76, defense: 68, rebounding: 82, athleticism: 78, iq: 78 }),
      player("Monta Ellis", 6, 3, 8, { height: 74, shooting: 80, finishing: 86, handles: 88, passing: 78, defense: 70, rebounding: 56, athleticism: 90, iq: 82 }),
      player("JaVale McGee", 7, 0, 1, { height: 98, shooting: 56, finishing: 84, handles: 54, passing: 58, defense: 80, rebounding: 76, athleticism: 90, iq: 70 }),
      player("Zaza Pachulia", 6, 11, 27, { height: 96, shooting: 62, finishing: 78, handles: 58, passing: 70, defense: 74, rebounding: 80, athleticism: 62, iq: 72 }),
      player("Nick Young", 6, 7, 6, { height: 84, shooting: 84, finishing: 78, handles: 74, passing: 64, defense: 64, rebounding: 54, athleticism: 80, iq: 70 }),
      player("Patrick McCaw", 6, 7, 0, { height: 84, shooting: 72, finishing: 76, handles: 74, passing: 72, defense: 80, rebounding: 58, athleticism: 84, iq: 70 }),
      player("Festus Ezeli", 6, 11, 31, { height: 96, shooting: 54, finishing: 78, handles: 50, passing: 56, defense: 82, rebounding: 78, athleticism: 80, iq: 66 }),
    ],
  },
  {
    era: "2010s",
    team: "Cavaliers",
    note: "LeBron's second Cleveland run gives you one of the best all-around picks in the game.",
    players: [
      player("LeBron James", 6, 9, 23, { height: 90, shooting: 83, finishing: 100, handles: 94, passing: 94, defense: 92, rebounding: 84, athleticism: 98, iq: 97 }),
      player("Kyrie Irving", 6, 2, 2, { height: 71, shooting: 94, finishing: 91, handles: 96, passing: 80, defense: 66, rebounding: 52, athleticism: 88, iq: 88 }),
      player("Kevin Love", 6, 8, 0, { height: 86, shooting: 84, finishing: 84, handles: 70, passing: 82, defense: 70, rebounding: 88, athleticism: 68, iq: 84 }),
      player("J.R. Smith", 6, 6, 5, { height: 82, shooting: 80, finishing: 84, handles: 82, passing: 72, defense: 74, rebounding: 64, athleticism: 82, iq: 74 }),
      player("Tristan Thompson", 6, 9, 13, { height: 90, shooting: 45, finishing: 82, handles: 58, passing: 62, defense: 82, rebounding: 92, athleticism: 82, iq: 78 }),
      player("Matthew Dellavedova", 6, 3, 8, { height: 74, shooting: 78, finishing: 62, handles: 76, passing: 78, defense: 80, rebounding: 52, athleticism: 62, iq: 78 }),
      player("Iman Shumpert", 6, 5, 4, { height: 80, shooting: 78, finishing: 76, handles: 78, passing: 70, defense: 84, rebounding: 60, athleticism: 84, iq: 78 }),
      player("Richard Jefferson", 6, 7, 24, { height: 84, shooting: 82, finishing: 82, handles: 74, passing: 72, defense: 74, rebounding: 62, athleticism: 82, iq: 82 }),
      player("Anderson Varejao", 6, 11, 17, { height: 96, shooting: 60, finishing: 78, handles: 58, passing: 66, defense: 80, rebounding: 84, athleticism: 78, iq: 70 }),
      player("Channing Frye", 6, 11, 9, { height: 96, shooting: 84, finishing: 76, handles: 64, passing: 66, defense: 68, rebounding: 72, athleticism: 68, iq: 78 }),
      player("Mo Williams", 6, 1, 52, { height: 68, shooting: 82, finishing: 78, handles: 84, passing: 80, defense: 70, rebounding: 54, athleticism: 78, iq: 80 }),
      player("Antawn Jamison", 6, 9, 4, { height: 90, shooting: 80, finishing: 84, handles: 74, passing: 68, defense: 68, rebounding: 78, athleticism: 76, iq: 78 }),
      player("Kyle Korver", 6, 7, 26, { height: 84, shooting: 92, finishing: 72, handles: 70, passing: 68, defense: 70, rebounding: 56, athleticism: 66, iq: 82 }),
      player("Dion Waiters", 6, 4, 3, { height: 77, shooting: 78, finishing: 82, handles: 82, passing: 72, defense: 70, rebounding: 56, athleticism: 84, iq: 78 }),
      player("Timofey Mozgov", 7, 1, 20, { height: 100, shooting: 56, finishing: 80, handles: 52, passing: 58, defense: 80, rebounding: 78, athleticism: 70, iq: 68 }),
    ],
  },
  {
    era: "2020s",
    team: "Nuggets",
    note: "Jokic makes passing and IQ-adjacent categories feel unfair from a center slot.",
    players: [
      player("Nikola Jokic", 6, 11, 15, { height: 96, shooting: 92, finishing: 96, handles: 88, passing: 100, defense: 76, rebounding: 96, athleticism: 58, iq: 99 }),
      player("Jamal Murray", 6, 4, 27, { height: 77, shooting: 86, finishing: 83, handles: 87, passing: 84, defense: 72, rebounding: 62, athleticism: 84, iq: 84 }),
      player("Aaron Gordon", 6, 8, 50, { height: 86, shooting: 74, finishing: 86, handles: 78, passing: 78, defense: 82, rebounding: 84, athleticism: 90, iq: 82 }),
      player("Michael Porter Jr.", 6, 10, 1, { height: 94, shooting: 86, finishing: 79, handles: 76, passing: 66, defense: 74, rebounding: 76, athleticism: 82, iq: 82 }),
      player("Kentavious Caldwell-Pope", 6, 5, 5, { height: 80, shooting: 86, finishing: 76, handles: 74, passing: 72, defense: 88, rebounding: 58, athleticism: 80, iq: 84 }),
      player("Bruce Brown", 6, 4, 11, { height: 77, shooting: 78, finishing: 84, handles: 80, passing: 78, defense: 84, rebounding: 70, athleticism: 84, iq: 80 }),
      player("Christian Braun", 6, 6, 0, { height: 82, shooting: 78, finishing: 82, handles: 72, passing: 70, defense: 82, rebounding: 66, athleticism: 86, iq: 78 }),
      player("Will Barton", 6, 5, 5, { height: 80, shooting: 82, finishing: 84, handles: 84, passing: 76, defense: 72, rebounding: 68, athleticism: 86, iq: 80 }),
      player("Russell Westbrook", 6, 3, 4, { height: 74, shooting: 70, finishing: 84, handles: 88, passing: 90, defense: 74, rebounding: 74, athleticism: 90, iq: 78 }),
      player("Jerami Grant", 6, 8, 9, { height: 86, shooting: 78, finishing: 82, handles: 70, passing: 66, defense: 84, rebounding: 68, athleticism: 88, iq: 76 }),
      player("Monte Morris", 6, 2, 11, { height: 71, shooting: 80, finishing: 78, handles: 84, passing: 84, defense: 72, rebounding: 52, athleticism: 78, iq: 80 }),
      player("Paul Millsap", 6, 7, 4, { height: 84, shooting: 74, finishing: 80, handles: 70, passing: 74, defense: 84, rebounding: 76, athleticism: 74, iq: 78 }),
      player("Gary Harris", 6, 4, 14, { height: 77, shooting: 78, finishing: 78, handles: 74, passing: 68, defense: 84, rebounding: 56, athleticism: 84, iq: 74 }),
      player("Reggie Jackson", 6, 2, 7, { height: 71, shooting: 80, finishing: 80, handles: 84, passing: 78, defense: 68, rebounding: 54, athleticism: 78, iq: 80 }),
      player("Peyton Watson", 6, 8, 8, { height: 86, shooting: 72, finishing: 80, handles: 70, passing: 66, defense: 86, rebounding: 66, athleticism: 90, iq: 72 }),
    ],
  },
  {
    era: "2020s",
    team: "Bucks",
    note: "Giannis and Jrue make this a brutal defensive and athletic roll.",
    players: [
      player("Giannis Antetokounmpo", 6, 11, 34, { height: 96, shooting: 62, finishing: 100, handles: 82, passing: 74, defense: 93, rebounding: 96, athleticism: 100, iq: 83 }),
      player("Jrue Holiday", 6, 4, 21, { height: 77, shooting: 84, finishing: 84, handles: 83, passing: 82, defense: 92, rebounding: 70, athleticism: 84, iq: 90 }),
      player("Khris Middleton", 6, 7, 22, { height: 84, shooting: 84, finishing: 79, handles: 84, passing: 82, defense: 80, rebounding: 72, athleticism: 74, iq: 84 }),
      player("Brook Lopez", 7, 1, 11, { height: 99, shooting: 86, finishing: 86, handles: 58, passing: 66, defense: 84, rebounding: 82, athleticism: 58, iq: 78 }),
      player("Bobby Portis", 6, 10, 9, { height: 94, shooting: 82, finishing: 84, handles: 64, passing: 66, defense: 76, rebounding: 88, athleticism: 72, iq: 78 }),
      player("Pat Connaughton", 6, 5, 24, { height: 80, shooting: 82, finishing: 76, handles: 70, passing: 68, defense: 76, rebounding: 72, athleticism: 86, iq: 76 }),
      player("Donte DiVincenzo", 6, 4, 0, { height: 77, shooting: 82, finishing: 78, handles: 78, passing: 76, defense: 82, rebounding: 70, athleticism: 84, iq: 78 }),
      player("Grayson Allen", 6, 4, 12, { height: 77, shooting: 86, finishing: 76, handles: 74, passing: 72, defense: 72, rebounding: 58, athleticism: 76, iq: 80 }),
      player("Damian Lillard", 6, 2, 0, { height: 71, shooting: 88, finishing: 84, handles: 86, passing: 82, defense: 66, rebounding: 56, athleticism: 80, iq: 90 }),
      player("Wesley Matthews", 6, 4, 23, { height: 77, shooting: 80, finishing: 76, handles: 72, passing: 68, defense: 82, rebounding: 56, athleticism: 74, iq: 78 }),
      player("P.J. Tucker", 6, 5, 17, { height: 80, shooting: 74, finishing: 74, handles: 66, passing: 64, defense: 88, rebounding: 66, athleticism: 76, iq: 76 }),
      player("George Hill", 6, 4, 3, { height: 77, shooting: 80, finishing: 78, handles: 80, passing: 78, defense: 80, rebounding: 56, athleticism: 74, iq: 80 }),
      player("Jae Crowder", 6, 6, 99, { height: 82, shooting: 76, finishing: 76, handles: 70, passing: 66, defense: 82, rebounding: 66, athleticism: 76, iq: 76 }),
      player("Malik Beasley", 6, 4, 5, { height: 77, shooting: 84, finishing: 76, handles: 74, passing: 64, defense: 66, rebounding: 54, athleticism: 78, iq: 78 }),
      player("Gary Trent Jr.", 6, 5, 5, { height: 80, shooting: 82, finishing: 76, handles: 74, passing: 64, defense: 74, rebounding: 54, athleticism: 78, iq: 78 }),
    ],
  },
  {
    era: "1970s",
    team: "Knicks",
    note: "Old-school New York wins with ball movement, smarts, and team defense.",
    players: [
      player("Walt Frazier", 6, 4, 10, { height: 77, shooting: 84, finishing: 86, handles: 86, passing: 84, defense: 90, rebounding: 70, athleticism: 86, iq: 94 }),
      player("Willis Reed", 6, 9, 19, { height: 90, shooting: 78, finishing: 86, handles: 62, passing: 72, defense: 90, rebounding: 88, athleticism: 80, iq: 86 }),
      player("Earl Monroe", 6, 3, 15, { height: 74, shooting: 84, finishing: 84, handles: 89, passing: 82, defense: 74, rebounding: 58, athleticism: 86, iq: 90 }),
      player("Bill Bradley", 6, 5, 24, { height: 80, shooting: 86, finishing: 76, handles: 76, passing: 82, defense: 78, rebounding: 62, athleticism: 68, iq: 84 }),
      player("Dave DeBusschere", 6, 6, 22, { height: 82, shooting: 78, finishing: 80, handles: 66, passing: 74, defense: 87, rebounding: 80, athleticism: 76, iq: 84 }),
      player("Jerry Lucas", 6, 8, 32, { height: 86, shooting: 80, finishing: 80, handles: 62, passing: 78, defense: 78, rebounding: 90, athleticism: 66, iq: 80 }),
      player("Dick Barnett", 6, 4, 12, { height: 77, shooting: 84, finishing: 80, handles: 78, passing: 74, defense: 80, rebounding: 58, athleticism: 76, iq: 82 }),
      player("Phil Jackson", 6, 8, 18, { height: 86, shooting: 66, finishing: 74, handles: 60, passing: 72, defense: 82, rebounding: 74, athleticism: 70, iq: 76 }),
      player("Cazzie Russell", 6, 5, 33, { height: 80, shooting: 86, finishing: 84, handles: 80, passing: 76, defense: 72, rebounding: 68, athleticism: 82, iq: 84 }),
      player("Dave Stallworth", 6, 7, 9, { height: 84, shooting: 76, finishing: 80, handles: 72, passing: 72, defense: 80, rebounding: 78, athleticism: 84, iq: 78 }),
      player("Spencer Haywood", 6, 8, 24, { height: 86, shooting: 80, finishing: 86, handles: 72, passing: 72, defense: 80, rebounding: 86, athleticism: 86, iq: 80 }),
      player("Henry Bibby", 6, 1, 20, { height: 68, shooting: 80, finishing: 76, handles: 84, passing: 82, defense: 78, rebounding: 56, athleticism: 80, iq: 78 }),
      player("Dean Meminger", 6, 0, 7, { height: 66, shooting: 72, finishing: 76, handles: 84, passing: 80, defense: 86, rebounding: 56, athleticism: 84, iq: 76 }),
      player("John Gianelli", 6, 10, 40, { height: 94, shooting: 68, finishing: 76, handles: 58, passing: 68, defense: 80, rebounding: 80, athleticism: 74, iq: 72 }),
      player("Mel Davis", 6, 7, 34, { height: 84, shooting: 72, finishing: 80, handles: 66, passing: 68, defense: 78, rebounding: 82, athleticism: 82, iq: 74 }),
    ],
  },
  {
    era: "1980s",
    team: "76ers",
    note: "Doctor J and Moses bring high-flying scoring and dominant boards.",
    players: [
      player("Julius Erving", 6, 7, 6, { height: 84, shooting: 80, finishing: 92, handles: 86, passing: 82, defense: 80, rebounding: 82, athleticism: 93, iq: 92 }),
      player("Moses Malone", 6, 10, 2, { height: 94, shooting: 66, finishing: 88, handles: 58, passing: 64, defense: 88, rebounding: 98, athleticism: 86, iq: 88 }),
      player("Maurice Cheeks", 6, 1, 10, { height: 68, shooting: 80, finishing: 82, handles: 83, passing: 85, defense: 85, rebounding: 58, athleticism: 82, iq: 90 }),
      player("Andrew Toney", 6, 3, 22, { height: 74, shooting: 88, finishing: 86, handles: 84, passing: 80, defense: 72, rebounding: 56, athleticism: 80, iq: 92 }),
      player("Bobby Jones", 6, 9, 24, { height: 90, shooting: 74, finishing: 84, handles: 66, passing: 74, defense: 94, rebounding: 78, athleticism: 84, iq: 84 }),
      player("Clint Richardson", 6, 3, 20, { height: 74, shooting: 76, finishing: 78, handles: 76, passing: 74, defense: 82, rebounding: 60, athleticism: 80, iq: 76 }),
      player("Marc Iavaroni", 6, 10, 5, { height: 94, shooting: 66, finishing: 76, handles: 56, passing: 64, defense: 80, rebounding: 78, athleticism: 64, iq: 74 }),
      player("Franklin Edwards", 6, 2, 11, { height: 71, shooting: 76, finishing: 78, handles: 82, passing: 80, defense: 72, rebounding: 52, athleticism: 80, iq: 74 }),
      player("Charles Barkley", 6, 6, 34, { height: 82, shooting: 78, finishing: 86, handles: 82, passing: 80, defense: 80, rebounding: 88, athleticism: 88, iq: 86 }),
      player("Darryl Dawkins", 6, 11, 53, { height: 96, shooting: 70, finishing: 88, handles: 62, passing: 66, defense: 80, rebounding: 84, athleticism: 90, iq: 78 }),
      player("Caldwell Jones", 6, 11, 11, { height: 96, shooting: 64, finishing: 78, handles: 58, passing: 66, defense: 90, rebounding: 86, athleticism: 82, iq: 76 }),
      player("Steve Mix", 6, 7, 30, { height: 84, shooting: 80, finishing: 82, handles: 70, passing: 72, defense: 80, rebounding: 76, athleticism: 78, iq: 80 }),
      player("Clemon Johnson", 6, 10, 34, { height: 94, shooting: 66, finishing: 78, handles: 58, passing: 66, defense: 82, rebounding: 80, athleticism: 78, iq: 72 }),
      player("Sedale Threatt", 6, 2, 3, { height: 71, shooting: 82, finishing: 80, handles: 84, passing: 80, defense: 82, rebounding: 54, athleticism: 84, iq: 78 }),
      player("Mike Gminski", 6, 11, 43, { height: 96, shooting: 78, finishing: 80, handles: 60, passing: 66, defense: 78, rebounding: 82, athleticism: 70, iq: 76 }),
    ],
  },
  {
    era: "1980s",
    team: "Pistons",
    note: "Detroit's Bad Boys bully you with defense, toughness, and just enough scoring.",
    players: [
      player("Isiah Thomas", 6, 1, 11, { height: 68, shooting: 84, finishing: 84, handles: 96, passing: 94, defense: 80, rebounding: 56, athleticism: 82, iq: 96 }),
      player("Joe Dumars", 6, 3, 4, { height: 74, shooting: 82, finishing: 82, handles: 84, passing: 80, defense: 87, rebounding: 56, athleticism: 80, iq: 90 }),
      player("Dennis Rodman", 6, 7, 10, { height: 84, shooting: 50, finishing: 70, handles: 60, passing: 68, defense: 94, rebounding: 96, athleticism: 88, iq: 80 }),
      player("Bill Laimbeer", 6, 11, 40, { height: 96, shooting: 80, finishing: 78, handles: 56, passing: 70, defense: 84, rebounding: 90, athleticism: 52, iq: 84 }),
      player("Vinnie Johnson", 6, 2, 15, { height: 71, shooting: 84, finishing: 84, handles: 82, passing: 74, defense: 72, rebounding: 60, athleticism: 80, iq: 90 }),
      player("Mark Aguirre", 6, 6, 24, { height: 82, shooting: 84, finishing: 86, handles: 78, passing: 76, defense: 68, rebounding: 70, athleticism: 74, iq: 82 }),
      player("James Edwards", 7, 1, 53, { height: 99, shooting: 70, finishing: 82, handles: 54, passing: 60, defense: 78, rebounding: 76, athleticism: 56, iq: 76 }),
      player("Rick Mahorn", 6, 10, 44, { height: 94, shooting: 60, finishing: 76, handles: 54, passing: 62, defense: 88, rebounding: 84, athleticism: 60, iq: 76 }),
      player("Adrian Dantley", 6, 5, 45, { height: 80, shooting: 84, finishing: 90, handles: 80, passing: 74, defense: 72, rebounding: 70, athleticism: 82, iq: 86 }),
      player("John Salley", 6, 11, 22, { height: 96, shooting: 66, finishing: 80, handles: 62, passing: 68, defense: 88, rebounding: 80, athleticism: 88, iq: 76 }),
      player("Kelly Tripucka", 6, 6, 7, { height: 82, shooting: 84, finishing: 84, handles: 78, passing: 74, defense: 70, rebounding: 66, athleticism: 80, iq: 82 }),
      player("John Long", 6, 5, 25, { height: 80, shooting: 84, finishing: 82, handles: 78, passing: 72, defense: 76, rebounding: 62, athleticism: 82, iq: 80 }),
      player("Kent Benson", 6, 10, 54, { height: 94, shooting: 72, finishing: 80, handles: 60, passing: 68, defense: 78, rebounding: 82, athleticism: 74, iq: 72 }),
      player("Terry Tyler", 6, 7, 43, { height: 84, shooting: 74, finishing: 80, handles: 66, passing: 68, defense: 80, rebounding: 76, athleticism: 88, iq: 74 }),
      player("Earl Cureton", 6, 9, 35, { height: 90, shooting: 66, finishing: 78, handles: 62, passing: 66, defense: 80, rebounding: 80, athleticism: 82, iq: 72 }),
    ],
  },
  {
    era: "1990s",
    team: "Knicks",
    note: "Ewing-era New York is mud-in-your-boots defense, rebounding, and grit.",
    players: [
      player("Patrick Ewing", 7, 0, 33, { height: 98, shooting: 80, finishing: 85, handles: 64, passing: 70, defense: 89, rebounding: 87, athleticism: 84, iq: 88 }),
      player("John Starks", 6, 5, 3, { height: 80, shooting: 84, finishing: 80, handles: 82, passing: 76, defense: 84, rebounding: 58, athleticism: 82, iq: 84 }),
      player("Charles Oakley", 6, 9, 34, { height: 90, shooting: 68, finishing: 78, handles: 60, passing: 72, defense: 90, rebounding: 92, athleticism: 74, iq: 80 }),
      player("Anthony Mason", 6, 7, 14, { height: 84, shooting: 66, finishing: 82, handles: 78, passing: 82, defense: 88, rebounding: 84, athleticism: 80, iq: 80 }),
      player("Derek Harper", 6, 4, 11, { height: 77, shooting: 80, finishing: 80, handles: 86, passing: 84, defense: 86, rebounding: 58, athleticism: 80, iq: 84 }),
      player("Charles Smith", 6, 10, 23, { height: 94, shooting: 74, finishing: 80, handles: 62, passing: 66, defense: 78, rebounding: 76, athleticism: 76, iq: 70 }),
      player("Greg Anthony", 6, 1, 50, { height: 68, shooting: 74, finishing: 74, handles: 84, passing: 82, defense: 80, rebounding: 52, athleticism: 80, iq: 76 }),
      player("Rolando Blackman", 6, 6, 55, { height: 82, shooting: 86, finishing: 80, handles: 78, passing: 74, defense: 76, rebounding: 60, athleticism: 74, iq: 86 }),
      player("Allan Houston", 6, 6, 20, { height: 82, shooting: 84, finishing: 82, handles: 80, passing: 74, defense: 74, rebounding: 56, athleticism: 80, iq: 86 }),
      player("Latrell Sprewell", 6, 5, 8, { height: 80, shooting: 80, finishing: 86, handles: 80, passing: 78, defense: 84, rebounding: 62, athleticism: 84, iq: 78 }),
      player("Larry Johnson", 6, 6, 2, { height: 82, shooting: 78, finishing: 84, handles: 80, passing: 78, defense: 80, rebounding: 80, athleticism: 84, iq: 84 }),
      player("Charlie Ward", 6, 2, 21, { height: 71, shooting: 74, finishing: 76, handles: 84, passing: 84, defense: 84, rebounding: 56, athleticism: 82, iq: 78 }),
      player("Doc Rivers", 6, 4, 25, { height: 77, shooting: 78, finishing: 80, handles: 84, passing: 84, defense: 86, rebounding: 60, athleticism: 82, iq: 86 }),
      player("Herb Williams", 6, 11, 32, { height: 96, shooting: 66, finishing: 78, handles: 58, passing: 66, defense: 84, rebounding: 78, athleticism: 72, iq: 74 }),
      player("Hubert Davis", 6, 5, 44, { height: 80, shooting: 90, finishing: 76, handles: 76, passing: 72, defense: 70, rebounding: 52, athleticism: 76, iq: 82 }),
    ],
  },
  {
    era: "1990s",
    team: "SuperSonics",
    note: "Payton and Kemp bring lockdown defense and rim-rattling athleticism.",
    players: [
      player("Gary Payton", 6, 4, 20, { height: 77, shooting: 84, finishing: 82, handles: 88, passing: 90, defense: 94, rebounding: 66, athleticism: 88, iq: 90 }),
      player("Shawn Kemp", 6, 10, 40, { height: 94, shooting: 70, finishing: 89, handles: 70, passing: 70, defense: 84, rebounding: 85, athleticism: 93, iq: 76 }),
      player("Detlef Schrempf", 6, 10, 11, { height: 94, shooting: 82, finishing: 84, handles: 80, passing: 86, defense: 72, rebounding: 82, athleticism: 74, iq: 84 }),
      player("Hersey Hawkins", 6, 3, 33, { height: 74, shooting: 83, finishing: 78, handles: 78, passing: 78, defense: 84, rebounding: 62, athleticism: 76, iq: 82 }),
      player("Sam Perkins", 6, 9, 14, { height: 90, shooting: 80, finishing: 80, handles: 62, passing: 70, defense: 80, rebounding: 80, athleticism: 64, iq: 84 }),
      player("Nate McMillan", 6, 5, 10, { height: 80, shooting: 72, finishing: 72, handles: 82, passing: 86, defense: 90, rebounding: 68, athleticism: 78, iq: 86 }),
      player("Vincent Askew", 6, 6, 14, { height: 82, shooting: 74, finishing: 80, handles: 76, passing: 76, defense: 82, rebounding: 64, athleticism: 80, iq: 76 }),
      player("Kendall Gill", 6, 5, 13, { height: 80, shooting: 78, finishing: 82, handles: 80, passing: 76, defense: 84, rebounding: 66, athleticism: 86, iq: 78 }),
      player("Vin Baker", 6, 11, 42, { height: 96, shooting: 76, finishing: 84, handles: 68, passing: 72, defense: 78, rebounding: 84, athleticism: 82, iq: 78 }),
      player("Dale Ellis", 6, 7, 3, { height: 84, shooting: 84, finishing: 84, handles: 78, passing: 72, defense: 72, rebounding: 64, athleticism: 80, iq: 80 }),
      player("Ricky Pierce", 6, 4, 22, { height: 77, shooting: 86, finishing: 86, handles: 80, passing: 72, defense: 72, rebounding: 58, athleticism: 78, iq: 84 }),
      player("Michael Cage", 6, 9, 44, { height: 90, shooting: 64, finishing: 78, handles: 60, passing: 66, defense: 82, rebounding: 86, athleticism: 84, iq: 70 }),
      player("Derrick McKey", 6, 9, 30, { height: 90, shooting: 80, finishing: 82, handles: 76, passing: 74, defense: 86, rebounding: 72, athleticism: 84, iq: 78 }),
      player("Dana Barros", 5, 11, 3, { height: 64, shooting: 90, finishing: 76, handles: 84, passing: 80, defense: 70, rebounding: 48, athleticism: 78, iq: 82 }),
      player("David Wingate", 6, 5, 20, { height: 80, shooting: 72, finishing: 78, handles: 78, passing: 74, defense: 84, rebounding: 60, athleticism: 82, iq: 74 }),
    ],
  },
  {
    era: "2000s",
    team: "Pistons",
    note: "The 2004 champs win with five-man defense and zero ego.",
    players: [
      player("Chauncey Billups", 6, 3, 1, { height: 74, shooting: 83, finishing: 82, handles: 86, passing: 84, defense: 82, rebounding: 60, athleticism: 78, iq: 88 }),
      player("Rip Hamilton", 6, 7, 32, { height: 84, shooting: 83, finishing: 79, handles: 82, passing: 78, defense: 74, rebounding: 62, athleticism: 84, iq: 88 }),
      player("Ben Wallace", 6, 9, 3, { height: 90, shooting: 40, finishing: 72, handles: 50, passing: 60, defense: 100, rebounding: 96, athleticism: 88, iq: 78 }),
      player("Rasheed Wallace", 6, 11, 36, { height: 96, shooting: 84, finishing: 86, handles: 68, passing: 76, defense: 92, rebounding: 84, athleticism: 80, iq: 82 }),
      player("Tayshaun Prince", 6, 9, 22, { height: 90, shooting: 80, finishing: 80, handles: 74, passing: 78, defense: 90, rebounding: 70, athleticism: 82, iq: 82 }),
      player("Lindsey Hunter", 6, 2, 10, { height: 71, shooting: 78, finishing: 74, handles: 82, passing: 78, defense: 86, rebounding: 54, athleticism: 82, iq: 76 }),
      player("Mehmet Okur", 6, 11, 13, { height: 96, shooting: 84, finishing: 80, handles: 60, passing: 68, defense: 72, rebounding: 80, athleticism: 58, iq: 78 }),
      player("Corliss Williamson", 6, 7, 34, { height: 84, shooting: 74, finishing: 84, handles: 70, passing: 66, defense: 74, rebounding: 72, athleticism: 76, iq: 78 }),
      player("Antonio McDyess", 6, 9, 24, { height: 90, shooting: 78, finishing: 82, handles: 66, passing: 70, defense: 80, rebounding: 82, athleticism: 78, iq: 78 }),
      player("Jerry Stackhouse", 6, 6, 42, { height: 82, shooting: 80, finishing: 86, handles: 82, passing: 78, defense: 74, rebounding: 64, athleticism: 86, iq: 82 }),
      player("Chucky Atkins", 5, 11, 25, { height: 64, shooting: 82, finishing: 76, handles: 84, passing: 80, defense: 72, rebounding: 50, athleticism: 78, iq: 78 }),
      player("Cliff Robinson", 6, 10, 30, { height: 94, shooting: 78, finishing: 80, handles: 72, passing: 70, defense: 84, rebounding: 74, athleticism: 80, iq: 76 }),
      player("Rodney Stuckey", 6, 5, 3, { height: 80, shooting: 76, finishing: 82, handles: 84, passing: 78, defense: 78, rebounding: 58, athleticism: 84, iq: 78 }),
      player("Jason Maxiell", 6, 7, 54, { height: 84, shooting: 62, finishing: 78, handles: 58, passing: 62, defense: 82, rebounding: 76, athleticism: 86, iq: 70 }),
      player("Ben Gordon", 6, 3, 8, { height: 74, shooting: 86, finishing: 80, handles: 82, passing: 72, defense: 68, rebounding: 54, athleticism: 80, iq: 84 }),
    ],
  },
  {
    era: "2010s",
    team: "Heat",
    note: "Miami's Big Three is a transition nightmare with elite two-way wings.",
    players: [
      player("LeBron James", 6, 9, 6, { height: 90, shooting: 80, finishing: 97, handles: 92, passing: 93, defense: 90, rebounding: 82, athleticism: 96, iq: 96 }),
      player("Dwyane Wade", 6, 4, 3, { height: 77, shooting: 80, finishing: 92, handles: 85, passing: 86, defense: 88, rebounding: 66, athleticism: 92, iq: 82 }),
      player("Chris Bosh", 6, 11, 1, { height: 96, shooting: 84, finishing: 86, handles: 72, passing: 74, defense: 82, rebounding: 84, athleticism: 80, iq: 86 }),
      player("Ray Allen", 6, 5, 34, { height: 80, shooting: 96, finishing: 80, handles: 80, passing: 76, defense: 72, rebounding: 60, athleticism: 80, iq: 90 }),
      player("Mario Chalmers", 6, 2, 15, { height: 71, shooting: 82, finishing: 76, handles: 80, passing: 78, defense: 80, rebounding: 56, athleticism: 80, iq: 82 }),
      player("Shane Battier", 6, 8, 31, { height: 86, shooting: 82, finishing: 70, handles: 64, passing: 72, defense: 90, rebounding: 66, athleticism: 70, iq: 88 }),
      player("Udonis Haslem", 6, 8, 40, { height: 86, shooting: 72, finishing: 76, handles: 58, passing: 64, defense: 82, rebounding: 84, athleticism: 72, iq: 80 }),
      player("Norris Cole", 6, 2, 30, { height: 71, shooting: 74, finishing: 76, handles: 82, passing: 78, defense: 78, rebounding: 54, athleticism: 82, iq: 76 }),
      player("Goran Dragic", 6, 3, 7, { height: 74, shooting: 80, finishing: 84, handles: 88, passing: 84, defense: 72, rebounding: 56, athleticism: 82, iq: 82 }),
      player("Hassan Whiteside", 7, 0, 21, { height: 98, shooting: 56, finishing: 84, handles: 52, passing: 54, defense: 86, rebounding: 88, athleticism: 84, iq: 70 }),
      player("Bam Adebayo", 6, 9, 13, { height: 90, shooting: 64, finishing: 84, handles: 74, passing: 82, defense: 84, rebounding: 82, athleticism: 84, iq: 88 }),
      player("Josh Richardson", 6, 6, 0, { height: 82, shooting: 80, finishing: 80, handles: 78, passing: 74, defense: 84, rebounding: 60, athleticism: 84, iq: 78 }),
      player("Justise Winslow", 6, 6, 20, { height: 82, shooting: 70, finishing: 80, handles: 80, passing: 80, defense: 84, rebounding: 70, athleticism: 84, iq: 74 }),
      player("Mike Miller", 6, 8, 13, { height: 86, shooting: 88, finishing: 78, handles: 74, passing: 76, defense: 68, rebounding: 66, athleticism: 72, iq: 82 }),
      player("Chris Andersen", 6, 10, 11, { height: 94, shooting: 54, finishing: 80, handles: 54, passing: 58, defense: 84, rebounding: 78, athleticism: 84, iq: 70 }),
    ],
  },
  {
    era: "2010s",
    team: "Thunder",
    note: "Young Durant, Westbrook, and Harden make this the scariest athletic roll in the game.",
    players: [
      player("Kevin Durant", 6, 10, 35, { height: 94, shooting: 93, finishing: 90, handles: 83, passing: 82, defense: 78, rebounding: 82, athleticism: 90, iq: 90 }),
      player("Russell Westbrook", 6, 3, 0, { height: 74, shooting: 78, finishing: 88, handles: 87, passing: 90, defense: 82, rebounding: 78, athleticism: 95, iq: 78 }),
      player("James Harden", 6, 5, 13, { height: 80, shooting: 84, finishing: 86, handles: 87, passing: 84, defense: 70, rebounding: 66, athleticism: 82, iq: 88 }),
      player("Serge Ibaka", 6, 10, 9, { height: 94, shooting: 76, finishing: 84, handles: 58, passing: 62, defense: 92, rebounding: 82, athleticism: 88, iq: 78 }),
      player("Kendrick Perkins", 6, 10, 5, { height: 94, shooting: 40, finishing: 72, handles: 50, passing: 60, defense: 86, rebounding: 80, athleticism: 60, iq: 72 }),
      player("Thabo Sefolosha", 6, 7, 2, { height: 84, shooting: 74, finishing: 74, handles: 72, passing: 72, defense: 88, rebounding: 66, athleticism: 84, iq: 74 }),
      player("Nick Collison", 6, 10, 4, { height: 94, shooting: 62, finishing: 78, handles: 56, passing: 70, defense: 82, rebounding: 80, athleticism: 64, iq: 76 }),
      player("Reggie Jackson", 6, 3, 15, { height: 74, shooting: 78, finishing: 82, handles: 84, passing: 78, defense: 70, rebounding: 58, athleticism: 84, iq: 80 }),
      player("Paul George", 6, 9, 13, { height: 90, shooting: 86, finishing: 86, handles: 80, passing: 74, defense: 92, rebounding: 70, athleticism: 88, iq: 84 }),
      player("Steven Adams", 7, 0, 12, { height: 98, shooting: 54, finishing: 84, handles: 56, passing: 62, defense: 84, rebounding: 84, athleticism: 84, iq: 74 }),
      player("Victor Oladipo", 6, 4, 5, { height: 77, shooting: 78, finishing: 84, handles: 82, passing: 74, defense: 84, rebounding: 62, athleticism: 90, iq: 78 }),
      player("Enes Kanter", 6, 11, 11, { height: 96, shooting: 74, finishing: 84, handles: 62, passing: 64, defense: 60, rebounding: 84, athleticism: 72, iq: 74 }),
      player("Andre Roberson", 6, 7, 21, { height: 84, shooting: 58, finishing: 76, handles: 66, passing: 66, defense: 90, rebounding: 66, athleticism: 88, iq: 64 }),
      player("Jerami Grant", 6, 8, 9, { height: 86, shooting: 74, finishing: 82, handles: 70, passing: 66, defense: 84, rebounding: 68, athleticism: 88, iq: 74 }),
      player("Dennis Schroder", 6, 1, 17, { height: 68, shooting: 78, finishing: 82, handles: 88, passing: 82, defense: 74, rebounding: 54, athleticism: 86, iq: 78 }),
    ],
  },
  {
    era: "1990s",
    team: "Jazz",
    note: "Stockton-to-Malone is the purest two-man game ever built. Roll it and feel it.",
    players: [
      player("John Stockton", 6, 1, 12, { height: 68, shooting: 80, finishing: 82, handles: 96, passing: 100, defense: 82, rebounding: 60, athleticism: 74, iq: 97 }),
      player("Karl Malone", 6, 9, 32, { height: 90, shooting: 80, finishing: 90, handles: 76, passing: 78, defense: 86, rebounding: 87, athleticism: 87, iq: 84 }),
      player("Jeff Hornacek", 6, 4, 14, { height: 77, shooting: 83, finishing: 80, handles: 82, passing: 76, defense: 80, rebounding: 60, athleticism: 70, iq: 88 }),
      player("Bryon Russell", 6, 7, 3, { height: 84, shooting: 76, finishing: 76, handles: 72, passing: 68, defense: 84, rebounding: 68, athleticism: 78, iq: 76 }),
      player("Greg Ostertag", 7, 2, 00, { height: 100, shooting: 52, finishing: 72, handles: 48, passing: 58, defense: 84, rebounding: 82, athleticism: 52, iq: 66 }),
      player("Antoine Carr", 6, 9, 35, { height: 90, shooting: 72, finishing: 78, handles: 58, passing: 62, defense: 72, rebounding: 72, athleticism: 64, iq: 72 }),
      player("Howard Eisley", 6, 2, 7, { height: 71, shooting: 76, finishing: 74, handles: 78, passing: 78, defense: 72, rebounding: 52, athleticism: 74, iq: 72 }),
      player("Shandon Anderson", 6, 6, 4, { height: 82, shooting: 74, finishing: 76, handles: 70, passing: 66, defense: 76, rebounding: 64, athleticism: 78, iq: 72 }),
      player("Jeff Malone", 6, 4, 2, { height: 77, shooting: 88, finishing: 82, handles: 78, passing: 72, defense: 70, rebounding: 58, athleticism: 78, iq: 82 }),
      player("Thurl Bailey", 6, 11, 41, { height: 96, shooting: 78, finishing: 82, handles: 66, passing: 68, defense: 78, rebounding: 78, athleticism: 78, iq: 78 }),
      player("Mark Eaton", 7, 4, 53, { height: 100, shooting: 48, finishing: 70, handles: 46, passing: 58, defense: 96, rebounding: 84, athleticism: 62, iq: 68 }),
      player("Tyrone Corbin", 6, 6, 23, { height: 82, shooting: 74, finishing: 80, handles: 72, passing: 72, defense: 84, rebounding: 74, athleticism: 82, iq: 74 }),
      player("Adam Keefe", 6, 9, 31, { height: 90, shooting: 64, finishing: 78, handles: 62, passing: 66, defense: 78, rebounding: 78, athleticism: 80, iq: 70 }),
      player("David Benoit", 6, 8, 25, { height: 86, shooting: 76, finishing: 78, handles: 68, passing: 66, defense: 78, rebounding: 74, athleticism: 84, iq: 72 }),
      player("Chris Morris", 6, 8, 34, { height: 86, shooting: 78, finishing: 80, handles: 74, passing: 70, defense: 78, rebounding: 72, athleticism: 84, iq: 74 }),
    ],
  },
  {
    era: "1990s",
    team: "Magic",
    note: "Shaq and Penny were a once-in-a-generation pairing before it all fell apart.",
    players: [
      player("Shaquille O'Neal", 7, 1, 32, { height: 99, shooting: 48, finishing: 100, handles: 60, passing: 76, defense: 90, rebounding: 94, athleticism: 92, iq: 86 }),
      player("Penny Hardaway", 6, 7, 1, { height: 84, shooting: 85, finishing: 83, handles: 85, passing: 85, defense: 84, rebounding: 68, athleticism: 90, iq: 88 }),
      player("Nick Anderson", 6, 6, 25, { height: 82, shooting: 80, finishing: 76, handles: 78, passing: 70, defense: 78, rebounding: 66, athleticism: 84, iq: 76 }),
      player("Horace Grant", 6, 10, 54, { height: 94, shooting: 72, finishing: 82, handles: 60, passing: 70, defense: 84, rebounding: 82, athleticism: 80, iq: 78 }),
      player("Dennis Scott", 6, 8, 3, { height: 86, shooting: 90, finishing: 72, handles: 64, passing: 66, defense: 68, rebounding: 60, athleticism: 70, iq: 80 }),
      player("Brian Shaw", 6, 6, 14, { height: 82, shooting: 74, finishing: 76, handles: 78, passing: 84, defense: 78, rebounding: 62, athleticism: 74, iq: 74 }),
      player("Anthony Bowie", 6, 6, 11, { height: 82, shooting: 74, finishing: 76, handles: 74, passing: 70, defense: 78, rebounding: 60, athleticism: 78, iq: 72 }),
      player("Donald Royal", 6, 8, 42, { height: 86, shooting: 70, finishing: 76, handles: 60, passing: 64, defense: 76, rebounding: 68, athleticism: 76, iq: 70 }),
      player("Scott Skiles", 6, 1, 4, { height: 68, shooting: 84, finishing: 78, handles: 86, passing: 90, defense: 70, rebounding: 54, athleticism: 70, iq: 84 }),
      player("Darrell Armstrong", 6, 1, 10, { height: 68, shooting: 80, finishing: 78, handles: 86, passing: 82, defense: 84, rebounding: 54, athleticism: 86, iq: 82 }),
      player("Bo Outlaw", 6, 8, 25, { height: 86, shooting: 54, finishing: 80, handles: 64, passing: 74, defense: 88, rebounding: 80, athleticism: 90, iq: 70 }),
      player("Jeff Turner", 6, 9, 43, { height: 90, shooting: 78, finishing: 76, handles: 64, passing: 68, defense: 74, rebounding: 72, athleticism: 72, iq: 74 }),
      player("Otis Smith", 6, 5, 21, { height: 80, shooting: 76, finishing: 82, handles: 76, passing: 72, defense: 78, rebounding: 66, athleticism: 88, iq: 76 }),
      player("Terry Catledge", 6, 8, 33, { height: 86, shooting: 74, finishing: 80, handles: 66, passing: 66, defense: 74, rebounding: 78, athleticism: 80, iq: 74 }),
      player("Greg Kite", 6, 11, 34, { height: 96, shooting: 54, finishing: 72, handles: 50, passing: 58, defense: 78, rebounding: 76, athleticism: 70, iq: 66 }),
    ],
  },
  {
    era: "1990s",
    team: "Mavericks",
    note: "The Trio never quite clicked, but this pool is full of scoring options and young upside.",
    players: [
      player("Jason Kidd", 6, 4, 5, { height: 77, shooting: 74, finishing: 82, handles: 90, passing: 93, defense: 82, rebounding: 74, athleticism: 88, iq: 95 }),
      player("Jim Jackson", 6, 6, 24, { height: 82, shooting: 84, finishing: 84, handles: 82, passing: 78, defense: 74, rebounding: 68, athleticism: 82, iq: 80 }),
      player("Jamal Mashburn", 6, 8, 32, { height: 86, shooting: 84, finishing: 86, handles: 82, passing: 76, defense: 70, rebounding: 72, athleticism: 80, iq: 82 }),
      player("Popeye Jones", 6, 8, 43, { height: 86, shooting: 62, finishing: 72, handles: 56, passing: 62, defense: 74, rebounding: 90, athleticism: 66, iq: 72 }),
      player("George McCloud", 6, 6, 3, { height: 82, shooting: 84, finishing: 74, handles: 72, passing: 70, defense: 66, rebounding: 60, athleticism: 72, iq: 74 }),
      player("Tony Dumas", 6, 6, 11, { height: 82, shooting: 78, finishing: 78, handles: 76, passing: 68, defense: 68, rebounding: 56, athleticism: 78, iq: 74 }),
      player("Lorenzo Williams", 6, 9, 30, { height: 90, shooting: 52, finishing: 70, handles: 50, passing: 60, defense: 80, rebounding: 78, athleticism: 72, iq: 66 }),
      player("Lucious Harris", 6, 5, 20, { height: 80, shooting: 78, finishing: 76, handles: 74, passing: 72, defense: 74, rebounding: 56, athleticism: 74, iq: 72 }),
      player("Michael Finley", 6, 7, 4, { height: 84, shooting: 84, finishing: 86, handles: 82, passing: 78, defense: 78, rebounding: 68, athleticism: 88, iq: 84 }),
      player("Dirk Nowitzki", 6, 11, 41, { height: 96, shooting: 86, finishing: 88, handles: 78, passing: 76, defense: 72, rebounding: 80, athleticism: 78, iq: 88 }),
      player("Steve Nash", 6, 3, 13, { height: 74, shooting: 84, finishing: 80, handles: 90, passing: 90, defense: 66, rebounding: 54, athleticism: 78, iq: 97 }),
      player("Derek Harper", 6, 4, 12, { height: 77, shooting: 80, finishing: 82, handles: 90, passing: 86, defense: 90, rebounding: 58, athleticism: 84, iq: 84 }),
      player("Roy Tarpley", 6, 11, 42, { height: 96, shooting: 74, finishing: 84, handles: 68, passing: 70, defense: 82, rebounding: 92, athleticism: 88, iq: 78 }),
      player("Fat Lever", 6, 3, 12, { height: 74, shooting: 78, finishing: 80, handles: 86, passing: 86, defense: 84, rebounding: 74, athleticism: 82, iq: 80 }),
      player("Sean Rooks", 6, 10, 34, { height: 94, shooting: 70, finishing: 80, handles: 62, passing: 66, defense: 78, rebounding: 78, athleticism: 74, iq: 72 }),
    ],
  },
  {
    era: "2000s",
    team: "Kings",
    note: "Sacramento's beautiful basketball — everyone touches the ball, everyone scores.",
    players: [
      player("Chris Webber", 6, 10, 4, { height: 94, shooting: 82, finishing: 88, handles: 84, passing: 84, defense: 80, rebounding: 85, athleticism: 78, iq: 84 }),
      player("Peja Stojakovic", 6, 10, 16, { height: 94, shooting: 92, finishing: 80, handles: 72, passing: 74, defense: 68, rebounding: 72, athleticism: 64, iq: 88 }),
      player("Mike Bibby", 6, 2, 10, { height: 71, shooting: 86, finishing: 80, handles: 83, passing: 81, defense: 72, rebounding: 56, athleticism: 76, iq: 90 }),
      player("Vlade Divac", 7, 1, 21, { height: 99, shooting: 74, finishing: 80, handles: 66, passing: 86, defense: 78, rebounding: 84, athleticism: 56, iq: 88 }),
      player("Doug Christie", 6, 6, 13, { height: 82, shooting: 78, finishing: 78, handles: 78, passing: 78, defense: 92, rebounding: 68, athleticism: 82, iq: 80 }),
      player("Bobby Jackson", 6, 1, 24, { height: 68, shooting: 82, finishing: 82, handles: 82, passing: 80, defense: 76, rebounding: 58, athleticism: 86, iq: 78 }),
      player("Hedo Turkoglu", 6, 10, 15, { height: 94, shooting: 82, finishing: 78, handles: 76, passing: 78, defense: 72, rebounding: 72, athleticism: 68, iq: 84 }),
      player("Brad Miller", 7, 0, 52, { height: 98, shooting: 74, finishing: 78, handles: 62, passing: 80, defense: 76, rebounding: 82, athleticism: 54, iq: 76 }),
      player("Jason Williams", 6, 1, 55, { height: 68, shooting: 78, finishing: 78, handles: 92, passing: 90, defense: 68, rebounding: 50, athleticism: 82, iq: 78 }),
      player("Kevin Martin", 6, 7, 23, { height: 84, shooting: 86, finishing: 86, handles: 78, passing: 70, defense: 68, rebounding: 58, athleticism: 80, iq: 82 }),
      player("Ron Artest", 6, 7, 93, { height: 84, shooting: 74, finishing: 82, handles: 78, passing: 74, defense: 90, rebounding: 68, athleticism: 82, iq: 80 }),
      player("Gerald Wallace", 6, 7, 3, { height: 84, shooting: 70, finishing: 82, handles: 74, passing: 70, defense: 84, rebounding: 72, athleticism: 94, iq: 74 }),
      player("Scot Pollard", 6, 11, 31, { height: 96, shooting: 58, finishing: 74, handles: 54, passing: 62, defense: 80, rebounding: 78, athleticism: 74, iq: 68 }),
      player("Francisco Garcia", 6, 7, 32, { height: 84, shooting: 80, finishing: 78, handles: 74, passing: 70, defense: 80, rebounding: 60, athleticism: 84, iq: 74 }),
      player("Lawrence Funderburke", 6, 9, 30, { height: 90, shooting: 70, finishing: 78, handles: 62, passing: 66, defense: 76, rebounding: 78, athleticism: 78, iq: 70 }),
    ],
  },
  {
    era: "2000s",
    team: "Nets",
    note: "Kidd's Nets ran back-to-back Finals on pure playmaking and team defense.",
    players: [
      player("Jason Kidd", 6, 4, 5, { height: 77, shooting: 74, finishing: 80, handles: 90, passing: 99, defense: 84, rebounding: 76, athleticism: 84, iq: 95 }),
      player("Vince Carter", 6, 6, 15, { height: 82, shooting: 86, finishing: 85, handles: 82, passing: 76, defense: 72, rebounding: 66, athleticism: 87, iq: 84 }),
      player("Richard Jefferson", 6, 7, 24, { height: 84, shooting: 78, finishing: 86, handles: 74, passing: 72, defense: 76, rebounding: 68, athleticism: 86, iq: 78 }),
      player("Kenyon Martin", 6, 9, 6, { height: 90, shooting: 66, finishing: 82, handles: 62, passing: 64, defense: 88, rebounding: 86, athleticism: 90, iq: 76 }),
      player("Kerry Kittles", 6, 5, 23, { height: 80, shooting: 82, finishing: 78, handles: 78, passing: 72, defense: 86, rebounding: 58, athleticism: 82, iq: 78 }),
      player("Lucious Harris", 6, 5, 20, { height: 80, shooting: 78, finishing: 76, handles: 72, passing: 70, defense: 74, rebounding: 56, athleticism: 74, iq: 74 }),
      player("Jason Collins", 7, 0, 98, { height: 98, shooting: 48, finishing: 66, handles: 48, passing: 56, defense: 82, rebounding: 74, athleticism: 52, iq: 66 }),
      player("Brian Scalabrine", 6, 9, 44, { height: 90, shooting: 74, finishing: 68, handles: 58, passing: 66, defense: 70, rebounding: 70, athleticism: 54, iq: 70 }),
      player("Keith Van Horn", 6, 10, 44, { height: 94, shooting: 82, finishing: 82, handles: 74, passing: 72, defense: 70, rebounding: 76, athleticism: 78, iq: 78 }),
      player("Brook Lopez", 7, 0, 11, { height: 98, shooting: 74, finishing: 86, handles: 60, passing: 66, defense: 80, rebounding: 80, athleticism: 72, iq: 78 }),
      player("Devin Harris", 6, 3, 34, { height: 74, shooting: 78, finishing: 84, handles: 88, passing: 82, defense: 78, rebounding: 54, athleticism: 88, iq: 82 }),
      player("Nenad Krstic", 7, 0, 12, { height: 98, shooting: 74, finishing: 82, handles: 60, passing: 66, defense: 74, rebounding: 78, athleticism: 72, iq: 74 }),
      player("Aaron Williams", 6, 9, 34, { height: 90, shooting: 66, finishing: 78, handles: 60, passing: 64, defense: 80, rebounding: 76, athleticism: 80, iq: 72 }),
      player("Todd MacCulloch", 7, 0, 0, { height: 98, shooting: 62, finishing: 78, handles: 54, passing: 62, defense: 76, rebounding: 80, athleticism: 64, iq: 70 }),
      player("Rodney Rogers", 6, 7, 54, { height: 84, shooting: 80, finishing: 80, handles: 74, passing: 72, defense: 74, rebounding: 68, athleticism: 78, iq: 78 }),
    ],
  },
  {
    era: "2010s",
    team: "Pacers",
    note: "Indiana's suffocating defense and blue-collar identity made them the Warriors' kryptonite.",
    players: [
      player("Paul George", 6, 8, 24, { height: 86, shooting: 88, finishing: 88, handles: 82, passing: 80, defense: 93, rebounding: 76, athleticism: 92, iq: 88 }),
      player("Roy Hibbert", 7, 2, 55, { height: 100, shooting: 65, finishing: 80, handles: 48, passing: 62, defense: 92, rebounding: 84, athleticism: 54, iq: 76 }),
      player("David West", 6, 9, 21, { height: 90, shooting: 80, finishing: 84, handles: 66, passing: 74, defense: 86, rebounding: 82, athleticism: 74, iq: 86 }),
      player("Lance Stephenson", 6, 5, 1, { height: 80, shooting: 76, finishing: 82, handles: 82, passing: 80, defense: 86, rebounding: 72, athleticism: 84, iq: 76 }),
      player("George Hill", 6, 3, 3, { height: 74, shooting: 82, finishing: 80, handles: 82, passing: 80, defense: 84, rebounding: 58, athleticism: 80, iq: 80 }),
      player("Danny Granger", 6, 7, 33, { height: 84, shooting: 86, finishing: 82, handles: 74, passing: 72, defense: 80, rebounding: 68, athleticism: 78, iq: 82 }),
      player("Luis Scola", 6, 9, 4, { height: 90, shooting: 78, finishing: 82, handles: 62, passing: 68, defense: 76, rebounding: 84, athleticism: 62, iq: 80 }),
      player("Ian Mahinmi", 6, 11, 28, { height: 96, shooting: 58, finishing: 76, handles: 50, passing: 56, defense: 80, rebounding: 80, athleticism: 70, iq: 70 }),
      player("Victor Oladipo", 6, 4, 4, { height: 77, shooting: 82, finishing: 84, handles: 84, passing: 76, defense: 86, rebounding: 62, athleticism: 90, iq: 82 }),
      player("Myles Turner", 6, 11, 33, { height: 96, shooting: 76, finishing: 82, handles: 60, passing: 62, defense: 88, rebounding: 78, athleticism: 80, iq: 74 }),
      player("Domantas Sabonis", 6, 11, 11, { height: 96, shooting: 72, finishing: 86, handles: 70, passing: 80, defense: 74, rebounding: 86, athleticism: 74, iq: 88 }),
      player("Thaddeus Young", 6, 8, 21, { height: 86, shooting: 74, finishing: 82, handles: 74, passing: 72, defense: 82, rebounding: 74, athleticism: 84, iq: 74 }),
      player("Bojan Bogdanovic", 6, 7, 44, { height: 84, shooting: 86, finishing: 80, handles: 74, passing: 68, defense: 66, rebounding: 60, athleticism: 72, iq: 82 }),
      player("Darren Collison", 6, 0, 2, { height: 66, shooting: 82, finishing: 80, handles: 86, passing: 82, defense: 74, rebounding: 52, athleticism: 84, iq: 80 }),
      player("C.J. Miles", 6, 6, 0, { height: 82, shooting: 84, finishing: 76, handles: 72, passing: 66, defense: 72, rebounding: 56, athleticism: 78, iq: 78 }),
    ],
  },
  {
    era: "2010s",
    team: "Clippers",
    note: "Lob City ran on CP3's genius and Griffin/Jordan's rim gravity. Style points required.",
    players: [
      player("Chris Paul", 6, 0, 3, { height: 67, shooting: 86, finishing: 76, handles: 93, passing: 99, defense: 85, rebounding: 60, athleticism: 86, iq: 98 }),
      player("Blake Griffin", 6, 10, 32, { height: 94, shooting: 74, finishing: 89, handles: 80, passing: 80, defense: 76, rebounding: 84, athleticism: 93, iq: 84 }),
      player("DeAndre Jordan", 6, 11, 6, { height: 96, shooting: 38, finishing: 86, handles: 48, passing: 54, defense: 90, rebounding: 96, athleticism: 90, iq: 56 }),
      player("Jamal Crawford", 6, 5, 11, { height: 80, shooting: 86, finishing: 84, handles: 95, passing: 74, defense: 62, rebounding: 56, athleticism: 78, iq: 78 }),
      player("Caron Butler", 6, 7, 5, { height: 84, shooting: 80, finishing: 82, handles: 74, passing: 74, defense: 78, rebounding: 68, athleticism: 76, iq: 82 }),
      player("Matt Barnes", 6, 7, 22, { height: 84, shooting: 76, finishing: 76, handles: 72, passing: 70, defense: 82, rebounding: 70, athleticism: 78, iq: 76 }),
      player("Lamar Odom", 6, 10, 7, { height: 94, shooting: 74, finishing: 80, handles: 84, passing: 84, defense: 74, rebounding: 82, athleticism: 76, iq: 74 }),
      player("Randy Foye", 6, 4, 4, { height: 77, shooting: 80, finishing: 74, handles: 76, passing: 72, defense: 72, rebounding: 56, athleticism: 78, iq: 76 }),
      player("JJ Redick", 6, 4, 4, { height: 77, shooting: 92, finishing: 78, handles: 76, passing: 72, defense: 70, rebounding: 54, athleticism: 74, iq: 84 }),
      player("Lou Williams", 6, 1, 23, { height: 68, shooting: 84, finishing: 84, handles: 86, passing: 76, defense: 62, rebounding: 52, athleticism: 80, iq: 86 }),
      player("Tobias Harris", 6, 8, 34, { height: 86, shooting: 82, finishing: 84, handles: 78, passing: 72, defense: 72, rebounding: 74, athleticism: 78, iq: 80 }),
      player("Montrezl Harrell", 6, 7, 5, { height: 84, shooting: 58, finishing: 86, handles: 62, passing: 64, defense: 76, rebounding: 74, athleticism: 88, iq: 78 }),
      player("Danilo Gallinari", 6, 10, 8, { height: 94, shooting: 84, finishing: 82, handles: 74, passing: 70, defense: 66, rebounding: 68, athleticism: 74, iq: 82 }),
      player("Patrick Beverley", 6, 1, 21, { height: 68, shooting: 74, finishing: 74, handles: 80, passing: 74, defense: 90, rebounding: 60, athleticism: 82, iq: 74 }),
      player("Eric Bledsoe", 6, 1, 12, { height: 68, shooting: 74, finishing: 82, handles: 84, passing: 78, defense: 84, rebounding: 56, athleticism: 90, iq: 76 }),
    ],
  },
  {
    era: "2010s",
    team: "Grizzlies",
    note: "Grit and Grind. The toughest points in the league — earned in the post, in the mud.",
    players: [
      player("Marc Gasol", 7, 1, 33, { height: 99, shooting: 78, finishing: 88, handles: 70, passing: 80, defense: 89, rebounding: 86, athleticism: 66, iq: 88 }),
      player("Zach Randolph", 6, 9, 50, { height: 90, shooting: 78, finishing: 83, handles: 70, passing: 70, defense: 72, rebounding: 92, athleticism: 66, iq: 82 }),
      player("Mike Conley", 6, 1, 11, { height: 68, shooting: 84, finishing: 82, handles: 90, passing: 88, defense: 84, rebounding: 56, athleticism: 82, iq: 90 }),
      player("Tony Allen", 6, 4, 9, { height: 77, shooting: 66, finishing: 76, handles: 72, passing: 68, defense: 94, rebounding: 70, athleticism: 86, iq: 76 }),
      player("Tayshaun Prince", 6, 9, 21, { height: 90, shooting: 78, finishing: 76, handles: 72, passing: 76, defense: 86, rebounding: 66, athleticism: 76, iq: 78 }),
      player("Vince Carter", 6, 6, 15, { height: 82, shooting: 84, finishing: 80, handles: 76, passing: 72, defense: 70, rebounding: 60, athleticism: 80, iq: 78 }),
      player("Courtney Lee", 6, 5, 5, { height: 80, shooting: 82, finishing: 76, handles: 74, passing: 70, defense: 82, rebounding: 58, athleticism: 80, iq: 78 }),
      player("Kosta Koufos", 7, 0, 41, { height: 98, shooting: 60, finishing: 72, handles: 48, passing: 60, defense: 78, rebounding: 80, athleticism: 56, iq: 68 }),
      player("Rudy Gay", 6, 8, 22, { height: 86, shooting: 80, finishing: 86, handles: 80, passing: 72, defense: 74, rebounding: 70, athleticism: 86, iq: 80 }),
      player("O.J. Mayo", 6, 4, 32, { height: 77, shooting: 82, finishing: 82, handles: 82, passing: 74, defense: 74, rebounding: 58, athleticism: 82, iq: 80 }),
      player("Jeff Green", 6, 9, 32, { height: 90, shooting: 78, finishing: 82, handles: 74, passing: 70, defense: 74, rebounding: 66, athleticism: 86, iq: 76 }),
      player("JaMychal Green", 6, 9, 0, { height: 90, shooting: 74, finishing: 80, handles: 64, passing: 66, defense: 80, rebounding: 78, athleticism: 80, iq: 72 }),
      player("Greivis Vasquez", 6, 6, 21, { height: 82, shooting: 78, finishing: 80, handles: 84, passing: 84, defense: 70, rebounding: 62, athleticism: 74, iq: 78 }),
      player("Shane Battier", 6, 8, 31, { height: 86, shooting: 80, finishing: 76, handles: 70, passing: 74, defense: 88, rebounding: 66, athleticism: 76, iq: 88 }),
      player("Quincy Pondexter", 6, 6, 20, { height: 82, shooting: 78, finishing: 78, handles: 70, passing: 66, defense: 80, rebounding: 60, athleticism: 80, iq: 74 }),
    ],
  },
  {
    era: "1960s",
    team: "Warriors",
    note: "Wilt scored 100 points in a single game in 1962. The rest of the pool just tried to keep up.",
    players: [
      player("Wilt Chamberlain", 7, 1, 13, { height: 99, shooting: 72, finishing: 99, handles: 68, passing: 74, defense: 86, rebounding: 100, athleticism: 98, iq: 80 }),
      player("Nate Thurmond", 6, 11, 42, { height: 96, shooting: 72, finishing: 80, handles: 64, passing: 68, defense: 94, rebounding: 96, athleticism: 80, iq: 78 }),
      player("Paul Arizin", 6, 4, 11, { height: 77, shooting: 86, finishing: 82, handles: 72, passing: 72, defense: 72, rebounding: 68, athleticism: 78, iq: 84 }),
      player("Tom Meschery", 6, 6, 14, { height: 82, shooting: 74, finishing: 78, handles: 66, passing: 70, defense: 78, rebounding: 74, athleticism: 76, iq: 74 }),
      player("Guy Rodgers", 6, 0, 14, { height: 67, shooting: 74, finishing: 74, handles: 90, passing: 92, defense: 76, rebounding: 52, athleticism: 80, iq: 76 }),
      player("Al Attles", 6, 0, 1, { height: 67, shooting: 66, finishing: 72, handles: 80, passing: 78, defense: 84, rebounding: 56, athleticism: 82, iq: 76 }),
      player("Wayne Hightower", 6, 8, 8, { height: 88, shooting: 72, finishing: 76, handles: 66, passing: 66, defense: 70, rebounding: 78, athleticism: 78, iq: 70 }),
      player("Gary Phillips", 6, 3, 3, { height: 74, shooting: 68, finishing: 70, handles: 72, passing: 70, defense: 74, rebounding: 56, athleticism: 76, iq: 68 }),
      player("Rick Barry", 6, 7, 24, { height: 84, shooting: 90, finishing: 90, handles: 86, passing: 88, defense: 80, rebounding: 80, athleticism: 86, iq: 94 }),
      player("Tom Gola", 6, 6, 15, { height: 82, shooting: 74, finishing: 80, handles: 82, passing: 86, defense: 84, rebounding: 82, athleticism: 80, iq: 82 }),
      player("Jeff Mullins", 6, 4, 23, { height: 77, shooting: 84, finishing: 82, handles: 80, passing: 78, defense: 76, rebounding: 64, athleticism: 82, iq: 84 }),
      player("Clyde Lee", 6, 10, 43, { height: 94, shooting: 62, finishing: 76, handles: 56, passing: 64, defense: 82, rebounding: 86, athleticism: 76, iq: 72 }),
      player("Paul Neumann", 6, 1, 8, { height: 68, shooting: 80, finishing: 78, handles: 80, passing: 80, defense: 74, rebounding: 56, athleticism: 76, iq: 78 }),
      player("Fred Hetzel", 6, 8, 34, { height: 86, shooting: 78, finishing: 80, handles: 64, passing: 66, defense: 70, rebounding: 78, athleticism: 76, iq: 72 }),
      player("Jim King", 6, 2, 54, { height: 71, shooting: 76, finishing: 74, handles: 80, passing: 78, defense: 76, rebounding: 58, athleticism: 78, iq: 74 }),
    ],
  },
  {
    era: "1970s",
    team: "Lakers",
    note: "33 straight wins. 69 victories. Wilt parked near the rim while Jerry West handled the rest.",
    players: [
      player("Jerry West", 6, 2, 44, { height: 72, shooting: 90, finishing: 88, handles: 87, passing: 85, defense: 86, rebounding: 66, athleticism: 84, iq: 97 }),
      player("Wilt Chamberlain", 7, 1, 13, { height: 99, shooting: 66, finishing: 94, handles: 66, passing: 80, defense: 90, rebounding: 100, athleticism: 86, iq: 76 }),
      player("Gail Goodrich", 6, 1, 25, { height: 68, shooting: 88, finishing: 84, handles: 86, passing: 80, defense: 76, rebounding: 54, athleticism: 82, iq: 88 }),
      player("Happy Hairston", 6, 7, 52, { height: 84, shooting: 70, finishing: 80, handles: 64, passing: 68, defense: 78, rebounding: 90, athleticism: 80, iq: 74 }),
      player("Jim McMillian", 6, 5, 5, { height: 80, shooting: 82, finishing: 80, handles: 76, passing: 76, defense: 76, rebounding: 66, athleticism: 78, iq: 80 }),
      player("Elgin Baylor", 6, 5, 22, { height: 80, shooting: 88, finishing: 92, handles: 80, passing: 86, defense: 80, rebounding: 88, athleticism: 89, iq: 90 }),
      player("Pat Riley", 6, 4, 42, { height: 77, shooting: 76, finishing: 74, handles: 74, passing: 74, defense: 74, rebounding: 60, athleticism: 76, iq: 72 }),
      player("Flynn Robinson", 6, 1, 11, { height: 68, shooting: 82, finishing: 76, handles: 78, passing: 72, defense: 70, rebounding: 52, athleticism: 78, iq: 76 }),
      player("Kareem Abdul-Jabbar", 7, 2, 33, { height: 100, shooting: 84, finishing: 97, handles: 70, passing: 84, defense: 94, rebounding: 90, athleticism: 84, iq: 94 }),
      player("Norm Nixon", 6, 2, 10, { height: 71, shooting: 82, finishing: 84, handles: 84, passing: 82, defense: 74, rebounding: 56, athleticism: 86, iq: 84 }),
      player("Keith Erickson", 6, 5, 53, { height: 80, shooting: 78, finishing: 78, handles: 78, passing: 76, defense: 84, rebounding: 66, athleticism: 84, iq: 78 }),
      player("Kermit Washington", 6, 8, 42, { height: 86, shooting: 66, finishing: 80, handles: 60, passing: 66, defense: 86, rebounding: 86, athleticism: 84, iq: 74 }),
      player("Connie Hawkins", 6, 8, 42, { height: 86, shooting: 80, finishing: 88, handles: 84, passing: 82, defense: 78, rebounding: 78, athleticism: 90, iq: 82 }),
      player("Lou Hudson", 6, 5, 23, { height: 80, shooting: 86, finishing: 84, handles: 80, passing: 76, defense: 76, rebounding: 66, athleticism: 84, iq: 82 }),
      player("Don Ford", 6, 9, 42, { height: 90, shooting: 76, finishing: 78, handles: 66, passing: 70, defense: 74, rebounding: 76, athleticism: 76, iq: 74 }),
    ],
  },
  {
    era: "1970s",
    team: "Warriors",
    note: "Swept the Bullets in four straight. Rick Barry shot free throws underhanded and didn't care what anyone thought.",
    players: [
      player("Rick Barry", 6, 7, 24, { height: 84, shooting: 87, finishing: 80, handles: 86, passing: 84, defense: 82, rebounding: 76, athleticism: 82, iq: 92 }),
      player("Jamaal Wilkes", 6, 6, 14, { height: 82, shooting: 84, finishing: 80, handles: 74, passing: 74, defense: 80, rebounding: 70, athleticism: 82, iq: 82 }),
      player("Phil Smith", 6, 4, 20, { height: 77, shooting: 82, finishing: 78, handles: 78, passing: 76, defense: 78, rebounding: 60, athleticism: 80, iq: 80 }),
      player("Clifford Ray", 6, 9, 15, { height: 90, shooting: 58, finishing: 72, handles: 56, passing: 68, defense: 84, rebounding: 88, athleticism: 76, iq: 66 }),
      player("Butch Beard", 6, 3, 10, { height: 74, shooting: 78, finishing: 74, handles: 80, passing: 78, defense: 78, rebounding: 56, athleticism: 78, iq: 76 }),
      player("Charles Johnson", 6, 3, 35, { height: 74, shooting: 76, finishing: 74, handles: 74, passing: 74, defense: 78, rebounding: 58, athleticism: 78, iq: 74 }),
      player("Derrek Dickey", 6, 7, 13, { height: 84, shooting: 66, finishing: 70, handles: 60, passing: 62, defense: 72, rebounding: 76, athleticism: 72, iq: 64 }),
      player("George Johnson", 6, 11, 24, { height: 96, shooting: 52, finishing: 68, handles: 48, passing: 60, defense: 82, rebounding: 80, athleticism: 68, iq: 62 }),
      player("Nate Thurmond", 6, 11, 42, { height: 96, shooting: 66, finishing: 82, handles: 60, passing: 72, defense: 96, rebounding: 96, athleticism: 84, iq: 82 }),
      player("Robert Parish", 7, 0, "00", { height: 98, shooting: 74, finishing: 86, handles: 60, passing: 68, defense: 86, rebounding: 90, athleticism: 80, iq: 80 }),
      player("Jeff Mullins", 6, 4, 23, { height: 77, shooting: 84, finishing: 82, handles: 80, passing: 78, defense: 76, rebounding: 64, athleticism: 80, iq: 84 }),
      player("Gus Williams", 6, 2, 10, { height: 71, shooting: 80, finishing: 84, handles: 88, passing: 82, defense: 84, rebounding: 56, athleticism: 90, iq: 84 }),
      player("Sonny Parker", 6, 4, 25, { height: 77, shooting: 78, finishing: 80, handles: 76, passing: 74, defense: 80, rebounding: 70, athleticism: 84, iq: 76 }),
      player("Charles Dudley", 6, 3, 12, { height: 74, shooting: 72, finishing: 76, handles: 82, passing: 80, defense: 80, rebounding: 56, athleticism: 80, iq: 74 }),
      player("Jim Barnett", 6, 4, 20, { height: 77, shooting: 82, finishing: 80, handles: 80, passing: 76, defense: 74, rebounding: 60, athleticism: 80, iq: 78 }),
    ],
  },
  {
    era: "1990s",
    team: "Suns",
    note: "Barkley dragged Phoenix to the 1993 Finals. KJ made sure nothing came easy on the perimeter.",
    players: [
      player("Charles Barkley", 6, 6, 34, { height: 82, shooting: 84, finishing: 86, handles: 78, passing: 86, defense: 80, rebounding: 96, athleticism: 94, iq: 92 }),
      player("Kevin Johnson", 6, 1, 7, { height: 68, shooting: 84, finishing: 86, handles: 94, passing: 92, defense: 80, rebounding: 56, athleticism: 92, iq: 90 }),
      player("Dan Majerle", 6, 6, 9, { height: 82, shooting: 88, finishing: 78, handles: 76, passing: 74, defense: 88, rebounding: 70, athleticism: 84, iq: 86 }),
      player("Danny Ainge", 6, 5, 22, { height: 80, shooting: 86, finishing: 76, handles: 82, passing: 82, defense: 78, rebounding: 58, athleticism: 74, iq: 86 }),
      player("Tom Chambers", 6, 10, 10, { height: 94, shooting: 82, finishing: 82, handles: 72, passing: 70, defense: 66, rebounding: 80, athleticism: 80, iq: 82 }),
      player("Cedric Ceballos", 6, 7, 23, { height: 84, shooting: 84, finishing: 84, handles: 72, passing: 66, defense: 68, rebounding: 80, athleticism: 82, iq: 78 }),
      player("Mark West", 6, 10, 41, { height: 94, shooting: 54, finishing: 70, handles: 50, passing: 56, defense: 82, rebounding: 82, athleticism: 72, iq: 62 }),
      player("Frank Johnson", 6, 1, 10, { height: 68, shooting: 72, finishing: 70, handles: 80, passing: 80, defense: 76, rebounding: 50, athleticism: 74, iq: 72 }),
      player("Jason Kidd", 6, 4, 32, { height: 77, shooting: 74, finishing: 82, handles: 90, passing: 93, defense: 82, rebounding: 74, athleticism: 88, iq: 95 }),
      player("Danny Manning", 6, 10, 25, { height: 94, shooting: 80, finishing: 86, handles: 80, passing: 80, defense: 78, rebounding: 78, athleticism: 84, iq: 80 }),
      player("Wesley Person", 6, 6, 7, { height: 82, shooting: 90, finishing: 80, handles: 76, passing: 72, defense: 74, rebounding: 62, athleticism: 82, iq: 80 }),
      player("A.C. Green", 6, 9, 45, { height: 90, shooting: 70, finishing: 80, handles: 62, passing: 68, defense: 78, rebounding: 86, athleticism: 80, iq: 78 }),
      player("Rex Chapman", 6, 4, 3, { height: 77, shooting: 86, finishing: 82, handles: 82, passing: 74, defense: 72, rebounding: 56, athleticism: 86, iq: 84 }),
      player("Cliff Robinson", 6, 10, 3, { height: 94, shooting: 80, finishing: 82, handles: 74, passing: 70, defense: 84, rebounding: 74, athleticism: 84, iq: 78 }),
      player("Oliver Miller", 6, 9, 25, { height: 90, shooting: 66, finishing: 80, handles: 70, passing: 78, defense: 84, rebounding: 80, athleticism: 74, iq: 72 }),
    ],
  },
  {
    era: "2000s",
    team: "Mavericks",
    note: "Before the 2011 title, Dirk and Nash invented a new kind of offense. A 7-footer pulling up from 25 feet changed the league.",
    players: [
      player("Dirk Nowitzki", 7, 0, 41, { height: 98, shooting: 98, finishing: 90, handles: 82, passing: 80, defense: 72, rebounding: 88, athleticism: 76, iq: 88 }),
      player("Steve Nash", 6, 3, 13, { height: 74, shooting: 90, finishing: 82, handles: 96, passing: 98, defense: 66, rebounding: 54, athleticism: 80, iq: 97 }),
      player("Michael Finley", 6, 7, 4, { height: 84, shooting: 88, finishing: 82, handles: 80, passing: 76, defense: 80, rebounding: 66, athleticism: 80, iq: 86 }),
      player("Jason Terry", 6, 2, 31, { height: 72, shooting: 90, finishing: 80, handles: 84, passing: 80, defense: 72, rebounding: 50, athleticism: 78, iq: 90 }),
      player("Antoine Walker", 6, 9, 8, { height: 90, shooting: 76, finishing: 80, handles: 78, passing: 78, defense: 70, rebounding: 82, athleticism: 78, iq: 74 }),
      player("Nick Van Exel", 6, 1, 6, { height: 68, shooting: 84, finishing: 78, handles: 88, passing: 86, defense: 66, rebounding: 52, athleticism: 78, iq: 84 }),
      player("Eduardo Najera", 6, 8, 14, { height: 88, shooting: 66, finishing: 70, handles: 64, passing: 64, defense: 82, rebounding: 78, athleticism: 80, iq: 68 }),
      player("Shawn Bradley", 7, 6, 44, { height: 100, shooting: 58, finishing: 66, handles: 50, passing: 60, defense: 76, rebounding: 76, athleticism: 56, iq: 56 }),
      player("Josh Howard", 6, 7, 5, { height: 84, shooting: 80, finishing: 84, handles: 78, passing: 72, defense: 82, rebounding: 72, athleticism: 86, iq: 80 }),
      player("Jason Kidd", 6, 4, 2, { height: 77, shooting: 78, finishing: 78, handles: 92, passing: 96, defense: 84, rebounding: 72, athleticism: 78, iq: 95 }),
      player("Shawn Marion", 6, 7, 0, { height: 84, shooting: 74, finishing: 84, handles: 74, passing: 70, defense: 86, rebounding: 80, athleticism: 90, iq: 78 }),
      player("Jerry Stackhouse", 6, 6, 42, { height: 82, shooting: 80, finishing: 84, handles: 80, passing: 76, defense: 72, rebounding: 60, athleticism: 82, iq: 82 }),
      player("Erick Dampier", 6, 11, 25, { height: 96, shooting: 58, finishing: 80, handles: 54, passing: 60, defense: 82, rebounding: 84, athleticism: 78, iq: 70 }),
      player("Devin Harris", 6, 3, 34, { height: 74, shooting: 76, finishing: 82, handles: 88, passing: 80, defense: 78, rebounding: 52, athleticism: 88, iq: 80 }),
      player("Marquis Daniels", 6, 6, 6, { height: 82, shooting: 74, finishing: 82, handles: 80, passing: 74, defense: 78, rebounding: 64, athleticism: 84, iq: 74 }),
    ],
  },
  {
    era: "2000s",
    team: "Timberwolves",
    note: "KG's MVP year dragged Minnesota to 58 wins. Cassell and Sprewell made the West Conference Finals feel inevitable.",
    players: [
      player("Kevin Garnett", 6, 11, 21, { height: 96, shooting: 73, finishing: 88, handles: 72, passing: 88, defense: 96, rebounding: 98, athleticism: 94, iq: 94 }),
      player("Sam Cassell", 6, 3, 19, { height: 74, shooting: 90, finishing: 86, handles: 84, passing: 80, defense: 70, rebounding: 56, athleticism: 70, iq: 88 }),
      player("Latrell Sprewell", 6, 5, 8, { height: 80, shooting: 84, finishing: 84, handles: 80, passing: 76, defense: 87, rebounding: 62, athleticism: 86, iq: 78 }),
      player("Wally Szczerbiak", 6, 7, 10, { height: 84, shooting: 88, finishing: 80, handles: 74, passing: 72, defense: 68, rebounding: 66, athleticism: 74, iq: 80 }),
      player("Troy Hudson", 6, 1, 3, { height: 68, shooting: 82, finishing: 76, handles: 82, passing: 78, defense: 64, rebounding: 50, athleticism: 76, iq: 78 }),
      player("Fred Hoiberg", 6, 4, 15, { height: 77, shooting: 88, finishing: 74, handles: 74, passing: 74, defense: 64, rebounding: 58, athleticism: 72, iq: 78 }),
      player("Mark Madsen", 6, 9, 34, { height: 90, shooting: 52, finishing: 64, handles: 52, passing: 58, defense: 76, rebounding: 80, athleticism: 72, iq: 60 }),
      player("Michael Olowokandi", 7, 0, 0, { height: 98, shooting: 54, finishing: 70, handles: 48, passing: 54, defense: 76, rebounding: 84, athleticism: 66, iq: 56 }),
      player("Terrell Brandon", 5, 11, 1, { height: 64, shooting: 84, finishing: 82, handles: 90, passing: 88, defense: 80, rebounding: 54, athleticism: 84, iq: 84 }),
      player("Al Jefferson", 6, 10, 25, { height: 94, shooting: 70, finishing: 86, handles: 64, passing: 66, defense: 74, rebounding: 84, athleticism: 78, iq: 76 }),
      player("Chauncey Billups", 6, 3, 1, { height: 74, shooting: 82, finishing: 82, handles: 86, passing: 84, defense: 80, rebounding: 58, athleticism: 82, iq: 86 }),
      player("Ricky Davis", 6, 7, 31, { height: 84, shooting: 80, finishing: 84, handles: 80, passing: 74, defense: 68, rebounding: 62, athleticism: 88, iq: 74 }),
      player("Anthony Peeler", 6, 4, 14, { height: 77, shooting: 84, finishing: 78, handles: 78, passing: 72, defense: 78, rebounding: 58, athleticism: 78, iq: 80 }),
      player("Rasho Nesterovic", 7, 0, 8, { height: 98, shooting: 64, finishing: 80, handles: 56, passing: 64, defense: 82, rebounding: 80, athleticism: 72, iq: 72 }),
      player("Trenton Hassell", 6, 5, 40, { height: 80, shooting: 70, finishing: 76, handles: 74, passing: 70, defense: 88, rebounding: 60, athleticism: 82, iq: 72 }),
    ],
  },
  {
    era: "2010s",
    team: "Spurs",
    note: "The Kawhi-LaMarcus years. Same system, new stars. San Antonio made winning look like scheduled maintenance.",
    players: [
      player("Kawhi Leonard", 6, 7, 2, { height: 84, shooting: 90, finishing: 90, handles: 88, passing: 80, defense: 98, rebounding: 82, athleticism: 90, iq: 92 }),
      player("LaMarcus Aldridge", 6, 11, 12, { height: 96, shooting: 88, finishing: 90, handles: 74, passing: 74, defense: 82, rebounding: 92, athleticism: 76, iq: 86 }),
      player("Manu Ginobili", 6, 6, 20, { height: 82, shooting: 86, finishing: 84, handles: 86, passing: 84, defense: 78, rebounding: 60, athleticism: 82, iq: 94 }),
      player("Tony Parker", 6, 2, 9, { height: 72, shooting: 82, finishing: 94, handles: 92, passing: 85, defense: 76, rebounding: 52, athleticism: 84, iq: 88 }),
      player("Pau Gasol", 7, 0, 16, { height: 98, shooting: 80, finishing: 86, handles: 74, passing: 82, defense: 80, rebounding: 90, athleticism: 68, iq: 80 }),
      player("Danny Green", 6, 6, 14, { height: 82, shooting: 86, finishing: 74, handles: 74, passing: 72, defense: 88, rebounding: 62, athleticism: 80, iq: 80 }),
      player("Patty Mills", 6, 0, 8, { height: 67, shooting: 88, finishing: 76, handles: 82, passing: 78, defense: 72, rebounding: 48, athleticism: 80, iq: 84 }),
      player("Kyle Anderson", 6, 9, 1, { height: 90, shooting: 74, finishing: 78, handles: 76, passing: 80, defense: 80, rebounding: 76, athleticism: 66, iq: 72 }),
      player("Tim Duncan", 6, 11, 21, { height: 96, shooting: 78, finishing: 86, handles: 68, passing: 78, defense: 90, rebounding: 90, athleticism: 74, iq: 88 }),
      player("DeMar DeRozan", 6, 6, 10, { height: 82, shooting: 78, finishing: 86, handles: 84, passing: 78, defense: 72, rebounding: 64, athleticism: 84, iq: 84 }),
      player("Boris Diaw", 6, 8, 33, { height: 86, shooting: 78, finishing: 80, handles: 80, passing: 86, defense: 76, rebounding: 70, athleticism: 66, iq: 90 }),
      player("Tiago Splitter", 6, 11, 22, { height: 96, shooting: 62, finishing: 82, handles: 60, passing: 70, defense: 80, rebounding: 78, athleticism: 74, iq: 72 }),
      player("Rudy Gay", 6, 8, 22, { height: 86, shooting: 78, finishing: 82, handles: 78, passing: 72, defense: 74, rebounding: 72, athleticism: 78, iq: 78 }),
      player("Marco Belinelli", 6, 5, 18, { height: 80, shooting: 86, finishing: 76, handles: 74, passing: 70, defense: 66, rebounding: 54, athleticism: 72, iq: 82 }),
      player("Jakob Poeltl", 7, 0, 25, { height: 98, shooting: 54, finishing: 82, handles: 56, passing: 64, defense: 82, rebounding: 80, athleticism: 78, iq: 70 }),
    ],
  },
  {
    era: "2010s",
    team: "Raptors",
    note: "Before Kawhi, Lowry and DeRozan built a culture. Mid-range gospel, annual playoff heartbreak included.",
    players: [
      player("DeMar DeRozan", 6, 7, 10, { height: 84, shooting: 88, finishing: 88, handles: 82, passing: 80, defense: 76, rebounding: 68, athleticism: 82, iq: 92 }),
      player("Kyle Lowry", 6, 0, 7, { height: 67, shooting: 86, finishing: 80, handles: 88, passing: 90, defense: 86, rebounding: 64, athleticism: 80, iq: 91 }),
      player("Serge Ibaka", 6, 10, 9, { height: 94, shooting: 78, finishing: 80, handles: 68, passing: 68, defense: 90, rebounding: 86, athleticism: 82, iq: 76 }),
      player("Jonas Valanciunas", 7, 0, 17, { height: 98, shooting: 76, finishing: 84, handles: 54, passing: 64, defense: 84, rebounding: 94, athleticism: 68, iq: 74 }),
      player("Norman Powell", 6, 4, 24, { height: 77, shooting: 82, finishing: 82, handles: 78, passing: 72, defense: 78, rebounding: 62, athleticism: 84, iq: 80 }),
      player("Terrence Ross", 6, 6, 31, { height: 82, shooting: 84, finishing: 78, handles: 76, passing: 68, defense: 70, rebounding: 62, athleticism: 84, iq: 74 }),
      player("Patrick Patterson", 6, 9, 54, { height: 90, shooting: 80, finishing: 76, handles: 68, passing: 68, defense: 80, rebounding: 74, athleticism: 74, iq: 74 }),
      player("Bismack Biyombo", 6, 9, 8, { height: 90, shooting: 52, finishing: 68, handles: 50, passing: 56, defense: 86, rebounding: 86, athleticism: 80, iq: 60 }),
      player("Kawhi Leonard", 6, 7, 2, { height: 84, shooting: 82, finishing: 90, handles: 82, passing: 74, defense: 94, rebounding: 74, athleticism: 86, iq: 90 }),
      player("Pascal Siakam", 6, 9, 43, { height: 90, shooting: 74, finishing: 84, handles: 78, passing: 72, defense: 84, rebounding: 76, athleticism: 88, iq: 78 }),
      player("Marc Gasol", 6, 11, 33, { height: 96, shooting: 78, finishing: 80, handles: 66, passing: 84, defense: 84, rebounding: 80, athleticism: 64, iq: 80 }),
      player("Fred VanVleet", 6, 1, 23, { height: 68, shooting: 80, finishing: 76, handles: 84, passing: 80, defense: 84, rebounding: 54, athleticism: 78, iq: 84 }),
      player("Danny Green", 6, 6, 14, { height: 82, shooting: 84, finishing: 74, handles: 70, passing: 68, defense: 86, rebounding: 60, athleticism: 78, iq: 80 }),
      player("DeMarre Carroll", 6, 8, 5, { height: 86, shooting: 78, finishing: 78, handles: 70, passing: 68, defense: 84, rebounding: 66, athleticism: 82, iq: 74 }),
      player("Cory Joseph", 6, 3, 6, { height: 74, shooting: 76, finishing: 78, handles: 84, passing: 78, defense: 82, rebounding: 56, athleticism: 80, iq: 76 }),
    ],
  },
  {
    era: "2020s",
    team: "Celtics",
    note: "The 2024 champions. Tatum and Brown finally silenced every doubter with the deepest roster in the league.",
    players: [
      player("Jayson Tatum", 6, 8, 0, { height: 88, shooting: 92, finishing: 88, handles: 86, passing: 78, defense: 86, rebounding: 82, athleticism: 86, iq: 92 }),
      player("Jaylen Brown", 6, 6, 7, { height: 82, shooting: 88, finishing: 88, handles: 82, passing: 72, defense: 86, rebounding: 72, athleticism: 92, iq: 88 }),
      player("Kristaps Porzingis", 7, 2, 8, { height: 100, shooting: 88, finishing: 82, handles: 76, passing: 70, defense: 88, rebounding: 86, athleticism: 80, iq: 78 }),
      player("Jrue Holiday", 6, 4, 12, { height: 77, shooting: 82, finishing: 82, handles: 86, passing: 84, defense: 94, rebounding: 64, athleticism: 84, iq: 90 }),
      player("Al Horford", 6, 9, 42, { height: 90, shooting: 82, finishing: 80, handles: 72, passing: 80, defense: 88, rebounding: 82, athleticism: 70, iq: 87 }),
      player("Derrick White", 6, 4, 9, { height: 77, shooting: 84, finishing: 80, handles: 82, passing: 78, defense: 90, rebounding: 60, athleticism: 80, iq: 82 }),
      player("Payton Pritchard", 6, 1, 11, { height: 68, shooting: 88, finishing: 76, handles: 82, passing: 78, defense: 70, rebounding: 54, athleticism: 76, iq: 84 }),
      player("Sam Hauser", 6, 8, 30, { height: 88, shooting: 92, finishing: 74, handles: 70, passing: 70, defense: 68, rebounding: 66, athleticism: 72, iq: 76 }),
      player("Marcus Smart", 6, 4, 36, { height: 77, shooting: 72, finishing: 78, handles: 82, passing: 80, defense: 92, rebounding: 62, athleticism: 80, iq: 88 }),
      player("Kemba Walker", 6, 0, 8, { height: 66, shooting: 86, finishing: 86, handles: 90, passing: 82, defense: 64, rebounding: 52, athleticism: 82, iq: 84 }),
      player("Malcolm Brogdon", 6, 5, 13, { height: 80, shooting: 82, finishing: 80, handles: 82, passing: 80, defense: 76, rebounding: 64, athleticism: 74, iq: 82 }),
      player("Robert Williams III", 6, 9, 44, { height: 90, shooting: 54, finishing: 84, handles: 58, passing: 66, defense: 90, rebounding: 84, athleticism: 92, iq: 72 }),
      player("Grant Williams", 6, 6, 12, { height: 82, shooting: 78, finishing: 76, handles: 66, passing: 66, defense: 84, rebounding: 66, athleticism: 76, iq: 76 }),
      player("Daniel Theis", 6, 8, 27, { height: 86, shooting: 68, finishing: 80, handles: 60, passing: 66, defense: 82, rebounding: 76, athleticism: 78, iq: 72 }),
      player("Luke Kornet", 7, 2, 40, { height: 100, shooting: 58, finishing: 80, handles: 54, passing: 64, defense: 80, rebounding: 74, athleticism: 70, iq: 70 }),
    ],
  },
  {
    era: "2020s",
    team: "Heat",
    note: "Two Finals runs in three years on pure fourth-quarter will. Jimmy Butler does not take nights off.",
    players: [
      player("Jimmy Butler", 6, 7, 22, { height: 84, shooting: 84, finishing: 86, handles: 82, passing: 82, defense: 92, rebounding: 74, athleticism: 84, iq: 91 }),
      player("Bam Adebayo", 6, 9, 13, { height: 90, shooting: 76, finishing: 86, handles: 76, passing: 82, defense: 94, rebounding: 90, athleticism: 92, iq: 88 }),
      player("Tyler Herro", 6, 5, 14, { height: 80, shooting: 92, finishing: 84, handles: 82, passing: 78, defense: 68, rebounding: 58, athleticism: 78, iq: 88 }),
      player("Kyle Lowry", 6, 0, 7, { height: 67, shooting: 82, finishing: 76, handles: 84, passing: 86, defense: 82, rebounding: 58, athleticism: 72, iq: 91 }),
      player("Duncan Robinson", 6, 7, 55, { height: 84, shooting: 96, finishing: 74, handles: 70, passing: 70, defense: 64, rebounding: 60, athleticism: 72, iq: 82 }),
      player("Caleb Martin", 6, 5, 16, { height: 80, shooting: 78, finishing: 80, handles: 74, passing: 70, defense: 80, rebounding: 68, athleticism: 82, iq: 80 }),
      player("Victor Oladipo", 6, 4, 4, { height: 77, shooting: 82, finishing: 82, handles: 80, passing: 76, defense: 84, rebounding: 60, athleticism: 86, iq: 80 }),
      player("Udonis Haslem", 6, 8, 40, { height: 88, shooting: 72, finishing: 76, handles: 58, passing: 62, defense: 78, rebounding: 82, athleticism: 66, iq: 76 }),
      player("Goran Dragic", 6, 3, 7, { height: 74, shooting: 80, finishing: 84, handles: 88, passing: 84, defense: 70, rebounding: 56, athleticism: 80, iq: 82 }),
      player("Max Strus", 6, 5, 31, { height: 80, shooting: 84, finishing: 76, handles: 72, passing: 68, defense: 74, rebounding: 58, athleticism: 78, iq: 80 }),
      player("Gabe Vincent", 6, 2, 2, { height: 71, shooting: 80, finishing: 76, handles: 82, passing: 76, defense: 82, rebounding: 52, athleticism: 78, iq: 80 }),
      player("Kevin Love", 6, 8, 42, { height: 86, shooting: 80, finishing: 78, handles: 68, passing: 80, defense: 66, rebounding: 80, athleticism: 64, iq: 78 }),
      player("Terry Rozier", 6, 1, 2, { height: 68, shooting: 78, finishing: 80, handles: 84, passing: 76, defense: 74, rebounding: 58, athleticism: 82, iq: 80 }),
      player("Andre Iguodala", 6, 6, 28, { height: 82, shooting: 70, finishing: 78, handles: 78, passing: 82, defense: 84, rebounding: 66, athleticism: 80, iq: 78 }),
      player("Jae Crowder", 6, 6, 99, { height: 82, shooting: 76, finishing: 76, handles: 70, passing: 66, defense: 82, rebounding: 66, athleticism: 78, iq: 76 }),
    ],
  },
  {
    era: "1970s",
    team: "Trail Blazers",
    note: "Bill Walton's only healthy full season ended with a championship. The most dominant big man in 1977 wasn't Kareem.",
    players: [
      player("Bill Walton", 6, 11, 32, { height: 96, shooting: 74, finishing: 90, handles: 70, passing: 92, defense: 96, rebounding: 98, athleticism: 80, iq: 93 }),
      player("Maurice Lucas", 6, 9, 20, { height: 90, shooting: 76, finishing: 80, handles: 66, passing: 68, defense: 86, rebounding: 88, athleticism: 80, iq: 82 }),
      player("Lionel Hollins", 6, 3, 14, { height: 74, shooting: 80, finishing: 78, handles: 84, passing: 80, defense: 84, rebounding: 56, athleticism: 82, iq: 82 }),
      player("Dave Twardzik", 6, 1, 12, { height: 68, shooting: 78, finishing: 74, handles: 82, passing: 84, defense: 80, rebounding: 52, athleticism: 74, iq: 80 }),
      player("Bobby Gross", 6, 6, 35, { height: 82, shooting: 78, finishing: 78, handles: 72, passing: 74, defense: 80, rebounding: 66, athleticism: 76, iq: 76 }),
      player("Larry Steele", 6, 5, 15, { height: 80, shooting: 74, finishing: 72, handles: 76, passing: 72, defense: 84, rebounding: 60, athleticism: 78, iq: 72 }),
      player("Wally Walker", 6, 7, 34, { height: 84, shooting: 74, finishing: 76, handles: 66, passing: 68, defense: 72, rebounding: 72, athleticism: 76, iq: 70 }),
      player("Lloyd Neal", 6, 7, 36, { height: 84, shooting: 68, finishing: 72, handles: 58, passing: 62, defense: 76, rebounding: 80, athleticism: 72, iq: 66 }),
      player("Geoff Petrie", 6, 4, 45, { height: 77, shooting: 86, finishing: 84, handles: 84, passing: 80, defense: 72, rebounding: 58, athleticism: 82, iq: 84 }),
      player("Sidney Wicks", 6, 8, 21, { height: 86, shooting: 74, finishing: 84, handles: 74, passing: 74, defense: 78, rebounding: 86, athleticism: 84, iq: 80 }),
      player("Herm Gilliam", 6, 3, 24, { height: 74, shooting: 80, finishing: 80, handles: 80, passing: 76, defense: 80, rebounding: 60, athleticism: 82, iq: 78 }),
      player("Johnny Davis", 6, 2, 15, { height: 71, shooting: 78, finishing: 80, handles: 84, passing: 80, defense: 80, rebounding: 56, athleticism: 84, iq: 80 }),
      player("Corky Calhoun", 6, 7, 14, { height: 84, shooting: 72, finishing: 76, handles: 68, passing: 70, defense: 82, rebounding: 72, athleticism: 80, iq: 74 }),
      player("Tom Owens", 6, 10, 14, { height: 94, shooting: 74, finishing: 82, handles: 62, passing: 70, defense: 78, rebounding: 82, athleticism: 74, iq: 78 }),
      player("Barry Clemens", 6, 6, 16, { height: 82, shooting: 78, finishing: 78, handles: 70, passing: 72, defense: 76, rebounding: 72, athleticism: 74, iq: 76 }),
    ],
  },
  {
    era: "1970s",
    team: "Celtics",
    note: "Cowens and Havlicek's two-title era — relentless defense, deep wings, and championship poise.",
    players: [
      player("John Havlicek", 6, 5, 17, { height: 80, shooting: 84, finishing: 83, handles: 84, passing: 80, defense: 90, rebounding: 76, athleticism: 90, iq: 88 }),
      player("Dave Cowens", 6, 9, 18, { height: 90, shooting: 80, finishing: 84, handles: 76, passing: 82, defense: 90, rebounding: 94, athleticism: 88, iq: 88 }),
      player("Jo Jo White", 6, 3, 10, { height: 74, shooting: 86, finishing: 84, handles: 86, passing: 84, defense: 82, rebounding: 60, athleticism: 86, iq: 88 }),
      player("Paul Silas", 6, 7, 35, { height: 84, shooting: 62, finishing: 76, handles: 60, passing: 72, defense: 88, rebounding: 92, athleticism: 82, iq: 82 }),
      player("Don Chaney", 6, 5, 12, { height: 80, shooting: 74, finishing: 80, handles: 78, passing: 74, defense: 90, rebounding: 64, athleticism: 86, iq: 80 }),
      player("Don Nelson", 6, 6, 19, { height: 82, shooting: 82, finishing: 80, handles: 70, passing: 74, defense: 76, rebounding: 74, athleticism: 70, iq: 88 }),
      player("Charlie Scott", 6, 5, 11, { height: 80, shooting: 84, finishing: 84, handles: 86, passing: 80, defense: 78, rebounding: 62, athleticism: 88, iq: 82 }),
      player("Nate Archibald", 6, 1, 7, { height: 68, shooting: 82, finishing: 84, handles: 94, passing: 92, defense: 74, rebounding: 54, athleticism: 86, iq: 86 }),
      player("Kevin Stacom", 6, 3, 30, { height: 74, shooting: 80, finishing: 76, handles: 80, passing: 76, defense: 74, rebounding: 56, athleticism: 78, iq: 76 }),
      player("Steve Kuberski", 6, 8, 33, { height: 86, shooting: 76, finishing: 78, handles: 64, passing: 68, defense: 74, rebounding: 78, athleticism: 74, iq: 74 }),
      player("Curtis Rowe", 6, 7, 43, { height: 84, shooting: 74, finishing: 80, handles: 66, passing: 70, defense: 78, rebounding: 80, athleticism: 78, iq: 74 }),
      player("Jim Ard", 6, 8, 44, { height: 86, shooting: 66, finishing: 74, handles: 58, passing: 66, defense: 76, rebounding: 78, athleticism: 74, iq: 70 }),
      player("Art Williams", 6, 1, 20, { height: 68, shooting: 70, finishing: 74, handles: 84, passing: 82, defense: 82, rebounding: 56, athleticism: 80, iq: 74 }),
      player("Hank Finkel", 7, 0, 45, { height: 98, shooting: 62, finishing: 72, handles: 52, passing: 62, defense: 74, rebounding: 76, athleticism: 64, iq: 68 }),
      player("Tom Sanders", 6, 6, 16, { height: 82, shooting: 66, finishing: 74, handles: 64, passing: 70, defense: 90, rebounding: 80, athleticism: 80, iq: 80 }),
    ],
  },
  {
    era: "1970s",
    team: "Bullets",
    note: "Unseld's outlets and Hayes' scoring anchored a perennial contender that broke through for the 1978 title.",
    players: [
      player("Wes Unseld", 6, 7, 41, { height: 84, shooting: 66, finishing: 80, handles: 64, passing: 84, defense: 90, rebounding: 96, athleticism: 82, iq: 90 }),
      player("Elvin Hayes", 6, 9, 11, { height: 90, shooting: 80, finishing: 86, handles: 66, passing: 70, defense: 88, rebounding: 92, athleticism: 86, iq: 84 }),
      player("Earl Monroe", 6, 3, 10, { height: 74, shooting: 84, finishing: 88, handles: 92, passing: 82, defense: 74, rebounding: 58, athleticism: 86, iq: 90 }),
      player("Phil Chenier", 6, 3, 45, { height: 74, shooting: 84, finishing: 82, handles: 82, passing: 78, defense: 84, rebounding: 62, athleticism: 84, iq: 82 }),
      player("Bobby Dandridge", 6, 6, 10, { height: 82, shooting: 84, finishing: 86, handles: 80, passing: 78, defense: 86, rebounding: 76, athleticism: 84, iq: 88 }),
      player("Kevin Porter", 6, 0, 45, { height: 66, shooting: 74, finishing: 78, handles: 90, passing: 94, defense: 78, rebounding: 54, athleticism: 86, iq: 80 }),
      player("Mike Riordan", 6, 4, 6, { height: 77, shooting: 78, finishing: 80, handles: 78, passing: 74, defense: 82, rebounding: 62, athleticism: 80, iq: 78 }),
      player("Gus Johnson", 6, 6, 25, { height: 82, shooting: 74, finishing: 84, handles: 70, passing: 72, defense: 86, rebounding: 88, athleticism: 90, iq: 82 }),
      player("Jack Marin", 6, 7, 24, { height: 84, shooting: 84, finishing: 82, handles: 74, passing: 74, defense: 76, rebounding: 72, athleticism: 78, iq: 80 }),
      player("Tom Henderson", 6, 2, 11, { height: 71, shooting: 74, finishing: 78, handles: 86, passing: 84, defense: 82, rebounding: 58, athleticism: 84, iq: 78 }),
      player("Greg Ballard", 6, 7, 42, { height: 84, shooting: 80, finishing: 80, handles: 70, passing: 72, defense: 80, rebounding: 80, athleticism: 80, iq: 78 }),
      player("Mitch Kupchak", 6, 9, 25, { height: 90, shooting: 74, finishing: 84, handles: 64, passing: 68, defense: 78, rebounding: 82, athleticism: 82, iq: 80 }),
      player("Truck Robinson", 6, 11, 21, { height: 96, shooting: 70, finishing: 82, handles: 62, passing: 66, defense: 80, rebounding: 88, athleticism: 82, iq: 78 }),
      player("Dave Bing", 6, 3, 21, { height: 74, shooting: 82, finishing: 84, handles: 88, passing: 86, defense: 80, rebounding: 62, athleticism: 84, iq: 84 }),
      player("Nick Weatherspoon", 6, 7, 31, { height: 84, shooting: 76, finishing: 80, handles: 70, passing: 70, defense: 78, rebounding: 74, athleticism: 80, iq: 74 }),
    ],
  },
  {
    era: "1970s",
    team: "76ers",
    note: "Dr. J brings flight and finishing; McGinnis, Free, and Dawkins make this one of the most explosive rolls of the decade.",
    players: [
      player("Julius Erving", 6, 7, 6, { height: 84, shooting: 80, finishing: 92, handles: 88, passing: 84, defense: 84, rebounding: 80, athleticism: 93, iq: 90 }),
      player("George McGinnis", 6, 8, 30, { height: 86, shooting: 78, finishing: 86, handles: 78, passing: 78, defense: 78, rebounding: 86, athleticism: 86, iq: 82 }),
      player("Doug Collins", 6, 6, 20, { height: 82, shooting: 86, finishing: 84, handles: 82, passing: 78, defense: 78, rebounding: 62, athleticism: 86, iq: 84 }),
      player("World B. Free", 6, 2, 21, { height: 71, shooting: 84, finishing: 86, handles: 86, passing: 74, defense: 70, rebounding: 56, athleticism: 86, iq: 84 }),
      player("Darryl Dawkins", 6, 11, 53, { height: 96, shooting: 70, finishing: 88, handles: 62, passing: 66, defense: 80, rebounding: 84, athleticism: 90, iq: 78 }),
      player("Caldwell Jones", 6, 11, 11, { height: 96, shooting: 64, finishing: 78, handles: 58, passing: 66, defense: 90, rebounding: 86, athleticism: 82, iq: 76 }),
      player("Bobby Jones", 6, 9, 24, { height: 90, shooting: 76, finishing: 86, handles: 72, passing: 76, defense: 92, rebounding: 80, athleticism: 90, iq: 84 }),
      player("Steve Mix", 6, 7, 30, { height: 84, shooting: 80, finishing: 82, handles: 70, passing: 72, defense: 80, rebounding: 76, athleticism: 78, iq: 80 }),
      player("Henry Bibby", 6, 1, 10, { height: 68, shooting: 80, finishing: 78, handles: 84, passing: 82, defense: 78, rebounding: 56, athleticism: 80, iq: 80 }),
      player("Fred Carter", 6, 3, 21, { height: 74, shooting: 78, finishing: 80, handles: 82, passing: 76, defense: 82, rebounding: 64, athleticism: 84, iq: 76 }),
      player("Mike Dunleavy", 6, 3, 10, { height: 74, shooting: 82, finishing: 78, handles: 84, passing: 82, defense: 74, rebounding: 56, athleticism: 78, iq: 80 }),
      player("Joe Bryant", 6, 9, 24, { height: 90, shooting: 78, finishing: 82, handles: 80, passing: 78, defense: 76, rebounding: 76, athleticism: 86, iq: 76 }),
      player("Harvey Catchings", 6, 9, 33, { height: 90, shooting: 58, finishing: 74, handles: 56, passing: 64, defense: 88, rebounding: 82, athleticism: 80, iq: 70 }),
      player("Billy Cunningham", 6, 6, 32, { height: 82, shooting: 80, finishing: 88, handles: 82, passing: 82, defense: 80, rebounding: 84, athleticism: 88, iq: 86 }),
      player("LeRoy Ellis", 6, 10, 20, { height: 94, shooting: 70, finishing: 78, handles: 60, passing: 66, defense: 82, rebounding: 84, athleticism: 78, iq: 74 }),
    ],
  },
  {
    era: "1970s",
    team: "SuperSonics",
    note: "Gus Williams' speed and Dennis Johnson's two-way defense drove Seattle to back-to-back Finals and the 1979 title.",
    players: [
      player("Gus Williams", 6, 2, 1, { height: 71, shooting: 84, finishing: 86, handles: 90, passing: 82, defense: 84, rebounding: 56, athleticism: 92, iq: 86 }),
      player("Dennis Johnson", 6, 4, 24, { height: 77, shooting: 78, finishing: 84, handles: 84, passing: 80, defense: 89, rebounding: 68, athleticism: 90, iq: 90 }),
      player("Jack Sikma", 6, 11, 43, { height: 96, shooting: 82, finishing: 82, handles: 66, passing: 78, defense: 84, rebounding: 88, athleticism: 78, iq: 84 }),
      player("Fred Brown", 6, 3, 32, { height: 74, shooting: 90, finishing: 80, handles: 84, passing: 80, defense: 74, rebounding: 58, athleticism: 80, iq: 88 }),
      player("Spencer Haywood", 6, 8, 24, { height: 86, shooting: 82, finishing: 88, handles: 74, passing: 74, defense: 80, rebounding: 88, athleticism: 90, iq: 82 }),
      player("Lonnie Shelton", 6, 8, 8, { height: 86, shooting: 70, finishing: 82, handles: 64, passing: 70, defense: 88, rebounding: 84, athleticism: 84, iq: 78 }),
      player("John Johnson", 6, 7, 27, { height: 84, shooting: 80, finishing: 82, handles: 80, passing: 84, defense: 82, rebounding: 74, athleticism: 80, iq: 80 }),
      player("Slick Watts", 6, 1, 13, { height: 68, shooting: 72, finishing: 78, handles: 88, passing: 88, defense: 88, rebounding: 56, athleticism: 88, iq: 78 }),
      player("Tom Burleson", 7, 2, 24, { height: 100, shooting: 66, finishing: 78, handles: 56, passing: 64, defense: 82, rebounding: 84, athleticism: 70, iq: 72 }),
      player("Dick Snyder", 6, 5, 15, { height: 80, shooting: 82, finishing: 80, handles: 78, passing: 76, defense: 78, rebounding: 62, athleticism: 78, iq: 80 }),
      player("Bruce Seals", 6, 8, 31, { height: 86, shooting: 72, finishing: 78, handles: 66, passing: 68, defense: 78, rebounding: 78, athleticism: 80, iq: 72 }),
      player("Archie Clark", 6, 2, 21, { height: 71, shooting: 82, finishing: 82, handles: 86, passing: 82, defense: 80, rebounding: 60, athleticism: 84, iq: 82 }),
      player("Leonard Gray", 6, 8, 34, { height: 86, shooting: 72, finishing: 80, handles: 66, passing: 70, defense: 80, rebounding: 78, athleticism: 78, iq: 72 }),
      player("Jim Fox", 6, 10, 14, { height: 94, shooting: 70, finishing: 78, handles: 60, passing: 70, defense: 78, rebounding: 80, athleticism: 72, iq: 72 }),
      player("Joe Hassett", 6, 3, 20, { height: 74, shooting: 88, finishing: 74, handles: 76, passing: 72, defense: 70, rebounding: 52, athleticism: 74, iq: 80 }),
    ],
  },
  {
    era: "1970s",
    team: "Suns",
    note: "The 1976 'Sunderella' Finals run — Westphal's scoring, Alvan Adams' skill, and a scrappy supporting cast.",
    players: [
      player("Paul Westphal", 6, 4, 44, { height: 77, shooting: 86, finishing: 88, handles: 88, passing: 82, defense: 80, rebounding: 56, athleticism: 88, iq: 88 }),
      player("Walter Davis", 6, 6, 6, { height: 82, shooting: 88, finishing: 88, handles: 84, passing: 80, defense: 74, rebounding: 66, athleticism: 92, iq: 86 }),
      player("Alvan Adams", 6, 9, 33, { height: 90, shooting: 80, finishing: 84, handles: 78, passing: 84, defense: 80, rebounding: 84, athleticism: 82, iq: 82 }),
      player("Dick Van Arsdale", 6, 5, 5, { height: 80, shooting: 80, finishing: 82, handles: 80, passing: 76, defense: 82, rebounding: 68, athleticism: 82, iq: 82 }),
      player("Connie Hawkins", 6, 8, 42, { height: 86, shooting: 80, finishing: 88, handles: 84, passing: 82, defense: 78, rebounding: 78, athleticism: 90, iq: 82 }),
      player("Curtis Perry", 6, 7, 11, { height: 84, shooting: 66, finishing: 78, handles: 60, passing: 66, defense: 84, rebounding: 86, athleticism: 80, iq: 78 }),
      player("Ricky Sobers", 6, 3, 20, { height: 74, shooting: 80, finishing: 80, handles: 84, passing: 80, defense: 82, rebounding: 58, athleticism: 84, iq: 80 }),
      player("Gar Heard", 6, 6, 24, { height: 82, shooting: 74, finishing: 78, handles: 68, passing: 72, defense: 86, rebounding: 82, athleticism: 84, iq: 84 }),
      player("Don Buse", 6, 4, 30, { height: 77, shooting: 78, finishing: 74, handles: 88, passing: 90, defense: 88, rebounding: 56, athleticism: 82, iq: 78 }),
      player("Neal Walk", 6, 10, 41, { height: 94, shooting: 74, finishing: 82, handles: 62, passing: 72, defense: 74, rebounding: 84, athleticism: 74, iq: 74 }),
      player("Dennis Awtrey", 6, 10, 34, { height: 94, shooting: 62, finishing: 74, handles: 58, passing: 70, defense: 80, rebounding: 78, athleticism: 68, iq: 70 }),
      player("Fred Saunders", 6, 7, 25, { height: 84, shooting: 70, finishing: 78, handles: 68, passing: 70, defense: 78, rebounding: 74, athleticism: 80, iq: 72 }),
      player("John Shumate", 6, 9, 34, { height: 90, shooting: 76, finishing: 82, handles: 66, passing: 72, defense: 78, rebounding: 80, athleticism: 80, iq: 76 }),
      player("Mike Bratz", 6, 2, 4, { height: 71, shooting: 78, finishing: 76, handles: 82, passing: 80, defense: 78, rebounding: 54, athleticism: 78, iq: 76 }),
      player("Ron Lee", 6, 4, 15, { height: 77, shooting: 72, finishing: 78, handles: 82, passing: 80, defense: 88, rebounding: 60, athleticism: 86, iq: 74 }),
    ],
  },
  {
    era: "1970s",
    team: "Braves",
    note: "Buffalo lived on Bob McAdoo's scoring (MVP, three scoring titles) and Randy Smith's relentless motor.",
    players: [
      player("Bob McAdoo", 6, 9, 11, { height: 90, shooting: 86, finishing: 90, handles: 74, passing: 74, defense: 80, rebounding: 88, athleticism: 88, iq: 86 }),
      player("Randy Smith", 6, 3, 9, { height: 74, shooting: 84, finishing: 84, handles: 84, passing: 80, defense: 80, rebounding: 60, athleticism: 92, iq: 84 }),
      player("Ernie DiGregorio", 6, 0, 20, { height: 66, shooting: 82, finishing: 76, handles: 90, passing: 92, defense: 64, rebounding: 50, athleticism: 74, iq: 80 }),
      player("Jim McMillian", 6, 5, 5, { height: 80, shooting: 84, finishing: 82, handles: 78, passing: 78, defense: 78, rebounding: 70, athleticism: 80, iq: 80 }),
      player("Bob Kauffman", 6, 8, 43, { height: 86, shooting: 74, finishing: 82, handles: 70, passing: 78, defense: 78, rebounding: 84, athleticism: 80, iq: 78 }),
      player("Garfield Heard", 6, 6, 24, { height: 82, shooting: 74, finishing: 78, handles: 68, passing: 72, defense: 84, rebounding: 82, athleticism: 84, iq: 78 }),
      player("Jack Marin", 6, 7, 24, { height: 84, shooting: 84, finishing: 82, handles: 74, passing: 74, defense: 76, rebounding: 72, athleticism: 78, iq: 80 }),
      player("Don Adams", 6, 7, 14, { height: 84, shooting: 72, finishing: 78, handles: 68, passing: 70, defense: 84, rebounding: 76, athleticism: 80, iq: 74 }),
      player("Jim McDaniels", 6, 11, 43, { height: 96, shooting: 72, finishing: 80, handles: 60, passing: 66, defense: 76, rebounding: 82, athleticism: 76, iq: 72 }),
      player("John Hummer", 6, 9, 20, { height: 90, shooting: 66, finishing: 78, handles: 64, passing: 72, defense: 78, rebounding: 80, athleticism: 74, iq: 72 }),
      player("Kenny Charles", 6, 3, 15, { height: 74, shooting: 80, finishing: 80, handles: 80, passing: 76, defense: 78, rebounding: 58, athleticism: 84, iq: 76 }),
      player("Tom McMillen", 6, 11, 54, { height: 96, shooting: 78, finishing: 80, handles: 62, passing: 68, defense: 74, rebounding: 78, athleticism: 72, iq: 74 }),
      player("Dale Schlueter", 6, 10, 43, { height: 94, shooting: 64, finishing: 74, handles: 58, passing: 68, defense: 78, rebounding: 78, athleticism: 70, iq: 70 }),
      player("Bird Averitt", 6, 1, 30, { height: 68, shooting: 82, finishing: 78, handles: 84, passing: 78, defense: 70, rebounding: 54, athleticism: 80, iq: 78 }),
      player("Dick Gibbs", 6, 5, 25, { height: 80, shooting: 78, finishing: 78, handles: 76, passing: 72, defense: 76, rebounding: 64, athleticism: 80, iq: 74 }),
    ],
  },
  {
    era: "1980s",
    team: "Spurs",
    note: "George Gervin averaged 33 a night in 1979-80. The Iceman ran pure offense before offense was fashionable.",
    players: [
      player("George Gervin", 6, 7, 44, { height: 84, shooting: 98, finishing: 96, handles: 86, passing: 78, defense: 68, rebounding: 72, athleticism: 84, iq: 82 }),
      player("Artis Gilmore", 7, 2, 53, { height: 100, shooting: 72, finishing: 86, handles: 58, passing: 68, defense: 88, rebounding: 96, athleticism: 72, iq: 78 }),
      player("Mike Mitchell", 6, 7, 45, { height: 84, shooting: 90, finishing: 84, handles: 74, passing: 68, defense: 70, rebounding: 74, athleticism: 80, iq: 86 }),
      player("Johnny Moore", 6, 2, 00, { height: 72, shooting: 78, finishing: 74, handles: 86, passing: 90, defense: 78, rebounding: 54, athleticism: 80, iq: 78 }),
      player("Alvin Robertson", 6, 4, 21, { height: 77, shooting: 78, finishing: 76, handles: 84, passing: 80, defense: 92, rebounding: 68, athleticism: 86, iq: 78 }),
      player("Dave Corzine", 6, 11, 54, { height: 96, shooting: 68, finishing: 74, handles: 54, passing: 64, defense: 78, rebounding: 82, athleticism: 64, iq: 68 }),
      player("Gene Banks", 6, 7, 22, { height: 84, shooting: 76, finishing: 78, handles: 70, passing: 72, defense: 72, rebounding: 76, athleticism: 78, iq: 74 }),
      player("Mark Olberding", 6, 8, 30, { height: 88, shooting: 70, finishing: 72, handles: 64, passing: 66, defense: 72, rebounding: 76, athleticism: 68, iq: 70 }),
      player("Willie Anderson", 6, 7, 40, { height: 84, shooting: 80, finishing: 82, handles: 82, passing: 80, defense: 82, rebounding: 66, athleticism: 84, iq: 78 }),
      player("Johnny Dawkins", 6, 2, 24, { height: 71, shooting: 80, finishing: 80, handles: 86, passing: 82, defense: 78, rebounding: 54, athleticism: 84, iq: 80 }),
      player("Walter Berry", 6, 8, 34, { height: 86, shooting: 74, finishing: 84, handles: 72, passing: 70, defense: 72, rebounding: 78, athleticism: 84, iq: 74 }),
      player("Steve Johnson", 6, 10, 44, { height: 94, shooting: 72, finishing: 84, handles: 60, passing: 66, defense: 78, rebounding: 80, athleticism: 78, iq: 74 }),
      player("David Greenwood", 6, 9, 34, { height: 90, shooting: 70, finishing: 78, handles: 64, passing: 70, defense: 82, rebounding: 82, athleticism: 78, iq: 72 }),
      player("Jon Sundvold", 6, 2, 20, { height: 71, shooting: 88, finishing: 74, handles: 78, passing: 74, defense: 68, rebounding: 50, athleticism: 70, iq: 80 }),
      player("Edgar Jones", 6, 10, 30, { height: 94, shooting: 68, finishing: 80, handles: 64, passing: 66, defense: 78, rebounding: 78, athleticism: 82, iq: 72 }),
    ],
  },
  {
    era: "1980s",
    team: "Bucks",
    note: "Don Nelson's Bucks won the division seven years running — Moncrief's two-way greatness and a deep, switchable roster.",
    players: [
      player("Sidney Moncrief", 6, 4, 4, { height: 77, shooting: 84, finishing: 86, handles: 84, passing: 80, defense: 96, rebounding: 70, athleticism: 90, iq: 88 }),
      player("Terry Cummings", 6, 9, 34, { height: 90, shooting: 80, finishing: 88, handles: 74, passing: 72, defense: 80, rebounding: 86, athleticism: 88, iq: 82 }),
      player("Bob Lanier", 6, 11, 16, { height: 96, shooting: 80, finishing: 88, handles: 70, passing: 80, defense: 84, rebounding: 88, athleticism: 78, iq: 84 }),
      player("Marques Johnson", 6, 7, 8, { height: 84, shooting: 82, finishing: 90, handles: 82, passing: 80, defense: 80, rebounding: 82, athleticism: 90, iq: 86 }),
      player("Paul Pressey", 6, 5, 25, { height: 80, shooting: 76, finishing: 82, handles: 86, passing: 88, defense: 90, rebounding: 68, athleticism: 86, iq: 80 }),
      player("Jack Sikma", 6, 11, 43, { height: 96, shooting: 82, finishing: 80, handles: 64, passing: 78, defense: 82, rebounding: 86, athleticism: 74, iq: 82 }),
      player("Ricky Pierce", 6, 4, 22, { height: 77, shooting: 86, finishing: 86, handles: 80, passing: 72, defense: 72, rebounding: 58, athleticism: 80, iq: 84 }),
      player("Junior Bridgeman", 6, 5, 2, { height: 80, shooting: 82, finishing: 82, handles: 78, passing: 76, defense: 76, rebounding: 64, athleticism: 78, iq: 82 }),
      player("Brian Winters", 6, 4, 32, { height: 77, shooting: 82, finishing: 80, handles: 80, passing: 79, defense: 72, rebounding: 60, athleticism: 72, iq: 86 }),
      player("Quinn Buckner", 6, 3, 6, { height: 74, shooting: 72, finishing: 78, handles: 84, passing: 84, defense: 90, rebounding: 60, athleticism: 82, iq: 78 }),
      player("Craig Hodges", 6, 2, 14, { height: 71, shooting: 90, finishing: 74, handles: 80, passing: 76, defense: 72, rebounding: 50, athleticism: 74, iq: 84 }),
      player("Alton Lister", 6, 11, 25, { height: 96, shooting: 62, finishing: 78, handles: 56, passing: 64, defense: 84, rebounding: 82, athleticism: 80, iq: 70 }),
      player("Paul Mokeski", 7, 0, 43, { height: 98, shooting: 64, finishing: 74, handles: 54, passing: 62, defense: 78, rebounding: 78, athleticism: 66, iq: 70 }),
      player("Larry Krystkowiak", 6, 9, 42, { height: 90, shooting: 76, finishing: 80, handles: 66, passing: 70, defense: 78, rebounding: 80, athleticism: 74, iq: 74 }),
      player("Randy Breuer", 7, 3, 45, { height: 100, shooting: 62, finishing: 76, handles: 52, passing: 60, defense: 78, rebounding: 78, athleticism: 66, iq: 68 }),
    ],
  },
  {
    era: "1980s",
    team: "Rockets",
    note: "Two Finals trips in the decade — Moses early, then the Twin Towers of Olajuwon and Sampson.",
    players: [
      player("Hakeem Olajuwon", 7, 0, 34, { height: 98, shooting: 72, finishing: 90, handles: 74, passing: 74, defense: 96, rebounding: 92, athleticism: 96, iq: 90 }),
      player("Moses Malone", 6, 10, 24, { height: 94, shooting: 74, finishing: 88, handles: 64, passing: 66, defense: 84, rebounding: 98, athleticism: 86, iq: 86 }),
      player("Ralph Sampson", 7, 4, 50, { height: 100, shooting: 78, finishing: 86, handles: 74, passing: 78, defense: 86, rebounding: 88, athleticism: 84, iq: 80 }),
      player("Calvin Murphy", 5, 9, 23, { height: 60, shooting: 90, finishing: 82, handles: 88, passing: 80, defense: 72, rebounding: 48, athleticism: 84, iq: 88 }),
      player("Sleepy Floyd", 6, 3, 21, { height: 74, shooting: 82, finishing: 82, handles: 88, passing: 86, defense: 80, rebounding: 56, athleticism: 84, iq: 86 }),
      player("Robert Reid", 6, 8, 50, { height: 86, shooting: 78, finishing: 80, handles: 76, passing: 76, defense: 86, rebounding: 74, athleticism: 82, iq: 80 }),
      player("Rodney McCray", 6, 8, 24, { height: 86, shooting: 78, finishing: 82, handles: 80, passing: 82, defense: 86, rebounding: 78, athleticism: 82, iq: 80 }),
      player("Lewis Lloyd", 6, 6, 32, { height: 82, shooting: 80, finishing: 84, handles: 82, passing: 78, defense: 74, rebounding: 70, athleticism: 84, iq: 78 }),
      player("Allen Leavell", 6, 2, 15, { height: 71, shooting: 78, finishing: 78, handles: 84, passing: 84, defense: 78, rebounding: 54, athleticism: 80, iq: 80 }),
      player("Mike Newlin", 6, 4, 21, { height: 77, shooting: 82, finishing: 80, handles: 80, passing: 78, defense: 72, rebounding: 58, athleticism: 76, iq: 82 }),
      player("Billy Paultz", 6, 11, 44, { height: 96, shooting: 64, finishing: 78, handles: 58, passing: 68, defense: 82, rebounding: 80, athleticism: 70, iq: 74 }),
      player("Jim Petersen", 6, 10, 45, { height: 94, shooting: 70, finishing: 80, handles: 62, passing: 68, defense: 80, rebounding: 80, athleticism: 78, iq: 72 }),
      player("Major Jones", 6, 9, 34, { height: 90, shooting: 62, finishing: 78, handles: 58, passing: 64, defense: 80, rebounding: 80, athleticism: 80, iq: 70 }),
      player("Buck Johnson", 6, 7, 43, { height: 84, shooting: 76, finishing: 80, handles: 74, passing: 70, defense: 82, rebounding: 70, athleticism: 86, iq: 74 }),
      player("Purvis Short", 6, 7, 25, { height: 84, shooting: 84, finishing: 84, handles: 78, passing: 74, defense: 72, rebounding: 66, athleticism: 82, iq: 82 }),
    ],
  },
  {
    era: "1980s",
    team: "Hawks",
    note: "Dominique's high-wire scoring led Mike Fratello's 50-win Hawks, with Doc Rivers and a deep, athletic supporting cast.",
    players: [
      player("Dominique Wilkins", 6, 8, 21, { height: 86, shooting: 87, finishing: 94, handles: 84, passing: 74, defense: 74, rebounding: 78, athleticism: 97, iq: 80 }),
      player("Doc Rivers", 6, 4, 25, { height: 77, shooting: 80, finishing: 82, handles: 86, passing: 86, defense: 88, rebounding: 62, athleticism: 86, iq: 86 }),
      player("Kevin Willis", 7, 0, 42, { height: 98, shooting: 74, finishing: 82, handles: 64, passing: 64, defense: 78, rebounding: 90, athleticism: 84, iq: 76 }),
      player("Dan Roundfield", 6, 8, 32, { height: 86, shooting: 74, finishing: 84, handles: 68, passing: 72, defense: 88, rebounding: 88, athleticism: 86, iq: 80 }),
      player("Tree Rollins", 7, 1, 30, { height: 100, shooting: 60, finishing: 78, handles: 54, passing: 64, defense: 92, rebounding: 86, athleticism: 82, iq: 74 }),
      player("Randy Wittman", 6, 6, 24, { height: 82, shooting: 86, finishing: 80, handles: 78, passing: 76, defense: 74, rebounding: 58, athleticism: 74, iq: 80 }),
      player("Spud Webb", 5, 7, 4, { height: 56, shooting: 78, finishing: 80, handles: 90, passing: 86, defense: 78, rebounding: 46, athleticism: 94, iq: 80 }),
      player("Eddie Johnson", 6, 2, 20, { height: 71, shooting: 82, finishing: 82, handles: 86, passing: 84, defense: 76, rebounding: 54, athleticism: 84, iq: 80 }),
      player("Cliff Levingston", 6, 8, 34, { height: 86, shooting: 70, finishing: 82, handles: 68, passing: 70, defense: 84, rebounding: 80, athleticism: 88, iq: 74 }),
      player("Antoine Carr", 6, 9, 35, { height: 90, shooting: 80, finishing: 84, handles: 70, passing: 70, defense: 80, rebounding: 74, athleticism: 84, iq: 76 }),
      player("John Drew", 6, 6, 22, { height: 82, shooting: 78, finishing: 86, handles: 74, passing: 70, defense: 72, rebounding: 78, athleticism: 86, iq: 80 }),
      player("Rory Sparrow", 6, 2, 2, { height: 71, shooting: 78, finishing: 78, handles: 84, passing: 84, defense: 80, rebounding: 54, athleticism: 80, iq: 78 }),
      player("Mike Glenn", 6, 3, 14, { height: 74, shooting: 90, finishing: 78, handles: 78, passing: 76, defense: 70, rebounding: 52, athleticism: 74, iq: 82 }),
      player("Johnny Davis", 6, 2, 15, { height: 71, shooting: 78, finishing: 80, handles: 84, passing: 80, defense: 80, rebounding: 56, athleticism: 84, iq: 80 }),
      player("Scott Hastings", 6, 10, 45, { height: 94, shooting: 70, finishing: 74, handles: 58, passing: 64, defense: 76, rebounding: 74, athleticism: 68, iq: 72 }),
    ],
  },
  {
    era: "1980s",
    team: "Mavericks",
    note: "A model expansion build — Aguirre and Blackman scoring, Harper and Perkins maturing into a 1988 conference finalist.",
    players: [
      player("Mark Aguirre", 6, 6, 24, { height: 82, shooting: 84, finishing: 90, handles: 84, passing: 78, defense: 70, rebounding: 72, athleticism: 84, iq: 86 }),
      player("Rolando Blackman", 6, 6, 22, { height: 82, shooting: 86, finishing: 86, handles: 82, passing: 78, defense: 82, rebounding: 64, athleticism: 84, iq: 88 }),
      player("Derek Harper", 6, 4, 12, { height: 77, shooting: 80, finishing: 82, handles: 90, passing: 86, defense: 90, rebounding: 58, athleticism: 86, iq: 84 }),
      player("Sam Perkins", 6, 9, 14, { height: 90, shooting: 82, finishing: 82, handles: 70, passing: 74, defense: 80, rebounding: 84, athleticism: 78, iq: 82 }),
      player("Brad Davis", 6, 3, 15, { height: 74, shooting: 82, finishing: 80, handles: 88, passing: 86, defense: 78, rebounding: 54, athleticism: 78, iq: 84 }),
      player("Detlef Schrempf", 6, 10, 32, { height: 94, shooting: 82, finishing: 84, handles: 80, passing: 82, defense: 72, rebounding: 78, athleticism: 80, iq: 82 }),
      player("Roy Tarpley", 6, 11, 42, { height: 96, shooting: 74, finishing: 84, handles: 68, passing: 70, defense: 82, rebounding: 92, athleticism: 88, iq: 78 }),
      player("James Donaldson", 7, 2, 40, { height: 100, shooting: 62, finishing: 80, handles: 54, passing: 64, defense: 86, rebounding: 88, athleticism: 72, iq: 74 }),
      player("Jay Vincent", 6, 7, 31, { height: 84, shooting: 82, finishing: 84, handles: 74, passing: 72, defense: 70, rebounding: 72, athleticism: 78, iq: 80 }),
      player("Dale Ellis", 6, 7, 3, { height: 84, shooting: 84, finishing: 84, handles: 78, passing: 72, defense: 74, rebounding: 66, athleticism: 84, iq: 80 }),
      player("Kurt Nimphius", 6, 10, 43, { height: 94, shooting: 66, finishing: 78, handles: 60, passing: 66, defense: 82, rebounding: 78, athleticism: 78, iq: 72 }),
      player("Bill Garnett", 6, 9, 50, { height: 90, shooting: 66, finishing: 76, handles: 62, passing: 66, defense: 78, rebounding: 78, athleticism: 78, iq: 70 }),
      player("Brad Wright", 6, 11, 34, { height: 96, shooting: 64, finishing: 76, handles: 56, passing: 62, defense: 76, rebounding: 76, athleticism: 68, iq: 68 }),
      player("Bill Wennington", 7, 0, 34, { height: 98, shooting: 72, finishing: 76, handles: 58, passing: 64, defense: 76, rebounding: 76, athleticism: 68, iq: 70 }),
      player("Steve Alford", 6, 2, 12, { height: 71, shooting: 88, finishing: 76, handles: 80, passing: 76, defense: 70, rebounding: 50, athleticism: 72, iq: 80 }),
    ],
  },
  {
    era: "1980s",
    team: "Nuggets",
    note: "Doug Moe's run-and-gun machine — Alex English's scoring, Kiki and Issel firepower, Fat Lever stuffing the box score.",
    players: [
      player("Alex English", 6, 7, 2, { height: 84, shooting: 86, finishing: 88, handles: 82, passing: 80, defense: 72, rebounding: 70, athleticism: 84, iq: 86 }),
      player("Fat Lever", 6, 3, 12, { height: 74, shooting: 80, finishing: 82, handles: 88, passing: 88, defense: 88, rebounding: 78, athleticism: 88, iq: 82 }),
      player("Kiki Vandeweghe", 6, 8, 55, { height: 86, shooting: 90, finishing: 88, handles: 80, passing: 74, defense: 64, rebounding: 64, athleticism: 78, iq: 84 }),
      player("Dan Issel", 6, 9, 44, { height: 90, shooting: 82, finishing: 86, handles: 68, passing: 74, defense: 74, rebounding: 82, athleticism: 76, iq: 84 }),
      player("Calvin Natt", 6, 6, 33, { height: 82, shooting: 80, finishing: 86, handles: 74, passing: 74, defense: 80, rebounding: 80, athleticism: 84, iq: 82 }),
      player("Dan Schayes", 6, 11, 24, { height: 96, shooting: 74, finishing: 80, handles: 62, passing: 70, defense: 78, rebounding: 80, athleticism: 70, iq: 76 }),
      player("Bill Hanzlik", 6, 7, 24, { height: 84, shooting: 70, finishing: 76, handles: 78, passing: 78, defense: 90, rebounding: 64, athleticism: 82, iq: 74 }),
      player("T.R. Dunn", 6, 4, 12, { height: 77, shooting: 64, finishing: 74, handles: 72, passing: 72, defense: 90, rebounding: 72, athleticism: 82, iq: 72 }),
      player("Michael Adams", 5, 10, 14, { height: 62, shooting: 80, finishing: 76, handles: 88, passing: 84, defense: 78, rebounding: 50, athleticism: 82, iq: 84 }),
      player("Wayne Cooper", 6, 10, 44, { height: 94, shooting: 68, finishing: 78, handles: 60, passing: 66, defense: 86, rebounding: 82, athleticism: 80, iq: 72 }),
      player("Mike Evans", 6, 1, 6, { height: 68, shooting: 84, finishing: 78, handles: 82, passing: 78, defense: 74, rebounding: 52, athleticism: 78, iq: 80 }),
      player("Blair Rasmussen", 7, 0, 41, { height: 98, shooting: 72, finishing: 78, handles: 58, passing: 64, defense: 78, rebounding: 80, athleticism: 68, iq: 72 }),
      player("Elston Turner", 6, 5, 20, { height: 80, shooting: 74, finishing: 78, handles: 78, passing: 76, defense: 86, rebounding: 62, athleticism: 80, iq: 74 }),
      player("Rob Williams", 6, 2, 21, { height: 71, shooting: 80, finishing: 78, handles: 84, passing: 82, defense: 74, rebounding: 52, athleticism: 80, iq: 76 }),
      player("Walter Davis", 6, 6, 6, { height: 82, shooting: 88, finishing: 86, handles: 82, passing: 78, defense: 72, rebounding: 62, athleticism: 84, iq: 84 }),
    ],
  },
  {
    era: "1980s",
    team: "Trail Blazers",
    note: "Portland made the playoffs every year — Drexler taking flight, Paxson scoring, Porter and Kersey arriving.",
    players: [
      player("Clyde Drexler", 6, 7, 22, { height: 84, shooting: 80, finishing: 90, handles: 88, passing: 82, defense: 82, rebounding: 76, athleticism: 96, iq: 86 }),
      player("Jim Paxson", 6, 6, 4, { height: 82, shooting: 86, finishing: 84, handles: 80, passing: 74, defense: 76, rebounding: 60, athleticism: 82, iq: 84 }),
      player("Terry Porter", 6, 3, 30, { height: 74, shooting: 84, finishing: 82, handles: 90, passing: 90, defense: 82, rebounding: 60, athleticism: 84, iq: 88 }),
      player("Jerome Kersey", 6, 7, 25, { height: 84, shooting: 72, finishing: 84, handles: 74, passing: 72, defense: 86, rebounding: 82, athleticism: 94, iq: 80 }),
      player("Mychal Thompson", 6, 10, 43, { height: 94, shooting: 74, finishing: 84, handles: 64, passing: 72, defense: 82, rebounding: 84, athleticism: 80, iq: 78 }),
      player("Kiki Vandeweghe", 6, 8, 55, { height: 86, shooting: 90, finishing: 88, handles: 80, passing: 74, defense: 64, rebounding: 66, athleticism: 78, iq: 84 }),
      player("Calvin Natt", 6, 6, 33, { height: 82, shooting: 80, finishing: 86, handles: 74, passing: 74, defense: 80, rebounding: 80, athleticism: 84, iq: 82 }),
      player("Kenny Carr", 6, 7, 34, { height: 84, shooting: 72, finishing: 82, handles: 66, passing: 70, defense: 80, rebounding: 84, athleticism: 82, iq: 76 }),
      player("Darnell Valentine", 6, 2, 14, { height: 71, shooting: 74, finishing: 78, handles: 86, passing: 84, defense: 86, rebounding: 56, athleticism: 84, iq: 78 }),
      player("Sam Bowie", 7, 1, 31, { height: 100, shooting: 70, finishing: 80, handles: 62, passing: 74, defense: 84, rebounding: 82, athleticism: 74, iq: 72 }),
      player("Steve Johnson", 6, 10, 44, { height: 94, shooting: 74, finishing: 84, handles: 60, passing: 66, defense: 78, rebounding: 80, athleticism: 78, iq: 74 }),
      player("Kevin Duckworth", 7, 0, 0, { height: 98, shooting: 74, finishing: 82, handles: 58, passing: 66, defense: 78, rebounding: 80, athleticism: 64, iq: 78 }),
      player("Wayne Cooper", 6, 10, 31, { height: 94, shooting: 68, finishing: 78, handles: 60, passing: 66, defense: 86, rebounding: 82, athleticism: 80, iq: 72 }),
      player("Billy Ray Bates", 6, 4, 20, { height: 77, shooting: 82, finishing: 84, handles: 80, passing: 72, defense: 72, rebounding: 60, athleticism: 88, iq: 80 }),
      player("Jeff Lamp", 6, 6, 15, { height: 82, shooting: 82, finishing: 78, handles: 74, passing: 72, defense: 72, rebounding: 58, athleticism: 74, iq: 78 }),
    ],
  },
  {
    era: "1980s",
    team: "Suns",
    note: "A perennial playoff team — Walter Davis and Larry Nance early, then Kevin Johnson and Tom Chambers igniting the late-80s revival.",
    players: [
      player("Kevin Johnson", 6, 1, 7, { height: 68, shooting: 80, finishing: 88, handles: 94, passing: 92, defense: 78, rebounding: 56, athleticism: 92, iq: 86 }),
      player("Larry Nance", 6, 10, 22, { height: 94, shooting: 80, finishing: 90, handles: 70, passing: 72, defense: 88, rebounding: 84, athleticism: 94, iq: 82 }),
      player("Walter Davis", 6, 6, 6, { height: 82, shooting: 88, finishing: 88, handles: 84, passing: 80, defense: 74, rebounding: 64, athleticism: 90, iq: 86 }),
      player("Tom Chambers", 6, 10, 24, { height: 94, shooting: 84, finishing: 88, handles: 74, passing: 72, defense: 72, rebounding: 78, athleticism: 82, iq: 86 }),
      player("Alvan Adams", 6, 9, 33, { height: 90, shooting: 80, finishing: 84, handles: 78, passing: 84, defense: 80, rebounding: 82, athleticism: 80, iq: 82 }),
      player("Eddie Johnson", 6, 7, 8, { height: 84, shooting: 80, finishing: 84, handles: 78, passing: 72, defense: 70, rebounding: 66, athleticism: 80, iq: 84 }),
      player("Jeff Hornacek", 6, 4, 14, { height: 77, shooting: 86, finishing: 82, handles: 84, passing: 84, defense: 78, rebounding: 60, athleticism: 78, iq: 84 }),
      player("Maurice Lucas", 6, 9, 20, { height: 90, shooting: 74, finishing: 84, handles: 68, passing: 74, defense: 86, rebounding: 88, athleticism: 82, iq: 82 }),
      player("Kyle Macy", 6, 3, 4, { height: 74, shooting: 88, finishing: 78, handles: 84, passing: 82, defense: 78, rebounding: 54, athleticism: 74, iq: 84 }),
      player("James Edwards", 7, 1, 53, { height: 100, shooting: 74, finishing: 84, handles: 60, passing: 64, defense: 78, rebounding: 78, athleticism: 72, iq: 76 }),
      player("Mike Sanders", 6, 6, 20, { height: 82, shooting: 74, finishing: 80, handles: 72, passing: 72, defense: 82, rebounding: 66, athleticism: 82, iq: 74 }),
      player("Armen Gilliam", 6, 9, 5, { height: 90, shooting: 78, finishing: 84, handles: 68, passing: 66, defense: 74, rebounding: 80, athleticism: 82, iq: 76 }),
      player("Rod Foster", 6, 1, 15, { height: 68, shooting: 80, finishing: 78, handles: 82, passing: 78, defense: 72, rebounding: 50, athleticism: 82, iq: 76 }),
      player("Mike McGee", 6, 5, 40, { height: 80, shooting: 80, finishing: 80, handles: 74, passing: 68, defense: 70, rebounding: 60, athleticism: 84, iq: 76 }),
      player("Dennis Johnson", 6, 4, 24, { height: 77, shooting: 78, finishing: 84, handles: 84, passing: 80, defense: 92, rebounding: 66, athleticism: 88, iq: 88 }),
    ],
  },
  {
    era: "1980s",
    team: "SuperSonics",
    note: "Dale Ellis, Xavier McDaniel, and Tom Chambers turned Seattle into a high-scoring 1987 conference finalist.",
    players: [
      player("Dale Ellis", 6, 7, 3, { height: 84, shooting: 84, finishing: 86, handles: 80, passing: 72, defense: 72, rebounding: 66, athleticism: 84, iq: 80 }),
      player("Xavier McDaniel", 6, 7, 34, { height: 84, shooting: 78, finishing: 88, handles: 76, passing: 70, defense: 80, rebounding: 84, athleticism: 88, iq: 82 }),
      player("Tom Chambers", 6, 10, 24, { height: 94, shooting: 84, finishing: 88, handles: 74, passing: 72, defense: 72, rebounding: 80, athleticism: 82, iq: 84 }),
      player("Jack Sikma", 6, 11, 43, { height: 96, shooting: 82, finishing: 82, handles: 66, passing: 78, defense: 84, rebounding: 88, athleticism: 78, iq: 84 }),
      player("Gus Williams", 6, 2, 1, { height: 71, shooting: 84, finishing: 86, handles: 90, passing: 82, defense: 84, rebounding: 56, athleticism: 92, iq: 86 }),
      player("Fred Brown", 6, 3, 32, { height: 74, shooting: 90, finishing: 80, handles: 84, passing: 80, defense: 74, rebounding: 58, athleticism: 78, iq: 88 }),
      player("Nate McMillan", 6, 5, 10, { height: 80, shooting: 70, finishing: 76, handles: 88, passing: 90, defense: 90, rebounding: 66, athleticism: 82, iq: 86 }),
      player("Derrick McKey", 6, 9, 30, { height: 90, shooting: 80, finishing: 82, handles: 76, passing: 74, defense: 86, rebounding: 72, athleticism: 84, iq: 78 }),
      player("Lonnie Shelton", 6, 8, 8, { height: 86, shooting: 70, finishing: 82, handles: 64, passing: 70, defense: 88, rebounding: 84, athleticism: 84, iq: 78 }),
      player("David Thompson", 6, 4, 33, { height: 77, shooting: 82, finishing: 90, handles: 82, passing: 76, defense: 74, rebounding: 62, athleticism: 96, iq: 82 }),
      player("Danny Vranes", 6, 7, 4, { height: 84, shooting: 64, finishing: 76, handles: 68, passing: 70, defense: 88, rebounding: 74, athleticism: 86, iq: 72 }),
      player("Alton Lister", 7, 0, 25, { height: 98, shooting: 62, finishing: 78, handles: 56, passing: 64, defense: 84, rebounding: 82, athleticism: 80, iq: 70 }),
      player("Reggie King", 6, 6, 43, { height: 82, shooting: 70, finishing: 80, handles: 68, passing: 72, defense: 82, rebounding: 82, athleticism: 80, iq: 74 }),
      player("Gerald Henderson", 6, 2, 43, { height: 71, shooting: 78, finishing: 80, handles: 84, passing: 80, defense: 82, rebounding: 56, athleticism: 84, iq: 80 }),
      player("Kevin Williams", 6, 2, 15, { height: 71, shooting: 74, finishing: 78, handles: 82, passing: 78, defense: 82, rebounding: 56, athleticism: 84, iq: 74 }),
    ],
  },
  {
    era: "1990s",
    team: "Trail Blazers",
    note: "Drexler was Jordan-adjacent in every way except one ring. Portland made two Finals on his back.",
    players: [
      player("Clyde Drexler", 6, 7, 22, { height: 84, shooting: 88, finishing: 88, handles: 90, passing: 86, defense: 88, rebounding: 78, athleticism: 88, iq: 84 }),
      player("Terry Porter", 6, 3, 30, { height: 74, shooting: 86, finishing: 80, handles: 88, passing: 90, defense: 80, rebounding: 56, athleticism: 80, iq: 88 }),
      player("Buck Williams", 6, 8, 14, { height: 88, shooting: 70, finishing: 78, handles: 62, passing: 66, defense: 86, rebounding: 92, athleticism: 78, iq: 74 }),
      player("Jerome Kersey", 6, 7, 25, { height: 84, shooting: 74, finishing: 82, handles: 72, passing: 70, defense: 84, rebounding: 82, athleticism: 88, iq: 76 }),
      player("Cliff Robinson", 6, 10, 1, { height: 94, shooting: 80, finishing: 80, handles: 74, passing: 70, defense: 80, rebounding: 76, athleticism: 80, iq: 76 }),
      player("Kevin Duckworth", 7, 0, 00, { height: 98, shooting: 70, finishing: 78, handles: 52, passing: 58, defense: 76, rebounding: 84, athleticism: 64, iq: 68 }),
      player("Rod Strickland", 6, 3, 10, { height: 74, shooting: 80, finishing: 80, handles: 90, passing: 90, defense: 72, rebounding: 54, athleticism: 82, iq: 78 }),
      player("Danny Manning", 6, 10, 45, { height: 94, shooting: 80, finishing: 82, handles: 76, passing: 76, defense: 74, rebounding: 78, athleticism: 78, iq: 78 }),
      player("Arvydas Sabonis", 7, 3, 11, { height: 100, shooting: 78, finishing: 84, handles: 70, passing: 86, defense: 82, rebounding: 86, athleticism: 68, iq: 92 }),
      player("Rasheed Wallace", 6, 11, 30, { height: 96, shooting: 80, finishing: 86, handles: 74, passing: 74, defense: 88, rebounding: 82, athleticism: 88, iq: 80 }),
      player("Isaiah Rider", 6, 5, 34, { height: 80, shooting: 84, finishing: 86, handles: 82, passing: 74, defense: 72, rebounding: 64, athleticism: 88, iq: 80 }),
      player("Damon Stoudamire", 5, 10, 3, { height: 62, shooting: 82, finishing: 78, handles: 90, passing: 86, defense: 70, rebounding: 52, athleticism: 82, iq: 80 }),
      player("Danny Ainge", 6, 4, 24, { height: 77, shooting: 86, finishing: 80, handles: 82, passing: 82, defense: 76, rebounding: 58, athleticism: 74, iq: 84 }),
      player("Brian Grant", 6, 9, 55, { height: 90, shooting: 70, finishing: 82, handles: 66, passing: 70, defense: 82, rebounding: 84, athleticism: 86, iq: 76 }),
      player("Mark Bryant", 6, 9, 2, { height: 90, shooting: 68, finishing: 80, handles: 62, passing: 66, defense: 80, rebounding: 78, athleticism: 80, iq: 72 }),
    ],
  },
  {
    era: "1990s",
    team: "Pacers",
    note: "Reggie Miller lived rent-free in New York's head. 8 points in 8.9 seconds is still canon.",
    players: [
      player("Reggie Miller", 6, 7, 31, { height: 84, shooting: 99, finishing: 78, handles: 76, passing: 74, defense: 76, rebounding: 56, athleticism: 78, iq: 86 }),
      player("Mark Jackson", 6, 3, 13, { height: 74, shooting: 78, finishing: 74, handles: 88, passing: 96, defense: 70, rebounding: 58, athleticism: 70, iq: 88 }),
      player("Rik Smits", 7, 4, 45, { height: 100, shooting: 80, finishing: 84, handles: 60, passing: 66, defense: 80, rebounding: 88, athleticism: 68, iq: 76 }),
      player("Jalen Rose", 6, 8, 5, { height: 88, shooting: 82, finishing: 82, handles: 80, passing: 78, defense: 72, rebounding: 66, athleticism: 78, iq: 82 }),
      player("Derrick McKey", 6, 9, 11, { height: 90, shooting: 78, finishing: 78, handles: 72, passing: 74, defense: 86, rebounding: 72, athleticism: 80, iq: 74 }),
      player("Dale Davis", 6, 11, 34, { height: 96, shooting: 58, finishing: 74, handles: 52, passing: 58, defense: 88, rebounding: 94, athleticism: 82, iq: 68 }),
      player("Antonio Davis", 6, 9, 54, { height: 90, shooting: 64, finishing: 74, handles: 54, passing: 60, defense: 86, rebounding: 90, athleticism: 76, iq: 68 }),
      player("Travis Best", 5, 11, 10, { height: 60, shooting: 80, finishing: 76, handles: 84, passing: 80, defense: 76, rebounding: 46, athleticism: 78, iq: 80 }),
      player("Detlef Schrempf", 6, 10, 32, { height: 94, shooting: 82, finishing: 84, handles: 80, passing: 82, defense: 72, rebounding: 78, athleticism: 80, iq: 82 }),
      player("Chris Mullin", 6, 7, 17, { height: 84, shooting: 92, finishing: 82, handles: 82, passing: 84, defense: 74, rebounding: 62, athleticism: 74, iq: 86 }),
      player("Vern Fleming", 6, 5, 10, { height: 80, shooting: 76, finishing: 80, handles: 84, passing: 84, defense: 80, rebounding: 60, athleticism: 80, iq: 78 }),
      player("Byron Scott", 6, 3, 4, { height: 74, shooting: 84, finishing: 80, handles: 80, passing: 76, defense: 74, rebounding: 56, athleticism: 80, iq: 82 }),
      player("George McCloud", 6, 7, 34, { height: 84, shooting: 80, finishing: 76, handles: 72, passing: 70, defense: 68, rebounding: 62, athleticism: 74, iq: 74 }),
      player("LaSalle Thompson", 6, 10, 41, { height: 94, shooting: 66, finishing: 78, handles: 58, passing: 66, defense: 82, rebounding: 80, athleticism: 74, iq: 72 }),
      player("Haywoode Workman", 6, 2, 21, { height: 71, shooting: 76, finishing: 78, handles: 84, passing: 84, defense: 80, rebounding: 56, athleticism: 80, iq: 76 }),
    ],
  },
  {
    era: "1990s",
    team: "Spurs",
    note: "David Robinson's prime — an MVP, a DPOY, and then the 1999 title once Tim Duncan arrived to form the Twin Towers.",
    players: [
      player("David Robinson", 7, 1, 50, { height: 100, shooting: 76, finishing: 90, handles: 70, passing: 78, defense: 92, rebounding: 92, athleticism: 94, iq: 86 }),
      player("Tim Duncan", 6, 11, 21, { height: 96, shooting: 80, finishing: 90, handles: 72, passing: 80, defense: 94, rebounding: 94, athleticism: 84, iq: 90 }),
      player("Sean Elliott", 6, 8, 32, { height: 86, shooting: 84, finishing: 82, handles: 78, passing: 76, defense: 78, rebounding: 68, athleticism: 80, iq: 84 }),
      player("Avery Johnson", 5, 11, 6, { height: 64, shooting: 76, finishing: 80, handles: 88, passing: 88, defense: 82, rebounding: 50, athleticism: 82, iq: 84 }),
      player("Mario Elie", 6, 5, 17, { height: 80, shooting: 82, finishing: 80, handles: 78, passing: 76, defense: 84, rebounding: 60, athleticism: 80, iq: 86 }),
      player("Vinny Del Negro", 6, 4, 15, { height: 77, shooting: 84, finishing: 80, handles: 82, passing: 80, defense: 76, rebounding: 58, athleticism: 78, iq: 82 }),
      player("Terry Cummings", 6, 9, 34, { height: 90, shooting: 78, finishing: 84, handles: 72, passing: 70, defense: 78, rebounding: 84, athleticism: 82, iq: 80 }),
      player("Willie Anderson", 6, 7, 40, { height: 84, shooting: 80, finishing: 82, handles: 82, passing: 80, defense: 82, rebounding: 66, athleticism: 84, iq: 78 }),
      player("Dennis Rodman", 6, 7, 10, { height: 84, shooting: 52, finishing: 72, handles: 62, passing: 72, defense: 94, rebounding: 100, athleticism: 88, iq: 80 }),
      player("Chuck Person", 6, 8, 45, { height: 86, shooting: 86, finishing: 80, handles: 74, passing: 72, defense: 72, rebounding: 68, athleticism: 76, iq: 84 }),
      player("Jaren Jackson", 6, 6, 11, { height: 82, shooting: 82, finishing: 76, handles: 78, passing: 72, defense: 80, rebounding: 58, athleticism: 78, iq: 78 }),
      player("Antonio Daniels", 6, 4, 33, { height: 77, shooting: 76, finishing: 80, handles: 84, passing: 82, defense: 78, rebounding: 56, athleticism: 84, iq: 76 }),
      player("Will Perdue", 7, 0, 32, { height: 98, shooting: 60, finishing: 76, handles: 52, passing: 62, defense: 80, rebounding: 80, athleticism: 68, iq: 70 }),
      player("J.R. Reid", 6, 9, 50, { height: 90, shooting: 70, finishing: 82, handles: 66, passing: 68, defense: 80, rebounding: 78, athleticism: 80, iq: 74 }),
      player("Doc Rivers", 6, 4, 25, { height: 77, shooting: 78, finishing: 78, handles: 84, passing: 84, defense: 84, rebounding: 58, athleticism: 80, iq: 86 }),
    ],
  },
  {
    era: "1990s",
    team: "Cavaliers",
    note: "Lenny Wilkens' 57-win Cavs — Mark Price's shooting, Daugherty's skill, and a deep, two-way supporting cast.",
    players: [
      player("Mark Price", 6, 0, 25, { height: 66, shooting: 90, finishing: 80, handles: 90, passing: 88, defense: 70, rebounding: 50, athleticism: 78, iq: 88 }),
      player("Brad Daugherty", 7, 0, 43, { height: 98, shooting: 76, finishing: 86, handles: 70, passing: 84, defense: 78, rebounding: 86, athleticism: 74, iq: 86 }),
      player("Larry Nance", 6, 10, 22, { height: 94, shooting: 80, finishing: 88, handles: 70, passing: 72, defense: 90, rebounding: 84, athleticism: 90, iq: 82 }),
      player("Terrell Brandon", 5, 11, 11, { height: 64, shooting: 84, finishing: 82, handles: 90, passing: 88, defense: 80, rebounding: 54, athleticism: 84, iq: 84 }),
      player("Hot Rod Williams", 6, 11, 18, { height: 96, shooting: 72, finishing: 82, handles: 62, passing: 68, defense: 86, rebounding: 80, athleticism: 84, iq: 76 }),
      player("Craig Ehlo", 6, 7, 3, { height: 84, shooting: 78, finishing: 80, handles: 78, passing: 78, defense: 84, rebounding: 64, athleticism: 82, iq: 78 }),
      player("Tyrone Hill", 6, 9, 4, { height: 90, shooting: 62, finishing: 80, handles: 60, passing: 66, defense: 82, rebounding: 88, athleticism: 84, iq: 74 }),
      player("Chris Mills", 6, 7, 20, { height: 84, shooting: 80, finishing: 80, handles: 74, passing: 72, defense: 78, rebounding: 68, athleticism: 80, iq: 76 }),
      player("Bobby Phills", 6, 5, 13, { height: 80, shooting: 78, finishing: 80, handles: 78, passing: 74, defense: 86, rebounding: 60, athleticism: 84, iq: 78 }),
      player("Danny Ferry", 6, 10, 35, { height: 94, shooting: 82, finishing: 78, handles: 72, passing: 76, defense: 72, rebounding: 66, athleticism: 68, iq: 78 }),
      player("Steve Kerr", 6, 3, 25, { height: 74, shooting: 90, finishing: 66, handles: 74, passing: 78, defense: 64, rebounding: 50, athleticism: 60, iq: 84 }),
      player("Gerald Wilkins", 6, 6, 21, { height: 82, shooting: 78, finishing: 82, handles: 80, passing: 74, defense: 80, rebounding: 62, athleticism: 86, iq: 78 }),
      player("John Battle", 6, 2, 15, { height: 71, shooting: 80, finishing: 80, handles: 80, passing: 74, defense: 72, rebounding: 52, athleticism: 80, iq: 78 }),
      player("Shawn Kemp", 6, 10, 4, { height: 94, shooting: 74, finishing: 88, handles: 68, passing: 70, defense: 80, rebounding: 86, athleticism: 94, iq: 76 }),
      player("Mike Sanders", 6, 6, 25, { height: 82, shooting: 74, finishing: 78, handles: 72, passing: 72, defense: 82, rebounding: 64, athleticism: 80, iq: 74 }),
    ],
  },
  {
    era: "1990s",
    team: "Hawks",
    note: "Lenny Wilkens' 57-win Atlanta — Mookie Blaylock's hounding defense, Mutombo's rim protection, and Dominique's early-decade scoring.",
    players: [
      player("Dominique Wilkins", 6, 8, 21, { height: 86, shooting: 87, finishing: 92, handles: 82, passing: 74, defense: 74, rebounding: 74, athleticism: 92, iq: 80 }),
      player("Dikembe Mutombo", 7, 2, 55, { height: 100, shooting: 54, finishing: 80, handles: 54, passing: 60, defense: 96, rebounding: 94, athleticism: 84, iq: 78 }),
      player("Mookie Blaylock", 6, 0, 10, { height: 66, shooting: 78, finishing: 78, handles: 88, passing: 88, defense: 92, rebounding: 58, athleticism: 88, iq: 80 }),
      player("Steve Smith", 6, 8, 8, { height: 86, shooting: 84, finishing: 82, handles: 82, passing: 80, defense: 78, rebounding: 64, athleticism: 82, iq: 84 }),
      player("Kevin Willis", 7, 0, 42, { height: 98, shooting: 74, finishing: 82, handles: 64, passing: 64, defense: 78, rebounding: 92, athleticism: 84, iq: 76 }),
      player("Stacey Augmon", 6, 8, 2, { height: 86, shooting: 68, finishing: 84, handles: 78, passing: 74, defense: 88, rebounding: 68, athleticism: 90, iq: 76 }),
      player("Christian Laettner", 6, 11, 32, { height: 96, shooting: 82, finishing: 84, handles: 74, passing: 76, defense: 74, rebounding: 82, athleticism: 74, iq: 80 }),
      player("Craig Ehlo", 6, 7, 3, { height: 84, shooting: 78, finishing: 80, handles: 78, passing: 78, defense: 84, rebounding: 64, athleticism: 80, iq: 78 }),
      player("Tyrone Corbin", 6, 6, 23, { height: 82, shooting: 74, finishing: 78, handles: 72, passing: 72, defense: 84, rebounding: 72, athleticism: 80, iq: 74 }),
      player("Jon Koncak", 7, 0, 53, { height: 98, shooting: 60, finishing: 74, handles: 54, passing: 64, defense: 82, rebounding: 78, athleticism: 72, iq: 70 }),
      player("Duane Ferrell", 6, 7, 35, { height: 84, shooting: 74, finishing: 80, handles: 72, passing: 70, defense: 76, rebounding: 66, athleticism: 84, iq: 74 }),
      player("Ken Norman", 6, 8, 4, { height: 86, shooting: 76, finishing: 82, handles: 72, passing: 72, defense: 78, rebounding: 74, athleticism: 84, iq: 74 }),
      player("Grant Long", 6, 8, 44, { height: 86, shooting: 72, finishing: 78, handles: 68, passing: 72, defense: 84, rebounding: 78, athleticism: 80, iq: 74 }),
      player("Spud Webb", 5, 7, 4, { height: 56, shooting: 78, finishing: 80, handles: 90, passing: 86, defense: 78, rebounding: 46, athleticism: 94, iq: 80 }),
      player("Doc Rivers", 6, 4, 25, { height: 77, shooting: 78, finishing: 80, handles: 84, passing: 84, defense: 86, rebounding: 60, athleticism: 82, iq: 86 }),
    ],
  },
  {
    era: "1990s",
    team: "Hornets",
    note: "Expansion Charlotte grew fast — Larry Johnson and Mourning's young muscle, Mugsy and Dell Curry, then Glen Rice's scoring.",
    players: [
      player("Alonzo Mourning", 6, 10, 33, { height: 94, shooting: 74, finishing: 88, handles: 64, passing: 66, defense: 94, rebounding: 84, athleticism: 88, iq: 84 }),
      player("Larry Johnson", 6, 6, 2, { height: 82, shooting: 80, finishing: 88, handles: 82, passing: 80, defense: 80, rebounding: 84, athleticism: 90, iq: 84 }),
      player("Glen Rice", 6, 8, 41, { height: 86, shooting: 92, finishing: 84, handles: 78, passing: 72, defense: 70, rebounding: 64, athleticism: 78, iq: 88 }),
      player("Muggsy Bogues", 5, 3, 1, { height: 50, shooting: 74, finishing: 72, handles: 92, passing: 92, defense: 84, rebounding: 44, athleticism: 88, iq: 80 }),
      player("Dell Curry", 6, 4, 30, { height: 77, shooting: 90, finishing: 80, handles: 80, passing: 74, defense: 72, rebounding: 56, athleticism: 80, iq: 86 }),
      player("Anthony Mason", 6, 7, 14, { height: 84, shooting: 72, finishing: 82, handles: 82, passing: 82, defense: 84, rebounding: 84, athleticism: 82, iq: 80 }),
      player("Vlade Divac", 7, 1, 12, { height: 100, shooting: 74, finishing: 82, handles: 70, passing: 86, defense: 80, rebounding: 82, athleticism: 70, iq: 88 }),
      player("David Wesley", 6, 1, 7, { height: 68, shooting: 80, finishing: 80, handles: 84, passing: 80, defense: 82, rebounding: 54, athleticism: 82, iq: 82 }),
      player("Kendall Gill", 6, 5, 13, { height: 80, shooting: 78, finishing: 82, handles: 82, passing: 78, defense: 84, rebounding: 62, athleticism: 88, iq: 78 }),
      player("Hersey Hawkins", 6, 3, 33, { height: 74, shooting: 83, finishing: 80, handles: 78, passing: 76, defense: 82, rebounding: 58, athleticism: 78, iq: 82 }),
      player("Scott Burrell", 6, 7, 24, { height: 84, shooting: 80, finishing: 80, handles: 74, passing: 72, defense: 80, rebounding: 66, athleticism: 84, iq: 76 }),
      player("Bobby Phills", 6, 5, 13, { height: 80, shooting: 78, finishing: 80, handles: 78, passing: 74, defense: 86, rebounding: 60, athleticism: 84, iq: 78 }),
      player("Kenny Gattison", 6, 8, 44, { height: 86, shooting: 68, finishing: 80, handles: 64, passing: 66, defense: 80, rebounding: 76, athleticism: 80, iq: 72 }),
      player("Matt Geiger", 7, 0, 45, { height: 98, shooting: 72, finishing: 80, handles: 60, passing: 64, defense: 78, rebounding: 80, athleticism: 74, iq: 74 }),
      player("J.R. Reid", 6, 9, 34, { height: 90, shooting: 70, finishing: 82, handles: 66, passing: 68, defense: 78, rebounding: 76, athleticism: 80, iq: 74 }),
    ],
  },
  {
    era: "1990s",
    team: "Heat",
    note: "Pat Riley's late-90s Miami — Mourning's defense, Hardaway's crossover, and a hard-nosed 61-win core.",
    players: [
      player("Alonzo Mourning", 6, 10, 33, { height: 94, shooting: 76, finishing: 88, handles: 64, passing: 66, defense: 96, rebounding: 86, athleticism: 88, iq: 84 }),
      player("Tim Hardaway", 6, 0, 10, { height: 66, shooting: 84, finishing: 82, handles: 96, passing: 90, defense: 78, rebounding: 52, athleticism: 86, iq: 88 }),
      player("Glen Rice", 6, 8, 41, { height: 86, shooting: 90, finishing: 84, handles: 78, passing: 72, defense: 70, rebounding: 64, athleticism: 80, iq: 88 }),
      player("Jamal Mashburn", 6, 8, 24, { height: 86, shooting: 82, finishing: 86, handles: 82, passing: 78, defense: 72, rebounding: 72, athleticism: 80, iq: 82 }),
      player("P.J. Brown", 6, 11, 42, { height: 96, shooting: 72, finishing: 80, handles: 64, passing: 70, defense: 86, rebounding: 82, athleticism: 82, iq: 78 }),
      player("Dan Majerle", 6, 6, 9, { height: 82, shooting: 84, finishing: 78, handles: 76, passing: 76, defense: 84, rebounding: 64, athleticism: 80, iq: 82 }),
      player("Voshon Lenard", 6, 4, 2, { height: 77, shooting: 84, finishing: 78, handles: 78, passing: 72, defense: 74, rebounding: 56, athleticism: 78, iq: 80 }),
      player("Steve Smith", 6, 8, 8, { height: 86, shooting: 82, finishing: 82, handles: 82, passing: 80, defense: 76, rebounding: 62, athleticism: 82, iq: 82 }),
      player("Rony Seikaly", 6, 11, 4, { height: 96, shooting: 68, finishing: 84, handles: 62, passing: 66, defense: 80, rebounding: 86, athleticism: 82, iq: 76 }),
      player("Bimbo Coles", 6, 2, 12, { height: 71, shooting: 78, finishing: 78, handles: 84, passing: 82, defense: 80, rebounding: 54, athleticism: 82, iq: 78 }),
      player("Sherman Douglas", 6, 0, 20, { height: 66, shooting: 76, finishing: 80, handles: 86, passing: 86, defense: 74, rebounding: 52, athleticism: 80, iq: 78 }),
      player("Grant Long", 6, 9, 44, { height: 90, shooting: 72, finishing: 80, handles: 68, passing: 72, defense: 84, rebounding: 80, athleticism: 80, iq: 74 }),
      player("Keith Askins", 6, 8, 40, { height: 86, shooting: 76, finishing: 72, handles: 66, passing: 68, defense: 82, rebounding: 70, athleticism: 80, iq: 74 }),
      player("Willie Burton", 6, 8, 42, { height: 86, shooting: 78, finishing: 80, handles: 72, passing: 70, defense: 72, rebounding: 68, athleticism: 80, iq: 76 }),
      player("Kevin Edwards", 6, 3, 20, { height: 74, shooting: 78, finishing: 80, handles: 82, passing: 78, defense: 78, rebounding: 58, athleticism: 82, iq: 76 }),
    ],
  },
  {
    era: "1990s",
    team: "Lakers",
    note: "From the post-Showtime years to the arrival of Shaq and a teenage Kobe — a franchise reloading into a dynasty.",
    players: [
      player("Shaquille O'Neal", 7, 1, 34, { height: 100, shooting: 58, finishing: 96, handles: 68, passing: 76, defense: 90, rebounding: 92, athleticism: 96, iq: 84 }),
      player("Kobe Bryant", 6, 6, 8, { height: 82, shooting: 84, finishing: 88, handles: 92, passing: 78, defense: 84, rebounding: 64, athleticism: 94, iq: 92 }),
      player("Eddie Jones", 6, 6, 6, { height: 82, shooting: 84, finishing: 84, handles: 80, passing: 78, defense: 88, rebounding: 64, athleticism: 90, iq: 80 }),
      player("Nick Van Exel", 6, 1, 9, { height: 68, shooting: 82, finishing: 80, handles: 90, passing: 86, defense: 72, rebounding: 54, athleticism: 80, iq: 84 }),
      player("Vlade Divac", 7, 1, 12, { height: 100, shooting: 72, finishing: 82, handles: 70, passing: 86, defense: 80, rebounding: 82, athleticism: 72, iq: 88 }),
      player("Sedale Threatt", 6, 2, 3, { height: 71, shooting: 82, finishing: 80, handles: 84, passing: 80, defense: 82, rebounding: 54, athleticism: 84, iq: 78 }),
      player("James Worthy", 6, 9, 42, { height: 90, shooting: 80, finishing: 90, handles: 82, passing: 78, defense: 80, rebounding: 74, athleticism: 90, iq: 85 }),
      player("Elden Campbell", 6, 11, 41, { height: 96, shooting: 70, finishing: 82, handles: 64, passing: 68, defense: 84, rebounding: 80, athleticism: 82, iq: 74 }),
      player("Cedric Ceballos", 6, 7, 4, { height: 84, shooting: 80, finishing: 86, handles: 76, passing: 70, defense: 70, rebounding: 74, athleticism: 84, iq: 78 }),
      player("Robert Horry", 6, 9, 5, { height: 90, shooting: 80, finishing: 80, handles: 74, passing: 76, defense: 84, rebounding: 76, athleticism: 82, iq: 86 }),
      player("Rick Fox", 6, 7, 17, { height: 84, shooting: 78, finishing: 80, handles: 78, passing: 78, defense: 82, rebounding: 64, athleticism: 80, iq: 80 }),
      player("Sam Perkins", 6, 9, 14, { height: 90, shooting: 82, finishing: 80, handles: 70, passing: 74, defense: 78, rebounding: 80, athleticism: 74, iq: 82 }),
      player("Byron Scott", 6, 3, 4, { height: 74, shooting: 86, finishing: 82, handles: 80, passing: 78, defense: 76, rebounding: 58, athleticism: 82, iq: 84 }),
      player("A.C. Green", 6, 9, 45, { height: 90, shooting: 70, finishing: 80, handles: 62, passing: 68, defense: 78, rebounding: 86, athleticism: 80, iq: 78 }),
      player("Derek Fisher", 6, 1, 2, { height: 68, shooting: 80, finishing: 76, handles: 82, passing: 80, defense: 80, rebounding: 52, athleticism: 78, iq: 84 }),
    ],
  },
  {
    era: "2000s",
    team: "Cavaliers",
    note: "The Witness era. LeBron dragged a roster of role players to the 2007 Finals on pure will.",
    players: [
      player("LeBron James", 6, 8, 23, { height: 88, shooting: 80, finishing: 96, handles: 92, passing: 93, defense: 88, rebounding: 80, athleticism: 98, iq: 92 }),
      player("Zydrunas Ilgauskas", 7, 3, 11, { height: 100, shooting: 76, finishing: 82, handles: 54, passing: 68, defense: 82, rebounding: 90, athleticism: 64, iq: 76 }),
      player("Daniel Gibson", 6, 2, 1, { height: 72, shooting: 84, finishing: 76, handles: 78, passing: 74, defense: 72, rebounding: 50, athleticism: 76, iq: 86 }),
      player("Larry Hughes", 6, 5, 4, { height: 80, shooting: 78, finishing: 80, handles: 80, passing: 74, defense: 82, rebounding: 58, athleticism: 84, iq: 74 }),
      player("Drew Gooden", 6, 10, 90, { height: 94, shooting: 76, finishing: 78, handles: 62, passing: 64, defense: 72, rebounding: 86, athleticism: 76, iq: 72 }),
      player("Anderson Varejao", 6, 10, 17, { height: 94, shooting: 62, finishing: 72, handles: 58, passing: 64, defense: 82, rebounding: 88, athleticism: 80, iq: 68 }),
      player("Donyell Marshall", 6, 9, 2, { height: 90, shooting: 82, finishing: 76, handles: 66, passing: 66, defense: 68, rebounding: 80, athleticism: 76, iq: 76 }),
      player("Sasha Pavlovic", 6, 6, 9, { height: 82, shooting: 76, finishing: 74, handles: 70, passing: 68, defense: 72, rebounding: 60, athleticism: 76, iq: 70 }),
      player("Mo Williams", 6, 1, 2, { height: 68, shooting: 84, finishing: 80, handles: 86, passing: 82, defense: 72, rebounding: 54, athleticism: 80, iq: 82 }),
      player("Antawn Jamison", 6, 9, 4, { height: 90, shooting: 82, finishing: 86, handles: 76, passing: 70, defense: 70, rebounding: 80, athleticism: 80, iq: 80 }),
      player("Delonte West", 6, 4, 13, { height: 77, shooting: 82, finishing: 80, handles: 82, passing: 78, defense: 82, rebounding: 58, athleticism: 80, iq: 78 }),
      player("Ben Wallace", 6, 9, 3, { height: 90, shooting: 48, finishing: 74, handles: 54, passing: 64, defense: 94, rebounding: 90, athleticism: 84, iq: 72 }),
      player("Carlos Boozer", 6, 9, 1, { height: 90, shooting: 74, finishing: 86, handles: 66, passing: 70, defense: 74, rebounding: 84, athleticism: 80, iq: 78 }),
      player("Eric Snow", 6, 3, 2, { height: 74, shooting: 62, finishing: 74, handles: 84, passing: 84, defense: 84, rebounding: 56, athleticism: 80, iq: 74 }),
      player("Wally Szczerbiak", 6, 7, 10, { height: 84, shooting: 86, finishing: 80, handles: 74, passing: 70, defense: 68, rebounding: 62, athleticism: 72, iq: 80 }),
    ],
  },
  {
    era: "2000s",
    team: "Raptors",
    note: "Half Man, Half Amazing. Vince Carter put the Raptors on the map and left a crater-shaped exit. The dunks live forever.",
    players: [
      player("Vince Carter", 6, 6, 15, { height: 82, shooting: 88, finishing: 85, handles: 82, passing: 74, defense: 74, rebounding: 64, athleticism: 98, iq: 86 }),
      player("Antonio Davis", 6, 9, 54, { height: 90, shooting: 64, finishing: 74, handles: 52, passing: 60, defense: 86, rebounding: 90, athleticism: 74, iq: 66 }),
      player("Morris Peterson", 6, 7, 24, { height: 84, shooting: 82, finishing: 80, handles: 72, passing: 70, defense: 76, rebounding: 64, athleticism: 82, iq: 78 }),
      player("Alvin Williams", 6, 5, 7, { height: 80, shooting: 78, finishing: 74, handles: 84, passing: 82, defense: 78, rebounding: 54, athleticism: 80, iq: 76 }),
      player("Keon Clark", 6, 11, 5, { height: 96, shooting: 62, finishing: 74, handles: 52, passing: 56, defense: 84, rebounding: 86, athleticism: 86, iq: 62 }),
      player("Dell Curry", 6, 5, 30, { height: 80, shooting: 90, finishing: 76, handles: 72, passing: 72, defense: 68, rebounding: 52, athleticism: 72, iq: 84 }),
      player("Chris Childs", 6, 3, 2, { height: 74, shooting: 74, finishing: 70, handles: 80, passing: 82, defense: 76, rebounding: 52, athleticism: 74, iq: 74 }),
      player("Jerome Williams", 6, 9, 6, { height: 90, shooting: 62, finishing: 70, handles: 58, passing: 60, defense: 80, rebounding: 86, athleticism: 80, iq: 64 }),
      player("Chris Bosh", 6, 10, 4, { height: 94, shooting: 80, finishing: 86, handles: 74, passing: 74, defense: 78, rebounding: 84, athleticism: 82, iq: 82 }),
      player("Jose Calderon", 6, 3, 8, { height: 74, shooting: 84, finishing: 78, handles: 86, passing: 88, defense: 70, rebounding: 54, athleticism: 74, iq: 86 }),
      player("Andrea Bargnani", 7, 0, 7, { height: 98, shooting: 84, finishing: 80, handles: 68, passing: 62, defense: 66, rebounding: 70, athleticism: 72, iq: 76 }),
      player("T.J. Ford", 6, 0, 5, { height: 66, shooting: 76, finishing: 80, handles: 90, passing: 86, defense: 72, rebounding: 50, athleticism: 88, iq: 78 }),
      player("Anthony Parker", 6, 6, 18, { height: 82, shooting: 84, finishing: 80, handles: 78, passing: 76, defense: 80, rebounding: 60, athleticism: 78, iq: 80 }),
      player("Hedo Turkoglu", 6, 10, 15, { height: 94, shooting: 80, finishing: 80, handles: 80, passing: 80, defense: 68, rebounding: 66, athleticism: 70, iq: 80 }),
      player("Charlie Villanueva", 6, 11, 31, { height: 96, shooting: 80, finishing: 82, handles: 70, passing: 64, defense: 68, rebounding: 78, athleticism: 80, iq: 74 }),
    ],
  },
  {
    era: "2000s",
    team: "Celtics",
    note: "The 2008 champions — a new Big Three of Pierce, Garnett, and Ray Allen, with Rondo emerging and a switch-everything defense.",
    players: [
      player("Paul Pierce", 6, 7, 34, { height: 84, shooting: 86, finishing: 88, handles: 84, passing: 80, defense: 80, rebounding: 68, athleticism: 82, iq: 90 }),
      player("Kevin Garnett", 6, 11, 5, { height: 96, shooting: 80, finishing: 86, handles: 74, passing: 82, defense: 94, rebounding: 88, athleticism: 86, iq: 94 }),
      player("Ray Allen", 6, 5, 20, { height: 80, shooting: 97, finishing: 82, handles: 82, passing: 78, defense: 78, rebounding: 60, athleticism: 82, iq: 90 }),
      player("Rajon Rondo", 6, 1, 9, { height: 68, shooting: 64, finishing: 82, handles: 92, passing: 92, defense: 88, rebounding: 66, athleticism: 90, iq: 94 }),
      player("Antoine Walker", 6, 9, 8, { height: 90, shooting: 76, finishing: 82, handles: 82, passing: 80, defense: 74, rebounding: 80, athleticism: 80, iq: 74 }),
      player("Kendrick Perkins", 6, 10, 43, { height: 94, shooting: 54, finishing: 80, handles: 54, passing: 60, defense: 88, rebounding: 82, athleticism: 78, iq: 72 }),
      player("Tony Allen", 6, 4, 42, { height: 77, shooting: 70, finishing: 82, handles: 76, passing: 70, defense: 90, rebounding: 60, athleticism: 90, iq: 74 }),
      player("James Posey", 6, 8, 41, { height: 86, shooting: 82, finishing: 78, handles: 74, passing: 72, defense: 86, rebounding: 68, athleticism: 80, iq: 84 }),
      player("Eddie House", 6, 1, 50, { height: 68, shooting: 88, finishing: 74, handles: 78, passing: 72, defense: 68, rebounding: 50, athleticism: 78, iq: 82 }),
      player("Glen Davis", 6, 9, 11, { height: 90, shooting: 72, finishing: 80, handles: 64, passing: 66, defense: 80, rebounding: 78, athleticism: 78, iq: 78 }),
      player("Rasheed Wallace", 6, 11, 30, { height: 96, shooting: 80, finishing: 82, handles: 70, passing: 72, defense: 88, rebounding: 80, athleticism: 78, iq: 78 }),
      player("Kenny Anderson", 6, 1, 1, { height: 68, shooting: 78, finishing: 80, handles: 88, passing: 86, defense: 74, rebounding: 52, athleticism: 82, iq: 78 }),
      player("Walter McCarty", 6, 10, 44, { height: 94, shooting: 78, finishing: 76, handles: 70, passing: 70, defense: 78, rebounding: 66, athleticism: 78, iq: 74 }),
      player("Ricky Davis", 6, 7, 31, { height: 84, shooting: 80, finishing: 84, handles: 80, passing: 74, defense: 68, rebounding: 62, athleticism: 88, iq: 74 }),
      player("Mark Blount", 7, 0, 50, { height: 98, shooting: 70, finishing: 78, handles: 58, passing: 62, defense: 76, rebounding: 78, athleticism: 72, iq: 70 }),
    ],
  },
  {
    era: "2000s",
    team: "Heat",
    note: "Wade and Shaq powered the 2006 title; Flash's relentless drives and a deep, physical roster defined the decade in Miami.",
    players: [
      player("Dwyane Wade", 6, 4, 3, { height: 77, shooting: 80, finishing: 90, handles: 85, passing: 84, defense: 84, rebounding: 64, athleticism: 94, iq: 82 }),
      player("Shaquille O'Neal", 7, 1, 32, { height: 100, shooting: 54, finishing: 94, handles: 64, passing: 74, defense: 86, rebounding: 86, athleticism: 88, iq: 82 }),
      player("Alonzo Mourning", 6, 10, 33, { height: 94, shooting: 72, finishing: 84, handles: 62, passing: 64, defense: 92, rebounding: 80, athleticism: 82, iq: 80 }),
      player("Eddie Jones", 6, 6, 6, { height: 82, shooting: 84, finishing: 82, handles: 80, passing: 76, defense: 86, rebounding: 62, athleticism: 88, iq: 80 }),
      player("Udonis Haslem", 6, 8, 40, { height: 86, shooting: 74, finishing: 78, handles: 64, passing: 68, defense: 82, rebounding: 82, athleticism: 78, iq: 78 }),
      player("Jermaine O'Neal", 6, 11, 7, { height: 96, shooting: 74, finishing: 84, handles: 66, passing: 70, defense: 84, rebounding: 80, athleticism: 82, iq: 76 }),
      player("Gary Payton", 6, 4, 20, { height: 77, shooting: 78, finishing: 80, handles: 88, passing: 86, defense: 84, rebounding: 60, athleticism: 78, iq: 82 }),
      player("Antoine Walker", 6, 9, 8, { height: 90, shooting: 76, finishing: 80, handles: 80, passing: 80, defense: 72, rebounding: 78, athleticism: 78, iq: 74 }),
      player("James Posey", 6, 8, 41, { height: 86, shooting: 82, finishing: 78, handles: 74, passing: 72, defense: 86, rebounding: 68, athleticism: 80, iq: 84 }),
      player("Damon Jones", 6, 3, 55, { height: 74, shooting: 86, finishing: 74, handles: 80, passing: 76, defense: 68, rebounding: 52, athleticism: 74, iq: 80 }),
      player("Brian Grant", 6, 9, 55, { height: 90, shooting: 70, finishing: 80, handles: 66, passing: 70, defense: 82, rebounding: 84, athleticism: 84, iq: 76 }),
      player("Michael Beasley", 6, 9, 30, { height: 90, shooting: 80, finishing: 84, handles: 78, passing: 68, defense: 66, rebounding: 78, athleticism: 84, iq: 74 }),
      player("Mario Chalmers", 6, 2, 15, { height: 71, shooting: 80, finishing: 78, handles: 84, passing: 80, defense: 80, rebounding: 54, athleticism: 82, iq: 80 }),
      player("Anthony Carter", 6, 2, 25, { height: 71, shooting: 70, finishing: 78, handles: 84, passing: 82, defense: 82, rebounding: 54, athleticism: 84, iq: 74 }),
      player("Rasual Butler", 6, 7, 45, { height: 84, shooting: 82, finishing: 78, handles: 72, passing: 68, defense: 74, rebounding: 60, athleticism: 80, iq: 76 }),
    ],
  },
  {
    era: "2000s",
    team: "76ers",
    note: "Allen Iverson carried a defense-and-grit roster to the 2001 Finals; later Iguodala's two-way athleticism led the way.",
    players: [
      player("Allen Iverson", 6, 0, 3, { height: 66, shooting: 82, finishing: 90, handles: 100, passing: 82, defense: 73, rebounding: 54, athleticism: 94, iq: 82 }),
      player("Dikembe Mutombo", 7, 2, 55, { height: 100, shooting: 54, finishing: 80, handles: 54, passing: 60, defense: 96, rebounding: 92, athleticism: 82, iq: 78 }),
      player("Andre Iguodala", 6, 6, 9, { height: 82, shooting: 74, finishing: 78, handles: 82, passing: 82, defense: 90, rebounding: 70, athleticism: 92, iq: 78 }),
      player("Andre Miller", 6, 2, 88, { height: 71, shooting: 74, finishing: 84, handles: 90, passing: 90, defense: 78, rebounding: 64, athleticism: 80, iq: 88 }),
      player("Aaron McKie", 6, 5, 8, { height: 80, shooting: 78, finishing: 78, handles: 82, passing: 82, defense: 84, rebounding: 64, athleticism: 78, iq: 78 }),
      player("Eric Snow", 6, 3, 20, { height: 74, shooting: 62, finishing: 74, handles: 84, passing: 84, defense: 86, rebounding: 56, athleticism: 80, iq: 76 }),
      player("Theo Ratliff", 6, 10, 42, { height: 94, shooting: 58, finishing: 78, handles: 54, passing: 62, defense: 90, rebounding: 80, athleticism: 84, iq: 70 }),
      player("Glenn Robinson", 6, 7, 13, { height: 84, shooting: 84, finishing: 86, handles: 80, passing: 74, defense: 70, rebounding: 70, athleticism: 80, iq: 82 }),
      player("Kyle Korver", 6, 7, 26, { height: 84, shooting: 92, finishing: 72, handles: 72, passing: 70, defense: 70, rebounding: 58, athleticism: 70, iq: 82 }),
      player("Samuel Dalembert", 6, 11, 1, { height: 96, shooting: 56, finishing: 78, handles: 54, passing: 58, defense: 86, rebounding: 84, athleticism: 82, iq: 68 }),
      player("Derrick Coleman", 6, 10, 44, { height: 94, shooting: 76, finishing: 84, handles: 72, passing: 74, defense: 78, rebounding: 84, athleticism: 78, iq: 76 }),
      player("Tyrone Hill", 6, 9, 4, { height: 90, shooting: 62, finishing: 78, handles: 60, passing: 64, defense: 82, rebounding: 86, athleticism: 80, iq: 72 }),
      player("George Lynch", 6, 8, 5, { height: 86, shooting: 68, finishing: 78, handles: 72, passing: 72, defense: 84, rebounding: 74, athleticism: 84, iq: 72 }),
      player("Willie Green", 6, 4, 33, { height: 77, shooting: 78, finishing: 80, handles: 78, passing: 70, defense: 72, rebounding: 56, athleticism: 84, iq: 76 }),
      player("Toni Kukoc", 6, 10, 7, { height: 90, shooting: 84, finishing: 80, handles: 82, passing: 86, defense: 70, rebounding: 72, athleticism: 72, iq: 80 }),
    ],
  },
  {
    era: "2000s",
    team: "Magic",
    note: "Dwight Howard's defense anchored the 2009 Finals run, with Hedo, Rashard Lewis, and Jameer spacing the floor; T-Mac scored early in the decade.",
    players: [
      player("Dwight Howard", 6, 11, 12, { height: 96, shooting: 54, finishing: 88, handles: 60, passing: 64, defense: 96, rebounding: 96, athleticism: 96, iq: 74 }),
      player("Tracy McGrady", 6, 8, 1, { height: 86, shooting: 88, finishing: 90, handles: 90, passing: 82, defense: 78, rebounding: 72, athleticism: 92, iq: 84 }),
      player("Rashard Lewis", 6, 10, 9, { height: 94, shooting: 88, finishing: 80, handles: 74, passing: 70, defense: 72, rebounding: 72, athleticism: 78, iq: 82 }),
      player("Hedo Turkoglu", 6, 10, 15, { height: 94, shooting: 82, finishing: 82, handles: 82, passing: 82, defense: 70, rebounding: 66, athleticism: 72, iq: 84 }),
      player("Jameer Nelson", 6, 0, 14, { height: 66, shooting: 82, finishing: 80, handles: 88, passing: 84, defense: 74, rebounding: 54, athleticism: 82, iq: 82 }),
      player("Grant Hill", 6, 8, 33, { height: 86, shooting: 82, finishing: 90, handles: 88, passing: 88, defense: 82, rebounding: 72, athleticism: 88, iq: 84 }),
      player("Mike Miller", 6, 8, 18, { height: 86, shooting: 86, finishing: 80, handles: 78, passing: 78, defense: 68, rebounding: 68, athleticism: 78, iq: 80 }),
      player("Darrell Armstrong", 6, 1, 10, { height: 68, shooting: 80, finishing: 78, handles: 86, passing: 82, defense: 84, rebounding: 54, athleticism: 84, iq: 82 }),
      player("Rafer Alston", 6, 2, 11, { height: 71, shooting: 78, finishing: 78, handles: 88, passing: 82, defense: 76, rebounding: 54, athleticism: 80, iq: 78 }),
      player("Courtney Lee", 6, 5, 11, { height: 80, shooting: 80, finishing: 80, handles: 76, passing: 70, defense: 82, rebounding: 58, athleticism: 84, iq: 78 }),
      player("Marcin Gortat", 6, 11, 13, { height: 96, shooting: 64, finishing: 80, handles: 56, passing: 62, defense: 80, rebounding: 82, athleticism: 78, iq: 72 }),
      player("Drew Gooden", 6, 10, 90, { height: 94, shooting: 74, finishing: 82, handles: 66, passing: 68, defense: 74, rebounding: 82, athleticism: 80, iq: 74 }),
      player("Pat Garrity", 6, 9, 40, { height: 90, shooting: 84, finishing: 72, handles: 66, passing: 66, defense: 66, rebounding: 64, athleticism: 64, iq: 76 }),
      player("Keith Bogans", 6, 5, 10, { height: 80, shooting: 78, finishing: 76, handles: 74, passing: 70, defense: 82, rebounding: 58, athleticism: 80, iq: 74 }),
      player("Tony Battie", 6, 11, 15, { height: 96, shooting: 66, finishing: 78, handles: 56, passing: 64, defense: 80, rebounding: 78, athleticism: 78, iq: 70 }),
    ],
  },
  {
    era: "2000s",
    team: "Rockets",
    note: "Yao and T-Mac headlined a star-crossed contender; Battier and Scola added two-way toughness.",
    players: [
      player("Tracy McGrady", 6, 8, 1, { height: 86, shooting: 88, finishing: 90, handles: 90, passing: 82, defense: 76, rebounding: 70, athleticism: 90, iq: 84 }),
      player("Yao Ming", 7, 6, 11, { height: 100, shooting: 78, finishing: 88, handles: 60, passing: 72, defense: 84, rebounding: 88, athleticism: 70, iq: 82 }),
      player("Steve Francis", 6, 3, 3, { height: 74, shooting: 80, finishing: 86, handles: 90, passing: 84, defense: 74, rebounding: 64, athleticism: 92, iq: 82 }),
      player("Shane Battier", 6, 8, 31, { height: 86, shooting: 80, finishing: 76, handles: 70, passing: 74, defense: 90, rebounding: 66, athleticism: 78, iq: 88 }),
      player("Cuttino Mobley", 6, 4, 5, { height: 77, shooting: 84, finishing: 82, handles: 80, passing: 72, defense: 78, rebounding: 60, athleticism: 84, iq: 80 }),
      player("Luis Scola", 6, 9, 4, { height: 90, shooting: 78, finishing: 86, handles: 70, passing: 74, defense: 74, rebounding: 82, athleticism: 74, iq: 80 }),
      player("Aaron Brooks", 6, 0, 0, { height: 66, shooting: 84, finishing: 80, handles: 88, passing: 78, defense: 68, rebounding: 48, athleticism: 88, iq: 80 }),
      player("Rafer Alston", 6, 2, 12, { height: 71, shooting: 78, finishing: 78, handles: 88, passing: 82, defense: 76, rebounding: 54, athleticism: 80, iq: 78 }),
      player("Kyle Lowry", 6, 0, 7, { height: 66, shooting: 78, finishing: 80, handles: 86, passing: 82, defense: 82, rebounding: 58, athleticism: 84, iq: 91 }),
      player("Carl Landry", 6, 8, 14, { height: 86, shooting: 74, finishing: 84, handles: 66, passing: 66, defense: 74, rebounding: 74, athleticism: 82, iq: 78 }),
      player("Bonzi Wells", 6, 5, 6, { height: 80, shooting: 78, finishing: 82, handles: 80, passing: 74, defense: 76, rebounding: 70, athleticism: 82, iq: 78 }),
      player("Eddie Griffin", 6, 10, 7, { height: 94, shooting: 74, finishing: 78, handles: 64, passing: 66, defense: 82, rebounding: 78, athleticism: 82, iq: 70 }),
      player("Kelvin Cato", 6, 11, 13, { height: 96, shooting: 56, finishing: 76, handles: 54, passing: 60, defense: 82, rebounding: 80, athleticism: 80, iq: 68 }),
      player("Maurice Taylor", 6, 9, 4, { height: 90, shooting: 76, finishing: 82, handles: 70, passing: 68, defense: 70, rebounding: 74, athleticism: 78, iq: 74 }),
      player("David Wesley", 6, 1, 7, { height: 68, shooting: 80, finishing: 78, handles: 82, passing: 78, defense: 80, rebounding: 54, athleticism: 80, iq: 78 }),
    ],
  },
  {
    era: "2000s",
    team: "Pacers",
    note: "A 61-win contender before the Malice — Jermaine O'Neal's interior force, Reggie's late-career shooting, and Artest's defense.",
    players: [
      player("Jermaine O'Neal", 6, 11, 7, { height: 96, shooting: 74, finishing: 86, handles: 66, passing: 70, defense: 86, rebounding: 82, athleticism: 84, iq: 80 }),
      player("Reggie Miller", 6, 7, 31, { height: 84, shooting: 95, finishing: 80, handles: 80, passing: 78, defense: 76, rebounding: 60, athleticism: 78, iq: 86 }),
      player("Ron Artest", 6, 7, 91, { height: 84, shooting: 74, finishing: 84, handles: 80, passing: 74, defense: 94, rebounding: 72, athleticism: 86, iq: 80 }),
      player("Danny Granger", 6, 8, 33, { height: 86, shooting: 84, finishing: 84, handles: 78, passing: 72, defense: 78, rebounding: 72, athleticism: 82, iq: 82 }),
      player("Jamaal Tinsley", 6, 3, 11, { height: 74, shooting: 74, finishing: 80, handles: 90, passing: 88, defense: 78, rebounding: 60, athleticism: 82, iq: 78 }),
      player("Stephen Jackson", 6, 8, 1, { height: 86, shooting: 80, finishing: 82, handles: 80, passing: 76, defense: 80, rebounding: 66, athleticism: 82, iq: 82 }),
      player("Al Harrington", 6, 9, 3, { height: 90, shooting: 80, finishing: 84, handles: 76, passing: 72, defense: 72, rebounding: 76, athleticism: 80, iq: 78 }),
      player("Jeff Foster", 6, 11, 10, { height: 96, shooting: 58, finishing: 76, handles: 56, passing: 64, defense: 82, rebounding: 86, athleticism: 78, iq: 70 }),
      player("Austin Croshere", 6, 9, 44, { height: 90, shooting: 80, finishing: 78, handles: 70, passing: 70, defense: 70, rebounding: 74, athleticism: 72, iq: 76 }),
      player("Mike Dunleavy", 6, 9, 17, { height: 90, shooting: 82, finishing: 80, handles: 76, passing: 78, defense: 70, rebounding: 70, athleticism: 72, iq: 78 }),
      player("Brad Miller", 7, 0, 52, { height: 98, shooting: 74, finishing: 78, handles: 62, passing: 80, defense: 76, rebounding: 82, athleticism: 54, iq: 76 }),
      player("Fred Jones", 6, 4, 20, { height: 77, shooting: 78, finishing: 80, handles: 78, passing: 72, defense: 78, rebounding: 58, athleticism: 88, iq: 74 }),
      player("Jonathan Bender", 7, 0, 2, { height: 98, shooting: 78, finishing: 78, handles: 70, passing: 66, defense: 74, rebounding: 68, athleticism: 82, iq: 72 }),
      player("Troy Murphy", 6, 11, 3, { height: 96, shooting: 84, finishing: 78, handles: 66, passing: 70, defense: 68, rebounding: 84, athleticism: 66, iq: 76 }),
      player("T.J. Ford", 6, 0, 5, { height: 66, shooting: 76, finishing: 80, handles: 90, passing: 86, defense: 72, rebounding: 50, athleticism: 88, iq: 78 }),
    ],
  },
  {
    era: "2000s",
    team: "Hornets",
    note: "Chris Paul's brilliance drove a 56-win New Orleans team, with David West's mid-range and Tyson Chandler's lob threat.",
    players: [
      player("Chris Paul", 6, 0, 3, { height: 66, shooting: 82, finishing: 84, handles: 96, passing: 98, defense: 86, rebounding: 58, athleticism: 88, iq: 98 }),
      player("David West", 6, 9, 30, { height: 90, shooting: 82, finishing: 86, handles: 72, passing: 74, defense: 78, rebounding: 80, athleticism: 80, iq: 84 }),
      player("Baron Davis", 6, 3, 1, { height: 74, shooting: 83, finishing: 86, handles: 92, passing: 90, defense: 82, rebounding: 62, athleticism: 92, iq: 82 }),
      player("Peja Stojakovic", 6, 10, 16, { height: 94, shooting: 92, finishing: 78, handles: 72, passing: 72, defense: 66, rebounding: 70, athleticism: 64, iq: 84 }),
      player("Tyson Chandler", 7, 1, 6, { height: 100, shooting: 50, finishing: 82, handles: 54, passing: 60, defense: 90, rebounding: 86, athleticism: 88, iq: 74 }),
      player("Jamal Mashburn", 6, 8, 24, { height: 86, shooting: 82, finishing: 86, handles: 82, passing: 80, defense: 72, rebounding: 72, athleticism: 78, iq: 82 }),
      player("Jamaal Magloire", 6, 11, 21, { height: 96, shooting: 60, finishing: 80, handles: 56, passing: 62, defense: 82, rebounding: 84, athleticism: 78, iq: 72 }),
      player("P.J. Brown", 6, 11, 42, { height: 96, shooting: 72, finishing: 80, handles: 64, passing: 70, defense: 86, rebounding: 82, athleticism: 80, iq: 78 }),
      player("David Wesley", 6, 1, 7, { height: 68, shooting: 80, finishing: 80, handles: 84, passing: 80, defense: 82, rebounding: 54, athleticism: 82, iq: 82 }),
      player("Morris Peterson", 6, 7, 24, { height: 84, shooting: 82, finishing: 78, handles: 74, passing: 70, defense: 76, rebounding: 62, athleticism: 80, iq: 78 }),
      player("Rasual Butler", 6, 7, 45, { height: 84, shooting: 82, finishing: 78, handles: 72, passing: 68, defense: 74, rebounding: 60, athleticism: 80, iq: 76 }),
      player("Bobby Jackson", 6, 1, 20, { height: 68, shooting: 80, finishing: 80, handles: 84, passing: 80, defense: 78, rebounding: 56, athleticism: 84, iq: 80 }),
      player("Jannero Pargo", 6, 1, 9, { height: 68, shooting: 80, finishing: 78, handles: 84, passing: 76, defense: 72, rebounding: 50, athleticism: 82, iq: 78 }),
      player("Elden Campbell", 6, 11, 41, { height: 96, shooting: 70, finishing: 82, handles: 64, passing: 68, defense: 84, rebounding: 80, athleticism: 80, iq: 74 }),
      player("Hilton Armstrong", 6, 11, 12, { height: 96, shooting: 58, finishing: 76, handles: 54, passing: 60, defense: 80, rebounding: 76, athleticism: 80, iq: 66 }),
    ],
  },
  {
    era: "2000s",
    team: "Nuggets",
    note: "Carmelo's scoring and a 2009 conference finals run, supercharged when Chauncey Billups came home; Camby and Nene anchored the paint.",
    players: [
      player("Carmelo Anthony", 6, 7, 15, { height: 84, shooting: 88, finishing: 90, handles: 84, passing: 76, defense: 72, rebounding: 74, athleticism: 84, iq: 80 }),
      player("Allen Iverson", 6, 0, 3, { height: 66, shooting: 82, finishing: 86, handles: 100, passing: 84, defense: 72, rebounding: 54, athleticism: 92, iq: 82 }),
      player("Chauncey Billups", 6, 3, 1, { height: 74, shooting: 84, finishing: 82, handles: 86, passing: 84, defense: 82, rebounding: 58, athleticism: 80, iq: 90 }),
      player("Marcus Camby", 6, 11, 23, { height: 96, shooting: 58, finishing: 78, handles: 60, passing: 70, defense: 92, rebounding: 90, athleticism: 86, iq: 72 }),
      player("Nene", 6, 11, 31, { height: 96, shooting: 64, finishing: 86, handles: 68, passing: 70, defense: 80, rebounding: 80, athleticism: 86, iq: 76 }),
      player("Kenyon Martin", 6, 9, 4, { height: 90, shooting: 64, finishing: 84, handles: 68, passing: 70, defense: 84, rebounding: 80, athleticism: 90, iq: 78 }),
      player("J.R. Smith", 6, 6, 1, { height: 82, shooting: 84, finishing: 84, handles: 82, passing: 72, defense: 72, rebounding: 60, athleticism: 82, iq: 74 }),
      player("Andre Miller", 6, 2, 24, { height: 71, shooting: 74, finishing: 84, handles: 90, passing: 90, defense: 78, rebounding: 64, athleticism: 80, iq: 88 }),
      player("Earl Boykins", 5, 5, 11, { height: 52, shooting: 80, finishing: 78, handles: 88, passing: 84, defense: 64, rebounding: 42, athleticism: 80, iq: 80 }),
      player("Linas Kleiza", 6, 8, 44, { height: 86, shooting: 80, finishing: 82, handles: 72, passing: 68, defense: 70, rebounding: 70, athleticism: 78, iq: 76 }),
      player("Voshon Lenard", 6, 4, 2, { height: 77, shooting: 84, finishing: 78, handles: 78, passing: 72, defense: 74, rebounding: 56, athleticism: 78, iq: 80 }),
      player("Eduardo Najera", 6, 8, 25, { height: 86, shooting: 70, finishing: 78, handles: 70, passing: 70, defense: 82, rebounding: 72, athleticism: 80, iq: 72 }),
      player("Dahntay Jones", 6, 6, 30, { height: 82, shooting: 70, finishing: 78, handles: 72, passing: 66, defense: 84, rebounding: 58, athleticism: 88, iq: 72 }),
      player("Reggie Evans", 6, 8, 30, { height: 86, shooting: 50, finishing: 72, handles: 54, passing: 60, defense: 82, rebounding: 88, athleticism: 78, iq: 66 }),
      player("Chris Andersen", 6, 10, 11, { height: 94, shooting: 54, finishing: 78, handles: 56, passing: 60, defense: 86, rebounding: 80, athleticism: 88, iq: 70 }),
    ],
  },
  {
    era: "2010s",
    team: "Rockets",
    note: "James Harden scored 60 points while barely leaving the three-point line. Nobody solved the step-back.",
    players: [
      player("James Harden", 6, 5, 13, { height: 80, shooting: 94, finishing: 88, handles: 96, passing: 92, defense: 68, rebounding: 74, athleticism: 82, iq: 94 }),
      player("Chris Paul", 6, 0, 3, { height: 67, shooting: 86, finishing: 76, handles: 93, passing: 99, defense: 85, rebounding: 60, athleticism: 82, iq: 98 }),
      player("Clint Capela", 6, 10, 15, { height: 94, shooting: 62, finishing: 84, handles: 54, passing: 58, defense: 88, rebounding: 96, athleticism: 90, iq: 70 }),
      player("Eric Gordon", 6, 4, 10, { height: 77, shooting: 88, finishing: 82, handles: 78, passing: 70, defense: 72, rebounding: 54, athleticism: 80, iq: 84 }),
      player("Trevor Ariza", 6, 8, 1, { height: 88, shooting: 80, finishing: 76, handles: 72, passing: 72, defense: 84, rebounding: 68, athleticism: 82, iq: 74 }),
      player("PJ Tucker", 6, 5, 17, { height: 80, shooting: 78, finishing: 74, handles: 66, passing: 66, defense: 88, rebounding: 76, athleticism: 80, iq: 76 }),
      player("Russell Westbrook", 6, 3, 0, { height: 74, shooting: 78, finishing: 88, handles: 92, passing: 90, defense: 82, rebounding: 82, athleticism: 98, iq: 78 }),
      player("Ryan Anderson", 6, 10, 33, { height: 94, shooting: 86, finishing: 72, handles: 64, passing: 66, defense: 64, rebounding: 78, athleticism: 68, iq: 74 }),
      player("Dwight Howard", 6, 11, 12, { height: 96, shooting: 54, finishing: 86, handles: 58, passing: 62, defense: 90, rebounding: 90, athleticism: 88, iq: 74 }),
      player("Chandler Parsons", 6, 10, 25, { height: 94, shooting: 82, finishing: 82, handles: 78, passing: 76, defense: 70, rebounding: 70, athleticism: 78, iq: 78 }),
      player("Jeremy Lin", 6, 3, 7, { height: 74, shooting: 76, finishing: 82, handles: 84, passing: 80, defense: 72, rebounding: 56, athleticism: 82, iq: 80 }),
      player("Patrick Beverley", 6, 1, 2, { height: 68, shooting: 74, finishing: 74, handles: 78, passing: 72, defense: 90, rebounding: 58, athleticism: 82, iq: 74 }),
      player("Terrence Jones", 6, 9, 6, { height: 90, shooting: 70, finishing: 82, handles: 68, passing: 66, defense: 78, rebounding: 78, athleticism: 84, iq: 72 }),
      player("Corey Brewer", 6, 9, 33, { height: 90, shooting: 70, finishing: 78, handles: 72, passing: 68, defense: 80, rebounding: 60, athleticism: 88, iq: 72 }),
      player("Luc Mbah a Moute", 6, 8, 12, { height: 86, shooting: 68, finishing: 78, handles: 66, passing: 64, defense: 86, rebounding: 66, athleticism: 82, iq: 72 }),
    ],
  },
  {
    era: "2010s",
    team: "Bulls",
    note: "Rose won MVP at 22 and was the most electric point guard in the league. Then the knee happened.",
    players: [
      player("Derrick Rose", 6, 3, 1, { height: 74, shooting: 84, finishing: 92, handles: 96, passing: 88, defense: 76, rebounding: 62, athleticism: 98, iq: 90 }),
      player("Joakim Noah", 6, 11, 13, { height: 96, shooting: 64, finishing: 74, handles: 62, passing: 84, defense: 94, rebounding: 96, athleticism: 80, iq: 87 }),
      player("Luol Deng", 6, 9, 9, { height: 90, shooting: 82, finishing: 80, handles: 74, passing: 74, defense: 88, rebounding: 74, athleticism: 80, iq: 80 }),
      player("Carlos Boozer", 6, 9, 5, { height: 90, shooting: 80, finishing: 84, handles: 68, passing: 72, defense: 70, rebounding: 90, athleticism: 76, iq: 78 }),
      player("Kyle Korver", 6, 7, 26, { height: 84, shooting: 94, finishing: 70, handles: 68, passing: 70, defense: 70, rebounding: 58, athleticism: 70, iq: 80 }),
      player("Taj Gibson", 6, 9, 22, { height: 90, shooting: 68, finishing: 76, handles: 60, passing: 62, defense: 84, rebounding: 84, athleticism: 82, iq: 72 }),
      player("Richard Hamilton", 6, 6, 32, { height: 82, shooting: 86, finishing: 82, handles: 76, passing: 74, defense: 76, rebounding: 56, athleticism: 78, iq: 86 }),
      player("Ronnie Brewer", 6, 6, 11, { height: 82, shooting: 76, finishing: 76, handles: 74, passing: 70, defense: 82, rebounding: 62, athleticism: 82, iq: 70 }),
      player("Jimmy Butler", 6, 7, 21, { height: 84, shooting: 78, finishing: 84, handles: 80, passing: 74, defense: 90, rebounding: 68, athleticism: 86, iq: 91 }),
      player("Pau Gasol", 7, 0, 16, { height: 98, shooting: 78, finishing: 84, handles: 66, passing: 80, defense: 78, rebounding: 86, athleticism: 64, iq: 80 }),
      player("Zach LaVine", 6, 5, 8, { height: 80, shooting: 88, finishing: 86, handles: 82, passing: 72, defense: 64, rebounding: 58, athleticism: 92, iq: 80 }),
      player("Nikola Mirotic", 6, 10, 44, { height: 94, shooting: 82, finishing: 78, handles: 68, passing: 66, defense: 68, rebounding: 74, athleticism: 70, iq: 76 }),
      player("Lauri Markkanen", 7, 0, 24, { height: 98, shooting: 84, finishing: 78, handles: 64, passing: 62, defense: 64, rebounding: 78, athleticism: 70, iq: 76 }),
      player("C.J. Watson", 6, 2, 32, { height: 71, shooting: 80, finishing: 78, handles: 82, passing: 78, defense: 74, rebounding: 52, athleticism: 80, iq: 78 }),
      player("Omer Asik", 7, 0, 3, { height: 98, shooting: 48, finishing: 76, handles: 48, passing: 56, defense: 84, rebounding: 82, athleticism: 70, iq: 64 }),
    ],
  },
  {
    era: "2010s",
    team: "Mavericks",
    note: "The 2011 champions who toppled the Heat — Dirk's unstoppable fadeaway, Kidd's command, and Jason Terry off the bench; later, a teenage Luka.",
    players: [
      player("Dirk Nowitzki", 7, 0, 41, { height: 98, shooting: 90, finishing: 90, handles: 78, passing: 76, defense: 68, rebounding: 78, athleticism: 70, iq: 88 }),
      player("Luka Doncic", 6, 7, 77, { height: 84, shooting: 80, finishing: 86, handles: 90, passing: 90, defense: 70, rebounding: 82, athleticism: 80, iq: 86 }),
      player("Jason Kidd", 6, 4, 2, { height: 77, shooting: 78, finishing: 76, handles: 90, passing: 94, defense: 82, rebounding: 70, athleticism: 74, iq: 95 }),
      player("Jason Terry", 6, 2, 31, { height: 71, shooting: 86, finishing: 82, handles: 84, passing: 78, defense: 70, rebounding: 54, athleticism: 80, iq: 88 }),
      player("Tyson Chandler", 7, 1, 6, { height: 100, shooting: 50, finishing: 84, handles: 54, passing: 60, defense: 90, rebounding: 88, athleticism: 86, iq: 78 }),
      player("Shawn Marion", 6, 7, 0, { height: 84, shooting: 72, finishing: 82, handles: 74, passing: 70, defense: 86, rebounding: 78, athleticism: 84, iq: 78 }),
      player("Vince Carter", 6, 6, 25, { height: 82, shooting: 80, finishing: 82, handles: 80, passing: 74, defense: 70, rebounding: 64, athleticism: 80, iq: 82 }),
      player("Caron Butler", 6, 7, 4, { height: 84, shooting: 80, finishing: 82, handles: 78, passing: 72, defense: 76, rebounding: 66, athleticism: 80, iq: 78 }),
      player("J.J. Barea", 6, 0, 5, { height: 66, shooting: 78, finishing: 80, handles: 86, passing: 82, defense: 64, rebounding: 50, athleticism: 78, iq: 82 }),
      player("Monta Ellis", 6, 3, 11, { height: 74, shooting: 80, finishing: 86, handles: 88, passing: 80, defense: 68, rebounding: 56, athleticism: 88, iq: 82 }),
      player("Harrison Barnes", 6, 8, 40, { height: 86, shooting: 80, finishing: 82, handles: 76, passing: 68, defense: 74, rebounding: 70, athleticism: 80, iq: 80 }),
      player("Wesley Matthews", 6, 5, 23, { height: 80, shooting: 84, finishing: 78, handles: 76, passing: 70, defense: 80, rebounding: 58, athleticism: 78, iq: 80 }),
      player("Devin Harris", 6, 3, 34, { height: 74, shooting: 76, finishing: 80, handles: 84, passing: 78, defense: 76, rebounding: 52, athleticism: 82, iq: 78 }),
      player("Brendan Haywood", 7, 0, 33, { height: 98, shooting: 54, finishing: 76, handles: 50, passing: 58, defense: 80, rebounding: 80, athleticism: 68, iq: 66 }),
      player("DeShawn Stevenson", 6, 5, 92, { height: 80, shooting: 74, finishing: 76, handles: 72, passing: 66, defense: 80, rebounding: 56, athleticism: 78, iq: 74 }),
    ],
  },
  {
    era: "2010s",
    team: "Lakers",
    note: "Kobe's 2010 repeat with Pau and Bynum up front, then a long rebuild that surfaced Ingram, Ball, and Kuzma.",
    players: [
      player("Kobe Bryant", 6, 6, 24, { height: 82, shooting: 84, finishing: 88, handles: 90, passing: 78, defense: 80, rebounding: 62, athleticism: 84, iq: 92 }),
      player("Pau Gasol", 7, 0, 16, { height: 98, shooting: 80, finishing: 86, handles: 68, passing: 82, defense: 80, rebounding: 86, athleticism: 70, iq: 82 }),
      player("Andrew Bynum", 7, 0, 17, { height: 98, shooting: 58, finishing: 88, handles: 54, passing: 62, defense: 84, rebounding: 88, athleticism: 74, iq: 76 }),
      player("Lamar Odom", 6, 10, 7, { height: 94, shooting: 74, finishing: 84, handles: 84, passing: 84, defense: 78, rebounding: 84, athleticism: 82, iq: 78 }),
      player("Metta World Peace", 6, 7, 15, { height: 84, shooting: 72, finishing: 78, handles: 74, passing: 72, defense: 90, rebounding: 66, athleticism: 80, iq: 78 }),
      player("Steve Nash", 6, 3, 10, { height: 74, shooting: 82, finishing: 78, handles: 90, passing: 90, defense: 60, rebounding: 52, athleticism: 68, iq: 97 }),
      player("Dwight Howard", 6, 11, 12, { height: 96, shooting: 54, finishing: 86, handles: 58, passing: 62, defense: 90, rebounding: 90, athleticism: 90, iq: 74 }),
      player("Derek Fisher", 6, 1, 2, { height: 68, shooting: 80, finishing: 74, handles: 80, passing: 78, defense: 78, rebounding: 52, athleticism: 72, iq: 86 }),
      player("Nick Young", 6, 7, 0, { height: 84, shooting: 82, finishing: 80, handles: 76, passing: 64, defense: 62, rebounding: 54, athleticism: 82, iq: 70 }),
      player("Jordan Clarkson", 6, 5, 6, { height: 80, shooting: 80, finishing: 82, handles: 84, passing: 72, defense: 66, rebounding: 56, athleticism: 84, iq: 78 }),
      player("Julius Randle", 6, 8, 30, { height: 86, shooting: 70, finishing: 84, handles: 78, passing: 74, defense: 76, rebounding: 82, athleticism: 82, iq: 76 }),
      player("D'Angelo Russell", 6, 5, 1, { height: 80, shooting: 80, finishing: 80, handles: 88, passing: 84, defense: 62, rebounding: 56, athleticism: 78, iq: 80 }),
      player("Brandon Ingram", 6, 8, 14, { height: 86, shooting: 76, finishing: 82, handles: 80, passing: 74, defense: 74, rebounding: 64, athleticism: 82, iq: 78 }),
      player("Lonzo Ball", 6, 6, 2, { height: 82, shooting: 66, finishing: 78, handles: 84, passing: 88, defense: 80, rebounding: 70, athleticism: 82, iq: 74 }),
      player("Kyle Kuzma", 6, 9, 0, { height: 90, shooting: 78, finishing: 82, handles: 74, passing: 66, defense: 64, rebounding: 68, athleticism: 80, iq: 78 }),
    ],
  },
  {
    era: "2010s",
    team: "Celtics",
    note: "From the 2010 Finals core of Pierce, KG, and Rondo to the Kyrie–Horford contenders and the rise of Tatum and Brown.",
    players: [
      player("Paul Pierce", 6, 7, 34, { height: 84, shooting: 86, finishing: 86, handles: 82, passing: 80, defense: 78, rebounding: 66, athleticism: 78, iq: 90 }),
      player("Kevin Garnett", 6, 11, 5, { height: 96, shooting: 80, finishing: 84, handles: 72, passing: 80, defense: 92, rebounding: 86, athleticism: 80, iq: 94 }),
      player("Kyrie Irving", 6, 2, 11, { height: 71, shooting: 90, finishing: 92, handles: 96, passing: 80, defense: 70, rebounding: 56, athleticism: 86, iq: 88 }),
      player("Rajon Rondo", 6, 1, 9, { height: 68, shooting: 62, finishing: 82, handles: 94, passing: 96, defense: 88, rebounding: 68, athleticism: 88, iq: 94 }),
      player("Jayson Tatum", 6, 8, 0, { height: 86, shooting: 82, finishing: 84, handles: 80, passing: 72, defense: 80, rebounding: 70, athleticism: 84, iq: 82 }),
      player("Al Horford", 6, 10, 42, { height: 94, shooting: 80, finishing: 82, handles: 72, passing: 82, defense: 84, rebounding: 80, athleticism: 78, iq: 87 }),
      player("Ray Allen", 6, 5, 20, { height: 80, shooting: 97, finishing: 80, handles: 80, passing: 78, defense: 74, rebounding: 58, athleticism: 78, iq: 90 }),
      player("Jaylen Brown", 6, 6, 7, { height: 82, shooting: 78, finishing: 84, handles: 76, passing: 68, defense: 82, rebounding: 64, athleticism: 90, iq: 78 }),
      player("Isaiah Thomas", 5, 9, 4, { height: 60, shooting: 88, finishing: 90, handles: 90, passing: 82, defense: 58, rebounding: 48, athleticism: 86, iq: 88 }),
      player("Marcus Smart", 6, 4, 36, { height: 77, shooting: 70, finishing: 78, handles: 82, passing: 80, defense: 92, rebounding: 62, athleticism: 82, iq: 88 }),
      player("Avery Bradley", 6, 2, 0, { height: 71, shooting: 78, finishing: 78, handles: 80, passing: 70, defense: 90, rebounding: 56, athleticism: 84, iq: 76 }),
      player("Jeff Green", 6, 9, 8, { height: 90, shooting: 78, finishing: 82, handles: 74, passing: 70, defense: 74, rebounding: 66, athleticism: 86, iq: 76 }),
      player("Brandon Bass", 6, 8, 30, { height: 86, shooting: 76, finishing: 80, handles: 64, passing: 66, defense: 76, rebounding: 74, athleticism: 78, iq: 74 }),
      player("Terry Rozier", 6, 1, 12, { height: 68, shooting: 76, finishing: 78, handles: 84, passing: 76, defense: 78, rebounding: 58, athleticism: 84, iq: 80 }),
      player("Glen Davis", 6, 9, 11, { height: 90, shooting: 72, finishing: 80, handles: 64, passing: 66, defense: 80, rebounding: 78, athleticism: 78, iq: 78 }),
    ],
  },
  {
    era: "2010s",
    team: "Trail Blazers",
    note: "Lillard and McCollum's backcourt fireworks, built first around LaMarcus Aldridge and later anchored by Jusuf Nurkic.",
    players: [
      player("Damian Lillard", 6, 2, 0, { height: 71, shooting: 88, finishing: 84, handles: 86, passing: 82, defense: 70, rebounding: 56, athleticism: 84, iq: 92 }),
      player("LaMarcus Aldridge", 6, 11, 12, { height: 96, shooting: 84, finishing: 86, handles: 72, passing: 72, defense: 80, rebounding: 84, athleticism: 78, iq: 84 }),
      player("CJ McCollum", 6, 3, 3, { height: 74, shooting: 86, finishing: 84, handles: 86, passing: 74, defense: 68, rebounding: 58, athleticism: 80, iq: 84 }),
      player("Nicolas Batum", 6, 8, 88, { height: 86, shooting: 80, finishing: 80, handles: 78, passing: 80, defense: 82, rebounding: 68, athleticism: 82, iq: 78 }),
      player("Wesley Matthews", 6, 5, 2, { height: 80, shooting: 84, finishing: 80, handles: 76, passing: 70, defense: 82, rebounding: 58, athleticism: 80, iq: 80 }),
      player("Jusuf Nurkic", 6, 11, 27, { height: 96, shooting: 62, finishing: 84, handles: 64, passing: 76, defense: 80, rebounding: 84, athleticism: 72, iq: 76 }),
      player("Robin Lopez", 7, 0, 42, { height: 98, shooting: 58, finishing: 80, handles: 54, passing: 60, defense: 80, rebounding: 80, athleticism: 72, iq: 70 }),
      player("Gerald Wallace", 6, 7, 3, { height: 84, shooting: 70, finishing: 82, handles: 74, passing: 70, defense: 84, rebounding: 74, athleticism: 90, iq: 74 }),
      player("Al-Farouq Aminu", 6, 9, 8, { height: 90, shooting: 74, finishing: 76, handles: 68, passing: 68, defense: 86, rebounding: 78, athleticism: 84, iq: 74 }),
      player("Maurice Harkless", 6, 9, 4, { height: 90, shooting: 70, finishing: 80, handles: 70, passing: 66, defense: 84, rebounding: 66, athleticism: 86, iq: 72 }),
      player("Evan Turner", 6, 7, 1, { height: 84, shooting: 70, finishing: 80, handles: 82, passing: 80, defense: 76, rebounding: 68, athleticism: 78, iq: 74 }),
      player("Meyers Leonard", 7, 1, 11, { height: 100, shooting: 78, finishing: 78, handles: 60, passing: 64, defense: 68, rebounding: 74, athleticism: 72, iq: 72 }),
      player("Allen Crabbe", 6, 6, 23, { height: 82, shooting: 84, finishing: 76, handles: 72, passing: 66, defense: 74, rebounding: 58, athleticism: 78, iq: 76 }),
      player("Ed Davis", 6, 10, 17, { height: 94, shooting: 54, finishing: 80, handles: 56, passing: 62, defense: 80, rebounding: 82, athleticism: 80, iq: 70 }),
      player("Raymond Felton", 6, 1, 5, { height: 68, shooting: 76, finishing: 78, handles: 84, passing: 82, defense: 74, rebounding: 54, athleticism: 80, iq: 76 }),
    ],
  },
  {
    era: "2010s",
    team: "Hawks",
    note: "The 60-win 'pass-happy' 2015 team — Horford, Millsap, Teague, and Korver moving the ball, with Trae Young arriving late in the decade.",
    players: [
      player("Al Horford", 6, 10, 15, { height: 94, shooting: 78, finishing: 82, handles: 70, passing: 80, defense: 84, rebounding: 82, athleticism: 78, iq: 87 }),
      player("Paul Millsap", 6, 8, 4, { height: 86, shooting: 78, finishing: 84, handles: 74, passing: 76, defense: 86, rebounding: 80, athleticism: 80, iq: 80 }),
      player("Jeff Teague", 6, 2, 0, { height: 71, shooting: 78, finishing: 82, handles: 88, passing: 84, defense: 78, rebounding: 54, athleticism: 86, iq: 80 }),
      player("Joe Johnson", 6, 7, 2, { height: 84, shooting: 88, finishing: 87, handles: 90, passing: 80, defense: 74, rebounding: 64, athleticism: 82, iq: 86 }),
      player("Trae Young", 6, 1, 11, { height: 68, shooting: 90, finishing: 82, handles: 90, passing: 90, defense: 58, rebounding: 54, athleticism: 78, iq: 84 }),
      player("Josh Smith", 6, 9, 5, { height: 90, shooting: 66, finishing: 84, handles: 76, passing: 78, defense: 88, rebounding: 82, athleticism: 90, iq: 70 }),
      player("Kyle Korver", 6, 7, 26, { height: 84, shooting: 94, finishing: 72, handles: 72, passing: 72, defense: 72, rebounding: 56, athleticism: 68, iq: 84 }),
      player("John Collins", 6, 9, 20, { height: 90, shooting: 74, finishing: 86, handles: 68, passing: 66, defense: 70, rebounding: 82, athleticism: 90, iq: 76 }),
      player("DeMarre Carroll", 6, 8, 5, { height: 86, shooting: 78, finishing: 78, handles: 70, passing: 68, defense: 86, rebounding: 66, athleticism: 82, iq: 74 }),
      player("Dennis Schroder", 6, 1, 17, { height: 68, shooting: 76, finishing: 82, handles: 88, passing: 82, defense: 72, rebounding: 54, athleticism: 86, iq: 78 }),
      player("Kent Bazemore", 6, 5, 24, { height: 80, shooting: 74, finishing: 78, handles: 74, passing: 70, defense: 84, rebounding: 60, athleticism: 86, iq: 72 }),
      player("Marvin Williams", 6, 9, 24, { height: 90, shooting: 78, finishing: 78, handles: 68, passing: 68, defense: 76, rebounding: 72, athleticism: 80, iq: 74 }),
      player("Thabo Sefolosha", 6, 7, 25, { height: 84, shooting: 70, finishing: 74, handles: 70, passing: 68, defense: 88, rebounding: 62, athleticism: 82, iq: 70 }),
      player("Mike Scott", 6, 8, 32, { height: 86, shooting: 80, finishing: 78, handles: 68, passing: 66, defense: 70, rebounding: 70, athleticism: 76, iq: 74 }),
      player("Zaza Pachulia", 6, 11, 27, { height: 96, shooting: 62, finishing: 78, handles: 58, passing: 70, defense: 74, rebounding: 80, athleticism: 62, iq: 72 }),
    ],
  },
  {
    era: "2010s",
    team: "76ers",
    note: "From the Process tank to Embiid and Simmons leading the climb back — a young, athletic, defense-first core.",
    players: [
      player("Joel Embiid", 7, 0, 21, { height: 98, shooting: 80, finishing: 88, handles: 68, passing: 72, defense: 94, rebounding: 88, athleticism: 84, iq: 82 }),
      player("Ben Simmons", 6, 10, 25, { height: 94, shooting: 54, finishing: 86, handles: 84, passing: 90, defense: 86, rebounding: 80, athleticism: 90, iq: 84 }),
      player("Jimmy Butler", 6, 7, 23, { height: 84, shooting: 78, finishing: 84, handles: 80, passing: 74, defense: 90, rebounding: 68, athleticism: 84, iq: 91 }),
      player("Jrue Holiday", 6, 4, 11, { height: 77, shooting: 78, finishing: 82, handles: 83, passing: 84, defense: 86, rebounding: 60, athleticism: 84, iq: 90 }),
      player("Tobias Harris", 6, 8, 12, { height: 86, shooting: 82, finishing: 84, handles: 78, passing: 72, defense: 72, rebounding: 74, athleticism: 78, iq: 80 }),
      player("JJ Redick", 6, 4, 17, { height: 77, shooting: 92, finishing: 78, handles: 76, passing: 72, defense: 68, rebounding: 54, athleticism: 72, iq: 84 }),
      player("Andre Iguodala", 6, 6, 9, { height: 82, shooting: 72, finishing: 78, handles: 82, passing: 84, defense: 90, rebounding: 70, athleticism: 90, iq: 78 }),
      player("Robert Covington", 6, 7, 33, { height: 84, shooting: 80, finishing: 74, handles: 68, passing: 66, defense: 90, rebounding: 66, athleticism: 80, iq: 74 }),
      player("Dario Saric", 6, 10, 9, { height: 94, shooting: 78, finishing: 80, handles: 74, passing: 78, defense: 68, rebounding: 76, athleticism: 70, iq: 76 }),
      player("Thaddeus Young", 6, 8, 21, { height: 86, shooting: 74, finishing: 82, handles: 74, passing: 70, defense: 80, rebounding: 74, athleticism: 86, iq: 74 }),
      player("Spencer Hawes", 7, 1, 0, { height: 100, shooting: 78, finishing: 78, handles: 64, passing: 72, defense: 70, rebounding: 76, athleticism: 62, iq: 72 }),
      player("Elton Brand", 6, 9, 42, { height: 90, shooting: 74, finishing: 84, handles: 66, passing: 70, defense: 80, rebounding: 80, athleticism: 74, iq: 78 }),
      player("Lou Williams", 6, 1, 23, { height: 68, shooting: 82, finishing: 82, handles: 84, passing: 74, defense: 62, rebounding: 50, athleticism: 80, iq: 84 }),
      player("T.J. McConnell", 6, 1, 12, { height: 68, shooting: 70, finishing: 78, handles: 84, passing: 84, defense: 80, rebounding: 56, athleticism: 74, iq: 86 }),
      player("Nerlens Noel", 6, 11, 4, { height: 96, shooting: 50, finishing: 80, handles: 58, passing: 62, defense: 86, rebounding: 80, athleticism: 88, iq: 66 }),
    ],
  },
  {
    era: "2020s",
    team: "Suns",
    note: "Phoenix hadn't been to the Finals in 28 years. CP3 and Booker nearly ended that drought in 2021.",
    players: [
      player("Devin Booker", 6, 6, 1, { height: 82, shooting: 96, finishing: 88, handles: 86, passing: 80, defense: 76, rebounding: 62, athleticism: 82, iq: 84 }),
      player("Chris Paul", 6, 0, 3, { height: 67, shooting: 86, finishing: 78, handles: 96, passing: 98, defense: 86, rebounding: 58, athleticism: 76, iq: 98 }),
      player("Deandre Ayton", 6, 11, 22, { height: 96, shooting: 78, finishing: 88, handles: 66, passing: 72, defense: 84, rebounding: 94, athleticism: 88, iq: 78 }),
      player("Mikal Bridges", 6, 7, 25, { height: 84, shooting: 84, finishing: 80, handles: 76, passing: 72, defense: 90, rebounding: 64, athleticism: 84, iq: 78 }),
      player("Cameron Johnson", 6, 8, 23, { height: 88, shooting: 88, finishing: 76, handles: 72, passing: 70, defense: 72, rebounding: 64, athleticism: 78, iq: 78 }),
      player("Jae Crowder", 6, 6, 99, { height: 82, shooting: 80, finishing: 76, handles: 68, passing: 68, defense: 82, rebounding: 70, athleticism: 76, iq: 76 }),
      player("Cameron Payne", 6, 2, 15, { height: 72, shooting: 82, finishing: 78, handles: 84, passing: 82, defense: 70, rebounding: 52, athleticism: 78, iq: 80 }),
      player("Frank Kaminsky", 7, 0, 8, { height: 98, shooting: 80, finishing: 74, handles: 64, passing: 66, defense: 68, rebounding: 76, athleticism: 68, iq: 68 }),
      player("Kevin Durant", 6, 10, 35, { height: 94, shooting: 88, finishing: 90, handles: 84, passing: 78, defense: 80, rebounding: 72, athleticism: 84, iq: 90 }),
      player("Bradley Beal", 6, 4, 3, { height: 77, shooting: 90, finishing: 84, handles: 84, passing: 76, defense: 66, rebounding: 58, athleticism: 82, iq: 82 }),
      player("Grayson Allen", 6, 4, 8, { height: 77, shooting: 86, finishing: 76, handles: 74, passing: 68, defense: 74, rebounding: 56, athleticism: 78, iq: 80 }),
      player("Jusuf Nurkic", 6, 11, 20, { height: 96, shooting: 62, finishing: 82, handles: 64, passing: 76, defense: 78, rebounding: 84, athleticism: 70, iq: 74 }),
      player("Dario Saric", 6, 10, 20, { height: 94, shooting: 78, finishing: 78, handles: 72, passing: 76, defense: 66, rebounding: 74, athleticism: 68, iq: 74 }),
      player("Landry Shamet", 6, 4, 14, { height: 77, shooting: 84, finishing: 74, handles: 74, passing: 68, defense: 70, rebounding: 52, athleticism: 74, iq: 78 }),
      player("Torrey Craig", 6, 7, 0, { height: 84, shooting: 72, finishing: 76, handles: 66, passing: 64, defense: 84, rebounding: 66, athleticism: 82, iq: 72 }),
    ],
  },
  {
    era: "2020s",
    team: "Mavericks",
    note: "Luka does things at 6'7 that shouldn't be possible. Adding Kyrie made the 2024 Finals run feel inevitable.",
    players: [
      player("Luka Doncic", 6, 7, 77, { height: 84, shooting: 94, finishing: 83, handles: 96, passing: 98, defense: 66, rebounding: 87, athleticism: 74, iq: 96 }),
      player("Kyrie Irving", 6, 2, 11, { height: 72, shooting: 94, finishing: 98, handles: 98, passing: 80, defense: 76, rebounding: 56, athleticism: 92, iq: 92 }),
      player("PJ Washington", 6, 8, 25, { height: 88, shooting: 84, finishing: 80, handles: 70, passing: 70, defense: 82, rebounding: 80, athleticism: 80, iq: 78 }),
      player("Daniel Gafford", 6, 11, 12, { height: 96, shooting: 64, finishing: 82, handles: 52, passing: 58, defense: 90, rebounding: 88, athleticism: 90, iq: 70 }),
      player("Derrick Jones Jr.", 6, 7, 55, { height: 84, shooting: 76, finishing: 80, handles: 72, passing: 66, defense: 84, rebounding: 68, athleticism: 94, iq: 72 }),
      player("Maxi Kleber", 6, 9, 42, { height: 90, shooting: 82, finishing: 72, handles: 64, passing: 66, defense: 82, rebounding: 72, athleticism: 74, iq: 70 }),
      player("Tim Hardaway Jr.", 6, 5, 10, { height: 80, shooting: 84, finishing: 78, handles: 76, passing: 68, defense: 68, rebounding: 54, athleticism: 78, iq: 80 }),
      player("Josh Green", 6, 6, 8, { height: 82, shooting: 78, finishing: 78, handles: 74, passing: 70, defense: 82, rebounding: 64, athleticism: 86, iq: 72 }),
      player("Cooper Flagg", 6, 9, 32, { height: 90, shooting: 82, finishing: 88, handles: 80, passing: 80, defense: 92, rebounding: 82, athleticism: 92, iq: 84 }),
      player("Anthony Davis", 6, 10, 3, { height: 94, shooting: 78, finishing: 88, handles: 70, passing: 74, defense: 92, rebounding: 86, athleticism: 86, iq: 82 }),
      player("Klay Thompson", 6, 5, 31, { height: 80, shooting: 90, finishing: 78, handles: 72, passing: 66, defense: 74, rebounding: 56, athleticism: 74, iq: 82 }),
      player("Spencer Dinwiddie", 6, 5, 26, { height: 80, shooting: 78, finishing: 82, handles: 86, passing: 80, defense: 68, rebounding: 56, athleticism: 80, iq: 80 }),
      player("Dorian Finney-Smith", 6, 7, 10, { height: 84, shooting: 78, finishing: 76, handles: 68, passing: 66, defense: 86, rebounding: 66, athleticism: 82, iq: 74 }),
      player("Jalen Brunson", 6, 1, 13, { height: 68, shooting: 80, finishing: 84, handles: 90, passing: 84, defense: 70, rebounding: 54, athleticism: 78, iq: 84 }),
      player("Reggie Bullock", 6, 6, 25, { height: 82, shooting: 82, finishing: 72, handles: 66, passing: 64, defense: 82, rebounding: 58, athleticism: 76, iq: 76 }),
    ],
  },
  {
    era: "2020s",
    team: "Warriors",
    note: "Curry's gravity and the 2022 title — Klay's return, Draymond's defense, Wiggins' two-way leap, and a wave of young athletes.",
    players: [
      player("Stephen Curry", 6, 2, 30, { height: 71, shooting: 96, finishing: 84, handles: 94, passing: 88, defense: 70, rebounding: 56, athleticism: 80, iq: 96 }),
      player("Klay Thompson", 6, 5, 11, { height: 80, shooting: 90, finishing: 80, handles: 74, passing: 68, defense: 78, rebounding: 58, athleticism: 78, iq: 82 }),
      player("Draymond Green", 6, 6, 23, { height: 82, shooting: 62, finishing: 78, handles: 80, passing: 90, defense: 96, rebounding: 80, athleticism: 82, iq: 90 }),
      player("Andrew Wiggins", 6, 7, 22, { height: 84, shooting: 80, finishing: 84, handles: 76, passing: 68, defense: 84, rebounding: 66, athleticism: 90, iq: 80 }),
      player("Jimmy Butler", 6, 7, 10, { height: 84, shooting: 76, finishing: 84, handles: 80, passing: 78, defense: 90, rebounding: 68, athleticism: 80, iq: 91 }),
      player("Jordan Poole", 6, 4, 3, { height: 77, shooting: 82, finishing: 84, handles: 86, passing: 74, defense: 62, rebounding: 54, athleticism: 84, iq: 80 }),
      player("Jonathan Kuminga", 6, 7, 0, { height: 84, shooting: 70, finishing: 84, handles: 74, passing: 64, defense: 78, rebounding: 68, athleticism: 94, iq: 74 }),
      player("Kevon Looney", 6, 9, 5, { height: 90, shooting: 54, finishing: 78, handles: 58, passing: 72, defense: 80, rebounding: 84, athleticism: 72, iq: 72 }),
      player("Gary Payton II", 6, 2, 0, { height: 71, shooting: 70, finishing: 80, handles: 74, passing: 70, defense: 90, rebounding: 60, athleticism: 90, iq: 72 }),
      player("Buddy Hield", 6, 4, 7, { height: 77, shooting: 90, finishing: 76, handles: 74, passing: 66, defense: 66, rebounding: 56, athleticism: 76, iq: 80 }),
      player("Brandin Podziemski", 6, 4, 2, { height: 77, shooting: 80, finishing: 78, handles: 78, passing: 78, defense: 78, rebounding: 68, athleticism: 78, iq: 76 }),
      player("Moses Moody", 6, 6, 4, { height: 82, shooting: 80, finishing: 78, handles: 70, passing: 66, defense: 82, rebounding: 60, athleticism: 82, iq: 74 }),
      player("Andre Iguodala", 6, 6, 9, { height: 82, shooting: 68, finishing: 76, handles: 78, passing: 82, defense: 84, rebounding: 64, athleticism: 76, iq: 78 }),
      player("Kelly Oubre Jr.", 6, 7, 9, { height: 84, shooting: 74, finishing: 80, handles: 74, passing: 64, defense: 78, rebounding: 66, athleticism: 88, iq: 72 }),
      player("Otto Porter Jr.", 6, 8, 32, { height: 86, shooting: 82, finishing: 76, handles: 70, passing: 70, defense: 78, rebounding: 68, athleticism: 78, iq: 76 }),
    ],
  },
  {
    era: "2020s",
    team: "Lakers",
    note: "LeBron and AD's 2020 bubble title, then a reload that paired LeBron with a traded-in Luka Doncic.",
    players: [
      player("LeBron James", 6, 9, 23, { height: 90, shooting: 80, finishing: 90, handles: 90, passing: 92, defense: 82, rebounding: 80, athleticism: 88, iq: 90 }),
      player("Anthony Davis", 6, 10, 3, { height: 94, shooting: 80, finishing: 90, handles: 72, passing: 74, defense: 94, rebounding: 88, athleticism: 90, iq: 84 }),
      player("Luka Doncic", 6, 7, 77, { height: 84, shooting: 82, finishing: 88, handles: 92, passing: 97, defense: 70, rebounding: 85, athleticism: 80, iq: 88 }),
      player("Austin Reaves", 6, 5, 15, { height: 80, shooting: 82, finishing: 82, handles: 84, passing: 80, defense: 72, rebounding: 60, athleticism: 76, iq: 82 }),
      player("Rui Hachimura", 6, 8, 28, { height: 86, shooting: 80, finishing: 84, handles: 72, passing: 66, defense: 74, rebounding: 70, athleticism: 82, iq: 76 }),
      player("D'Angelo Russell", 6, 4, 1, { height: 77, shooting: 82, finishing: 80, handles: 88, passing: 84, defense: 62, rebounding: 54, athleticism: 76, iq: 80 }),
      player("Dennis Schroder", 6, 1, 17, { height: 68, shooting: 78, finishing: 82, handles: 88, passing: 82, defense: 76, rebounding: 54, athleticism: 84, iq: 78 }),
      player("Kentavious Caldwell-Pope", 6, 5, 1, { height: 80, shooting: 82, finishing: 76, handles: 72, passing: 68, defense: 86, rebounding: 56, athleticism: 80, iq: 80 }),
      player("Alex Caruso", 6, 5, 4, { height: 80, shooting: 74, finishing: 78, handles: 78, passing: 76, defense: 90, rebounding: 58, athleticism: 84, iq: 78 }),
      player("Montrezl Harrell", 6, 7, 15, { height: 84, shooting: 58, finishing: 86, handles: 62, passing: 64, defense: 74, rebounding: 74, athleticism: 88, iq: 76 }),
      player("Jarred Vanderbilt", 6, 8, 2, { height: 86, shooting: 58, finishing: 78, handles: 66, passing: 70, defense: 88, rebounding: 78, athleticism: 86, iq: 70 }),
      player("Markieff Morris", 6, 9, 88, { height: 90, shooting: 76, finishing: 78, handles: 70, passing: 66, defense: 74, rebounding: 72, athleticism: 74, iq: 76 }),
      player("Dwight Howard", 6, 10, 39, { height: 94, shooting: 54, finishing: 84, handles: 56, passing: 60, defense: 84, rebounding: 84, athleticism: 80, iq: 74 }),
      player("Jaxson Hayes", 6, 11, 11, { height: 96, shooting: 56, finishing: 84, handles: 56, passing: 60, defense: 78, rebounding: 74, athleticism: 90, iq: 68 }),
      player("Gabe Vincent", 6, 2, 7, { height: 71, shooting: 78, finishing: 76, handles: 80, passing: 76, defense: 82, rebounding: 52, athleticism: 78, iq: 78 }),
    ],
  },
  {
    era: "2020s",
    team: "Thunder",
    note: "SGA's MVP and the 2025 title — a young, switchable juggernaut around Holmgren and Jalen Williams.",
    players: [
      player("Shai Gilgeous-Alexander", 6, 6, 2, { height: 82, shooting: 92, finishing: 92, handles: 94, passing: 84, defense: 88, rebounding: 62, athleticism: 88, iq: 92 }),
      player("Jalen Williams", 6, 5, 8, { height: 80, shooting: 80, finishing: 86, handles: 82, passing: 80, defense: 86, rebounding: 66, athleticism: 86, iq: 82 }),
      player("Chet Holmgren", 7, 1, 7, { height: 100, shooting: 78, finishing: 84, handles: 66, passing: 70, defense: 92, rebounding: 82, athleticism: 82, iq: 78 }),
      player("Luguentz Dort", 6, 4, 5, { height: 77, shooting: 76, finishing: 78, handles: 70, passing: 64, defense: 92, rebounding: 60, athleticism: 86, iq: 74 }),
      player("Isaiah Hartenstein", 7, 0, 55, { height: 98, shooting: 60, finishing: 82, handles: 62, passing: 78, defense: 84, rebounding: 86, athleticism: 74, iq: 74 }),
      player("Alex Caruso", 6, 5, 9, { height: 80, shooting: 76, finishing: 78, handles: 78, passing: 76, defense: 92, rebounding: 58, athleticism: 84, iq: 80 }),
      player("Josh Giddey", 6, 8, 3, { height: 86, shooting: 68, finishing: 82, handles: 84, passing: 88, defense: 70, rebounding: 78, athleticism: 80, iq: 76 }),
      player("Cason Wallace", 6, 3, 22, { height: 74, shooting: 78, finishing: 78, handles: 80, passing: 76, defense: 90, rebounding: 56, athleticism: 84, iq: 76 }),
      player("Aaron Wiggins", 6, 5, 21, { height: 80, shooting: 80, finishing: 80, handles: 72, passing: 68, defense: 80, rebounding: 62, athleticism: 84, iq: 74 }),
      player("Isaiah Joe", 6, 4, 11, { height: 77, shooting: 88, finishing: 72, handles: 70, passing: 66, defense: 74, rebounding: 54, athleticism: 78, iq: 78 }),
      player("Kenrich Williams", 6, 6, 34, { height: 82, shooting: 74, finishing: 78, handles: 70, passing: 74, defense: 84, rebounding: 68, athleticism: 78, iq: 74 }),
      player("Jaylin Williams", 6, 9, 6, { height: 90, shooting: 72, finishing: 78, handles: 66, passing: 76, defense: 80, rebounding: 78, athleticism: 72, iq: 72 }),
      player("Ousmane Dieng", 6, 10, 13, { height: 94, shooting: 70, finishing: 78, handles: 74, passing: 70, defense: 76, rebounding: 66, athleticism: 82, iq: 70 }),
      player("Tre Mann", 6, 4, 23, { height: 77, shooting: 78, finishing: 80, handles: 84, passing: 74, defense: 66, rebounding: 54, athleticism: 80, iq: 74 }),
      player("Darius Bazley", 6, 8, 7, { height: 86, shooting: 68, finishing: 78, handles: 70, passing: 66, defense: 74, rebounding: 72, athleticism: 86, iq: 70 }),
    ],
  },
  {
    era: "2020s",
    team: "Timberwolves",
    note: "Anthony Edwards' ascent to superstardom and a 2024 conference finals run anchored by Gobert's defense.",
    players: [
      player("Anthony Edwards", 6, 4, 5, { height: 77, shooting: 87, finishing: 90, handles: 84, passing: 74, defense: 82, rebounding: 66, athleticism: 94, iq: 80 }),
      player("Karl-Anthony Towns", 7, 0, 32, { height: 98, shooting: 90, finishing: 88, handles: 74, passing: 74, defense: 86, rebounding: 86, athleticism: 80, iq: 80 }),
      player("Rudy Gobert", 7, 1, 27, { height: 100, shooting: 54, finishing: 84, handles: 54, passing: 62, defense: 98, rebounding: 92, athleticism: 82, iq: 74 }),
      player("Mike Conley", 6, 1, 10, { height: 68, shooting: 80, finishing: 78, handles: 88, passing: 88, defense: 78, rebounding: 54, athleticism: 74, iq: 90 }),
      player("Jaden McDaniels", 6, 9, 3, { height: 90, shooting: 74, finishing: 80, handles: 72, passing: 66, defense: 92, rebounding: 66, athleticism: 88, iq: 74 }),
      player("Naz Reid", 6, 9, 11, { height: 90, shooting: 80, finishing: 84, handles: 70, passing: 66, defense: 74, rebounding: 78, athleticism: 80, iq: 80 }),
      player("Julius Randle", 6, 8, 30, { height: 86, shooting: 76, finishing: 86, handles: 80, passing: 78, defense: 78, rebounding: 84, athleticism: 80, iq: 78 }),
      player("D'Angelo Russell", 6, 4, 0, { height: 77, shooting: 80, finishing: 80, handles: 88, passing: 84, defense: 62, rebounding: 54, athleticism: 76, iq: 80 }),
      player("Nickeil Alexander-Walker", 6, 5, 9, { height: 80, shooting: 80, finishing: 78, handles: 78, passing: 72, defense: 86, rebounding: 58, athleticism: 82, iq: 76 }),
      player("Donte DiVincenzo", 6, 4, 0, { height: 77, shooting: 82, finishing: 78, handles: 78, passing: 74, defense: 80, rebounding: 62, athleticism: 78, iq: 80 }),
      player("Malik Beasley", 6, 4, 5, { height: 77, shooting: 84, finishing: 76, handles: 74, passing: 64, defense: 66, rebounding: 54, athleticism: 78, iq: 78 }),
      player("Kyle Anderson", 6, 9, 1, { height: 90, shooting: 74, finishing: 78, handles: 78, passing: 82, defense: 82, rebounding: 74, athleticism: 64, iq: 74 }),
      player("Jarred Vanderbilt", 6, 8, 8, { height: 86, shooting: 56, finishing: 78, handles: 66, passing: 70, defense: 86, rebounding: 78, athleticism: 86, iq: 70 }),
      player("Jaylen Nowell", 6, 4, 4, { height: 77, shooting: 78, finishing: 80, handles: 80, passing: 70, defense: 66, rebounding: 54, athleticism: 80, iq: 76 }),
      player("Patrick Beverley", 6, 1, 22, { height: 68, shooting: 72, finishing: 74, handles: 80, passing: 76, defense: 88, rebounding: 60, athleticism: 80, iq: 74 }),
    ],
  },
  {
    era: "2020s",
    team: "76ers",
    note: "Embiid's MVP peak with Maxey's rise and a stint of James Harden running the offense.",
    players: [
      player("Joel Embiid", 7, 0, 21, { height: 98, shooting: 86, finishing: 90, handles: 74, passing: 78, defense: 94, rebounding: 88, athleticism: 82, iq: 84 }),
      player("Tyrese Maxey", 6, 2, 0, { height: 71, shooting: 84, finishing: 86, handles: 90, passing: 80, defense: 74, rebounding: 54, athleticism: 88, iq: 84 }),
      player("James Harden", 6, 5, 1, { height: 80, shooting: 82, finishing: 84, handles: 87, passing: 92, defense: 68, rebounding: 64, athleticism: 78, iq: 84 }),
      player("Paul George", 6, 8, 8, { height: 86, shooting: 86, finishing: 84, handles: 80, passing: 74, defense: 88, rebounding: 68, athleticism: 82, iq: 82 }),
      player("Tobias Harris", 6, 8, 12, { height: 86, shooting: 80, finishing: 84, handles: 78, passing: 72, defense: 74, rebounding: 74, athleticism: 76, iq: 78 }),
      player("Ben Simmons", 6, 10, 25, { height: 94, shooting: 54, finishing: 86, handles: 84, passing: 90, defense: 88, rebounding: 80, athleticism: 90, iq: 84 }),
      player("Seth Curry", 6, 2, 31, { height: 71, shooting: 90, finishing: 78, handles: 78, passing: 72, defense: 64, rebounding: 52, athleticism: 72, iq: 82 }),
      player("De'Anthony Melton", 6, 2, 8, { height: 71, shooting: 78, finishing: 78, handles: 80, passing: 74, defense: 88, rebounding: 60, athleticism: 82, iq: 76 }),
      player("Matisse Thybulle", 6, 5, 22, { height: 80, shooting: 68, finishing: 74, handles: 66, passing: 64, defense: 94, rebounding: 56, athleticism: 88, iq: 68 }),
      player("Danny Green", 6, 6, 14, { height: 82, shooting: 82, finishing: 72, handles: 68, passing: 66, defense: 84, rebounding: 58, athleticism: 74, iq: 78 }),
      player("Andre Drummond", 6, 10, 1, { height: 94, shooting: 52, finishing: 82, handles: 56, passing: 64, defense: 80, rebounding: 90, athleticism: 80, iq: 68 }),
      player("Kelly Oubre Jr.", 6, 7, 9, { height: 84, shooting: 76, finishing: 82, handles: 74, passing: 64, defense: 78, rebounding: 68, athleticism: 88, iq: 74 }),
      player("Georges Niang", 6, 7, 20, { height: 84, shooting: 82, finishing: 76, handles: 68, passing: 66, defense: 64, rebounding: 62, athleticism: 68, iq: 76 }),
      player("Dwight Howard", 6, 10, 39, { height: 94, shooting: 54, finishing: 82, handles: 56, passing: 60, defense: 84, rebounding: 84, athleticism: 78, iq: 74 }),
      player("Furkan Korkmaz", 6, 7, 30, { height: 84, shooting: 80, finishing: 74, handles: 72, passing: 68, defense: 64, rebounding: 54, athleticism: 74, iq: 74 }),
    ],
  },
  {
    era: "2020s",
    team: "Cavaliers",
    note: "A 64-win 2025 team built on Mitchell's scoring, Garland's playmaking, and the Mobley–Allen frontcourt wall.",
    players: [
      player("Donovan Mitchell", 6, 3, 45, { height: 74, shooting: 90, finishing: 88, handles: 88, passing: 78, defense: 78, rebounding: 58, athleticism: 88, iq: 88 }),
      player("Darius Garland", 6, 1, 10, { height: 68, shooting: 82, finishing: 84, handles: 90, passing: 86, defense: 66, rebounding: 52, athleticism: 80, iq: 82 }),
      player("Evan Mobley", 6, 11, 4, { height: 96, shooting: 70, finishing: 84, handles: 68, passing: 74, defense: 94, rebounding: 84, athleticism: 88, iq: 78 }),
      player("Jarrett Allen", 6, 10, 31, { height: 94, shooting: 56, finishing: 86, handles: 58, passing: 66, defense: 86, rebounding: 88, athleticism: 84, iq: 76 }),
      player("Collin Sexton", 6, 1, 2, { height: 68, shooting: 80, finishing: 86, handles: 86, passing: 72, defense: 64, rebounding: 54, athleticism: 88, iq: 80 }),
      player("Caris LeVert", 6, 6, 3, { height: 82, shooting: 78, finishing: 84, handles: 84, passing: 78, defense: 74, rebounding: 62, athleticism: 82, iq: 80 }),
      player("Max Strus", 6, 5, 1, { height: 80, shooting: 84, finishing: 76, handles: 72, passing: 70, defense: 76, rebounding: 60, athleticism: 78, iq: 80 }),
      player("De'Andre Hunter", 6, 8, 12, { height: 86, shooting: 80, finishing: 82, handles: 72, passing: 66, defense: 82, rebounding: 60, athleticism: 82, iq: 78 }),
      player("Isaac Okoro", 6, 5, 35, { height: 80, shooting: 72, finishing: 78, handles: 70, passing: 66, defense: 88, rebounding: 58, athleticism: 86, iq: 72 }),
      player("Ty Jerome", 6, 5, 2, { height: 80, shooting: 84, finishing: 80, handles: 82, passing: 80, defense: 70, rebounding: 56, athleticism: 74, iq: 80 }),
      player("Kevin Love", 6, 8, 0, { height: 86, shooting: 80, finishing: 78, handles: 68, passing: 80, defense: 64, rebounding: 82, athleticism: 64, iq: 78 }),
      player("Dean Wade", 6, 9, 32, { height: 90, shooting: 78, finishing: 74, handles: 64, passing: 66, defense: 82, rebounding: 66, athleticism: 76, iq: 72 }),
      player("Larry Nance Jr.", 6, 7, 22, { height: 84, shooting: 72, finishing: 80, handles: 70, passing: 74, defense: 82, rebounding: 74, athleticism: 84, iq: 74 }),
      player("Cedi Osman", 6, 7, 16, { height: 84, shooting: 78, finishing: 78, handles: 74, passing: 70, defense: 70, rebounding: 60, athleticism: 80, iq: 74 }),
      player("Sam Merrill", 6, 4, 5, { height: 77, shooting: 86, finishing: 72, handles: 70, passing: 66, defense: 70, rebounding: 54, athleticism: 70, iq: 78 }),
    ],
  },
  {
    era: "2020s",
    team: "Knicks",
    note: "Jalen Brunson's clutch shotmaking led a gritty defensive revival that reached the 2025 conference finals.",
    players: [
      player("Jalen Brunson", 6, 1, 11, { height: 68, shooting: 84, finishing: 88, handles: 90, passing: 84, defense: 70, rebounding: 54, athleticism: 78, iq: 90 }),
      player("Karl-Anthony Towns", 7, 0, 32, { height: 98, shooting: 90, finishing: 88, handles: 74, passing: 74, defense: 86, rebounding: 88, athleticism: 78, iq: 80 }),
      player("Julius Randle", 6, 8, 30, { height: 86, shooting: 78, finishing: 86, handles: 80, passing: 78, defense: 78, rebounding: 84, athleticism: 80, iq: 78 }),
      player("Mikal Bridges", 6, 6, 25, { height: 82, shooting: 80, finishing: 82, handles: 76, passing: 70, defense: 90, rebounding: 60, athleticism: 86, iq: 80 }),
      player("OG Anunoby", 6, 7, 8, { height: 84, shooting: 80, finishing: 80, handles: 72, passing: 66, defense: 92, rebounding: 66, athleticism: 88, iq: 78 }),
      player("Josh Hart", 6, 5, 3, { height: 80, shooting: 74, finishing: 80, handles: 76, passing: 78, defense: 84, rebounding: 78, athleticism: 84, iq: 78 }),
      player("RJ Barrett", 6, 6, 9, { height: 82, shooting: 74, finishing: 84, handles: 80, passing: 72, defense: 74, rebounding: 66, athleticism: 82, iq: 78 }),
      player("Immanuel Quickley", 6, 3, 5, { height: 74, shooting: 82, finishing: 80, handles: 84, passing: 78, defense: 78, rebounding: 58, athleticism: 82, iq: 80 }),
      player("Mitchell Robinson", 7, 0, 23, { height: 98, shooting: 50, finishing: 84, handles: 54, passing: 58, defense: 90, rebounding: 88, athleticism: 88, iq: 70 }),
      player("Derrick Rose", 6, 2, 4, { height: 71, shooting: 78, finishing: 84, handles: 88, passing: 78, defense: 68, rebounding: 54, athleticism: 82, iq: 82 }),
      player("Donte DiVincenzo", 6, 4, 0, { height: 77, shooting: 84, finishing: 78, handles: 78, passing: 74, defense: 80, rebounding: 62, athleticism: 78, iq: 80 }),
      player("Isaiah Hartenstein", 7, 0, 55, { height: 98, shooting: 58, finishing: 82, handles: 62, passing: 78, defense: 84, rebounding: 86, athleticism: 74, iq: 72 }),
      player("Miles McBride", 6, 2, 2, { height: 71, shooting: 80, finishing: 76, handles: 80, passing: 72, defense: 86, rebounding: 54, athleticism: 82, iq: 76 }),
      player("Evan Fournier", 6, 7, 13, { height: 84, shooting: 82, finishing: 80, handles: 78, passing: 72, defense: 66, rebounding: 56, athleticism: 74, iq: 80 }),
      player("Alec Burks", 6, 6, 18, { height: 82, shooting: 80, finishing: 80, handles: 78, passing: 70, defense: 70, rebounding: 62, athleticism: 78, iq: 78 }),
    ],
  },
  {
    era: "2020s",
    team: "Pacers",
    note: "Tyrese Haliburton's pace-and-pass brilliance carried Indiana to the 2025 Finals with a deep, fearless rotation.",
    players: [
      player("Tyrese Haliburton", 6, 5, 0, { height: 80, shooting: 84, finishing: 82, handles: 92, passing: 96, defense: 72, rebounding: 58, athleticism: 82, iq: 94 }),
      player("Pascal Siakam", 6, 8, 43, { height: 86, shooting: 78, finishing: 86, handles: 80, passing: 74, defense: 82, rebounding: 78, athleticism: 86, iq: 82 }),
      player("Myles Turner", 6, 11, 33, { height: 96, shooting: 78, finishing: 82, handles: 60, passing: 64, defense: 90, rebounding: 78, athleticism: 80, iq: 76 }),
      player("Bennedict Mathurin", 6, 6, 0, { height: 82, shooting: 78, finishing: 86, handles: 78, passing: 68, defense: 72, rebounding: 64, athleticism: 88, iq: 80 }),
      player("Andrew Nembhard", 6, 5, 2, { height: 80, shooting: 78, finishing: 80, handles: 84, passing: 84, defense: 86, rebounding: 58, athleticism: 78, iq: 84 }),
      player("Aaron Nesmith", 6, 7, 23, { height: 84, shooting: 82, finishing: 80, handles: 70, passing: 66, defense: 88, rebounding: 66, athleticism: 86, iq: 80 }),
      player("Domantas Sabonis", 6, 11, 11, { height: 96, shooting: 74, finishing: 86, handles: 72, passing: 82, defense: 74, rebounding: 90, athleticism: 74, iq: 88 }),
      player("Malcolm Brogdon", 6, 5, 7, { height: 80, shooting: 82, finishing: 82, handles: 84, passing: 82, defense: 76, rebounding: 64, athleticism: 74, iq: 82 }),
      player("T.J. McConnell", 6, 1, 9, { height: 68, shooting: 72, finishing: 80, handles: 86, passing: 86, defense: 82, rebounding: 58, athleticism: 74, iq: 86 }),
      player("Obi Toppin", 6, 9, 1, { height: 90, shooting: 78, finishing: 86, handles: 72, passing: 68, defense: 70, rebounding: 72, athleticism: 92, iq: 76 }),
      player("Buddy Hield", 6, 4, 24, { height: 77, shooting: 90, finishing: 78, handles: 74, passing: 68, defense: 66, rebounding: 58, athleticism: 78, iq: 82 }),
      player("Caris LeVert", 6, 6, 22, { height: 82, shooting: 78, finishing: 82, handles: 84, passing: 78, defense: 74, rebounding: 62, athleticism: 82, iq: 78 }),
      player("Isaiah Jackson", 6, 10, 22, { height: 94, shooting: 54, finishing: 84, handles: 58, passing: 62, defense: 80, rebounding: 78, athleticism: 90, iq: 70 }),
      player("Jalen Smith", 6, 10, 25, { height: 94, shooting: 74, finishing: 82, handles: 62, passing: 64, defense: 74, rebounding: 80, athleticism: 80, iq: 72 }),
      player("Ben Sheppard", 6, 6, 26, { height: 82, shooting: 78, finishing: 76, handles: 70, passing: 68, defense: 80, rebounding: 58, athleticism: 80, iq: 74 }),
    ],
  },
  {
    era: "2020s",
    team: "Spurs",
    note: "Victor Wembanyama's two-way unicorn era — paired with rookies Dylan Harper and Stephon Castle and a traded-in De'Aaron Fox.",
    players: [
      player("Victor Wembanyama", 7, 4, 1, { height: 100, shooting: 88, finishing: 92, handles: 76, passing: 80, defense: 99, rebounding: 95, athleticism: 94, iq: 88 }),
      player("De'Aaron Fox", 6, 3, 4, { height: 74, shooting: 78, finishing: 88, handles: 92, passing: 84, defense: 78, rebounding: 56, athleticism: 92, iq: 86 }),
      player("Dylan Harper", 6, 6, 2, { height: 82, shooting: 80, finishing: 86, handles: 88, passing: 82, defense: 80, rebounding: 62, athleticism: 86, iq: 80 }),
      player("Stephon Castle", 6, 6, 5, { height: 82, shooting: 74, finishing: 84, handles: 84, passing: 78, defense: 86, rebounding: 62, athleticism: 88, iq: 80 }),
      player("Devin Vassell", 6, 5, 24, { height: 80, shooting: 82, finishing: 82, handles: 78, passing: 70, defense: 84, rebounding: 62, athleticism: 84, iq: 80 }),
      player("Keldon Johnson", 6, 5, 3, { height: 80, shooting: 78, finishing: 84, handles: 76, passing: 68, defense: 76, rebounding: 70, athleticism: 84, iq: 78 }),
      player("Jeremy Sochan", 6, 8, 10, { height: 86, shooting: 68, finishing: 80, handles: 74, passing: 72, defense: 88, rebounding: 74, athleticism: 88, iq: 74 }),
      player("Chris Paul", 6, 0, 3, { height: 66, shooting: 80, finishing: 78, handles: 88, passing: 94, defense: 80, rebounding: 56, athleticism: 70, iq: 98 }),
      player("Dejounte Murray", 6, 4, 5, { height: 77, shooting: 74, finishing: 82, handles: 86, passing: 82, defense: 86, rebounding: 74, athleticism: 86, iq: 78 }),
      player("DeMar DeRozan", 6, 6, 10, { height: 82, shooting: 78, finishing: 86, handles: 84, passing: 78, defense: 70, rebounding: 64, athleticism: 82, iq: 84 }),
      player("LaMarcus Aldridge", 6, 11, 12, { height: 96, shooting: 82, finishing: 84, handles: 70, passing: 70, defense: 78, rebounding: 80, athleticism: 74, iq: 80 }),
      player("Jakob Poeltl", 7, 0, 25, { height: 98, shooting: 54, finishing: 84, handles: 58, passing: 68, defense: 84, rebounding: 82, athleticism: 78, iq: 72 }),
      player("Harrison Barnes", 6, 8, 40, { height: 86, shooting: 80, finishing: 80, handles: 74, passing: 66, defense: 74, rebounding: 66, athleticism: 76, iq: 80 }),
      player("Tre Jones", 6, 1, 33, { height: 68, shooting: 74, finishing: 78, handles: 84, passing: 84, defense: 82, rebounding: 56, athleticism: 78, iq: 78 }),
      player("Julian Champagnie", 6, 8, 30, { height: 86, shooting: 80, finishing: 76, handles: 68, passing: 64, defense: 80, rebounding: 62, athleticism: 80, iq: 72 }),
    ],
  },
  {
    era: "2020s",
    team: "Hornets",
    note: "LaMelo Ball's flair and a young core of Brandon Miller and sharpshooting rookie Kon Knueppel.",
    players: [
      player("LaMelo Ball", 6, 7, 1, { height: 84, shooting: 89, finishing: 86, handles: 92, passing: 94, defense: 64, rebounding: 68, athleticism: 86, iq: 84 }),
      player("Brandon Miller", 6, 7, 24, { height: 84, shooting: 82, finishing: 84, handles: 80, passing: 72, defense: 78, rebounding: 66, athleticism: 86, iq: 80 }),
      player("Kon Knueppel", 6, 7, 7, { height: 84, shooting: 86, finishing: 80, handles: 76, passing: 74, defense: 72, rebounding: 62, athleticism: 74, iq: 80 }),
      player("Miles Bridges", 6, 7, 0, { height: 84, shooting: 78, finishing: 86, handles: 76, passing: 68, defense: 76, rebounding: 72, athleticism: 92, iq: 78 }),
      player("Terry Rozier", 6, 1, 3, { height: 68, shooting: 80, finishing: 82, handles: 86, passing: 76, defense: 74, rebounding: 60, athleticism: 82, iq: 80 }),
      player("Gordon Hayward", 6, 7, 20, { height: 84, shooting: 80, finishing: 82, handles: 80, passing: 78, defense: 70, rebounding: 64, athleticism: 74, iq: 78 }),
      player("Mark Williams", 7, 0, 5, { height: 98, shooting: 54, finishing: 84, handles: 56, passing: 60, defense: 82, rebounding: 84, athleticism: 86, iq: 72 }),
      player("P.J. Washington", 6, 7, 25, { height: 84, shooting: 78, finishing: 82, handles: 70, passing: 68, defense: 80, rebounding: 72, athleticism: 82, iq: 74 }),
      player("Devonte' Graham", 6, 1, 4, { height: 68, shooting: 80, finishing: 78, handles: 84, passing: 82, defense: 66, rebounding: 52, athleticism: 78, iq: 80 }),
      player("Nick Richards", 7, 0, 4, { height: 98, shooting: 54, finishing: 82, handles: 54, passing: 58, defense: 80, rebounding: 82, athleticism: 82, iq: 68 }),
      player("Cody Martin", 6, 5, 11, { height: 80, shooting: 70, finishing: 78, handles: 74, passing: 72, defense: 84, rebounding: 64, athleticism: 84, iq: 72 }),
      player("Tre Mann", 6, 4, 23, { height: 77, shooting: 80, finishing: 82, handles: 84, passing: 74, defense: 66, rebounding: 56, athleticism: 82, iq: 78 }),
      player("Josh Green", 6, 6, 8, { height: 82, shooting: 78, finishing: 78, handles: 74, passing: 70, defense: 82, rebounding: 62, athleticism: 86, iq: 74 }),
      player("Grant Williams", 6, 6, 2, { height: 82, shooting: 78, finishing: 78, handles: 66, passing: 66, defense: 84, rebounding: 66, athleticism: 76, iq: 76 }),
      player("Caleb Martin", 6, 5, 10, { height: 80, shooting: 76, finishing: 80, handles: 74, passing: 68, defense: 80, rebounding: 64, athleticism: 86, iq: 74 }),
    ],
  },
  {
    era: "2010s",
    team: "Nuggets",
    note: "George Karl's no-superstar, high-pace 57-win 2013 team — and the early bloom of Jokic and Murray.",
    players: [
      player("Nikola Jokic", 6, 11, 15, { height: 96, shooting: 80, finishing: 86, handles: 74, passing: 92, defense: 74, rebounding: 88, athleticism: 58, iq: 99 }),
      player("Carmelo Anthony", 6, 7, 15, { height: 84, shooting: 88, finishing: 90, handles: 84, passing: 76, defense: 72, rebounding: 74, athleticism: 84, iq: 80 }),
      player("Jamal Murray", 6, 4, 27, { height: 77, shooting: 82, finishing: 84, handles: 88, passing: 80, defense: 70, rebounding: 56, athleticism: 82, iq: 84 }),
      player("Ty Lawson", 5, 11, 3, { height: 64, shooting: 80, finishing: 84, handles: 90, passing: 86, defense: 70, rebounding: 52, athleticism: 86, iq: 80 }),
      player("Danilo Gallinari", 6, 10, 8, { height: 94, shooting: 84, finishing: 82, handles: 74, passing: 70, defense: 68, rebounding: 68, athleticism: 74, iq: 82 }),
      player("Kenneth Faried", 6, 8, 35, { height: 86, shooting: 54, finishing: 84, handles: 60, passing: 62, defense: 74, rebounding: 86, athleticism: 92, iq: 74 }),
      player("Gary Harris", 6, 4, 14, { height: 77, shooting: 80, finishing: 80, handles: 76, passing: 70, defense: 86, rebounding: 56, athleticism: 84, iq: 78 }),
      player("Will Barton", 6, 5, 5, { height: 80, shooting: 80, finishing: 82, handles: 82, passing: 76, defense: 72, rebounding: 66, athleticism: 86, iq: 80 }),
      player("Andre Iguodala", 6, 6, 9, { height: 82, shooting: 72, finishing: 82, handles: 82, passing: 84, defense: 90, rebounding: 68, athleticism: 90, iq: 78 }),
      player("Wilson Chandler", 6, 8, 21, { height: 86, shooting: 78, finishing: 80, handles: 74, passing: 68, defense: 76, rebounding: 68, athleticism: 82, iq: 74 }),
      player("Paul Millsap", 6, 7, 4, { height: 84, shooting: 76, finishing: 82, handles: 72, passing: 74, defense: 84, rebounding: 78, athleticism: 76, iq: 78 }),
      player("Nene", 6, 11, 31, { height: 96, shooting: 64, finishing: 86, handles: 68, passing: 70, defense: 80, rebounding: 80, athleticism: 86, iq: 76 }),
      player("Arron Afflalo", 6, 5, 6, { height: 80, shooting: 82, finishing: 78, handles: 74, passing: 68, defense: 84, rebounding: 58, athleticism: 80, iq: 78 }),
      player("JaVale McGee", 7, 0, 34, { height: 98, shooting: 56, finishing: 84, handles: 54, passing: 58, defense: 80, rebounding: 78, athleticism: 92, iq: 68 }),
      player("Mason Plumlee", 6, 11, 24, { height: 96, shooting: 58, finishing: 84, handles: 64, passing: 80, defense: 76, rebounding: 80, athleticism: 80, iq: 70 }),
    ],
  },
  {
    era: "2010s",
    team: "Knicks",
    note: "Carmelo's scoring title and the 54-win 2013 team, plus the Linsanity spark and a young Porzingis.",
    players: [
      player("Carmelo Anthony", 6, 8, 7, { height: 86, shooting: 88, finishing: 88, handles: 82, passing: 72, defense: 70, rebounding: 74, athleticism: 80, iq: 80 }),
      player("Amar'e Stoudemire", 6, 10, 1, { height: 94, shooting: 78, finishing: 90, handles: 70, passing: 66, defense: 66, rebounding: 78, athleticism: 84, iq: 78 }),
      player("Kristaps Porzingis", 7, 3, 6, { height: 100, shooting: 82, finishing: 84, handles: 68, passing: 64, defense: 84, rebounding: 78, athleticism: 78, iq: 78 }),
      player("Tyson Chandler", 7, 1, 6, { height: 100, shooting: 50, finishing: 84, handles: 54, passing: 60, defense: 90, rebounding: 88, athleticism: 84, iq: 76 }),
      player("J.R. Smith", 6, 6, 8, { height: 82, shooting: 82, finishing: 82, handles: 82, passing: 70, defense: 70, rebounding: 60, athleticism: 86, iq: 74 }),
      player("Jeremy Lin", 6, 3, 17, { height: 74, shooting: 76, finishing: 82, handles: 84, passing: 80, defense: 72, rebounding: 56, athleticism: 82, iq: 82 }),
      player("Raymond Felton", 6, 1, 2, { height: 68, shooting: 76, finishing: 80, handles: 84, passing: 82, defense: 72, rebounding: 54, athleticism: 80, iq: 76 }),
      player("Iman Shumpert", 6, 5, 21, { height: 80, shooting: 74, finishing: 78, handles: 74, passing: 68, defense: 86, rebounding: 60, athleticism: 88, iq: 72 }),
      player("Jason Kidd", 6, 4, 5, { height: 77, shooting: 76, finishing: 74, handles: 88, passing: 92, defense: 80, rebounding: 66, athleticism: 70, iq: 95 }),
      player("Tim Hardaway Jr.", 6, 5, 5, { height: 80, shooting: 82, finishing: 80, handles: 78, passing: 68, defense: 66, rebounding: 54, athleticism: 80, iq: 78 }),
      player("Steve Novak", 6, 10, 16, { height: 94, shooting: 90, finishing: 66, handles: 60, passing: 60, defense: 60, rebounding: 62, athleticism: 60, iq: 78 }),
      player("Landry Fields", 6, 7, 2, { height: 84, shooting: 76, finishing: 78, handles: 72, passing: 72, defense: 76, rebounding: 66, athleticism: 80, iq: 72 }),
      player("Courtney Lee", 6, 5, 42, { height: 80, shooting: 80, finishing: 78, handles: 74, passing: 70, defense: 84, rebounding: 58, athleticism: 80, iq: 78 }),
      player("Kenyon Martin", 6, 9, 3, { height: 90, shooting: 62, finishing: 80, handles: 66, passing: 68, defense: 84, rebounding: 76, athleticism: 80, iq: 74 }),
      player("Pablo Prigioni", 6, 3, 9, { height: 74, shooting: 80, finishing: 72, handles: 84, passing: 84, defense: 80, rebounding: 52, athleticism: 70, iq: 76 }),
    ],
  },
  {
    era: "2010s",
    team: "Wizards",
    note: "John Wall's speed and Bradley Beal's shotmaking carried a frisky, playoff-regular Washington core.",
    players: [
      player("John Wall", 6, 4, 2, { height: 77, shooting: 74, finishing: 86, handles: 92, passing: 90, defense: 80, rebounding: 58, athleticism: 94, iq: 82 }),
      player("Bradley Beal", 6, 4, 3, { height: 77, shooting: 90, finishing: 84, handles: 82, passing: 74, defense: 70, rebounding: 58, athleticism: 82, iq: 84 }),
      player("Marcin Gortat", 6, 11, 13, { height: 96, shooting: 62, finishing: 84, handles: 56, passing: 64, defense: 80, rebounding: 84, athleticism: 78, iq: 72 }),
      player("Otto Porter Jr.", 6, 8, 22, { height: 86, shooting: 84, finishing: 78, handles: 70, passing: 70, defense: 80, rebounding: 68, athleticism: 80, iq: 78 }),
      player("Nene", 6, 11, 42, { height: 96, shooting: 64, finishing: 84, handles: 68, passing: 72, defense: 80, rebounding: 78, athleticism: 80, iq: 74 }),
      player("Trevor Ariza", 6, 8, 1, { height: 86, shooting: 78, finishing: 80, handles: 74, passing: 72, defense: 86, rebounding: 66, athleticism: 84, iq: 76 }),
      player("Markieff Morris", 6, 9, 5, { height: 90, shooting: 76, finishing: 80, handles: 70, passing: 66, defense: 78, rebounding: 74, athleticism: 78, iq: 76 }),
      player("Andre Miller", 6, 3, 24, { height: 74, shooting: 72, finishing: 82, handles: 88, passing: 90, defense: 74, rebounding: 64, athleticism: 74, iq: 88 }),
      player("JaVale McGee", 7, 0, 34, { height: 98, shooting: 54, finishing: 82, handles: 54, passing: 58, defense: 78, rebounding: 78, athleticism: 92, iq: 66 }),
      player("Jordan Crawford", 6, 4, 15, { height: 77, shooting: 80, finishing: 82, handles: 82, passing: 72, defense: 66, rebounding: 56, athleticism: 80, iq: 78 }),
      player("Kelly Oubre Jr.", 6, 7, 12, { height: 84, shooting: 74, finishing: 80, handles: 72, passing: 64, defense: 80, rebounding: 64, athleticism: 88, iq: 72 }),
      player("Jared Dudley", 6, 7, 1, { height: 84, shooting: 80, finishing: 74, handles: 70, passing: 74, defense: 78, rebounding: 62, athleticism: 68, iq: 78 }),
      player("Tomas Satoransky", 6, 7, 31, { height: 84, shooting: 74, finishing: 78, handles: 82, passing: 84, defense: 78, rebounding: 64, athleticism: 78, iq: 74 }),
      player("Martell Webster", 6, 7, 9, { height: 84, shooting: 84, finishing: 76, handles: 68, passing: 66, defense: 70, rebounding: 64, athleticism: 78, iq: 78 }),
      player("Trevor Booker", 6, 8, 35, { height: 86, shooting: 66, finishing: 80, handles: 66, passing: 66, defense: 80, rebounding: 78, athleticism: 84, iq: 72 }),
    ],
  },
  {
    era: "2010s",
    team: "Jazz",
    note: "From Hayward's prime to the Gobert–Mitchell rise — elite rim protection and a deep, disciplined system.",
    players: [
      player("Rudy Gobert", 7, 1, 27, { height: 100, shooting: 54, finishing: 84, handles: 54, passing: 62, defense: 98, rebounding: 92, athleticism: 82, iq: 74 }),
      player("Donovan Mitchell", 6, 3, 45, { height: 74, shooting: 90, finishing: 88, handles: 88, passing: 74, defense: 78, rebounding: 56, athleticism: 90, iq: 86 }),
      player("Gordon Hayward", 6, 8, 20, { height: 86, shooting: 82, finishing: 84, handles: 82, passing: 78, defense: 74, rebounding: 66, athleticism: 78, iq: 82 }),
      player("Deron Williams", 6, 3, 8, { height: 74, shooting: 80, finishing: 84, handles: 90, passing: 90, defense: 72, rebounding: 58, athleticism: 82, iq: 84 }),
      player("Al Jefferson", 6, 10, 25, { height: 94, shooting: 72, finishing: 86, handles: 64, passing: 68, defense: 72, rebounding: 84, athleticism: 74, iq: 78 }),
      player("Paul Millsap", 6, 8, 24, { height: 86, shooting: 76, finishing: 84, handles: 72, passing: 74, defense: 84, rebounding: 80, athleticism: 80, iq: 78 }),
      player("Derrick Favors", 6, 9, 15, { height: 90, shooting: 62, finishing: 84, handles: 62, passing: 66, defense: 84, rebounding: 84, athleticism: 84, iq: 74 }),
      player("Joe Ingles", 6, 8, 2, { height: 86, shooting: 82, finishing: 76, handles: 78, passing: 84, defense: 78, rebounding: 62, athleticism: 62, iq: 80 }),
      player("Ricky Rubio", 6, 3, 3, { height: 74, shooting: 70, finishing: 78, handles: 88, passing: 92, defense: 80, rebounding: 62, athleticism: 78, iq: 78 }),
      player("Enes Kanter", 6, 11, 0, { height: 96, shooting: 72, finishing: 84, handles: 60, passing: 62, defense: 60, rebounding: 84, athleticism: 72, iq: 74 }),
      player("Alec Burks", 6, 6, 10, { height: 82, shooting: 78, finishing: 82, handles: 78, passing: 70, defense: 70, rebounding: 62, athleticism: 82, iq: 76 }),
      player("Rodney Hood", 6, 8, 5, { height: 86, shooting: 82, finishing: 80, handles: 76, passing: 68, defense: 70, rebounding: 58, athleticism: 78, iq: 78 }),
      player("Trey Burke", 6, 1, 3, { height: 68, shooting: 78, finishing: 80, handles: 84, passing: 80, defense: 66, rebounding: 52, athleticism: 78, iq: 78 }),
      player("Royce O'Neale", 6, 4, 23, { height: 77, shooting: 78, finishing: 74, handles: 70, passing: 74, defense: 84, rebounding: 64, athleticism: 78, iq: 74 }),
      player("Jae Crowder", 6, 6, 99, { height: 82, shooting: 76, finishing: 78, handles: 70, passing: 66, defense: 82, rebounding: 66, athleticism: 76, iq: 76 }),
    ],
  },
  {
    era: "2010s",
    team: "Pelicans",
    note: "Anthony Davis' two-way dominance, briefly supercharged by a DeMarcus Cousins pairing.",
    players: [
      player("Anthony Davis", 6, 10, 23, { height: 94, shooting: 74, finishing: 88, handles: 70, passing: 70, defense: 92, rebounding: 88, athleticism: 90, iq: 82 }),
      player("DeMarcus Cousins", 6, 11, 0, { height: 96, shooting: 82, finishing: 90, handles: 74, passing: 80, defense: 78, rebounding: 90, athleticism: 80, iq: 80 }),
      player("Jrue Holiday", 6, 4, 11, { height: 77, shooting: 78, finishing: 82, handles: 83, passing: 84, defense: 90, rebounding: 60, athleticism: 84, iq: 90 }),
      player("Eric Gordon", 6, 4, 10, { height: 77, shooting: 82, finishing: 82, handles: 80, passing: 72, defense: 74, rebounding: 56, athleticism: 82, iq: 80 }),
      player("Tyreke Evans", 6, 6, 1, { height: 82, shooting: 74, finishing: 86, handles: 88, passing: 80, defense: 72, rebounding: 66, athleticism: 86, iq: 80 }),
      player("Ryan Anderson", 6, 10, 33, { height: 94, shooting: 86, finishing: 72, handles: 64, passing: 64, defense: 62, rebounding: 78, athleticism: 68, iq: 78 }),
      player("Nikola Mirotic", 6, 10, 3, { height: 94, shooting: 84, finishing: 80, handles: 68, passing: 66, defense: 70, rebounding: 78, athleticism: 72, iq: 76 }),
      player("Julius Randle", 6, 8, 30, { height: 86, shooting: 70, finishing: 84, handles: 78, passing: 74, defense: 76, rebounding: 82, athleticism: 82, iq: 76 }),
      player("E'Twaun Moore", 6, 4, 55, { height: 77, shooting: 82, finishing: 80, handles: 78, passing: 70, defense: 72, rebounding: 54, athleticism: 78, iq: 78 }),
      player("Solomon Hill", 6, 7, 44, { height: 84, shooting: 74, finishing: 76, handles: 70, passing: 70, defense: 82, rebounding: 64, athleticism: 78, iq: 72 }),
      player("Greivis Vasquez", 6, 6, 21, { height: 82, shooting: 78, finishing: 80, handles: 84, passing: 86, defense: 70, rebounding: 64, athleticism: 74, iq: 78 }),
      player("Al-Farouq Aminu", 6, 9, 0, { height: 90, shooting: 72, finishing: 76, handles: 68, passing: 68, defense: 86, rebounding: 78, athleticism: 84, iq: 72 }),
      player("Robin Lopez", 7, 0, 15, { height: 98, shooting: 58, finishing: 80, handles: 54, passing: 60, defense: 80, rebounding: 80, athleticism: 72, iq: 70 }),
      player("Dante Cunningham", 6, 8, 44, { height: 86, shooting: 74, finishing: 76, handles: 66, passing: 66, defense: 82, rebounding: 68, athleticism: 80, iq: 72 }),
      player("Quincy Pondexter", 6, 7, 20, { height: 84, shooting: 78, finishing: 76, handles: 70, passing: 66, defense: 80, rebounding: 60, athleticism: 80, iq: 74 }),
    ],
  },
  {
    era: "2020s",
    team: "Pelicans",
    note: "Zion Williamson's freight-train finishing and Brandon Ingram's smooth scoring, with a swarming young defense.",
    players: [
      player("Zion Williamson", 6, 6, 1, { height: 82, shooting: 70, finishing: 92, handles: 80, passing: 74, defense: 74, rebounding: 78, athleticism: 96, iq: 76 }),
      player("Brandon Ingram", 6, 8, 14, { height: 86, shooting: 80, finishing: 86, handles: 84, passing: 78, defense: 72, rebounding: 64, athleticism: 82, iq: 82 }),
      player("CJ McCollum", 6, 3, 3, { height: 74, shooting: 86, finishing: 84, handles: 86, passing: 76, defense: 66, rebounding: 58, athleticism: 78, iq: 84 }),
      player("Jrue Holiday", 6, 4, 11, { height: 77, shooting: 78, finishing: 82, handles: 83, passing: 84, defense: 90, rebounding: 60, athleticism: 84, iq: 90 }),
      player("Herbert Jones", 6, 7, 5, { height: 84, shooting: 74, finishing: 78, handles: 70, passing: 70, defense: 92, rebounding: 64, athleticism: 86, iq: 74 }),
      player("Trey Murphy III", 6, 8, 25, { height: 86, shooting: 84, finishing: 82, handles: 72, passing: 66, defense: 78, rebounding: 62, athleticism: 88, iq: 78 }),
      player("Jonas Valanciunas", 6, 11, 17, { height: 96, shooting: 64, finishing: 86, handles: 60, passing: 66, defense: 74, rebounding: 88, athleticism: 68, iq: 76 }),
      player("Dejounte Murray", 6, 4, 5, { height: 77, shooting: 74, finishing: 82, handles: 86, passing: 82, defense: 84, rebounding: 74, athleticism: 84, iq: 78 }),
      player("Lonzo Ball", 6, 6, 2, { height: 82, shooting: 70, finishing: 78, handles: 84, passing: 88, defense: 84, rebounding: 70, athleticism: 82, iq: 74 }),
      player("Jose Alvarado", 6, 0, 15, { height: 66, shooting: 76, finishing: 76, handles: 84, passing: 78, defense: 88, rebounding: 50, athleticism: 80, iq: 78 }),
      player("Naji Marshall", 6, 7, 8, { height: 84, shooting: 72, finishing: 80, handles: 74, passing: 72, defense: 82, rebounding: 64, athleticism: 84, iq: 74 }),
      player("Devonte' Graham", 6, 1, 4, { height: 68, shooting: 80, finishing: 76, handles: 84, passing: 80, defense: 64, rebounding: 50, athleticism: 78, iq: 78 }),
      player("Steven Adams", 7, 0, 12, { height: 98, shooting: 54, finishing: 84, handles: 56, passing: 62, defense: 84, rebounding: 86, athleticism: 80, iq: 72 }),
      player("Larry Nance Jr.", 6, 7, 22, { height: 84, shooting: 74, finishing: 80, handles: 70, passing: 74, defense: 82, rebounding: 74, athleticism: 82, iq: 72 }),
      player("Eric Gordon", 6, 4, 10, { height: 77, shooting: 82, finishing: 80, handles: 76, passing: 68, defense: 70, rebounding: 54, athleticism: 78, iq: 80 }),
    ],
  },
  {
    era: "2020s",
    team: "Kings",
    note: "The 'Light the Beam' end of a 16-year playoff drought — Fox's speed and Sabonis' bruising playmaking.",
    players: [
      player("De'Aaron Fox", 6, 3, 5, { height: 74, shooting: 78, finishing: 88, handles: 92, passing: 84, defense: 76, rebounding: 56, athleticism: 92, iq: 86 }),
      player("Domantas Sabonis", 6, 11, 10, { height: 96, shooting: 72, finishing: 86, handles: 72, passing: 84, defense: 74, rebounding: 90, athleticism: 74, iq: 88 }),
      player("DeMar DeRozan", 6, 6, 10, { height: 82, shooting: 78, finishing: 86, handles: 84, passing: 78, defense: 70, rebounding: 62, athleticism: 80, iq: 86 }),
      player("Tyrese Haliburton", 6, 5, 0, { height: 80, shooting: 82, finishing: 80, handles: 90, passing: 92, defense: 72, rebounding: 56, athleticism: 82, iq: 94 }),
      player("Malik Monk", 6, 3, 0, { height: 74, shooting: 82, finishing: 84, handles: 84, passing: 76, defense: 66, rebounding: 54, athleticism: 88, iq: 82 }),
      player("Keegan Murray", 6, 8, 13, { height: 86, shooting: 82, finishing: 80, handles: 70, passing: 66, defense: 80, rebounding: 70, athleticism: 84, iq: 76 }),
      player("Buddy Hield", 6, 4, 24, { height: 77, shooting: 90, finishing: 78, handles: 74, passing: 68, defense: 64, rebounding: 58, athleticism: 78, iq: 82 }),
      player("Harrison Barnes", 6, 8, 40, { height: 86, shooting: 82, finishing: 80, handles: 74, passing: 66, defense: 74, rebounding: 66, athleticism: 76, iq: 82 }),
      player("Zach LaVine", 6, 5, 8, { height: 80, shooting: 88, finishing: 86, handles: 82, passing: 72, defense: 64, rebounding: 56, athleticism: 90, iq: 80 }),
      player("Kevin Huerter", 6, 7, 9, { height: 84, shooting: 84, finishing: 78, handles: 74, passing: 74, defense: 70, rebounding: 60, athleticism: 78, iq: 78 }),
      player("Davion Mitchell", 6, 2, 15, { height: 71, shooting: 72, finishing: 76, handles: 84, passing: 78, defense: 90, rebounding: 52, athleticism: 84, iq: 74 }),
      player("Marvin Bagley III", 6, 11, 35, { height: 96, shooting: 64, finishing: 84, handles: 66, passing: 62, defense: 66, rebounding: 80, athleticism: 86, iq: 70 }),
      player("Trey Lyles", 6, 9, 41, { height: 90, shooting: 78, finishing: 80, handles: 68, passing: 66, defense: 74, rebounding: 74, athleticism: 76, iq: 74 }),
      player("Richaun Holmes", 6, 10, 22, { height: 94, shooting: 58, finishing: 84, handles: 60, passing: 62, defense: 78, rebounding: 80, athleticism: 86, iq: 72 }),
      player("Bogdan Bogdanovic", 6, 5, 8, { height: 80, shooting: 84, finishing: 80, handles: 80, passing: 78, defense: 70, rebounding: 60, athleticism: 76, iq: 82 }),
    ],
  },
  {
    era: "2020s",
    team: "Magic",
    note: "A young, switchy defense built around Paolo Banchero and Franz Wagner that crashed the 2024-25 playoffs.",
    players: [
      player("Paolo Banchero", 6, 10, 5, { height: 94, shooting: 82, finishing: 90, handles: 84, passing: 80, defense: 78, rebounding: 78, athleticism: 86, iq: 84 }),
      player("Franz Wagner", 6, 10, 22, { height: 94, shooting: 78, finishing: 84, handles: 82, passing: 78, defense: 84, rebounding: 68, athleticism: 84, iq: 80 }),
      player("Jalen Suggs", 6, 4, 4, { height: 77, shooting: 76, finishing: 80, handles: 80, passing: 76, defense: 92, rebounding: 58, athleticism: 88, iq: 80 }),
      player("Nikola Vucevic", 6, 10, 9, { height: 94, shooting: 80, finishing: 84, handles: 68, passing: 74, defense: 68, rebounding: 88, athleticism: 66, iq: 80 }),
      player("Wendell Carter Jr.", 6, 10, 34, { height: 94, shooting: 72, finishing: 82, handles: 62, passing: 70, defense: 82, rebounding: 84, athleticism: 76, iq: 74 }),
      player("Cole Anthony", 6, 2, 50, { height: 71, shooting: 76, finishing: 82, handles: 84, passing: 78, defense: 70, rebounding: 60, athleticism: 82, iq: 80 }),
      player("Markelle Fultz", 6, 3, 20, { height: 74, shooting: 66, finishing: 82, handles: 86, passing: 82, defense: 78, rebounding: 58, athleticism: 84, iq: 74 }),
      player("Jonathan Isaac", 6, 10, 1, { height: 94, shooting: 68, finishing: 80, handles: 66, passing: 64, defense: 92, rebounding: 76, athleticism: 88, iq: 70 }),
      player("Aaron Gordon", 6, 8, 0, { height: 86, shooting: 72, finishing: 84, handles: 76, passing: 72, defense: 82, rebounding: 74, athleticism: 92, iq: 74 }),
      player("Kentavious Caldwell-Pope", 6, 5, 1, { height: 80, shooting: 82, finishing: 76, handles: 72, passing: 68, defense: 84, rebounding: 56, athleticism: 78, iq: 80 }),
      player("Evan Fournier", 6, 7, 10, { height: 84, shooting: 82, finishing: 80, handles: 78, passing: 72, defense: 66, rebounding: 56, athleticism: 74, iq: 80 }),
      player("Gary Harris", 6, 4, 14, { height: 77, shooting: 80, finishing: 78, handles: 72, passing: 68, defense: 84, rebounding: 54, athleticism: 80, iq: 78 }),
      player("Terrence Ross", 6, 7, 31, { height: 84, shooting: 82, finishing: 80, handles: 74, passing: 66, defense: 70, rebounding: 58, athleticism: 84, iq: 80 }),
      player("Mo Bamba", 7, 0, 5, { height: 98, shooting: 70, finishing: 80, handles: 56, passing: 60, defense: 80, rebounding: 80, athleticism: 80, iq: 68 }),
      player("Anthony Black", 6, 7, 0, { height: 84, shooting: 72, finishing: 80, handles: 80, passing: 78, defense: 84, rebounding: 62, athleticism: 84, iq: 74 }),
    ],
  },
  {
    era: "2020s",
    team: "Grizzlies",
    note: "Ja Morant's high-flying acrobatics and Jaren Jackson Jr.'s rim protection drove a young, swaggering contender.",
    players: [
      player("Ja Morant", 6, 2, 12, { height: 71, shooting: 74, finishing: 90, handles: 92, passing: 86, defense: 70, rebounding: 60, athleticism: 96, iq: 80 }),
      player("Jaren Jackson Jr.", 6, 10, 13, { height: 94, shooting: 78, finishing: 84, handles: 66, passing: 64, defense: 94, rebounding: 78, athleticism: 84, iq: 78 }),
      player("Desmond Bane", 6, 5, 22, { height: 80, shooting: 86, finishing: 84, handles: 80, passing: 74, defense: 78, rebounding: 64, athleticism: 80, iq: 84 }),
      player("Dillon Brooks", 6, 7, 24, { height: 84, shooting: 76, finishing: 80, handles: 74, passing: 64, defense: 88, rebounding: 60, athleticism: 82, iq: 78 }),
      player("Steven Adams", 7, 0, 4, { height: 98, shooting: 54, finishing: 84, handles: 56, passing: 64, defense: 84, rebounding: 90, athleticism: 78, iq: 72 }),
      player("Tyus Jones", 6, 1, 21, { height: 68, shooting: 78, finishing: 76, handles: 86, passing: 88, defense: 74, rebounding: 50, athleticism: 74, iq: 88 }),
      player("Brandon Clarke", 6, 8, 15, { height: 86, shooting: 66, finishing: 88, handles: 64, passing: 66, defense: 82, rebounding: 78, athleticism: 90, iq: 74 }),
      player("Jonas Valanciunas", 6, 11, 17, { height: 96, shooting: 64, finishing: 86, handles: 60, passing: 66, defense: 74, rebounding: 88, athleticism: 68, iq: 76 }),
      player("Marcus Smart", 6, 4, 36, { height: 77, shooting: 70, finishing: 78, handles: 82, passing: 80, defense: 90, rebounding: 62, athleticism: 80, iq: 88 }),
      player("De'Anthony Melton", 6, 2, 0, { height: 71, shooting: 78, finishing: 78, handles: 80, passing: 74, defense: 88, rebounding: 60, athleticism: 82, iq: 76 }),
      player("Santi Aldama", 6, 11, 7, { height: 96, shooting: 78, finishing: 78, handles: 68, passing: 70, defense: 78, rebounding: 74, athleticism: 76, iq: 74 }),
      player("Xavier Tillman", 6, 8, 2, { height: 86, shooting: 66, finishing: 78, handles: 66, passing: 72, defense: 84, rebounding: 74, athleticism: 78, iq: 72 }),
      player("Kyle Anderson", 6, 9, 1, { height: 90, shooting: 72, finishing: 78, handles: 78, passing: 82, defense: 82, rebounding: 74, athleticism: 64, iq: 74 }),
      player("Luke Kennard", 6, 5, 10, { height: 80, shooting: 90, finishing: 74, handles: 72, passing: 72, defense: 64, rebounding: 54, athleticism: 68, iq: 80 }),
      player("Ziaire Williams", 6, 9, 8, { height: 90, shooting: 74, finishing: 78, handles: 72, passing: 66, defense: 76, rebounding: 60, athleticism: 84, iq: 72 }),
    ],
  },
  {
    era: "2020s",
    team: "Clippers",
    note: "A star-laden contender built on Kawhi Leonard and Paul George, later reloaded with James Harden.",
    players: [
      player("Kawhi Leonard", 6, 7, 2, { height: 84, shooting: 84, finishing: 90, handles: 82, passing: 74, defense: 94, rebounding: 74, athleticism: 84, iq: 90 }),
      player("Paul George", 6, 8, 13, { height: 86, shooting: 88, finishing: 86, handles: 82, passing: 76, defense: 90, rebounding: 68, athleticism: 86, iq: 82 }),
      player("James Harden", 6, 5, 1, { height: 80, shooting: 82, finishing: 82, handles: 90, passing: 92, defense: 68, rebounding: 64, athleticism: 74, iq: 82 }),
      player("Norman Powell", 6, 3, 24, { height: 74, shooting: 84, finishing: 84, handles: 78, passing: 68, defense: 76, rebounding: 56, athleticism: 84, iq: 82 }),
      player("Ivica Zubac", 7, 0, 40, { height: 98, shooting: 54, finishing: 86, handles: 56, passing: 64, defense: 82, rebounding: 88, athleticism: 74, iq: 72 }),
      player("Reggie Jackson", 6, 2, 1, { height: 71, shooting: 80, finishing: 82, handles: 84, passing: 78, defense: 68, rebounding: 54, athleticism: 78, iq: 80 }),
      player("Marcus Morris", 6, 8, 8, { height: 86, shooting: 80, finishing: 80, handles: 72, passing: 66, defense: 78, rebounding: 66, athleticism: 74, iq: 78 }),
      player("Nicolas Batum", 6, 8, 33, { height: 86, shooting: 80, finishing: 76, handles: 72, passing: 78, defense: 84, rebounding: 66, athleticism: 78, iq: 76 }),
      player("Terance Mann", 6, 5, 14, { height: 80, shooting: 74, finishing: 82, handles: 76, passing: 72, defense: 82, rebounding: 64, athleticism: 86, iq: 78 }),
      player("Lou Williams", 6, 1, 23, { height: 68, shooting: 84, finishing: 84, handles: 86, passing: 76, defense: 62, rebounding: 50, athleticism: 78, iq: 86 }),
      player("Montrezl Harrell", 6, 7, 5, { height: 84, shooting: 58, finishing: 86, handles: 62, passing: 64, defense: 74, rebounding: 74, athleticism: 88, iq: 78 }),
      player("Patrick Beverley", 6, 1, 21, { height: 68, shooting: 74, finishing: 74, handles: 80, passing: 74, defense: 90, rebounding: 60, athleticism: 82, iq: 74 }),
      player("Kris Dunn", 6, 3, 8, { height: 74, shooting: 68, finishing: 76, handles: 82, passing: 80, defense: 90, rebounding: 58, athleticism: 84, iq: 72 }),
      player("Robert Covington", 6, 7, 23, { height: 84, shooting: 78, finishing: 72, handles: 66, passing: 66, defense: 86, rebounding: 64, athleticism: 78, iq: 72 }),
      player("Amir Coffey", 6, 7, 7, { height: 84, shooting: 78, finishing: 78, handles: 74, passing: 68, defense: 74, rebounding: 56, athleticism: 80, iq: 74 }),
    ],
  },
  {
    era: "2020s",
    team: "Pistons",
    note: "Cade Cunningham's playmaking led Detroit's 2024-25 turnaround — a long, athletic young core that crashed the playoffs.",
    players: [
      player("Cade Cunningham", 6, 6, 2, { height: 82, shooting: 78, finishing: 86, handles: 90, passing: 86, defense: 76, rebounding: 68, athleticism: 80, iq: 84 }),
      player("Jaden Ivey", 6, 4, 23, { height: 77, shooting: 76, finishing: 86, handles: 84, passing: 74, defense: 70, rebounding: 58, athleticism: 92, iq: 78 }),
      player("Jalen Duren", 6, 10, 0, { height: 94, shooting: 54, finishing: 86, handles: 58, passing: 66, defense: 78, rebounding: 88, athleticism: 88, iq: 74 }),
      player("Tobias Harris", 6, 8, 12, { height: 86, shooting: 80, finishing: 82, handles: 76, passing: 72, defense: 74, rebounding: 74, athleticism: 76, iq: 78 }),
      player("Ausar Thompson", 6, 7, 9, { height: 84, shooting: 62, finishing: 82, handles: 74, passing: 74, defense: 90, rebounding: 72, athleticism: 94, iq: 72 }),
      player("Malik Beasley", 6, 4, 5, { height: 77, shooting: 86, finishing: 76, handles: 74, passing: 64, defense: 66, rebounding: 54, athleticism: 78, iq: 80 }),
      player("Jerami Grant", 6, 8, 9, { height: 86, shooting: 78, finishing: 84, handles: 74, passing: 68, defense: 82, rebounding: 66, athleticism: 86, iq: 78 }),
      player("Tim Hardaway Jr.", 6, 5, 10, { height: 80, shooting: 82, finishing: 78, handles: 74, passing: 66, defense: 66, rebounding: 54, athleticism: 78, iq: 78 }),
      player("Isaiah Stewart", 6, 8, 28, { height: 86, shooting: 70, finishing: 80, handles: 60, passing: 64, defense: 84, rebounding: 82, athleticism: 80, iq: 72 }),
      player("Bojan Bogdanovic", 6, 7, 44, { height: 84, shooting: 86, finishing: 80, handles: 74, passing: 68, defense: 64, rebounding: 60, athleticism: 70, iq: 82 }),
      player("Dennis Schroder", 6, 1, 17, { height: 68, shooting: 76, finishing: 80, handles: 86, passing: 82, defense: 74, rebounding: 54, athleticism: 82, iq: 78 }),
      player("Saddiq Bey", 6, 7, 41, { height: 84, shooting: 80, finishing: 78, handles: 72, passing: 66, defense: 74, rebounding: 70, athleticism: 80, iq: 76 }),
      player("Killian Hayes", 6, 5, 7, { height: 80, shooting: 66, finishing: 76, handles: 84, passing: 82, defense: 80, rebounding: 58, athleticism: 80, iq: 70 }),
      player("Marvin Bagley III", 6, 11, 35, { height: 96, shooting: 64, finishing: 84, handles: 66, passing: 62, defense: 66, rebounding: 80, athleticism: 86, iq: 70 }),
      player("Hamidou Diallo", 6, 5, 6, { height: 80, shooting: 66, finishing: 82, handles: 74, passing: 66, defense: 78, rebounding: 62, athleticism: 94, iq: 70 }),
    ],
  },
  {
    era: "1970s",
    team: "Bulls",
    note: "Dick Motta's bruising, defense-first Bulls — Sloan and Van Lier hounding the ball, Love and Walker scoring.",
    players: [
      player("Bob Love", 6, 8, 10, { height: 86, shooting: 82, finishing: 86, handles: 74, passing: 68, defense: 82, rebounding: 74, athleticism: 82, iq: 82 }),
      player("Chet Walker", 6, 6, 25, { height: 82, shooting: 84, finishing: 86, handles: 80, passing: 76, defense: 78, rebounding: 74, athleticism: 80, iq: 86 }),
      player("Jerry Sloan", 6, 5, 4, { height: 80, shooting: 74, finishing: 78, handles: 76, passing: 74, defense: 94, rebounding: 70, athleticism: 82, iq: 80 }),
      player("Norm Van Lier", 6, 1, 2, { height: 68, shooting: 72, finishing: 76, handles: 84, passing: 86, defense: 94, rebounding: 58, athleticism: 84, iq: 80 }),
      player("Artis Gilmore", 7, 2, 53, { height: 100, shooting: 62, finishing: 88, handles: 58, passing: 66, defense: 88, rebounding: 90, athleticism: 78, iq: 80 }),
      player("Tom Boerwinkle", 7, 0, 14, { height: 98, shooting: 62, finishing: 78, handles: 60, passing: 84, defense: 80, rebounding: 84, athleticism: 60, iq: 72 }),
      player("Bob Weiss", 6, 2, 20, { height: 71, shooting: 78, finishing: 78, handles: 84, passing: 82, defense: 80, rebounding: 56, athleticism: 78, iq: 78 }),
      player("Mickey Johnson", 6, 10, 25, { height: 94, shooting: 74, finishing: 80, handles: 74, passing: 78, defense: 78, rebounding: 80, athleticism: 80, iq: 74 }),
      player("Clifford Ray", 6, 9, 44, { height: 90, shooting: 54, finishing: 78, handles: 58, passing: 66, defense: 84, rebounding: 82, athleticism: 82, iq: 72 }),
      player("Wilbur Holland", 6, 1, 23, { height: 68, shooting: 78, finishing: 78, handles: 82, passing: 78, defense: 78, rebounding: 54, athleticism: 80, iq: 76 }),
      player("Garfield Heard", 6, 6, 24, { height: 82, shooting: 72, finishing: 78, handles: 68, passing: 70, defense: 84, rebounding: 80, athleticism: 84, iq: 76 }),
      player("Howard Porter", 6, 8, 12, { height: 86, shooting: 74, finishing: 80, handles: 66, passing: 66, defense: 74, rebounding: 76, athleticism: 80, iq: 72 }),
      player("John Mengelt", 6, 1, 44, { height: 68, shooting: 80, finishing: 78, handles: 78, passing: 72, defense: 74, rebounding: 52, athleticism: 78, iq: 78 }),
      player("Scott May", 6, 7, 43, { height: 84, shooting: 76, finishing: 78, handles: 72, passing: 70, defense: 72, rebounding: 66, athleticism: 78, iq: 74 }),
      player("Rowland Garrett", 6, 7, 30, { height: 84, shooting: 72, finishing: 78, handles: 68, passing: 66, defense: 74, rebounding: 68, athleticism: 80, iq: 72 }),
    ],
  },
  {
    era: "1970s",
    team: "Kings",
    note: "The Kansas City-Omaha Kings ran on Tiny Archibald, who in 1973 led the league in scoring AND assists in the same season.",
    players: [
      player("Nate Archibald", 6, 1, 1, { height: 68, shooting: 82, finishing: 88, handles: 96, passing: 94, defense: 70, rebounding: 50, athleticism: 88, iq: 86 }),
      player("Sam Lacey", 6, 10, 44, { height: 94, shooting: 68, finishing: 78, handles: 64, passing: 78, defense: 84, rebounding: 84, athleticism: 78, iq: 74 }),
      player("Scott Wedman", 6, 7, 8, { height: 84, shooting: 84, finishing: 80, handles: 72, passing: 72, defense: 76, rebounding: 68, athleticism: 74, iq: 80 }),
      player("Jimmy Walker", 6, 3, 24, { height: 74, shooting: 82, finishing: 82, handles: 84, passing: 80, defense: 72, rebounding: 56, athleticism: 80, iq: 80 }),
      player("Tom Van Arsdale", 6, 5, 5, { height: 80, shooting: 80, finishing: 82, handles: 78, passing: 74, defense: 80, rebounding: 70, athleticism: 84, iq: 80 }),
      player("Nate Williams", 6, 5, 20, { height: 80, shooting: 78, finishing: 82, handles: 74, passing: 68, defense: 78, rebounding: 66, athleticism: 84, iq: 74 }),
      player("Ron Behagen", 6, 9, 34, { height: 90, shooting: 70, finishing: 80, handles: 66, passing: 66, defense: 74, rebounding: 78, athleticism: 80, iq: 72 }),
      player("Don Kojis", 6, 5, 21, { height: 80, shooting: 78, finishing: 80, handles: 72, passing: 70, defense: 76, rebounding: 68, athleticism: 82, iq: 76 }),
      player("Matt Guokas", 6, 5, 14, { height: 80, shooting: 74, finishing: 76, handles: 80, passing: 80, defense: 78, rebounding: 60, athleticism: 78, iq: 74 }),
      player("Mike D'Antoni", 6, 3, 11, { height: 74, shooting: 78, finishing: 78, handles: 84, passing: 82, defense: 76, rebounding: 54, athleticism: 80, iq: 78 }),
      player("Larry McNeill", 6, 9, 21, { height: 90, shooting: 72, finishing: 80, handles: 64, passing: 64, defense: 72, rebounding: 74, athleticism: 78, iq: 72 }),
      player("Otto Moore", 6, 11, 34, { height: 96, shooting: 60, finishing: 76, handles: 56, passing: 62, defense: 78, rebounding: 78, athleticism: 74, iq: 70 }),
      player("Jim Fox", 6, 10, 14, { height: 94, shooting: 70, finishing: 78, handles: 60, passing: 70, defense: 78, rebounding: 80, athleticism: 72, iq: 72 }),
      player("Bill Robinzine", 6, 7, 31, { height: 84, shooting: 70, finishing: 80, handles: 66, passing: 66, defense: 78, rebounding: 78, athleticism: 80, iq: 72 }),
      player("Richard Washington", 6, 10, 31, { height: 94, shooting: 74, finishing: 80, handles: 64, passing: 66, defense: 74, rebounding: 78, athleticism: 78, iq: 72 }),
    ],
  },
  {
    era: "1970s",
    team: "Cavaliers",
    note: "The 'Miracle of Richfield' 1976 team — Bingo Smith, Jim Chones, and Austin Carr, with Dick Snyder's series-winning shot.",
    players: [
      player("Austin Carr", 6, 4, 34, { height: 77, shooting: 84, finishing: 86, handles: 82, passing: 74, defense: 74, rebounding: 60, athleticism: 84, iq: 84 }),
      player("Jim Chones", 6, 11, 25, { height: 96, shooting: 72, finishing: 82, handles: 64, passing: 68, defense: 80, rebounding: 84, athleticism: 78, iq: 78 }),
      player("Bingo Smith", 6, 5, 7, { height: 80, shooting: 82, finishing: 80, handles: 74, passing: 70, defense: 74, rebounding: 66, athleticism: 80, iq: 80 }),
      player("Campy Russell", 6, 8, 21, { height: 86, shooting: 80, finishing: 84, handles: 78, passing: 74, defense: 74, rebounding: 74, athleticism: 82, iq: 80 }),
      player("Nate Thurmond", 6, 11, 42, { height: 96, shooting: 62, finishing: 80, handles: 58, passing: 70, defense: 92, rebounding: 90, athleticism: 78, iq: 80 }),
      player("Dick Snyder", 6, 5, 14, { height: 80, shooting: 82, finishing: 80, handles: 78, passing: 76, defense: 78, rebounding: 62, athleticism: 78, iq: 84 }),
      player("Jim Cleamons", 6, 3, 15, { height: 74, shooting: 76, finishing: 78, handles: 84, passing: 84, defense: 84, rebounding: 58, athleticism: 80, iq: 78 }),
      player("Foots Walker", 6, 1, 11, { height: 68, shooting: 72, finishing: 76, handles: 86, passing: 86, defense: 82, rebounding: 54, athleticism: 80, iq: 76 }),
      player("Lenny Wilkens", 6, 1, 19, { height: 68, shooting: 76, finishing: 80, handles: 88, passing: 90, defense: 82, rebounding: 60, athleticism: 78, iq: 92 }),
      player("Jim Brewer", 6, 9, 52, { height: 90, shooting: 58, finishing: 76, handles: 62, passing: 68, defense: 84, rebounding: 82, athleticism: 82, iq: 70 }),
      player("Walt Frazier", 6, 4, 10, { height: 77, shooting: 78, finishing: 80, handles: 84, passing: 84, defense: 84, rebounding: 62, athleticism: 78, iq: 82 }),
      player("John Johnson", 6, 7, 27, { height: 84, shooting: 78, finishing: 80, handles: 80, passing: 82, defense: 78, rebounding: 70, athleticism: 80, iq: 78 }),
      player("Butch Beard", 6, 3, 22, { height: 74, shooting: 78, finishing: 78, handles: 82, passing: 80, defense: 78, rebounding: 60, athleticism: 80, iq: 78 }),
      player("Elmore Smith", 7, 0, 42, { height: 98, shooting: 58, finishing: 78, handles: 54, passing: 62, defense: 86, rebounding: 84, athleticism: 78, iq: 70 }),
      player("Rick Roberson", 6, 9, 54, { height: 90, shooting: 62, finishing: 78, handles: 60, passing: 64, defense: 78, rebounding: 82, athleticism: 78, iq: 70 }),
    ],
  },
  {
    era: "1980s",
    team: "Knicks",
    note: "Bernard King's scoring explosion gave way to a young Patrick Ewing — a bridge from the early '80s to the Garden's revival.",
    players: [
      player("Bernard King", 6, 7, 30, { height: 84, shooting: 86, finishing: 94, handles: 82, passing: 72, defense: 72, rebounding: 70, athleticism: 90, iq: 82 }),
      player("Patrick Ewing", 7, 0, 33, { height: 98, shooting: 74, finishing: 88, handles: 64, passing: 66, defense: 90, rebounding: 86, athleticism: 84, iq: 82 }),
      player("Bill Cartwright", 7, 1, 25, { height: 100, shooting: 74, finishing: 84, handles: 60, passing: 68, defense: 80, rebounding: 82, athleticism: 68, iq: 80 }),
      player("Micheal Ray Richardson", 6, 5, 20, { height: 80, shooting: 74, finishing: 82, handles: 88, passing: 88, defense: 88, rebounding: 66, athleticism: 86, iq: 78 }),
      player("Mark Jackson", 6, 3, 13, { height: 74, shooting: 74, finishing: 80, handles: 88, passing: 90, defense: 74, rebounding: 62, athleticism: 78, iq: 88 }),
      player("Ray Williams", 6, 3, 20, { height: 74, shooting: 78, finishing: 82, handles: 84, passing: 80, defense: 78, rebounding: 62, athleticism: 84, iq: 80 }),
      player("Gerald Wilkins", 6, 6, 21, { height: 82, shooting: 78, finishing: 84, handles: 80, passing: 72, defense: 78, rebounding: 62, athleticism: 88, iq: 78 }),
      player("Truck Robinson", 6, 11, 20, { height: 96, shooting: 68, finishing: 82, handles: 62, passing: 66, defense: 80, rebounding: 88, athleticism: 80, iq: 76 }),
      player("Rory Sparrow", 6, 2, 2, { height: 71, shooting: 78, finishing: 78, handles: 84, passing: 84, defense: 80, rebounding: 54, athleticism: 80, iq: 78 }),
      player("Trent Tucker", 6, 5, 6, { height: 80, shooting: 86, finishing: 76, handles: 74, passing: 70, defense: 74, rebounding: 58, athleticism: 78, iq: 80 }),
      player("Louis Orr", 6, 8, 55, { height: 86, shooting: 74, finishing: 78, handles: 70, passing: 70, defense: 78, rebounding: 68, athleticism: 78, iq: 74 }),
      player("Rod Strickland", 6, 3, 2, { height: 74, shooting: 74, finishing: 84, handles: 90, passing: 90, defense: 76, rebounding: 58, athleticism: 86, iq: 80 }),
      player("Sly Williams", 6, 7, 21, { height: 84, shooting: 76, finishing: 82, handles: 74, passing: 70, defense: 76, rebounding: 70, athleticism: 82, iq: 74 }),
      player("Johnny Newman", 6, 7, 25, { height: 84, shooting: 80, finishing: 82, handles: 74, passing: 68, defense: 76, rebounding: 60, athleticism: 84, iq: 78 }),
      player("Ken Bannister", 6, 9, 20, { height: 90, shooting: 62, finishing: 78, handles: 60, passing: 62, defense: 76, rebounding: 78, athleticism: 78, iq: 70 }),
    ],
  },
  {
    era: "1980s",
    team: "Nets",
    note: "Buck Williams' rebounding and Otis Birdsong's scoring fueled a gritty Jersey team that stunned the defending-champ 76ers in 1984.",
    players: [
      player("Buck Williams", 6, 8, 52, { height: 86, shooting: 66, finishing: 84, handles: 64, passing: 68, defense: 86, rebounding: 90, athleticism: 86, iq: 78 }),
      player("Otis Birdsong", 6, 4, 10, { height: 77, shooting: 84, finishing: 84, handles: 80, passing: 74, defense: 74, rebounding: 58, athleticism: 84, iq: 82 }),
      player("Micheal Ray Richardson", 6, 5, 20, { height: 80, shooting: 74, finishing: 82, handles: 88, passing: 88, defense: 90, rebounding: 66, athleticism: 86, iq: 80 }),
      player("Albert King", 6, 6, 30, { height: 82, shooting: 80, finishing: 84, handles: 78, passing: 74, defense: 74, rebounding: 68, athleticism: 84, iq: 78 }),
      player("Darryl Dawkins", 6, 11, 53, { height: 96, shooting: 68, finishing: 86, handles: 62, passing: 64, defense: 80, rebounding: 80, athleticism: 88, iq: 76 }),
      player("Mike Gminski", 6, 11, 43, { height: 96, shooting: 78, finishing: 80, handles: 60, passing: 66, defense: 78, rebounding: 82, athleticism: 70, iq: 76 }),
      player("Darwin Cook", 6, 3, 11, { height: 74, shooting: 74, finishing: 78, handles: 82, passing: 80, defense: 86, rebounding: 58, athleticism: 82, iq: 76 }),
      player("Ray Williams", 6, 3, 12, { height: 74, shooting: 78, finishing: 82, handles: 84, passing: 80, defense: 78, rebounding: 62, athleticism: 84, iq: 80 }),
      player("Kelvin Ransey", 6, 1, 14, { height: 68, shooting: 78, finishing: 78, handles: 84, passing: 82, defense: 72, rebounding: 52, athleticism: 80, iq: 76 }),
      player("Mike O'Koren", 6, 7, 31, { height: 84, shooting: 72, finishing: 78, handles: 74, passing: 74, defense: 76, rebounding: 66, athleticism: 78, iq: 74 }),
      player("Len Elmore", 6, 9, 41, { height: 90, shooting: 62, finishing: 76, handles: 60, passing: 66, defense: 80, rebounding: 78, athleticism: 74, iq: 70 }),
      player("Foots Walker", 6, 1, 11, { height: 68, shooting: 70, finishing: 74, handles: 84, passing: 84, defense: 80, rebounding: 54, athleticism: 78, iq: 74 }),
      player("Roy Hinson", 6, 9, 33, { height: 90, shooting: 68, finishing: 82, handles: 62, passing: 64, defense: 80, rebounding: 78, athleticism: 82, iq: 72 }),
      player("Dudley Bradley", 6, 6, 11, { height: 82, shooting: 70, finishing: 76, handles: 74, passing: 70, defense: 88, rebounding: 60, athleticism: 86, iq: 70 }),
      player("Sam Bowie", 7, 1, 31, { height: 100, shooting: 70, finishing: 80, handles: 62, passing: 74, defense: 82, rebounding: 80, athleticism: 72, iq: 72 }),
    ],
  },
  {
    era: "1980s",
    team: "Warriors",
    note: "A run-and-gun outpost — Purvis Short's rainbow jumper, World B. Free's buckets, Sleepy Floyd's 51-point playoff explosion, and a young Chris Mullin.",
    players: [
      player("Chris Mullin", 6, 7, 17, { height: 84, shooting: 92, finishing: 82, handles: 82, passing: 82, defense: 72, rebounding: 62, athleticism: 74, iq: 84 }),
      player("Purvis Short", 6, 7, 25, { height: 84, shooting: 84, finishing: 86, handles: 80, passing: 72, defense: 70, rebounding: 66, athleticism: 82, iq: 84 }),
      player("Sleepy Floyd", 6, 3, 21, { height: 74, shooting: 82, finishing: 84, handles: 88, passing: 86, defense: 78, rebounding: 56, athleticism: 84, iq: 86 }),
      player("World B. Free", 6, 2, 21, { height: 71, shooting: 84, finishing: 86, handles: 86, passing: 74, defense: 68, rebounding: 54, athleticism: 84, iq: 84 }),
      player("Bernard King", 6, 7, 30, { height: 84, shooting: 84, finishing: 94, handles: 80, passing: 72, defense: 70, rebounding: 70, athleticism: 90, iq: 82 }),
      player("Joe Barry Carroll", 7, 0, 2, { height: 98, shooting: 74, finishing: 84, handles: 64, passing: 66, defense: 78, rebounding: 80, athleticism: 74, iq: 76 }),
      player("Larry Smith", 6, 8, 13, { height: 86, shooting: 54, finishing: 78, handles: 58, passing: 62, defense: 82, rebounding: 88, athleticism: 84, iq: 70 }),
      player("Ralph Sampson", 7, 4, 50, { height: 100, shooting: 74, finishing: 80, handles: 70, passing: 72, defense: 80, rebounding: 80, athleticism: 74, iq: 72 }),
      player("Terry Teagle", 6, 5, 23, { height: 80, shooting: 82, finishing: 82, handles: 78, passing: 68, defense: 70, rebounding: 58, athleticism: 82, iq: 80 }),
      player("Rod Higgins", 6, 7, 54, { height: 84, shooting: 80, finishing: 80, handles: 72, passing: 70, defense: 74, rebounding: 64, athleticism: 80, iq: 76 }),
      player("Lester Conner", 6, 4, 20, { height: 77, shooting: 72, finishing: 78, handles: 84, passing: 82, defense: 84, rebounding: 58, athleticism: 82, iq: 74 }),
      player("Mickey Johnson", 6, 10, 20, { height: 94, shooting: 74, finishing: 80, handles: 74, passing: 78, defense: 78, rebounding: 80, athleticism: 80, iq: 74 }),
      player("Lewis Lloyd", 6, 6, 32, { height: 82, shooting: 80, finishing: 84, handles: 82, passing: 78, defense: 74, rebounding: 70, athleticism: 84, iq: 78 }),
      player("Manute Bol", 7, 7, 10, { height: 100, shooting: 50, finishing: 70, handles: 44, passing: 54, defense: 90, rebounding: 78, athleticism: 62, iq: 62 }),
      player("Chris Washburn", 6, 11, 20, { height: 96, shooting: 64, finishing: 78, handles: 58, passing: 60, defense: 70, rebounding: 74, athleticism: 80, iq: 64 }),
    ],
  },
  {
    era: "1990s",
    team: "Warriors",
    note: "Run TMC — Tim Hardaway, Mitch Richmond, and Chris Mullin firing up Don Nelson's track-meet offense, later sparked by Latrell Sprewell.",
    players: [
      player("Tim Hardaway", 6, 0, 10, { height: 66, shooting: 82, finishing: 84, handles: 96, passing: 90, defense: 78, rebounding: 52, athleticism: 88, iq: 86 }),
      player("Chris Mullin", 6, 7, 17, { height: 84, shooting: 92, finishing: 84, handles: 82, passing: 82, defense: 74, rebounding: 64, athleticism: 74, iq: 86 }),
      player("Mitch Richmond", 6, 5, 23, { height: 80, shooting: 90, finishing: 86, handles: 82, passing: 74, defense: 82, rebounding: 64, athleticism: 86, iq: 84 }),
      player("Latrell Sprewell", 6, 5, 15, { height: 80, shooting: 80, finishing: 86, handles: 80, passing: 78, defense: 85, rebounding: 62, athleticism: 84, iq: 78 }),
      player("Chris Webber", 6, 10, 4, { height: 94, shooting: 78, finishing: 88, handles: 82, passing: 84, defense: 80, rebounding: 88, athleticism: 88, iq: 78 }),
      player("Sarunas Marciulionis", 6, 5, 13, { height: 80, shooting: 80, finishing: 84, handles: 82, passing: 74, defense: 70, rebounding: 54, athleticism: 82, iq: 80 }),
      player("Billy Owens", 6, 9, 30, { height: 90, shooting: 74, finishing: 84, handles: 80, passing: 80, defense: 74, rebounding: 76, athleticism: 82, iq: 76 }),
      player("Chris Gatling", 6, 10, 0, { height: 94, shooting: 70, finishing: 84, handles: 64, passing: 62, defense: 74, rebounding: 80, athleticism: 84, iq: 72 }),
      player("Tyrone Hill", 6, 9, 4, { height: 90, shooting: 60, finishing: 78, handles: 60, passing: 64, defense: 80, rebounding: 88, athleticism: 84, iq: 72 }),
      player("Joe Smith", 6, 10, 32, { height: 94, shooting: 74, finishing: 82, handles: 68, passing: 66, defense: 76, rebounding: 80, athleticism: 84, iq: 74 }),
      player("Donyell Marshall", 6, 9, 42, { height: 90, shooting: 80, finishing: 80, handles: 70, passing: 68, defense: 74, rebounding: 80, athleticism: 80, iq: 74 }),
      player("Chris Mills", 6, 7, 20, { height: 84, shooting: 80, finishing: 80, handles: 74, passing: 72, defense: 78, rebounding: 68, athleticism: 80, iq: 76 }),
      player("Rony Seikaly", 6, 11, 4, { height: 96, shooting: 68, finishing: 84, handles: 62, passing: 66, defense: 78, rebounding: 84, athleticism: 80, iq: 74 }),
      player("Bimbo Coles", 6, 2, 12, { height: 71, shooting: 78, finishing: 78, handles: 84, passing: 82, defense: 80, rebounding: 54, athleticism: 80, iq: 78 }),
      player("Mario Elie", 6, 5, 17, { height: 80, shooting: 80, finishing: 78, handles: 74, passing: 74, defense: 82, rebounding: 60, athleticism: 78, iq: 82 }),
    ],
  },
  {
    era: "1990s",
    team: "Nuggets",
    note: "Dikembe Mutombo's wagging finger and Mahmoud Abdul-Rauf's shotmaking — the 1994 Nuggets were the first 8-seed to topple a 1-seed.",
    players: [
      player("Dikembe Mutombo", 7, 2, 55, { height: 100, shooting: 54, finishing: 80, handles: 54, passing: 62, defense: 96, rebounding: 94, athleticism: 84, iq: 76 }),
      player("Mahmoud Abdul-Rauf", 6, 1, 1, { height: 68, shooting: 90, finishing: 84, handles: 90, passing: 80, defense: 66, rebounding: 50, athleticism: 84, iq: 84 }),
      player("Antonio McDyess", 6, 9, 24, { height: 90, shooting: 74, finishing: 86, handles: 66, passing: 68, defense: 80, rebounding: 84, athleticism: 90, iq: 76 }),
      player("LaPhonso Ellis", 6, 8, 20, { height: 86, shooting: 74, finishing: 84, handles: 70, passing: 70, defense: 78, rebounding: 82, athleticism: 84, iq: 76 }),
      player("Nick Van Exel", 6, 1, 9, { height: 68, shooting: 82, finishing: 80, handles: 90, passing: 86, defense: 70, rebounding: 54, athleticism: 80, iq: 84 }),
      player("Reggie Williams", 6, 7, 34, { height: 84, shooting: 82, finishing: 82, handles: 78, passing: 72, defense: 74, rebounding: 66, athleticism: 82, iq: 78 }),
      player("Bryant Stith", 6, 5, 20, { height: 80, shooting: 78, finishing: 80, handles: 76, passing: 72, defense: 84, rebounding: 64, athleticism: 80, iq: 78 }),
      player("Robert Pack", 6, 2, 3, { height: 71, shooting: 74, finishing: 82, handles: 88, passing: 84, defense: 72, rebounding: 54, athleticism: 86, iq: 78 }),
      player("Jalen Rose", 6, 8, 5, { height: 86, shooting: 76, finishing: 82, handles: 84, passing: 82, defense: 70, rebounding: 64, athleticism: 80, iq: 78 }),
      player("Brian Williams", 6, 11, 0, { height: 96, shooting: 68, finishing: 82, handles: 62, passing: 66, defense: 78, rebounding: 80, athleticism: 82, iq: 72 }),
      player("Rodney Rogers", 6, 7, 54, { height: 84, shooting: 80, finishing: 82, handles: 74, passing: 72, defense: 74, rebounding: 68, athleticism: 80, iq: 78 }),
      player("Dale Ellis", 6, 7, 3, { height: 84, shooting: 84, finishing: 82, handles: 76, passing: 70, defense: 70, rebounding: 64, athleticism: 78, iq: 80 }),
      player("Mark Jackson", 6, 3, 13, { height: 74, shooting: 72, finishing: 78, handles: 88, passing: 92, defense: 72, rebounding: 64, athleticism: 72, iq: 88 }),
      player("Tom Hammonds", 6, 9, 20, { height: 90, shooting: 70, finishing: 80, handles: 64, passing: 64, defense: 74, rebounding: 74, athleticism: 84, iq: 72 }),
      player("Marcus Liberty", 6, 8, 34, { height: 86, shooting: 74, finishing: 80, handles: 74, passing: 68, defense: 72, rebounding: 66, athleticism: 82, iq: 72 }),
    ],
  },
  {
    era: "1990s",
    team: "Timberwolves",
    note: "Early Minnesota grew up fast — Tony Campbell's scoring, then a young Kevin Garnett and Stephon Marbury powering the franchise's first playoff runs.",
    players: [
      player("Kevin Garnett", 6, 11, 21, { height: 96, shooting: 78, finishing: 84, handles: 78, passing: 82, defense: 90, rebounding: 86, athleticism: 90, iq: 94 }),
      player("Stephon Marbury", 6, 2, 3, { height: 71, shooting: 80, finishing: 84, handles: 92, passing: 90, defense: 68, rebounding: 56, athleticism: 88, iq: 80 }),
      player("Tom Gugliotta", 6, 10, 24, { height: 94, shooting: 78, finishing: 84, handles: 76, passing: 78, defense: 74, rebounding: 82, athleticism: 80, iq: 78 }),
      player("Wally Szczerbiak", 6, 7, 10, { height: 84, shooting: 84, finishing: 80, handles: 74, passing: 70, defense: 68, rebounding: 64, athleticism: 74, iq: 80 }),
      player("Isaiah Rider", 6, 5, 34, { height: 80, shooting: 84, finishing: 86, handles: 82, passing: 74, defense: 70, rebounding: 64, athleticism: 88, iq: 80 }),
      player("Christian Laettner", 6, 11, 32, { height: 96, shooting: 80, finishing: 84, handles: 74, passing: 76, defense: 74, rebounding: 82, athleticism: 74, iq: 80 }),
      player("Terry Porter", 6, 3, 30, { height: 74, shooting: 82, finishing: 78, handles: 84, passing: 86, defense: 76, rebounding: 58, athleticism: 74, iq: 84 }),
      player("Doug West", 6, 6, 20, { height: 82, shooting: 80, finishing: 80, handles: 74, passing: 72, defense: 80, rebounding: 60, athleticism: 82, iq: 76 }),
      player("Tony Campbell", 6, 7, 33, { height: 84, shooting: 80, finishing: 82, handles: 76, passing: 68, defense: 70, rebounding: 64, athleticism: 80, iq: 78 }),
      player("Pooh Richardson", 6, 1, 25, { height: 68, shooting: 74, finishing: 78, handles: 86, passing: 86, defense: 78, rebounding: 54, athleticism: 82, iq: 76 }),
      player("Sam Mitchell", 6, 7, 24, { height: 84, shooting: 76, finishing: 80, handles: 72, passing: 70, defense: 80, rebounding: 68, athleticism: 78, iq: 76 }),
      player("Anthony Peeler", 6, 4, 14, { height: 77, shooting: 84, finishing: 78, handles: 78, passing: 72, defense: 78, rebounding: 58, athleticism: 78, iq: 80 }),
      player("Malik Sealy", 6, 8, 2, { height: 86, shooting: 80, finishing: 82, handles: 78, passing: 72, defense: 78, rebounding: 64, athleticism: 84, iq: 78 }),
      player("Dean Garrett", 6, 10, 52, { height: 94, shooting: 60, finishing: 78, handles: 56, passing: 62, defense: 82, rebounding: 80, athleticism: 78, iq: 70 }),
      player("Felton Spencer", 7, 0, 50, { height: 98, shooting: 56, finishing: 78, handles: 54, passing: 58, defense: 80, rebounding: 80, athleticism: 72, iq: 68 }),
    ],
  },
  {
    era: "2000s",
    team: "Bucks",
    note: "The 'Big Three' of Allen, Robinson, and Cassell pushed the 2001 Bucks within a game of the Finals; Michael Redd later kept the scoring alive.",
    players: [
      player("Ray Allen", 6, 5, 34, { height: 80, shooting: 95, finishing: 84, handles: 82, passing: 78, defense: 76, rebounding: 62, athleticism: 86, iq: 88 }),
      player("Michael Redd", 6, 6, 22, { height: 82, shooting: 90, finishing: 84, handles: 80, passing: 70, defense: 66, rebounding: 60, athleticism: 80, iq: 84 }),
      player("Sam Cassell", 6, 3, 19, { height: 74, shooting: 82, finishing: 84, handles: 84, passing: 80, defense: 72, rebounding: 58, athleticism: 78, iq: 88 }),
      player("Glenn Robinson", 6, 7, 13, { height: 84, shooting: 84, finishing: 88, handles: 80, passing: 74, defense: 70, rebounding: 72, athleticism: 80, iq: 84 }),
      player("Andrew Bogut", 7, 0, 6, { height: 98, shooting: 60, finishing: 84, handles: 62, passing: 78, defense: 84, rebounding: 84, athleticism: 74, iq: 74 }),
      player("Tim Thomas", 6, 10, 25, { height: 94, shooting: 82, finishing: 82, handles: 76, passing: 70, defense: 68, rebounding: 68, athleticism: 80, iq: 76 }),
      player("Mo Williams", 6, 1, 25, { height: 68, shooting: 84, finishing: 80, handles: 86, passing: 82, defense: 70, rebounding: 54, athleticism: 80, iq: 82 }),
      player("Desmond Mason", 6, 5, 24, { height: 80, shooting: 74, finishing: 84, handles: 74, passing: 66, defense: 80, rebounding: 64, athleticism: 92, iq: 74 }),
      player("Toni Kukoc", 6, 10, 7, { height: 90, shooting: 82, finishing: 80, handles: 82, passing: 86, defense: 70, rebounding: 72, athleticism: 70, iq: 80 }),
      player("Ervin Johnson", 6, 11, 45, { height: 96, shooting: 50, finishing: 76, handles: 54, passing: 62, defense: 84, rebounding: 84, athleticism: 78, iq: 68 }),
      player("T.J. Ford", 6, 0, 5, { height: 66, shooting: 74, finishing: 80, handles: 90, passing: 88, defense: 72, rebounding: 50, athleticism: 90, iq: 78 }),
      player("Charlie Bell", 6, 3, 4, { height: 74, shooting: 78, finishing: 78, handles: 80, passing: 74, defense: 80, rebounding: 56, athleticism: 80, iq: 76 }),
      player("Dan Gadzuric", 6, 11, 50, { height: 96, shooting: 54, finishing: 80, handles: 54, passing: 58, defense: 78, rebounding: 80, athleticism: 82, iq: 68 }),
      player("Bobby Simmons", 6, 7, 44, { height: 84, shooting: 78, finishing: 80, handles: 74, passing: 70, defense: 78, rebounding: 66, athleticism: 78, iq: 74 }),
      player("Richard Jefferson", 6, 7, 24, { height: 84, shooting: 80, finishing: 84, handles: 76, passing: 72, defense: 74, rebounding: 62, athleticism: 84, iq: 78 }),
    ],
  },
  {
    era: "2000s",
    team: "Jazz",
    note: "Stockton and Malone's final act handed off to the Deron Williams–Carlos Boozer pick-and-roll, with Andrei Kirilenko stuffing every column.",
    players: [
      player("Karl Malone", 6, 9, 32, { height: 90, shooting: 78, finishing: 90, handles: 74, passing: 78, defense: 82, rebounding: 86, athleticism: 84, iq: 84 }),
      player("John Stockton", 6, 1, 12, { height: 68, shooting: 82, finishing: 80, handles: 90, passing: 96, defense: 84, rebounding: 54, athleticism: 76, iq: 97 }),
      player("Deron Williams", 6, 3, 8, { height: 74, shooting: 80, finishing: 84, handles: 92, passing: 92, defense: 74, rebounding: 58, athleticism: 82, iq: 84 }),
      player("Carlos Boozer", 6, 9, 5, { height: 90, shooting: 76, finishing: 88, handles: 68, passing: 72, defense: 72, rebounding: 86, athleticism: 80, iq: 80 }),
      player("Andrei Kirilenko", 6, 9, 47, { height: 90, shooting: 72, finishing: 82, handles: 74, passing: 80, defense: 92, rebounding: 76, athleticism: 88, iq: 76 }),
      player("Mehmet Okur", 6, 11, 13, { height: 96, shooting: 84, finishing: 80, handles: 64, passing: 70, defense: 68, rebounding: 82, athleticism: 64, iq: 80 }),
      player("Matt Harpring", 6, 7, 15, { height: 84, shooting: 80, finishing: 84, handles: 72, passing: 68, defense: 80, rebounding: 72, athleticism: 78, iq: 78 }),
      player("Paul Millsap", 6, 8, 24, { height: 86, shooting: 70, finishing: 84, handles: 70, passing: 70, defense: 84, rebounding: 84, athleticism: 80, iq: 78 }),
      player("Bryon Russell", 6, 7, 3, { height: 84, shooting: 78, finishing: 78, handles: 74, passing: 70, defense: 84, rebounding: 64, athleticism: 82, iq: 78 }),
      player("Ronnie Brewer", 6, 7, 9, { height: 84, shooting: 70, finishing: 82, handles: 74, passing: 70, defense: 84, rebounding: 62, athleticism: 86, iq: 74 }),
      player("Donyell Marshall", 6, 9, 4, { height: 90, shooting: 80, finishing: 80, handles: 70, passing: 68, defense: 74, rebounding: 80, athleticism: 78, iq: 74 }),
      player("C.J. Miles", 6, 6, 34, { height: 82, shooting: 78, finishing: 80, handles: 72, passing: 66, defense: 74, rebounding: 58, athleticism: 82, iq: 74 }),
      player("Greg Ostertag", 7, 2, 0, { height: 100, shooting: 50, finishing: 74, handles: 50, passing: 58, defense: 82, rebounding: 80, athleticism: 62, iq: 66 }),
      player("Kyle Korver", 6, 7, 26, { height: 84, shooting: 90, finishing: 72, handles: 70, passing: 70, defense: 70, rebounding: 56, athleticism: 68, iq: 80 }),
      player("DeShawn Stevenson", 6, 5, 2, { height: 80, shooting: 74, finishing: 78, handles: 74, passing: 66, defense: 78, rebounding: 58, athleticism: 80, iq: 74 }),
    ],
  },
  {
    era: "2000s",
    team: "Wizards",
    note: "Michael Jordan's two-year Washington comeback, then Gilbert Arenas' fearless 'Agent Zero' game-winners alongside Jamison and Butler.",
    players: [
      player("Gilbert Arenas", 6, 4, 0, { height: 77, shooting: 90, finishing: 88, handles: 92, passing: 82, defense: 68, rebounding: 58, athleticism: 88, iq: 82 }),
      player("Michael Jordan", 6, 6, 23, { height: 82, shooting: 82, finishing: 84, handles: 84, passing: 80, defense: 80, rebounding: 66, athleticism: 74, iq: 95 }),
      player("Antawn Jamison", 6, 9, 4, { height: 90, shooting: 82, finishing: 86, handles: 76, passing: 70, defense: 68, rebounding: 82, athleticism: 80, iq: 82 }),
      player("Caron Butler", 6, 7, 3, { height: 84, shooting: 80, finishing: 84, handles: 80, passing: 74, defense: 80, rebounding: 68, athleticism: 82, iq: 82 }),
      player("Richard Hamilton", 6, 7, 32, { height: 84, shooting: 84, finishing: 84, handles: 80, passing: 74, defense: 74, rebounding: 60, athleticism: 84, iq: 82 }),
      player("Larry Hughes", 6, 5, 32, { height: 80, shooting: 76, finishing: 84, handles: 84, passing: 76, defense: 86, rebounding: 64, athleticism: 88, iq: 78 }),
      player("Brendan Haywood", 7, 0, 33, { height: 98, shooting: 54, finishing: 80, handles: 54, passing: 60, defense: 80, rebounding: 82, athleticism: 74, iq: 70 }),
      player("Antonio Daniels", 6, 4, 6, { height: 77, shooting: 76, finishing: 80, handles: 84, passing: 82, defense: 76, rebounding: 56, athleticism: 80, iq: 78 }),
      player("Jared Jeffries", 6, 11, 20, { height: 96, shooting: 64, finishing: 76, handles: 68, passing: 72, defense: 82, rebounding: 74, athleticism: 78, iq: 70 }),
      player("Kwame Brown", 6, 11, 5, { height: 96, shooting: 62, finishing: 78, handles: 60, passing: 64, defense: 76, rebounding: 78, athleticism: 80, iq: 66 }),
      player("Jerry Stackhouse", 6, 6, 42, { height: 82, shooting: 78, finishing: 84, handles: 82, passing: 76, defense: 72, rebounding: 60, athleticism: 82, iq: 80 }),
      player("DeShawn Stevenson", 6, 5, 2, { height: 80, shooting: 78, finishing: 78, handles: 72, passing: 66, defense: 80, rebounding: 56, athleticism: 80, iq: 76 }),
      player("Christian Laettner", 6, 11, 10, { height: 96, shooting: 80, finishing: 82, handles: 72, passing: 74, defense: 72, rebounding: 80, athleticism: 72, iq: 78 }),
      player("Juan Dixon", 6, 3, 3, { height: 74, shooting: 80, finishing: 78, handles: 80, passing: 72, defense: 72, rebounding: 54, athleticism: 80, iq: 78 }),
      player("Etan Thomas", 6, 10, 36, { height: 94, shooting: 56, finishing: 78, handles: 58, passing: 62, defense: 80, rebounding: 78, athleticism: 80, iq: 68 }),
    ],
  },
  {
    era: "1980s",
    team: "Bulls",
    note: "A young Michael Jordan taking flight before the dynasty — with rookie Scottie Pippen and Horace Grant just arriving.",
    players: [
      player("Michael Jordan", 6, 6, 23, { height: 82, shooting: 84, finishing: 94, handles: 90, passing: 80, defense: 88, rebounding: 72, athleticism: 98, iq: 95 }),
      player("Scottie Pippen", 6, 8, 33, { height: 86, shooting: 74, finishing: 84, handles: 84, passing: 84, defense: 90, rebounding: 78, athleticism: 92, iq: 92 }),
      player("Horace Grant", 6, 10, 54, { height: 94, shooting: 70, finishing: 82, handles: 60, passing: 68, defense: 84, rebounding: 84, athleticism: 84, iq: 76 }),
      player("Charles Oakley", 6, 9, 34, { height: 90, shooting: 68, finishing: 78, handles: 64, passing: 70, defense: 82, rebounding: 90, athleticism: 80, iq: 76 }),
      player("Orlando Woolridge", 6, 9, 0, { height: 90, shooting: 78, finishing: 86, handles: 74, passing: 68, defense: 70, rebounding: 70, athleticism: 90, iq: 78 }),
      player("Reggie Theus", 6, 7, 24, { height: 84, shooting: 82, finishing: 84, handles: 86, passing: 84, defense: 70, rebounding: 60, athleticism: 84, iq: 82 }),
      player("Quintin Dailey", 6, 3, 22, { height: 74, shooting: 80, finishing: 84, handles: 80, passing: 70, defense: 66, rebounding: 58, athleticism: 82, iq: 78 }),
      player("John Paxson", 6, 2, 5, { height: 71, shooting: 86, finishing: 74, handles: 78, passing: 80, defense: 72, rebounding: 50, athleticism: 70, iq: 84 }),
      player("Dave Corzine", 6, 11, 40, { height: 96, shooting: 70, finishing: 78, handles: 60, passing: 72, defense: 74, rebounding: 80, athleticism: 62, iq: 72 }),
      player("Sam Vincent", 6, 2, 4, { height: 71, shooting: 78, finishing: 78, handles: 84, passing: 82, defense: 70, rebounding: 54, athleticism: 78, iq: 76 }),
      player("Gene Banks", 6, 7, 20, { height: 84, shooting: 74, finishing: 80, handles: 72, passing: 74, defense: 74, rebounding: 68, athleticism: 78, iq: 74 }),
      player("Rod Higgins", 6, 7, 54, { height: 84, shooting: 78, finishing: 80, handles: 72, passing: 70, defense: 72, rebounding: 64, athleticism: 80, iq: 74 }),
      player("Brad Sellers", 7, 0, 9, { height: 98, shooting: 72, finishing: 78, handles: 62, passing: 66, defense: 74, rebounding: 72, athleticism: 74, iq: 70 }),
      player("Ennis Whatley", 6, 3, 11, { height: 74, shooting: 72, finishing: 78, handles: 84, passing: 84, defense: 72, rebounding: 56, athleticism: 80, iq: 72 }),
      player("Mike Brown", 6, 9, 52, { height: 90, shooting: 60, finishing: 76, handles: 56, passing: 62, defense: 76, rebounding: 78, athleticism: 72, iq: 68 }),
    ],
  },
  {
    era: "2010s",
    team: "Nets",
    note: "Brooklyn's win-now gamble — Joe Johnson and Deron Williams joined by aging legends Kevin Garnett and Paul Pierce, later reset around young guards.",
    players: [
      player("Joe Johnson", 6, 7, 7, { height: 84, shooting: 88, finishing: 86, handles: 90, passing: 80, defense: 72, rebounding: 64, athleticism: 80, iq: 88 }),
      player("Deron Williams", 6, 3, 8, { height: 74, shooting: 78, finishing: 82, handles: 90, passing: 90, defense: 70, rebounding: 58, athleticism: 80, iq: 82 }),
      player("Brook Lopez", 7, 0, 11, { height: 98, shooting: 74, finishing: 86, handles: 60, passing: 64, defense: 80, rebounding: 78, athleticism: 72, iq: 78 }),
      player("Kevin Garnett", 6, 11, 2, { height: 96, shooting: 76, finishing: 80, handles: 70, passing: 80, defense: 90, rebounding: 82, athleticism: 74, iq: 94 }),
      player("Paul Pierce", 6, 7, 34, { height: 84, shooting: 84, finishing: 84, handles: 80, passing: 78, defense: 76, rebounding: 66, athleticism: 74, iq: 88 }),
      player("D'Angelo Russell", 6, 5, 1, { height: 80, shooting: 82, finishing: 82, handles: 88, passing: 84, defense: 62, rebounding: 56, athleticism: 78, iq: 84 }),
      player("Spencer Dinwiddie", 6, 5, 8, { height: 80, shooting: 78, finishing: 82, handles: 86, passing: 80, defense: 68, rebounding: 56, athleticism: 80, iq: 82 }),
      player("Jarrett Jack", 6, 3, 2, { height: 74, shooting: 78, finishing: 82, handles: 84, passing: 82, defense: 72, rebounding: 58, athleticism: 76, iq: 82 }),
      player("Shaun Livingston", 6, 7, 14, { height: 84, shooting: 74, finishing: 80, handles: 80, passing: 80, defense: 80, rebounding: 62, athleticism: 78, iq: 78 }),
      player("Andrei Kirilenko", 6, 9, 47, { height: 90, shooting: 70, finishing: 80, handles: 72, passing: 78, defense: 90, rebounding: 72, athleticism: 80, iq: 74 }),
      player("Thaddeus Young", 6, 8, 30, { height: 86, shooting: 74, finishing: 82, handles: 74, passing: 72, defense: 80, rebounding: 74, athleticism: 84, iq: 74 }),
      player("Bojan Bogdanovic", 6, 7, 44, { height: 84, shooting: 84, finishing: 80, handles: 72, passing: 66, defense: 64, rebounding: 60, athleticism: 70, iq: 80 }),
      player("Gerald Wallace", 6, 7, 45, { height: 84, shooting: 70, finishing: 80, handles: 72, passing: 70, defense: 84, rebounding: 72, athleticism: 90, iq: 74 }),
      player("Andray Blatche", 6, 11, 0, { height: 96, shooting: 68, finishing: 82, handles: 66, passing: 70, defense: 72, rebounding: 80, athleticism: 80, iq: 72 }),
      player("Mason Plumlee", 6, 11, 1, { height: 96, shooting: 58, finishing: 84, handles: 64, passing: 74, defense: 76, rebounding: 80, athleticism: 82, iq: 70 }),
    ],
  },
  {
    era: "1990s",
    team: "Raptors",
    note: "The expansion Raptors found their identity fast — Damon Stoudamire's spark, then the high-flying arrival of Vince Carter and a teenage Tracy McGrady.",
    players: [
      player("Vince Carter", 6, 6, 15, { height: 82, shooting: 82, finishing: 85, handles: 84, passing: 74, defense: 74, rebounding: 64, athleticism: 96, iq: 84 }),
      player("Tracy McGrady", 6, 8, 1, { height: 86, shooting: 74, finishing: 84, handles: 82, passing: 78, defense: 74, rebounding: 68, athleticism: 92, iq: 78 }),
      player("Damon Stoudamire", 5, 10, 20, { height: 62, shooting: 80, finishing: 80, handles: 90, passing: 88, defense: 66, rebounding: 54, athleticism: 84, iq: 80 }),
      player("Doug Christie", 6, 6, 13, { height: 82, shooting: 78, finishing: 80, handles: 80, passing: 78, defense: 88, rebounding: 64, athleticism: 84, iq: 78 }),
      player("Marcus Camby", 6, 11, 21, { height: 96, shooting: 56, finishing: 80, handles: 60, passing: 68, defense: 90, rebounding: 82, athleticism: 88, iq: 72 }),
      player("Charles Oakley", 6, 9, 34, { height: 90, shooting: 66, finishing: 78, handles: 64, passing: 72, defense: 84, rebounding: 90, athleticism: 74, iq: 78 }),
      player("Walt Williams", 6, 8, 42, { height: 86, shooting: 80, finishing: 80, handles: 76, passing: 72, defense: 72, rebounding: 66, athleticism: 80, iq: 76 }),
      player("Kevin Willis", 7, 0, 42, { height: 98, shooting: 74, finishing: 80, handles: 62, passing: 62, defense: 74, rebounding: 86, athleticism: 76, iq: 72 }),
      player("Dee Brown", 6, 1, 7, { height: 68, shooting: 80, finishing: 78, handles: 84, passing: 80, defense: 78, rebounding: 54, athleticism: 84, iq: 78 }),
      player("Carlos Rogers", 6, 11, 34, { height: 96, shooting: 66, finishing: 82, handles: 62, passing: 64, defense: 78, rebounding: 78, athleticism: 86, iq: 70 }),
      player("Popeye Jones", 6, 8, 43, { height: 86, shooting: 62, finishing: 74, handles: 58, passing: 64, defense: 78, rebounding: 88, athleticism: 66, iq: 70 }),
      player("John Wallace", 6, 8, 44, { height: 86, shooting: 74, finishing: 80, handles: 72, passing: 66, defense: 72, rebounding: 70, athleticism: 82, iq: 74 }),
      player("Willie Anderson", 6, 8, 40, { height: 86, shooting: 78, finishing: 80, handles: 80, passing: 78, defense: 80, rebounding: 64, athleticism: 82, iq: 76 }),
      player("Alvin Robertson", 6, 4, 21, { height: 77, shooting: 76, finishing: 78, handles: 80, passing: 78, defense: 92, rebounding: 62, athleticism: 84, iq: 74 }),
      player("Sharone Wright", 6, 11, 5, { height: 96, shooting: 66, finishing: 80, handles: 58, passing: 62, defense: 74, rebounding: 78, athleticism: 78, iq: 70 }),
    ],
  },
  {
    era: "1970s",
    team: "Rockets",
    note: "Houston rallied around Rudy Tomjanovich and pocket-rocket Calvin Murphy before a young Moses Malone arrived to punish the glass.",
    players: [
      player("Moses Malone", 6, 10, 24, { height: 94, shooting: 70, finishing: 86, handles: 60, passing: 62, defense: 80, rebounding: 96, athleticism: 86, iq: 80 }),
      player("Calvin Murphy", 5, 9, 23, { height: 58, shooting: 86, finishing: 80, handles: 86, passing: 80, defense: 70, rebounding: 50, athleticism: 84, iq: 80 }),
      player("Rudy Tomjanovich", 6, 8, 45, { height: 86, shooting: 84, finishing: 84, handles: 70, passing: 72, defense: 72, rebounding: 82, athleticism: 78, iq: 80 }),
      player("Mike Newlin", 6, 4, 11, { height: 77, shooting: 82, finishing: 80, handles: 80, passing: 78, defense: 68, rebounding: 58, athleticism: 76, iq: 78 }),
      player("John Lucas", 6, 3, 15, { height: 74, shooting: 78, finishing: 78, handles: 88, passing: 88, defense: 70, rebounding: 54, athleticism: 80, iq: 80 }),
      player("Robert Reid", 6, 8, 50, { height: 86, shooting: 74, finishing: 80, handles: 74, passing: 72, defense: 84, rebounding: 72, athleticism: 82, iq: 76 }),
      player("Kevin Kunnert", 7, 0, 44, { height: 98, shooting: 62, finishing: 76, handles: 56, passing: 64, defense: 76, rebounding: 82, athleticism: 66, iq: 70 }),
      player("Dwight Jones", 6, 9, 21, { height: 90, shooting: 66, finishing: 78, handles: 60, passing: 66, defense: 78, rebounding: 80, athleticism: 78, iq: 72 }),
      player("Ed Ratleff", 6, 6, 42, { height: 82, shooting: 76, finishing: 78, handles: 76, passing: 74, defense: 80, rebounding: 66, athleticism: 80, iq: 74 }),
      player("Cliff Meely", 6, 8, 40, { height: 86, shooting: 74, finishing: 78, handles: 70, passing: 68, defense: 74, rebounding: 76, athleticism: 80, iq: 70 }),
      player("Jack Marin", 6, 7, 24, { height: 84, shooting: 82, finishing: 80, handles: 72, passing: 74, defense: 72, rebounding: 70, athleticism: 74, iq: 78 }),
      player("Zaid Abdul-Aziz", 6, 9, 35, { height: 90, shooting: 64, finishing: 76, handles: 58, passing: 64, defense: 76, rebounding: 84, athleticism: 74, iq: 70 }),
      player("Gus Bailey", 6, 6, 14, { height: 82, shooting: 74, finishing: 78, handles: 80, passing: 78, defense: 80, rebounding: 64, athleticism: 82, iq: 74 }),
      player("Ron Behagen", 6, 9, 33, { height: 90, shooting: 70, finishing: 78, handles: 62, passing: 66, defense: 76, rebounding: 78, athleticism: 78, iq: 70 }),
    ],
  },
  {
    era: "1970s",
    team: "Nuggets",
    note: "Denver's high-altitude show: David Thompson's stratospheric leaping, Dan Issel's scoring, and Bobby Jones's defense after the ABA merger.",
    players: [
      player("David Thompson", 6, 4, 33, { height: 77, shooting: 84, finishing: 90, handles: 80, passing: 76, defense: 76, rebounding: 66, athleticism: 98, iq: 82 }),
      player("Dan Issel", 6, 9, 44, { height: 90, shooting: 84, finishing: 86, handles: 68, passing: 72, defense: 74, rebounding: 82, athleticism: 76, iq: 84 }),
      player("Bobby Jones", 6, 9, 24, { height: 90, shooting: 78, finishing: 86, handles: 72, passing: 76, defense: 92, rebounding: 80, athleticism: 90, iq: 86 }),
      player("Ralph Simpson", 6, 5, 44, { height: 80, shooting: 80, finishing: 82, handles: 82, passing: 78, defense: 74, rebounding: 64, athleticism: 84, iq: 76 }),
      player("Brian Taylor", 6, 2, 5, { height: 71, shooting: 80, finishing: 78, handles: 82, passing: 78, defense: 84, rebounding: 56, athleticism: 84, iq: 76 }),
      player("Mack Calvin", 6, 0, 11, { height: 66, shooting: 80, finishing: 78, handles: 86, passing: 84, defense: 70, rebounding: 50, athleticism: 80, iq: 80 }),
      player("Paul Silas", 6, 7, 35, { height: 84, shooting: 64, finishing: 76, handles: 64, passing: 74, defense: 86, rebounding: 88, athleticism: 76, iq: 84 }),
      player("Bobby Wilkerson", 6, 7, 20, { height: 84, shooting: 72, finishing: 78, handles: 78, passing: 78, defense: 86, rebounding: 68, athleticism: 84, iq: 74 }),
      player("Gus Gerard", 6, 8, 25, { height: 86, shooting: 76, finishing: 80, handles: 70, passing: 68, defense: 72, rebounding: 74, athleticism: 82, iq: 72 }),
      player("Marvin Webster", 7, 1, 40, { height: 100, shooting: 60, finishing: 76, handles: 56, passing: 64, defense: 86, rebounding: 86, athleticism: 76, iq: 72 }),
      player("Chuck Williams", 6, 2, 12, { height: 71, shooting: 76, finishing: 76, handles: 82, passing: 82, defense: 72, rebounding: 54, athleticism: 78, iq: 76 }),
      player("Byron Beck", 6, 9, 40, { height: 90, shooting: 68, finishing: 78, handles: 62, passing: 70, defense: 76, rebounding: 78, athleticism: 70, iq: 76 }),
      player("Tom Boswell", 6, 9, 31, { height: 90, shooting: 70, finishing: 80, handles: 64, passing: 66, defense: 76, rebounding: 78, athleticism: 78, iq: 72 }),
    ],
  },
  {
    era: "1970s",
    team: "Spurs",
    note: "The Iceman cometh — George Gervin's silky finger rolls and a run-and-gun San Antonio attack lit up the post-merger NBA.",
    players: [
      player("George Gervin", 6, 7, 44, { height: 84, shooting: 96, finishing: 96, handles: 86, passing: 78, defense: 70, rebounding: 70, athleticism: 86, iq: 82 }),
      player("Larry Kenon", 6, 9, 35, { height: 90, shooting: 78, finishing: 84, handles: 74, passing: 72, defense: 78, rebounding: 84, athleticism: 86, iq: 76 }),
      player("James Silas", 6, 1, 13, { height: 68, shooting: 82, finishing: 82, handles: 86, passing: 84, defense: 74, rebounding: 54, athleticism: 80, iq: 82 }),
      player("Billy Paultz", 6, 11, 42, { height: 96, shooting: 70, finishing: 80, handles: 62, passing: 72, defense: 80, rebounding: 84, athleticism: 70, iq: 78 }),
      player("Mike Gale", 6, 4, 15, { height: 77, shooting: 74, finishing: 78, handles: 82, passing: 80, defense: 86, rebounding: 60, athleticism: 82, iq: 76 }),
      player("Mark Olberding", 6, 8, 53, { height: 86, shooting: 74, finishing: 80, handles: 68, passing: 74, defense: 76, rebounding: 78, athleticism: 70, iq: 78 }),
      player("Coby Dietrick", 6, 9, 32, { height: 90, shooting: 68, finishing: 78, handles: 62, passing: 68, defense: 80, rebounding: 78, athleticism: 74, iq: 74 }),
      player("Allan Bristow", 6, 7, 31, { height: 84, shooting: 76, finishing: 80, handles: 76, passing: 80, defense: 72, rebounding: 72, athleticism: 72, iq: 80 }),
      player("Louie Dampier", 6, 0, 10, { height: 66, shooting: 84, finishing: 76, handles: 84, passing: 82, defense: 70, rebounding: 50, athleticism: 76, iq: 80 }),
      player("Mike Green", 6, 10, 24, { height: 94, shooting: 64, finishing: 78, handles: 58, passing: 66, defense: 80, rebounding: 82, athleticism: 78, iq: 70 }),
      player("Billy McKinney", 6, 0, 21, { height: 66, shooting: 80, finishing: 76, handles: 82, passing: 80, defense: 70, rebounding: 50, athleticism: 78, iq: 78 }),
      player("George Karl", 6, 2, 22, { height: 71, shooting: 74, finishing: 76, handles: 80, passing: 80, defense: 80, rebounding: 56, athleticism: 74, iq: 82 }),
      player("George Johnson", 6, 11, 54, { height: 96, shooting: 56, finishing: 76, handles: 56, passing: 62, defense: 88, rebounding: 82, athleticism: 82, iq: 72 }),
    ],
  },
  {
    era: "1970s",
    team: "Hawks",
    note: "Pistol Pete Maravich's flair and Lou Hudson's silky scoring carried Atlanta's run-and-gun show before John Drew brought the thunder.",
    players: [
      player("Pete Maravich", 6, 5, 44, { height: 80, shooting: 86, finishing: 84, handles: 96, passing: 90, defense: 66, rebounding: 62, athleticism: 86, iq: 86 }),
      player("Lou Hudson", 6, 5, 23, { height: 80, shooting: 88, finishing: 84, handles: 78, passing: 74, defense: 74, rebounding: 66, athleticism: 84, iq: 82 }),
      player("John Drew", 6, 6, 22, { height: 82, shooting: 78, finishing: 84, handles: 72, passing: 66, defense: 72, rebounding: 80, athleticism: 88, iq: 70 }),
      player("Walt Bellamy", 6, 11, 8, { height: 96, shooting: 70, finishing: 84, handles: 60, passing: 68, defense: 78, rebounding: 88, athleticism: 78, iq: 74 }),
      player("Bill Bridges", 6, 6, 32, { height: 82, shooting: 66, finishing: 76, handles: 64, passing: 72, defense: 84, rebounding: 88, athleticism: 78, iq: 78 }),
      player("Herm Gilliam", 6, 3, 24, { height: 74, shooting: 78, finishing: 78, handles: 80, passing: 76, defense: 78, rebounding: 60, athleticism: 82, iq: 74 }),
      player("Dan Roundfield", 6, 8, 32, { height: 86, shooting: 70, finishing: 80, handles: 66, passing: 70, defense: 86, rebounding: 86, athleticism: 86, iq: 76 }),
      player("Eddie Johnson", 6, 2, 20, { height: 71, shooting: 82, finishing: 80, handles: 84, passing: 80, defense: 72, rebounding: 56, athleticism: 82, iq: 74 }),
      player("Tom Henderson", 6, 2, 10, { height: 71, shooting: 74, finishing: 78, handles: 82, passing: 82, defense: 76, rebounding: 56, athleticism: 80, iq: 76 }),
      player("Steve Hawes", 6, 9, 31, { height: 90, shooting: 72, finishing: 78, handles: 66, passing: 76, defense: 76, rebounding: 80, athleticism: 70, iq: 78 }),
      player("Charlie Criss", 5, 8, 3, { height: 56, shooting: 80, finishing: 76, handles: 86, passing: 82, defense: 70, rebounding: 48, athleticism: 80, iq: 78 }),
      player("Tom McMillen", 6, 11, 33, { height: 96, shooting: 76, finishing: 78, handles: 64, passing: 70, defense: 72, rebounding: 78, athleticism: 70, iq: 80 }),
      player("Armond Hill", 6, 4, 4, { height: 77, shooting: 74, finishing: 76, handles: 82, passing: 80, defense: 78, rebounding: 58, athleticism: 80, iq: 76 }),
    ],
  },
  {
    era: "1980s",
    team: "Jazz",
    note: "Adrian Dantley's footwork and Mark Eaton's wall of defense gave way to the dawn of Stockton-to-Malone.",
    players: [
      player("Karl Malone", 6, 9, 32, { height: 90, shooting: 76, finishing: 92, handles: 74, passing: 76, defense: 84, rebounding: 90, athleticism: 87, iq: 82 }),
      player("John Stockton", 6, 1, 12, { height: 68, shooting: 78, finishing: 80, handles: 94, passing: 98, defense: 86, rebounding: 58, athleticism: 74, iq: 96 }),
      player("Adrian Dantley", 6, 5, 4, { height: 80, shooting: 84, finishing: 92, handles: 80, passing: 76, defense: 70, rebounding: 74, athleticism: 80, iq: 86 }),
      player("Mark Eaton", 7, 4, 53, { height: 100, shooting: 46, finishing: 72, handles: 48, passing: 56, defense: 96, rebounding: 88, athleticism: 64, iq: 78 }),
      player("Darrell Griffith", 6, 4, 35, { height: 77, shooting: 84, finishing: 86, handles: 80, passing: 72, defense: 74, rebounding: 64, athleticism: 94, iq: 76 }),
      player("Thurl Bailey", 6, 11, 41, { height: 96, shooting: 78, finishing: 84, handles: 66, passing: 70, defense: 80, rebounding: 80, athleticism: 80, iq: 78 }),
      player("Rickey Green", 6, 0, 14, { height: 66, shooting: 78, finishing: 80, handles: 88, passing: 86, defense: 78, rebounding: 54, athleticism: 88, iq: 78 }),
      player("Bobby Hansen", 6, 6, 20, { height: 82, shooting: 80, finishing: 78, handles: 74, passing: 72, defense: 80, rebounding: 64, athleticism: 78, iq: 76 }),
      player("Marc Iavaroni", 6, 10, 33, { height: 94, shooting: 70, finishing: 78, handles: 64, passing: 72, defense: 80, rebounding: 76, athleticism: 70, iq: 78 }),
      player("Rich Kelley", 7, 0, 53, { height: 98, shooting: 66, finishing: 76, handles: 64, passing: 76, defense: 80, rebounding: 82, athleticism: 66, iq: 78 }),
      player("Jeff Wilkins", 6, 11, 33, { height: 96, shooting: 70, finishing: 76, handles: 60, passing: 64, defense: 78, rebounding: 80, athleticism: 74, iq: 72 }),
      player("Fred Roberts", 6, 10, 33, { height: 94, shooting: 76, finishing: 80, handles: 66, passing: 70, defense: 74, rebounding: 74, athleticism: 72, iq: 78 }),
      player("Kelly Tripucka", 6, 6, 7, { height: 82, shooting: 82, finishing: 84, handles: 76, passing: 74, defense: 68, rebounding: 66, athleticism: 76, iq: 78 }),
    ],
  },
  {
    era: "1980s",
    team: "Cavaliers",
    note: "After lean years, Cleveland's young core of Brad Daugherty, Mark Price, and Ron Harper looked like the next great thing.",
    players: [
      player("Brad Daugherty", 7, 0, 43, { height: 98, shooting: 74, finishing: 86, handles: 70, passing: 84, defense: 76, rebounding: 86, athleticism: 72, iq: 84 }),
      player("Mark Price", 6, 0, 25, { height: 66, shooting: 90, finishing: 82, handles: 90, passing: 90, defense: 70, rebounding: 54, athleticism: 76, iq: 88 }),
      player("Ron Harper", 6, 6, 4, { height: 82, shooting: 78, finishing: 86, handles: 84, passing: 80, defense: 84, rebounding: 70, athleticism: 92, iq: 78 }),
      player("Larry Nance", 6, 10, 22, { height: 94, shooting: 80, finishing: 90, handles: 70, passing: 72, defense: 88, rebounding: 84, athleticism: 94, iq: 82 }),
      player("Hot Rod Williams", 6, 11, 18, { height: 96, shooting: 72, finishing: 82, handles: 64, passing: 70, defense: 88, rebounding: 80, athleticism: 84, iq: 76 }),
      player("Craig Ehlo", 6, 7, 3, { height: 84, shooting: 78, finishing: 80, handles: 78, passing: 78, defense: 82, rebounding: 68, athleticism: 80, iq: 78 }),
      player("Mike Sanders", 6, 6, 24, { height: 82, shooting: 74, finishing: 78, handles: 72, passing: 70, defense: 80, rebounding: 66, athleticism: 78, iq: 74 }),
      player("John Williams", 6, 8, 24, { height: 86, shooting: 70, finishing: 80, handles: 70, passing: 72, defense: 80, rebounding: 78, athleticism: 80, iq: 74 }),
      player("Dell Curry", 6, 5, 30, { height: 80, shooting: 90, finishing: 80, handles: 80, passing: 72, defense: 72, rebounding: 58, athleticism: 80, iq: 78 }),
      player("Phil Hubbard", 6, 8, 35, { height: 86, shooting: 68, finishing: 80, handles: 68, passing: 68, defense: 76, rebounding: 76, athleticism: 78, iq: 72 }),
      player("World B. Free", 6, 2, 21, { height: 71, shooting: 86, finishing: 84, handles: 84, passing: 74, defense: 66, rebounding: 56, athleticism: 84, iq: 74 }),
      player("Johnny Newman", 6, 7, 12, { height: 84, shooting: 80, finishing: 80, handles: 76, passing: 70, defense: 76, rebounding: 64, athleticism: 82, iq: 74 }),
      player("Steve Kerr", 6, 3, 25, { height: 74, shooting: 86, finishing: 76, handles: 80, passing: 80, defense: 68, rebounding: 52, athleticism: 68, iq: 84 }),
    ],
  },
  {
    era: "1990s",
    team: "76ers",
    note: "Allen Iverson crossed up the league as a rookie — a 165-pound scoring hurricane who dragged a thin Philadelphia roster into relevance.",
    players: [
      player("Allen Iverson", 6, 0, 3, { height: 66, shooting: 84, finishing: 90, handles: 98, passing: 80, defense: 70, rebounding: 56, athleticism: 96, iq: 80 }),
      player("Jerry Stackhouse", 6, 6, 42, { height: 82, shooting: 78, finishing: 86, handles: 82, passing: 76, defense: 74, rebounding: 66, athleticism: 90, iq: 78 }),
      player("Theo Ratliff", 6, 10, 42, { height: 94, shooting: 56, finishing: 80, handles: 58, passing: 60, defense: 90, rebounding: 80, athleticism: 86, iq: 74 }),
      player("Derrick Coleman", 6, 10, 44, { height: 94, shooting: 78, finishing: 84, handles: 74, passing: 76, defense: 76, rebounding: 84, athleticism: 82, iq: 74 }),
      player("Clarence Weatherspoon", 6, 7, 35, { height: 84, shooting: 72, finishing: 82, handles: 68, passing: 70, defense: 82, rebounding: 82, athleticism: 84, iq: 76 }),
      player("Tim Thomas", 6, 10, 1, { height: 94, shooting: 80, finishing: 82, handles: 76, passing: 70, defense: 70, rebounding: 70, athleticism: 84, iq: 72 }),
      player("Eric Snow", 6, 3, 20, { height: 74, shooting: 70, finishing: 78, handles: 84, passing: 84, defense: 84, rebounding: 58, athleticism: 80, iq: 80 }),
      player("Aaron McKie", 6, 5, 8, { height: 80, shooting: 78, finishing: 78, handles: 80, passing: 80, defense: 84, rebounding: 66, athleticism: 78, iq: 82 }),
      player("George Lynch", 6, 8, 4, { height: 86, shooting: 68, finishing: 78, handles: 72, passing: 72, defense: 82, rebounding: 78, athleticism: 84, iq: 76 }),
      player("Tyrone Hill", 6, 9, 4, { height: 90, shooting: 64, finishing: 80, handles: 62, passing: 66, defense: 80, rebounding: 86, athleticism: 80, iq: 74 }),
      player("Rex Walters", 6, 4, 30, { height: 77, shooting: 82, finishing: 76, handles: 80, passing: 78, defense: 70, rebounding: 54, athleticism: 76, iq: 78 }),
      player("Scott Williams", 6, 10, 42, { height: 94, shooting: 66, finishing: 78, handles: 60, passing: 66, defense: 78, rebounding: 80, athleticism: 76, iq: 74 }),
      player("Lucious Harris", 6, 5, 5, { height: 80, shooting: 78, finishing: 78, handles: 78, passing: 74, defense: 74, rebounding: 60, athleticism: 80, iq: 76 }),
    ],
  },
  {
    era: "1990s",
    team: "Nets",
    note: "Drazen Petrovic's fearless shooting and Derrick Coleman's talent gave New Jersey a brief, tragic glimpse of greatness.",
    players: [
      player("Derrick Coleman", 6, 10, 44, { height: 94, shooting: 80, finishing: 86, handles: 76, passing: 78, defense: 78, rebounding: 86, athleticism: 84, iq: 76 }),
      player("Drazen Petrovic", 6, 5, 3, { height: 80, shooting: 90, finishing: 84, handles: 84, passing: 78, defense: 70, rebounding: 60, athleticism: 80, iq: 84 }),
      player("Kenny Anderson", 6, 1, 7, { height: 68, shooting: 80, finishing: 82, handles: 92, passing: 90, defense: 72, rebounding: 56, athleticism: 86, iq: 82 }),
      player("Chris Morris", 6, 8, 34, { height: 86, shooting: 78, finishing: 82, handles: 76, passing: 70, defense: 76, rebounding: 72, athleticism: 88, iq: 72 }),
      player("Sam Bowie", 7, 1, 31, { height: 100, shooting: 70, finishing: 80, handles: 62, passing: 72, defense: 82, rebounding: 82, athleticism: 68, iq: 76 }),
      player("Dennis Hopson", 6, 5, 23, { height: 80, shooting: 78, finishing: 80, handles: 78, passing: 72, defense: 70, rebounding: 62, athleticism: 84, iq: 72 }),
      player("Mookie Blaylock", 6, 0, 10, { height: 66, shooting: 76, finishing: 78, handles: 86, passing: 86, defense: 88, rebounding: 58, athleticism: 84, iq: 78 }),
      player("Armon Gilliam", 6, 9, 5, { height: 90, shooting: 74, finishing: 82, handles: 66, passing: 68, defense: 76, rebounding: 82, athleticism: 80, iq: 74 }),
      player("Jayson Williams", 6, 10, 55, { height: 94, shooting: 64, finishing: 80, handles: 60, passing: 64, defense: 76, rebounding: 88, athleticism: 80, iq: 72 }),
      player("Kevin Edwards", 6, 3, 20, { height: 74, shooting: 78, finishing: 80, handles: 80, passing: 74, defense: 74, rebounding: 58, athleticism: 82, iq: 74 }),
      player("Benoit Benjamin", 7, 0, 00, { height: 98, shooting: 66, finishing: 78, handles: 58, passing: 66, defense: 80, rebounding: 82, athleticism: 70, iq: 68 }),
      player("Rick Mahorn", 6, 10, 44, { height: 94, shooting: 66, finishing: 78, handles: 60, passing: 66, defense: 84, rebounding: 80, athleticism: 70, iq: 78 }),
      player("Chris Dudley", 6, 11, 22, { height: 96, shooting: 44, finishing: 72, handles: 52, passing: 58, defense: 82, rebounding: 84, athleticism: 72, iq: 70 }),
    ],
  },
  {
    era: "2000s",
    team: "Warriors",
    note: "We Believe — Baron Davis, Stephen Jackson, and a frenetic Golden State crew stunned the top-seeded Mavericks in 2007.",
    players: [
      player("Baron Davis", 6, 3, 5, { height: 74, shooting: 84, finishing: 86, handles: 92, passing: 90, defense: 82, rebounding: 64, athleticism: 92, iq: 82 }),
      player("Stephen Jackson", 6, 8, 1, { height: 86, shooting: 82, finishing: 82, handles: 80, passing: 78, defense: 84, rebounding: 66, athleticism: 80, iq: 80 }),
      player("Monta Ellis", 6, 3, 8, { height: 74, shooting: 82, finishing: 88, handles: 88, passing: 78, defense: 70, rebounding: 56, athleticism: 90, iq: 76 }),
      player("Al Harrington", 6, 9, 7, { height: 90, shooting: 80, finishing: 82, handles: 74, passing: 70, defense: 72, rebounding: 76, athleticism: 80, iq: 74 }),
      player("Jason Richardson", 6, 6, 23, { height: 82, shooting: 80, finishing: 86, handles: 78, passing: 70, defense: 72, rebounding: 70, athleticism: 94, iq: 74 }),
      player("Andris Biedrins", 6, 11, 15, { height: 96, shooting: 50, finishing: 82, handles: 58, passing: 66, defense: 80, rebounding: 84, athleticism: 84, iq: 72 }),
      player("Matt Barnes", 6, 7, 22, { height: 84, shooting: 76, finishing: 80, handles: 74, passing: 74, defense: 82, rebounding: 70, athleticism: 82, iq: 76 }),
      player("Jarrett Jack", 6, 3, 2, { height: 74, shooting: 78, finishing: 82, handles: 84, passing: 82, defense: 72, rebounding: 58, athleticism: 76, iq: 82 }),
      player("Mickael Pietrus", 6, 6, 32, { height: 82, shooting: 78, finishing: 80, handles: 72, passing: 66, defense: 82, rebounding: 62, athleticism: 88, iq: 72 }),
      player("Troy Murphy", 6, 11, 14, { height: 96, shooting: 80, finishing: 78, handles: 64, passing: 72, defense: 70, rebounding: 86, athleticism: 68, iq: 76 }),
      player("Mike Dunleavy", 6, 9, 17, { height: 90, shooting: 80, finishing: 78, handles: 76, passing: 78, defense: 70, rebounding: 70, athleticism: 70, iq: 78 }),
      player("Kelenna Azubuike", 6, 5, 5, { height: 80, shooting: 80, finishing: 80, handles: 74, passing: 68, defense: 74, rebounding: 64, athleticism: 84, iq: 72 }),
      player("Brandan Wright", 6, 10, 32, { height: 94, shooting: 58, finishing: 82, handles: 60, passing: 62, defense: 76, rebounding: 76, athleticism: 88, iq: 70 }),
    ],
  },
  {
    era: "2000s",
    team: "Grizzlies",
    note: "Pau Gasol's skill and a sharp supporting cast put Memphis on the map with three straight playoff trips.",
    players: [
      player("Pau Gasol", 7, 0, 16, { height: 98, shooting: 78, finishing: 88, handles: 72, passing: 82, defense: 80, rebounding: 86, athleticism: 74, iq: 86 }),
      player("Mike Miller", 6, 8, 13, { height: 86, shooting: 88, finishing: 80, handles: 78, passing: 78, defense: 68, rebounding: 70, athleticism: 78, iq: 80 }),
      player("Shane Battier", 6, 8, 31, { height: 86, shooting: 80, finishing: 78, handles: 70, passing: 74, defense: 90, rebounding: 70, athleticism: 78, iq: 88 }),
      player("Jason Williams", 6, 1, 2, { height: 68, shooting: 78, finishing: 80, handles: 92, passing: 90, defense: 68, rebounding: 54, athleticism: 82, iq: 80 }),
      player("Bonzi Wells", 6, 5, 6, { height: 80, shooting: 78, finishing: 84, handles: 80, passing: 76, defense: 78, rebounding: 72, athleticism: 84, iq: 74 }),
      player("Mike Bibby", 6, 1, 10, { height: 68, shooting: 82, finishing: 82, handles: 83, passing: 81, defense: 70, rebounding: 56, athleticism: 80, iq: 88 }),
      player("Lorenzen Wright", 6, 11, 42, { height: 96, shooting: 66, finishing: 80, handles: 60, passing: 64, defense: 80, rebounding: 84, athleticism: 80, iq: 72 }),
      player("Stromile Swift", 6, 9, 5, { height: 90, shooting: 64, finishing: 84, handles: 64, passing: 62, defense: 78, rebounding: 78, athleticism: 94, iq: 68 }),
      player("James Posey", 6, 8, 41, { height: 86, shooting: 78, finishing: 78, handles: 72, passing: 72, defense: 86, rebounding: 70, athleticism: 80, iq: 80 }),
      player("Earl Watson", 6, 1, 25, { height: 68, shooting: 72, finishing: 78, handles: 84, passing: 84, defense: 80, rebounding: 56, athleticism: 80, iq: 80 }),
      player("Brian Cardinal", 6, 8, 44, { height: 86, shooting: 78, finishing: 76, handles: 66, passing: 70, defense: 78, rebounding: 70, athleticism: 68, iq: 78 }),
      player("Hakim Warrick", 6, 9, 21, { height: 90, shooting: 70, finishing: 84, handles: 66, passing: 64, defense: 70, rebounding: 74, athleticism: 90, iq: 70 }),
      player("Damon Stoudamire", 5, 10, 3, { height: 62, shooting: 80, finishing: 78, handles: 88, passing: 86, defense: 66, rebounding: 52, athleticism: 78, iq: 80 }),
    ],
  },
  {
    era: "2010s",
    team: "Bucks",
    note: "The Greek Freak's ascent — a rangy, switchable Milwaukee core grew up around Giannis Antetokounmpo and Khris Middleton.",
    players: [
      player("Giannis Antetokounmpo", 6, 11, 34, { height: 96, shooting: 60, finishing: 96, handles: 84, passing: 78, defense: 95, rebounding: 92, athleticism: 98, iq: 78 }),
      player("Khris Middleton", 6, 7, 22, { height: 84, shooting: 88, finishing: 82, handles: 82, passing: 80, defense: 80, rebounding: 70, athleticism: 72, iq: 90 }),
      player("Jabari Parker", 6, 8, 12, { height: 86, shooting: 78, finishing: 86, handles: 78, passing: 72, defense: 64, rebounding: 72, athleticism: 82, iq: 74 }),
      player("Malcolm Brogdon", 6, 5, 13, { height: 80, shooting: 84, finishing: 82, handles: 82, passing: 82, defense: 80, rebounding: 66, athleticism: 78, iq: 84 }),
      player("Brandon Knight", 6, 3, 11, { height: 74, shooting: 80, finishing: 82, handles: 84, passing: 80, defense: 70, rebounding: 56, athleticism: 84, iq: 76 }),
      player("Greg Monroe", 6, 11, 15, { height: 96, shooting: 64, finishing: 84, handles: 70, passing: 80, defense: 70, rebounding: 86, athleticism: 70, iq: 80 }),
      player("Eric Bledsoe", 6, 1, 6, { height: 68, shooting: 76, finishing: 84, handles: 84, passing: 80, defense: 86, rebounding: 62, athleticism: 92, iq: 76 }),
      player("Tobias Harris", 6, 8, 12, { height: 86, shooting: 82, finishing: 82, handles: 76, passing: 70, defense: 72, rebounding: 74, athleticism: 78, iq: 76 }),
      player("Larry Sanders", 6, 11, 8, { height: 96, shooting: 56, finishing: 80, handles: 58, passing: 64, defense: 90, rebounding: 84, athleticism: 86, iq: 72 }),
      player("O.J. Mayo", 6, 4, 3, { height: 77, shooting: 82, finishing: 80, handles: 82, passing: 76, defense: 70, rebounding: 60, athleticism: 80, iq: 74 }),
      player("John Henson", 6, 11, 31, { height: 96, shooting: 54, finishing: 82, handles: 58, passing: 64, defense: 84, rebounding: 80, athleticism: 84, iq: 72 }),
      player("Ersan Ilyasova", 6, 10, 7, { height: 94, shooting: 80, finishing: 78, handles: 66, passing: 66, defense: 70, rebounding: 80, athleticism: 70, iq: 76 }),
      player("Monta Ellis", 6, 3, 11, { height: 74, shooting: 80, finishing: 86, handles: 88, passing: 80, defense: 70, rebounding: 56, athleticism: 86, iq: 76 }),
    ],
  },
  {
    era: "2010s",
    team: "Magic",
    note: "Dwight Howard's prime made Orlando a juggernaut — an elite defense and a moat of shooters around the league's best big man.",
    players: [
      player("Dwight Howard", 6, 10, 12, { height: 94, shooting: 50, finishing: 90, handles: 64, passing: 66, defense: 96, rebounding: 96, athleticism: 96, iq: 78 }),
      player("Jameer Nelson", 6, 0, 14, { height: 66, shooting: 82, finishing: 82, handles: 88, passing: 86, defense: 70, rebounding: 56, athleticism: 80, iq: 82 }),
      player("Hedo Turkoglu", 6, 10, 15, { height: 94, shooting: 82, finishing: 80, handles: 82, passing: 84, defense: 70, rebounding: 70, athleticism: 70, iq: 84 }),
      player("Rashard Lewis", 6, 10, 9, { height: 94, shooting: 86, finishing: 80, handles: 74, passing: 72, defense: 72, rebounding: 74, athleticism: 80, iq: 78 }),
      player("Vince Carter", 6, 6, 15, { height: 82, shooting: 84, finishing: 84, handles: 80, passing: 76, defense: 70, rebounding: 64, athleticism: 86, iq: 84 }),
      player("Jason Richardson", 6, 6, 23, { height: 82, shooting: 84, finishing: 82, handles: 76, passing: 68, defense: 70, rebounding: 66, athleticism: 86, iq: 74 }),
      player("J.J. Redick", 6, 4, 7, { height: 77, shooting: 90, finishing: 78, handles: 76, passing: 72, defense: 70, rebounding: 54, athleticism: 72, iq: 82 }),
      player("Mickael Pietrus", 6, 6, 20, { height: 82, shooting: 78, finishing: 80, handles: 70, passing: 64, defense: 84, rebounding: 62, athleticism: 88, iq: 72 }),
      player("Marcin Gortat", 6, 11, 13, { height: 96, shooting: 60, finishing: 82, handles: 62, passing: 66, defense: 80, rebounding: 82, athleticism: 78, iq: 76 }),
      player("Ryan Anderson", 6, 10, 33, { height: 94, shooting: 86, finishing: 76, handles: 64, passing: 64, defense: 64, rebounding: 80, athleticism: 66, iq: 74 }),
      player("Brandon Bass", 6, 8, 30, { height: 86, shooting: 78, finishing: 80, handles: 66, passing: 64, defense: 74, rebounding: 76, athleticism: 80, iq: 74 }),
      player("Quentin Richardson", 6, 6, 5, { height: 82, shooting: 78, finishing: 78, handles: 72, passing: 70, defense: 76, rebounding: 72, athleticism: 78, iq: 74 }),
      player("Anthony Johnson", 6, 3, 3, { height: 74, shooting: 74, finishing: 78, handles: 82, passing: 80, defense: 74, rebounding: 56, athleticism: 78, iq: 78 }),
    ],
  },
  {
    era: "2020s",
    team: "Nets",
    note: "A title-or-bust superteam — Kevin Durant, Kyrie Irving, and James Harden formed one of the most talented trios ever assembled.",
    players: [
      player("Kevin Durant", 6, 11, 7, { height: 96, shooting: 93, finishing: 96, handles: 90, passing: 80, defense: 78, rebounding: 78, athleticism: 88, iq: 90 }),
      player("Kyrie Irving", 6, 2, 11, { height: 71, shooting: 92, finishing: 96, handles: 96, passing: 84, defense: 74, rebounding: 56, athleticism: 90, iq: 92 }),
      player("James Harden", 6, 5, 13, { height: 80, shooting: 90, finishing: 86, handles: 94, passing: 92, defense: 66, rebounding: 72, athleticism: 78, iq: 92 }),
      player("Joe Harris", 6, 6, 12, { height: 82, shooting: 90, finishing: 78, handles: 70, passing: 68, defense: 70, rebounding: 58, athleticism: 70, iq: 80 }),
      player("DeAndre Jordan", 6, 11, 6, { height: 96, shooting: 46, finishing: 84, handles: 56, passing: 60, defense: 80, rebounding: 90, athleticism: 84, iq: 72 }),
      player("Blake Griffin", 6, 9, 2, { height: 90, shooting: 76, finishing: 82, handles: 76, passing: 80, defense: 70, rebounding: 78, athleticism: 78, iq: 80 }),
      player("Bruce Brown", 6, 4, 1, { height: 77, shooting: 72, finishing: 82, handles: 76, passing: 78, defense: 84, rebounding: 70, athleticism: 84, iq: 80 }),
      player("Patty Mills", 6, 0, 8, { height: 66, shooting: 86, finishing: 78, handles: 80, passing: 78, defense: 70, rebounding: 50, athleticism: 78, iq: 80 }),
      player("Seth Curry", 6, 2, 30, { height: 71, shooting: 90, finishing: 78, handles: 80, passing: 72, defense: 66, rebounding: 52, athleticism: 72, iq: 80 }),
      player("Nic Claxton", 6, 11, 33, { height: 96, shooting: 52, finishing: 84, handles: 64, passing: 66, defense: 86, rebounding: 80, athleticism: 88, iq: 76 }),
      player("Spencer Dinwiddie", 6, 5, 26, { height: 80, shooting: 78, finishing: 82, handles: 86, passing: 80, defense: 68, rebounding: 56, athleticism: 80, iq: 82 }),
      player("Caris LeVert", 6, 6, 22, { height: 82, shooting: 78, finishing: 84, handles: 84, passing: 78, defense: 72, rebounding: 60, athleticism: 84, iq: 76 }),
      player("Jeff Green", 6, 8, 8, { height: 86, shooting: 78, finishing: 82, handles: 72, passing: 68, defense: 74, rebounding: 66, athleticism: 82, iq: 74 }),
    ],
  },
  {
    era: "2020s",
    team: "Hawks",
    note: "Trae Young's deep-range wizardry and a fearless young core stormed to the 2021 Eastern Conference Finals.",
    players: [
      player("Trae Young", 6, 1, 11, { height: 68, shooting: 90, finishing: 84, handles: 92, passing: 96, defense: 58, rebounding: 58, athleticism: 78, iq: 86 }),
      player("Dejounte Murray", 6, 4, 5, { height: 77, shooting: 78, finishing: 84, handles: 86, passing: 84, defense: 86, rebounding: 74, athleticism: 86, iq: 80 }),
      player("John Collins", 6, 9, 20, { height: 90, shooting: 78, finishing: 88, handles: 70, passing: 66, defense: 72, rebounding: 82, athleticism: 92, iq: 74 }),
      player("Clint Capela", 6, 10, 15, { height: 94, shooting: 46, finishing: 86, handles: 56, passing: 60, defense: 84, rebounding: 90, athleticism: 86, iq: 74 }),
      player("Bogdan Bogdanovic", 6, 5, 13, { height: 80, shooting: 86, finishing: 80, handles: 80, passing: 80, defense: 72, rebounding: 62, athleticism: 74, iq: 82 }),
      player("De'Andre Hunter", 6, 8, 12, { height: 86, shooting: 80, finishing: 82, handles: 74, passing: 66, defense: 82, rebounding: 66, athleticism: 82, iq: 76 }),
      player("Kevin Huerter", 6, 7, 3, { height: 84, shooting: 84, finishing: 78, handles: 76, passing: 78, defense: 72, rebounding: 62, athleticism: 76, iq: 80 }),
      player("Jalen Johnson", 6, 8, 1, { height: 86, shooting: 72, finishing: 84, handles: 78, passing: 80, defense: 78, rebounding: 80, athleticism: 90, iq: 76 }),
      player("Onyeka Okongwu", 6, 8, 17, { height: 86, shooting: 56, finishing: 84, handles: 60, passing: 64, defense: 86, rebounding: 82, athleticism: 84, iq: 76 }),
      player("Danilo Gallinari", 6, 10, 8, { height: 94, shooting: 86, finishing: 80, handles: 70, passing: 68, defense: 64, rebounding: 66, athleticism: 66, iq: 78 }),
      player("Lou Williams", 6, 1, 6, { height: 68, shooting: 84, finishing: 82, handles: 86, passing: 80, defense: 62, rebounding: 50, athleticism: 78, iq: 80 }),
      player("Saddiq Bey", 6, 7, 41, { height: 84, shooting: 82, finishing: 78, handles: 72, passing: 66, defense: 74, rebounding: 70, athleticism: 78, iq: 74 }),
      player("Cam Reddish", 6, 8, 22, { height: 86, shooting: 78, finishing: 80, handles: 76, passing: 66, defense: 74, rebounding: 64, athleticism: 86, iq: 72 }),
    ],
  },
  {
    era: "2020s",
    team: "Rockets",
    note: "Houston's youth movement grew up fast — Alperen Sengun's playmaking and a swarm of athletic young talent around veterans Fred VanVleet and Dillon Brooks.",
    players: [
      player("Alperen Sengun", 6, 11, 28, { height: 96, shooting: 72, finishing: 86, handles: 74, passing: 90, defense: 74, rebounding: 84, athleticism: 72, iq: 84 }),
      player("Jalen Green", 6, 4, 4, { height: 77, shooting: 86, finishing: 88, handles: 86, passing: 72, defense: 66, rebounding: 58, athleticism: 96, iq: 72 }),
      player("Fred VanVleet", 6, 0, 5, { height: 66, shooting: 82, finishing: 78, handles: 86, passing: 84, defense: 84, rebounding: 56, athleticism: 74, iq: 86 }),
      player("Dillon Brooks", 6, 6, 9, { height: 82, shooting: 78, finishing: 78, handles: 72, passing: 64, defense: 88, rebounding: 62, athleticism: 82, iq: 72 }),
      player("Jabari Smith Jr.", 6, 11, 10, { height: 96, shooting: 80, finishing: 78, handles: 66, passing: 64, defense: 80, rebounding: 80, athleticism: 82, iq: 74 }),
      player("Amen Thompson", 6, 7, 1, { height: 84, shooting: 62, finishing: 86, handles: 80, passing: 80, defense: 86, rebounding: 78, athleticism: 96, iq: 76 }),
      player("Tari Eason", 6, 8, 17, { height: 86, shooting: 70, finishing: 82, handles: 70, passing: 66, defense: 86, rebounding: 80, athleticism: 88, iq: 74 }),
      player("Jae'Sean Tate", 6, 4, 8, { height: 77, shooting: 70, finishing: 80, handles: 74, passing: 74, defense: 82, rebounding: 70, athleticism: 80, iq: 78 }),
      player("Jeff Green", 6, 8, 32, { height: 86, shooting: 78, finishing: 80, handles: 70, passing: 66, defense: 72, rebounding: 64, athleticism: 78, iq: 76 }),
      player("Kevin Porter Jr.", 6, 4, 3, { height: 77, shooting: 78, finishing: 82, handles: 84, passing: 80, defense: 64, rebounding: 58, athleticism: 86, iq: 70 }),
      player("Eric Gordon", 6, 3, 10, { height: 74, shooting: 82, finishing: 80, handles: 78, passing: 72, defense: 72, rebounding: 56, athleticism: 78, iq: 76 }),
      player("Cam Whitmore", 6, 7, 7, { height: 84, shooting: 78, finishing: 82, handles: 72, passing: 62, defense: 68, rebounding: 66, athleticism: 90, iq: 68 }),
      player("Jock Landale", 6, 11, 2, { height: 96, shooting: 66, finishing: 80, handles: 58, passing: 66, defense: 74, rebounding: 76, athleticism: 72, iq: 74 }),
    ],
  },
  {
    era: "2020s",
    team: "Raptors",
    note: "Scottie Barnes blossomed into a franchise cornerstone as Toronto retooled around Pascal Siakam, Fred VanVleet, and OG Anunoby.",
    players: [
      player("Scottie Barnes", 6, 8, 4, { height: 86, shooting: 74, finishing: 84, handles: 80, passing: 82, defense: 84, rebounding: 80, athleticism: 88, iq: 80 }),
      player("Pascal Siakam", 6, 8, 43, { height: 86, shooting: 78, finishing: 86, handles: 80, passing: 76, defense: 80, rebounding: 76, athleticism: 86, iq: 80 }),
      player("Fred VanVleet", 6, 0, 23, { height: 66, shooting: 82, finishing: 78, handles: 86, passing: 84, defense: 84, rebounding: 56, athleticism: 74, iq: 86 }),
      player("OG Anunoby", 6, 7, 3, { height: 84, shooting: 80, finishing: 80, handles: 72, passing: 64, defense: 90, rebounding: 68, athleticism: 86, iq: 76 }),
      player("Gary Trent Jr.", 6, 5, 33, { height: 80, shooting: 82, finishing: 78, handles: 74, passing: 64, defense: 74, rebounding: 56, athleticism: 78, iq: 72 }),
      player("Precious Achiuwa", 6, 8, 5, { height: 86, shooting: 62, finishing: 82, handles: 68, passing: 64, defense: 82, rebounding: 80, athleticism: 88, iq: 70 }),
      player("Chris Boucher", 6, 9, 25, { height: 90, shooting: 76, finishing: 82, handles: 62, passing: 60, defense: 82, rebounding: 78, athleticism: 86, iq: 70 }),
      player("Immanuel Quickley", 6, 3, 5, { height: 74, shooting: 82, finishing: 80, handles: 84, passing: 82, defense: 78, rebounding: 58, athleticism: 80, iq: 80 }),
      player("RJ Barrett", 6, 6, 9, { height: 82, shooting: 78, finishing: 84, handles: 78, passing: 72, defense: 70, rebounding: 66, athleticism: 82, iq: 74 }),
      player("Jakob Poeltl", 7, 1, 19, { height: 100, shooting: 52, finishing: 84, handles: 58, passing: 70, defense: 84, rebounding: 84, athleticism: 74, iq: 78 }),
      player("Kyle Lowry", 6, 0, 7, { height: 66, shooting: 80, finishing: 80, handles: 86, passing: 86, defense: 84, rebounding: 60, athleticism: 78, iq: 90 }),
      player("Norman Powell", 6, 3, 24, { height: 74, shooting: 80, finishing: 82, handles: 76, passing: 66, defense: 76, rebounding: 56, athleticism: 82, iq: 74 }),
      player("Khem Birch", 6, 9, 24, { height: 90, shooting: 58, finishing: 80, handles: 58, passing: 64, defense: 78, rebounding: 76, athleticism: 78, iq: 70 }),
    ],
  },
  {
    era: "1990s",
    team: "Pistons",
    note: "After the Bad Boys faded, Grant Hill's all-around brilliance and Joe Dumars's steady hand kept Detroit competitive.",
    players: [
      player("Grant Hill", 6, 8, 33, { height: 86, shooting: 82, finishing: 92, handles: 88, passing: 88, defense: 84, rebounding: 76, athleticism: 94, iq: 86 }),
      player("Joe Dumars", 6, 3, 4, { height: 74, shooting: 84, finishing: 82, handles: 82, passing: 80, defense: 90, rebounding: 58, athleticism: 80, iq: 88 }),
      player("Lindsey Hunter", 6, 2, 10, { height: 71, shooting: 78, finishing: 78, handles: 84, passing: 78, defense: 84, rebounding: 54, athleticism: 84, iq: 74 }),
      player("Otis Thorpe", 6, 10, 33, { height: 94, shooting: 70, finishing: 82, handles: 64, passing: 68, defense: 78, rebounding: 84, athleticism: 80, iq: 76 }),
      player("Allan Houston", 6, 6, 20, { height: 82, shooting: 86, finishing: 82, handles: 78, passing: 72, defense: 70, rebounding: 58, athleticism: 78, iq: 78 }),
      player("Terry Mills", 6, 10, 34, { height: 94, shooting: 78, finishing: 78, handles: 64, passing: 66, defense: 70, rebounding: 76, athleticism: 72, iq: 72 }),
      player("Theo Ratliff", 6, 10, 42, { height: 94, shooting: 56, finishing: 80, handles: 58, passing: 60, defense: 90, rebounding: 80, athleticism: 86, iq: 74 }),
      player("Bison Dele", 6, 10, 55, { height: 94, shooting: 70, finishing: 82, handles: 64, passing: 66, defense: 78, rebounding: 78, athleticism: 82, iq: 72 }),
      player("Jerry Stackhouse", 6, 6, 42, { height: 82, shooting: 80, finishing: 86, handles: 82, passing: 78, defense: 72, rebounding: 64, athleticism: 88, iq: 76 }),
      player("Grant Long", 6, 8, 44, { height: 86, shooting: 70, finishing: 80, handles: 70, passing: 72, defense: 82, rebounding: 78, athleticism: 78, iq: 76 }),
      player("Mark Macon", 6, 5, 15, { height: 80, shooting: 74, finishing: 78, handles: 80, passing: 78, defense: 82, rebounding: 58, athleticism: 82, iq: 72 }),
      player("Michael Curry", 6, 5, 30, { height: 80, shooting: 72, finishing: 76, handles: 72, passing: 70, defense: 82, rebounding: 60, athleticism: 78, iq: 78 }),
      player("Don Reid", 6, 8, 52, { height: 86, shooting: 58, finishing: 76, handles: 60, passing: 62, defense: 80, rebounding: 74, athleticism: 80, iq: 70 }),
    ],
  },
  {
    era: "1990s",
    team: "Bullets",
    note: "Washington's young trio of Chris Webber, Juwan Howard, and Rod Strickland flashed brilliance before injuries derailed the run.",
    players: [
      player("Chris Webber", 6, 10, 4, { height: 94, shooting: 78, finishing: 86, handles: 82, passing: 86, defense: 78, rebounding: 88, athleticism: 86, iq: 82 }),
      player("Juwan Howard", 6, 9, 5, { height: 90, shooting: 80, finishing: 84, handles: 72, passing: 76, defense: 74, rebounding: 76, athleticism: 76, iq: 80 }),
      player("Rod Strickland", 6, 3, 1, { height: 74, shooting: 74, finishing: 84, handles: 92, passing: 92, defense: 72, rebounding: 62, athleticism: 84, iq: 82 }),
      player("Calbert Cheaney", 6, 7, 40, { height: 84, shooting: 78, finishing: 80, handles: 74, passing: 70, defense: 76, rebounding: 64, athleticism: 80, iq: 74 }),
      player("Gheorghe Muresan", 7, 7, 77, { height: 100, shooting: 58, finishing: 80, handles: 48, passing: 56, defense: 80, rebounding: 82, athleticism: 56, iq: 70 }),
      player("Tracy Murray", 6, 7, 5, { height: 84, shooting: 84, finishing: 78, handles: 72, passing: 64, defense: 66, rebounding: 62, athleticism: 78, iq: 72 }),
      player("Harvey Grant", 6, 9, 54, { height: 90, shooting: 74, finishing: 80, handles: 70, passing: 70, defense: 80, rebounding: 74, athleticism: 80, iq: 74 }),
      player("Pervis Ellison", 6, 9, 43, { height: 90, shooting: 64, finishing: 80, handles: 62, passing: 66, defense: 82, rebounding: 80, athleticism: 80, iq: 72 }),
      player("Don MacLean", 6, 10, 34, { height: 94, shooting: 80, finishing: 80, handles: 66, passing: 66, defense: 64, rebounding: 72, athleticism: 66, iq: 72 }),
      player("Mark Price", 6, 0, 25, { height: 66, shooting: 90, finishing: 80, handles: 88, passing: 88, defense: 68, rebounding: 54, athleticism: 74, iq: 88 }),
      player("Tim Legler", 6, 4, 33, { height: 77, shooting: 90, finishing: 76, handles: 76, passing: 72, defense: 68, rebounding: 54, athleticism: 72, iq: 78 }),
      player("Ledell Eackles", 6, 5, 12, { height: 80, shooting: 78, finishing: 78, handles: 76, passing: 70, defense: 70, rebounding: 60, athleticism: 80, iq: 72 }),
      player("Robert Pack", 6, 2, 3, { height: 71, shooting: 74, finishing: 80, handles: 86, passing: 82, defense: 70, rebounding: 54, athleticism: 86, iq: 74 }),
    ],
  },
  {
    era: "2000s",
    team: "Bulls",
    note: "The 'Baby Bulls' — a young, athletic Chicago core of Ben Gordon, Luol Deng, Kirk Hinrich, and Tyson Chandler brought the franchise back to the playoffs.",
    players: [
      player("Ben Gordon", 6, 3, 7, { height: 74, shooting: 86, finishing: 82, handles: 82, passing: 72, defense: 66, rebounding: 54, athleticism: 82, iq: 74 }),
      player("Luol Deng", 6, 9, 9, { height: 90, shooting: 80, finishing: 82, handles: 74, passing: 72, defense: 82, rebounding: 74, athleticism: 82, iq: 78 }),
      player("Kirk Hinrich", 6, 3, 12, { height: 74, shooting: 80, finishing: 78, handles: 84, passing: 82, defense: 84, rebounding: 58, athleticism: 78, iq: 80 }),
      player("Tyson Chandler", 7, 1, 3, { height: 100, shooting: 46, finishing: 82, handles: 58, passing: 64, defense: 84, rebounding: 86, athleticism: 84, iq: 74 }),
      player("Eddy Curry", 6, 11, 2, { height: 96, shooting: 62, finishing: 84, handles: 60, passing: 58, defense: 66, rebounding: 74, athleticism: 80, iq: 66 }),
      player("Andres Nocioni", 6, 7, 5, { height: 84, shooting: 78, finishing: 80, handles: 72, passing: 68, defense: 80, rebounding: 70, athleticism: 80, iq: 74 }),
      player("Ben Wallace", 6, 9, 3, { height: 90, shooting: 40, finishing: 76, handles: 54, passing: 60, defense: 98, rebounding: 94, athleticism: 86, iq: 80 }),
      player("Joakim Noah", 6, 11, 13, { height: 96, shooting: 54, finishing: 80, handles: 66, passing: 82, defense: 90, rebounding: 86, athleticism: 82, iq: 84 }),
      player("Derrick Rose", 6, 3, 1, { height: 74, shooting: 78, finishing: 88, handles: 92, passing: 84, defense: 72, rebounding: 60, athleticism: 96, iq: 84 }),
      player("Chris Duhon", 6, 1, 21, { height: 68, shooting: 74, finishing: 76, handles: 82, passing: 82, defense: 78, rebounding: 54, athleticism: 78, iq: 78 }),
      player("Thabo Sefolosha", 6, 7, 2, { height: 84, shooting: 70, finishing: 78, handles: 72, passing: 68, defense: 84, rebounding: 64, athleticism: 84, iq: 74 }),
      player("P.J. Brown", 6, 11, 42, { height: 96, shooting: 68, finishing: 78, handles: 62, passing: 66, defense: 82, rebounding: 80, athleticism: 76, iq: 80 }),
      player("Adrian Griffin", 6, 5, 16, { height: 80, shooting: 70, finishing: 78, handles: 74, passing: 70, defense: 82, rebounding: 66, athleticism: 80, iq: 76 }),
    ],
  },
  {
    era: "2010s",
    team: "Timberwolves",
    note: "Kevin Love's double-doubles gave way to a thrilling young core of Karl-Anthony Towns and Andrew Wiggins, briefly turbo-charged by Jimmy Butler.",
    players: [
      player("Karl-Anthony Towns", 7, 0, 32, { height: 98, shooting: 82, finishing: 86, handles: 72, passing: 72, defense: 74, rebounding: 86, athleticism: 80, iq: 78 }),
      player("Andrew Wiggins", 6, 7, 22, { height: 84, shooting: 78, finishing: 84, handles: 76, passing: 66, defense: 72, rebounding: 62, athleticism: 92, iq: 74 }),
      player("Kevin Love", 6, 10, 42, { height: 94, shooting: 82, finishing: 82, handles: 70, passing: 80, defense: 68, rebounding: 90, athleticism: 70, iq: 80 }),
      player("Jimmy Butler", 6, 7, 23, { height: 84, shooting: 82, finishing: 84, handles: 80, passing: 80, defense: 92, rebounding: 72, athleticism: 84, iq: 88 }),
      player("Ricky Rubio", 6, 3, 9, { height: 74, shooting: 66, finishing: 76, handles: 88, passing: 92, defense: 82, rebounding: 64, athleticism: 78, iq: 84 }),
      player("Nikola Pekovic", 6, 11, 14, { height: 96, shooting: 62, finishing: 84, handles: 58, passing: 62, defense: 74, rebounding: 82, athleticism: 72, iq: 72 }),
      player("Zach LaVine", 6, 5, 8, { height: 80, shooting: 88, finishing: 84, handles: 80, passing: 70, defense: 62, rebounding: 56, athleticism: 96, iq: 72 }),
      player("Derrick Williams", 6, 8, 7, { height: 86, shooting: 72, finishing: 80, handles: 70, passing: 64, defense: 66, rebounding: 70, athleticism: 86, iq: 68 }),
      player("Gorgui Dieng", 6, 11, 5, { height: 96, shooting: 70, finishing: 78, handles: 62, passing: 68, defense: 80, rebounding: 80, athleticism: 76, iq: 74 }),
      player("Shabazz Muhammad", 6, 6, 15, { height: 82, shooting: 76, finishing: 80, handles: 70, passing: 60, defense: 64, rebounding: 66, athleticism: 82, iq: 68 }),
      player("J.J. Barea", 6, 0, 5, { height: 66, shooting: 76, finishing: 80, handles: 84, passing: 82, defense: 64, rebounding: 52, athleticism: 78, iq: 78 }),
      player("Michael Beasley", 6, 9, 8, { height: 90, shooting: 78, finishing: 82, handles: 76, passing: 64, defense: 62, rebounding: 72, athleticism: 82, iq: 66 }),
      player("Corey Brewer", 6, 9, 13, { height: 90, shooting: 70, finishing: 78, handles: 72, passing: 68, defense: 80, rebounding: 62, athleticism: 86, iq: 72 }),
    ],
  },
  {
    era: "2000s",
    team: "Trail Blazers",
    note: "From the brawling 'Jail Blazers' of Rasheed Wallace to the rise of Brandon Roy and LaMarcus Aldridge, Portland spanned two distinct eras.",
    players: [
      player("Brandon Roy", 6, 6, 7, { height: 82, shooting: 84, finishing: 86, handles: 84, passing: 82, defense: 74, rebounding: 64, athleticism: 82, iq: 86 }),
      player("LaMarcus Aldridge", 6, 11, 12, { height: 96, shooting: 82, finishing: 86, handles: 70, passing: 70, defense: 78, rebounding: 84, athleticism: 78, iq: 80 }),
      player("Rasheed Wallace", 6, 11, 30, { height: 96, shooting: 82, finishing: 84, handles: 68, passing: 74, defense: 88, rebounding: 82, athleticism: 82, iq: 80 }),
      player("Scottie Pippen", 6, 8, 33, { height: 86, shooting: 78, finishing: 86, handles: 84, passing: 86, defense: 90, rebounding: 80, athleticism: 88, iq: 90 }),
      player("Zach Randolph", 6, 9, 50, { height: 90, shooting: 76, finishing: 84, handles: 66, passing: 70, defense: 62, rebounding: 86, athleticism: 70, iq: 80 }),
      player("Damon Stoudamire", 5, 10, 3, { height: 62, shooting: 80, finishing: 80, handles: 90, passing: 88, defense: 66, rebounding: 52, athleticism: 82, iq: 80 }),
      player("Bonzi Wells", 6, 5, 6, { height: 80, shooting: 78, finishing: 84, handles: 80, passing: 74, defense: 78, rebounding: 72, athleticism: 84, iq: 72 }),
      player("Steve Smith", 6, 8, 8, { height: 86, shooting: 84, finishing: 80, handles: 76, passing: 74, defense: 74, rebounding: 64, athleticism: 78, iq: 80 }),
      player("Arvydas Sabonis", 7, 3, 11, { height: 100, shooting: 78, finishing: 84, handles: 70, passing: 90, defense: 82, rebounding: 84, athleticism: 60, iq: 92 }),
      player("Joel Przybilla", 7, 1, 10, { height: 100, shooting: 46, finishing: 78, handles: 54, passing: 58, defense: 84, rebounding: 82, athleticism: 72, iq: 72 }),
      player("Travis Outlaw", 6, 9, 25, { height: 90, shooting: 76, finishing: 82, handles: 70, passing: 62, defense: 70, rebounding: 66, athleticism: 90, iq: 68 }),
      player("Ruben Patterson", 6, 5, 21, { height: 80, shooting: 74, finishing: 82, handles: 74, passing: 68, defense: 84, rebounding: 66, athleticism: 86, iq: 70 }),
      player("Nicolas Batum", 6, 8, 88, { height: 86, shooting: 78, finishing: 78, handles: 72, passing: 74, defense: 82, rebounding: 66, athleticism: 82, iq: 78 }),
    ],
  },
  {
    era: "2000s",
    team: "Hawks",
    note: "Atlanta's athletic young core of Joe Johnson, Josh Smith, and Al Horford ended a long playoff drought with a fearless, high-flying style.",
    players: [
      player("Joe Johnson", 6, 7, 2, { height: 84, shooting: 84, finishing: 84, handles: 90, passing: 80, defense: 74, rebounding: 64, athleticism: 80, iq: 86 }),
      player("Josh Smith", 6, 9, 5, { height: 90, shooting: 70, finishing: 82, handles: 74, passing: 76, defense: 86, rebounding: 80, athleticism: 92, iq: 74 }),
      player("Al Horford", 6, 10, 15, { height: 94, shooting: 74, finishing: 84, handles: 70, passing: 78, defense: 84, rebounding: 84, athleticism: 80, iq: 84 }),
      player("Marvin Williams", 6, 9, 24, { height: 90, shooting: 76, finishing: 80, handles: 70, passing: 66, defense: 74, rebounding: 74, athleticism: 82, iq: 72 }),
      player("Mike Bibby", 6, 1, 10, { height: 68, shooting: 82, finishing: 80, handles: 86, passing: 84, defense: 68, rebounding: 56, athleticism: 78, iq: 86 }),
      player("Jamal Crawford", 6, 5, 11, { height: 80, shooting: 84, finishing: 84, handles: 95, passing: 78, defense: 64, rebounding: 56, athleticism: 82, iq: 78 }),
      player("Zaza Pachulia", 6, 11, 27, { height: 96, shooting: 64, finishing: 78, handles: 60, passing: 66, defense: 78, rebounding: 80, athleticism: 68, iq: 76 }),
      player("Tyronn Lue", 6, 0, 7, { height: 66, shooting: 76, finishing: 78, handles: 82, passing: 78, defense: 74, rebounding: 52, athleticism: 78, iq: 78 }),
      player("Speedy Claxton", 6, 0, 5, { height: 66, shooting: 74, finishing: 78, handles: 84, passing: 82, defense: 78, rebounding: 54, athleticism: 82, iq: 74 }),
      player("Josh Childress", 6, 8, 1, { height: 86, shooting: 76, finishing: 80, handles: 72, passing: 70, defense: 78, rebounding: 72, athleticism: 84, iq: 74 }),
      player("Anthony Johnson", 6, 3, 3, { height: 74, shooting: 74, finishing: 78, handles: 82, passing: 80, defense: 74, rebounding: 56, athleticism: 76, iq: 78 }),
      player("Shelden Williams", 6, 9, 23, { height: 90, shooting: 58, finishing: 78, handles: 60, passing: 62, defense: 80, rebounding: 80, athleticism: 76, iq: 70 }),
      player("Maurice Evans", 6, 5, 6, { height: 80, shooting: 78, finishing: 78, handles: 72, passing: 66, defense: 76, rebounding: 62, athleticism: 82, iq: 72 }),
    ],
  },
  {
    era: "2010s",
    team: "Kings",
    note: "DeMarcus Cousins's dominance anchored a frustrating but talented Sacramento group that flashed real firepower.",
    players: [
      player("DeMarcus Cousins", 6, 11, 15, { height: 96, shooting: 80, finishing: 88, handles: 72, passing: 78, defense: 78, rebounding: 90, athleticism: 82, iq: 78 }),
      player("Isaiah Thomas", 5, 9, 22, { height: 58, shooting: 88, finishing: 90, handles: 90, passing: 84, defense: 60, rebounding: 52, athleticism: 86, iq: 80 }),
      player("Rudy Gay", 6, 8, 8, { height: 86, shooting: 80, finishing: 84, handles: 78, passing: 70, defense: 74, rebounding: 68, athleticism: 86, iq: 78 }),
      player("Tyreke Evans", 6, 6, 13, { height: 82, shooting: 76, finishing: 86, handles: 86, passing: 80, defense: 72, rebounding: 72, athleticism: 88, iq: 74 }),
      player("Marcus Thornton", 6, 4, 23, { height: 77, shooting: 82, finishing: 82, handles: 78, passing: 66, defense: 66, rebounding: 60, athleticism: 82, iq: 70 }),
      player("Ben McLemore", 6, 3, 16, { height: 74, shooting: 78, finishing: 80, handles: 72, passing: 60, defense: 66, rebounding: 56, athleticism: 88, iq: 66 }),
      player("Carl Landry", 6, 8, 24, { height: 86, shooting: 74, finishing: 84, handles: 66, passing: 64, defense: 70, rebounding: 74, athleticism: 78, iq: 74 }),
      player("Jason Thompson", 6, 11, 34, { height: 96, shooting: 66, finishing: 80, handles: 62, passing: 66, defense: 74, rebounding: 80, athleticism: 78, iq: 72 }),
      player("Darren Collison", 6, 0, 7, { height: 66, shooting: 78, finishing: 80, handles: 84, passing: 82, defense: 72, rebounding: 52, athleticism: 84, iq: 76 }),
      player("Omri Casspi", 6, 9, 18, { height: 90, shooting: 78, finishing: 78, handles: 70, passing: 66, defense: 66, rebounding: 68, athleticism: 78, iq: 72 }),
      player("John Salmons", 6, 6, 5, { height: 82, shooting: 78, finishing: 80, handles: 78, passing: 74, defense: 78, rebounding: 62, athleticism: 78, iq: 76 }),
      player("Beno Udrih", 6, 3, 19, { height: 74, shooting: 78, finishing: 80, handles: 82, passing: 80, defense: 68, rebounding: 56, athleticism: 76, iq: 78 }),
      player("Francisco Garcia", 6, 7, 32, { height: 84, shooting: 76, finishing: 78, handles: 72, passing: 66, defense: 78, rebounding: 62, athleticism: 80, iq: 72 }),
    ],
  },
  {
    era: "2020s",
    team: "Jazz",
    note: "Donovan Mitchell and Rudy Gobert powered the league's best regular-season team in 2021 with elite shooting and rim protection.",
    players: [
      player("Donovan Mitchell", 6, 1, 45, { height: 68, shooting: 90, finishing: 88, handles: 86, passing: 78, defense: 76, rebounding: 56, athleticism: 88, iq: 80 }),
      player("Rudy Gobert", 7, 1, 27, { height: 100, shooting: 46, finishing: 84, handles: 54, passing: 62, defense: 98, rebounding: 92, athleticism: 82, iq: 74 }),
      player("Mike Conley", 6, 1, 11, { height: 68, shooting: 82, finishing: 80, handles: 86, passing: 88, defense: 80, rebounding: 58, athleticism: 76, iq: 90 }),
      player("Bojan Bogdanovic", 6, 7, 44, { height: 84, shooting: 86, finishing: 80, handles: 72, passing: 66, defense: 62, rebounding: 60, athleticism: 68, iq: 80 }),
      player("Jordan Clarkson", 6, 5, 0, { height: 80, shooting: 82, finishing: 84, handles: 82, passing: 70, defense: 62, rebounding: 56, athleticism: 82, iq: 72 }),
      player("Royce O'Neale", 6, 4, 23, { height: 77, shooting: 78, finishing: 76, handles: 70, passing: 72, defense: 84, rebounding: 66, athleticism: 78, iq: 78 }),
      player("Joe Ingles", 6, 8, 2, { height: 86, shooting: 84, finishing: 76, handles: 78, passing: 82, defense: 72, rebounding: 62, athleticism: 64, iq: 84 }),
      player("Derrick Favors", 6, 9, 15, { height: 90, shooting: 58, finishing: 82, handles: 62, passing: 64, defense: 82, rebounding: 82, athleticism: 82, iq: 74 }),
      player("Jarred Vanderbilt", 6, 9, 8, { height: 90, shooting: 52, finishing: 80, handles: 66, passing: 70, defense: 86, rebounding: 82, athleticism: 86, iq: 74 }),
      player("Georges Niang", 6, 7, 31, { height: 84, shooting: 82, finishing: 76, handles: 68, passing: 66, defense: 62, rebounding: 64, athleticism: 62, iq: 76 }),
      player("Hassan Whiteside", 7, 0, 21, { height: 98, shooting: 52, finishing: 82, handles: 56, passing: 58, defense: 86, rebounding: 88, athleticism: 78, iq: 70 }),
      player("Dante Exum", 6, 5, 11, { height: 80, shooting: 70, finishing: 78, handles: 80, passing: 78, defense: 78, rebounding: 56, athleticism: 84, iq: 72 }),
      player("Rudy Gay", 6, 8, 8, { height: 86, shooting: 78, finishing: 82, handles: 76, passing: 70, defense: 72, rebounding: 68, athleticism: 78, iq: 78 }),
    ],
  },
  {
    era: "2010s",
    team: "Hornets",
    note: "Kemba Walker's fearless shotmaking carried a scrappy Charlotte squad, with Al Jefferson's low-post game anchoring the frontcourt.",
    players: [
      player("Kemba Walker", 6, 0, 15, { height: 66, shooting: 88, finishing: 87, handles: 90, passing: 82, defense: 66, rebounding: 58, athleticism: 86, iq: 82 }),
      player("Al Jefferson", 6, 10, 25, { height: 94, shooting: 70, finishing: 86, handles: 64, passing: 70, defense: 70, rebounding: 84, athleticism: 70, iq: 78 }),
      player("Nicolas Batum", 6, 8, 5, { height: 86, shooting: 80, finishing: 78, handles: 76, passing: 78, defense: 82, rebounding: 68, athleticism: 80, iq: 80 }),
      player("Marvin Williams", 6, 9, 2, { height: 90, shooting: 80, finishing: 78, handles: 66, passing: 64, defense: 74, rebounding: 74, athleticism: 76, iq: 74 }),
      player("Gerald Henderson", 6, 5, 9, { height: 80, shooting: 78, finishing: 82, handles: 78, passing: 68, defense: 78, rebounding: 62, athleticism: 86, iq: 72 }),
      player("Cody Zeller", 7, 0, 40, { height: 98, shooting: 64, finishing: 82, handles: 62, passing: 68, defense: 78, rebounding: 80, athleticism: 80, iq: 76 }),
      player("Michael Kidd-Gilchrist", 6, 7, 14, { height: 84, shooting: 58, finishing: 80, handles: 68, passing: 66, defense: 86, rebounding: 72, athleticism: 86, iq: 72 }),
      player("Jeremy Lin", 6, 3, 7, { height: 74, shooting: 76, finishing: 82, handles: 84, passing: 82, defense: 70, rebounding: 58, athleticism: 82, iq: 76 }),
      player("Bismack Biyombo", 6, 8, 8, { height: 86, shooting: 40, finishing: 78, handles: 52, passing: 56, defense: 86, rebounding: 82, athleticism: 84, iq: 66 }),
      player("Frank Kaminsky", 7, 0, 44, { height: 98, shooting: 80, finishing: 78, handles: 66, passing: 68, defense: 60, rebounding: 72, athleticism: 62, iq: 74 }),
      player("Jeremy Lamb", 6, 5, 3, { height: 80, shooting: 80, finishing: 82, handles: 76, passing: 68, defense: 68, rebounding: 62, athleticism: 82, iq: 72 }),
      player("Boris Diaw", 6, 8, 32, { height: 86, shooting: 76, finishing: 80, handles: 80, passing: 88, defense: 74, rebounding: 72, athleticism: 72, iq: 90 }),
      player("D.J. Augustin", 6, 0, 14, { height: 66, shooting: 80, finishing: 78, handles: 84, passing: 82, defense: 66, rebounding: 52, athleticism: 78, iq: 76 }),
    ],
  },
  {
    era: "2020s",
    team: "Bulls",
    note: "Chicago's veteran trio of DeMar DeRozan, Zach LaVine, and Nikola Vucevic brought playoff basketball back to the United Center.",
    players: [
      player("DeMar DeRozan", 6, 6, 11, { height: 82, shooting: 86, finishing: 88, handles: 82, passing: 80, defense: 74, rebounding: 66, athleticism: 80, iq: 92 }),
      player("Zach LaVine", 6, 5, 8, { height: 80, shooting: 88, finishing: 86, handles: 82, passing: 74, defense: 64, rebounding: 58, athleticism: 94, iq: 74 }),
      player("Nikola Vucevic", 6, 10, 9, { height: 94, shooting: 80, finishing: 84, handles: 68, passing: 78, defense: 70, rebounding: 84, athleticism: 66, iq: 80 }),
      player("Lonzo Ball", 6, 6, 2, { height: 82, shooting: 76, finishing: 78, handles: 82, passing: 88, defense: 84, rebounding: 72, athleticism: 82, iq: 82 }),
      player("Coby White", 6, 5, 0, { height: 80, shooting: 80, finishing: 80, handles: 82, passing: 74, defense: 64, rebounding: 56, athleticism: 84, iq: 72 }),
      player("Patrick Williams", 6, 7, 44, { height: 84, shooting: 76, finishing: 80, handles: 68, passing: 64, defense: 80, rebounding: 70, athleticism: 82, iq: 72 }),
      player("Alex Caruso", 6, 5, 6, { height: 80, shooting: 74, finishing: 78, handles: 74, passing: 74, defense: 90, rebounding: 60, athleticism: 82, iq: 84 }),
      player("Ayo Dosunmu", 6, 5, 12, { height: 80, shooting: 76, finishing: 80, handles: 78, passing: 76, defense: 80, rebounding: 58, athleticism: 82, iq: 76 }),
      player("Andre Drummond", 6, 10, 3, { height: 94, shooting: 46, finishing: 80, handles: 56, passing: 62, defense: 76, rebounding: 92, athleticism: 80, iq: 68 }),
      player("Derrick Jones Jr.", 6, 5, 5, { height: 80, shooting: 68, finishing: 80, handles: 66, passing: 60, defense: 80, rebounding: 64, athleticism: 94, iq: 68 }),
      player("Javonte Green", 6, 4, 24, { height: 77, shooting: 70, finishing: 80, handles: 68, passing: 62, defense: 82, rebounding: 64, athleticism: 88, iq: 70 }),
      player("Tomas Satoransky", 6, 7, 31, { height: 84, shooting: 74, finishing: 78, handles: 80, passing: 82, defense: 74, rebounding: 64, athleticism: 74, iq: 78 }),
      player("Thaddeus Young", 6, 8, 21, { height: 86, shooting: 72, finishing: 82, handles: 74, passing: 74, defense: 80, rebounding: 74, athleticism: 80, iq: 76 }),
    ],
  },
  {
    era: "1970s",
    team: "Pistons",
    note: "Bob Lanier's bruising post play and Dave Bing's scoring kept Detroit competitive through a transitional decade.",
    players: [
      player("Bob Lanier", 6, 11, 16, { height: 96, shooting: 80, finishing: 88, handles: 70, passing: 80, defense: 80, rebounding: 88, athleticism: 78, iq: 84 }),
      player("Dave Bing", 6, 3, 21, { height: 74, shooting: 84, finishing: 84, handles: 86, passing: 86, defense: 74, rebounding: 58, athleticism: 84, iq: 84 }),
      player("Bob McAdoo", 6, 9, 11, { height: 90, shooting: 90, finishing: 90, handles: 72, passing: 72, defense: 76, rebounding: 88, athleticism: 88, iq: 82 }),
      player("M.L. Carr", 6, 6, 30, { height: 82, shooting: 76, finishing: 80, handles: 74, passing: 72, defense: 82, rebounding: 70, athleticism: 82, iq: 76 }),
      player("Curtis Rowe", 6, 7, 34, { height: 84, shooting: 74, finishing: 80, handles: 68, passing: 70, defense: 78, rebounding: 78, athleticism: 78, iq: 74 }),
      player("John Mengelt", 6, 1, 33, { height: 68, shooting: 80, finishing: 78, handles: 80, passing: 74, defense: 70, rebounding: 54, athleticism: 78, iq: 72 }),
      player("Eric Money", 6, 2, 22, { height: 71, shooting: 78, finishing: 80, handles: 84, passing: 78, defense: 70, rebounding: 54, athleticism: 82, iq: 72 }),
      player("Chris Ford", 6, 5, 42, { height: 80, shooting: 78, finishing: 78, handles: 80, passing: 78, defense: 80, rebounding: 60, athleticism: 78, iq: 80 }),
      player("Howard Porter", 6, 8, 12, { height: 86, shooting: 74, finishing: 80, handles: 66, passing: 66, defense: 74, rebounding: 78, athleticism: 80, iq: 72 }),
      player("George Trapp", 6, 8, 30, { height: 86, shooting: 76, finishing: 80, handles: 66, passing: 64, defense: 72, rebounding: 76, athleticism: 78, iq: 70 }),
      player("Kevin Porter", 6, 2, 3, { height: 71, shooting: 76, finishing: 80, handles: 86, passing: 88, defense: 70, rebounding: 56, athleticism: 82, iq: 74 }),
      player("Al Eberhard", 6, 6, 24, { height: 82, shooting: 74, finishing: 78, handles: 70, passing: 68, defense: 76, rebounding: 72, athleticism: 78, iq: 72 }),
      player("Willie Norwood", 6, 7, 25, { height: 84, shooting: 72, finishing: 78, handles: 68, passing: 66, defense: 78, rebounding: 76, athleticism: 80, iq: 70 }),
    ],
  },
  {
    era: "1990s",
    team: "Celtics",
    note: "A decade of transition — the last of the Big Three gave way to Reggie Lewis's tragic promise and, later, a young Paul Pierce and Antoine Walker.",
    players: [
      player("Reggie Lewis", 6, 7, 35, { height: 84, shooting: 82, finishing: 84, handles: 80, passing: 74, defense: 82, rebounding: 66, athleticism: 84, iq: 80 }),
      player("Paul Pierce", 6, 7, 34, { height: 84, shooting: 82, finishing: 86, handles: 80, passing: 76, defense: 76, rebounding: 66, athleticism: 78, iq: 86 }),
      player("Antoine Walker", 6, 9, 8, { height: 90, shooting: 78, finishing: 82, handles: 80, passing: 80, defense: 72, rebounding: 80, athleticism: 80, iq: 74 }),
      player("Dee Brown", 6, 1, 7, { height: 68, shooting: 78, finishing: 80, handles: 86, passing: 82, defense: 80, rebounding: 56, athleticism: 88, iq: 78 }),
      player("Robert Parish", 7, 0, 0, { height: 98, shooting: 76, finishing: 88, handles: 62, passing: 70, defense: 86, rebounding: 90, athleticism: 76, iq: 86 }),
      player("Kevin McHale", 6, 10, 32, { height: 94, shooting: 82, finishing: 94, handles: 74, passing: 74, defense: 90, rebounding: 86, athleticism: 76, iq: 90 }),
      player("Dino Radja", 6, 11, 40, { height: 96, shooting: 76, finishing: 84, handles: 66, passing: 70, defense: 70, rebounding: 80, athleticism: 72, iq: 76 }),
      player("Rick Fox", 6, 7, 44, { height: 84, shooting: 78, finishing: 80, handles: 76, passing: 74, defense: 78, rebounding: 66, athleticism: 80, iq: 78 }),
      player("Sherman Douglas", 6, 0, 20, { height: 66, shooting: 74, finishing: 82, handles: 86, passing: 86, defense: 70, rebounding: 54, athleticism: 82, iq: 78 }),
      player("Ron Mercer", 6, 7, 4, { height: 84, shooting: 80, finishing: 84, handles: 78, passing: 68, defense: 72, rebounding: 62, athleticism: 86, iq: 72 }),
      player("Xavier McDaniel", 6, 7, 34, { height: 84, shooting: 76, finishing: 82, handles: 70, passing: 66, defense: 78, rebounding: 78, athleticism: 80, iq: 74 }),
      player("Kevin Gamble", 6, 5, 34, { height: 80, shooting: 80, finishing: 80, handles: 76, passing: 72, defense: 72, rebounding: 60, athleticism: 78, iq: 74 }),
      player("David Wesley", 6, 1, 11, { height: 68, shooting: 78, finishing: 80, handles: 84, passing: 80, defense: 78, rebounding: 56, athleticism: 80, iq: 76 }),
    ],
  },
];

// --- GOLDEN ROLLS -----------------------------------------------------------
// Three legendary USA Olympic super-rosters. NOT part of the normal teamEras
// pool — they only surface on a rare "golden roll" (see pickTeamEra). Stacked
// with the best players ever at peak form, so landing one is a jackpot.
const goldenTeams = [
  {
    era: "1992",
    team: "USA · Dream Team",
    golden: true,
    note: "The original. The greatest collection of talent ever assembled — Barcelona, untouchable.",
    players: [
      player("Michael Jordan", 6, 6, 9, { height: 82, shooting: 97, finishing: 100, handles: 100, passing: 97, defense: 100, rebounding: 90, athleticism: 100, iq: 100 }),
      player("Magic Johnson", 6, 9, 15, { height: 90, shooting: 94, finishing: 94, handles: 96, passing: 100, defense: 92, rebounding: 96, athleticism: 92, iq: 100 }),
      player("Larry Bird", 6, 9, 7, { height: 90, shooting: 100, finishing: 94, handles: 95, passing: 100, defense: 94, rebounding: 96, athleticism: 90, iq: 100 }),
      player("Charles Barkley", 6, 6, 14, { height: 82, shooting: 93, finishing: 94, handles: 94, passing: 94, defense: 94, rebounding: 100, athleticism: 98, iq: 97 }),
      player("Patrick Ewing", 7, 0, 6, { height: 98, shooting: 90, finishing: 97, handles: 86, passing: 87, defense: 99, rebounding: 98, athleticism: 95, iq: 95 }),
      player("Scottie Pippen", 6, 8, 8, { height: 87, shooting: 91, finishing: 97, handles: 94, passing: 95, defense: 100, rebounding: 94, athleticism: 98, iq: 96 }),
      player("Karl Malone", 6, 9, 11, { height: 90, shooting: 93, finishing: 98, handles: 90, passing: 93, defense: 96, rebounding: 98, athleticism: 98, iq: 95 }),
      player("John Stockton", 6, 1, 12, { height: 68, shooting: 94, finishing: 92, handles: 98, passing: 100, defense: 93, rebounding: 84, athleticism: 90, iq: 98 }),
      player("David Robinson", 7, 1, 5, { height: 100, shooting: 91, finishing: 98, handles: 88, passing: 90, defense: 100, rebounding: 99, athleticism: 99, iq: 97 }),
      player("Clyde Drexler", 6, 7, 10, { height: 84, shooting: 94, finishing: 96, handles: 96, passing: 95, defense: 96, rebounding: 93, athleticism: 97, iq: 94 }),
      player("Chris Mullin", 6, 6, 13, { height: 82, shooting: 98, finishing: 94, handles: 94, passing: 95, defense: 90, rebounding: 88, athleticism: 90, iq: 97 }),
      player("Christian Laettner", 6, 11, 3, { height: 96, shooting: 93, finishing: 94, handles: 87, passing: 89, defense: 91, rebounding: 94, athleticism: 92, iq: 94 }),
    ],
  },
  {
    era: "2008",
    team: "USA · Redeem Team",
    golden: true,
    note: "Beijing. Kobe and a hungry LeBron led the mission to take back the gold — and they did.",
    players: [
      player("Kobe Bryant", 6, 6, 10, { height: 82, shooting: 98, finishing: 100, handles: 98, passing: 93, defense: 98, rebounding: 88, athleticism: 99, iq: 98 }),
      player("LeBron James", 6, 8, 6, { height: 87, shooting: 93, finishing: 100, handles: 98, passing: 100, defense: 99, rebounding: 92, athleticism: 100, iq: 100 }),
      player("Dwyane Wade", 6, 4, 9, { height: 77, shooting: 93, finishing: 100, handles: 98, passing: 93, defense: 97, rebounding: 90, athleticism: 98, iq: 94 }),
      player("Chris Paul", 6, 0, 13, { height: 66, shooting: 94, finishing: 93, handles: 100, passing: 100, defense: 94, rebounding: 85, athleticism: 93, iq: 98 }),
      player("Carmelo Anthony", 6, 7, 15, { height: 84, shooting: 95, finishing: 95, handles: 94, passing: 88, defense: 89, rebounding: 92, athleticism: 94, iq: 92 }),
      player("Dwight Howard", 6, 10, 11, { height: 93, shooting: 82, finishing: 98, handles: 85, passing: 87, defense: 100, rebounding: 100, athleticism: 100, iq: 91 }),
      player("Jason Kidd", 6, 4, 5, { height: 77, shooting: 93, finishing: 93, handles: 96, passing: 100, defense: 98, rebounding: 94, athleticism: 94, iq: 100 }),
      player("Deron Williams", 6, 3, 8, { height: 73, shooting: 95, finishing: 95, handles: 98, passing: 98, defense: 94, rebounding: 87, athleticism: 94, iq: 96 }),
      player("Chris Bosh", 6, 11, 12, { height: 96, shooting: 94, finishing: 96, handles: 90, passing: 90, defense: 94, rebounding: 96, athleticism: 95, iq: 95 }),
      player("Carlos Boozer", 6, 9, 7, { height: 90, shooting: 91, finishing: 96, handles: 88, passing: 90, defense: 91, rebounding: 97, athleticism: 94, iq: 93 }),
      player("Tayshaun Prince", 6, 9, 4, { height: 90, shooting: 93, finishing: 94, handles: 92, passing: 93, defense: 98, rebounding: 91, athleticism: 94, iq: 95 }),
      player("Michael Redd", 6, 6, 16, { height: 82, shooting: 98, finishing: 94, handles: 93, passing: 90, defense: 90, rebounding: 87, athleticism: 93, iq: 93 }),
    ],
  },
  {
    era: "2024",
    team: "USA · The Avengers",
    golden: true,
    note: "Paris. LeBron, Steph and KD headline a roster of present-day superstars — the modern super-team.",
    players: [
      player("LeBron James", 6, 9, 6, { height: 90, shooting: 93, finishing: 100, handles: 98, passing: 100, defense: 97, rebounding: 94, athleticism: 98, iq: 100 }),
      player("Stephen Curry", 6, 2, 4, { height: 71, shooting: 100, finishing: 95, handles: 100, passing: 98, defense: 88, rebounding: 84, athleticism: 93, iq: 99 }),
      player("Kevin Durant", 6, 11, 7, { height: 96, shooting: 100, finishing: 98, handles: 96, passing: 92, defense: 92, rebounding: 91, athleticism: 95, iq: 98 }),
      player("Joel Embiid", 7, 0, 11, { height: 98, shooting: 95, finishing: 98, handles: 93, passing: 90, defense: 98, rebounding: 98, athleticism: 92, iq: 93 }),
      player("Anthony Davis", 6, 10, 14, { height: 93, shooting: 91, finishing: 98, handles: 89, passing: 90, defense: 100, rebounding: 99, athleticism: 98, iq: 95 }),
      player("Jayson Tatum", 6, 8, 10, { height: 87, shooting: 97, finishing: 94, handles: 94, passing: 92, defense: 93, rebounding: 94, athleticism: 96, iq: 94 }),
      player("Anthony Edwards", 6, 4, 5, { height: 77, shooting: 96, finishing: 98, handles: 96, passing: 93, defense: 96, rebounding: 90, athleticism: 100, iq: 94 }),
      player("Devin Booker", 6, 5, 15, { height: 80, shooting: 98, finishing: 96, handles: 97, passing: 95, defense: 93, rebounding: 87, athleticism: 94, iq: 96 }),
      player("Jrue Holiday", 6, 4, 12, { height: 77, shooting: 94, finishing: 94, handles: 93, passing: 96, defense: 99, rebounding: 90, athleticism: 95, iq: 98 }),
      player("Bam Adebayo", 6, 9, 13, { height: 90, shooting: 86, finishing: 97, handles: 91, passing: 92, defense: 99, rebounding: 98, athleticism: 98, iq: 96 }),
      player("Tyrese Haliburton", 6, 5, 9, { height: 80, shooting: 96, finishing: 94, handles: 98, passing: 100, defense: 92, rebounding: 87, athleticism: 94, iq: 99 }),
      player("Derrick White", 6, 4, 8, { height: 77, shooting: 95, finishing: 94, handles: 94, passing: 95, defense: 98, rebounding: 88, athleticism: 94, iq: 97 }),
    ],
  },
  {
    era: "2018",
    team: "· LeBron James",
    golden: true,
    soloCard: true,
    note: "34-9-9 through the entire playoffs. 51 points in Game 1 of the Finals against the greatest team ever assembled. His supporting cast had no business being there — he dragged them anyway. Some people argue about the GOAT. This version of LeBron makes that argument very short.",
    players: [
      player("LeBron James", 6, 9, 23, { height: 100, shooting: 100, finishing: 100, handles: 100, passing: 100, defense: 100, rebounding: 100, athleticism: 100, iq: 100 }),
    ],
  },
  {
    era: "1987",
    team: "· Michael Jordan",
    golden: true,
    soloCard: true,
    note: "No one has ever won the scoring title and Defensive Player of the Year in the same season. Jordan did both — then took the MVP too. Three trophies, one year, one player. He was the most dangerous scorer alive and one of the best defenders in the league at the exact same time.",
    players: [
      player("Michael Jordan", 6, 6, 23, { height: 100, shooting: 100, finishing: 100, handles: 100, passing: 100, defense: 100, rebounding: 100, athleticism: 100, iq: 100 }),
    ],
  },
  {
    era: "1993",
    team: "· Hakeem Olajuwon",
    golden: true,
    soloCard: true,
    note: "MVP. Defensive Player of the Year. Champion. Finals MVP. All in one season — and he closed out Game 7 against the Knicks himself. The Dream Shake was the most unguardable post move ever invented. A 7-footer with the footwork of a dancer and the instincts of a point guard.",
    players: [
      player("Hakeem Olajuwon", 7, 0, 34, { height: 100, shooting: 100, finishing: 100, handles: 100, passing: 100, defense: 100, rebounding: 100, athleticism: 100, iq: 100 }),
    ],
  },
  {
    era: "2016",
    team: "· Stephen Curry",
    golden: true,
    soloCard: true,
    note: "73 wins. 402 three-pointers. The first unanimous MVP in NBA history. Curry didn't just have the greatest shooting season ever — he invented a new way to play basketball. Every team in the league is still trying to copy it.",
    players: [
      player("Stephen Curry", 6, 2, 30, { height: 100, shooting: 100, finishing: 100, handles: 100, passing: 100, defense: 100, rebounding: 100, athleticism: 100, iq: 100 }),
    ],
  },
  {
    era: "2001",
    team: "· Shaquille O'Neal",
    golden: true,
    soloCard: true,
    note: "15-1 in the playoffs. Swept every team he faced until the Finals. Centers tried to stop him and couldn't. Shaq in 2001 was the most physically overwhelming force the league has ever seen — 28 points, 13 rebounds, and nobody on earth could do a thing about it.",
    players: [
      player("Shaquille O'Neal", 7, 1, 34, { height: 100, shooting: 100, finishing: 100, handles: 100, passing: 100, defense: 100, rebounding: 100, athleticism: 100, iq: 100 }),
    ],
  },
  {
    era: "1962",
    team: "· Wilt Chamberlain",
    golden: true,
    soloCard: true,
    note: "50.4 points per game. 25.7 rebounds per game. In one season. Numbers so far beyond anything that's happened since that they look made up — but they're not. The most statistically dominant season in the history of any sport.",
    players: [
      player("Wilt Chamberlain", 7, 1, 13, { height: 100, shooting: 100, finishing: 100, handles: 100, passing: 100, defense: 100, rebounding: 100, athleticism: 100, iq: 100 }),
    ],
  },
  {
    era: "2026",
    team: "NBA · Draft Lottery",
    golden: true,
    activeUntil: "2026-10-01",
    note: "The 2026 NBA Draft lottery class. AJ Dybantsa goes #1 to Washington as a generational talent. Fourteen prospects — athletes, shooters, bigs, and playmakers — ready to reshape the league.",
    players: [
      player("AJ Dybantsa",       6, 9,  1,  { height: 88, shooting: 97, finishing: 100, handles: 96, passing: 94, defense: 94, rebounding: 92, athleticism: 98, iq: 97 }),
      player("Darryn Peterson",   6, 5,  2,  { height: 80, shooting: 94, finishing: 95, handles: 95, passing: 92, defense: 94, rebounding: 87, athleticism: 100, iq: 94 }),
      player("Cameron Boozer",    6, 9,  35, { height: 88, shooting: 92, finishing: 95, handles: 89, passing: 89, defense: 94, rebounding: 100, athleticism: 94, iq: 93 }),
      player("Caleb Wilson",      6, 7,  3,  { height: 84, shooting: 93, finishing: 94, handles: 92, passing: 100, defense: 90, rebounding: 90, athleticism: 93, iq: 95 }),
      player("Keaton Wagler",     6, 6,  5,  { height: 82, shooting: 100, finishing: 94, handles: 91, passing: 90, defense: 89, rebounding: 86, athleticism: 92, iq: 94 }),
      player("Mikel Brown Jr.",   6, 4,  4,  { height: 76, shooting: 93, finishing: 94, handles: 100, passing: 92, defense: 93, rebounding: 86, athleticism: 96, iq: 93 }),
      player("Darius Acuff",      6, 5,  11, { height: 80, shooting: 95, finishing: 100, handles: 94, passing: 90, defense: 91, rebounding: 86, athleticism: 95, iq: 93 }),
      player("Kingston Flemings", 6, 4,  0,  { height: 76, shooting: 94, finishing: 94, handles: 94, passing: 90, defense: 94, rebounding: 86, athleticism: 100, iq: 93 }),
      player("Morez Johnson Jr.", 6, 9,  15, { height: 90, shooting: 87, finishing: 95, handles: 87, passing: 87, defense: 96, rebounding: 96, athleticism: 100, iq: 91 }),
      player("Brayden Burries",   6, 4,  10, { height: 76, shooting: 94, finishing: 94, handles: 95, passing: 94, defense: 90, rebounding: 84, athleticism: 92, iq: 100 }),
      player("Yaxel Lendeborg",   6, 8,  13, { height: 86, shooting: 90, finishing: 94, handles: 87, passing: 88, defense: 94, rebounding: 100, athleticism: 94, iq: 91 }),
      player("Aday Mara",         7, 3,  12, { height: 100, shooting: 90, finishing: 94, handles: 85, passing: 88, defense: 97, rebounding: 97, athleticism: 91, iq: 93 }),
      player("Nate Ament",        6, 7,  14, { height: 84, shooting: 90, finishing: 92, handles: 88, passing: 88, defense: 100, rebounding: 93, athleticism: 94, iq: 93 }),
      player("Hannes Steinbach",  6, 8,  7,  { height: 86, shooting: 100, finishing: 94, handles: 90, passing: 90, defense: 90, rebounding: 90, athleticism: 91, iq: 94 }),
    ],
  },
  {
    era: "2026",
    team: "New York Knicks",
    golden: true,
    activeUntil: "2026-10-20",
    note: "New York's first championship since 1973. Jalen Brunson dropped 45 in Game 5 to close out the Spurs and give the Garden what it had waited 53 years for. The city finally got its ring.",
    players: [
      player("Jalen Brunson",      6, 1,  11, { height: 68, shooting: 98, finishing: 100, handles: 100, passing: 96, defense: 92, rebounding: 85, athleticism: 94, iq: 98 }),
      player("Karl-Anthony Towns", 7, 0,  32, { height: 98, shooting: 100, finishing: 98, handles: 93, passing: 94, defense: 97, rebounding: 98, athleticism: 94, iq: 95 }),
      player("OG Anunoby",         6, 7,  8,  { height: 84, shooting: 95, finishing: 96, handles: 93, passing: 91, defense: 100, rebounding: 94, athleticism: 100, iq: 95 }),
      player("Mikal Bridges",      6, 6,  1,  { height: 82, shooting: 96, finishing: 96, handles: 94, passing: 92, defense: 98, rebounding: 91, athleticism: 97, iq: 95 }),
      player("Josh Hart",          6, 5,  3,  { height: 80, shooting: 92, finishing: 94, handles: 91, passing: 93, defense: 96, rebounding: 98, athleticism: 97, iq: 96 }),
      player("Jose Alvarado",      6, 0,  15, { height: 64, shooting: 92, finishing: 93, handles: 95, passing: 93, defense: 98, rebounding: 84, athleticism: 94, iq: 94 }),
      player("Jordan Clarkson",    6, 5,  0,  { height: 80, shooting: 98, finishing: 97, handles: 96, passing: 90, defense: 88, rebounding: 86, athleticism: 94, iq: 93 }),
      player("Mitchell Robinson",  7, 1,  13, { height: 100, shooting: 81, finishing: 94, handles: 82, passing: 84, defense: 98, rebounding: 98, athleticism: 95, iq: 90 }),
      player("Miles McBride",      6, 2,  2,  { height: 70, shooting: 94, finishing: 93, handles: 94, passing: 92, defense: 94, rebounding: 84, athleticism: 93, iq: 94 }),
      player("Landry Shamet",      6, 4,  14, { height: 76, shooting: 97, finishing: 92, handles: 92, passing: 90, defense: 89, rebounding: 84, athleticism: 90, iq: 94 }),
    ],
  },
];

let round = 0;
let runAttributes = [];
let currentTeamEra = null;
let currentAttribute = null;
let build = {};
let gameMode = "classic";
let respinsUsed = { era: false, team: false, attribute: false };
let roundLocked = false;
let dailyData = null;

const modeScreen = document.querySelector("#modeScreen");
const modeButtons = Array.from(document.querySelectorAll(".mode-card"));
const gameGrid = document.querySelector("#gameGrid");
const cards = document.querySelector("#cards");
const roundLabel = document.querySelector("#roundLabel");
const prompt = document.querySelector("#prompt");
const context = document.querySelector("#context");
const modeLabel = document.querySelector("#modeLabel");
const resetButton = document.querySelector("#resetButton");
const logoHome = document.querySelector("#logoHome");
const backButton = document.querySelector("#backButton");
const respinBar = document.querySelector("#respins");
const respinEraBtn = document.querySelector("#respinEra");
const respinTeamBtn = document.querySelector("#respinTeam");
const respinAttrBtn = document.querySelector("#respinAttr");
const helpButton = document.querySelector("#helpButton");
const helpModal = document.querySelector("#helpModal");
const helpClose = document.querySelector("#helpClose");
const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const shareModal = document.querySelector("#shareModal");
const shareModalClose = document.querySelector("#shareModalClose");
const shareCardScore = document.querySelector("#shareCardScore");
const shareCardTier = document.querySelector("#shareCardTier");
const shareCardRows = document.querySelector("#shareCardRows");
const shareBtnImage = document.querySelector("#shareBtnImage");
const shareBtnText = document.querySelector("#shareBtnText");
const shareBtnX = document.querySelector("#shareBtnX");
const shareBtnCopy = document.querySelector("#shareBtnCopy");
const shareBtnLeaderboard = document.querySelector("#shareBtnLeaderboard");
const result = document.querySelector("#result");
const resultTitle = document.querySelector("#resultTitle");
const resultCopy = document.querySelector("#resultCopy");
const resultBreakdown = document.querySelector("#resultBreakdown");
const shareButton = document.querySelector("#shareButton");
const scoreEl = document.querySelector("#score");
const bodyLabel = document.querySelector("#bodyLabel");
const buildList = document.querySelector("#buildList");
const parts = Array.from(document.querySelectorAll(".part"));
const draftToast = document.querySelector("#draftToast");
const draftToastDot = document.querySelector("#draftToastDot");
const draftToastText = document.querySelector("#draftToastText");
let draftToastTimer = null;
const radarMini   = document.querySelector("#radarMini");
const radarResult = document.querySelector("#radarResult");
const radarShare  = document.querySelector("#radarShare");

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

// Odds that any given round is a rare "golden roll" landing on a USA Olympic
// super-team instead of a normal franchise. ~1.2% per round => roughly a 1-in-10
// chance of seeing at least one across a full 9-round game.
const GOLDEN_ODDS = 0.012;

function pickTeamEra() {
  const today = new Date().toISOString().slice(0, 10);
  const activeGolden = goldenTeams.filter(t => !t.activeUntil || today < t.activeUntil);
  if (activeGolden.length && Math.random() < GOLDEN_ODDS) {
    // Team cards (soloCard falsy) are 2× more likely per slot than solo player cards.
    const solos = activeGolden.filter(t => t.soloCard);
    const teams = activeGolden.filter(t => !t.soloCard);
    const totalWeight = teams.length * 2 + solos.length;
    let r = Math.random() * totalWeight;
    for (const t of teams) { r -= 2; if (r <= 0) return t; }
    for (const s of solos) { r -= 1; if (r <= 0) return s; }
    return activeGolden[0];
  }
  return teamEras[Math.floor(Math.random() * teamEras.length)];
}

function getTier(score) {
  if (score === 100) return "GOAT";
  if (score >= 97) return "GOAT Candidate";
  if (score >= 94) return "All-Time Legend";
  if (score >= 90) return "Hall of Famer";
  if (score >= 86) return "Franchise Icon";
  if (score >= 80) return "All-Star";
  if (score >= 77) return "Rotation Player";
  if (score >= 74) return "Bench Warmer";
  if (score >= 71) return "End of Roster";
  if (score >= 68) return "Two-Way Contract";
  if (score >= 65) return "G League";
  if (score >= 60) return "Cut in Training Camp";
  return "Watching From the Stands";
}

function calculateScore() {
  const values = attributes.map((attribute) => build[attribute.key]?.score ?? 0);
  if (values.some((value) => value === 0)) return null;

  // New scoring (gate + elite bonus) takes effect 2026-06-26.
  const today = new Date().toISOString().slice(0, 10);
  const newScoring = today >= "2026-06-26";

  const sorted = [...values].sort((a, b) => a - b);
  const goatGate = newScoring
    ? sorted[0] >= 88 &&
      values.filter((value) => value >= 100).length >= 1 &&
      values.filter((value) => value >= 98).length >= 3 &&
      values.filter((value) => value >= 97).length >= 4 &&
      values.filter((value) => value >= 95).length >= 6 &&
      (build.height?.score ?? 0) >= 90
    : sorted[2] >= 93 && sorted[1] >= 92 && sorted[0] >= 92 &&
      values.filter((value) => value >= 100).length >= 1 &&
      values.filter((value) => value >= 98).length >= 3 &&
      values.filter((value) => value >= 97).length >= 4 &&
      values.filter((value) => value >= 95).length >= 6 &&
      (build.height?.score ?? 0) >= 90;
  if (goatGate) return 100;

  const average = values.reduce((sum, value) => sum + value, 0) / values.length;
  const weakPenalty = (gameMode === "blind" && !newScoring) ? 0 : values.reduce((sum, value) => sum + Math.max(0, 75 - value) * 0.42, 0);
  // Classic keeps original bonus (already penalised by flatAdj=-5 + weakPenalty).
  // Daily/blind get the tuned bonus from 2026-06-26 onward.
  const isClassic = gameMode === "classic";
  const eliteBonus = (newScoring && !isClassic)
    ? values.filter((value) => value >= 99).length * 1.3
    + values.filter((value) => value >= 96 && value < 99).length * 0.4
    : values.filter((value) => value >= 99).length * 1.5
    + values.filter((value) => value >= 96 && value < 99).length * 0.5;
  const minScore = Math.min(...values);
  const balanceBonus = minScore >= 90 ? 2.0 : minScore >= 87 ? 1.0 : minScore >= 82 ? 0.25 : 0;
  const heightBonus = [
    "Victor Wembanyama", "Yao Ming", "Mark Eaton", "Shawn Bradley",
    "Gheorghe Muresan", "Manute Bol", "Ralph Sampson", "Rik Smits",
    "Arvydas Sabonis", "Zydrunas Ilgauskas", "Kristaps Porzingis", "Randy Breuer",
  ].includes(build.height?.player?.name ?? "") ? 2 : 0;
  const flatAdj = (gameMode === "blind" || gameMode === "daily") ? -2 : -5;
  const score = Math.round(average + flatAdj - weakPenalty + eliteBonus + balanceBonus + heightBonus);

  // Only a gate-passing build can show 100; everything else caps at 99.
  return Math.max(55, Math.min(99, score));
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

function buildRadarContent(size) {
  const cx = size / 2, cy = size / 2;
  const maxR = size * 0.4;
  const n = attributes.length;
  const angles = attributes.map((_, i) => -Math.PI / 2 + (i * 2 * Math.PI / n));

  const pt = (a, r) =>
    `${(cx + Math.cos(a) * r).toFixed(2)},${(cy + Math.sin(a) * r).toFixed(2)}`;

  const rings = [0.33, 0.66, 1].map(f => {
    const pts = angles.map(a => pt(a, maxR * f)).join(" ");
    return `<polygon points="${pts}" fill="none" stroke="rgba(56,182,255,0.18)" stroke-width="0.7"/>`;
  }).join("");

  const spokes = angles.map(a =>
    `<line x1="${cx.toFixed(2)}" y1="${cy.toFixed(2)}" x2="${pt(a, maxR).replace(",", '" y2="')}" stroke="rgba(56,182,255,0.18)" stroke-width="0.7"/>`
  ).join("");

  // Remap scores from a floor of 56 so low scores cluster near center
  // and elite scores reach the outer ring. 56→~0%, 90→77%, 100→100%.
  const scoreR = (score) => Math.max(maxR * 0.04, ((score - 56) / 44) * maxR);

  const dataPoints = attributes.map((attr, i) => {
    const pick = build[attr.key];
    return pt(angles[i], pick ? scoreR(pick.score) : 0);
  }).join(" ");

  const poly = `<polygon points="${dataPoints}" fill="rgba(230,184,67,0.2)" stroke="rgba(230,184,67,0.75)" stroke-width="1.2" stroke-linejoin="round"/>`;

  const dots = attributes.map((attr, i) => {
    const pick = build[attr.key];
    if (!pick) return "";
    const [x, y] = pt(angles[i], scoreR(pick.score)).split(",");
    return `<circle cx="${x}" cy="${y}" r="${(size * 0.028).toFixed(1)}" fill="rgba(230,184,67,0.9)"/>`;
  }).join("");

  const center = `<circle cx="${cx}" cy="${cy}" r="1.5" fill="rgba(56,182,255,0.35)"/>`;

  return rings + spokes + poly + dots + center;
}

function renderRadar() {
  if (radarMini)   radarMini.innerHTML   = buildRadarContent(72);
  if (radarResult) radarResult.innerHTML = buildRadarContent(96);
  if (radarShare)  radarShare.innerHTML  = buildRadarContent(60);
}

function scoreTier(score) {
  if (score >= 90) return "elite";
  if (score >= 80) return "great";
  if (score >= 70) return "good";
  if (score >= 60) return "fair";
  return "weak";
}

const tierColors = {
  elite: "#f2c438",
  great: "#d49628",
  good:  "#b07828",
  fair:  "#8a5f22",
  weak:  "#6b4a1a",
};

function showDraftToast(pick) {
  if (!window.matchMedia("(max-width: 930px)").matches) return;
  const tier = scoreTier(pick.score);
  draftToastDot.style.setProperty("--toast-dot-color", tierColors[tier]);
  draftToastText.textContent = `${pick.attribute.label}: ${pick.player.name} · ${pick.score}`;
  draftToast.hidden = false;
  requestAnimationFrame(() => draftToast.classList.add("is-visible"));
  clearTimeout(draftToastTimer);
  draftToastTimer = setTimeout(() => {
    draftToast.classList.remove("is-visible");
    draftToastTimer = setTimeout(() => { draftToast.hidden = true; }, 200);
  }, 2400);
}

function updateBody(lastPick) {
  parts.forEach((part) => {
    const pick = build[part.dataset.attribute];
    const wasFilled = part.classList.contains("filled");
    part.classList.toggle("filled", Boolean(pick));

    if (pick && !wasFilled) {
      part.dataset.tier = scoreTier(pick.score);
    }
  });

  renderRadar();

  if (!lastPick) {
    bodyLabel.textContent = "— awaiting first pick —";
    bodyLabel.dataset.empty = "true";
    return;
  }
  delete bodyLabel.dataset.empty;

  // Shift is-current to the newly drafted part
  parts.forEach((p) => p.classList.remove("is-current"));
  const freshPart = parts.find((p) => p.dataset.attribute === lastPick.attribute.key);
  if (freshPart) {
    freshPart.classList.add("is-new", "is-current");
    freshPart.addEventListener("animationend", () => {
      freshPart.classList.remove("is-new");
    }, { once: true });
  }

  bodyLabel.textContent = `${lastPick.attribute.label}: ${lastPick.player.name} (${lastPick.score})`;
  showDraftToast(lastPick);
}

let rollToken = 0;

function prefersReducedMotion() {
  return Boolean(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
}

function renderCards(animate) {
  cards.classList.remove("is-rolling");
  cards.innerHTML = "";

  const golden = !!currentTeamEra.golden;
  const isSoloCard = golden && currentTeamEra.players.length === 1;
  currentTeamEra.players.forEach((playerData, index) => {
    const score = playerData.ratings[currentAttribute.key];
    const isBlind = gameMode === "blind" || gameMode === "daily";
    const card = document.createElement("button");
    card.className = (animate ? "card is-dealing" : "card") + (golden ? " is-golden" : "");
    card.type = "button";
    if (animate) {
      card.style.animationDelay = `${index * 45}ms`;
      card.addEventListener("animationend", () => {
        card.classList.remove("is-dealing");
        card.style.animationDelay = "";
      }, { once: true });
    }
    card.innerHTML = `
      <div class="card-art">
        <span class="jersey">${playerData.number}</span>
        <span class="attribute-score ${isBlind ? "is-hidden" : ""}">${currentAttribute.short}<span>${isBlind ? "??" : score}</span></span>
      </div>
      <div class="card-body">
        <h3>${playerData.name}</h3>
        <p class="meta">${formatHeight(playerData)} / ${currentTeamEra.era} ${currentTeamEra.team}</p>
        ${
          isSoloCard
            ? `<p class="golden-bio">${currentTeamEra.note}</p>`
            : isBlind
              ? `<div class="blind-note">Ratings hidden until selected</div>`
              : `<div class="bars">
                  ${renderBar(currentAttribute.label, score)}
                  ${renderBar("Height", playerData.ratings.height)}
                  ${renderBar("IQ", playerData.ratings.iq)}
                </div>`
        }
      </div>
    `;
    card.addEventListener("click", () => isSoloCard ? showWildcardPicker(playerData) : draft(playerData));
    if (isSoloCard) {
      const hint = document.createElement("p");
      hint.className = "wildcard-hint";
      hint.textContent = "Tap to choose your stat →";
      cards.append(card, hint);
    } else {
      cards.append(card);
    }
  });
}

function showWildcardPicker(playerData) {
  const remaining = [runAttributes[round], ...runAttributes.slice(round + 1)];
  const picker = document.createElement("div");
  picker.className = "wildcard-picker";
  picker.innerHTML = `<p class="wildcard-title">Assign 100 to:</p>`;
  const btnRow = document.createElement("div");
  btnRow.className = "wildcard-attrs";
  remaining.forEach(attr => {
    const btn = document.createElement("button");
    btn.className = "wildcard-attr-btn";
    btn.type = "button";
    btn.textContent = attr.label;
    btn.addEventListener("click", () => {
      if (attr.key !== runAttributes[round].key) {
        const swapIdx = runAttributes.findIndex((a, i) => i > round && a.key === attr.key);
        if (swapIdx !== -1) {
          [runAttributes[round], runAttributes[swapIdx]] = [runAttributes[swapIdx], runAttributes[round]];
          currentAttribute = runAttributes[round];
        }
      }
      draft(playerData);
    });
    btnRow.append(btn);
  });
  picker.append(btnRow);
  cards.innerHTML = "";
  cards.append(picker);
}

// Stamp the locked team/era + category into the prompt with a pop, then deal the cards in.
function lockRound(token, animate) {
  if (token !== rollToken) return;
  const golden = !!currentTeamEra.golden;
  prompt.classList.remove("is-rolling");
  prompt.classList.toggle("is-golden", golden);
  cards.classList.toggle("is-golden", golden);
  const isSoloCard = golden && currentTeamEra.players.length === 1;
  prompt.innerHTML =
    (golden ? `<span class="golden-badge">✦ Golden Roll ✦</span>` : "") +
    `<span class="roll-team">${currentTeamEra.era} ${currentTeamEra.team}</span>` +
    `<span class="roll-div">/</span>` +
    `<span class="roll-attr">${isSoloCard ? "Any Stat" : currentAttribute.label}</span>`;
  if (animate) {
    prompt.classList.remove("is-locked");
    void prompt.offsetWidth; // restart the stamp animation
    prompt.classList.add("is-locked");
  }
  renderCards(animate);
  roundLocked = true;
  updateRespinButtons();
}

function renderRound() {
  if (round >= runAttributes.length) {
    finish();
    return;
  }

  currentAttribute = runAttributes[round];
  currentTeamEra = (gameMode === "daily" && dailyData)
    ? dailyData.rounds[round].teamEra
    : pickTeamEra();
  roundLabel.textContent = `Round ${round + 1} of ${runAttributes.length}`;
  context.textContent = "";
  modeLabel.textContent = gameMode === "daily"
    ? (dailyData?.franchise ? `Franchise Friday · ${dailyData.franchiseTeamName} only · Blind` : `Daily #${getDailyNumber()} · Blind`)
    : gameMode === "blind" ? "Blind mode: ratings reveal after your pick."
    : "Classic mode: ratings are visible before you pick.";

  // Lock until the roll settles — respins do NOT recharge between rounds.
  roundLocked = false;
  if (respinBar) respinBar.hidden = false;
  updateRespinButtons();

  const token = ++rollToken;

  if (prefersReducedMotion()) {
    prompt.classList.remove("is-rolling", "is-locked");
    lockRound(token, false);
    return;
  }

  // Slot-machine suspense: flicker through random team/era/category combos,
  // decelerating, then stamp the real roll and deal the cards.
  prompt.classList.remove("is-locked");
  prompt.classList.add("is-rolling");
  cards.classList.add("is-rolling");
  cards.innerHTML = currentTeamEra.players.map(() => `<div class="card-skel" aria-hidden="true"></div>`).join("");

  const steps = [50, 60, 75, 95, 125, 170, 230];
  let i = 0;
  const tick = () => {
    if (token !== rollToken) return;
    if (i >= steps.length) {
      lockRound(token, true);
      return;
    }
    const t = teamEras[(Math.random() * teamEras.length) | 0];
    const a = attributes[(Math.random() * attributes.length) | 0];
    prompt.textContent = `${t.era} ${t.team} / ${a.label}`;
    setTimeout(tick, steps[i++]);
  };
  tick();
}

// --- One-time-per-round respins -------------------------------------------
// Each round you may re-roll the era, the team, or the stat exactly once.

function teamsInSameEra() {
  if (!currentTeamEra) return [];
  return teamEras.filter((t) => t.era === currentTeamEra.era && t !== currentTeamEra);
}

// Respin Era keeps the same team, only swapping the decade (e.g. 2000s Bulls -> 1980s Bulls).
function sameTeamOtherEras() {
  if (!currentTeamEra) return [];
  return teamEras.filter((t) => t.team === currentTeamEra.team && t.era !== currentTeamEra.era);
}

// Stats not yet assigned this run (rounds still ahead of the current one).
function statPool() {
  return runAttributes.slice(round + 1);
}

function respinAvailable(type) {
  if (!roundLocked || respinsUsed[type]) return false;
  if (type === "team") return teamsInSameEra().length > 0;
  if (type === "era") return sameTeamOtherEras().length > 0;
  if (type === "attribute") return statPool().length > 0;
  return false;
}

function updateRespinButtons() {
  [["era", respinEraBtn], ["team", respinTeamBtn], ["attribute", respinAttrBtn]].forEach(([type, btn]) => {
    if (!btn) return;
    btn.disabled = !respinAvailable(type);
    btn.classList.toggle("is-used", respinsUsed[type]);
  });
}

// Re-stamp the prompt and re-deal the cards after a respin (quick deal, no slot roll).
function relayRound() {
  const token = ++rollToken;
  prompt.classList.remove("is-rolling");
  cards.classList.remove("is-rolling");
  lockRound(token, true);
}

function pickRandom(list) {
  return list[(Math.random() * list.length) | 0];
}

function respinEra() {
  if (!respinAvailable("era")) return;
  currentTeamEra = pickRandom(sameTeamOtherEras());
  respinsUsed.era = true;
  relayRound();
}

function respinTeam() {
  if (!respinAvailable("team")) return;
  currentTeamEra = pickRandom(teamsInSameEra());
  respinsUsed.team = true;
  relayRound();
}

function respinAttribute() {
  if (!respinAvailable("attribute")) return;
  // Swap the current stat with a future one so all 9 stats are still used exactly once.
  const target = pickRandom(statPool());
  const swapIndex = runAttributes.indexOf(target);
  [runAttributes[round], runAttributes[swapIndex]] = [runAttributes[swapIndex], runAttributes[round]];
  currentAttribute = runAttributes[round];
  respinsUsed.attribute = true;
  relayRound();
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

// ============================================================
// Monetization — gentle: one result-screen ad slot + smart tip CTA
// ------------------------------------------------------------
// To turn ads ON:
//   1. Create a Google AdSense account and submit playgoatlab.com for review.
//   2. Once approved, create a "Display" ad unit for the result screen.
//   3. Paste your publisher ID + that ad unit's slot ID below.
// While these stay blank, NO ad scripts load (a labelled placeholder shows
// only on localhost so you can see where the slot lives).
// ============================================================
const ADSENSE_CLIENT = "ca-pub-9736995109176734"; // live publisher ID
const ADSENSE_SLOT_RESULT = "";  // set after approval: create a Display ad unit, paste its slot ID

let adsenseLoaded = false;
function loadAdSense() {
  if (adsenseLoaded || !ADSENSE_CLIENT) return;
  adsenseLoaded = true;
  // The loader is already in each page's <head> (for AdSense verification);
  // only inject as a fallback if that static tag is somehow missing.
  if (document.querySelector('script[src*="adsbygoogle.js"]')) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + ADSENSE_CLIENT;
  s.crossOrigin = "anonymous";
  document.head.appendChild(s);
}

let resultAdRendered = false;
function showResultAd() {
  const slot = document.getElementById("resultAd");
  if (!slot) return;
  const isLocal = location.hostname === "localhost" || location.hostname === "127.0.0.1";
  // Not configured yet — show a placeholder locally, nothing in production.
  if (!ADSENSE_CLIENT || !ADSENSE_SLOT_RESULT) {
    if (isLocal) {
      slot.hidden = false;
      slot.innerHTML = '<span class="result-ad-label">Advertisement</span>' +
        '<div class="result-ad-placeholder">Ad slot — AdSense not configured yet</div>';
    }
    return;
  }
  loadAdSense();
  slot.hidden = false;
  if (resultAdRendered) return; // render the unit once; reuse on replay
  slot.innerHTML = '<span class="result-ad-label">Advertisement</span>' +
    '<ins class="adsbygoogle" style="display:block" data-ad-client="' + ADSENSE_CLIENT +
    '" data-ad-slot="' + ADSENSE_SLOT_RESULT + '" data-ad-format="auto" data-full-width-responsive="true"></ins>';
  try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
  resultAdRendered = true;
}

// Make the Ko-fi tip ask warmer at high-emotion moments (perfect score,
// rare-air builds, long streaks) instead of the same flat line every time.
function updateTipCta(score, mode) {
  const cta = document.getElementById("resultCoffeeCta");
  if (!cta) return;
  let streak = 0;
  if (mode === "daily") {
    try { streak = getDailyStreak(getDailyHistory(), getTodayStr()); } catch (e) {}
  }
  let label = "☕ Buy the dev a coffee";
  if (score === 100) {
    label = "🐐 A perfect 100?! Tip the dev a coffee →";
  } else if (score >= 94) {
    label = "🔥 Rare air — enjoying GOAT Lab? Buy the dev a coffee →";
  } else if (streak >= 5) {
    label = `🔥 ${streak}-day streak! Keep the lights on — buy the dev a coffee →`;
  }
  cta.textContent = label;
}

function finish() {
  roundLocked = false;
  if (respinBar) respinBar.hidden = true;
  updateRespinButtons();
  prompt.classList.remove("is-golden");
  cards.classList.remove("is-golden");

  const score = calculateScore();
  const values = attributes.map((attribute) => build[attribute.key]);
  const tier = getTier(score);
  const archetype = makeArchetype(values);
  const weakSpot = [...values].sort((a, b) => a.score - b.score)[0];
  const bestPick = [...values].sort((a, b) => b.score - a.score)[0];

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
    card.className = "card" + (pick.teamEra.golden ? " is-golden" : "");
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

  // GOAT Pass daily reveal / unlock strip — only for the Daily; hide otherwise.
  const _gpr = document.querySelector("#goatPassResult");
  if (_gpr && gameMode !== "daily") { _gpr.hidden = true; _gpr.innerHTML = ""; }

  if (gameMode !== "daily") savePB(gameMode, score);
  updatePBDisplay();

  if (resultBreakdown) {
    if (score === 100) {
      resultBreakdown.textContent = `Perfect build. Nobody does this.`;
      resultBreakdown.hidden = false;
    } else if (score >= 94) {
      resultBreakdown.textContent = `Held back: ${weakSpot.attribute.label} (${weakSpot.score}) · Lifted by: ${bestPick.attribute.label} (${bestPick.score}) · You're in rare air.`;
      resultBreakdown.hidden = false;
    } else if (score >= 86) {
      resultBreakdown.textContent = `Held back: ${weakSpot.attribute.label} (${weakSpot.score}) · Lifted by: ${bestPick.attribute.label} (${bestPick.score}) · Solid build. Most don't get here.`;
      resultBreakdown.hidden = false;
    } else if (score >= 80) {
      resultBreakdown.textContent = `Held back: ${weakSpot.attribute.label} (${weakSpot.score}) · Lifted by: ${bestPick.attribute.label} (${bestPick.score}) · A starting five player. Keep pushing.`;
      resultBreakdown.hidden = false;
    } else {
      resultBreakdown.textContent = `Held back: ${weakSpot.attribute.label} (${weakSpot.score}) · Lifted by: ${bestPick.attribute.label} (${bestPick.score})`;
      resultBreakdown.hidden = false;
    }
  }

  if (gameMode === "daily") {
    const todayStr = getTodayStr();
    const dailyPicks = attributes.map(attr => {
      const p = build[attr.key];
      if (!p) return null;
      return { attrKey: attr.key, attrLabel: attr.label, attrShort: attr.short, playerName: p.player.name, playerNumber: p.player.number, era: p.teamEra.era, team: p.teamEra.team, golden: p.teamEra.golden || false, score: p.score };
    });
    saveDailyResult(todayStr, score, tier, dailyData?.franchise || false, dailyData?.franchiseTeamName || null, dailyPicks);
    updateDailyCard();
    // Submit to the global leaderboard (if signed in) + reveal the Leaderboard button.
    if (window.GoatLeaderboard) {
      window.GoatLeaderboard.submitToday(todayStr, score, tier, dailyData?.franchise || false, dailyData?.franchiseTeamName || null);
      window.GoatLeaderboard.pushDailyHistory(todayStr);
      window.GoatLeaderboard.showResultButton();
      if (window.GoatLeaderboard.showDailyExtras) window.GoatLeaderboard.showDailyExtras(todayStr);
    }
    resultTitle.textContent = `Daily — ${score}: ${tier}`;
    resultCopy.textContent = dailyData?.franchise
      ? `${archetype}. Greatest ${dailyData.franchiseTeamName} build in the books. Come back tomorrow.`
      : score === 100
        ? `You built the impossible player: ${archetype}. Daily perfection.`
        : `${archetype}. Daily complete. Come back tomorrow for a new challenge.`;
    showResultCountdown();
  } else {
    resultTitle.textContent = `${score}: ${tier}`;
    resultCopy.textContent =
      score === 100
        ? `You built the impossible player: ${archetype}. No weak spots, no era can stop this.`
        : `${archetype}. Keep chasing.`;
    hideResultCountdown();
  }

  updateTipCta(score, gameMode);
  showResultAd();
  if (window.GoatA2HS) window.GoatA2HS.maybe();
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
  respinsUsed = { era: false, team: false, attribute: false };
  parts.forEach((p) => {
    p.classList.remove("is-new", "is-current");
    delete p.dataset.tier;
  });
  renderBuildList();
  updateBody(null);
  renderRound();
}

function openDailyResultView(entry) {
  if (!entry?.picks) return;
  // Snapshot live globals so closeShareModal can restore them
  _buildSnapshot = Object.assign({}, build);
  _modeSnapshot = gameMode;
  // Reconstruct globals so the share modal and image work correctly
  gameMode = "daily";
  dailyData = { franchise: entry.franchise || false, franchiseTeamName: entry.franchiseTeam || null };
  Object.keys(build).forEach(k => delete build[k]);
  entry.picks.forEach(p => {
    if (!p) return;
    const attr = attributes.find(a => a.key === p.attrKey);
    if (!attr) return;
    build[p.attrKey] = {
      player: { name: p.playerName, number: p.playerNumber },
      teamEra: { era: p.era, team: p.team, golden: p.golden },
      score: p.score,
      attribute: attr
    };
  });
  openShareModal();
}

function startGame(mode) {
  gameMode = mode;

  // Set up daily data before anything else
  if (mode === "daily") {
    const todayStr = getTodayStr();
    const history = getDailyHistory();
    if (history[todayStr]) { openDailyResultView(history[todayStr]); return; }
    dailyData = generateDailyData(todayStr);
    runAttributes = dailyData.rounds.map(r => r.attribute);
  } else {
    dailyData = null;
    runAttributes = shuffle(attributes);
  }

  modeScreen.hidden = true;
  gameGrid.hidden = false;

  round = 0;
  build = {};
  currentTeamEra = null;
  currentAttribute = null;
  result.hidden = true;
  scoreEl.textContent = "--";
  cards.className = "cards";
  cards.innerHTML = "";
  respinsUsed = { era: false, team: false, attribute: false };
  parts.forEach((p) => {
    p.classList.remove("is-new", "is-current");
    delete p.dataset.tier;
  });
  clearTimeout(draftToastTimer);
  draftToast.classList.remove("is-visible");
  draftToast.hidden = true;
  renderBuildList();
  updateBody(null);

  // Hide team respin on franchise daily (team is locked)
  if (respinTeamBtn) respinTeamBtn.hidden = mode === "daily" && dailyData?.franchise;

  modeLabel.textContent = mode === "daily"
    ? (dailyData?.franchise ? `Franchise Friday · ${dailyData.franchiseTeamName} only · Blind` : `Daily #${getDailyNumber()} · Blind`)
    : mode === "blind" ? "Blind mode: ratings reveal after your pick."
    : "Classic mode: ratings are visible before you pick.";
  renderRound();
}

function goBack() {
  if (!result.hidden) {
    // Already finished — safe to go back, no confirm needed
  } else if (round > 0 && !confirm("Leave this run? Your progress will be lost.")) {
    return;
  }
  gameGrid.hidden = true;
  result.hidden = true;
  modeScreen.hidden = false;
  round = 0;
  build = {};
  currentTeamEra = null;
  currentAttribute = null;
  dailyData = null;
  scoreEl.textContent = "--";
  if (respinTeamBtn) respinTeamBtn.hidden = false;
  updatePBDisplay();
}

function drawRadarOnCanvas(ctx, cx, cy, maxR) {
  const n = attributes.length;
  const angles = attributes.map((_, i) => -Math.PI / 2 + (i * 2 * Math.PI / n));
  const scoreR = (score) => Math.max(maxR * 0.04, ((score - 56) / 44) * maxR);

  // Background rings
  [0.33, 0.66, 1].forEach(frac => {
    ctx.beginPath();
    angles.forEach((a, i) => {
      const x = cx + Math.cos(a) * maxR * frac;
      const y = cy + Math.sin(a) * maxR * frac;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.strokeStyle = "rgba(56,182,255,0.22)";
    ctx.lineWidth = 0.8;
    ctx.stroke();
  });

  // Spokes
  angles.forEach(a => {
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(a) * maxR, cy + Math.sin(a) * maxR);
    ctx.strokeStyle = "rgba(56,182,255,0.22)";
    ctx.lineWidth = 0.8;
    ctx.stroke();
  });

  // Data polygon
  ctx.beginPath();
  attributes.forEach((attr, i) => {
    const pick = build[attr.key];
    const r = pick ? scoreR(pick.score) : 0;
    const x = cx + Math.cos(angles[i]) * r;
    const y = cy + Math.sin(angles[i]) * r;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(230,184,67,0.22)";
  ctx.fill();
  ctx.strokeStyle = "rgba(230,184,67,0.8)";
  ctx.lineWidth = 1.5;
  ctx.lineJoin = "round";
  ctx.stroke();

  // Dots at drafted points
  attributes.forEach((attr, i) => {
    const pick = build[attr.key];
    if (!pick) return;
    const r = scoreR(pick.score);
    ctx.beginPath();
    ctx.arc(cx + Math.cos(angles[i]) * r, cy + Math.sin(angles[i]) * r, maxR * 0.06, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(230,184,67,0.9)";
    ctx.fill();
  });

  // Center dot
  ctx.beginPath();
  ctx.arc(cx, cy, 2, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(56,182,255,0.5)";
  ctx.fill();
}

async function generateShareImage() {
  await document.fonts.ready;

  const score = calculateScore();
  const tier = getTier(score);

  const W        = 600;
  const HEADER_H = 105;  // tighter header
  const RADAR_H  = 128;
  const ROW_H    = 64;   // more breathing room per row
  const FOOTER_H = 48;
  const H = HEADER_H + RADAR_H + ROW_H * 9 + FOOTER_H;
  const SCALE = 3;

  const canvas = document.createElement("canvas");
  canvas.width  = W * SCALE;
  canvas.height = H * SCALE;
  const ctx = canvas.getContext("2d");
  ctx.scale(SCALE, SCALE);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  const PAPER = "#f5ecd8";
  const INK   = "#151413";
  const GOLD  = "#e6b843";
  const CHALK = "#fff7df";
  const MUTED = "rgba(21,20,19,0.55)";
  const COURT = "#c9673d";
  const NAVY  = "#091420";

  const modeColor = gameMode === "daily" ? GOLD : gameMode === "blind" ? COURT : CHALK;
  const modeText  = gameMode === "daily" ? `DAILY #${getDailyNumber()}` : gameMode === "blind" ? "BLIND MODE" : "CLASSIC MODE";

  // Truncate text to fit a pixel width
  function clip(text, maxW, font) {
    ctx.font = font;
    if (ctx.measureText(text).width <= maxW) return text;
    let t = text;
    while (t.length > 1 && ctx.measureText(t + "…").width > maxW) t = t.slice(0, -1);
    return t + "…";
  }

  // ── Background + border ──────────────────────────────────────────────────
  ctx.fillStyle = PAPER;
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = INK;
  ctx.lineWidth = 5;
  ctx.strokeRect(2.5, 2.5, W - 5, H - 5);

  // ── Header ───────────────────────────────────────────────────────────────
  ctx.fillStyle = INK;
  ctx.fillRect(0, 0, W, HEADER_H);

  // Mode accent strip (4 px, colored per mode)
  ctx.fillStyle = modeColor;
  ctx.fillRect(0, 0, W, 4);

  // Score — left side, hero element
  ctx.fillStyle = GOLD;
  ctx.font = '700 52px "Space Mono", monospace';
  ctx.textAlign = "left";
  ctx.fillText(score, 22, 88);

  // Tier — left, below score
  ctx.fillStyle = "rgba(255,247,223,0.5)";
  ctx.font = '700 9px "Space Mono", monospace';
  ctx.fillText(tier.toUpperCase(), 22, 101);

  // Brand — right side
  ctx.fillStyle = CHALK;
  ctx.font = '900 16px "Space Mono", monospace';
  ctx.textAlign = "right";
  ctx.fillText("GOAT LAB", W - 22, 40);

  // Mode label — right, below brand
  ctx.fillStyle = modeColor;
  ctx.font = '700 10px "Space Mono", monospace';
  ctx.fillText(modeText, W - 22, 57);

  // GOAT Pass flair — right, below mode label (pass holders only)
  if (window.GoatPassActive) {
    ctx.fillStyle = GOLD;
    ctx.font = '700 11px "Space Mono", monospace';
    ctx.fillText("🐐 GOAT PASS", W - 22, 76);
  }

  ctx.textAlign = "left";

  // ── Radar section ────────────────────────────────────────────────────────
  const radarY = HEADER_H;
  ctx.fillStyle = NAVY;
  ctx.fillRect(0, radarY, W, RADAR_H);

  const radarCX = W / 2;
  const radarCY = radarY + RADAR_H / 2;
  drawRadarOnCanvas(ctx, radarCX, radarCY, 46);

  // Stat labels around radar — larger, crisper
  ctx.fillStyle = "rgba(56,182,255,0.8)";
  ctx.font = '700 9px "Space Mono", monospace';
  ctx.textAlign = "center";
  const labelR = 60;
  attributes.forEach((attr, i) => {
    const angle = -Math.PI / 2 + (i * 2 * Math.PI / attributes.length);
    ctx.fillText(attr.short, radarCX + Math.cos(angle) * labelR, radarCY + Math.sin(angle) * labelR + 3);
  });
  ctx.textAlign = "left";

  // Divider
  ctx.strokeStyle = "rgba(56,182,255,0.2)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, radarY + RADAR_H);
  ctx.lineTo(W, radarY + RADAR_H);
  ctx.stroke();

  // ── Pick rows ────────────────────────────────────────────────────────────
  const SCORE_CX = W - 38;
  const SCORE_R  = 22;
  const NAME_MAX = SCORE_CX - SCORE_R - 20 - 12;
  const nameFont = '700 17px "Playfair Display", Georgia, serif';

  const orderedValues = attributes.map((attr) => build[attr.key]);
  orderedValues.forEach((pick, i) => {
    if (!pick) return;
    const y = HEADER_H + RADAR_H + i * ROW_H;

    // Subtle alternate row tint
    if (i % 2 === 1) {
      ctx.fillStyle = "rgba(21,20,19,0.04)";
      ctx.fillRect(0, y, W, ROW_H);
    }

    // Full-width row divider
    ctx.strokeStyle = "rgba(21,20,19,0.1)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, y + ROW_H);
    ctx.lineTo(W, y + ROW_H);
    ctx.stroke();

    // Attribute label
    ctx.fillStyle = MUTED;
    ctx.font = '700 10px "Space Mono", monospace';
    ctx.fillText(pick.attribute.label.toUpperCase(), 20, y + 18);

    // Player name (truncated to fit)
    ctx.fillStyle = INK;
    ctx.fillText(clip(pick.player.name, NAME_MAX, nameFont), 20, y + 39);

    // Team · era
    ctx.fillStyle = MUTED;
    ctx.font = '400 10px "Space Mono", monospace';
    ctx.fillText(`${pick.teamEra.era} · ${pick.teamEra.team}`, 20, y + 56);

    // Score badge
    const scoreColor = pick.score >= 98 ? GOLD : pick.score >= 94 ? COURT : INK;
    const textColor  = pick.score >= 94 ? INK  : PAPER;
    ctx.fillStyle = scoreColor;
    ctx.beginPath();
    ctx.arc(SCORE_CX, y + ROW_H / 2, SCORE_R, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = textColor;
    ctx.font = '700 15px "Space Mono", monospace';
    ctx.textAlign = "center";
    ctx.fillText(pick.score, SCORE_CX, y + ROW_H / 2 + 5);
    ctx.textAlign = "left";
  });

  // ── Footer ───────────────────────────────────────────────────────────────
  const footerY = HEADER_H + RADAR_H + ROW_H * 9;
  ctx.fillStyle = INK;
  ctx.fillRect(0, footerY, W, FOOTER_H);

  ctx.fillStyle = CHALK;
  ctx.font = '700 14px "Playfair Display", Georgia, serif';
  ctx.fillText("Can you beat my build?", 22, footerY + 30);

  ctx.fillStyle = GOLD;
  ctx.font = '700 10px "Space Mono", monospace';
  ctx.textAlign = "right";
  ctx.fillText("playgoatlab.com", W - 22, footerY + 30);
  ctx.textAlign = "left";

  return new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.97));
}

function buildShareText(score, tier) {
  if (gameMode === "daily") {
    const num = getDailyNumber();
    const prefix = dailyData?.franchise
      ? `I scored ${score} building the greatest ${dailyData.franchiseTeamName} on GOAT Lab Daily #${num} 🏀`
      : `I scored ${score} on GOAT Lab Daily #${num} 🏀`;
    return `${prefix} Can you beat me? https://playgoatlab.com`;
  }
  return `I scored ${score} (${tier}) in GOAT Lab 🏀 Can you beat my build? https://playgoatlab.com`;
}

// URL of the per-build trading-card PNG (rendered by the /api/og edge function).
// Used to fetch the image and ATTACH it to a share — not as a link preview.
// Relative path keeps the fetch same-origin (works on www + apex). Reads the live
// globals (the saved-build path repopulates build + gameMode before sharing).
function buildCardImageUrl() {
  const score = _savedShareData ? _savedShareData.score : calculateScore();
  const vals = attributes.map((a) => build[a.key]?.score ?? 0).join("-");
  const params = new URLSearchParams({ s: String(score), m: gameMode, v: vals });
  if (gameMode === "daily") params.set("d", String(getDailyNumber()));
  return `/api/og?${params.toString()}`;
}

function openShareModal() {
  const score = calculateScore();
  const tier = getTier(score);

  shareCardScore.textContent = score;
  shareCardTier.textContent = tier;
  renderRadar();

  shareCardRows.innerHTML = "";
  attributes.forEach((attr) => {
    const pick = build[attr.key];
    if (!pick) return;
    const row = document.createElement("div");
    row.className = "share-row";
    row.innerHTML = `
      <span class="share-row-attr">${esc(attr.label)}</span>
      <span class="share-row-player">${esc(pick.player.name)}</span>
      <span class="share-row-meta">${esc(pick.teamEra.era)} ${esc(pick.teamEra.team)}</span>
      <span class="share-row-score">${esc(pick.score)}</span>
    `;
    shareCardRows.appendChild(row);
  });

  const gpEl = document.querySelector("#shareCardGP");
  if (gpEl) gpEl.hidden = !window.GoatPassActive;
  if (shareBtnLeaderboard) shareBtnLeaderboard.hidden = gameMode !== "daily";
  showModal(shareModal, document.activeElement instanceof HTMLElement ? document.activeElement : shareButton);
  primeShareImage();
}

function shareResult() {
  openShareModal();
}

logoHome.addEventListener("click", () => {
  if (!gameGrid.hidden) goBack();
});

modeButtons.forEach((button) => {
  button.addEventListener("click", () => startGame(button.dataset.mode));
});
resetButton.addEventListener("click", () => {
  if (gameMode === "daily") {
    if (Object.keys(build).length === 0) renderRound(); // start first round
    else goBack(); // mid-game: exit to mode select (daily re-locks once finished)
  } else {
    reset();
  }
});
backButton.addEventListener("click", goBack);
respinEraBtn.addEventListener("click", respinEra);
respinTeamBtn.addEventListener("click", respinTeam);
respinAttrBtn.addEventListener("click", respinAttribute);
shareButton.addEventListener("click", shareResult);

const playAgainBtn = document.querySelector("#playAgainBtn");
if (playAgainBtn) {
  playAgainBtn.addEventListener("click", () => {
    if (gameMode === "daily") {
      goBack();
    } else {
      reset();
    }
  });
}

// ── Modal focus management ───────────────────────────────────────────────────
function setupModal(modal, closeFn) {
  modal.addEventListener("keydown", (e) => {
    if (modal.hidden) return;
    if (e.key === "Escape") { e.stopPropagation(); closeFn(); return; }
    if (e.key !== "Tab") return;
    const sel = 'button:not([disabled]), [href], input, [tabindex]:not([tabindex="-1"])';
    const els = [...modal.querySelectorAll(sel)];
    if (!els.length) return;
    const first = els[0], last = els[els.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
}

function showModal(modal, trigger) {
  modal.hidden = false;
  modal._focusTrigger = trigger instanceof HTMLElement ? trigger : null;
  const sel = 'button:not([disabled]), [href], input, [tabindex]:not([tabindex="-1"])';
  const first = modal.querySelector(sel);
  if (first) first.focus();
}

function hideModal(modal) {
  modal.hidden = true;
  if (modal._focusTrigger) { modal._focusTrigger.focus(); modal._focusTrigger = null; }
}

setupModal(helpModal, () => hideModal(helpModal));
setupModal(shareModal, closeShareModal);

helpButton.addEventListener("click", () => showModal(helpModal, helpButton));
const helpButtonTop = document.querySelector("#helpButtonTop");
if (helpButtonTop) helpButtonTop.addEventListener("click", () => showModal(helpModal, helpButtonTop));
helpClose.addEventListener("click", () => hideModal(helpModal));
helpModal.addEventListener("click", (e) => { if (e.target === helpModal) hideModal(helpModal); });

function closeShareModal() {
  _savedShareData = null;
  if (_buildSnapshot !== null) {
    Object.keys(build).forEach(k => delete build[k]);
    Object.assign(build, _buildSnapshot);
    _buildSnapshot = null;
  }
  if (_modeSnapshot !== null) {
    gameMode = _modeSnapshot;
    _modeSnapshot = null;
  }
  shareBtnImage.hidden = false;
  hideModal(shareModal);
}
shareModalClose.addEventListener("click", closeShareModal);
shareModal.addEventListener("click", (e) => { if (e.target === shareModal) closeShareModal(); });

// ── Share infrastructure ────────────────────────────────────────────────────
let _shareBlob = null;
let _shareBlobPromise = null;
let _savedShareData = null;
let _buildSnapshot = null;   // saved build/gameMode so we can restore after sharing
let _modeSnapshot = null;

function buildSavedShareText(b) {
  return `I scored ${b.score} (${getTier(b.score)}) in GOAT Lab 🏀 Can you beat my build? https://playgoatlab.com`;
}

function openShareModalFromSaved(b) {
  // Close builds modal so only the share modal is visible
  const savedModal = document.querySelector("#savedModal");
  if (savedModal) hideModal(savedModal);

  _savedShareData = b;

  // Snapshot live globals, then temporarily override them so generateShareImage
  // draws this saved build (player names, scores, radar) correctly.
  _buildSnapshot = Object.assign({}, build);
  _modeSnapshot = gameMode;
  Object.keys(build).forEach(k => delete build[k]);
  (b.picks || []).forEach(p => {
    const attr = attributes.find(a => a.key === p.statKey);
    if (attr) build[attr.key] = {
      attribute: attr,
      player: { name: p.player || "—" },
      teamEra: { era: p.era || "", team: p.team || "" },
      score: p.score || 0,
    };
  });
  gameMode = b.mode || "classic";

  // Populate share card
  shareCardScore.textContent = b.score;
  shareCardTier.textContent = getTier(b.score);
  shareCardRows.innerHTML = "";
  (b.picks || []).forEach(p => {
    const row = document.createElement("div");
    row.className = "share-row";
    row.innerHTML = `
      <span class="share-row-attr">${esc(p.stat || p.statKey || "")}</span>
      <span class="share-row-player">${esc(p.player || "—")}</span>
      <span class="share-row-meta">${esc(p.era || "")} ${esc(p.team || "")}</span>
      <span class="share-row-score">${esc(p.score)}</span>
    `;
    shareCardRows.appendChild(row);
  });

  const gpEl2 = document.querySelector("#shareCardGP");
  if (gpEl2) gpEl2.hidden = !window.GoatPassActive;
  if (shareBtnLeaderboard) shareBtnLeaderboard.hidden = gameMode !== "daily";
  showModal(shareModal, null);
  primeShareImage();
}

function primeShareImage() {
  _shareBlob = null;
  _shareBlobPromise = generateShareImage().then(
    blob => { _shareBlob = blob; return blob; },
    err  => { _shareBlobPromise = null; return Promise.reject(err); }
  );
}

async function getShareBlob() {
  if (_shareBlob) return _shareBlob;
  if (_shareBlobPromise) return _shareBlobPromise;
  return generateShareImage();
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
}

// Open a URL synchronously (user-gesture context intact), then async-download image.
async function openAndDownload(btn, originalLabel, openFn) {
  openFn();
  btn.textContent = "Generating…";
  btn.disabled = true;
  try {
    const blob = await getShareBlob();
    downloadBlob(blob, "goat-lab-build.jpg");
  } catch (err) { console.error(err); }
  btn.textContent = originalLabel;
  btn.disabled = false;
}

// Share Image: download on desktop, share sheet on mobile
shareBtnImage.addEventListener("click", async () => {
  const testFile = new File([], "t.jpg", { type: "image/jpeg" });
  if (typeof navigator.canShare === "function" && navigator.canShare({ files: [testFile] })) {
    shareBtnImage.textContent = _shareBlob ? "Opening…" : "Generating…";
    shareBtnImage.disabled = true;
    try {
      const blob = await getShareBlob();
      const score = calculateScore();
      const tier = getTier(score);
      const file = new File([blob], "goat-lab-build.jpg", { type: "image/jpeg" });
      await navigator.share({ files: [file], text: `I scored ${score} (${tier}) in GOAT Lab 🏀`, url: "https://playgoatlab.com" });
    } catch (err) { if (err.name !== "AbortError") console.error(err); }
    shareBtnImage.textContent = "Share Image";
    shareBtnImage.disabled = false;
  } else {
    shareBtnImage.textContent = "Generating…";
    shareBtnImage.disabled = true;
    try { downloadBlob(await getShareBlob(), "goat-lab-build.jpg"); } catch (err) { console.error(err); }
    shareBtnImage.textContent = "Share Image";
    shareBtnImage.disabled = false;
  }
});

shareBtnX.addEventListener("click", () => {
  let tweet;
  if (_savedShareData) {
    const b = _savedShareData;
    tweet = `I scored ${b.score} (${getTier(b.score)}) in GOAT Lab 🏀 Can you beat my build?`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}&url=${encodeURIComponent("https://playgoatlab.com")}`, "_blank", "noopener,noreferrer");
  } else {
    const score = calculateScore();
    const tier = getTier(score);
    tweet = `I scored ${score} (${tier}) in GOAT Lab 🏀 Can you beat my build?`;
    openAndDownload(shareBtnX, "X / Twitter", () => {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}&url=${encodeURIComponent("https://playgoatlab.com")}`, "_blank", "noopener,noreferrer");
    });
  }
});

shareBtnText.addEventListener("click", async () => {
  // Attaches the trading-card PNG (from /api/og) as a real image alongside short
  // text. "Share Image" sends the detailed canvas card; this sends the card art.
  const score = _savedShareData ? _savedShareData.score : calculateScore();
  const tier = getTier(score);
  const text = _savedShareData ? buildSavedShareText(_savedShareData) : buildShareText(score, tier);
  const probe = new File([], "t.png", { type: "image/png" });
  if (typeof navigator.canShare === "function" && navigator.canShare({ files: [probe] })) {
    shareBtnText.textContent = "Generating…";
    shareBtnText.disabled = true;
    try {
      const blob = await fetch(buildCardImageUrl()).then((r) => r.blob());
      const file = new File([blob], "goat-lab.png", { type: "image/png" });
      await navigator.share({ files: [file], text });
    } catch (err) { if (err.name !== "AbortError") console.error(err); }
    shareBtnText.textContent = "Share";
    shareBtnText.disabled = false;
  } else if (typeof navigator.share === "function") {
    try { await navigator.share({ text }); }
    catch (err) { if (err.name !== "AbortError") console.error(err); }
  } else {
    window.open(`sms:?body=${encodeURIComponent(text)}`, "_self");
  }
});

shareBtnCopy.addEventListener("click", async () => {
  const score = _savedShareData ? _savedShareData.score : calculateScore();
  const tier = getTier(score);
  const text = _savedShareData ? buildSavedShareText(_savedShareData) : buildShareText(score, tier);
  try {
    await navigator.clipboard.writeText(text);
    shareBtnCopy.textContent = "Copied!";
    setTimeout(() => { shareBtnCopy.textContent = "Copy"; }, 1400);
  } catch {
    shareBtnCopy.textContent = "Failed";
    setTimeout(() => { shareBtnCopy.textContent = "Copy"; }, 1400);
  }
});

if (shareBtnLeaderboard) shareBtnLeaderboard.addEventListener("click", () => {
  closeShareModal();
  window.GoatLeaderboard?.openLeaderboard?.();
});

// ===== DAILY CHALLENGE =====

function mulberry32(seed) {
  return function() {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function getTodayStr() {
  // Local date so the daily rolls over at the player's own midnight, not UTC's.
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

// Sequential daily number, counting up forever. Day #1 = 2026-06-10 (the daily's
// launch). Noon anchor on both dates avoids any DST off-by-one.
function getDailyNumber(dateStr = getTodayStr()) {
  const start = new Date("2026-06-10T12:00:00");
  const cur   = new Date(dateStr + "T12:00:00");
  return Math.max(1, Math.floor((cur - start) / 86400000) + 1);
}

function strToSeed(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = Math.imul(31, h) + str.charCodeAt(i) | 0;
  return Math.abs(h) || 1;
}

function isFranchiseDay(dateStr) {
  if (dateStr < "2026-06-19") return false;
  const d = new Date(dateStr + "T12:00:00");
  return d.getDay() === 5; // Friday
}

function seededShuffle(arr, rng) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateDailyData(dateStr) {
  const rng = mulberry32(strToSeed(dateStr));
  const franchise = isFranchiseDay(dateStr);

  let franchiseTeamName = null;
  let franchisePool = null;

  if (franchise) {
    const counts = {};
    teamEras.forEach(t => { counts[t.team] = (counts[t.team] || 0) + 1; });
    const eligible = Object.keys(counts).filter(n => counts[n] >= 2);
    if (eligible.length) {
      franchiseTeamName = eligible[Math.floor(rng() * eligible.length)];
      franchisePool = seededShuffle(teamEras.filter(t => t.team === franchiseTeamName), rng);
    }
  }

  const dailyAttrs = seededShuffle([...attributes], rng);

  const rounds = dailyAttrs.map((attr, i) => ({
    attribute: attr,
    teamEra: franchise && franchisePool
      ? franchisePool[i % franchisePool.length]
      : teamEras[Math.floor(rng() * teamEras.length)],
  }));

  return { franchise: franchise && !!franchiseTeamName, franchiseTeamName, rounds };
}

const DAILY_KEY = "goatlab_daily_v2";
const PB_KEY = "goatlab_pb";

function getPB() {
  try { return JSON.parse(localStorage.getItem(PB_KEY) || "{}"); } catch { return {}; }
}
function savePB(mode, score) {
  const pb = getPB();
  if (!pb[mode] || score > pb[mode]) {
    pb[mode] = score;
    try { localStorage.setItem(PB_KEY, JSON.stringify(pb)); } catch {}
  }
}
function updatePBDisplay() {
  const pb = getPB();
  const pbClassic = document.querySelector("#pbClassic");
  const pbBlind = document.querySelector("#pbBlind");
  if (pbClassic) { if (pb.classic) { pbClassic.textContent = `Personal Best ${pb.classic}`; pbClassic.hidden = false; } else pbClassic.hidden = true; }
  if (pbBlind)   { if (pb.blind)   { pbBlind.textContent   = `Personal Best ${pb.blind}`;   pbBlind.hidden   = false; } else pbBlind.hidden   = true; }
}

function getDailyHistory() {
  try { return JSON.parse(localStorage.getItem(DAILY_KEY) || "{}"); } catch { return {}; }
}

function saveDailyResult(dateStr, score, tier, franchise, franchiseTeam, picks) {
  const h = getDailyHistory();
  h[dateStr] = { score, tier, franchise, franchiseTeam: franchiseTeam || null, picks: picks || null };
  try { localStorage.setItem(DAILY_KEY, JSON.stringify(h)); } catch {}
}

function getDailyStreak(history, todayStr) {
  let streak = 0;
  const d = new Date(todayStr + "T12:00:00Z");
  while (true) {
    const k = `${d.getUTCFullYear()}-${String(d.getUTCMonth()+1).padStart(2,'0')}-${String(d.getUTCDate()).padStart(2,'0')}`;
    if (!history[k]) break;
    streak++;
    d.setUTCDate(d.getUTCDate() - 1);
  }
  return streak;
}

const dailyCardBtn    = document.querySelector("[data-mode='daily']");
const dailyStatusEl   = document.querySelector("#dailyStatus");
const dailyStreakEl   = document.querySelector("#dailyStreak");
const dailySubtitleEl = document.querySelector("#dailySubtitle");
const dailyTagEl      = document.querySelector("#dailyTag");

function getCountdownStr() {
  const now = new Date();
  // Local midnight tonight, matching getTodayStr's local rollover.
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const totalMins = Math.floor((midnight - now) / 60000);
  const h = Math.floor(totalMins / 60);
  const m = totalMins % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

function showResultCountdown() {
  const rc = document.getElementById("resultCountdown");
  if (!rc) return;
  const span = rc.querySelector(".js-countdown");
  if (span) span.textContent = getCountdownStr();
  rc.hidden = false;
}

function hideResultCountdown() {
  const rc = document.getElementById("resultCountdown");
  if (rc) rc.hidden = true;
}

function updateDailyCard() {
  if (!dailyStatusEl) return;
  if (dailyTagEl) dailyTagEl.textContent = isFranchiseDay(getTodayStr()) ? `Franchise Friday` : `Daily #${getDailyNumber()}`;
  const todayStr    = getTodayStr();
  const history     = getDailyHistory();
  const entry       = history[todayStr];
  const streak      = getDailyStreak(history, todayStr);
  const isFranchise = isFranchiseDay(todayStr);

  if (entry) {
    dailyStatusEl.innerHTML = `${entry.score} · ${getTier(entry.score)}<span class="daily-comeback">Next challenge in <span id="dailyCountdown" class="js-countdown">${getCountdownStr()}</span></span>`;
    dailyStatusEl.dataset.done = "true";
    if (dailyCardBtn) {
      dailyCardBtn.disabled = false;
      const viewBtn = dailyCardBtn.querySelector(".daily-view-label");
      if (!viewBtn) {
        const label = document.createElement("span");
        label.className = "daily-view-label";
        label.textContent = "View & Share →";
        dailyCardBtn.appendChild(label);
      }
    }
  } else {
    dailyStatusEl.textContent = "Play today →";
    delete dailyStatusEl.dataset.done;
    if (dailyCardBtn) dailyCardBtn.disabled = false;
  }

  if (dailyStreakEl) {
    if (streak >= 2) {
      dailyStreakEl.textContent = `🔥 ${streak}-day streak`;
      dailyStreakEl.hidden = false;
    } else if (streak === 1) {
      dailyStreakEl.textContent = `🔥 1-day streak`;
      dailyStreakEl.hidden = false;
    } else if (entry) {
      dailyStreakEl.textContent = `Start a streak tomorrow`;
      dailyStreakEl.hidden = false;
    } else {
      dailyStreakEl.hidden = true;
    }
  }

  if (dailySubtitleEl) {
    if (isFranchise) {
      const data = generateDailyData(todayStr);
      dailySubtitleEl.textContent = data.franchiseTeamName
        ? `All picks from the ${data.franchiseTeamName} · Blind · one shot`
        : "All picks from one franchise · Blind · one shot";
    } else {
      const nextFriday = (() => { const d = new Date(todayStr + "T12:00:00"); const diff = (5 - d.getDay() + 7) % 7 || 7; d.setDate(d.getDate() + diff); return d.toLocaleDateString("en-US", { month: "short", day: "numeric" }); })();
      dailySubtitleEl.textContent = `Blind · same draft for everyone · one shot · Next Franchise Friday: ${nextFriday}`;
    }
  }
}

function tickCountdown() {
  const txt = getCountdownStr();
  document.querySelectorAll(".js-countdown").forEach((el) => { el.textContent = txt; });
}

function recalcEntryScore(entry, dateStr) {
  if (!entry || !Array.isArray(entry.picks) || entry.picks.length !== attributes.length) return null;
  const pickScores = attributes.map(attr => {
    const p = entry.picks.find(pk => pk.attrKey === attr.key);
    return p ? p.score : 0;
  });
  if (!pickScores.every(s => s > 0)) return null;
  const heightPick = entry.picks.find(p => p.attrKey === "height") || {};
  const heightScore = heightPick.score || 0;
  const heightPlayerName = heightPick.playerName || "";
  const newScoring = (dateStr || new Date().toISOString().slice(0, 10)) >= "2026-06-26";
  const sortedPicks = [...pickScores].sort((a, b) => a - b);
  const goatGate = newScoring
    ? sortedPicks[0] >= 88 &&
      pickScores.filter(v => v >= 100).length >= 1 &&
      pickScores.filter(v => v >= 98).length >= 3 &&
      pickScores.filter(v => v >= 97).length >= 4 &&
      pickScores.filter(v => v >= 95).length >= 6 &&
      heightScore >= 90
    : sortedPicks[2] >= 93 && sortedPicks[1] >= 92 && sortedPicks[0] >= 92 &&
      pickScores.filter(v => v >= 100).length >= 1 &&
      pickScores.filter(v => v >= 98).length >= 3 &&
      pickScores.filter(v => v >= 97).length >= 4 &&
      pickScores.filter(v => v >= 95).length >= 6 &&
      heightScore >= 90;
  if (goatGate) return 100;
  const avg = pickScores.reduce((s, v) => s + v, 0) / pickScores.length;
  const pen = pickScores.reduce((s, v) => s + Math.max(0, 75 - v) * 0.42, 0);
  const elite = newScoring
    ? pickScores.filter(v => v >= 99).length * 1.3 + pickScores.filter(v => v >= 96 && v < 99).length * 0.4
    : pickScores.filter(v => v >= 99).length * 1.5 + pickScores.filter(v => v >= 96 && v < 99).length * 0.5;
  const minPick = Math.min(...pickScores);
  const bal = minPick >= 90 ? 2.0 : minPick >= 87 ? 1.0 : minPick >= 82 ? 0.25 : 0;
  const hgtBonus = [
    "Victor Wembanyama", "Yao Ming", "Mark Eaton", "Shawn Bradley",
    "Gheorghe Muresan", "Manute Bol", "Ralph Sampson", "Rik Smits",
    "Arvydas Sabonis", "Zydrunas Ilgauskas", "Kristaps Porzingis", "Randy Breuer",
  ].includes(heightPlayerName) ? 2 : 0;
  return Math.max(55, Math.min(99, Math.round(avg - 2 - pen + elite + bal + hgtBonus)));
}

const _params = new URLSearchParams(location.search);
if (_params.has("recalcDaily") || _params.has("recalcAll")) {
  const h = getDailyHistory();
  const todayStr = getTodayStr();
  const keys = _params.has("recalcAll") ? Object.keys(h) : [todayStr];
  let changed = 0;
  keys.forEach(dateStr => {
    const entry = h[dateStr];
    const newScore = recalcEntryScore(entry);
    if (newScore !== null) {
      h[dateStr] = { ...entry, score: newScore, tier: getTier(newScore) };
      changed++;
    }
  });
  if (changed) {
    try { localStorage.setItem(DAILY_KEY, JSON.stringify(h)); } catch {}
  }
  if (_params.has("recalcAll")) {
    // Also clear Classic/Blind PBs since picks aren't stored for those
    try { localStorage.removeItem(PB_KEY); } catch {}
    // Flag so syncDailyHistory treats local as authoritative (not cloud)
    try { localStorage.setItem("goatlab_recalc_pending", "1"); } catch {}
  }
  history.replaceState(null, "", location.pathname);
}

window.addEventListener("beforeunload", (e) => {
  if (!gameGrid.hidden && result.hidden && round > 0) {
    e.preventDefault();
    e.returnValue = "";
  }
});

updateDailyCard();
loadAdSense(); // no-op until ADSENSE_CLIENT is set; present on load for AdSense verification
setInterval(tickCountdown, 60000);

renderBuildList();
updateBody(null);

// --- Accounts (optional Google login) + GLOBAL daily leaderboard ----------
(function initAccountsAndLeaderboard() {
  const Auth = window.GoatAuth;
  if (!Auth || !Auth.enabled) return; // graceful: no Firebase -> features stay hidden

  const $ = (id) => document.querySelector(id);
  const accountBar = $("#accountBar");
  const signedOut = $("#accountSignedOut");
  const signedIn = $("#accountSignedIn");
  const accountName = $("#accountName");
  const signInBtn = $("#signInBtn");
  const signOutBtn = $("#signOutBtn");
  const settingsBtn = $("#settingsBtn");
  const settingsMenu = $("#settingsMenu");
  const leaderboardBtn = $("#leaderboardBtn");
  const viewLeaderboardBtn = $("#viewLeaderboardBtn");
  const lbPage = $("#leaderboardPage");
  const lbBackBtn = $("#lbBackBtn");
  const lbPodium = $("#lbPodium");
  const lbList = $("#leaderboardList");
  const lbHint = $("#lbHint");
  const lbTabToday = $("#lbTabToday");
  const lbTabYesterday = $("#lbTabYesterday");
  const lbPlayerCount = $("#lbPlayerCount");
  const lbRankBanner = $("#lbRankBanner");
  const lbDist = $("#lbDist");
  const lbTomorrow = $("#lbTomorrow");
  const lbTomorrowNum = $("#lbTomorrowNum");
  const lbCountdown = $("#lbCountdown");

  // Settings dropdown (Sign out / Delete account)
  if (settingsBtn && settingsMenu) {
    const closeSettings = () => { settingsMenu.hidden = true; settingsBtn.setAttribute("aria-expanded", "false"); };
    settingsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = settingsMenu.hidden;
      settingsMenu.hidden = !open;
      settingsBtn.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("click", (e) => {
      if (!settingsMenu.hidden && !settingsMenu.contains(e.target) && e.target !== settingsBtn) closeSettings();
    });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeSettings(); });
    // Close only when an action item is chosen — not when toggling the theme.
    settingsMenu.addEventListener("click", (e) => { if (e.target.closest(".settings-item")) closeSettings(); });
  }

  accountBar.hidden = false;

  // Submit today's daily score to the global leaderboard (no-op if signed out).
  function submitToday(dateStr, score, tier, franchise, franchiseTeam) {
    if (!Auth.currentUser()) return;
    const picks = (getDailyHistory()[dateStr] || {}).picks || null;
    Auth.submitDailyScore(dateStr, { score, tier, franchise, franchiseTeam, picks }).catch(console.error);
  }
  function showResultButton() {
    if (viewLeaderboardBtn) viewLeaderboardBtn.hidden = false;
  }
  // Push one day's local daily result up to the cloud.
  function pushDailyHistory(dateStr) {
    if (!Auth.currentUser()) return;
    const entry = getDailyHistory()[dateStr];
    if (entry) Auth.putDailyHistory(dateStr, entry).catch(console.error);
  }
  // On sign-in: merge cloud daily history with local (so streak + history follow
  // you across devices), write the union back to local, and push local-only days up.
  async function syncDailyHistory() {
    if (!Auth.currentUser()) return;
    const local = getDailyHistory();
    const recalcPending = localStorage.getItem("goatlab_recalc_pending");
    let cloud = {};
    try { cloud = await Auth.fetchDailyHistory(); } catch (e) { console.error(e); return; }
    const merged = { ...local };
    if (!recalcPending) {
      // Normal sync: cloud wins if its score is higher (keeps best across devices)
      for (const [date, entry] of Object.entries(cloud)) {
        if (!merged[date] || (entry.score || 0) >= (merged[date].score || 0)) merged[date] = entry;
      }
    }
    // After recalc: local is authoritative — push everything local up to cloud
    try { localStorage.setItem(DAILY_KEY, JSON.stringify(merged)); } catch (e) {}
    for (const [date, entry] of Object.entries(merged)) {
      if (recalcPending || !cloud[date] || (entry.score || 0) > (cloud[date].score || 0)) {
        Auth.putDailyHistory(date, entry).catch(console.error);
      }
    }
    if (recalcPending) try { localStorage.removeItem("goatlab_recalc_pending"); } catch (e) {}
    try { updateDailyCard(); } catch (e) {}
  }
  window.GoatLeaderboard = { submitToday, showResultButton, pushDailyHistory, openLeaderboard, showDailyExtras: (d) => renderDailyExtras(d) };

  function formatPlayerCount(n) {
    if (n < 10) return String(n);
    const mag = Math.pow(10, Math.floor(Math.log10(n)));
    return (Math.floor(n / mag) * mag).toLocaleString() + "+";
  }

  // All-time player count — update manually over time.
  const PLAYER_COUNT_DISPLAY = "43,400+";
  (function showTotalPlayers() {
    const el = document.querySelector("#homeTotalPlayers");
    const numEl = document.querySelector("#homeTotalPlayersNum");
    if (!el || !numEl) return;
    numEl.textContent = PLAYER_COUNT_DISPLAY;
    el.hidden = false;
  })();


  // Render the global leaderboard for today.
  // Podium card for one of the top 3 (place = 1, 2, or 3).
  function goatBadge(on) {
    return on ? ' <span class="goat-badge-sm" title="GOAT Pass holder" aria-label="GOAT Pass">🐐</span>' : "";
  }
  // Strip the 🐐 from any display name so the badge can never be faked in a
  // handle (defends even against direct database writes — the badge only ever
  // comes from the verified goatPass flag).
  const stripGoatEmoji = (s) => String(s == null ? "" : s).replace(/\u{1F410}[️‍]?/gu, "");
  const lbName = (s) => esc(stripGoatEmoji(s).trim() || "Anonymous");

  function podiumCard(r, place, mine) {
    const medal = place === 1 ? "🥇" : place === 2 ? "🥈" : "🥉";
    return `
      <div class="lb-pod lb-pod-${place}${mine ? " lb-pod-me" : ""}">
        <span class="lb-pod-medal" aria-hidden="true">${medal}</span>
        <span class="lb-pod-rank">${place}</span>
        <span class="lb-pod-name${r.goatPass ? " gp-name" : ""}">${lbName(r.name)}${goatBadge(r.goatPass)}${mine ? " (you)" : ""}</span>
        <span class="lb-pod-score">${esc(r.score)}</span>
        <span class="lb-pod-step" aria-hidden="true"></span>
      </div>`;
  }

  function getYesterdayStr() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().slice(0, 10);
  }

  // Score tier bands for distribution bar
  const DIST_TIERS = [
    { label: "GOAT",    min: 100, max: 100, color: "#e6b843" },
    { label: "97–99",   min: 97,  max: 99,  color: "#157f68" },
    { label: "94–96",   min: 94,  max: 96,  color: "#4fa882" },
    { label: "90–93",   min: 90,  max: 93,  color: "#c9673d" },
    { label: "86–89",   min: 86,  max: 89,  color: "#b0956a" },
    { label: "≤85",     min: 0,   max: 85,  color: "#c5bfb3" },
  ];

  // --- Score histogram helpers (score -> player count) --------------------
  function histTotal(hist) { let n = 0; for (const k in hist) n += hist[k] || 0; return n; }
  function histBetween(hist, min, max) { let n = 0; for (const k in hist) { const v = +k; if (v >= min && v <= max) n += hist[k] || 0; } return n; }
  function histAbove(hist, x) { let n = 0; for (const k in hist) { if (+k > x) n += hist[k] || 0; } return n; }
  function scoresToHist(scores) { const h = {}; scores.forEach(s => { const k = Math.max(0, Math.min(100, Math.round(s))); h[k] = (h[k] || 0) + 1; }); return h; }

  function renderDistBar(hist) {
    const total = histTotal(hist);
    if (!lbDist || !total) { if (lbDist) lbDist.hidden = true; return; }
    const bars = DIST_TIERS.map(t => {
      const count = histBetween(hist, t.min, t.max);
      const pct = Math.round(count / total * 100);
      if (!count) return "";
      return `<div class="lb-dist-row">
        <span class="lb-dist-label">${t.label}</span>
        <div class="lb-dist-track">
          <div class="lb-dist-fill" style="width:${pct}%;background:${t.color}"></div>
        </div>
        <span class="lb-dist-pct">${pct}%</span>
      </div>`;
    }).join("");
    lbDist.innerHTML = bars;
    lbDist.hidden = false;
  }

  function startCountdown() {
    if (!lbCountdown) return;
    const tick = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      const diff = tomorrow - now;
      const h = String(Math.floor(diff / 3600000)).padStart(2, "0");
      const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
      const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
      lbCountdown.textContent = `${h}:${m}:${s}`;
    };
    tick();
    clearInterval(window._lbCountdownTimer);
    window._lbCountdownTimer = setInterval(tick, 1000);
  }

  async function renderLeaderboard(dateStr) {
    const isToday = !dateStr || dateStr === getTodayStr();
    const targetDate = dateStr || getTodayStr();
    const me = Auth.currentUser();
    lbHint.hidden = true;
    if (lbPlayerCount) lbPlayerCount.hidden = true;
    if (lbRankBanner) lbRankBanner.hidden = true;
    if (lbDist) lbDist.hidden = true;
    if (lbTomorrow) lbTomorrow.hidden = true;
    clearInterval(window._lbCountdownTimer);
    lbPodium.innerHTML = "";
    lbList.hidden = false;
    lbList.innerHTML = `<p class="lb-empty">Loading ${isToday ? "today" : "yesterday"}'s board…</p>`;

    // Fire both reads simultaneously — leaderboard (top 75) + the daily aggregate
    // (ONE doc: player count + score histogram) for count, distribution, and rank.
    const aggPromise = Auth.getDailyAggregate(targetDate).catch(() => null);
    let rows;
    try {
      rows = await Auth.getDailyLeaderboard(targetDate, 75);
    } catch (e) {
      console.error(e);
      lbList.innerHTML = '<p class="lb-empty">Couldn\'t load the leaderboard.</p>';
      return;
    }
    const isMine = (r) => me && r.uid === me.uid;

    // Render the main board immediately once top-75 arrives.
    if (!rows.length) {
      lbList.innerHTML = isToday
        ? '<p class="lb-empty">No scores yet today. Be the first — play the Daily!</p>'
        : '<p class="lb-empty">No scores recorded for yesterday.</p>';
    } else {
      const top = rows.slice(0, 3);
      const order = [top[1], top[0], top[2]];
      const place = [2, 1, 3];
      lbPodium.innerHTML = order.map((r, i) => r ? podiumCard(r, place[i], isMine(r)) : "").join("");
      lbList.hidden = false;
      const rest = rows.slice(3);
      lbList.innerHTML = rest.length
        ? rest.map((r, i) => {
            const mine = isMine(r);
            return `
              <div class="lb-row${mine ? " lb-row-me" : ""}">
                <span class="lb-rank">${i + 4}</span>
                <span class="lb-name${r.goatPass ? " gp-name" : ""}">${lbName(r.name)}${goatBadge(r.goatPass)}${mine ? " (you)" : ""}</span>
                <span class="lb-score">${esc(r.score)}</span>
              </div>`;
          }).join("")
        : '<p class="lb-empty lb-empty-rest">Only the podium so far — climb on!</p>';
    }

    // Distribution bar + exact rank fill in once the aggregate resolves
    // (non-blocking). The summary covers EVERY player who's played; if it looks
    // incomplete (missing, or fewer than the tracked player count), read the
    // full set once, use it, and write the summary back so later views are cheap.
    aggPromise.then(async agg => {
      let hist = agg && agg.hist ? agg.hist : {};
      const count = agg ? (agg.count || 0) : 0;
      if (histTotal(hist) === 0 || histTotal(hist) < count) {
        try {
          const scores = await Auth.getAllDailyScores(targetDate);
          if (scores.length) {
            hist = scoresToHist(scores);
            Auth.writeDailyHist(targetDate, hist, scores.length); // fire-and-forget backfill
          }
        } catch (e) {}
      }
      renderDistBar(hist);
      renderRankBanner(hist, rows, me, isToday);
    });

    // Only pin the user's own score when viewing today's board.
    if (isToday && me && !rows.some((r) => r.uid === me.uid)) {
      let myScore = null;
      try { myScore = getDailyHistory()[getTodayStr()]?.score ?? null; } catch (e) {}
      if (myScore != null) {
        let myName = Auth.displayName();
        try { myName = await Auth.getHandle(); } catch (e) {}
        lbList.insertAdjacentHTML("beforeend", `
          <div class="lb-row lb-row-me lb-row-you" style="border-top:2px dashed var(--ink,#151413);margin-top:6px">
            <span class="lb-rank">-</span>
            <span class="lb-name${hasPass ? " gp-name" : ""}">${lbName(myName)}${goatBadge(hasPass)} (you)</span>
            <span class="lb-score">${esc(myScore)}</span>
          </div>`);
      }
    }

    // "Come back tomorrow" nudge — only on today's board if the user has already played.
    if (isToday && lbTomorrow) {
      const playedToday = !!getDailyHistory()[getTodayStr()];
      if (playedToday) {
        if (lbTomorrowNum) lbTomorrowNum.textContent = `Daily #${getDailyNumber() + 1}`;
        lbTomorrow.hidden = false;
        startCountdown();
      }
    }

    if (!me) {
      lbHint.textContent = isToday
        ? "Sign in and play today's Daily to claim your spot."
        : "Sign in to see your placement highlighted on past boards.";
      lbHint.hidden = false;
    }
  }

  // Full-screen leaderboard page: remember the screen we came from, restore on Back.
  let lbReturnScreen = null;
  const mainScreens = () => [
    document.querySelector("#modeScreen"),
    document.querySelector("#gameGrid"),
    document.querySelector("#result"),
  ];
  function setLbTab(tab) {
    const isYesterday = tab === "yesterday";
    if (lbTabToday) { lbTabToday.classList.toggle("lb-tab-active", !isYesterday); lbTabToday.setAttribute("aria-selected", String(!isYesterday)); }
    if (lbTabYesterday) { lbTabYesterday.classList.toggle("lb-tab-active", isYesterday); lbTabYesterday.setAttribute("aria-selected", String(isYesterday)); }
    renderLeaderboard(isYesterday ? getYesterdayStr() : getTodayStr());
  }

  function openLeaderboard() {
    lbReturnScreen = mainScreens().find((s) => s && !s.hidden) || document.querySelector("#modeScreen");
    mainScreens().forEach((s) => { if (s) s.hidden = true; });
    lbPage.hidden = false;
    window.scrollTo(0, 0);
    setLbTab("today");
  }
  function closeLeaderboard() {
    lbPage.hidden = true;
    (lbReturnScreen || document.querySelector("#modeScreen")).hidden = false;
    window.scrollTo(0, 0);
  }
  leaderboardBtn.addEventListener("click", () => openLeaderboard());
  if (viewLeaderboardBtn) viewLeaderboardBtn.addEventListener("click", () => openLeaderboard());
  lbBackBtn.addEventListener("click", () => closeLeaderboard());
  if (lbTabToday) lbTabToday.addEventListener("click", () => setLbTab("today"));
  if (lbTabYesterday) lbTabYesterday.addEventListener("click", () => setLbTab("yesterday"));

  signInBtn.addEventListener("click", async () => {
    signInBtn.textContent = "Opening Google…";
    try { await Auth.signIn(); }
    catch (e) { console.error(e); }
    finally { signInBtn.innerHTML = '<span class="g-mark" aria-hidden="true">G</span> Sign in with Google'; }
  });
  signOutBtn.addEventListener("click", () => Auth.signOut());

  const deleteAccountBtn = $("#deleteAccountBtn");
  deleteAccountBtn.addEventListener("click", async () => {
    if (!Auth.currentUser()) return;
    if (!confirm("Delete your GOAT Lab account?\n\nThis permanently removes your saved builds, daily history & streak, leaderboard entries, and your sign-in. This cannot be undone.")) return;
    if (!confirm("Are you absolutely sure? This is permanent.")) return;
    deleteAccountBtn.disabled = true;
    deleteAccountBtn.textContent = "Deleting…";
    try {
      await Auth.deleteAccount();
      try { localStorage.removeItem(DAILY_KEY); } catch (e) {}
      alert("Your account and all associated data have been deleted.");
      location.reload();
    } catch (e) {
      console.error(e);
      alert("Couldn't fully delete the account. Please email ethan@momentumapps.net and we'll remove it.");
      deleteAccountBtn.disabled = false;
      deleteAccountBtn.textContent = "Delete account";
    }
  });

  // --- Custom handle (public leaderboard name) ---------------------------
  let currentHandle = null;
  const editHandleBtn = $("#editHandleBtn");
  const handleModal = $("#handleModal");
  const handleInput = $("#handleInput");
  const handleStatus = $("#handleStatus");
  const handleSaveBtn = $("#handleSaveBtn");
  const handleClose = $("#handleModalClose");

  setupModal(handleModal, () => hideModal(handleModal));
  editHandleBtn.addEventListener("click", () => {
    handleInput.value = currentHandle || "";
    handleStatus.textContent = "";
    showModal(handleModal, editHandleBtn);
    handleInput.focus();
    handleInput.select();
  });
  handleClose.addEventListener("click", () => hideModal(handleModal));
  handleModal.addEventListener("click", (e) => { if (e.target === handleModal) hideModal(handleModal); });
  const _badWords = /\b(sh[i1]t|fuck|fuk|fuq|fvck|fck|f+u+c+k+|ass(?:hole|wipe|hat|face|clown)?|a55|b[i1]tch|bastard|c[u\*]nt|d[i1]ck|c[o0]ck|pussy|p[i1]ss|prick|sl[u\*]t|wh[o0]re|nigger|nigga|n[i1]gg[ae3]r?|faggot|f[a4]gg?[o0]t|r[e3]tard|spic|ch[i1]nk|k[i1]ke|wetback|twat|wank(?:er)?|j[i1]zz|[ck]um|cl[i1]t|dildo|t[i1]ts?|boob|p[e3]nis|vag[i1]na|anus|anal|p[o0]rn|sex(?:y)?|r[a4]pe|mol[e3]st|p[e3]do|naz[i1]|h[i1]tler|kkk|cuck|skank|ho(?:e)?|d[u\*]mb(?:ass)?|idiot|moron|suck|balls|scrote|nutsack|ballsack|boner|erect|horny|lust|perv|creep|simp|incel|dyke|tr[a4]nny|beaner|cracker|honky|gook|raghead|towelhead|coon|darkie|mick|polack|hymie|jap|c[o0]on|wop|dago|gypsy|redneck|buttfuck|butthole|butt(?:hole|plug|sex)|c[o0]ck(?:sucker)?|cumshot|c[u\*]mslut|deepthroat|gangbang|handjob|blowjob|footjob|rimjob|fist(?:ing)?|squirt|orgasm|fetish|bdsm|bondage|masturbat|finger(?:ing)|sext(?:ing)?|nude|nudes|naked|twerk|onlyfan|camgirl|escort|hooker|prostitut|stripper|threesome|incest|hentai|loli|shota|gore|snuff|suicide|kys|killurself|kms)\b/i;
  const _badPrefixes = /n[i1]gg|f[a4]gg|c[u\*]nt|ret[a4]rd|sp[i1]c|ch[i1]nk|k[i1]ke|p[e3]do|r[a4]pe|wh[o0]re|sl[u\*]t|c[o0]on|g[o0]{2}k|tr[a4]nn/i;
  function isNameClean(name) {
    const n = name.replace(/[^a-z0-9]/gi, " ");
    return !_badWords.test(n) && !_badPrefixes.test(n);
  }

  handleSaveBtn.addEventListener("click", async () => {
    const name = handleInput.value.trim();
    if (!name) { handleStatus.textContent = "Enter a name."; return; }
    if (/\u{1F410}/u.test(name)) { handleStatus.textContent = "The 🐐 badge is reserved for GOAT Pass holders — please remove it from your name."; return; }
    if (!isNameClean(name)) { handleStatus.textContent = "That name isn't allowed. Please choose another."; return; }
    handleSaveBtn.disabled = true;
    handleStatus.textContent = "Saving…";
    try {
      currentHandle = await Auth.setHandle(name);
      accountName.textContent = currentHandle;
      // Reflect the new name on today's leaderboard entry if already played.
      const entry = getDailyHistory()[getTodayStr()];
      if (entry) Auth.submitDailyScore(getTodayStr(), {
        name: currentHandle, score: entry.score, tier: entry.tier || getTier(entry.score),
        franchise: entry.franchise || false, franchiseTeam: entry.franchiseTeam || null, picks: entry.picks || null,
      }).catch(console.error);
      handleStatus.textContent = "Saved ✓";
      setTimeout(() => hideModal(handleModal), 700);
    } catch (e) {
      console.error(e);
      handleStatus.textContent = "Couldn't save — try again.";
    } finally { handleSaveBtn.disabled = false; }
  });
  handleInput.addEventListener("keydown", (e) => { if (e.key === "Enter") handleSaveBtn.click(); });

  // --- Save Build (My Builds) --------------------------------------------
  const saveBuildButton = $("#saveBuildButton");
  const saveModal = $("#saveModal");
  const saveModalClose = $("#saveModalClose");
  const saveNameInput = $("#saveNameInput");
  const saveConfirmBtn = $("#saveConfirmBtn");
  const saveStatus = $("#saveStatus");
  const myBuildsBtn = $("#myBuildsBtn");
  const savedModal = $("#savedModal");
  const savedModalClose = $("#savedModalClose");
  const savedList = $("#savedList");

  function buildComplete() { return attributes.every((a) => build[a.key]); }

  function serializeBuild(name) {
    const picks = attributes.map((a) => {
      const p = build[a.key];
      return {
        statKey: a.key, stat: a.label,
        player: p.player.name, number: p.player.number,
        era: p.teamEra.era, team: p.teamEra.team,
        golden: !!p.teamEra.golden, score: p.score,
      };
    });
    return { name: name.slice(0, 40), score: calculateScore(), mode: gameMode, picks };
  }

  function refreshSaveBtn() {
    saveBuildButton.hidden = !(Auth.currentUser() && !result.hidden && buildComplete());
  }
  // Reveal "Save Build" whenever a finished result is shown (any mode).
  if (typeof finish === "function") {
    const _finish = finish;
    finish = function patchedFinish() { _finish.apply(this, arguments); refreshSaveBtn(); };
    window.finish = finish;
  }

  function closeSave() { hideModal(saveModal); saveStatus.textContent = ""; }
  setupModal(saveModal, closeSave);
  saveBuildButton.addEventListener("click", () => {
    if (!Auth.currentUser()) return;
    saveNameInput.value = `${calculateScore()} ${getTier(calculateScore())}`.slice(0, 40);
    saveStatus.textContent = "";
    showModal(saveModal, saveBuildButton);
    saveNameInput.focus();
    saveNameInput.select();
  });
  saveModalClose.addEventListener("click", closeSave);
  saveModal.addEventListener("click", (e) => { if (e.target === saveModal) closeSave(); });
  saveConfirmBtn.addEventListener("click", async () => {
    const name = saveNameInput.value.trim() || `GOAT ${calculateScore()}`;
    saveConfirmBtn.disabled = true;
    saveStatus.textContent = "Saving…";
    try {
      await Auth.saveBuild(serializeBuild(name));
      saveStatus.textContent = "Saved to My Builds ✓";
      setTimeout(closeSave, 850);
    } catch (e) {
      console.error(e);
      saveStatus.textContent = "Couldn't save — try again.";
    } finally { saveConfirmBtn.disabled = false; }
  });
  saveNameInput.addEventListener("keydown", (e) => { if (e.key === "Enter") saveConfirmBtn.click(); });

  function fmtDate(ts) { try { return ts && ts.toDate ? ts.toDate().toLocaleDateString() : ""; } catch { return ""; } }
  let builds = [];
  async function renderSaved() {
    savedList.innerHTML = '<p class="saved-empty">Loading…</p>';
    try { builds = await Auth.listBuilds(); }
    catch (e) { console.error(e); savedList.innerHTML = '<p class="saved-empty">Couldn\'t load your builds.</p>'; return; }
    if (!builds.length) {
      savedList.innerHTML = '<p class="saved-empty">No saved builds yet. Finish a run and hit Save Build.</p>';
      return;
    }
    const shortFor = (p) => {
      const a = attributes.find((x) => x.key === p.statKey);
      return (a && a.short) || p.stat || "";
    };
    savedList.innerHTML = builds.map((b) => {
      const picks = Array.isArray(b.picks) ? b.picks : [];
      const detail = picks.length
        ? picks.map((p) => `
            <div class="bd-pick">
              <span class="bd-stat">${esc(shortFor(p))}</span>
              <span class="bd-player">${esc(p.player || "—")}${p.golden ? ' <span class="bd-golden" title="Golden roll">✦</span>' : ""}</span>
              <span class="bd-team">${esc(p.era || "")} ${esc(p.team || "")}</span>
              <span class="bd-pscore">${esc(p.score)}</span>
            </div>`).join("")
        : '<p class="bd-empty">Pick details weren\'t saved for this build.</p>';
      return `
      <div class="saved-row" data-id="${esc(b.id)}">
        <div class="saved-row-top">
          <button class="saved-row-head" data-toggle="${esc(b.id)}" type="button" aria-expanded="false">
            <span class="saved-row-score">${esc(b.score)}</span>
            <span class="saved-row-meta">
              <strong>${esc(b.name || "Untitled build")}</strong>
              <small>${esc((b.mode || "").toUpperCase())} · ${esc(fmtDate(b.createdAt))} · tap to view</small>
            </span>
            <span class="saved-row-caret" aria-hidden="true">▾</span>
          </button>
          <button class="saved-row-share" data-share="${esc(b.id)}" type="button" aria-label="Share build" title="Share build">↗</button>
          <button class="saved-row-del" data-del="${esc(b.id)}" type="button" aria-label="Delete build">&#x2715;</button>
        </div>
        <div class="saved-row-detail" hidden>${detail}</div>
      </div>`;
    }).join("");
  }
  setupModal(savedModal, () => hideModal(savedModal));
  myBuildsBtn.addEventListener("click", () => { showModal(savedModal, myBuildsBtn); renderSaved(); });
  savedModalClose.addEventListener("click", () => hideModal(savedModal));
  savedModal.addEventListener("click", (e) => { if (e.target === savedModal) hideModal(savedModal); });
  savedList.addEventListener("click", async (e) => {
    const delBtn = e.target.closest("[data-del]");
    if (delBtn) {
      if (!confirm("Delete this build? This can't be undone.")) return;
      delBtn.disabled = true;
      try { await Auth.deleteBuild(delBtn.getAttribute("data-del")); await renderSaved(); }
      catch (err) { console.error(err); delBtn.disabled = false; }
      return;
    }
    const shareBtn = e.target.closest("[data-share]");
    if (shareBtn) {
      const id = shareBtn.getAttribute("data-share");
      const row = shareBtn.closest(".saved-row");
      const b = builds.find(x => x.id === id);
      if (b) openShareModalFromSaved(b);
      return;
    }
    const head = e.target.closest("[data-toggle]");
    if (head) {
      const row = head.closest(".saved-row");
      const detail = row.querySelector(".saved-row-detail");
      const open = detail.hidden;
      detail.hidden = !open;
      head.setAttribute("aria-expanded", String(open));
      row.classList.toggle("is-open", open);
    }
  });

  // First-time experience: auto-open How to Play once
  if (!localStorage.getItem("goatlab_seen_help")) {
    setTimeout(() => showModal(helpModal, null), 400);
    try { localStorage.setItem("goatlab_seen_help", "1"); } catch {}
  }

  updatePBDisplay();

  // ===== GOAT Pass — optional one-time unlock ($2.99 launch price) =========
  const GOAT_PASS_URL = "https://buy.stripe.com/5kQaEY8wV4vldQF1v68Zq01";
  let hasPass = false;

  // --- Optimal build: best achievable from a day's exact draft (no respins) ---
  function computeOptimalDaily(dateStr) {
    let data;
    try { data = generateDailyData(dateStr); } catch (e) { return null; }
    if (!data || !Array.isArray(data.rounds) || data.rounds.length !== attributes.length) return null;
    const picks = data.rounds.map((rd) => {
      const attr = rd.attribute;
      const pool = (rd.teamEra && rd.teamEra.players) || [];
      let best = null, bestScore = -1;
      for (const pl of pool) {
        const sc = (pl.ratings && pl.ratings[attr.key]) || 0;
        if (sc > bestScore) { bestScore = sc; best = pl; }
      }
      return {
        attrKey: attr.key, attrLabel: attr.label, attrShort: attr.short,
        playerName: best ? best.name : "—",
        era: rd.teamEra ? rd.teamEra.era : "", team: rd.teamEra ? rd.teamEra.team : "",
        score: bestScore < 0 ? 0 : bestScore,
      };
    });
    const score = recalcEntryScore({ picks }, dateStr);
    return score == null ? null : { picks, score };
  }

  // --- The unlock modal ---------------------------------------------------
  const passModal = document.querySelector("#passModal");
  const passModalClose = document.querySelector("#passModalClose");
  const passCtaBtn = document.querySelector("#passCtaBtn");
  const passFine = document.querySelector("#passFine");

  function openPassModal() {
    if (!passModal) return;
    const signedIn = !!Auth.currentUser();
    if (passCtaBtn) passCtaBtn.textContent = signedIn ? "Unlock GOAT Pass · $2.99" : "Sign in to unlock · $2.99";
    if (passFine) passFine.textContent = signedIn
      ? "One-time purchase. No subscription. Secure checkout via Stripe."
      : "Sign in with Google first so your pass unlocks on your account.";
    showModal(passModal, null);
  }
  function closePassModal() { if (passModal) hideModal(passModal); }
  async function startCheckout() {
    if (!Auth.currentUser()) {
      try { await Auth.signIn(); } catch (e) { return; }
      if (!Auth.currentUser()) return;
    }
    window.location.href = Auth.goatPassCheckoutUrl(GOAT_PASS_URL);
  }
  if (passModal) {
    setupModal(passModal, closePassModal);
    passModal.addEventListener("click", (e) => { if (e.target === passModal) closePassModal(); });
  }
  if (passModalClose) passModalClose.addEventListener("click", closePassModal);
  if (passCtaBtn) passCtaBtn.addEventListener("click", startCheckout);

  // --- Results-screen reveal / unlock strip -------------------------------
  function miniChip(p, best) {
    return `<div class="mini-chip${best ? " mc-best" : ""}"><span class="mc-stat">${esc(p.attrLabel || p.attrShort || "")}</span><span class="mc-name">${esc(p.playerName || "—")}</span></div>`;
  }
  function optimalCardHTML(opt) {
    let bestIdx = 0, bestScore = -1;
    opt.picks.forEach((p, i) => { if (p.score > bestScore) { bestScore = p.score; bestIdx = i; } });
    const chips = opt.picks.map((p, i) => miniChip(p, i === bestIdx)).join("");
    return `
      <div class="optimal-card">
        <div class="optimal-head">
          <span class="optimal-kicker">🐐 Best build from today's draft</span>
          <span class="optimal-score">${esc(opt.score)}</span>
        </div>
        <div class="optimal-grid">${chips}</div>
        <div class="optimal-foot" id="optimalFoot">The highest score possible from today's exact draft.</div>
      </div>`;
  }
  async function fillOptimalRarity(dateStr, optScore) {
    try {
      const agg = await Auth.getDailyAggregate(dateStr);
      let hist = agg && agg.hist ? agg.hist : {};
      const count = agg ? (agg.count || 0) : 0;
      if (histTotal(hist) === 0 || histTotal(hist) < count) {
        const scores = await Auth.getAllDailyScores(dateStr);
        if (scores.length) { hist = scoresToHist(scores); Auth.writeDailyHist(dateStr, hist, scores.length); }
      }
      const foot = document.querySelector("#optimalFoot");
      const total = histTotal(hist);
      if (!foot || !total) return;
      const n = histAbove(hist, optScore - 1); // scores >= optScore
      const pct = Math.max(1, Math.round((n / total) * 100));
      foot.textContent = n === 0
        ? `No one has matched ${optScore} yet today — the draft's ceiling is still standing.`
        : `Only ${pct}% of today's players matched this score (${optScore}).`;
    } catch (e) {}
  }
  function unlockStripHTML(opt) {
    const tease = opt.picks.slice(0, 6).map((p) =>
      `<div class="mini-chip"><span class="mc-stat">${esc(p.attrLabel)}</span><span class="mc-name">${esc(p.playerName)}</span></div>`).join("");
    return `
      <div class="unlock-strip">
        <div class="us-left">
          <div class="us-goat" aria-hidden="true">🐐</div>
          <div class="us-txt">
            <strong>See the best build from today's draft</strong>
            <span>+ your exact rank &amp; the 🐐 badge on every board</span>
          </div>
        </div>
        <button class="unlock-cta" type="button" data-unlock>Unlock · $2.99</button>
      </div>
      <div class="tease-wrap" aria-hidden="true"><div class="tease-grid">${tease}</div></div>`;
  }
  function renderDailyExtras(dateStr) {
    const box = document.querySelector("#goatPassResult");
    if (!box) return;
    const opt = computeOptimalDaily(dateStr);
    if (!opt) { box.hidden = true; box.innerHTML = ""; return; }
    if (hasPass) {
      box.innerHTML = optimalCardHTML(opt);
      fillOptimalRarity(dateStr, opt.score);
    } else {
      box.innerHTML = unlockStripHTML(opt);
      const btn = box.querySelector("[data-unlock]");
      if (btn) btn.addEventListener("click", openPassModal);
    }
    box.hidden = false;
  }

  // --- Exact rank + percentile on the leaderboard -------------------------
  function renderRankBanner(hist, rows, me, isToday) {
    if (!lbRankBanner) return;
    const total = histTotal(hist);
    if (!me || !total) { lbRankBanner.hidden = true; return; }
    let myScore = null;
    const myRow = rows.find((r) => r.uid === me.uid);
    if (myRow) myScore = myRow.score;
    else if (isToday) { try { myScore = getDailyHistory()[getTodayStr()]?.score ?? null; } catch (e) {} }
    if (myScore == null) { lbRankBanner.hidden = true; return; }
    const rank = histAbove(hist, myScore) + 1;
    const pct = Math.max(1, Math.round((rank / total) * 100));
    if (hasPass) {
      lbRankBanner.innerHTML = `
        <div class="lb-rank-card">
          <div class="lb-rank-left">
            <div class="lb-rank-kicker">${isToday ? "Your rank today" : "Your rank"}</div>
            <div class="lb-rank-big">#${rank.toLocaleString()} <small>/ ${total.toLocaleString()}</small></div>
          </div>
          <div class="lb-rank-pct"><div class="lb-rank-pct-num">Top ${pct}%</div><div class="lb-rank-pct-label">of players</div></div>
        </div>`;
    } else {
      lbRankBanner.innerHTML = `<button class="lb-rank-teaser" type="button" id="lbRankTeaser">🔒 See your exact rank &amp; percentile — <strong>GOAT Pass</strong></button>`;
      const t = document.querySelector("#lbRankTeaser");
      if (t) t.addEventListener("click", openPassModal);
    }
    lbRankBanner.hidden = false;
  }

  // --- My Stats page ------------------------------------------------------
  const statsPage = document.querySelector("#statsPage");
  const statsBody = document.querySelector("#statsBody");
  const statsBackBtn = document.querySelector("#statsBackBtn");
  const statsPassPill = document.querySelector("#statsPassPill");
  const myStatsBtn = document.querySelector("#myStatsBtn");
  const statsTabsBar = document.querySelector("#statsTabs");
  const statsTabDaily = document.querySelector("#statsTabDaily");
  const statsTabClassic = document.querySelector("#statsTabClassic");
  const statsTabBlind = document.querySelector("#statsTabBlind");
  let statsReturnScreen = null;
  let statsTab = "daily";
  let _statsBuilds = null; // cached saved builds for the Classic/Blind tabs

  function isoUTC(d) {
    return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`;
  }
  function dayDiff(a, b) {
    return Math.round((new Date(b + "T12:00:00Z") - new Date(a + "T12:00:00Z")) / 86400000);
  }
  function computeLongestStreak(history) {
    const dates = Object.keys(history).filter((d) => history[d]).sort();
    let best = 0, cur = 0, prev = null;
    for (const d of dates) {
      if (prev && dayDiff(prev, d) === 1) cur++; else cur = 1;
      if (cur > best) best = cur;
      prev = d;
    }
    return best;
  }
  function last30Avg(history, today) {
    const end = new Date(today + "T12:00:00Z");
    let sum = 0, n = 0;
    for (let i = 0; i < 30; i++) {
      const d = new Date(end); d.setUTCDate(d.getUTCDate() - i);
      const e = history[isoUTC(d)];
      if (e && typeof e.score === "number") { sum += e.score; n++; }
    }
    return n ? Math.round((sum / n) * 10) / 10 : 0;
  }
  function heatTier(score) {
    if (score >= 100) return "hm-goat";
    if (score >= 94) return "hm-4";
    if (score >= 88) return "hm-3";
    if (score >= 80) return "hm-2";
    return "hm-1";
  }
  function statsTilesHTML(history, today) {
    const dates = Object.keys(history).filter((d) => history[d] && typeof history[d].score === "number");
    const scores = dates.map((d) => history[d].score);
    const played = dates.length;
    const best = scores.length ? Math.max(...scores) : 0;
    const perfect = scores.filter((s) => s === 100).length;
    const elite = scores.filter((s) => s >= 97).length;
    const allAvg = scores.length ? Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 10) / 10 : 0;
    const cur = getDailyStreak(history, today);
    const long = computeLongestStreak(history);
    const avg = last30Avg(history, today);
    return `
      <div class="stat-tiles">
        <div class="stat-tile stat-tile-fire"><div class="stat-tile-num">${cur}</div><div class="stat-tile-label">Day Streak 🔥</div></div>
        <div class="stat-tile"><div class="stat-tile-num">${long}</div><div class="stat-tile-label">Longest Streak</div></div>
        <div class="stat-tile"><div class="stat-tile-num">${played}</div><div class="stat-tile-label">Dailies Played</div></div>
        <div class="stat-tile stat-tile-gold"><div class="stat-tile-num">${best}</div><div class="stat-tile-label">Best Score</div></div>
        <div class="stat-tile"><div class="stat-tile-num">${elite}</div><div class="stat-tile-label">Elite ≥97</div></div>
        <div class="stat-tile"><div class="stat-tile-num">${perfect}</div><div class="stat-tile-label">Perfect 100s</div></div>
        <div class="stat-tile"><div class="stat-tile-num">${avg || "—"}</div><div class="stat-tile-label">Avg · Last 30</div></div>
        <div class="stat-tile"><div class="stat-tile-num">${allAvg || "—"}</div><div class="stat-tile-label">Avg · All-Time</div></div>
      </div>`;
  }
  function heatmapHTML(history, today) {
    const end = new Date(today + "T12:00:00Z");
    let cells = "";
    for (let i = 118; i >= 0; i--) {
      const d = new Date(end); d.setUTCDate(d.getUTCDate() - i);
      const k = isoUTC(d);
      const e = history[k];
      const cls = e && typeof e.score === "number" ? heatTier(e.score) : "";
      const title = e && typeof e.score === "number" ? `${k}: ${e.score}` : `${k}: —`;
      cells += `<div class="hm-cell ${cls}" title="${title}"></div>`;
    }
    return `
      <div class="stats-panel-title">Play calendar · last 17 weeks</div>
      <div class="heatmap">${cells}</div>
      <div class="hm-legend">Less <span class="hm-cell"></span><span class="hm-cell hm-1"></span><span class="hm-cell hm-2"></span><span class="hm-cell hm-3"></span><span class="hm-cell hm-4"></span><span class="hm-cell hm-goat"></span> More</div>`;
  }
  function fmtHistDate(d) {
    try { return new Date(d + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }); }
    catch (e) { return d; }
  }
  function historyListHTML(history) {
    const dates = Object.keys(history).filter((d) => history[d] && typeof history[d].score === "number").sort().reverse();
    if (!dates.length) return `<div class="stats-panel-title">Your daily history</div><p class="lb-empty">No dailies played yet — play today's!</p>`;
    const rows = dates.map((d) => {
      const e = history[d];
      const picks = Array.isArray(e.picks) ? e.picks : [];
      const chips = picks.length
        ? picks.map((p) => `<div class="mini-chip"><span class="mc-stat">${esc(p.attrShort || p.attrLabel || "")}${p.score != null ? `<b class="mc-pscore">${esc(p.score)}</b>` : ""}</span><span class="mc-name">${esc(p.playerName || "—")}</span></div>`).join("")
        : `<p class="bd-empty">Build details weren't saved for this day.</p>`;
      const isGoat = e.score === 100;
      return `
        <div class="hist-row" data-hist>
          <span class="hist-caret" aria-hidden="true">▸</span>
          <span class="hist-tier">${esc(e.tier || getTier(e.score))}</span>
          <span class="hist-date">${esc(fmtHistDate(d))}</span>
          <span class="hist-score ${isGoat ? "is-goat" : ""}">${esc(e.score)}</span>
          <div class="hist-build">${chips}</div>
        </div>`;
    }).join("");
    return `<div class="stats-panel-title">Your daily history · tap to see the build</div><div class="hist-list">${rows}</div>`;
  }
  // --- Saved-build rows for Classic / Blind tabs -------------------------
  function shortForStat(p) {
    const a = attributes.find((x) => x.key === p.statKey);
    return (a && a.short) || p.stat || "";
  }
  function buildsListHTML(builds) {
    return `<div class="hist-list">` + builds.map((b) => {
      const picks = Array.isArray(b.picks) ? b.picks : [];
      const chips = picks.length
        ? picks.map((p) => `<div class="mini-chip"><span class="mc-stat">${esc(shortForStat(p))}${p.score != null ? `<b class="mc-pscore">${esc(p.score)}</b>` : ""}</span><span class="mc-name">${esc(p.player || "—")}</span></div>`).join("")
        : `<p class="bd-empty">No pick details saved for this build.</p>`;
      const isGoat = Number(b.score) === 100;
      return `
        <div class="hist-row" data-hist>
          <span class="hist-caret" aria-hidden="true">▸</span>
          <span class="hist-tier">${esc(b.name || getTier(Number(b.score) || 0))}</span>
          <span class="hist-date">${esc(fmtDate(b.createdAt))}</span>
          <span class="hist-score ${isGoat ? "is-goat" : ""}">${esc(b.score)}</span>
          <div class="hist-build">${chips}</div>
        </div>`;
    }).join("") + `</div>`;
  }
  function renderModeStatsHTML(mode) {
    const label = mode === "classic" ? "Classic" : "Blind";
    const builds = (_statsBuilds || []).filter((b) => String(b.mode || "").toLowerCase() === mode);
    const scores = builds.map((b) => Number(b.score) || 0).filter((s) => s > 0);
    const pb = (getPB() || {})[mode] || 0;
    const best = Math.max(pb, scores.length ? Math.max(...scores) : 0);
    const avg = scores.length ? Math.round((scores.reduce((a, c) => a + c, 0) / scores.length) * 10) / 10 : 0;
    const tiles = `
      <div class="stat-tiles">
        <div class="stat-tile stat-tile-gold"><div class="stat-tile-num">${best || "—"}</div><div class="stat-tile-label">Best Score</div></div>
        <div class="stat-tile"><div class="stat-tile-num">${builds.length}</div><div class="stat-tile-label">Saved Builds</div></div>
        <div class="stat-tile"><div class="stat-tile-num">${avg || "—"}</div><div class="stat-tile-label">Avg Saved</div></div>
      </div>`;
    const body = builds.length
      ? `<div class="stats-panel-title">Saved ${label} builds · tap to see the picks</div>` + buildsListHTML(builds)
      : `<p class="lb-empty" style="max-width:620px;margin:18px auto 0;text-align:center">No saved ${label} builds yet. Finish a ${label} run and hit “Save Build.”</p>`;
    return tiles + body;
  }
  function wireStatsToggles() {
    statsBody.querySelectorAll("[data-hist]").forEach((row) => {
      row.addEventListener("click", () => row.classList.toggle("open"));
    });
  }
  function updateStatsTabUI() {
    [[statsTabDaily, "daily"], [statsTabClassic, "classic"], [statsTabBlind, "blind"]].forEach(([btn, t]) => {
      if (btn) { btn.classList.toggle("lb-tab-active", statsTab === t); btn.setAttribute("aria-selected", String(statsTab === t)); }
    });
  }
  async function renderStats() {
    if (!statsBody) return;
    if (statsPassPill) statsPassPill.hidden = !hasPass;
    if (!hasPass) {
      if (statsTabsBar) statsTabsBar.hidden = true;
      const tiles = statsTilesHTML(getDailyHistory(), getTodayStr());
      statsBody.innerHTML = `
        <div class="locked-wrap">
          <div class="locked-blur">${tiles}</div>
          <div class="locked-gate">
            <div class="lock-ico" aria-hidden="true">🔒</div>
            <div class="lock-txt">Your full career stats — history, streaks, builds, and calendar — are part of the GOAT Pass.</div>
            <button class="gp-pill gp-pill-btn" type="button" id="statsUnlockBtn">🐐 Unlock · $2.99</button>
          </div>
        </div>`;
      const b = document.querySelector("#statsUnlockBtn");
      if (b) b.addEventListener("click", openPassModal);
      return;
    }
    if (statsTabsBar) statsTabsBar.hidden = false;
    updateStatsTabUI();
    if (statsTab === "daily") {
      const history = getDailyHistory();
      const today = getTodayStr();
      statsBody.innerHTML = statsTilesHTML(history, today) + heatmapHTML(history, today) + historyListHTML(history);
      wireStatsToggles();
      return;
    }
    // Classic / Blind — pull the saved builds (once per stats-page open).
    if (_statsBuilds === null) {
      statsBody.innerHTML = `<p class="lb-empty" style="text-align:center;margin-top:18px">Loading…</p>`;
      try { _statsBuilds = await Auth.listBuilds(); } catch (e) { _statsBuilds = []; }
      if (statsTab === "daily" || (statsPage && statsPage.hidden)) return; // user moved on
    }
    statsBody.innerHTML = renderModeStatsHTML(statsTab);
    wireStatsToggles();
  }
  function setStatsTab(tab) { statsTab = tab; renderStats(); }
  function openStats() {
    statsReturnScreen = (lbPage && !lbPage.hidden)
      ? lbPage
      : (mainScreens().find((s) => s && !s.hidden) || document.querySelector("#modeScreen"));
    mainScreens().forEach((s) => { if (s) s.hidden = true; });
    if (lbPage) lbPage.hidden = true;
    if (statsPage) statsPage.hidden = false;
    statsTab = "daily";
    _statsBuilds = null; // refetch so newly saved builds show
    window.scrollTo(0, 0);
    renderStats();
  }
  function closeStats() {
    if (statsPage) statsPage.hidden = true;
    (statsReturnScreen || document.querySelector("#modeScreen")).hidden = false;
    window.scrollTo(0, 0);
  }
  if (myStatsBtn) myStatsBtn.addEventListener("click", openStats);
  if (statsBackBtn) statsBackBtn.addEventListener("click", closeStats);
  if (statsTabDaily) statsTabDaily.addEventListener("click", () => setStatsTab("daily"));
  if (statsTabClassic) statsTabClassic.addEventListener("click", () => setStatsTab("classic"));
  if (statsTabBlind) statsTabBlind.addEventListener("click", () => setStatsTab("blind"));

  // Top-of-page GOAT Pass button: holders jump to their stats, others see the unlock.
  const goatPassTopBtn = document.querySelector("#goatPassTop");
  if (goatPassTopBtn) goatPassTopBtn.addEventListener("click", () => { if (hasPass) openStats(); else openPassModal(); });

  // Reflect pass state across the UI (called on sign-in and after a refresh).
  function updatePassUI() {
    window.GoatPassActive = hasPass; // read by the share-image renderer (global scope)
    const pill = document.querySelector("#goatPassPill");
    if (pill) pill.hidden = !hasPass;
    if (statsPage && !statsPage.hidden) renderStats();
    const box = document.querySelector("#goatPassResult");
    if (box && !box.hidden) { try { renderDailyExtras(getTodayStr()); } catch (e) {} }
  }

  // Auth state drives the UI. Load handle, then back-fill today's score.
  Auth.onChange(async (user) => {
    if (user) {
      signedOut.hidden = true;
      signedIn.hidden = false;
      const acctItems = document.querySelector("#settingsAccountItems");
      if (acctItems) acctItems.hidden = false;
      const acctActions = document.querySelector("#accountSignedInActions");
      if (acctActions) acctActions.hidden = false;
      accountName.textContent = user.displayName || user.email || "you";
      try {
        currentHandle = await Auth.getHandle();
        accountName.textContent = currentHandle;
      } catch (e) { console.error(e); }
      try {
        hasPass = await Auth.hasGoatPass();
      } catch (e) { hasPass = false; }
      updatePassUI();
      try {
        const todayStr = getTodayStr();
        const entry = getDailyHistory()[todayStr];
        if (entry) Auth.submitDailyScore(todayStr, {
          name: currentHandle, score: entry.score, tier: entry.tier || getTier(entry.score),
          franchise: entry.franchise || false, franchiseTeam: entry.franchiseTeam || null, picks: entry.picks || null,
        }).catch(console.error);
      } catch (e) { console.error(e); }
      syncDailyHistory(); // merge cloud <-> local daily history + streak
      refreshSaveBtn();
    } else {
      signedOut.hidden = false;
      signedIn.hidden = true;
      const acctItems = document.querySelector("#settingsAccountItems");
      if (acctItems) acctItems.hidden = true;
      const acctActions = document.querySelector("#accountSignedInActions");
      if (acctActions) acctActions.hidden = true;
      currentHandle = null;
      hasPass = false;
      updatePassUI();
      saveBuildButton.hidden = true;
    }
  });
})();

// ===== Theme toggle (light default, saved per device) =====
(function initTheme() {
  const THEME_KEY = "goatlab_theme";
  const lightBtn = document.querySelector("#themeLightBtn");
  const darkBtn = document.querySelector("#themeDarkBtn");
  const getTheme = () => {
    try { return localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light"; } catch (e) { return "light"; }
  };
  function apply(theme) {
    if (theme === "dark") document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.removeAttribute("data-theme");
    if (lightBtn) lightBtn.setAttribute("aria-pressed", String(theme === "light"));
    if (darkBtn) darkBtn.setAttribute("aria-pressed", String(theme === "dark"));
  }
  function set(theme) {
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
    apply(theme);
  }
  apply(getTheme());
  if (lightBtn) lightBtn.addEventListener("click", () => set("light"));
  if (darkBtn) darkBtn.addEventListener("click", () => set("dark"));
})();

// ===== Add to Home Screen prompt (gentle mobile capture) =====
// Shows once per visit, mobile only, AFTER a finished game (never on arrival).
// If dismissed/ignored it snoozes 7 days; gives up after 3 shows; never shows
// once installed. Android gets the real one-tap prompt; iOS Safari gets steps.
(function initA2HS() {
  const SNOOZE_DAYS = 7;
  const MAX_SHOWS = 3;
  const K_INSTALLED = "goatlab_pwa_installed";
  const K_LAST = "goatlab_pwa_last_shown";
  const K_COUNT = "goatlab_pwa_show_count";

  const el = document.getElementById("a2hs");
  const scrim = document.getElementById("a2hsScrim");
  if (!el || !scrim) return;

  const ls = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  };

  let deferredPrompt = null;
  let shownThisSession = false;

  const isStandalone = () =>
    (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) ||
    window.navigator.standalone === true;
  const isiOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;
  const isiOSSafari = () =>
    isiOS() && /safari/i.test(navigator.userAgent) && !/crios|fxios|edgios/i.test(navigator.userAgent);
  const isMobile = () => window.matchMedia && window.matchMedia("(max-width: 760px)").matches;

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
  });
  window.addEventListener("appinstalled", () => {
    ls.set(K_INSTALLED, "1");
    hide();
  });

  function eligible() {
    if (ls.get(K_INSTALLED) === "1") return false;
    if (isStandalone()) { ls.set(K_INSTALLED, "1"); return false; }
    if (!isMobile()) return false;
    if (shownThisSession) return false;
    if (parseInt(ls.get(K_COUNT) || "0", 10) >= MAX_SHOWS) return false;
    const last = parseInt(ls.get(K_LAST) || "0", 10);
    if (last && Date.now() - last < SNOOZE_DAYS * 86400000) return false;
    return Boolean(deferredPrompt) || isiOSSafari(); // need a usable path
  }

  function show() {
    const iosMode = !deferredPrompt && isiOSSafari();
    document.getElementById("a2hsActions").hidden = iosMode;
    document.getElementById("a2hsSteps").hidden = !iosMode;
    document.getElementById("a2hsActionsIos").hidden = !iosMode;
    if (iosMode) {
      document.getElementById("a2hsTitle").textContent = "Keep GOAT Lab one tap away";
      document.getElementById("a2hsSub").textContent =
        "Add it to your home screen so tomorrow's Daily is always ready.";
    }
    scrim.hidden = false;
    el.hidden = false;
    requestAnimationFrame(() => { el.classList.add("show"); scrim.classList.add("show"); });
    ls.set(K_LAST, String(Date.now()));
    ls.set(K_COUNT, String(parseInt(ls.get(K_COUNT) || "0", 10) + 1));
  }

  function hide() {
    el.classList.remove("show");
    scrim.classList.remove("show");
    setTimeout(() => { el.hidden = true; scrim.hidden = true; }, 340);
  }

  async function doAdd() {
    if (!deferredPrompt) { hide(); return; }
    hide();
    deferredPrompt.prompt();
    try {
      const choice = await deferredPrompt.userChoice;
      if (choice && choice.outcome === "accepted") ls.set(K_INSTALLED, "1");
    } catch (e) {}
    deferredPrompt = null;
  }

  document.getElementById("a2hsAdd").addEventListener("click", doAdd);
  document.getElementById("a2hsNot").addEventListener("click", hide);
  document.getElementById("a2hsClose").addEventListener("click", hide);
  document.getElementById("a2hsGotIt").addEventListener("click", hide);
  scrim.addEventListener("click", hide);

  window.GoatA2HS = {
    maybe() {
      if (!eligible()) return;
      shownThisSession = true; // claim now so a repeat call can't double-schedule
      setTimeout(show, 1200);  // let the result screen settle first
    },
  };
})();

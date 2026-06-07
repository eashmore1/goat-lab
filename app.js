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
      player("Bob Cousy", 6, 1, 14, { height: 68, shooting: 78, finishing: 82, handles: 96, passing: 99, defense: 78, rebounding: 64, athleticism: 86, clutch: 92 }),
      player("Bill Sharman", 6, 1, 21, { height: 68, shooting: 92, finishing: 80, handles: 80, passing: 78, defense: 78, rebounding: 58, athleticism: 78, clutch: 90 }),
      player("Frank Ramsey", 6, 3, 23, { height: 74, shooting: 82, finishing: 84, handles: 80, passing: 76, defense: 80, rebounding: 66, athleticism: 80, clutch: 90 }),
      player("Larry Siegfried", 6, 3, 20, { height: 74, shooting: 84, finishing: 78, handles: 82, passing: 80, defense: 82, rebounding: 60, athleticism: 78, clutch: 84 }),
      player("Willie Naulls", 6, 6, 12, { height: 82, shooting: 84, finishing: 82, handles: 70, passing: 72, defense: 76, rebounding: 82, athleticism: 78, clutch: 80 }),
      player("Wayne Embry", 6, 8, 28, { height: 86, shooting: 64, finishing: 80, handles: 58, passing: 72, defense: 84, rebounding: 86, athleticism: 76, clutch: 76 }),
      player("Mel Counts", 7, 0, 44, { height: 98, shooting: 70, finishing: 78, handles: 60, passing: 70, defense: 80, rebounding: 82, athleticism: 70, clutch: 74 }),
    ],
  },
  {
    era: "1960s",
    team: "Lakers",
    note: "Baylor and West dragged L.A. to the Finals again and again. Elite scoring, clutch, and athleticism.",
    players: [
      player("Elgin Baylor", 6, 5, 22, { height: 80, shooting: 84, finishing: 94, handles: 86, passing: 84, defense: 80, rebounding: 88, athleticism: 94, clutch: 92 }),
      player("Jerry West", 6, 2, 44, { height: 71, shooting: 92, finishing: 92, handles: 90, passing: 88, defense: 90, rebounding: 70, athleticism: 90, clutch: 98 }),
      player("Gail Goodrich", 6, 1, 25, { height: 68, shooting: 86, finishing: 84, handles: 88, passing: 82, defense: 72, rebounding: 56, athleticism: 84, clutch: 86 }),
      player("Rudy LaRusso", 6, 7, 35, { height: 84, shooting: 76, finishing: 82, handles: 68, passing: 72, defense: 84, rebounding: 82, athleticism: 80, clutch: 80 }),
      player("Dick Barnett", 6, 4, 12, { height: 77, shooting: 84, finishing: 82, handles: 82, passing: 76, defense: 80, rebounding: 62, athleticism: 82, clutch: 84 }),
      player("Frank Selvy", 6, 2, 14, { height: 71, shooting: 82, finishing: 78, handles: 80, passing: 78, defense: 72, rebounding: 60, athleticism: 78, clutch: 82 }),
      player("LeRoy Ellis", 6, 10, 20, { height: 94, shooting: 70, finishing: 78, handles: 60, passing: 66, defense: 82, rebounding: 84, athleticism: 80, clutch: 74 }),
      player("Darrall Imhoff", 6, 10, 18, { height: 94, shooting: 64, finishing: 74, handles: 58, passing: 66, defense: 82, rebounding: 82, athleticism: 72, clutch: 70 }),
      player("Tommy Hawkins", 6, 5, 16, { height: 80, shooting: 70, finishing: 78, handles: 70, passing: 70, defense: 80, rebounding: 78, athleticism: 84, clutch: 74 }),
      player("Walt Hazzard", 6, 2, 42, { height: 71, shooting: 74, finishing: 78, handles: 88, passing: 86, defense: 76, rebounding: 58, athleticism: 82, clutch: 78 }),
      player("Archie Clark", 6, 2, 21, { height: 71, shooting: 82, finishing: 82, handles: 86, passing: 82, defense: 80, rebounding: 60, athleticism: 86, clutch: 82 }),
      player("John Egan", 6, 0, 15, { height: 66, shooting: 76, finishing: 74, handles: 82, passing: 82, defense: 72, rebounding: 52, athleticism: 76, clutch: 76 }),
      player("Jim Krebs", 6, 8, 25, { height: 86, shooting: 74, finishing: 76, handles: 60, passing: 66, defense: 74, rebounding: 78, athleticism: 70, clutch: 72 }),
      player("Rod Hundley", 6, 4, 33, { height: 77, shooting: 76, finishing: 76, handles: 84, passing: 82, defense: 70, rebounding: 58, athleticism: 80, clutch: 76 }),
      player("Gene Wiley", 6, 10, 44, { height: 94, shooting: 58, finishing: 72, handles: 56, passing: 64, defense: 84, rebounding: 84, athleticism: 80, clutch: 70 }),
    ],
  },
  {
    era: "1960s",
    team: "Royals",
    note: "Cincinnati ran through Oscar Robertson — the original triple-double machine — and Jerry Lucas on the glass.",
    players: [
      player("Oscar Robertson", 6, 5, 14, { height: 80, shooting: 86, finishing: 90, handles: 94, passing: 98, defense: 84, rebounding: 86, athleticism: 88, clutch: 95 }),
      player("Jerry Lucas", 6, 8, 16, { height: 86, shooting: 82, finishing: 84, handles: 66, passing: 80, defense: 80, rebounding: 94, athleticism: 78, clutch: 84 }),
      player("Jack Twyman", 6, 6, 27, { height: 82, shooting: 86, finishing: 86, handles: 72, passing: 74, defense: 74, rebounding: 76, athleticism: 80, clutch: 86 }),
      player("Wayne Embry", 6, 8, 15, { height: 86, shooting: 66, finishing: 82, handles: 60, passing: 74, defense: 84, rebounding: 88, athleticism: 78, clutch: 78 }),
      player("Adrian Smith", 6, 1, 12, { height: 68, shooting: 82, finishing: 78, handles: 82, passing: 78, defense: 76, rebounding: 56, athleticism: 80, clutch: 82 }),
      player("Arlen Bockhorn", 6, 3, 10, { height: 74, shooting: 78, finishing: 78, handles: 82, passing: 80, defense: 78, rebounding: 60, athleticism: 80, clutch: 78 }),
      player("Bob Boozer", 6, 8, 25, { height: 86, shooting: 78, finishing: 84, handles: 66, passing: 72, defense: 78, rebounding: 84, athleticism: 80, clutch: 80 }),
      player("Happy Hairston", 6, 7, 52, { height: 84, shooting: 74, finishing: 82, handles: 66, passing: 70, defense: 80, rebounding: 84, athleticism: 82, clutch: 78 }),
      player("Connie Dierking", 6, 9, 34, { height: 90, shooting: 74, finishing: 80, handles: 60, passing: 66, defense: 78, rebounding: 80, athleticism: 72, clutch: 74 }),
      player("Tom Van Arsdale", 6, 5, 5, { height: 80, shooting: 80, finishing: 82, handles: 78, passing: 74, defense: 80, rebounding: 70, athleticism: 84, clutch: 80 }),
      player("Dick Van Arsdale", 6, 5, 4, { height: 80, shooting: 80, finishing: 82, handles: 80, passing: 76, defense: 82, rebounding: 68, athleticism: 84, clutch: 80 }),
      player("Jay Arnette", 6, 2, 11, { height: 71, shooting: 76, finishing: 74, handles: 80, passing: 76, defense: 74, rebounding: 56, athleticism: 78, clutch: 72 }),
      player("Bud Olsen", 6, 8, 16, { height: 86, shooting: 68, finishing: 76, handles: 58, passing: 66, defense: 76, rebounding: 78, athleticism: 72, clutch: 70 }),
      player("Larry Staverman", 6, 7, 20, { height: 84, shooting: 70, finishing: 76, handles: 60, passing: 66, defense: 74, rebounding: 76, athleticism: 70, clutch: 70 }),
      player("Walt Wesley", 6, 11, 11, { height: 96, shooting: 66, finishing: 76, handles: 56, passing: 62, defense: 78, rebounding: 80, athleticism: 74, clutch: 70 }),
    ],
  },
  {
    era: "1960s",
    team: "Hawks",
    note: "St. Louis was a perennial contender — Pettit's scoring and boards, Wilkens running the show, Hudson and Caldwell on the wings.",
    players: [
      player("Bob Pettit", 6, 9, 9, { height: 90, shooting: 84, finishing: 90, handles: 70, passing: 74, defense: 82, rebounding: 94, athleticism: 84, clutch: 92 }),
      player("Lenny Wilkens", 6, 1, 22, { height: 68, shooting: 78, finishing: 82, handles: 90, passing: 92, defense: 86, rebounding: 62, athleticism: 84, clutch: 88 }),
      player("Cliff Hagan", 6, 4, 16, { height: 77, shooting: 84, finishing: 86, handles: 78, passing: 76, defense: 76, rebounding: 74, athleticism: 82, clutch: 86 }),
      player("Zelmo Beaty", 6, 9, 31, { height: 90, shooting: 74, finishing: 84, handles: 62, passing: 68, defense: 84, rebounding: 88, athleticism: 80, clutch: 82 }),
      player("Bill Bridges", 6, 6, 32, { height: 82, shooting: 70, finishing: 80, handles: 64, passing: 72, defense: 86, rebounding: 90, athleticism: 82, clutch: 80 }),
      player("Lou Hudson", 6, 5, 23, { height: 80, shooting: 88, finishing: 86, handles: 80, passing: 76, defense: 76, rebounding: 68, athleticism: 86, clutch: 84 }),
      player("Joe Caldwell", 6, 5, 15, { height: 80, shooting: 78, finishing: 84, handles: 78, passing: 74, defense: 86, rebounding: 70, athleticism: 92, clutch: 80 }),
      player("Richie Guerin", 6, 4, 9, { height: 77, shooting: 80, finishing: 82, handles: 84, passing: 84, defense: 80, rebounding: 64, athleticism: 80, clutch: 84 }),
      player("Paul Silas", 6, 7, 35, { height: 84, shooting: 62, finishing: 76, handles: 60, passing: 70, defense: 86, rebounding: 90, athleticism: 82, clutch: 80 }),
      player("Clyde Lovellette", 6, 9, 34, { height: 90, shooting: 82, finishing: 84, handles: 64, passing: 66, defense: 72, rebounding: 82, athleticism: 70, clutch: 80 }),
      player("John Barnhill", 6, 1, 7, { height: 68, shooting: 76, finishing: 76, handles: 82, passing: 80, defense: 82, rebounding: 58, athleticism: 80, clutch: 76 }),
      player("Gene Tormohlen", 6, 9, 11, { height: 90, shooting: 64, finishing: 74, handles: 58, passing: 66, defense: 78, rebounding: 80, athleticism: 72, clutch: 70 }),
      player("Jim Davis", 6, 9, 24, { height: 90, shooting: 68, finishing: 78, handles: 60, passing: 66, defense: 80, rebounding: 82, athleticism: 76, clutch: 72 }),
      player("Don Ohl", 6, 3, 12, { height: 74, shooting: 84, finishing: 80, handles: 82, passing: 78, defense: 76, rebounding: 58, athleticism: 82, clutch: 82 }),
      player("Chico Vaughn", 6, 2, 20, { height: 71, shooting: 78, finishing: 78, handles: 82, passing: 78, defense: 76, rebounding: 58, athleticism: 82, clutch: 76 }),
    ],
  },
  {
    era: "1960s",
    team: "76ers",
    note: "The 1967 champs may be the best team of the decade — Wilt as a passing hub, Greer, Cunningham, Walker, and a deep, switchable roster.",
    players: [
      player("Wilt Chamberlain", 7, 1, 13, { height: 100, shooting: 70, finishing: 98, handles: 70, passing: 90, defense: 95, rebounding: 100, athleticism: 96, clutch: 88 }),
      player("Hal Greer", 6, 2, 15, { height: 71, shooting: 88, finishing: 84, handles: 84, passing: 82, defense: 84, rebounding: 64, athleticism: 86, clutch: 88 }),
      player("Billy Cunningham", 6, 6, 32, { height: 82, shooting: 80, finishing: 88, handles: 82, passing: 80, defense: 80, rebounding: 84, athleticism: 90, clutch: 86 }),
      player("Chet Walker", 6, 6, 25, { height: 82, shooting: 84, finishing: 86, handles: 80, passing: 76, defense: 78, rebounding: 76, athleticism: 82, clutch: 86 }),
      player("Luke Jackson", 6, 9, 54, { height: 90, shooting: 70, finishing: 82, handles: 62, passing: 72, defense: 84, rebounding: 88, athleticism: 80, clutch: 80 }),
      player("Wali Jones", 6, 2, 24, { height: 71, shooting: 80, finishing: 80, handles: 84, passing: 80, defense: 82, rebounding: 58, athleticism: 84, clutch: 82 }),
      player("Larry Costello", 6, 1, 21, { height: 68, shooting: 82, finishing: 80, handles: 84, passing: 82, defense: 82, rebounding: 58, athleticism: 78, clutch: 84 }),
      player("Dolph Schayes", 6, 8, 4, { height: 86, shooting: 84, finishing: 84, handles: 70, passing: 78, defense: 80, rebounding: 88, athleticism: 76, clutch: 90 }),
      player("Dave Gambee", 6, 7, 20, { height: 84, shooting: 80, finishing: 80, handles: 66, passing: 68, defense: 74, rebounding: 78, athleticism: 74, clutch: 78 }),
      player("Johnny Kerr", 6, 9, 10, { height: 90, shooting: 76, finishing: 82, handles: 66, passing: 80, defense: 78, rebounding: 84, athleticism: 72, clutch: 80 }),
      player("Lee Shaffer", 6, 7, 32, { height: 84, shooting: 80, finishing: 80, handles: 70, passing: 70, defense: 74, rebounding: 76, athleticism: 78, clutch: 78 }),
      player("Matt Guokas", 6, 5, 12, { height: 80, shooting: 76, finishing: 78, handles: 82, passing: 82, defense: 80, rebounding: 62, athleticism: 80, clutch: 78 }),
      player("Bill Melchionni", 6, 1, 25, { height: 68, shooting: 78, finishing: 76, handles: 82, passing: 80, defense: 76, rebounding: 54, athleticism: 80, clutch: 76 }),
      player("Al Bianchi", 6, 3, 12, { height: 74, shooting: 78, finishing: 78, handles: 82, passing: 80, defense: 80, rebounding: 58, athleticism: 78, clutch: 76 }),
      player("Bob Weiss", 6, 2, 20, { height: 71, shooting: 78, finishing: 78, handles: 84, passing: 82, defense: 82, rebounding: 56, athleticism: 80, clutch: 78 }),
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
      player("Greg Smith", 6, 5, 4, { height: 80, shooting: 66, finishing: 78, handles: 66, passing: 72, defense: 82, rebounding: 80, athleticism: 82, clutch: 74 }),
      player("Dick Cunningham", 6, 10, 34, { height: 94, shooting: 60, finishing: 74, handles: 54, passing: 64, defense: 80, rebounding: 84, athleticism: 70, clutch: 70 }),
      player("Terry Driscoll", 6, 8, 25, { height: 86, shooting: 68, finishing: 76, handles: 60, passing: 66, defense: 78, rebounding: 80, athleticism: 74, clutch: 72 }),
      player("Mickey Davis", 6, 7, 21, { height: 84, shooting: 82, finishing: 80, handles: 72, passing: 74, defense: 72, rebounding: 70, athleticism: 76, clutch: 78 }),
      player("Gary Brokaw", 6, 3, 25, { height: 74, shooting: 78, finishing: 78, handles: 82, passing: 80, defense: 76, rebounding: 56, athleticism: 80, clutch: 76 }),
      player("Kevin Restani", 6, 9, 42, { height: 90, shooting: 74, finishing: 78, handles: 62, passing: 68, defense: 76, rebounding: 78, athleticism: 74, clutch: 74 }),
      player("Jim Price", 6, 2, 18, { height: 71, shooting: 80, finishing: 80, handles: 84, passing: 82, defense: 82, rebounding: 58, athleticism: 82, clutch: 80 }),
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
      player("Jamaal Wilkes", 6, 6, 52, { height: 82, shooting: 84, finishing: 86, handles: 80, passing: 76, defense: 78, rebounding: 68, athleticism: 84, clutch: 84 }),
      player("Bob McAdoo", 6, 9, 11, { height: 90, shooting: 84, finishing: 86, handles: 72, passing: 72, defense: 76, rebounding: 80, athleticism: 82, clutch: 84 }),
      player("Kurt Rambis", 6, 8, 31, { height: 86, shooting: 60, finishing: 76, handles: 60, passing: 68, defense: 82, rebounding: 82, athleticism: 78, clutch: 74 }),
      player("Mike McGee", 6, 5, 40, { height: 80, shooting: 82, finishing: 80, handles: 74, passing: 68, defense: 70, rebounding: 60, athleticism: 84, clutch: 76 }),
      player("Wes Matthews", 6, 1, 25, { height: 68, shooting: 78, finishing: 78, handles: 84, passing: 80, defense: 74, rebounding: 54, athleticism: 82, clutch: 78 }),
      player("Billy Thompson", 6, 7, 55, { height: 84, shooting: 70, finishing: 80, handles: 68, passing: 70, defense: 80, rebounding: 74, athleticism: 88, clutch: 74 }),
      player("Mike Smrek", 7, 0, 34, { height: 98, shooting: 58, finishing: 74, handles: 50, passing: 58, defense: 80, rebounding: 74, athleticism: 68, clutch: 66 }),
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
      player("Nate Archibald", 6, 1, 7, { height: 68, shooting: 82, finishing: 82, handles: 92, passing: 90, defense: 72, rebounding: 54, athleticism: 82, clutch: 84 }),
      player("Gerald Henderson", 6, 2, 43, { height: 71, shooting: 78, finishing: 80, handles: 84, passing: 80, defense: 82, rebounding: 56, athleticism: 84, clutch: 82 }),
      player("M.L. Carr", 6, 6, 30, { height: 82, shooting: 76, finishing: 78, handles: 74, passing: 72, defense: 82, rebounding: 66, athleticism: 82, clutch: 80 }),
      player("Rick Robey", 6, 11, 53, { height: 96, shooting: 68, finishing: 80, handles: 60, passing: 68, defense: 76, rebounding: 80, athleticism: 74, clutch: 74 }),
      player("Jerry Sichting", 6, 1, 12, { height: 68, shooting: 84, finishing: 76, handles: 80, passing: 78, defense: 74, rebounding: 52, athleticism: 72, clutch: 80 }),
      player("Reggie Lewis", 6, 7, 35, { height: 84, shooting: 82, finishing: 84, handles: 82, passing: 74, defense: 82, rebounding: 68, athleticism: 88, clutch: 82 }),
      player("Greg Kite", 6, 11, 50, { height: 96, shooting: 54, finishing: 72, handles: 50, passing: 58, defense: 78, rebounding: 76, athleticism: 70, clutch: 66 }),
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
      player("B.J. Armstrong", 6, 2, 10, { height: 71, shooting: 84, finishing: 78, handles: 84, passing: 80, defense: 74, rebounding: 52, athleticism: 78, clutch: 82 }),
      player("John Paxson", 6, 2, 5, { height: 71, shooting: 88, finishing: 74, handles: 78, passing: 80, defense: 72, rebounding: 50, athleticism: 70, clutch: 88 }),
      player("Bill Cartwright", 7, 1, 24, { height: 100, shooting: 66, finishing: 80, handles: 58, passing: 68, defense: 82, rebounding: 80, athleticism: 66, clutch: 78 }),
      player("Will Perdue", 7, 0, 32, { height: 98, shooting: 60, finishing: 76, handles: 52, passing: 62, defense: 78, rebounding: 80, athleticism: 68, clutch: 68 }),
      player("Scott Williams", 6, 10, 42, { height: 94, shooting: 66, finishing: 78, handles: 58, passing: 64, defense: 80, rebounding: 80, athleticism: 80, clutch: 70 }),
      player("Stacey King", 6, 11, 21, { height: 96, shooting: 68, finishing: 78, handles: 60, passing: 64, defense: 74, rebounding: 74, athleticism: 76, clutch: 70 }),
      player("Bill Wennington", 7, 0, 34, { height: 98, shooting: 74, finishing: 76, handles: 58, passing: 64, defense: 76, rebounding: 74, athleticism: 64, clutch: 72 }),
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
      player("Charles Barkley", 6, 6, 4, { height: 82, shooting: 78, finishing: 88, handles: 80, passing: 80, defense: 76, rebounding: 90, athleticism: 84, clutch: 84 }),
      player("Scottie Pippen", 6, 8, 33, { height: 86, shooting: 80, finishing: 86, handles: 86, passing: 88, defense: 94, rebounding: 82, athleticism: 90, clutch: 86 }),
      player("Eddie Johnson", 6, 7, 8, { height: 84, shooting: 86, finishing: 84, handles: 78, passing: 72, defense: 70, rebounding: 64, athleticism: 78, clutch: 86 }),
      player("Matt Maloney", 6, 3, 4, { height: 74, shooting: 84, finishing: 74, handles: 80, passing: 80, defense: 74, rebounding: 52, athleticism: 72, clutch: 80 }),
      player("Carl Herrera", 6, 9, 31, { height: 90, shooting: 70, finishing: 80, handles: 66, passing: 68, defense: 80, rebounding: 76, athleticism: 84, clutch: 72 }),
      player("Chucky Brown", 6, 8, 52, { height: 86, shooting: 72, finishing: 80, handles: 66, passing: 66, defense: 78, rebounding: 74, athleticism: 80, clutch: 72 }),
      player("Brent Price", 6, 1, 2, { height: 68, shooting: 80, finishing: 78, handles: 84, passing: 82, defense: 74, rebounding: 54, athleticism: 78, clutch: 78 }),
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
      player("Cazzie Russell", 6, 5, 33, { height: 80, shooting: 86, finishing: 84, handles: 80, passing: 76, defense: 72, rebounding: 68, athleticism: 82, clutch: 84 }),
      player("Dave Stallworth", 6, 7, 9, { height: 84, shooting: 76, finishing: 80, handles: 72, passing: 72, defense: 80, rebounding: 78, athleticism: 84, clutch: 78 }),
      player("Spencer Haywood", 6, 8, 24, { height: 86, shooting: 80, finishing: 86, handles: 72, passing: 72, defense: 80, rebounding: 86, athleticism: 86, clutch: 80 }),
      player("Henry Bibby", 6, 1, 20, { height: 68, shooting: 80, finishing: 76, handles: 84, passing: 82, defense: 78, rebounding: 56, athleticism: 80, clutch: 78 }),
      player("Dean Meminger", 6, 0, 7, { height: 66, shooting: 72, finishing: 76, handles: 84, passing: 80, defense: 86, rebounding: 56, athleticism: 84, clutch: 76 }),
      player("John Gianelli", 6, 10, 40, { height: 94, shooting: 68, finishing: 76, handles: 58, passing: 68, defense: 80, rebounding: 80, athleticism: 74, clutch: 72 }),
      player("Mel Davis", 6, 7, 34, { height: 84, shooting: 72, finishing: 80, handles: 66, passing: 68, defense: 78, rebounding: 82, athleticism: 82, clutch: 74 }),
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
      player("Charles Barkley", 6, 6, 34, { height: 82, shooting: 78, finishing: 90, handles: 82, passing: 80, defense: 80, rebounding: 92, athleticism: 92, clutch: 86 }),
      player("Darryl Dawkins", 6, 11, 53, { height: 96, shooting: 70, finishing: 88, handles: 62, passing: 66, defense: 80, rebounding: 84, athleticism: 90, clutch: 78 }),
      player("Caldwell Jones", 6, 11, 11, { height: 96, shooting: 64, finishing: 78, handles: 58, passing: 66, defense: 90, rebounding: 86, athleticism: 82, clutch: 76 }),
      player("Steve Mix", 6, 7, 30, { height: 84, shooting: 80, finishing: 82, handles: 70, passing: 72, defense: 80, rebounding: 76, athleticism: 78, clutch: 80 }),
      player("Clemon Johnson", 6, 10, 34, { height: 94, shooting: 66, finishing: 78, handles: 58, passing: 66, defense: 82, rebounding: 80, athleticism: 78, clutch: 72 }),
      player("Sedale Threatt", 6, 2, 3, { height: 71, shooting: 82, finishing: 80, handles: 84, passing: 80, defense: 82, rebounding: 54, athleticism: 84, clutch: 78 }),
      player("Mike Gminski", 6, 11, 43, { height: 96, shooting: 78, finishing: 80, handles: 60, passing: 66, defense: 78, rebounding: 82, athleticism: 70, clutch: 76 }),
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
      player("Adrian Dantley", 6, 5, 45, { height: 80, shooting: 84, finishing: 90, handles: 80, passing: 74, defense: 72, rebounding: 70, athleticism: 82, clutch: 86 }),
      player("John Salley", 6, 11, 22, { height: 96, shooting: 66, finishing: 80, handles: 62, passing: 68, defense: 88, rebounding: 80, athleticism: 88, clutch: 76 }),
      player("Kelly Tripucka", 6, 6, 7, { height: 82, shooting: 84, finishing: 84, handles: 78, passing: 74, defense: 70, rebounding: 66, athleticism: 80, clutch: 82 }),
      player("John Long", 6, 5, 25, { height: 80, shooting: 84, finishing: 82, handles: 78, passing: 72, defense: 76, rebounding: 62, athleticism: 82, clutch: 80 }),
      player("Kent Benson", 6, 10, 54, { height: 94, shooting: 72, finishing: 80, handles: 60, passing: 68, defense: 78, rebounding: 82, athleticism: 74, clutch: 72 }),
      player("Terry Tyler", 6, 7, 43, { height: 84, shooting: 74, finishing: 80, handles: 66, passing: 68, defense: 80, rebounding: 76, athleticism: 88, clutch: 74 }),
      player("Earl Cureton", 6, 9, 35, { height: 90, shooting: 66, finishing: 78, handles: 62, passing: 66, defense: 80, rebounding: 80, athleticism: 82, clutch: 72 }),
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
      player("Allan Houston", 6, 6, 20, { height: 82, shooting: 88, finishing: 82, handles: 80, passing: 74, defense: 74, rebounding: 56, athleticism: 80, clutch: 86 }),
      player("Latrell Sprewell", 6, 5, 8, { height: 80, shooting: 80, finishing: 86, handles: 86, passing: 78, defense: 80, rebounding: 62, athleticism: 90, clutch: 84 }),
      player("Larry Johnson", 6, 6, 2, { height: 82, shooting: 78, finishing: 84, handles: 80, passing: 78, defense: 80, rebounding: 80, athleticism: 84, clutch: 84 }),
      player("Charlie Ward", 6, 2, 21, { height: 71, shooting: 74, finishing: 76, handles: 84, passing: 84, defense: 84, rebounding: 56, athleticism: 82, clutch: 78 }),
      player("Doc Rivers", 6, 4, 25, { height: 77, shooting: 78, finishing: 80, handles: 84, passing: 84, defense: 86, rebounding: 60, athleticism: 82, clutch: 80 }),
      player("Herb Williams", 6, 11, 32, { height: 96, shooting: 66, finishing: 78, handles: 58, passing: 66, defense: 84, rebounding: 78, athleticism: 72, clutch: 74 }),
      player("Hubert Davis", 6, 5, 44, { height: 80, shooting: 88, finishing: 76, handles: 76, passing: 72, defense: 70, rebounding: 52, athleticism: 76, clutch: 82 }),
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
      player("Vin Baker", 6, 11, 42, { height: 96, shooting: 76, finishing: 84, handles: 68, passing: 72, defense: 78, rebounding: 84, athleticism: 82, clutch: 78 }),
      player("Dale Ellis", 6, 7, 3, { height: 84, shooting: 90, finishing: 84, handles: 78, passing: 72, defense: 72, rebounding: 64, athleticism: 80, clutch: 86 }),
      player("Ricky Pierce", 6, 4, 22, { height: 77, shooting: 86, finishing: 86, handles: 80, passing: 72, defense: 72, rebounding: 58, athleticism: 78, clutch: 84 }),
      player("Michael Cage", 6, 9, 44, { height: 90, shooting: 64, finishing: 78, handles: 60, passing: 66, defense: 82, rebounding: 86, athleticism: 84, clutch: 70 }),
      player("Derrick McKey", 6, 9, 30, { height: 90, shooting: 80, finishing: 82, handles: 76, passing: 74, defense: 86, rebounding: 72, athleticism: 84, clutch: 78 }),
      player("Dana Barros", 5, 11, 3, { height: 64, shooting: 88, finishing: 76, handles: 84, passing: 80, defense: 70, rebounding: 48, athleticism: 78, clutch: 82 }),
      player("David Wingate", 6, 5, 20, { height: 80, shooting: 72, finishing: 78, handles: 78, passing: 74, defense: 84, rebounding: 60, athleticism: 82, clutch: 74 }),
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
      player("Jeff Malone", 6, 4, 2, { height: 77, shooting: 88, finishing: 82, handles: 78, passing: 72, defense: 70, rebounding: 58, athleticism: 78, clutch: 82 }),
      player("Thurl Bailey", 6, 11, 41, { height: 96, shooting: 78, finishing: 82, handles: 66, passing: 68, defense: 78, rebounding: 78, athleticism: 78, clutch: 78 }),
      player("Mark Eaton", 7, 4, 53, { height: 100, shooting: 48, finishing: 70, handles: 46, passing: 58, defense: 96, rebounding: 84, athleticism: 62, clutch: 68 }),
      player("Tyrone Corbin", 6, 6, 23, { height: 82, shooting: 74, finishing: 80, handles: 72, passing: 72, defense: 84, rebounding: 74, athleticism: 82, clutch: 74 }),
      player("Adam Keefe", 6, 9, 31, { height: 90, shooting: 64, finishing: 78, handles: 62, passing: 66, defense: 78, rebounding: 78, athleticism: 80, clutch: 70 }),
      player("David Benoit", 6, 8, 25, { height: 86, shooting: 76, finishing: 78, handles: 68, passing: 66, defense: 78, rebounding: 74, athleticism: 84, clutch: 72 }),
      player("Chris Morris", 6, 8, 34, { height: 86, shooting: 78, finishing: 80, handles: 74, passing: 70, defense: 78, rebounding: 72, athleticism: 84, clutch: 74 }),
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
      player("Scott Skiles", 6, 1, 4, { height: 68, shooting: 84, finishing: 78, handles: 86, passing: 90, defense: 70, rebounding: 54, athleticism: 70, clutch: 84 }),
      player("Darrell Armstrong", 6, 1, 10, { height: 68, shooting: 80, finishing: 78, handles: 86, passing: 82, defense: 84, rebounding: 54, athleticism: 86, clutch: 82 }),
      player("Bo Outlaw", 6, 8, 25, { height: 86, shooting: 54, finishing: 80, handles: 64, passing: 74, defense: 88, rebounding: 80, athleticism: 90, clutch: 70 }),
      player("Jeff Turner", 6, 9, 43, { height: 90, shooting: 78, finishing: 76, handles: 64, passing: 68, defense: 74, rebounding: 72, athleticism: 72, clutch: 74 }),
      player("Otis Smith", 6, 5, 21, { height: 80, shooting: 76, finishing: 82, handles: 76, passing: 72, defense: 78, rebounding: 66, athleticism: 88, clutch: 76 }),
      player("Terry Catledge", 6, 8, 33, { height: 86, shooting: 74, finishing: 80, handles: 66, passing: 66, defense: 74, rebounding: 78, athleticism: 80, clutch: 74 }),
      player("Greg Kite", 6, 11, 34, { height: 96, shooting: 54, finishing: 72, handles: 50, passing: 58, defense: 78, rebounding: 76, athleticism: 70, clutch: 66 }),
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
      player("Michael Finley", 6, 7, 4, { height: 84, shooting: 84, finishing: 86, handles: 82, passing: 78, defense: 78, rebounding: 68, athleticism: 88, clutch: 84 }),
      player("Dirk Nowitzki", 6, 11, 41, { height: 96, shooting: 86, finishing: 84, handles: 78, passing: 76, defense: 72, rebounding: 80, athleticism: 78, clutch: 84 }),
      player("Steve Nash", 6, 3, 13, { height: 74, shooting: 84, finishing: 80, handles: 90, passing: 90, defense: 66, rebounding: 54, athleticism: 78, clutch: 84 }),
      player("Derek Harper", 6, 4, 12, { height: 77, shooting: 80, finishing: 82, handles: 90, passing: 86, defense: 90, rebounding: 58, athleticism: 84, clutch: 84 }),
      player("Roy Tarpley", 6, 11, 42, { height: 96, shooting: 74, finishing: 84, handles: 68, passing: 70, defense: 82, rebounding: 92, athleticism: 88, clutch: 78 }),
      player("Fat Lever", 6, 3, 12, { height: 74, shooting: 78, finishing: 80, handles: 86, passing: 86, defense: 84, rebounding: 74, athleticism: 82, clutch: 80 }),
      player("Sean Rooks", 6, 10, 34, { height: 94, shooting: 70, finishing: 80, handles: 62, passing: 66, defense: 78, rebounding: 78, athleticism: 74, clutch: 72 }),
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
      player("Rick Barry", 6, 7, 24, { height: 84, shooting: 90, finishing: 90, handles: 86, passing: 88, defense: 80, rebounding: 80, athleticism: 86, clutch: 94 }),
      player("Tom Gola", 6, 6, 15, { height: 82, shooting: 74, finishing: 80, handles: 82, passing: 86, defense: 84, rebounding: 82, athleticism: 80, clutch: 82 }),
      player("Jeff Mullins", 6, 4, 23, { height: 77, shooting: 84, finishing: 82, handles: 80, passing: 78, defense: 76, rebounding: 64, athleticism: 82, clutch: 84 }),
      player("Clyde Lee", 6, 10, 43, { height: 94, shooting: 62, finishing: 76, handles: 56, passing: 64, defense: 82, rebounding: 86, athleticism: 76, clutch: 72 }),
      player("Paul Neumann", 6, 1, 8, { height: 68, shooting: 80, finishing: 78, handles: 80, passing: 80, defense: 74, rebounding: 56, athleticism: 76, clutch: 78 }),
      player("Fred Hetzel", 6, 8, 34, { height: 86, shooting: 78, finishing: 80, handles: 64, passing: 66, defense: 70, rebounding: 78, athleticism: 76, clutch: 72 }),
      player("Jim King", 6, 2, 54, { height: 71, shooting: 76, finishing: 74, handles: 80, passing: 78, defense: 76, rebounding: 58, athleticism: 78, clutch: 74 }),
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
      player("Kareem Abdul-Jabbar", 7, 2, 33, { height: 100, shooting: 84, finishing: 99, handles: 70, passing: 84, defense: 94, rebounding: 95, athleticism: 84, clutch: 94 }),
      player("Norm Nixon", 6, 2, 10, { height: 71, shooting: 82, finishing: 84, handles: 90, passing: 88, defense: 74, rebounding: 56, athleticism: 86, clutch: 84 }),
      player("Keith Erickson", 6, 5, 53, { height: 80, shooting: 78, finishing: 78, handles: 78, passing: 76, defense: 84, rebounding: 66, athleticism: 84, clutch: 78 }),
      player("Kermit Washington", 6, 8, 42, { height: 86, shooting: 66, finishing: 80, handles: 60, passing: 66, defense: 86, rebounding: 86, athleticism: 84, clutch: 74 }),
      player("Connie Hawkins", 6, 8, 42, { height: 86, shooting: 80, finishing: 88, handles: 84, passing: 82, defense: 78, rebounding: 78, athleticism: 90, clutch: 82 }),
      player("Lou Hudson", 6, 5, 23, { height: 80, shooting: 86, finishing: 84, handles: 80, passing: 76, defense: 76, rebounding: 66, athleticism: 84, clutch: 82 }),
      player("Don Ford", 6, 9, 42, { height: 90, shooting: 76, finishing: 78, handles: 66, passing: 70, defense: 74, rebounding: 76, athleticism: 76, clutch: 74 }),
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
      player("Nate Thurmond", 6, 11, 42, { height: 96, shooting: 66, finishing: 82, handles: 60, passing: 72, defense: 96, rebounding: 96, athleticism: 84, clutch: 82 }),
      player("Robert Parish", 7, 0, "00", { height: 98, shooting: 74, finishing: 86, handles: 60, passing: 68, defense: 86, rebounding: 90, athleticism: 80, clutch: 80 }),
      player("Jeff Mullins", 6, 4, 23, { height: 77, shooting: 84, finishing: 82, handles: 80, passing: 78, defense: 76, rebounding: 64, athleticism: 80, clutch: 84 }),
      player("Gus Williams", 6, 2, 10, { height: 71, shooting: 80, finishing: 84, handles: 88, passing: 82, defense: 84, rebounding: 56, athleticism: 90, clutch: 84 }),
      player("Sonny Parker", 6, 4, 25, { height: 77, shooting: 78, finishing: 80, handles: 76, passing: 74, defense: 80, rebounding: 70, athleticism: 84, clutch: 76 }),
      player("Charles Dudley", 6, 3, 12, { height: 74, shooting: 72, finishing: 76, handles: 82, passing: 80, defense: 80, rebounding: 56, athleticism: 80, clutch: 74 }),
      player("Jim Barnett", 6, 4, 20, { height: 77, shooting: 82, finishing: 80, handles: 80, passing: 76, defense: 74, rebounding: 60, athleticism: 80, clutch: 78 }),
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
      player("Jason Kidd", 6, 4, 32, { height: 77, shooting: 74, finishing: 82, handles: 96, passing: 98, defense: 88, rebounding: 74, athleticism: 88, clutch: 84 }),
      player("Danny Manning", 6, 10, 25, { height: 94, shooting: 80, finishing: 86, handles: 80, passing: 80, defense: 78, rebounding: 78, athleticism: 84, clutch: 80 }),
      player("Wesley Person", 6, 6, 7, { height: 82, shooting: 88, finishing: 80, handles: 76, passing: 72, defense: 74, rebounding: 62, athleticism: 82, clutch: 80 }),
      player("A.C. Green", 6, 9, 45, { height: 90, shooting: 70, finishing: 80, handles: 62, passing: 68, defense: 84, rebounding: 86, athleticism: 80, clutch: 78 }),
      player("Rex Chapman", 6, 4, 3, { height: 77, shooting: 86, finishing: 82, handles: 82, passing: 74, defense: 72, rebounding: 56, athleticism: 86, clutch: 84 }),
      player("Cliff Robinson", 6, 10, 3, { height: 94, shooting: 80, finishing: 82, handles: 74, passing: 70, defense: 84, rebounding: 74, athleticism: 84, clutch: 78 }),
      player("Oliver Miller", 6, 9, 25, { height: 90, shooting: 66, finishing: 80, handles: 70, passing: 78, defense: 84, rebounding: 80, athleticism: 74, clutch: 72 }),
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
  {
    era: "1970s",
    team: "Trail Blazers",
    note: "Bill Walton's only healthy full season ended with a championship. The most dominant big man in 1977 wasn't Kareem.",
    players: [
      player("Bill Walton", 6, 11, 32, { height: 96, shooting: 74, finishing: 90, handles: 70, passing: 92, defense: 96, rebounding: 98, athleticism: 80, clutch: 84 }),
      player("Maurice Lucas", 6, 9, 20, { height: 90, shooting: 76, finishing: 80, handles: 66, passing: 68, defense: 86, rebounding: 88, athleticism: 80, clutch: 82 }),
      player("Lionel Hollins", 6, 3, 14, { height: 74, shooting: 80, finishing: 78, handles: 84, passing: 80, defense: 84, rebounding: 56, athleticism: 82, clutch: 82 }),
      player("Dave Twardzik", 6, 1, 12, { height: 68, shooting: 78, finishing: 74, handles: 82, passing: 84, defense: 80, rebounding: 52, athleticism: 74, clutch: 80 }),
      player("Bobby Gross", 6, 6, 35, { height: 82, shooting: 78, finishing: 78, handles: 72, passing: 74, defense: 80, rebounding: 66, athleticism: 76, clutch: 76 }),
      player("Larry Steele", 6, 5, 15, { height: 80, shooting: 74, finishing: 72, handles: 76, passing: 72, defense: 84, rebounding: 60, athleticism: 78, clutch: 72 }),
      player("Wally Walker", 6, 7, 34, { height: 84, shooting: 74, finishing: 76, handles: 66, passing: 68, defense: 72, rebounding: 72, athleticism: 76, clutch: 70 }),
      player("Lloyd Neal", 6, 7, 36, { height: 84, shooting: 68, finishing: 72, handles: 58, passing: 62, defense: 76, rebounding: 80, athleticism: 72, clutch: 66 }),
      player("Geoff Petrie", 6, 4, 45, { height: 77, shooting: 86, finishing: 84, handles: 84, passing: 80, defense: 72, rebounding: 58, athleticism: 82, clutch: 84 }),
      player("Sidney Wicks", 6, 8, 21, { height: 86, shooting: 74, finishing: 84, handles: 74, passing: 74, defense: 78, rebounding: 86, athleticism: 84, clutch: 80 }),
      player("Herm Gilliam", 6, 3, 24, { height: 74, shooting: 80, finishing: 80, handles: 80, passing: 76, defense: 80, rebounding: 60, athleticism: 82, clutch: 78 }),
      player("Johnny Davis", 6, 2, 15, { height: 71, shooting: 78, finishing: 80, handles: 84, passing: 80, defense: 80, rebounding: 56, athleticism: 84, clutch: 80 }),
      player("Corky Calhoun", 6, 7, 14, { height: 84, shooting: 72, finishing: 76, handles: 68, passing: 70, defense: 82, rebounding: 72, athleticism: 80, clutch: 74 }),
      player("Tom Owens", 6, 10, 14, { height: 94, shooting: 74, finishing: 82, handles: 62, passing: 70, defense: 78, rebounding: 82, athleticism: 74, clutch: 78 }),
      player("Barry Clemens", 6, 6, 16, { height: 82, shooting: 78, finishing: 78, handles: 70, passing: 72, defense: 76, rebounding: 72, athleticism: 74, clutch: 76 }),
    ],
  },
  {
    era: "1970s",
    team: "Celtics",
    note: "Cowens and Havlicek's two-title era — relentless defense, deep wings, and championship poise.",
    players: [
      player("John Havlicek", 6, 5, 17, { height: 80, shooting: 84, finishing: 88, handles: 84, passing: 86, defense: 90, rebounding: 76, athleticism: 90, clutch: 94 }),
      player("Dave Cowens", 6, 9, 18, { height: 90, shooting: 80, finishing: 84, handles: 76, passing: 82, defense: 90, rebounding: 94, athleticism: 88, clutch: 88 }),
      player("Jo Jo White", 6, 3, 10, { height: 74, shooting: 86, finishing: 84, handles: 86, passing: 84, defense: 82, rebounding: 60, athleticism: 86, clutch: 88 }),
      player("Paul Silas", 6, 7, 35, { height: 84, shooting: 62, finishing: 76, handles: 60, passing: 72, defense: 88, rebounding: 92, athleticism: 82, clutch: 82 }),
      player("Don Chaney", 6, 5, 12, { height: 80, shooting: 74, finishing: 80, handles: 78, passing: 74, defense: 90, rebounding: 64, athleticism: 86, clutch: 80 }),
      player("Don Nelson", 6, 6, 19, { height: 82, shooting: 82, finishing: 80, handles: 70, passing: 74, defense: 76, rebounding: 74, athleticism: 70, clutch: 88 }),
      player("Charlie Scott", 6, 5, 11, { height: 80, shooting: 84, finishing: 84, handles: 86, passing: 80, defense: 78, rebounding: 62, athleticism: 88, clutch: 82 }),
      player("Nate Archibald", 6, 1, 7, { height: 68, shooting: 82, finishing: 84, handles: 94, passing: 92, defense: 74, rebounding: 54, athleticism: 86, clutch: 86 }),
      player("Kevin Stacom", 6, 3, 30, { height: 74, shooting: 80, finishing: 76, handles: 80, passing: 76, defense: 74, rebounding: 56, athleticism: 78, clutch: 76 }),
      player("Steve Kuberski", 6, 8, 33, { height: 86, shooting: 76, finishing: 78, handles: 64, passing: 68, defense: 74, rebounding: 78, athleticism: 74, clutch: 74 }),
      player("Curtis Rowe", 6, 7, 43, { height: 84, shooting: 74, finishing: 80, handles: 66, passing: 70, defense: 78, rebounding: 80, athleticism: 78, clutch: 74 }),
      player("Jim Ard", 6, 8, 44, { height: 86, shooting: 66, finishing: 74, handles: 58, passing: 66, defense: 76, rebounding: 78, athleticism: 74, clutch: 70 }),
      player("Art Williams", 6, 1, 20, { height: 68, shooting: 70, finishing: 74, handles: 84, passing: 82, defense: 82, rebounding: 56, athleticism: 80, clutch: 74 }),
      player("Hank Finkel", 7, 0, 45, { height: 98, shooting: 62, finishing: 72, handles: 52, passing: 62, defense: 74, rebounding: 76, athleticism: 64, clutch: 68 }),
      player("Tom Sanders", 6, 6, 16, { height: 82, shooting: 66, finishing: 74, handles: 64, passing: 70, defense: 90, rebounding: 80, athleticism: 80, clutch: 80 }),
    ],
  },
  {
    era: "1970s",
    team: "Bullets",
    note: "Unseld's outlets and Hayes' scoring anchored a perennial contender that broke through for the 1978 title.",
    players: [
      player("Wes Unseld", 6, 7, 41, { height: 84, shooting: 66, finishing: 80, handles: 64, passing: 84, defense: 90, rebounding: 96, athleticism: 82, clutch: 86 }),
      player("Elvin Hayes", 6, 9, 11, { height: 90, shooting: 80, finishing: 86, handles: 66, passing: 70, defense: 88, rebounding: 92, athleticism: 86, clutch: 84 }),
      player("Earl Monroe", 6, 3, 10, { height: 74, shooting: 84, finishing: 88, handles: 92, passing: 82, defense: 74, rebounding: 58, athleticism: 86, clutch: 90 }),
      player("Phil Chenier", 6, 3, 45, { height: 74, shooting: 84, finishing: 82, handles: 82, passing: 78, defense: 84, rebounding: 62, athleticism: 84, clutch: 82 }),
      player("Bobby Dandridge", 6, 6, 10, { height: 82, shooting: 84, finishing: 86, handles: 80, passing: 78, defense: 86, rebounding: 76, athleticism: 84, clutch: 88 }),
      player("Kevin Porter", 6, 0, 45, { height: 66, shooting: 74, finishing: 78, handles: 90, passing: 94, defense: 78, rebounding: 54, athleticism: 86, clutch: 80 }),
      player("Mike Riordan", 6, 4, 6, { height: 77, shooting: 78, finishing: 80, handles: 78, passing: 74, defense: 82, rebounding: 62, athleticism: 80, clutch: 78 }),
      player("Gus Johnson", 6, 6, 25, { height: 82, shooting: 74, finishing: 84, handles: 70, passing: 72, defense: 86, rebounding: 88, athleticism: 90, clutch: 82 }),
      player("Jack Marin", 6, 7, 24, { height: 84, shooting: 84, finishing: 82, handles: 74, passing: 74, defense: 76, rebounding: 72, athleticism: 78, clutch: 80 }),
      player("Tom Henderson", 6, 2, 11, { height: 71, shooting: 74, finishing: 78, handles: 86, passing: 84, defense: 82, rebounding: 58, athleticism: 84, clutch: 78 }),
      player("Greg Ballard", 6, 7, 42, { height: 84, shooting: 80, finishing: 80, handles: 70, passing: 72, defense: 80, rebounding: 80, athleticism: 80, clutch: 78 }),
      player("Mitch Kupchak", 6, 9, 25, { height: 90, shooting: 74, finishing: 84, handles: 64, passing: 68, defense: 78, rebounding: 82, athleticism: 82, clutch: 80 }),
      player("Truck Robinson", 6, 11, 21, { height: 96, shooting: 70, finishing: 82, handles: 62, passing: 66, defense: 80, rebounding: 88, athleticism: 82, clutch: 78 }),
      player("Dave Bing", 6, 3, 21, { height: 74, shooting: 82, finishing: 84, handles: 88, passing: 86, defense: 80, rebounding: 62, athleticism: 84, clutch: 84 }),
      player("Nick Weatherspoon", 6, 7, 31, { height: 84, shooting: 76, finishing: 80, handles: 70, passing: 70, defense: 78, rebounding: 74, athleticism: 80, clutch: 74 }),
    ],
  },
  {
    era: "1970s",
    team: "76ers",
    note: "Dr. J brings flight and finishing; McGinnis, Free, and Dawkins make this one of the most explosive rolls of the decade.",
    players: [
      player("Julius Erving", 6, 7, 6, { height: 84, shooting: 80, finishing: 94, handles: 88, passing: 84, defense: 84, rebounding: 80, athleticism: 97, clutch: 90 }),
      player("George McGinnis", 6, 8, 30, { height: 86, shooting: 78, finishing: 86, handles: 78, passing: 78, defense: 78, rebounding: 86, athleticism: 86, clutch: 82 }),
      player("Doug Collins", 6, 6, 20, { height: 82, shooting: 86, finishing: 84, handles: 82, passing: 78, defense: 78, rebounding: 62, athleticism: 86, clutch: 84 }),
      player("World B. Free", 6, 2, 21, { height: 71, shooting: 84, finishing: 86, handles: 86, passing: 74, defense: 70, rebounding: 56, athleticism: 86, clutch: 84 }),
      player("Darryl Dawkins", 6, 11, 53, { height: 96, shooting: 70, finishing: 88, handles: 62, passing: 66, defense: 80, rebounding: 84, athleticism: 90, clutch: 78 }),
      player("Caldwell Jones", 6, 11, 11, { height: 96, shooting: 64, finishing: 78, handles: 58, passing: 66, defense: 90, rebounding: 86, athleticism: 82, clutch: 76 }),
      player("Bobby Jones", 6, 9, 24, { height: 90, shooting: 76, finishing: 86, handles: 72, passing: 76, defense: 92, rebounding: 80, athleticism: 90, clutch: 84 }),
      player("Steve Mix", 6, 7, 30, { height: 84, shooting: 80, finishing: 82, handles: 70, passing: 72, defense: 80, rebounding: 76, athleticism: 78, clutch: 80 }),
      player("Henry Bibby", 6, 1, 10, { height: 68, shooting: 80, finishing: 78, handles: 84, passing: 82, defense: 78, rebounding: 56, athleticism: 80, clutch: 80 }),
      player("Fred Carter", 6, 3, 21, { height: 74, shooting: 78, finishing: 80, handles: 82, passing: 76, defense: 82, rebounding: 64, athleticism: 84, clutch: 76 }),
      player("Mike Dunleavy", 6, 3, 10, { height: 74, shooting: 82, finishing: 78, handles: 84, passing: 82, defense: 74, rebounding: 56, athleticism: 78, clutch: 80 }),
      player("Joe Bryant", 6, 9, 24, { height: 90, shooting: 78, finishing: 82, handles: 80, passing: 78, defense: 76, rebounding: 76, athleticism: 86, clutch: 76 }),
      player("Harvey Catchings", 6, 9, 33, { height: 90, shooting: 58, finishing: 74, handles: 56, passing: 64, defense: 88, rebounding: 82, athleticism: 80, clutch: 70 }),
      player("Billy Cunningham", 6, 6, 32, { height: 82, shooting: 80, finishing: 88, handles: 82, passing: 82, defense: 80, rebounding: 84, athleticism: 88, clutch: 86 }),
      player("LeRoy Ellis", 6, 10, 20, { height: 94, shooting: 70, finishing: 78, handles: 60, passing: 66, defense: 82, rebounding: 84, athleticism: 78, clutch: 74 }),
    ],
  },
  {
    era: "1970s",
    team: "SuperSonics",
    note: "Gus Williams' speed and Dennis Johnson's two-way defense drove Seattle to back-to-back Finals and the 1979 title.",
    players: [
      player("Gus Williams", 6, 2, 1, { height: 71, shooting: 84, finishing: 86, handles: 90, passing: 82, defense: 84, rebounding: 56, athleticism: 92, clutch: 86 }),
      player("Dennis Johnson", 6, 4, 24, { height: 77, shooting: 78, finishing: 84, handles: 84, passing: 80, defense: 94, rebounding: 68, athleticism: 90, clutch: 90 }),
      player("Jack Sikma", 6, 11, 43, { height: 96, shooting: 82, finishing: 82, handles: 66, passing: 78, defense: 84, rebounding: 88, athleticism: 78, clutch: 84 }),
      player("Fred Brown", 6, 3, 32, { height: 74, shooting: 90, finishing: 80, handles: 84, passing: 80, defense: 74, rebounding: 58, athleticism: 80, clutch: 88 }),
      player("Spencer Haywood", 6, 8, 24, { height: 86, shooting: 82, finishing: 88, handles: 74, passing: 74, defense: 80, rebounding: 88, athleticism: 88, clutch: 82 }),
      player("Lonnie Shelton", 6, 8, 8, { height: 86, shooting: 70, finishing: 82, handles: 64, passing: 70, defense: 88, rebounding: 84, athleticism: 84, clutch: 78 }),
      player("John Johnson", 6, 7, 27, { height: 84, shooting: 80, finishing: 82, handles: 80, passing: 84, defense: 82, rebounding: 74, athleticism: 80, clutch: 80 }),
      player("Slick Watts", 6, 1, 13, { height: 68, shooting: 72, finishing: 78, handles: 88, passing: 88, defense: 88, rebounding: 56, athleticism: 88, clutch: 78 }),
      player("Tom Burleson", 7, 2, 24, { height: 100, shooting: 66, finishing: 78, handles: 56, passing: 64, defense: 82, rebounding: 84, athleticism: 70, clutch: 72 }),
      player("Dick Snyder", 6, 5, 15, { height: 80, shooting: 82, finishing: 80, handles: 78, passing: 76, defense: 78, rebounding: 62, athleticism: 78, clutch: 80 }),
      player("Bruce Seals", 6, 8, 31, { height: 86, shooting: 72, finishing: 78, handles: 66, passing: 68, defense: 78, rebounding: 78, athleticism: 80, clutch: 72 }),
      player("Archie Clark", 6, 2, 21, { height: 71, shooting: 82, finishing: 82, handles: 86, passing: 82, defense: 80, rebounding: 60, athleticism: 84, clutch: 82 }),
      player("Leonard Gray", 6, 8, 34, { height: 86, shooting: 72, finishing: 80, handles: 66, passing: 70, defense: 80, rebounding: 78, athleticism: 78, clutch: 72 }),
      player("Jim Fox", 6, 10, 14, { height: 94, shooting: 70, finishing: 78, handles: 60, passing: 70, defense: 78, rebounding: 80, athleticism: 72, clutch: 72 }),
      player("Joe Hassett", 6, 3, 20, { height: 74, shooting: 88, finishing: 74, handles: 76, passing: 72, defense: 70, rebounding: 52, athleticism: 74, clutch: 80 }),
    ],
  },
  {
    era: "1970s",
    team: "Suns",
    note: "The 1976 'Sunderella' Finals run — Westphal's scoring, Alvan Adams' skill, and a scrappy supporting cast.",
    players: [
      player("Paul Westphal", 6, 4, 44, { height: 77, shooting: 86, finishing: 88, handles: 88, passing: 82, defense: 80, rebounding: 56, athleticism: 88, clutch: 88 }),
      player("Walter Davis", 6, 6, 6, { height: 82, shooting: 88, finishing: 88, handles: 84, passing: 80, defense: 74, rebounding: 66, athleticism: 92, clutch: 86 }),
      player("Alvan Adams", 6, 9, 33, { height: 90, shooting: 80, finishing: 84, handles: 78, passing: 84, defense: 80, rebounding: 84, athleticism: 82, clutch: 82 }),
      player("Dick Van Arsdale", 6, 5, 5, { height: 80, shooting: 80, finishing: 82, handles: 80, passing: 76, defense: 82, rebounding: 68, athleticism: 82, clutch: 82 }),
      player("Connie Hawkins", 6, 8, 42, { height: 86, shooting: 80, finishing: 88, handles: 84, passing: 82, defense: 78, rebounding: 78, athleticism: 90, clutch: 82 }),
      player("Curtis Perry", 6, 7, 11, { height: 84, shooting: 66, finishing: 78, handles: 60, passing: 66, defense: 84, rebounding: 86, athleticism: 80, clutch: 78 }),
      player("Ricky Sobers", 6, 3, 20, { height: 74, shooting: 80, finishing: 80, handles: 84, passing: 80, defense: 82, rebounding: 58, athleticism: 84, clutch: 80 }),
      player("Gar Heard", 6, 6, 24, { height: 82, shooting: 74, finishing: 78, handles: 68, passing: 72, defense: 86, rebounding: 82, athleticism: 84, clutch: 84 }),
      player("Don Buse", 6, 4, 30, { height: 77, shooting: 78, finishing: 74, handles: 88, passing: 90, defense: 88, rebounding: 56, athleticism: 82, clutch: 78 }),
      player("Neal Walk", 6, 10, 41, { height: 94, shooting: 74, finishing: 82, handles: 62, passing: 72, defense: 74, rebounding: 84, athleticism: 74, clutch: 74 }),
      player("Dennis Awtrey", 6, 10, 34, { height: 94, shooting: 62, finishing: 74, handles: 58, passing: 70, defense: 80, rebounding: 78, athleticism: 68, clutch: 70 }),
      player("Fred Saunders", 6, 7, 25, { height: 84, shooting: 70, finishing: 78, handles: 68, passing: 70, defense: 78, rebounding: 74, athleticism: 80, clutch: 72 }),
      player("John Shumate", 6, 9, 34, { height: 90, shooting: 76, finishing: 82, handles: 66, passing: 72, defense: 78, rebounding: 80, athleticism: 80, clutch: 76 }),
      player("Mike Bratz", 6, 2, 4, { height: 71, shooting: 78, finishing: 76, handles: 82, passing: 80, defense: 78, rebounding: 54, athleticism: 78, clutch: 76 }),
      player("Ron Lee", 6, 4, 15, { height: 77, shooting: 72, finishing: 78, handles: 82, passing: 80, defense: 88, rebounding: 60, athleticism: 86, clutch: 74 }),
    ],
  },
  {
    era: "1970s",
    team: "Braves",
    note: "Buffalo lived on Bob McAdoo's scoring (MVP, three scoring titles) and Randy Smith's relentless motor.",
    players: [
      player("Bob McAdoo", 6, 9, 11, { height: 90, shooting: 86, finishing: 90, handles: 74, passing: 74, defense: 80, rebounding: 88, athleticism: 88, clutch: 86 }),
      player("Randy Smith", 6, 3, 9, { height: 74, shooting: 84, finishing: 84, handles: 84, passing: 80, defense: 80, rebounding: 60, athleticism: 92, clutch: 84 }),
      player("Ernie DiGregorio", 6, 0, 20, { height: 66, shooting: 82, finishing: 76, handles: 90, passing: 92, defense: 64, rebounding: 50, athleticism: 74, clutch: 80 }),
      player("Jim McMillian", 6, 5, 5, { height: 80, shooting: 84, finishing: 82, handles: 78, passing: 78, defense: 78, rebounding: 70, athleticism: 80, clutch: 80 }),
      player("Bob Kauffman", 6, 8, 43, { height: 86, shooting: 74, finishing: 82, handles: 70, passing: 78, defense: 78, rebounding: 84, athleticism: 80, clutch: 78 }),
      player("Garfield Heard", 6, 6, 24, { height: 82, shooting: 74, finishing: 78, handles: 68, passing: 72, defense: 84, rebounding: 82, athleticism: 84, clutch: 78 }),
      player("Jack Marin", 6, 7, 24, { height: 84, shooting: 84, finishing: 82, handles: 74, passing: 74, defense: 76, rebounding: 72, athleticism: 78, clutch: 80 }),
      player("Don Adams", 6, 7, 14, { height: 84, shooting: 72, finishing: 78, handles: 68, passing: 70, defense: 84, rebounding: 76, athleticism: 80, clutch: 74 }),
      player("Jim McDaniels", 6, 11, 43, { height: 96, shooting: 72, finishing: 80, handles: 60, passing: 66, defense: 76, rebounding: 82, athleticism: 76, clutch: 72 }),
      player("John Hummer", 6, 9, 20, { height: 90, shooting: 66, finishing: 78, handles: 64, passing: 72, defense: 78, rebounding: 80, athleticism: 74, clutch: 72 }),
      player("Kenny Charles", 6, 3, 15, { height: 74, shooting: 80, finishing: 80, handles: 80, passing: 76, defense: 78, rebounding: 58, athleticism: 84, clutch: 76 }),
      player("Tom McMillen", 6, 11, 54, { height: 96, shooting: 78, finishing: 80, handles: 62, passing: 68, defense: 74, rebounding: 78, athleticism: 72, clutch: 74 }),
      player("Dale Schlueter", 6, 10, 43, { height: 94, shooting: 64, finishing: 74, handles: 58, passing: 68, defense: 78, rebounding: 78, athleticism: 70, clutch: 70 }),
      player("Bird Averitt", 6, 1, 30, { height: 68, shooting: 82, finishing: 78, handles: 84, passing: 78, defense: 70, rebounding: 54, athleticism: 80, clutch: 78 }),
      player("Dick Gibbs", 6, 5, 25, { height: 80, shooting: 78, finishing: 78, handles: 76, passing: 72, defense: 76, rebounding: 64, athleticism: 80, clutch: 74 }),
    ],
  },
  {
    era: "1980s",
    team: "Spurs",
    note: "George Gervin averaged 33 a night in 1979-80. The Iceman ran pure offense before offense was fashionable.",
    players: [
      player("George Gervin", 6, 7, 44, { height: 84, shooting: 96, finishing: 94, handles: 86, passing: 78, defense: 68, rebounding: 72, athleticism: 84, clutch: 94 }),
      player("Artis Gilmore", 7, 2, 53, { height: 100, shooting: 72, finishing: 86, handles: 58, passing: 68, defense: 88, rebounding: 96, athleticism: 72, clutch: 78 }),
      player("Mike Mitchell", 6, 7, 45, { height: 84, shooting: 90, finishing: 84, handles: 74, passing: 68, defense: 70, rebounding: 74, athleticism: 80, clutch: 86 }),
      player("Johnny Moore", 6, 2, 00, { height: 72, shooting: 78, finishing: 74, handles: 86, passing: 90, defense: 78, rebounding: 54, athleticism: 80, clutch: 78 }),
      player("Alvin Robertson", 6, 4, 21, { height: 77, shooting: 78, finishing: 76, handles: 84, passing: 80, defense: 92, rebounding: 68, athleticism: 86, clutch: 78 }),
      player("Dave Corzine", 6, 11, 54, { height: 96, shooting: 68, finishing: 74, handles: 54, passing: 64, defense: 78, rebounding: 82, athleticism: 64, clutch: 68 }),
      player("Gene Banks", 6, 7, 22, { height: 84, shooting: 76, finishing: 78, handles: 70, passing: 72, defense: 72, rebounding: 76, athleticism: 78, clutch: 74 }),
      player("Mark Olberding", 6, 8, 30, { height: 88, shooting: 70, finishing: 72, handles: 64, passing: 66, defense: 72, rebounding: 76, athleticism: 68, clutch: 70 }),
      player("Willie Anderson", 6, 7, 40, { height: 84, shooting: 80, finishing: 82, handles: 82, passing: 80, defense: 82, rebounding: 66, athleticism: 84, clutch: 78 }),
      player("Johnny Dawkins", 6, 2, 24, { height: 71, shooting: 80, finishing: 80, handles: 86, passing: 82, defense: 78, rebounding: 54, athleticism: 84, clutch: 80 }),
      player("Walter Berry", 6, 8, 34, { height: 86, shooting: 74, finishing: 84, handles: 72, passing: 70, defense: 72, rebounding: 78, athleticism: 84, clutch: 74 }),
      player("Steve Johnson", 6, 10, 44, { height: 94, shooting: 72, finishing: 84, handles: 60, passing: 66, defense: 78, rebounding: 80, athleticism: 78, clutch: 74 }),
      player("David Greenwood", 6, 9, 34, { height: 90, shooting: 70, finishing: 78, handles: 64, passing: 70, defense: 82, rebounding: 82, athleticism: 78, clutch: 72 }),
      player("Jon Sundvold", 6, 2, 20, { height: 71, shooting: 88, finishing: 74, handles: 78, passing: 74, defense: 68, rebounding: 50, athleticism: 70, clutch: 80 }),
      player("Edgar Jones", 6, 10, 30, { height: 94, shooting: 68, finishing: 80, handles: 64, passing: 66, defense: 78, rebounding: 78, athleticism: 82, clutch: 72 }),
    ],
  },
  {
    era: "1980s",
    team: "Bucks",
    note: "Don Nelson's Bucks won the division seven years running — Moncrief's two-way greatness and a deep, switchable roster.",
    players: [
      player("Sidney Moncrief", 6, 4, 4, { height: 77, shooting: 84, finishing: 86, handles: 84, passing: 80, defense: 96, rebounding: 70, athleticism: 90, clutch: 88 }),
      player("Terry Cummings", 6, 9, 34, { height: 90, shooting: 80, finishing: 88, handles: 74, passing: 72, defense: 80, rebounding: 86, athleticism: 88, clutch: 82 }),
      player("Bob Lanier", 6, 11, 16, { height: 96, shooting: 80, finishing: 88, handles: 70, passing: 80, defense: 84, rebounding: 88, athleticism: 78, clutch: 84 }),
      player("Marques Johnson", 6, 7, 8, { height: 84, shooting: 82, finishing: 90, handles: 82, passing: 80, defense: 80, rebounding: 82, athleticism: 90, clutch: 86 }),
      player("Paul Pressey", 6, 5, 25, { height: 80, shooting: 76, finishing: 82, handles: 86, passing: 88, defense: 90, rebounding: 68, athleticism: 86, clutch: 80 }),
      player("Jack Sikma", 6, 11, 43, { height: 96, shooting: 82, finishing: 80, handles: 64, passing: 78, defense: 82, rebounding: 86, athleticism: 74, clutch: 82 }),
      player("Ricky Pierce", 6, 4, 22, { height: 77, shooting: 86, finishing: 86, handles: 80, passing: 72, defense: 72, rebounding: 58, athleticism: 80, clutch: 84 }),
      player("Junior Bridgeman", 6, 5, 2, { height: 80, shooting: 82, finishing: 82, handles: 78, passing: 76, defense: 76, rebounding: 64, athleticism: 78, clutch: 82 }),
      player("Brian Winters", 6, 4, 32, { height: 77, shooting: 87, finishing: 80, handles: 80, passing: 79, defense: 72, rebounding: 60, athleticism: 72, clutch: 86 }),
      player("Quinn Buckner", 6, 3, 6, { height: 74, shooting: 72, finishing: 78, handles: 84, passing: 84, defense: 90, rebounding: 60, athleticism: 82, clutch: 78 }),
      player("Craig Hodges", 6, 2, 14, { height: 71, shooting: 90, finishing: 74, handles: 80, passing: 76, defense: 72, rebounding: 50, athleticism: 74, clutch: 84 }),
      player("Alton Lister", 6, 11, 25, { height: 96, shooting: 62, finishing: 78, handles: 56, passing: 64, defense: 84, rebounding: 82, athleticism: 80, clutch: 70 }),
      player("Paul Mokeski", 7, 0, 43, { height: 98, shooting: 64, finishing: 74, handles: 54, passing: 62, defense: 78, rebounding: 78, athleticism: 66, clutch: 70 }),
      player("Larry Krystkowiak", 6, 9, 42, { height: 90, shooting: 76, finishing: 80, handles: 66, passing: 70, defense: 78, rebounding: 80, athleticism: 74, clutch: 74 }),
      player("Randy Breuer", 7, 3, 45, { height: 100, shooting: 62, finishing: 76, handles: 52, passing: 60, defense: 78, rebounding: 78, athleticism: 66, clutch: 68 }),
    ],
  },
  {
    era: "1980s",
    team: "Rockets",
    note: "Two Finals trips in the decade — Moses early, then the Twin Towers of Olajuwon and Sampson.",
    players: [
      player("Hakeem Olajuwon", 7, 0, 34, { height: 98, shooting: 72, finishing: 90, handles: 74, passing: 74, defense: 96, rebounding: 92, athleticism: 96, clutch: 88 }),
      player("Moses Malone", 6, 10, 24, { height: 94, shooting: 74, finishing: 88, handles: 64, passing: 66, defense: 84, rebounding: 97, athleticism: 86, clutch: 86 }),
      player("Ralph Sampson", 7, 4, 50, { height: 100, shooting: 78, finishing: 86, handles: 74, passing: 78, defense: 86, rebounding: 88, athleticism: 84, clutch: 80 }),
      player("Calvin Murphy", 5, 9, 23, { height: 60, shooting: 88, finishing: 82, handles: 88, passing: 80, defense: 72, rebounding: 48, athleticism: 84, clutch: 88 }),
      player("Sleepy Floyd", 6, 3, 21, { height: 74, shooting: 82, finishing: 82, handles: 88, passing: 86, defense: 80, rebounding: 56, athleticism: 84, clutch: 86 }),
      player("Robert Reid", 6, 8, 50, { height: 86, shooting: 78, finishing: 80, handles: 76, passing: 76, defense: 86, rebounding: 74, athleticism: 82, clutch: 80 }),
      player("Rodney McCray", 6, 8, 24, { height: 86, shooting: 78, finishing: 82, handles: 80, passing: 82, defense: 86, rebounding: 78, athleticism: 82, clutch: 80 }),
      player("Lewis Lloyd", 6, 6, 32, { height: 82, shooting: 80, finishing: 84, handles: 82, passing: 78, defense: 74, rebounding: 70, athleticism: 84, clutch: 78 }),
      player("Allen Leavell", 6, 2, 15, { height: 71, shooting: 78, finishing: 78, handles: 84, passing: 84, defense: 78, rebounding: 54, athleticism: 80, clutch: 80 }),
      player("Mike Newlin", 6, 4, 21, { height: 77, shooting: 82, finishing: 80, handles: 80, passing: 78, defense: 72, rebounding: 58, athleticism: 76, clutch: 82 }),
      player("Billy Paultz", 6, 11, 44, { height: 96, shooting: 64, finishing: 78, handles: 58, passing: 68, defense: 82, rebounding: 80, athleticism: 70, clutch: 74 }),
      player("Jim Petersen", 6, 10, 45, { height: 94, shooting: 70, finishing: 80, handles: 62, passing: 68, defense: 80, rebounding: 80, athleticism: 78, clutch: 72 }),
      player("Major Jones", 6, 9, 34, { height: 90, shooting: 62, finishing: 78, handles: 58, passing: 64, defense: 80, rebounding: 80, athleticism: 80, clutch: 70 }),
      player("Buck Johnson", 6, 7, 43, { height: 84, shooting: 76, finishing: 80, handles: 74, passing: 70, defense: 82, rebounding: 70, athleticism: 86, clutch: 74 }),
      player("Purvis Short", 6, 7, 25, { height: 84, shooting: 84, finishing: 84, handles: 78, passing: 74, defense: 72, rebounding: 66, athleticism: 82, clutch: 82 }),
    ],
  },
  {
    era: "1980s",
    team: "Hawks",
    note: "Dominique's high-wire scoring led Mike Fratello's 50-win Hawks, with Doc Rivers and a deep, athletic supporting cast.",
    players: [
      player("Dominique Wilkins", 6, 8, 21, { height: 86, shooting: 84, finishing: 94, handles: 84, passing: 74, defense: 74, rebounding: 78, athleticism: 97, clutch: 88 }),
      player("Doc Rivers", 6, 4, 25, { height: 77, shooting: 80, finishing: 82, handles: 86, passing: 86, defense: 88, rebounding: 62, athleticism: 86, clutch: 82 }),
      player("Kevin Willis", 7, 0, 42, { height: 98, shooting: 74, finishing: 82, handles: 64, passing: 64, defense: 78, rebounding: 90, athleticism: 84, clutch: 76 }),
      player("Dan Roundfield", 6, 8, 32, { height: 86, shooting: 74, finishing: 84, handles: 68, passing: 72, defense: 88, rebounding: 88, athleticism: 86, clutch: 80 }),
      player("Tree Rollins", 7, 1, 30, { height: 100, shooting: 60, finishing: 78, handles: 54, passing: 64, defense: 92, rebounding: 86, athleticism: 82, clutch: 74 }),
      player("Randy Wittman", 6, 6, 24, { height: 82, shooting: 86, finishing: 80, handles: 78, passing: 76, defense: 74, rebounding: 58, athleticism: 74, clutch: 80 }),
      player("Spud Webb", 5, 7, 4, { height: 56, shooting: 78, finishing: 80, handles: 90, passing: 86, defense: 78, rebounding: 46, athleticism: 94, clutch: 80 }),
      player("Eddie Johnson", 6, 2, 20, { height: 71, shooting: 82, finishing: 82, handles: 86, passing: 84, defense: 76, rebounding: 54, athleticism: 84, clutch: 80 }),
      player("Cliff Levingston", 6, 8, 34, { height: 86, shooting: 70, finishing: 82, handles: 68, passing: 70, defense: 84, rebounding: 80, athleticism: 88, clutch: 74 }),
      player("Antoine Carr", 6, 9, 35, { height: 90, shooting: 80, finishing: 84, handles: 70, passing: 70, defense: 80, rebounding: 74, athleticism: 84, clutch: 76 }),
      player("John Drew", 6, 6, 22, { height: 82, shooting: 78, finishing: 86, handles: 74, passing: 70, defense: 72, rebounding: 78, athleticism: 86, clutch: 80 }),
      player("Rory Sparrow", 6, 2, 2, { height: 71, shooting: 78, finishing: 78, handles: 84, passing: 84, defense: 80, rebounding: 54, athleticism: 80, clutch: 78 }),
      player("Mike Glenn", 6, 3, 14, { height: 74, shooting: 90, finishing: 78, handles: 78, passing: 76, defense: 70, rebounding: 52, athleticism: 74, clutch: 82 }),
      player("Johnny Davis", 6, 2, 15, { height: 71, shooting: 78, finishing: 80, handles: 84, passing: 80, defense: 80, rebounding: 56, athleticism: 84, clutch: 80 }),
      player("Scott Hastings", 6, 10, 45, { height: 94, shooting: 70, finishing: 74, handles: 58, passing: 64, defense: 76, rebounding: 74, athleticism: 68, clutch: 72 }),
    ],
  },
  {
    era: "1980s",
    team: "Mavericks",
    note: "A model expansion build — Aguirre and Blackman scoring, Harper and Perkins maturing into a 1988 conference finalist.",
    players: [
      player("Mark Aguirre", 6, 6, 24, { height: 82, shooting: 84, finishing: 90, handles: 84, passing: 78, defense: 70, rebounding: 72, athleticism: 84, clutch: 86 }),
      player("Rolando Blackman", 6, 6, 22, { height: 82, shooting: 86, finishing: 86, handles: 82, passing: 78, defense: 82, rebounding: 64, athleticism: 84, clutch: 88 }),
      player("Derek Harper", 6, 4, 12, { height: 77, shooting: 80, finishing: 82, handles: 90, passing: 86, defense: 90, rebounding: 58, athleticism: 86, clutch: 84 }),
      player("Sam Perkins", 6, 9, 14, { height: 90, shooting: 82, finishing: 82, handles: 70, passing: 74, defense: 80, rebounding: 84, athleticism: 78, clutch: 82 }),
      player("Brad Davis", 6, 3, 15, { height: 74, shooting: 82, finishing: 80, handles: 88, passing: 86, defense: 78, rebounding: 54, athleticism: 78, clutch: 84 }),
      player("Detlef Schrempf", 6, 10, 32, { height: 94, shooting: 82, finishing: 84, handles: 80, passing: 82, defense: 78, rebounding: 78, athleticism: 80, clutch: 82 }),
      player("Roy Tarpley", 6, 11, 42, { height: 96, shooting: 74, finishing: 84, handles: 68, passing: 70, defense: 82, rebounding: 92, athleticism: 88, clutch: 78 }),
      player("James Donaldson", 7, 2, 40, { height: 100, shooting: 62, finishing: 80, handles: 54, passing: 64, defense: 86, rebounding: 88, athleticism: 72, clutch: 74 }),
      player("Jay Vincent", 6, 7, 31, { height: 84, shooting: 82, finishing: 84, handles: 74, passing: 72, defense: 70, rebounding: 72, athleticism: 78, clutch: 80 }),
      player("Dale Ellis", 6, 7, 3, { height: 84, shooting: 88, finishing: 84, handles: 78, passing: 72, defense: 74, rebounding: 66, athleticism: 84, clutch: 84 }),
      player("Kurt Nimphius", 6, 10, 43, { height: 94, shooting: 66, finishing: 78, handles: 60, passing: 66, defense: 82, rebounding: 78, athleticism: 78, clutch: 72 }),
      player("Bill Garnett", 6, 9, 50, { height: 90, shooting: 66, finishing: 76, handles: 62, passing: 66, defense: 78, rebounding: 78, athleticism: 78, clutch: 70 }),
      player("Brad Wright", 6, 11, 34, { height: 96, shooting: 64, finishing: 76, handles: 56, passing: 62, defense: 76, rebounding: 76, athleticism: 68, clutch: 68 }),
      player("Bill Wennington", 7, 0, 34, { height: 98, shooting: 72, finishing: 76, handles: 58, passing: 64, defense: 76, rebounding: 76, athleticism: 68, clutch: 70 }),
      player("Steve Alford", 6, 2, 12, { height: 71, shooting: 88, finishing: 76, handles: 80, passing: 76, defense: 70, rebounding: 50, athleticism: 72, clutch: 80 }),
    ],
  },
  {
    era: "1980s",
    team: "Nuggets",
    note: "Doug Moe's run-and-gun machine — Alex English's scoring, Kiki and Issel firepower, Fat Lever stuffing the box score.",
    players: [
      player("Alex English", 6, 7, 2, { height: 84, shooting: 86, finishing: 88, handles: 82, passing: 80, defense: 72, rebounding: 70, athleticism: 84, clutch: 86 }),
      player("Fat Lever", 6, 3, 12, { height: 74, shooting: 80, finishing: 82, handles: 88, passing: 88, defense: 88, rebounding: 78, athleticism: 88, clutch: 82 }),
      player("Kiki Vandeweghe", 6, 8, 55, { height: 86, shooting: 90, finishing: 88, handles: 80, passing: 74, defense: 64, rebounding: 64, athleticism: 78, clutch: 84 }),
      player("Dan Issel", 6, 9, 44, { height: 90, shooting: 82, finishing: 86, handles: 68, passing: 74, defense: 74, rebounding: 82, athleticism: 76, clutch: 84 }),
      player("Calvin Natt", 6, 6, 33, { height: 82, shooting: 80, finishing: 86, handles: 74, passing: 74, defense: 80, rebounding: 80, athleticism: 84, clutch: 82 }),
      player("Dan Schayes", 6, 11, 24, { height: 96, shooting: 74, finishing: 80, handles: 62, passing: 70, defense: 78, rebounding: 80, athleticism: 70, clutch: 76 }),
      player("Bill Hanzlik", 6, 7, 24, { height: 84, shooting: 70, finishing: 76, handles: 78, passing: 78, defense: 90, rebounding: 64, athleticism: 82, clutch: 74 }),
      player("T.R. Dunn", 6, 4, 12, { height: 77, shooting: 64, finishing: 74, handles: 72, passing: 72, defense: 90, rebounding: 72, athleticism: 82, clutch: 72 }),
      player("Michael Adams", 5, 10, 14, { height: 62, shooting: 80, finishing: 76, handles: 88, passing: 84, defense: 78, rebounding: 50, athleticism: 82, clutch: 84 }),
      player("Wayne Cooper", 6, 10, 44, { height: 94, shooting: 68, finishing: 78, handles: 60, passing: 66, defense: 86, rebounding: 82, athleticism: 80, clutch: 72 }),
      player("Mike Evans", 6, 1, 6, { height: 68, shooting: 84, finishing: 78, handles: 82, passing: 78, defense: 74, rebounding: 52, athleticism: 78, clutch: 80 }),
      player("Blair Rasmussen", 7, 0, 41, { height: 98, shooting: 72, finishing: 78, handles: 58, passing: 64, defense: 78, rebounding: 80, athleticism: 68, clutch: 72 }),
      player("Elston Turner", 6, 5, 20, { height: 80, shooting: 74, finishing: 78, handles: 78, passing: 76, defense: 86, rebounding: 62, athleticism: 80, clutch: 74 }),
      player("Rob Williams", 6, 2, 21, { height: 71, shooting: 80, finishing: 78, handles: 84, passing: 82, defense: 74, rebounding: 52, athleticism: 80, clutch: 76 }),
      player("Walter Davis", 6, 6, 6, { height: 82, shooting: 88, finishing: 86, handles: 82, passing: 78, defense: 72, rebounding: 62, athleticism: 84, clutch: 84 }),
    ],
  },
  {
    era: "1980s",
    team: "Trail Blazers",
    note: "Portland made the playoffs every year — Drexler taking flight, Paxson scoring, Porter and Kersey arriving.",
    players: [
      player("Clyde Drexler", 6, 7, 22, { height: 84, shooting: 80, finishing: 90, handles: 88, passing: 82, defense: 82, rebounding: 76, athleticism: 96, clutch: 86 }),
      player("Jim Paxson", 6, 6, 4, { height: 82, shooting: 86, finishing: 84, handles: 80, passing: 74, defense: 76, rebounding: 60, athleticism: 82, clutch: 84 }),
      player("Terry Porter", 6, 3, 30, { height: 74, shooting: 84, finishing: 82, handles: 90, passing: 90, defense: 82, rebounding: 60, athleticism: 84, clutch: 88 }),
      player("Jerome Kersey", 6, 7, 25, { height: 84, shooting: 72, finishing: 84, handles: 74, passing: 72, defense: 86, rebounding: 82, athleticism: 94, clutch: 80 }),
      player("Mychal Thompson", 6, 10, 43, { height: 94, shooting: 74, finishing: 84, handles: 64, passing: 72, defense: 82, rebounding: 84, athleticism: 80, clutch: 78 }),
      player("Kiki Vandeweghe", 6, 8, 55, { height: 86, shooting: 90, finishing: 88, handles: 80, passing: 74, defense: 64, rebounding: 66, athleticism: 78, clutch: 84 }),
      player("Calvin Natt", 6, 6, 33, { height: 82, shooting: 80, finishing: 86, handles: 74, passing: 74, defense: 80, rebounding: 80, athleticism: 84, clutch: 82 }),
      player("Kenny Carr", 6, 7, 34, { height: 84, shooting: 72, finishing: 82, handles: 66, passing: 70, defense: 80, rebounding: 84, athleticism: 82, clutch: 76 }),
      player("Darnell Valentine", 6, 2, 14, { height: 71, shooting: 74, finishing: 78, handles: 86, passing: 84, defense: 86, rebounding: 56, athleticism: 84, clutch: 78 }),
      player("Sam Bowie", 7, 1, 31, { height: 100, shooting: 70, finishing: 80, handles: 62, passing: 74, defense: 84, rebounding: 82, athleticism: 74, clutch: 72 }),
      player("Steve Johnson", 6, 10, 44, { height: 94, shooting: 74, finishing: 84, handles: 60, passing: 66, defense: 78, rebounding: 80, athleticism: 78, clutch: 74 }),
      player("Kevin Duckworth", 7, 0, 0, { height: 98, shooting: 74, finishing: 82, handles: 58, passing: 66, defense: 78, rebounding: 80, athleticism: 64, clutch: 78 }),
      player("Wayne Cooper", 6, 10, 31, { height: 94, shooting: 68, finishing: 78, handles: 60, passing: 66, defense: 86, rebounding: 82, athleticism: 80, clutch: 72 }),
      player("Billy Ray Bates", 6, 4, 20, { height: 77, shooting: 82, finishing: 84, handles: 80, passing: 72, defense: 72, rebounding: 60, athleticism: 88, clutch: 80 }),
      player("Jeff Lamp", 6, 6, 15, { height: 82, shooting: 82, finishing: 78, handles: 74, passing: 72, defense: 72, rebounding: 58, athleticism: 74, clutch: 78 }),
    ],
  },
  {
    era: "1980s",
    team: "Suns",
    note: "A perennial playoff team — Walter Davis and Larry Nance early, then Kevin Johnson and Tom Chambers igniting the late-80s revival.",
    players: [
      player("Kevin Johnson", 6, 1, 7, { height: 68, shooting: 80, finishing: 88, handles: 94, passing: 92, defense: 78, rebounding: 56, athleticism: 92, clutch: 86 }),
      player("Larry Nance", 6, 10, 22, { height: 94, shooting: 80, finishing: 90, handles: 70, passing: 72, defense: 88, rebounding: 84, athleticism: 94, clutch: 82 }),
      player("Walter Davis", 6, 6, 6, { height: 82, shooting: 88, finishing: 88, handles: 84, passing: 80, defense: 74, rebounding: 64, athleticism: 90, clutch: 86 }),
      player("Tom Chambers", 6, 10, 24, { height: 94, shooting: 84, finishing: 88, handles: 74, passing: 72, defense: 72, rebounding: 78, athleticism: 82, clutch: 86 }),
      player("Alvan Adams", 6, 9, 33, { height: 90, shooting: 80, finishing: 84, handles: 78, passing: 84, defense: 80, rebounding: 82, athleticism: 80, clutch: 82 }),
      player("Eddie Johnson", 6, 7, 8, { height: 84, shooting: 86, finishing: 84, handles: 78, passing: 72, defense: 70, rebounding: 66, athleticism: 80, clutch: 84 }),
      player("Jeff Hornacek", 6, 4, 14, { height: 77, shooting: 86, finishing: 82, handles: 84, passing: 84, defense: 78, rebounding: 60, athleticism: 78, clutch: 84 }),
      player("Maurice Lucas", 6, 9, 20, { height: 90, shooting: 74, finishing: 84, handles: 68, passing: 74, defense: 86, rebounding: 88, athleticism: 82, clutch: 82 }),
      player("Kyle Macy", 6, 3, 4, { height: 74, shooting: 88, finishing: 78, handles: 84, passing: 82, defense: 78, rebounding: 54, athleticism: 74, clutch: 84 }),
      player("James Edwards", 7, 1, 53, { height: 100, shooting: 74, finishing: 84, handles: 60, passing: 64, defense: 78, rebounding: 78, athleticism: 72, clutch: 76 }),
      player("Mike Sanders", 6, 6, 20, { height: 82, shooting: 74, finishing: 80, handles: 72, passing: 72, defense: 82, rebounding: 66, athleticism: 82, clutch: 74 }),
      player("Armen Gilliam", 6, 9, 5, { height: 90, shooting: 78, finishing: 84, handles: 68, passing: 66, defense: 74, rebounding: 80, athleticism: 82, clutch: 76 }),
      player("Rod Foster", 6, 1, 15, { height: 68, shooting: 80, finishing: 78, handles: 82, passing: 78, defense: 72, rebounding: 50, athleticism: 82, clutch: 76 }),
      player("Mike McGee", 6, 5, 40, { height: 80, shooting: 80, finishing: 80, handles: 74, passing: 68, defense: 70, rebounding: 60, athleticism: 84, clutch: 76 }),
      player("Dennis Johnson", 6, 4, 24, { height: 77, shooting: 78, finishing: 84, handles: 84, passing: 80, defense: 92, rebounding: 66, athleticism: 88, clutch: 88 }),
    ],
  },
  {
    era: "1980s",
    team: "SuperSonics",
    note: "Dale Ellis, Xavier McDaniel, and Tom Chambers turned Seattle into a high-scoring 1987 conference finalist.",
    players: [
      player("Dale Ellis", 6, 7, 3, { height: 84, shooting: 90, finishing: 86, handles: 80, passing: 72, defense: 72, rebounding: 66, athleticism: 84, clutch: 86 }),
      player("Xavier McDaniel", 6, 7, 34, { height: 84, shooting: 78, finishing: 88, handles: 76, passing: 70, defense: 80, rebounding: 84, athleticism: 88, clutch: 82 }),
      player("Tom Chambers", 6, 10, 24, { height: 94, shooting: 84, finishing: 88, handles: 74, passing: 72, defense: 72, rebounding: 80, athleticism: 82, clutch: 84 }),
      player("Jack Sikma", 6, 11, 43, { height: 96, shooting: 82, finishing: 82, handles: 66, passing: 78, defense: 84, rebounding: 88, athleticism: 78, clutch: 84 }),
      player("Gus Williams", 6, 2, 1, { height: 71, shooting: 84, finishing: 86, handles: 90, passing: 82, defense: 84, rebounding: 56, athleticism: 92, clutch: 86 }),
      player("Fred Brown", 6, 3, 32, { height: 74, shooting: 90, finishing: 80, handles: 84, passing: 80, defense: 74, rebounding: 58, athleticism: 78, clutch: 88 }),
      player("Nate McMillan", 6, 5, 10, { height: 80, shooting: 70, finishing: 76, handles: 88, passing: 90, defense: 90, rebounding: 66, athleticism: 82, clutch: 78 }),
      player("Derrick McKey", 6, 9, 30, { height: 90, shooting: 80, finishing: 82, handles: 76, passing: 74, defense: 86, rebounding: 72, athleticism: 84, clutch: 78 }),
      player("Lonnie Shelton", 6, 8, 8, { height: 86, shooting: 70, finishing: 82, handles: 64, passing: 70, defense: 88, rebounding: 84, athleticism: 84, clutch: 78 }),
      player("David Thompson", 6, 4, 33, { height: 77, shooting: 82, finishing: 88, handles: 82, passing: 76, defense: 74, rebounding: 62, athleticism: 96, clutch: 82 }),
      player("Danny Vranes", 6, 7, 4, { height: 84, shooting: 64, finishing: 76, handles: 68, passing: 70, defense: 88, rebounding: 74, athleticism: 86, clutch: 72 }),
      player("Alton Lister", 7, 0, 25, { height: 98, shooting: 62, finishing: 78, handles: 56, passing: 64, defense: 84, rebounding: 82, athleticism: 80, clutch: 70 }),
      player("Reggie King", 6, 6, 43, { height: 82, shooting: 70, finishing: 80, handles: 68, passing: 72, defense: 82, rebounding: 82, athleticism: 80, clutch: 74 }),
      player("Gerald Henderson", 6, 2, 43, { height: 71, shooting: 78, finishing: 80, handles: 84, passing: 80, defense: 82, rebounding: 56, athleticism: 84, clutch: 80 }),
      player("Kevin Williams", 6, 2, 15, { height: 71, shooting: 74, finishing: 78, handles: 82, passing: 78, defense: 82, rebounding: 56, athleticism: 84, clutch: 74 }),
    ],
  },
  {
    era: "1990s",
    team: "Trail Blazers",
    note: "Drexler was Jordan-adjacent in every way except one ring. Portland made two Finals on his back.",
    players: [
      player("Clyde Drexler", 6, 7, 22, { height: 84, shooting: 88, finishing: 88, handles: 90, passing: 86, defense: 88, rebounding: 78, athleticism: 94, clutch: 90 }),
      player("Terry Porter", 6, 3, 30, { height: 74, shooting: 86, finishing: 80, handles: 88, passing: 90, defense: 80, rebounding: 56, athleticism: 80, clutch: 88 }),
      player("Buck Williams", 6, 8, 14, { height: 88, shooting: 70, finishing: 78, handles: 62, passing: 66, defense: 86, rebounding: 92, athleticism: 78, clutch: 74 }),
      player("Jerome Kersey", 6, 7, 25, { height: 84, shooting: 74, finishing: 82, handles: 72, passing: 70, defense: 84, rebounding: 82, athleticism: 88, clutch: 76 }),
      player("Cliff Robinson", 6, 10, 1, { height: 94, shooting: 80, finishing: 80, handles: 74, passing: 70, defense: 80, rebounding: 76, athleticism: 80, clutch: 76 }),
      player("Kevin Duckworth", 7, 0, 00, { height: 98, shooting: 70, finishing: 78, handles: 52, passing: 58, defense: 76, rebounding: 84, athleticism: 64, clutch: 68 }),
      player("Rod Strickland", 6, 3, 10, { height: 74, shooting: 80, finishing: 80, handles: 90, passing: 88, defense: 72, rebounding: 54, athleticism: 82, clutch: 78 }),
      player("Danny Manning", 6, 10, 45, { height: 94, shooting: 80, finishing: 82, handles: 76, passing: 76, defense: 74, rebounding: 78, athleticism: 78, clutch: 78 }),
      player("Arvydas Sabonis", 7, 3, 11, { height: 100, shooting: 78, finishing: 84, handles: 70, passing: 86, defense: 82, rebounding: 86, athleticism: 68, clutch: 80 }),
      player("Rasheed Wallace", 6, 11, 30, { height: 96, shooting: 80, finishing: 86, handles: 74, passing: 74, defense: 88, rebounding: 82, athleticism: 88, clutch: 80 }),
      player("Isaiah Rider", 6, 5, 34, { height: 80, shooting: 84, finishing: 86, handles: 82, passing: 74, defense: 72, rebounding: 64, athleticism: 88, clutch: 80 }),
      player("Damon Stoudamire", 5, 10, 3, { height: 62, shooting: 82, finishing: 78, handles: 90, passing: 86, defense: 70, rebounding: 52, athleticism: 82, clutch: 80 }),
      player("Danny Ainge", 6, 4, 24, { height: 77, shooting: 86, finishing: 80, handles: 82, passing: 82, defense: 76, rebounding: 58, athleticism: 74, clutch: 84 }),
      player("Brian Grant", 6, 9, 55, { height: 90, shooting: 70, finishing: 82, handles: 66, passing: 70, defense: 82, rebounding: 84, athleticism: 86, clutch: 76 }),
      player("Mark Bryant", 6, 9, 2, { height: 90, shooting: 68, finishing: 80, handles: 62, passing: 66, defense: 80, rebounding: 78, athleticism: 80, clutch: 72 }),
    ],
  },
  {
    era: "1990s",
    team: "Pacers",
    note: "Reggie Miller lived rent-free in New York's head. 8 points in 8.9 seconds is still canon.",
    players: [
      player("Reggie Miller", 6, 7, 31, { height: 84, shooting: 96, finishing: 78, handles: 76, passing: 74, defense: 76, rebounding: 56, athleticism: 78, clutch: 98 }),
      player("Mark Jackson", 6, 3, 13, { height: 74, shooting: 78, finishing: 74, handles: 88, passing: 96, defense: 70, rebounding: 58, athleticism: 70, clutch: 80 }),
      player("Rik Smits", 7, 4, 45, { height: 100, shooting: 80, finishing: 84, handles: 60, passing: 66, defense: 80, rebounding: 88, athleticism: 68, clutch: 76 }),
      player("Jalen Rose", 6, 8, 5, { height: 88, shooting: 82, finishing: 82, handles: 80, passing: 78, defense: 72, rebounding: 66, athleticism: 78, clutch: 82 }),
      player("Derrick McKey", 6, 9, 11, { height: 90, shooting: 78, finishing: 78, handles: 72, passing: 74, defense: 86, rebounding: 72, athleticism: 80, clutch: 74 }),
      player("Dale Davis", 6, 11, 34, { height: 96, shooting: 58, finishing: 74, handles: 52, passing: 58, defense: 88, rebounding: 94, athleticism: 82, clutch: 68 }),
      player("Antonio Davis", 6, 9, 54, { height: 90, shooting: 64, finishing: 74, handles: 54, passing: 60, defense: 86, rebounding: 90, athleticism: 76, clutch: 68 }),
      player("Travis Best", 5, 11, 10, { height: 60, shooting: 80, finishing: 76, handles: 84, passing: 80, defense: 76, rebounding: 46, athleticism: 78, clutch: 80 }),
      player("Detlef Schrempf", 6, 10, 32, { height: 94, shooting: 82, finishing: 84, handles: 80, passing: 82, defense: 78, rebounding: 78, athleticism: 80, clutch: 82 }),
      player("Chris Mullin", 6, 7, 17, { height: 84, shooting: 90, finishing: 82, handles: 82, passing: 84, defense: 74, rebounding: 62, athleticism: 74, clutch: 86 }),
      player("Vern Fleming", 6, 5, 10, { height: 80, shooting: 76, finishing: 80, handles: 84, passing: 84, defense: 80, rebounding: 60, athleticism: 80, clutch: 78 }),
      player("Byron Scott", 6, 3, 4, { height: 74, shooting: 84, finishing: 80, handles: 80, passing: 76, defense: 74, rebounding: 56, athleticism: 80, clutch: 82 }),
      player("George McCloud", 6, 7, 34, { height: 84, shooting: 80, finishing: 76, handles: 72, passing: 70, defense: 68, rebounding: 62, athleticism: 74, clutch: 74 }),
      player("LaSalle Thompson", 6, 10, 41, { height: 94, shooting: 66, finishing: 78, handles: 58, passing: 66, defense: 82, rebounding: 80, athleticism: 74, clutch: 72 }),
      player("Haywoode Workman", 6, 2, 21, { height: 71, shooting: 76, finishing: 78, handles: 84, passing: 84, defense: 80, rebounding: 56, athleticism: 80, clutch: 76 }),
    ],
  },
  {
    era: "1990s",
    team: "Spurs",
    note: "David Robinson's prime — an MVP, a DPOY, and then the 1999 title once Tim Duncan arrived to form the Twin Towers.",
    players: [
      player("David Robinson", 7, 1, 50, { height: 100, shooting: 76, finishing: 90, handles: 70, passing: 78, defense: 96, rebounding: 92, athleticism: 94, clutch: 86 }),
      player("Tim Duncan", 6, 11, 21, { height: 96, shooting: 80, finishing: 90, handles: 72, passing: 80, defense: 94, rebounding: 92, athleticism: 84, clutch: 90 }),
      player("Sean Elliott", 6, 8, 32, { height: 86, shooting: 84, finishing: 82, handles: 78, passing: 76, defense: 78, rebounding: 68, athleticism: 80, clutch: 84 }),
      player("Avery Johnson", 5, 11, 6, { height: 64, shooting: 76, finishing: 80, handles: 88, passing: 88, defense: 82, rebounding: 50, athleticism: 82, clutch: 84 }),
      player("Mario Elie", 6, 5, 17, { height: 80, shooting: 82, finishing: 80, handles: 78, passing: 76, defense: 84, rebounding: 60, athleticism: 80, clutch: 86 }),
      player("Vinny Del Negro", 6, 4, 15, { height: 77, shooting: 84, finishing: 80, handles: 82, passing: 80, defense: 76, rebounding: 58, athleticism: 78, clutch: 82 }),
      player("Terry Cummings", 6, 9, 34, { height: 90, shooting: 78, finishing: 84, handles: 72, passing: 70, defense: 78, rebounding: 84, athleticism: 82, clutch: 80 }),
      player("Willie Anderson", 6, 7, 40, { height: 84, shooting: 80, finishing: 82, handles: 82, passing: 80, defense: 82, rebounding: 66, athleticism: 84, clutch: 78 }),
      player("Dennis Rodman", 6, 7, 10, { height: 84, shooting: 52, finishing: 72, handles: 62, passing: 72, defense: 96, rebounding: 100, athleticism: 88, clutch: 80 }),
      player("Chuck Person", 6, 8, 45, { height: 86, shooting: 86, finishing: 80, handles: 74, passing: 72, defense: 72, rebounding: 68, athleticism: 76, clutch: 84 }),
      player("Jaren Jackson", 6, 6, 11, { height: 82, shooting: 82, finishing: 76, handles: 78, passing: 72, defense: 80, rebounding: 58, athleticism: 78, clutch: 78 }),
      player("Antonio Daniels", 6, 4, 33, { height: 77, shooting: 76, finishing: 80, handles: 84, passing: 82, defense: 78, rebounding: 56, athleticism: 84, clutch: 76 }),
      player("Will Perdue", 7, 0, 32, { height: 98, shooting: 60, finishing: 76, handles: 52, passing: 62, defense: 80, rebounding: 80, athleticism: 68, clutch: 70 }),
      player("J.R. Reid", 6, 9, 50, { height: 90, shooting: 70, finishing: 82, handles: 66, passing: 68, defense: 80, rebounding: 78, athleticism: 80, clutch: 74 }),
      player("Doc Rivers", 6, 4, 25, { height: 77, shooting: 78, finishing: 78, handles: 84, passing: 84, defense: 84, rebounding: 58, athleticism: 80, clutch: 80 }),
    ],
  },
  {
    era: "1990s",
    team: "Cavaliers",
    note: "Lenny Wilkens' 57-win Cavs — Mark Price's shooting, Daugherty's skill, and a deep, two-way supporting cast.",
    players: [
      player("Mark Price", 6, 0, 25, { height: 66, shooting: 90, finishing: 80, handles: 90, passing: 88, defense: 70, rebounding: 50, athleticism: 78, clutch: 88 }),
      player("Brad Daugherty", 7, 0, 43, { height: 98, shooting: 76, finishing: 86, handles: 70, passing: 84, defense: 78, rebounding: 86, athleticism: 74, clutch: 82 }),
      player("Larry Nance", 6, 10, 22, { height: 94, shooting: 80, finishing: 88, handles: 70, passing: 72, defense: 90, rebounding: 84, athleticism: 90, clutch: 82 }),
      player("Terrell Brandon", 5, 11, 11, { height: 64, shooting: 84, finishing: 82, handles: 90, passing: 88, defense: 80, rebounding: 54, athleticism: 84, clutch: 84 }),
      player("Hot Rod Williams", 6, 11, 18, { height: 96, shooting: 72, finishing: 82, handles: 62, passing: 68, defense: 86, rebounding: 80, athleticism: 84, clutch: 76 }),
      player("Craig Ehlo", 6, 7, 3, { height: 84, shooting: 78, finishing: 80, handles: 78, passing: 78, defense: 84, rebounding: 64, athleticism: 82, clutch: 78 }),
      player("Tyrone Hill", 6, 9, 4, { height: 90, shooting: 62, finishing: 80, handles: 60, passing: 66, defense: 82, rebounding: 88, athleticism: 84, clutch: 74 }),
      player("Chris Mills", 6, 7, 20, { height: 84, shooting: 80, finishing: 80, handles: 74, passing: 72, defense: 78, rebounding: 68, athleticism: 80, clutch: 76 }),
      player("Bobby Phills", 6, 5, 13, { height: 80, shooting: 78, finishing: 80, handles: 78, passing: 74, defense: 86, rebounding: 60, athleticism: 84, clutch: 78 }),
      player("Danny Ferry", 6, 10, 35, { height: 94, shooting: 82, finishing: 78, handles: 72, passing: 76, defense: 72, rebounding: 66, athleticism: 68, clutch: 78 }),
      player("Steve Kerr", 6, 3, 25, { height: 74, shooting: 90, finishing: 66, handles: 74, passing: 78, defense: 64, rebounding: 50, athleticism: 60, clutch: 84 }),
      player("Gerald Wilkins", 6, 6, 21, { height: 82, shooting: 78, finishing: 82, handles: 80, passing: 74, defense: 80, rebounding: 62, athleticism: 86, clutch: 78 }),
      player("John Battle", 6, 2, 15, { height: 71, shooting: 80, finishing: 80, handles: 80, passing: 74, defense: 72, rebounding: 52, athleticism: 80, clutch: 78 }),
      player("Shawn Kemp", 6, 10, 4, { height: 94, shooting: 74, finishing: 88, handles: 68, passing: 70, defense: 80, rebounding: 86, athleticism: 94, clutch: 80 }),
      player("Mike Sanders", 6, 6, 25, { height: 82, shooting: 74, finishing: 78, handles: 72, passing: 72, defense: 82, rebounding: 64, athleticism: 80, clutch: 74 }),
    ],
  },
  {
    era: "1990s",
    team: "Hawks",
    note: "Lenny Wilkens' 57-win Atlanta — Mookie Blaylock's hounding defense, Mutombo's rim protection, and Dominique's early-decade scoring.",
    players: [
      player("Dominique Wilkins", 6, 8, 21, { height: 86, shooting: 84, finishing: 92, handles: 82, passing: 74, defense: 74, rebounding: 74, athleticism: 92, clutch: 88 }),
      player("Dikembe Mutombo", 7, 2, 55, { height: 100, shooting: 54, finishing: 80, handles: 54, passing: 60, defense: 96, rebounding: 94, athleticism: 84, clutch: 78 }),
      player("Mookie Blaylock", 6, 0, 10, { height: 66, shooting: 78, finishing: 78, handles: 88, passing: 88, defense: 92, rebounding: 58, athleticism: 88, clutch: 80 }),
      player("Steve Smith", 6, 8, 8, { height: 86, shooting: 84, finishing: 82, handles: 82, passing: 80, defense: 78, rebounding: 64, athleticism: 82, clutch: 84 }),
      player("Kevin Willis", 7, 0, 42, { height: 98, shooting: 74, finishing: 82, handles: 64, passing: 64, defense: 78, rebounding: 92, athleticism: 84, clutch: 76 }),
      player("Stacey Augmon", 6, 8, 2, { height: 86, shooting: 68, finishing: 84, handles: 78, passing: 74, defense: 88, rebounding: 68, athleticism: 90, clutch: 76 }),
      player("Christian Laettner", 6, 11, 32, { height: 96, shooting: 82, finishing: 84, handles: 74, passing: 76, defense: 74, rebounding: 82, athleticism: 74, clutch: 80 }),
      player("Craig Ehlo", 6, 7, 3, { height: 84, shooting: 78, finishing: 80, handles: 78, passing: 78, defense: 84, rebounding: 64, athleticism: 80, clutch: 78 }),
      player("Tyrone Corbin", 6, 6, 23, { height: 82, shooting: 74, finishing: 78, handles: 72, passing: 72, defense: 84, rebounding: 72, athleticism: 80, clutch: 74 }),
      player("Jon Koncak", 7, 0, 53, { height: 98, shooting: 60, finishing: 74, handles: 54, passing: 64, defense: 82, rebounding: 78, athleticism: 72, clutch: 70 }),
      player("Duane Ferrell", 6, 7, 35, { height: 84, shooting: 74, finishing: 80, handles: 72, passing: 70, defense: 76, rebounding: 66, athleticism: 84, clutch: 74 }),
      player("Ken Norman", 6, 8, 4, { height: 86, shooting: 76, finishing: 82, handles: 72, passing: 72, defense: 78, rebounding: 74, athleticism: 84, clutch: 74 }),
      player("Grant Long", 6, 8, 44, { height: 86, shooting: 72, finishing: 78, handles: 68, passing: 72, defense: 84, rebounding: 78, athleticism: 80, clutch: 74 }),
      player("Spud Webb", 5, 7, 4, { height: 56, shooting: 78, finishing: 80, handles: 90, passing: 86, defense: 78, rebounding: 46, athleticism: 94, clutch: 80 }),
      player("Doc Rivers", 6, 4, 25, { height: 77, shooting: 78, finishing: 80, handles: 84, passing: 84, defense: 86, rebounding: 60, athleticism: 82, clutch: 80 }),
    ],
  },
  {
    era: "1990s",
    team: "Hornets",
    note: "Expansion Charlotte grew fast — Larry Johnson and Mourning's young muscle, Mugsy and Dell Curry, then Glen Rice's scoring.",
    players: [
      player("Alonzo Mourning", 6, 10, 33, { height: 94, shooting: 74, finishing: 88, handles: 64, passing: 66, defense: 94, rebounding: 84, athleticism: 88, clutch: 84 }),
      player("Larry Johnson", 6, 6, 2, { height: 82, shooting: 80, finishing: 88, handles: 82, passing: 80, defense: 80, rebounding: 84, athleticism: 90, clutch: 84 }),
      player("Glen Rice", 6, 8, 41, { height: 86, shooting: 92, finishing: 84, handles: 78, passing: 72, defense: 70, rebounding: 64, athleticism: 78, clutch: 88 }),
      player("Muggsy Bogues", 5, 3, 1, { height: 50, shooting: 74, finishing: 72, handles: 92, passing: 92, defense: 84, rebounding: 44, athleticism: 88, clutch: 80 }),
      player("Dell Curry", 6, 4, 30, { height: 77, shooting: 90, finishing: 80, handles: 80, passing: 74, defense: 72, rebounding: 56, athleticism: 80, clutch: 86 }),
      player("Anthony Mason", 6, 7, 14, { height: 84, shooting: 72, finishing: 82, handles: 82, passing: 82, defense: 84, rebounding: 84, athleticism: 82, clutch: 80 }),
      player("Vlade Divac", 7, 1, 12, { height: 100, shooting: 74, finishing: 82, handles: 70, passing: 86, defense: 80, rebounding: 82, athleticism: 70, clutch: 80 }),
      player("David Wesley", 6, 1, 7, { height: 68, shooting: 80, finishing: 80, handles: 84, passing: 80, defense: 82, rebounding: 54, athleticism: 82, clutch: 82 }),
      player("Kendall Gill", 6, 5, 13, { height: 80, shooting: 78, finishing: 82, handles: 82, passing: 78, defense: 84, rebounding: 62, athleticism: 88, clutch: 78 }),
      player("Hersey Hawkins", 6, 3, 33, { height: 74, shooting: 88, finishing: 80, handles: 78, passing: 76, defense: 82, rebounding: 58, athleticism: 78, clutch: 82 }),
      player("Scott Burrell", 6, 7, 24, { height: 84, shooting: 80, finishing: 80, handles: 74, passing: 72, defense: 80, rebounding: 66, athleticism: 84, clutch: 76 }),
      player("Bobby Phills", 6, 5, 13, { height: 80, shooting: 78, finishing: 80, handles: 78, passing: 74, defense: 86, rebounding: 60, athleticism: 84, clutch: 78 }),
      player("Kenny Gattison", 6, 8, 44, { height: 86, shooting: 68, finishing: 80, handles: 64, passing: 66, defense: 80, rebounding: 76, athleticism: 80, clutch: 72 }),
      player("Matt Geiger", 7, 0, 45, { height: 98, shooting: 72, finishing: 80, handles: 60, passing: 64, defense: 78, rebounding: 80, athleticism: 74, clutch: 74 }),
      player("J.R. Reid", 6, 9, 34, { height: 90, shooting: 70, finishing: 82, handles: 66, passing: 68, defense: 78, rebounding: 76, athleticism: 80, clutch: 74 }),
    ],
  },
  {
    era: "1990s",
    team: "Heat",
    note: "Pat Riley's late-90s Miami — Mourning's defense, Hardaway's crossover, and a hard-nosed 61-win core.",
    players: [
      player("Alonzo Mourning", 6, 10, 33, { height: 94, shooting: 76, finishing: 88, handles: 64, passing: 66, defense: 96, rebounding: 86, athleticism: 88, clutch: 84 }),
      player("Tim Hardaway", 6, 0, 10, { height: 66, shooting: 84, finishing: 82, handles: 96, passing: 90, defense: 78, rebounding: 52, athleticism: 86, clutch: 88 }),
      player("Glen Rice", 6, 8, 41, { height: 86, shooting: 90, finishing: 84, handles: 78, passing: 72, defense: 70, rebounding: 64, athleticism: 80, clutch: 88 }),
      player("Jamal Mashburn", 6, 8, 24, { height: 86, shooting: 82, finishing: 86, handles: 82, passing: 78, defense: 72, rebounding: 72, athleticism: 80, clutch: 82 }),
      player("P.J. Brown", 6, 11, 42, { height: 96, shooting: 72, finishing: 80, handles: 64, passing: 70, defense: 86, rebounding: 82, athleticism: 82, clutch: 78 }),
      player("Dan Majerle", 6, 6, 9, { height: 82, shooting: 84, finishing: 78, handles: 76, passing: 76, defense: 84, rebounding: 64, athleticism: 80, clutch: 82 }),
      player("Voshon Lenard", 6, 4, 2, { height: 77, shooting: 84, finishing: 78, handles: 78, passing: 72, defense: 74, rebounding: 56, athleticism: 78, clutch: 80 }),
      player("Steve Smith", 6, 8, 8, { height: 86, shooting: 82, finishing: 82, handles: 82, passing: 80, defense: 76, rebounding: 62, athleticism: 82, clutch: 82 }),
      player("Rony Seikaly", 6, 11, 4, { height: 96, shooting: 68, finishing: 84, handles: 62, passing: 66, defense: 80, rebounding: 86, athleticism: 82, clutch: 76 }),
      player("Bimbo Coles", 6, 2, 12, { height: 71, shooting: 78, finishing: 78, handles: 84, passing: 82, defense: 80, rebounding: 54, athleticism: 82, clutch: 78 }),
      player("Sherman Douglas", 6, 0, 20, { height: 66, shooting: 76, finishing: 80, handles: 86, passing: 86, defense: 74, rebounding: 52, athleticism: 80, clutch: 78 }),
      player("Grant Long", 6, 9, 44, { height: 90, shooting: 72, finishing: 80, handles: 68, passing: 72, defense: 84, rebounding: 80, athleticism: 80, clutch: 74 }),
      player("Keith Askins", 6, 8, 40, { height: 86, shooting: 76, finishing: 72, handles: 66, passing: 68, defense: 82, rebounding: 70, athleticism: 80, clutch: 74 }),
      player("Willie Burton", 6, 8, 42, { height: 86, shooting: 78, finishing: 80, handles: 72, passing: 70, defense: 72, rebounding: 68, athleticism: 80, clutch: 76 }),
      player("Kevin Edwards", 6, 3, 20, { height: 74, shooting: 78, finishing: 80, handles: 82, passing: 78, defense: 78, rebounding: 58, athleticism: 82, clutch: 76 }),
    ],
  },
  {
    era: "1990s",
    team: "Lakers",
    note: "From the post-Showtime years to the arrival of Shaq and a teenage Kobe — a franchise reloading into a dynasty.",
    players: [
      player("Shaquille O'Neal", 7, 1, 34, { height: 100, shooting: 58, finishing: 96, handles: 68, passing: 76, defense: 88, rebounding: 92, athleticism: 96, clutch: 84 }),
      player("Kobe Bryant", 6, 6, 8, { height: 82, shooting: 84, finishing: 88, handles: 88, passing: 78, defense: 84, rebounding: 64, athleticism: 94, clutch: 88 }),
      player("Eddie Jones", 6, 6, 6, { height: 82, shooting: 84, finishing: 84, handles: 80, passing: 78, defense: 88, rebounding: 64, athleticism: 90, clutch: 80 }),
      player("Nick Van Exel", 6, 1, 9, { height: 68, shooting: 82, finishing: 80, handles: 90, passing: 86, defense: 72, rebounding: 54, athleticism: 80, clutch: 84 }),
      player("Vlade Divac", 7, 1, 12, { height: 100, shooting: 72, finishing: 82, handles: 70, passing: 86, defense: 80, rebounding: 82, athleticism: 72, clutch: 78 }),
      player("Sedale Threatt", 6, 2, 3, { height: 71, shooting: 82, finishing: 80, handles: 84, passing: 80, defense: 82, rebounding: 54, athleticism: 84, clutch: 78 }),
      player("James Worthy", 6, 9, 42, { height: 90, shooting: 80, finishing: 90, handles: 82, passing: 78, defense: 80, rebounding: 74, athleticism: 88, clutch: 90 }),
      player("Elden Campbell", 6, 11, 41, { height: 96, shooting: 70, finishing: 82, handles: 64, passing: 68, defense: 84, rebounding: 80, athleticism: 82, clutch: 74 }),
      player("Cedric Ceballos", 6, 7, 4, { height: 84, shooting: 80, finishing: 86, handles: 76, passing: 70, defense: 70, rebounding: 74, athleticism: 84, clutch: 78 }),
      player("Robert Horry", 6, 9, 5, { height: 90, shooting: 80, finishing: 80, handles: 74, passing: 76, defense: 84, rebounding: 76, athleticism: 82, clutch: 90 }),
      player("Rick Fox", 6, 7, 17, { height: 84, shooting: 78, finishing: 80, handles: 78, passing: 78, defense: 82, rebounding: 64, athleticism: 80, clutch: 80 }),
      player("Sam Perkins", 6, 9, 14, { height: 90, shooting: 82, finishing: 80, handles: 70, passing: 74, defense: 78, rebounding: 80, athleticism: 74, clutch: 82 }),
      player("Byron Scott", 6, 3, 4, { height: 74, shooting: 86, finishing: 82, handles: 80, passing: 78, defense: 76, rebounding: 58, athleticism: 82, clutch: 84 }),
      player("A.C. Green", 6, 9, 45, { height: 90, shooting: 70, finishing: 80, handles: 62, passing: 68, defense: 84, rebounding: 86, athleticism: 80, clutch: 78 }),
      player("Derek Fisher", 6, 1, 2, { height: 68, shooting: 80, finishing: 76, handles: 82, passing: 80, defense: 80, rebounding: 52, athleticism: 78, clutch: 84 }),
    ],
  },
  {
    era: "2000s",
    team: "Cavaliers",
    note: "The Witness era. LeBron dragged a roster of role players to the 2007 Finals on pure will.",
    players: [
      player("LeBron James", 6, 8, 23, { height: 88, shooting: 84, finishing: 96, handles: 92, passing: 96, defense: 88, rebounding: 86, athleticism: 98, clutch: 92 }),
      player("Zydrunas Ilgauskas", 7, 3, 11, { height: 100, shooting: 76, finishing: 82, handles: 54, passing: 68, defense: 82, rebounding: 90, athleticism: 64, clutch: 76 }),
      player("Daniel Gibson", 6, 2, 1, { height: 72, shooting: 84, finishing: 76, handles: 78, passing: 74, defense: 72, rebounding: 50, athleticism: 76, clutch: 86 }),
      player("Larry Hughes", 6, 5, 4, { height: 80, shooting: 78, finishing: 80, handles: 80, passing: 74, defense: 82, rebounding: 58, athleticism: 84, clutch: 74 }),
      player("Drew Gooden", 6, 10, 90, { height: 94, shooting: 76, finishing: 78, handles: 62, passing: 64, defense: 72, rebounding: 86, athleticism: 76, clutch: 72 }),
      player("Anderson Varejao", 6, 10, 17, { height: 94, shooting: 62, finishing: 72, handles: 58, passing: 64, defense: 82, rebounding: 88, athleticism: 80, clutch: 68 }),
      player("Donyell Marshall", 6, 9, 2, { height: 90, shooting: 82, finishing: 76, handles: 66, passing: 66, defense: 68, rebounding: 80, athleticism: 76, clutch: 76 }),
      player("Sasha Pavlovic", 6, 6, 9, { height: 82, shooting: 76, finishing: 74, handles: 70, passing: 68, defense: 72, rebounding: 60, athleticism: 76, clutch: 70 }),
    ],
  },
  {
    era: "2000s",
    team: "Raptors",
    note: "Half Man, Half Amazing. Vince Carter put the Raptors on the map and left a crater-shaped exit. The dunks live forever.",
    players: [
      player("Vince Carter", 6, 6, 15, { height: 82, shooting: 88, finishing: 90, handles: 82, passing: 74, defense: 74, rebounding: 64, athleticism: 98, clutch: 86 }),
      player("Antonio Davis", 6, 9, 54, { height: 90, shooting: 64, finishing: 74, handles: 52, passing: 60, defense: 86, rebounding: 90, athleticism: 74, clutch: 66 }),
      player("Morris Peterson", 6, 7, 24, { height: 84, shooting: 82, finishing: 80, handles: 72, passing: 70, defense: 76, rebounding: 64, athleticism: 82, clutch: 78 }),
      player("Alvin Williams", 6, 5, 7, { height: 80, shooting: 78, finishing: 74, handles: 84, passing: 82, defense: 78, rebounding: 54, athleticism: 80, clutch: 76 }),
      player("Keon Clark", 6, 11, 5, { height: 96, shooting: 62, finishing: 74, handles: 52, passing: 56, defense: 84, rebounding: 86, athleticism: 86, clutch: 62 }),
      player("Dell Curry", 6, 5, 30, { height: 80, shooting: 90, finishing: 76, handles: 72, passing: 72, defense: 68, rebounding: 52, athleticism: 72, clutch: 84 }),
      player("Chris Childs", 6, 3, 2, { height: 74, shooting: 74, finishing: 70, handles: 80, passing: 82, defense: 76, rebounding: 52, athleticism: 74, clutch: 74 }),
      player("Jerome Williams", 6, 9, 6, { height: 90, shooting: 62, finishing: 70, handles: 58, passing: 60, defense: 80, rebounding: 86, athleticism: 80, clutch: 64 }),
    ],
  },
  {
    era: "2010s",
    team: "Rockets",
    note: "James Harden scored 60 points while barely leaving the three-point line. Nobody solved the step-back.",
    players: [
      player("James Harden", 6, 5, 13, { height: 80, shooting: 94, finishing: 88, handles: 96, passing: 92, defense: 68, rebounding: 74, athleticism: 82, clutch: 94 }),
      player("Chris Paul", 6, 0, 3, { height: 67, shooting: 86, finishing: 82, handles: 98, passing: 99, defense: 90, rebounding: 60, athleticism: 82, clutch: 94 }),
      player("Clint Capela", 6, 10, 15, { height: 94, shooting: 62, finishing: 84, handles: 54, passing: 58, defense: 88, rebounding: 96, athleticism: 90, clutch: 70 }),
      player("Eric Gordon", 6, 4, 10, { height: 77, shooting: 88, finishing: 82, handles: 78, passing: 70, defense: 72, rebounding: 54, athleticism: 80, clutch: 84 }),
      player("Trevor Ariza", 6, 8, 1, { height: 88, shooting: 80, finishing: 76, handles: 72, passing: 72, defense: 84, rebounding: 68, athleticism: 82, clutch: 74 }),
      player("PJ Tucker", 6, 5, 17, { height: 80, shooting: 78, finishing: 74, handles: 66, passing: 66, defense: 88, rebounding: 76, athleticism: 80, clutch: 76 }),
      player("Russell Westbrook", 6, 3, 0, { height: 74, shooting: 78, finishing: 88, handles: 92, passing: 86, defense: 82, rebounding: 82, athleticism: 98, clutch: 88 }),
      player("Ryan Anderson", 6, 10, 33, { height: 94, shooting: 86, finishing: 72, handles: 64, passing: 66, defense: 64, rebounding: 78, athleticism: 68, clutch: 74 }),
    ],
  },
  {
    era: "2010s",
    team: "Bulls",
    note: "Rose won MVP at 22 and was the most electric point guard in the league. Then the knee happened.",
    players: [
      player("Derrick Rose", 6, 3, 1, { height: 74, shooting: 84, finishing: 92, handles: 96, passing: 88, defense: 76, rebounding: 62, athleticism: 98, clutch: 90 }),
      player("Joakim Noah", 6, 11, 13, { height: 96, shooting: 64, finishing: 74, handles: 62, passing: 84, defense: 94, rebounding: 96, athleticism: 80, clutch: 78 }),
      player("Luol Deng", 6, 9, 9, { height: 90, shooting: 82, finishing: 80, handles: 74, passing: 74, defense: 88, rebounding: 74, athleticism: 80, clutch: 80 }),
      player("Carlos Boozer", 6, 9, 5, { height: 90, shooting: 80, finishing: 84, handles: 68, passing: 72, defense: 70, rebounding: 90, athleticism: 76, clutch: 78 }),
      player("Kyle Korver", 6, 7, 26, { height: 84, shooting: 94, finishing: 70, handles: 68, passing: 70, defense: 70, rebounding: 58, athleticism: 70, clutch: 80 }),
      player("Taj Gibson", 6, 9, 22, { height: 90, shooting: 68, finishing: 76, handles: 60, passing: 62, defense: 84, rebounding: 84, athleticism: 82, clutch: 72 }),
      player("Richard Hamilton", 6, 6, 32, { height: 82, shooting: 86, finishing: 82, handles: 76, passing: 74, defense: 76, rebounding: 56, athleticism: 78, clutch: 86 }),
      player("Ronnie Brewer", 6, 6, 11, { height: 82, shooting: 76, finishing: 76, handles: 74, passing: 70, defense: 82, rebounding: 62, athleticism: 82, clutch: 70 }),
    ],
  },
  {
    era: "2020s",
    team: "Suns",
    note: "Phoenix hadn't been to the Finals in 28 years. CP3 and Booker nearly ended that drought in 2021.",
    players: [
      player("Devin Booker", 6, 6, 1, { height: 82, shooting: 96, finishing: 88, handles: 86, passing: 80, defense: 76, rebounding: 62, athleticism: 82, clutch: 96 }),
      player("Chris Paul", 6, 0, 3, { height: 67, shooting: 86, finishing: 78, handles: 96, passing: 98, defense: 86, rebounding: 58, athleticism: 76, clutch: 92 }),
      player("Deandre Ayton", 6, 11, 22, { height: 96, shooting: 78, finishing: 88, handles: 66, passing: 72, defense: 84, rebounding: 94, athleticism: 88, clutch: 78 }),
      player("Mikal Bridges", 6, 7, 25, { height: 84, shooting: 84, finishing: 80, handles: 76, passing: 72, defense: 90, rebounding: 64, athleticism: 84, clutch: 78 }),
      player("Cameron Johnson", 6, 8, 23, { height: 88, shooting: 88, finishing: 76, handles: 72, passing: 70, defense: 72, rebounding: 64, athleticism: 78, clutch: 78 }),
      player("Jae Crowder", 6, 6, 99, { height: 82, shooting: 80, finishing: 76, handles: 68, passing: 68, defense: 82, rebounding: 70, athleticism: 76, clutch: 76 }),
      player("Cameron Payne", 6, 2, 15, { height: 72, shooting: 82, finishing: 78, handles: 84, passing: 82, defense: 70, rebounding: 52, athleticism: 78, clutch: 80 }),
      player("Frank Kaminsky", 7, 0, 8, { height: 98, shooting: 80, finishing: 74, handles: 64, passing: 66, defense: 68, rebounding: 76, athleticism: 68, clutch: 68 }),
    ],
  },
  {
    era: "2020s",
    team: "Mavericks",
    note: "Luka does things at 6'7 that shouldn't be possible. Adding Kyrie made the 2024 Finals run feel inevitable.",
    players: [
      player("Luka Doncic", 6, 7, 77, { height: 84, shooting: 94, finishing: 90, handles: 96, passing: 96, defense: 72, rebounding: 86, athleticism: 82, clutch: 96 }),
      player("Kyrie Irving", 6, 2, 11, { height: 72, shooting: 94, finishing: 96, handles: 98, passing: 86, defense: 76, rebounding: 56, athleticism: 92, clutch: 92 }),
      player("PJ Washington", 6, 8, 25, { height: 88, shooting: 84, finishing: 80, handles: 70, passing: 70, defense: 82, rebounding: 80, athleticism: 80, clutch: 78 }),
      player("Daniel Gafford", 6, 11, 12, { height: 96, shooting: 64, finishing: 82, handles: 52, passing: 58, defense: 90, rebounding: 88, athleticism: 90, clutch: 70 }),
      player("Derrick Jones Jr.", 6, 7, 55, { height: 84, shooting: 76, finishing: 80, handles: 72, passing: 66, defense: 84, rebounding: 68, athleticism: 94, clutch: 72 }),
      player("Maxi Kleber", 6, 9, 42, { height: 90, shooting: 82, finishing: 72, handles: 64, passing: 66, defense: 82, rebounding: 72, athleticism: 74, clutch: 70 }),
      player("Tim Hardaway Jr.", 6, 5, 10, { height: 80, shooting: 84, finishing: 78, handles: 76, passing: 68, defense: 68, rebounding: 54, athleticism: 78, clutch: 80 }),
      player("Josh Green", 6, 6, 8, { height: 82, shooting: 78, finishing: 78, handles: 74, passing: 70, defense: 82, rebounding: 64, athleticism: 86, clutch: 72 }),
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
const logoHome = document.querySelector("#logoHome");
const backButton = document.querySelector("#backButton");
const helpButton = document.querySelector("#helpButton");
const helpModal = document.querySelector("#helpModal");
const helpClose = document.querySelector("#helpClose");
const shareModal = document.querySelector("#shareModal");
const shareModalClose = document.querySelector("#shareModalClose");
const shareCardScore = document.querySelector("#shareCardScore");
const shareCardTier = document.querySelector("#shareCardTier");
const shareCardRows = document.querySelector("#shareCardRows");
const shareBtnImage = document.querySelector("#shareBtnImage");
const shareBtnText = document.querySelector("#shareBtnText");
const shareBtnX = document.querySelector("#shareBtnX");
const shareBtnCopy = document.querySelector("#shareBtnCopy");
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

async function generateShareImage() {
  await document.fonts.ready;

  const score = calculateScore();
  const tier = getTier(score);

  const W = 600;
  const HEADER_H = 86;
  const ROW_H = 72;
  const FOOTER_H = 52;
  const H = HEADER_H + ROW_H * 9 + FOOTER_H;

  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  const PAPER = "#f5ecd8";
  const INK = "#151413";
  const GOLD = "#e6b843";
  const MUTED = "rgba(21,20,19,0.5)";
  const COURT = "#c9673d";

  // Background
  ctx.fillStyle = PAPER;
  ctx.fillRect(0, 0, W, H);

  // Border
  ctx.strokeStyle = INK;
  ctx.lineWidth = 5;
  ctx.strokeRect(2.5, 2.5, W - 5, H - 5);

  // Header bar
  ctx.fillStyle = INK;
  ctx.fillRect(0, 0, W, HEADER_H);

  // GOAT LAB label
  ctx.fillStyle = "rgba(255,247,223,0.5)";
  ctx.font = '700 11px "Space Mono", monospace';
  ctx.fillText("GOAT LAB", 20, 34);

  // Mode badge
  ctx.fillStyle = "rgba(255,247,223,0.1)";
  ctx.fillRect(20, 42, gameMode === "blind" ? 88 : 74, 18);
  ctx.fillStyle = "rgba(255,247,223,0.55)";
  ctx.font = '700 9px "Space Mono", monospace';
  ctx.fillText(gameMode === "blind" ? "BLIND MODE" : "CLASSIC", 26, 55);

  // Score (large, right-aligned)
  ctx.fillStyle = GOLD;
  ctx.font = '700 46px "Space Mono", monospace';
  ctx.textAlign = "right";
  ctx.fillText(score, W - 20, 58);

  // Tier label
  ctx.fillStyle = "rgba(255,247,223,0.5)";
  ctx.font = '700 10px "Space Mono", monospace';
  ctx.fillText(tier.toUpperCase(), W - 20, 76);
  ctx.textAlign = "left";

  // Draw logo (already loaded in the page)
  const logoEl = document.querySelector("#logoHome");
  if (logoEl && logoEl.complete) {
    const lh = 62;
    const lw = Math.round(lh * (506 / 460));
    ctx.drawImage(logoEl, W / 2 - lw / 2 - 40, (HEADER_H - lh) / 2, lw, lh);
  }

  // Pick rows
  const orderedValues = attributes.map((attr) => build[attr.key]);
  orderedValues.forEach((pick, i) => {
    if (!pick) return;
    const y = HEADER_H + i * ROW_H;

    // Alternate row tint
    if (i % 2 === 1) {
      ctx.fillStyle = "rgba(21,20,19,0.03)";
      ctx.fillRect(0, y, W, ROW_H);
    }

    // Row divider
    ctx.strokeStyle = "rgba(21,20,19,0.09)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(16, y + ROW_H);
    ctx.lineTo(W - 16, y + ROW_H);
    ctx.stroke();

    // Attribute label
    ctx.fillStyle = MUTED;
    ctx.font = '700 9px "Space Mono", monospace';
    ctx.fillText(pick.attribute.label.toUpperCase(), 20, y + 24);

    // Player name
    ctx.fillStyle = INK;
    ctx.font = '700 17px "Playfair Display", Georgia, serif';
    ctx.fillText(pick.player.name, 20, y + 46);

    // Team/era
    ctx.fillStyle = MUTED;
    ctx.font = '400 10px "Space Mono", monospace';
    ctx.fillText(`${pick.teamEra.era} ${pick.teamEra.team}`, 20, y + 62);

    // Score circle
    const scoreColor = pick.score >= 98 ? GOLD : pick.score >= 94 ? COURT : INK;
    ctx.fillStyle = scoreColor;
    ctx.beginPath();
    ctx.arc(W - 32, y + ROW_H / 2, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = pick.score >= 94 ? INK : PAPER;
    ctx.font = '700 15px "Space Mono", monospace';
    ctx.textAlign = "center";
    ctx.fillText(pick.score, W - 32, y + ROW_H / 2 + 6);
    ctx.textAlign = "left";
  });

  // Footer bar
  const footerY = HEADER_H + ROW_H * 9;
  ctx.fillStyle = INK;
  ctx.fillRect(0, footerY, W, FOOTER_H);

  ctx.fillStyle = PAPER;
  ctx.font = '700 15px "Playfair Display", Georgia, serif';
  ctx.fillText("Can you beat my build?", 20, footerY + 32);

  ctx.fillStyle = GOLD;
  ctx.font = '700 10px "Space Mono", monospace';
  ctx.textAlign = "right";
  ctx.fillText("goat-lab.vercel.app", W - 20, footerY + 32);
  ctx.textAlign = "left";

  return new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
}

function buildShareText(score, tier) {
  const picks = attributes
    .map((attr) => {
      const pick = build[attr.key];
      return `${attr.label}: ${pick.player.name} (${pick.score}) — ${pick.teamEra.era} ${pick.teamEra.team}`;
    })
    .join("\n");
  return `I scored ${score} (${tier}) in GOAT Lab 🏀\n\n${picks}\n\nCan you beat my build? Try to create the GOAT too 👉 https://goat-lab.vercel.app`;
}

function openShareModal() {
  const score = calculateScore();
  const tier = getTier(score);

  shareCardScore.textContent = score;
  shareCardTier.textContent = tier;

  shareCardRows.innerHTML = "";
  attributes.forEach((attr) => {
    const pick = build[attr.key];
    if (!pick) return;
    const row = document.createElement("div");
    row.className = "share-row";
    row.innerHTML = `
      <span class="share-row-attr">${attr.label}</span>
      <span class="share-row-player">${pick.player.name}</span>
      <span class="share-row-meta">${pick.teamEra.era} ${pick.teamEra.team}</span>
      <span class="share-row-score">${pick.score}</span>
    `;
    shareCardRows.appendChild(row);
  });

  shareModal.hidden = false;
}

function shareResult() {
  openShareModal();
}

logoHome.addEventListener("click", () => {
  if (!gameGrid.hidden) goBack();
});
logoHome.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); if (!gameGrid.hidden) goBack(); }
});

modeButtons.forEach((button) => {
  button.addEventListener("click", () => startGame(button.dataset.mode));
});
resetButton.addEventListener("click", reset);
backButton.addEventListener("click", goBack);
shareButton.addEventListener("click", shareResult);

helpButton.addEventListener("click", () => { helpModal.hidden = false; });
helpClose.addEventListener("click", () => { helpModal.hidden = true; });
helpModal.addEventListener("click", (e) => { if (e.target === helpModal) helpModal.hidden = true; });

shareModalClose.addEventListener("click", () => { shareModal.hidden = true; });
shareModal.addEventListener("click", (e) => { if (e.target === shareModal) shareModal.hidden = true; });

shareBtnImage.addEventListener("click", async () => {
  const score = calculateScore();
  const tier = getTier(score);
  const text = `I scored ${score} (${tier}) in GOAT Lab 🏀 Can you beat my build?`;
  const url = "https://goat-lab.vercel.app";
  shareBtnImage.textContent = "Generating…";
  try {
    const blob = await generateShareImage();
    const file = new File([blob], "goat-lab-build.png", { type: "image/png" });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({ files: [file], text, url });
    } else {
      // Desktop fallback: download the image
      const objUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = objUrl;
      a.download = "goat-lab-build.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(objUrl);
    }
  } catch (err) {
    if (err.name !== "AbortError") console.error(err);
  }
  shareBtnImage.textContent = "Share Image";
});

shareBtnText.addEventListener("click", () => {
  const score = calculateScore();
  const tier = getTier(score);
  const msg = encodeURIComponent(
    `I scored ${score} (${tier}) in GOAT Lab 🏀 Can you beat my build? https://goat-lab.vercel.app`
  );
  window.open(`sms:?body=${msg}`, "_self");
});

shareBtnX.addEventListener("click", () => {
  const score = calculateScore();
  const tier = getTier(score);
  const tweet = `I scored ${score} (${tier}) in GOAT Lab 🏀 Can you beat my build? Try to create the GOAT too 👉`;
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}&url=${encodeURIComponent("https://goat-lab.vercel.app")}`,
    "_blank"
  );
});

shareBtnCopy.addEventListener("click", async () => {
  const score = calculateScore();
  const tier = getTier(score);
  try {
    await navigator.clipboard.writeText(buildShareText(score, tier));
    shareBtnCopy.textContent = "Copied!";
    setTimeout(() => { shareBtnCopy.textContent = "Copy"; }, 1400);
  } catch {
    shareBtnCopy.textContent = "Failed";
    setTimeout(() => { shareBtnCopy.textContent = "Copy"; }, 1400);
  }
});

renderBuildList();
updateBody(null);

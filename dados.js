const animes = [
    {
      nome: "Naruto",
      autor: "Masashi Kishimoto",
      ano: 2002,
      descricao: "Naruto Uzumaki é um jovem ninja que sonha em se tornar o Hokage de sua vila. Ele enfrenta desafios e inimigos enquanto busca reconhecimento e amizade. Sua jornada é marcada por treinamento intenso e batalhas épicas.",
      tags: "Ação, Aventura, Ninja, Shonen",
      personagensPrincipais: "Naruto Uzumaki, Sasuke Uchiha, Sakura Haruno, Kakashi Hatake"
    },
    {
      nome: "Dragon Ball Z",/*  */
      autor: "Akira Toriyama",
      ano: 1989,
      descricao: "Goku e seus amigos lutam para proteger a Terra de ameaças poderosas enquanto buscam pelas Esferas do Dragão. A série é famosa por suas batalhas intensas e evolução dos personagens. A luta contra vilões como Freeza e Cell é central para a trama.",
      tags: "Ação, Aventura, Luta, Shonen",
      personagensPrincipais: "Goku, Vegeta, Gohan, Piccolo"
    },
    {
      nome: "One Piece",
      autor: "Eiichiro Oda",
      ano: 1999,
      descricao: "Monkey D. Luffy e sua tripulação viajam pelos mares em busca do tesouro lendário, o One Piece. Eles enfrentam inimigos perigosos e descobrem mistérios do mundo. A série é conhecida por seu extenso elenco de personagens e aventuras épicas.",
      tags: "Ação, Aventura, Piratas, Shonen",
      personagensPrincipais: "Monkey D. Luffy, Roronoa Zoro, Nami, Sanji"
    },
    {
      nome: "Attack on Titan",
      autor: "Hajime Isayama",
      ano: 2013,
      descricao: "A humanidade vive dentro de muralhas para se proteger dos titãs, gigantes que devoram humanos. Eren Yeager e seus amigos se juntam à luta para desvendar os segredos dos titãs e proteger a humanidade. A série mistura ação intensa com intriga e mistério.",
      tags: "Ação, Mistério, Fantasia, Suspense",
      personagensPrincipais: "Eren Yeager, Mikasa Ackerman, Armin Arlert, Levi Ackerman"
    },
    {
      nome: "My Hero Academia",
      autor: "Kohei Horikoshi",
      ano: 2016,
      descricao: "Em um mundo onde a maioria das pessoas possui superpoderes, Izuku Midoriya nasceu sem nenhum poder. Determinado a se tornar um herói, ele entra na renomada U.A. High School. A série explora temas de superação e heroísmo.",
      tags: "Ação, Superpoderes, Escola, Shonen",
      personagensPrincipais: "Izuku Midoriya, Katsuki Bakugo, Ochaco Uraraka, All Might"
    },
    {
      nome: "Death Note",
      autor: "Tsugumi Ohba",
      ano: 2006,
      descricao: "Light Yagami encontra um caderno que lhe permite matar qualquer pessoa ao escrever seu nome nele. Ele decide usar o caderno para eliminar criminosos e criar um mundo ideal, mas enfrenta um detetive misterioso conhecido como L. A série explora a moralidade e o poder absoluto.",
      tags: "Mistério, Suspense, Psicológico, Thriller",
      personagensPrincipais: "Light Yagami, L, Misa Amane, Ryuk"
    },
    {
      nome: "Fullmetal Alchemist: Brotherhood",
      autor: "Hiromu Arakawa",
      ano: 2009,
      descricao: "Os irmãos Edward e Alphonse Elric buscam a Pedra Filosofal para restaurar seus corpos após um fracassado experimento de alquimia. A série é uma mistura de ação, aventura e drama, com uma rica construção de mundo e personagens profundos.",
      tags: "Ação, Aventura, Fantasia, Drama",
      personagensPrincipais: "Edward Elric, Alphonse Elric, Winry Rockbell, Roy Mustang"
    },
    {
      nome: "Cowboy Bebop",
      autor: "Shinichirō Watanabe",
      ano: 1998,
      descricao: "A bordo da nave Bebop, a equipe de caçadores de recompensas viaja pelo espaço em um futuro distópico. A série combina elementos de ficção científica com jazz e temas de solidão e redenção. É conhecida por seu estilo visual e trilha sonora marcantes.",
      tags: "Ficção Científica, Ação, Jazz, Espacial",
      personagensPrincipais: "Spike Spiegel, Jet Black, Faye Valentine, Edward Wong"
    },
    {
      nome: "Neon Genesis Evangelion",
      autor: "Hideaki Anno",
      ano: 1995,
      descricao: "Pilotos enfrentam ameaças alienígenas em mechas gigantes, enquanto a série explora temas psicológicos e filosóficos profundos. As batalhas são intensas e a narrativa é complexa, misturando elementos de ficção científica com introspecção pessoal.",
      tags: "Mecha, Psicológico, Ficção Científica, Drama",
      personagensPrincipais: "Shinji Ikari, Asuka Langley Soryu, Rei Ayanami, Gendo Ikari"
    },
    {
      nome: "Sword Art Online",
      autor: "Rei Kawahara",
      ano: 2012,
      descricao: "Jogadores ficam presos em um jogo de realidade virtual onde morrer no jogo significa morrer na vida real. O protagonista, Kirito, luta para escapar do jogo e salvar seus amigos. A série combina elementos de ação com drama e romance.",
      tags: "Ação, Fantasia, Realidade Virtual, Romance",
      personagensPrincipais: "Kirito, Asuna, Sinon, Leafa"
    }
];

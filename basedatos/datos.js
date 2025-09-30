
// Lista que contiene la información de los elementos que
// se mostrarán en el carrusel de la página principal.
const elementos_carrusel = [
    {
        nombre: " Exclusividad que resalta tu belleza🌸",
        descripcion: "Un collar pensado para brillar contigo.",
        imagen: "images/Portada.png"
    },
    {
        nombre: " Diseños únicos y exclusivos ⚡ ",
        descripcion: "Perlas, colores y un toque dorado . El accesorio ideal para brillar en cualquier ocasión.",
        imagen: "images/Portada2.png"
    },
    {
        nombre: " Collar de temporada 🌟 ",
        descripcion: "Un diseño fresco y elegante que combina perlas y colores, ideal para darle vida a tu estilo.",
        imagen: "images/Portada3.png"
    },
    {
        nombre: " Elige y crea tus accesorios favoritos 💫 ",
        descripcion: "Combina estilos, colores y detalles únicos para llevar siempre un look original.",
        imagen: "images/Portada4.png"
    }
]

const lista_categorias = [
    {
        codigo  : "101",
        nombre: "Collares de temporada",
        imagen: "images/men1.png"
    },
    {
        codigo  : "102",
        nombre: "Collares iniciales",
        imagen: "images/women1.png"
    },
    {
        codigo  : "103",
        nombre: "Brazaletes",
        imagen: "images/brazaletes1.png"
    }
    ,
    {
        codigo  : "104",
        nombre: "Accesorios",
        imagen: "images/brazaletes1.png"
    }
];

// Lista que contiene la información de los cursos que se 
// mostrarán en la página de productos.
const lista_collares = [
    {
        codigo: "1011",
        nombre: "Collares de mar #1",
        descripcion: "Hermosos collares de mar",
        codigo_categoria: "101",
        imagen: "images/men1.png",
        precio: 150000,
        clasificacion: 3,

    },
    {
        codigo: "1012",
        nombre: "Collares de mar #2",
        descripcion: "Hermosos collares de mar",
        codigo_categoria: "101",
        imagen: "images/men2.png",
        precio: 120000,
        clasificacion: 5,

    },
    {
        codigo: "1013",
        nombre: "Collares de tierra #3",
        descripcion: " hermosos collares de mar",
        codigo_categoria: "101",
        imagen: "images/men6.png",
        precio: 140000,
        clasificacion: 5,

    },
    {
        codigo: "1014",
        nombre: "Collares de mar #4",
        descripcion: " hermosos collares de mar",
        codigo_categoria: "101",
        imagen: "images/men4.png",
        precio: 140000,
        clasificacion: 4,

    },
    {
        codigo: "1015",
        nombre: "Collares de mar #5",
        descripcion: "  Hermosos collares de mar",
        codigo_categoria: "101",
        imagen: "images/men5.png",
        precio: 190000,
        clasificacion: 4,

    },
    {
        codigo: "1016",
        nombre: "Collares de mar #6",
        descripcion: "  Hermosos collares de mar",
        codigo_categoria: "101",
        imagen: "images/men6.png",
        precio: 110000,
        clasificacion: 4,

    },
    {
        codigo: "1017",
        nombre: "Collares de mar #7",
        descripcion: "  Hermosos collares de mar",
        codigo_categoria: "101",
        imagen: "images/men7.png",
        precio: 110000,
        clasificacion: 4,

    },
    {
        codigo: "1018",
        nombre: "Collares de mar #8",
        descripcion: "  Hermosos collares de mar",
        codigo_categoria: "101",
        imagen: "images/men8.png",
        precio: 120000,
        clasificacion: 4,

    },
    {
        codigo: "1019",
        nombre: "Collares de mar #9",
        descripcion: "  Hermosos collares de mar",
        codigo_categoria: "101",
        imagen: "images/men9.png",
        precio: 130000,
        clasificacion: 4,

    },
    {
        codigo: "1020",
        nombre: "Collares de mar #10",
        descripcion: "  Hermosos collares de mar",
        codigo_categoria: "101",
        imagen: "images/men10.png",
        precio: 110000,
        clasificacion: 4,

    },
    {
        codigo: "1021",
        nombre: "Collares de mar#11",
        descripcion: " Hermosos collares de mar",
        codigo_categoria: "101",
        imagen: "images/men11.png",
        precio: 120000,
        clasificacion: 4,

    },
    {
        codigo: "1022",
        nombre: "Collares de mar #12",
        descripcion: "Hermosos collares de mar",
        codigo_categoria: "101",
        imagen: "images/men12.png",
        precio: 140000,
        clasificacion: 4,

    },
    {
        codigo: "1023",
        nombre: "Collares de mar #13",
        descripcion: "Hermosos collares de mar",
        codigo_categoria: "101",
        imagen: "images/men3.png",
        precio: 180000,
        clasificacion: 4,

    },
     {
        codigo: "2001",
        nombre: "Collares Iniciales #1",
        descripcion: "  Hermosos collares con la inicial que desees",
        codigo_categoria: "102",
        imagen: "images/iniciales2.png",
        precio: 120000,
        clasificacion: 4,

    },
    {
        codigo: "2002",
        nombre: "Collares Iniciales #2",
        descripcion: "Hermosos collares con la inicial que desees",
        codigo_categoria: "102",
        imagen: "images/iniciales3.png",
        precio: 100000,
        clasificacion: 4,

    },
    {
        codigo: "2003",
        nombre: "Collares Iniciales #3",
        descripcion: " Hermosos collares con la inicial que desees",
        codigo_categoria: "102",
        imagen: "images/iniciales4.png",
        precio: 110000,
        clasificacion: 4,

    },{
        codigo: "2004",
        nombre: "Collares Iniciales #4",
        descripcion: " Hermosos collares con la inicial que desees",
        codigo_categoria: "102",
        imagen: "images/iniciales5.png",
        precio: 110000,
        clasificacion: 4,

    },
    {
        codigo: "2005",
        nombre: "Collares Iniciales #5",
        descripcion: " Hermosos collares con la inicial que desees",
        codigo_categoria: "102",
        imagen: "images/iniciales6.png",
        precio: 110000,
        clasificacion: 4,

    },
    {
        codigo: "2006",
        nombre: "Collares Iniciales #6",
        descripcion: " Hermosos collares con la inicial que desees",
        codigo_categoria: "102",
        imagen: "images/iniciales7.png",
        precio: 110000,
        clasificacion: 4,

    },
     {
        codigo: "3001",
        nombre: "BRAZALETES #1",
        descripcion: "Brazaletes personalizados a tu estilo",
        codigo_categoria: "103",
        imagen: "images/brazaletes1.png",
        precio: 150000,
        clasificacion: 3,

    },
    {
        codigo: "3002",
        nombre: "BRAZALETES #2",
        descripcion: "Brazaletes personalizados a tu estilo",
        codigo_categoria: "103",
        imagen: "images/brazaletes2.png",
        precio: 150000,
        clasificacion: 3,

    },
    {
        codigo: "3003",
        nombre: "BRAZALETES #3",
        descripcion: "Brazaletes personalizados a tu estilo",
        codigo_categoria: "103",
        imagen: "images/brazaletes3.png",
        precio: 150000,
        clasificacion: 3,

    },
    {
        codigo: "3004",
        nombre: "BRAZALETES #4",
        descripcion: " Brazaletes personalizados a tu estilo",
        codigo_categoria: "103",
        imagen: "images/brazaletes4.png",
        precio: 150000,
        clasificacion: 3,

    },
    {
        codigo: "3005",
        nombre: "BRAZALETES #5",
        descripcion: "Brazaletes personalizados a tu estilo",
        codigo_categoria: "103",
        imagen: "images/brazaletes5.png",
        precio: 150000,
        clasificacion: 3,

    },
    {
        codigo: "3006",
        nombre: "BRAZALETES #6",
        descripcion: "Brazaletes personalizados a tu estilo",
        codigo_categoria: "103",
        imagen: "images/brazaletes6.png",
        precio: 120000,
        clasificacion: 5,

    },
    {
        codigo: "3007",
        nombre: "BRAZALETES #7",
        descripcion: " Brazaletes personalizados a tu estilo",
        codigo_categoria: "103",
        imagen: "images/brazaletes7.png",
        precio: 160000,
        clasificacion: 5,

    },
    {
        codigo: "3008",
        nombre: "BRAZALETES #8",
        descripcion: " Brazaletes personalizados a tu estilo",
        codigo_categoria: "103",
        imagen: "images/brazaletes8.png",
        precio: 110000,
        clasificacion: 4,

    },
     {
        codigo: "3010",
        nombre: "BRAZALETES #9",
        descripcion: "  Brazaletes personalizados a tu estilo",
        codigo_categoria: "103",
        imagen: "images/brazaletes9.png",
        precio: 110000,
        clasificacion: 4,

    },
     {
        codigo: "4001",
        nombre: "Accesorios #1",
        descripcion: " accesorios personalizados para tu diario",
        codigo_categoria: "104",
        imagen: "images/pequeñas4.png",
        precio: 110000,
        clasificacion: 4,

    },
     {
        codigo: "4002",
        nombre: "Accesorios #2",
        descripcion: " accesorios personalizados para tu diario",
        codigo_categoria: "104",
        imagen: "images/pequeñas5.png",
        precio: 110000,
        clasificacion: 4,

    },
     {
        codigo: "4003",
        nombre: "Accesorios #3",
        descripcion: " accesorios personalizados para tu diario",
        codigo_categoria: "104",
        imagen: "images/women3.png",
        precio: 110000,
        clasificacion: 4,

    },
     {
        codigo: "4004",
        nombre: "Accesorios #4",
        descripcion: " accesorios personalizados para tu diario",
        codigo_categoria: "104",
        imagen: "images/women4.png",
        precio: 110000,
        clasificacion: 4,

    },
     {
        codigo: "4005",
        nombre: "Accesorios #5",
        descripcion: " accesorios personalizados para tu diario",
        codigo_categoria: "104",
        imagen: "images/women5.png",
        precio: 110000,
        clasificacion: 4,

    },
     {
        codigo: "4006",
        nombre: "Accesorios #6",
        descripcion: " accesorios personalizados para tu diario",
        codigo_categoria: "104",
        imagen: "images/women6.png",
        precio: 110000,
        clasificacion: 4,

    },
     {
        codigo: "4007",
        nombre: "Accesorios #7",
        descripcion: " accesorios personalizados para tu diario",
        codigo_categoria: "104",
        imagen: "images/women7.png",
        precio: 110000,
        clasificacion: 4,

    },
     {
        codigo: "4008",
        nombre: "Accesorios #8",
        descripcion: " accesorios personalizados para tu diario",
        codigo_categoria: "104",
        imagen: "images/pequeñas3.png",
        precio: 110000,
        clasificacion: 4,

    }
];

// Lista que representa el carrito de compras del usuario.  
let carrito = [];
import { category } from "./app/models/categories";
import { Products } from "./app/models/products";
import { vServices } from "./app/models/vservices";
import { hirecategory } from "./app/models/hirecategories";
import { Events } from "./app/models/event";
import { eventcategory } from "./app/models/eventcategories";
export const sample_products:Products[]=[
  {
    id:"1",
    name:"Ice-cream",
    minPrice:5,
    maxPrice:25,
    categories:['food'],
    imageUrl:'assets/cream.jpg',
    description:'we have vanilla, straberry and chocolate',
    vendorid:1
  },
  {
    id:"1",
    name:"Coke",
    minPrice:5,
    maxPrice:25,
    categories:['food'],
    imageUrl:'assets/coke1.jpg',
    description:'we have fanta, sprite and stoney',
    vendorid:1
  },
  {
    id:"1",
    name:"patio chairs",
    minPrice:150,
    maxPrice:300,
    categories:['furniture'],
    imageUrl:'assets/chair.jpg',
    description:'made out of straw',
    vendorid:2
  },
  {
    id:"1",
    name:"kota",
    minPrice:15,
    maxPrice:45,
    categories:['food'],
    imageUrl:'assets/kota.PNG',
    description:'bread with fire ingrediants',
    vendorid:1
  }
]
export const sample_services:vServices[]=[
  {
    id:"1",
    name:"Painter",
    cost:50,
    details:"I paint gates and houses",
    vendorid:1,
    imageUrl:'assets/man2.jpg',
    serviceImageUrl:"assets/ice-cream.jpg",
    categories:['contruction','home improvements','renovations']

  },
  {
    id:"2",
    name:"Housemaid",
    cost:50,
    details:"I clean and iron",
    vendorid:1,
    imageUrl:'assets/cleaner.jpg',
    serviceImageUrl:"assets/ice-cream.jpg",
    categories:['care taking','cleaner']

  },
  {
    id:"3",
    name:"Winter school tutor",
    cost:50,
    details:"I teach math and science grade 12 and grade 11",
    vendorid:1,
    imageUrl:'assets/teach.jpg',
    serviceImageUrl:"assets/ice-cream.jpg",
    categories:['tutor','cleaner']

  },
  {
    id:"4",
    name:"Tree cutter",
    cost:50,
    details:"I cut trees and do some gardening",
    vendorid:1,
    imageUrl:'assets/wood.jpg',
    serviceImageUrl:"assets/ice-cream.jpg",
    categories:['gardening','cleaner']

  },
  {
    id:"5",
    name:"Water Delivery",
    cost:50,
    details:"Jojo tank refills,filtered water e.g. oasis",
    vendorid:1,
    imageUrl:'assets/water.PNG',
    serviceImageUrl:"assets/ice-cream.jpg",
    categories:['delivery','home']

  },
  {
    id:"6",
    name:"Tiler",
    cost:50,
    details:"I install indoor tiles , and make mosaic from old tiles",
    vendorid:1,
    imageUrl:'assets/man.jpg',
    serviceImageUrl:"assets/ice-cream.jpg",
    categories:['construction','home','renovations']

  }
]
export const sample_events:Events[]=[
  {
    id:"1",
    name:"Soccer Tournament",
    kidsAllowed:true,
    kidsPrice:0,
    adultsPrice:0,
    eventActivitites:"Food stalls will present",
    eventDetails:"Tiger Start vs Meeno, timba HS vs Eagles ",
    eventLocation:"Vilagazi sports grounds",
    startDateTime:"12 September 2022, 10:00",
    endDateTime:"12 September 2022, 14:00",
    posterImgUrl:"assets/soccer.jpg",
    hostName:"Mr Benson Maselo",
    specialGuests:['Dj jacks'],
    categories:['sports tournaments'],
    vendorid:1
  },
  {
    id:"2",
    name:"Timba High Open day",
    kidsAllowed:true,
    kidsPrice:0,
    adultsPrice:0,
    eventActivitites:"School Tour",
    eventDetails:" ",
    eventLocation:"Timba High School",
    startDateTime:"16 October 2022, 11:00",
    endDateTime:"16 September 2022, 13:00",
    posterImgUrl:"assets/school.jpg",
    hostName:"Mr Benson Maselo",
    specialGuests:['Dj jacks'],
    categories:['open days'],
    vendorid:71
  },
  {
    id:"3",
    name:"Womans day Celebration",
    kidsAllowed:true,
    kidsPrice:0,
    adultsPrice:0,
    eventActivitites:"Food stalls will present",
    eventDetails:"Tiger Start vs Meeno, timba HS vs Eagles ",
    eventLocation:"Vilagazi sports grounds",
    startDateTime:"12 September 2022, 10:00",
    endDateTime:"12 September 2022, 14:00",
    posterImgUrl:"assets/woman.jpg",
    hostName:"Mr Benson Maselo",
    specialGuests:['Dj jacks'],
    categories:['celebrations'],
    vendorid:4
  },
  {
    id:"4",
    name:"All star comedy night",
    kidsAllowed:false,
    kidsPrice:0,
    adultsPrice:50,
    eventActivitites:"Food stalls will present",
    eventDetails:"Tiger Start vs Meeno, timba HS vs Eagles ",
    eventLocation:"Vilagazi sports grounds",
    startDateTime:"12 September 2022, 10:00",
    endDateTime:"12 September 2022, 14:00",
    posterImgUrl:"assets/comedy.jpg",
    hostName:"Mr Benson Maselo",
    specialGuests:['Kelly Pepppers','Lethabo Maesela','Kevin Jhonson'],
    categories:['sports tournaments'],
    vendorid:55
  },
  {
    id:"4",
    name:"Color fun run",
    kidsAllowed:false,
    kidsPrice:20,
    adultsPrice:70,
    eventActivitites:"Games, racing",
    eventDetails:"Fund raising for HappyHome Ophanage ",
    eventLocation:"Vilagazi sports grounds",
    startDateTime:"12 September 2022, 10:00",
    endDateTime:"12 September 2022, 14:00",
    posterImgUrl:"assets/color.jpg",
    hostName:"Mr Benson Maselo",
    specialGuests:['Kelly Pepppers','Lethabo Maesela','Kevin Jhonson'],
    categories:['competitions','fund raise'],
    vendorid:24
  }
]
export const sample_catergories:category[]=[
  {name:'All',count:4},
  {name:'food',count:3},
  {name:'furniture',count:1}
]
export const sample_hirecatergories:hirecategory[]=[
  {name:'All',count:4},
  {name:'contruction',count:3},
  {name:'home improvements',count:1},
  {name:'renovations',count:6},
  {name:'cleaner',count:27},
  {name:'care taking',count:12}
]
export const sample_eventcategories:eventcategory[]=[
  {name:'All',count:5},
  {name:'sports tournaments',count:1},
  {name:'open days',count:1},
  {name:'competitions',count:0},
  {name:'celebrations',count:1},
  {name:'fund raise',count:1}
]


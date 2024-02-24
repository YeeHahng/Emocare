import Facereg from "../image/FACE.jpg"
import Voicereg from "../image/VOICE.webp"
import Textreg from "../image/TEXT.jpg"

export const MenuList =[
    {
        name: "Face Recognition",
        image: Facereg,
        path:"http://127.0.0.1:5000"   
    },
    {
        name: "Voice Recognition",
        image: Voicereg,
        path:"/voice"
    },
    {
        name: "Text Recognition",
        image: Textreg,
        path:"/text"
    }
]

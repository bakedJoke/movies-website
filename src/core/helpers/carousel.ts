import { getAssetPath } from "./asset";

interface CarouselItem {
  img: string;
  title: string;
  description: string;
}

interface CgvCarousel {
  img: string;
  price: string;
  contents: string;
}

interface OfferCarousel {
  img: string;
}

export const carousels: CarouselItem[] = [
  {
    img: getAssetPath("media/slider/1920x900px_ist__1___1_.jpg"),
    title: 'İstanbulkart Harcamalarına Özel %20 Geri Ödeme!',
    description: 'İstanbulkart Harcamalarına Özel %20 Geri Ödeme!...'
  },
  {
    img: getAssetPath("media/slider/1920x900px_s.jpg"),
    title: 'Sağlık Kahramanlarımıza, Mısır Menülerde ve Biletlerde İndirim!',
    description: 'Sağlık Kahramanlarımıza, Mısır Menülerde ve Biletlerde İndirim!...'
  },
  {
    img: getAssetPath("media/slider/631861691-golden-egg-1920x900.jpg"),
    title: 'Golden Egg ile Geldim Gördüm Puanladım!',
    description: 'İzlediğin filmleri puanla, yorum yap. Mısır ve mısır menülerin tümünde indirim kazan!...'
  },
  {
    img: getAssetPath("media/slider/YAZ_F_LM_1920x900__1_.jpg"),
    title: "Yazın Coşkusu Yaz Film Festivali'nde!",
    description: "Paribu Cineverse'te Yaz Film Festivali Başladı!..."
  }
];

export const cgvCarousel: CgvCarousel[] = [
  // Initialize with actual data
  {
    img: getAssetPath("media/cgvSlider/moviepass-1.jpg"),
    price: "10 TL",
    contents: "Special offer details here"
  },
  {
    img: getAssetPath("media/cgvSlider/moviepass-2.jpg"),
    price: "10 TL",
    contents: "Special offer details here"
  },
  {
    img: getAssetPath("media/cgvSlider/moviepass-3.jpg"),
    price: "10 TL",
    contents: "Special offer details here"
  },
  {
    img: getAssetPath("media/cgvSlider/moviepass-4.jpg"),
    price: "10 TL",
    contents: "Special offer details here"
  },
  {
    img: getAssetPath("media/cgvSlider/moviepass-5.jpg"),
    price: "10 TL",
    contents: "Special offer details here"
  },
];

export const offerCarousel: OfferCarousel[] = [
  // Initialize with actual data
  {
    img: getAssetPath("media/offerSlider/acavip-2024-1720x480px.jpg"),
   
  },
  {
    img: getAssetPath("media/offerSlider/FA626687403-bufe-1720x480.jpg"),
    
  },
  {
    img: getAssetPath("media/offerSlider/Kampanya_Gorsellerinin_Yenilenmesi_1920x420-05.jpg"),
    
  },
  {
    img: getAssetPath("media/offerSlider/ogretmen-kamp-1720x480.jpg"),
   
  },
];
 
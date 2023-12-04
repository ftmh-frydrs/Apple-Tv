import ImageSwiper from '../ImageSwiper';

const ImageSwiperItem = () => {
  const popularImages = [
    "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/c7/56/9b/c7569b64-097c-aafd-5c6b-a4ac85e34c37/24a8f739-ce52-4e5b-b228-604430ddaaa4.png/2640x990sr.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/c5/4c/43/c54c43f8-6132-1a5b-d6f2-b983897fb583/c08c558d-1995-4011-9fff-ce340a3417f7.png/2640x990sr.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/be/a8/e4/bea8e4ac-4e74-8896-0cc8-dcc6da0dfd87/aa60a0f3-7594-4b39-bd91-b7d1cca061c0.png/2640x990sr.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/75/6f/86/756f868d-ce53-c4bc-e476-dfa83e5900c6/8ec160bd-351b-45ed-916c-82c2c1436f30.png/2640x990sr.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/9b/60/40/9b6040e0-ad04-e28f-6a09-faa764511b63/fd63bbbf-7cc5-42e9-b7ad-30988dff1814.png/2640x990sr.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/e6/ab/fc/e6abfc7e-d83c-0b8f-5c7e-465e70e9f661/abef72f1-1001-48b2-a567-3c907b0ffdee.png/2640x990sr.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/f2/10/3f/f2103f9b-069f-0725-4e0c-fbf769f3313e/0e108dc7-8b3f-49c3-b694-2918cbe112f4.png/2640x990sr.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/b8/fb/7c/b8fb7c04-cb3c-d0fd-12b1-f4b9502e07bd/9f12ff4b-1ee9-4ff5-92eb-84ae54ed6318.png/2640x990sr.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/ae/80/2b/ae802b04-f71b-7b14-b7bb-c3fadbbf3014/422ade49-5b70-43cd-bb4b-07d48cb2aa76.png/2640x990sr.webp ",
    "https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/6a/5c/e8/6a5ce872-cfef-46c5-06a3-4c53b50e7be4/df5d860a-de7e-4a52-8e66-2b67c993e84a.png/2640x990sr.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/Features126/v4/12/78/3c/12783cc7-484a-7972-bd9b-aabf823f9148/be0a5994-0dd0-4d23-9689-259af1bf6b9c.png/2640x990sr.webp",
  ];

  return <ImageSwiper images={popularImages} />;
};

export default ImageSwiperItem;

const images =[
    "img1.jpg",
    "img2.jpg",    
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
];
const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
//html에 img라는 요소 생성
bgImage.src =`css/img/${chosenImage}`;
//그 요소가 img폴더 내에 있는 이미지(chosenImage로 정의된 랜덤사진)와 연결
document.body.appendChild(bgImage);
//bgImage를 html파일에 body의 자식으로 추가
//<img src="css/img/img[random].jpg">으로 추가됨
const imageFileInput = document.querySelector('#imageFileInput');
const meme = document.querySelector('#meme');
const topTextInput = document.querySelector('#topTextInput');
const bottomTextInput = document.querySelector('#bottomTextInput');
let image;
imageFileInput.addEventListener('change',(event) => {
  const imageDataUrl = URL.createObjectURL(event.target.files[0]);
  image = new Image();
  image.src = imageDataUrl;
  image.addEventListener('load',() => {
    updateMemeCanvas(meme,image,topTextInput.value,bottomTextInput.value);
  },{once: true});
});
topTextInput.addEventListener('change',() => {
  updateMemeCanvas(meme,image,topTextInput.value,bottomTextInput.value);
});
bottomTextInput.addEventListener('change',() => {
  updateMemeCanvas(meme,image,topTextInput.value,bottomTextInput.value);
});
function updateMemeCanvas(meme,image,topText,bottomText){
  const zim = meme.getContext('2d');
  const width = image.width;
  const height = image.height;
  const fontSize = Math.floor(width / 10);
  const yOffset = height / 25;
  meme.width = width;
  meme.height = height;
  zim.drawImage(image,0,0);
  zim.strokeStyle = 'black';
  zim.lineWidth = Math.floor(fontSize / 4);
  zim.fillStyle = 'white';
  zim.textAlign = 'center';
  zim.lineJoin = 'round';
  zim.fontSize = `${fontSize}px`;
  zim.fontFamily = 'sans-serif';
  zim.textBaseLine = 'top';
  zim.strokeText(topText,width / 2,yOffset);
  zim.fillText(topText,width / 2,yOffset);
  zim.textBaseLine = 'bottom';
  zim.strokeText(bottomText,width / 2,height - yOffset);
  zim.fillText(bottomText,width / 2,height - yOffset);
}
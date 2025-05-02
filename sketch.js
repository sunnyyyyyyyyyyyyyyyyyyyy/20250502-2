let video;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#ccd5ae');

  // 啟用攝影機
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);
  video.hide(); // 隱藏原始的 HTML 視訊元素
}

function draw() {
  background('#ccd5ae');
  
  // 計算影像的寬高，讓其為視窗大小的 80%
  let videoWidth = width * 0.8;
  let videoHeight = height * 0.8;

  // 計算影像的顯示位置，讓其置中
  let x = (width - videoWidth) / 2;
  let y = (height - videoHeight) / 2;

  // 繪製攝影機影像
  image(video, x, y, videoWidth, videoHeight);
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
}

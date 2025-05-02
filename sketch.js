let video;
let graphics;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#ccd5ae');

  // 啟用攝影機
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);
  video.hide(); // 隱藏原始的 HTML 視訊元素

  // 建立與視訊畫面相同大小的圖形緩衝區
  graphics = createGraphics(windowWidth, windowHeight);
  graphics.background(0); // 設定圖形的背景為黑色
}

function draw() {
  background('#ccd5ae');
  
  // 計算影像的寬高，讓其為視窗大小的 80%
  let videoWidth = width * 0.8;
  let videoHeight = height * 0.8;

  // 計算影像的顯示位置，讓其置中
  let x = (width - videoWidth) / 2;
  let y = (height - videoHeight) / 2;

  // 更新 graphics 的內容
  graphics.background(0); // 重設背景為黑色
  for (let i = 0; i < graphics.width; i += 20) {
    for (let j = 0; j < graphics.height; j += 20) {
      // 從 video 中取得相對應位置的顏色
      let col = video.get(i, j);
      graphics.fill(col); // 使用相對應位置的顏色作為方框顏色
      graphics.noStroke();
      graphics.rect(i, j, 18, 18); // 繪製方框

      // 在方框中間繪製黑色圓
      graphics.fill(0); // 黑色
      graphics.ellipse(i + 9, j + 9, 5, 5); // 圓心位於方框中心
    }
  }

  // 翻轉畫布以修正左右顛倒的影像
  push();
  translate(width, 0); // 將畫布的原點移到右上角
  scale(-1, 1); // 水平翻轉畫布
  image(video, x, y, videoWidth, videoHeight);
  pop();

  // 在視訊畫面上方顯示圖形
  image(graphics, x, y, videoWidth, videoHeight);
}

function windowResized() {
  // 當視窗大小改變時，重新調整畫布大小
  resizeCanvas(windowWidth, windowHeight);
  graphics.resizeCanvas(windowWidth, windowHeight); // 調整圖形緩衝區大小
}

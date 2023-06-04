import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  currentImageIndex: number = 0;
  previousImageIndex: number | undefined;
  images: string[] = [
    'https://c4.wallpaperflare.com/wallpaper/701/607/601/garen-league-of-legends-darius-league-of-legends-digital-art-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/271/100/957/league-of-legends-darius-digital-art-noxus-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/476/185/288/league-of-legends-lol-ahri-draven-wallpaper-preview.jpg'
  ];
  isBannerVisible: boolean = true;

  ngOnInit() {
    setInterval(() => {
      this.showNextImage();
    }, 5000); // Chuyển đổi ảnh sau mỗi 5 giây (5000ms)
  }

  showPreviousImage() {
    if (this.currentImageIndex > 0) {
      this.previousImageIndex = this.currentImageIndex;
      this.currentImageIndex--;
    } else {
      this.previousImageIndex = this.images.length - 1;
      this.currentImageIndex = 0;
    }
  }

  showNextImage() {
    if (this.currentImageIndex < this.images.length - 1) {
      this.previousImageIndex = this.currentImageIndex;
      this.currentImageIndex++;
    } else {
      this.previousImageIndex = this.currentImageIndex;
      this.currentImageIndex = 0;
    }
  }
}

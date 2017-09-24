import { Injectable } from '@angular/core'


@Injectable()
export class ImageService{
  visibleImages = [];
  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }

getImage(id: number){
  return IMAGES.slice(0).find(image => image.id == id)
}
}
const IMAGES = [
{"id": 1, "category": "boats", "caption": "view from","url":"assets/images/Impressive Ultra HD Landscape Wallpaper (1).jpg"},
{"id": 2, "category": "boats", "caption": "view from","url":"assets/images/Impressive Ultra HD Landscape Wallpaper (2).jpg"},
{"id": 3, "category": "boats", "caption": "view from","url":"assets/images/Impressive Ultra HD Landscape Wallpaper (3).jpg"},
{"id": 4, "category": "boats", "caption": "view from","url":"assets/images/Impressive Ultra HD Landscape Wallpaper (4).jpg"},
{"id": 5,  "category": "boats", "caption": "view from","url":"assets/images/Impressive Ultra HD Landscape Wallpaper (5).jpg"},
{"id": 6, "category": "boats", "caption": "view from","url":"assets/images/Impressive Ultra HD Landscape Wallpaper (6).jpg"},
{"id": 7, "category": "boats", "caption": "view from","url":"assets/images/Impressive Ultra HD Landscape Wallpaper (7).jpg"},
{"id": 8, "category": "boats", "caption": "view from","url":"assets/images/Impressive Ultra HD Landscape Wallpaper (8).jpg"},
{"id": 9, "category": "boats", "caption": "view from","url":"assets/images/Impressive Ultra HD Landscape Wallpaper (9).jpg"},
{"id": 10, "category": "boats", "caption": "view from","url":"assets/images/Impressive Ultra HD Landscape Wallpaper (10).jpg"},
{"id": 11, "category": "boats", "caption": "view from","url":"assets/images/Impressive Ultra HD Landscape Wallpaper (11).jpg"},
{"id": 12, "category": "boats", "caption": "view from","url":"assets/images/Impressive Ultra HD Landscape Wallpaper (12).jpg"},
{"id": 13, "category": "boats", "caption": "view from","url":"assets/images/Impressive Ultra HD Landscape Wallpaper (13).jpg"},
{"id": 14, "category": "boats", "caption": "view from","url":"assets/images/Impressive Ultra HD Landscape Wallpaper (14).jpg"},
{"id": 15, "category": "boats", "caption": "view from","url":"assets/images/Impressive Ultra HD Landscape Wallpaper (15).jpg"},
{"id": 16, "category": "boats", "caption": "view from","url":"assets/images/Impressive Ultra HD Landscape Wallpaper (16).jpg"},
{"id": 17, "category": "boats", "caption": "view from","url":"assets/images/Impressive Ultra HD Landscape Wallpaper (17).jpg"},
{"id": 18, "category": "boats", "caption": "view from","url":"assets/images/Impressive Ultra HD Landscape Wallpaper (18).jpg"},
{"id": 19, "category": "boats", "caption": "view from","url":"assets/images/Impressive Ultra HD Landscape Wallpaper (19).jpg"},
{"id": 20, "category": "boats", "caption": "view from","url":"assets/images/Impressive Ultra HD Landscape Wallpaper (20).jpg"},
{"id": 21, "category": "boats", "caption": "view from","url":"assets/images/Impressive Ultra HD Landscape Wallpaper (21).jpg"}
]

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  private name: String[];
  private pic: String[];

  constructor() { }

  ngOnInit() {

    this.name = ["Gintama","One piece","Naruto","Boruto","SAO",
                 "One Punch Man","Gon","Dragonball", "Doraemon","Log Horizon","Black Clover",
                "Black Bullet"];

    this.pic = ["http://www.zone-anime.net/wp-content/uploads/2017/01/83528l.jpg"
      , "https://vignette3.wikia.nocookie.net/onepiece/images/f/f7/We_Can%21.png/revision/latest?cb=20160822112152"
      , "https://images3.alphacoders.com/135/thumb-1920-135625.jpg"
      , "https://dw9to29mmj727.cloudfront.net/promo/2016/5793-SeriesHeader_Boruto_2000x800.jpg"
      , "http://cdn.playbuzz.com/cdn/27d245f7-85de-41ea-bdd8-aa950545e523/b048eb37-d60d-40c7-b21c-ed507facc77c.jpg"
      , "https://metaphysicsspeaks.com/wp-content/uploads/2017/08/viz-blog_saitama.jpg"
      , "http://comicsalliance.com/files/2012/03/gonposter.png?w=600&h=0&zc=1&s=0&a=t&q=89"
      , "http://ll-c.ooyala.com/e1/9pMXluYjE6hq_TAb2BMb5whddzh4hxsT/promo324685318"
      , "http://www.ilovejapantours.com/images/easyblog_articles/6/doraemon-gadget-cat-from-the-future-wallpaper-4.jpg"
      , "https://vignette.wikia.nocookie.net/log-horizon/images/9/93/Character_Slider.jpg/revision/latest/scale-to-width-down/670?cb=20131223020851"
      , "http://vignette1.wikia.nocookie.net/blackclover/images/7/74/Black_Clover_Jump_Next_2015-06_Poster.png/revision/latest?cb=20160306093412"
      , "https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Black_Bullet_Blu-ray_Cover.png/230px-Black_Bullet_Blu-ray_Cover.png"

    ];
  }

}

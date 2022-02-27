import {Component, HostListener, OnInit} from '@angular/core';
import {LoginService} from "./login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// @HostListener('window:scroll');
export class AppComponent implements OnInit{
  
  title = 'Chrome-Extension-Like-Muszli-main';
  isLogin=false;
  loginData:any;
  showMore:boolean=false;
  public scrollEffect:boolean=true;
  favArtcile:false;
  fFilter:boolean=false;
  newsApiFlag:any;
  isShow: boolean;
  topPosToStartShowing = 100;
 
  
  // @HostListener('window:scroll')
  constructor(private loginService: LoginService) {
  }
  
  ngOnInit() {
    if(localStorage.getItem("userId")){
      this.isLogin=true;
      this.loginService.logedUser(localStorage.getItem("userId")).subscribe((response)=>{
        console.log(response);
        let loginData={
          email:String,
          name:String,
          provider:String,
          photoUrl:String
        };
        loginData.email=response.data.email;
        loginData.name=response.data.name;
        loginData.photoUrl=response.data.picture.replaceAll("&#x2F;","/");
        loginData.provider=response.data.provder;
        this.sendLoginData(loginData);
      });
      // this.sendLoginData(user);
    }
  }

  // for scroll bottom to top
  checkScroll() {
      
    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  sendLoginData=(data)=>{
    this.loginData=data;
    this.isLogin=true;
  }
  sendShowMore=(data)=>{
    this.showMore=data;
  }
  loginManage=(data)=>{
    this.isLogin=data;
  }

  favoriteArticle=(event)=>{
    this.favArtcile=event;
    }
  newsApiManage=(event)=>{
    this.newsApiFlag=event;
  }
}

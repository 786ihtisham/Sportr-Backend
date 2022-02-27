import { Component, Input, OnInit, OnChanges, HostListener, Output, EventEmitter } from '@angular/core';
import { ArticleService } from "../article.service";
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
declare const $: any;

@Component({
  selector: 'app-sports-ads',
  templateUrl: './sports-ads.component.html',
  styleUrls: ['./sports-ads.component.css']
})
export class SportsAdsComponent implements OnInit {
  public articles = [];
  public AddArray = [];
  public bannerArticles = [];
  public sources = [];
  public filterFlags;
  public filterTag: String = '';
  public filterChannels: String = '';
  public filterLink: String = '';
  private getArticlesFlag = false;
  private getUpvoteFlag = false;
  private getViewedFlag = false;
  public uniqueSource = [];
  public selectedSources = [];
  public unSelectedSources = [];
  public totalSource = [];
  public favoriteArticles = [];
  public activate: boolean = false;
  public filter: boolean = false;
  public default_img_url = "assets/images/place-holder.png";
  chromeTopSite: boolean = false;
  public loadedAll: boolean = true;
  siteUrl: string;
  siteURLFlag: boolean = false;
  siteUrlError = 'Please Enter the HTTPS URL';
  topSites: any;
  FilterGame: any;
  @Input() showMore;
  @Output() sendShowMore: EventEmitter<any> = new EventEmitter();
  public activeIframe: boolean = true;
  public youtubeVideo: any;
  public articlesLink: any;
  public articlesTotalCount: number;
  isDropdownFilterSelected: boolean
  sourceLink:any;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    this.sendShowMore.emit(true);
  }
  constructor(private articleService: ArticleService, private sanitizer: DomSanitizer
  ) {

  }
  @Input() favoriteArticle;
  @Input() newsApi;

  ngOnInit(): void {
    this.FilterGame = '';
    this.filterChannels = '';
    this.articlesLink = "";
    this.sourceLink = '';
    this.isDropdownFilterSelected = false;
    // if you want to add new source just add array here
    this.getAllPromotion();
    this.getAllSource();
    
    this.getArticlesFlag = true;
    this.getUpvoteFlag = false;
    this.getViewedFlag = false;

    if (this.articles.length == 0) {
      document.getElementById("loadingIcons").classList.remove('display-none');
      setTimeout(function () {
        document.getElementById("loadingIcons").classList.add('display-none');
      }, 1000);
    }
    this.getArticle();
    this.articleService.getSourceArticle().subscribe(data => {
      if (data) {
        for (let i = 0; i < data.data.length; i++) {
          let s = {
            source: ''
          };
          s.source = data.data[i];
          this.sources.push(s);
        }
      }
    });
    this.articleService.selectedSource().subscribe(data => {
      if (data) {
        for (let i = 0; i < data.data.length; i++) {
          let s = {
            source: ''
          };
          s.source = data.data[i];
          this.selectedSources.push(s);
        }
      }
    });
    this.articleService.unSelectedSource().subscribe(data => {
      if (data) {

        this.articleService.unSelectedCustomSource().subscribe(response => {
          // for(let i=0;i<data.data.length;i++) {
          //   let s = {
          //     source: '',
          //     icon: ''
          //   };
          //   s.source = data.data[i].source;
          //   s.icon = data.data[i].icon;
          //   this.totalSource.push(s);
          // }
          // for(var j=0;j<response.data.length;j++){
          //   for(let i=0;i<data.data.length;i++) {
          //     let s = {
          //       source: '',
          //       icon: ''
          //     };
          //     s.source = data.data[i].source;
          //     s.icon = data.data[i].icon;
          //     if(response.data[j]==data.data[i].source){
          //       this.unSelectedSources.push(s);
          //       break;
          //     }
          //   }
          // }

        })

      }
    });

    this.articleService.getUniSourceArticle().subscribe(data => {
      if (data) {
        for (let i = 0; i < data.data.length; i++) {
          let s = {
            source: '',
            link: ''
          };
          s.source = data.data[i].source;
          s.link = data.data[i].link;
          this.uniqueSource.push(s);
        }
      }
    });
  }
  getAllSource(){
    this.articleService.getAllSource().subscribe(data => {
      this.totalSource = data.data;
      this.unSelectedSources = data.data;
    });
  }
  getAllPromotion(){
    this.articleService.getAllPromotion().subscribe(data => { 
// lis for adding add you can add as many as you want just update the array
    this.AddArray = data.data
    });
  }


  getValue(source) {
    if (this.totalSource.length > 0) {
      for (let i = 0; i < this.totalSource.length; i++) {
        if (source == this.totalSource[i].source)
          return this.totalSource[i].icon;
      }
    }
    return '';
  }
  getsource(source) {
    return source;
  }
  getArticle = () => {

    this.articleService.getArticles(localStorage.getItem("userId")).subscribe(data => {
      if (data.data.length) {
        console.log("article", data.data);
        this.articlesTotalCount = data.data[0].totalArticleCount;
        for (var j = 0; j < data.data.length; j++) {
          let articleData = {
            visitor: '',
            _id: '',
            title: '',
            description: '',
            image_url: '',
            playerVideo: false,
            source: '',
            game: '',
            saveLater: false,
            league: '',
            team: '',
            link: '',
            created_date: '',
            published_date: '',
            type: '',
            upvote: 0,
            hot: false,
            veryHot: false,
            updatedAt: ''
          };
          articleData._id = data.data[j]._id;
          articleData.image_url = data.data[j].image_url;
          if (articleData.image_url.trim() == "" || articleData.image_url == null) {
            articleData.image_url = this.default_img_url;
          }
          if (this.filterChannels !== '') {
            articleData.source = this.filterChannels.toString();
          } else {
            articleData.source = data.data[j].source;
          }
          if (this.FilterGame !== '') {
            articleData.game = this.FilterGame.toString();
          } else {
            articleData.game = data.data[j].game;
          }

          var regExp = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
          var match = regExp.test(data.data[j].link);
          if (match) {
            articleData.playerVideo = true;
          } else {
            articleData.playerVideo = false;
          }
          articleData.saveLater = false;
          articleData.link = data.data[j].link;
          articleData.team = data.data[j].team;
          articleData.upvote = data.data[j].upvoteCounter;
          articleData.created_date = data.data[j].created_date;
          articleData.published_date = data.data[j].published_date;
          articleData.title = data.data[j].title;
          articleData.description = data.data[j].description;
          articleData.league = data.data[j].league;
          articleData.type = data.data[j].type;
          articleData.visitor = data.data[j].visitor;
          articleData.hot = data.data[j].hot,
            articleData.veryHot = data.data[j].veryHot,
            articleData.updatedAt = data.data[j].updatedAt;
          this.articles.push(articleData);
        }

        if (data.data.length < 30) {
          this.loadedAll = true;
        }
        else {
          this.loadedAll = false;
        }
        if (this.filterChannels !== '') {
          this.articles = this.articles.filter(x => x.source.toLowerCase().includes(this.filterChannels.toLowerCase())
            || x.link.toLowerCase().includes(this.filterChannels.toLowerCase()));
        }
        if (this.FilterGame !== '') {
          this.articles = this.articles.filter(x => x.game.toLowerCase().includes(this.FilterGame.toLowerCase()));
        }
        this.articleService.getFavoriteArticle(localStorage.getItem("userId")).subscribe(data => {
          if (data.data.length > 0) {
            this.favoriteArticles = data.data;
            console.log("fy", this.favoriteArticles);
            for (let i = 0; i < this.favoriteArticles.length; i++) {
              for (let j = 0; j < this.articles.length; j++) {
                if (this.favoriteArticles[i].article._id === this.articles[j]._id) {
                  this.articles[j].saveLater = true;
                }
              }
            }
          }

        });
      } else {
        this.loadedAll = true;
      }
    });
    this.articleService.getHigherArticles().subscribe(data => {

      if (data.data.length) {
        for (var j = 0; j < data.data.length; j++) {
          let articleData = {
            visitor: '',
            _id: '',
            title: '',
            description: '',
            image_url: '',
            playerVideo: false,
            source: '',
            game: '',
            league: '',
            team: '',
            link: '',
            created_date: '',
            published_date: '',
            type: '',
            upvote: 0,
            updatedAt: '',
            hot: false,
            aboveFold: false,
            veryHot: false
          };
          articleData._id = data.data[j]._id;
          articleData.image_url = data.data[j].image_url;
          if (articleData.image_url.trim() == "" || articleData.image_url == null) {
            articleData.image_url = this.default_img_url;
          }
          articleData.source = data.data[j].source;
          var regExp = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
          var match = regExp.test(data.data[j].link);
          if (match) {
            articleData.playerVideo = true;
          } else {
            articleData.playerVideo = false;
          }
          articleData.link = data.data[j].link;
          articleData.game = data.data[j].game;
          articleData.team = data.data[j].team;
          articleData.upvote = data.data[j].upvoteCounter;
          articleData.created_date = data.data[j].created_date;
          articleData.published_date = data.data[j].published_date;
          articleData.title = data.data[j].title;
          articleData.description = data.data[j].description;
          articleData.league = data.data[j].league;
          articleData.type = data.data[j].type;
          articleData.hot = data.data[j].hot,
            articleData.aboveFold = data.data[j].aboveFold,
            articleData.veryHot = data.data[j].veryHot,
            articleData.visitor = data.data[j].visitor;
          articleData.updatedAt = data.data[j].updatedAt;
          this.bannerArticles.push(articleData);
        }
      }
    });
    this.handleScroll();
  }
  getBannerArticle(value: any) {
    if (this.bannerArticles.length > value)
      return true;
    return false;
  }
  addUpvote(id: string) {
    this.articleService.upvoteArticle(id, localStorage.getItem("userId")).toPromise().then((response: any) => {
      for (let i = 0; i < this.articles.length; i++) {
        if (id == this.articles[i]._id) {
          this.articles[i].upvote = response.data.upvoteCounter;
          break;
        }
      }
      for (let i = 0; i < this.bannerArticles.length; i++) {
        if (id == this.bannerArticles[i]._id) {
          this.bannerArticles[i].visitor = response.data.upvoteCounter;
          break;
        }
      }
    });
  }

  closeFilterArticles() {
    this.articles = [];
    this.articleService.resetPaginate();
    this.FilterGame='';
    this.filterChannels='';
    // this.getArticlesFlag=true;
    this.applySourceFilter('', false, this.isDropdownFilterSelected);
  }


  showSeeMore() {
    document.body.classList.add('show_sidebar');
    document.getElementById("see_more").classList.add('d-none');
  }
  addVisitor = (id: String, link) => {
    console.log("hello world");
    //  this.openYoutubeVideo(url);
    var url = link;
    if (url != undefined || url != '') {
      var regExp = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
      var match = regExp.test(link);
      if (match) {
        this.articleService.addVisitor(id);
        setTimeout(() => {
          for (let i = 0; i < this.articles.length; i++) {
            if (id == this.articles[i]._id) {
              this.articles[i].visitor = this.articles[i].visitor + 1;
              break;
            }
          }
          for (let i = 0; i < this.bannerArticles.length; i++) {
            if (id == this.bannerArticles[i]._id) {
              this.bannerArticles[i].visitor = this.bannerArticles[i].visitor + 1;
              break;
            }
          }

        }, 1000);

        this.playVideo(link);
      }
      else {
        window.open(link, "_blank");
        this.articleService.addVisitor(id);
        setTimeout(() => {
          for (let i = 0; i < this.articles.length; i++) {
            if (id == this.articles[i]._id) {
              this.articles[i].visitor = this.articles[i].visitor + 1;
              break;
            }
          }
          for (let i = 0; i < this.bannerArticles.length; i++) {
            if (id == this.bannerArticles[i]._id) {
              this.bannerArticles[i].visitor = this.bannerArticles[i].visitor + 1;
              break;
            }
          }
        }, 1000);
        this.activeIframe = true;
      }
    }

  }

  addFavoriteArticle = (index: any, id: String) => {

    this.articleService.addFavoriteArticle(id, localStorage.getItem("userId")).subscribe((data) => {
      if (data.message == "Already Add.") {
        this.articles[index].saveLater = !this.articles[index].saveLater;
        this.articleService.removeFavorite(id, localStorage.getItem("userId")).then((data) => {
          if (data) { }
        });
        document.getElementById('removeContainer').classList.remove('display-none');
        setTimeout(function () {
          document.getElementById('removeContainer').classList.add('display-none');
        }, 1000);
        return;
      }
      document.getElementById('successContainer').classList.remove('display-none');
      setTimeout(function () {
        document.getElementById('successContainer').classList.add('display-none');
      }, 1000);
    })
    this.articles[index].saveLater = !this.articles[index].saveLater;

  }


  applyFilter = (value, check) => {
    this.FilterGame = value;
    if (!check) {
      this.articleService.resetPaginate();
    }

    if (value == '') {
      this.getArticlesFlag = true;
      this.getUpvoteFlag = false;
      this.getViewedFlag = false;
      this.getArticle();
      return;
    }
    if (this.FilterGame !== '' && this.filterChannels !== '') {
      this.articleService.applyFilterForSourceAndGame(this.FilterGame, this.filterChannels, localStorage.getItem("userId")).subscribe(response => {
        if (!check) {
          this.articles = [];
        }
        if (response.data.length < 30) {
          this.loadedAll = true;
        }
        else {
          this.loadedAll = false;
          this.getArticlesFlag = true;
        }
        if (response.data.length > 0) {
          this.filterLink = response.data[0].link;
          this.articlesTotalCount = response.data[0].totalArticleCount;
          this.arrangeArticles(response);
        }
      });
    } else {
      this.articleService.applyFilter(value, localStorage.getItem("userId")).subscribe(response => {
        if (!check) {
          this.articles = [];
        }
        if (response.data.length < 30) {
          this.loadedAll = true;
        }
        else {
          this.loadedAll = false;
          this.getArticlesFlag = true;
        }
        if (response.data.length > 0) {
          this.filterLink = response.data[0].link;
          this.articlesTotalCount = response.data[0].totalArticleCount;
          this.arrangeArticles(response);
        }
      });
    }

  }
  applySourceFilter = (value, check, filter) => {
    this.isDropdownFilterSelected = filter;
    if (!check) {
      this.articleService.resetPaginate();
      if (value === '') {
        this.filterTag = value;
        this.filterChannels = value;
        this.filterLink = value;

      } else {
        this.filterTag = value.source;
        this.filterChannels = value.source;
        this.filterLink = value.link;
        this.sourceLink = value.link;
        value = value.source;
        
      }
    } else {
      this.filterTag = value;
      this.filterChannels = value;
      this.filterLink = value;
    }

    this.filterChannels = value;
    this.getArticlesFlag = false;
    this.getUpvoteFlag = false;
    this.getViewedFlag = false;
    this.loadedAll = true;
    if (this.isDropdownFilterSelected) {
      this.filterFlags = false;
    } else {
      this.filterFlags = true;
    }

    if (value == '') {
      this.filterFlags = false;
      $(".display-filter").removeClass('active')
      this.articles = [];
      this.getArticlesFlag = true;
      this.getUpvoteFlag = false;
      this.getViewedFlag = false;
      this.getArticle();
      return;
    }
    if (this.FilterGame !== '' && this.filterChannels !== '') {
      this.articleService.applyFilterForSourceAndGame(this.FilterGame, this.filterChannels, localStorage.getItem("userId")).subscribe(response => {
        if (!check) {
          this.articles = [];
        }
        if (response.data.length < 30) {
          this.loadedAll = true;
        }
        else {
          this.loadedAll = false;
          this.getArticlesFlag = true;
        }
        if (response.data.length > 0) {
          this.filterLink = response.data[0].link;
          this.articlesTotalCount = response.data[0].totalArticleCount;
          this.arrangeArticles(response);
        }
      });
    } else {
      this.articleService.sourceApplyFilter(value, localStorage.getItem("userId")).subscribe(response => {
        if (!check) {
          this.articles = [];
        }
        if (response.data.length < 30) {
          this.loadedAll = true;
        }
        else {
          this.loadedAll = false;
          this.getArticlesFlag = true;
        }
        if (response.data.length > 0) {
          this.filterLink = response.data[0].link;
          this.articlesTotalCount = response.data[0].totalArticleCount;
          this.arrangeArticles(response);
        }

      });
    }
  }
  mostViewedArticles = () => {
    this.articles = [];
    this.getViewedFlag = true;
    this.getUpvoteFlag = false;
    this.getArticlesFlag = false;
    this.articleService.resetPaginate();
    this.loadedAll = false;
    this.getViewedArticles();
  }
  mostRecentArticles = () => {
    this.articleService.resetPaginate();
    this.articles = [];
    this.getArticlesFlag = true;
    this.getUpvoteFlag = false;
    this.getViewedFlag = false;
    this.getArticle();
  }
  mostUpvoteArticles = () => {
    this.articles = [];
    this.getArticlesFlag = false;
    this.getUpvoteFlag = true;
    this.getViewedFlag = false;
    this.articleService.resetPaginate();
    this.getUpvoteArticles();
    this.loadedAll = false;
  }
  getViewedArticles() {
    this.articleService.mostViewedAticles().subscribe(response => {
      this.arrangeArticles(response);
      if (response.data.length < 30)
        this.loadedAll = true;
      else
        this.loadedAll = false;
    });
  }
  getUpvoteArticles() {
    this.articleService.mostUpvoteAticles().subscribe(response => {
      this.arrangeArticles(response);
      if (response.data.length < 30) {
        this.loadedAll = true;
      }
      else {
        this.loadedAll = false;
      }
    });
  }
  arrangeArticles(data) {
    for (var j = 0; j < data.data.length; j++) {
      let articleData = {
        visitor: '',
        _id: '',
        title: '',
        description: '',
        image_url: '',
        playerVideo: false,
        source: '',
        game: '',
        league: '',
        team: '',
        link: '',
        created_date: '',
        published_date: '',
        type: '',
        upvote: 0,
        updatedAt: ''
      };
      ;


      articleData._id = data.data[j]._id;
      articleData.image_url = data.data[j].image_url;
      if (articleData.image_url.trim() == "" || articleData.image_url == null) {
        articleData.image_url = this.default_img_url;
      }
      if (this.filterChannels !== '') {
        articleData.source = this.filterChannels.toString();
      } else {
        articleData.source = data.data[j].source;
      }

      var regExp = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;
      var match = regExp.test(data.data[j].link);
      if (match) {
        articleData.playerVideo = true;
      } else {
        articleData.playerVideo = false;
      }
      articleData.link = data.data[j].link;
      if (this.FilterGame !== '') {
        articleData.game = this.FilterGame.toString();
      } else {
        articleData.game = data.data[j].game;
      }

      articleData.team = data.data[j].team;
      articleData.upvote = data.data[j].upvoteCounter;
      articleData.created_date = data.data[j].created_date;
      articleData.published_date = data.data[j].published_date;
      articleData.title = data.data[j].title;
      articleData.description = data.data[j].description;
      articleData.league = data.data[j].league;
      articleData.type = data.data[j].type;
      articleData.visitor = data.data[j].visitor;
      articleData.updatedAt = data.data[j].updatedAt;
      this.articles.push(articleData);
    }
    if (this.filterChannels !== '') {
      this.articles = this.articles.filter(x => x.source.toLowerCase().includes(this.filterChannels.toLowerCase())
        || x.link.toLowerCase().includes(this.filterChannels.toLowerCase()));
    }
    if (this.FilterGame !== '') {
      this.articles = this.articles.filter(x => x.game.toLowerCase().includes(this.FilterGame.toLowerCase()));
    }
  }

  hideArticle = (articleId) => {
    this.articleService.hideArticle(articleId, localStorage.getItem("userId")).then((data) => {
      for (let i = 0; i < this.articles.length; i++) {
        if (this.articles[i]._id == articleId) {
          this.articles.splice(i, 1);
          break;
        }
      }
    });
  }
  openYoutubeVideo = (url) => {
    this.youtubeVideo = url;
  }
  handleScroll(): void {
    window.onscroll = () => this.detectBottom();
  }

  detectBottom(): void {
    if ((window.innerHeight + window.scrollY + 60) >= document.body.offsetHeight) {
      console.log("bottom");
      console.log("hello wg");
      if (!this.loadedAll) {
        if (this.articles.length > 0) {
          document.getElementById("loadingIcons").classList.remove('display-none');
          setTimeout(function () {
            document.getElementById("loadingIcons").classList.add('display-none');
          }, 3000);

          this.articleService.paginatePage();
          if (this.getArticlesFlag) {
            if (this.filterChannels !== '') {
              this.applySourceFilter(this.filterChannels, true, this.isDropdownFilterSelected);
            } else if (this.FilterGame !== '') {
              this.applyFilter(this.FilterGame, true);
            } else {
              this.getArticle();
            }

          }
          if (this.getUpvoteFlag)
            this.getUpvoteArticles();
          if (this.getViewedFlag)
            this.getViewedArticles();
          this.loadedAll = true;
        }

      }
    }
  }
  playVideo(link) {
    this.youtubeVideo = this.sanitizer.bypassSecurityTrustResourceUrl(link);
    this.activeIframe = false;
  }
  closeIframe() {
    this.activeIframe = true;
    document.getElementById('iframVideo').setAttribute('src', '');
  }
  userChooseMoreSource(value) {
    this.selectedSources = [];
    this.articles = [];
    this.articleService.selectSources(value).toPromise().then(response => {
      if (response) {
        this.articleService.selectedSource().subscribe(data => {
          if (data) {
            for (let i = 0; i < data.data.length; i++) {
              let s = {
                source: ''
              };
              s.source = data.data[i];
              this.selectedSources.push(s);
            }
            this.unSelectedSources = [];
            this.articleService.unSelectedSource().subscribe(data => {
              for (let i = 0; i < data.data.length; i++) {
                let s = {
                  source: '',
                  icon: ''
                };
                s.source = data.data[i].source;
                s.icon = data.data[i].icon;
                this.unSelectedSources.push(s);
              }
              // if(data){
              //   this.articleService.unSelectedCustomSource().subscribe(response=>{
              //
              //     for(var j=0;j<response.data.length;j++){
              //       for(let i=0;i<data.data.length;i++) {
              //         if(response.data[j]==data.data[i].source){
              //           let s = {
              //             source: '',
              //             icon: ''
              //           };
              //
              //           break;
              //         }
              //       }
              //     }
              //
              //   })
              //
              // }
            });
          }
        });
        this.getArticlesFlag = true;
        this.getViewedFlag = false;
        this.getUpvoteFlag = false;
        this.getArticle();
      }
    });
  }
  /* userCrossSource(value){
    this.selectedSources=[];
    this.articles=[];
    this.articleService.unSelectSources(value).toPromise().then(response=>{
      if(response){
        this.articleService.selectedSource().subscribe(data=>{
          if(data){
            for(let i=0;i<data.data.length;i++){
              let s={
                source:''
              };
              s.source=data.data[i];
              this.selectedSources.push(s);
            }
            this.unSelectedSources=[];
            this.articleService.unSelectedSource().subscribe(data=>{
              if(data){
                this.articleService.unSelectedCustomSource().subscribe(response=>{
                  console.log(response);
                  console.log(data);
                  for(var j=0;j<response.data.length;j++){
                    for(let i=0;i<data.data.length;i++) {
                      if(response.data[j]==data.data[i].source){
                        let s = {
                          source: '',
                          icon: ''
                        };
                        s.source = data.data[i].source;
                        s.icon = data.data[i].icon;
                        this.unSelectedSources.push(s);
                        break;
                      }
                    }
                  }

                })

              }
            });
          }
        });
      }
      this.getArticlesFlag=true;
      this.getUpvoteFlag= false;
      this.getViewedFlag =false;
        this.getArticle();
    });
  } */
  openSourceModal() {
    $("#Source_Modal").addClass('show')
  }
  mouseEnter(articles, index) {
    var CurrentDate = new Date();
    var publishedDate = new Date(articles.published_date)
    var DateDiff = publishedDate.getDate() - CurrentDate.getDate();
    if (DateDiff === 0) {
      $("#published_date" + index).text('Today');
    } else if (DateDiff === -1) {
      $("#published_date" + index).text('Yesteday');
    }
  }
}

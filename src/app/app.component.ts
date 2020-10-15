import { Component, HostListener } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'containerMirroor';
  container = "";
  interval;
  timeLeft: number = 5;

  faLinkedinIn = faLinkedinIn;
  faGithub = faGithub;
  faUserCircle = faUserCircle;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram; 
  faYoutube = faYoutube;

  isShowMobileMenu = true;

@HostListener('window:scroll', ['$event'])

onWindowScroll(e) {
    let element = document.querySelector('.head_container');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('opacity_true');
      //Scrolling 
    } else {
      element.classList.remove('opacity_true');
    }
  }

  ngOnInit(): void {
    this.timerContainer();
  }

  timerContainer() {
    let inc = 0 ; 
    this.interval = setInterval(() => {
      
      if(this.timeLeft >= 0) {
        this.timeLeft--;
        inc = -this.timeLeft;
        this.container = "container".slice(0, "container".length + inc);
      } else {
        this.timeLeft = "container".length;
      }
    },100)
  }

  showMenu() {
    this.isShowMobileMenu = !this.isShowMobileMenu;
    console.log('ohé', this.isShowMobileMenu);
  }


}

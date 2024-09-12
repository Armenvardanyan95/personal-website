import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-announcement',
  template: `
    <div class="announcment-container">
      <div class="announcement-image">
        <img
          ngSrc="/assets/images/modern-angular-meap-portrait.png"
          priority
          width="240"
          height="301"
        />
      </div>
      <div class="announcement-text">
        <h3><span>🚀</span> Announcement!</h3>
        <p>
          For quite a while, I have been writing a book about all the new cool
          stuff in Angular, and I am happy to say that "Modern Angular" is now
          available as Early Access on <a href="http://mng.bz/amlY" target="_blank">manning.com</a>.
        </p>
        <p>All 10 chapters now available as eBook, where I talk about</p>
        <ul>
          <li>Modern Angular as a whole</li>
          <li>Standalone APIs</li>
          <li>The <i>inject</i> function and its amazing applications</li>
          <li>Signals</li>
          <li>SSR</li>
          <li>New template syntax</li>
          <li>And way, way more</li>
        </ul>
      </div>
    </div>
  `,
  styles: `
    .announcment-container {
        border-radius: 10px;
        margin: 10px;
        background-color: #E6E8E6;
        padding: 8px;
        box-shadow: #bda1dd 2px 2px 3px;
        margin-top: 11px !important;
        display: flex;
        justify-content: space-between;
        width: 830px;

        img {
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }

        .announcement-text {
            margin-left: 15px;

            h3 {
               font-size: 30px;
               span {
                 animation: glow 1s ease-in-out infinite alternate;
               }
            }
            

            ul {
                margin: 0px;
            }
        }
    }

    @media screen and (max-width: 400px) {
        .announcment-container {
            flex-direction: column;
            width: 330px;

            img {
              width: 330px !important;
              height: 185px !important;
            }
        }
    }
    
    @-webkit-keyframes glow {
      from {
        text-shadow: 0 0 3px #fff, 0 0 6px #fff, 0 0 9px #e60073, 0 0 12px #e60073, 0 0 14px #e60073, 0 0 15px #e60073, 0 0 18px #e60073;
      }
      
      to {
        text-shadow: 0 0 3px #fff, 0 0 6px #ff4da6, 0 0 9px #ff4da6, 0 0 12px #ff4da6, 0 0 14px #ff4da6, 0 0 15px #ff4da6, 0 0 18px #ff4da6;
      }
    }
  `,
  standalone: true,
  imports: [NgOptimizedImage],
})
export class AnnouncementComponent {}

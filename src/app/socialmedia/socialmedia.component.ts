import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public twitterUrl:string = 'https://twitter.com/Harsh19825293';
  public facebookUrl:string = 'https://facebook.com/harshimself';
  public linkedinUrl:string = 'https://www.linkedin.com/in/harsh-agrawal-610b0672';
  public githubUrl:string = 'https://github.com/agrawalharsh';
}

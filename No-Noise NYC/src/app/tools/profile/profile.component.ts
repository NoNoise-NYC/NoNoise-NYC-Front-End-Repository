import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UserProfile {
  publicName: string;
  description: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() show: boolean;

  userProfile: UserProfile = {
    publicName: '',
    description: '',
  };

  constructor() { 
    this.show = false; // initialize the property in the constructor
  }

  ngOnInit(): void {
  }

  onContinueClick(
    nameInput: HTMLInputElement,
    descriptionInput: HTMLTextAreaElement
  ) {
    this.userProfile.publicName = nameInput.value;
    this.userProfile.description = descriptionInput.value;
    // Save the user profile to a backend server using an HTTP POST request
    this.http.get('`http://localhost:4005/users', this.userProfile).subscribe(
      () => {
        alert('Profile created');
        nameInput.value = '';
        descriptionInput.value = '';
      },
     
    );
  }
}

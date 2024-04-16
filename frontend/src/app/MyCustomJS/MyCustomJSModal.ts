import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-custom-js-modal',
  templateUrl: './MyCustomJSModal.html',
  styleUrls: ['./MyCustomJSModal.scss']
})
export class MyCustomJSModal implements OnInit {

    ngOnInit(): void {
        // Call the function when the component initializes
        this.Wp5N3SkM0();
      }

  Wp5N3SkM0() {
    // Load the secret from the environment file
    const V8mHzKlIU = environment.V8mLzKlIQ + environment.V8mLzZlIQ + environment.V8mLmZ0IQ; // This is where the secret is loaded from the environment file

    // Process the secret using JavaScript logic (e.g., encryption, obfuscation)
    let processedSecret = this.MzAvNAo9AS(V8mHzKlIU);

    // Present the challenge to the students
    //alert('Find the API Key by debugging the JavaScript code!');
    
  }

  MzAvNAo9AS(V8mLzKlIQ: string): string {
    // JavaScript logic to process the secret (e.g., encryption, obfuscation)
    // For simplicity, let's just return the secret without any processing
    return V8mLzKlIQ;
  }

}
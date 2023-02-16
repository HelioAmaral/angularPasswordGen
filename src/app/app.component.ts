import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //property to store the length input value
  length = 0;
  //use letters check box
  includeLetters = false;
  //use numbers check box
  includeNumbers = false;
  //use symbols checkbox
  includeSymbols = false;
  //property password
  password = '';

  //method the handle the length input
  //we pass a parameter which will be what the user typed
  onChangeLength(value: string){
    //the value is passed as a string, we need to parse it to a number
    const parsedValue = parseInt(value);

    //if the user writes a number then the length property is = to parsedValue
    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  //method to handle the change of use letters check box
  onChangeUseLetters() {
    //will change the value of includeLetters property to the opposite of current value
    this.includeLetters = !this.includeLetters;
  }

  //method to handle the change of use numbers checkbox
  onChangeUseNumbers() {
    //it will change the value of includeNumbers to its opposite
    this.includeNumbers = !this.includeNumbers;
  }

  //method to handle the change of use symbols checkbox
  onChangeUseSymbols() {
    //change the value of includeSymbols to its opposite
    this.includeSymbols = !this.includeSymbols;
  }

  //method that will change the password property value
  onButtonClick() {
    //create variables for possible numbers, letters and symbols
    const numbers = '1234567890';
    const letters = 'qwertyuiopasdfghjklzxcvbnm';
    const symbols = '!#€%&/()=?^';

    //create a variable to use valid characters
    let validChars = '';
    //if includeLetters is true (clicked)
    if(this.includeLetters){
      //numbers will be added to validChars
      validChars += letters;
    }
    if(this.includeNumbers){
      validChars += numbers;
    }
    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    //generate a loop that will go through the length inputed by user and for each
    //step will select randomly characters from validChars
    for(let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length); 
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}

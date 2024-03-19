import {Component} from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-generate-pdf',
  templateUrl: './generate-pdf.component.html',
  styleUrls: ['./generate-pdf.component.scss']
})
export class GeneratePdfComponent {

  private doc = new jsPDF();
  
  public onGenerate(): void {
    this.doc.text("Component generated pdf", 10, 10);
    this.doc.save("a4.pdf")
  }

}

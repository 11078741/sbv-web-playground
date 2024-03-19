import {Component} from '@angular/core';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public path: string = '/assets/';
  public visible: boolean = false;
  public uploadedFiles: any[] = [];


  constructor() {}

  onUpload(event: any) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  onPreviewPdf(fileName: string) {
    this.path += fileName;
    this.visible = true;
  }

  onHide() {
    this.path = '/assets/';
  }

  onRemove(file: UploadEvent) {
    let index = this.uploadedFiles.indexOf(file);
    this.uploadedFiles.splice(index, 1);
    this.onHide();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page  {

  constructor() { }

  isLoading: boolean = true; // Variable para controlar la visibilidad del loader
  photos: string[] = [];
/*   token: string = "IGQWRQU3VBdkt1OU9sZAkZAyQ0Rob1lid1VKSlM4b0NIZA2t6VXp2enJVTXdZAdS1RM29sNUJsMkZA6Y3lFQlI1X3JIUFpEUzc5eXhmeUpVaTEyTVU1NjBQNXBmWEpkVWlrVERHekFFRXZAtXzhyc09MeGxXbHZAId3dyUlkZD";
 */  token: string = "IGQWRPaUl0NVl6UEtiVWpjZAUdSTWxJSzVqUW1LS1pNUlRjRnhiN2g0ZA1NWTFBablM2YnNybnVpSl9UQk1TVW9YX2FObHdONDJIQnM0aXBRZAEFXTFZAEY2dZANEFvZA1dWcF9CZAWlrVkdHWG1kZAk9RQ3BaSGNIR3FYeHMZD";

  ngOnInit() {
    this.fetchImages();
  }
  fetchImages() {
    const url = `https://graph.instagram.com/me/media?fields=id,media_url&access_token=${this.token}`;
    console.log("URL de solicitud:", url);
    fetch(url)
      .then(res => res.json())
      .then((data: any) => {
        console.log("Datos recibidos de Instagram:", data);
        if (data.data) {
          this.createPhotos(data.data);
          this.isLoading = false; // Ocultar el loader cuando se hayan cargado las fotos
        } else {
          console.error("Error fetching images:", data);
        }
      })
      .catch(error => console.error("Error fetching images:", error));
  }

  createPhotos(data: any[]) {
    this.photos = [];
    for (const img of data) {
      this.photos.push(img.media_url);
    }
    console.log("Fotos creadas:", this.photos);
  }
}

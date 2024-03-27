import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page  {

  constructor() { }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.fetchImages();
  }


  photos: string[] = [];



  primeraLinea: string = 'a ferse un par de '
  primeraPalabra: string = 'cubates'
  segundaLinea: string = 'la son  '
  segundaPalabra: string = 'te anira'


  token: string = "IGQWRQU3VBdkt1OU9sZAkZAyQ0Rob1lid1VKSlM4b0NIZA2t6VXp2enJVTXdZAdS1RM29sNUJsMkZA6Y3lFQlI1X3JIUFpEUzc5eXhmeUpVaTEyTVU1NjBQNXBmWEpkVWlrVERHekFFRXZAtXzhyc09MeGxXbHZAId3dyUlkZD"
  fetchImages() {
    const url = `https://graph.instagram.com/me/media?fields=id,media_url&access_token=${this.token}`;
    console.log("URL de solicitud:", url); // Agregar mensaje de consola para la URL de solicitud
    fetch(url)
      .then(res => res.json())
      .then((data: any) => {
        console.log("Datos recibidos de Instagram:", data); // Agregar mensaje de consola para los datos recibidos
        if (data.data) {
          this.createPhotos(data.data);
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
    console.log("Fotos creadas:", this.photos); // Agregar mensaje de consola para las fotos creadas
  }
}

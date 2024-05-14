import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.page.html',
  styleUrls: ['./info-page.page.scss'],
})
export class InfoPagePage implements OnInit {
  itemId: number | undefined;
  imagenes: string[] = ['../../assets/images/50aniversari.jpg', '../../assets/images/50aniversari.jpg', '../../assets/images/50aniversari.jpg'];
  items: any[] = [
    {
      id: 1,
      title: 'La nostra fallera major',
      text: 'Coneix a la nostra fallera major, la representant principal de la nostra comissió fallera. Descobreix la seua història, els seus èxits i el seu compromís amb les nostres tradicions. La nostra fallera major va créixer en el cor de València, immersa en la cultura i l esperit de les festes des de ben joveneta. Des de petita, va mostrar un profund amor per les festes de les Falles, participant activament en tots els esdeveniments i actes culturals. El seu somni sempre havia estat representar la seua falla com a fallera major, un somni que ara s ha fet realitat gràcies al seu dedicació i passió. \n\nA més de la seua implicació en la festa, la nostra fallera major també es destaca per la seua labor en la promoció de la cultura valenciana més enllà de les nostres fronteres. Ha col·laborat amb diverses organitzacions culturals per a expandir el coneixement de les tradicions valencianes, fent especial èmfasi en l artesania del vestit de fallera i la importància del patrimoni oral. El seu lideratge i carisma han contribuït enormement a unir la nostra comunitat, reforçant els llaços que ens uneixen al voltant de les nostres arrelades tradicions i celebracions.',
      imagenes: ['../../assets/images/f1.webp', '../../assets/images/f2.webp', '../../assets/images/f3.webp']
    },
    {
      id: 2,
      title: 'El nostre president',
      text: 'Descobreix qui lidera la nostra comissió fallera com a president. Coneix els seus objectius, la seua visió de futur i com treballa per fer realitat les il·lusions de tots nosaltres. El nostre president és un apassionat defensor de la cultura fallera, amb una trajectòria llarga i reeixida dins de l organització de les festes. Des de la seua joventut, ha estat involucrat en diversos aspectes de la festa, des de la construcció de falles fins a l organització d actes culturals. Amb una visió clara cap a la innovació sense perdre l essència tradicional, el nostre president busca modernitzar la festa atraient a un públic més jove i divers. Sota la seua gestió, la comissió ha vist un augment significatiu en la participació i en el reconeixement cultural a nivell local i internacional. El president té un pla estratègic per a expandir el coneixement i l apreciació de les Falles més enllà de les nostres fronteres, utilitzant plataformes digitals i col·laboracions amb altres festivitats culturals. El seu lideratge no només ha reforçat la visibilitat de les nostres tradicions, sinó que també ha creat un sentit més fort de comunitat i pertinença entre els membres de la comissió.',
      imagenes: ['../../assets/images/p1.webp', '../../assets/images/p2.webp', '../../assets/images/p3.webp']

    },
    {
      id: 3,
      title: 'La nostra fallera major infantil',
      text: 'Coneix a la nostra fallera major infantil, la jove que representa l alegria i l energia de la nostra comissió fallera. Descobreix les seues activitats, la seua creativitat i com contagia el seu entusiasme. La nostra fallera major infantil és una figura central en la dinamització de les activitats per als més joves, organitzant tallers de manualitats i jocs que promouen la cultura valenciana d una manera divertida i educativa. Amb un esperit creatiu inigualable, ha ajudat a dissenyar mini-monuments i ha participat activament en la creació de vestits tradicionals per a les representacions infantils. \n\nLa seua capacitat per connectar amb altres nens i contagiar-los amb la seua passió per les Falles és remarcable. \n\nSota la seua influència, molts nens han descobert no només el goig de les festes, sinó també l importància de mantenir vives les tradicions. Amb un somriure sempre present, la nostra fallera major infantil és una inspiració per a tots, demostrant que l amor per la cultura i les tradicions pot començar des de molt jove i tenir un impacte profund en la comunitat.',
      imagenes: ['../../assets/images/fi1.webp', '../../assets/images/fi2.webp', '../../assets/images/fi3.webp']

    },
    {
      id: 4,
      title: 'El nostre president infantil',
      text: 'Coneix al líder més jove de la nostra comissió fallera, el nostre president infantil. Descobreix com inspira als més menuts, el seu paper en les nostres activitats i com porta endavant la diversió i la camaraderia. Aquest jove líder no només coordina les activitats per als infants sinó que també serveix d exemple amb la seua participació activa i entusiasta en tots els esdeveniments. La seua capacitat per motivar i animar als seus coetanis és fonamental per mantenir l esperit festiu i inclusiu de les Falles entre la joventut. \n\nAmb un enfocament fresc i energètic, el nostre president infantil ha introduït noves idees que fan les festivitats més accessibles i divertides per a nens de totes les edats. Des de desfilades infantils fins a competicions de dibuix de falles, la seua visió per a crear un espai on cada infant puga sentir-se part de la tradició ha estat clau. La seua liderança no sols promou la diversió, sinó que també fomenta la camaraderia i el treball en equip, essencials per a la construcció d una comunitat fallera forta i unida des de la base.',
      imagenes: ['../../assets/images/pi1.webp', '../../assets/images/pi2.webp', '../../assets/images/pi3.webp']
    },
    {
      id: 5,
      title: 'la nostra falla gran',
      text: 'Descobreix la grandiositat i l esplendor de la nostra falla gran, el cor i l ànima de la nostra comissió fallera. Aquest monument colosal no només captura la creativitat i l artesania dels nostres artistes fallers, sinó que també serveix com una càpsula del temps que narra històries locals i crítiques socials a través del seu disseny intricat i les seues escenes plenes de detall. \n\nLa nostra falla gran és el resultat de mesos de treball dedicat, on cada peça és esculpida i pintada amb una cura excepcional, reflectint tant les tradicions valencianes com les inquietuds contemporànies de la nostra comunitat. Cada any, el tema central de la falla és escollit amb l objectiu de provocar reflexió i diàleg entre els espectadors, convertint aquesta obra d art efímera en un potent mitjà de comunicació social. La falla no solament és un punt d atracció durant les festivitats, sinó que també actua com un lloc de trobada on la comunitat es reuneix per celebrar, compartir i experimentar junts l essència de les Falles.',
      imagenes: ['../../assets/images/fallaGrande1.jpg',
        '../../assets/images/fallaGrande2.jpg',
        '../../assets/images/fallaGrande3.jpg',
        '../../assets/images/fallaGrande4.jpg',
        '../../assets/images/fallaGrande5.jpg',
        '../../assets/images/fallaGrande6.jpg',
        '../../assets/images/fallaGrande7.jpg',
        '../../assets/images/fallaGrande8.jpg',
        '../../assets/images/fallaGrande9.jpg',
        '../../assets/images/fallaGrande10.jpg'
      ]
    },
    {
      id: 6,
      title: 'La nostra falla infantil',
      text: 'Descobreix la màgia i l encant de la nostra falla infantil, una expressió vívida de la imaginació i la creativitat dels nostres més joves membres de la comissió fallera. Aquesta obra d art, més petita però igualment impactant, està dissenyada i construïda amb la participació activa dels nens, permetent-los aportar les seues pròpies idees i visions al projecte. \n\nLa falla infantil destaca per la seua alegria i colorit, amb figures i escenes que captiven l atenció dels petits i grans per igual. Cada detall, des dels colors vibrants fins a les escenes imaginatives, està pensat per educar i entretenir, incloent elements didàctics que fomenten el coneixement de la nostra cultura i història de manera divertida i accessible. És un punt de trobada per a les famílies durant les festes, on els nens poden veure reflectides les seues pròpies aportacions i sentir-se orgullosos de ser part activa de les tradicions falleres.',
      imagenes: ['../../assets/images/fallaPeqquenya1.jpg',
        '../../assets/images/fallaPeqquenya2.jpg',
        '../../assets/images/fallaPeqquenya3.jpg',
        '../../assets/images/fallaPeqquenya4.jpg',
        '../../assets/images/fallaPeqquenya5.jpg',
        '../../assets/images/fallaPeqquenya6.jpg',
        '../../assets/images/fallaPeqquenya7.jpg',
        '../../assets/images/fallaPeqquenya8.jpg',
        '../../assets/images/fallaPeqquenya9.jpg',
        '../../assets/images/fallaPeqquenya10.jpg'
      ]
    }
  ];



  title: string | undefined;
  text: string | undefined;
  imagen: string[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.itemId = +params['id'];
      this.loadInfo(this.itemId);
    });
  }

  loadInfo(itemId: number) {
    const item = this.items.find(i => i.id === itemId);
    if (item) {
      this.title = item.title;
      this.text = item.text;
      this.imagen = item.imagenes;
    } else {
      this.title = 'Información no encontrada';
      this.text = 'Lo sentimos, la información no está disponible...';
    }
  }
}
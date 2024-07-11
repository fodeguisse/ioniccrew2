import { Component} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ExploreContainerComponent, 
    FormsModule]
})

export class Tab4Page {
  unsortedTable: any[] = [
                            {directive: "ion-header",description: "Utilisé pour créer une section d'en-tête fixe en haut de l'écran"}, 
                            {directive : "ion-input",description: " La directive principale pour le contenu défilant"},
                            {directive : "ion-footer",description: "Utilisé pour créer une section de pied de page fixe en bas de l'écran"},
                            {directive : "ion-navbar",description: "Utilisé à l'intérieur de ion-header pour créer une barre de navigation avec des boutons de navigation et un titre"},
                            {directive : "ion-button",description: "Utilisé pour créer des boutons interactifs avec diverses options de style et de taille"},
                            {directive : "ion-content",description: "Utilisé pour créer des champs de saisie de texte"},
                            {directive : "ion-list",description: "Utilisé pour créer une liste d'éléments. Il peut contenir des ion-item pour chaque élément de la liste."},
                            {directive : "ion-item",description: "Utilisé à l'intérieur d'une ion-list pour définir chaque élément de la liste. Il peut contenir du texte, des icônes, des boutons et d'autres composants"},
                            {directive : "ion-card",description: "Utilisé pour créer des cartes visuelles qui peuvent contenir des informations structurées telles que des titres, des images et des boutons."},
                            {directive : "ion-icon",description: "Utilisé pour afficher des icônes provenant de diverses bibliothèques d'icônes prises en charge par Ionic."},
                            {directive : "ion-tabs",description: "Utilisé pour créer une interface à onglets. Permet de naviguer entre différentes pages ou sections de l'application en utilisant des onglets en bas ou en haut de l'écran."},
                            {directive : "ion-modal",description: "Utilisé pour afficher des modales. Une modale est une boîte de dialogue superposée qui peut contenir du contenu supplémentaire ou des actions sans quitter la page en cours."}
                          ];

  sortedTable: string[]= [];
  showButton: boolean = true;
  addButton: boolean = true;

  inputValue: string = "";
  desiredItem: string = "";
  foundItems = [...this.unsortedTable];

  constructor() {
  }

  
  filterItems(){
    
    this.foundItems = this.unsortedTable.filter(item => 
      item.directive.toLocaleLowerCase().includes(this.desiredItem.toLocaleLowerCase()))
  
  }

  //tri du tableau de chaine de caractères
  sortingStringTable(tab: string[] = []){
    return tab.sort((a,b) => a.localeCompare(b))
  }


  //affichage du tableau trié
  // showSortingTable(){
  //   this.sortedTable = this.sortingStringTable([...this.unsortedTable])
  //   this.showButton = false;
  // }

  // addValueToTable(){
  
  //   this.unsortedTable.push(this.inputValue);
  // }

}

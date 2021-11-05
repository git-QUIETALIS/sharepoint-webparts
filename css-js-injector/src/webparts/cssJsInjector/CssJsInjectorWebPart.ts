import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';
import * as strings from 'CssJsInjectorWebPartStrings';
import $ from "jquery";

require('./styles.css')

export interface ICssJsInjectorWebPartProps {
  description: string;
}

export default class CssJsInjectorWebPart extends BaseClientSideWebPart<ICssJsInjectorWebPartProps> {

  public render(): void {

    let fournisseurs = ["ACFRI", "ACI", "ACO", "ADVENTYS", "AEIB", "ALVENE", "AMATIS", "AMBASSADE", "ANGELO PO", "ANIMO", "ARCO", "ATLANTIQUE PESAGE", "B3C SOEHNLE", "BACCHUS", "BOURDETTE", "BARON", "BARRIERE", "BARTSCHER", "BATINOX", "BC INOX", "BERKEL", "BERTO'S", "BEZZERA", "BILLARD CLINDOUX", "BIRO", "BLANCO", "BODSON", "BONNET", "BONNET FURNOTEL", "BOREOLE", "BOURGEAT", "BOURGEOIS", "BRAVILOR", "BRC", "BREMA", "BRITA", "BURLODGE TEMP RITE", "BWT", "CAFES SOUBIRA", "CAPIC", "CAPITANI", "CAPLAIN", "CARAY", "CAREL", "CARPIGIANI", "CASTEL MAC", "CAT SERV", "CATEQUIP", "CB", "CHARVET", "CIB (BONNET - THIRODE)", "CIMBALI", "CODIGEL", "COLGED", "COMBISTEEL", "COMENDA", "COMETTO", "CONTINENTALE CHIMITEC", "CONVOTHERM", "COSMETAL", "CTA", "DADAUX", "DAGARD", "DANFOSS", "DANUBE", "DELABIE", "DELCOUPE", "DESCO", "DESMON", "DIAMOND", "DIHR", "DITO SAMA", "DIXELL", "DUBIX", "DUCHENE", "DYNAMIC", "E+F", "ECP GROUP", "EDAFIM", "ELECREM", "ELECTROCALORIQUE", "ELECTROLUX", "ELFRAMO", "ELIWELL", "EMB SAGAA", "EMERSON", "ENODIS", "EPCG", "ERDEMIL", "EUROFOURS", "EUROFRED", "EVCO", "EVERPURE", "FAGOR", "FIA", "FOINOX", "FONTAINE REFRIGEREE ROLLER GRILL", "FORCAR FIMAR", "FOSTER", "FOUR HOUNO", "FRANSTAL", "FRI JADO", "FRIFRI", "FRIGINOX", "FRIMA", "FRINOX", "FURNOTEL", "GAMKO", "GECAM", "GFF", "GIGA", "GIRBAU", "GRANDIMPIANTI", "GRANULDISK", "GUYON CUISSON (ENODIS)", "HABASIT", "HENKELMAN", "HENNY PENNY", "HITACHI", "HOBART", "HOONVED", "HOSHIZAKI", "IARP", "IGF", "IGLU", "ILSA", "IMESA", "INDUSTRADE", "INFRICO", "ISA", "ISECO", "ISOTECH", "ITV", "JEMI", "JEROS", "JOHNSON", "JUDO", "JUNO", "JV LA FRANCAISE", "KENWOOD", "KIDE EPTA", "KRAMPOUZ", "KROMO", "KRONEN", "KUPPERSBUSCH", "L2G", "LAE", "LAMBER", "LAVEZZINI", "LINEA", "LMC EUROCOLD", "MAFDEL", "MARECHAL", "MARENO", "MATFER", "MBM", "MECNOSUD", "MEIKO", "MENAGER", "MERCATUS", "METOS", "METTLER TOLEDO", "MIELE", "MIRROR", "MISA", "MISTRAL", "MKN", "MODULINE", "MONDIAL GROUP", "MULTIVAC", "MUSSANA", "NASAT", "NORTECH", "NOSEM", "NUMATIC", "NYBORG", "OCF VITRINE", "ODIC", "ODIS", "OLIS", "OMAS", "ONNERA GROUP ECOLINE", "ORA", "ORVED", "PAVAILLER", "PERMO ADOUCISSEUR", "PICTO", "POLARIS", "PRIMUS", "PROFESSIONNAL SPARES", "PROFROID", "PSV", "RATIONAL CHARIOT", "REHAVENDORS", "RENEKA", "RICA", "RICAMBI", "ROBOT COUPE", "ROLLER GRILL", "RONDO", "ROSINOX", "ROUND UP", "SAGOP", "SALAISON PIVETEAU", "SALVA", "SALVIS", "SAMNIC", "SANTOS", "SAROMICA", "SASA", "SCAL", "SCOTSMAN (SCODIF)", "SEDA", "SEE", "SFE", "SIFEC", "SILANOS", "SILKO", "SIMONELLI", "SIRMAN", "SMEG", "SOCAMEL", "SOFINOR INOTECH", "SOFRACA", "SOPACOM", "SOWEBO", "STEPHAN", "TECHNITALIA", "TECHNITRANS", "TECHNODOM", "TECHNOLOGIC", "TECNOEKA", "TEFCOLD", "TELLIER", "THIRODE", "TIFFON", "TOTALINE", "TOURNUS", "TRANCHEUR", "TRUE", "TURBOCHEF", "UNOX", "VALENTINE", "VALIDEX", "VALKO", "VAUCONSANT", "VERDER", "VIGITEMP", "VITAMIX", "VITO", "VMI", "WALO", "WARING", "WASCATOR", "WHIRLPOOL", "WIESSMANN", "WILLIAMS", "WINSTON", "WINTERHALTER", "WOLK", "WOODLEY", "ZANOLLI", "ZANOTTI", "ZANUSSI", "ZUMEX"]

    // Check if new element with class "ms-List-page" is added to the DOM and if so, console log it
    $(document).on('DOMNodeInserted', function (e) {
      var target = $(e.target);
      if (target.hasClass('ms-List-page')) {
        if ($("img[src='https://spoprod-a.akamaihd.net/files/fabric/office-ui-fabric-react-assets/foldericons-fluent/lg-fg.svg']").length > 0) {
          fournisseurs.forEach(function (item, index, array) {
            // Vérifier si item est différent de ""
            var fournisseurTitle = document.querySelector('[title="' + item + '"]').parentElement
            var divToSkip = 4
            while (divToSkip != 0) {
              fournisseurTitle = fournisseurTitle.parentElement
              divToSkip--
            }
            var fournisseurBack = fournisseurTitle.querySelector('.ms-FolderCover-back')
            var fournisseurFront = fournisseurTitle.querySelector('.ms-FolderCover-front')
            fournisseurBack.getElementsByTagName('img')[0].src = ""
            fournisseurFront.getElementsByTagName('img')[0].src = "https://quietalis365.sharepoint.com/sites/intranet/logo_fournisseurs/" + item + ".png"
            //fournisseurTitle = fournisseurTitle.closest('i[.ms-FolderCover-back]')
            console.log(fournisseurTitle)
            console.log(fournisseurFront.getElementsByTagName('img'))

            // Replace current item in fournisseurs array with null value
            fournisseurs[item] = ""
          });
        }
        console.log(target);
      }
    });

  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

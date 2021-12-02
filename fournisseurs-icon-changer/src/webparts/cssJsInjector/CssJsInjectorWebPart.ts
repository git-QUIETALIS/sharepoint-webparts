import { Version } from '@microsoft/sp-core-library'
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane'
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base'
import { escape } from '@microsoft/sp-lodash-subset'
import * as strings from 'CssJsInjectorWebPartStrings'
import $ from "jquery"
import { sp, SPRequestExecutorClient } from "@pnp/sp-addinhelpers";

require('./styles.css')

export interface ICssJsInjectorWebPartProps {
  description: string
}

export default class CssJsInjectorWebPart extends BaseClientSideWebPart<ICssJsInjectorWebPartProps> {

  public render(): void {
    let fournisseurs = ["ACFRI", "ACO", "ACTIF INDUSTRIES", "AFI COLLIN LUCY", "ALVENE", "AMBASSADE DE BOURGOGNE", "ANGELO PO", "ANIMO", "ARCOMETAL", "ATOSA", "B3C PESAGE", "BARON", "BARTSCHER", "BLANCO PROFESSIONAL", "BLUCHER", "BOREOLE", "BRC", "BRITA", "BURLODGE", "BWT - PERMO", "CAPIC", "CHARVET", "CODIGEL", "COMENDA", "CTA", "DADAUX", "DAGARD", "DANUBE", "DIAMOND", "DIHR", "DYNAMIC", "EBERHARDT", "EDAFIM", "EDENOX", "ELECTROLUX", "ENODIS", "EPGC", "FAGOR", "FERMOD", "FOSTER", "FRIGINOX", "FRITEC", "FURNOTEL", "GAZECHIM", "GFF", "GRANULDISK", "GROUPE BC INOX", "HENDI", "HOSHIZAKI", "HOUNO", "IMPERIAL INTERNATIONAL", "ISOTECH", "L2G", "LE FROID PECOMARK", "LINK INOX", "MATFER BOURGEAT", "MEIKO", "MIELE", "MKN", "NISBETS FRANCE", "NOSEM", "ODIC", "OHAUS EUROPE", "PROFESSIONAL SPARES", "RATIONAL", "ROBOT COUPE", "ROLESCO", "ROSINOX", "SAFTAIR", "SAGI", "SAMMIC", "SCODIF", "SEDA", "SMEG", "SOFINOR", "SOFRACA", "SOPACOM", "TELEWIG", "TELLIER", "TOURNUS", "UNOX", "VALIDEX", "VAUCONSANT", "VMI", "WINTERHALTER", "ACFRI", "ACI", "ACO", "ADVENTYS", "AEIB", "ALVENE", "AMATIS", "AMBASSADE", "ANGELO PO", "ANIMO", "ARCO", "ATLANTIQUE PESAGE", "B3C SOEHNLE", "BACCHUS", "BOURDETTE", "BARON", "BARRIERE", "BARTSCHER", "BATINOX", "BC INOX", "BERKEL", "BERTO'S", "BEZZERA", "BILLARD CLINDOUX", "BIRO", "BLANCO", "BODSON", "BONNET", "BONNET FURNOTEL", "BOREOLE", "BOURGEAT", "BOURGEOIS", "BRAVILOR", "BRC", "BREMA", "BRITA", "BURLODGE TEMP RITE", "BWT", "CAFES SOUBIRA", "CAPIC", "CAPITANI", "CAPLAIN", "CARAY", "CAREL", "CARPIGIANI", "CASTEL MAC", "CAT SERV", "CATEQUIP", "CB", "CHARVET", "CIB (BONNET - THIRODE)", "CIMBALI", "CODIGEL", "COLGED", "COMBISTEEL", "COMENDA", "COMETTO", "CONTINENTALE CHIMITEC", "CONVOTHERM", "COSMETAL", "CTA", "DADAUX", "DAGARD", "DANFOSS", "DANUBE", "DELABIE", "DELCOUPE", "DESCO", "DESMON", "DIAMOND", "DIHR", "DITO SAMA", "DIXELL", "DUBIX", "DUCHENE", "DYNAMIC", "E+F", "ECP GROUP", "EDAFIM", "ELECREM", "ELECTROCALORIQUE", "ELECTROLUX", "ELFRAMO", "ELIWELL", "EMB SAGAA", "EMERSON", "ENODIS", "EPGC", "ERDEMIL", "EUROFOURS", "EUROFRED", "EVCO", "EVERPURE", "FAGOR", "FIA", "FOINOX", "FONTAINE REFRIGEREE ROLLER GRILL", "FORCAR FIMAR", "FOSTER", "FOUR HOUNO", "FRANSTAL", "FRI JADO", "FRIFRI", "FRIGINOX", "FRIMA", "FRINOX", "FURNOTEL", "GAMKO", "GECAM", "GFF", "GIGA", "GIRBAU", "GRANDIMPIANTI", "GRANULDISK", "GUYON CUISSON (ENODIS)", "HABASIT", "HENKELMAN", "HENNY PENNY", "HITACHI", "HOBART", "HOONVED", "HOSHIZAKI", "IARP", "IGF", "IGLU", "ILSA", "IMESA", "INDUSTRADE", "INFRICO", "ISA", "ISECO", "ISOTECH", "ITV", "JEMI", "JEROS", "JOHNSON", "JUDO", "JUNO", "JV LA FRANCAISE", "KENWOOD", "KIDE EPTA", "KRAMPOUZ", "KROMO", "KRONEN", "KUPPERSBUSCH", "L2G", "LAE", "LAMBER", "LAVEZZINI", "LINEA", "LMC EUROCOLD", "MAFDEL", "MARECHAL", "MARENO", "MATFER", "MBM", "MECNOSUD", "MEIKO", "MENAGER", "MERCATUS", "METOS", "METTLER TOLEDO", "MIELE", "MIRROR", "MISA", "MISTRAL", "MKN", "MODULINE", "MONDIAL GROUPE", "MULTIVAC", "MUSSANA", "NASAT", "NORTECH", "NOSEM", "NUMATIC", "NYBORG", "OCF VITRINE", "ODIC", "ODIS", "OLIS", "OMAS", "ONNERA GROUP ECOLINE", "ORA", "ORVED", "PAVAILLER", "PERMO ADOUCISSEUR", "PITCO", "POLARIS", "PRIMUS", "PROFESSIONNAL SPARES", "PROFROID", "PSV", "RATIONAL CHARIOT", "RHEAVENDORS", "RENEKA", "RICA", "RICAMBI", "ROBOT COUPE", "ROLLER GRILL", "RONDO", "ROSINOX", "ROUND UP", "SAGOP", "SALAISON PIVETEAU", "SALVA", "SALVIS", "SAMMIC", "SANTOS", "SAROMICA", "SASA", "SCAL", "SCOTSMAN (SCODIF)", "SEDA", "SEE", "SFE", "SIFEC", "SILANOS", "SILKO", "SIMONELLI", "SIRMAN", "SMEG", "SOCAMEL", "SOFINOR INOTECH", "SOFRACA", "SOPACOM", "SOWEBO", "STEPHAN", "TECHNITALIA", "TECHNITRANS", "TECNODOM", "TECNOLOGIC", "TECNOEKA", "TEFCOLD", "TELLIER", "THIRODE", "TIFFON", "TOTALINE", "TOURNUS", "TRANCHEUR", "TRUE", "TURBOCHEF", "UNOX", "VALENTINE", "VALIDEX", "VALKO", "VAUCONSANT", "VERDER", "VIESSMANN", "VIGITEMP", "VITAMIX", "VITO", "VMI", "WALO", "WARING", "WASCATOR", "WHIRLPOOL", "WIESSMANN", "WILLIAMS", "WINSTON", "WINTERHALTER", "WOLK", "WOODLEY", "ZANOLLI", "ZANOTTI", "ZANUSSI", "ZUMEX"];
    // Remove duplicates from fournisseurs array
    function removeDuplicates(arr) {
      let unique_array = [];
      for (let i = 0; i < arr.length; i++) {
        if (unique_array.indexOf(arr[i]) == -1) {
          unique_array.push(arr[i]);
        }
      }
      return unique_array;
    }

    fournisseurs = removeDuplicates(fournisseurs);
    var hostweburl = "https://quietalis365.sharepoint.com"

    function UrlExists(url, cb) {
      $.ajax({
        url: url,
        dataType: 'text',
        type: 'GET',
        complete: function (xhr) {
          if (typeof cb === 'function')
            cb.apply(this, [xhr.status])
        }
      })
    }

    function SPOCopyTo(fournisseur) {
      let ApiCoptyTo = "https://quietalis365.sharepoint.com/sites/intranet/_api/web/getfilebyserverrelativeurl('/sites/intranet/logo_fournisseurs/default.png')/copyTo('/sites/intranet/logo_fournisseurs/" + fournisseur + ".png')"
      // Get d.GetContextWebInformation.FormDigestValue into a variable
      let RequestDigest = "";
      let RequestDigestUrl = "https://quietalis365.sharepoint.com/sites/intranet/_api/contextinfo";
      $.ajax({
        url: RequestDigestUrl,
        type: "POST",
        headers: {
          "accept": "application/json;odata=verbose",
          "content-type": "application/json;odata=verbose",
          "X-RequestDigest": RequestDigest
        },
        success: function (data) {
          RequestDigest = data.d.GetContextWebInformation.FormDigestValue;
          $.ajax({
            url: ApiCoptyTo,
            type: "POST",
            headers: {
              "accept": "application/json;odata=verbose",
              "content-type": "application/json;odata=verbose",
              "X-RequestDigest": RequestDigest
            },
            success: function (data) {
              //console.log(data)
            },
            error: function (data) {
              //console.log(data)
            }
          });
        },
        error: function (data) {
          //console.log(data)
        }
      });
    }

    // Check if new element with class "ms-List-page" is added to the DOM and if so, console log it
    setTimeout(function () {
      $(document).on('DOMNodeInserted', function (e) {
        if ($("img[src$='https://spoprod-a.akamaihd.net/files/fabric/office-ui-fabric-react-assets/foldericons-fluent/lg-fg.svg']").length > 0) {
          fournisseurs.forEach(function (item, index, array) {
            // Vérifier si item existe dans la page
            if (document.querySelector('[title="' + item + '"]') != null) {
              // Get the div
              var fournisseurTitle = document.querySelector('[title="' + item + '"]').parentElement

              // Go back to its major parent
              var divToSkip = 4
              while (divToSkip != 0) {
                fournisseurTitle = fournisseurTitle.parentElement
                divToSkip--
              }

              // Get the image's div
              var fournisseurBack = fournisseurTitle.querySelector('.ms-FolderCover-back')
              var fournisseurFront = fournisseurTitle.querySelector('.ms-FolderCover-front')

              // Check if the image is available in the webpart's icon document library and if so, set them
              var newImageLink = "https://quietalis365.sharepoint.com/sites/intranet/logo_fournisseurs/" + item + ".png"
              UrlExists(newImageLink, function (status) {
                if (status === 200) {
                  // Image is found
                  fournisseurBack.getElementsByTagName('img')[0].src = ""
                  fournisseurFront.getElementsByTagName('img')[0].src = "https://quietalis365.sharepoint.com/sites/intranet/logo_fournisseurs/" + item + ".png"
                } else if (status === 404) {
                  // Image is not found, so we create a default one and copy it to the webpart's icon document library
                  SPOCopyTo(item)

                  //Set the newly created image
                  fournisseurBack.getElementsByTagName('img')[0].src = ""
                  fournisseurFront.getElementsByTagName('img')[0].src = "https://quietalis365.sharepoint.com/sites/intranet/logo_fournisseurs/" + item + ".png"
                } else {
                  // Error
                  //console.log("Error: " + status)
                }
              })
            }
          })
        }
      })

    }, 1000)
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0')
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
    }
  }
}

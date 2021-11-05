import { Version } from '@microsoft/sp-core-library'
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneToggle
} from '@microsoft/sp-property-pane'
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base'
import { escape } from '@microsoft/sp-lodash-subset'

import styles from './HelloWorldWebPart.module.scss'
require('./style.css')
import * as strings from 'HelloWorldWebPartStrings'

//Added mock
import MockHttpClient from './MockHttpClient'

//Added helper class to execute REST API
import {
  SPHttpClient,
  SPHttpClientResponse
} from '@microsoft/sp-http'

//Used to check wether you're in a local or sharepoint environment
import {
  Environment,
  EnvironmentType
} from '@microsoft/sp-core-library'

export interface IHelloWorldWebPartProps {
  description: string
}

export interface ISPLists {
  value: ISPList[]
}

export interface ISPList {
  Title: string
  Id: string
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  public render(): void {
    //Simulate html and filter CSE without appending to DOM
    let CSE = fetch('https://www.cse-quietalis.fr/fr/')
      .then(function (response) {
        // When the page is loaded convert it to text
        return response.text()
      })
      .then(function (html) {
        // Initialize the DOM parser
        var parser = new DOMParser()

        // Parse the text
        var doc = parser.parseFromString(html, "text/html")

        // Select part of that html as you would in the regular DOM
        var docArticle = doc.querySelector('.slider-meyclub').innerHTML
        return docArticle
      })
      .catch(function (err) {
        console.log('Failed to fetch page: ', err)
      })

    const CSEPromise = async () => {
      const c = await CSE
      console.log("CSE Fetched successfully")
      return c
    }

    function showSlide(slideNb) {
      const allSlides = document.querySelectorAll<HTMLElement>(".MainAnimationCarroussel-slide")
      var index = 0, length = allSlides.length
      for (; index < length; index++) {
        allSlides[index].style.display = "none"
      }
      const slide = document.querySelector<HTMLElement>(".MainAnimationCarroussel-slide:nth-child(" + slideNb + ")")
      slide.style.display = "block"
      console.log("--------------------------------------------------------")
      console.log("Slide à cacher :")
      console.log(allSlides)
      console.log("Slide à afficher :")
      console.log(slide)
      console.log("--------------------------------------------------------")
    }

    CSEPromise().then((value: string) => {
      if (value && typeof value === 'string') {

        //The DOM element is where the web part should be rendered is available in the render() method.
        this.domElement.innerHTML = value

        //Fetch number of slides generated
        const nbSlides = document.querySelectorAll<HTMLElement>(".MainAnimationCarroussel-slide").length
        var idx = 1
        let labelsToAdd = ""
        while (idx <= nbSlides) {
          labelsToAdd += '<label id="slide' + idx + '" for="slide-' + idx + '"></label>'
          if (idx === nbSlides) {
            //When idx reaches its end // meaning there are no more slides to display
            this.domElement.innerHTML += '<div class="pagination">' + labelsToAdd
          }
          idx += 1
        }

        //Add event listeners to all slides
        for (let step = 1; step <= nbSlides; step++) {
          document.getElementById("slide" + step).addEventListener("click", function () { showSlide(step) }, false)
        }

        // Get list of all links in the page and fix the ones that have relative paths
        var links = document.getElementsByTagName("a");
        // Loop through links
        for (var i = 0, l = links.length; i < l; i++) {
          // No need to use `getAttribute`, href is defined getter in all browsers
          var sharepointLink = document.location.origin;
          if (links[i].href.includes(sharepointLink)) {
            //links[i].href = "https://www.cse-quietalis.fr/fr/" + links[i].href
            if ((!links[i].href.includes("_layouts"))) {
              links[i].href = links[i].href.replace(sharepointLink, "https://www.cse-quietalis.fr/fr")
              console.log(links[i].href)
            }
            if ((links[i].href.includes("intranet"))) {
              links[i].href = links[i].href.replace("https://www.cse-quietalis.fr/fr", sharepointLink)
              console.log(links[i].href)
            }
          }
        }
        console.log(this.domElement.innerHTML)
        console.log(document.location.origin)
      }
    })
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0')
  }
}

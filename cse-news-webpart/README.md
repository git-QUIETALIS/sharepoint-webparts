# CSE News Webpart

## Presentation

![CSE News](https://i.imgur.com/OR7dyaO.png)

## Used SharePoint Framework Version

![version](https://img.shields.io/npm/v/@microsoft/sp-component-base/latest?color=green)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## Prerequisites

> Access to CE Quietalis website

## Solution

Solution|Author(s)
--------|---------
cse-news-webpart | Thomas CARON

## Version history

Version|Date|Comments
-------|----|--------
1.0|2 Novembre 2021|Initial release

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder
- In the command-line run:
  - **npm install**
  - **gulp serve**

> To deploy to your tenant
- In the cli run:
  - **npm install**
  - **gulp bundle --ship**
  - **gulp package-solution --ship**
- Drag the sharepoint/solution/cse-news.sppkg to your sharepoint applications

## Features

Ce webpart permet de récupérer les informations du CSE Quietalis.

Pour se faire, le webpart récupère la page html (fetch) du CSE Quietalis et ne garde que la partie des news afin de la traiter et de l'afficher sur Sharepoint.

La stylisation est effectuée via les fichiers scss.

## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Building for Microsoft teams](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/build-for-teams-overview)
- [Use Microsoft Graph in your solution](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/get-started/using-microsoft-graph-apis)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development
# Drop Document Zone - Intranet Webpart

## Summary

Cette DropZone permet de déposer des fichiers afin qu'ils soient envoyés dans un dossier de l'Intranet pour les traiter, de plus il est possible d'y rajouter une description.

![](https://i.imgur.com/xyhtNcN.png)

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.13-green.svg)

## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

## Prerequisites

> Any special pre-requisites?
- [Node.js](https://nodejs.org/en/download/releases/) version 14.x - 16.x
- SPO [SharePoint Framework](https://aka.ms/spfx) version 1.13

## Solution

Solution|Author(s)
--------|---------
react-dropzone | Thomas CARON

## Version history

Version|Date|Comments
-------|----|--------
1.0|29 Novembre 2021 |Initial release

## Disclaimer

**THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.**

---

## Minimal Path to Awesome

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm install**
  - **gulp serve**

> To build the solution:
- in the command-line run:
  - **gulp bundle --ship**
  - **gulp package-solution --ship**
  - **Find your .spfx solution in the sharepoint folder**
## References

- [Getting started with SharePoint Framework](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
- [Publish SharePoint Framework applications to the Marketplace](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/publish-to-marketplace-overview)
- [Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp) - Guidance, tooling, samples and open-source controls for your Microsoft 365 development
- [FilePond - Drag & Drop file uploads for SharePoint](https://filepond.io/blog/filepond-drag-drop-file-uploads-for-sharepoint/)
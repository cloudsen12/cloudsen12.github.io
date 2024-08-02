---
title: Repositories
date: 2024-07-31
author: CloudSEN12
tags:
  - Dev
description: "A brief overview of the tools/code used to build cloudSEN12."
featuredImage: /assets/1nuberepo.webp
---

## [**dataset**](https://github.com/cloudsen12/dataset)

This [**repository**](https://github.com/cloudsen12/dataset) contains the code used to create the cloudSEN12 dataset. It was written entirely in R using rgee to connect to Google Earth Engine, and stars and dplyr for data wrangling. The code is licensed by CloudSEN12 team under an [MIT License](https://opensource.org/license/MIT).

## [**models**](https://github.com/cloudsen12/models)

This [**repository**](https://github.com/cloudsen12/models) contains the code to run the cloud detection models included in the dataset. We created a custom docker image to run the Fmask Matlab software. This code is licensed by CloudSEN12 team under an [MIT License](https://opensource.org/license/MIT).

## [**cloudapp**](https://github.com/cloudsen12/CloudApp)

This [**repository**](https://github.com/cloudsen12/CloudApp) contains the Javascript code to build the CloudApp Earth Engine App. Click [**here**](https://ee-leslyarcelly213.projects.earthengine.app/view/cloudapp#run=true;sensor=Sentinel-2%20SR;lon=-76.39138073674154;lat=-12.316563873945507;rgb=SWIR1%2FNIR%2FGREEN;initYear=2018;initMonth=8;initDay=12;cloud=30;chipwidth=2;imgid=20190212T142031_20190212T143214_T19FDF;llb1=-1;ulb1=1;llndvi=-1;ulndvi=1;llb11=-1;ulb11=1;) to display our live demo. The code is licensed by CloudSEN12 team under an [MIT License](https://opensource.org/license/MIT). CloudApp is a adaptation of the [**ee-rgb-timeseries**](https://github.com/jdbcode/ee-rgb-timeseries) repository.

## [**figures**](https://github.com/cloudsen12/figures)

This [repository](https://github.com/cloudsen12/figures) contains the scripts for reproducing the paper figures. The code is licensed by CloudSEN12 team under an [MIT License](https://opensource.org/license/MIT).


## [**iris**](https://github.com/cloudsen12/iris)

This [repository](https://github.com/cloudsen12/iris) contains the IRIS (Intelligence foR Image Segmentation) active learning tool. This fantastic software has been created by [JohnMrziglod](https://github.com/JohnMrziglod) and [aliFrancis](https://github.com/aliFrancis). The code is licensed by ESA-PhiLab under a GNU General Public License v3.0.

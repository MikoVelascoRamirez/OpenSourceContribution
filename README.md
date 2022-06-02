# Visual Partner-ship - Code challenge

## Table of Contents
1. [General Info](#general-info)   
   - Description
   - Requirements
   - API Design System  
2. [Getting started](#getting-started)
   - Pre-requisites
   - Installation
3. [Technolgies](#technolgies)
4. [Test Executing](#test-executing)
   - Automated tests
   - Unit tests
5. [Functionality](#functionality)
   - GET endpoint: Getting list of students
   - GET endpoint: Getting email's students which are certificated
   - GET endpoint: Getting students with credits higher of 500.
6. [Authors](#authors)
7. [Acknowledgements](#acknowledgements)

### General Info
***

#### Description
This documment explains how to build and consult a simple Web API application using a Visual Partners **[source data](https://gist.github.com/carlogilmar/1f5164637fb77aecef3b9e6b9e2a9b63)** which has simple information based on a MVC design pattern.   

#### Requirements
To make this API, you need to accomplish these requirements:
  - Enable an endpoint to get a students list with his fields.
  - Enable an endpoint to get student's emails that have a certification.
  - Enable an endpoint to get students with 500 or more credits.

#### API Design System
The following flowchart shows how this project was designed, considering SoD (Separation of dutties).

```mermaid
    flowchart LR
    Client<-->api
    VisualPartnersController<-->server
    Reader<--->VisualPartners
    
    subgraph Client
        Browser
    end
    subgraph API
        direction TB
        server---api
    end
    subgraph Controller
        direction TB
        subgraph controller
        VisualPartnersController    
        end
        subgraph services
            VisualPartnersService
        end
        subgraph utils
            Reader
        end

        utils<--->controller<--->services
    end
    subgraph Model
        VisualPartners
    end
```

Taking a look at the last flowchart, this was designed on a Model-View-Controller paradigm, considering that each component has its own functions.

   1. **Model**: As mentioned at the beginning of this section, the json file of VisualPartners will be the data source, stored on a array format.
   2. **Controller**: In this part, it was recommended to design under three important elements, to mantain a better modularity:
      - **Utils/Reader**: this component reads the source data, bringing it as a JSON object type.
      - **Services/VisualPartnerService**: it works like an extension of controller, providing only the logic functions that will manipulate the information stored on the model.
      - **controller/VisualPartnersController** it will manage the requests from the client and the responses of data manipulation that will be return to the API.
   3. **API**: it will host the server functionalities and the API with the parsed data.

### Getting Started
These instructions will get you a copy of the project up and running on your local machine for running and testing purposes.

#### Pre-requisites
- A code text editor where you can clone this repository. (VS Code, Vim, Atom, Brackets, etc.)
- CLI Command (preferly if you have a distro Linux, no matter if you're using PowerShell)
- Node.js installed (preferly the latest version) to run the project.
- NPM to download and install dependencies.

#### Installation
To install this project, just follow the instructions below.
1. Clone the project (if you are on VS Code, just press ```Ctrl + Alt + P```) and paste the repo link.
2. Install dependencies
3. Run the project
  
```
git clone https://github.com/MikoVelascoRamirez/VisualPartnershipCodeChallenge

npm install

npm start
```
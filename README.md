# :skull: Scaffolding React typescript

**Boilerplate - Front End** is a [microservice](https://en.wikipedia.org/wiki/Microservices) that provides crew register, used to create trips and select members.

**This project** uses react-scripts with cra to build a static frontend using React deploying to AWS S3.

> **Table of contents**
> - [🔍 Requirements](#requirements)
> - [🔨 Project setup](#project-setup)
> - [📑 Available Scripts](#️available-scripts)
>   - [Server for development](#️server-for-development)
>   - [Build](#️build)
>   - [Get coverage](#get-coverage)
>   - [Check linter](#check-linter)
>   - [Unit tests](#unit-tests)
> - [⬆️ Deploy locally other environment](#deploy-locally)
> - [🔥 Destroy environment locally](#destroy-locally)
> - [📚 Learn more](#learn-more)
> - [💪 Dev Team](#dev-team)


## <a name="requirements"></a> 🔍 Requirements

| Dependencies                                 | Description               |
| -------------------------------------------- | ------------------------- |
| [![node-version]][node-download]             | Javascript Runtime        |
| [![sam-version]][sam-download]               | AWS SAM CLI               |
| [![docker-version]][docker-download]         | Virtualization containers |
| [![terraform-version]][terraform-download]   | Terraform                 |
| [![terragrunt-version]][terragrunt-download] | Wrapper for Terraform     |

## <a name="project-setup"></a> 🔨 Project setup

1. To **clone repository** you need to have [git](https://git-scm.com/downloads) installed:

```bash
git clone git@github.com:GrooveCommunity/boilerplate-frontend.git
```

2. Enter repository

```bash
cd boilerplate-frontend
```

3. To **install dependencies** you need to have [NodeJS](https://nodejs.org/en/) installed:

```bash
npm install
```

## <a name="available-scripts"></a> 📑 Available Scripts

In the project directory, you can run:

### <a name="server-for-development"></a> Server for development

Runs the app in the development mode this server compiles and hot-reloads with linter locally:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

> If you want works on style you need start the styles too.

### <a name="build"></a> Build

Builds the app for production to the `build` folder.

```bash
npm run build
```

> See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### <a name="get-coverage"></a> Get coverage

```bash
npm run coverage
```

### <a name="check-linter"></a> Check linter

```bash
npm run lint
```
### <a name="unit-tests"></a> Unit tests

Launches the test runner in the interactive watch mode.

```bash
npm run test
```

> See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## <a name="deploy-locally"></a> ⬆️ Deploy locally other environment

To deploy locally you need run [build](#️build) before proceed.

1. To create the s3 bucket use this, you need terragrunt [terragrunt][terragrunt-download] installed:

```bash
terragrunt apply --terragrunt-working-dir iac
```

> To learn more [Terragrunt](https://terragrunt.gruntwork.io/docs/).

2. Now deploy files using to aws using Node to run the AWS CLI with this command

```bash
npm run deploy
```

## <a name="destroy-locally"></a> 🔥 Destroy environment locally

1. Clear a s3 bucket using Node to run AWS CLI with this command

```bash
npm run remove
```

2. Now destroy s3 bucket with terraform

```bash
terragrunt destroy --terragrunt-working-dir iac
```
## <a name="learn-more"></a> Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## <a name="contributing-guide"></a> Contributing guide

To contribute to the project try to read the [CONTRIBUTING.md](/blob/master/CONTRIBUTING.md).

## <a name="dev-team"></a> 💪 Dev Team

This project exists thanks to all these people.

[![Marcos](https://avatars3.githubusercontent.com/u/12430365?s=100)](https://github.com/codermarcos)

[terraform-download]: https://learn.hashicorp.com/tutorials/terraform/install-cli
[terragrunt-download]: https://terragrunt.gruntwork.io/docs/getting-started/install/
[node-download]: https://nodejs.org/download/release/v14.14.0/
[docker-download]: https://docs.docker.com/engine/install/
[sam-download]: https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html
[terraform-version]: https://img.shields.io/badge/terraform-latest-blue
[terragrunt-version]: https://img.shields.io/badge/terragrunt-latest-blue
[node-version]: https://img.shields.io/badge/node-latest-blue
[sam-version]: https://img.shields.io/badge/sam-1.24.1-blue
[docker-version]: https://img.shields.io/badge/docker-latest-blue

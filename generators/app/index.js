'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the ${chalk.rgb(255,88,51).bold('Infura')} Web3 Wizard(Witch) dApp ${chalk.green('Generator')}!!!`
      )
    );
    this.log(`${chalk.white.bold.underline('========================================================================================')}`);
    this.log(`\n${chalk.rgb(255,88,51).bold(

         '  ^!~~^^:J@!:^^~!!:      !??J??7.  !J^   ^?   :J??????. ~7    ~7  .?????7:     .J?\n' +
         '       .:Y@?:.             ^&?     5#G7  7#   !&~       JB    ?B  :&!   7#:    PPB?\n' +
         '  !Y5PPP5G@P5PPP5J~        .#!     55.P5 7#   ~&JJJJJ^  JG    ?B  :#J   JP.   J#  &~\n' +
         '  7Y7^.  7@^  :~7Y~        .&!     5P  JPY#   !&.       !#^  .PP  :&7^!BP.   7#?77J#^\n' +
         '         ?@~               .&!     ??   !GY   ^5.       !#^  .PP  .5:  .Y?  .5~    ?J\n' +
         '  7BBGPPPG#PPPPGBB^      !JJPY??.  ??   !GY   ^5.        !YJJY?.  .5:  .y?  .5~    ?J'
      )}
    `);
    this.log(`${chalk.white.bold.underline('========================================================================================')}\n`);

    this.log("=======================================================================================");
    this.log(`${chalk.green('This command line tool will help your create a customized web3 dapp in minutes!')}`);
    this.log("=======================================================================================\n");

    this.log("Don't have a Infura Web3 API Key yet?  Check out our Getting Started with Infura article:  https://blog.infura.io/post/getting-started-with-infura-28e41844cc89 \n");

    const prompts = [
      {
        type: 'input',
        name: 'projectName',
        message: 'Your project name',
        default: 'Your Project Name Properly Capitalized'
      },
      {
        type: 'input',
        name: 'githubName',
        message: 'Your Github user name',
        default: 'anataliocs'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Your First and Last Name',
        default: 'Chris Anatalio'
      },
      {
        type: 'input',
        name: 'solidityVersion',
        message: 'Your prefered Solidity Version',
        default: '0.8.13'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.log("\n===================================================");
    this.log(`${chalk.green('Generating your dApp according to your specifications!!!!')}`);
    this.log("===================================================\n");

    this.log("Project name:", this.props.projectName);
    this.log("Generating README File according to your parameters!");
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      { projectName: this.props.projectName,
        githubName: this.props.githubName,
        author: this.props.author
      }
    );

    this.log("Generating MIT License File according to your parameters!");
    this.fs.copyTpl(
      this.templatePath('LICENSE'),
      this.destinationPath('LICENSE'),
      { author: this.props.author }
    );

    this.log("Generating your truffle-config.js file!");
    this.fs.copyTpl(
      this.templatePath('truffle-config.js'),
      this.destinationPath('truffle-config.js'),
      { solidityVersion: this.props.solidityVersion }
    );

    this.log("Generating your package.json file!");
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      { projectName: this.props.projectName }
    );

    // Components

    this.log("Generating your NextJS components!");
    this.fs.copy(
      this.templatePath('components/Breadcrumbs.tsx'),
      this.destinationPath('components/Breadcrumbs.tsx')
    );
    this.fs.copy(
      this.templatePath('components/Card.tsx'),
      this.destinationPath('components/Card.tsx')
    );
    this.fs.copy(
      this.templatePath('components/ConnectButton.tsx'),
      this.destinationPath('components/ConnectButton.tsx')
    );

    // Pages

    this.log("Generating your NextJS pages!");
    this.fs.copyTpl(
      this.templatePath('pages/index.tsx'),
      this.destinationPath('pages/index.tsx'),
      { projectName: this.props.projectName }
    );

    // Boilerplate Config Files

    this.log("Generating your .env file!");
    this.fs.copy(
      this.templatePath('.env'),
      this.destinationPath('.env')
    );

    this.log("Generating Boilerplate static files!");
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('custom.modules.d.ts'),
      this.destinationPath('custom.modules.d.ts')
    );
    this.fs.copy(
      this.templatePath('next.config.js'),
      this.destinationPath('next.config.js')
    );
    this.fs.copy(
      this.templatePath('next-env.d.ts'),
      this.destinationPath('next-env.d.ts')
    );
  }

  install() {
    this.installDependencies();

    this.log("===================================================");
    this.log(`${chalk.green('Your dapp has been generated!!!!')}`);
    this.log(`${chalk.gray('Next Steps for you:')}`);
    this.log("===================================================\n");
    this.log(`${chalk.green.bold.underline('✓')} ${chalk.gray('Setup your .env file: ')} vi .env`);
    this.log(`${chalk.green.bold.underline('✓')} ${chalk.gray('Build the Project by running: ')} yarn`);
    this.log(`${chalk.green.bold.underline('✓')} ${chalk.gray('Run the Project by running: ')} yarn dev\n`);
    this.log(`${chalk.green.bold.underline('✓')} ${chalk.gray('Open the Project in your browser at: ')} http://localhost:3000\n`);
    this.log(`${chalk.green.bold.underline('✓')} ${chalk.gray('Commit and push your project to Github')} \n`);

    this.log(`${chalk.gray('Problems with this generator? ')} Open an issue at: https://github.com/anataliocs/generator-infura-web-3-wizard/issues`);
    this.log(`${chalk.gray('Want to Learn more about NFTs? ')} Check out: https://blog.infura.io/post/comparing-nft-standards-erc-721-vs-erc-721a-vs-erc-1155`);
    this.log(`${chalk.gray('Need tech support? ')} Open a ticket: https://app.infura.io/support/ticket`);

    this.log(`\n${chalk.green.bold('Thank you Infura Fam!!! ')} Go forth and build the next amazing dApp and continue your Web3 Developer Journey!!!`);
    this.log("=============================================================================================================================\n\n");
  }
};

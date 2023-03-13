"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to ${chalk
          .rgb(255, 88, 51)
          .bold("Infura")} Cruxy!  The Web3 dApp ${chalk.green("Generator")}!!!`
      )
    );
    this.log(
      `${chalk.white.bold.underline(
        "========================================================================================"
      )}`
    );
    this.log(`\n${chalk
      .rgb(255, 88, 51)
      .bold(
        "  ^!~~^^:J@!:^^~!!:      !??J??7.  !J^   ^?   :J??????. ~7    ~7  .?????7:     .J?\n" +
          "       .:Y@?:.             ^&?     5#G7  7#   !&~       JB    ?B  :&!   7#:    PPB?\n" +
          "  !Y5PPP5G@P5PPP5J~        .#!     55.P5 7#   ~&JJJJJ^  JG    ?B  :#J   JP.   J#  &~\n" +
          "  7Y7^.  7@^  :~7Y~        .&!     5P  JPY#   !&.       !#^  .PP  :&7^!BP.   7#?77J#^\n" +
          "         ?@~               .&!     ??   !GY   ^5.       !#^  .PP  .5:  .Y?  .5~    ?J\n" +
          "  7BBGPPPG#PPPPGBB^      !JJPY??.  ??   !GY   ^5.        !YJJY?.  .5:  .y?  .5~    ?J"
      )}
    `);
    this.log(
      `${chalk.white.bold.underline(
        "========================================================================================"
      )}\n`
    );

    this.log(
      "======================================================================================="
    );
    this.log(
      `${chalk.green(
        "This command line tool will help your create a customized web3 dapp in minutes!"
      )}`
    );
    this.log(
      "=======================================================================================\n"
    );

    this.log(
      "Don't have a Infura Web3 API Key yet?  Check out our Getting Started with Infura article:  https://blog.infura.io/post/getting-started-with-infura-28e41844cc89 \n"
    );

    const prompts = [
      {
        type: "input",
        name: "projectName",
        message: "Your project name",
        default: "Your Project Name Properly Capitalized"
      },
      {
        type: "input",
        name: "githubName",
        message: "Your Github user name",
        default: "anataliocs"
      },
      {
        type: "input",
        name: "author",
        message: "Your First and Last Name",
        default: "Chris Anatalio"
      },
      {
        type: "input",
        name: "solidityVersion",
        message: "Your prefered Solidity Version",
        default: "0.8.19"
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.log("\n===================================================");
    this.log(
      `${chalk.green(
        "Generating your dApp according to your specifications!!!!"
      )}`
    );
    this.log("===================================================\n");

    this.log("Project name:", this.props.projectName);

    // Components

    this.log("Generating your NextJS components!");
    this.fs.copy(
      this.templatePath("components/Breadcrumbs.tsx"),
      this.destinationPath("components/Breadcrumbs.tsx")
    );
    this.fs.copy(
      this.templatePath("components/Card.tsx"),
      this.destinationPath("components/Card.tsx")
    );
    this.fs.copy(
      this.templatePath("components/ConnectButton.tsx"),
      this.destinationPath("components/ConnectButton.tsx")
    );
    this.fs.copy(
      this.templatePath("components/ConnectWallet.tsx"),
      this.destinationPath("components/ConnectWallet.tsx")
    );
    this.fs.copy(
      this.templatePath("components/HelpText.tsx"),
      this.destinationPath("components/HelpText.tsx")
    );
    this.fs.copy(
      this.templatePath("components/HomePage.tsx"),
      this.destinationPath("components/HomePage.tsx")
    );
    this.fs.copy(
      this.templatePath("components/IconButton.tsx"),
      this.destinationPath("components/IconButton.tsx")
    );
    this.fs.copy(
      this.templatePath("components/IPFSUploadForm.tsx"),
      this.destinationPath("components/IPFSUploadForm.tsx")
    );
    this.fs.copy(
      this.templatePath("components/LearnMore.tsx"),
      this.destinationPath("components/LearnMore.tsx")
    );
    this.fs.copy(
      this.templatePath("components/Link.tsx"),
      this.destinationPath("components/Link.tsx")
    );
    this.fs.copy(
      this.templatePath("components/LoadingSpinner.tsx"),
      this.destinationPath("components/LoadingSpinner.tsx")
    );
    this.fs.copy(
      this.templatePath("components/Modal.tsx"),
      this.destinationPath("components/Modal.tsx")
    );
    this.fs.copy(
      this.templatePath("components/Navbar.tsx"),
      this.destinationPath("components/Navbar.tsx")
    );
    this.fs.copy(
      this.templatePath("components/PrimaryButton.tsx"),
      this.destinationPath("components/PrimaryButton.tsx")
    );
    this.fs.copy(
      this.templatePath("components/ReadOnly.tsx"),
      this.destinationPath("components/ReadOnly.tsx")
    );
    this.fs.copy(
      this.templatePath("components/SelectInput.tsx"),
      this.destinationPath("components/SelectInput.tsx")
    );
    this.fs.copy(
      this.templatePath("components/SettingsButton.tsx"),
      this.destinationPath("components/SettingsButton.tsx")
    );
    this.fs.copy(
      this.templatePath("components/StyleGuide.tsx"),
      this.destinationPath("components/StyleGuide.tsx")
    );
    this.fs.copy(
      this.templatePath("components/TextInput.tsx"),
      this.destinationPath("components/TextInput.tsx")
    );
    this.fs.copy(
      this.templatePath("components/TruncatedAddress.tsx"),
      this.destinationPath("components/TruncatedAddress.tsx")
    );
    this.fs.copy(
      this.templatePath("components/WalletBalance.tsx"),
      this.destinationPath("components/WalletBalance.tsx")
    );

    this.fs.copy(
      this.templatePath("components/icons/Add.tsx"),
      this.destinationPath("components/icons/Add.tsx")
    );
    this.fs.copy(
      this.templatePath("components/icons/ArrowIcon.tsx"),
      this.destinationPath("components/icons/ArrowIcon.tsx")
    );
    this.fs.copy(
      this.templatePath("components/icons/Bell.tsx"),
      this.destinationPath("components/icons/Bell.tsx")
    );
    this.fs.copy(
      this.templatePath("components/icons/Check.tsx"),
      this.destinationPath("components/icons/Check.tsx")
    );
    this.fs.copy(
      this.templatePath("components/icons/ChevronRight.tsx"),
      this.destinationPath("components/icons/ChevronRight.tsx")
    );
    this.fs.copy(
      this.templatePath("components/icons/ClipboardIcon.tsx"),
      this.destinationPath("components/icons/ClipboardIcon.tsx")
    );
    this.fs.copy(
      this.templatePath("components/icons/CloseIcon.tsx"),
      this.destinationPath("components/icons/CloseIcon.tsx")
    );
    this.fs.copy(
      this.templatePath("components/icons/CloseWithBG.tsx"),
      this.destinationPath("components/icons/CloseWithBG.tsx")
    );
    this.fs.copy(
      this.templatePath("components/icons/Document.tsx"),
      this.destinationPath("components/icons/Document.tsx")
    );
    this.fs.copy(
      this.templatePath("components/icons/DocumentUpload.tsx"),
      this.destinationPath("components/icons/DocumentUpload.tsx")
    );
    this.fs.copy(
      this.templatePath("components/icons/EthereumIcon.tsx"),
      this.destinationPath("components/icons/EthereumIcon.tsx")
    );
    this.fs.copy(
      this.templatePath("components/icons/InfoIcon.tsx"),
      this.destinationPath("components/icons/InfoIcon.tsx")
    );
    this.fs.copy(
      this.templatePath("components/icons/InfuraLogo.tsx"),
      this.destinationPath("components/icons/InfuraLogo.tsx")
    );
    this.fs.copy(
      this.templatePath("components/icons/Remove.tsx"),
      this.destinationPath("components/icons/Remove.tsx")
    );
    this.fs.copy(
      this.templatePath("components/icons/Upload.tsx"),
      this.destinationPath("components/icons/Upload.tsx")
    );

    this.fs.copy(
      this.templatePath("components/mint/index.tsx"),
      this.destinationPath("components/mint/index.tsx")
    );
    this.fs.copy(
      this.templatePath("components/transaction/index.tsx"),
      this.destinationPath("components/transaction/index.tsx")
    );

    // Smart Contracts

    this.log("Generating your Solidity Smart Contracts!");
    this.fs.copy(
      this.templatePath("contracts/Migrations.sol"),
      this.destinationPath("contracts/Migrations.sol")
    );
    this.fs.copy(
      this.templatePath("contracts/NFTContract.sol"),
      this.destinationPath("contracts/NFTContract.sol")
    );

    // Helpers

    this.log("Generating your helper scripts!");
    this.fs.copy(
      this.templatePath("helpers/store.ts"),
      this.destinationPath("helpers/store.ts")
    );
    this.fs.copy(
      this.templatePath("helpers/store_notifications.ts"),
      this.destinationPath("helpers/store_notifications.ts")
    );
    this.fs.copy(
      this.templatePath("helpers/store_transaction.ts"),
      this.destinationPath("helpers/store_transaction.ts")
    );

    // Helpers

    this.log("Generating your Truffle migration scripts!");
    this.fs.copy(
      this.templatePath("migrations/1_initial_migration.js"),
      this.destinationPath("migrations/1_initial_migration.js")
    );
    this.fs.copy(
      this.templatePath("migrations/2_deploy_contracts.js"),
      this.destinationPath("migrations/2_deploy_contracts.js")
    );

    // Pages

    this.log("Generating your NextJS pages!");
    this.fs.copy(
      this.templatePath("pages/_app.tsx"),
      this.destinationPath("pages/_app.tsx")
    );
    this.fs.copyTpl(
      this.templatePath("pages/styleguide.tsx"),
      this.destinationPath("pages/styleguide.tsx"),
      { projectName: this.props.projectName }
    );
    this.fs.copyTpl(
      this.templatePath("pages/index.tsx"),
      this.destinationPath("pages/index.tsx"),
      { projectName: this.props.projectName }
    );

    this.fs.copy(
      this.templatePath("pages/api/transactions/getBalance.ts"),
      this.destinationPath("pages/api/transactions/getBalance.ts")
    );
    this.fs.copy(
      this.templatePath("pages/api/transactions/getTransaction.ts"),
      this.destinationPath("pages/api/transactions/getTransaction.ts")
    );

    this.fs.copy(
      this.templatePath("pages/mint/index.tsx"),
      this.destinationPath("pages/mint/index.tsx")
    );
    this.fs.copy(
      this.templatePath("pages/mint/mint.tsx"),
      this.destinationPath("pages/mint/mint.tsx")
    );
    this.fs.copy(
      this.templatePath("pages/mint/upload.tsx"),
      this.destinationPath("pages/mint/upload.tsx")
    );

    this.fs.copy(
      this.templatePath("pages/transaction/connect.tsx"),
      this.destinationPath("pages/transaction/connect.tsx")
    );
    this.fs.copy(
      this.templatePath("pages/transaction/index.tsx"),
      this.destinationPath("pages/transaction/index.tsx")
    );
    this.fs.copy(
      this.templatePath("pages/transaction/review.tsx"),
      this.destinationPath("pages/transaction/review.tsx")
    );
    this.fs.copy(
      this.templatePath("pages/transaction/transfer.tsx"),
      this.destinationPath("pages/transaction/transfer.tsx")
    );

    // Public Files

    this.log("Generating your font and image Files!");
    this.fs.copy(this.templatePath("public"), this.destinationPath("public"));

    // Styles

    this.log("Generating your style Files!");
    this.fs.copy(this.templatePath("styles"), this.destinationPath("styles"));

    // Tests

    this.log("Generating your test Files!");
    this.fs.copy(
      this.templatePath("test/.gitkeep"),
      this.destinationPath("test/.gitkeep")
    );

    // Utils

    this.log("Generating your utility Files!");
    this.fs.copy(
      this.templatePath("utils/ipfs.ts"),
      this.destinationPath("utils/ipfs.ts")
    );
    this.fs.copy(
      this.templatePath("utils/mint.ts"),
      this.destinationPath("utils/mint.ts")
    );
    this.fs.copy(
      this.templatePath("utils/smartContract.ts"),
      this.destinationPath("utils/smartContract.ts")
    );
    this.fs.copy(
      this.templatePath("utils/transaction.ts"),
      this.destinationPath("utils/transaction.ts")
    );

    // Boilerplate Config Files

    this.log("Generating your .env file!");
    this.fs.copy(this.templatePath(".env"), this.destinationPath(".env"));

    this.log("Generating Boilerplate static files!");
    this.fs.copy(
      this.templatePath(".gitignore"),
      this.destinationPath(".gitignore")
    );
    this.fs.copy(
      this.templatePath("custom.modules.d.ts"),
      this.destinationPath("custom.modules.d.ts")
    );

    this.log("Generating MIT License File according to your parameters!");
    this.fs.copyTpl(
      this.templatePath("LICENSE"),
      this.destinationPath("LICENSE"),
      { author: this.props.author }
    );

    this.fs.copy(
      this.templatePath("next.config.js"),
      this.destinationPath("next.config.js")
    );
    this.fs.copy(
      this.templatePath("next-env.d.ts"),
      this.destinationPath("next-env.d.ts")
    );

    this.log("Generating your package-lock.json file!");
    this.fs.copyTpl(
      this.templatePath("package.json"),
      this.destinationPath("package.json"),
      { projectName: this.props.projectName.replaceAll(" ", "-") }
    );

    this.fs.copy(
      this.templatePath("package-lock.json"),
      this.destinationPath("package-lock.json")
    );
    this.fs.copy(
      this.templatePath("postcss.config.js"),
      this.destinationPath("postcss.config.js")
    );
    this.fs.copy(
      this.templatePath("prettier.config.js"),
      this.destinationPath("prettier.config.js")
    );
    this.fs.copy(
      this.templatePath("pull_request_template.md"),
      this.destinationPath("pull_request_template.md")
    );

    this.fs.copyTpl(
      this.templatePath("README.md"),
      this.destinationPath("README.md"),
      {
        projectName: this.props.projectName,
        githubProjectSlug: this.props.projectName
          .replaceAll(" ", "-")
          .toLowerCase(),
        githubName: this.props.githubName,
        author: this.props.author
      }
    );

    this.fs.copy(
      this.templatePath("tailwind.config.js"),
      this.destinationPath("tailwind.config.js")
    );
    this.fs.copy(
      this.templatePath("template.env"),
      this.destinationPath("template.env")
    );

    this.log("Generating your truffle-config.js file!");
    this.fs.copyTpl(
      this.templatePath("truffle-config.js"),
      this.destinationPath("truffle-config.js"),
      { solidityVersion: this.props.solidityVersion }
    );

    this.fs.copy(
      this.templatePath("tsconfig.json"),
      this.destinationPath("tsconfig.json")
    );
    this.fs.copy(
      this.templatePath("window.d.ts"),
      this.destinationPath("window.d.ts")
    );
    this.fs.copy(
      this.templatePath("yarn.lock"),
      this.destinationPath("yarn.lock")
    );
  }

  install() {
    this.yarnInstall();

    this.log("===================================================");
    this.log(`${chalk.green("Your dapp has been generated!!!!")}`);
    this.log(`${chalk.gray("Next Steps for you:")}`);
    this.log("===================================================\n");
    this.log(
      `${chalk.green.bold.underline("✓")} ${chalk.gray(
        "Setup your .env file: "
      )} vi .env`
    );
    this.log(
      `${chalk.green.bold.underline("✓")} ${chalk.gray(
        "Build the Project by running: "
      )} yarn`
    );
    this.log(
      `${chalk.green.bold.underline("✓")} ${chalk.gray(
        "Run the Project by running: "
      )} yarn dev\n`
    );
    this.log(
      `${chalk.green.bold.underline("✓")} ${chalk.gray(
        "Open the Project in your browser at: "
      )} http://localhost:3000\n`
    );
    this.log(
      `${chalk.green.bold.underline("✓")} ${chalk.gray(
        "Commit and push your project to Github"
      )} \n`
    );

    this.log(
      `${chalk.gray(
        "Problems with this generator? "
      )} Open an issue at: https://github.com/anataliocs/infura-web3-cruxy/issues`
    );
    this.log(
      `${chalk.gray(
        "Want to Learn more about NFTs? "
      )} Check out: https://blog.infura.io/post/comparing-nft-standards-erc-721-vs-erc-721a-vs-erc-1155`
    );
    this.log(
      `${chalk.gray(
        "Need tech support? "
      )} Open a ticket: https://app.infura.io/support/ticket`
    );

    this.log(
      `\n${chalk.green.bold(
        "Thank you Infura Fam!!! "
      )} Go forth and build the next amazing dApp and continue your Web3 Developer Journey!!!`
    );
    this.log(
      "=============================================================================================================================\n\n"
    );
  }
};

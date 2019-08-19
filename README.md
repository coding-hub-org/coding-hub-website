# Coding Hub Website

This is the repository for the official website of Coding Hub Orgnaziation. We are a club at SUNY Plattsburgh dedicated to develop software solutions, web and mobile applications, to improve the services on Campus. We also offer build portfolio websites for students and provide resources for anyone who is interested in learning how to code. If you are a student at SUNY Plattsburgh and would like to join us, our meeting dates will be posted soon. So keep yourselves updated here or the website.

## Getting Started

These are instrucitons on how to run our website locally on your machine.

### Prerequisites

Before you begin, you should have [Node.js](https://nodejs.org/en/ "Node JS HomePage") and [yarn](https://yarnpkg.com/en/ "Yarn HomePage"). If you do not have them installed you can install them from the links or using the commands provided below (the commands do not work in all operating systems).

* Node JS
    - https://nodejs.org
* Yarn 
    - https://yarnpkg.com
    - `curl -o- -L https://yarnpkg.com/install.sh | bash`
* git - https://git-scm.com/downloads

### Installing

You can clone the repository and install the necessary dependencies using the following commands:
```
git clone https://github.com/coding-hub-org/coding-hub-website.git
cd coding-hub-website
yarn
```

## Running the tests

We use jest with enzyme to test our react projects.

To run the tests use the following command:
```
yarn test
```
If you have written tests that use snapshots. Make sure to update them using the `-u` flag.
```
yarn test -u
```

You can also specify a path for a specific file to be tested.
```
yarn test src/components/Navbar
```

### Coding style tests

We use both prettier and eslint to test our coding styles. If you want prettier and eslint to fix your code according to our standards, run the command:
```
yarn fixstyle
```

## Deployment

Our site is automatically deployed to our hosting service. Any changes made to the master branch of this repository will be automatically deployed to show in production.

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Yarn](https://yarnpkg.com/) - Dependency Management

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



# Random Quote Machine

This is a Random Quote Machine app built with **React** and **SCSS**. It generates random quotes from a predefined list and allows users to tweet them directly. The app is designed to meet the project requirements outlined by freeCodeCamp's **Frontend Libraries** section, specifically focusing on learning frontend frameworks like React.

## Objective

The objective of this project is to build a Random Quote Machine that meets the following criteria:
- Generate a random quote on load.
- Display the quote text and its author.
- Fetch a new quote when the user clicks a button.
- Allow the user to tweet the displayed quote.

- ## Installation

To run this project using Docker, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/random-quote-machine.git
    cd random-quote-machine
    ```

2. Build the Docker image:
    ```bash
    docker build -t random-quote-machine .
    ```

3. Run the Docker container:
    ```bash
    docker run -p 80:80 random-quote-machine
    ```

This will start the application, and you can access it in your browser at `http://localhost`.

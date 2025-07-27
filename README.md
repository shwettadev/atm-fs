# atm-fs
This project is a full stack application built with React for the frontend and Java Spring Boot for the backend. It leverages object-oriented programming (OOP) principles in Java to structure backend logic, ensuring modularity and maintainability. The backend uses Spring Boot fundamentals such as dependency injection, RESTful APIs, and auto-configuration to provide robust server-side functionality. On the frontend, React fundamentals like component-based architecture, state management, and hooks are used to create an interactive user interface. Together, these technologies deliver a scalable and modern web application.


| Endpoint            | Method | Input                              | Output                              |
|---------------------|--------|------------------------------------|-------------------------------------|
| /atm/insertCard     | POST   | JSON body with card details        | JSON response with card info/status |
| /atm/enterPin       | POST   | JSON body with card number and PIN | JSON response with authentication info |
| /atm/getBalance     | GET    | Query param: card number           | JSON response with balance          |
| /atm/withdraw       | POST   | JSON body with card number, amount | JSON response with transaction status |
| /atm/deposit        | POST   | JSON body with card number, amount | JSON response with transaction status |
| /atm/miniStatement  | GET    | Query param: card number           | JSON response with transaction list |
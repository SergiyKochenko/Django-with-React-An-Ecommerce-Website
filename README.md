# Ecommerce

This is a full-stack ecommerce application built with Django for the backend and React for the frontend.

## Project Structure

The project is organized as follows:

- `backend/`: Contains the main Django project files.
  - `backend/settings.py`: Django settings for the project.
  - `backend/urls.py`: URL routing for the project.
  - `backend/wsgi.py`: WSGI configuration for deployment.
  - `manage.py`: Command-line utility for administrative tasks.
- `base/`: Contains the Django app with models, views, and other components.
  - `base/models.py`: Database models.
  - `base/views.py`: Views for handling requests.
  - `base/serializers.py`: Serializers for converting data.
  - `base/urls.py`: URL routing for the app.
  - `base/products.py`: Sample product data.
- `frontend/`: Contains the React application.
  - `public/`: Contains static files and the main HTML file.
    - `public/images/`: Contains images used in the application.
      - `public/images/airpods.jpg`: Image for Airpods Wireless Bluetooth Headphones.
      - `public/images/phone.jpg`: Image for iPhone 11 Pro 256GB Memory.
      - `public/images/camera.jpg`: Image for Cannon EOS 80D DSLR Camera.
      - `public/images/playstation.jpg`: Image for Sony Playstation 4 Pro White Version.
      - `public/images/mouse.jpg`: Image for Logitech G-Series Gaming Mouse.
      - `public/images/alexa.jpg`: Image for Amazon Echo Dot 3rd Generation.
      - `public/images/galaxy.jpg`: Image for Samsung Galaxy S21 Ultra.
      - `public/images/laptop.jpg`: Image for Dell XPS 13 Laptop.
  - `src/`: Contains the React components and main application logic.
    - `src/components/`: Reusable React components.
    - `src/pages/`: React components representing different pages.
    - `src/App.js`: Main application component.
    - `src/index.js`: Entry point for the React application.

## Backend

The backend is built with Django and includes the following main components:

- `backend/`: Contains the main Django project files.
- `base/`: Contains the Django app with models, views, and other components.

### Models

The following models are defined in the `base/models.py` file:

- `Product`: Represents a product in the ecommerce store.
- `Review`: Represents a review for a product.
- `Order`: Represents an order placed by a user.
- `OrderItem`: Represents an item in an order.
- `ShippingAddress`: Represents the shipping address for an order.

### Running the Backend

1. Create a virtual environment and activate it:
    ```sh
    python -m venv myenv
    source myenv/Scripts/activate  # On Windows
    source myenv/bin/activate      # On macOS/Linux
    ```

2. Install the dependencies:
    ```sh
    pip install -r requirements.txt
    ```

3. Run the development server:
    ```sh
    python manage.py runserver
    ```

### Additional Backend Setup

1. Install `virtualenv`:
    ```sh
    pip install virtualenv
    ```

2. Create and activate a virtual environment:
    ```sh
    virtualenv myenv
    source myenv/Scripts/activate
    ```

3. Install Django:
    ```sh
    pip install django
    ```

4. Start a new Django project:
    ```sh
    django-admin startproject backend
    ```

5. Start the development server:
    ```sh
    python manage.py runserver
    ```

6. Create a new Django app:
    ```sh
    python manage.py startapp base
    ```

7. Install additional dependencies:
    ```sh
    pip install djangorestframework
    pip install django-cors-headers
    ```

8. Create a superuser:
    ```sh
    python manage.py createsuperuser
    ```

## Frontend

The frontend is built with React and includes the following main components:

- `public/`: Contains static files and the main HTML file.
  - `public/images/`: Contains images used in the application.
    - `public/images/airpods.jpg`: Image for Airpods Wireless Bluetooth Headphones.
    - `public/images/phone.jpg`: Image for iPhone 11 Pro 256GB Memory.
    - `public/images/camera.jpg`: Image for Cannon EOS 80D DSLR Camera.
    - `public/images/playstation.jpg`: Image for Sony Playstation 4 Pro White Version.
    - `public/images/mouse.jpg`: Image for Logitech G-Series Gaming Mouse.
    - `public/images/alexa.jpg`: Image for Amazon Echo Dot 3rd Generation.
    - `public/images/galaxy.jpg`: Image for Samsung Galaxy S21 Ultra.
    - `public/images/laptop.jpg`: Image for Dell XPS 13 Laptop.
- `src/`: Contains the React components and main application logic.

### Available Scripts

In the `frontend` directory, you can run:

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.
- `npm run eject`: Ejects the configuration files.

### Running the Frontend

1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

### Additional Frontend Setup

1. Install React Bootstrap:
    ```sh
    npm install react-bootstrap
    ```

2. Install React Router:
    ```sh
    npm install react-router-dom react-router-bootstrap
    ```

3. Install Axios:
    ```sh
    npm install axios
    ```

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Django Documentation](https://docs.djangoproject.com/en/stable/)
- [React Documentation](https://reactjs.org/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)

## License

This project is licensed under the MIT License.
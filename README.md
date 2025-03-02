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
      - `src/components/Product.js`: Component to display a product.
      - `src/components/Loader.js`: Component to display a loading spinner.
      - `src/components/Message.js`: Component to display messages.
      - `src/components/Rating.js`: Component to display product ratings.
    - `src/pages/`: React components representing different pages.
      - `src/pages/HomeScreen.js`: Component for the home page.
      - `src/pages/ProductScreen.js`: Component for the product details page.
    - `src/actions/`: Contains Redux action creators.
      - `src/actions/productActions.js`: Actions related to product data.
    - `src/constants/`: Contains constant definitions.
      - `src/constants/productConstants.js`: Constants for product actions.
    - `src/reducers/`: Contains Redux reducers.
      - `src/reducers/productReducers.js`: Reducers for product data.
    - `src/store.js`: Redux store configuration.
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

### Image Uploads

The `Product` model includes an `ImageField` for handling image uploads. Images are stored in the `static/images` directory.

### Views

The following views are defined in the `base/views.py` file:

- `getRouters`: Returns a list of available API routes.
- `getProducts`: Returns a list of all products.
- `getProduct`: Returns details of a single product.

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
    pip install pillow
    ```

8. Create a superuser:
    ```sh
    python manage.py createsuperuser
    ```

9. Make migrations and migrate the database:
    ```sh
    python manage.py makemigrations
    python manage.py migrate
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
  - `src/components/`: Reusable React components.
    - `src/components/Product.js`: Component to display a product.
    - `src/components/Loader.js`: Component to display a loading spinner.
    - `src/components/Message.js`: Component to display messages.
    - `src/components/Rating.js`: Component to display product ratings.
  - `src/pages/`: React components representing different pages.
    - `src/pages/HomeScreen.js`: Component for the home page.
    - `src/pages/ProductScreen.js`: Component for the product details page.
  - `src/actions/`: Contains Redux action creators.
    - `src/actions/productActions.js`: Actions related to product data.
  - `src/constants/`: Contains constant definitions.
    - `src/constants/productConstants.js`: Constants for product actions.
  - `src/reducers/`: Contains Redux reducers.
    - `src/reducers/productReducers.js`: Reducers for product data.
  - `src/store.js`: Redux store configuration.
  - `src/App.js`: Main application component.
  - `src/index.js`: Entry point for the React application.

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.
- `npm test`: Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
- `npm run build`: Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed! See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
- `npm run eject`: **Note: this is a one-way operation. Once you `eject`, you can't go back!** If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project. Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own. You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Manual Test of the App

| Category       | Command/Action                                                                 |
|----------------|-------------------------------------------------------------------------------|
| Backend Setup  | `pip install virtualenv`                                                      |
|                | `virtualenv myenv`                                                            |
|                | `source myenv/Scripts/activate`                                               |
|                | `pip install django`                                                          |
|                | `django-admin startproject backend`                                           |
|                | `python manage.py runserver`                                                  |
|                | `python manage.py startapp base`                                              |
|                | `pip install djangorestframework`                                             |
|                | `pip install django-cors-headers`                                             |
|                | `pip install pillow`                                                          |
|                | `python manage.py createsuperuser`                                            |
|                | `python manage.py makemigrations`                                             |
|                | `python manage.py migrate`                                                    |
| Frontend Setup | `npm install react-bootstrap`                                                 |
|                | `npm install react-router-dom react-router-bootstrap`                         |
|                | `npm install axios`                                                           |
|                | `npm install redux react-redux redux-thunk redux-devtools-extension --legacy-peer-deps` |
|                | `npm start`                                                                   |
| React Commands | `rfce` (React Functional Component with Export)                               |
|                | `imp` (Import statement)                                                      |
|                | `imd` (Import Default)                                                        |

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Django Documentation](https://docs.djangoproject.com/en/stable/)
- [React Documentation](https://reactjs.org/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)

## License

This project is licensed under the MIT License.
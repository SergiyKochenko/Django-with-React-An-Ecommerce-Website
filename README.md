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

This project was bootstrapped with <a href="https://github.com/facebook/create-react-app" target="_blank">Create React App</a>.

### Available Scripts

In the project directory, you can run:

- <a href="http://localhost:3000" target="_blank">`npm start`</a>: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.
- <a href="https://facebook.github.io/create-react-app/docs/running-tests" target="_blank">`npm test`</a>: Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
- <a href="https://facebook.github.io/create-react-app/docs/deployment" target="_blank">`npm run build`</a>: Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed! See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
- <a href="https://facebook.github.io/create-react-app/docs/advanced-configuration" target="_blank">`npm run eject`</a>: **Note: this is a one-way operation. Once you `eject`, you can't go back!** If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project. Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own. You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the <a href="https://facebook.github.io/create-react-app/docs/getting-started" target="_blank">Create React App documentation</a>.

To learn React, check out the <a href="https://reactjs.org/" target="_blank">React documentation</a>.

### Code Splitting

This section has moved here: <a href="https://facebook.github.io/create-react-app/docs/code-splitting" target="_blank">https://facebook.github.io/create-react-app/docs/code-splitting</a>

### Analyzing the Bundle Size

This section has moved here: <a href="https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size" target="_blank">https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size</a>

### Making a Progressive Web App

This section has moved here: <a href="https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app" target="_blank">https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app</a>

### Advanced Configuration

This section has moved here: <a href="https://facebook.github.io/create-react-app/docs/advanced-configuration" target="_blank">https://facebook.github.io/create-react-app/docs/advanced-configuration</a>

### Deployment

This section has moved here: <a href="https://facebook.github.io/create-react-app/docs/deployment" target="_blank">https://facebook.github.io/create-react-app/docs/deployment</a>

### `npm run build` fails to minify

This section has moved here: <a href="https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify" target="_blank">https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify</a>

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
|                | `pip install djangorestframework-simplejwt`                                   |
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

## Recent Updates

### Fixed Navigation Error in ProductScreen

-   Replaced the usage of `history` with `useNavigate` from `react-router-dom` in the `ProductScreen` component to fix the runtime error when pressing the "Add to Cart" button.

```javascript
import { useNavigate } from 'react-router-dom';

function ProductScreen () {
  // ...existing code...
  const navigate = useNavigate();
  // ...existing code...
  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };
  // ...existing code...
}
```

### Updated Redux Store Configuration

- Updated the `store.js` file to load cart items and user info from local storage into the initial state.

```javascript
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
}
```

### Fixed Import Error in cartReducers.js

- Corrected the import statement in `cartReducers.js` to use the correct constant name `CART_ADD_ITEM`.

```javascript
import { CART_ADD_ITEM } from '../constants/cartConstants'
```

### Fixed Navigation Error in CartScreen

- Replaced the usage of `match` and `location` with `useParams`, `useLocation`, and `useNavigate` from `react-router-dom` in the `CartScreen` component to fix the runtime error.

```javascript
import { useParams, useLocation, useNavigate } from 'react-router-dom';

function CartScreen() {
  const { id: productId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  // ...existing code...
}
```

### Updated Route for CartScreen

- Updated the route for `CartScreen` in `App.js` to make the `id` parameter optional.

```javascript
<Route path='/cart/:id?' element={<CartScreen />} />
```

### Added Styling for Shopping Cart Links

- Added CSS styles to remove the underline from shopping cart links and only show underline on hover.

```css
.cart-link {
    text-decoration: none;
    color: inherit;
}

.cart-link:hover {
    text-decoration: underline;
}
```

### Added Remove from Cart Functionality

- Added functionality to remove items from the cart in the `CartScreen` component.

```javascript
const removeFromCartHandler = (id) => {
  dispatch(removeFromCart(id))
}
```

### Installed djangorestframework-simplejwt

- Installed `djangorestframework-simplejwt` for JWT authentication in the Django backend.

```sh
pip install djangorestframework-simplejwt
```

### Using Postman for Testing

- Use Postman to test the API endpoints. Postman is a popular tool for testing APIs.

```sh
# Install Postman from https://www.postman.com/downloads/
```

### Updated UserSerializer

- Updated the `UserSerializer` to include additional fields and added `UserSerializerWithToken` for JWT authentication.

```python
class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ["id", "_id", "username", "email", "name", "isAdmin"]

    def get__id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_name(self, obj):
        name = obj.first_name
        if name == "":
            name = obj.email
        return name

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ["id", "_id", "username", "email", "name", "isAdmin", "token"]

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token)
```

### Updated Views for JWT Authentication

- Updated the views to use `UserSerializerWithToken` for JWT authentication.

```python
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(this.user).data
        for k, v in serializer.items():
            data[k] = v

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
```

### Added User Registration and Profile Endpoints

- Added endpoints for user registration and profile retrieval in `user_views.py`.

```python
@api_view(["POST"])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name=data["name"],
            username=data["email"],
            email=data["email"],
            password=make_password(data["password"]),
        )

        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {"detail": "User with this email already exists"}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)
```

### Fixed Navigation Error in LoginScreen

- Replaced the usage of `history` with `useNavigate` from `react-router-dom` in the `LoginScreen` component to fix the runtime error when navigating after login.

```javascript
import { useNavigate } from 'react-router-dom';

function LoginScreen() {
  // ...existing code...
  const navigate = useNavigate();
  // ...existing code...
  useEffect(() => {
    if (userInfo) {
      navigate(redirectPath);
    }
  }, [navigate, userInfo, redirectPath]);
  // ...existing code...
}
```

### Added Error and Loading States in LoginScreen

- Added error and loading states to the `LoginScreen` component to display appropriate messages and loaders during the login process.

```javascript
import Loader from '../components/Loader';
import Message from '../components/Message';

function LoginScreen() {
  // ...existing code...
  const { error, loading, userInfo } = userLogin;
  // ...existing code...
  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      // ...existing code...
    </FormContainer>
  );
}
```

### Updated Redux Action for User Login

- Updated the `login` action in `userActions.js` to handle user login and store user information in local storage.

```javascript
import axios from 'axios';
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL } from '../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = { headers: { 'Content-type': 'application/json' } };

    const { data } = await axios.post('/api/users/login', { username: email, password }, config);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
    });
  }
};
```

### Updated README Structure

- Updated the README file to include recent updates and improvements made to the project.

```markdown

### Fixed Navigation Error in LoginScreen

- Replaced the usage of `history` with `useNavigate` from `react-router-dom` in the `LoginScreen` component to fix the runtime error when navigating after login.

### Added Error and Loading States in LoginScreen

- Added error and loading states to the `LoginScreen` component to display appropriate messages and loaders during the login process.

### Updated Redux Action for User Login

- Updated the `login` action in `userActions.js` to handle user login and store user information in local storage.
```

- Updated the Header component to display a user dropdown with **Profile** and **Logout** options.
- Integrated logout functionality using Redux dispatch.
- Adjusted the routing implementation to be compatible with react-router-dom v6.
- Replaced deprecated usage of LinkContainer in favor of React Bootstrap's `as={Link}` prop where necessary.
- Fixed the user registration endpoint by ensuring the registration URL includes a trailing slash (`/api/users/register/`) to avoid POST redirection errors.
- Disabled the bootstrap source map warning in the frontend by adding an `// eslint-disable-next-line` comment above the bootstrap CSS import.
- Added a registration screen and updated the routing to include it.
- Implemented logout functionality in the Header which removes user info from local storage and dispatches the logout action.
- Added ProfileScreen component to display user profile and update user details.
- **Updated ProfileScreen:**  
  • Integrated the update profile action so that when a user updates their details (name, email, password) the  profile is refreshed.  
  • Implemented a reset (`USER_UPDATE_PROFILE_RESET`) after a successful update

- **Fixed Navigation Errors:**
  - Replaced deprecated usage of `history` with `useNavigate` in components such as ProductScreen and LoginScreen.
  - Updated CartScreen to use `useParams`, `useLocation`, and `useNavigate` for smoother navigation.

- **Router Consolidation & CheckoutSteps Update:**
  - Ensured the app is wrapped by a single `<Router>` in `index.js`.
  - Replaced `LinkContainer` with React Bootstrap's `Nav.Link as={Link}` in the CheckoutSteps component for proper routing.

- **PaymentScreen & Order Flow Integration:**
  - Added routes for PaymentScreen and PlaceOrderScreen in the main App.
  - Updated PlaceOrderScreen to compute order summary (items, shipping, tax, total) without directly mutating the Redux store’s state, preventing runtime mutation errors.

- **Redux Store & Cart Reducer Enhancements:**
  - Configured the Redux store to preload state from local storage.
  - Refined the cart reducer to update state immutably and derive calculated values correctly.

- **User Authentication & Profile Improvements:**
  - Improved login, registration, and profile update flows with error/loading state management.
  - Updated JWT authentication implementation using djangorestframework-simplejwt.

- **CheckoutSteps Navigation Fix:**  
  Replaced `LinkContainer` with `Nav.Link` using the `as={Link}` prop in the `CheckoutSteps` component to ensure proper routing within the single `<Router>` context.

- **PaymentScreen Integration:**  
  Added a new route for `PaymentScreen` in `App.js` and updated navigation in the shipping and cart screens accordingly.

- **General Routing & State Management Updates:**  
  Updated navigation functions to use `useNavigate` from React Router v6, and refined Redux integration across authentication and profile update flows.

- **Cart Reducer State Mutation Fix:**  
  Updated the cart reducer to avoid direct state mutations. Now, when items are added or removed, the state is updated immutably and derived values (e.g., itemsPrice) are computed from a new array, ensuring correct behavior and adherence to Redux best practices.

- **Navigation & Routing Enhancements:**  
  Refined the use of `useNavigate` in components such as ShippingScreen and CartScreen by consolidating the Router setup in `index.js` and eliminating duplicate Router wrappers.

- **CheckoutSteps Component Update:**  
  Replaced usage of `LinkContainer` with React Bootstrap's `Nav.Link as={Link}` to ensure correct navigation within the app's single Router context.

- **Fixed State Mutation in PlaceOrderScreen:**
  - Updated the `PlaceOrderScreen` component to calculate `itemsPrice`, `shippingPrice`, `taxPrice`, and `totalPrice` without directly mutating the Redux store's state. This fix ensures that the state is not mutated directly, preventing the uncaught runtime error.

- **Last Job Done:** Streamlined navigation and state management by updating routing to use react-router-dom v6 hooks, refining Redux store initialization with local storage preloading, and enhancing error/loading states in authentication.

- **OrderScreen Enhancements:** Added user name and email in the Shipping section and included status messages for delivery and payment in OrderScreen.

- **Order Endpoints and OrderScreen Integration:** Updated backend order URL patterns and views for improved error handling and status updates, and enhanced the OrderScreen component to display user shipping details and payment/delivery statuses.

- Integrated PayPal payment buttons into the OrderScreen component.
- Added "Powered by PayPal" logo under the Debit or Credit Card button.
- Updated order actions, reducers, and store configuration to handle order creation, details, and payment flows.
- Ensured proper state management and error handling for PayPal SDK loading.
- **Orders in Profile Page:** The ProfileScreen now displays a list of user orders with details (order ID, date, total, and status for payment and delivery).
- Updated order actions to handle create, details, and payment flows.
- Modified order reducers to process order creation, details, and payment states.
- Integrated order reducers into the Redux store configuration.
- Integrated PayPal payment buttons into the OrderScreen component.
- Added "Powered by PayPal" logo under the Debit or Credit Card button.
- Updated order actions, reducers, and store configuration to handle order creation, details, and payment flows.
- Ensured proper state management and error handling for PayPal SDK loading.
- **Added User List Reducer, Action & Screen:** Implemented user list management for administrators to view and manage registered users.
  
- **User Management Enhancements:**
  - Fixed runtime error in EditUserScreen by switching from the deprecated match prop to useParams for extracting the user ID.
  - Added user list management for administrators to view and manage registered users.
  - Integrated user deletion functionality in the UserListScreen component.
  - Updated user actions and reducers to handle user deletion with improved error handling.
  - Fixed duplicate conditional block in EditUserScreen's useEffect to ensure user details are fetched and set correctly.

- **Product Management Enhancements:**
  - Added product deletion functionality for administrators in the ProductListScreen component.
  - Updated product actions and reducers to handle product deletion with proper state management.
  - Added product creation and update functionality for administrators in the ProductListScreen component.
  - Updated product actions and reducers to handle product creation and update with proper state management.
  - Fixed runtime error in ProductEditScreen by correctly using the useParams hook to get the product ID from the URL parameters.

- Fixed updateProduct API endpoint in Django backend to correctly use data.get("name") instead of data.get["name"]

- Added image upload functionality in ProductEditScreen with a Browse button, enabling users to select and upload product images via a dedicated uploadFileHandler.

- Enhanced image upload in ProductEditScreen: Now supports multipart/form-data uploads with a Browse button that appends the product_id, allowing the Django backend to update the product image accordingly.

- **Updated README Documentation:**
  - Streamlined update logs for clarity.
  - Added details on order flow enhancements, PayPal integration, and user authentication improvements.

- **Order Management Enhancements:**
  - Added `productReviewCreateReducer` to handle product review creation in Redux.
  - Updated `orderReducers.js` to include order creation, details, payment, and delivery reducers.
  - Updated `orderConstants.js` to define constants for order actions.
  - Updated `order_urls.py` to include endpoints for order management.
  - Updated `orderActions.js` to handle order creation, details, payment, and delivery actions.
  - Updated `order_views.py` to include views for order management.
  - Enhanced `OrderScreen.js` to display order details, handle payments with PayPal, and mark orders as delivered.
  - Fixed `product_views.py` to ensure proper handling of product reviews and image uploads.
  - Updated `SearchBox.js` to correctly handle navigation and access the current location.
  - Updated `HomeScreen.js` to correctly handle navigation and access the current location.
  - Streamlined update logs for clarity.
  - Added details on order flow enhancements, PayPal integration, and user authentication improvements.

- **Search Box Enhancement:**
  - Implemented auto-navigation in `SearchBox.js` using `useEffect` to update results dynamically as the user types.
  - Modified `getProducts` view in `product_views.py` to filter products based on the search query.
  - Updated `HomeScreen.js` to pass the keyword to the `listProducts` action.

- **Pagination and Search Enhancements:**
  - Updated `Paginate.js` to ensure pagination buttons are styled correctly with active state.
  - Updated `SearchBox.js` to ensure the search button is active and triggers the search functionality correctly.
  - Modified `getProducts` view in `product_views.py` to handle pagination and filtering based on the search query.
  - Updated `HomeScreen.js` to correctly handle pagination and pass the keyword to the `listProducts` action.
  - Updated `OrderScreen.js` to integrate PayPal payment buttons and handle order details, payment, and delivery.
  - Updated Redux store configuration in `store.js` to include order reducers and preloaded state from local storage.
  - Updated order actions, reducers, and constants to handle order creation, details, payment, and delivery flows.
  - Updated backend order URL patterns and views for improved error handling and status updates.

## Product Carousel Update

The Product Carousel component now uses custom styling. The carousel items have updated image styles and captions:
- Images are displayed as block elements with a height of 300px, a padding of 30px, a margin of 40px, and a border-radius of 35%.
- Captions are positioned at the top of the carousel.
- Responsive adjustments are applied when the viewport width is under 900px.

## Merging React Files With Django Project

To integrate the React frontend with the Django backend:
1. Build the React app:
   ```bash
   cd frontend
   npm run build
   ```
2. Copy or move the generated build folder to Django's static files directory (e.g., `backend/static`), or configure Django to include the frontend build directory in `STATICFILES_DIRS` in `backend/settings.py`.
3. Update Django templates to load the React app's index.html as the entry point.
4. During development, you can run the React development server and Django server concurrently.

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- <a href="https://docs.djangoproject.com/en/stable/" target="_blank">Django Documentation</a>
- <a href="https://reactjs.org/" target="_blank">React Documentation</a>
- <a href="https://facebook.github.io/create-react-app/docs/getting-started" target="_blank">Create React App Documentation</a>

## License

This project is licensed under the MIT License.

## Fix Updates

- Modified the Header component to use "ms-auto" for proper right alignment of navigation items.

## Fix Frontend Routing

- The React application now uses HashRouter. As a result, the URL will include a hash (e.g., http://localhost:3000/#/).
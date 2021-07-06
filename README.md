## Arnergy Assessment
A simple Authentication and Authorization nodejs API


### Test locally

* Clone Repo - `git clone https://github.com/femzy123/arnergy.git`
* Install dependencies - `npm install`
* Run - `npm start`

### Public API Access

Follow the link (http://3.142.77.176:3000/)[http://3.142.77.176:3000/]


### Endpoints

  #### Users
    * get all users - `/users`
    * get a user - `/users/:userId`
    * create new user - `/users/new`
    * delete a user - `/users/:userId`

  #### Products
    * get all products - `/products`
    * get a product - `/products/:productId`
    * create new product - `/products/new`
    * delete a product - `/products/:productId`

  #### Categories
    * get all categories - `/categories`
    * get a category - `/categories/:categoryId`
    * create new category - `/categories/new`
    * delete category - `/category/:categoryId`

  #### Messages
    * get all messages - `/messages`
    * get a user - `/messages/:messageId`
    * create new user - `/messages/new`
    * delete user - `/messages/:messageId`


### Permissions

* SUPERVISOR - Manage products, users, messages, categories.
* Employee - View all clients, view a single client, create products, view all products, view a single product, view messages.
* Client - View all products, view a single product, view messages.

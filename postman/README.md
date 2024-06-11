# Pritunl API Authentication (for Postman Pre-Request Script)

Generates authentication headers for API requests

## Setting up the Pre-request Script in Postman

### Step 1: Create a Collection

* Open Postman and click on the **"Collections"** tab on the left sidebar.
* Click on the **"Create New Collection"** button and choose the _(Blank Collection)_ from the menu.
* Rename the collection to **"Pritunl API"**.

### Step 2: Set up the Pre-request Script

* In the **"Pritunl API"** collection, click on the **"..."** menu and select **"Edit"**.
* In the collection settings window, navigate to the **"Scripts"** and choose **"Pre-request"** from the menu.
* Paste the `pre-request script code` into the editor.
* Save the changes.

### Step 3: Configure Credentials

* Open Postman and click on the "Environments" tab on the left sidebar.
* Click on the "New Environment" button.
* Name the environment "Pritunl API Credentials".
* Add the following variables:
  - `PRITUNL_BASE_URL` (your API base URL)
  - `PRITUNL_API_TOKEN` (your API token)
  - `PRITUNL_API_SECRET` (your API secret key)

### Step 4: Create an Example Request

* In the **"Pritunl API"** collection, click on the "Add request" button.
* Select the request method (e.g. GET, POST, PUT, DELETE).
* Enter the request URL.
* Add any necessary headers or body data.

#### Example Requests

* GET Request
  - URL: `/status`

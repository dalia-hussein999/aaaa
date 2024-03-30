<h1>blogPost-App</h1>
<div>
  <h3>Features</h3>
  <ul>
    <li>
      Responsive Design:Implements responsive design for mobile and web views based on Figma designs.
    </li>
    <li>
      DEV.to API Integration: Fetches blog posts from the DEV.to API with pagination support.
    </li>
    <li>
      Error Handling: Gracefully handles HTTP errors with a user-friendly error message and retry mechanism.
    </li>
    <li>
      Loading Indicator: Displays a loading indicator during API requests.
    </li>
    <li>
      Empty State Handling: Displays a message when no blog posts are available.
    </li>
  </ul>
  <h3>Usage</h3>
  <ul>
    <li>
      Navigating the Application: The home page displays a list of blog posts fetched from the DEV.to API. Users can navigate through pages using the pagination controls.
    </li>
    <li>
      Viewing Blog Posts: Clicking on a blog post item will redirect the user to the full post on the DEV.to website.
    </li>
    <li>
      Handling Errors and Retries: In case of an error while fetching blog posts, an error message will be displayed along with a "Retry" button to attempt fetching the data again.
    </li>
  </ul>
  <h3>Setup And Installation</h3>
  <ol>
    <li>Clone the repository
</li>
    <li>Install dependencies: npm install</li>
    <li>Run the project locally: ng serve -o</li>
  </ol>
</div>

<h1>Back Office Backend</h1>

Backend for a Survey page.
Technologies used:
<ul>
  <li>NodeJs</li>
  <li>GraphQL for the API</li>
  <li>PostgreSQL</li>
  <li>Docker for a database container</li>
</ul>

<h2>How to run</h2>

<p>By first, you must run "<strong>docker-compose up --build</strong>" to stand up a container with a Postgres database</p>
<p>Docker will run the scripts located on <em>sql</em> folder</p>

<p>You need to create an <em>.env</em> file with the following keys</p>
<ul>
  <li>DATABASE_URL <em>(required)</em></li>
  <li>NODE_ENV <em>(required)</em></li>
  <li>SECRET <em>(not required)</em></li>
</ul>

<p>This is my personal .env file values</p>

<code>DATABASE_URL=postgres://user:password@localhost:2525/backend</code></br>
<code>NODE_ENV=development</code></br>
<code>SECRET=This_is_my_secret2</code></br>

<p>For last, you must run "<strong>yarn dev</strong>" on the console to run the server.</p>

<h2>How to test</h2>

<p>Once the server is running, you can go to
  <a href="http://localhost:4000/graphql" target="_blank">
    <em>http://localhost:4000/graphql</em>
  </a>  
  to access at the Graphql project playground.
</p>
<p>GraphQL playground allows you to make API resquests (graphql queries and mutations) to test the application.</p>

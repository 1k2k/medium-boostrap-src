import React from "react";
import {Container, Row, Col, Button} from "reactstrap";
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

class PostArticleContent extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>            
              <section className="postContentSection">               
                <div>
                  <div>
                    <h2 >
                      Tutorial: GraphQL Mutations with React
                    </h2>
                    <h3 className="lead font-weight-bold text-secondary">
                      How to modify data on the server and keep the client in sync
                    </h3>
                    <p className="lead">
                      In this tutorial, you’ll learn how to use a simple mutation to
                      modify data on the server and keep the state synchronized on
                      your clients. Specifically, we’ll create a mutation that adds an
                      item to a list.
                    </p>
          					<figure className="figure m-0">
          					  <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=700%C3%97406&w=700&h=406" className="figure-img img-fluid rounded" alt="Code Review"/>
          					  <figcaption className="figure-caption text-center">The mutation call you’ll write in this tutorial.</figcaption>
          					</figure>                    
                    <p >
                      This post is part of a tutorial series on GraphQL + React. Here
                      are the other parts:
                    </p>
                    <ul >
                      <li className="mb-2">
                        <a
                          href="#"
                          className="h5 text-secondary"
                          target="_blank"
                        >
                          <u>Part 1 — The Front-end: declarative data fetching with
                          GraphQL</u>
                        </a>
                      </li>
          					  <li className="mb-2">
                        <a
                          href="#"
                          className="h5 text-secondary"
                          target="_blank"
                        >
                          <u>Part 1 — The Front-end: declarative data fetching with
                          GraphQL</u>
                        </a>
                      </li> 
          					  <li className="mb-2">
                        <a
                          href="#"
                          className="h5 text-secondary"
                          target="_blank"
                        >
                          <u>Part 1 — The Front-end: declarative data fetching with
                          GraphQL</u>
                        </a>
                      </li> 
					  <li className="mb-2">
                        <a
                          href="#"
                          className="h5 text-secondary"
                          target="_blank"
                        >
                          <u>Part 1 — The Front-end: declarative data fetching with
                          GraphQL</u>
                        </a>
                      </li> 
					  <li className="mb-2">
                        <a
                          href="#"
                          className="h5 text-secondary"
                          target="_blank"
                        >
                          <u>Part 1 — The Front-end: declarative data fetching with
                          GraphQL</u>
                        </a>
                      </li> 
                    </ul>
                    <p >
                      In this tutorial, we’ll do the following:
                    </p>
                    <ol >
                      <li className="mb-1">
                        Connect our frontend to the server
                      </li>
					  <li className="mb-1">
                        Connect our frontend to the server
                      </li>
					  <li className="mb-1">
                        Connect our frontend to the server
                      </li>
					  <li className="mb-1">
                        Connect our frontend to the server
                      </li>
                    </ol>
                    <p >
                      Each of these steps is very simple, so completing the whole
                      tutorial should barely take 25 minutes.
                    </p>
                    <p >
                      If you haven’t done Parts 1 and 2 yet, you can either do those
                      first or jump in right here and check out the starting state of
                      this tutorial from the GitHub repo:
                    </p>
                    <pre >
                      git clone
                      <a
                        href="#"                        
                        target="_blank"
                      >
                        https://github.com/apollographql/graphql-tutorial.git
                      </a>
                      <br />cd graphql-tutorial<br />git fetch<br />git checkout
                      t3-start
                    </pre>
                    <blockquote >
                      I recommend that you check out the
                      <code >
                        t3-start
                      </code>
                      branch even if you’ve already done Parts 1 & 2, because we’ve
                      made some changes to
                      <code >
                        App.css
                      </code>
                      and
                      <code >
                        App.js
                      </code>
                      to improve the layout and folder structure of the app.
                    </blockquote>
                    <p >
                      To check if things worked, let’s start the GraphQL server:
                    </p>
                    <pre >
                      cd server<br />npm install && npm start
                    </pre>
                    <pre className="re">
                      # ...<br /># GraphQL Server is now running on
                      <a
                        href="#"                        
                        target="_blank"
                      >
                        http://localhost:4000/graphiql
                      </a>
                    </pre>
                    <p >
                      Let’s also start the dev server that serves our front-end bundle
                      in a separate console:
                    </p>
                    <pre >
                      # assuming that you're in the graphql-tutorial directory
                    </pre>
                    <pre className="re">
                      cd client<br />npm install && npm start
                    </pre>
                    <pre className="re">
                      # ...<br /># The app is running at:<br />#<br />#{"    "}
                      <a
                        href="#"                        
                        rel="nofollow"
                        target="_blank"
                      >
                        http://localhost:3000/
                      </a>
                    </pre>
                    <p >
                      If it worked, you’re ready to write your first mutation!
                    </p>
                    <h4 >
                      1. Connecting the frontend to the server
                    </h4>
                    <p >
                      In the last tutorial, we built our server, but we didn’t connect
                      it to our frontend yet. To do so, we’ll just need to make two
                      minor changes on the server and the client.
                    </p>
                    <p >
                      Because the server is running on port 400o and the client is
                      served from port 3000, we’ll need to enable
                      <a
                        href="#"                        
                        rel="noopener"
                        target="_blank"
                      >
                        CORS
                      </a>
                      on the server. In this tutorial, we’ll use the
                      <code >cors</code>
                      package for Express/Connect:
                    </p>
                    <pre >
                      # in the server directory (not the client!!)
                    </pre>
                    <pre className="re">
                      npm install --save cors
                    </pre>
                    <p >
                      Now we just have to import
                      <code >cors</code> in
                      <code >
                        server/server.js
                      </code>
                      and modify the following line to allow cross-origin requests
                      from our front-end origin:
                    </p>
                    <pre >
                      // ...<br />import cors from 'cors';
                    </pre>
                    <pre className="re">
                      // ... const server = express();<br />server.use('*', cors({"{"}
                      origin: 'http://localhost:3000' {"}"}));
                    </pre>
                    <p >
                      On the frontend, we’ll need to import
                      <code >
                        createNetworkInterface
                      </code>
                      from
                      <code >
                        react-apollo
                      </code>
                      and then replace our
                      <code >
                        mockNetworkInterface
                      </code>
                      with one that connects to the server:
                    </p>
                    <pre >
                      // client/src/App.js
                    </pre>
                    <pre className="re">
                      import {"{"}
                      <br />
                      {"  "}ApolloClient,<br />
                      {"  "}ApolloProvider,<br />
                      {"  "}createNetworkInterface, // this line is new!<br />
                      {"}"} from 'react-apollo';
                    </pre>
                    <p >
                      You can remove all the code that was used to create the
                      <code >
                        mockNetworkInterface
                      </code>
                      (including the imports) and replace it with the following:
                    </p>
                    <pre >
                      const networkInterface = createNetworkInterface({"{"} <br />
                      {"  "}uri: '<a
                        href="#"                        
                        rel="nofollow"
                        target="_blank"
                      >
                        http://localhost:4000/graphql'
                      </a>,<br />
                      {"}"});
                    </pre>
                    <pre className="re">
                      const client = new ApolloClient({"{"}
                      <br />
                      {"  "}networkInterface,<br />
                      {"}"});
                    </pre>
                    <p >
                      Your client is now connected to the server, and you should see
                      the following at
                      <a
                        href="#"                        
                        target="_blank"
                      >
                        localhost:3000
                      </a>:
                    </p>
					<figure className="figure m-0">
					  <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=700%C3%97406&w=700&h=406" className="figure-img img-fluid rounded" alt="Code Review"/>
					  <figcaption className="figure-caption text-center">The mutation call you’ll write in this tutorial.</figcaption>
					</figure>
                    
                    <h4 >
                      2. Defining the GraphQL mutation on the server
                    </h4>
                    <p >
                      Now that the client is hooked up to the server, we can get
                      started on the real task — writing a mutation to add a channel
                      to our list of channels.
                    </p>
                    <p >
                      First, we’ll define the mutation in our schema by adding it in
                      <code >
                        server/src/schema.js
                      </code>:
                    </p>
                    <pre >
                      const typeDefs = `<br />type Channel {"{"}
                      <br />
                      {"  "}id: ID!{"                "}# "!" denotes a required field<br />
                      {"  "}name: String<br />
                      {"}"}
                      <br />
                      <br />type Query {"{"}
                      <br />
                      {"  "}channels: [Channel]{"    "}# "[]" means this is a list of
                      channels<br />
                      {"}"}
                    </pre>
                    <pre className="re">
                      # The mutation root type, used to define all mutations.<br />type
                      Mutation {"{"}
                      <br />
                      {"  "}# A mutation to add a new channel to the list of channels<br />
                      {"  "}addChannel(name: String!): Channel<br />
                      {"}"}
                      <br />`;
                    </pre>
                    <p >
                      The new
                      <code >Mutation</code>
                      type that we just added defines a single mutation — <code >
                        addChannel
                      </code> — which takes a single argument, the name of the new
                      channel. The mutation returns a channel object, which we can
                      then select fields on, just as with a query. Here’s an example
                      of a valid mutation:
                    </p>
                    <pre >
                      # an example mutation call:<br />mutation {"{"}
                      <span >
                        <br />
                        {"  "}addChannel(name: "basketball"){"{"}
                        <br />
                        {"    "}id<br />
                        {"    "}name<br />
                        {"  "}
                        {"}"}
                      </span>
                      <br />
                      {"}"}
                    </pre>
                    <p >
                      Of course this mutation won’t do anything until we define a
                      resolver function for it. Our resolve functions live in
                      <code >
                        server/src/resolvers.js
                      </code>, so let’s head over there and add a resolve function for
                      our new
                      <code >addChannel</code>
                      mutation. The resolve function has to take the name provided as
                      an argument, and generate an id for the new channel before
                      adding it to the existing list.
                    </p>
                    <p >
                      Let’s change
                      <code >
                        server/src/resolvers.js
                      </code>
                      to add a new
                      <code >nextId</code>
                      variable and define the resolver for
                      <code >
                        Mutation.addChanel
                      </code>:
                    </p>
                    <pre >
                      const channels = /* ... */<br />let nextId = 3;
                    </pre>
                    <pre className="re">
                      export const resolvers = {"{"}
                      <br />
                      {"  "}Query: {"{"}
                      <br />
                      {"    "}channels: () => {"{"}
                      <br />
                      {"      "}return channels;<br />
                      {"    "}
                      {"}"},<br />
                      {"  "}
                      {"}"},<br />
                      {"  "}Mutation: {"{"}
                      <br />
                      {"    "}addChannel: (root, args) => {"{"}
                      <br />
                      {"      "}const newChannel = {"{"} id: nextId++, name: args.name
                      {"}"};<br />
                      {"      "}channels.push(newChannel);<br />
                      {"      "}return newChannel;<br />
                      {"    "}
                      {"}"},<br />
                      {"  "}
                      {"}"},<br />
                      {"}"};
                    </pre>
                    <p >
                      As you can see, the resolver just pushes a new channel to
                      <code >channels</code>,
                      increments the
                      <code >nextId</code> and
                      returns the newly created channel. If you head over to
                      <a
                        href="#"                        
                        target="_blank"
                      >
                        localhost:4000/graphiql
                      </a>, you should be able to run the example mutation from above
                      and get a response.
                    </p>
          					<figure className="figure m-0">
          					  <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=579%C3%97231&w=579&h=231" className="figure-img img-fluid rounded" alt="Code Review"/>
          					  <figcaption className="figure-caption text-center">The mutation call you’ll write in this tutorial.</figcaption>
          					</figure>                    
                    <p >
                      If you reload your client app on localhost:3000, you should now
                      see the “basketball” channel show up.
                    </p>
          					<figure className="figure m-0">
          					  <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=373%C3%97231&w=373&h=231" className="figure-img img-fluid rounded" alt="Code Review"/>
          					  <figcaption className="figure-caption text-center">The mutation call you’ll write in this tutorial.</figcaption>
          					</figure>  
                    
                    <blockquote >
                      <strong >
                        Note:
                      </strong>
                      The channels are currently stored in memory only, so every time
                      you restart the server, the newly added channels will disappear.
                      We’ll hook things up to persistent storage in a future tutorial.
                    </blockquote>
                    <h4 >
                      3. Calling the mutation from a React component
                    </h4>
                    <p >
                      Now that we’ve verified that the mutation is working on the
                      server, let’s write the necessary code to call it from the
                      client. First, we’ll create an input component in
                      <code >
                        src/components/AddChannel.js
                      </code>:
                    </p>
                    <pre >
                      import React from 'react';
                    </pre>
                    <pre className="re">
                      const AddChannel = () => {"{"}
                      <br />
                      {"  "}const handleKeyUp = (evt) => {"{"}
                      <br />
                      {"    "}if (evt.keyCode === 13) {"{"}
                      <br />
                      {"      "}console.log(evt.target.value);<br />
                      {"      "}evt.target.value = '';<br />
                      {"    "}
                      {"}"}
                      <br />
                      {"  "}
                      {"}"};
                    </pre>
                    <pre className="re"> </pre>
                    <p >
                      That’s it; you’ve implemented our first GraphQL mutation!
                    </p>
                    <p >
                      Of course this will only update the UI after you make a
                      mutation. If the mutation was initiated by another client, you
                      won’t find out until you do a mutation of your own and refetch
                      the list from the server. Most of the time that’s not an issue,
                      but for real-time apps Apollo has a nice trick up its sleeve to
                      transparently propagate updates to all clients with almost no
                      effort for the programmer: Polling queries.
                    </p>
                    <p >
                      In order to turn it on, simply pass the
                      <code >
                        pollInterval
                      </code>
                      option with your
                      <code >
                        channelsListQuery
                      </code>
                      in
                      <code >
                        src/components/ChannelsListWithData.js
                      </code>:
                    </p>
                    <pre >
                      export default graphql(channelsListQuery, {"{"}
                      <br />
                      {"  "}options: {"{"} pollInterval: 5000 {"}"},<br />
                      {"}"})(ChannelsList);
                    </pre>
                    <p >
                      With this simple change, Apollo will rerun the query every 5
                      seconds, and your UI will be updated with the latest list of
                      channels. You can test this by opening a new browser window and
                      adding a channel there. The new channel should appear in the
                      other window after a small delay.
                    </p>
                  </div>
                </div>
              </section>
              <section>
                <div>
                  <hr className="section-divider" />
                </div>
                <div >
                  <div >
                    <p >
                      Congratulations, you’ve reached the end of the third step in the
                      GraphQL + React tutorial! You’ve added a mutation to your
                      GraphQL schema, wrote a resolver for it, called the mutation
                      from a React component and made sure the UI gets updated by
                      refetching and polling. Together with Parts 1 & 2 of this
                      tutorial series you’re now familiar with all the basics of
                      writing a complete React + GraphQL app with Apollo.
                    </p>
                    <p >
                      To learn how to make your mutations more efficient and
                      apparently faster, continue on to the next part, where you’ll
                      learn about optimistic UI and store updates!
                    </p>
                    <p >
                      <strong >
                        Part 4:
                      </strong>
                      <a
                        href="#"
                        
                        target="_blank"
                      >
                        GraphQL Mutations with optimistic UI and client side store
                        updates
                      </a>
                    </p>
                    <blockquote >
                      <em >
                        If you liked this tutorial and want to keep learning about
                        Apollo and GraphQL, make sure to click the “Follow” button
                        below, and follow us on Twitter at
                      </em>
                      <a
                        href="#"
                        
                        rel="noopener"
                        target="_blank"
                      >
                        <em >
                          @apollographql
                        </em>
                      </a>
                      <em > and </em>
                      <a
                        href="#"
                        
                        rel="noopener"
                        target="_blank"
                      >
                        <em >@helferjs</em>
                      </a>
                      <em >.</em>
                    </blockquote>
                    <figure className="p-4">
                          <div className="list-page kabuki site-wrapper ">
                             <div className="site-wrapper-inner">
                                <div className="text-center">
                                   <div className="list-image">
                                      <img className="img-responsive" src="https://ucarecdn.com/9987b805-e10c-4afa-882f-75db342232a4/"/>
                                   </div>
                                   <h1 className="list-page-title as_embed">
                                      Join us! 
                                   </h1>
                                   <div className="list-desc show-desc-mobile"></div>
                                   <div className="clearfix">
                                      <form id="form_signup" className="list-signup-form">
                                         <InputGroup className="fly-label">
                                            <Input type="email" id="email" placeholder="yourname@example.com" />
                                            <InputGroupAddon addonType="append">
                                              <Button color="primary">Sign up</Button>
                                            </InputGroupAddon>
                                          </InputGroup>
                                      </form>
                                   </div>
                                </div>
                             </div>
                          </div>
                    </figure>
                  </div>
                </div>
              </section>
          </Col>
        </Row>        
      </Container>
    );
  }
}

export default PostArticleContent;

import React, { Component } from "react";
import { Grid, Card } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { news } from "../../dbs/db_news";
import Search from "./search";
import { Helmet } from "react-helmet";

export default class NewsScreen extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Skoltech CDISE | News</title>
        </Helmet>

        <Grid stackable>
          <Search />
          <Grid.Row columns={2}>
            {news.map((a, index) => {
              return (
                <Grid.Column key={index} style={{ marginBottom: '20px' }}>
                  <Link to="">
                    <Card
                      link
                      style={{ height: '100%' }}
                      fluid
                    >
                      <Card.Content>
                        <Card.Header>{a.content.title}</Card.Header>
                        <div style={{ background: 'rgba(0,0,0,0.05)', height: '1px', margin: '0.5em -1em 1em' }} />
                        <Card.Description>{a.content.text}</Card.Description>
                      </Card.Content>
                      <Card.Content extra style={{ padding: '0.5em 1em' }}>
                        <Grid>
                          <Grid.Row>
                            <Grid.Column style={{ textAlign: 'left' }} width={10}>{a.content.tags.map((tag) => ('#'+tag+' '))}</Grid.Column>
                            <Grid.Column style={{ textAlign: 'right' }} width={6}>{a.content.date}</Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </Card.Content>
                    </Card>
                  </Link>
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

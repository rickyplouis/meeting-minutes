import React from 'react'
import { List, Header } from 'semantic-ui-react'

export default class Agenda extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      text: 'Hello World'
    }
  }

  render(){
    return(
      <List>
        <Header as="h2">Meeting Agenda</Header>
        <List.Item>
          <List.Icon  />
          <List.Content>
            <List.Header>Topics</List.Header>
            <List.Description>Source files for project</List.Description>
            <List.List>
              <List.Item>
                <List.Icon  />
                <List.Content>
                  <List.Header>Marketing</List.Header>
                  <List.Description>Something about marketing</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon  />
                <List.Content>
                  <List.Header>Sales</List.Header>
                  <List.Description>Something else about sales</List.Description>
                  <List.List>
                    <List.Item>
                      <List.Icon  />
                      <List.Content>
                        <List.Header>default</List.Header>
                        <List.Description>Default packaged theme</List.Description>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Icon  />
                      <List.Content>
                        <List.Header>my_theme</List.Header>
                        <List.Description>Packaged themes are also available in this folder</List.Description>
                      </List.Content>
                    </List.Item>
                  </List.List>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon  />
                <List.Content>
                  <List.Header>Engineering</List.Header>
                  <List.Description>Something about engineering</List.Description>
                </List.Content>
              </List.Item>
            </List.List>
          </List.Content>
        </List.Item>
      </List>
    )
  }
}

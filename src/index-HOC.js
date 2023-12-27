import React from 'react';
import ReactDOM from 'react-dom/client';

/*
* The task was to write the withList function (HOC)
* */

function withList(ItemComponent) {

  class NewComponent extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map((item, key) => {
            return (
              <li key={key}>
                <ItemComponent item={{ href: item.href, text: item.text }}  />
              </li>
            )
          })}
        </ul>
      )
    }
  }

  return NewComponent;
}

class Link extends React.Component {
  render() {
    return <a href={ this.props.item.href }>{ this.props.item.text }</a>;
  }
}

const LinkList = withList(Link);

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");

if(LinkList) {
  let items = [{ href:"https://www.google.com", text:"Google" },
    { href:"https://www.bing.com", text:"Bing" }];
  const root = ReactDOM.createRoot(rootElement);

  root.render(<LinkList items={items} />);
  setTimeout(() => {
    console.log(rootElement.innerHTML);
  });
}

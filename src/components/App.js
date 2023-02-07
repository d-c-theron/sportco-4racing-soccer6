import React from "react";

class App extends React.Component {
  state = {
    PoolOfTheDay: { type: "Test", date: "", title: "Nothing", author: "", strap_line: "" },
  };

  componentDidMount() {
    this.loadArtilces();
  }

  loadArtilces = async () => {
    const articles = await (await fetch(`/api/GetArticles`)).json();
    this.setState({
      PoolOfTheDay: {
        type: articles.value[0].PartitionKey,
        date: articles.value[0].RowKey,
        title: articles.value[0].title,
        author: articles.value[0].author,
        strap_line: articles.value[0].strap_line,
      },
    });
  };

  render() {
    return (
      <div>
        {this.PoolOfTheDay.title}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { tabs: null, activeTab: null };
  }
  componentDidMount() {
    const { data } = this.props;
    const activeTab = data.filter((tabData) => {
      return tabData.state === "active";
    })[0];
    this.setState({ tabs: data, activeTab: activeTab.id });
  }
  handleClick(event, currentTab) {
    event.preventDefault();
    const newTabs = this.state.tabs;
    newTabs.forEach((tab, index) => {
      newTabs[index].state = tab.id === currentTab.id ? "active" : "inactive";
    });
    this.setState({ tabs: newTabs, activeTab: currentTab.id });
  }
  renderTabs() {
    const { tabs } = this.state;
    return (
      <ul className="nav nav-tabs">
        {tabs.map((tab, index) => {
          return (
            <li className="nav-item" key={index}>
              <a
                href="/"
                className={`nav-link ${tab.state}`}
                onClick={(event) => this.handleClick(event, tab)}
              >
                {tab.name}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
  render() {
    const { tabs, activeTab } = this.state;
    const tabToShow = activeTab - 1;
    return (
      <div>
        {tabs && this.renderTabs()}
        {tabs && tabs[tabToShow].content()}
      </div>
    );
  }
}

export default Tabs;

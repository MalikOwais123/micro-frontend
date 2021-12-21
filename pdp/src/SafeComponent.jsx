import React from "react";

// ERROR BOUNDARIES;

export default class SafeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <>Some thing went wrong</>;
    }
    return this.props.children;
  }
}

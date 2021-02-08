import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/index';
/*Pages*/
import Home from './pages/home/index';
import Documentation from './pages/documentation/index';
import About from './pages/about/index';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/" component={Documentation} />
          <Route path="/" component={About} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;

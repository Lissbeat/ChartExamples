import React from 'react';

import Chart1  from './components/Chart1';
import Chart2  from './components/Chart2';
import Chart3  from './components/Chart3';
import {Header} from "./style-components/Header";
import {PageContainer, PageDiv, Card} from "./style-components/PageContainer";


const App = () => {
  return (
    <PageDiv>
      {/* header component */}
      <Header></Header>
      {/* wrap components inside a page container  */}
      <PageContainer>
          {/* three different chart examples*/}
        <Card><Chart1></Chart1>  </Card>
        <Card style= {{backgroundColor: "lightblue"}}><Chart2></Chart2>  </Card>
        <Card style= {{backgroundColor: "lightpink"}}><Chart3></Chart3>  </Card>
      </PageContainer>
    </PageDiv>
  );
}

export default App;
